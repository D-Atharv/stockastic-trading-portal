import React, { useState } from "react";

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleInputChange = (e) => {
    const newCount = parseInt(e.target.value);
    setCount(isNaN(newCount) ? 0 : newCount);
  };

  return (
    <div className="flex items-center text-montaga">
      <button
        className="bg-purple-700 text-white py-1 px-3 rounded-l"
        onClick={decreaseCount}
      >
        -
      </button>
      <input
        type="text"
        className="bg-purple-700 py-1 px-3 text-white text-center w-16 appearance-none focus:outline-none"
        value={count}
        onChange={handleInputChange}
        style={{ "-moz-appearance": "textfield" }}
      />
      <button
        className="bg-purple-700 text-white py-1 px-3 rounded-r"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default CounterButton;
