import { React } from "react";
import navbarItems from "./navbar-list";
import { NavItem } from "./nav-item";

export const Navbar = ({selected, className}) => {

  return (
    <ul className={`flex justify-around ${className}`}>
      {navbarItems.map((item, i) => (
        <li key={i} className={`flex-grow ${item.name === selected ? 'selected':''}`}>
          <NavItem item={item} selected={selected} />
        </li>
      ))}
    </ul>
  );
};
