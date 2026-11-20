/**
 * ╔══════════════════════════════════════════════════════════════╗
 *   PORTFOLIO DATA — Edit this file to update your website.
 *   No need to modify any React component files.
 * ╚══════════════════════════════════════════════════════════════╝
 */

const portfolioData = {
  /* ── Personal ── */
  name: "Randi Sangaji",
  firstName: "Randi",
  headline: "Aspiring Software Engineer",
  shortIntro:
    "Informatics student at Telkom University passionate about building clean, scalable software and exploring the frontiers of technology.",
  profileImage: "/images/profile.jpg", // Place your photo in public/images/

  /* ── Resume / CV ── */
  resume: {
    enabled: false, // Set to true once you place your CV in public/documents/
    path: "/documents/resume.pdf",
  },

  /* ── Availability ── */
  availableForInternship: true,

  /* ── About ── */
  about: {
    paragraphs: [
      "Hi, I'm Randi Sangaji — a passionate and driven Informatics student at Telkom University, enrolled in the International Class, Class of 2024. Originally from Ternate, North Maluku, Indonesia, I thrive on exploring new technologies and turning ideas into meaningful projects.",
      "Beyond academics, I'm an avid football and futsal enthusiast. These sports have shaped my understanding of teamwork, discipline, communication, and perseverance — values I carry into every project I work on.",
      "I believe every experience is an opportunity for growth. I'm always excited to take on new challenges, collaborate with others, and build solutions that make a difference.",
    ],
    highlights: [
      { label: "University", value: "Telkom University" },
      { label: "Program", value: "Informatics — International Class" },
      { label: "Class Of", value: "2024" },
      { label: "Origin", value: "Ternate, North Maluku, Indonesia" },
    ],
  },

  /* ── Skills ── */
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "JavaScript", "SQL"],
    },
    {
      category: "Web Technologies",
      items: ["HTML", "CSS", "React", "Tailwind CSS"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "SQL"],
    },
    {
      category: "Areas of Interest",
      items: [
        "Software Engineering",
        "Web Development",
        "Cybersecurity",
        "Cloud Computing",
        "Artificial Intelligence",
      ],
    },
  ],

  /* ── Projects ── */
  projects: [
    {
      title: "CampusBookings",
      description:
        "A campus facility booking application designed to streamline room and resource reservations for students and staff.",
      technologies: ["Python", "SQL", "PostgreSQL"],
      category: "Web Application",
      image: "/images/projects/campusbookings.png", // Add screenshot to public/images/projects/
      github: "", // Add your GitHub repo URL when available
      live: "", // Add live demo URL when available
    },
    {
      title: "Distributed Task Processing",
      description:
        "A distributed task processing system built with Python and ZeroMQ, enabling parallel task execution across multiple worker nodes.",
      technologies: ["Python", "ZeroMQ"],
      category: "Systems Programming",
      image: "/images/projects/distributed-tasks.png",
      github: "",
      live: "",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React, Vite, and Tailwind CSS to showcase projects, skills, and experience.",
      technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      category: "Web Development",
      image: "/images/projects/portfolio.png",
      github: "https://github.com/randisangaji/randi-portfolio",
      live: "",
    },
  ],

  /* ── Experience ── */
  experience: [
    {
      organization: "IMMAPA Telkom University",
      role: "", // Add your role/position when available
      period: "", // Add period, e.g. "2024 — Present"
      description: "", // Add description of your involvement
      type: "Organization", // Organization | Volunteer | Internship | Work
      logo: "/images/immapa.png", // Add org logo to public/images/
    },
    // ── Add more entries below ──
    // {
    //   organization: "Company Name",
    //   role: "Software Engineer Intern",
    //   period: "Jun 2025 — Aug 2025",
    //   description: "Worked on...",
    //   type: "Internship",
    //   logo: "/images/company.png",
    // },
  ],

  /* ── Contact ── */
  contact: {
    email: "mochamadrandi5@gmail.com",
    message:
      "I'm always open to discussing new opportunities, collaborations, or just connecting over shared interests. Feel free to reach out!",
  },

  /* ── Social Links ── */
  social: {
    github: "https://github.com/randisangaji",
    linkedin: "https://www.linkedin.com/in/mochamad-randi-414481330/",
  },

  /* ── Navigation ── */
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};

export default portfolioData;
