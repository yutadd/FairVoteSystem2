import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import { Home } from "./components/Home/Home";
import { Admin } from "./components/Admin/Admin"

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
    </Router>
  );
}

export default App;
