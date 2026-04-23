import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AllProjectsPage from './AllProjectsPage';
import { ReactLenis } from 'lenis/react'

function App() {
  return (
    <Router>
      <ReactLenis root>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjectsPage />} />
          </Routes>
        </div>
      </ReactLenis>
    </Router>
  );
}

export default App;
