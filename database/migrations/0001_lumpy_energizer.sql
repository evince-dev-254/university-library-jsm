CREATE TABLE "books" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"author" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"isbn" varchar(20) NOT NULL,
	"cover_color" varchar(7) NOT NULL,
	"cover_image" varchar(500),
	"status" "status" DEFAULT 'active',
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "books_id_unique" UNIQUE("id"),
	CONSTRAINT "books_isbn_unique" UNIQUE("isbn")
);
--> statement-breakpoint
CREATE TABLE "borrows" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"book_id" uuid NOT NULL,
	"status" "borrow_status" DEFAULT 'borrowed',
	"borrow_date" date DEFAULT now() NOT NULL,
	"return_date" date,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "borrows_id_unique" UNIQUE("id")
);
--> statement-breakpoint
ALTER TABLE "borrows" ADD CONSTRAINT "borrows_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "borrows" ADD CONSTRAINT "borrows_book_id_books_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."books"("id") ON DELETE no action ON UPDATE no action;