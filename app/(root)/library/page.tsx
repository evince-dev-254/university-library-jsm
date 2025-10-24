import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";

const Library = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Library</h1>
        <p className="text-gray-300 text-lg">
          Browse our extensive collection of books and discover your next great read.
        </p>
      </div>
      
      <BookList 
        title="All Books"
        books={sampleBooks}
        containerClassName="mt-8"
      />
    </div>
  );
};

export default Library;
