const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const teamArr = [];
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");
//global variables
let objectEmployee=[];

const employeeQs = () => {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your name? (Required)",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter your name!");
              return false;
            }
          },
        },

        {
          type: "input",
          name: "email",
          message: "What is your email? (Required)",
          validate: (emailInput) => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please enter your email!");
              return false;
            }
          },
        },

        {
          type: "input",
          name: "id",
          message: "What is your ID? (Required)",
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("Please enter your ID!");
              return false;
            }
          },
        },

        {
          name: "role",
          type: "list",
          message: "What is your Role? (Required)",
          choices: ["Engineer", "Intern", "Manager" ],
        },
        
      ])

      .then(function (answers) {
        //console.log(answers);
        objectEmployee.push(answers); //have to get the data from this .then statement -answers..did that by pushing to global var objectEmployee
        //console.log(`line 72 objEmployee ${objectEmployee}`)
        if (answers.role === "Engineer") {
          
          engineerQs(answers);
        } else if (answers.role === "Intern") {
          internQs(answers);
        } else {
          managerQs(answers);
        }
      })
      
  );
  
//follow the data
  function engineerQs() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter your GitHub username.",
          name: "engineerGithub",
        },
        {
          type: "confirm",
          message: "Add another?",
          name: "answerAddAnother",
        },
      ])
      .then(function (answers) {
        //assigned data from objectEmployee and the newer github answers to the Eng constructor
        const newEngineer = new Engineer(
          objectEmployee[0].name,
          objectEmployee[0].id,
          objectEmployee[0].email,
          answers.engineerGithub
        );
        teamArr.push(newEngineer);
        objectEmployee=[];
        if (answers.answerAddAnother === true) {
          employeeQs();
        } else {
          createTeam();
          console.log("rendered!!!");
        }
      })
  }

  function internQs() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter your school name.",
          name: "internSchool",
        },
        {
          type: "confirm",
          message: "Add another?",
          name: "answerAddAnother",
        },
      ])
      .then(function (answers) {
        const newIntern = new Intern(
          objectEmployee[0].name,
          objectEmployee[0].id,
          objectEmployee[0].email,
          answers.internSchool
        );
        teamArr.push(newIntern);
        if (answers.answerAddAnother === true) {
          employeeQs();
        } else {
          createTeam();
          console.log("rendered!!!");
        }
      });
  }

  function managerQs() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter your office phone?",
          name: "managerPhone",
        },
        {
          type: "confirm",
          message: "Add another?",
          name: "answerAddAnother",
        },
      ])
      .then(function (answers) {
        const newManager = new Manager(
          objectEmployee[0].name,
          objectEmployee[0].id,
          objectEmployee[0].email,
          answers.managerPhone
        );
        teamArr.push(newManager);
        if (answers.answerAddAnother === true) {
          employeeQs();
        } else {
          createTeam();
          console.log("rendered!!!");
        }
      });
  }

  function createTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }

    fs.writeFileSync(outputPath, render(teamArr), "utf-8");
  }
};

employeeQs();

//     .then((answers) => {
//       console.log(answers.role);

//       if (answers.role === "Engineer") {
//         inquirer.prompt([
//           {
//             type: "input",
//             name: "gitHub",
//             message: "Enter your GitHub",
//           },
//         ]);
//       } else if (answers.role === "Intern") {
//         inquirer.prompt([
//           {
//             type: "input",
//             name: "school",
//             message: "Enter your school name",
//           },
//         ]);
//       } else if (answers.role === "Manager") {
//         inquirer.prompt([
//           {
//             type: "input",
//             name: "phone",
//             message: "Enter your office telephone number!",
//           },
//         ]);
//       } else {
//         greeting = "Thank You!";
//       }
//     });
// };

// employeeQ();

// if (time < 10) {
//     greeting = "Good morning";
//   } else if (time < 20) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";

// } else if (answers.role === 'Employee') {
//     inquirer.prompt ([{
//         type: 'input',
//         name: '',
//         message: 'Enter your office telephone number!' }]);

// inquirer
//   .prompt([
//     {
//       name: "pizza_crust",
//       type: "list",
//       message: "Choose your crust:",
//       choices: ["Thin Crust", "Stuffed Crust", "Pan"],
//     },
//   ])
//   .then((answer) => {
//     console.log(answer.pizza_crust);
//   });
//   }
