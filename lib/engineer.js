var employee = require("./employee.js");

class Engineer extends Employee{
    constructor(github){
        this.github = github;
        super(name, id, title)
    }
    getRole(){
        return ("Engineer")
    }
}