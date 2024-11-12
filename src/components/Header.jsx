import React from "react";
import headerimg from "../Assets/header.png"
import spspm from "../Assets/spspm.png"
import nba from "../Assets/nba.png"
import naac from "../Assets/naac.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination , Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import SecNav from "./SecNav"


export const IoMdArrowDropright="▶";

export default function Header (){
    return (
        <div style={{position:"fixed",top:0,zIndex:11,backgroundColor:"white"}} >
        <main className="w-screen flex justify-between  ">
           
        <div className="ml-[15%]">
            <Swiper
        effect={'cube'}
        loop={true}
        speed={800}
        autoplay={{
            delay: 300, // Time in ms between each slide
            disableOnInteraction: false, // Allows autoplay to continue after user interaction
            reverseDirection:true
          }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        modules={[EffectCube, Autoplay]}
        className="h-32 w-32 ml-32 "
        style={{}} 
      >
        <SwiperSlide>
          <img src={spspm} className="h-32 w-32"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={spspm} className="h-32 w-32" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spspm} className="h-32 w-32" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={spspm} className="h-32 w-32"/>
        </SwiperSlide>
      </Swiper>

      </div>
      <img src={headerimg} className="h-32  "></img>

        <div className="mr-[15%]">



       
      <Swiper
        effect={'cube'}
        
        loop={true}
        speed={800}
        autoplay={{
            delay: 300, // Time in ms between each slide
            disableOnInteraction: false, // Allows autoplay to continue after user interaction
            reverseDirection:true
          }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        
        modules={[EffectCube, Autoplay]}
        className="h-32 w-32 "
      >
        <SwiperSlide>
          <img src={naac} className="h-32 w-32"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={nba} className="h-32 w-32" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={naac} className="h-32 w-32" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={nba} className="h-32 w-32"/>
        </SwiperSlide>
      </Swiper>
      </div>

        </main>
        <SecNav/>
        </div>
    )
}