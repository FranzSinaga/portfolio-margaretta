import React, { PropsWithChildren } from "react";
import { Fade } from "react-awesome-reveal";
import { useWindowSize } from "@uidotdev/usehooks";

import { Header } from "./Header";
import { ScreenIndicator } from "./ScreenIndicator";

import { cn } from "@/lib/utils";

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
      className={cn(
        "bg-gradient-to-bl from-pink-500 to-yellow-500 p-5",
        windowHeight && windowHeight > 500 && "h-[100vh]",
      )}
    >
      <div
        className={cn(
          "rounded-xl bg-white shadow-sm",
          windowHeight && windowHeight > 500 && "h-[calc(100vh-40px)]",
        )}
      >
        <Header />
        <div
          className={cn(
            `rounded-lg ${childrenClassName} scroll-container overflow-auto`,
            windowHeight && windowHeight > 500
              ? "h-[calc(100%-130px)] px-5 lg:px-28"
              : "h-full px-5 lg:px-28",
          )}
        >
          <Fade>{children}</Fade>
        </div>
        {process.env.NODE_ENV !== "production" && <ScreenIndicator />}
      </div>
    </div>
  );
};
