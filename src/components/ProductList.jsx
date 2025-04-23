import React from 'react';
import ProductCard from './ProductCard';
import '../App.css';

function ProductList({ products }) {
  return (
    <div className="container">
      
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
        
      ))}
    </div>
    </div>
  );
}

export default ProductList;