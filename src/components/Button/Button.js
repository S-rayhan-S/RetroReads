import React from "react";

export default function Button({ type, label }) {
  return (
    <button
      type={type}
      className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
    >
      {label}
    </button>
  );
}
