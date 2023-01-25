import React from "react";
import Call from './ContactCardImges/phone.png'
import Chat from './ContactCardImges/chat.jpg'
import video from './ContactCardImges/video.jpg'
import './ContactCard.css'

function ContactCard (){
    return(
    <div> 
        <h1 className="header1">we can communicate through</h1>
        <div className="card_cont">
             <div className="card">
          <img src={Call} alt="Avatar" className="img1" />
             <div className="container">
              
                 <h2 className="header"><b>Voice Call</b></h2>
                  <p className="parag">Feeling ready to start a conversation? Give your therapist a voice call and talk your heart out!</p>
              </div>
        </div>
        <div className="card">
          <img src={Chat} alt="Avatar" className="img1" />
             <div className="container">
              
                 <h2 className="header"><b>Chat</b></h2>
                  <p className="parag">Need to talk to someone?Come have a chat with your therapist!</p>
              </div>
        </div>
        <div className="card">
          <img src={video} alt="Avatar" className="img1" />
             <div className="container">
              
                 <h2 className="header"><b>Video Call</b></h2>
                  <p className="parag">For better experience therapists recommend video calls, but always remember that its a choice!</p>
              </div>
        </div>
        </div>
        </div>  
    )
}
export default ContactCard;