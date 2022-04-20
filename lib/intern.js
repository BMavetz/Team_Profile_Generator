const employee = require('./employee');

class intern extends employee {
    constructor(name, emplID, email, school){
        super(name, emplID, email);
        this.school = school;
    }

    getRole(){
        return "Intern";
    }
}

module.exports = intern;