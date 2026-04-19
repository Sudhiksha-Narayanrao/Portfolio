function Home() {
  return (
    <div>
      <div className="hero">
        <p className="hero-label">Portfolio — 2026</p>
        <h1>Sudhiksha<br /><em>Narayanaraopeta</em></h1>
        <div className="hero-divider"></div>
        <p>I'm a 3rd year Computer Science student at Mahindra University, passionate about applying AI models to real-life problems.</p>
      </div>

      <div className="section-header">
        <span className="section-label">About</span>
        <div className="section-line"></div>
      </div>

      <div className="details-grid">
        <div className="detail-card">
          <p className="detail-label">Research</p>
          <p className="detail-value">Optimizing urban planning and Land Surface Temperature using Machine Learning</p>
        </div>
        <div className="detail-card">
          <p className="detail-label">Phone</p>
          <p className="detail-value">8919935768</p>
        </div>
        <div className="detail-card">
          <p className="detail-label">Email</p>
          <p className="detail-value">sudhiksha195@gmail.com<br />college@email.com</p>
        </div>
      </div>

      <div className="section-header">
        <span className="section-label">Skills</span>
        <div className="section-line"></div>
      </div>

      <div className="skills-row">
        {['Python', 'SQL', 'CSS', 'React', 'Matlab'].map(skill => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default Home;