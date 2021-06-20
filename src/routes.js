import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import { Dashboard } from "./components/dashboard";
import { NotFound } from "./components/not-found";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
