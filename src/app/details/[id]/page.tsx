import React from 'react';
import DetailsSec from '@/app/details/[id]/child/DetailsSec';
import { Iproduct } from '@/app/details/[id]/child/DetailsSec';
import data from '@/utis/productData';


const DynamicPage = ({ params }:{ params: { id: string } }) => {
  
  const id = params.id;
  const product = data.find((ele: Iproduct) => ele.id.toString()===id)
  // console.log(product)
  return (
    <div className='my-12 px-4'>
      <div className="pt-4">
        {product&&(<DetailsSec
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
    </div>
  );
};

export default DynamicPage;

