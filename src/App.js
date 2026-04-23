import './App.css';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';

function App() {
  return (
    <HashRouter>
      <nav>
        <span className="nav-logo">Sudhiksha</span>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;