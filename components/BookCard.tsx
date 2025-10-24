"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { useEmail } from '@/hooks/useEmail';
import { useRouter } from 'next/navigation';

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const [isBorrowing, setIsBorrowing] = useState(false);
  const [isBorrowed, setIsBorrowed] = useState(false);
  const { sendBookBorrowedEmail } = useEmail();
  const router = useRouter();

  const handleBorrow = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (book.available_copies <= 0) {
      toast({
        title: "Book Not Available",
        description: "Sorry, this book is currently not available for borrowing.",
        variant: "destructive",
      });
      return;
    }

    if (isBorrowed) {
      toast({
        title: "Already Borrowed",
        description: "You have already borrowed this book.",
        variant: "destructive",
      });
      return;
    }

    setIsBorrowing(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Calculate return date (14 days from now)
      const returnDate = new Date();
      returnDate.setDate(returnDate.getDate() + 14);
      const returnDateStr = returnDate.toLocaleDateString();

      // Send email notification
      await sendBookBorrowedEmail({
        user_name: "User", // In real app, get from auth context
        user_email: "user@example.com", // In real app, get from auth context
        book_title: book.title,
        book_author: book.author,
        borrow_date: new Date().toLocaleDateString(),
        return_date: returnDateStr,
      });

      setIsBorrowed(true);
      
      toast({
        title: "Book Borrowed Successfully!",
        description: `You have borrowed "${book.title}" by ${book.author}. Please return by ${returnDateStr}.`,
      });
    } catch (error) {
      toast({
        title: "Borrow Failed",
        description: "Failed to borrow the book. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsBorrowing(false);
    }
  };

  const handleViewDetails = () => {
    router.push(`/books/${book.id}`);
  };

  return (
    <div 
      className="book-card bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer hover:bg-white/20 transition-all duration-300 border border-white/20"
      onClick={handleViewDetails}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1 line-clamp-2">{book.title}</h3>
          <p className="text-gray-300 text-sm">By {book.author}</p>
        </div>
        <div className="flex items-center gap-1 ml-2">
          <img src="/icons/star.svg" alt="star" width={16} height={16} />
          <span className="text-yellow-400 text-sm font-medium">{book.rating}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">{book.genre}</span>
        <span className="text-xs text-gray-300">
          {book.available_copies}/{book.total_copies} available
        </span>
      </div>
      
      <p className="text-sm text-gray-300 mb-4 line-clamp-2">{book.description}</p>
      
      <Button 
        onClick={handleBorrow}
        disabled={isBorrowing || isBorrowed || book.available_copies <= 0}
        className={`w-full text-xs py-2 ${
          isBorrowed 
            ? 'bg-green-200 text-green-800 hover:bg-green-300' 
            : book.available_copies <= 0
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
            : 'bg-yellow-200 text-gray-800 hover:bg-yellow-300'
        }`}
      >
        {isBorrowing 
          ? 'BORROWING...' 
          : isBorrowed 
          ? 'BORROWED' 
          : book.available_copies <= 0
          ? 'NOT AVAILABLE'
          : 'BORROW'
        }
      </Button>
    </div>
  );
};

export default BookCard;