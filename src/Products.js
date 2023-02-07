import React from "react";
import MProducts from "./images/Products.jpg";

function Products() {
  return (
    <div>
      <h3>Microsoft Products</h3>
      <div className="img">
        <img src={MProducts} alt="Products of Microsoft" />
      </div>
    </div>
  );
}

export default Products;
