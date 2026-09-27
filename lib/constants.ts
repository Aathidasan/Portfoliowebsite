export interface NavItem {
  name: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const PERSONAL_INFO = {
  name: "Aathidasan R",
  role: "Java Developer",
  taglines: [
    "Java Developer",
    "Software Developer Fresher",
    "AI Enthusiast",
    "Web Developer",
    "Problem Solver",
  ],
  status: "Available for Entry-Level Opportunities",
  location: "Chennai, Tamil Nadu, India",
  phone: "+91 95660 95628",
  email: "aathidasan7@gmail.com",
  portfolioUrl: "https://aathidasan-ai-portfoli-craft.lovable.app",
  heroBio:
    "I’m a passionate software developer fresher focused on Java, web technologies, and AI, building practical solutions while continuously improving my development skills.",
  aboutParagraphs: [
    "I am a motivated B.Sc. Information Technology graduate (PRIST University, 2026) currently undergoing intensive 6-month Java Development Training at QSpiders, Velachery, Chennai.",
    "With hands-on internship exposure across Artificial Intelligence at The Mind IT and Full Stack Web Development at Novi Tech, I bridge core programming logic with modern interactive web applications and computer vision workflows.",
    "Driven by continuous learning and pragmatic engineering, I focus on building reliable software solutions and am actively seeking entry-level software development opportunities where I can contribute and grow.",
  ],
};

export const STATISTICS = [
  {
    value: "2026",
    label: "Graduation Year",
    subtext: "B.Sc. Information Technology",
  },
  {
    value: "6 Months",
    label: "Java Training",
    subtext: "QSpiders Velachery",
  },
  {
    value: "2",
    label: "Internship Experiences",
    subtext: "AI & Full Stack Web",
  },
  {
    value: "2+",
    label: "Major Featured Projects",
    subtext: "Computer Vision & Web",
  },
];

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    icon: string;
    description: string;
    badge: string;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming",
    description: "Core languages for logic, problem solving, and backend services",
    skills: [
      {
        name: "Java",
        icon: "Coffee",
        description: "Core Java, OOP principles, collections framework, exception handling",
        badge: "Core Focus",
      },
      {
        name: "Python",
        icon: "FileCode",
        description: "Scripting, computer vision workflows, automation, and backend logic",
        badge: "Proficient",
      },
      {
        name: "JavaScript",
        icon: "Code",
        description: "ES6+, asynchronous programming, DOM manipulation, interactive web apps",
        badge: "Proficient",
      },
    ],
  },
  {
    category: "Web Development",
    description: "Modern frontend and full-stack web technologies",
    skills: [
      {
        name: "React",
        icon: "Atom",
        description: "Component lifecycle, state management, hooks, modern UI building",
        badge: "Framework",
      },
      {
        name: "HTML5 & CSS3",
        icon: "Layers",
        description: "Semantic structures, Flexbox, Grid layouts, responsive styling",
        badge: "Frontend",
      },
      {
        name: "REST APIs",
        icon: "Network",
        description: "API design concepts, JSON payloads, client-server communication",
        badge: "Integration",
      },
    ],
  },
  {
    category: "Database Management",
    description: "Relational database querying, schema structuring, and persistence",
    skills: [
      {
        name: "SQL",
        icon: "Database",
        description: "DDL, DML, complex joins, subqueries, group by, indexing concepts",
        badge: "Relational",
      },
      {
        name: "Oracle",
        icon: "HardDrive",
        description: "Enterprise relational database concepts and structured querying",
        badge: "Enterprise",
      },
      {
        name: "SQLite",
        icon: "Server",
        description: "Lightweight embedded SQL storage for applications and event logs",
        badge: "Embedded",
      },
    ],
  },
  {
    category: "AI & Computer Vision",
    description: "Machine vision, neural detection pipelines, and intelligent workflows",
    skills: [
      {
        name: "Artificial Intelligence",
        icon: "Cpu",
        description: "Core AI concepts, machine learning fundamentals, pipeline architectures",
        badge: "Enthusiast",
      },
      {
        name: "YOLO (You Only Look Once)",
        icon: "Eye",
        description: "Real-time object detection models and inference pipelines",
        badge: "Detection",
      },
      {
        name: "OpenCV",
        icon: "Camera",
        description: "Video stream processing, frame manipulation, bounding boxes",
        badge: "Vision",
      },
      {
        name: "Object Detection",
        icon: "Scan",
        description: "Tracking people, items, concealment behavior, visual bounding states",
        badge: "Analysis",
      },
    ],
  },
  {
    category: "Developer Tools",
    description: "Version control, workflow efficiency, and testing utilities",
    skills: [
      {
        name: "Git & GitHub",
        icon: "GitBranch",
        description: "Version control, branching, committing, repository collaboration",
        badge: "VCS",
      },
      {
        name: "VS Code",
        icon: "Terminal",
        description: "Primary development environment, extensions, debugging setup",
        badge: "IDE",
      },
      {
        name: "Postman",
        icon: "Send",
        description: "API endpoint testing, request validation, response inspection",
        badge: "Testing",
      },
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
    id: "training-qspiders",
    type: "training",
    role: "Java Development Training",
    organization: "QSpiders",
    location: "Velachery, Chennai",
    period: "6-Month Java Course (Current)",
    status: "In Progress",
    description:
      "Undergoing rigorous professional training in Core Java and enterprise database concepts to master industry-standard software development practices.",
    highlights: [
      "Core Java & Object-Oriented Programming (OOP) paradigms",
      "Java programming practice, algorithmic problem-solving & data structures",
      "Relational database design, complex SQL queries, and Oracle database concepts",
      "Writing clean, modular, and maintainable software code",
    ],
    technologies: ["Core Java", "OOP", "SQL", "Oracle", "Problem Solving", "Data Structures"],
  },
  {
    id: "internship-the-mind-it",
    type: "internship",
    role: "Artificial Intelligence Intern",
    organization: "The Mind IT",
    location: "Trichy, Tamil Nadu",
    period: "Internship Exposure",
    status: "Completed",
    description:
      "Gained hands-on exposure to practical AI methodologies, computer vision concepts, and Python-based development workflows.",
    highlights: [
      "Artificial Intelligence fundamentals and workflow modeling",
      "AI-based development tasks and script implementations in Python",
      "Understanding real-world data pipelines and model inference logic",
      "Applying analytical problem-solving to practical computer vision tasks",
    ],
    technologies: ["Python", "AI Workflows", "Computer Vision", "Machine Learning Fundamentals"],
  },
  {
    id: "internship-novi-tech",
    type: "internship",
    role: "Full Stack Developer Intern",
    organization: "Novi Tech",
    location: "Tamil Nadu, India",
    period: "Internship Exposure",
    status: "Completed",
    description:
      "Explored the end-to-end full-stack web development cycle, mastering frontend interfaces and backend integration concepts.",
    highlights: [
      "Hands-on web development exposure utilizing modern HTML, CSS, and JavaScript",
      "Frontend UI implementation and responsive design principles",
      "Backend architectural fundamentals and client-server REST communication",
      "Understanding modern software development workflows and debugging",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Full Stack Concepts", "REST APIs"],
  },
];

export const EDUCATION = {
  degree: "B.Sc. Information Technology",
  university: "PRIST University",
  location: "Thanjavur, Tamil Nadu",
  year: "2026",
  status: "Graduated 2026",
  badge: "Bachelor of Science",
  description:
    "Comprehensive academic foundation in computer science, information technology principles, software engineering, databases, and mathematics.",
  highlights: [
    "Object-Oriented Programming & Software Engineering",
    "Relational Database Management Systems & SQL",
    "Computer Networks, Operating Systems & Web Basics",
    "Practical Academic Lab Projects & Problem Solving",
  ],
  skills: ["Computer Science", "Database Systems", "Web Tech", "Software Engineering", "Algorithms"],
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
  workflow?: {
    step: string;
    label: string;
    description: string;
    icon: string;
  }[];
  externalUrl?: string;
  liveUrlLabel?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "ai-theft-detection",
    title: "AI Theft Detection System",
    badge: "Featured System • Computer Vision",
    featured: true,
    tagline: "Intelligent real-time object-concealment behavior detection & automated incident dispatch",
    description:
      "An advanced AI-driven computer vision system engineered to detect suspicious behavior and object-concealment actions in real time. Features multi-stage visual detection states, automated evidence capture, instant Telegram alerts, and structured SQLite event logging.",
    technologies: [
      "Python",
      "YOLO",
      "OpenCV",
      "Flask",
      "SQLite",
      "Flask-SocketIO",
      "Telegram Bot API",
      "HTML/CSS/JS",
    ],
    features: [
      "Real-time Person & Handheld Object Detection using YOLO neural weights",
      "Behavior analysis pipeline monitoring suspicious concealment movements",
      "Multi-stage visual detection states (Normal → Monitored → Suspicious Alert)",
      "Automated evidence capture with date, timestamp, and confidence score",
      "Instant Telegram bot alert dispatch with captured incident snapshot",
      "SQLite event ledger for persistent security audit trail",
      "Web-based live video dashboard with real-time SocketIO telemetry",
    ],
    workflow: [
      {
        step: "01",
        label: "Camera Stream",
        description: "Captures live video feed frames via OpenCV high-throughput ingestion",
        icon: "Camera",
      },
      {
        step: "02",
        label: "YOLO Detection",
        description: "Identifies persons, handheld merchandise, and boundary regions",
        icon: "Scan",
      },
      {
        step: "03",
        label: "Behavior Analysis",
        description: "Tracks object trajectory to detect concealment into bags or pockets",
        icon: "Cpu",
      },
      {
        step: "04",
        label: "Instant Alert",
        description: "Dispatches snapshot and telemetry data via Telegram Bot API",
        icon: "Bell",
      },
      {
        step: "05",
        label: "Event Log",
        description: "Records timestamped incident data into SQLite for audit review",
        icon: "Database",
      },
    ],
  },
  {
    id: "ai-portfolio-generator",
    title: "AI Smart Portfolio Generator",
    badge: "AI & Web Application",
    featured: false,
    tagline: "AI-assisted developer profile creation and portfolio generation platform",
    description:
      "An AI-powered concept designed to assist developers in crafting personalized portfolio content, technical profiles, and project showcases with intelligent prompt assistance and structured web outputs.",
    technologies: ["Python", "AI APIs", "HTML5", "CSS3", "JavaScript", "Web Technologies"],
    features: [
      "Prompt-driven developer profile synthesis",
      "Dynamic section generation for projects, technical skills, and career milestones",
      "Clean, modern web preview architecture",
      "Accessible and responsive responsive layout generation",
    ],
    externalUrl: "https://aathidasan-ai-portfoli-craft.lovable.app",
    liveUrlLabel: "View Portfolio Platform",
  },
  {
    id: "java-programming-projects",
    title: "Java Programming Suite",
    badge: "Core Engineering",
    featured: false,
    tagline: "Robust Core Java applications demonstrating OOP paradigms & SQL integration",
    description:
      "A curated collection of Java development projects created during rigorous training, demonstrating object-oriented programming, data structures, conditional control flows, method abstraction, and relational SQL integration.",
    technologies: ["Java", "Core OOP", "SQL", "Oracle", "Collections", "JDBC Concepts"],
    features: [
      "Encapsulation, inheritance, polymorphism, and abstraction design patterns",
      "Collection framework manipulation (Lists, Sets, Maps, Iterators)",
      "Exception handling and robust input sanitization",
      "Relational database connectivity, schema manipulation, and querying",
    ],
  },
  {
    id: "web-development-projects",
    title: "Modern Web Development Works",
    badge: "Frontend & Full Stack",
    featured: false,
    tagline: "Interactive, responsive web experiences built with modern standards",
    description:
      "Collection of practical web development implementations featuring clean component design, responsive layouts, API integration, and fluid micro-interactions built during internship and self-directed practice.",
    technologies: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "REST APIs", "Git"],
    features: [
      "Fully responsive, mobile-first layouts",
      "Component-based architecture and state handling",
      "Asynchronous REST API consumption and dynamic rendering",
      "Accessible semantic markup and WCAG compliance consideration",
    ],
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
    title: "Java Applications",
    description:
      "Developing structured, object-oriented Java applications with clean architecture, algorithmic logic, and reliable data flow.",
    icon: "Coffee",
    technologies: ["Core Java", "OOP", "Collections", "JDBC"],
  },
  {
    title: "Web Applications",
    description:
      "Building responsive, high-performance web interfaces with modern frontend technologies, smooth animations, and clean components.",
    icon: "Layout",
    technologies: ["React", "JavaScript", "HTML5", "CSS3 / Tailwind"],
  },
  {
    title: "AI Applications",
    description:
      "Implementing practical computer vision and AI-assisted workflows such as object detection pipelines and inference scripts.",
    icon: "Cpu",
    technologies: ["Python", "YOLO", "OpenCV", "AI Workflows"],
  },
  {
    title: "Automation Solutions",
    description:
      "Creating simple scripting solutions and automated routines to streamline repetitive computational tasks and data collection.",
    icon: "Zap",
    technologies: ["Python", "Automation Scripts", "Telegram APIs"],
  },
  {
    title: "Database Applications",
    description:
      "Designing structured relational database schemas and writing performant SQL queries for persistent data storage.",
    icon: "Database",
    technologies: ["SQL", "Oracle", "SQLite", "Relational Modeling"],
  },
  {
    title: "Developer Portfolio Websites",
    description:
      "Crafting aesthetic, modern, recruiter-friendly personal portfolios and product showcase pages with world-class UX.",
    icon: "Sparkles",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Design Systems"],
  },
];
