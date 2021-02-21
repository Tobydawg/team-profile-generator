class Intern {
    constructor(name, email, id, school) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.school = school;
    }
  
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  
    getRole() {
      return "intern";
    }
  

  getSchool() {
    return this.school;

  }
}
  
  module.exports = Intern;