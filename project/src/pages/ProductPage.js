import React,{ useState }  from 'react';
import ProductForm from '../components/ProductForm';
import { Navigate, useNavigate } from 'react-router-dom';

const ProductPage = ({ onAddProduct }) => {

  const handleAddProduct = (product) => {
    onAddProduct(product)
    console.log('Adding product:', product);
    Navigate("/product-list");
  };

  return (
    <div className="product-page">
      <h1>Product Page</h1>
      <ProductForm onAddProduct={handleAddProduct} />
    </div>
  );
};

export default ProductPage;
