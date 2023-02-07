import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Products from "./Products";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <h1>Web Development with IBM November Minor Project</h1>
      <BrowserRouter>
        <nav>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/services" className="link">
            Services
          </Link>
          <Link to="/products" className="link">
            Products
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
