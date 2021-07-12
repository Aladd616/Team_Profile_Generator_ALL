class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
     get_Name() {
        return this.name;
    }
    get_ID() {
        return this.id;
    }
    get_Email() {
        return this.email;
    }
    get_Role() {
        return "Employee";
    }
}

module.exports = Employee;