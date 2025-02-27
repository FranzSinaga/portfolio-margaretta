import { NavLink } from "@remix-run/react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { MenuIcon } from "lucide-react";

const menu = [
  { name: "Home", href: "/" },
  { name: "Education", href: "/education" },
  { name: "Work Experience", href: "/work-experience" },
  { name: "Projects", href: "/projects" },
  { name: "Socials", href: "/socials" },
];

export const Menu = () => {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopMenu />
      </div>
      <div className="flex w-full items-center justify-end lg:hidden">
        <MobileMenu />
      </div>
    </>
  );
};

export const DesktopMenu = () => {
  return (
    <nav className="hidden w-full justify-center lg:flex">
      <ul className="flex gap-x-3 rounded-full border-2 px-6 py-3">
        {menu.map((e) => (
          <li key={e.name} className="cursor-pointer font-serif font-light">
            <NavLink
              to={e.href}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-black px-2 py-1 font-serif font-bold text-gray-800"
                  : "rounded-full px-2 py-1 font-serif font-light text-gray-800 hover:bg-gray-200"
              }
            >
              {e.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="">
          <MenuIcon />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-serif">Margaretta</SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <nav className="mt-8">
          <ul className="flex flex-col gap-y-4">
            {menu.map((e) => (
              // <li
              //   key={e.name}
              //   className="w-full bg-red-200 rounded-full cursor-pointer font-serif font-light"
              // >
              <NavLink
                key={e.name}
                to={e.href}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-full bg-rose-300 px-5 py-1 font-serif text-gray-800"
                    : "rounded-full px-5 py-1 font-serif font-light text-gray-800 hover:bg-gray-200"
                }
              >
                {e.name}
              </NavLink>
              // </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
