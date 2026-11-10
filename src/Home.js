import { useState } from 'react';
import { experience, folders, languages, projects, toolGroups } from './portfolioData';
import photo from './photo.jpg';

function WindowControls({ onClose }) {
  return (
    <div className="window-controls">
      <button className="window-dot red" aria-label="Close window" onClick={onClose} />
      <span className="window-dot yellow" />
      <span className="window-dot green" />
    </div>
  );
}

function IllustratedIcon({ type, label }) {
  const paths = {
    computer: <><rect x="9" y="9" width="38" height="27" rx="3" fill="#8ed8c8" /><rect x="14" y="14" width="28" height="17" fill="#fff5c9" /><path d="M22 43h12M28 36v7" /></>,
    books: <><path d="M10 15h31v29H10z" fill="#f3a5be" /><path d="M15 10h31v29H15z" fill="#86c8eb" /><path d="M20 6h27v29H20z" fill="#f6d66b" /><path d="M25 14h15M25 20h15" /></>,
    certificate: <><path d="M12 10h34v27H12z" fill="#fff5c9" /><path d="M18 17h22M18 23h18" /><circle cx="29" cy="31" r="5" fill="#f39ab2" /><path d="m25 35-2 11 6-4 6 4-2-11" fill="#f5bd55" /></>,
    music: <><circle cx="28" cy="28" r="18" fill="#f2a4c5" /><path d="M31 17v19a6 6 0 1 1-4-6V17l14-4v18a6 6 0 1 1-4-6V10" fill="#84c9e8" /></>,
    phone: <><path d="M16 12c-4 4-2 15 7 24s20 11 24 7l-6-8-7 3-13-13 3-7z" fill="#f6b85d" /><path d="m17 13 7 7M40 36l7 7" /></>,
    email: <><rect x="7" y="13" width="42" height="30" rx="3" fill="#f5a4bd" /><path d="m8 16 21 17 20-17M8 41l14-13m26 13L35 28" fill="#fff5c9" /></>,
    github: <><circle cx="28" cy="28" r="20" fill="#8bc8eb" /><path d="M20 42c-8 2-8-4-11-5m18 8v-8c0-3-1-4-2-5 6-1 12-3 12-13 0-3-1-5-3-7 0-1 1-4 0-7 0 0-3-1-8 3-5-1-10-1-15 0-5-4-8-3-8-3-1 3 0 6 0 7-2 2-3 4-3 7 0 10 6 12 12 13-1 1-2 2-2 5v8" fill="#fff5c9" /></>,
    briefcase: <><path d="M10 19h36v27H10z" fill="#f6b85d" /><path d="M20 19v-6h16v6M7 27h42M25 27v6h6v-6" fill="#f8d777" /></>,
    linkedin: <><rect x="9" y="9" width="38" height="38" rx="5" fill="#78bde1" /><path d="M18 24v14M18 18v1M25 38V24m0 6c0-8 12-9 12 0v8M25 29c0-7 12-8 12 0" fill="none" /></>
  };

  return <svg className="illustrated-icon" viewBox="0 0 56 56" role="img" aria-label={label}>{paths[type] || paths.computer}</svg>;
}

function DesktopWindow({ path, children, className = '', onClose }) {
  return (
    <section className={`desktop-window ${className}`}>
      <div className="window-titlebar">
        <WindowControls onClose={onClose} />
        <span className="window-path">{path}</span>
        <span className="window-title-spacer" />
      </div>
      <div className="window-body">{children}</div>
    </section>
  );
}

function FolderIcon({ folder, onOpen }) {
  return (
    <button className="folder-entry" onClick={onOpen}>
      <IllustratedIcon type={folder.icon} label={folder.label} />
      <span>{folder.label}</span>
    </button>
  );
}

function Popup({ folder, onClose }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div onClick={event => event.stopPropagation()}>
        <DesktopWindow path={folder.path} className="popup-window popup-window--opening" onClose={onClose}>
          {folder.content}
        </DesktopWindow>
      </div>
    </div>
  );
}

function EmailPopup({ onClose }) {
  const [copyState, setCopyState] = useState('Copy email');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('sudhiksha195@gmail.com');
      setCopyState('Copied!');
    } catch (error) {
      setCopyState('Copy failed');
    }
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div onClick={event => event.stopPropagation()}>
        <DesktopWindow path="C:\\Sudhiksha\\contact\\email" className="popup-window email-popup" onClose={onClose}>
          <p className="email-address">sudhiksha195@gmail.com</p>
          <button type="button" className="cv-button" onClick={copyEmail}>{copyState}</button>
        </DesktopWindow>
      </div>
    </div>
  );
}

