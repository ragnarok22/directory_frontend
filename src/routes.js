import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./main";
import { Dashboard } from "./components/dashboard";
import { NotFound } from "./components/not-found";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
