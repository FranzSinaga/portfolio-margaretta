import { MagicCard } from "~/components/magicui/magic-card";
import pj from "./course.json";
import BlurFade from "~/components/magicui/blur-fade";
import { Link2 } from "lucide-react";

export default function Projects() {
  return (
    <div className="mx-5 mt-4">
      <div className="mx-auto max-w-[1200px] space-y-3">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pj.map((e, key) => (
            <BlurFade key={key} delay={0.25 + key * 0.1} inView>
              <MagicCard
                gradientColor="#fff7ed"
                className="mb-3 w-full rounded-lg border bg-[#F8F7F4] shadow-md transition-all duration-300 hover:drop-shadow-xl"
              >
                <div className="gap-x-5 rounded-t-lg px-4 pt-4 lg:flex lg:flex-row lg:items-center">
                  <img
                    src={e.imageUrl}
                    alt={e.imageUrl}
                    className="h-14 w-auto rounded-lg bg-cover object-cover"
                  />
                  <div>
                    <p className="text-xl font-bold">{e.title}</p>
                    <p className="text-xs font-normal leading-tight text-gray-700">
                      {e.types}
                      <br />
                      <span className="text-xs italic">{e.periode}</span>
                    </p>
                  </div>
                </div>
                <div className="mt-3 space-y-2 px-4 pb-4">
                  <p className="text-sm leading-tight">{e.description}</p>

                  {e.links.length > 0 && (
                    <div className="space-y-1">
                      <p className="font-medium">Hasil </p>
                      <div className="flex flex-col flex-wrap gap-2">
                        {e.links.map((e, key) => (
                          <a
                            className="flex items-center gap-x-1 text-xs text-blue-700 hover:underline"
                            href={e.url}
                            key={key}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {e.name} <Link2 size={13} />
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
      </div>
    </div>
  );
}
