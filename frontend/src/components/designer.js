import React from 'react';
import './designer.css';
import Product from './product';
import {getDesigners, getImages} from './data';
import { useLocation } from 'react-router-dom';

const Designer = () => {
    const location = useLocation();
    const designers = getDesigners();
    const designer = designers.find(
        designer => designer.id === location.state.designerId
    );
    const design = getImages().find(
        design => design.designerId = designer.id
    )

    console.log(designers);
    console.log(designer);

   return(
    <div>
    <div className="designer-page">
<div className="designer-profile">
<img src={designer.avatar} alt="pr" />
</div>

<div className="designer-details">
<h2> {designer.name} </h2>
<p> {designer.username} </p> 

<p>{designer.bio} | Working at company </p>
<p>  </p>

<div className="skills">
     <p className="skill"> skill </p>
</div>

<div className="designer-about">
  about you
</div>

<div className="designer-social-media">
 <p> social media </p>
</div>


</div>
</div>


<hr className="horz" />


<div className="product-box">
    <Product design={design}/>
</div>
</div>
   );
}

export default Designer;