import useSWR from "swr";
import { EttaWorkExperience } from "./work-experience.type";
import { CMS_API_BASE_URL } from "~/lib/const";
import { fetcher } from "~/lib/fetcher";
import { Info, Calendar, MapPin } from "lucide-react";
import { Button } from "~/components/ui/button";

import { LuBuilding2 } from "react-icons/lu";
import BlurFade from "~/components/magicui/blur-fade";
import dayjs from "dayjs";

export const WorkExperienceComponents = () => {
  const {
    data: posts,
    isLoading,
    error,
    mutate,
    isValidating,
  } = useSWR<{ docs: EttaWorkExperience[] }>(
    `${CMS_API_BASE_URL}/api/etta-work-experience?depth=1&where[active][equals]=true`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  const wo = posts?.docs;

  if (isLoading || isValidating)
    return (
      <div className="py-18 flex w-full items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  if (error || !wo)
    return (
      <div className="flex justify-between rounded-sm bg-accent p-2 drop-shadow-sm">
        <div className="flex items-center gap-x-2">
          <Info size={18} />
          <p className="font-mono">Something wrong unexpected</p>
        </div>
        <Button variant={"default"} size={"sm"} onClick={() => mutate()}>
          Reload
        </Button>
      </div>
    );

  return (
    <>
      {wo.map((e, idx) => (
        <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
          <div className="relative flex flex-col gap-x-8 rounded-2xl border bg-[#F8F7F4] px-4 py-6 shadow-sm transition-all duration-300 hover:drop-shadow-2xl md:flex-row xl:w-full">
            <BlurFade inView delay={0.25}>
              <div className="flex w-[200px] lg:justify-end">
                {e.image ? (
                  <img
                    src={`${CMS_API_BASE_URL}${e.image.url}`}
                    alt={e.image.alt}
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
                <p className="text-lg text-orange-400">{e.organization}</p>
              </BlurFade>
              <ol className="mt-3 xl:w-full">
                {e.responsibilities &&
                  e.responsibilities.map((e, key) => (
                    <BlurFade key={idx} delay={0.25 + key * 0.05} inView>
                      <li key={key} className="ms-5 list-disc md:text-justify">
                        {e.textField}
                      </li>
                    </BlurFade>
                  ))}
              </ol>
            </div>

            <div className="w-[200px] place-items-end text-sm italic">
              <BlurFade inView delay={0.25}>
                <p className="flex items-center gap-x-1">
                  <Calendar size={15} />
                  {dayjs(String(e.startDate)).format("MMM YYYY")} -{" "}
                  {dayjs(String(e.endDate)).format("MMM YYYY")}
                </p>
              </BlurFade>
              <BlurFade inView delay={0.5}>
                <p className="flex items-center gap-x-1">
                  <MapPin size={15} />
                  {e.location}
                </p>
              </BlurFade>
            </div>
          </div>
        </BlurFade>
      ))}
    </>
  );
};
