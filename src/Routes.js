import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/add-blog' component={AddBlog} />
    </Switch>
)

export default Routes;
