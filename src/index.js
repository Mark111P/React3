import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Lb1 } from './Lb1';
import { Dz1 } from './Dz1';
import { Dz2 } from './Dz2';
import { Dz3 } from './Dz3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Lb1 vals={['+5', '+10', '-1', '-3']}></Lb1><hr></hr>
    <Dz1 vals={[{font: 'red', back: 'green'}, {font: 'green', back: 'red'},{font: 'yellow', back: 'blue'}, {font: 'blue', back: 'yellow'}]}></Dz1><hr></hr>
    <Dz2 vals={[{font: 'red', back: 'green'}, {font: 'green', back: 'red'},{font: 'yellow', back: 'blue'}, {font: 'blue', back: 'yellow'}]}></Dz2><hr></hr>
    <Dz3></Dz3>
  </React.StrictMode>
);

reportWebVitals();
