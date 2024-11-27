import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignInPage from './components/SignIn/SignInPage/SignInPage';
import RegisterPage from "./components/RegisterPage/RegisterPage";
import BrainTumorDetector from "./components/BrainTumorDetector/BrainTumorDetector";
import NeuroInsightApp from './components/NeuroInsightApp/NeuroInsightApp';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/app" element={<NeuroInsightApp />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/braintumordetection" element={<BrainTumorDetector/>}/>
        <Route path="*" element={<Navigate to="/app" />} />
      </Routes>
    </Router>
  );
}

export default App;
