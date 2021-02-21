
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


const employeeQs = () => {
  return inquirer
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
        choices: [ "Intern", "Manager", "Engineer"],
      },
    ])

.then(function(answers){
    if (answers.answerRole === "Engineer"){
        engineerQs(answers);
    } else if (answers.answerRole === "Intern"){
        internQs(answers);
    } else {
        managerQs(answers);
    }
})

function engineerQs(baseAnswers){
    inquirer.prompt ([
        {
            type:"input",
            message: "Enter your GitHub username.",
            name:"answersGithub",
        },
        {
            type:"confirm",
            message: "Add another?",
            name:"answerAddAnother",

    },


    ]) .then(function(answers){
        const newEngineer = new Engineer(baseAnswers.answerName, 
            baseAnswers.answerID, baseAnswers.answerEmail, baseAnswers.answersGithub);
            teamArr.push(newEngineer);
            if (answers.answerAddAnother === true){
                employeeQs()
            } else {
                createTeam();
                console.log("rendered!!!")
            }     
         })
        }

        function internQs(baseAnswers){
            inquirer.prompt ([
                {
                    type:"input",
                    message: "Enter your school name.",
                    name:"answersSchool",
                },
                {
                    type:"confirm",
                    message: "Add another?",
                    name:"answerAddAnother",
        
            },
        
        
            ]) .then(function(answers){
                const newIntern = new Intern(baseAnswers.answerName, 
                    baseAnswers.answerID, baseAnswers.answerEmail, baseAnswers.answersSchool);
                    teamArr.push(newIntern);
                    if (answers.answerAddAnother === true){
                        employeeQs()
                    } else {
                        createTeam();
                        console.log("rendered!!!")
                    }     
                 })
                }

                function managerQs(baseAnswers){
                    inquirer.prompt ([
                        {
                            type:"input",
                            message: "Enter your office phone?.",
                            name:"answersOfficeNumber",
                        },
                        {
                            type:"confirm",
                            message: "Add another?",
                            name:"answerAddAnother",
                
                    },
                
                
                    ]) .then(function(answers){
                        const newManager = new Manager(baseAnswers.answerName, 
                            baseAnswers.answerID, baseAnswers.answerEmail, baseAnswers.answersOfficeNumber);
                            teamArr.push(newManager);
                            if (answers.answerAddAnother === true){
                                employeeQs()
                            } else {
                                createTeam();
                                console.log("rendered!!!")
                            }     
                         })
                        }

                        function createTeam(){
                            if (!fs.existsSync(OUTPUT_DIR)){
                                fs.mkdirSync(OUTPUT_DIR)
                            }
                            
                            fs.writeFileSync(outputPath, render(teamArr), "utf-8");

                        }
                    }

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
