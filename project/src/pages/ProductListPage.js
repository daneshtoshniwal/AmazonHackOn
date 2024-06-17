import React from 'react';

const ProductListPage = ({ products }) => {
  return (
    <div className="product-list-page">
      <h1>Product List</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index} className="product-item">
            <h3>{product.productName}</h3>
            <p>Category: {product.category}</p>
            <p>Actual Price: ${product.actualPrice}</p>
            <p>Discounted Price: ${product.discountedPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;
