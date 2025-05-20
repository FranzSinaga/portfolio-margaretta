/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { website } from "./website";
import { mobile } from "./mobile";

import BlurFade from "~/components/magicui/blur-fade";
import { cn } from "~/lib/utils";
import { useState } from "react";
import { ProjectDialog } from "./project-dialog";

type DetailType = (typeof website)[0];

export default function Projects() {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<DetailType | null>(null);
  return (
    <div className="mx-5 mt-4">
      <ProjectDialog data={data} open={open} setOpen={(e) => setOpen(e)} />
      <div className="mx-auto max-w-[1200px] space-y-3">
        <Websites
          openDialog={(e) => setOpen(e)}
          setData={(data) => setData(data)}
        />
        <Mobile
          openDialog={(e) => setOpen(e)}
          setData={(data) => setData(data)}
        />
      </div>
    </div>
  );
}

type SectionProps = {
  openDialog: (e: boolean) => void;
  setData: (data: DetailType) => void;
};

const Websites = ({ openDialog, setData }: SectionProps) => {
  return (
    <>
      <h1 className="font-serif text-2xl font-bold">Website</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {website.map((e, key) => (
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

const Mobile = ({ openDialog, setData }: SectionProps) => {
  return (
    <>
      <h1 className="font-serif text-2xl font-bold">Aplikasi Mobile</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mobile.map((e, key) => (
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
  data: (typeof website)[0];
  isMobile?: boolean;
};

const ProjectCard = ({ data, isMobile }: CardType) => {
  return (
    // <MagicCard gradientColor="#fff7ed" className="mb-3">
    <>
      <div className="gap-x-5 rounded-t-lg px-4 pt-4">
        <img
          src={data.image}
          alt={data.project}
          className={cn(
            "mb-2 rounded object-cover object-top",
            isMobile ? "" : "aspect-video",
          )}
        />
        <p className="text-lg font-bold">{data.project}</p>
      </div>
      <div className="space-y-2 px-4 pb-4">
        <p className="text-sm">
          <span className="font-bold">Role:</span> {data.role}
        </p>
        <div className="flex flex-wrap gap-x-2 gap-y-1">
          {data.tools.map((e, key) => (
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
