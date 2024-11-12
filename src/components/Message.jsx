import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import { data } from '../utils/Context';
import { useContext } from 'react';

export default function Message() {
    const abc=useContext(data);
    return (
        <>
            <div className='grid grid-rows-1 justify-center my-2 mx-48'>
                <div className='grid grid-cols-3  gap-10 '>
                    <div className='col-span-1 border border-gray-200  h-[300px] w-full bgwhitek'>
                        <h2 className='text-white bg-red-700 text-start mt-5 mx-5'>&nbsp;Principles Messge</h2>
                        <div className='grid grid-cols-6'>
                            <img src="#" alt="" className='h-24 w-20 mx-5 mt-1 col-span-2' />
                            <h1 className='text-black col-span-4 text-sm text-start'>
                                <h1 className=' mr-5 mb-2 text-justify'>
                                    Dear Friends,<br></br>
                                    You may be aware about the activities of Sinhgad Institutions established with an objective to provide quality education from school to post graduation programmes in all disciplines. At present Sinhgad Technical Education Society (STES) and its associates namely Savitribai Phule Shikshan Prasarak Mandal(SPSPM)
                                </h1>

                                <a className='ml-[150px] text-red-700' href="#">Know More</a>
                            </h1>
                        </div>
                    </div>
                    <div className='col-span-1 border border-gray-200 h-[300px] w-full bg-white'>
                        <h2 className='text-white bg-red-700 text-start mt-5 mx-5'>&nbsp;Principles Messge</h2>
                        <div className='grid grid-cols-6'>
                            <img src="#" alt="" className='h-24 w-20 mx-5 mt-1 col-span-2' />
                            <h1 className='text-black col-span-4 text-sm text-start'>
                                <h1 className=' mr-5 mb-2 text-justify'>
                                    Dear Friends,<br></br>
                                    You may be aware about the activities of Sinhgad Institutions established with an objective to provide quality education from school to post graduation programmes in all disciplines. At present Sinhgad Technical Education Society (STES) and its associates namely Savitribai Phule Shikshan Prasarak Mandal(SPSPM)
                                </h1>

                                <a className='ml-[150px] text-red-700' href="#">Know More</a>
                            </h1>
                        </div>
                    </div>
                    <div className='col-span-1 border border-gray-200 h-[300px] w-full bg-white'>
                        <h2 className='text-white bg-red-700 text-start mt-5 mx-5'>&nbsp;Principles Messge</h2>
                        <div className='grid grid-cols-6'>
                            <img src="#" alt="" className='h-24 w-20 mx-5 mt-1 col-span-2' />
                            <h1 className='text-black col-span-4 text-sm text-start'>
                                <h1 className=' mr-5 mb-2 text-justify'>
                                    Dear Friends,<br></br>
                                    You may be aware about the activities of Sinhgad Institutions established with an objective to provide quality education from school to post graduation programmes in all disciplines. At present Sinhgad Technical Education Society (STES) and its associates namely Savitribai Phule Shikshan Prasarak Mandal(SPSPM)
                                </h1>

                                <a className='ml-[150px] text-red-700' href="#">Know More</a>
                            </h1>
                        </div>
                    </div>

                </div>
            </div>

            <div className='grid grid-rows-1 justify-center my-2  mx-48'>
                <div className='row-span-1 grid grid-cols-12   gap-10 '>
                    {/* <div className='col-span-1'></div> */}
                    <div className='col-span-3 border border-gray-200 h-full  w-full bg-whitek'>
                        <h2 className='text-white bg-red-700 text-start mt-5 mx-5'>&nbsp;Principles Messge</h2>
                        <ol className='text-start mx-5 text-red-700 text-sm'>
                            <li className='flex'><IoMdArrowDropright className='mt-1 text-x'/>University Circulars</li>
                            <li className='flex'><IoMdArrowDropright className='mt-1 text-x'/>Letter of Approval (LOA)</li>
                            <li className='flex'><IoMdArrowDropright className='mt-1 text-x'/>Extension of Approval (EOA)</li>
                            <li className='flex'><IoMdArrowDropright className='mt-1 text-x'/>University Affiliation Letter</li>
                            <li className='flex'><IoMdArrowDropright className='mt-1 text-x'/>Certificate of Accreditation (NAAC)</li>
                            <li className='flex'><IoMdArrowDropright className='mt-1 text-x'/>UGC Recognition 2F</li>
                            <li className='flex'><IoMdArrowDropright className='mt-1 text-x'/>UGC Recognition 12B</li>
                            <li className='flex'><IoMdArrowDropright className='mt-1 text-x'/>Internal Complaint Committee (ICC)</li>
                            <li className='flex'><IoMdArrowDropright className='mt-1 text-x'/>SC/ST Cell</li>
                            <li className='flex'><IoMdArrowDropright className='mt-1 text-x'/>Grievance Redressal Cell</li>
                            <li className='flex'><IoMdArrowDropright className='mt-1 text-x'/>Anti-Ragging Cell</li>
                            <li className='flex'><IoMdArrowDropright className='mt-1 text-x'/>Savitribai Girls Forum Committee</li>
                            <li className='flex'><IoMdArrowDropright className='mt-1 text-x'/>Student Satisfaction Survey</li>
                            <li className='flex'><IoMdArrowDropright className='mt-1 text-x'/>Vidya Lakshmi</li>
                            <li className='flex'><IoMdArrowDropright className='mt-1 text-x'/>IIT Remote Center</li>
                        </ol>

                    </div>
                    <div className='col-span-6 border justify-center border-gray-200 h-full w-full bg-white'>
                        <h2 className='text-white bg-red-700 text-start mt-5 mx-5'>&nbsp;{abc}</h2>
                        <ol className='text-start mx-5 text-red-700 text-sm'>
                            <li className=' inline-flex  items-center gap-x-2 '> <IoMdArrowDropright className='text-xl' /> Computer Science and Engineering Dept. in association with P. A. H. Solapur University, Solapur organized a One Day Workshop on “Cyber Forensics Tools & Techniques” on 17-03-2023</li>
                            <li className=' inline-flex  items-center gap-x-2 '> <IoMdArrowDropright className='text-xl' /> Electronics and Telecommunication Engineering Dept. organized a Webinar on "Data Science and its Applications" on 15-01-2022</li>
                            <li className=' inline-flex  items-center gap-x-2 '> <IoMdArrowDropright className='text-xl' /> Electronics & Telecommunication Engineering Dept. organized a Webinar on "Full Stack Development Technology and Implementation" on 14-01-2022</li>
                            <li className=' inline-flex  items-center gap-x-2 '> <IoMdArrowDropright className='text-xl' /> Computer Science and Engineering Dept. organized "A Webinar on Angular JS" on 11-01-2022</li>
                            <li className=' inline-flex  items-center gap-x-2 '> <IoMdArrowDropright className='text-xl' /> IIT Workshop Conducted</li>
                            <li className=' inline-flex  items-center gap-x-2 '> <IoMdArrowDropright className='text-xl' /> Online "IPR Workshop-Patents, Designs" on 22-12-2021</li>
                            <li className=' inline-flex  items-center gap-x-2 '> <IoMdArrowDropright className='text-xl' /> One Week FDP on "Outcome-based Pedagogy for Effective Teaching and Learning in Engineering Education" from 14-18 June, 2021</li>
                            <li className=' inline-flex  items-center gap-x-2 '> <IoMdArrowDropright className='text-xl' /> Department of Computer Science and Engineering organized a one-day online workshop on "Google Cloud Certification" on 15 May, 2021</li>
                            <li className=' inline-flex  items-center gap-x-2 '> <IoMdArrowDropright className='text-xl' /> Department of Electrical and Mechanical Engineering organized a Two-day online workshop on "Recent Trends In Electric Vehicles" on 16 to 17 April, 2021</li>
                            <li className=' inline-flex  items-center gap-x-2 '> <IoMdArrowDropright className='text-xl' /> One Week online FDP on "Essential Mathematics for Engineers and Researchers" from 23 Nov. to 27 Nov. 2020</li>
                            <li className=' inline-flex  items-center gap-x-2 '> <IoMdArrowDropright className='text-xl' /> Civil Engineering Dept. organized a One Week online FDP on "QCAD and QGIS" from 22 to 26 June, 2020</li>
                            <li className=' inline-flex  items-center gap-x-2 '> <IoMdArrowDropright className='text-xl' /> Mechanical Engineering Dept. organized a Two-day online workshop on "Quality Research Paper Writing, Publication, and Research Methodology" on 22 to 23 June, 2020</li>
                        </ol>

                    </div>
                    <div className='col-span-3 border border-gray-200 h-full w-full bg-white'>
                        <h2 className='text-white bg-red-700 text-start mt-5 mx-5'>&nbsp;Principles Messge</h2>
                        <div className='grid grid-cols-6'>
                            <img src="#" alt="" className='h-24 w-20 mx-5 mt-1 col-span-2' />
                            <h1 className='text-black col-span-4 text-sm text-start'>
                                <h1 className=' mr-5 mb-2 text-justify'>
                                    Dear Friends,<br></br>
                                    You may be aware about the activities of Sinhgad Institutions established with an objective to provide quality education from school to post graduation programmes in all disciplines. At present Sinhgad Technical Education Society (STES) and its associates namely Savitribai Phule Shikshan Prasarak Mandal(SPSPM)
                                </h1>

                                <a className='ml-[150px] text-red-700' href="#">Know More</a>
                            </h1>
                        </div>
                    </div>
                    {/* <div className='col-span-1'></div> */}

                </div>
            </div>

        </>
    )
}