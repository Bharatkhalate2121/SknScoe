import React, { useEffect, useRef, useState } from 'react'
import Footerr from '../Assets/Fotter1.jpg'
import { IoLogoYoutube, IoLogoInstagram, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin} from "react-icons/io";
import { FaYoutubeSquare } from "react-icons/fa";

export default function Footer() {
    const count= useRef(0);
    const [rendeer,setredder]=useState(0);
    useEffect(()=>{
        // console.log(count.current)
        count.current=count.current+1
        // console.log(count.current)
})
    return (<>
        <div
            className="relative grid grid-rows-2  bg-scroll h-[350px] bg-transparent"
            style={{ backgroundImage: `url(${Footerr})` }}
        >
            {/* Black overlay */}
            <div className=" left-0 top-0 absolute inset-0 bg-[#000000bf]"></div>

            {/* Content */}
            <div className="absolute  grid-span-1 mx-32  mt-0">
                <div className="grid grid-cols-4 gap-16">
                    <div className="col-span-1 ">
                        <ol className="mt-5 text-white text-x text-start ml-3 flex flex-col gap-2">
                            <li>Academic Calendar</li>
                            <li>Anti Ragging Act</li>
                            <li>RTI Act</li>
                            <li>Mandatory Disclosure</li>
                            <li>College Brochure</li>
                            <li>Safety & Security of Girls & Women</li>
                        </ol>
                    </div>
                    <div className="col-span-1 "></div>
                    <div className="col-span-1 ">
                        <h1 className='ml-3 mt-5 text-xl text-white text-start'>Follow Us</h1>
                        <div className='flex flex-wrap gap-5 ml-3  mt-1 '>
                            <FaYoutubeSquare className='h-10 w-10  text-white justify-text hover:bg-red-600'/>
                            <IoLogoFacebook className='h-10 w-10 bg-white text-gray-800 hover:text-blue-600'/>
                            <IoLogoTwitter className='h-10 w-10 bg-white text-gray-800 hover:text-blue-400'/>
                            <IoLogoInstagram className='h-10 w-10 hover:text-white bg-white text-gray-800   hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'/>
                            <IoLogoLinkedin className='h-10 w-10 bg-white text-gray-800 hover:text-blue-500'/>
                        </div>
                        <h1 className='ml-3 mt-4 text-start  text-2xl text-white'>Visit Counter</h1>
                        <h1 className='ml-3 mt-4 text-start  text-2xl text-white' ><button onClick={()=>{setredder(rendeer+1)}}> click</button>{count.current} </h1>
                        
                    </div>
                    <div className="col-span-1 ">
                    <h1 className='ml-3 mt-5 text-xl text-[#CCCCCC] text-start'>Contact </h1>
                    <h1 className='ml-3 mt-1  text-sm text-[#FFFF66] text-start'>Gat No. 664, SKN Sinhgad college of Engineering A/P Korti, Pandharpur Dist- Solapur (413304)</h1>
                    <h1 className='ml-3 mt-5 text-xl text-[#CCCCCC] text-start'>Mobile No. </h1>
                    <h1 className='ml-3 mt-1  text-sm text-[#FFFF66] text-start'>+91 7350508899</h1>
                    <h1 className='ml-3 mt-5 text-xl text-[#CCCCCC] text-start'>Email </h1>
                    <h1 className='ml-3 mt-1  text-sm text-[#FFFF66] text-start'>principal@sknscoe.ac.in</h1>
                    </div>
                </div>
            </div>
           
            <div className="absolute grid-span-1 mx-2 mt-64 ">
                <hr className='mt-5 w-screen'></hr>
                        <h1 className="mt-5 text-white w-screen text-center ml-3 ">
                        Copyright © 2016 bySKNSCOE,Pandharpur  
                        </h1>
                    
                
            </div>


        </div>
    </>)
}