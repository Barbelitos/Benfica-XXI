import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/UI/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Restaurants from "./pages/Restaurants";
import Podcast from "./pages/Podcast";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/podcast" element={<Podcast />} />
      </Routes>
    </Router>
  );
}

export default App;
