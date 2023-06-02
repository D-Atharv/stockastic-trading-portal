import React, { useState } from 'react'

const CounterButton = (props) => {
  const decreaseCount = () => {
    if (props.currentQuantity > 0) {
      props.setCurrentQuantity(props.currentQuantity - 1)
    }
  }

  const handleInputChange = (e) => {
    const newCount = parseInt(e.target.value)
    props.setCurrentQuantity(isNaN(newCount) ? 0 : newCount)
  }

  return (
    <div className='flex items-center text-montaga'>
      <button
        className='bg-purple-700 text-white py-1 px-3 rounded-l'
        onClick={decreaseCount}
      >
        -
      </button>
      <input
        type='text'
        className='bg-purple-700 py-1 px-3 text-white text-center w-16 appearance-none focus:outline-none'
        value={props.currentQuantity}
        onChange={handleInputChange}
      />
      <button
        className='bg-purple-700 text-white py-1 px-3 rounded-r'
        onClick={() => props.setCurrentQuantity(props.currentQuantity + 1)}
      >
        +
      </button>
    </div>
  )
}

export default CounterButton
