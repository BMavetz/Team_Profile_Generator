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
        Team.push(managerInfo);
        console.log(managerInfo);
        console.log(Team);
        addMember();
    })
}

function addMember(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'addMenu',
            message: 'Please select if you would like to add another team member',
            choices: ['Add an Engineer', 'Add an Intern', 'There are no more team members to add.'],
        }
    ])
    .then((answer) => {
        switch (answer.addMenu){
            case "Add an Engineer":
                addEngineer();
                break;

            case "Add an Intern":
                addIntern();
                break;
            
            case "There are no more team members to add.":
                createPage();
                break
        }
    })
}


getManager();