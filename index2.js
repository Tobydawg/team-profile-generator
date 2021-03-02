// const Intern = require("./lib/Intern");
// const Manager = require("./lib/Manager");
// const inquirer = require("inquirer");
// const Engineer = require("./lib/Engineer");
// const teamArr = [];
// const idOfArray = [];
// const fs = require("fs");
// const path = require("path");
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");
// const render = require("./src/page-template.js");


// //function menu() {
//   const employeeQs = () => {
//     return (
//       inquirer
//         .prompt([
//           {
//             type: "input",
//             name: "name",
//             message: "What is your name? (Required)",
//             validate: (nameInput) => {
//               if (nameInput) {
//                 return true;
//               } else {
//                 console.log("Please enter your name!");
//                 return false;
//               }
//             },
//           },

//           {
//             type: "input",
//             name: "email",
//             message: "What is your email? (Required)",
//             validate: (emailInput) => {
//               if (emailInput) {
//                 return true;
//               } else {
//                 console.log("Please enter your email!");
//                 return false;
//               }
//             },
//           },

//           {
//             type: "input",
//             name: "id",
//             message: "What is your ID? (Required)",
//             validate: (idInput) => {
//               if (idInput) {
//                 return true;
//               } else {
//                 console.log("Please enter your ID!");
//                 return false;
//               }
//             },
//           },

//           {
//             name: "role",
//             type: "list",
//             message: "What is your Role? (Required)",
//             choices: ["Intern", "Manager", "Engineer"],
//           },
//         ])

//         // html.push(
//         //     team
//         //       .filter((engineer) => engineer.getRole() === "engineer")
//         //       .map((engineer) => createEngineer(engineer))

//         //)

//         .then(function (answers) {
//           if (answers.answerRole === "Engineer") {
//             engineerQs(answers);
//           } else if (answers.answerRole === "Intern") {
//             internQs(answers);
//           } else {
//             managerQs(answers);
//           }
//           createTeam();
//         })
       
//     ); 

//     function engineerQs() {
//       inquirer
//         .prompt([
//           {
//             type: "input",
//             message: "Enter your GitHub username.",
//             name: "engineerGithub",
//           },
//           {
//             type: "confirm",
//             message: "Add another?",
//             name: "answerAddAnother",
//           },
//         ])
//         .then(function (answers) {
//           const newEngineer = new Engineer(
//             answers.engineerName,
//             answers.engineerID,
//             answers.engineerEmail,
//             answers.engineerGithub
//           );
//           teamArr.push(newEngineer);

//           if (answers.answerAddAnother === true) {
//             employeeQs();
//           } else {
           
//             console.log("rendered!!!");
//           }
//         });
//     }

//     function internQs() {
//       inquirer
//         .prompt([
//           {
//             type: "input",
//             message: "Enter your school name.",
//             name: "answersSchool",
//           },
//           {
//             type: "confirm",
//             message: "Add another?",
//             name: "answerAddAnother",
//           },
//         ])
//         .then(function (answers) {
//           const newIntern = new Intern(
//             answers.internName,
//             answers.internID,
//             answers.internEmail,
//             answers.internsSchool
//           );
//           teamArr.push(newIntern);
//           idOfArray.push(answers.internId);
//           employeeQs();
//             console.log("rendered!!!");
         
//         });
//     }

//     function managerQs() {
//       inquirer
//         .prompt([
//           {
//             type: "input",
//             message: "Enter your office phone?.",
//             name: "answersOfficeNumber",
//           },
//           {
//             type: "confirm",
//             message: "Add another?",
//             name: "answerAddAnother",
//           },
//         ])
//         .then(function (answers) {
//           const newManager = new Manager(
//             answers.managerName,
//             answers.managerID,
//             answers.managerEmail,
//             answers.answersOfficeNumber
//           );
//           teamArr.push(newManager);
//           if (answers.answerAddAnother === true) {
//             employeeQs();
//           } else {
          
//             console.log("rendered!!!");
//           }
//         });
//     }

//     function createTeam() {
//       if (!fs.existsSync(OUTPUT_DIR)) {
//         fs.mkdirSync(OUTPUT_DIR);
//       }

//       fs.writeFileSync(outputPath, render(teamArr), "utf-8");
//     }
//   };

//   employeeQs();
// }
// //menu();