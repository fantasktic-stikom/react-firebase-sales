import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Shop from './shop';
import User from './user';

function Setting() {
    return (
        <Switch>
            <Route path="/setting/user" component={User}></Route>
            <Route path="/setting/shop" component={Shop}></Route>
            <Redirect to="/setting/user"></Redirect>
        </Switch>
    )
}
export default Setting;