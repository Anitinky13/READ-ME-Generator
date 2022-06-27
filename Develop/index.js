// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  //ask the title of the project
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  //ask for description
  {
    type: "input",
    name: "description",
    message: "Enter  the description of the project.",
  },
  {
    type: "input",
    name: "Installation",
    message: "What command should be used to install the project?",
    default: "npm install, npm require",
  },
  {
    type: "input",
    name: "Tests",
    message: " What command should be used to test the project",
    default: "npm test",
  },
  //contributions
  {
    type: "input",
    name: "Contribution",
    message: " What is important to know about contributing to the project? ",
  },
  //usage guidelines
  {
    type: "input",
    name: "Usage",
    message: "Anything a user should know about using this repository?",
  },
  //ask for username to github
  {
    type: "input",
    name: "name",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "Email",
    message: "What is your email address?",
  },
  //license
  {
    type: "list",
    name: "license",
    message: "What license would you like to choose for your project?.",
    choices: ["MIT", "Apache-2.0", "IBM", "Mozilla Public", "The Unlicense"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(fileName);
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    fs.writeFileSync("./README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
