import { LuBuilding2 } from "react-icons/lu";
import data from "./data.json";
import BlurFade from "~/components/magicui/blur-fade";
import { BorderBeam } from "~/components/magicui/border-beam";

export default function WorkExperience() {
  return (
    <div className="my-5 flex flex-col items-center space-y-5">
      {data.map((e, key) => (
        <BlurFade key={key} delay={0.25 + key * 0.1} inView>
          <div
            key={key}
            className="relative flex max-w-[1000px] flex-col gap-x-8 gap-y-2 rounded-lg border bg-[#F8F7F4] px-4 py-6 shadow-md hover:shadow-sm md:flex-row lg:shadow-none xl:w-full"
          >
            <div className="flex w-[200px] lg:justify-end">
              {e.imageUrl ? (
                <img
                  src={e.imageUrl}
                  alt={e.imageUrl}
                  className="h-20 rounded-md border"
                />
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-md border border-black bg-transparent shadow md:col-span-1">
                  <LuBuilding2 className="text-slate-900" size={30} />
                </div>
              )}
            </div>

            <div className="w-full">
              <p className="text-xl">
                <span className="font-bold">{e.name}</span>, {e.place}{" "}
              </p>
              <p className="text-sm">
                <span className="font-normal italic">{e.position}</span> <br />
                {e.periode}
              </p>
              <ol className="mt-3 xl:w-full">
                {e.responsibilities.map((e, key) => (
                  <li key={key} className="ms-5 list-disc md:text-justify">
                    {e}
                  </li>
                ))}
              </ol>
            </div>
            <BorderBeam duration={8} className="hidden lg:block" />
          </div>
        </BlurFade>
      ))}
    </div>
  );
}
