// src/components/ProductDetail.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductDetail = ({ product, onBack }) => {
  return (
    <Card>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price} USD</Card.Text>
        <Button variant="secondary" onClick={onBack}>
          Back to Products
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductDetail;
