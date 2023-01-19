/* import React from "react";
// import { Link } from 'react-router-dom';

const Booking = () => {
  return (
    <p>Book an Appointment</p>
  )
}
  export default Booking;

 */

  import React, {useState, useEffect} from 'react'
  import Card1 from './Cards/Card1'
  import Card2 from './Cards/Card2'
  import Card3 from './Cards/Card3'
  import Card4 from './Cards/Card4'
  import Card5 from './Cards/Card5'
  import Card6 from './Cards/Card6'
  import Card7 from './Cards/Card7'
  import Card8 from './Cards/Card8'
  import Header1 from './Header/Header1'
  import Header6 from './Header/Header6'
  import Header7 from './Header/Header7'
  import Header8 from './Header/Header8'
  
  function Book() {
  
    const [cardNumber, setCardNumber] = useState(1)
    const [shownCard, setShownCard] = useState(<Card1 />)
    const [shownHeader, setShownHeader] = useState(<Header1 />)
  
  
    function handleClick(){
      setCardNumber(cardNumber+1)
    }
  
    useEffect(() => {
  
      if(cardNumber === 1){
        setShownCard(<Card1 btnClick={() => handleClick()} />)
      }else if (cardNumber === 2){
        setShownCard(<Card2 btnClick={() => handleClick()} />)
      }else if(cardNumber === 3){
        setShownCard(<Card3 btnClick={() => handleClick()} />)
      }else if(cardNumber === 4){
        setShownCard(<Card4 btnClick={() => handleClick()} />)
      }else if(cardNumber === 5){
        setShownCard(<Card5 btnClick={() => handleClick()} />)
      }else if(cardNumber === 6){
        setShownCard(<Card6 btnClick={() => handleClick()} />)
        setShownHeader(<Header6 />)
      }else if(cardNumber === 7){
        setShownCard(<Card7 btnClick={() => handleClick()} />)
        setShownHeader(<Header7 />)
      }else if(cardNumber === 8){
        setShownCard(<Card8 btnClick={() => handleClick()} />)
        setShownHeader(<Header8 />)
      }
      
  
    }, [cardNumber])
  
  
    return (
      <div className='w-full md:w-5/6 flex justify-center my-10'>
          <div className='w-5/6 flex flex-col items-center gap-10'>
              <div className='self-start w-5/6'>
                {shownHeader}
              </div>
  
            {shownCard}
            
          </div>
      </div>
    )
  }
  
  export default Book