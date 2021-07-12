const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, GitHub) {
        super (name, id, email);
        this.GitHub = GitHub; 
    }
    get_Role() {
        return "Engineer";
    }
    get GitHub() {
        return this.GitHub;
    }
}

module.exports = Engineer;

