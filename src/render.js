import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import state from './redax/state.js';
import {addPost} from './redax/state.js';
import {BrowserRouter} from "react-router-dom"

export let renderEntiveTree = (state) => {

ReactDOM.render(
  <BrowserRouter>
      
  <App  state ={state} addPost ={addPost} />
  </BrowserRouter>,
  document.getElementById('root')
);
}
