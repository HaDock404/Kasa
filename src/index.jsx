import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import "./styles/normalize.css"
import "./styles/style.css"
import panorama from './assets/panorama.jpg'
import panorama2 from './assets/panorama2.jpeg'

import Home from './pages/Home';
import Error from './pages/Error'
import Header from './pages/Header'
import GlobalStyle from './styles/GlobalStyle';
import App from './pages/App'
import Footer from './pages/Footer'
import About from './pages/About'
import Lodging from './pages/Lodging'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Header />
        <Routes>
          <Route path="/" element={<><Home style={{backgroundImage:`url("${panorama}")`}} leitmotif="Chez vous, partout et ailleurs"/> <App /><Footer /></>}/>
          <Route path="/about" element={<><Home style={{backgroundImage:`url("${panorama2}")`}}/><About /><Footer /></>}/>
          <Route path={`/lodging/:id`} element={<><Lodging /><Footer /></>}/>
          <Route path="*" element={<Error />}/>
        </Routes>
    <React.StrictMode></React.StrictMode>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
