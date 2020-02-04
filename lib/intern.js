var employee = require("./employee.js");
var inquirer = require('inquirer');
var fs = require('fs');
//build new intern object//
class Intern extends Employee{
    constructor(school){
        this.school = school;

        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getRole(){
        return Intern;
    }
}
intern = new Intern(name, id, email, school);
module.exports(Intern)