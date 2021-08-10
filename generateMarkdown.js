// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
//     if {

//     }
//     else {
//         return null;
//     }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return template = `# Title
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
    // console.log(template);

    // writeFile();

};

module.exports = generateMarkdown;
}
