// Generate a professional ReadMe file

var inquirer = require('inquirer');
const fs = require('fs');
var template = '';

function writeFile() {
    fs.writeFile('README.md', template, err => {
        if (err) {
            console.error(err)
            return
        }
        //file written successfully
    })
}

var generate = function (data) {
    // generate this file 
    // create a template to inject data into
    template = `
    # Title
    ${data.title}

    ## Description
    ${data.describe}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${data.license}

    ## Contribute
    ${data.contribute}

    ## Test
    ${data.test}

    ## Questions
    ${data.questions}
    `
    console.log(template);

    writeFile();
}

inquirer
    .prompt([
        /* Pass your questions in here */
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
        // include table of contents that links important documents
        // {
        //     type: "input",
        //     name: "tableContents",
        //     message: "",
        // },
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
            choices: ["MIT", "Apache license 2.0", "ISC", "Other"],
        },
        {
            type: "input",
            name: "contribute",
            message: "What contributions did you make to this repository?",
        },
        {
            type: "input",
            name: "test",
            message: "",
        },
        {
            type: "input",
            name: "questions",
            message: "",
        },
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        // create new function called generate 
        generate(answers);
        // display results
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });