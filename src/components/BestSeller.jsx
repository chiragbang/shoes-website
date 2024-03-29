
"use client"
import React, { useState } from 'react';
import "../styles/BestSeller.css"
import Image from 'next/image';
import Link from 'next/link';
import { RiStarSFill } from "react-icons/ri";

const categories = [
  { name: 'Footwear', products: ['Product 1', 'Product 2', 'Product 3'] },
  { name: 'Shoes', products: ['Product 4', 'Product 5', 'Product 6'] },
  { name: 'Fashion', products: ['Product 7', 'Product 8', 'Product 9'] },
  { name: 'Jewellery', products: ['Product 10', 'Product 11', 'Product 12'] },
  { name: 'Health & Beauty', products: ['Product 13', 'Product 14', 'Product 15'] },
  { name: 'Handbags', products: ['Product 16', 'Product 17', 'Product 18'] },
  { name: 'Toys-Gifts', products: ['Product 19', 'Product 20', 'Product 21'] },
];

const BestSeller = () => {
  const [selectedCategory, setSelectedCategory] = useState('Footwear'); // Set default category to 'Footwear'

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className='bestseller-main-container'>
    
        <h2 className='title'>Best Seller <strong>Products</strong></h2>
    <div className='bestseller-container'>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className={`category ${selectedCategory === category.name ? 'active' : ''}`} onClick={() => handleCategoryClick(category.name)}>
            {category.name}
          </div>
        ))}
      </div>
      <div className="products">
        {selectedCategory && (
          <>
            {/* <h2>{selectedCategory}</h2> */}
            <div className="product-cards">
              {categories.find(category => category.name === selectedCategory).products.map((product, index) => (
                <div key={index} className="product-card">
                <Image width={200} height={300} src="/shoe.png" alt='shoe'/>
                <Link href="/">Aenean Sagittis</Link>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                  <p>&#8377; 2000</p>
                  <div className='star-rating'>
                    <RiStarSFill/>
                    <RiStarSFill/>
                    <RiStarSFill/>
                    <RiStarSFill/>
                    <RiStarSFill/>
                    
                  </div>
                </div>
                </div>
              ))}
            </div>
          
          </>
        )}
      </div>
    </div>
    </div>

  );
};

export default BestSeller;
