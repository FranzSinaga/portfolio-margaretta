import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ImgTypes } from "../types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../style.css";
// interface Props {
//   blogNumber: number;
// }

export const MicroBlog1 = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(png)/" }
          absolutePath: { regex: "/(/assets/blog-1)/" }
        }
        sort: { base: ASC }
      ) {
        edges {
          node {
            id
            absolutePath
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                placeholder: BLURRED
                width: 600
              )
            }
            base
          }
        }
      }
    }
  `);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
          return `<span class="${className}"></span>`;
        },
      }}
      className="mySwiper"
    >
      {data.allFile.edges.map((img: ImgTypes, key: number) => (
        <SwiperSlide key={key}>
          <GatsbyImage
            image={img.node.childImageSharp.gatsbyImageData}
            alt={`blog-1-page-${key + 1}`}
            className="rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
