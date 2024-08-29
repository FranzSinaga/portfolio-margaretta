import type { MetaFunction } from "@remix-run/node";
import homepage from "../assets/homepage.gif";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex gap-x-6 max-w-[900px] items-center">
        <div className="max-w-[400px]">
          <p className="font-serif">Hi, My Name is</p>
          <p className="font-serif font-extrabold leading-tight text-3xl">
            Margaretta Ruth Verawati Simanjuntak
          </p>
          <p className="mt-2 text-sm ">
            I am an experienced professional in Technical Writing, Quality
            Assurance, and Quality Control, with a strong ability to create
            clear technical documentation and ensure product excellence through
            meticulous testing and quality inspection.
          </p>
          <Button type="button" className="mt-4 font-serif">
            <a
              href="mailto:margaretharuth5@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Get To Know Me 👋
            </a>
          </Button>
        </div>
        <div className="hidden pb-5 md:block ">
          <img src={homepage} alt="GIF" className="object-cover h-80 w-96" />
        </div>
      </div>
    </div>
  );
}
