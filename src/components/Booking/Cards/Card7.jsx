import React from 'react'
import {useSelector} from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../../config/fire"

function Card7({btnClick}) {
  
  async function sendData(obj){
    
    await setDoc(doc(db, "booking-client-list", uuidv4()), {
      client: obj.answer1,
      relationship: obj.answer2,
      therspyBefore: obj.answer3,
      counselor: obj.answer4,
      issues: obj.answer5,
      otherInfo: obj.answer6,
    });

  }

  // Need to read data from redux
  const answers = useSelector((state) => state.booking.answers)

  // Need to send the data in the redux to firebase
  function handleClick(){
  
    sendData(answers)
    btnClick()

  }

  return (
    
    <div className='border border-solid border-gray-200 h-96 w-full md:w-5/6 px-2 md:px-10 py-5 flex flex-col justify-around items-center rounded-md shadow-xl flex-wrap wrap'>

        <div className='h-2/6 flex flex-col justify-between items-center gap-5 md:gap-0 px-2 md:px-0 '>
            <h2 className='text-2xl font-medium'>
                Submit Appointment?
            </h2>
          <p className='text-lg font-medium text-center'>Please Be Aware That This Action Will Cost You A Ticket!</p>
        </div>

        <div className='flex justify-center items-center w-full h-1/6'>
            <input 
            type="button" 
            value="SUBMIT" 
            className='py-2 px-5 w-6/12 md:w-5/12 lg:w-3/12 hover:bg-cyan-200 bg-cyan-400 font-medium rounded'
            onClick={() => handleClick()} />
        </div>
    </div>
  
  )
}

export default Card7