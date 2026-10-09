import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import ExperienceDetail from './pages/ExperienceDetail';
import CertificateDetail from './pages/CertificateDetail';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/experience/:id" element={<ExperienceDetail />} />
        <Route path="/certificate/:id" element={<CertificateDetail />} />
      </Routes>
    </Router>
  );
}
