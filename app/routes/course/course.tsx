import useSWR from "swr";
import { CMS_API_BASE_URL } from "~/lib/const";
import { fetcher } from "~/lib/fetcher";
import { Info, Link2 } from "lucide-react";
import { Button } from "~/components/ui/button";
import { EttaCourse } from "./course.type";
import BlurFade from "~/components/magicui/blur-fade";
import { MagicCard } from "~/components/magicui/magic-card";

export const CourseComponents = () => {
  const {
    data: courses,
    isLoading,
    error,
    mutate,
    isValidating,
  } = useSWR<{ docs: EttaCourse[] }>(
    `${CMS_API_BASE_URL}/api/etta-course?depth=1&where[active][equals]=true&limit=100`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  const course = courses?.docs;

  if (isLoading || isValidating)
    return (
      <div className="py-18 flex w-full items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  if (error || !course)
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
      {course.length > 0 && (
        <>
          <h1 className="font-serif text-2xl font-bold">Kursus</h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {course.map((e, key) => (
              <BlurFade key={key} delay={0.25 + key * 0.1} inView>
                <MagicCard
                  gradientColor="#fff7ed"
                  className="mb-3 w-full rounded-lg border bg-[#F8F7F4] shadow-md transition-all duration-300 hover:drop-shadow-xl"
                >
                  <div className="gap-x-5 rounded-t-lg px-4 pt-4 lg:flex lg:flex-row lg:items-center">
                    <img
                      src={`${CMS_API_BASE_URL}${e.image.url}`}
                      alt={e.image.alt}
                      className="h-14 w-auto rounded-lg bg-cover object-cover"
                    />
                    <div>
                      <p className="font-serif text-xl font-bold">
                        {e.courseName}
                      </p>
                      <p className="text-xs font-normal leading-tight text-gray-700">
                        {e.courseType}
                        <br />
                        <span className="text-xs italic">{e.periode}</span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 space-y-2 px-4 pb-4">
                    <p className="text-sm leading-tight">{e.description}</p>

                    {e.links && e.links.length > 0 && (
                      <div className="space-y-1">
                        <p className="font-medium">Hasil </p>
                        <div className="flex flex-col flex-wrap gap-2">
                          {e.links.map((e, key) => (
                            <a
                              className="flex items-center gap-x-1 font-mono text-xs text-blue-700 hover:underline"
                              href={e.url}
                              key={key}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {e.text} <Link2 size={13} />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </>
      )}
    </>
  );
};
