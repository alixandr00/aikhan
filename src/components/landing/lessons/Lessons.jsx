import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

export const Lessons = () => {
  return (
    <div className="relative h-[100vh] bg-[rgb(17,17,17)]">
      <p className="text-center text-[2rem] text-[white] py-12">Видео уроки</p>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1.5}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/Hp9wUEDasY4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/jMCOyUgKhqU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/nXI9CN5a6ew"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/7MnnYT9hWLg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/GCNEqFJM3GA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/zc-4grfULhg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/1nkoP6NosxU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/oDbDuu17p7I"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
      </Swiper>
      <button
        style={{
          position: "absolute",
          left: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          fontSize: "40px",
        }}
      >
        <FaChevronCircleLeft fill="#d2d2d2" />
      </button>
      <button
        style={{
          position: "absolute",
          right: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          fontSize: "40px",
        }}
      >
        <FaChevronCircleRight fill="#d2d2d2" />
      </button>
    </div>
  );
};
