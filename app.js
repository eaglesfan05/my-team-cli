const inquirer = require("inquirer");
// const Manager = require("./lib/manager");
const count = 0
let title = "";

function getRole(title){
   
    inquirer.prompt([
        {
           type: "list" ,
           name: "title",
           choices: [
               "Manager",
               "Engineer",
               "Intern"
           ]
        }
    ]).then(res=>{
        buildTeam(title);
    console.log("title is: " + title);
    })
    
    // console.log(title);
}getRole(title);


function newManager(){
   
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
}



//function that handles which employee object to build//
function buildTeam(title){
    if(title === "Manager"){
        newManager();
    }else if(title === "Intern"){
        newIntern();
    }else if(title === "Engineer"){
        newEngineer();
    }
    getRole();
}