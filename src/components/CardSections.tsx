'use client'
import React  from 'react'
import Data from '@/utis/productData'
import { Iproduct } from './Card'
import Card from './Card'

const CardSections = () => {
    const shuffelArrey = (array: any) => {
    return array
    .map((value: any) => ({value, sort: Math.random()}))
    .sort((a: any, b:any) => a.sort - b.sort)
    .map(({value}: any) => value);
  };


  let shuffleProducts = shuffelArrey(Data).slice(0, 50)

  return (
    <div className=" my-12 px-4">
        <div className="text-center">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4">
                {shuffleProducts.map((item: Iproduct) => (
                <Card
                key={item.id}
                id={item.id} 
                img={item.img} 
                name={item.name} 
                price={item.price} 
                stars={item.stars}
                sale={item.sale}
                />))}
            </div>
        </div>
    </div>
  )
}

export default CardSections
