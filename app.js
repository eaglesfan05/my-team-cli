const inquirer = require("inquirer");
const count = 0

function newManager(){
    count = count++
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your name."
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter your office number."
        },
        {
            type: "type",
            name: "email",
            message: "Please enter your email."
        }
    ])
    buildTeam();
}newManager();



//function that handles which employee object to build//
function buildTeam (title){
    if(title === Manager){
        newManager();
    }else if(title === Intern){
        newIntern();
    }else if(title === Engineer){
        newEngineer();
    }
}