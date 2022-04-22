import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage";

function App() {
  return (
    <div className="App">
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
