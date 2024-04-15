import React, { PropsWithChildren } from "react";
import { Header } from "./Header";
import { ScreenIndicator } from "./ScreenIndicator";
import { Fade } from "react-awesome-reveal";
import { useWindowSize } from "@uidotdev/usehooks";
import { twMerge } from "tailwind-merge";

interface Props {
  childrenClassName?: string;
}

export const Layout = ({
  childrenClassName,
  children,
}: PropsWithChildren & Props) => {
  const windowSize = useWindowSize();
  const windowHeight = windowSize.height;

  return (
    <div
      className={twMerge(
        "p-5 bg-gradient-to-bl from-pink-500 to-yellow-500",
        windowHeight && windowHeight > 500 && "md:h-[100vh]"
      )}
    >
      <div
        className={twMerge(
          "bg-white shadow-sm rounded-xl",
          windowHeight && windowHeight > 500 && "md:h-[calc(100vh-40px)]"
        )}
      >
        <Header />
        <div
          className={twMerge(
            `rounded-lg ${childrenClassName} overflow-auto scroll-container`,
            windowHeight && windowHeight > 500
              ? "md:h-[calc(100%-130px)] px-5 lg:px-28"
              : "h-full px-5 lg:px-28"
          )}
        >
          <Fade>{children}</Fade>
        </div>
        {process.env.NODE_ENV !== "production" && <ScreenIndicator />}
      </div>
    </div>
  );
};
