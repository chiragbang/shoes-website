import React from 'react'
import "../styles/Description.css"
import Image from 'next/image'

const Description = () => {
  return (
    <div className='description-container'>
<h1>Why you should choose <span>Novella</span></h1>
<div className='description-content'>
    <div className='description-image'>
      <Image width={600} height={500} src="/description.png"/>
    </div>
    <div className='description-info'>
      <h2>Novella: Unveiling Tales of Style.</h2>
    </div>
</div>
    </div>
  )
}

export default Description