import React from "react";

export default function Input({type, placeholder, onChange,...rest}) {
  return (
    <input
      onChange={onChange}
      type={type}
      placeholder={placeholder}
        {...rest}
      className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
    />
  );
}
