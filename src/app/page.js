import Banner from '@/components/Banner'
import Testimonials from '@/components/Testimonials'
import BestSeller from '@/components/BestSeller'
import Blog from '@/components/Blog'
import Cta from '@/components/Cta'
import Offers from '@/components/Offers'
import React from 'react'
import OfferBanner from '@/components/OfferBanner'
import NewProducts from '@/components/NewProducts'
import FeaturedProducts from '@/components/FeaturedProducts'

const page = () => {
  return (
    <>
      <Banner/>
      <Offers/>
      <BestSeller/>
<FeaturedProducts/>
      <OfferBanner/>
      <NewProducts/>
      <Testimonials/> 
      <Blog/>
      {/* <Cta/> */}
    </>
  )
}

export default page