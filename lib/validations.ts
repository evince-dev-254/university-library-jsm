import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  universityId: z.string().min(1, "University ID is required"),
  universityCard: z.instanceof(File, { message: "University card is required" }),
});

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export const bookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  description: z.string().min(1, "Description is required"),
  isbn: z.string().min(1, "ISBN is required"),
  coverColor: z.string().min(1, "Cover color is required"),
  coverImage: z.string().optional(),
});
