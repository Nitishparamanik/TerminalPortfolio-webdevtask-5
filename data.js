// All portfolio data in one centralized object
export const data = {
    // Personal info
    personal: {
        name: "Nitish Paramanik",
        title: "Computer Science Engineering Student",
        contact: {
            email: "tempmail",
            phone: "1234679"
        },
        summary: "A highly motivated and results-driven Computer Science and Engineering student skilled in frontend development with expertise in Java, Python, and React.js. Focused on building intuitive and responsive web applications. A quick learner and collaborative team player, ready to contribute ideas and grow in a fast-paced IT environment."
    },
    
    // Education details
    education: [
        {
            institution: "C. V. Raman Global University",
            location: "Bhubaneswar, Odisha",
            degree: "Bachelor of Technology in Computer Science and Engineering",
            period: "2022-2026",
        },
        {
            institution: "Napara High School",
            location: "Purulia, West Bengal",
            degree: "Higher Secondary (PCM)",
            period: "2020-2021",
        }
    ],
    
    // Skills categorized
    skills: {
        programming: [
            { name: "Java", level: 85 },
            { name: "Python", level: 80 }
        ],
        webDevelopment: [
            { name: "HTML", level: 90 },
            { name: "CSS", level: 85 },
            { name: "JavaScript", level: 80 },
            { name: "React.js", level: 75 }
        ],
        familiar: [
            { name: "MySQL", level: 60 },
            { name: "Git/Github", level: 70 },
            { name: "STM32CubeIDE", level: 65 },
            { name: "Machine Learning", level: 60 }
        ],
        soft: [
            "Time Management",
            "Team Collaboration",
            "Creativity",
            "Critical Thinking"
        ]
    },
    
    // Work experience
    experience: [
        {
            position: "Embedded Systems Intern",
            company: "C. V. Raman Global University",
            location: "Bhubaneswar",
            period: "July 2024 — Aug 2024",
            responsibilities: [
                "Gained hands-on experience with STM32 microcontroller programming.",
                "Configured peripherals such as timers, ADC, and DAC for real-time signal processing.",
                "Implemented external interrupts for user input control, improving system responsiveness."
            ]
        }
    ],
    
    // Projects
    projects: [
        {
            title: "Weather App",
            technologies: "HTML, CSS, JavaScript",
            date: "Sep 2024",
            description: "Developed a web-based weather application using HTML, CSS, and JavaScript, integrating the OpenWeather API to fetch real-time weather data. Designed a responsive UI and implemented error handling for invalid inputs.",
            link: null
        },
        {
            title: "Movie Recommendation System",
            technologies: "Machine Learning, Python",
            date: "Jan 2025",
            description: "Built a movie recommendation system using content based and collaborative filtering. Utilized Python, Pandas, NumPy, and Scikit-learn to process data and train the model, providing personalized suggestions based on user preferences.",
            link: null
        },
        {
            title: "Java File Hider",
            technologies: "Java, MySQL",
            date: "2023",
            description: "Built a Java-based file-hiding application with MySQL, ensuring secure storage and access control. Implemented encryption and authentication to protect files from unauthorized access.",
            link: null
        }
    ],
    
    // Relevant coursework
    coursework: [
        "Database Management System",
        "Object Oriented Programming (OOPs)"
    ],
    
    // Certifications
    certifications: [
        {
            name: "Generative AI: Prompt Engineering Basics",
            issuer: "IBM"
        },
        {
            name: "Google UI/UX using Figma",
            issuer: "Google"
        }
    ],
    
    // Personal interests
    interests: [
        "Reading Books",
        "Playing Cricket"
    ],
    
    // Custom terminal commands
    commands: [
        { name: "about", description: "Display information about me" },
        { name: "education", description: "Show my educational background" },
        { name: "skills", description: "List my technical and soft skills" },
        { name: "experience", description: "Display my work experience" },
        { name: "projects", description: "View my portfolio projects" },
        { name: "project", description: "View details of a specific project (usage: project <name>)" },
        { name: "contact", description: "Display contact information" },
        { name: "resume", description: "Display full resume" },
        { name: "clear", description: "Clear the terminal screen" },
        { name: "help", description: "Show available commands" },
        { name: "social", description: "Display social media links" },
        { name: "theme", description: "Toggle light/dark theme" },
        { name: "courses", description: "List relevant coursework" },
        { name: "certs", description: "Show certifications" },
        { name: "interests", description: "Display personal interests" }
    ],
    
    // Easter eggs
    easterEggs: {
        "sudo": "Nice try! But you don't have sudo privileges here 😄",
        "exit": "There's no escape from my portfolio! Try 'clear' instead.",
        "rm -rf": "Whoa there! I need those files...",
        "hello": "Hello there! How can I help you today?",
        "hi": "Hi! Type 'help' to see what you can do here.",
        "hack": "🔒 ACCESS DENIED: Nice try, but this system is unhackable!",
        "coffee": "☕ Here's your virtual coffee! Now back to coding...",
        "secret": "Shh... The secret is: I love open-source projects!",
        "matrix": "Wake up, Neo... The matrix has you...",
        "easteregg": "You found an easter egg! 🥚 Try finding more!"
    }
};