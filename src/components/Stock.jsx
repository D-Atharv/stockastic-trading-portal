import React from 'react';
import CountTracker from './CountTracker';

const Stock = () =>{
  return(
    <div>
       <div className="flex flex-row items-center justify-around bg-[#303030] rounded-3xl text-white font-montaga py-3 my-3">
         <div className="flex flex-row items-center justify-center">
           <img
             className="h-[40px] w-[50px]"
              src="./stockastic_logo.svg" />
           <p>RELIANCE</p>
         </div>
         <div>
           <p>70000</p>
         </div>
           <p>750/- </p>
           <CountTracker />
         <div className="">
           <button className="font-montaga py-2 px-5 rounded-xl bg-[#3DB042] w-[100px] mx-1">BUY</button>
           <button className="font-montaga py-2 px-5 rounded-xl bg-[#FF2235] w-[100px] mx-1">SELL</button>
         </div>
       </div>
    </div>
  );
};

export default Stock;
