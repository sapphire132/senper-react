import React from 'react';
import './order.css';
import { TextField, Button, Input, IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useForm } from 'react-hook-form';

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

const Upload = () => {
  const { register, handleSubmit, setValue } = useForm();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (data) => {
    // setValue(data.target.value);
    console.log(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='order-form-container'>
        <div className='order-head'>Upload</div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('title')}
            id='title'
            name='title'
            label='Project Title'
            variant='standard'
            margin='normal'
            color='primary'
            sx={{ width: '40ch' }}
            onChange={handleChange}
          />

          <TextField
            {...register('client')}
            sx={{ width: '40ch' }}
            id='client'
            name='client'
            label='client'
            variant='standard'
            margin='normal'
          />

          <TextField
            {...register('description')}
            sx={{ width: '40ch' }}
            label='Description'
            name='description'
            variant='standard'
            multiline
            margin='normal'
            id='password'
            type='password'
          />

          <label htmlFor='icon-button-file'>
            <Input accept='image/*' id='icon-button-file' type='file' />
            <IconButton
              color='primary'
              aria-label='upload picture'
              component='span'
            >
              <PhotoCamera />
            </IconButton>
          </label>

          <Button
            variant='contained'
            size='medium'
            margin='normal'
            value='submit'
            type='submit'
            sx={{
              width: '10ch',
              display: 'block',
            }}
          >
            submit
          </Button>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default Upload;
