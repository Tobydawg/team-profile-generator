//const {TestResult} = require('@jest/types');
 //jest.mock("../lib/Manager");
const Manager = require("../lib/Manager.js");


// const testManager = new Manager('t', 'eroomybot@gmail.com', 3, 'employee', 'twmoore' );
//const testManager = new Manager('toby', 'eroomybot@gmail.com', 'manager', 3, 101 );

test("entered their name", () => {
const testManager = new Manager('toby', 'eroomybot@gmail.com', 3, 101 );
expect(testManager.getName()).toBe('toby')
 // expect(testManager.name.length).toBeGreaterThan(2)
})

test("entered email address", () => {
    const testManager = new Manager('toby', 'eroomybot@gmail.com', 3, 101 );
  expect(testManager.getEmail()).toEqual(expect.stringContaining("@"))
})

test("is an actual manager", () => {
    const testManager = new Manager('toby', 'eroomybot@gmail.com', 3, 101 );
  expect(testManager.getRole()).toBe("manager")
})

test("their phone number", () => {
    const testManager = new Manager('toby', 'eroomybot@gmail.com', 3, 101 );
  expect(testManager.getPhone()).toEqual(expect.any(Number))
})

test("their numerical id", () => {
    const testManager = new Manager('toby', 'eroomybot@gmail.com', 3, 101 );
  expect(testManager.getId()).toEqual(expect.any(Number))
})
