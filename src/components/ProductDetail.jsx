/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Button, Row, Col, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../services/productService";

const ProductDetail = () => {
  const { id: productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProduct(productId).then((response) => {
      setProduct(response);
    });
  }, []);
  return (
    <>
      {product ? (
        <Producto
          product={product}
          handleOnBack={() => {
            navigate("/");
          }}
        />
      ) : (
        <div
          style={{ width: "100vw", height: "100vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;

const Producto = ({ product, handleOnBack }) => {
  return (
    <Row
      className="px-4 py-3 d-flex align-items-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <Col xs={12} md={6}>
        <Image
          src={product.image}
          rounded
          style={{ width: "100%", height: "80vh", objectFit: "contain" }}
        />
      </Col>
      <Col xs={12} md={6}>
        <h2 style={{ fontSize: "4rem" }}>{product.title}</h2>
        <p style={{ fontSize: "2rem" }} className="text-secondary">
          {product.description}
        </p>
        <p
          style={{ fontSize: "1.7rem", fontWeight: 600 }}
          className="text-danger"
        >
          {product.price} USD
        </p>
        <Button variant="secondary" onClick={handleOnBack}>
          Back to Products
        </Button>
      </Col>
    </Row>
  );
};