function Dock({ onOpenExperience, onOpenEmail }) {
  return (
    <nav className="bottom-dock" aria-label="Quick navigation">
      <button onClick={onOpenExperience}><IllustratedIcon type="briefcase" label="Experience" /><span>Experience</span></button>
      <a href="https://linkedin.com/in/sudhiksha-narayanaraopeta-2b962a298/" target="_blank" rel="noreferrer"><IllustratedIcon type="linkedin" label="LinkedIn" /><span>LinkedIn</span></a>
      <a href="https://github.com/Sudhiksha-Narayanrao" target="_blank" rel="noreferrer"><IllustratedIcon type="github" label="GitHub" /><span>GitHub</span></a>
      <button onClick={onOpenEmail}><IllustratedIcon type="email" label="Email" /><span>Email</span></button>
    </nav>
  );
}

function SkillWindow({ path, title, items, className = '' }) {
  return (
    <DesktopWindow path={path} className={`compact-window ${className}`}>
      <div className="window-section-title">{title}</div>
      <div className="icon-grid">
        {items.map(item => (
          <div className="icon-item" key={item.label}>
            <span className="item-icon">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </DesktopWindow>
  );
}

function ProjectWindow({ project, index }) {
  return (
    <DesktopWindow path={project.path} className="project-window">
      <span className="project-number">0{index + 1}</span>
      <h2>{project.name}</h2>
      <p className="project-role">{project.category} <span>|</span> {project.technologies.join(', ')}</p>
      <p className="project-description">{project.description}</p>
      <p className="project-date">{project.date}</p>
      {project.url && <a className="project-link" href={project.url} target="_blank" rel="noreferrer">View Project ↗</a>}
    </DesktopWindow>
  );
}

function CVWindow() {
  const cvUrl = `${process.env.PUBLIC_URL}/CV.pdf`;

  return (
    <DesktopWindow path="C:\\Sudhiksha\\documents\\CV" className="cv-window">
      <div className="cv-window-content">
        <svg className="cv-document-icon" viewBox="0 0 56 64" aria-hidden="true">
          <path className="cv-document-shadow" d="M8 3h29l11 11v47H8z" />
          <path className="cv-document-paper" d="M6 2h29l11 11v47H6z" />
          <path className="cv-document-fold" d="M35 2v12h11" />
          <rect className="cv-document-label" x="12" y="21" width="25" height="12" rx="2" />
          <text className="cv-document-label-text" x="24.5" y="29.5" textAnchor="middle">CV</text>
          <path className="cv-document-lines" d="M13 40h27M13 46h23M13 52h18" />
        </svg>
        <div>
          <h2>My Full CV</h2>
          <p>View my complete resume</p>
          <div className="cv-window-actions">
            <a href={cvUrl} target="_blank" rel="noreferrer" className="cv-button">View CV</a>
            <a href={cvUrl} download="Sudhiksha-Narayanrao-CV.pdf" className="cv-button">Download CV</a>
          </div>
        </div>
      </div>
    </DesktopWindow>
  );
}

function Home() {
  const [openFolder, setOpenFolder] = useState(null);
  const [emailOpen, setEmailOpen] = useState(false);

  return (
    <main className="desktop">
      <aside className="folder-sidebar">
        {folders.map(folder => (
          <FolderIcon key={folder.id} folder={folder} onOpen={() => setOpenFolder(folder)} />
        ))}
      </aside>

      <div className="desktop-main">
        <div className="desktop-heading">PORTFOLIO</div>
        <div className="content-columns">
          <div className="left-column">
            <DesktopWindow path="C:\\Sudhiksha\\portfolio" className="profile-window">
              <img className="profile-photo" src={photo} alt="Sudhiksha Narayanaraopeta" />
              <div className="profile-copy">
                <p className="greeting">hi! i'm</p>
                <h1>Sudhiksha</h1>
                <p className="profile-role">COMPUTER SCIENCE ENGINEERING STUDENT</p>
                <p className="profile-introduction">Exploring the intersection of Artificial Intelligence, Machine Learning and Software Engineering. Currently studying Data Science and Artificial Intelligence at Centrale Méditerranée in Nice, France, through the CentraleDigitalLab programme. Passionate about building intelligent systems and exploring how AI, language models, and visual computing can be applied to real-world challenges.</p>
              </div>
            </DesktopWindow>

            <SkillWindow path="C:\\Sudhiksha\\languages" title="LANGUAGES" items={languages} />
            {toolGroups.map((group, index) => (
              <SkillWindow key={group.label} path={`C:\\Sudhiksha\\tools\\${group.label.toLowerCase().replace(' / ', '-')}`} title={group.label} items={group.items} className={index === 1 ? 'tools-window' : ''} />
            ))}
          </div>

          <section className="projects-column">
            <CVWindow />
            <div className="projects-heading">PROJECTS</div>
            {projects.map((project, index) => <ProjectWindow key={project.id} project={project} index={index} />)}
          </section>
        </div>
      </div>
      {openFolder && <Popup folder={openFolder} onClose={() => setOpenFolder(null)} />}
      {emailOpen && <EmailPopup onClose={() => setEmailOpen(false)} />}
      <Dock onOpenExperience={() => setOpenFolder(experience)} onOpenEmail={() => setEmailOpen(true)} />
    </main>
  );
}

export default Home;
