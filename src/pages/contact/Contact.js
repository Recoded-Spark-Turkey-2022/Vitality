import React, {useState} from "react";
import './Contact.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { doc, setDoc } from "firebase/firestore"; 
import {db} from "../../config/fire";
import Group from "./Group-147.jpg"


function Contact (){
    const [contactType, setContactType] = useState("") 
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [details, setDetails] = useState("")

    const handleContactChange = e => {setContactType(e.target.value)}
    const handleNameChange = e => {setName(e.target.value)}
    const handleEmailChange = e => {setEmail(e.target.value)}
    const handleDetailsChange = e => {setDetails(e.target.value)}
    
   
      
        async function sendData(contactTypeValue1, nameValue1, emailValue1, detailsValue1){
          
          await setDoc(doc(db, "contactUs-list", emailValue1), {
            contactType: contactTypeValue1,
            name: nameValue1,
            email: emailValue1,
            details: detailsValue1
          })
          .then(handleContactChange, handleNameChange, handleEmailChange, handleDetailsChange, (""))
        }

    return(
        
        <div>
            <div className="text">
            <h1 className=" text-3xl  mb-2 mt-9">SEND US YOUR REQUEST!</h1>
            <p className=" text-[#00000080] text-xl mr-24">Do you have a question, concern, idea, feedback, or problem?  If you need assistance, please fill out the form below and we&apos;d be happy to help!</p>
            </div>
            <div className=" flex flex-row flex-wrap mb-20">
                <div className=" radio">
                    <h1 className=" my-14 mb-8 text-lg">Type of contact</h1>
                    <input type="radio" name="type_of_contact" value="service" onChange={handleContactChange} className=" mb-6"/> I have a question about the service.<br />
                    <input type="radio" name="type_of_contact" value="registered_client" onChange={handleContactChange} className=" mb-6"/>  I&apos;m a registered client and I need support.<br />
                    <input type="radio" name="type_of_contact" value="joining" onChange={handleContactChange} className=" mb-6"/> I&apos;m a counselor interested in joining.<br />
                    <input type="radio" name="type_of_contact" value="registered_counselor" onChange={handleContactChange} className=" mb-6" /> I&apos;m a registered counselor and I need support.<br />
                    <input type="radio" name="type_of_contact" value="business-related_inquiry" onChange={handleContactChange} className=" mb-6"/> I have a business-related inquiry.<br />
                    <input type="radio" name="type_of_contact" value="organization" onChange={handleContactChange} className=" mb-6"/> I&apos;m interested in Healing Online for my organization.<br />
                    <input type="radio" name="type_of_contact" value="billing" onChange={handleContactChange} className=" mb-6"/> I have a billing related question.<br />
                </div>
                <div>
                    <img src={Group} alt='Healling' className=" photo"/>
                </div>
            </div>
            <div className=" contener">
                <div className=" first  ">
                     <h5 className=" -mb-2">Full Name:  </h5><br/> 
                     <input type="Name" id="Name" name="Name" onChange={handleNameChange} placeholder="Enter your full name here..." className="box"/> <br/>
                     <h5 className=" -mb-2 -mt-2">Email:   </h5><br/>
                     <input type="Email" id="Email" name="Email" onChange={handleEmailChange} placeholder="Enter your email address here..." className="box"/> <br/>
                     <h5 className=" -mb-2 -mt-2">Details:  </h5><br/>
                     <textarea id="Details" name="Details" onChange={handleDetailsChange} placeholder="Enter your details here..." className="box"/> <br/>
                    <Link to='/thankYou'>
                     <Button type="submit" onClick={() => { sendData(contactType, name, email, details); }} className="btn btn btn-info bg-[#2DD3E3] -mt-8 w-56">Submit</Button>
                     </Link>
                </div>
                <div className=" second ">
                    <div className="border" >
                    <div className="card-body  ">
                    <h1 className=" text-lg mb-3 mt-3 ml-11">Find Us At:</h1><br/>
                    <p className="text-[#0000008A] -mb-6 ml-11">Nergiz Plaza</p><br/>
                    <p className="text-[#0000008A] -mb-6 ml-11">3rd Floor</p><br/>
                    <p className="text-[#0000008A] -mb-6 ml-11">Bakhtiyari Street 40m</p><br/>
                    <p className="text-[#0000008A] -mb-6 ml-11">Erbil, Iraq</p><br/>
                    <p className="text-[#0000008A] -mb-6 ml-11">44001</p><br/>
    
                </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Contact;