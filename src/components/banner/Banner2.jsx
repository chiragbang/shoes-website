import React from 'react'
import "../banner/styles/Banner2.css"
import Image from 'next/image'

const Banner1 = () => {
  return (
    <div className='banner2'>
        <div className='banner2-left'>
       {/* <h3>Dress to impress: where style meets convenience in every click!</h3> */}
       <h1>Discover Your Footwear Style : <span>Explore Our Footwear Collection!</span></h1>
       <button>Shop Now</button>
        </div>
        <div className='banner2-right'>
       <Image width={500} height={500} src="/banner/banner2.webp"/> 
        </div>
      
    </div>
  )
}

export default Banner1