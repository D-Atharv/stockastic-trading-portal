import React, { useState } from 'react';
import axios from 'axios';

const Stock = ({ company, showSnackbar, updateCounter, index }) => {
    const [currentQuantity, setCurrentQuantity] = useState(0);
    const buyBtn = document.getElementById(`buyBtn-${index}`);

    const buyStock = async () => {
        console.log({
            type: 'buy',
            company: company._id,
            volume: currentQuantity,
        }); // Log the payload

        if (!company || !company._id) {
            showSnackbar('Company data is missing.', 5000);
            return;
        }
        await axios
            .post(
                `http://localhost:8000/api/stockastic/transaction/`,
                {
                    type: 'buy',
                    company: company._id,
                    volume: currentQuantity,
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('jwt'),
                    },
                }
            )
            .then((response) => {
                if (response.data.status.toLowerCase() === 'fail') {
                    return;
                }
                showSnackbar(`You bought ${currentQuantity} stock(s) of ${company.name}`, 5000);
                setCurrentQuantity(0);
                updateCounter();
                buyBtn.disabled = false;
            })
            .catch((error) => {
                if (error.response.data.message === 'Enter all the details type, company, volume, price') {
                    showSnackbar('Please enter a non-zero quantity.', 5000);
                    buyBtn.disabled = false;
                    return;
                }
                showSnackbar(error.response.data.message, 5000);
                buyBtn.disabled = false;
            });
    };

    const handleBuy = () => {
        buyStock();
        buyBtn.disabled = true;
        setTimeout(() => {
            buyBtn.disabled = false;
        }, 5000);
    };

    return (
        <div className='flex flex-row items-center justify-center bg-[#303030] rounded-3xl text-white font-montaga py-3 my-3'>
            <div className='w-full grid grid-cols-5 gap-x-4 justify-items-stretch justify-between'>
                <div className='flex flex-row items-center'>
                    <img className='h-[40px] w-[50px] ml-4' src='./stockastic_logo.svg' alt='Logo' />
                    <p>{company.stockName.slice(0, 22)}</p>
                </div>
                <div className='ps-10'>
                    <p>{company.participantStocks}</p>
                </div>
                <div>
                    <p>{company.prices.toFixed(2)}</p>
                </div>
                <div>
                    <input
                        type='number'
                        min='1'
                        value={currentQuantity}
                        onChange={(e) => setCurrentQuantity(e.target.value)}
                        placeholder='Qty'
                        className='border rounded px-2 py-1 text-black text-center'
                    />
                </div>
                <div>
                    <button
                        className='font-montaga py-2 px-5 rounded-xl bg-[#3DB042] w-[100px] mx-1 disabled:opacity-50 disabled:cursor-not-allowed'
                        id={`buyBtn-${index}`}
                        onClick={handleBuy}
                        disabled={currentQuantity <= 0}
                    >
                        BUY
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Stock;
