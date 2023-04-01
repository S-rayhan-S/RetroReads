import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

export default function Layout({children}) {
  return (
    <div className="bg-white flex h-screen">
      <Sidebar />
      <div className="flex h-full w-full flex-col">
        <Nav />
        <div className="h-full overflow-hidden">
          <main
            id="dashboard-main"
            className="h-[calc(100vh-7rem)] overflow-auto"
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
