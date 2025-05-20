import { LuBuilding2 } from "react-icons/lu";
import data from "./data.json";
import BlurFade from "~/components/magicui/blur-fade";
import { Calendar, MapPin } from "lucide-react";

export default function WorkExperience() {
  // const defaultValue = data[0].name + "-" + data[0].position;
  return (
    <div className="m-3 max-w-[1200px] space-y-10 md:mx-auto md:my-10">
      {/* <Tabs defaultValue={defaultValue}>
        <div className="md:flex">
          <TabsList className="gap-2 rounded-lg border">
            {data.map((e, idx) => (
              <TabsTrigger
                key={idx}
                value={`${e.name}-${e.position}`}
                className="border"
              >
                <span className="text-left">
                  <p>{e.name}</p>
                  <p className="text-xs font-normal">{e.periode}</p>
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          {data.map((e, idx) => (
            <TabsContent
              value={`${e.name}-${e.position}`}
              key={idx}
              className="mx-2 w-full"
            >
              <BlurFade inView>
                <div className="relative flex flex-col gap-x-8 rounded-lg border bg-[#F8F7F4] px-4 py-6 shadow-md hover:shadow-sm md:flex-row lg:shadow-none xl:w-full">
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
                      <span className="font-normal italic">{e.position}</span>{" "}
                    </p>
                    <ol className="mt-3 xl:w-full">
                      {e.responsibilities.map((e, key) => (
                        <li
                          key={key}
                          className="ms-5 list-disc md:text-justify"
                        >
                          {e}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </BlurFade>
            </TabsContent>
          ))}
        </div>
      </Tabs> */}
      {data.map((e, idx) => (
        <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
          <div className="relative flex flex-col gap-x-8 rounded-2xl border bg-[#F8F7F4] px-4 py-6 shadow-sm transition-all duration-300 hover:drop-shadow-2xl md:flex-row xl:w-full">
            <BlurFade inView delay={0.25}>
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
            </BlurFade>
            <div className="flex-1">
              <BlurFade inView delay={0.25}>
                <p className="font-serif text-xl font-bold">{e.position}</p>
              </BlurFade>
              <BlurFade inView delay={0.5}>
                <p className="text-lg text-orange-400">{e.name}</p>
              </BlurFade>
              <ol className="mt-3 xl:w-full">
                {e.responsibilities.map((e, key) => (
                  <BlurFade key={idx} delay={0.25 + key * 0.05} inView>
                    <li key={key} className="ms-5 list-disc md:text-justify">
                      {e}
                    </li>
                  </BlurFade>
                ))}
              </ol>
            </div>

            <div className="w-[200px] place-items-end text-sm italic">
              <BlurFade inView delay={0.25}>
                <p className="flex items-center gap-x-1">
                  <Calendar size={15} />
                  {e.periode}
                </p>
              </BlurFade>
              <BlurFade inView delay={0.5}>
                <p className="flex items-center gap-x-1">
                  <MapPin size={15} />
                  {e.place}
                </p>
              </BlurFade>
            </div>
          </div>
        </BlurFade>
      ))}
    </div>
  );
}
