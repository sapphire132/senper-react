import React from 'react';
import './order.css';
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";



const Order = () =>{
    // const {register,handleSubmit} = useForm();
    // const onSubmit = data => console.log(data);

    return(
        <div className="order-form-container" >
        <div className="order-head">
            Your Order
        </div>
    
        <form className="order-form"  >
            
            {/* <input 
                name="item" 
                className="login-email" 
                ref={register({
                    required: true,
                    minlength:6
                })}
                placeholder="Item"
            /> */}
            <input name="client" className="login-password" type="text" placeholder="Client"></input>
            <input name="phone" className="login-password" type="text" placeholder="Phone NO."></input>
            <input name="amount" className="login-email" type="number" placeholder="Amount"></input>
            {/* <input 
                name="email" 
                className="login-password" 
                ref={register({
                    required: true,
                    validate: (input) => isEmail(input),
                })}
                placeholder="email"
            /> */}
            
            <input 
                name="description" 
                className="oredr-desc" 
                placeholder="description"
            />
            <input name="submit" type="submit" className="order-form-btn"></input>
        </form>
    </div>
    );
}

export default Order;