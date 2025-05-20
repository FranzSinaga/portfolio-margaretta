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
      <h1 className="font-serif text-2xl font-bold">Websites</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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
              <ProjectCard
                title={e.title}
                description={e.description}
                image={e.image}
              />
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
      <h1 className="font-serif text-2xl font-bold">Mobile</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
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
              <ProjectCard
                title={e.title}
                description={e.description}
                image={e.image}
                isMobile
              />
            </BlurFade>
          </div>
        ))}
      </div>
    </>
  );
};

type CardType = {
  title: string;
  image: string;
  description: string;
  isMobile?: boolean;
};

const ProjectCard = ({ title, image, description, isMobile }: CardType) => {
  return (
    // <MagicCard gradientColor="#fff7ed" className="mb-3">
    <>
      <div className="gap-x-5 rounded-t-lg px-4 pt-4">
        <img
          src={image}
          alt={title}
          className={cn(
            "mb-2 rounded object-cover object-top",
            isMobile ? "" : "aspect-video",
          )}
        />
        <p className="text-lg font-bold">{title}</p>
      </div>
      <div className="mt-3 space-y-2 px-4 pb-4">
        <p className="text-sm leading-tight">{description}</p>
      </div>
    </>
    // </MagicCard>
  );
};
