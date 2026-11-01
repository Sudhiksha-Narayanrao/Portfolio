import React from 'react';
import './App.css';
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';

function Clock() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = window.setInterval(() => setTime(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return <span className="clock">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>;
}

function App() {
  return (
    <HashRouter>
      <header className="topbar">
        <div className="brand"><span className="initials">SN</span><span>Sudhiksha</span></div>
        <nav className="topnav">
          <NavLink to="/">Home</NavLink>
        </nav>
        <Clock />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
