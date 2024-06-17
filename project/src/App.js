import React , {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductListPage from './pages/ProductListPage';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
    console.log('Adding product:', product);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage onAddProduct={handleAddProduct} />} />
          <Route path="/product-list" element={<ProductListPage products={products} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
