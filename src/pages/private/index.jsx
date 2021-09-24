import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home';
import Product from './product';
import Setting from './setting';
import Transaction from './transaction';

function Private() {
    return (
        <Switch>
            <Route path="/setting" component={Setting}></Route>
            <Route path="/product" component={Product}></Route>
            <Route path="/transaction" component={Transaction}></Route>
            <Route component={Home}></Route>
        </Switch>
    )
}
export default Private;