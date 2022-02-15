import React from 'react';
import './products.css';
import Product from './product';
import {Link, Outlet} from 'react-router-dom';
import {getImages} from './data';

const Products = () =>{
    let designs = getImages();
        
    
    return(
        <div className="product-box">

            <div>
                {designs.map(design =>(
                    <Link to={`/design/${design.id}`}  state={design}>
                        <Product design = {design} />
                    </Link>
                ))
                }
            </div>
                
            
            <Outlet />
        </div>
    );
}

export default Products;