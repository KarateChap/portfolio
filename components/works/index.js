import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import workData from "@models/data.json";
import Angular from "@public/stack/Angular.png";
import Firebase from "@public/stack/Firebase.png";
import Javascript from "@public/stack/Javascript.png";
import Ionic from "@public/stack/Ionic.png";
import Html from "@public/stack/Html.png";
import Css from "@public/stack/Css.png";
import Java from "@public/stack/Java.png";
import Cpp from "@public/stack/Cpp.png";
import MySql from "@public/stack/MySql.png";
import Cs from "@public/stack/Cs.png";

const STACK = {
  angular: Angular,
  firebase: Firebase,
  javascript: Javascript,
  ionic: Ionic,
  html: Html,
  css: Css,
  java: Java,
  cpp: Cpp,
  mySql: MySql,
  cs: Cs,
};

export default function Works(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [count, setCount] = useState(0);

  const [currentWork, setCurrentWork] = useState(workData[0]);


  const prevWorkHandler = () => {

    if(count > 0){
      setCount(--count);
    }
    if(count === 0){
      setCount(6)
    }
  }

  const nextWorkHandler = () => {

    if(count < workData.length){
      setCount(++count);
    }

    if(count === workData.length){
      setCount(0);
      console.log(count);
    }
  }

  useEffect(() => {
    setCurrentWork(workData[count]);
  },[count])


  return (
    <div className="w-full h-[100vh] p-10 flex flex-col justify-center items-center gap-10 select-none" id="works">
      <h1 className="text-4xl font-bold">My Works</h1>
      <div className="w-full h-[auto] border border-1 border-yellow-300 rounded-xl">
        <div className="w-full h-[60px] rounded-tr-xl rounded-tl-xl border border-1 border-yellow-300 flex sm:justify-center pl-5 sm:pl-0 items-center gap-10 relative">
          <MdOutlineKeyboardArrowLeft className="text-yellow-300 text-2xl cursor-pointer" onClick={prevWorkHandler}/>
          <h1 className="text-xl font-bold">/</h1>
          <MdOutlineKeyboardArrowRight className="text-yellow-300 text-2xl cursor-pointer" onClick={nextWorkHandler}/>

          <div className="absolute w-[150px] h-[102%] right-[-2px] rounded-tr-xl border border-1 border-yellow-300 flex justify-center items-center">
            <div className="w-[50px] border border-1 border-yellow-300 h-[103%] flex justify-center  select-none">
              <h1 className="text-5xl">-</h1>
            </div>
            <div className="w-[50px] border border-1 border-yellow-300 h-[103%] relative">
              <div className="w-[20px] h-[15px] border-2 absolute top-6 left-3 bg-[#0a0a0a] z-10"></div>
              <div className="w-[20px] h-[15px] border-2 absolute top-5 left-5"></div>
            </div>
            <div className="w-[50px] border border-1 border-yellow-300 h-[103%] rounded-tr-xl flex justify-center items-center">
              <AiOutlineClose className="text-2xl" />
            </div>
          </div>
        </div>

        <div className="w-full h-[auto] flex flex-col lg:flex-row flex-1 md:gap-10 gap-2 md:p-10 p-3 select-none items-center">
          {workData && (
            <>
              <div className="flex flex-1 justify-center items-center w-full md:max-w-[550px]">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  grabCursor={true}
                  navigation
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[EffectCoverflow, FreeMode, Navigation, Thumbs]}
                  className="mySwiperTeamV2 hidden 2xl:inline-grid "
                >
                  {currentWork.images.map((image) => {
                    return (
                      <SwiperSlide className="mySwiperTeam-slide" key={image}>
                        <div className="max-w-[280px] sm:max-w-[350px]">
                        <Image
                          src={image}
                          alt="/"
                          width={430}
                          height={500}
                        />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="flex flex-1 flex-col gap-3 justify-center md:p-10 p-3   ">
                <h1 className="text-3xl font-bold text-yellow-300">
                  {currentWork.name}
                </h1>
                <h1 className="text-md">{currentWork.description}</h1>
                <h1 className="text-md">
                  Year Created:
                  <span className="text-yellow-300 ml-1">
                    {currentWork.yearCreated}
                  </span>
                </h1>
                <h1 className="flex flex-col md:flex-row">
                  <span>Repository:</span>
                  <span className="text-yellow-300 md:ml-1">
                    <a
                      href={currentWork.repository}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {currentWork.repository}
                    </a>
                  </span>
                </h1>
                <div className="flex mt-3 gap-3 item-center">
                  <h1>Tech Stack:</h1>
                  <div className="flex gap-2">
                    {
                      currentWork.techStack.map((stack) => {
                        return (
                          <Image key={stack} src={STACK[stack]} alt="/" width={25} height={25} />
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
