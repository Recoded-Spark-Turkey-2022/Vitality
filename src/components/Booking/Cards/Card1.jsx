import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

function Card1() {

    // With this state, we will track the user's selection
    const [selected, setSelected] = useState("")
    const navigate = useNavigate()

    function handleClick() {
      navigate("/card2")
    }
  return (
    <div className='border border-solid border-gray-200 h-96 w-full md:w-5/6 lg:w-4/6 px-2 md:px-10 py-5 flex flex-col justify-between items-start rounded-md shadow-xl flex-wrap'>

        <div className='h-1/6'>
            <h2 className='text-2xl font-medium'>
                What Type Of Counseling Are You Looking For?
            </h2>
        </div>

        <div className='w-full h-4/6 flex flex-col justify-center md:justify-start gap-2 pt-5'>


            <input 
            type="button" 
            value="Individual Counseling" 
            className='w-full border border-solid border-2 border-gray-200 rounded-lg text-md md:text-xl font-semibold pl-2 py-2 text-left hover:bg-gray-100 focus:bg-cyan-400 focus:text-slate-100'
            onClick={e => setSelected(e.target.value)} 
            />

            <input 
            type="button" 
            value="Teen Counseling (For My Child)" 
            className='w-full border border-solid border-2 border-gray-200 rounded-lg text-md md:text-xl font-semibold pl-2 py-2 text-left hover:bg-gray-100 focus:bg-cyan-400 focus:text-slate-100'
            onClick={e => setSelected(e.target.value)}  
            />

        </div>

        <div className='flex justify-start items-center w-5/6 h-1/6'>
            <input 
            type="button" 
            value="NEXT" 
            className='py-2 px-5 hover:bg-cyan-200 bg-cyan-400 font-medium rounded'
            onClick={() => handleClick()} />
        </div>
    </div>
  )
}

export default Card1