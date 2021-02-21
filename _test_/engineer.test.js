//const {TestResult} = require('@jest/types');
 //jest.mock("../lib/Engineer");
 const Engineer = require("../lib/Engineer.js");


 // const testEngineer = new Engineer('t', 'eroomybot@gmail.com', 3, 'employee', 'twmoore' );
 //const testEngineer = new Engineer('toby', 'eroomybot@gmail.com', 'Engineer', 3, 101 );
 
 test("entered their name", () => {
 const testEngineer = new Engineer('toby', 'eroomybot@gmail.com', 101, 'github.com' );
 expect(testEngineer.getName()).toBe('toby')
  // expect(testEngineer.name.length).toBeGreaterThan(2)
 })
 
 test("entered email address", () => {
     const testEngineer = new Engineer('toby', 'eroomybot@gmail.com', 101, 'github.com' );
   expect(testEngineer.getEmail()).toEqual(expect.stringContaining("@"))
 })
 
 test("is an actual engineer", () => {
     const testEngineer = new Engineer('toby', 'eroomybot@gmail.com', 101, 'github.com' );
   expect(testEngineer.getRole()).toBe("engineer")
 })
 
 test("their github addy", () => {
     const testEngineer = new Engineer('toby', 'eroomybot@gmail.com', 101, 'github.com' );
   expect(testEngineer.getGithub()).toEqual(expect.stringContaining(".com"))
 })
 
 test("their numerical id", () => {
     const testEngineer = new Engineer('toby', 'eroomybot@gmail.com', 101, 'github.com' );
   expect(testEngineer.getId()).toEqual(expect.any(Number))
 })