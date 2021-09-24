import React from 'react';
import { Switch, Route } from 'react-router-dom'
import EditProduct from './edit';
import GridProduct from './grid';

function Product() {
    return (
        <Switch>
            <Route path="/product/edit/:productId" component={EditProduct}></Route>
            <Route component={GridProduct}></Route>
        </Switch>
    )
}
export default Product;