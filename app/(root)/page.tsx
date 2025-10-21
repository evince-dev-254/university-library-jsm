import { Button } from "@/components/ui/button"
import BookOverview from "@/components/BookOverview"
import BookList from "@/components/BookList"
import { sampleBooks } from "@/constants";
import Image from "next/image";
import { Replace } from "lucide-react";
import { db } from "@/database/drizzle";
import { usersTable } from "@/database/schema";

const Home = async () => {
  const result = await db.select().from(usersTable);

console.log(JSON.stringify(result, null, 2));

  return (
    <>
      <BookOverview {...sampleBooks[0]} />
      <BookList 
        title="popular Books"
        books={sampleBooks}
        containerClassName="mt-8"
      />
    </>
  );
};

export default Home;
