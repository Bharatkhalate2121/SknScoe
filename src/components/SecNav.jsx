import React, { Component, useEffect, useState } from "react";

export default function SecNav() {
    const [arrow, setArrow] = useState({
        About: false,
        department: false,
        naac: false,
        library: false,
        students: false,
        feedback: false,
    });
    function setDropdownlist(e) {
        e.stopPropagation();
        let abc = e.target.id;

        setArrow((prevState) => ({
            About: false,
            department: false,
            naac: false,
            library: false,
            students: false,
            feedback: false,
            [abc]: !prevState[abc], // Toggle the arrow state for the specific item
        }));
    }



    return (
        <>
            <div className="w-screen flex justify-center mt-5 pb-4">
                <ol className="flex gap-2 ">
                    <li className=" hover:bg-red-500  px-3 p-1 rounded-md">Home</li>
                    <li
                        className=" hover:bg-red-500  px-3 p-1 rounded-md"
                        id="About"
                        onClick={(e) => setDropdownlist(e)}
                    >
                        About {arrow.About ? "▲" : "▼"}
                        {arrow.About ? (<ul
                            className=" bg-white  rounded-md  mt-1 p-1 z-10"
                            style={{ position: "absolute" }}
                        >
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Presidents Message
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Principal's Desk
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Governing Body (Gb) & CDC
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                About Sknscoe
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Governance & Policies
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Committees
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Code of Conduct
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Institutions Innovation Council
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Programs
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Facilities{" "}
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                EDC cell
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                NISP
                            </li>
                        </ul>) : ""}
                    </li>
                    <li className=" hover:bg-red-500 h-8 px-3 p-1 rounded-md">
                        Admission
                    </li>
                    <li
                        className=" hover:bg-red-500 h-8 px-3 p-1 rounded-md"
                        id="department"
                        onClick={(e) => setDropdownlist(e)}
                    >
                        Department {arrow.department ? "▲" : "▼"}
                        {arrow.department ? (<ul
                            className="  bg-white  rounded-md  mt-1 p-1 z-10"

                            style={{ position: "absolute" }}
                        >
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Civil Engineering
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Computer Science and engineering
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Electrical Engineering
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Electronics And telecommunication Enginnering
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                First Year Engineering
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Mechanical Engineering
                            </li>
                        </ul>) : ''}
                    </li>
                    <li
                        className=" hover:bg-red-500 h-8 px-3 p-1 rounded-md"
                        id="naac"
                        onClick={(e) => setDropdownlist(e)}
                    >
                        NAAC {arrow.naac ? " ▲" : " ▼"}
                        {arrow.naac ? (<ul
                            className="  bg-white  rounded-md  mt-1 p-1 z-10"
                            style={{ position: "absolute" }}
                        >
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Institutional Best Practice
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Institutional Distinctiveness
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                IQAC
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Student Satisfaction Survey
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                AQAR Report
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Self Study Report (SSR)
                            </li>
                        </ul>) : ""}
                    </li>
                    <li className=" hover:bg-red-500 h-8 px-3 p-1 rounded-md">NIRF</li>
                    <li
                        className=" hover:bg-red-500 h-8 px-3 p-1 rounded-md"
                        id="library"
                        onClick={(e) => setDropdownlist(e)}
                    >
                        Library {arrow.library ? "▲" : "▼"}
                        {arrow.library ? (<ul
                            className="  bg-white  rounded-md  mt-1 p-1 z-10"
                            style={{ position: "absolute" }}
                        >
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Library Services
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Library WEBOPACK
                            </li>
                        </ul>) : ""}
                    </li>
                    <li
                        className=" hover:bg-red-500 h-8 px-3 p-1 rounded-md"
                        id="students"
                        onClick={(e) => setDropdownlist(e)}
                    >
                        Students {arrow.students ? "▲" : "▼"}
                        {arrow.students ? (<ul
                            className="  bg-white  rounded-md  mt-1 p-1 z-10"
                            style={{ position: "absolute" }}
                        >
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Acadmic Calendar
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Alumni
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                MOODLE Server
                            </li>
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Syllabus
                            </li>
                        </ul>) : ""}
                    </li>
                    <li
                        className=" hover:bg-red-500 h-8 px-3 p-1 rounded-md"
                        id="feedback"
                        onClick={(e) => setDropdownlist(e)}
                    >
                        Feedback {arrow.feedback ? "▲" : "▼"}
                        {arrow.feedback ? (<ul
                            className="  bg-white  rounded-md  mt-1 p-1 z-10"
                            style={{ position: "absolute" }}
                        >
                            <li className="bg-white hover:bg-slate-100 m-1 p-1 text-start" onClick={(e) => e.stopPropagation()}>
                                Academic Performance & Ambiance
                            </li>

                        </ul>) : ""}
                    </li>
                    <li className=" hover:bg-red-500 h-8 px-3 p-1 rounded-md">
                        Research
                    </li>
                    <li className=" hover:bg-red-500 h-8 px-3 p-1 rounded-md">
                        Placements
                    </li>
                    <li className=" hover:bg-red-500 h-8 px-3 p-1 rounded-md">Gallery</li>
                    <li className=" hover:bg-red-500 h-8 px-3 p-1 rounded-md">
                        Contact Us
                    </li>
                </ol>
            </div>
        </>
    );
}
