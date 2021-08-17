// Generate a professional ReadMe file

// Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');




// Create an array of questions for user input
const questions = [
    // Pass questions through here
    {
        type: "input",
        name: "title",
        message: "What's the name of your repository?",
    },
    {
        type: "input",
        name: "describe",
        message: "Provide a description of your repository.",
    },
    {
        type: "input",
        name: "installation",
        message: "Provide specific steps needed to install this repository.",
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use this application?",
    },
    {
        type: "list",
        name: "license",
        message: "What's licenses does your repository have?",
        choices: ["MIT", "Apache license 2.0", "ISC", "Zlib", "None"],
    },
    {
        type: "input",
        name: "contribute",
        message: "What contributions did you make to this repository?",
    },
    {
        type: "input",
        name: "test",
        message: "What is the structure of the application?",
    },
    {
        type: "input",
        name: "questions",
        message: "Provide your contact information in case someone wants to contact you?",
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];


// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);

            writeFile('README.md', answers);

        })
};

// Create a function to write README file
function writeFile(file, data) {
    return fs.writeFileSync(file, generateMarkdown(data));
}

// Function call to initialize app
init();
