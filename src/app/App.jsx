import React from 'react';
import NavBar from './components/navBar';
import { Route, Switch } from 'react-router-dom';
import Main from './components/main';
import Login from './components/login';
import UserList from './components/userList';

const App = () => {
  return (
  <>
    <NavBar />
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/users/:userId?' component={UserList}/>
      <Route path='/' component={Main} />
    </Switch>
  </>
  );
};

export default App;
