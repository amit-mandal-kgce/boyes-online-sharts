'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsCartPlus, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'



const DetailsSec = ({id, img, name, price, review, stars, offer, category}: Iproduct) => {
 
const offpric = Math.round(price - ((price/100) * offer))
  return (
    <div className='my-4'>
      <div className="bg-gray-100 py-3 px-10">
        <div className="items-center flex flex-col font-bold sm:flex-row space-y-2 sm:space-x-4 text-xs md:text-base font text-gray-500">
            <Link href='/' className='cursor-pointer font-bold'>Home</Link>
            <div className="w-full sm:w-[30px] h-[3px] bg-gray-400"/>
            <p className='capitalize gap-4 font-bold'>{category}</p>
            <div className="w-full sm:w-[30px] h-[3px] bg-gray-400"/>
            <p className='capitalize gap-4 font-bold'>{name}</p>
        </div>
      </div>
      <div className="py-8 px-8">
        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-8 justify-center sm:items-start">
            <div className='place-items-center p-2'>
               <Image src={img} alt='Details Images' width={400} height={200}/>
            </div>
          <div>
          <ul className="space-y-4 flex flex-col">
            <div className='flex flex-col gap-2 text-md md:text-2xl text-amber-400'>
            <div className="flex gap-2">
              {  

            [1, 2, 3, 4, 5].map((i) => (
                i <= stars?
                <AiFillStar key={id}/>:
                <AiOutlineStar key={id}/>
              ))
            }
            </div>
            <p className='text-gray-400 text-xs md:text-xl'>({review} <span>Customer Review</span>)</p></div>
            <div className="text-sm md:text-xl font-bold">{name}</div>
            <div className="text-xs md:text-xl">₹{offpric}.00 <del className='text-gray-400 '>₹{price}.00</del> <span className=' font-semibold text-green-600'>({offer}% OFF)</span></div>
            <Link href="/" className="gap-2 flex bg-pink-500 py-2 text-xs md:text-base text-gray-100 rounded-full w-36 md:w-44 px-5 hover:bg-pink-400"><BsCartPlus/><span>ADD TO CART</span></Link>
            <div><Link href={{pathname: `/paymdetails/${id}`}} key={id} className="bg-orange-400 text-white rounded-full px-4 py-2 text-xs md:text-base cursor-pointer">BUY NOW!</Link></div>
            <div className="sm:w-[70px] h-[3px] bg-gray-400"/>
            <div className="text-xs md:text-lg">Name:- {name}</div>
            <div className="text-xs md:text-lg">Category:- {category[0]}</div>
            <div className="sm:w-[70px] h-[3px] bg-gray-400"/>
            <div className="flex gap-4 items-center">SHARE:<BsInstagram/> <BsFacebook/><BsTwitter/></div>
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsSec

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