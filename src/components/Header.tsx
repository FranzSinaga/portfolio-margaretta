import React from "react";
import { Link } from "gatsby";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

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
        className="mx-auto flex max-w-7xl px-4 items-center justify-end lg:justify-center p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="hidden lg:flex gap-x-5 p-2 px-7 shadow-md rounded-full">
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
              className="text-lg font-semibold leading-6 text-gray-800 hover:text-purple-700 hover:bg-gray-100 p-2 px-3 hover:rounded-full"
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
              <div className="p-4 bg-white flex-1 h-full  overflow-scroll scroll-container">
                <div className="max-w-md mx-auto">
                  <DrawerClose asChild className="flex justify-end mb-5">
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
                        className="text-lg font-semibold leading-6 text-gray-800 hover:text-purple-700 hover:bg-gray-100 p-2 px-3 hover:rounded-full"
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
