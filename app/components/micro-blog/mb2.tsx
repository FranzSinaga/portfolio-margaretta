import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./custom-swiper.css";

export function MicroBlog2() {
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
      {[...Array(9)].map((e, index) => (
        <SwiperSlide key={e}>
          <img
            src={`/app/assets/blog-2/${index + 1}.png`}
            alt={`micro-blog-2-${index + 1}.png`}
            className="rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}