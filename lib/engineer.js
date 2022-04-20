const employee = require('./employee');

class engineer extends employee {
    constructor(name, emplID, email, github){
        super(name, emplID, email);
        this.github = github;
    }

    getRole(){
        return "Engineer";
    }

}

module.exports = engineer;