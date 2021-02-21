class Manager {
  constructor(name, email, id, phone) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.phone = phone;
    
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
    return "manager";
  }

  getPhone() {
    return this.phone;
  }
}

module.exports = Manager;
