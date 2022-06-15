const mysql = require("mysql2");
const inquirer = require("inquirer");
const table = require("console.table");

require("dotenv").config();

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "lol",
  database: "company_db",
});

db.connect((err) => {
  if (err) throw err;

  console.table("***********************************");
  console.table("*            EMPLOYEE             *");
  console.table("*             TRACKER             *");
  console.table("*            DATABASE             *");
  console.table("***********************************");
  promptUser();
});

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
      } else if (choice === "Add Department") {
        addDepartment();
      } else if (choice === "Quit") {
        quitPrompt();
      }
    });
}

function viewAllEmployees() {
  db.query(
    'SELECT employee.first_name AS "Name" FROM employees;',
    (error, results) => {
      if (error) {
        throw error;
      }
      console.table(results);
      promptUser();
    }
  );
}

function addEmployee() {
  db.query("SELECT * FROM roles", (error, results) => {
    if (error) throw error;
    inquirer
      .prompt([
        {
          name: "first_name",
          type: "input",
          message: "First Name",
          validate: (Input) => {
            if (Input) {
              return true;
            } else {
              console.table("Please enter a first name for your employee");
              return false;
            }
          },
        },
        {
          name: "last_name",
          type: "input",
          message: "Last name?",
          validate: (Input) => {
            if (Input) {
              return true;
            } else {
              console.table("Please enter a last name for your employee");
              return false;
            }
          },
        },
        {
          name: "manager_id",
          type: "input",
          message: "Manager ID?",
          validate: (Input) => {
            if (Input) {
              return true;
            } else {
              console.table("Please enter a manager id for your employee");
              return false;
            }
          },
        },
        {
          name: "role",
          type: "list",
          choices: function () {
            var rolesArr = [];
            for (let i = 0; i < res.length; i++) {
              rolesArr.push(res[i].job_title);
            }
            return rolesArr;
          },
          message: "Enter new employee's role",
        },
      ])
      .then((answer) => {
        let role_id;
        for (let j = 0; j < res.length; j++) {
          if (res[j].title == answer.role) {
            role_id = res[j].id;
          }
        }
        db.query(
          "INSERT INTO employees SET ?",
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            manager_id: answer.manager_id,
            role_id: role_id,
          },
          function (err) {
            if (err) throw err;
            promptUser();
          }
        );
      });
  });
}

function updateEmployeeRole() {
  db.query("SELECT * FROM employees", (err, data) => {
    if (err) throw err;

    var employees = data.map(({ id, first_name, last_name }) => ({
      name: first_name + " " + last_name,
      value: id,
    }));
    inquirer
      .prompt([
        {
          type: "list",
          name: "name",
          message: "Which employee's info would you like to update?",
          choices: employees,
        },
      ])
      .then((answer) => {
        var employee = answer.name;
        var params = [];
        params.push(employee);

        db.query("SELECT * FROM roles", (err, data) => {
          if (err) throw err;

          var roles = data.map(({ id, job_title }) => ({
            name: job_title,
            value: id,
          }));

          inquirer
            .prompt([
              {
                type: "list",
                name: "role",
                message: "What will the employee's new role be?",
                choices: roles,
              },
            ])
            .then((answer) => {
              var role = answer.role;
              params.push(role);

              var employee = params[0];
              params[0] = role;
              params[1] = employee;

              db.query(
                "UPDATE employees SET role_id = ? WHERE id = ?",
                params,
                (err) => {
                  if (err) throw err;
                  promptUser();
                }
              );
            });
        });
      });
  });
}

function viewAllRoles() {
  db.query(
    'SELECT r.title AS Roles, r.salary AS "Salary", d.name AS "Departments" FROM roles r JOIN department d ON .id = r.department ORDER BY Departments desc;',
    (error, results) => {
      if (error) {
        throw error;
      }
      console.table(results);
      promptUser();
    }
  );
}

function addRole() {
  db.query("SELECT * FROM departments", (err, res) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "new_role",
          type: "input",
          message: "Create New Role",
          validate: (Input) => {
            if (Input) {
              return true;
            } else {
              console.table("Please crate a new role classification");
              return false;
            }
          },
        },
        {
          name: "salary",
          type: "input",
          message: "New Role Salary",
          validate: (Input) => {
            if (Input) {
              return true;
            } else {
              console.table("Please enter a salary for the new role");
              return false;
            }
          },
        },
        {
          name: "department",
          type: "list",
          choices: function () {
            var deptArr = [];
            for (let i = 0; i < res.length; i++) {
              deptArr.push(res[i].name);
            }
            return deptArr;
          },
        },
      ])
      .then((answer) => {
        let dept_id;
        for (let j = 0; j < res.length; j++) {
          if (res[j].name == answer.department) {
            dept_id = res[j].id;
          }
        }
        connection.query(
          "INSERT INTO roles SET ?",
          {
            job_title: answer.new_role,
            salary: answer.salary,
            dept_id: dept_id,
          },
          function (err, res) {
            if (err) throw err;
            promptUser();
          }
        );
      });
  });
}

function viewAllDepartments() {
  db.query("SELECT * FROM department", (error, results) => {
    if (error) {
      throw error;
    }
    console.table(results);
    promptUser();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "newDepartment",
        type: "input",
        message: "Create Department",
        validate: (Input) => {
          if (Input) {
            return true;
          } else {
            console.table("Please enter a name for the new department");
            return false;
          }
        },
      },
    ])
    .then((answer) => {
      db.query("INSERT INTO departments SET ?", { name: answer.newDepartment });
      db.query("SELECT * FROM departments", (err, res) => {
        if (err) throw err;
        promptUser();
      });
    });
}

function quitPrompt() {
  console.table("Exiting Employee Tracker Database");
  process.exit();
}
