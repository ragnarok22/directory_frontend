import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./main";
import { Dashboard } from "./components/dashboard";
import { NotFound } from "./components/not-found";
import { Area } from "./components/dashboard/area";
import { AreaDetail } from "./components/dashboard/area-detail";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard/areas" component={Area} />
      <Route exact path="/dashboard/areas/:id" component={AreaDetail} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
