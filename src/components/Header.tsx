import React from "react";
import { useState } from "react";

type NavigationListType = {
  name: string;
  href: string;
}[];

const navigation: NavigationListType = [
  { name: "Home", href: "/" },
  { name: "Education", href: "/education" },
  { name: "Work Experience", href: "/work-experience" },
  { name: "Projects", href: "/projects" },
  { name: "Social Media", href: "/socials" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-2">
      <nav
        className="sticky mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex gap-x-5 p-2 shadow-md rounded-full">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-semibold leading-6 text-gray-800 hover:text-purple-700 hover:bg-gray-100 p-2 px-3 hover:rounded-full"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
