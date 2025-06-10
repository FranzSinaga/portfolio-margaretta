import { MagicCard } from "~/components/magicui/magic-card";
import { course as pj } from "./course";
import BlurFade from "~/components/magicui/blur-fade";
import { Link2 } from "lucide-react";

export default function Projects() {
  const course = pj.filter((e) => e.types.toLowerCase() !== "eksplorasi");
  const eksplorasi = pj.filter((e) => e.types.toLowerCase() === "eksplorasi");
  return (
    <div className="mx-5 mb-8 mt-4">
      <div className="mx-auto max-w-[1200px] space-y-3">
        <h1 className="font-serif text-2xl font-bold">Eksplorasi</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {eksplorasi.map((e, key) => (
            <BlurFade key={key} delay={0.25 + key * 0.1} inView>
              <MagicCard
                gradientColor="#fff7ed"
                className="mb-3 w-full rounded-lg border bg-[#F8F7F4] shadow-md transition-all duration-300 hover:drop-shadow-xl"
              >
                <div className="mt-3 space-y-2 px-4 pb-4">
                  <a href={e.redirect} target="_blank" rel="noreferrer">
                    <img
                      src={e.imageUrl}
                      alt={e.imageUrl}
                      className="aspect-video w-auto rounded-lg border-2 bg-cover object-cover object-top shadow-md"
                    />
                    <p className="mt-3 text-lg font-bold">{e.title}</p>
                  </a>
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
