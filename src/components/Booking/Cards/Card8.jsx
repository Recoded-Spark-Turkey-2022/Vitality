import React from 'react'
import {useNavigate} from "react-router-dom"



function Card8() {
  const navigate = useNavigate()


  function handleClick(){
    navigate("/")
  }

  return (
    
    <div className='border border-solid border-gray-200 h-96 w-full md:w-5/6 px-2 md:px-10 py-5 flex flex-col justify-evenly items-center rounded-md shadow-xl flex-wrap wrap'>

        <div className='h-3/6 w-4/6 flex flex-col justify-around items-center gap-5 md:gap-0 px-2 md:px-0 '>
            <h2 className='text-xl md:text-2xl font-medium text-center'>
                Request Submitted
            </h2>
          <p className='text-sm md:text-lg font-medium text-center'>You Will Receive A Confirmation Email Soon. Please Keep An Eye On Your Mail.</p>
        </div>

        <div className='flex justify-center items-center w-full h-2/6'>
            <input 
            type="button" 
            value="BACK TO HOME" 
            className='py-2 px-10 w-10/12 md:w-8/12 lg:w-5/12 hover:bg-cyan-200 bg-cyan-400 font-medium rounded text-sm md:text-lg'
            onClick={() => handleClick()} />
        </div>
    </div>
  
  )
}

export default Card8