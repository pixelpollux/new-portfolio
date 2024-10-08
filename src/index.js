import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/styles.css'
// import App from './App';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/page-structure/navbar';
import HiHeader from './components/page-structure/hi-header';
import SectionHeadshot from './components/page-structure/sec-headshot';
import SectionContainer from './components/little-sections/section__container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <App /> */}
    <div className="container">
      <HiHeader/>
      {/* left side */}            
        <SectionHeadshot/>
      {/* right side */}
      <div className="col-12 right-side ">
        <Navbar/>
          <SectionContainer/>
      </div>  

    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();