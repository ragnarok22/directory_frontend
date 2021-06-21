import React from "react";

export const FilterLayout = ({ children }) => (
  <div className="container h-screen mx-auto text-center pt-5 bg-gray-200">
    <div className="p-5 w-full h-full">
      {children}
    </div>
  </div>
);
