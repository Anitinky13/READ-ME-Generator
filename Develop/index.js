// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of the project.",
  },
  {
    type: "input",
    name: "Installation",
    message: "What is the installations instructions for the project",
  },
  {
    type: "input",
    name: "Usage",
    message: " What is the usage  information for the project?",
  },
  {
    type: "input",
    name: "Contribution",
    message: " What is the contribution of the guidelines for the project? ",
  },
  {
    type: "input",
    name: "Test",
    message: " What are the test instructions?",
  },
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
  {
    type: "list",
    name: "license",
    message: "Please choose one of the following licenses.",
    choices: ["MIT", "Apache", "IBM"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    fs.writeFileSync("./README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
