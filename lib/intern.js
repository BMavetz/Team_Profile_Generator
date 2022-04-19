const employee = require('./employee');

class intern extends employee {
    constructor(name, emplID, email, school){
        super(name, emplID, email);
        this.school = school;
    }

    getGithub(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = intern;