import React from 'react';
import './products.css';
import Product from './product';
import {Outlet} from 'react-router-dom';
import {getImages} from './data';

const Products = () =>{
    let designs = getImages();
        
    
    return(
        <div className="product-box">

                {designs.map(design =>(
                        <Product design = {design} />
                ))
                }
            
            <Outlet />
        </div>
    );
}

export default Products;