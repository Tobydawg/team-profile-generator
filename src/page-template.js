const createTeam = (team) => {
  console.log(team);

  
  const createEngineer = (engineer) => {
    return `
 <div class="card col employee-card" style="width: 18rem">
 <div class="card-body card-header">
 <h2 class="card-title">${engineer.getName()}</h2>
 <h3 class="card-title">${engineer.getRole()}</h3>
</div>
<div class = "card-body">
 <ul class ="list-group list-group-flush">
 <li class ="list-group-item">Email: <a href = mailto:${engineer.getEmail()}>${engineer.getEmail()}</a></li>
 <li class ="list-group-item">Employee ID: ${engineer.getId()}</li>
<li class ="list-group-item">Github: <a href="https:github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
 </ul>
 </div>
 </div> 
    `
  };

  const createIntern = (intern) => {
    return `
  <div class="card col employee-card" style="width: 18rem">
  <div class="card-body card-header">
  <h2 class="card-title">${intern.getName()}</h2>
  <h3 class="card-title">${intern.getRole()}</h3>
  </div>
  <div class = "card-body">
  <ul class ="list-group list-group-flush">
  <li class ="list-group-item">Email: <a href = mailto:${intern.getEmail()}>${intern.getEmail()}</a></li>
  <li class ="list-group-item">Employee ID: ${intern.getId()}</li>
  <li class ="list-group-item">School: ${intern.getSchool()}">${intern.getSchool()}</a></li>
  </ul>
  </div>
  </div> 
    `;
  };

  const createManager = (manager) => {
    return `
  <div class="card col employee-card" style="width: 18rem">
  <div class="card-body card-header">
  <h2 class="card-title">${manager.getName()}</h2>
  <h3 class="card-title">${manager.getRole()}</h3>
  </div>
  <div class = "card-body">
  <ul class ="list-group list-group-flush">
  <li class ="list-group-item">Email: <a href = mailto:${manager.getEmail()}>${manager.getEmail()}</a></li>
  <li class ="list-group-item">Employee ID: ${manager.getId()}</li>
  <li class ="list-group-item">Phone: <a href="${manager.getPhone()}">${manager.getPhone()}</a></li>
  </ul>
  </div>
  </div> 
    `;
  };
  
  
  const html = [];

  html.push(
    team
      .filter((engineer) => engineer.getRole() === "engineer")
      .map((engineer) => createEngineer(engineer))
      
  )

  html.push(
    team
      .filter((intern) => intern.getRole() === "intern")
      .map((intern) => createIntern(intern))
      .join("")
  )

  html.push(
      team
        .filter((manager) => manager.getRole() === "manager")
        .map((manager) => createManager(manager))
        .join("")
    );

  
return html.join("")
}

module.exports = team => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Members</title>no
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel ="stylesheet" href = "style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
<nav class ="navbar">
<div class ="navbar-header">
<span class = "navbar-brand mb-0 h1">MyTeam</span>
</div>
</nav>
<main class="container">
<div class="row">
${createTeam(team)}
    </div>
    </main>
</body>
</html>
 `;
};























// const createTeam = (team) => {
//   console.log(team);
// ​
  
//   const createEngineer = (engineer) => {
//     return `
//  <div class="card col employee-card' style="width: 18rem;">
//  <div class="card-body card-header">
//  <h2 class="card-title">${engineer.getName()}</h2>
//  <h3 class="card-title">${engineer.getRole()}</h3>
// </div>
// <div class = "card-body">
//  <ul class ="list-group list-group-flush">
//  <li class ="list-group-item">Email: <a href = mailto:${engineer.getEmail()}>${engineer.getEmail()}</a></li>
//  <li class =""list-group-item">Employee ID: ${engineer.getId()}</li>
// <li class ="list-group-item">Github: <a href="https:github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
//  </ul>
//  </div>
//  </div> 
//     `
//   };
// ​
  
  
//   const html = [];
// ​
//   html.push(
//     team
//       .filter((engineer) => engineer.getRole() === "engineer")
//       .map((engineer) => createEngineer(engineer))
      
//   )
// ​
//   console.log(html)
  
// ​
// ​
// ​
// const createIntern = (intern) => {
//   return `
// <div class="card col employee-card' style="width: 18rem;">
// <div class="card-body card-header">
// <h2 class="card-title">${intern.getName()}</h2>
// <h3 class="card-title">${intern.getRole()}</h3>
// </div>
// <div class = "card-body">
// <ul class ="list-group list-group-flush">
// <li class ="list-group-item">Email: <a href = mailto:${intern.getEmail()}>${intern.getEmail()}</a></li>
// <li class =""list-group-item">Employee ID: ${intern.getId()}</li>
// <li class ="list-group-item">Github: <a href="https:github.com/${intern.getSchool()}">${intern.getSchool()}</a></li>
// </ul>
// </div>
// </div> 
//   `;
// };
// ​
// ​
// ​
// ​
// ​
// // const html = [];
// ​
// html.push(
//   team
//     .filter((intern) => intern.getRole() === "intern")
//     .map((intern) => createIntern(intern))
//     .join("")
// )
// ​
// ​
// ​
// ​
// ​
// const createManager = (manager) => {
//   return `
// <div class="card col employee-card' style="width: 18rem;">
// <div class="card-body card-header">
// <h2 class="card-title">${manager.getName()}</h2>
// <h3 class="card-title">${manager.getRole()}</h3>
// </div>
// <div class = "card-body">
// <ul class ="list-group list-group-flush">
// <li class ="list-group-item">Email: <a href = mailto:${manager.getEmail()}>${manager.getEmail()}</a></li>
// <li class =""list-group-item">Employee ID: ${manager.getId()}</li>
// <li class ="list-group-item">Github: <a href="https:github.com/${manager.getPhone()}">${manager.getPhone()}</a></li>
// </ul>
// </div>
// </div> 
//   `;
// };
// ​
// ​
// ​
// ​
// ​
// // const html = [];
// ​
// html.push(
//   team
//     .filter((manager) => manager.getRole() === "manager")
//     .map((manager) => createManager(manager))
//     .join("")
// );
// ​
// return html.join("")
// }
// ​
// module.exports = team => {
//   return `
//   <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Team Members</title>no
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
//     integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//     <link rel ="stylesheet" href = "style.css">
//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
// </head>
// <body>
// <nav class ="navbar">
// <div class ="navbar-header">
// <span class = "navbar-brand mb-0 h1">MyTeam</span>
// </div>
// </nav>
// <main class="container">
// <div class="row">
// ${createTeam(team)}
//     </div>
//     </main>
// </body>
// </html>
//  `;
// };

