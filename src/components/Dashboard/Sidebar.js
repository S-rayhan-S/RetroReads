import React from "react";
import { Link } from "react-router-dom";
import auth from "../../hooks/auth";

export default function Sidebar() {
  const user = auth().user;
  return (
    <div className="w-62">
      <div className="h-[85vh] w-64 pb-10">
        <div className="flex h-screen flex-grow flex-col rounded-br-lg rounded-tr-lg bg-gray-50 pt-5 shadow-md">
          <div className="flex mt-10 items-center px-4">
            <img
              className="h-12 w-auto max-w-full align-middle"
              src="https://bookish.pages.dev/img/logo-no-background.png"
              alt=""
            />
            <div className="flex ml-3 flex-col">
              <h3 className="font-medium">{user.name}</h3>
              <p className="text-xs text-gray-500">{user.role}</p>
            </div>
          </div>

          <div className="flex mt-3 flex-1 flex-col">
            <div className="">
             

              <span className="ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500">
                Book Mangement
              </span>

              <nav className="flex-1">
                <Link
                  to="/books"
                  className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                >
                  <svg
                    className="mr-4 h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      className=""
                    ></path>
                  </svg>
                  Books
                </Link>

                <Link
                  to="/orders"
                  className="flex cursor-pointer items-center border-l-rose-600 py-2 px-4 text-sm font-medium text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600 focus:border-l-4"
                >
                  <svg
                    className="mr-4 h-5 w-5 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  Orders
                </Link>
               
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
