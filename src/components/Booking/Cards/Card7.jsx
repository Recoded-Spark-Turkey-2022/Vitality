import React from 'react'
import { useNavigate } from "react-router-dom";

function Card7() {

  const navigate = useNavigate()

        function handleClick() {
          navigate("/card8")
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