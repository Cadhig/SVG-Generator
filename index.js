import inquirer from 'inquirer';
import { makeFile } from './lib/shapes.js';

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter up to three characters',
            validate: (input) => {
                if (input.length == 3) {
                    return true
                }
                return "Please only enter 3 characters."
            },
            name: "characters"
        },
        {
            type: 'input',
            message: 'Choose a color for the text, (use name or hex#)',
            name: 'textColor'
        },
        {
            type: 'list',
            message: 'Choose a shape',
            choices: ['Square', 'Triangle', 'Circle'],
            name: 'shape'
        },
        {
            type: 'input',
            message: 'Choose a color for the shape, (use name or hex#)',
            name: 'shapeColor'
        }
    ])

    .then((answers) => {
        answers.characters = answers.characters.toUpperCase()
        console.log('Generating logo.svg....')
        makeFile(answers)
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log(error)
        } else {
            console.log(error)
        }
    });