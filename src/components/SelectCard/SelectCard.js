import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import card01 from "./cardImages/card1.png"
import card02 from "./cardImages/card2.png"
import card03 from "./cardImages/card3.png"
import card04 from "./cardImages/card4.png"

const SelectCardArray=[
    {
        id:1,
        picture:card01,
        title:"CARD 1",
    },
    {
        id:2,
        picture:card02,
         title:"CARD 2",
    },
    {
        id:3,
        picture:card03,
         title:"CARD 3",
    },
    {
        id:4,
        picture:card04,
        title:"CARD 4",
    }
]

const Slider2 = () => {

    const settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    responsive: [
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                  }
              },
              {
                  breakpoint: 900,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }        
          ],
    };
   
    return (
<div className="h-full w-full flex flex-col justify-between items-center ">
        <div className="w-full px-5 py-10 lg:pb-20 lg:px-32 xl:px-64 flex flex-col justify-evenly gap-5">
            <div className="h-full w-full flex flex-col md:items-center lg:items-start">
                <h1 className="text-4xl font-normal 2xl:text-6xl my-4">SELECT CARD</h1>
                <p className="text-lg text-gray-400 2xl:text-xl">Please select the card you want to buy the tickets with</p>
            </div>
        <div/>
  <div className="my-6 flex justify-center">
        <Slider
        {...settings}
          className="w-5/6 justify-center"
        >
          {SelectCardArray.map((card) => (
            <div className="flex justify-center">             
              <img alt={card.title} src={card.picture} className="max-w-full p-2 h-auto hover:border-4 hover:border-dashed hover:border-cyan-400 hover:delay-150"/>     
          </div>
       ))}  
        </Slider>
   </div>
 
   
        <p className="text-xl font-medium my-2">Click Confirm To Use The Selected Card To Purchase 5 Tickets For 10$</p>
   

    <div className="w-full px-5 py-10 lg:pb-20 lg:pl-20 xl:px-20 flex  justify-evenly ">
      <Link  to="/purchase-thanks">
      <Button type='button' classes="py-2 px-5 hover:bg-cyan-200 bg-cyan-400 font-medium rounded text-sm md:text-lg">CONFIRM PURCHASE</Button>
      </Link>
  </div>


     </div>
</div>
    );
  };

export default Slider2