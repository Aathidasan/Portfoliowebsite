export interface NavItem {
  name: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Lab", href: "#lab" },
  { name: "Contact", href: "#contact" },
];

export const PERSONAL_INFO = {
  name: "Aathidasan R",
  role: "Java Full Stack Developer",
  taglines: [
    "Java Full Stack Developer",
    "Software Developer Fresher",
    "AI Enthusiast & Python Dev",
    "React & Web Developer",
    "Problem Solver",
  ],
  status: "Available for Entry-Level Opportunities",
  location: "Nagapattinam / Chennai, Tamil Nadu, India",
  phone: "+91-9566095628",
  email: "aathidasan7@gmail.com",
  linkedin: "https://www.linkedin.com/in/aathi-dasan-386513352",
  github: "https://github.com/Aathidasan/Portfoliowebsite",
  portfolioUrl: "https://aathidasan-ai-portfoli-craft.lovable.app",
  avatar: "/profile.jpg",
  heroBio:
    "I’m a passionate software developer fresher focused on Java, web technologies, and AI, building practical solutions while continuously improving my development skills.",
  summary:
    "B.Sc. Information Technology graduate and aspiring Java Full Stack Developer. Strong foundation in Java, Python, JavaScript, React, SQL, REST APIs, Git, and web development. Completed industry-oriented internships in Artificial Intelligence, Full Stack Development, and Data Analytics. Hands-on experience developing AI-based computer vision applications and web-based projects. Interested in software development, problem solving, and learning modern technologies.",
};

export const STATISTICS = [
  {
    value: "2026",
    label: "Graduation Year",
    subtext: "B.Sc. Information Technology",
  },
  {
    value: "3",
    label: "Industry Internships",
    subtext: "AI, Full Stack & Data Analytics",
  },
  {
    value: "6 Mo",
    label: "Java Training",
    subtext: "Full Stack Course",
  },
  {
    value: "2+",
    label: "Projects Built",
    subtext: "AI & Web Applications",
  },
];

export interface SkillItem {
  name: string;
  icon: string;
  description: string;
  badge: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming",
    description: "Core logic and language proficiencies",
    skills: [
      { name: "Java", icon: "Coffee", description: "Core Java, OOP principles, collections framework", badge: "Core Focus" },
      { name: "Python", icon: "FileCode", description: "Data manipulation, computer vision, scripting", badge: "Proficient" },
      { name: "JavaScript", icon: "Code", description: "Modern ES6+, DOM manipulation, asynchronous programming", badge: "Frontend/Node" },
    ],
  },
  {
    category: "Frontend",
    description: "User interfaces, styling, and client-side logic",
    skills: [
      { name: "React", icon: "Atom", description: "Modern functional components, hooks, state handling", badge: "Framework" },
      { name: "HTML5", icon: "Layers", description: "Semantic markup, accessibility compliance", badge: "Markup" },
      { name: "CSS3", icon: "Layers", description: "Flexbox, Grid, responsive media queries, Tailwind", badge: "Responsive" },
      { name: "JavaScript", icon: "Code", description: "Interactive client applications and dynamic rendering", badge: "Interactive" },
    ],
  },
  {
    category: "Backend & Databases",
    description: "Server architecture and relational data management",
    skills: [
      { name: "Flask", icon: "Server", description: "Python web microframework for lightweight API backends", badge: "Microframework" },
      { name: "REST APIs", icon: "Network", description: "Client-server architecture, JSON payloads, endpoints", badge: "Integration" },
      { name: "SQL", icon: "Database", description: "DDL, DML, complex joins, subqueries, group by", badge: "Relational" },
      { name: "SQLite", icon: "HardDrive", description: "Embedded lightweight database for event logging", badge: "Embedded" },
    ],
  },
  {
    category: "AI & Computer Vision",
    description: "Deep learning object detection and spatial processing",
    skills: [
      { name: "YOLO", icon: "Eye", description: "Real-time neural object detection model inference", badge: "Object Detection" },
      { name: "OpenCV", icon: "Camera", description: "Image stream ingestion, frame transformations, visual telemetry", badge: "Computer Vision" },
      { name: "Object Detection", icon: "Scan", description: "Human pose, keypoints, and spatial behavior analysis", badge: "Pose & Keypoints" },
    ],
  },
  {
    category: "Tools & Concepts",
    description: "Workflow tools and software engineering fundamentals",
    skills: [
      { name: "Git & GitHub", icon: "GitBranch", description: "Version control, branching, repository collaboration", badge: "Version Control" },
      { name: "VS Code", icon: "Terminal", description: "Primary IDE environment and debugging utilities", badge: "Development" },
      { name: "OOP", icon: "Cpu", description: "Encapsulation, inheritance, polymorphism, abstraction", badge: "Concepts" },
      { name: "DBMS / CRUD", icon: "Database", description: "Database management, persistent operations", badge: "Database" },
      { name: "SQL Queries", icon: "FileCode", description: "Optimized queries and table relational structures", badge: "Querying" },
      { name: "API Integration", icon: "Network", description: "Consuming and testing third-party and custom APIs", badge: "Integration" },
    ],
  },
];

