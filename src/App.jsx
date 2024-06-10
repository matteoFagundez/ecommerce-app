import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import CurrencyConverter from "./components/CurrencyConverter";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <Container className="mt-4">
        {selectedProduct ? (
          <>
            <ProductDetail
              product={selectedProduct}
              onBack={() => setSelectedProduct(null)}
            />
            <CurrencyConverter priceUSD={selectedProduct.price} />
          </>
        ) : (
          <ProductList
            /*  onProductSelect={(product) => setSelectedProduct(product)} */
            onProductSelect={(productId) => {
              navigate(`product/${productId}`);
            }}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
