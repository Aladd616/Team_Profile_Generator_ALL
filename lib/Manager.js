const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, office_number) {
        super (name, id, email);
        this.office_number = office_number; 
    }
    get_Role() {
        return "Manager";
    }
    get office_number() {
        return this.office_number;
    }
}

module.exports = Manager;