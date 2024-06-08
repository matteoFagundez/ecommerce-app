// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import productService from '../services/productService';

const ProductList = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getProducts().then(data => {
      setProducts(data);
    });
  }, []);

  return (
    <Row>
      {products.map(product => (
        <Col key={product.id} sm={12} md={6} lg={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.price} USD</Card.Text>
              <Button variant="primary" onClick={() => onProductSelect(product)}>
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
