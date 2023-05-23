import React, { useState } from 'react';
import { person } from "../constants";
import './styles/MyPortfolio.css';

const Person = ({ image, name }) => {
  return (
    <div>
      <div className="px-3 py-1 flex flex-row items-center justify-around bg-[#D9D9D9] rounded-xl my-3 text-black">
        <img src={image} className="w-[40px]" />
        <p>{name}</p>
      </div>
    </div>
  );
};

const MyTeam = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <div className="bg-[#1E1B1E] rounded-3xl flex flex-col items-center justify-around py-5 font-montaga text-xl text-white">
      <div className="bg-[#303030] px-7 py-3 my-5 w-3/4 text-center rounded-xl">
        <h1><span>Team Name</span></h1>
      </div>

      <div className="bg-[#303030] px-7 py-3 my-5 w-3/4 text-center rounded-xl">
        <div>
          {person.map((person, index) => (
            <Person key={`person-${index}`} index={index} {...person} />
          ))}
        </div>
      </div>

      <div className="px-5 py-5 flex flex-col items-center justify-around px-7 py-3 my-5 w-3/4 text-center rounded-xl bottomSection">
        <h1 className="mb-4 mt-2">TOTAL AMOUNT</h1>
        <div className="flex flex-row items-center justify-between">
          <button className="bg-white px-4 py-3 text-black rounded-xl mx-2">7000/-</button>

          <button
            className={`flex flex-row items-center justify-around mx-2 ${
              buttonClicked ? 'bg-[#3DB042]' : 'bg-[#FF2235]'
            } rounded-xl px-1 py-3`}
            onClick={handleClick}
          >
            <img
              src="./arrow.svg"
              className={`w-1/3 transition-transform ${
                buttonClicked ? 'rotate-180' : ''
              }`}
            />
            <span>50%</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
