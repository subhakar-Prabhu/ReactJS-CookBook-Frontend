import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Login from '../component/Login/Login';
import Home from '../component/Home/Home';
import IFSC from '../component/IFSC/IFSC';
import Redux from '../component/Redux/Redux';
import RegisterUser from '../component/RegisterUser/Register';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/register" component={RegisterUser}></Route>
      <Route path="/ifsc" component={IFSC}></Route>
      <Route path="/redux" component={Redux}></Route>
    </Switch>
  </BrowserRouter>
);

export default routes;