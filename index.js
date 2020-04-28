let fs = require('fs');
var fileData;

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

    let name = response.name;
    let description = response.description;
    let install = response.install;
    let usage = response.useage;
    let license = response.license;
    let contributors = response.contributors;
    let test = response.test;
    let faq = response.questions;
    let githubName = response.github;
    let email = response.email;
    let bioImg = 'https://github.com/' + githubName + '.png?size=150'
    let follow = 'https://img.shields.io/github/followers/' + githubName + '?label=Follow&style=social'

    fileData = `
## ${name}
![${githubName}](${bioImg})<br />
!(${follow})<br />
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