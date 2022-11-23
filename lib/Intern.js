const Employee = require("./Employee");
console.log(Employee);
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    return "Intern";
  }

  getSchool() {
    return "school";
  }
    
}

module.exports = Intern;