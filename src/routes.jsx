// src/routes.jsx
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import SignIn from './components/SignIn'
import Register from './components/Register'
import Demo from './components/Demo'


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
