import { commands } from './commands.js';
import { data } from './data.js';
import { renderUtils } from './renderUtils.js';

// Main terminal functionality
const terminal = {
    commandInput: null,
    terminalOutput: null,
    commandHistory: [],
    historyIndex: -1,
    
    init() {
        this.commandInput = document.getElementById('command-input');
        this.terminalOutput = document.getElementById('terminal-output');
        
        this.commandInput.addEventListener('keydown', this.handleKeyDown.bind(this));
        
        // Theme toggle functionality
        document.getElementById('theme-toggle').addEventListener('click', this.toggleTheme);
        
        // Apply stored theme if any
        if (localStorage.getItem('theme') === 'light') {
            document.documentElement.classList.add('light-theme');
        }
        
        // Focus the input field
        this.commandInput.focus();
        
        // Handle clicks anywhere on terminal to focus input
        document.querySelector('.terminal-container').addEventListener('click', () => {
            this.commandInput.focus();
        });
        
        // Button actions
        document.querySelector('.close').addEventListener('click', () => {
            this.writeToTerminal("💔 You can't close me that easily! Try a refresh instead.");
        });
    },
    
    handleKeyDown(e) {
        if (e.key === 'Enter') {
            const command = this.commandInput.value.trim().toLowerCase();
            this.processCommand(command);
            this.commandInput.value = '';
            
            // Add to history if not empty
            if (command) {
                this.commandHistory.push(command);
                this.historyIndex = this.commandHistory.length;
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.navigateHistory(-1);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.navigateHistory(1);
        } else if (e.key === 'Tab') {
            e.preventDefault();
            this.autocompleteCommand();
        }
    },
    
    navigateHistory(direction) {
        if (this.commandHistory.length === 0) return;
        
        this.historyIndex += direction;
        
        // Keep within bounds
        if (this.historyIndex < 0) this.historyIndex = 0;
        if (this.historyIndex > this.commandHistory.length) this.historyIndex = this.commandHistory.length;
        
        // Set input value
        if (this.historyIndex === this.commandHistory.length) {
            this.commandInput.value = '';
        } else {
            this.commandInput.value = this.commandHistory[this.historyIndex];
        }
        
        // Move cursor to end
        setTimeout(() => {
            this.commandInput.selectionStart = this.commandInput.value.length;
            this.commandInput.selectionEnd = this.commandInput.value.length;
        }, 0);
    },
    
    autocompleteCommand() {
        const input = this.commandInput.value.trim().toLowerCase();
        
        if (!input) return;
        
        // Find matching commands
        const availableCommands = Object.keys(commands);
        const matches = availableCommands.filter(cmd => cmd.startsWith(input));
        
        if (matches.length === 1) {
            // Single match - complete it
            this.commandInput.value = matches[0];
        } else if (matches.length > 1) {
            // Multiple matches - display options
            this.writeCommandLine(input);
            this.writeToTerminal('Possible commands: ' + matches.join(', '));
        }
    },
    
    processCommand(command) {
        // Write command to terminal
        this.writeCommandLine(command);
        
        if (!command) return;
        
        // Special case for clear
        if (command === 'clear' || command === 'cls') {
            this.terminalOutput.innerHTML = '';
            return;
        }
        
        // Parse command (simple split by space)
        const args = command.split(' ');
        const primaryCommand = args[0];
        
        // Check if command exists
        if (commands[primaryCommand]) {
            try {
                const output = commands[primaryCommand](args.slice(1));
                if (output) {
                    this.writeToTerminal(output);
                }
            } catch (error) {
                this.writeError(`Error executing command: ${error.message}`);
            }
        } else {
            this.writeError(`Command not found: ${primaryCommand}. Type 'help' for available commands.`);
        }
    },
    
    writeCommandLine(command) {
        const commandLine = document.createElement('div');
        commandLine.className = 'command-line';
        
        const prompt = document.createElement('span');
        prompt.className = 'prompt';
        prompt.textContent = 'visitor@nitish-portfolio:~$';
        
        const commandText = document.createElement('span');
        commandText.className = 'command';
        commandText.textContent = ' ' + command;
        
        commandLine.appendChild(prompt);
        commandLine.appendChild(commandText);
        this.terminalOutput.appendChild(commandLine);
    },
    
    writeToTerminal(content, className = 'result') {
        const resultElement = document.createElement('div');
        resultElement.className = className;
        
        // If content is HTML, use innerHTML
        if (content.includes('<') && content.includes('>')) {
            resultElement.innerHTML = content;
        } else {
            resultElement.textContent = content;
        }
        
        this.terminalOutput.appendChild(resultElement);
        this.scrollToBottom();
    },
    
    writeError(message) {
        this.writeToTerminal(message, 'error');
    },
    
    writeSuccess(message) {
        this.writeToTerminal(message, 'success');
    },
    
    scrollToBottom() {
        this.terminalOutput.scrollTop = this.terminalOutput.scrollHeight;
    },
    
    toggleTheme() {
        document.documentElement.classList.toggle('light-theme');
        
        // Store theme preference
        if (document.documentElement.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    }
};

// Initialize the terminal when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    terminal.init();
    
    // Export terminal for use in other modules
    window.terminal = terminal;
});

// Make data and renderUtils available to commands
window.portfolioData = data;
window.renderUtils = renderUtils;