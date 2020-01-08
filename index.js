const fs = require('fs');
require('dotenv').config();

const axios = require('axios');
const inquirer = require('inquirer');
const conversion = require('phantom-html-to-pdf')();

const {colors, generateHTML} = require('./generateHTML');

const questions = [
    {
      message: "What is your github username?",
      type: "input",
      name: "githubID"
    },
    {
        message: "Are you sure?",
        type: "confirm",
        name: "confirm"
    }
];

function writeToFile(fileName, data) {
    conversion({html: generateHTML(data)}, function(err,pdf) {
        if(err) console.log(err);
        const output = fs.createWriteStream(fileName);
        console.log(pdf.logs);
        console.log(pdf.numberOfPages);
        pdf.stream.pipe(output);
    });
}

function init() {
    inquirer.prompt(questions).then(answers=>{
        if(answers.confirm) {
            axios.get(`https://api.github.com/users/${answers.githubID}?token=${process.env.GITHUB_TOKEN}`)
                .then((response) => {
                    const userData = {
                        color: "blue",
                        login: response.data.login,
                        name: response.data.name,
                        location: response.data.location,
                        profile: response.data.html_url,
                        blog: response.data.blog,
                        bio: response.data.bio,
                        numRepos: response.data.public_repos,
                        followers: response.data.followers,
                        starred: response.data.starred_url,
                        following: response.data.following
                    }
                    userData && console.log(userData);
                    userData && writeToFile('output.pdf', userData);
                })
                .catch((err) => {
                    console.log(err)
            });
        }
    })
}

init();
