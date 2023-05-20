import React, { useState } from "react";
import Layout from "../Layout";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSingup = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      phone,
    };
    console.log(user)

    fetch("http://localhost:5000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.user) {
          alert("Signup Successfull");
          window.location.href = "/signin";
        } else{
          alert(data.msg || "Something went wrong");
        }
      })
      
  };

  return (
    <Layout>
      <div className="lg:m-10">
        <form
          onSubmit={handleSingup}
          className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10"
        >
          <h1 className="mb-6 text-xl font-semibold lg:text-2xl">Register</h1>

          <div>
            <label className=""> Name </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className=""> Email Address </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Info@example.com"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div>
            <label className=""> Password </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="******"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
            />
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            <div>
              <label className=""> Phone: </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder="+543 5445 0543"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
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
