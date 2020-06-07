import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import App from './components/App';
/*
Original
const container = document.getElementById('app');
ReactDOM.render(<App />, container);
*/
/*
JS simple sin React
const ele = document.createElement("h1");
ele.innerText = "Hoal que tal";
const cont = document.getElementById("app");
cont.appendChild(ele);
**/

/*
Con react.js y JXS
*/
const ele = <h1>Hola que tal, desde React.js! 2+4= {2+4} </h1>   
const container = document.getElementById('app');
ReactDOM.render(ele, container)