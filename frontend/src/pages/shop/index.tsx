import React from 'react'
import Features from '../../components/shop/Features'
import Productdisplay from '../../components/shop/Productdisplay'
import Shopbanner from '../../components/shop/Shopbanner'
import Shopcard from '../../components/shop/Shopcard'

const shop = () => {
  return (
    <>
      <Shopbanner />
      <Features />
      <div className='mt-5 pt-3'>
        <h1 className="ff-lora fw-bold text-center">Our Products</h1>
        {/* <Shopcard /> */}
        <Productdisplay />
      </div>
    </>
  )
}

export default shop
