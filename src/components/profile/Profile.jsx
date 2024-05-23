import React, { useState } from "react";
import "./Profile.css";
import Image1 from "./image2.png";
import Image2 from "./image.png";
import { FaWhatsapp } from "react-icons/fa";

export const Profile = () => {
  const [image, setImage] = useState(Image1);

  return (
    <div className="h-[60vh] ">
      <div className="bg-[#000000] h-[20vh]"></div>
      <div className="bg-[#000000] h-[55vh] flex justify-center">
        <div className="bg-[white] rounded-t-[2rem] h-[40vh] w-[30rem]">
          <div className="flex justify-center">
            <img
              className="w-[10rem] h-[10rem] rounded-[50%] border-[0.5rem] border-[white] mt-[-5rem]"
              src={image}
              alt="Profile"
              onMouseEnter={() => setImage(Image2)}
              onMouseLeave={() => setImage(Image1)}
            />
          </div>
          <div className="flex flex-col items-center">
            <p>Эксперт</p>
            <p className="text-[1.3rem] font-bold">Айкан Бакытбек кызы</p>
            <p className="px-2 mt-2 text-center">
              Түркия менен товарный бизнес боюнча 2 жылдык тажрыйбасы бар. 3
              жылдан бери Түркияда окуйт, иштейт. Миллиондогон акчаларга
              Түркиядан башка өлкөлөргө оптом товар жиберет.
            </p>
            <div className="social-icons">
              <a
                href="http://wa.me/905526727690"
                className="icon icon-telegram"
              >
                <FaWhatsapp size="30px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
