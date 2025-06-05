// Define all terminal commands
export const commands = {
    // Help command - shows available commands
    help: function() {
        const commandList = window.portfolioData.commands;
        let output = '<div class="highlight">Available Commands:</div>\n\n';
        
        commandList.forEach(cmd => {
            output += `<b>${cmd.name}</b> - ${cmd.description}\n`;
        });
        
        output += '\n<div class="highlight">Tip:</div> Use Tab for command autocomplete';
        return output;
    },
    
    // About command - displays personal info
    about: function() {
        const personal = window.portfolioData.personal;
        return `
<div class="highlight">${personal.name}</div>
<div>${personal.title}</div>

${personal.summary}

Type 'skills' to see my technical skills
Type 'projects' to see my recent work
Type 'contact' for contact information
`;
    },
    
    // Education command - shows education background
    education: function() {
        const education = window.portfolioData.education;
        let output = '<div class="highlight">Education:</div>\n\n';
        
        education.forEach(edu => {
            output += `<b>${edu.institution}</b> | ${edu.location}\n`;
            output += `${edu.degree}\n`;
            output += `${edu.period}\n\n`;
        });
        
        return output;
    },
    
    // Skills command - displays skills with progress bars
    skills: function(args) {
        const skills = window.portfolioData.skills;
        let category = args[0];
        let output = '';
        
        if (!category) {
            // Show all skills categories
            output = '<div class="highlight">Skills:</div>\n\n';
            output += '<b>Programming Languages:</b>\n';
            output += window.renderUtils.renderSkillBars(skills.programming);
            
            output += '<b>Web Development:</b>\n';
            output += window.renderUtils.renderSkillBars(skills.webDevelopment);
            
            output += '<b>Familiar With:</b>\n';
            output += window.renderUtils.renderSkillBars(skills.familiar);
            
            output += '<b>Soft Skills:</b>\n';
            output += skills.soft.join(', ');
        } else {
            // Show specific category
            category = category.toLowerCase();
            if (category === 'programming' && skills.programming) {
                output = '<div class="highlight">Programming Languages:</div>\n\n';
                output += window.renderUtils.renderSkillBars(skills.programming);
            } else if ((category === 'web' || category === 'webdev') && skills.webDevelopment) {
                output = '<div class="highlight">Web Development Skills:</div>\n\n';
                output += window.renderUtils.renderSkillBars(skills.webDevelopment);
            } else if (category === 'familiar' && skills.familiar) {
                output = '<div class="highlight">Familiar With:</div>\n\n';
                output += window.renderUtils.renderSkillBars(skills.familiar);
            } else if (category === 'soft' && skills.soft) {
                output = '<div class="highlight">Soft Skills:</div>\n\n';
                output += skills.soft.join(', ');
            } else {
                output = `Skill category '${category}' not found. Try 'programming', 'web', 'familiar', or 'soft'.`;
            }
        }
        
        return output;
    },
    
    // Experience command - shows work experience
    experience: function() {
        const experience = window.portfolioData.experience;
        let output = '<div class="highlight">Work Experience:</div>\n\n';
        
        if (experience.length === 0) {
            return 'No work experience listed yet.';
        }
        
        experience.forEach(exp => {
            output += `<b>${exp.position}</b> | ${exp.company}, ${exp.location}\n`;
            output += `${exp.period}\n\n`;
            
            if (exp.responsibilities && exp.responsibilities.length > 0) {
                exp.responsibilities.forEach(resp => {
                    output += `• ${resp}\n`;
                });
            }
            
            output += '\n';
        });
        
        return output;
    },
    
    // Projects command - lists all projects
    projects: function() {
        const projects = window.portfolioData.projects;
        let output = '<div class="highlight">Projects:</div>\n\n';
        
        if (projects.length === 0) {
            return 'No projects listed yet.';
        }
        
        projects.forEach((project, index) => {
            output += `<div class="project-card">`;
            output += `<div class="project-title">${index + 1}. ${project.title}</div>`;
            output += `<div class="project-description">${project.description}</div>`;
            output += `<div class="project-tech">Technologies: ${project.technologies}</div>`;
            output += `</div>`;
        });
        
        output += '\nType <b>project [number]</b> to see more details about a specific project.';
        
        return output;
    },
    
    // Project command - shows specific project details
    project: function(args) {
        if (!args[0]) {
            return 'Usage: project [number] - Please specify a project number.';
        }
        
        const projectNumber = parseInt(args[0]);
        const projects = window.portfolioData.projects;
        
        if (isNaN(projectNumber) || projectNumber < 1 || projectNumber > projects.length) {
            return `Invalid project number. Please enter a number between 1 and ${projects.length}.`;
        }
        
        const project = projects[projectNumber - 1];
        let output = `<div class="highlight">Project Details: ${project.title}</div>\n\n`;
        
        output += `<b>Date:</b> ${project.date}\n`;
        output += `<b>Technologies:</b> ${project.technologies}\n\n`;
        output += `<b>Description:</b>\n${project.description}\n\n`;
        
        if (project.link) {
            output += `<b>Link:</b> <a href="${project.link}" target="_blank">${project.link}</a>\n`;
        }
        
        return output;
    },
    
    // Contact command - displays contact info
    contact: function() {
        const contact = window.portfolioData.personal.contact;
        let output = '<div class="highlight">Contact Information:</div>\n\n';
        
        output += `Email: ${contact.email}\n`;
        output += `Phone: ${contact.phone}\n`;
        
        return output;
    },
    
    // Resume command - displays full resume
    resume: function() {
        const data = window.portfolioData;
        let output = `<div class="highlight">${data.personal.name}</div>\n`;
        output += `${data.personal.title}\n\n`;
        
        output += '<div class="highlight">PROFESSIONAL SUMMARY</div>\n';
        output += `${data.personal.summary}\n\n`;
        
        output += '<div class="highlight">EDUCATION</div>\n';
        data.education.forEach(edu => {
            output += `${edu.institution} | ${edu.location}\n`;
            output += `${edu.degree}\n`;
            output += `${edu.period}\n\n`;
        });
        
        output += '<div class="highlight">SKILLS</div>\n';
        output += `Programming Language: ${data.skills.programming.map(s => s.name).join(', ')}\n`;
        output += `Web Development: ${data.skills.webDevelopment.map(s => s.name).join(', ')}\n`;
        output += `Familiar: ${data.skills.familiar.map(s => s.name).join(', ')}\n`;
        output += `Soft Skills: ${data.skills.soft.join(', ')}\n\n`;
        
        output += '<div class="highlight">INTERNSHIPS</div>\n';
        data.experience.forEach(exp => {
            output += `${exp.position} | ${exp.company}, ${exp.location} | ${exp.period}\n`;
            exp.responsibilities.forEach(resp => {
                output += `• ${resp}\n`;
            });
            output += '\n';
        });
        
        output += '<div class="highlight">PROJECTS</div>\n';
        data.projects.forEach(proj => {
            output += `${proj.title} – ${proj.technologies} | ${proj.date}\n`;
            output += `${proj.description}\n\n`;
        });
        
        output += '<div class="highlight">COURSEWORK</div>\n';
        data.coursework.forEach(course => {
            output += `• ${course}\n`;
        });
        output += '\n';
        
        output += '<div class="highlight">CERTIFICATIONS</div>\n';
        data.certifications.forEach(cert => {
            output += `• ${cert.name} by ${cert.issuer}\n`;
        });
        output += '\n';
        
        output += '<div class="highlight">INTERESTS</div>\n';
        output += `• ${data.interests.join('\n• ')}`;
        
        return output;
    },
    
    // Theme command - toggles theme
    theme: function() {
        window.terminal.toggleTheme();
        return 'Theme toggled!';
    },
    
    // Social media links
    social: function() {
        return `
<div class="highlight">Social Links:</div>

These would normally contain your actual social media links.
For this demo, you can customize these in the data.js file:

• GitHub: https://github.com/yourusername
• LinkedIn: https://linkedin.com/in/yourusername
• Twitter: https://twitter.com/yourusername
`;
    },
    
    // Courses command - shows relevant coursework
    courses: function() {
        const courses = window.portfolioData.coursework;
        let output = '<div class="highlight">Relevant Coursework:</div>\n\n';
        
        courses.forEach(course => {
            output += `• ${course}\n`;
        });
        
        return output;
    },
    
    // Certs command - shows certifications
    certs: function() {
        const certifications = window.portfolioData.certifications;
        let output = '<div class="highlight">Certifications:</div>\n\n';
        
        certifications.forEach(cert => {
            output += `<b>${cert.name}</b> by ${cert.issuer}\n`;
        });
        
        return output;
    },
    
    // Interests command - shows personal interests
    interests: function() {
        const interests = window.portfolioData.interests;
        let output = '<div class="highlight">Personal Interests:</div>\n\n';
        
        interests.forEach(interest => {
            output += `• ${interest}\n`;
        });
        
        return output;
    },
    
    // Easter egg commands
    sudo: function() {
        return window.portfolioData.easterEggs.sudo;
    },
    
    exit: function() {
        return window.portfolioData.easterEggs.exit;
    },
    
    "rm -rf": function() {
        return window.portfolioData.easterEggs["rm -rf"];
    },
    
    hello: function() {
        return window.portfolioData.easterEggs.hello;
    },
    
    hi: function() {
        return window.portfolioData.easterEggs.hi;
    },
    
    // Handle anything that looks like a system command
    ls: function() {
        return 'Folders: projects/, education/, skills/, experience/\nFiles: README.md, contact.txt, resume.pdf';
    },
    
    cd: function(args) {
        return `Directory changed to ~/${args[0] || ''}`;
    },
    
    pwd: function() {
        return '/home/visitor/nitish-portfolio';
    },
    
    date: function() {
        return new Date().toString();
    },
    
    whoami: function() {
        return 'visitor - Welcome to Nitish Paramanik\'s portfolio!';
    },
    
    echo: function(args) {
        return args.join(' ');
    }
};