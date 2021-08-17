// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (`${this.license}` === "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT);`
    } else if (`${this.license}` === "Apache") {
        return `[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0);`
    } else if (`${this.license}` === "ISC") {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC);`
    } else if (`${this.license}` === "Zlib") {
        return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib);`
    } else if (license === "none") {
        return "no license selected!"
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "none") {
        return "";
    } else if (license === "MIT") {
        return `[MIT](https://opensource.org/licenses/MIT)`
    }
    else if (license === "Apache") {
        return `[Apache](https://opensource.org/licenses/Apache-2.0)`
    } else if (license === "ISC") {
        return `[ISC](https://opensource.org/licenses/ISC)`
    } else if (license === "Zlib") {
        return `[Zlib](https://opensource.org/licenses/Zlib)`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
    return template = `
    
# Title
    ${data.title}


## Table of Contents 
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Test)
  * [Questions](#Questions)


${renderLicenseBadge(data.license)}

## Description
    ${data.describe}

## Demo Video
    ${data.demo}

## User Story
    ${data.story}

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

## GitHub
    ${data.github}

## Email
    ${data.email}
    `
};

module.exports = generateMarkdown;

