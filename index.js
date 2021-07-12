const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHTML = require("./src/GenerateHTML");

    
const team = [];

manager()

function manager() {
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of this manager',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID of this manager',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email address of this manager',
    },
    {
        type: 'input',
        name: 'office_number',
        message: 'What is the office number of your team manager',
    },
    ])

        .then(function(data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const office_number = data.office_number
            const manager = new Manager(name, id, email, office_number)

            Team.push(manager);
            console.log(manager);
            teamMemberPrompt();
        });
    }

    function teamMemberPrompt() {
        inquirer
        .prompt([
        {
        type: 'list',
        name: 'role',
        message: 'What is the role of this team member',
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
            name: 'name',
            message: 'What is the engineers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID of your engineer?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the engineer?',
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'What is the GitHub username of your engineer?',
        },
        ])
    
            .then(function(data) {
                const name = data.name
                const id = data.id
                const email = data.email
                const GitHub = data.GitHub
                const engineer = new Engineer(name, id, email, GitHub)
                Team.push(engineer);
                console.log(engineer);
                teamMemberPrompt();
            });
        }

        function Intern() {
            inquirer
            .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your teams intern?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the employee ID of your intern?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email address of your intern?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school is your teams intern from?',
            },
            ])
        
                .then(function(data) {
                    const name = data.name
                    const id = data.id
                    const email = data.email
                    const school = data.school
                    const Intern = new Intern(name, id, email, school)
                    Team.push(Intern)
                    console.log(intern);
                    teamMemberPrompt();
                });
            }

            function finishTeam() {
            inquirer
             .prompt([
                {
                    type: 'input',
                    name: 'team_name',
                    message: 'What is the name of your team',
                },
   
                    ])

                const HTMLPageContent = team[data];
                const fileName = `${team_name.toLowerCase().split(' ').join('')}.html`;

                fs.appendFile(fileName, HTMLPageContent, (err) => err ? console.log(err) : console.log('Successfully generated a team member list html'));
            }