const inquirer = require("inquirer");

class Employee {
    constructor(name,id,title,role){
        this.name = name;
        this.id = id;
        this.title = title;
        this.role = role;
    }
    getName(){
      return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        
        return this.email
    }
    getRole(){

        return this.role;
    }
}

