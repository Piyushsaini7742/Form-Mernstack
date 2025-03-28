import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar';
import AddUser from './Components/AddUser';
import GetUser from './Components/GetUser';
import Home from './Components/Home';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/get" element={<GetUser />} />
      </Routes>
    </Router>
  )
}

export default App