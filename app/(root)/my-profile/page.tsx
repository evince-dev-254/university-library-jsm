import React from "react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";

async function handleLogout() {
  "use server";
  await signOut();
}

const Page = () => {
  console.log("My Profile page is rendering");
  
  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-4">My Profile</h1>
        <p className="text-gray-300">Welcome to your profile page!</p>
      </div>
      
      <form action={handleLogout} className="mb-10">
        <Button type="submit">Logout</Button>
      </form>

      <BookList title="Borrowed Books" books={sampleBooks} />
    </>
  );
};
export default Page;
