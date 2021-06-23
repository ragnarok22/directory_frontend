import React from "react";
import { Link } from "react-router-dom";

export const NavItem = ({ item, selected }) => (
  <div className="p-2">
    <Link
      to={item.link}
      className="flex justify-center items-center w-full h-full"
    >
      {item.icon} {item.name === selected && item.text}
    </Link>
  </div>
);
