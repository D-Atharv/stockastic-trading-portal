import React, { useEffect, useState } from 'react'
import MyStocks from './MyStocks'
import MyTeam from './MyTeam'
import axios from 'axios'
import Loader from './Loader'

const MyPortfolio = () => {
  const [myStocks, setMyStocks] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  let totalAmount = 0

  useEffect(() => {
    async function getMyStocks() {
      await axios
        .get(
          `${
            import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL
          }/stockastic/transaction/`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('jwt'),
            },
          }
        )
        .then((e) => {
          const status = e.data.status
          if (status === 'fail') {
            alert(e.data.err)
          } else {
            setMyStocks(e.data.transactions)
            setIsLoading(false)
          }
          return
        })
        .catch((e) => {})
    }
    getMyStocks()
    return
  }, [])

  return (
    <>
      <div className='flex flex-row items-center justify-around h-full'>
        <div className='bg-[#1E1B1E] mx-10 rounded-3xl my-10 h-full w-full'>
          <div className='flex flex-row items-center justify-around py-3 font-montaga text-white text-extrabold text-md px-[5%]'>
            <h1 className='flex-2'>STOCK NAME</h1>
            <h1 className='flex-2 relative right-4'>PRICE</h1>
            <h1 className='flex-2'>Quantity</h1>
            <h1 className='flex-2'>Amount</h1>
          </div>
          {isLoading ? (
            <>
              <div class='h-full w-full flex justify-center items-center p-12'>
                <Loader />
              </div>
            </>
          ) : (
            <>
              {myStocks.map((stock, index) => {
                if (stock.totalVolume > 0) {
                  totalAmount += stock.totalVolume * stock.company.price
                  return <MyStocks key={index} stock={stock} />
                }
              })}
            </>
          )}
        </div>

        {totalAmount}

        <div className='h-full mx-10 rounded-3xl my-10 w-[40%] '>
          <MyTeam />
        </div>
      </div>
    </>
  )
}

export default MyPortfolio
