export interface Skill {
  name: string;
  icon: string;
  percentage: number;
  category: "frontend" | "backend" | "tools";
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  icon: string;
  color: string;
  responsibilities: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  icon: string;
  color: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  image: string;
  link: string;
  color: string;
}

export const skills: Skill[] = [
  // Frontend skills
  {
    name: "HTML",
    icon: "fab fa-html5",
    percentage: 90,
    category: "frontend",
  },
  {
    name: "CSS",
    icon: "fab fa-css3-alt",
    percentage: 85,
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: "fab fa-js",
    percentage: 80,
    category: "frontend",
  },
  {
    name: "React.js",
    icon: "fab fa-react",
    percentage: 75,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "fab fa-css3",
    percentage: 85,
    category: "frontend",
  },
  
  // Backend skills
  {
    name: "PHP",
    icon: "fab fa-php",
    percentage: 65,
    category: "backend",
  },
  {
    name: "MySQL",
    icon: "fas fa-database",
    percentage: 60,
    category: "backend",
  },
  
  // Tools
  {
    name: "Git",
    icon: "fab fa-git-alt",
    percentage: 80,
    category: "tools",
  },
  {
    name: "Figma",
    icon: "fab fa-figma",
    percentage: 75,
    category: "tools",
  },
  {
    name: "Adobe XD",
    icon: "fab fa-adobe",
    percentage: 70,
    category: "tools",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["HTML", "JavaScript", "Tailwind"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A drag-and-drop task management application with local storage and dark/light mode.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["HTML", "JavaScript", "CSS"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather forecast application with location search and 5-day predictions using a weather API.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["HTML", "JavaScript", "Tailwind"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website with smooth scrolling, animations, and responsive design.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["HTML", "JavaScript", "Tailwind"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    title: "Recipe App",
    description: "A recipe search and saving application with filter options and nutrition information.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["HTML", "JavaScript", "API"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 6,
    title: "Movie Database",
    description: "A movie information application with search, filtering, and watchlist features.",
    image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["HTML", "JavaScript", "API"],
    demoLink: "#",
    githubLink: "#",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Web Development Intern",
    company: "Ignite X Solutions",
    period: "2024 - 2025 (7 Months)",
    icon: "fas fa-laptop-code",
    color: "text-cyan-400 bg-cyan-400/20 group-hover:bg-cyan-400/30",
    responsibilities: [
      "Frontend Development using React.js",
      "Implemented modern UI/UX and responsive designs",
      "Collaborated with design and backend teams",
    ],
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    company: "Self-employed",
    period: "2022 - 2023",
    icon: "fas fa-code",
    color: "text-fuchsia-400 bg-fuchsia-400/20 group-hover:bg-fuchsia-400/30",
    responsibilities: [
      "Built small websites & web apps for clients",
      "Used HTML, CSS, JavaScript, Tailwind CSS",
      "Managed client requirements and project deadlines",
    ],
  },
];

export const educations: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Teerthanker Mahaveer University",
    period: "2023 - Present",
    description: "Studying advanced programming concepts, database management, software engineering, and web development.",
    icon: "fas fa-graduation-cap",
    color: "bg-cyan-400",
  },
  {
    id: 2,
    degree: "12th CBSE",
    institution: "Holy Angel School",
    period: "Completed 2022 - 2023",
    description: "Completed higher secondary education with a focus on science and mathematics.",
    icon: "fas fa-school",
    color: "bg-fuchsia-400",
  },
  {
    id: 3,
    degree: "10th CBSE",
    institution: "Oxford Public School",
    period: "Completed",
    description: "Completed secondary education with excellent academic performance.",
    icon: "fas fa-book",
    color: "bg-yellow-400",
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Meta Frontend Professional Certificate",
    issuer: "Meta",
    image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "#",
    color: "shadow-cyan-400/30 hover:shadow-cyan-400/50",
  },
  {
    id: 2,
    title: "IBM Python for Data Science, AI & Development",
    issuer: "IBM",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "#",
    color: "shadow-fuchsia-400/30 hover:shadow-fuchsia-400/50",
  },
  {
    id: 3,
    title: "IBM Machine Learning with Python",
    issuer: "IBM",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "#",
    color: "shadow-yellow-400/30 hover:shadow-yellow-400/50",
  },
  {
    id: 4,
    title: "IBM Introduction to Data Analytics",
    issuer: "IBM",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "#",
    color: "shadow-cyan-400/30 hover:shadow-cyan-400/50",
  },
  {
    id: 5,
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "#",
    color: "shadow-fuchsia-400/30 hover:shadow-fuchsia-400/50",
  },
  {
    id: 6,
    title: "C Programming",
    issuer: "Infosys",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "#",
    color: "shadow-yellow-400/30 hover:shadow-yellow-400/50",
  },
];

export const contactInfo = {
  email: "vaibhavvishwkarma167@gmail.com",
  phone: "+91 7417295711",
  location: "Moradabad, Uttar Pradesh, India",
  socialLinks: [
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "#",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      url: "#",
    },
  ],
};
