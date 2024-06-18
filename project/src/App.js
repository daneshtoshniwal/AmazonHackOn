import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import BudgetDashboard from './components/BudgetDashboard';

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/budget-dashboard" element={<BudgetDashboard />} />
        </Routes>
    </Router>
  );
}

export default App;
