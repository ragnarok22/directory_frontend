import React from "react";

export const Item = ({ item }) => (
  <div className="flex">
    <p className="w-5/12 text-left">{item.name}</p>
    <p className="w-2/12 text-left">{item.campus}</p>
    <p className="w-5/12 text-left">{item.phone}</p>
  </div>
);
