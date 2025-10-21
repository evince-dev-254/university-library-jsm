import { cn } from "@/lib/utils";
import BookCard from "./ui/BookCard";

interface BookListProps {
  title: string;
  books: Book[];
  containerClassName?: string;
}

const BookList = ({ title, books, containerClassName }: BookListProps) => {
  return (
    <section className={cn("flex flex-col gap-6", containerClassName)}>
      <h2 className="font-bebas-neue text-3xl capitalize text-light-100">
        {title}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {books.map((book) => (
          <BookCard
            key={book.id}
            {...book}
            className="transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:z-20"
          />
        ))}
      </ul>
    </section>
  );
};
export default BookList;
