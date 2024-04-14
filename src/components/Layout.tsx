import React, { PropsWithChildren } from "react";
import { Header } from "./Header";
// import { ScreenIndicator } from "./ScreenIndicator";
import { Fade } from "react-awesome-reveal";

export const Layout = ({
  childrenClassName,
  children,
}: PropsWithChildren & { childrenClassName?: string }) => {
  return (
    <div className="p-5 h-[100vh] bg-gradient-to-bl from-pink-500 to-yellow-500">
      <div className="h-[calc(100vh-50px)] bg-white shadow-sm rounded-xl overflow-auto scroll-container">
        <Header />
        <div className={`px-32 rounded-lg ${childrenClassName}`}>
          <Fade>{children}</Fade>
        </div>
        {/* {process.env.env !== "production" && <ScreenIndicator />} */}
      </div>
    </div>
  );
};
