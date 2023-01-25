import React from "react";
import { Link } from 'react-router-dom';

function PurchaseCard(props) {
    const { title, dollar, text, button, classList } = props;
    return (
      <div
        className={
          !classList
            ? 'border border-solid w-72 lg:w-96 border-gray-200 rounded-lg shadow-xl'
            : classList
        }
      >
        <div className="flex flex-col m-6">
          <h1 className="text-3xl font-semibold pt-12  flex flex-col items-center justify-center 2xl:text-5xl">
            {title}
          </h1>
          <h2 className="text-gray-400 text-xl pt-3 font-medium flex flex-col items-center justify-center 2xl:text-3xl 2xl:py-8">
            {dollar}
          </h2>
          <h2 className="text-base pt-2 font-normal 2xl:text-2xl pb-6">{text}</h2>
  
          <Link to="/select-card">
          <div className="flex flex-col items-center justify-center pb-10 2xl:text-3xl 2xl:pb-12">
            <input
              type="button"
              value={button}
              className="py-2 px-7 hover:bg-cyan-200 bg-cyan-400 font-medium rounded"
            />
          </div>
            </Link>
        </div>
      </div>
    );
  }

export default PurchaseCard;