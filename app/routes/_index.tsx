import type { MetaFunction } from "@remix-run/node";
import { Player } from "@lottiefiles/react-lottie-player";

import { Button } from "~/components/ui/button";
import lottie from "~/assets/Education.json";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex max-w-[1100px] items-center gap-x-6">
        <div className="lg:max-w-[580px] md:max-w-[400px]">
          <p className="font-serif">Hi, My Name is</p>
          <p className="font-serif text-5xl font-extrabold leading-tight">
            Margaretta Ruth Verawati Simanjuntak
          </p>
          <p className="mt-2 text-base">
            I am an experienced professional in Technical Writing, Quality
            Assurance, and Quality Control, with a strong ability to create
            clear technical documentation and ensure product excellence through
            meticulous testing and quality inspection.
          </p>
          <Button type="button" className="mt-4">
            <a
              href="mailto:margaretharuth5@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Get To Know Me 👋
            </a>
          </Button>
        </div>
        <div className="hidden pb-5 md:block">
          <Player src={lottie} autoplay loop speed={1} />
        </div>
      </div>
    </div>
  );
}
