import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
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
  FaSearch,
  FaUserCircle,
  FaYoutube,
} from "react-icons/fa";
import { FaBoxArchive, FaFaceGrinWide, FaHandsClapping } from "react-icons/fa6";
import { BiSolidMessageDetail } from "react-icons/bi";
import { Menu } from "./components/menu";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
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
          className={
            "h-dvh bg-gradient-to-r from-orange-300 to-rose-300 p-2 lg:p-5"
          }
        >
          <div className="hidden lg:block">
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
              <FaSearch size={70} className="text-stone-200" />
            </div>
            <div className="absolute bottom-60 left-[300px] rotate-12 transform">
              <FaBoxArchive size={70} className="text-stone-200" />
            </div>
            <div className="absolute right-[600px] top-80 rotate-12 transform">
              <FaFaceGrinWide size={70} className="text-stone-200" />
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
          <div className="h-[calc(100vh-20px)] rounded-xl border-2 border-black bg-[#F8F7F4] shadow-sm lg:h-[calc(100vh-40px)] p-3 lg:p-5">
            <Menu />
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
