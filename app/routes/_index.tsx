import type { MetaFunction } from "@remix-run/node";
import { Player } from "@lottiefiles/react-lottie-player";

import lottie from "~/assets/Education.json";
import PulsatingButton from "~/components/magicui/pulsating-button";
import BlurFade from "~/components/magicui/blur-fade";

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
          <BlurFade delay={0.2} inView>
            <p className="font-serif">Hai, perkenalkan saya</p>
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <p className="font-serif text-3xl font-extrabold leading-tight md:text-4xl">
              Margaretta Ruth Verawati Simanjuntak
            </p>
          </BlurFade>
          <BlurFade delay={0.6} inView>
            <p className="mt-2 text-base">
              Saya adalah seorang profesional berpengalaman dalam Penulisan
              Teknis dan Jaminan Kualitas, dengan kemampuan kuat untuk membuat
              dokumentasi teknis yang jelas dan memastikan keunggulan produk
              melalui pengujian dan pemeriksaan kualitas yang cermat.
            </p>
          </BlurFade>
          <BlurFade delay={0.8}>
            <PulsatingButton
              pulseColor="#fecdd3"
              className="mt-6 bg-rose-400 hover:bg-rose-500"
            >
              <a
                href="mailto:margaretharuth5@gmail.com"
                target="_blank"
                className="font-serif"
                rel="noreferrer"
              >
                Hubungi Saya 👋
              </a>
            </PulsatingButton>
          </BlurFade>
        </div>
        <BlurFade delay={1} inView>
          <div className="hidden w-[30dvw] pb-5 md:block">
            <Player src={lottie} autoplay loop speed={1} />
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
