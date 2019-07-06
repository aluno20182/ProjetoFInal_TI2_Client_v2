import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Detalhes from './Components/Detalhes';
import Login from './Components/Login';
import App from "./App";

import "./styles.css";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/detalhes/:id" component={Detalhes} />
            <Route path="/posts" component={App} />
            {/* Default */}
            <Route component={Login} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root')
);


