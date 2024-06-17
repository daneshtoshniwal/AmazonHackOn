import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Our E-commerce Site</h1>
      <Link to="/products">View Products</Link>
    </div>
  );
};

export default HomePage;
