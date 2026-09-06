import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AllProjectsPage from './AllProjectsPage';
import { ReactLenis } from 'lenis/react';
import CommandPalette from './components/CommandPalette';
import CommandPaletteTrigger from './components/CommandPaletteTrigger';

function AppContent() {
  const [isCmdOpen, setIsCmdOpen] = useState(false);

  return (
    <div className="App">
      <CommandPalette isOpen={isCmdOpen} setIsOpen={setIsCmdOpen} />
      <CommandPaletteTrigger onClick={() => setIsCmdOpen(true)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjectsPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ReactLenis root>
        <AppContent />
      </ReactLenis>
    </Router>
  );
}

export default App;
