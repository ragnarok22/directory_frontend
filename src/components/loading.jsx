import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const Loading = ({ spinning = true }) => {

  return (
    <div className="w-full h-full flex justify-center items-center">
      <AiOutlineLoading3Quarters
        className={`h-10 w-10 text-blue-500 ${spinning && "animate-spin"}`}
      />
    </div>
  );
};
