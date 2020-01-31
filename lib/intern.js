var employee = require("./employee.js");
var inquirer = require('inquirer');
var fs = require('fs');
class Intern extends Employee{
    constructor(school){
        this.school = school;

        super();
    }
    getRole(){
        return Intern;
    }
    getSchool(){
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message:  "What school did you go to?"         
            },
                    
        ])

    }
}getSchool();

module