import React, { useState } from "react";
import Layout from "../Layout";
import { useCart } from "react-use-cart";
import auth from "../../hooks/auth";

export default function Checkout() {
  const { isEmpty, items, cartTotal , emptyCart} = useCart();

  console.log(items);
  const allItemsId = items.map((item) => item.id);
  const allItemsQuantity = items.map((item) => item.quantity);

  const total = cartTotal + 8;

  const [phone, setPhone] = useState("");
  const [tnxID, setTnxID] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const Authorization = auth();
  const token = Authorization.token;
  const user = Authorization.user;

  const handleOrder = (e) => {
    if(!phone || !tnxID || !street || !city || !zip){
        alert("Please fill all the fields");
        return;
    }

    if(!user){
        alert("Please login first");
        return;
    }
    e.preventDefault();

    const order = {
        buyerId: user._id,
        info: {
            bookId: allItemsId,
            quantity: allItemsQuantity,
        },
        price: total,
        address: {
            street: street,
            city: city,
            zip: zip,
        },
        tnxID: tnxID,
        phone: phone,
    };
    console.log(order);

    fetch("http://localhost:5000/transaction", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(order),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.error) {
                alert(data.error);
            } else {
                alert("Order Placed Successfully");
                e.target.reset();
                window.location.href = "/";
                emptyCart();
            }
        })
        .catch((err) => {
            console.log(err);
        }
    );
  };
  return (
    <Layout>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div>{isEmpty && <p>You have no books. Add first</p>}</div>
        <form onSubmit={handleOrder} className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Checkout Details</p>
          <p className="text-gray-400">
            Complete your order by providing your details.
          </p>
          <div className="">
            <label for="email" className="mt-4 mb-2 block text-sm font-medium">
              Phone Number
            </label>
            <div className="relative">
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="phone"
                required
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="01587475452"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
            <label
              for="card-holder"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Transaction ID
            </label>
            <div className="relative">
              <input
                onChange={(e) => setTnxID(e.target.value)}
                type="text"
                required
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your Transaction ID here"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>

            <label
              for="billing-address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Billing Address
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <input
                  onChange={(e) => setStreet(e.target.value)}
                  type="text"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street Address"
                />
              </div>
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="City"
              />
              <input
                onChange={(e) => setZip(e.target.value)}
                type="text"
                name="billing-zip"
                className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="ZIP"
              />
            </div>

            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">{cartTotal}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">$8.00</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">{total}</p>
            </div>
          </div>
          <button
            
            type="submit"
            className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
          >
            Place Order
          </button>
        </form>
      </div>
    </Layout>
  );
}
