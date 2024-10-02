//DEPENDENCIES
// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import pool from "./db";

// TODO: Create an array of questions for user input
//FUNCTIONS
const menuOptions = [
    'View all departments',
    'View all roles',
    'View all employees',
    'Add a department',
    'Add a role',
    'Add an employee',
    'Update an employee role',
    'Exit'
  ];

  const mainMenu = async () => {
    const { option } = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Please select a department.',
            choices: 'employeeTracker',
        },
    ]);

    switch (option) {
        case 'View all departments':
            await viewDepartments();
            break;
        case 'View all roles':
            await viewRoles();
            break;
        case 'View all employees':
            await viewEmployees();
            break;
        case 'Add a department':
            await addDepartment();
            break;
        case 'Add a role':
            await addRole();
            break;
        case 'Add an employee':
            await addEmployee();
            break;
        case 'Update employee role':
            await updateEmployeeRole();
            break;
    }
    mainMenu();
  };

  const viewDepartments = async () => {
    //implement logic to view all departments 
  };

  const viewRoles = async () => {
    //implement logic to view all Roles 
  };

  const viewEmployees = async () => {
    //implement logic to view all employees 
  };

  const addDepartment = async () => {
    //implement logic to add a deparment
  };

  const addRole = async () => {
    //implement logic to add a role
  };

  const addEmployee = async () => {
    //implement logic to add an employee
  };

  const updateEmployeeRole = async () => {
    //implement logic to update employee role
  };

  mainMenu();


//INITIALIZATION
// Function call to initialize app
//init();