import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // ✅ Import here
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Alumni from "./components/Alumni";
import References from "./components/References";
// import Notifications from "./components/Notifications";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/references" element={<References />} />
        {/* <Route path="/notifications" element={<Notifications />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
