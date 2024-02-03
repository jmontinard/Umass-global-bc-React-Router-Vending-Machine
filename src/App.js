import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Snack from "./Snack";
import "./styles.css";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/snack/:snackName" element={<Snack />} />
      </Routes>
    </Router>
  );
};

export default App;
