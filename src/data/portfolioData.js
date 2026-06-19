const portfolioData = {

  // ── PERSONAL INFO ──────────────────────────
  name: "Prabhakar Thokala",
  role: "Java Full Stack Developer",
  email: "tprabhakar1699@email.com",
  github: "https://github.com/tprabhakar31",
  linkedin: "https://linkedin.com/in/prabhakar-thokala-1025403a7",
  bio: "A passionate Java Full Stack Developer who architects robust, scalable systems — from clean REST APIs and microservices on the backend to responsive, intuitive React interfaces on the frontend.",

  // ── SKILLS ─────────────────────────────────
  skills: {
    backend: [
      "Java", "Spring Boot", "Spring MVC", "Spring Security","Spring Data JPA","Spring Cloud",
      "Hibernate", "JPA", "REST APIs", "Microservices",
      "Design Patterns", "Apache Kafka"
    ],
    frontend: [
      "React", "JavaScript", "Redux", "HTML5", "CSS3"
    ],
    cloudDevops: [
      "AWS", "Docker", "Kubernetes", "Jenkins",
      "CI/CD Pipelines", "Git & GitHub"
    ],
    databases: [
      "MySQL", "Redis", "MongoDB"
    ]
  },

  // ── PROJECTS ───────────────────────────────
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce app with microservices architecture, order management, and real-time inventory tracking.",
      techs: ["Spring Boot", "React", "Kafka", "MySQL"],
      github: "https://github.com/yourusername/project1",
      live: ""
    },
    {
      id: 2,
      title: "Auth & API Gateway",
      description: "Centralized authentication service with JWT, OAuth2, and role-based access control for distributed systems.",
      techs: ["Spring Security", "JWT", "Docker"],
      github: "https://github.com/yourusername/project2",
      live: ""
    },
    {
      id: 3,
      title: "Real-Time Dashboard",
      description: "Analytics dashboard consuming Kafka event streams, visualizing live business metrics with Redis caching.",
      techs: ["React", "Redux", "Redis", "Kafka"],
      github: "https://github.com/yourusername/project3",
      live: ""
    },
    {
      id: 4,
      title: "Cloud Deployment Pipeline",
      description: "Automated CI/CD pipeline deploying containerized microservices to AWS EKS with zero-downtime rolling updates.",
      techs: ["AWS", "Kubernetes", "Jenkins"],
      github: "https://github.com/yourusername/project4",
      live: ""
    }
  ],

  // ── EXPERIENCE ─────────────────────────────
  experience: [
    {
      id: 1,
      role: "Java Full Stack Developer",
      company: "DLV Software Pvt Ltd",
      duration: "Nov-2022 — Present",
      points: [
        "Designed and developed scalable microservices using Spring Boot deployed on AWS",
        "Built React frontends integrated with REST APIs",
        "Implemented CI/CD pipelines via Jenkins and Docker/Kubernetes",
        "Worked with Kafka for async event-driven communication"
      ]
    }
    
  ],

  // ── EDUCATION ──────────────────────────────
  education: [
    {
      id: 1,
      degree: "B.Tech in Mechanical Engineering",
      school: "Velagapudi Ramakrishna Siddhartha Engineering College, Vijayawada",
      year: "2017 — 2020"
    }
  ]

}

export default portfolioData