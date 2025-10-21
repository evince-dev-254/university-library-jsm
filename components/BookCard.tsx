import React from 'react'

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>By {book.author}</p>
    </div>
  );
};

export default BookCard;