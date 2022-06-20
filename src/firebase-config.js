// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBO_KOIO_USLhuPBfannhivcYuHdFC8xHI',
  authDomain: 'senper-react.firebaseapp.com',
  projectId: 'senper-react',
  storageBucket: 'senper-react.appspot.com',
  messagingSenderId: '25714774597',
  appId: '1:25714774597:web:08035ed0bff82fa10b092c',
  measurementId: 'G-K4V8WTVK0V',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//storage
const storage = getStorage(app);
export default storage;
