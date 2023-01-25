import React from "react";
import Allan from './Team_imges/Allan.jpg';
import trteel from './Team_imges/Trteel.jpg'
import './Team.css'

function Team() {
    return(
        <div >
          <h1 className=" h1 ">WE ARE HEALING, NICE TO MEET YOU!</h1>
           <h2 className="h2">Meet the Team!</h2>
           <div className ="team ">
  
      <div className="">
          <img src={Allan} alt="Avatar" className="img" />
             <div className="container">
              <div className="hr"><h1>t</h1></div>
                 <h4 className="h4"><b>Allan Saleh</b></h4>
                  <p className="p">Lead Engineer & Web Developer</p>
              </div>
      </div>
      <div className="">
          <img src='https://media.discordapp.net/attachments/1053628144315277362/1067746220556156938/Cagla_Bircan_Turkey_2022.jpeg?width=663&height=663' alt="Avatar" className="img" />
             <div className="container">
             <div className="hr"><h1>t</h1></div>
                 <h4 className="h4"><b>Çağla Bircan</b></h4>
                  <p className="p">Front-end Developer&Teacher</p>
              </div>
      </div>
      <div className="">
          <img src={trteel} alt="Avatar" className="img"/>
             <div className="container">
             <div className="hr"><h1>t</h1></div>
                 <h4 className="h4"><b>Trteel Amino</b></h4>
                  <p className="p">Front-end Developer&Engineer</p>
              </div>
      </div>
      <div className="">
          <img src='https://media.discordapp.net/attachments/1060194452393709588/1067760597212602399/IMG_8950.JPG?width=497&height=662' alt="Avatar" className="img"/>
             <div className="container">
             <div className="hr"><h1>t</h1></div>
                 <h4 className="h4"><b>Seda Ünal</b></h4>
                  <p className="p">Front-end Developer</p>
              </div>
      </div>
      <div className="">
          <img src={Allan} alt="Avatar" className="img"/>
             <div className="container">
             <div className="hr"><h1>t</h1></div>
                 <h4 className="h4"><b>John Doe</b></h4>
                  <p className="p">Front-end Developer&Teacher</p>
              </div>
      </div>
      <div className="">
          <img src={Allan} alt="Avatar" className="img"/>
             <div className="container">
             <div className="hr"><h1>t</h1></div>
                 <h4 className="h4"><b>John Doe</b></h4>
                  <p className="p">Front-end Developer& Engineer</p>
              </div>
      </div>
</div>


        </div>
    )
}


export default Team;