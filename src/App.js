// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './features/products/ProductList';
import ProductView from './features/products/ProductView';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
