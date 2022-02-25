import React from "react";
import "./products.css";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Product = (props) => {
  // let params = useParams();
  // let design = getImage(parseInt(params.designId,10))

  return (
    <div className="product">
      <Link to={`/design/${props.design.id}`} state={props.design}>
        <img src={props.design.image} className="product-img" alt="..." />

        <div className="title">
          <p> {props.design.client} </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
