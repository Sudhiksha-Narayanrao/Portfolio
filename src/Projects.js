const projects = [
  {
    name: "Project One",
    desc: "Brief description of what this project does",
    url: "https://github.com/your-username/project1"
  },
  {
    name: "Project Two",
    desc: "Brief description of what this project does",
    url: "https://github.com/your-username/project2"
  },
];

function Projects() {
  return (
    <div>
      <div className="projects-hero">
        <p className="hero-label">Work</p>
        <h1><em>Projects</em></h1>
        <p>A selection of projects I've built — from ML models to web applications.</p>
      </div>

      <div className="section-header">
        <span className="section-label">Selected work</span>
        <div className="section-line"></div>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <a key={i} href={p.url} target="_blank" rel="noreferrer" className="project-item">
            <div>
              <p className="project-number">0{i + 1}</p>
              <p className="project-name">{p.name}</p>
              <p className="project-desc">{p.desc}</p>
            </div>
            <span className="project-link-icon">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;