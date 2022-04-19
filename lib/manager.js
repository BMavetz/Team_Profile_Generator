const employee = require('./employee');

class manager extends employee {
    constructor(name, emplID, email, officeNum){
        super(name, emplID, email);
        this.officeNum = officeNum;
    }

    getGithub(){
        return this.officeNum;
    }

}

module.exports = manager;