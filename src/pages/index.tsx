import * as React from "react";
import Lottie from "lottie-react";

import { Layout } from "@/components/Layout";

import type { HeadFC, PageProps } from "gatsby";
import animation from "../assets/Homepage.json";

const Homepage: React.FC<PageProps> = () => {
  return (
    <Layout childrenClassName="flex justify-center items-center">
      <div>
        <p className="text-lg font-bold text-purple-700 lg:text-xl xl:text-2xl ">
          Hi, My Name is
        </p>
        <p className="text-xl font-extrabold leading-tight lg:text-2xl xl:text-4xl">
          <p>
            Margaretta Ruth
            <br />
            Verawati Simanjuntak
          </p>
        </p>
        <p className="mt-5 text-sm font-normal lg:text-base xl:text-xl">
          Technical Writer, Quality Assurance and Quality Control
        </p>
        <button
          type="button"
          className="mt-5 whitespace-nowrap rounded-full bg-purple-700 px-6 py-2 text-center text-base font-bold text-white hover:bg-purple-800 lg:text-lg xl:text-xl"
        >
          <a
            href="mailto:margaretharuth5@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Get To Know Me 👋
          </a>
        </button>
      </div>
      <div className="hidden w-[300px] pb-5 md:block lg:w-[470px] xl:w-[490px]">
        <Lottie animationData={animation} loop={true} />
      </div>
    </Layout>
  );
};

export default Homepage;

export const Head: HeadFC = () => <title>Margaretta</title>;
