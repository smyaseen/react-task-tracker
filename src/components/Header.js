import React from "react";
import { useLocation } from "react-router-dom";

const Header = ({ toggleAddTask, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h3 className="title">Task Tracker</h3>
      {location.pathname === "/" && (
        <button
          className={`btn${showAdd ? "Active" : ""}`}
          onClick={toggleAddTask}
        >
          {showAdd ? "Close" : "Add"}
        </button>
      )}
    </header>
  );
};

export default Header;
