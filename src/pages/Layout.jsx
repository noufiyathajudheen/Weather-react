import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import "./Layout.css";
import Searchbar from "../components/searchbar";

const Layout = ({ query, setQuery, unit, setUnit }) => {
  return (
    <div className="container">
      <Sidebar />
      <div className="section">
        <div className="top-section">
          <Searchbar query={query} setQuery={setQuery} />
          <div className="metric-option">
            <div
              onClick={() => setUnit("c")}
              className={`option ${unit === "c" ? "active-option" : ""}`}
            >
              <span>Celsius</span>
            </div>
            <div
              onClick={() => setUnit("f")}
              className={`option ${unit === "f" ? "active-option" : ""}`}
            >
              <span>Fahrenheit</span>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
