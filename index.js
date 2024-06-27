// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "what is the title for this project",
        type: "input"
    },
    {
        name: "description",
        message: "describe your project",
        type: "input"
    },
    {
        name: "installation",
        message: "what do you need to intall for this project",
        type: "input"
    },
    {
        name: "usage",
        message: "what is the usage for this project",
        type: "input"
    },
    {
        name: "credits",
        message: "what are the credits for this project",
        type: "input"
    },
    {
        name: "license",
        message: "what is the license for this project",
        type: "input"
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err) throw err;
        console.log("File Written")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data)
        const result = generateMarkdown(data)
        console.log(result)
        writeToFile("Example.md", result)
        // fs.writeFile("Example.md", result, function(err){
        //     if (err) throw err;
        //     console.log("File Written")
        // })
    })
}

// Function call to initialize app
init();
