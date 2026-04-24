import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
// import Login from './components/pages/login'
import Navbar from "./components/Navbar";
import Event from "./components/pages/Event";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </>
  );
};

export default App;
