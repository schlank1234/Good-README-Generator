//Loading required Modules
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const Choices = require("inquirer/lib/objects/choices");
const fs = require("fs")
// array of questions for user
const questions = [{
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },

  //rest of the questions here....
  {
    type: "input",
    name: "titleProject",
    message: "What is the title of your project?"
  },

  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project."
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "Please provide a table of contents for your project?"
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install the project?"
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which open-sources license do you have?',
    choices: ['MIT', 'GNU', 'Mozilla'],
  },
  {
    type: "input",
    name: "contributors",
    message: "Who else is contributing to the overall project sucess?"
  },
  {
    type: "input",
    name: "tests",
    message: "How do you properly run tests for your program?"
  },
  {
    type: "input",
    name: "email",
    message: "For any further questions, please insert your email address here."
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  })
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      const parameterData = generateMarkdown(answers);
      writeToFile("ReadMe.md", parameterData);

    });

}



// function call to initialize program
init();