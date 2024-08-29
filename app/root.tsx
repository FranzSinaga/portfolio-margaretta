import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import appStylesHref from "./globals.css?url";
import { ScreenIndicator } from "./components/ScreenIndicator";
import { BsBook } from "react-icons/bs";
import { MdLaptopChromebook, MdPhoneAndroid } from "react-icons/md";
import { HiMicrophone } from "react-icons/hi";
import {
  FaHeadphones,
  FaLinkedin,
  FaPenAlt,
  FaUserCircle,
  FaYoutube,
} from "react-icons/fa";
import { Fa1, FaHandsClapping } from "react-icons/fa6";
import { BiSolidMessageDetail } from "react-icons/bi";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

const menu = [
  { name: "Home", href: "/" },
  { name: "Education", href: "/education" },
  { name: "Work Experience", href: "/work-experience" },
  { name: "Projects", href: "/projects" },
  { name: "Socials", href: "/socials" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div
          className={"h-dvh bg-gradient-to-r from-orange-300 to-rose-300 p-5"}
        >
          <div className="hidden md:block">
            <div className="absolute left-52 top-10 rotate-12 transform">
              <FaPenAlt size={60} className="text-stone-200" />
            </div>
            <div className="absolute bottom-10 left-96 rotate-12 transform">
              <FaYoutube size={70} className="text-stone-200" />
            </div>
            <div className="absolute left-20 top-52 rotate-12 transform">
              <BsBook size={70} className="text-stone-200" />
            </div>
            <div className="absolute bottom-96 right-8 -rotate-12 transform">
              <FaLinkedin size={70} className="text-stone-200" />
            </div>
            <div className="absolute bottom-32 left-10 -rotate-12 transform">
              <MdLaptopChromebook size={70} className="text-stone-200" />
            </div>
            <div className="absolute left-[700px] top-32 -rotate-12 transform">
              <BiSolidMessageDetail size={70} className="text-stone-200" />
            </div>
            <div className="absolute left-[500px] top-72 -rotate-12 transform">
              <FaUserCircle size={70} className="text-stone-200" />
            </div>
            <div className="absolute bottom-40 right-[800px]">
              <FaHandsClapping size={70} className="text-stone-200" />
            </div>
            <div className="absolute bottom-80 right-[300px] -rotate-12 transform">
              <FaHandsClapping size={70} className="text-stone-200" />
            </div>
            <div className="absolute bottom-40 right-10 rotate-12 transform">
              <MdPhoneAndroid size={70} className="text-stone-200" />
            </div>
            <div className="absolute right-20 top-10 -rotate-12 transform">
              <HiMicrophone size={70} className="text-stone-200" />
            </div>
            <div className="absolute bottom-10 right-80 rotate-12 transform">
              <FaHeadphones size={70} className="text-stone-200" />
            </div>
          </div>
          <div
            className={
              "h-[calc(100vh-40px)] rounded-xl bg-[#F8F7F4] p-5 shadow-sm"
            }
          >
            <nav className="hidden w-full justify-center lg:flex">
              <ul className="flex gap-x-3 rounded-full border-2 px-6 py-3">
                {menu.map((e) => (
                  <li
                    key={e.name}
                    className="cursor-pointer font-serif font-light"
                  >
                    <NavLink
                      to={e.href}
                      className={({ isActive }) =>
                        isActive
                          ? "rounded-full bg-rose-300 px-4 py-2 font-serif font-bold text-gray-800"
                          : "rounded-full px-4 py-2 font-serif font-light text-gray-800 hover:bg-gray-200"
                      }
                    >
                      {e.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="scroll-container relative h-[calc(100%-50px)] overflow-auto rounded">
              {children}
            </div>
          </div>
        </div>
        <ScrollRestoration />
        <ScreenIndicator />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
