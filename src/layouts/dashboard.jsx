import React from "react";
import { Navbar } from "../components/dashboard/navbar";

export const DashboardLayout = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);
