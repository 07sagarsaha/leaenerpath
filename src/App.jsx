// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Profile from './pages/Profile';
import Goals from './pages/Goals';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
