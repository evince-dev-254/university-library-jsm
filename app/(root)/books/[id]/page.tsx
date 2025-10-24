import React from "react";
import BookOverview from "@/components/BookOverview";
import BookVideo from "@/components/BookVideo";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";

const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  
  // Use sample data instead of database
  const bookDetails = sampleBooks.find(book => book.id === id);

  if (!bookDetails) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Book Not Found</h1>
          <p className="text-gray-300">The book you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // Get similar books (same genre, excluding current book)
  const similarBooks = sampleBooks
    .filter(book => book.genre === bookDetails.genre && book.id !== bookDetails.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      <BookOverview {...bookDetails} />

      <div className="book-details px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              <section className="flex flex-col gap-7">
                <h3 className="text-2xl font-bold text-white">Video</h3>
                <BookVideo videoUrl="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" />
              </section>
              
              <section className="flex flex-col gap-7">
                <h3 className="text-2xl font-bold text-white">Summary</h3>
                <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
                  <p>{bookDetails.description}</p>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Book Details</h3>
                <div className="space-y-3 text-gray-300">
                  <div>
                    <span className="font-semibold text-white">Author:</span> {bookDetails.author}
                  </div>
                  <div>
                    <span className="font-semibold text-white">Genre:</span> {bookDetails.genre}
                  </div>
                  <div>
                    <span className="font-semibold text-white">Rating:</span> {bookDetails.rating}/5
                  </div>
                  <div>
                    <span className="font-semibold text-white">Available:</span> {bookDetails.available_copies}/{bookDetails.total_copies} copies
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Books Section */}
          {similarBooks.length > 0 && (
            <div className="mt-12">
              <BookList 
                title={`More ${bookDetails.genre} Books`}
                books={similarBooks}
                containerClassName="mt-6"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
