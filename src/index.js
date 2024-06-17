import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/styles.css'
// import App from './App';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/page-structure/navbar';
import HiHeader from './components/page-structure/hi-header';
import SecHeadshot from './components/page-structure/sec-headshot';
import SecContainer from './components/little-sections/sec-container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <div class="container">
      <HiHeader/>
      {/* left side */}            
        <SecHeadshot/>
      {/* right side */}
      <div class="col-12 right-side ">
        <Navbar/>
          <SecContainer/>
      </div>  

    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
