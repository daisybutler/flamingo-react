import React from "react";
import ProductCard from "../../components/ProductCard";
import { Row } from "react-bootstrap";

const Skincare = () => {
    
    return (
      <>
        <h1>Skincare</h1>
        <div className="container product-overview">
        <Row className="product-row">
          <ProductCard />
        </Row>
        <Row className="product-row">
          <ProductCard />
        </Row>
        </div>
      </>
    )
}

export default Skincare;