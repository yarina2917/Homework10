import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import TodoList from "./components/TodoList/TodoListContainer";
import Registration from './components/Sign/Registration/RegistrationContainer';
import Login from './components/Sign/Login/LoginContainer';
import UserProfile from './components/UserProfile/UserProfileContainer';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const app = () => (
    <div className='сontainer'>
      <Switch>
          <PrivateRoute path="/todo" component={TodoList} />
          <PrivateRoute path="/user-profile" component={UserProfile} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
          <Redirect to='/'/>
      </Switch>
    </div>
);

export default withRouter(app);