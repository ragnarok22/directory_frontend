import React from "react";
import navbarItems from "./navbar-list";
import { NavItem } from "./nav-item";

export const Navbar = () => {
  return (
    <ul className="flex justify-around">
      {navbarItems.map((item) => (
        <li>
          <NavItem item={item} />
        </li>
      ))}
    </ul>
  );
};
