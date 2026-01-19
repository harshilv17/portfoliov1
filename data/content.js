// Content data for the portfolio
// Easy to update in one place

export const siteConfig = {
  name: "HARSHIL",
  title: "Full-Stack Developer",
  year: new Date().getFullYear(),
  location: "Based in India 🇮🇳",
};

export const heroContent = {
  label: "Internet Name:",
  name: "HARSHIL\nVALECHA",
  bio: "Passionate full-stack developer building innovative digital products. Focused on web development, AI/ML, and creating seamless user experiences that make a difference.",
  initials: "HV",
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/harshilvalecha",
    icon: "FaGithub",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/harshilvalecha",
    icon: "FaLinkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/harshilvalecha",
    icon: "FaTwitter",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/harshilvalecha",
    icon: "FaInstagram",
  }
];

export const ctaLinks = [
  {
    title: "VIEW MY PROJECTS",
    description: "Explore my latest work including web apps, AI projects, and creative experiments built with modern technologies.",
    url: "#projects",
  },
  {
    title: "CONNECT ON GITHUB",
    description: "Check out my open-source contributions and follow along with my development journey.",
    url: "https://github.com/harshilv17",
  },
  {
    title: "READ MY BLOG",
    description: "Technical articles, tutorials, and insights on web development, AI, and software engineering.",
    url: "#",
  },
  {
    title: "DOWNLOAD RESUME",
    description: "Get a detailed overview of my skills, experience, and professional background.",
    url: "#",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL featuring user auth and payments.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "https://github.com/harshilv17",
  },
  {
    id: 2,
    title: "AI Chat Assistant",
    description: "An intelligent chatbot powered by OpenAI GPT with context awareness and multi-turn dialogues.",
    tech: ["Next.js", "OpenAI", "TypeScript"],
    link: "https://github.com/harshilv17",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates and team workspaces.",
    tech: ["React", "Firebase", "Tailwind"],
    link: "https://github.com/harshilv17",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "This modern Next.js portfolio with smooth animations and blueprint design aesthetics.",
    tech: ["Next.js", "Framer Motion", "CSS"],
    link: "https://github.com/harshilv17",
  },
];

export const testimonials = [
  {
    name: "JOHN SMITH",
    role: "Project Manager",
    initials: "JS",
    text: "Working with Harshil has been exceptional. His technical expertise and attention to detail consistently exceeded our expectations. Highly recommended!",
    company: "TechCorp",
    country: "USA",
  },
  {
    name: "SARAH KUMAR",
    role: "CEO",
    initials: "SK",
    text: "Harshil delivered outstanding work on our web platform. His reliability and problem-solving skills made him an invaluable partner for our startup.",
    company: "StartupX",
    country: "INDIA",
  },
  {
    name: "MICHAEL JONES",
    role: "CTO",
    initials: "MJ",
    text: "Outstanding developer! Harshil's responsiveness and technical knowledge impressed our entire team. He delivered beyond expectations.",
    company: "DevStudio",
    country: "UK",
  },
  {
    name: "RAHUL PATEL",
    role: "Creative Director",
    initials: "RP",
    text: "Harshil did a terrific job on our platform. Great communication, timeliness, and quality. We look forward to working with him again.",
    company: "DesignLab",
    country: "INDIA",
  },
];

export const technicalSkills = {
  languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  frontend: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "Django", "REST APIs", "GraphQL"],
  database: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Redis"],
  tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"],
};

export const workExperience = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "TechStartup Inc.",
    duration: "Jan 2024 - Present",
    location: "Remote",
    description: "Building scalable web applications using React and Node.js. Led development of core product features serving 10K+ users.",
    highlights: ["Led team of 3 developers", "Improved performance by 40%", "Built CI/CD pipelines"],
  },
  {
    id: 2,
    role: "Frontend Developer Intern",
    company: "Digital Agency",
    duration: "Jun 2023 - Dec 2023",
    location: "Bangalore, India",
    description: "Developed responsive UI components and collaborated with design team to implement pixel-perfect interfaces.",
    highlights: ["Built 15+ reusable components", "Worked with React & TypeScript", "Agile methodology"],
  },
  {
    id: 3,
    role: "Freelance Developer",
    company: "Self-Employed",
    duration: "2022 - 2023",
    location: "Remote",
    description: "Delivered custom web solutions for small businesses and startups. Managed end-to-end project lifecycle.",
    highlights: ["10+ projects completed", "5-star client ratings", "E-commerce & portfolios"],
  },
];

export const coCurricular = [
  {
    id: 1,
    title: "Hackathon Winner",
    organization: "HackIndia 2024",
    description: "First place in national-level hackathon for building an AI-powered accessibility tool.",
    year: "2024",
  },
  {
    id: 2,
    title: "Technical Lead",
    organization: "College Tech Club",
    description: "Led a team of 20+ members organizing workshops, coding competitions, and tech talks.",
    year: "2023-2024",
  },
  {
    id: 3,
    title: "Open Source Contributor",
    organization: "Various Projects",
    description: "Active contributor to open-source projects with 50+ contributions on GitHub.",
    year: "Ongoing",
  },
  {
    id: 4,
    title: "Speaker",
    organization: "Developer Meetups",
    description: "Delivered talks on React, Next.js, and modern web development practices.",
    year: "2023",
  },
];

export const footerLinks = {
  built: "PROUDLY BUILT IN INDIA",
  credit: "BUILT BY HARSHIL VALECHA",
};
