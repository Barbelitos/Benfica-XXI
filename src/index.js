import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Restaurants from "./pages/Restaurants";
import Podcast from "./pages/Podcast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/podcast" element={<Podcast />} />
    </Routes>
  </BrowserRouter>
);
