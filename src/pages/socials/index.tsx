import * as React from "react";

import { Layout } from "@/components/Layout";
import { MicroBlog1, MicroBlog2, MicroBlog3 } from "@/components/socials";

import type { HeadFC, PageProps } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";
import { Linkedin, Mail, MoveRight } from "lucide-react";

const Contacts: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>
        <p className="mb-5 text-2xl font-semibold">Youtube</p>
        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
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
          <div className="hidden h-[280] items-center justify-center rounded-lg border-2 border-dashed border-gray-600 bg-gray-200 md:flex">
            <a
              href="https://www.youtube.com/@margarettaruth6004"
              target="_blank"
              className="flex gap-x-4 rounded-full border-2 border-white bg-purple-700 p-2 px-12  font-semibold text-white hover:bg-purple-800"
              rel="noreferrer"
            >
              See More <MoveRight />
            </a>
          </div>
          <a
            href="https://www.youtube.com/@margarettaruth6004"
            target="_blank"
            className="flex gap-x-4 rounded-full border-2 border-white bg-purple-700 p-2 px-12 font-semibold  text-white hover:bg-purple-800 md:hidden"
            rel="noreferrer"
          >
            See More <MoveRight />
          </a>
        </div>
      </div>

      <div>
        <p className="mb-5 mt-10  text-2xl font-semibold">Instagram</p>
        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
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
              className="absolute left-[50%] top-[50%] items-center justify-center "
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <a
                href="https://www.instagram.com/etha040321/"
                target="_blank"
                className="flex gap-x-4 whitespace-nowrap rounded-full border-2 border-white bg-purple-700 p-2 px-12 text-sm  font-semibold text-white hover:bg-purple-800"
                rel="noreferrer"
              >
                See More <MoveRight />
              </a>
            </div>
          </div>
        </div>
        <p className="mb-5 mt-10  text-2xl font-semibold">Others</p>
        <div className="mb-10 flex gap-x-3">
          <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-black">
            <a
              href="https://www.linkedin.com/in/margaretta-r-v-simanjuntak-18261115b/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={50} className="text-white" />
            </a>
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-black">
            <a
              href="mailto:margaretharuth5@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Mail size={50} className="text-white" />
            </a>
          </div>
          <a
            href="https://medium.com/@margaretharuth5"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../../images/medium.png"
              alt="medium"
              className="w-20 rounded-lg"
            />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;

export const Head: HeadFC = () => <title>Margaretta | Social Media</title>;
