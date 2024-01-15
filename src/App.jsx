import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Cities from "./pages/cities";
import Weather from "./pages/weather";
import { useState } from "react";

function App() {
  const [unit, setUnit] = useState(
    localStorage.getItem("unit") ? localStorage.getItem("unit") : "c"
  );
  const [query, setQuery] = useState("Palakkad");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              query={query}
              setQuery={setQuery}
              unit={unit}
              setUnit={setUnit}
            />
          }
        >
          <Route
            path="/"
            element={
              <Weather
                query={query}
                setQuery={setQuery}
                unit={unit}
                setUnit={setUnit}
              />
            }
          />
          <Route path="/cities" element={<Cities />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
