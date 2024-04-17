import * as React from "react";

import { Layout } from "@/components/Layout";

import type { HeadFC, PageProps } from "gatsby";
import projects from "./projects.json";

const Projects: React.FC<PageProps> = () => {
  const pj = projects;

  return (
    <Layout>
      <div className="mb-5 mt-10 space-y-5">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pj.map((e, key) => (
            <div key={key} className="w-full rounded-lg border hover:shadow-md">
              <div className="gap-x-5 rounded-t-lg px-4 pt-4 lg:flex lg:flex-row lg:items-center ">
                <img
                  src={e.imageUrl}
                  alt={e.imageUrl}
                  className="h-14 w-auto rounded-lg border bg-cover object-cover"
                />
                <div>
                  <p className="text-xl font-bold">{e.title}</p>
                  <p className="text-sm font-normal">
                    {e.types}
                    <br />
                    <span className="text-xs italic">{e.periode}</span>
                  </p>
                </div>
              </div>
              <div className="mt-5 px-4 pb-4">
                <p className="text-justify text-base font-normal">
                  {e.description}
                </p>

                {e.links.length > 0 && (
                  <div className="mt-5 flex flex-col">
                    <p className="font-medium">Results: </p>
                    {e.links.map((e, key) => (
                      <a
                        className="text-sm text-blue-600 hover:text-blue-800"
                        href={e.url}
                        key={key}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {e.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

export const Head: HeadFC = () => <title>Margaretta | Work Experience</title>;
