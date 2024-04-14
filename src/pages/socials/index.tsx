import * as React from "react";

import { Layout } from "@/components/Layout";
import { MicroBlog1, MicroBlog2, MicroBlog3 } from "@/components/socials";

import type { HeadFC, PageProps } from "gatsby";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { StaticImage } from "gatsby-plugin-image";
import { Linkedin, Mail, MoveRight } from "lucide-react";

const Contacts: React.FC<PageProps> = () => {
  return (
    <Layout>
      <p className="text-2xl font-semibold mb-5">Youtube</p>
      <div className="grid grid-cols-4 gap-5  mb-10">
        <div>
          <iframe
            width="100%"
            height="280"
            src="https://www.youtube.com/embed/A2YtGaIVw00?si=DY2rqwhg6yf_VBAi"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="100%"
            height="280"
            src="https://www.youtube.com/embed/ZS3cvS_kXAw?si=HERLsyiuWL3R4KjY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="100%"
            height="280"
            src="https://www.youtube.com/embed/4K32cRd7EFE?si=8msiAMLtG2-IkVkP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex justify-center items-center h-[280] bg-gray-200 border-dashed border-2 border-gray-600 rounded-lg">
          <a
            href="https://www.youtube.com/@margarettaruth6004"
            target="_blank"
            className="flex gap-x-4 p-2 px-12 bg-purple-700 hover:bg-purple-800 rounded-full border-white  border-2 text-white font-semibold"
            rel="noreferrer"
          >
            See More <MoveRight />
          </a>
        </div>
      </div>

      <p className="text-2xl font-semibold  mt-10 mb-5">Instagram</p>
      <div className="grid grid-cols-4 gap-5 mb-10">
        <MicroBlog1 />
        <MicroBlog2 />
        <MicroBlog3 />

        <div className="relative">
          <StaticImage
            src="../../images/seemorebg.png"
            alt="see more backround"
            className="rounded-lg blur-sm"
          ></StaticImage>
          <div
            className="absolute justify-center items-center top-[50%] left-[50%] "
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <a
              href="https://www.instagram.com/etha040321/"
              target="_blank"
              className="flex gap-x-4 whitespace-nowrap p-2 px-12 text-sm bg-purple-700 hover:bg-purple-800 rounded-full border-white  border-2 text-white font-semibold"
              rel="noreferrer"
            >
              See More <MoveRight />
            </a>
          </div>
        </div>
      </div>
      <p className="text-2xl font-semibold  mt-10 mb-5">Others</p>
      <div className="flex gap-x-3 mb-10">
        <div className="w-20 h-20 bg-black flex items-center justify-center rounded-lg">
          <Linkedin size={50} className="text-white" />
        </div>
        <div className="w-20 h-20 bg-black flex items-center justify-center rounded-lg">
          <Mail size={50} className="text-white" />
        </div>
        <StaticImage
          src="../../images/medium.png"
          alt="medium"
          className="w-20 rounded-lg"
        />
      </div>
    </Layout>
  );
};

export default Contacts;

export const Head: HeadFC = () => <title>Margaretta | Social Media</title>;
