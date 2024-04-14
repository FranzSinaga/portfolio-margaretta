import React, { PropsWithChildren } from "react";
import { Header } from "./Header";
import { ScreenIndicator } from "./ScreenIndicator";

export const Layout = ({
  childrenClassName,
  children,
}: PropsWithChildren & { childrenClassName?: string }) => {
  return (
    <div className="p-5 h-[100vh] bg-gradient-to-bl from-pink-500 to-yellow-500">
      <div className="h-[calc(100vh-50px)] bg-white shadow-sm rounded-xl overflow-auto scroll-container">
        <Header />
        <div className={`px-32 rounded-lg ${childrenClassName}`}>
          {children}
        </div>
        {process.env.env !== "production" && <ScreenIndicator />}
      </div>
    </div>
  );
};
