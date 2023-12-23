'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, {useState, ChangeEvent} from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'


const PaymentDetSec = ({id, img, name, price, review, stars, offer, category}: Iproduct) => {
    const [dropItems, setdropItems] = useState<number>(1);
    const handelQulity=(event: ChangeEvent<HTMLSelectElement>)=>{
        setdropItems(Number(event.target.value))
    }
    const offpric = Math.round(price - ((price/100) * offer))
    const itemsMulti = (dropItems * price);
    const itemsDiscount = Math.round(((price / 100) * offer) * dropItems)
    const totalPric = (itemsMulti - itemsDiscount)

  return (
    <div className='pt-1 w-full flex flex-col'>
        <div className="bg-gray-100 py-3 px-10 my-4">
        <div className="items-center flex flex-col sm:flex-row space-y-2 sm:space-x-4 text-xs md:text-base text-gray-500">
            <Link href='/profile' className='cursor-pointer'>Home</Link>
            <div className="w-full sm:w-[30px] h-[3px] bg-gray-400"/>
            <p className='capitalize gap-4'>{category}</p>
            <div className="w-full sm:w-[30px] h-[3px] bg-gray-400"/>
            <p className='capitalize gap-4'>{name}</p>
        </div>
        </div>
        <div className="text-center py-2 font-bold text-2xl text-blue-500 border-b-2 border-dotted"><span>Order Summary</span></div>
        <div className="flex flex-col sm:flex-row justify-center my-3">
            <ul className='p-2 flex flex-col place-items-center'>
                <Image src={img} alt="Santosh" width={250} height={200}/>
                <ul className='border border-gray-300  p-1 mt-4 px-2'>
                    <span>Qty:</span>
                    <select className='outline-none pl-2'  onChange={handelQulity}> 
                        {[1,2,3,4,5,6].map((ele)=>
                            <option key={id} value={ele}>{ele}</option>
                        )}
                    </select>
                </ul>
            </ul>
            <ul className='md:space-y-4 flex flex-col p-12 sm:p-3'>
                <div className='flex flex-col gap-y-4'>
                <div className="text-md md:text-2xl font-bold">{name}</div>
                <div className='flex flex-col gap-2 md:text-2xl text-amber-400'>
                <div className="flex text-lg gap-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                   i <= stars?
                   <AiFillStar key={id}/>:
                   <AiOutlineStar key={id}/>
                 ))
               }
                </div>
                 <p className='text-gray-400 text-md md:text-base'>({review} Review)</p></div>
                 <div className="flex flex-row gap-1 text-md sm:text-base font-semibold"><del className='text-gray-400'>₹{price}</del><span>₹{offpric}</span><span className='text-green-600'>{offer}% OFF</span></div>
                 <div className="text-md sm:text-base">
                    <p>Delivery by Sun Dec 18 |</p>
                    <div className='my-4'>
                    <del className='text-gray-400'>₹40</del><span className='text-green-600'>FREE Delivery</span>
                    </div>
                 </div>
               </div>
            </ul>
        </div>
        <div className="px-10 md:px-60 py-16">
            <ul className='grid md:grid-cols-1 gap-y-2'>
                <h1 className='font-bold py-2'>Price Details</h1>
                <div className='grid gap-y-2 text-sm md:text-base'>
                    <div className="grid grid-cols-2 py-6 border-t border-b border-dotted border-t-gray-400">
                        <ul className="grid gap-y-3 pl-4">
                            <li>Price ({dropItems} item)</li>
                            <li>Discount</li>
                            <li>Delivery Charges</li>
                        </ul>
                        <ul className="grid gap-y-3 pl-4">
                            <li className='r-0'>₹{itemsMulti}</li>
                            <li className='r-0'>-₹{itemsDiscount}</li>
                            <li><del className='text-gray-400'>₹40</del> <span className='text-green-500'>FREE Delivery</span></li>
                        </ul>
                    </div>
                    <ul className='grid grid-cols-2'>
                        <li className='pl-4 font-bold'>Total Amount</li>
                        <li className='pl-4'>₹{totalPric}</li>
                    </ul>
                    <ul className='grid grid-cols-2'>
                        <li className='pl-4'>Your Size</li>
                        <li className='pl-4'>S</li>
                    </ul>
                    <li className='text-green-600 py-3 pl-4 border-t-2 border-dotted'>You will save ₹{itemsDiscount} on this order</li>
                </div>
            </ul>
            <div className='flex items-center justify-between p-3 border-t-2 border-b-2 border-dotted'>
                <ul className='grid grid-rows-2 text-sm'>
                    <p>{totalPric}</p>
                    <p className='text-xs text-blue-600'>View Price Details</p>
                </ul>
                <Link href={{pathname: `/bankingop/${id}/${dropItems}`}} className='p-2 px-4 text-xs md:text-base rounded-md bg-amber-400 '>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default PaymentDetSec

export interface Iproduct{
    id: number;
    img: string;
    name: string;
    price: number;
    stars: number;
    offer: number;
    review: number;
    category: string[];
}