import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <header className="header">
      <h3 className="title">Task Tracker</h3>
      <Button value="Add" />
    </header>
  );
};

export default Header;
