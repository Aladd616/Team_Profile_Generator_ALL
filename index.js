const inquirer = require('inquirer');
const fs = require('fs');

const generateProfile = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
    `
let Team = [];

function Manager() {
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'manager_name',
        message: 'What is the name of your team manager',
    },
    {
        type: 'input',
        name: 'manager_ID',
        message: 'What is the employee ID of your team manager',
    },
    {
        type: 'input',
        name: 'manager_email',
        message: 'What is the email address of your team manager',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number of your team manager',
    },
    ])

        .then(function(data) {
            const managerName = data.manager_name
            const id = data.manager_ID
            const managerEmail = data.manager_email
            const officeNumber = data.officeNumber
            const Member = new Manager(managerName, id, managerEmail, officeNumber)
            Team.push(Member)
            teamMemberPrompt();
        });
    }

    function teamMemberPrompt() {
        inquirer
        .prompt([
        {
        type: 'list',
        name: 'role',
        message: 'Would you like to add an engineer or an intern to your team or are you finished building your team?',
        choices: ['Engineer', 'intern', 'FINISHED'],
        }

    ])

    .then(function(data) {
        switch (data.role) {
            case "Engineer":
                Engineer();
                break;

            case "intern":
                Intern();
                break;

            case "FINISHED":
                finishTeam();
                break;
        }
        });
    }
        
    function Engineer() {
        inquirer
        .prompt([
        {
            type: 'input',
            name: 'manager_name',
            message: 'What is the name of your team manager',
        },
        {
            type: 'input',
            name: 'manager_ID',
            message: 'What is the employee ID of your team manager',
        },
        {
            type: 'input',
            name: 'manager_email',
            message: 'What is the email address of your team manager',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of your team manager',
        },
        ])
    
            .then(function(data) {
                const managerName = data.manager_name
                const id = data.manager_ID
                const managerEmail = data.manager_email
                const officeNumber = data.officeNumber
                const Member = new Engineer(managerName, id, managerEmail, officeNumber)
                Team.push(Member)
                teamMemberPrompt();
            });
        }

        function Intern() {
            inquirer
            .prompt([
            {
                type: 'input',
                name: 'manager_name',
                message: 'What is the name of your team manager',
            },
            {
                type: 'input',
                name: 'manager_ID',
                message: 'What is the employee ID of your team manager',
            },
            {
                type: 'input',
                name: 'manager_email',
                message: 'What is the email address of your team manager',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number of your team manager',
            },
            ])
        
                .then(function(data) {
                    const managerName = data.manager_name
                    const id = data.manager_ID
                    const managerEmail = data.manager_email
                    const officeNumber = data.officeNumber
                    const Member = new Intern(managerName, id, managerEmail, officeNumber)
                    Team.push(Member)
                    teamMemberPrompt();
                });
            }