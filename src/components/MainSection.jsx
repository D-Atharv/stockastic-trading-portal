import React from 'react';
import Stock from './Stock';

const MainSection = () => {
  return (
    <div className="bg-[#1E1B1E] mx-10 rounded-3xl my-10 h-full">
      <div className="flex flex-row items-center justify-around py-3 font-montaga text-white text-extrabold text-md px-[7%]">
        <h1 className="flex-1">STOCK NAME</h1>
        <h1 className="flex-1">VOLUME AVAILABLE</h1>
        <h1 className="flex-1">PRICE</h1>
        <h1 className="flex-1">Quantity</h1>
        <h1 className="bg-white px-10 py-3 text-black rounded-2xl">Amount Left: <span>10000/- </span></h1>
      </div>
      <div className="bg-[#FE45RG] px-5 py-5">
        <Stock />
        <Stock />
        <Stock />
        <Stock />
        <Stock />
        <Stock />
        <Stock />
        <Stock />
        <Stock />
        <Stock />
        <Stock />
        <Stock />
      </div>
    </div>
  );
};

export default MainSection;