// filter(); map();



// create the team on the front end side
// const Engineer = require("../lib/Engineer");
// const Intern = require("../lib/Intern");
// const Manager = require("../lib/Manager");

// const createTeam = (team) => {
//   console.log(team);

  
//   const createEngineer = (engineer) => {
//     return `
//  <div class="card col employee-card' style="width: 18rem;">
//  <div class="card-body card-header">
//  <h2 class="card-title">${engineer.getName()}</h2>
//  <h3 class="card-title">${engineer.getRole()}</h3>
// </div>
// <div class = "card-body">
//  <ul class ="list-group list-group-flush">
//  <li class ="list-group-item">Email: <a href = mailto:${engineer.getEmail()}>${engineer.getEmail()}</a></li>
//  <li class =""list-group-item">Employee ID: ${engineer.getId()}</li>
// <li class ="list-group-item">Github: <a href="https:github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
//  </ul>
//  </div>
//  </div> 
//     `
//   };

  
  
//   const html = [];

//   html.push(
//     team
//       .filter((engineer => engineer.getRole() === "Engineer")
//       .map((engineer) => createEngineer(engineer))
//       .join("")
//   )

  



// const createIntern = (intern) => {
//   return `
// <div class="card col employee-card' style="width: 18rem;">
// <div class="card-body card-header">
// <h2 class="card-title">${intern.getName()}</h2>
// <h3 class="card-title">${intern.getRole()}</h3>
// </div>
// <div class = "card-body">
// <ul class ="list-group list-group-flush">
// <li class ="list-group-item">Email: <a href = mailto:${intern.getEmail()}>${intern.getEmail()}</a></li>
// <li class =""list-group-item">Employee ID: ${intern.getId()}</li>
// <li class ="list-group-item">Github: <a href="https:github.com/${intern.getSchool()}">${intern.getSchool()}</a></li>
// </ul>
// </div>
// </div> 
//   `;
// };





// // const html = [];

// html.push(
//   team
//     .filter((employee) => employee.getRole() === "Intern")
//     .map((intern) => createIntern(intern))
//     .join(" ")
// )





// const createManager = (manager) => {
//   return `
// <div class="card col employee-card' style="width: 18rem;">
// <div class="card-body card-header">
// <h2 class="card-title">${manager.getName()}</h2>
// <h3 class="card-title">${manager.getRole()}</h3>
// </div>
// <div class = "card-body">
// <ul class ="list-group list-group-flush">
// <li class ="list-group-item">Email: <a href = mailto:${manager.getEmail()}>${manager.getEmail()}</a></li>
// <li class =""list-group-item">Employee ID: ${manager.getId()}</li>
// <li class ="list-group-item">Github: <a href="https:github.com/${manager.getPhone()}">${manager.getPhone()}</a></li>
// </ul>
// </div>
// </div> 
//   `;
// };





// // const html = [];

// html.push(
//   team
//     .filter((employee) => employee.getRole() === "Manager")
//     .map((manager) => createManager(manager))
//     .join("")
// )
// }


// module.exports = (team) => {
//   return `
//   <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Team Members</title>no
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
//     integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//     <link rel ="stylesheet" href = "style.css">
//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
// </head>
// <body>
// <nav class ="navbar">
// <div class ="navbar-header">
// <span class = "navbar-brand mb-0 h1">MyTeam</span>
// </div>
// </nav>
// <main class="container">
// <div class="row">
// ${createTeam(team)}
//     </div>
//     </main>
// </body>
// </html>
//   // `
// };




































// console.log("team array", teamArr);
// let card = "";

// let lastThing = teamArr[i].school || teamArr[i].github || teamArr[i].phone;
// let objectKeys = Object.keys(teamArr[i]);
// let lastAtt = objectKeys[4];
// let finalProp = lastAtt + ": " + lastThing;

// if (lastAtt === undefined) {
//   finalProp = "";
//   console.log(finalProp);
// } else if (lastAtt === "github") {
//   finalProp = `GitHub: <a href = 'http://www.github.com/ ${teamArr[i].github}'>${teamArr[i].github}`;
//   console.log(finalProp);
// } else {
//   console.log(finalProp);
// }

// let { name, email, role, id } = teamArray[i];
// card += `
// <div class="card col' style="width: 18rem;">
// <div class="card-body card-header">
// <h5 class="card-title">${name}</h5>
// <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
// </div>
// <ul class ="list-group list-group-flush">
// <li class ="list-group-item">Email: <a href = mailto:${email}>${email}</a></li>
// <li class =""list-group-item">Employee ID: ${id}</li>
// <li class =""list-group-item"> ${finalProp}</li>
// </ul>
// </div>
// `;

// return `

// we are generating the page here
