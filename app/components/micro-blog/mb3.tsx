import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./custom-swiper.css";

import Img1 from "~/assets/blog-3/1.png";
import Img2 from "~/assets/blog-3/2.png";
import Img3 from "~/assets/blog-3/3.png";
import Img4 from "~/assets/blog-3/4.png";
import Img5 from "~/assets/blog-3/5.png";
import Img6 from "~/assets/blog-3/6.png";
import Img7 from "~/assets/blog-3/7.png";
import Img8 from "~/assets/blog-3/8.png";
import Img9 from "~/assets/blog-3/9.png";
import Img10 from "~/assets/blog-3/10.png";

export function MicroBlog3() {
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
        <img src={Img1} alt={`micro-blog-3`} className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img2} alt={`micro-blog-3`} className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img3} alt={`micro-blog-3`} className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img4} alt={`micro-blog-3`} className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img5} alt={`micro-blog-3`} className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img6} alt={`micro-blog-3`} className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img7} alt={`micro-blog-3`} className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img8} alt={`micro-blog-3`} className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img9} alt={`micro-blog-3`} className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img10} alt={`micro-blog-3`} className="rounded-lg" />
      </SwiperSlide>
    </Swiper>
  );
}
