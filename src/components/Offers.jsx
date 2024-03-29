import React from 'react'
import '../styles/Offers.css';
import Image from 'next/image';


const Offers = () => {
  return (
    <div className='offers'>
    <div className="grid-item">
      <Image width={370} height={542} src="/homeOffers/1.jpg"/>
    </div>
    <div className="grid-item">
      <Image width={370} height={542} src="/homeOffers/2.jpg"/>
    </div>
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column"}} className='grid-item'>

    <div >
      <Image width={300} height={250} src="/homeOffers/3.jpg"/>
    </div>
    <div >
      <Image width={300} height={250} src="/homeOffers/4.jpg"/>
    </div>
  </div>
</div>



  )
}

export default Offers