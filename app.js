const inquirer = require("inquirer");
// const Manager = require("./lib/manager");
const count = 0
title = '';

function getRole(){
   
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
    ]).then(res => {
        console.log("title is: " + res.title);
        title = res.title;
        //is catching manager as title but not passing into function//
        buildTeam(res.title);
    }).catch(err=>{
        console.log(err + "try again.")
        process.exit(1);
        
    })    
    // console.log(title);
} getRole();


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
            type: "input",
            name: "email",
            message: "Please enter your email."
        }
      
    ]).then(res => {
        console.log(res.name, res.email);
          getRole();
    }).catch(err => {
        console.log(err);
        process.exit(1);
    })
    
  
}

function newIntern() {

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: " Please Enter your name."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email."
        },
        {
            type: "input",
            name: "school",
            message: "What school did you go to?"
        }
    ]).then(res =>{
        return console.log("Name: " + res.name,'\n',"Email: " + res.email, "\n", "School: " + res.school)
    }).catch(err =>{
        console.log(err + "try again.")
        process.exit(1);
    })
    getRole()
}


function newEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your name."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email."
        },
        
    ]).then(res =>{
        return console.log("Name: " + res.name,'\n',"Email: " + res.email)
    }).catch(err =>{
        console.log(err + "try again.")
        process.exit(1);
    })
}
//function that handles which employee object to build//
function buildTeam(res){
    // console.log(res);
    if(res == "Manager"){
        newManager();
    }else if(res === "Intern"){
        newIntern();
    }else if(res === "Engineer"){
        newEngineer();
    }
    // getRole();
}