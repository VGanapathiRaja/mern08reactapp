import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Keys from './Mainkeys/Keys';
import Lifecycles from './Reactlifecycles/Lifecycles';
import Hooks from './Hooks/Hooks';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Keys /> */}
    {/* <Lifecycles /> */}
    <Hooks />
  </React.StrictMode>
  // <Lifecycles />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
