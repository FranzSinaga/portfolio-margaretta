import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "@/components/Layout";

const Projects: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="space-y-5 mb-5 mt-10">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="grid grid-cols-3 gap-5">
          {[...Array(9)].map((e) => (
            <div
              key={e}
              className="w-full p-4 border rounded-lg hover:shadow-md"
            >
              <p className="font-semibold text-xl">Judul</p>
              <p className="font-normal text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="p-2 px-6 border text-white bg-purple-700 hover:bg-purple-800 cursor-pointer rounded-lg my-2">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

export const Head: HeadFC = () => <title>Margaretta | Work Experience</title>;
