import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import "./Layout.css";
import Searchbar from "../components/searchbar";

const Layout = ({ query, setQuery }) => {
  return (
    <div className="container">
      <Sidebar />
      <div className="section">
        <Searchbar query={query} setQuery={setQuery} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
