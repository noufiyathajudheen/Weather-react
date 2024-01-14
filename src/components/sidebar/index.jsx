import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { CloudSunRain, List } from "lucide-react";

const Sidebar = () => {
  return (
    <aside>
      <NavLink to="/">
        <CloudSunRain />
        <span>Weather</span>
      </NavLink>
      <NavLink to="/cities">
        <List />
        <span>Cities</span>
      </NavLink>
    </aside>
  );
};

export default Sidebar;
