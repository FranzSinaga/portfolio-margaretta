import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "@/components/Layout";
import we from "./work-experience.json";

const WorkExperience: React.FC<PageProps> = () => {
  const data = we;

  return (
    <Layout>
      <div className="space-y-5 m-5 flex flex-col justify-center align-middle items-center">
        {data.map((e, key) => (
          <div key={key} className="grid grid-cols-3 gap-x-10">
            <div className="col-span-1 w-32 h-32 bg-gray-400 justify-self-end"></div>
            <div className="col-span-2">
              <p className="font-semibold text-xl">
                {e.name} | {e.place} |{" "}
                <span className="font-normal italic">{e.position}</span>
              </p>
              <p>{e.periode}</p>
              <ol className="mt-3">
                {e.responsibilities.map((e, key) => (
                  <li key={key} className="list-disc ms-10">
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
