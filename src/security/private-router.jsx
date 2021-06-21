import React from "react";
import { Route, Redirect } from "react-router";
import { initAxiosInterceptors, getToken } from "./index";

initAxiosInterceptors();

const PrivateRoute = (props) => {
  // isGranted();
  return getToken() ? <Route {...props} /> : <Redirect to="/signin" />;
};
export default PrivateRoute;
