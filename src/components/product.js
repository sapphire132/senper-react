import React, { Component } from 'react';
import './products.css';
// import { useParams } from "react-router-dom";

const Product = (props) => {
    // let params = useParams();
    // let design = getImage(parseInt(params.designId,10))

    

    return(
        <div className="product">
            <img
            src={props.design.image}
            className="product-img" alt="..." />
            
            
            
            <div className="title">
            <p> {props.design.client} </p>
            </div>
        </div>
    );
}

export default Product;