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
          <div
            className={
              "h-[calc(100vh-40px)] rounded-xl bg-[#F8F7F4] p-5 shadow-sm"
            }
          >
            <nav className="flex w-full justify-center">
              <ul className="flex gap-x-3 rounded-full px-6 py-2">
                {menu.map((e) => (
                  <li
                    key={e.name}
                    className="cursor-pointer font-serif font-light"
                  >
                    <NavLink
                      to={e.href}
                      className={({ isActive }) =>
                        isActive
                          ? "rounded-full bg-rose-200 px-4 py-2 font-serif font-bold text-gray-800"
                          : "rounded-full px-4 py-2 font-serif font-light text-gray-800 hover:bg-gray-200"
                      }
                    >
                      {e.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="scroll-container h-[calc(100%-50px)] overflow-auto rounded">
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
