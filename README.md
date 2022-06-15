# Employee Tracker

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Purpose
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Table of Contents
- [Purpose](#purpose) 
- [Description](#description) 
- [Installation Instructions](#installation-instructions)
- [Process](#process)
- [Demo Preview](#demo-preview)
- [Demo Video Link](#demo-video-link)
- [Github Repository](#github-repository)

## Description
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

## Installation Instructions  
 Download zip or clone repo. 'npm init' then 'npm install'. Then initiate MYSQL with -u and -p. Then run 'source db/schema.sql;' then 'source db/seeds.sql;' then 'USE company_db;' maybe then 'SELECT * FROM employees;' to see if its working. and then 'quit'. NEXT 'npm start' and it should run you through the prompt.


## Demo Preview
![Employee Tracker demo](./gif/track_employees.gif)

## Demo Video Link


## Github Repository
https://github.com/macykcool/trackingemployees


## Made with ❤️️ by Macy Mannix
Mentored by UC Davis Full Stack Web Developer Bootcamp