import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap';
require('./index.scss');

// old build

//import Root from './components/Root.js';

// new build
import Root from './components/App.js';

if(document.getElementById('root')){
    ReactDOM.render(
        <BrowserRouter>
            <Root/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}