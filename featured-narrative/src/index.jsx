import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';
import './assets/css/responsive.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './routes/home';
import FullNarrative from './routes/fullNarrative';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="home" element={<Home />} />
    <Route path="fullNarrative" element={<FullNarrative />} />
  </Routes>
</BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
