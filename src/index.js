import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import { Header } from './components';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
          <Route exact path="/" component={App} />  
          <Route exact path="/qwer" component={Header} />  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
