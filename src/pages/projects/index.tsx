import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "@/components/Layout";
import projects from "./projects.json";

const Projects: React.FC<PageProps> = () => {
  const pj = projects;

  return (
    <Layout>
      <div className="space-y-5 mb-5 mt-10">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="grid grid-cols-2 gap-5">
          {pj.map((e, key) => (
            <div key={key} className="w-full border rounded-lg hover:shadow-md">
              <div className=" px-4 pt-4 rounded-t-lg ">
                <img
                  src={e.imageUrl}
                  alt={e.imageUrl}
                  className="h-20 bg-cover object-cover border rounded-lg"
                />
                <p className="font-bold text-xl mt-2">{e.title}</p>
              </div>
              <div className="px-4 pb-4">
                <p className="font-normal text-base">{e.description}</p>

                {e.links.length > 0 && (
                  <div className="flex flex-col mt-5">
                    <p className="font-medium">Results: </p>
                    {e.links.map((e, key) => (
                      <a
                        className="text-blue-600 text-sm hover:text-blue-800"
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
