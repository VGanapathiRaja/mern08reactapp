import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Keys from './Mainkeys/Keys';
import Lifecycles from './Reactlifecycles/Lifecycles';
import Hooks from './Hooks/Hooks';
import Important from './Importanttopics/Important';

import { BrowserRouter, HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   {/* <App /> */}
  //   {/* <Keys /> */}
  //   {/* <Lifecycles /> */}
  //   {/* <Hooks /> */}
  //   <Important />
  // </React.StrictMode>
  // // <Lifecycles />

  <BrowserRouter>
    <Important />
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
