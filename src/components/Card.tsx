'use client'
import React from 'react'
import Image from 'next/image'
import { AiFillStar, AiOutlineStar, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const Card = ({id,img, name, price,stars, sale}: Iproduct) => {
  return (
    <div className="group cursor-pointer shadow-md" >
        <div className="relative">
            <Image className='w-full' width={800} height={1042} src={img} alt={name}/>
            {sale && <div className='bg-red-600 inline-block absolute top-0 right-0 text-[14px] text-white rounded-md px-2 py-[2px] m-4'>SALE!</div>}
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000050] opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer">
                <div className="absolute bottom-0 mb-4 left-[50%] translate-x-[-50%] flex gap-2">
                    <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center">
                        <AiOutlineHeart/>
                    </div>
                    <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center">
                        <AiOutlineShoppingCart/>
                    </div>
                </div>
            </div>
        </div>
            <div className="flex space-x-2 py-2 text-xl text-orange-500">
                {[1, 2, 3, 4, 5].map((ele) => (
                ele <= stars ? 
                <AiFillStar key={id}/>:
                <AiOutlineStar key={id}/>
              ))}
            </div>
        <h2 className="font-medium hover:text-accent">{name}</h2>
        <p className="text-gray-600 py-2 font-light">₹{price}.00</p>
    </div>
  )
}

export default Card;

export interface Iproduct{
    id: number;
    img: string;
    name: string;
    price: number;
    stars: number;
    sale: boolean | undefined;
}
