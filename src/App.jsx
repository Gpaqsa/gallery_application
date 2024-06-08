// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./components/Home"
import Gallery from './components/Gallery';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Error from './components/Error';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />{" "}
      </Routes>
    </>
  );
}

export default App
