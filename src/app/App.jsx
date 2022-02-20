import React from "react";
import NavBar from "./components/ui/navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
import { ToastContainer } from "react-toastify";
import { ProfessionProvider } from "./hooks/useProfessions";
import { QualitiesProvider } from "./hooks/useQualities";
import AuthProvider from "./hooks/useAuth";
import LoginProvider from "./hooks/useLogin";

const App = () => {
  return (
    <>
      <LoginProvider>
        <AuthProvider>
          <NavBar />
          <QualitiesProvider>
            <ProfessionProvider>
              <Switch>
                <Route path="/login/:type?" component={Login} />
                <Route path="/users/:userId?/:edit?" component={Users} />
                <Route path="/" component={Main} />
                <Redirect to="/" />
              </Switch>
            </ProfessionProvider>
          </QualitiesProvider>
        </AuthProvider>
      </LoginProvider>
      <ToastContainer />
    </>
  );
};

export default App;
