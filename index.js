let fs = require('fs');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, writeToFile);
    // Write user input in file
}


async function fun1(req, res) {
    const { prompt } = require('enquirer');
    const response = await prompt ([
    {
        type: 'input',
        name: 'name',
        message: 'What\'s the project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Type a brief project description.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install it?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use it?',
    }, 
    {
        type: 'input',
        name: 'license',
        message: 'Are there any licenses?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test it?',
    }, {
        type: 'input',
        name: 'questions',
        message: 'Any FAQ or additional readings?',
    }
    ]);
    // console.log(response);
    data = response;
    writeToFile('readme.md', data);
}

fun1();

