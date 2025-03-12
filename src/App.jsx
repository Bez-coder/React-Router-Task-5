import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import User1 from "./Pages/User1";
import "./App.css";
import User2 from "./Pages/user2";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link><br />
          <Link to="/about-us">About Us</Link><br />
          <Link to="/contact-us">Contact Us</Link><br />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/user1" element={<User1 />} />
          <Route path="/user2" element={<User2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
