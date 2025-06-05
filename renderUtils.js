// Utility functions for rendering content in the terminal
export const renderUtils = {
    // Render skill bars with percentages
    renderSkillBars: function(skills) {
        if (!skills || skills.length === 0) return 'No skills to display.\n';
        
        let output = '';
        
        skills.forEach(skill => {
            output += `<div class="skill-name"><span>${skill.name}</span><span>${skill.level}%</span></div>`;
            output += `<div class="skill-bar">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>`;
        });
        
        return output;
    },
    
    // Format date to readable string
    formatDate: function(dateString) {
        if (!dateString) return '';
        
        const options = { year: 'numeric', month: 'long' };
        
        // Handle both date objects and strings
        let date;
        try {
            date = new Date(dateString);
            return date.toLocaleDateString('en-US', options);
        } catch (e) {
            return dateString; // Return as is if parsing fails
        }
    },
    
    // Create a simple table
    createTable: function(headers, rows) {
        let table = '<table>';
        
        // Add headers
        if (headers && headers.length > 0) {
            table += '<tr>';
            headers.forEach(header => {
                table += `<th>${header}</th>`;
            });
            table += '</tr>';
        }
        
        // Add rows
        if (rows && rows.length > 0) {
            rows.forEach(row => {
                table += '<tr>';
                row.forEach(cell => {
                    table += `<td>${cell}</td>`;
                });
                table += '</tr>';
            });
        }
        
        table += '</table>';
        return table;
    },
    
    // Create a project card
    createProjectCard: function(project) {
        return `<div class="project-card">
            <div class="project-title">${project.title}</div>
            <div class="project-description">${project.description}</div>
            <div class="project-tech">Technologies: ${project.technologies}</div>
            ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ''}
        </div>`;
    },
    
    // Format a list with bullet points
    bulletList: function(items) {
        if (!items || items.length === 0) return '';
        
        let output = '';
        items.forEach(item => {
            output += `• ${item}\n`;
        });
        
        return output;
    },
    
    // Create ASCII art text (simple version)
    asciiArt: function(text) {
        // This is a very simple implementation
        // For a real portfolio, consider using a proper ASCII art library
        const lines = [];
        lines.push('  ' + '_'.repeat(text.length + 2));
        lines.push(' /' + ' '.repeat(text.length + 2) + '\\');
        lines.push('| ' + text + ' |');
        lines.push(' \\' + '_'.repeat(text.length + 2) + '/');
        
        return lines.join('\n');
    },
    
    // Typwriter effect (not actually implemented in this static version)
    typewriterEffect: function(element, text, speed = 50) {
        // In a real implementation, this would animate text typing
        // For this static rendering, we just return the text
        return text;
    },
    
    // Create a tree view of directories
    renderTree: function(structure, indent = '') {
        let output = '';
        
        Object.keys(structure).forEach((key, index, array) => {
            const isLast = index === array.length - 1;
            const prefix = isLast ? '└── ' : '├── ';
            
            output += `${indent}${prefix}${key}\n`;
            
            if (typeof structure[key] === 'object') {
                const newIndent = indent + (isLast ? '    ' : '│   ');
                output += this.renderTree(structure[key], newIndent);
            }
        });
        
        return output;
    }
};