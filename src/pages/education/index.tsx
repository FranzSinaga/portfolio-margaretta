import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "@/components/Layout";
import Lottie from "lottie-react";
import animation from "../../assets/Homepage.json";

const Education: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex justify-center content-center items-center gap-x-7">
        <div className="w-[600px] pb-5">
          <Lottie animationData={animation} loop={true} />
        </div>
        <div className="pb-5">
          <ol className="relative ml-1 border-s-2 border-gray-400 ">
            <li className="mb-10 ms-5">
              <div className="absolute w-3 h-3 bg-purple-700 rounded-full mt-1.5 -start-1.5 border border-purple-900"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-900 ">
                2013 - 2016
              </time>
              <h3 className="text-lg font-semibold text-gray-900 d">SMA</h3>
              <p className="text-base font-normal text-gray-500 ">Science</p>
            </li>
            <li className="ms-5">
              <div className="absolute w-3 h-3 bg-purple-700 rounded-full mt-1.5 -start-1.5 border border-purple-900"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-900 ">
                September 2016 - September 2020
              </time>
              <h3 className="text-lg font-semibold text-gray-900 ">
                Institut Teknologi Del | North Sumatera | GPA 3.07
              </h3>
              <p className="text-base font-normal text-gray-500 ">
                Bachelor of Applied Science in Software Engineering Technology
                (B.A.S.S.E.T)
              </p>
            </li>
          </ol>
        </div>
      </div>
      <div className="mx-20 mt-16">
        <h3 className="text-2xl font-semibold">Kegiatan Perkuliahan</h3>
        <div className="my-8 flex justify-around gap-x-3">
          <div className="w-56 h-56 bg-gray-400"></div>
          <div className="w-56 h-56 bg-gray-400"></div>
          <div className="w-56 h-56 bg-gray-400"></div>
          <div className="w-56 h-56 bg-gray-400"></div>
        </div>
        <div className="my-8 flex justify-around gap-x-3">
          <div className="w-56 h-56 bg-gray-400"></div>
          <div className="w-56 h-56 bg-gray-400"></div>
          <div className="w-56 h-56 bg-gray-400"></div>
          <div className="w-56 h-56 bg-gray-400"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Education;

export const Head: HeadFC = () => <title>Margaretta | Education</title>;
