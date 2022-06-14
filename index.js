const inquirer = require("inquirer");

const db = require("./db/connection");
require("console.table");

function promptUser() {
  inquirer
    .prompt([
      {
        message: "What would you like to do?",
        name: "Choice",
        type: "list",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Quit",
        ],
      },
    ])
    .then((answers) => {
      let choice = answers.choice;
      if (choice === "View All Employees") {
        viewAllEmployees();
      } else if (choice === "Add Emplyee") {
        addEmployee();
      } else if (choice === "Update Employee Role") {
        updateEmployeeRole();
      } else if (choice === "View All Roles") {
        viewAllRoles();
      } else if (choice === "Add Role") {
        addRole();
      } else if (choice === "View All Departments") {
        viewAllDepartments();
      } else if (choice === "Quit") {
        quitPrompt();
      }
    });
};

function viewAllEmployees() {
   db.query (
       'SELECT employee.first_name AS "Name" FROM employees;',
       (error, results) => {
           if (error) {
               throw error;
           }
           console.table(results);
           promptUser();
       }
   )
}
