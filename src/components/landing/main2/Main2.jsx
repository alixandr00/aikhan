import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Main2.css";
import { Link } from "react-router-dom";
import { Forma } from "../forma/Forma";
import { Lessons } from "../lessons/Lessons";
import { FreeLesson } from "../../freelesson/FreeLesson";

export const Main2 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    AOS.init({
      offset: 100, // Начинать анимацию при достижении элемента с отступом в 100 пикселей от верха окна
      duration: 500, // Длительность анимации 1 секунда
      easing: "ease-in-out", // Использовать эффект плавного входа и выхода
      delay: 100, // Начать анимацию с задержкой в 200 миллисекунд
      once: false, // Анимация должна произойти только один раз
      anchorPlacement: "top-center", // Якорь для анимации - верхний центр
    });
  }, []);
  //   data-aos="fade-right"

  return (
    <div className="bg-[rgb(17,17,17)] pb-12">
      <div className="flex flex-col cd:px-[10rem] px-[3rem]  ">
        <p
          data-aos="fade-right"
          className="text-[red] cd:text-[2rem] text-[1rem] mt-8 text-center"
        >
          “Түркия менен бизнес” проекттисинде эмнелер берилет?:
        </p>
      </div>
      <div className="flex flex-wrap  justify-center mt-12 gap-8 ">
        <div
          data-aos={isMobile ? "fade-right" : "fade-down-right"}
          // data-aos="fade-down-right"
          className="w-[19rem]  flex justify-center items-center px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  cd:text-[1.3rem] text-[1rem] font-extrabold">
            - 1,5 жылдан бери топтолгон оптом/розница поставщиктердин
            данныйлары,телеграм каналдары
          </p>
        </div>
        <div
          data-aos="flip-left"
          className="w-[19rem] flex justify-center items-center px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460]  "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            - Поставщиктер менен иштешүү жолдору
          </p>
        </div>
        <div
          data-aos="flip-right"
          className="w-[19rem] flex justify-center items-center px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            - КР/ Россияга товар алдыруу жолдору
          </p>
        </div>
        <div
          data-aos={isMobile ? "fade-right" : "fade-down-left"}
          // data-aos="fade-down-left"
          className="w-[19rem] flex  justify-center items-center px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            - Карголордун данныйлары/ иштешүү жолдору
          </p>
        </div>
        <div
          data-aos="fade-up-right"
          className="w-[19rem] flex justify-center items-center px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            - КРда туруп эле Түркияга онлайн акча которуу жолдору
          </p>
        </div>
        <div
          data-aos="flip-up"
          className="w-[19rem] flex  justify-center items-center px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            - Товар тандоо жолдору
          </p>
        </div>
        <div
          data-aos="flip-down"
          className="w-[19rem] flex justify-center items-center px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            - Онлайн байер болуп иштеп, киреше табуу жолдору
          </p>
        </div>
        <div
          data-aos={isMobile ? "fade-right" : "fade-up-left"}
          // data-aos="fade-up-left"
          className="w-[19rem] flex  justify-center items-center px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            - Розница товар алдыруу жолдору
          </p>
        </div>
        <div
          data-aos={isMobile ? "fade-right" : "fade-up-left"}
          // data-aos="fade-up-left"
          className="w-[19rem] flex  justify-center items-center px-12 py-8 rounded-[1rem]  border-2 border-[#0f3460] "
        >
          <p className="text-white  text-[1.3rem] font-extrabold">
            - Түркияга акысыз жолдомо мүмкүнчүлүгү ( 1 кишиге)
          </p>
        </div>
      </div>

      {/* <Link className="flex justify-center mt-12">
        <div className="border-2 border-[#0f3460] cursor-pointer">
          <p className="text-white cd:text-[1,5rem] py-3 px-8 text-[1rem] cd:text-start text-center">
            АКЫСЫЗ САБАК(WILDBERRIES'ТЕ СООДА КЫЛУУ)
          </p>
        </div>
      </Link> */}
      <FreeLesson />
    </div>
  );
};
