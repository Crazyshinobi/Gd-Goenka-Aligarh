import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import { HelmetProvider } from "react-helmet-async";
import ScrollTop from './components/ScrollTop';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
  <Router>
    <ScrollTop/>
    <App />
  </Router>
  </HelmetProvider>
);
