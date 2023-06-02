import React, { useEffect, useState } from 'react'
import Stock from './Stock'
import axios from 'axios'

import { useNavigate } from 'react-router'

import Loader from './Loader'

const MainSection = () => {

  const navigate = useNavigate()

  const [companies, setCompanies] = useState([])

  const [walletBal, setWalletBal] = useState(0)

  const [isLoading, setIsLoading] = useState(true)

  const jwt = localStorage.getItem('jwt')

  useEffect(() => {
    if (jwt === null) {
      navigate('/SignIn')
    }
    async function getStocks() {
      await axios
        .get(
          `${import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL}/stockastic/company`,
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
            setCompanies(e.data.companies)
            setIsLoading(false)
          }
          return
        })
        .catch((e) => {})
    }

    async function getWallet() {
      await axios
        .get(`${import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL}/team`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('jwt'),
          },
        })
        .then((e) => {
          const status = e.data.status
          if (status === 'fail') {
            alert(e.data.err)
          } else {
            setWalletBal(e.data.team.wallet)
          }
          return
        })
        .catch((e) => {})
    }

    getWallet()
    getStocks()
    return
  }, [])

  return (
    <div className='mx-10 rounded-3xl my-10 h-full'>
      <div className='flex flex-row items-center justify-around py-3 font-montaga text-white text-extrabold text-md px-[7%]'>
        <h1 className='flex-1'>STOCK NAME</h1>
        <h1 className='flex-1'>VOLUME AVAILABLE</h1>
        <h1 className='flex-1'>PRICE</h1>
        <h1 className='flex-1'>Quantity</h1>
        <h1 className='bg-white px-10 py-3 text-black rounded-2xl'>
          Amount Left: <span>{walletBal.toFixed(2)}</span>
        </h1>
      </div>
      {isLoading ? (
        <div class='h-full w-full flex justify-center items-center p-12'>
          <Loader />
          <div
            id='snackbar'
            className={
              'w-fit h-fit bg-green-400 border-green-800 text-black-700 border px-4 py-3 rounded transition invisible fixed bottom-4 left-4'
            }
            role='alert'
          >
            Snackbar message here.
          </div>
        </div>
      ) : (
        <>
          <div className='bg-[#FE45RG] px-5 py-5'>
            {companies.map((company, index) => (
              <Stock key={index} company={company} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default MainSection
