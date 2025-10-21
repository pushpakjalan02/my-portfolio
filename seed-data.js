// seed-data.js
use portfolio

// About
db.abouts.insertOne({
    content: [
        "I'm a passionate software engineer with 5+ years of experience building scalable web applications and distributed systems. I love solving complex problems and creating elegant, efficient solutions that make a real impact.",
        "When I'm not coding, you'll find me contributing to open-source projects, learning new technologies, or mentoring junior developers. I believe in writing clean, maintainable code and following best practices to deliver high-quality software.",
        "I'm currently seeking new opportunities where I can contribute to innovative projects and continue growing as a developer."
    ],
    createdAt: new Date(),
    updatedAt: new Date()
})

// Projects
db.projects.insertMany([
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard. Handles 10k+ concurrent users.",
        techStack: ["React", "Node.js", "MongoDB", "Express"],
        liveLink: "https://myportfolio.com",
        githubLink: "https://github.com/username/portfolio",
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "Analytics Dashboard",
        description: "Real-time analytics dashboard for business intelligence with interactive charts, data visualization, and customizable reports. Processes millions of data points.",
        techStack: ["Vue.js", "Firebase", "Vuex"],
        liveLink: "https://tasks.example.com",
        githubLink: "https://github.com/username/taskmanager",
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    }
])

// Education
db.educations.insertMany([
    {
        type: "degree",
        degree: "Bachelor of Science in Computer Science",
        college: "University of Technology",
        startYear: 2015,
        endYear: 2019,
        description: "Graduated Magna Cum Laude with a GPA of 3.8/4.0. Specialized in software engineering and algorithms. Active member of the Computer Science Society.",
        relevantCoursework: ["Data Structures", "Algorithms", "Database Systems", "Web Technologies"],
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "certificate",
        certificateName: "Google Cloud Professional Developer",
        issuingOrganization: "Google Cloud",
        year: 2022,
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        type: "certificate",
        certificateName: "AWS Certified Solutions Architect",
        issuingOrganization: "Amazon Web Services",
        year: 2023,
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    }
])

// Tech Skills
db.skills.insertMany([
    {
        category: "Frontend",
        skills: ["React", "Vue.js", "TypeScript", "TailwindCSS", "Next.js"],
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        category: "Backend",
        skills: ["Node.js", "Express", "Python", "Django", "REST APIs"],
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        category: "Database",
        skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
        order: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        category: "DevOps",
        skills: ["Docker", "AWS", "CI/CD", "Git", "Linux"],
        order: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    }
])

// Work Experience
db.workexperiences.insertMany([
    {
        title: "Full Stack Developer",
        organization: "Tech Corp",
        startDate: new Date("2022-06-01"),
        endDate: null, // Current position
        description: "Developing and maintaining web applications using React and Node.js. Led team of 3 developers on major feature releases.",
        achievements: [
            "Reduced application load time by 40% through performance optimization",
            "Led migration from monolith to microservices architecture",
            "Implemented CI/CD pipelines reducing deployment time by 60%",
            "Mentored 5 junior developers and conducted code reviews"
        ],
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "Frontend Developer Intern",
        organization: "Startup Inc",
        startDate: new Date("2021-06-01"),
        endDate: new Date("2021-12-31"),
        description: "Built responsive UI components using React. Collaborated with design team to implement user-friendly interfaces.",
        achievements: [
            "Built responsive web applications using React and Node.js",
            "Designed and implemented RESTful APIs handling 1M+ requests/day",
            "Improved test coverage from 65% to 90% using Jest and Cypress",
            "Collaborated with UX/UI designers to implement pixel-perfect designs"
        ],
        order: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    }
])

// Links
db.links.insertMany([
    {
        name: "Resume",
        url: "https://drive.google.com/your-resume",
        type: "resume",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "GitHub",
        url: "https://github.com/username",
        type: "github",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/username",
        type: "linkedin",
        createdAt: new Date(),
        updatedAt: new Date()
    }
])

print("Database seeded successfully!")