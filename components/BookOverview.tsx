"use client";

import React, { useState } from "react";
import Image from "next/image";
import BookCover from "./BookCover";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useEmail } from "@/hooks/useEmail";

interface Props extends Book {
  userId?: string;
}
const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
  id,
  userId,
}: Props) => {
  const [isBorrowing, setIsBorrowing] = useState(false);
  const [isBorrowed, setIsBorrowed] = useState(false);
  const { sendBookBorrowedEmail } = useEmail();

  const handleBorrow = async () => {
    if (available_copies <= 0) {
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
        book_title: title,
        book_author: author,
        borrow_date: new Date().toLocaleDateString(),
        return_date: returnDateStr,
      });

      setIsBorrowed(true);
      
      toast({
        title: "Book Borrowed Successfully!",
        description: `You have borrowed "${title}" by ${author}. Please return by ${returnDateStr}.`,
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

  return (
    <section className="book-overview flex flex-col lg:flex-row gap-6 lg:gap-8 items-start px-4 sm:px-6 lg:px-8">
      {/* Left side - Book details */}
      <div className="flex-1 max-w-2xl px-4 sm:px-0">
        <div className="flex items-center gap-2 mb-4">
          <img src="/icons/book.svg" alt="book" width={20} height={20} className="text-gray-400" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight">
          {title.split(' ').slice(0, -1).join(' ')}
          <br />
          <span className="ml-2 sm:ml-4">{title.split(' ').slice(-1)[0]}</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 text-base sm:text-lg text-gray-300">
          <p>By <span className="font-semibold text-white">{author}</span></p>
          <p>Category <span className="font-semibold text-white">{genre}</span></p>
          <div className="flex items-center gap-1">
            <img src="/icons/star.svg" alt="star" width={20} height={20} />
            <span>{rating}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 text-base sm:text-lg text-gray-300">
          <p>Total Books <span className="font-semibold text-white">{total_copies}</span></p>
          <p>Available Books <span className="font-semibold text-white">{available_copies}</span></p>
        </div>
        
        <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>
        
        <Button 
          onClick={handleBorrow}
          disabled={isBorrowing || isBorrowed || available_copies <= 0}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center gap-2 text-sm sm:text-base font-bold w-full sm:w-auto ${
            isBorrowed 
              ? 'bg-green-200 text-green-800 hover:bg-green-300' 
              : available_copies <= 0
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-yellow-200 text-gray-800 hover:bg-yellow-300'
          }`}
        >
          <img src="/icons/book.svg" alt="book" width={20} height={20} />
          <span>
            {isBorrowing 
              ? 'BORROWING...' 
              : isBorrowed 
              ? 'BORROWED' 
              : available_copies <= 0
              ? 'NOT AVAILABLE'
              : 'BORROW'
            }
          </span>
        </Button>
      </div>

      {/* Right side - Two stacked book covers */}
      <div className="relative flex flex-1 justify-center mt-8 lg:mt-0">
        <div className="relative">
          {/* Front book - sharp and clear */}
          <BookCover 
            variant="wide"
            className="z-10"
            coverColor={color}
            coverImg={cover}
          />
          
          {/* Back book - blurred and tilted */}
          <div className="absolute left-8 sm:left-12 lg:left-16 top-6 sm:top-8 lg:top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover 
              variant="wide"
              coverColor={color}
              coverImg={cover}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverview;
