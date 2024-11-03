import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./custom-swiper.css";

import Img1 from "~/assets/blog-1/1.png";
import Img2 from "~/assets/blog-1/2.png";
import Img3 from "~/assets/blog-1/3.png";
import Img4 from "~/assets/blog-1/4.png";
import Img5 from "~/assets/blog-1/5.png";
import Img6 from "~/assets/blog-1/6.png";
import Img7 from "~/assets/blog-1/7.png";
import Img8 from "~/assets/blog-1/8.png";
import Img9 from "~/assets/blog-1/9.png";

export function MicroBlog1() {
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
      <SwiperSlide>
        <img src={Img1} alt={`micro-blog-1`} className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img2} alt={`micro-blog-1`} className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img3} alt={`micro-blog-1`} className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img4} alt={`micro-blog-1`} className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img5} alt={`micro-blog-1`} className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img6} alt={`micro-blog-1`} className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img7} alt={`micro-blog-1`} className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img8} alt={`micro-blog-1`} className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img9} alt={`micro-blog-1`} className="rounded-lg" />
      </SwiperSlide>
    </Swiper>
  );
}
