import React from 'react'
import PaymentDetSec from '@/app/paymdetails/[id]/child/PaymentDetSec'
import data from '@/utis/productData'
import { Iproduct } from '@/components/Card'

const paymdetailspage = ({params}: {params:{id: string}}) => {
  console.log(params)
  const id = params.id;
  const product = data.find((ele: Iproduct) => ele.id.toString() === id) 
  return (
    <div>
      {product&&(<PaymentDetSec
          key={product.id.toString()}
          id={product.id}
          img={product.img}
          name={product.name}
          price={product.price}
          review={product.review}
          offer={product.offer}
          stars={product.stars}
          category={product.category}
        />)}
    </div>
  )
}

export default paymdetailspage
