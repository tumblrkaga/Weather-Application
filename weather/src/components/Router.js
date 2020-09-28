import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from "../App";
import CityWeather from "./CityWeather";

const Router = () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/" component = {App}  exact/>
            <Route path="/temp/:id" component = {CityWeather} />
        </Switch>
    </BrowserRouter>
);

export default Router;  