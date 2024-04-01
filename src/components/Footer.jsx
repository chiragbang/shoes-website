import React from 'react'
import "../styles/Footer.css"
import Image from 'next/image'
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from 'next/link';



const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='footer-left'>
        <div className='left-first'>
         <Image height={100} width={100} src="/logo.png"/>
         <ul>
         <li><TbDeviceLandlinePhone className='footer-icon'/>123456789</li>
         <li><FaPhoneAlt className='footer-icon'/>987654321</li>
         <li><IoIosMail className='footer-icon'/>support@shoes.com</li>
         </ul>
        </div>


        <div className='left-second'>
          <hr/>
          <h2>LATEST TWEETS</h2>
          <p >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className='footer-right'>
        <div className='right-first'>
          <h2>Our Services</h2>
          <ul>
            <li><Link href="/">Shipping and Returns</Link></li>            
            <li><Link href="/">Secure Shopping</Link></li>            
            <li><Link href="/">International Shipping</Link></li>            
            <li><Link href="/">Affiliates</Link></li>            
            <li><Link href="/">Contact</Link></li>            
          </ul>
        </div>

        <div className='right-second'>
          <h2>Information</h2>
          <ul>
            <li><Link href="/">Our Blog</Link></li>            
            <li><Link href="/">About Our Shop</Link></li>            
            <li><Link href="/">Secure Shopping</Link></li>            
            <li><Link href="/">Privacy Policy</Link></li>            
            <li><Link href="/">Delivery Information</Link></li>            
          </ul>
          </div>
      </div>

      
    </div>
    <div className="base-footer">
    <h2>COPYRIGHT © 2024 <span>SHOES</span> ALL RIGHTS RESERVED</h2>
    <Image width={300} height={300} src="/payment.png"/>
  </div>
  </>

  )
}

export default Footer