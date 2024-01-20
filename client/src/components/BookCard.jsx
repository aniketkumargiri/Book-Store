/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book, role }) => {
  const { name, author, imageUrl } = book;

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{author}</p>
      </div>

      {role === "admin" && (
        <div className="px-6 py-4 flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to={`/book/${book._id}`}>Edit</Link>
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            <Link to={`/delete/${book._id}`}>Delete</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default BookCard;
