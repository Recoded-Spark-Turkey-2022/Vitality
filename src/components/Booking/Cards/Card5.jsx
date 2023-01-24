import React, {useState} from 'react'

function Card5({btnClick}) {
    const [preference, setPreference] = useState("")

    
        function handleChange(e){
            setPreference(e.target.value)
        }

        function handleClick(){
            if(preference === ""){
                console.log("Error!", "Please select an answer for this question!!");
            }else{
                btnClick()
            }
        }

  return (
    <div className='border border-solid border-gray-200 h-96 w-full md:w-5/6 lg:w-4/6 px-2 md:px-10 py-5 flex flex-col justify-between items-start rounded-md shadow-xl flex-wrap'>

        <div className='h-auto'>
            <h2 className='text-2xl font-medium'>
                Are There Any Issues You Would Like To Focus On?* 
            </h2>
        </div>

        <div className='w-full h-auto py-5 md:py-0 flex flex-col justify-center items-start gap-1 '>
            <div>
                <input 
                type="radio" 
                value="depression"
                onChange={handleChange}
                checked= {preference === 'depression'}
                /> Depression
            </div>
                
            <div>
                <input 
                type="radio" 
                value="stress"
                onChange={handleChange} 
                checked= {preference === 'stress'}
                /> Stress and Anxiety
            </div>

            <div>
                <input
                type="radio" 
                value="relationship" 
                onChange={handleChange}
                checked= {preference === 'relationship'}
                /> Relationship Issues
            </div>

            <div>
                <input
                type="radio" 
                value="family" 
                onChange={handleChange}
                checked= {preference === 'family'}
                /> Family Conflicts
            </div>    
                
            <div>
                <input
                type="radio" 
                value="trauma"
                onChange={handleChange}
                checked= {preference === 'trauma'}
                /> Trauma and Abuse
            </div>

            <div>
                <input
                type="radio" 
                value="eating"
                onChange={handleChange}
                checked= {preference === 'eating'}
                /> Eating Disorders
            </div>
        </div>


        <div className='flex justify-start items-center w-5/6 h-auto pt-2'>
            <input 
            type="button" 
            value="NEXT" 
            className='py-2 px-5 hover:bg-cyan-200 bg-cyan-400 font-medium rounded'
            onClick={() => handleClick()} />
        </div>
    </div>
  )
}

export default Card5