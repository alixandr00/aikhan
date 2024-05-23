import React, { useEffect } from "react";
// import CARTEL from "../../../assets/1920.webp";
import "aos/dist/aos.css";
import AOS from "aos";
import "./Main1.css";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

export const Main1 = () => {
  // const [userName, setUserName] = useState("");
  // const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
      delay: 100,
      once: false,
      anchorPlacement: "top-center",
    });

    // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // if (userInfo) {
    //   setUserName(userInfo.displayName);
    // }
  }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem("userInfo");
  //   setUserName("");
  //   navigate("/");
  // };

  return (
    <div className="flex flex-col . items-center bg-[#000000]">
      {/* {userName && <p className="text-white mt-2">{userName}</p>} */}

      {/* {!userName ? (
        <Link to="login">
          <div className="border-2 border-[#0f3460]">
            <p className="text-white cd:text-[1,5rem] py-3 px-8 text-[1rem] cd:text-start text-center">
              РЕГИСТРАЦИЯ
            </p>
          </div>
        </Link>
      ) : (
        <div
          className="border-2 border-[#0f3460] cursor-pointer"
          onClick={handleLogout}
        >
          <p className="text-white cd:text-[1,5rem] py-3 px-8 text-[1rem] cd:text-start text-center">
            Выйти
          </p>
        </div>
      )} */}
      <div data-aos="fade-right" className="mt-8 cd:w-[60rem] w-[16rem]">
        <p className="text-[white] cd:text-[2rem] text-[1rem] text-center">
          <span className="text-[red]"> “Түркия менен бизнес”</span>проектти
          Онлайн окуу - проектке катталгандардын арасынан бир кишиге
          <span className="text-[red]">“ТҮРКИЯГА АКЫСЫЗ ЖОЛДОМО”</span> берилет.
        </p>
      </div>
      {/* Акысыз жолдомодо: */}
      {/* - [ ] Акысыз билет(барып-келүү)
- Акысыз жатакана
- Акысыз тамак-аш
- Стамбулду кыдыруу
- Оптом базарлар менен тааныштыруу
- Бизнес жолун көрсөтүү 7 күн бою */}

      <div className="flex justify-center flex-wrap gap-4 mt-[4rem] pb-20 border-b-2 border-[#0f3460]">
        <div
          data-aos="flip-right"
          className="flex justify-center items-center border-2 border-[#0f3460] w-[17rem] text-[white] "
        >
          <p className="font-bold  text-[#38388a] cd:text-[1.4rem]  text-[1.2rem]">
            - Акысыз жатакана
          </p>
        </div>
        <div
          data-aos="flip-left"
          className="flex justify-center items-center border-2 border-[#0f3460] w-[17rem] text-[white] "
        >
          <p className="font-bold text-[#38388a] cd:text-[1.4rem] text-[1.2rem]">
            - Акысыз тамак-аш
          </p>
        </div>
        <div
          data-aos="flip-right"
          className="flex  justify-center items-center border-2 border-[#0f3460] w-[17rem] text-[white]"
        >
          <p className="text-center font-bold text-[#38388a] cd:text-[1.4rem] text-[1.2rem]">
            - Стамбулду кыдыруу
          </p>
        </div>
        <div
          data-aos="flip-left"
          className="flex justify-center items-center border-2 border-[#0f3460] w-[17rem] text-[white] "
        >
          <p className="text-center font-bold  text-[#38388a] cd:text-[1.4rem] text-[1.2rem]">
            - Оптом базарлар менен тааныштыруу
          </p>
        </div>
        <div
          data-aos="flip-left"
          className="flex justify-center items-center border-2 border-[#0f3460] w-[17rem] text-[white] "
        >
          <p className="text-center font-bold  text-[#38388a] cd:text-[1.4rem] text-[1.2rem]">
            - Бизнес жолун көрсөтүү 7 күн бою
          </p>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap justify-center mb-8 gap-12">
        <div>
          <p
            data-aos="fade-right"
            className="text-[#e94560] cd:text-[1.5rem] text-[1rem]  font-extrabold  text-center"
          >
            Бул мүмкүнчүлүктү колдон чыгарбоо үчүн проект тууралуу маалымат
            алыңыз 👇🏻
          </p>
        </div>
      </div>
    </div>
  );
};
