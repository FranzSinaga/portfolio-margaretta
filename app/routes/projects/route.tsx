/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import BlurFade from "~/components/magicui/blur-fade";
import { cn } from "~/lib/utils";
import { useState } from "react";
import { ProjectDialog } from "./project-dialog";
import { CMS_API_BASE_URL } from "~/lib/const";
import { EttaProject } from "./projects.type";
import { fetcher } from "~/lib/fetcher";
import { Info } from "lucide-react";
import { Button } from "~/components/ui/button";
import useSWR from "swr";

export default function Projects() {
  const {
    data: projects,
    isLoading,
    error,
    mutate,
    isValidating,
  } = useSWR<{ docs: EttaProject[] }>(
    `${CMS_API_BASE_URL}/api/etta-projects?depth=1&where[active][equals]=true&limit=100`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );

  const project = projects?.docs;

  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<EttaProject | null>(null);

  if (isLoading || isValidating)
    return (
      <div className="py-18 flex w-full items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  if (error || !project)
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
    <div className="mx-5 mt-4">
      <ProjectDialog data={data} open={open} setOpen={(e) => setOpen(e)} />
      <div className="mx-auto max-w-[1200px] space-y-3">
        <Websites
          data={project.filter((e) => e.projectType === "Website")}
          openDialog={(e) => setOpen(e)}
          setData={(data) => setData(data)}
        />
        <Mobile
          data={project.filter((e) => e.projectType === "Website")}
          openDialog={(e) => setOpen(e)}
          setData={(data) => setData(data)}
        />
      </div>
    </div>
  );
}

type SectionProps = {
  data: EttaProject[];
  openDialog: (e: boolean) => void;
  setData: (data: EttaProject) => void;
};

const Websites = ({ data, openDialog, setData }: SectionProps) => {
  const web = data.filter((e) => e.projectType === "Website");
  if (web.length > 0)
    return (
      <>
        <h1 className="font-serif text-2xl font-bold">Website</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {web.map((e, key) => (
            <div
              key={key}
              onClick={() => {
                openDialog(true);
                setData(e);
              }}
              className="mb-5 w-full cursor-pointer rounded-lg border bg-[#F8F7F4] shadow-md transition-all duration-300 hover:drop-shadow-xl"
            >
              <BlurFade delay={0.25 + key * 0.1} inView>
                <ProjectCard data={e} />
              </BlurFade>
            </div>
          ))}
        </div>
      </>
    );
};

const Mobile = ({ data, openDialog, setData }: SectionProps) => {
  if (data.length > 0)
    return (
      <>
        <h1 className="font-serif text-2xl font-bold">Aplikasi Mobile</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {data.map((e, key) => (
            <div
              key={key}
              onClick={() => {
                openDialog(true);
                setData(e);
              }}
              className="mb-5 w-full cursor-pointer rounded-lg border bg-[#F8F7F4] shadow-md transition-all duration-300 hover:drop-shadow-xl"
            >
              <BlurFade delay={0.25 + key * 0.1} inView>
                <ProjectCard data={e} />
              </BlurFade>
            </div>
          ))}
        </div>
      </>
    );
};

type CardType = {
  data: EttaProject;
  isMobile?: boolean;
};

const ProjectCard = ({ data, isMobile }: CardType) => {
  return (
    // <MagicCard gradientColor="#fff7ed" className="mb-3">
    <>
      <div className="gap-x-5 rounded-t-lg px-4 pt-4">
        <img
          src={`${CMS_API_BASE_URL}${data.image?.url}`}
          alt={String(data.image?.alt)}
          className={cn(
            "mb-2 rounded object-cover object-top",
            isMobile ? "" : "aspect-video",
          )}
        />
        <p className="text-lg font-bold">{data.projectName}</p>
      </div>
      <div className="space-y-2 px-4 pb-4">
        <p className="text-sm">
          <span className="font-bold">Role:</span> {data.role}
        </p>
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {data.tags &&
            data.tags.map((e, key) => (
              <span
                key={key}
                className="flex items-center rounded-full border border-gray-700 bg-blue-300 px-2 py-0.5 text-xs shadow-sm"
              >
                {e}
              </span>
            ))}
        </div>
      </div>
      <div className="space-y-2 px-4 pb-4">
        <p className="text-sm leading-tight">{data.description}</p>
      </div>
    </>
    // </MagicCard>
  );
};
