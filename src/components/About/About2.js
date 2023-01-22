import React from "react";
import Allan from "./About-imges/Allan.jpg";
import './Team.css'

function About2() {
    return(
        <div >
          <h1 className=" text-3xl mt-14 ">WE ARE HEALING, NICE TO MEET YOU!</h1>
           <h2 className=" text-[#424A4F] mt-16 fw-bold">Meet the Team!</h2>
           <div className ="team ">
  
      <div className="card">
          <img src={Allan} alt="Avatar" />
             <div className="container">
              <div className="hr"><h1>t</h1></div>
                 <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
              </div>
      </div>
      <div className="card">
          <img src={Allan} alt="Avatar" />
             <div className="container">
             <div className="hr"><h1>t</h1></div>
                 <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
              </div>
      </div>
      <div className="card">
          <img src={Allan} alt="Avatar" />
             <div className="container">
             <div className="hr"><h1>t</h1></div>
                 <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
              </div>
      </div>
      <div className="card">
          <img src={Allan} alt="Avatar" />
             <div className="container">
             <div className="hr"><h1>t</h1></div>
                 <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
              </div>
      </div>
      <div className="card">
          <img src={Allan} alt="Avatar" />
             <div className="container">
             <div className="hr"><h1>t</h1></div>
                 <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
              </div>
      </div>
      <div className="card">
          <img src={Allan} alt="Avatar" />
             <div className="container">
             <div className="hr"><h1>t</h1></div>
                 <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
              </div>
      </div>
</div>


        </div>
    )
}


export default About2;