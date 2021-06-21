import React from "react";
import { Navbar } from "../components/dashboard/navbar";

export const DashboardLayout = ({ children }) => (
  <div>
    <Navbar />
    <div className="mx-2">
      {children}
    </div>
  </div>
);
