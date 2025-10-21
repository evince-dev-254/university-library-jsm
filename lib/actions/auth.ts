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
    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      redirect("/too-fast");
    }
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      fullName: formData.get("fullName") as string,
      universityId: formData.get("universityId") as string,
      universityCard: formData.get("universityCard") as File,
    };


    const validatedData = signUpSchema.parse(data);
    // Ensure user doesn't already exist
    const existing = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, validatedData.email))
      .limit(1);
    if (existing[0]) {
      return { success: false, message: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(validatedData.password, 10);
    const fileName = validatedData.universityCard?.name ?? "";

    await db.insert(usersTable).values({
      fullName: validatedData.fullName,
      email: validatedData.email,
      universityId: Number(validatedData.universityId),
      password: hashedPassword,
      universityCard: fileName,
    });

    // Auto-sign-in after successful sign-up so user lands on home
    await nextAuthSignIn("credentials", {
      email: validatedData.email,
      password: validatedData.password,
      redirect: false,
    });
    return { success: true, message: "Account created successfully!" };
  } catch (error) {
    console.error("Sign up error:", error);
    return { success: false, message: "Failed to create account" };
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
