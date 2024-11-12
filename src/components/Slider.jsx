import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Correct import for modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Imgstrip from './Imgstrip';
import Slider1 from "../Assets/slider1.jpg"
import Slider2 from "../Assets/slider2.jpg"
import Slider3 from "../Assets/slider3.webp"
import Slider4 from "../Assets/slider4.webp"
import Slider5 from "../Assets/slider5.webp"
import Slider6 from "../Assets/slider6.webp"
import Slider7 from "../Assets/slider7.webp"
import Slider8 from "../Assets/slider8.webp"
import Slider9 from "../Assets/slider9.webp"
import Slider10 from "../Assets/slider10.webp"


import headerimg from "../Assets/header.png";
import spspm from "../Assets/spspm.png";
import nba from "../Assets/nba.png";
import naac from "../Assets/naac.png";

export default function Slider() {
  useEffect(()=>{
    async function feetch(){
      const data=await fetch("https://catfact.ninja/fact")
      const res=await data.json()
      console.log(res)
      // setTimeout(()=>{console.log(data)},3000)
    }
    feetch();
  },[])


  return (
    <>
      <div className='z-0 mt-48' >
        <Swiper
          loop={true}
          
          autoplay={{
            delay: 2000, // Time in ms between each slide
            disableOnInteraction: false, // Allows autoplay to continue after user interaction
            reverseDirection: false,
          }}
          navigation={{
            delay:1000,
            nextEl: '#abc',
            prevEl: '#pqr',
          }}
          modules={[Navigation, Autoplay]}
          className="h-full w-screen z-0"
        >
          <SwiperSlide>
            <img src={Slider1} className=" h-[480px] w-screen" alt="SPSPM" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slider2} className=" h-[480px] w-screen" alt="SPSPM" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slider3} className=" h-[480px] w-screen" alt="SPSPM" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slider4} className=" h-[480px] w-screen" alt="SPSPM" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slider5} className=" h-[480px] w-screen" alt="SPSPM" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slider6} className=" h-[480px] w-screen" alt="SPSPM" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slider7} className=" h-[480px] w-screen" alt="SPSPM" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slider8} className=" h-[480px] w-screen" alt="SPSPM" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slider9} className=" h-[480px] w-screen" alt="SPSPM" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slider10} className=" h-[480px] w-screen" alt="SPSPM" />
          </SwiperSlide>
          
          
        </Swiper>

        {/* Add navigation buttons */}
        <div className="swiper-button-next"   id='abc' >

        </div>
        <div className="swiper-button-prev" id='pqr'></div>
      </div>
      <Imgstrip/>
    </>
  );
}
