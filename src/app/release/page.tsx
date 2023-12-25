"use client"
import React, { useEffect, useState } from 'react';
import { IoMdHome } from 'react-icons/io';
import Link from 'next/link';
import axios from 'axios';

const Page = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/products/productget');
      setData(response.data.productget);
      console.log('Get Data :>>', response.data.productget);
    } catch (error: any) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run the effect only once
console.log('Get Data :>>', data);
  return (
    <div className='bg-blue-300 h-screen mt-[-4px] flex flex-col items-center justify-center p-1'>
      <div className="text-3xl px-2 w-full flex"><Link href='/profile' className='w-4'><IoMdHome/></Link></div>
      <h1 className='font-bold text-lg py-2 md:text-2xl mt-[-20px]'>Store Product Data</h1>
      <div className="flex flex-col items-center w-full lg:w-[50%] p-2 h-screen overflow-x-scroll">
        {Array.isArray(data) && data.map((e: any) => (
          <div className="bg-red-300 border rounded-lg shadow-lg my-1 md:my-4 p-4 w-full" id={e?.name} key={e?._id}>
            <div className='text-xs md:text-md font-semibold'>Image: <span className='font-base text-gray-600 text-xs md:text-sm'>{e?.image}</span></div>
                 <div className='text-xs md:text-md font-semibold'>Name: <span className='font-base text-gray-600 text-xs md:text-sm'>{e?.name}</span></div>
                 <div className='text-xs md:text-md font-semibold'>Price: <span className='font-base text-gray-600 text-xs md:text-sm'>{e?.price}</span></div>
                 <div className='text-xs md:text-md font-semibold'>Offer: <span className='font-base text-gray-600 text-xs md:text-sm'>{e?.offer}</span></div>
                 <div className='text-xs md:text-md font-semibold'>Stars: <span className='font-base text-gray-600 text-xs md:text-sm'>{e?.stars}</span></div>
                 <div className='text-xs md:text-md font-semibold'>Review: <span className='font-base text-gray-600 text-xs md:text-sm'>{e?.review}</span></div>
                 <div className='text-xs md:text-md font-semibold'>Category: <span className='font-base text-gray-600 text-xs md:text-sm'>{e?.category}</span></div>
                 <div className='text-xs md:text-md font-semibold'>Sale: <span className='font-base text-gray-600 text-xs md:text-sm'>{e?.sale}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
















// interface Product {
//     id: number;
//     image: string;
//     name: string;
//     price: number;
//     offer: number;
//     stars: number;
//     review: number;
//     category: string;
//     sale: boolean | undefined;
// }

// const Page: React.FC = () => {
//     const [productData, setProductGet] = useState<Product[]>([]);

//     const fetchProductData = async () => {
//         try {
//             const response = await fetch('api/products/productget');
//             const data = await response.json();
//             setProductGet(data);
//         } catch (error) {
//             console.error('Error fetching product data:', error);
//         }
//     };

//     useEffect(() => {
//         // Fetch data when the component mounts
//         fetchProductData();
//     }, []); // The empty dependency array ensures that this effect runs only once, equivalent to componentDidMount

//     console.log('Get Data :>>', productData);

//     return (
//         <div className="bg-blue-300 h-screen mt-[-4px] flex items-center justify-center">
//             <div className="flex flex-col items-center border bg-red-400">
//                 kl
//                 {
//                     Array.isArray(productData) &&
//                     productData.map((ele) => (
//                         <div className="bg-red-500" id={ele.name} key={ele.id}>
//                             <div className='text-white text-5xl'>{ele.image}</div>
//                             <div className='text-white'>{ele.name}</div>
//                             <div className='text-white'>{ele.price}</div>
//                             <div className='text-white'>{ele.offer}</div>
//                             <div className='text-white'>{ele.review}</div>
//                             <div className='text-white'>{ele.category}</div>
//                             <div className='text-white'>{ele.sale}</div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default Page;


