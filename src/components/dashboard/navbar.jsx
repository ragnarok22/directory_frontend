import { React } from "react";
import navbarItems from "./navbar-list";
import { NavItem } from "./nav-item";

export const Navbar = ({selected}) => {

  return (
    <ul className="flex justify-around">
      {navbarItems.map((item, i) => (
        <li key={i} className={item.name === selected ? 'selected':''}>
          <NavItem item={item} />
        </li>
      ))}
    </ul>
  );
};
