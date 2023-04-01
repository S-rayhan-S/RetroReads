import React from "react";
import Layout from "../Layout";

export default function Signup() {
  return (
    <Layout>
      <div className="lg:m-10">
        <form className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
          <h1 className="mb-6 text-xl font-semibold lg:text-2xl">Register</h1>

          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className=""> First Name </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
            <div>
              <label className=""> Last Name </label>
              <input
                type="text"
                placeholder="Last  Name"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
          </div>
          <div>
            <label className=""> Username </label>
            <input
              type="text"
              placeholder="Username"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className=""> Email Address </label>
            <input
              type="email"
              placeholder="Info@example.com"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className=""> Password </label>
            <input
              type="password"
              placeholder="******"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            <div>
              <label className=""> Phone: </label>
              <input
                type="text"
                placeholder="+543 5445 0543"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
