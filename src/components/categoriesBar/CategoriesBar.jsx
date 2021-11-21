import React, { useState } from "react";
import { keywords } from "./constant";

import "./_categoriesBar.scss";

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (value) => {
    setActiveElement(value);
  };

  return (
    <div className="categoriosBar">
      {keywords.map((value, i) => (
        <span
          onClick={() => handleClick(value)}
          className={activeElement === value ? "active" : ""}
          key={i}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
