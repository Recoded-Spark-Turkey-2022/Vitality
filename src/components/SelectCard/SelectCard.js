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
        <div className="flex flex-col font-poppins lg:mt-20 mt-10">
        <div className="lg:text-5xl md:text-3xl text-xl lg:ml-52 ml-10">
          <h1>SELECT CARD</h1>
        </div>
        <div className="lg:text-xl md:text-base text-sm text-SubTexts mt-4 lg:ml-52 ml-10 lg:mr-0 mr-16">
          Please select the card you want to buy the tickets with
        </div>

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
 
   
   <div className="lg:text-2xl md:text-xl text-base lg:mt-20 mt-12 self-center capitalize lg:ml-0 ml-10 lg:mr-0 mr-10">
        Click confirm to use the selected card to purchase 5 tickets for 10 $
      </div>
      <div className="self-center lg:mt-12 mt-8 lg:mb-20 mb-10">
        <Link to="/purchase-thanks">
          <Button
            type="button"
            className="rounded-md box-border p-2 lg:pl-6 lg:pr-6 lg:text-lg md:text-base text-sm transition-all duration-250 bg-Buttons hover:bg-cyan-500 "
          >
            CONFIRM PURCHASE
          </Button>
        </Link>
      </div>


     </div>
    );
  };

export default Slider2