import React from "react";
import ProductCard from "../../components/ProductCard";

const Skincare = () => {
    
    return (
      <>
        <h1>Skincare</h1>
        <div className="container-fluid product-overview">
          <ProductCard />
          <ProductCard />
        </div>
      </>
    )
}

export default Skincare;