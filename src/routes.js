import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./main";
import { Dashboard } from "./components/dashboard";
import { NotFound } from "./components/not-found";
import { Area } from "./components/dashboard/area/area-list";
import { AreaDetail } from "./components/dashboard/area/area-detail";
import { Department } from "./components/dashboard/department/department-list";
import { DepartmentDetail } from "./components/dashboard/department/department-detail";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard/areas" component={Area} />
      <Route exact path="/dashboard/areas/:id" component={AreaDetail} />
      <Route exact path="/dashboard/departments" component={Department} />
      <Route exact path="/dashboard/departments/:id" component={DepartmentDetail} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
