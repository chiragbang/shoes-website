import React from 'react'
import "../banner/styles/Banner3.css"
import Image from 'next/image'

const Banner3 = () => {
  return (
    <div className='banner3'>
        <div className='banner3-left'>
       {/* <h3>Dress to impress: where style meets convenience in every click!</h3> */}
       <h1>Discover Your Watches Style : <span>Explore Our Watches Collection!</span></h1>
       <button>Shop Now</button>
        </div>
        <div className='banner3-right'>
       <Image width={500} height={500} src="/banner/banner3.webp"/> 
        </div>
      
    </div>
  )
}

export default Banner3