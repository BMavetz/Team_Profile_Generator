const employee = require('./employee');

class manager extends employee {
    constructor(name, emplID, email, officeNum){
        super(name, emplID, email);
        this.officeNum = officeNum;
    }

    getofficeNum(){
        return this.officeNum;
    }
    getRole(){
        return "Manager";
    }

}

module.exports = manager;