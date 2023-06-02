import React, { useState } from 'react'
import CountTracker from './CountTracker'
import axios from 'axios'

const Stock = (props) => {
  const buyStock = async () => {
    await axios
      .post(
        `${
          import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL
        }/stockastic/transaction/`,
        {
          type: 'buy',
          company: props.company._id,
          volume: currentQuantity,
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('jwt'),
          },
        }
      )
      .then((response) => {
        // Handle the response data
      })
      .catch((error) => {
        // Handle the error
      })
  }

  const sellStock = async () => {
    await axios
      .post(
        `${
          import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL
        }/stockastic/transaction/`,
        {
          type: 'sell',
          company: props.company._id,
          volume: currentQuantity,
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('jwt'),
          },
        }
      )
      .then((response) => {
        // Handle the response data
      })
      .catch((error) => {
        // Handle the error
      })
  }

  const [currentQuantity, setCurrentQuantity] = useState(0)

  return (
    <div>
      <div className='flex flex-row items-center justify-around bg-[#303030] rounded-3xl text-white font-montaga py-3 my-3'>
        <div className='flex flex-row items-center justify-center min-w-[10vw]'>
          <img className='h-[40px] w-[50px]' src='./stockastic_logo.svg' />
          <p>{props.company.name}</p>
        </div>
        <div>
          <p>{props.company.volume}</p>
        </div>
        <p>{props.company.price.toFixed(2)}</p>
        <CountTracker
          currentQuantity={currentQuantity}
          setCurrentQuantity={setCurrentQuantity}
        />
        <div className=''>
          <button
            className='font-montaga py-2 px-5 rounded-xl bg-[#3DB042] w-[100px] mx-1'
            onClick={buyStock}
          >
            BUY
          </button>
          <button
            className='font-montaga py-2 px-5 rounded-xl bg-[#FF2235] w-[100px] mx-1'
            onClick={sellStock}
          >
            SELL
          </button>
        </div>
      </div>
    </div>
  )
}

export default Stock
