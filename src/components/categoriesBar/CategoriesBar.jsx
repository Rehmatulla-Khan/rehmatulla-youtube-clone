import React, { useState } from "react";
import "./_categoriesBar.scss";

const keywords = [
  "Cricket",
  "Football",
  "Coding",
  "React",
  "Angular",
  "Vue",
  "JavaScript",
  "TypeScript",
  "Comedy",
  "Hockey",
  "E-Sports",
  "Call of Duty",
  "News",
  "Sports",
  "CSS",
  "HTML",
  "PUBG",
  "HAHA",
];

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
