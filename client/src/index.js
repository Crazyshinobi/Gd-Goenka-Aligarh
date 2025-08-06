import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import { PrimeReactProvider } from "primereact/api";
import ScrollTop from './components/ScrollTop';
import ImagePopup from './components/ImagePopup';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <ScrollTop/>
    <PrimeReactProvider>
    <App />
    <ImagePopup/>
    </PrimeReactProvider>
  </Router>
);
