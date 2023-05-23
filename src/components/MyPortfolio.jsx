import React, {useState} from 'react';
import MyStocks from './MyStocks';
import MyTeam from './MyTeam';


const MyPortfolio = () => {
  return (
    <>
    <div className="flex flex-row items-center justify-around h-full">
    <div className="bg-[#1E1B1E] mx-10 rounded-3xl my-10 h-full w-full">
      <div className="flex flex-row items-center justify-around py-3 font-montaga text-white text-extrabold text-md px-[5%]">
        <h1 className="flex-2">STOCK NAME</h1>
        <h1 className="flex-2">VOLUME</h1>
        <h1 className="flex-2 relative right-4">PRICE</h1>
          <h1 className="flex-2">Quantity</h1>
      </div>

      <MyStocks />
      <MyStocks />
      <MyStocks />
      <MyStocks />
      <MyStocks />
      <MyStocks />
      <MyStocks />
    </div>

    <div className="h-full mx-10 rounded-3xl my-10 w-[40%] ">
      <MyTeam />
    </div>

  </div>
</>
  );
}

export default MyPortfolio;
