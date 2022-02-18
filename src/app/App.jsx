import React from "react";
import NavBar from "./components/ui/navBar";
import { Route, Switch } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
import { ToastContainer } from "react-toastify";
import { ProfessionProvider } from "./hooks/useProfessions";
import { QualitiesProvider } from "./hooks/useQualities";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <QualitiesProvider>
          <ProfessionProvider>
            <Route path="/login/:type?" component={Login} />
            <Route path="/users/:userId?/:edit?" component={Users} />
          </ProfessionProvider>
        </QualitiesProvider>
        <Route path="/" component={Main} />
      </Switch>
      <ToastContainer />
    </>
  );
};

export default App;
