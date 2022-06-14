//dependencies
const inquirer = require("inquirer");


require('console.table');

connection.connect(err => {
    if (err) throw err;

})

function promptUser() {
    inquirer
    .prompt ([
        {
            message: 'What would you like to do?',
            name: 'Choice',
            type: 'list',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 
            'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
        }
    ])
    .then((answers) => {
        let choice = answers.choice;
        if (choice === 'View All Employees') {
            viewAllEmployees();
        } else if (choice === 'Add Emplyee') {
            addEmployee();
        } else if (choice === 'Update Employee Role') {
            updateEmployeeRole();
        } else if (choice === 'View All Roles') {
            viewAllRoles();
        } else if (choice === 'Add Role') {
            addRole();
        } else if (choice === 'View All Departments') {
            viewAllDepartments();
        } else if (choice === 'Quit') {
            quitPrompt();
        }
    })
}