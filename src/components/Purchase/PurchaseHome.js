import React from "react";
import PurchaseCard from './PurchaseCard';


function PurchaseHome(){
  return (
    <div className="font-poppins p-12 flex flex-col justify-evenly lg:h-section py-8">
      <h1 className="pl-16 font-poppins text-3xl md:text-4xl pb-8 pt-12">
        PURCHASE TICKETS
      </h1>
      <h4 className="pl-16 font-poppins text-xl mb-8 ">
        PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINTMENTS!
      </h4>
      <div className=" flex flex-col md:flex-row items-center justify-around w-full lg:h-1/3">
        <PurchaseCard
          ticket="5 TICKETS"
          price="10$"
          button="PURCHASE"
          buttonPreview
          imagePreview={false}
          contentPreview={false}
          titlePreview={false}
        />

        <PurchaseCard
          ticket="25 TICKETS"
          price="40$"
          button="PURCHASE"
          buttonPreview
          imagePreview={false}
          contentPreview={false}
          titlePreview={false}
        />

        <PurchaseCard
          ticket="50 TICKETS"
          price="70$"
          button="PURCHASE"
          buttonPreview
          imagePreview={false}
          contentPreview={false}
          titlePreview={false}
        />
      </div>
      </div>
  );
}
  

export default PurchaseHome;