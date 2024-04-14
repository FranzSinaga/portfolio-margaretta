import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Lottie from "lottie-react";
import animation from "../assets/Homepage.json";
import { Layout } from "@/components/Layout";

const Homepage: React.FC<PageProps> = () => {
  return (
    <Layout childrenClassName="flex justify-center items-center">
      <div>
        <p className="text-purple-700 font-bold text-2xl">Hi, My Name is</p>
        <p className="font-extrabold text-4xl leading-tight">
          <p>
            Margaretta Ruth
            <br />
            Verawati Simanjuntak
          </p>
        </p>
        <p className="font-normal text-xl mt-5">
          Technical Writer, Quality Assurance and  Quality Control
        </p>
        <button className="py-2 px-10 mt-5 bg-purple-700 text-white text-center font-bold text-lg rounded-full hover:bg-purple-800">
          Get To Know Me 👋
        </button>
      </div>
      <div className="xl:w-[390px] w-[600px] pb-5">
        <Lottie animationData={animation} loop={true} />
      </div>
    </Layout>
  );
};

export default Homepage;

export const Head: HeadFC = () => <title>Margaretta</title>;
