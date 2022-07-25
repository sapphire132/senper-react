import React, { useEffect, useState } from 'react';

import Nav from './components/Nav';
import Landing from './components/landing';
import Products from './components/products';
import Order from './components/order';
import About from './components/about';
import Upload from './components/upload';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import Item from './components/item';
import Designer from './components/designer';
import Form from './components/form';
import Profile from './components/profile';

import { app } from './firebase-config';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');

    if (authToken) {
      navigate('/');
    }
  }, []);

  const handleAction = (id) => {
    const authentication = getAuth();
    console.log(id);

    if (id === 1) {
      createUserWithEmailAndPassword(authentication, email, password).then(
        (response) => {
          navigate('/');
          sessionStorage.setItem(
            'AuthToken',
            response._tokenResponse.refreshToken
          );
        }
      );
    }

    if (id === 2) {
      signInWithEmailAndPassword(authentication, email, password).then(
        (response) => {
          navigate('/');
          sessionStorage.setItem(
            'Auth Token',
            response._tokenResponse.refreshToken
          );
        }
      );
    }
  };

  return (
    <div>
      <Nav />
      <Routes>
        <Route
          path='/signup'
          element={
            <Form
              title='signUp'
              handleAction={() => handleAction(1)}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          }
        />
        <Route
          path='/login'
          element={
            <Form
              title='LogIn'
              handleAction={() => handleAction(2)}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          }
        />
        <Route
          path='/'
          exact
          element={<Landing motto='Where your eye enjoy creativity!' />}
        />
        <Route path='/design/:id' element={<Item />} />
        <Route path='/designer/:id' element={<Designer />} />
        <Route path='/order' exact element={<Order />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/upload' exact element={<Upload />} />
        <Route path='/profile' exact element={<Profile />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
