'use client'
import axios from 'axios';
import Link from 'next/link';
import React, {useState} from 'react'
import { IoMdAddCircleOutline, IoMdHome } from "react-icons/io";

const Page = () => {

  const [products, setProducts] = useState({
    image: '', name: '', price: '', offer: '', stars: '', review: '', category: '', sale: '',

  })

  const sendProduct = async () => {
    try {
      const response = await axios.post('/api/products/productadd', products);
      console.log('Datastore Okey', response.data)
    } catch (error: any) {
       console.log('Failed to store Products!', error.message)
    }
  }


  return (
    <div className='flex flex-col justify-center items-center bg-red-300 h-screen mt-[-4px]'>
      <div className="flex w-full text-3xl mt-[-20px] px-4">
        <Link href='/profile'><IoMdHome/></Link>
      </div>
      <div className="flex flex-col items-center mt-[-40px]">
        <h1 className='uppercase font-bold text-md lg:text-2xl'>add product data</h1>
        <h2 className="uppercase font-light text-xs lg:text-base mb-7 lg:mb-10">please use only host men</h2>

        <input className="bg-gray-50 border outline-none mb-3 lg:mb-4 border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-400 block w-full p-1.5 lg:p-2 "
        placeholder="Images"
        id="image"
        type="name"
        value={products.image}
        onChange={(e)=> setProducts({...products, image: e.target.value})}
        />

        <input className="bg-gray-50 border outline-none mb-3 lg:mb-4 border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-400 block w-full p-1.5 lg:p-2 "
        placeholder="Name"
        id="name"
        type="name"
        value={products.name}
        onChange={(e)=> setProducts({...products, name: e.target.value})}
        />

        <input className="bg-gray-50 border outline-none mb-3 lg:mb-4 border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-400 block w-full p-1.5 lg:p-2 "
        placeholder="Price"
        id="price"
        type="price"
        value={products.price}
        onChange={(e)=> setProducts({...products, price: e.target.value})}
        />

        <input className="bg-gray-50 border outline-none mb-3 lg:mb-4 border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-400 block w-full p-1.5 lg:p-2 "
        placeholder="Offer"
        id="offer"
        type="offer"
        value={products.offer}
        onChange={(e)=> setProducts({...products, offer: e.target.value})}
        />

        <input className="bg-gray-50 border outline-none mb-3 lg:mb-4 border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-400 block w-full p-1.5 lg:p-2 "
        placeholder="Stars"
        id="stars"
        type="stars"
        value={products.stars}
        onChange={(e)=> setProducts({...products, stars: e.target.value})}
        />

        <input className="bg-gray-50 border outline-none mb-3 lg:mb-4 border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-400 block w-full p-1.5 lg:p-2 "
        placeholder="Review"
        id="review"
        type="review"
        value={products.review}
        onChange={(e)=> setProducts({...products, review: e.target.value})}
        />

        <input className="bg-gray-50 border outline-none mb-3 lg:mb-4 border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-400 block w-full p-1.5 lg:p-2 "
        placeholder="Category"
        id="category"
        type="category"
        value={products.category}
        onChange={(e)=> setProducts({...products, category: e.target.value})}
        />

        <input className="bg-gray-50 border outline-none mb-3 lg:mb-4 border-gray-300 text-gray-900 text-xs lg:text-sm rounded-lg focus:ring-blue-400 block w-full p-1.5 lg:p-2 "
        placeholder="Sale"
        id="sale"
        type="sale"
        value={products.sale}
        onChange={(e)=> setProducts({...products, sale: e.target.value})}
        />

        <div className="text-3xl lg:text-5xl text-red-700 cursor-pointer" onClick={sendProduct}><IoMdAddCircleOutline /></div>

      </div>
    </div>
  )
}

export default Page
