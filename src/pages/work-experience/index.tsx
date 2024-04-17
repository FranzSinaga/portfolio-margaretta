import * as React from "react";
import { Building2 } from "lucide-react";

import { Layout } from "@/components/Layout";

import type { HeadFC, PageProps } from "gatsby";
import we from "./work-experience.json";

const WorkExperience: React.FC<PageProps> = () => {
  const data = we;

  return (
    <Layout>
      <div className="my-5 flex flex-col items-center justify-center space-y-5 align-middle">
        {data.map((e, key) => (
          <div
            key={key}
            className="flex flex-col gap-x-10 gap-y-2 md:grid md:grid-cols-4  xl:w-full"
          >
            {e.imageUrl ? (
              <div className="md:col-span-1 md:justify-self-end">
                <img
                  src={e.imageUrl}
                  alt={e.imageUrl}
                  className="h-20 rounded-md"
                />
              </div>
            ) : (
              <div className="flex h-20 w-20 items-center justify-center rounded-md bg-gray-400 md:col-span-1 md:justify-self-end">
                <Building2 className="text-black" size={50} />
              </div>
            )}

            <div className="md:col-span-3 ">
              <p className="text-xl font-semibold">
                {e.name} | {e.place} |{" "}
                <span className="font-normal italic">{e.position}</span>
              </p>
              <p>{e.periode}</p>
              <ol className="mt-3 xl:w-full">
                {e.responsibilities.map((e, key) => (
                  <li
                    key={key}
                    className="mr-10 ms-10 list-disc md:text-justify "
                  >
                    {e}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default WorkExperience;

export const Head: HeadFC = () => <title>Margaretta | Work Experience</title>;
