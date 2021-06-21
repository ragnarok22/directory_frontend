import React from "react";
import { Link } from "react-router-dom";

export const NavItem = ({ item }) => (
  <div className="p-2">
    <Link to={item.link} className="flex">
      {item.icon} {item.text}
    </Link>
  </div>
);
