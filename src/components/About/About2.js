import React from "react";
import Allan from "./About-imges/Allan.jpg"
import Payam from "./About-imges/Payam.jpg"
import Ahmed from "./About-imges/Ahmed.jpg"
import Abdulmajeed from "./About-imges/Abdulmajeed.jpg"
import Snoor from "./About-imges/Snoor.jpg"
import Avraz from "./About-imges/Avraz.jpg"

function About2() {
    return(
        <div >
          <h1 className=" text-3xl mt-14 ml-12">WE ARE HEALING, NICE TO MEET YOU!</h1>
           <h2 className=" text-[#424A4F] mt-16 ml-12 fw-bold">Meet the Team!</h2>
           <div className ="flex flex-row flex-wrap mt-10 ml-14 mr-14   ">
  <div className =" ">
    <div className ="card h-14 w-32 just items-stretch">
      <img src={Allan} className ="card-img-top -mb-1" alt="..." />
      <div className=" bg-green-800 m-0 h-1"><h1 className=" text-green-800">m</h1></div>
      <div className ="card-body bg-cyan-100">
        <h5 className ="card-title fw-bold text-xs text-center">Allan Saleh</h5>
        <p className ="card-text text-xs mt-4 text-center">Lead Engineer & Web Developer</p>
      </div>
    </div>
  </div>
  <div className =" ">
    <div className ="card h-14 w-32 ">
      <img src={Payam} className ="card-img-top -mb-1" alt="..." />
      <div className=" bg-green-800 m-0 h-1"><h1 className=" text-green-800">m</h1></div>
      <div className ="card-body bg-cyan-100">
        <h5 className ="card-title text-xs fw-bold text-center">Payam Abubakr</h5>
        <p className ="card-text text-xs mt-4 text-center">Junior Designer & FE Developer</p>
      </div>
    </div>
  </div>
  <div className ="">
    <div className ="card h-14 w-32 ">
      <img src={Ahmed} className ="card-img-top -mb-1" alt="Ahmed Mohammed" />
      <div className=" bg-green-800 m-0 h-1"><h1 className=" text-green-800">m</h1></div>
      <div className ="card-body bg-cyan-100">
        <h5 className ="card-title fw-bold text-xs text-center">Ahmed Mohammed</h5>
        <p className ="card-text text-xs mt-4 text-center">Junior Designer & FE Developer</p>
      </div>
    </div>
  </div>
  <div className ="">
    <div className ="card h-14 w-32 ">
      <img src={Abdulmajeed} className ="card-img-top -mb-1" alt="..." />
      <div className=" bg-green-800 m-0 h-1"><h1 className=" text-green-800">m</h1></div>
      <div className ="card-body bg-cyan-100">
        <h5 className ="card-title fw-bold text-xs text-center">Abdulmajeed Jaafer</h5>
        <p className ="card-text text-xs mt-4 text-center">Lead Engineer & Web Developer</p>
      </div>
    </div>
  </div>
  <div className ="">
    <div className ="card h-14 w-32  ">
      <img src={Snoor} className ="card-img-top -mb-1" alt="Snoor Madih" />
      <div className=" bg-green-800 m-0 h-1"><h1 className=" text-green-800">m</h1></div>
      <div className ="card-body bg-cyan-100">
        <h5 className ="card-title fw-bold text-xs text-center">Snoor Madih</h5>
        <p className ="card-text text-xs mt-4 text-center">Junior Designer & FE Developer</p>
      </div>
    </div>
  </div>
  <div className ="">
    <div className ="card h-14 w-32 ">
      <img src={Avraz} className ="card-img-top -mb-1" alt="Avraz" />
      <div className=" bg-green-800 m-0 h-1 -mt-40"><h1 className=" text-green-800">m</h1></div>
      <div className ="card-body bg-cyan-100">
        <h5 className ="card-title fw-bold text-xs text-center">Avraz Zebary</h5>
        <p className ="card-text text-xs mt-4 text-center">Junior Designer & FE Developer</p>
      </div>
    </div>
  </div>
</div>


        </div>
    )
}


export default About2;