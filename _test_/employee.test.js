//const {TestResult} = require('@jest/types');
 //jest.mock("../lib/Employee");
 const Employee = require("../lib/Employee.js");


 // const testEmployee = new Employee('t', 'eroomybot@gmail.com', 3, 'employee', 'twmoore' );
 //const testEmployee = new Employee('toby', 'eroomybot@gmail.com', 'Employee', 3, 101 );
 
 test("entered their name", () => {
 const testEmployee = new Employee('toby', 'eroomybot@gmail.com', 3, );
 expect(testEmployee.getName()).toBe('toby')
  // expect(testEmployee.name.length).toBeGreaterThan(2)
 })
 
 test("entered email address", () => {
     const testEmployee = new Employee('toby', 'eroomybot@gmail.com', 3, );
   expect(testEmployee.getEmail()).toEqual(expect.stringContaining("@"))
 })
 
 test("is an actual employee", () => {
     const testEmployee = new Employee('toby', 'eroomybot@gmail.com', 3, );
   expect(testEmployee.getRole()).toBe("employee")
 })
 
//  test("their phone number", () => {
//      const testEmployee = new Employee('toby', 'eroomybot@gmail.com', 3, 101 );
//    expect(testEmployee.getPhone()).toEqual(expect.any(Number))
//  })
 
 test("their numerical id", () => {
     const testEmployee = new Employee('toby', 'eroomybot@gmail.com', 3, );
   expect(testEmployee.getId()).toEqual(expect.any(Number))
 })