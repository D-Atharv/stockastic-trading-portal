import React from 'react';

const PortfolioNavbar = () => {
  return(
    <div className="flex flex-row items-center justify-between px-[2%] py-3">
      <a href="/">
      <img
        className="w-[90px]  "
        src='./back_1.svg' />
    </a>
      <h1 className="font-montaga text-white text-extrabold text-3xl">STOCKASTIC</h1>
      <img
        className="h-[60px] w-[70px]"
        src='./stockastic_logo.svg' />
    </div>
  );
};

export default PortfolioNavbar;
