import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Register from './pages/register';
import Login from './pages/login';
import ForgotPassword from './pages/forgot-password';
import NotFound from './pages/404';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/forgot-password" component={ForgotPassword}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
