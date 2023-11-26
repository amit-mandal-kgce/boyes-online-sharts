import React from 'react'
import BankingSecOp from './child/BankingSecOp'
import data from '@/utis/productData'
import { IProduct } from './child/BankingSecOp'

const page = ({params}: {params: {id: string[]}}) => {
    const [id] = params.id;
    const product = data.find((ele: IProduct) => ele.id.toString() === id ) 

  return (
    <div>
      {product && (<BankingSecOp
          key={product.id.toString()}
          id={product.id}
          name={product.name}
          price={product.price}
          offer={product.offer}
          category={product.category}
        />)}
    </div>
  )
}

export default page