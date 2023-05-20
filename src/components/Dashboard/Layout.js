import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "../Navbar/Navbar";
export default function Layout({ children }) {
  return (
    <>
    <Navbar/>
    <div className="flex">
      <Sidebar />
      <main className="h-screen w-screen overflow-scroll">{children}
     </main>
    </div>
    </>
  );
}