export interface ExperienceItem {
  id: string;
  type: "training" | "internship";
  role: string;
  organization: string;
  location: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "training-fullstack",
    type: "training",
    role: "Java Full Stack Developer Training",
    organization: "Training Institute",
    location: "Chennai, Tamil Nadu",
    period: "6-Month Course (Current)",
    status: "Active Training",
    description:
      "Intensive software engineering training focusing on Core Java, Object-Oriented Programming (OOP) paradigms, SQL queries, Oracle database concepts, and full-stack software development workflows.",
    highlights: [
      "Core Java & Object-Oriented Programming (OOP) paradigms",
      "Java programming practice, algorithmic problem-solving & data structures",
      "Relational database design, complex SQL queries, and Oracle concepts",
      "Writing clean, modular, and maintainable software code",
    ],
    technologies: ["Core Java", "OOP", "SQL", "Oracle", "Data Structures"],
  },
  {
    id: "internship-the-mind-it",
    type: "internship",
    role: "Artificial Intelligence Intern",
    organization: "The Mind IT",
    location: "Trichy, Tamil Nadu",
    period: "Industry Internship",
    status: "Completed",
    description:
      "Completed an industry-oriented internship in Artificial Intelligence. Gained hands-on exposure to practical AI concepts, machine learning workflows, computer vision, and AI application development.",
    highlights: [
      "Completed an industry-oriented internship in Artificial Intelligence",
      "Gained exposure to AI concepts and machine learning workflows",
      "Hands-on computer vision and AI application development with Python",
      "Practical problem-solving and neural inference pipelines",
    ],
    technologies: ["Python", "Computer Vision", "AI Workflows", "YOLO"],
  },
  {
    id: "internship-novitech-fullstack",
    type: "internship",
    role: "Full Stack Development Intern / MasterClass",
    organization: "NoviTech R&D Pvt. Ltd.",
    location: "Tamil Nadu, India",
    period: "30-Day MasterClass & Internship",
    status: "Completed",
    description:
      "Gained practical exposure to frontend, backend, database integration, and web application development. Successfully completed an intensive 30-Day MasterClass in Full Stack Development.",
    highlights: [
      "Gained practical exposure to frontend, backend, and database integration",
      "Hands-on web application development and responsive UI design",
      "Completed a rigorous 30-Day MasterClass in Full Stack Development",
      "Worked with modern client-server architectures and REST APIs",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "REST APIs", "SQL"],
  },
  {
    id: "internship-novitech-analytics",
    type: "internship",
    role: "Data Analytics Intern",
    organization: "NoviTech R&D Pvt. Ltd.",
    location: "Tamil Nadu, India",
    period: "Industry Internship",
    status: "Completed",
    description:
      "Gained exposure to data processing, analysis, and analytical workflows to interpret data structures and optimize application performance.",
    highlights: [
      "Gained exposure to data processing, analysis, and analytical workflows",
      "Structured querying and data transformation procedures",
      "Evaluating metrics to inform software and architectural decisions",
    ],
    technologies: ["Data Analytics", "SQL", "Data Processing", "Python"],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
  university: "Ponnaiyah Ramajayam Institute of Science & Technology (PRIST)",
  location: "Thanjavur, Tamil Nadu",
  period: "2023 – 2026",
  year: "2026",
  status: "Graduating 2026",
  description:
    "Comprehensive academic curriculum in information technology, computer science, software engineering, databases, and programming logic.",
  highlights: [
    "Object-Oriented Programming & Software Engineering",
    "Relational Database Management Systems & SQL",
    "Web Basics, Networking, and Algorithmic Problem Solving",
    "Data Structures, Algorithms & System Design Fundamentals",
  ],
  skills: ["Computer Science", "Database Systems", "Software Engineering", "OOP", "Algorithms"],
};

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  featured: boolean;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  externalUrl?: string;
  liveUrlLabel?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "ai-theft-detection",
    title: "AI Theft Detection System",
    badge: "Featured AI Project",
    featured: true,
    tagline: "Retail theft detection using YOLO, OpenCV human pose/keypoint analysis & automated Telegram alerts",
    description:
      "Developed an AI-based retail theft detection system using YOLO and OpenCV to identify potential product concealment. Used human pose/keypoint information to analyze person–product interactions and detect potential concealment events in real time. Built a Flask web application with SQLite for event logging and integrated automated Telegram notifications with captured detection images, date, and time information.",
    technologies: [
      "Python",
      "YOLO",
      "OpenCV",
      "Pose Estimation",
      "Flask",
      "SQLite",
      "Telegram Bot API",
      "HTML/CSS/JS",
    ],
    features: [
      "Real-time object detection using YOLO neural weights to identify merchandise & persons",
      "Human pose and keypoint analysis to monitor person-product interactions and concealment movements",
      "Automated evidence capture with date, timestamp, and confidence score",
      "Instant Telegram bot alert dispatch with captured incident snapshot",
      "Flask web application with SQLite event logging for security review",
    ],
    externalUrl: "https://aathidasan-ai-portfoli-craft.lovable.app",
    liveUrlLabel: "View Platform",
  },
  {
    id: "ai-portfolio-builder",
    title: "AI Portfolio Builder & Generator",
    badge: "AI Web Platform",
    featured: true,
    tagline: "AI-assisted developer profile and structured portfolio content generator",
    description:
      "Developed an AI-assisted portfolio builder for organizing user information, skills, projects, and professional details. Designed an automated workflow to generate structured, recruiter-ready professional portfolio content and dynamic layouts.",
    technologies: ["Python", "AI APIs", "React", "HTML5", "CSS3", "JavaScript", "REST APIs"],
    features: [
      "AI-assisted workflow for organizing developer skills, projects, and career milestones",
      "Automated generation of structured, professional portfolio content",
      "Clean, modern web preview architecture with responsive interfaces",
      "One-click portfolio synthesis for developers and students",
    ],
    externalUrl: "https://aathidasan-ai-portfoli-craft.lovable.app",
    liveUrlLabel: "View Live Demo",
  },
  {
    id: "java-programming-projects",
    title: "Java Full Stack Suite",
    badge: "Core Engineering",
    featured: false,
    tagline: "Robust Core Java applications demonstrating OOP paradigms & SQL integration",
    description:
      "A curated collection of Java development projects created during intensive training, demonstrating object-oriented programming, data structures, conditional control flows, method abstraction, and relational SQL database connectivity.",
    technologies: ["Java", "Core OOP", "SQL", "Oracle", "Collections", "JDBC"],
    features: [
      "Encapsulation, inheritance, polymorphism, and abstraction design patterns",
      "Collection framework manipulation (Lists, Sets, Maps, Iterators)",
      "Exception handling and robust input sanitization",
      "Relational database connectivity, schema manipulation, and querying",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    title: "Artificial Intelligence Internship",
    issuer: "The Mind IT, Trichy",
    badge: "AI & ML",
  },
  {
    title: "Full Stack Development Internship",
    issuer: "NoviTech R&D Pvt. Ltd.",
    badge: "Web Dev",
  },
  {
    title: "30-Day MasterClass in Full Stack Development",
    issuer: "NoviTech R&D Pvt. Ltd.",
    badge: "MasterClass",
  },
  {
    title: "Data Analytics Internship",
    issuer: "NoviTech R&D Pvt. Ltd.",
    badge: "Analytics",
  },
  {
    title: "Java Development Training",
    issuer: "Java Full Stack Program",
    badge: "Java / SQL",
  },
];

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    title: "Java Full Stack Applications",
    description: "Developing structured, object-oriented Java applications with clean architecture and database connectivity.",
    icon: "Coffee",
    technologies: ["Core Java", "OOP", "SQL", "Oracle", "JDBC"],
  },
  {
    title: "Web Applications",
    description: "Building responsive, modern user interfaces with React, JavaScript, HTML5, and CSS3.",
    icon: "Layout",
    technologies: ["React", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "AI & Computer Vision Systems",
    description: "Implementing real-time object detection, pose analysis, and automated notification pipelines.",
    icon: "Cpu",
    technologies: ["Python", "YOLO", "OpenCV", "Flask"],
  },
  {
    title: "Data Analytics & Scripting",
    description: "Processing data structures, writing structured queries, and building analytical pipelines.",
    icon: "Zap",
    technologies: ["Python", "SQL", "Data Analytics"],
  },
  {
    title: "Database Architecture",
    description: "Relational database structuring, query optimization, and schema management.",
    icon: "Database",
    technologies: ["SQL", "Oracle", "SQLite"],
  },
  {
    title: "Developer Portfolio Websites",
    description: "Modern, responsive, high-performance portfolios and digital products.",
    icon: "Sparkles",
    technologies: ["Next.js", "React", "Tailwind CSS"],
  },
];
