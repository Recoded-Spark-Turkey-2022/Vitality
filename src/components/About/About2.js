import React from "react";
import Allan from "./About-imges/Rectangle.jpg"

function About2() {
    return(
        <div >
           <h1 className=" text-3xl mt-14 ml-12">WE ARE HEALING, NICE TO MEET YOU!</h1>
           <h2 className=" text-[#424A4F] mt-16 ml-12">Meet the Team!</h2>
           <div className=" flex flex-wrap flex-row">
<div className=" h-28 w-32 ml-12 mt-14 -mr-32 ">
           <div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-blue-200 max-w-sm">
    <a href="#!">
      <img className="rounded-t-lg" src={Allan} alt="Allan Saleh"/>
    </a>
    <div >
      <h5 className="text-gray-900 text-sm font-medium mb-2 mt-2 ml-6">Allan Saleh</h5>
      <p className="text-gray-700 text-sm mb-4 mt-2 ml-3">Lead Engineer& Web Developer</p>
     
    </div>
    </div>
     </div>
           </div>
           <div className=" ml-1 ">
           <div className=" h-28 w-32 ml-36 mt-14">
           <div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-blue-200 max-w-sm">
    <a href="#!">
      <img className="rounded-t-lg" src={Allan} alt="Allan Saleh"/>
    </a>
    <div >
      <h5 className="text-gray-900 text-sm font-medium mb-2 mt-2 ml-6">Allan Saleh</h5>
      <p className="text-gray-700 text-sm mb-4 mt-2 ml-3">Lead Engineer& Web Developer</p>
     
    </div>
    </div>
     </div>
           </div>
           </div>
           

           <div>
           <div className=" h-28 w-32  -mr-32 mt-14 ml-5">
           <div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-blue-200 max-w-sm">
    <a href="#!">
      <img className="rounded-t-lg" src={Allan} alt="Allan Saleh"/>
    </a>
    <div >
      <h5 className="text-gray-900 text-sm font-medium mb-2 mt-2 ml-6">Allan Saleh</h5>
      <p className="text-gray-700 text-sm mb-4 mt-2 ml-3">Lead Engineer& Web Developer</p>
     
    </div>
    </div>
    </div>
     </div>
           </div>
        </div>
        </div>
    )
}


export default About2;