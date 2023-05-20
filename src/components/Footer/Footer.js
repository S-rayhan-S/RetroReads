import React from "react";

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-gray-900 px-4 pt-20">
      <div className="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-sky-500 bg-white p-2">
        <img
          className="h-full object-contain"
          src="https://bookish.pages.dev/img/logo-no-background.png"
          alt=""
        />
      </div>
      <nav
        aria-label="Footer Navigation"
        className="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left"
      >
        <a href="/" className="font-medium text-white">
          Support
        </a>
        <a href="/" className="font-medium text-white">
          Privacy Policy
        </a>
        <a href="/" className="font-medium text-white">
          Terms & Conditions
        </a>
      </nav>
      <p className="py-10 text-center text-gray-300">
        © 2023 RetroReads | All Rights Reserved
      </p>
    </footer>
  );
}
