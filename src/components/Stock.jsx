import React from 'react';
import CountTracker from './CountTracker';

const Stock = (props) =>{
  return(
    <div>
       <div className="flex flex-row items-center justify-around bg-[#303030] rounded-3xl text-white font-montaga py-3 my-3">
         <div className="flex flex-row items-center justify-center min-w-[10vw]">
           <img
             className="h-[40px] w-[50px]"
              src="./stockastic_logo.svg" />
           <p>{props.company.name}</p>
         </div>
         <div>
           <p>{props.company.volume}</p>
         </div>
           <p>{props.company.price.toFixed(2)}</p>
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
