import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiStarSFill } from 'react-icons/ri';
import "../styles/featured-Products.css";

const FeaturedProducts = () => {
  // Define product data
  const products = [
    { id: 1, name: 'Aenean Sagittis', price: 2000, imageUrl: '/shoe.png' },
    { id: 2, name: 'Turpis Velit', price: 2500, imageUrl: '/shoe2.png' },
    { id: 3, name: 'Sagittis Luctus', price: 1800, imageUrl: '/shoe3.png' }
    // Add more products as needed
  ];

  return (
    <div className='featured-products-container'>
      <h2 className='featured-products-title'>/ featured Products<span>.</span></h2>
      <div className='featured-products'>
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <Image width={200} height={300} src={product.imageUrl} alt={product.name} />
            <Link href="/">{product.name}</Link>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p>&#8377; {product.price}</p>
              <div className='star-rating'>
                {[...Array(5)].map((_, index) => (
                  <RiStarSFill key={index} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
