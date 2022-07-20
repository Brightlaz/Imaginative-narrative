import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';
import './assets/css/responsive.css';
import App from './featuredNarrative';
import reportWebVitals from './reportWebVitals';
import Home from './routes/home';
import FullNarrative from './routes/fullNarrative';
import CreateNarrative from './routes/createNarrative'
import ScrollToTop from "../src/ScrollToTop";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
       <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="featuredNarrative" element={<App />} />
          <Route path="fullNarrative" element={<FullNarrative />} />
          <Route path="CreateNarrative" element={<CreateNarrative />} />
        </Routes>
       </ScrollToTop>
 
  
</BrowserRouter>
  
  
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
