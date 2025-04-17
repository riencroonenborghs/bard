import React from "react";

function Progressbar({ value, onClick }) {
  return (
    <progress className="w-full bg-gray-700 cursor-pointer" onClick={onClick} value={value}>
    </progress>
  );
}

export default Progressbar;
