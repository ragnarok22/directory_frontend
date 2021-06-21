import React from "react";
import { Item } from "./item";

export const ListItem = ({ items }) => (
  <div>
    {items && items.map((item, i) => (
      <Item key={i} item={item} />
    ))}
  </div>
);
