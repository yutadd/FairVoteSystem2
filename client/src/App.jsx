import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Admin } from "./components/Admin/Admin";
import { VoterPanel } from "./components/VoterPanel/VoterPanel";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/voter" element={<VoterPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
