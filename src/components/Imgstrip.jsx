import React from 'react'
import strip1 from '../Assets/strip1.jpg'
import strip2 from '../Assets/strip2.jpg'
import strip3 from '../Assets/strip3.jpg'
import strip4 from '../Assets/strip4.jpg'
import strip5 from '../Assets/strip5.jpg'
import strip6 from '../Assets/strip6.jpg'
import strip7 from '../Assets/strip7.jpg'

 export default function Imgstrip(){
    return(<><div className='grid grid-rows-1 mx-16 my-2 '>
        <div className='grid grid-cols-8 gap-24 '>
            <div className='col-span-1 '>
                <img src={strip1} alt="" />
            </div>
            <div className='col-span-1 justify-items-center'>
                <img src={strip2} alt="" />
            </div>
            <div className='col-span-1'>
                <img src={strip3} alt="" />
            </div>
            <div className='col-span-1'>
                <img src={strip4} alt="" />
            </div>
            <div className='col-span-1'>
                <img src={strip5} alt="" />
            </div>
            <div className='col-span-1'>
                <img src={strip6} alt="" />
            </div>
            <div className='col-span-2'>
                <img src={strip7} alt="" />
            </div>
        </div>
       </div>
       <marquee direction="left" scrollamount={4} ><a href="#" className=' text-[#337ab7] text-xl' > on August 22nd & 23rd, 2025 • 3rd International Conference on Civil, Mechanical, and Industrial Engineering (ICCMIE-2025) on June 25th & 26th, 2025 • 2nd Aditya-The Solar Mania, 2K25 from March 13th to 16th, 2025 • Institute recognized as a 'Band Performer Institute' in the 'Atal Ranking of Institutions on Innovation Achievements (ARIIA)' for 2021, as declared by the Ministry of Education, Government of India. • Institute received a 4-star rating from the Ministry of Education's Innovation Cell and AICTE for its excellent performance in innovation activities in 2020-21.</a></marquee>
       </>)
 }