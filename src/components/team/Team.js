import React from "react";
import Allan from './Team_imges/Allan.jpg';
import './Team.css'

function Team() {
    return(
        <div >
          <h1 className="  text-5xl mt-14 ">WE ARE HEALING, NICE TO MEET YOU!</h1>
           <h2 className="text-[#424A4F] mt-16 text-4xl">Meet the Team!</h2>
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


export default Team;