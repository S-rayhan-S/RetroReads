import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import edit from "../../../img/edit.png";
import del from "../../../img/delete.png";
import auth from "../../../hooks/auth";
import { Link } from "react-router-dom";

export default function BookList() {
  const Authentication = auth();
  const id = Authentication.user._id;
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "All Books";
    fetch(`http://localhost:5000/books/user/${id}`, {
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
          if(data.data.length === 0){
            setError("No books found");
          } else {
          setBooks(data.data);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, Authentication.token]);

  if (!books) {
    setError("No books found");
  }

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (!proceed) {
      return;
    }

    fetch(`http://localhost:5000/books/${id}`, {
      method: "DELETE",
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
          alert("Book deleted successfully");
          const newBooks = books.filter((book) => book._id !== id);
          setBooks(newBooks);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout>
      <div className="mx-auto max-w-screen-xl bg-white">
        <h1 className="mt-20 mb-10 ml-2 text-2xl font-bold text-gray-900">
          All Books
        </h1>
        <div>
          <Link to="/addbook">
            {" "}
            <button className="bg-blue-700  text-white rounded-full px-3 py-1 ">
              New Book
            </button>
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl py-10">
        <div className="overflow-hidden rounded-xl bg-white shadow">
          <table className="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
            <thead className="hidden border-b lg:table-header-group">
              <tr className="">
                <td className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                  Title
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="float-right mt-1 h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </td>

                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Author
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Publisher
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Category
                </td>

                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Condition
                </td>

                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Price
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="float-right mt-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </td>

                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Status
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Edit
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Delete
                </td>
              </tr>
            </thead>
            <tbody className="bg-white lg:border-gray-300">
              {error && (
                <tr className="text-center">
                  <td colSpan="9" className="text-center py-4">
                    {error}
                  </td>
                </tr>
              )}

              {  
                books.map((item) => (
                  <tr className="">
                    <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                      {item.title}
                    </td>

                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                      {item.author}
                    </td>

                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                      {item.publisher}
                    </td>

                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                      {item.category}
                    </td>
                    <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                      {item.condition}
                    </td>
                    <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                      {item.price}
                    </td>
                    <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left rounded-full ">
                      {item.status}
                    </td>

                    <td className="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
                      <Link to={`/updatebook/${item._id}`}>
                        <button>
                          <img src={edit} alt="edit" width={20} />
                        </button>
                      </Link>
                    </td>

                    <td className="whitespace-no-wrap py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
                      <button onClick={() => handleDelete(item._id)}>
                        <img src={del} alt="delete" width={20} />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
