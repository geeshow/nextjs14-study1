"use client"
import React from 'react';
import {useRouter} from "next/navigation";

function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log('Product ordered!');
    router.push('/');
  };
  
  return (
      <>
        <h1>Order product</h1>
        <button onClick={handleClick}>place order</button>
      </>
  );
}

export default OrderProduct;
