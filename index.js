const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Team = [];
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');


function getManager(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the manager',
        },
        {
            type: 'input',
            name: 'emplID',
            message: 'Please enter employee ID number:'

        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address of the employee',
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Please enter the office number for the employee:',
        }
    ])
    .then((answers) =>{
        console.log(answers);
        const managerInfo = new manager(answers.name, answers.emplID, answers.email, answers.officeNum);
        team.push(managerInfo);
    })
}