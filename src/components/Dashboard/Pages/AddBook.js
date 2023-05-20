import React, { useState } from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import Auth from "../../../hooks/auth";
import Layout from "../Layout";

export default function AddBook() {
  const Authentication = Auth();
  if (!Authentication) {
    window.location.href = "/signin";
  }
  const user = JSON.parse(localStorage.getItem("user"));

  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [publisher, setPublisher] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [ISBN, setISBN] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const check = (e) => {
    e.preventDefault();
    const Book = {
      title: book,
      author,
      publicationYear,
      publisher,
      description,
      price,
      ISBN,
      category,
      addBy: user._id,
      condition,
      image,
    };
    fetch("http://localhost:5000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Authentication.token}`,
      },
      body: JSON.stringify(Book),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setError("");
          alert("Book Added Successfully");
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div className="lg:m-10">
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form
          onSubmit={check}
          className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10"
        >
          <h1 className="mb-6 text-xl font-semibold lg:text-2xl">Add Book</h1>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className=""> Book Name </label>
              <Input
                onChange={(e) => setBook(e.target.value)}
                type="text"
                placeholder="Book Name"
                value={book || ""}
                required
              />
            </div>
            <div>
              <label>Author Name</label>
              <Input
                type="text"
                placeholder="Author Name"
                required
                value={author || ""}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Publication Year</label>
              <Input
                onChange={(e) => setPublicationYear(e.target.value)}
                type="Date"
                placeholder="Publication Year"
                required
              />
            </div>
            <div>
              <label>Publisher Name</label>
              <Input
                onChange={(e) => setPublisher(e.target.value)}
                type="text"
                value={publisher || ""}
                placeholder="Publisher Name"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Price</label>
              <Input
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="Price"
                required
              />
            </div>
            <div>
              <label>ISBN</label>
              <Input
                onChange={(e) => setISBN(e.target.value)}
                type="text"
                placeholder="ISBN"
                required
              />
            </div>
          </div>
          <div>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Description"
              rows="5"
            ></textarea>
          </div>
          <div>
            <label>Image</label>
            <Input
              onChange={(e) => setImage(e.target.value)}
              type="text"
              placeholder="Image"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="border w-40 border-gray-300 rounded-md p-2"
              >
                <option>Uncategories</option>
                <option>Novel</option>
                <option>Comic</option>
                <option>Science</option>
                <option>History</option>
                <option>Biography</option>
              </select>
            </div>
            <div>
              <select
                onChange={(e) => setCondition(e.target.value)}
                className="border w-40 selection:border-gray-100 rounded-md p-2"
              >
                <option value="new">New</option>
                <option value="used">Used</option>
              </select>
            </div>
          </div>
          <div>
            <Button type="submit" label="Add Book" />
          </div>
        </form>
      </div>
    </Layout>
  );
}
