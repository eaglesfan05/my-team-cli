const inquirer = require("inquirer");
const fs = require("fs");

//function to get employee role and trigger correct function//
function getRole(){
   
    inquirer.prompt([
        {
           type: "list" ,
           name: "title",
           message: "What is your title?",
           choices: [
               "Manager",
               "Engineer",
               "Intern"
           ]
        }
    ]).then(res => {
        console.log("title is: " + res.title);
        title = res.title;
       
        buildTeam(res.title);
    }).then(res =>{
        fs.writeFileSync("team.txt", `Lets Put a team Together`, "utf8", function(err){
            if(err){
                console.log(err);
            }else{
                console.log("success");
            }
        })
    })
    .catch(err=>{
        console.log(err + "try again.")
        process.exit(1);
        
    })    
   
} getRole();

//get manager info//
function newManager(){
   
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your name."
        },
        {
            type: "input",
            name: "id",
            message: "Please enter your ID."
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
      
        title = "Manager";
      
        console.log("Name: " + res.name, "\n" + "ID: " + res.id + '\n',   + "Email: " + res.email + "\n", "Office Number: " + res.officeNumber);
        //writes manager info to file//
        fs.appendFile("team.txt", `\n{Title: ${title} \n Name: ${res.name} \n ID: ${res.id} \n Email: ${res.email} \n Office Number:${res.officeNumber}}`, 'utf8', function(err){
           
            if(err){
                console.log("Did not write");
            }else{
                console.log("success");
                
            }
        })
        
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
            name: "id",
            message: "Please enter your ID."
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
        title = "Intern"
        console.log("Name: " + res.name, '\n', "ID: " + res.id, '\n',"Email: " + res.email, "\n", "School: " + res.school);
        // getRole();
        fs.appendFile("team.txt", `\n{Title: ${title}Name: ${res.name} \nEmail: ${res.email} \nSchool: ${res.school}}`, function(err){
           
            if(err){
                console.log("Did not write");
            }else{
                console.log("success");
                
            }
        })
        getRole();
    }).catch(err =>{
        console.log(err + "try again.")
        process.exit(1);
    })
    
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
            name: "id",
            message: "Please enter your ID."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email."
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GitHub Username."
        }
        
    ]).then(res => {
        title = "Engineer"
        console.log("Name: " + res.name, "\n" + "ID: " + res.id + '\n',   + "Email: " + res.email + "\n", "Github: " + res.github);


        fs.appendFile("team.txt", `{Title: ${title} Name: ${res.name} \nID: ${res.id} \nEmail: ${res.email} \nGithub:${res.github}}`, 'utf8', function(err){
           
            if(err){
                console.log("Did not write");
            }else{
                console.log("success");
                
            }
        })
        
        getRole();
    }).catch(err => {
        console.log(err);
        process.exit(1);
    })
}


//function that handles which employee object to build//
function buildTeam(res){
    // console.log(res);
    if(res === "Manager"){

        newManager();
    }else if(res === "Intern"){
        newIntern();
    }else if(res === "Engineer"){
        newEngineer();
    }
    // getRole();
}