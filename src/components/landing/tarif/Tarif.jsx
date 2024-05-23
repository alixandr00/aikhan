import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import {
  Instagram,
  PlusIcon,
  Telegram,
  Vk,
  Whatsapp,
  XIcon,
  Youtube,
} from "../../../assets";
import { Modal1 } from "../../modal/Modal1";
import { Modal3 } from "../../modal/Modal3";
import { Modal4 } from "../../modal/Modal4";
import { Link } from "react-router-dom";
// import "./Tarif.css";

export const Tarif = () => {
  const [open1, setOpen1] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
  const openCloseHandler1 = () => {
    setOpen1(!open1);
  };
  const openCloseHandler3 = () => {
    setOpen3(!open3);
  };
  const openCloseHandler4 = () => {
    setOpen4(!open4);
  };
  useEffect(() => {
    AOS.init({
      offset: 100, // Начинать анимацию при достижении элемента с отступом в 100 пикселей от верха окна
      duration: 300, // Длительность анимации 1 секунда
      easing: "ease-in-out", // Использовать эффект плавного входа и выхода
      delay: 100, // Начать анимацию с задержкой в 200 миллисекунд
      once: false, // Анимация должна произойти только один раз
      anchorPlacement: "top-center", // Якорь для анимации - верхний центр fewnflkewnflkwen
    });
  }, []);
  return (
    <div className="flex flex-col  items-center bg-[rgb(16,16,16)]  ">
      <div className="cd:w-[70rem] w-[20rem] cd:h-[50vh] h-[50vh]   mt-8 pll ">
        <p
          data-aos={isMobile ? "fade-right" : "fade-left"}
          className="cd:text-[3rem] text-[1.2rem] cd:ml-0 ml-[4rem] centeerr  font-extrabold text-white  cd:text-start text-center"
        >
          КУРС БААСЫ - <span className=" text-[yellow]">10.000сом</span>
        </p>
        <p className="text-[white] cd:text-[1.5rem] text-[1rem] cd:ml-0 ml-4 mb-2">
          Азыр катталгандарга 50%дык арзандатуу менен 5000сом 😳
        </p>
        <div className="flex gap-20 pl-4 ">
          <div className="text-[1.1rem]">
            <p className=" text-[#4b3eff] " data-aos="fade-right">
              -Проект сабактары телеграмда өткөрүлөт/берилет. 1 ай кайтарым
              байланыш( сабактарга 3 ай доступ)
            </p>
            <div className=" h-[20vh] flex justify-center  border-b-2 border-[white]  ">
              <a
                href="http://wa.me/905526727690"
                data-aos="fade-up"
                className="bg-[#16213e] w-[15rem] cursor-pointer h-[7vh] flex justify-center items-center mt-12 "
              >
                <p className="text-[#e94560] font-extrabold ">КАТТАЛУУ</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="cd:w-[50rem] w-[20rem] cd:text-[2rem] text-[1.3rem] pb-12 text-[white] text-center">
          БУЛ МҮМКҮНЧҮЛҮКТҮ КОЛДОН ЧЫГАРБАҢЫЗ! Түркияга 7 күн акысыз жолдомо
          5-июнь проектке катталгандардын арасынан рандомно тандалат ✅
        </p>
      </div>
      {/* <div className="w-[75%] h-[110vh] hei">
        <p
          data-aos="fade-right"
          className="text-white md:text-[3rem] text-[1.5rem] font-bold mb-8"
        >
          КОП БЕРИЛГЕН СУРООЛОРГО ЖООП
        </p>
        {faqData.map((faq, index) => (
          <div key={index}>
            <div
              className="flex justify-between items-center border-t-2 border-[white] cursor-pointer h-[10vh]"
              onClick={() => toggleExpand(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p
                data-aos="fade-right"
                className="md:text-[1.5rem] text-[1rem] text-[white]"
              >
                {faq.question}
              </p>
              {expandedIndex === index ? (
                <XIcon fill="#00BFFF" className="icons" />
              ) : (
                <PlusIcon
                  data-aos={isMobile ? "fade-right" : "fade-left"}
                  fill={hoveredIndex === index ? "#00BFFF" : "#8A2BE2"}
                  className="icons"
                />
              )}
            </div>
            <div
              className={`transition-all duration-1000 overflow-hidden ${
                expandedIndex === index ? "max-h-[200px]" : "max-h-0"
              }`}
            >
              <p className="md:text-[1rem] text-[0.8rem] pt-4 pb-10 text-[white]">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
        <div className="border-t-2 border-[white] "></div>
      </div> */}
      <p
        data-aos="fade-down"
        className="text-white cd:text-[3rem] text-[1rem] font-bold "
      >
        Сизди кызыктырган суроолорду ватсапка жазыңыз
      </p>
      <div className="flex cd:flex-nowrap flex-wrap justify-center gap-4 mt-12"></div>
      <div className="flex cd:flex-nowrap flex-wrap justify-center gap-4 mt-4">
        <a
          data-aos="zoom-in"
          href="http://wa.me/905526727690"
          className="w-[20rem] h-[8vh] bg-[#1dba1d] rounded-[0.5rem] flex justify-center items-center mb-[15rem]"
        >
          <Whatsapp fill="white" />
        </a>
      </div>
    </div>
  );
};
