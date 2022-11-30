import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './assets/styles/styles.scss'
import { App } from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
    <App />
  </>
)
