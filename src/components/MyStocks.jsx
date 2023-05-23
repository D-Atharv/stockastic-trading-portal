import React from 'react';
const MyStocks = () =>{
  return(
    <div>
       <div className="flex flex-row items-center justify-around bg-[#303030] rounded-3xl text-white font-montaga py-3 my-3 mx-10">
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
           <p className="bg-purple-700 px-5 py-2 rounded-2xl text-center w-[100px]"><span>10</span></p>
       </div>
    </div>
  );
};

export default MyStocks;
