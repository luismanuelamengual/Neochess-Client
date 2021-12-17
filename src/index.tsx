import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from "./components/App";

//Renderización de la aplicación web
ReactDOM.render(<React.StrictMode><App/></React.StrictMode>, document.getElementById('root'));

//Reporte de datos de salud de la aplicación web
reportWebVitals();
