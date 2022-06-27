// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ("Apache-2.0") {
    license =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "";
  }
  return license;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ("Apache-2.0") {
    license = "(https://opensource.org/licenses/Apache-2.0)";
  } else {
    return "";
  }
  return license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if ("Apache-2.0") {
    section = '("potential-enigma/utils/LICENSE.txt")';
  } else {
    return "";
  }
  return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ## Description
  ${answers.description}
   ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#Contributions)
  - [License](#license)
  - [Tests](#tests)
  
  ## Installation
  To install dependencies, run the following command:
  \`\`\`
  ${answers.Installation}
  \`\`\`
  ## Usage
  ${answers.Usage}
 ## Contributions
${answers.Contribution}
  ## License
  ${answers.license}
  ${renderLicenseLink(answers.license)}
  ${renderLicenseSection(answers.license)}
  [Link to Apache-2.0 license](https://opensource.org/licenses/Apache-2.0)
  ## Tests
  In order to run tests,use command: 
  \`\`\`
  ${answers.Tests}
  \`\`\`
  ## Questions
 
### Reach out via:
 GitHub: ${answers.name}
 Email: ${answers.Email}
[link to README tutorial video](https://drive.google.com/file/d/13joJ7ZBBbG7kM0vovDrp6i-cSZAUfdQT/view?usp=sharing)
`;
}
module.exports = generateMarkdown;
