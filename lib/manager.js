const employee = require('./employee');

class manager extends employee {
    constructor(name, emplID, email, github){
        super(name, emplID, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

}

module.exports = manager;