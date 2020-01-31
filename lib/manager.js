var employee = require("./employee.js");
var fs = require('fs')

    class Manager{
        constructor(name, id, title, officeNumber){
            this.name = name;
            this.id = id;
            this.officeNumber = officeNumber;
    
           
        }
        getRole(){
            return Manager;
        }
    }
    const manager = new Manager;
    fs.appendFile("team.txt", manager, function(err){
        if(err){
            console.log(err)
        }else{
            console.log("New Manager")
        }
    })
    
    module.exports(Manager);

