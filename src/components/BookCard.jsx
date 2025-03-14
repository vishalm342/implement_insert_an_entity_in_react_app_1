/* eslint-disable react/prop-types */
// src/components/BookCard.jsx

// eslint-disable-next-line no-unused-vars
import React from "react";
import "./BookCard.css"; // Import the CSS for styling

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={book.coverImage}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {book.title}
        </h2>
        <p className="text-gray-600 mb-2">By {book.author}</p>
        <p className="text-gray-500 text-sm line-clamp-3">{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;
