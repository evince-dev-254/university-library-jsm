import React from 'react'
import BookCover from '../BookCover'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { Button } from './button'

const BookCard = ({ id,
    title,
    author,
    genre,
    color,
    cover, 
    isLoanedBook = false,
}: Book & { isLoanedBook?: boolean }) => {
    return (
        <li className={cn("w-full", isLoanedBook && "xs:w-52")}>
            <Link
                href={`/books/${id}`}
                className={cn("block", isLoanedBook && "w-full flex flex-col items-center")}
            >
                <div className="w-full flex justify-center">
                    <BookCover coverColor={color} coverImg={cover} />
                </div>
                <div className={cn("mt-4 text-center", !isLoanedBook && "max-w-48 mx-auto")}>
                    <p className="book-title">{title}</p>
                    <p className="book-genre">{genre}</p>
                </div>
                {isLoanedBook} && (
                    <div className="mt-3 w-full">
                        <div className="book-loaned">
                            <img src="/icons/calendar.svg" alt="calendar" width={20} height={20} />
                        </div>

                        <p className="text-light-100">11 days left to return </p>

                    </div>
                    <Button className="book-btn">Download  Receipt</Button>
                )
            </Link>
        </li>
    );
};

export default BookCard;