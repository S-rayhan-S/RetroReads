import React, { useEffect, useState } from "react";
import Card from "../Cards/Card";

export default function BestSelling() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setBooks(data.data);
        }
      });
  }, [books._id]);

  return (
    <section className="bg-white text-gray-700">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl my-5 font-bold text-center text-gray-900">
          Recent Books
        </h2>
        <div className="grid grid-cols-2 gap-6 lg:mt-10 lg:grid-cols-4 lg:gap-4">
          {error && <p className="text-red-500 text-center">{error}</p>}
          {books.map((book) => (
            <Card book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
