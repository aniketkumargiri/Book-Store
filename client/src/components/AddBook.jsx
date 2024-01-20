/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/book/addbook", {
        name,
        author,
        imageUrl,
      });

      if (response.data.added) {
        navigate("/books");
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-gray-100 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl text-pink-800 font-semibold mb-4">Add Book</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="book" className="block text-gray-600 mb-2">
              Book Name:
            </label>
            <input
              type="text"
              id="book"
              name="book"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter Book Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block text-gray-600 mb-2">
              Author Name:
            </label>
            <input
              type="text"
              id="author"
              name="author"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter Author Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-600 mb-2">
              Image URL:
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
