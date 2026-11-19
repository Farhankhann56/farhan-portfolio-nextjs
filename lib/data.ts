// ============================================================
//  EDIT YOUR CONTENT HERE — poori site ka text yahin se badalta hai
// ============================================================

export const site = {
  name: "Farhan Khan",
  role: "Full-Stack Developer",
  email: "farhankhan9909991@gmail.com",
  location: "Peshawar, Pakistan",
  languages: "English, Urdu, Punjabi",
  // CV: apni PDF ko public/ folder mein "Farhan-Khan-CV.pdf" naam se rakho, phir neeche likho:
  // cvUrl: "/Farhan-Khan-CV.pdf",
  cvUrl: "",
  social: {
    github: "https://github.com/Farhankhann56",
    // TODO: purane portfolio mein do alag LinkedIn links the (contact aur footer mein). Sahi wala rakho.
    linkedin: "https://linkedin.com/in/farhan-khan-00621234a",
    instagram: "https://www.instagram.com/farhandevlabs",
    facebook: "https://www.facebook.com/share/1T1Qjtk3q5/",
    x: "https://x.com/FarhanK581",
  },
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  summary:
    "Full-stack developer working across React, Node.js and PHP, with a growing focus on Python-powered AI systems, from dashboards to intelligent detection tools.",
  paragraphs: [
    "I design and build products end to end: from responsive React front ends to PHP/MySQL and Node.js back ends. Lately I've been extending that into Python, building AI-driven tools like disease-detection and emotion-recognition systems.",
    "I care about clean architecture, fast interfaces, and code that's easy for the next developer to pick up.",
  ],
};

export const services = [
  {
    icon: "LuLaptop",
    title: "Frontend & UI Engineering",
    text: "Pixel-precise, responsive interfaces built with React and Tailwind CSS: fast to load, smooth to use, and consistent across every screen size.",
  },
  {
    icon: "LuServer",
    title: "Full-Stack Web Applications",
    text: "End-to-end apps with Node.js, Express, PHP, MySQL and MongoDB: dashboards, management systems and APIs built to hold up under real use.",
  },
  {
    icon: "LuBrainCircuit",
    title: "AI-Powered Tools",
    text: "Python-based systems that add intelligence to a product: from detection models to real-time recognition apps, packaged for practical use.",
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { group: "Backend & Database", items: ["Node.js", "Express", "PHP", "MySQL", "MongoDB"] },
  { group: "AI & Machine Learning", items: ["Python", "TensorFlow", "scikit-learn", "OpenCV", "Flask"] },
  { group: "Tools", items: ["Git", "GitHub", "REST APIs", "GSAP"] },
];

export const experience = [
  {
    company: "Content Arcade",
    role: "Web Developer Intern (Onsite)",
    time: "Oct 2025 – Dec 2025",
    points: ["Full-stack development", "Team collaboration", "Hands-on work with modern technologies"],
    logo: "/images/logo-content-arcade.webp",
  },
  {
    company: "DevelopersHub Corporation",
    role: "Front-End Development Intern (Remote)",
    time: "Nov 2024 – Jan 2025",
    points: ["Frontend interfaces", "Responsive design", "Cross-browser optimization"],
    logo: "/images/logo-developershub.webp",
  },
  {
    company: "CodeAlpha",
    role: "Remote Internship",
    time: "1 month",
    points: ["UI components", "Usability focus", "Guidance from senior developers"],
    logo: "/images/logo-codealpha.webp",
  },
];

export const certificates = [
  {
    title: "Front End Development Internship",
    issuer: "DevelopersHub Corporation",
    date: "Nov 2024 – Jan 2025",
    image: "/images/cert-developershub.webp",
  },
  {
    title: "JavaScript Essentials 2",
    issuer: "Cisco Networking Academy · OpenEDG JS Institute",
    date: "Jan 2025",
    image: "/images/cert-cisco.webp",
  },
];

export type Project = {
  title: string;
  category: "AI / ML" | "Full-Stack" | "Frontend";
  desc: string;
  tech: string[];
  image?: string; // real screenshot (optional)
  cover?: { icon: string; from: string; to: string }; // used when there is no screenshot
  repo?: string; // GitHub link
  demo?: string; // live link
};

// NOTE: jin projects ke repo/demo link nahi hain, wahan button nahi dikhta.
// Asli link mil jaye to repo: "https://github.com/..." ya demo: "https://..." add kar do.
export const projects: Project[] = [
  {
    title: "Alzheimer's Disease Detection",
    category: "AI / ML",
    desc: "A machine learning system that classifies MRI brain scans to help flag early signs of Alzheimer's disease, built and trained in Python.",
    tech: ["Python", "TensorFlow", "CNN", "scikit-learn"],
    cover: { icon: "LuBrainCircuit", from: "#2f5bff", to: "#7c5cff" },
  },
  {
    title: "AI Emotion Detection (Desktop App)",
    category: "AI / ML",
    desc: "A desktop application that detects human emotions from a live camera feed in real time, powered by a Flask backend and computer vision.",
    tech: ["Python", "Flask", "OpenCV", "Deep Learning"],
    cover: { icon: "LuScanFace", from: "#0ea5e9", to: "#2f5bff" },
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "Full-Stack",
    desc: "A multi-tenant SaaS dashboard with authentication, real-time charts and a REST API, built on the MERN stack with a focus on clean, scalable architecture.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    cover: { icon: "LuLayoutDashboard", from: "#111827", to: "#2f5bff" },
  },
  {
    title: "Event Management System",
    category: "Full-Stack",
    desc: "A full-stack event management platform for creating events, handling registrations and managing attendees, built end to end on a classic LAMP-style stack.",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    cover: { icon: "LuCalendarDays", from: "#0f766e", to: "#0ea5e9" },
  },
  {
    title: "Professional Dashboard Project",
    category: "Frontend",
    desc: "A real-world dashboard developed in a professional environment, focusing on responsive UI, usability, and clean front-end implementation.",
    tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    image: "/images/project-dashboard.webp",
    // TODO: ye link "portfolio" naam ke repo ka hai. Check karo ke dashboard wala sahi repo hai ya nahi.
    repo: "https://github.com/Farhankhann56/portfolio",
  },
  {
    title: "E-commerce Platform (Frontend)",
    category: "Frontend",
    desc: "Responsive product showcase, cart and checkout interface with modern UI/UX practices.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    image: "/images/project-ecommerce.webp",
    repo: "https://github.com/Farhankhann56/ecommerce",
  },
  {
    title: "Real-time Weather Dashboard",
    category: "Frontend",
    desc: "Dynamic weather application with API integration and clean, intuitive design.",
    tech: ["JavaScript", "API", "Responsive", "UI/UX"],
    image: "/images/project-weather.webp",
    repo: "https://github.com/Farhankhann56/weather-dashboard",
  },
];
