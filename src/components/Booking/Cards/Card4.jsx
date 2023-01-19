import React, {useState} from 'react'

function Card4() {

    const [preference, setPreference] = useState("")

        function handleChange(e){
            setPreference(e.target.value)
        }

    function handleClick(){
        if(preference === ""){
            console.log("Error!", "Please select an answer for this question!!");
        }
    }

  return (
    <div className='border border-solid border-gray-200 h-96 w-full md:w-5/6 lg:w-4/6 px-2 md:px-10 py-5 flex flex-col justify-between items-start rounded-md shadow-xl flex-wrap'>

        <div className='h-auto'>
            <h2 className='text-2xl font-medium'>
                Are There Any Specific Qualities That You Would Like In A Counselor? 
            </h2>
        </div>

        <div className='w-full h-auto py-5 md:py-0 flex flex-col justify-center items-start gap-1 '>
            <div>
                <input 
                type="radio" 
                value="male"
                onChange={handleChange}
                checked= {preference === 'male'}
                /> I Prefer A Male Counselor
            </div>
                
            <div>
                <input 
                type="radio" 
                value="female"
                onChange={handleChange} 
                checked= {preference === 'female'}
                /> I Prefer A Female Counselor
            </div>

            <div>
                <input
                type="radio" 
                value="young" 
                onChange={handleChange}
                checked= {preference === 'young'}
                /> I Prefer A Young Counselor (45-)
            </div>

            <div>
                <input
                type="radio" 
                value="old" 
                onChange={handleChange}
                checked= {preference === 'old'}
                /> I Prefer An Old Counselor (45+)
            </div>    
                
            <div>
                <input
                type="radio" 
                value="nonReligious"
                onChange={handleChange}
                checked= {preference === 'nonReligious'}
                /> I Prefer A Non-Religious Counselor
            </div>
        </div>

        <div className='flex justify-start items-center w-5/6 h-auto'>
            <input 
            type="button" 
            value="NEXT" 
            className='py-2 px-5 hover:bg-cyan-200 bg-cyan-400 font-medium rounded'
            onClick={() => handleClick()} />
        </div>
    </div>
  )
}

export default Card4