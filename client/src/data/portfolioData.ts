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
    title: "Weather App",
    description: "Interactive weather application that provides real-time forecasts, location-based weather data, and visual weather conditions.",
    image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["JavaScript", "API Integration", "CSS"],
    demoLink: "#",
    githubLink: "https://github.com/VaibhavVishwkarma/Weather-Web-App",
  },
  {
    id: 2,
    title: "Customer Sales Insights",
    description: "Data visualization dashboard that analyzes customer sales patterns and provides actionable business intelligence insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Data Analysis", "Charts", "Dashboard"],
    demoLink: "#",
    githubLink: "https://github.com/VaibhavVishwkarma/Customer-Sales-Insight-Analysis",
  },
  {
    id: 3,
    title: "Mobile Market Analysis",
    description: "Python-based market analysis tool that examines mobile industry trends using data visualization libraries and statistical analysis.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["Python", "Data Science", "Visualization"],
    demoLink: "#",
    githubLink: "https://github.com/VaibhavVishwkarma/Mobile-Market-Analysis-Dashboard-2019---2024-",
  },
  {
    id: 4,
    title: "QR Code Generator",
    description: "Web application that creates customizable QR codes for various purposes like URLs, contact information, and plain text.",
    image: "https://images.unsplash.com/photo-1598291286794-d417e2ffd85a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["JavaScript", "HTML", "CSS"],
    demoLink: "#",
    githubLink: "https://github.com/VaibhavVishwkarma/QR-CODE-GENERATOR-",
  },
  {
    id: 5,
    title: "Shoe Store Website",
    description: "E-commerce platform specialized for footwear with product filtering, shopping cart, and responsive design.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "#",
    githubLink: "https://github.com/VaibhavVishwkarma/Shoes-Store-",
  },
  {
    id: 6,
    title: "E-commerce Website",
    description: "Full-featured online store with product catalog, user authentication, shopping cart, and checkout functionality.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["React", "JavaScript", "CSS"],
    demoLink: "#",
    githubLink: "https://github.com/VaibhavVishwkarma/Amazon-Clone-HTML-CSS",
  },
  {
    id: 7,
    title: "BMI Calculator",
    description: "Interactive tool that calculates Body Mass Index, provides health insights, and offers personalized recommendations.",
    image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    tags: ["JavaScript", "HTML", "CSS"],
    demoLink: "#",
    githubLink: "https://github.com/VaibhavVishwkarma/BMI-Calculator",
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
    issuer: "Meta / Coursera",
    image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/PU0LRPVAML3A",
    color: "shadow-cyan-400/30 hover:shadow-cyan-400/50",
  },
  {
    id: 2,
    title: "Python for Data Science, AI & Development",
    issuer: "IBM / Coursera",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "https://coursera.org/share/cf432eb4514df81567a668806d5c9dc4",
    color: "shadow-fuchsia-400/30 hover:shadow-fuchsia-400/50",
  },
  {
    id: 3,
    title: "Machine Learning with Python",
    issuer: "IBM / Coursera",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "https://coursera.org/share/79f6d138f3a2e08d8733e911e342cf81",
    color: "shadow-yellow-400/30 hover:shadow-yellow-400/50",
  },
  {
    id: 4,
    title: "Introduction to Data Analytics",
    issuer: "IBM / Coursera",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "https://coursera.org/share/81d5ed4ffee25fa87f036c7f077da7de",
    color: "shadow-cyan-400/30 hover:shadow-cyan-400/50",
  },
  {
    id: 5,
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services / Coursera",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "https://coursera.org/share/c4ad3ce6ee6703226ea9b494fb64a67e",
    color: "shadow-fuchsia-400/30 hover:shadow-fuchsia-400/50",
  },
  {
    id: 6,
    title: "C Programming",
    issuer: "Infosys Springboard",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "https://drive.google.com/file/d/1b5Y267iczKKzRN8uZ5z2xMfjJf_U-86F/view?usp=sharing",
    color: "shadow-yellow-400/30 hover:shadow-yellow-400/50",
  },
];

export const contactInfo = {
  socialLinks: [
    {
      name: "GitHub",
      icon: "fab fa-github",
      url: "https://github.com/VaibhavVishwkarma/",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/vaibhav-vishwkarma-b561a12a5/",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      url: "#",
    },
  ],
};
