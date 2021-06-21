import React from "react";

export const FilterBar = ({ onChange }) => {
  return (
    <div>
      <input
        placeholder="buscar..."
        className="w-full border-transparent bg-transparent outline-none border-b-2 focus:border-green-400"
        onChange={onChange}
      />
    </div>
  );
};
