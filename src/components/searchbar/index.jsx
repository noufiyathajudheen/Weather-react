import React, { useState } from "react";
import "./style.css";

const Searchbar = ({ query, setQuery }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
        placeholder="Search for cities"
      />
    </form>
  );
};

export default Searchbar;
