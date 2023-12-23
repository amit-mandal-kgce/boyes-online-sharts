'use client'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, {useState} from 'react'

const BankingSecOp = ({ name, price, offer, category}: IProduct) => {
const params: {id: string[]}=useParams()
    const [id,dropItem]= params.id;
    const dropItemsNew = Number.parseInt(dropItem);
    const itemsMulti = (dropItemsNew * price);
    const itemsDiscount = Math.round(((price / 100) * offer) * dropItemsNew)
    const totalPric = (itemsMulti - itemsDiscount)


const paymentType = ['Wallet/Postpaid', 'Credit/Debit/ATM Card', 'Net Bankink', 'EMI(Easy Installments)', 'UPI', 'Cash on Delivery']
  const [payBtn, payList] = useState("");

  return (
    <main>
      <div className="bg-gray-100 py-3 px-10 my-4">
        <div className="items-center font-bold flex flex-col sm:flex-row space-y-2 sm:space-x-4 text-xs md:text-base text-gray-500">
            <Link href='/profile' className='cursor-pointer'>Home</Link>
            <div className="w-full sm:w-[30px] h-[3px] bg-gray-400"/>
            <p className='capitalize gap-4'>{category}</p>
            <div className="w-full sm:w-[30px] h-[3px] bg-gray-400"/>
            <p className='capitalize gap-4'>{name}</p>
        </div>
        </div>
    <div className='py-4 md:px-20 lg:px-40'>
      <div className='font-bold text-center text-2xl text-blue-500 border-b-2 border-dotted'><p className='py-2'>Payment Details</p></div>
      <p className='text-1xl font-bold p-3'>All Options Payment</p>
      <ul className='p-6 text-sm sm:text-base'>
        {
          paymentType.map((e)=>{
            return(<div key={e} className='py-2'>
            <input type ='radio' name='paymentType' id={e} value={e} onChange={(el)=>{payList(el.target.value)}}/>
            <label htmlFor={e}> {e}</label>
            <br/>
          </div>)
          })
        }
      </ul>
          <div className="p-4">
            <ul className='grid md:grid-cols-1 gap-y-2'>
            <h1 className='font-bold text-gray-400 border-b border-dotted border-gray-400'>PRICE DETAILS</h1>
            <div className='grid gap-y-2 text-sm sm:text-base'>
                <div className="grid grid-cols-2 gap-4">
                    <ul className="grid gap-y-2">
                      <li>Name:</li>
                      <li>Size:</li>
                      <li>Price ({dropItem} item)</li>
                      <li>Delivery Charges</li>
                    </ul>
                    <ul className="grid gap-y-2">
                      <li>{name}</li>
                      <li>L</li>
                      <li className='r-0'>₹{totalPric}</li>
                      <li className='r-0 text-green-600'>FREE</li>
                    </ul>
                </div>
                <ul className='py-6 grid grid-cols-2 border-t border-dotted border-t-gray-400'>
                    <li className='font-bold'>Amount Payable</li>
                    <li>₹{totalPric}</li>
                </ul>
            </div>
            </ul>
            <div className='flex items-center justify-between p-3 border-t-2 border-b-2 border-dotted'>
                <ul className='grid grid-rows-2 text-sm'>
                    <p className='font-bold'>{totalPric}</p>
                    <del className='text-xs text-gray-500'>{itemsDiscount}</del>
                </ul>
                <Link href={'/profile'} className='p-2 px-4 text-xs md:text-base rounded-md bg-amber-400'>Continue</Link>
            </div>
          </div>  
    </div>
    </main>
  )
}

export default BankingSecOp

export interface IProduct{
    id: number;
    name: string;
    price: number;
    offer: number;
    category: string[];
}