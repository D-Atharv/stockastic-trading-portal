import React from 'react';

const Navbar = () => {
  return(
    <div className="flex flex-row items-center justify-between px-[2%] py-3">
      <img
        className="h-[60px] w-[70px]"
        src='./stockastic_logo.svg' />
      <h1 className="font-montaga text-white text-extrabold text-3xl">STOCKASTIC</h1>
        <a href="">
          <button class="font-montaga bg-purple-700 text-white py-2 px-5 rounded-full  h-[40px]">
            MY PORTFOLIO
          </button>
        </a>
    </div>
  );
};

export default Navbar;
