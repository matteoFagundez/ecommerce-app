// src/App.js
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="App">
      <Header />
      <Container className="mt-4">
        {selectedProduct ? (
          <>
            <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />
            <CurrencyConverter priceUSD={selectedProduct.price} />
          </>
        ) : (
          <ProductList onProductSelect={product => setSelectedProduct(product)} />
        )}
      </Container>
    </div>
  );
}

export default App;
