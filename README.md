# 🖥️ Terminal Portfolio - Nitish Paramanik

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://github.com/Nitishparamanik/TerminalPortfolio-webdevtask-5)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> An interactive terminal-style portfolio website that showcases my journey as a Computer Science Engineering student at C. V. Raman Global University.
![image](https://github.com/user-attachments/assets/8e72a022-fd72-486d-b076-fd925938a06c)


## 🚀 Features

- **🖥️ Interactive Terminal Interface** - Navigate through my portfolio using real terminal commands
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **🌓 Dark/Light Theme Toggle** - Switch between themes for comfortable viewing
- **⚡ Fast & Lightweight** - Pure vanilla JavaScript with no external dependencies
- **🎯 Tab Completion** - Auto-complete commands just like a real terminal
- **📚 Command History** - Navigate through previous commands using arrow keys
- **🎨 Smooth Animations** - Engaging visual feedback and transitions
- **🥚 Easter Eggs** - Hidden commands for the curious visitors

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Architecture:** Modular ES6 modules for maintainability
- **Styling:** Custom CSS with CSS Grid and Flexbox
- **Responsive Design:** Mobile-first approach with CSS media queries

## 📁 Project Structure

```
terminal-portfolio/
├── index.html              # Main HTML file
├── styles.css              # Complete styling
├── js/
│   ├── main.js            # Core terminal functionality
│   ├── data.js            # Portfolio data configuration
│   ├── commands.js        # Terminal command implementations
│   └── renderUtils.js     # Utility functions for rendering
└── README.md              # Project documentation
```

## 🎮 Available Commands

| Command | Description |
|---------|-------------|
| `help` | Display all available commands |
| `about` | Learn more about me |
| `education` | View my educational background |
| `skills [category]` | Display technical and soft skills |
| `experience` | Show my work experience |
| `projects` | View my portfolio projects |
| `project <n>` | Get detailed info about a specific project |
| `contact` | Display my contact information |
| `resume` | View my complete resume |
| `courses` | List relevant coursework |
| `certs` | Show my certifications |
| `interests` | Display my personal interests |
| `theme` | Toggle between dark/light themes |
| `clear` | Clear the terminal screen |

### 🕹️ Pro Tips
- Use **Tab** for command auto-completion
- Use **↑/↓ arrow keys** to navigate command history
- Try typing `sudo`, `exit`, or `hello` for some fun surprises!

## 🚀 Quick Start

### Option 1: Direct Download
1. Download all files from this repository
2. Open `index.html` in your web browser
3. Start exploring with the `help` command!

### Option 2: Clone Repository
```bash
git clone https://github.com/your-username/terminal-portfolio.git
cd terminal-portfolio
# Open index.html in your browser or use a local server
```

### Option 3: GitHub Pages Deployment
1. Fork this repository
2. Go to repository Settings → Pages
3. Select source branch (main/master)
4. Access your portfolio at `https://your-username.github.io/terminal-portfolio`

## 🎨 Customization

### Updating Personal Information
All personal data is centralized in `js/data.js`. Simply update the data object:

```javascript
export const data = {
    personal: {
        name: "Your Name",
        title: "Your Title",
        // ... update other fields
    },
    // ... update other sections
};
```

### Adding New Commands
Extend the commands object in `js/commands.js`:

```javascript
export const commands = {
    // ... existing commands
    
    newcommand: function(args) {
        return "Your custom command output";
    }
};
```

### Customizing Themes
Modify CSS variables in `styles.css`:

```css
:root {
    --bg-color: #your-color;
    --accent-color: #your-accent;
    /* ... other variables */
}
```

## 🏗️ Development Setup

For local development with live reload:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if you have npx)
npx serve .

# Using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Found a bug or have a suggestion? I'd love to hear from you!

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About Me

I'm **Nitish Paramanik**, a passionate Computer Science Engineering student at C. V. Raman Global University, Bhubaneswar. I specialize in frontend development with expertise in Java, Python, and React.js. This portfolio represents my journey in building intuitive and responsive web applications.

### 🎯 Current Focus
- 🌱 Learning advanced React.js patterns and state management
- 🔭 Exploring Machine Learning and AI applications
- 💡 Contributing to open-source projects
- 🚀 Building full-stack web applications

## 🌟 Acknowledgments

- **ASCII Art** - Used for the terminal welcome message
- **Color Palette** - Inspired by popular terminal themes
- **Command Structure** - Based on Unix/Linux terminal conventions
- **Font** - Courier New for authentic terminal experience

## 📞 Contact

- **Email:** [tempmail]
- **Phone:** [1234679]
- **GitHub:** [github.com/your-username]
- **LinkedIn:** [linkedin.com/in/your-profile]

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Nitish Paramanik](https://github.com/Nitishparamanik)

</div>
