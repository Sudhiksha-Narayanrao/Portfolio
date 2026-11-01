export const folders = [
  {
    id: 'about',
    label: 'about_me',
    icon: 'computer',
    path: 'C:\\Sudhiksha\\about_me',
    title: 'About Me',
    content: (
      <>
        <h2>Sudhiksha Narayanaraopeta</h2>
        <p className="popup-role">Computer Science Engineering Student</p>
        <p>Exploring AI/ML, NLP, LLMs, scientific research and software engineering through intelligent systems and real-world applications.</p>
        <h3>Education</h3>
        <p>Mahindra University – B.Tech Computer Science and Engineering (2023–2027).</p>
        <p>Centrale Méditerranée – CentraleDigitalLab, Data Science and Artificial Intelligence (2026–2027).</p>
      </>
    )
  },
  {
    id: 'courses',
    label: 'courses',
    icon: 'books',
    path: 'C:\\Sudhiksha\\courses',
    title: 'Courses',
    content: (
      <>
        <h2>Academic Focus</h2>
        <ul>
          <li>Artificial Intelligence</li>
          <li>Machine Learning</li>
          <li>Data Science and Artificial Intelligence</li>
          <li>Natural Language Processing</li>
          <li>Software Engineering</li>
        </ul>
      </>
    )
  },
  {
    id: 'certificates',
    label: 'certificates',
    icon: 'certificate',
    path: 'C:\\Sudhiksha\\certificates',
    title: 'Certificates',
    content: (
      <>
        <h2>Certificates</h2>
        <ul className="certificate-list">
          <li>Merit-Based Academic Scholarship – Mahindra University (3x).</li>
          <li>Data Visualization: Empowering Business with Effective Insights – Tata Consultancy Services.</li>
          <li>Professional Certificate in Generative AI Fundamentals – Microsoft and LinkedIn.</li>
          <li>Practical QGIS and GEE for Spatial Data Analysis – Dr. Minerva Singh.</li>
          <li>Quadcopter Drone and UAV Workshop – World Technocon, BITS Pilani Hyderabad.</li>
        </ul>
        <p className="popup-note">Additional verified certificates can be added here later.</p>
      </>
    )
  },
  {
    id: 'hobbies',
    label: 'hobbies',
    icon: 'music',
    path: 'C:\\Sudhiksha\\hobbies',
    title: 'Hobbies',
    content: (
      <>
        <h2>Hobbies</h2>
        <div className="hobby-grid">
          {['Singing', 'Guitar', 'Dancing', 'Reading', 'Writing', 'Travel'].map((hobby, index) => (
            <div className="hobby-item" key={hobby}><span>{['🎤', '🎸', '💃', '📚', '✍️', '✈️'][index]}</span>{hobby}</div>
          ))}
        </div>
      </>
    )
  },
  {
    id: 'contact',
    label: 'contact',
    icon: 'phone',
    path: 'C:\\Sudhiksha\\contact',
    title: 'Contact',
    content: (
      <>
        <h2>Contact</h2>
        <p><strong>Email:</strong> <a href="mailto:sudhiksha195@gmail.com">sudhiksha195@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+33745461930">+33 7 45 46 19 30</a></p>
        <p><strong>Location:</strong> Nice, France</p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/sudhiksha-narayanaraopeta-2b962a298/" target="_blank" rel="noreferrer">linkedin.com/in/sudhiksha-narayanaraopeta-2b962a298</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Sudhiksha-Narayanrao" target="_blank" rel="noreferrer">github.com/Sudhiksha-Narayanrao</a></p>
      </>
    )
  }
];

export const experience = {
  id: 'experience',
  path: 'C:\\Sudhiksha\\experience',
  content: (
    <>
      <h2>Experience</h2>
      <div className="experience-entry">
        <h3>Birla Pivot (Aditya Birla Group)</h3>
        <p className="popup-role">Technology Intern · June–August 2026</p>
      </div>
      <div className="experience-entry">
        <h3>LAM – AI-Powered Search Assistant for Space Missions</h3>
        <p className="popup-role">October 2026–Present</p>
      </div>
    </>
  )
};

export const languages = [
  { label: 'Python', icon: '🐍' },
  { label: 'Java', icon: '☕' },
  { label: 'SQL', icon: '▣' }
];

export const toolGroups = [
  {
    label: 'AI / ML',
    items: [
      { label: 'PyTorch', icon: '🔥' },
      { label: 'TensorFlow', icon: '◈' },
      { label: 'Scikit-learn', icon: '◎' },
      { label: 'React', icon: '⚛' },
      { label: 'Spring Boot', icon: '✿' },
      { label: 'Dash', icon: '▥' }
    ]
  },
  {
    label: 'Data / Infrastructure',
    items: [
      { label: 'PostgreSQL', icon: '◉' },
      { label: 'Supabase', icon: '◆' },
      { label: 'Qdrant', icon: '◇' },
      { label: 'Git / GitHub', icon: '●' },
      { label: 'JIRA', icon: '▦' },
      { label: 'Docker', icon: '▰' },
      { label: 'Grafana', icon: '▤' },
      { label: 'Jenkins', icon: '∞' },
      { label: 'Kafka', icon: '≋' },
      { label: 'QGIS', icon: '🗺' },
      { label: 'Google Earth Engine', icon: '🌍' },
      { label: 'VS Code', icon: '💙' }
    ]
  }
];

export const projects = [
  {
    id: 'project-01',
    path: 'C:\\Sudhiksha\\works\\LAM',
    name: 'LAM: AI-Powered Search Assistant for Space Missions',
    category: 'Industry Project, LAM',
    technologies: ['Python', 'RAG', 'Qdrant', 'BM25', 'NLP'],
    description: 'Developing a RAG-based scientific document search system using hybrid BM25 and semantic retrieval, Qdrant vector search, source citations and provenance tracking.',
    date: 'October 2026 – Present',
    url: ''
  },
  {
    id: 'project-02',
    path: 'C:\\Sudhiksha\\works\\Electives',
    name: 'Student Elective Registration System',
    category: 'Group Project',
    technologies: ['React', 'Spring Boot', 'PostgreSQL'],
    description: 'Developed a 3-tier registration platform with priority-based seat allocation, preference management and timetable conflict detection.',
    date: 'February – May 2026',
    url: ''
  },
  {
    id: 'project-03',
    path: 'C:\\Sudhiksha\\works\\HireSync',
    name: 'HireSync: Job Board Interface',
    category: 'Full-Stack Development',
    technologies: ['React', 'Vite', 'React Router', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    description: 'Built a responsive job platform with advanced filtering, saved jobs, application tracking and company profiles using reusable components, Context API and custom hooks.',
    date: 'November 2025',
    url: ''
  },
  {
    id: 'project-04',
    path: 'C:\\Sudhiksha\\works\\Denoising',
    name: 'Second-Order Trainable Nonlinear Reaction Diffusion for Poisson Image Denoising',
    category: 'Research Project',
    technologies: ['Python', 'PyTorch', 'Torchvision', 'NumPy'],
    description: 'Implemented a second-order Telegraph Diffusion framework with damping, extending first-order TNRD models for denoising images corrupted by Poisson noise.',
    date: 'April – May 2026',
    url: ''
  }
];
