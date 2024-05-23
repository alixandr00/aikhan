import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Main3.css";

export const Main3 = () => {
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
    <div className="mt-8 flex items-center flex-col pb-8">
      <p
        data-aos="fade-down"
        className="cd:text-[3rem] text-[1.5rem] font-extrabold"
      >
        Бул окуу кимдер үчүн ?
      </p>
      <div>
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          1:
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[18rem]  font-extrabold cd:text-[1rem] text-[0.7rem] text-center mt-4 "
        >
          - Дүкөнү бар бизнесменден үчүн
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          2:
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[18rem]  font-extrabold cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          - Дордойдо контейнери барлар үчүн
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          3:
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[18rem]  font-extrabold cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          - Базарда иштегендер үчүн
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          4:
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[18rem]  font-extrabold cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          - Бизнес баштайм деп жүргөндөр үчүн
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          5:
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[18rem] font-extrabold cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          - Байер болуп иштеп, акча табам дегендер үчүн
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          6:
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[18rem]  font-extrabold cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          - Жөн гана розница товар алгысы келгендер үчүн
        </p>
      </div>
      <div className="mt-4">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="text-center font-bold cd:text-[1.3rem] text-[0.9rem]"
        >
          7:
        </p>
        <p
          data-aos="fade-right"
          className="cd:w-[70rem] w-[18rem]  font-extrabold cd:text-[1rem] text-[0.7rem] text-center mt-4"
        >
          - Түркияга путевка утуп алгысы келгендер үчүн
        </p>
      </div>
    </div>
  );
};
