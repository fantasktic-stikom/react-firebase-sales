import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Register from './pages/register';
import Login from './pages/login';
import ForgotPassword from './pages/forgot-password';
import NotFound from './pages/not-found';
import Private from './pages/private';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={Private}></PrivateRoute>
        <PrivateRoute path="/transaction" component={Private}></PrivateRoute>
        <PrivateRoute path="/product" component={Private}></PrivateRoute>
        <PrivateRoute path="/setting" component={Private}></PrivateRoute>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/forgot-password" component={ForgotPassword}></Route>
        <Route path="/login" component={Login}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
