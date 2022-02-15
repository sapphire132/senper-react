import React, { useState } from 'react';
import './order.css';
import {TextField, Button} from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';

import { useForm } from "react-hook-form";

const theme = createTheme({
  palette: {
    primary: {
      light: '#474747',
      main: '#474747',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#474747',
      main: '#474747',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


const Signup = () =>{

    // const initial = {
    //     "username":"not set",
    //     "email": "not set",
    //     "password" : "not set"
    //   };

      // const [data, updatedata] = useState(initial);

      const {register, handleSubmit, setValue} = useForm();

      const handleChange = (event) => {
        setValue(event.target.value);
      };
    
   
      const onSubmit = data => {
        // setValue(data.target.value);
        console.log(data);
      }

      
      

    return(
        <ThemeProvider theme={theme}>
         


            <div className="order-form-container" >
                <div className="order-head">
                    Sign Up
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* <FormControl variant="standard">
                      <InputLabel htmlFor="component-simple">Name</InputLabel>
                      <Input {...register("username")} id="component-simple" value={values.username} onChange={handleChange} />
                    </FormControl> */}

                    <TextField 
                            {...register("username")}
                            id="username" 
                            name="username"
                            label="username" 
                            variant="standard" 
                            margin="normal"
                            color="primary"
                            sx={{width: '40ch'}}
                            onChange={handleChange}
                        />

                    <TextField 
                            {...register("email")}
                            sx={{width: '40ch'}}
                            id="email" 
                            name="email"
                            label="Email" 
                            variant="standard" 
                            margin="normal"
                        /> 

                        <TextField
                            {...register("password")}
                            sx={{width: '40ch'}}
                            label="password"
                            name="password"
                            variant="standard"
                            margin="normal"
                            id="password"
                            type="password"
                        />
                                    
                    <Button 
                      variant="contained" 
                      size="medium" 
                      margin="normal" 
                      value="submit" 
                      type="submit" 
                      sx={{
                        width:'10ch',
                        display:"block"
                          }}
                    >
                      submit
                    </Button>
                </form>
              </div>

        </ThemeProvider>
    );
}

export default Signup;