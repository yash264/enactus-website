import React from 'react'
import { Link } from "react-router-dom";
import Reserach from './photos/section/research.webp'
import Design from './photos/section/DESIGN.jpg'
import Sponsorship from './photos/section/SPONSORSHIP.jpg'
import Content from './photos/section/content.jpg'
import Web from './photos/section/web.jpg'
import Fild from './photos/section/field.jpg'

const Selection = () => {
    return (
        <div>
            <div className="container mx-auto my-6 text-center">
                <div className="grid lg:grid-cols-3 gap-4  text-center text-lg sm:grid-cols-2 ">

                    <div className="m-6 hover:underline hover:bg-opacity-100 rounded-xl hover:bg-slate-300 hover:cursor-pointer shadow-xl">
                        <Link to="/webTeam">
                            <img src={Web} className="h-auto w-auto" />
                            <h1 className='my-2 md:text-xl'>WEB TEAM</h1>
                        </Link>
                    </div>

                    <div className="m-6 hover:underline hover:cursor-pointer hover:bg-opacity-100 rounded-xl hover:bg-slate-300 shadow-xl">
                        <Link to="/reserchAndDevelopment">
                            <img src={Reserach} className="h-auto w-auto" />
                            <h1 className='my-2 md:text-xl '>RESEARCH AND DEVELOPMENT TEAM</h1>
                        </Link>
                    </div>

                    <div className=" m-6 hover:underline hover:cursor-pointer rounded-xl hover:bg-opacity-100 hover:bg-slate-300 shadow-xl">
                        <Link to="/contentDepartment">
                            <img src={Content} className="h-auto w-auto" />
                            <h1 className='my-2 md:text-xl uppercase'>CONTENT TEAM</h1>
                        </Link>
                    </div>

                    <div className=" m-6 hover:underline hover:cursor-pointer rounded-xl hover:bg-opacity-100 hover:bg-slate-300 shadow-xl">
                        <Link to="/fieldOfficer">
                            <img src={Fild} className="h-auto w-auto" />
                            <h1 className='my-2 md:text-xl '>FIELD OFFICER</h1>
                        </Link>
                    </div>

                    <div className=" m-6 hover:underline hover:cursor-pointer rounded-xl hover:bg-opacity-100 hover:bg-slate-300 shadow-xl">
                        <Link to="/designDepartment">
                            <img src={Design} className="h-auto w-auto" />
                            <h1 className='my-2  md:text-xl'>DESIGN TEAM</h1>
                        </Link>
                    </div>

                    <div className=" m-6 hover:underline hover:cursor-pointer rounded-xl hover:bg-opacity-100 hover:bg-slate-300 shadow-xl">
                        <Link to="/marketingAndSponcership">
                            <img src={Sponsorship} className="h-auto w-auto" />
                            <h1 className='my-2 md:text-xl'>MARKETING AND SPONSORSHIP TEAM</h1>
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Selection
