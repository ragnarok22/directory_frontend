import React from "react";
import { Navbar } from "../components/dashboard/navbar";

export const DashboardLayout = ({ children, selected }) => (
  <div className="flex flex-col-reverse mt-auto md:flex-col h-screen justify-between md:justify-start">
    <Navbar selected={selected} className="order-1" />
    <div className="mx-2 order-2">
      {children}
    </div>
  </div>
);
