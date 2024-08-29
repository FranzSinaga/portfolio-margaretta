import type { MetaFunction } from "@remix-run/node";
import { Player } from "@lottiefiles/react-lottie-player";

import lottie from "~/assets/Education.json";
import PulsatingButton from "~/components/magicui/pulsating-button";

export const meta: MetaFunction = () => {
  return [
    { title: "Margaretta" },
    {
      name: "description",
      content:
        "Hi, My Name is Margaretta Ruth Verawati Simanjuntak. I am an experienced professional in Technical Writing, Quality Assurance, and Quality Control, with a strong ability to create clear technical documentation and ensure product excellence through meticulous testing and quality inspection.",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex max-w-[1100px] items-center gap-x-6">
        <div className="md:max-w-[400px] lg:max-w-[580px]">
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
          <PulsatingButton
            pulseColor="#fecdd3"
            className="mt-6 bg-rose-400 hover:bg-rose-500"
          >
            <a
              href="mailto:margaretharuth5@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Get To Know Me 👋
            </a>
          </PulsatingButton>
        </div>
        <div className="hidden pb-5 md:block">
          <Player src={lottie} autoplay loop speed={1} />
        </div>
      </div>
    </div>
  );
}
