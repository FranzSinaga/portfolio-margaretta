import type { MetaFunction } from "@remix-run/node";
import homepage from "~/assets/homepage.gif";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Education() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="hidden pb-5 md:block ">
        <img src={homepage} alt="GIF" className="object-cover h-80 w-96" />
      </div>
      <div className="pb-5">
        <ol className="relative ml-1 space-y-5 border-s-2 border-gray-400">
          <li className="ms-5">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-purple-900 bg-purple-700"></div>
            <time className="mb-1 text-sm font-normal italic leading-none text-gray-900 ">
              September 2016 - September 2020
            </time>
            <h3 className="text-lg font-semibold text-gray-900 ">
              Institut Teknologi Del | North Sumatera | GPA 3.07
            </h3>
            <p className="text-base font-normal text-gray-500 ">
              Bachelor of Applied Science in Software Engineering Technology
              (B.A.S.S.E.T)
            </p>
          </li>
          <li className="ms-5">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-purple-900 bg-purple-700"></div>
            <time className="mb-1 text-sm font-normal italic leading-none text-gray-900 ">
              2013 - 2016
            </time>
            <h3 className="d text-lg font-semibold text-gray-900">
              SMA Negeri 1 Balige
            </h3>
            <p className="text-base font-normal text-gray-500 ">
              Science Major
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
