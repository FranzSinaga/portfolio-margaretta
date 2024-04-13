import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Lottie from "lottie-react";
import animation from "../assets/Homepage.json";
import { Layout } from "@/components/Layout";

const Homepage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex justify-center content-center items-center gap-x-7">
        <div className="pb-5">
          <p className="text-purple-700 font-bold text-[30px] uppercase">
            Hi, My Name is
          </p>
          <p className="font-extrabold text-[50px] leading-tight">
            <p>
              Margaretta Ruth
              <br />
              Verawati Simanjuntak
            </p>
          </p>
          <p className="font-medium text-[20px] pt-10">
            Technical Writer, Quality Assurance and Quality Control
          </p>
          <button className="py-3 px-10 mt-10 bg-purple-700 text-white text-center font-bold text-[20px] rounded-full hover:bg-purple-800">
            Get To Know Me 👋
          </button>
        </div>
        <div className="w-[600px] pb-5">
          <Lottie animationData={animation} loop={true} />
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;

export const Head: HeadFC = () => <title>Margaretta</title>;
