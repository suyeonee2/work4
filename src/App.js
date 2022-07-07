import React from "react"
import "./index.css"
import Home from "./routes/Home"
import Profile from "./routes/Profile"
import Toon from "./routes/Toon"
import Contact from "./routes/Contact"
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Toon" element={<Toon />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;