import React from "react";
import Call from './ContactCardImges/phone.png'
import Chat from './ContactCardImges/chat.jpg'
import video from './ContactCardImges/video.jpg'
import './ContactCard.css'

function ContactCard (){
    return(
    <div> 
        <h1>we can communicate through</h1>
        <div className="card_cont">
             <div className="card">
          <img src={Call} alt="Avatar" />
             <div className="container">
              
                 <h2><b>Voice Call</b></h2>
                  <p>Feeling ready to start a conversation? Give your therapist a voice call and talk your heart out!</p>
              </div>
        </div>
        <div className="card">
          <img src={Chat} alt="Avatar" />
             <div className="container">
              
                 <h2><b>Chat</b></h2>
                  <p>Need to talk to someone?Come have a chat with your therapist!</p>
              </div>
        </div>
        <div className="card">
          <img src={video} alt="Avatar" />
             <div className="container">
              
                 <h2><b>Video Call</b></h2>
                  <p>For better experience therapists recommend video calls, but always remember that its a choice!</p>
              </div>
        </div>
        </div>
        </div>  
    )
}
export default ContactCard;