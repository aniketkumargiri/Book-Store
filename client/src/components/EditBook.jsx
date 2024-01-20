/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3001/book/book/" + id)
      .then((res) => {
        setName(res.data.name);
        setAuthor(res.data.author);
        setImageUrl(res.data.imageUrl);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:3001/book/book/" + id,
        {
          name,
          author,
          imageUrl,
        }
      );

      if (response.data.updated) {
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
        <h2 className="text-2xl text-blue-700 font-semibold mb-4">Edit Book</h2>
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
              placeholder="Enter Grade"
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

export default EditBook;
