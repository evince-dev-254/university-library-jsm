import React from "react";
import BookOverview from "@/components/BookOverview";
import BookVideo from "@/components/BookVideo";
import { sampleBooks } from "@/constants";

const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  
  // Use sample data instead of database
  const bookDetails = sampleBooks.find(book => book.id === id);

  if (!bookDetails) {
    return <div>Book not found</div>;
  }

  return (
    <>
      <BookOverview {...bookDetails} />

      <div className="book-details">
        <div className="flex-[1.5]">
          <section className="flex flex-col gap-7">
            <h3>Video</h3>
            <BookVideo videoUrl="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" />
          </section>
          <section className="mt-10 flex flex-col gap-7">
            <h3>Summary</h3>
            <div className="space-y-5 text-xl text-light-100">
              <p>{bookDetails.description}</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Page;
