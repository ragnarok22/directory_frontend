import React from "react";
import { useState } from "react";
import { RefreshIcon } from "@heroicons/react/outline";

export const Loading = ({ spinning = true }) => {
  const [isSpinning, setIsSpinning] = useState(spinning);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <RefreshIcon
        className={`h-10 w-10 text-blue-500 ${isSpinning && "animate-spin"}`}
      />
    </div>
  );
};
