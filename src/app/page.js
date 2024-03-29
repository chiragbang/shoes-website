import Banner from '@/components/Banner'
import Testimonials from '@/components/Testimonials'
import BestSeller from '@/components/BestSeller'
import Blog from '@/components/Blog'
import Cta from '@/components/Cta'
import Description from '@/components/Description'
import Offers from '@/components/Offers'
import React from 'react'
import Featured from '@/components/Featured'
import OfferBanner from '@/components/OfferBanner'

const page = () => {
  return (
    <>
      <Banner/>
      <Offers/>
      <BestSeller/>
      {/* <OfferBanner/> */}
      {/* <Blog/> */}
      {/* <Featured/> */}
      {/* <Cta/> */}
      <Testimonials/> 
    </>
  )
}

export default page