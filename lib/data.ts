export const dummyData = {
  profile: {
    name: "John Doe",
    title: "Full Stack Developer",
    bio: "Passionate developer with 5+ years of experience building web applications. Specialized in React, Node.js, and cloud technologies.",
    email: "john.doe@example.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&fm=jpg",
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  projects: [
    {
      _id: "1",
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js and Stripe integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2940&fm=jpg",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example/project"
    },
    {
      _id: "2",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&fm=jpg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example/project"
    },
    {
      _id: "3",
      title: "AI Image Generator",
      description: "An AI-powered image generation tool using stable diffusion.",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2940&fm=jpg",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example/project"
    }
  ],
  skills: [
    {
      _id: "1",
      name: "React",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      category: "Frontend"
    },
    {
      _id: "2",
      name: "TypeScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      category: "Frontend"
    },
    {
      _id: "3",
      name: "Node.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      category: "Backend"
    },
    {
      _id: "4",
      name: "PostgreSQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      category: "Database"
    },
    {
      _id: "5",
      name: "Docker",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      category: "DevOps"
    },
    {
      _id: "6",
      name: "AWS",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
      category: "DevOps"
    }
  ],
  experience: [
    {
      _id: "1",
      company: "Tech Corp",
      position: "Senior Full Stack Developer",
      startDate: "2022-01-01",
      current: true,
      description: [
        "Led development of microservices architecture serving 1M+ users",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      _id: "2",
      company: "Startup Inc",
      position: "Full Stack Developer",
      startDate: "2020-03-01",
      endDate: "2021-12-31",
      current: false,
      description: [
        "Built and maintained multiple React applications",
        "Developed RESTful APIs using Node.js and Express",
        "Improved application performance by 40%"
      ]
    },
    {
      _id: "3",
      company: "Digital Agency",
      position: "Frontend Developer",
      startDate: "2018-06-01",
      endDate: "2020-02-28",
      current: false,
      description: [
        "Developed responsive web applications using React",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Reduced page load time by 50% through optimization"
      ]
    }
  ]
}