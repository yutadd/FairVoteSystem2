import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Admin } from "./components/Admin/Admin";
import { VoterPanel } from "./components/VoterPanel/VoterPanel";
import {Usage_v} from "./components/Usage-voter/Usage";
import {Usage_a} from "./components/Usage-admin/Usage"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/voter" element={<VoterPanel />} />
        <Route path="/usage_v" element={<Usage_v />} />
        <Route path="/usage_a" element={<Usage_a />} />
      </Routes>
    </Router>
  );
}

export default App;
