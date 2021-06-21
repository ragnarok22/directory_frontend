import React from "react";

export const FilterBar = ({ onChange, className }) => {
  return (
    <div className={className}>
      <input
        placeholder="buscar..."
        className="w-full border-transparent bg-transparent outline-none border-b-2 focus:border-green-400 transition duration-200 ease-in"
        onChange={onChange}
      />
    </div>
  );
};
