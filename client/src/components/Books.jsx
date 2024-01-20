/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const Books = ({ role }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/book/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex justify-center items-center flex-wrap -mx-4 book-list">
      {books.map((book) => (
        <div
          key={book._id}
          className="m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8"
        >
          <BookCard key={book._id} book={book} role={role} />
        </div>
      ))}
    </div>
  );
};

export default Books;
