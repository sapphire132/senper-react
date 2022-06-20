import React from 'react';
import './order.css';
import { TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Form = ({ handleAction, title, setEmail, setPassword }) => {
  return (
    <div className='order-form-container'>
      <div className='order-head'>{title}</div>

      <Box
        // component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'
      >
        {title == 'signUp' ? (
          <TextField
            id='username'
            label='username'
            type='text'
            variant='standard'
            margin='normal'
            color='primary'
            sx={{ width: '40ch' }}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <div></div>
        )}
        <TextField
          id='username'
          label='Email'
          type='email'
          variant='standard'
          margin='normal'
          color='primary'
          sx={{ width: '40ch' }}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          sx={{ width: '40ch' }}
          label='password'
          type='password'
          variant='standard'
          margin='normal'
          id='password'
          // type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Button
        variant='contained'
        size='medium'
        margin='normal'
        onClick={handleAction}
        sx={{
          width: '10ch',
          display: 'block',
        }}
      >
        {title}
      </Button>

      {title == 'signUp' ? (
        <Link to='/login'>Already have an account?</Link>
      ) : (
        <Link to='/signup'>create account</Link>
      )}
    </div>
  );
};

export default Form;
