import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import backgroundImage from './Tomato-BG-01.jpeg';

document.title = "Domeytoe";
let link = document.querySelector("link[rel*='icon']");
link.href = 'https://cdn-icons-png.flaticon.com/512/1202/1202125.png';
document.getElementsByTagName('head')[0].appendChild(link);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ backgroundImage: `url(${backgroundImage})`}}>
      <br/><br/><br/><br/>
      <Main />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
