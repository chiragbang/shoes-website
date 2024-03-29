import React from 'react'
import "../banner/styles/Banner1.css"
import Image from 'next/image'

const Banner1 = () => {
  return (
    <div className='banner1'>
        <div className='banner1-left'>
       <h1>Sale Products</h1>
       <h2>NIKE ARI MAX 2015</h2>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
       <button>Shop Now</button>
        </div>
        <div className='banner1-right'>
       <Image width={500} height={500} src="/banner/banner1.png"/> 
        </div>
      
    </div>


  )
}

export default Banner1


