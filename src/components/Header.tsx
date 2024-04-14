import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { PropsWithChildren } from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type NavigationListType = {
  name: string;
  href: string;
  id: string;
}[];

const navigation: NavigationListType = [
  { name: "Home", href: "/", id: "home" },
  { name: "Education", href: "/education", id: "education" },
  { name: "Work Experience", href: "/work-experience", id: "work-experience" },
  { name: "Projects", href: "/projects", id: "projects" },
  { name: "Social Media", href: "/socials", id: "socials" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const url = typeof window !== "undefined" ? window.location.pathname : "/";

  const processUrl = (param: string) => {
    return url === "/" ? "home" : url.split("/")[1] === param && param;
  };
  console.log(url);
  return (
    <header className="py-2">
      <nav
        className="sticky mx-auto flex max-w-7xl px-4 items-center justify-center p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex gap-x-5 p-2 px-7 shadow-md rounded-full">
          {/* <StaticImage
            src="../images/logo_etha.jpeg"
            alt="logo"
            className="w-10 mr-10"
          /> */}
          {navigation.map((item, key) => (
            <a
              key={key}
              id={item.name}
              href={item.href}
              className={twMerge(
                "text-lg font-semibold leading-6 text-gray-800 hover:text-purple-700 hover:bg-gray-100 p-2 px-3 hover:rounded-full",
                processUrl(item.id) === item.id &&
                  "text-purple-700 border-b-2 border-purple-700 border-spacing-3 hover:rounded-none hover:bg-white"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
