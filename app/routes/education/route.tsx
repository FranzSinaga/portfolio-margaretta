import { Player } from "@lottiefiles/react-lottie-player";
import type { MetaFunction } from "@remix-run/node";
import lottie from "~/assets/Homepage.json";
import BlurFade from "~/components/magicui/blur-fade";

export const meta: MetaFunction = () => {
  return [{ title: "Margaretta | Education" }];
};

const education = [
  {
    periode: "September 2016 - September 2020",
    name: "Institut Teknologi Del | Sumatera Utara | GPA 3.07",
    title: "D-IV Teknologi Rekayasa Perangkat Lunak",
  },
  {
    periode: "Tahun 2013 - Tahun 2016",
    name: "SMA Negeri 1 Balige",
    title: "Jurusan IPA",
  },
];

export default function Education() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex max-w-[1100px] items-center gap-x-6">
        <BlurFade delay={0.2} inView>
          <div className="hidden w-[30dvw] pb-5 md:block">
            <Player src={lottie} autoplay loop speed={1} />
          </div>
        </BlurFade>
        <BlurFade delay={0.4} inView>
          <div className="md:max-w-[580px]">
            <ol className="relative ml-1 space-y-5 border-s-2 border-gray-400">
              {education.map((e, key) => (
                <li className="ms-5" key={key}>
                  <div className="absolute -start-[6.7px] mt-1.5 h-3 w-3 rounded-full border border-purple-900 bg-purple-700"></div>
                  <time className="mb-1 text-sm font-normal italic leading-none text-gray-900">
                    {e.periode}
                  </time>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {e.name}
                  </h3>
                  <p className="text-sm font-normal text-gray-500">{e.title}</p>
                </li>
              ))}
            </ol>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
