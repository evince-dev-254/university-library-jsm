"use server";

import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { bookSchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

export async function createBook(formData: FormData) {
  const validatedFields = bookSchema.safeParse({
    title: formData.get("title"),
    author: formData.get("author"),
    description: formData.get("description"),
    isbn: formData.get("isbn"),
    coverColor: formData.get("coverColor"),
    coverImage: formData.get("coverImage"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, author, description, isbn, coverColor, coverImage } = validatedFields.data;

  try {
    await db.insert(books).values({
      title,
      author,
      description,
      isbn,
      coverColor,
      coverImage,
    });

    revalidatePath("/admin/books");
    redirect("/admin/books");
  } catch (error) {
    console.error("Error creating book:", error);
    throw new Error("Failed to create book");
  }
}

export async function updateBook(id: string, formData: FormData) {
  const validatedFields = bookSchema.safeParse({
    title: formData.get("title"),
    author: formData.get("author"),
    description: formData.get("description"),
    isbn: formData.get("isbn"),
    coverColor: formData.get("coverColor"),
    coverImage: formData.get("coverImage"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { title, author, description, isbn, coverColor, coverImage } = validatedFields.data;

  try {
    await db.update(books)
      .set({
        title,
        author,
        description,
        isbn,
        coverColor,
        coverImage,
        updatedAt: new Date(),
      })
      .where(eq(books.id, id));

    revalidatePath("/admin/books");
    redirect("/admin/books");
  } catch (error) {
    console.error("Error updating book:", error);
    throw new Error("Failed to update book");
  }
}

export async function deleteBook(id: string) {
  try {
    await db.delete(books).where(eq(books.id, id));
    revalidatePath("/admin/books");
  } catch (error) {
    console.error("Error deleting book:", error);
    throw new Error("Failed to delete book");
  }
}
