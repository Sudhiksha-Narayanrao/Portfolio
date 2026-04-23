function Home() {
  return (
    <div>
      <div className="hero-three-col">

        <div className="side-cards">
          <div className="detail-card">
            <p className="detail-label">About Me</p>
            <p className="detail-value">3rd year CS student at Mahindra University, passionate about applying AI to real-life problems.</p>
          </div>
          <div className="detail-card">
            <p className="detail-label">Research</p>
            <p className="detail-value">Optimizing urban planning and Land Surface Temperature using Machine Learning</p>
          </div>
        </div>

        <div className="hero-center">
          <p className="welcome-top">Welcome to my</p>
          <h1 className="portfolio-title">Port<em>folio</em></h1>
          <div className="name-block">
            <p className="name-main">Sudhiksha Narayanraopeta</p>
            <p className="name-role">CS Student · AI & Machine Learning</p>
          </div>
        </div>

        <div className="side-cards">
          <div className="detail-card">
            <p className="detail-label">Contact</p>
            <p className="detail-value">8919935768<br />sudhiksha195@gmail.com<br />college@email.com</p>
          </div>
          <div className="detail-card">
            <p className="detail-label">Education</p>
            <p className="detail-value">Mahindra University<br />B.Tech Computer Science<br />Year 3</p>
          </div>
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