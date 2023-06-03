import React from 'react';

const TransactionHistory = (props) => {
  const { stockName, volume, price } = props;

  return (
    <>
      <div className="flex flex-row items-center justify-between px-2 py-3 bg-black">
        <a href="/portfolio">
          <img className="w-20" src="./back_1.svg" alt="Back" />
        </a>
        <h1 className="font-montaga text-white text-extrabold text-3xl">
          STOCKASTIC
        </h1>
        <img className="h-16 w-16" src="./stockastic_logo.svg" alt="Logo" />
      </div>

      <div className="bg-black text-white h-screen p-16">
        <div className="relative">
          <div className="p-8 rounded-3xl border-4 border-purple-900 shadow-lg h-[100%]">
            <h1 className="text-3xl font-bold mb-4">Transaction History</h1>
            <p className="text-lg leading-relaxed my-5">
              You purchased <span className="text-[#B6EADA]">{volume}</span> shares of <span className="text-[#B6EADA]">{stockName}</span> at a price of <span className="text-[#B6EADA]">{price}</span> each.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
