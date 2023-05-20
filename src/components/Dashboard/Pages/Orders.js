import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import auth from "../../../hooks/auth";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const Authorization = auth();
  const user = Authorization.user;
  const id = user._id;

  useEffect(() => {
    fetch(`http://localhost:5000/transaction/user/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Authorization.token}`
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if(data.data.length === 0){
          setError("No orders found");
        } else {

        console.log(data.data);
        setOrders(data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, Authorization.token]);

  return (
    <Layout>
      <div className="mx-auto max-w-screen-xl bg-white">
        <h1 className="mt-20 mb-10 ml-2 text-2xl font-bold text-gray-900">
          Orders
        </h1>
      </div>
      <div className="mx-auto max-w-screen-xl py-10">
        <div className="overflow-hidden rounded-xl bg-white shadow">
          <table className="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
            <thead className="hidden border-b lg:table-header-group">
              <tr className="">
                <td className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                  Order ID
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
                  Date
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Status
                </td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
                  Total
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
              </tr>
            </thead>
            <tbody className="bg-white lg:border-gray-300">
              {
                error && <tr className="text-center"><td colSpan="4" className="text-red-500">{error}</td></tr> 
              }
              {
              orders.map((item) => (
                <tr className="">
                  <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                    {item._id}
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                    {item.createdAt}
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                    {item.status}
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                    {item.price}
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
