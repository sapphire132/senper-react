import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './landing.css';

const Landing = (props) => {
    let navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
        return(
            <div className="top">
                 <Button 
                      variant="contained" 
                      size="medium" 
                      margin="normal" 
                      onClick={handleLogout}
                      sx={{
                        width:'10ch',
                        display:"block"
                          }}
                    >
                      Log out
                    </Button>
                <h1>Senper Graphics</h1>
                <h4>{props.motto}</h4>
                
               
            </div>

        );
    }

export default Landing;
