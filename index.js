import inquirer from 'inquirer';

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter up to three characters',
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
    })
    .catch((error) => {
        if (error.isTtyError) {
        } else {
        }
    });