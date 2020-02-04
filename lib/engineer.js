var employee = require("./employee.js");
//build new engineer object//
class Engineer extends Employee{
    constructor(github){
        this.github = github;
        super(name, id, title)
        this.name = name;
        this.id = id;
        this.title = title;
    }
    
    getRole(){
        return ("Engineer")
    }
}
const engineer = new Engineer(name, id, title, id, title);
rectangle.printInfo(Intern);