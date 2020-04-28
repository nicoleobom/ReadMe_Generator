let fs = require('fs');
var fileData;
let name;
let description;
let install;
let usage;
let license;
let contributors;
let test;
let faq;
let githubName;
let email;

gatherInput();

async function gatherInput(req, res) {
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
    },
    {
        type: 'input',
        name: 'github',
        message: 'What\'s your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What\'s your email address?',
    }
    ]);
    console.log(response);
    console.log(response.name);

    name = response.name;
    description = response.description;
    install = response.install;
    usage = response.useage;
    license = response.license;
    contributors = response.contributors;
    test = response.test;
    faq = response.questions;
    githubName = response.github;
    email = response.email;
    let bioImg = 'https://github.com/' + githubName + '.png?size=150'

    fileData = `
## ${name}
![${githubName}](${bioImg})<br />
###### ${email}
---
### Description
###### ${description}
---
### How to Install / Use
###### ${install}
###### ${usage}
---
### Licenses
###### ${license}
---
### Contributors
###### ${contributors}
---
### Tests
###### ${test}
---
### FAQ / Additional Readings
###### ${faq}
                `

                writeToFile();
}

function writeToFile() {
    fs.writeFile('readme.md', fileData, (err) => {
        if (err) throw err;
    });
}



// LInk to github pic https://github.com/USERNAME.png?size=150