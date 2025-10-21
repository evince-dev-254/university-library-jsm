import { integer, date, text, boolean, pgTable, uuid, varchar, pgEnum, timestamp } from "drizzle-orm/pg-core";

export const status = pgEnum("status", ["active", "inactive", "pending"]);
export const role = pgEnum("role", ["admin", "user"]);
export const borrowStatus = pgEnum("borrow_status", ["borrowed", "returned"]);

export const usersTable = pgTable("users", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  universityId: integer("university_id").notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  universityCard: varchar("university_card", { length: 255 }).notNull(),
  status: status("status").default("pending"),
  role: role("role").default("user"),
  lastActivityDate: date("last_activity_date").notNull().defaultNow(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  }).notNull().defaultNow(),
});

export const books = pgTable("books", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  title: varchar("title", { length: 255 }).notNull(),
  author: varchar("author", { length: 255 }).notNull(),
  description: text("description").notNull(),
  isbn: varchar("isbn", { length: 20 }).notNull().unique(),
  coverColor: varchar("cover_color", { length: 7 }).notNull(),
  coverImage: varchar("cover_image", { length: 500 }),
  status: status("status").default("active"),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", {
    withTimezone: true,
  }).notNull().defaultNow(),
});

export const borrows = pgTable("borrows", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  userId: uuid("user_id").notNull().references(() => usersTable.id),
  bookId: uuid("book_id").notNull().references(() => books.id),
  status: borrowStatus("status").default("borrowed"),
  borrowDate: date("borrow_date").notNull().defaultNow(),
  returnDate: date("return_date"),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  }).notNull().defaultNow(),
});


