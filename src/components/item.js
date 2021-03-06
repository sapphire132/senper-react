import React from 'react';
import './item.css';
import { useLocation, Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { border } from '@mui/system';

const Item = () => {
  const image = useLocation().state;

  return (
    <div>
      <div className='item-header'>
        <p className='item-title'>
          {' '}
          {image.title} / {image.designer}
        </p>
      </div>

      <hr className='item-hr' />

      <div className='item-container'>
        <div className='item-main'>
          <img src={image.image} alt='' class='main' />
        </div>

        <div className='item-extra-detail'>
          <div className='item-designer'>
            <div className='avatar'>
              <Link
                to={`/designer/${image.designer}`}
                state={image}
                sx={{
                  display: 'flex',
                }}
              >
                <Avatar
                  src={image.image}
                  sx={{
                    border: '0.4px #474747 solid',
                    display: 'inline-block',
                  }}
                />
                <div className='name'>
                  <p>{image.designer}</p>
                </div>
              </Link>
            </div>
          </div>
          <p>
            <b>client:</b> {image.client}
            <br />
            <b>Designer: </b> {image.designer} <br />
            <b>description:</b> {image.description}{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
