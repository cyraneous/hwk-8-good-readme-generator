var inquirer = require("inquirer"); //inquirer called
var fs = require("fs");
const markDown = require("./generateMarkdown"); //find markdown
//questions that will be asked

const questions = [
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "URL",
      message: "What is the URL of your project?",
    },
    {
      type: "input",
      name: "Title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "What is your project description?",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps to install your app?",
    },
    {
      type: "input",
      name: "usage",
      message: "How will this application be used?",
    },
    {
      type: "list",
      message: "What license will you use?",
      name: "license",
      choices: [ "MIT", "BSD", "AGPL",]
    },
    {
      type: "input",
      message: "Contributors?",
      name: "contributing",
    },
    {
      type: "input",
      name: "tests",
      message: "Please provide an example of how to run your app.",
    },

  ]

  function init() {
    // arrow function appends user input into readme
      inquirer.prompt(questions).then|(input) => {

    fs.appendFileSync("README.md", ("#" + input.title)+ "\n" + "\n", function(err) {

        if (err){
          console.log(err);
        }



    })

      }















  }




promptUser()
  .then(function (answers) {
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function () {
    console.log("Successfully wrote to index.html");
  })
  .catch(function (err) {
    console.log(err);
  });
