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



