import React from "react";
import Group from "./Group-147.jpg"

function Contact (){
    return(
        
        <div>
            <h1 className=" text-3xl ml-20 mb-2 mt-9">SEND US YOUR REQUEST!</h1>
            <p className=" ml-20 text-[#00000080] text-xl mr-24">Do you have a question, concern, idea, feedback, or problem?  If you need assistance, please fill out the form below and we&apos;d be happy to help!</p>
            <div className=" flex flex-row flex-wrap">
                <div className="ml-20">
                    <h1 className=" my-14 mb-8 text-lg">Type of contact</h1>
                    <input type="radio" name="type_of_contact" value="service" className=" mb-6"/> I have a question about the service.<br />
                    <input type="radio" name="type_of_contact" value="registered_client" className=" mb-6"/>  I&apos;m a registered client and I need support.<br />
                    <input type="radio" name="type_of_contact" value="joining" className=" mb-6"/> I&apos;m a counselor interested in joining.<br />
                    <input type="radio" name="type_of_contact" value="registered_counselor" className=" mb-6" /> I&apos;m a registered counselor and I need support.<br />
                    <input type="radio" name="type_of_contact" value="business-related_inquiry" className=" mb-6"/> I have a business-related inquiry.<br />
                    <input type="radio" name="type_of_contact" value="organization" className=" mb-6"/> I&apos;m interested in Healing Online for my organization.<br />
                    <input type="radio" name="type_of_contact" value="billing" className=" mb-6"/> I have a billing related question.<br />
                </div>
                <div>
                    <img src={Group} alt='Healling' className=" w-96 mt-16 ml-56 h-80 "/>
                </div>
            </div>
            <div className=" grid grid-flow-col mt-28 grid-cols-11 mb-28">
                <div className=" ml-20   col-span-full  w-full mr-1">
                     <h5 className=" -mb-2">Full Name:  </h5><br/>
                     <input type="Name" id="Name" name="Name"  placeholder="Enter your full name here..." className="shadow p-3 mb-5 bg-white rounded w-5/12 h-20"/> <br/>
                     <h5 className=" -mb-2 -mt-2">Email:   </h5><br/>
                     <input type="Email" id="Email" name="Email"  placeholder="Enter your email address here..." className="shadow p-3 mb-5 bg-white rounded w-5/12 h-20"/> <br/>
                     <h5 className=" -mb-2 -mt-2">Details:  </h5><br/>
                     <textarea id="Details" name="Details" placeholder="Enter your details here..." className="shadow p-3 mb-5 bg-white rounded  w-5/12 h-44"/> <br/>
                     <button type="submit" className="btn btn btn-info bg-[#2DD3E3] -mt-8 w-56">Submit</button>
                </div>
                <div className=" bg-[#EAF8F9]  h-64 mt-40  border rounded w-96 grid-cols-1  mr-52 ml-1">
                    <h1 className=" text-lg mb-3 mt-8 ml-11">Find Us At:</h1><br/>
                    <p className="text-[#0000008A] -mb-6 ml-11">Nergiz Plaza</p><br/>
                    <p className="text-[#0000008A] -mb-6 ml-11">3rd Floor</p><br/>
                    <p className="text-[#0000008A] -mb-6 ml-11">Bakhtiyari Street 40m</p><br/>
                    <p className="text-[#0000008A] -mb-6 ml-11">Erbil, Iraq</p><br/>
                    <p className="text-[#0000008A] -mb-6 ml-11">44001</p><br/>
                </div>
            </div>
        </div>
       
    )
}

export default Contact;