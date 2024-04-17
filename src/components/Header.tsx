import React from "react";
import { Link } from "gatsby";
import { Menu, X } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerOverlay,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";

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
  return (
    <header className="py-2">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-end p-6 px-4 lg:justify-center lg:px-8"
        aria-label="Global"
      >
        <div className="hidden gap-x-5 rounded-full p-2 px-7 shadow-md lg:flex">
          {/* <StaticImage
            src="../images/logo_etha.jpeg"
            alt="logo"
            className="w-10 mr-10"
          /> */}
          {navigation.map((item, key) => (
            <Link
              key={key}
              id={item.name}
              to={item.href}
              className="p-2 px-3 text-lg font-semibold leading-6 text-gray-800 hover:rounded-full hover:bg-gray-100 hover:text-purple-700"
              activeClassName="text-purple-700 border-b-2 border-purple-700 border-spacing-3 hover:rounded-none hover:bg-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="lg:hidden">
          <Drawer shouldScaleBackground direction="right">
            <DrawerTrigger asChild>
              <Button variant="outline">
                <Menu size={20} />
              </Button>
            </DrawerTrigger>
            <DrawerOverlay />
            <DrawerContent className="h-full">
              <div className="scroll-container h-full flex-1 overflow-scroll  bg-white p-4">
                <div className="mx-auto max-w-md">
                  <DrawerClose asChild className="mb-5 flex justify-end">
                    <Button variant="outline">
                      <X size={20} />
                    </Button>
                  </DrawerClose>
                  <div className="flex flex-col gap-y-4">
                    {navigation.map((item, key) => (
                      <Link
                        key={key}
                        id={item.name}
                        to={item.href}
                        className="p-2 px-3 text-lg font-semibold leading-6 text-gray-800 hover:rounded-full hover:bg-gray-100 hover:text-purple-700"
                        activeClassName="text-purple-700 border-b-2 border-purple-700 border-spacing-3 hover:rounded-none hover:bg-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  );
};
