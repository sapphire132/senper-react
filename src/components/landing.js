import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Products from './products';
import './landing.css';

const Landing = (props) => {
    let navigate = useNavigate();

   

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        // if (authToken) {
        //     navigate('/')
        // }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
        return(
            <div className="top">
                 
                <h1>Senper Graphics</h1>
                <h4>{props.motto}</h4>
                <Products />
               
            </div>

        );
    }

export default Landing;
