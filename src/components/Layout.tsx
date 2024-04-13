import React, { PropsWithChildren } from "react";
import { Header } from "./Header";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="p-5 h-[100vh] bg-gradient-to-bl from-pink-500 to-yellow-500">
      <div className=" h-[calc(100vh-50px)] bg-white shadow-sm rounded-xl overflow-auto scroll-container">
        <Header />
        <div className="px-10 rounded-lg">{children}</div>
      </div>
    </div>
  );
};
