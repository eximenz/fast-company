import React from "react";
import NavBar from "./components/ui/navBar";
import { Route, Switch } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/login/:type?" component={Login} />
        <Route path="/users/:userId?" component={Users} />
        <Route path="/" component={Main} />
      </Switch>
    </>
  );
};

export default App;
