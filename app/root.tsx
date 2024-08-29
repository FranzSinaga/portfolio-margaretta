import { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwind from "./globals.css";
import { ScreenIndicator } from "./components/ScreenIndicator";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
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
          className={"bg-gradient-to-r from-orange-300 to-rose-300 p-5 h-dvh"}
        >
          <div
            className={
              "rounded-xl bg-[#f9f9f0] shadow-sm h-[calc(100vh-40px)] p-5"
            }
          >
            <nav className="flex  justify-center w-full">
              <ul className="flex bg-white gap-x-3 px-6 py-2 rounded-full">
                {menu.map((e) => (
                  <li
                    className="font-serif font-light bg-rose-300 text-gray-800 px-3 py-1 cursor-pointer rounded-full"
                    key={e.name}
                  >
                    {e.name}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="overflow-auto h-[calc(100%-50px)] rounded">{children}</div>
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
