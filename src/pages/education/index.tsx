import * as React from "react";
import Lottie from "lottie-react";

import { Layout } from "@/components/Layout";
import animation from "../../assets/Education.json";

import type { HeadFC, PageProps } from "gatsby";

const Education: React.FC<PageProps> = () => {
  return (
    <Layout childrenClassName="flex md:gap-x-10 justify-center items-center">
      <div className="hidden w-[300px] pb-5 md:block lg:w-[470px] xl:w-[490px]">
        <Lottie animationData={animation} loop={true} />
      </div>
      <div className="pb-5">
        <ol className="relative ml-1 space-y-5 border-s-2 border-gray-400">
          <li className="ms-5">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-purple-900 bg-purple-700"></div>
            <time className="mb-1 text-sm font-normal italic leading-none text-gray-900 ">
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
          <li className="ms-5">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-purple-900 bg-purple-700"></div>
            <time className="mb-1 text-sm font-normal italic leading-none text-gray-900 ">
              2013 - 2016
            </time>
            <h3 className="d text-lg font-semibold text-gray-900">
              SMA Negeri 1 Balige
            </h3>
            <p className="text-base font-normal text-gray-500 ">
              Science Major
            </p>
          </li>
        </ol>
      </div>
      {/* <div className="mx-20 mt-10">
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
      </div> */}
    </Layout>
  );
};

export default Education;

export const Head: HeadFC = () => <title>Margaretta | Education</title>;
