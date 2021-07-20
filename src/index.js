import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Wrapper from './Wrapper';
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBfn-98xj3mEv8zl7G9OE7SkTClEkaBMFg",
  authDomain: "vitechtask.firebaseapp.com",
  databaseURL: "https://vitechtask-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vitechtask",
  storageBucket: "vitechtask.appspot.com",
  messagingSenderId: "336140015390",
  appId: "1:336140015390:web:21abed11cfb8b1a42adb0f"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>,
  document.getElementById('root')
);
