// 
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

    ## License
    ${data.license}
    `
    console.log(template);

    writeFile();
}



// function results()


inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            name: "title",
            message: "What's the name of your repository?",
        },
        // include more questions for other parameters
        {
            type: "input",
            name: "describe",
            message: "Please provide a description of your repository.",
        },
        {
            type: "list",
            name: "license",
            message: "What's licenses does your repository have?",
            choices: ["MIT", "Apache license 2.0", "ISC", "Other"],
        }
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