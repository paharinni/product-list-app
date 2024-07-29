import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='Product'>
      <li>
        <h3>{product.name}</h3>
        <img src='alala' alt='Image'/>
        <p>
          Count: {product.count}
          Width: {product.width}
          Height: {product.height}
          Weight: {product.weight}
        </p>
      </li>
    </div>
  );
};

export default Product;
