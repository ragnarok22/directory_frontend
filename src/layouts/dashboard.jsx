import React from "react";
import { Navbar } from "../components/dashboard/navbar";

export const DashboardLayout = ({ children, selected }) => (
  <div>
    <Navbar selected={selected} />
    <div className="mx-2">
      {children}
    </div>
  </div>
);
