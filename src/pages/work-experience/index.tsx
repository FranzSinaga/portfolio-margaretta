import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "@/components/Layout";
import we from "./work-experience.json";
import { Building2 } from "lucide-react";

const WorkExperience: React.FC<PageProps> = () => {
  const data = we;

  return (
    <Layout>
      <div className="space-y-5 m-5 flex flex-col justify-center align-middle items-center">
        {data.map((e, key) => (
          <div
            key={key}
            className="flex flex-col gap-y-2 md:grid md:grid-cols-4 gap-x-10"
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
              <div className="md:col-span-1 w-20 h-20 flex justify-center items-center rounded-md bg-gray-400 md:justify-self-end">
                <Building2 className="text-black" size={50} />
              </div>
            )}

            <div className="md:col-span-3">
              <p className="font-semibold text-xl">
                {e.name} | {e.place} |{" "}
                <span className="font-normal italic">{e.position}</span>
              </p>
              <p>{e.periode}</p>
              <ol className="mt-3">
                {e.responsibilities.map((e, key) => (
                  <li key={key} className="list-disc ms-10 text-justify mr-10">
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
