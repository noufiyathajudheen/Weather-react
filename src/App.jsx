import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Cities from "./pages/cities";
import Weather from "./pages/weather";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("Palakkad");

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout query={query} setQuery={setQuery} />}>
          <Route
            path="/"
            element={<Weather query={query} setQuery={setQuery} />}
          />
          <Route path="/cities" element={<Cities />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
