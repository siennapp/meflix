import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import Tv from "../Routes/Tv";
import Detail from "../Routes/Detail";
import Header from "./Header";
export default () => (
    <Router>
        <>
            <Header></Header>
            <Switch>
                <Route path="/" exact component={ Home }></Route>
                <Route path="/Tv" component={ Tv }></Route>
                <Route path="/search" component={ Search }></Route>
                <Route path="/movie/:id" component={Detail}></Route>
                <Route path="/show/:id" component={Detail}></Route>
                <Redirect from="*" to="/"></Redirect>
            </Switch>
        </>
    </Router>
);

