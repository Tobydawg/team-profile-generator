class Engineer {
    constructor(name, email, id, github) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = github;
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
      return "engineer";
    }
  

  getGithub() {
    return this.github;

  }
}
  
  module.exports = Engineer;