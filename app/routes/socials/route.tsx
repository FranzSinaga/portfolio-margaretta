import { MicroBlog1, MicroBlog2, MicroBlog3 } from "~/components/micro-blog";
import seemore from "~/assets/blog-3/1.png";
import { FaMedium } from "react-icons/fa";
import { Linkedin, Mail, MoveRight } from "lucide-react";
import { MetaFunction } from "@remix-run/node";

const socials = [
  {
    href: "https://www.linkedin.com/in/margaretta-r-v-simanjuntak-18261115b/",
    icon: <Linkedin size={50} className="text-white" />,
  },
  {
    href: "mailto:margaretharuth5@gmail.com",
    icon: <Mail size={50} className="text-white" />,
  },
  {
    href: "https://medium.com/@margaretharuth5",
    icon: <FaMedium size={50} className="text-white" />,
  },
];

export const meta: MetaFunction = () => {
  return [{ title: "Margaretta | Social Media" }];
};

export default function Socials() {
  return (
    <div className="space-y-3 md:mx-5">
      <div className="mt-5 space-y-3">
        <p className="text-2xl font-semibold">Youtube</p>
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
          <div className="h-[280] items-center justify-center rounded-lg border-gray-600 md:flex md:border-2 md:border-dashed md:bg-gray-200">
            <a
              href="https://www.youtube.com/@margarettaruth6004"
              target="_blank"
              className="flex gap-x-4 rounded-full border-2 border-white bg-gradient-to-r from-fuchsia-600 to-purple-600 p-2 px-12 font-semibold text-white hover:bg-purple-800"
              rel="noreferrer"
            >
              See More <MoveRight />
            </a>
          </div>
          {/* <a
            href="https://www.youtube.com/@margarettaruth6004"
            target="_blank"
            className="to-purple-6000 flex gap-x-4 rounded-full border-2 border-white bg-gradient-to-r from-fuchsia-600 to-purple-600 p-2 px-12 font-semibold text-white hover:bg-purple-800 md:hidden"
            rel="noreferrer"
          >
            See More <MoveRight />
          </a> */}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-2xl font-semibold">Instagram</p>
        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <MicroBlog1 />
          <MicroBlog2 />
          <MicroBlog3 />

          <div className="relative">
            <img src={seemore} alt="see more" className="rounded-lg blur-sm" />
            <div
              className="absolute left-[50%] top-[50%] items-center justify-center"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <a
                href="https://www.instagram.com/jaditaubareng/"
                target="_blank"
                className="flex gap-x-4 whitespace-nowrap rounded-full border-2 border-white bg-gradient-to-r from-fuchsia-600 to-purple-600 p-2 px-12 text-sm font-semibold text-white hover:bg-purple-800"
                rel="noreferrer"
              >
                See More <MoveRight />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          <p className="text-2xl font-semibold">Others</p>
          <div className="mb-10 flex gap-x-3">
            {socials.map((e, key) => (
              <div
                key={key}
                className="flex items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-600 to-purple-600 p-3"
              >
                <a href={e.href} target="_blank" rel="noreferrer">
                  {e.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
