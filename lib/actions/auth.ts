"use server";

import { signUpSchema, signInSchema } from "@/lib/validations";
import { signIn as nextAuthSignIn } from "@/auth";
import { db } from "@/database/drizzle";
import { usersTable } from "@/database/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import ratelimit from "../ratelimit";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signUp(formData: FormData) {
  try {
    // Rate limiting with better error handling
    try {
      const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
      const { success } = await ratelimit.limit(ip);

      if (!success) {
        return { success: false, message: "Too many requests. Please try again later." };
      }
    } catch (rateLimitError) {
      console.warn("Rate limiting failed, continuing:", rateLimitError);
      // Continue without rate limiting if it fails
    }

    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      fullName: formData.get("fullName") as string,
      universityId: formData.get("universityId") as string,
      universityCard: formData.get("universityCard") as File,
    };

    // Validate data
    const validatedData = signUpSchema.parse(data);
    
    // Check if user already exists
    const existing = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, validatedData.email))
      .limit(1);
    
    if (existing[0]) {
      return { success: false, message: "User already exists" };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);
    
    // Handle file upload - store just the filename for now
    const fileName = validatedData.universityCard?.name ?? `card_${Date.now()}.jpg`;

    // Insert user into database
    await db.insert(usersTable).values({
      fullName: validatedData.fullName,
      email: validatedData.email,
      universityId: Number(validatedData.universityId),
      password: hashedPassword,
      universityCard: fileName,
    });

    // Auto-sign-in after successful sign-up
    try {
      await nextAuthSignIn("credentials", {
        email: validatedData.email,
        password: validatedData.password,
        redirect: false,
      });
    } catch (signInError) {
      console.warn("Auto sign-in failed, but user was created:", signInError);
      // User was created successfully, just auto sign-in failed
    }

    return { success: true, message: "Account created successfully!" };
  } catch (error) {
    console.error("Sign up error:", error);
    
    // More specific error messages
    if (error instanceof Error) {
      if (error.message.includes("duplicate key")) {
        return { success: false, message: "User already exists" };
      }
      if (error.message.includes("database")) {
        return { success: false, message: "Database error. Please try again." };
      }
    }
    
    return { success: false, message: "Failed to create account. Please try again." };
  }
}

export async function signIn(formData: FormData) {
  try {
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      redirect("/too-fast");
    }
    
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const validatedData = signInSchema.parse(data);
    await nextAuthSignIn("credentials", {
      email: validatedData.email,
      password: validatedData.password,
      redirect: false,
    });
    return { success: true, message: "Signed in successfully!" };
  } catch (error) {
    console.error("Sign in error:", error);
    return { success: false, message: "Failed to sign in" };
  }
}
