import React from "react";
import NavBar from "./components/ui/navBar";
import { Route, Switch } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/login/:type?" component={Login} />
        <Route path="/users/:userId?/:edit?" component={Users} />
        <Route path="/" component={Main} />
      </Switch>
      <ToastContainer/>
    </>
  );
};

export default App;
