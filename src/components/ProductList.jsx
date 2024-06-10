/* eslint-disable react/prop-types */
// src/components/ProductList.js
import { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { getAllProducts } from "../services/productService";

const ProductList = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id} sm={12} md={6} lg={3} className="mb-4">
          <Card
            className="pt-4 px-2"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Card.Img
              variant="top"
              src={product.image}
              style={{ height: "200px", objectFit: "contain" }}
            />
            <Card.Body
              style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
            >
              <Card.Title>{product.title}</Card.Title>
              <Card.Text className="mb-4">{product.price} USD</Card.Text>
              <Button
                variant="primary"
                className="mt-auto align-self-end"
                onClick={() => onProductSelect(product.id)}
              >
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
/* 
 <Row>
      {products.map((product) => (
        <Col key={product.id} sm={12} md={6} lg={4}>
          <Card className="mb-4" style={{ width: "15rem" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.price} USD</Card.Text>
              <Button
                variant="primary"
                onClick={() => onProductSelect(product)}
              >
                View Details
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>


*/
