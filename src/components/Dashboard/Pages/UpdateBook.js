import React, { useEffect, useState } from "react";
import Auth from "../../../hooks/auth";
import { useParams } from "react-router-dom";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import Layout from "../Layout";

export default function UpdateBook() {
  const { id } = useParams();

  const Authentication = Auth();

  if (!Authentication) {
    window.location.href = "/signin";
  }
  const [books, setBooks] = useState({});

  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/books/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Authentication.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setError("");
          setBooks(data.data);
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  }, [Authentication.token, id]);

  const handleBookTitle = (e) => {
    const title = e.target.value;

    const updateBook = {
      ...books,
      title,
    };
    setBooks(updateBook);
  };

  const handleAuthorName = (e) => {
    const author = e.target.value;
    const updateBook = {
      ...books,
      author,
    };
    setBooks(updateBook);
  };

  const handlePublicationYear = (e) => {
    const publicationYear = e.target.value;
    const updateBook = {
      ...books,
      publicationYear,
    };
    setBooks(updateBook);
  };

  const handlePublisher = (e) => {
    const publisher = e.target.value;
    const updateBook = {
      ...books,
      publisher,
    };
    setBooks(updateBook);
  };

  const handleDescription = (e) => {
    const description = e.target.value;
    const updateBook = {
      ...books,
      description,
    };
    setBooks(updateBook);
  };

  const handlePrice = (e) => {
    const price = e.target.value;
    const updateBook = {
      ...books,
      price,
    };
    setBooks(updateBook);
  };

  const handleISBN = (e) => {
    const ISBN = e.target.value;
    const updateBook = {
      ...books,
      ISBN,
    };
    setBooks(updateBook);
  };

  const handleCategory = (e) => {
    const category = e.target.value;
    const updateBook = {
      ...books,
      category,
    };
    setBooks(updateBook);
  };


  const handleCondition = (e) => {
    const condition = e.target.value;
    const updateBook = {
      ...books,
      condition,
    };
    setBooks(updateBook);
  };

  const handleImage = (e) => {
    const image = e.target.value;
    const updateBook = {
      ...books,
      image,
    };
    setBooks(updateBook);
  };

  const handleUpdateBook = (e) => {
    e.preventDefault();
    const Book = {
      title: books.title,
      author: books.author,
      publicationYear: books.publicationYear,
      publisher: books.publisher,
      description: books.description,
      price: books.price,
      ISBN: books.ISBN,
      category: books.category,
      addBy: Authentication.user._id,
      condition: books.condition,
      image: books.image,
    };

    fetch(`http://localhost:5000/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Authentication.token}`,
      },
      body: JSON.stringify(Book),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.success){
          setError("");
          alert("Book Updated Successfully");
          setBooks({});
          e.target.reset();
        }
        else {
          setError(data.error);
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
          onSubmit={handleUpdateBook}
          className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10"
        >
          <h1 className="mb-6 text-xl font-semibold lg:text-2xl">
            Update Book
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className=""> Book Name </label>
              <Input
                value={books.title || ""}
                onChange={handleBookTitle}
                type="text"
                placeholder="Book Name"
                required
              />
            </div>
            <div>
              <label>Author Name</label>
              <Input
                type="text"
                placeholder="Author Name"
                required
                value={books.author || ""}
                onChange={handleAuthorName}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Publication Year</label>
              <Input
                onChange={handlePublicationYear}
                type="Date"
                value={books.publicationYear || ""}
                placeholder="Publication Year"
                required
              />
            </div>
            <div>
              <label>Publisher Name</label>
              <Input
                onChange={handlePublisher}
                type="text"
                value={books.publisher || ""}
                placeholder="Publisher Name"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Price</label>
              <Input
                onChange={handlePrice}
                type="number"
                value={books.price || ""}
                placeholder="Price"
                required
              />
            </div>
            <div>
              <label>ISBN</label>
              <Input
                onChange={handleISBN}
                type="text"
                placeholder="ISBN"
                value={books.ISBN || ""}
                required
              />
            </div>
          </div>
          <div>
            <textarea
              onChange={handleDescription}
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Description"
              value={books.description || ""}
              rows="5"
            ></textarea>
          </div>
          <div>
            <label>Image</label>
            <Input
              onChange={handleImage}
              type="text"
              placeholder="Image"
              value={books.image || ""}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <select
                onChange={handleCategory}
                value={books.category || ""}
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
                onChange={handleCondition}
                value={books.condition || ""}
                className="border w-40 selection:border-gray-100 rounded-md p-2"
              >
                <option value="new">New</option>
                <option value="used">Used</option>
              </select>
            </div>
          </div>
          <div>
            <Button type="submit" label="Update Book" />
          </div>
        </form>
      </div>
    </Layout>
  );
}
