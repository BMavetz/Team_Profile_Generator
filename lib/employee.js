class employee {
    constructor(name, emplID, email){
        this.name = name;
        this.emplID = emplID;
        this.email = email;
    }

    getName() {
        return this.name;
    }
    getEmplId() {
        return this.emplID;
    }
    
    getEmail() {
        return this.email;
    }
}

module.exports = employee;