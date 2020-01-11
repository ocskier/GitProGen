const fs = require('fs');
require('dotenv').config();

const axios = require('axios');
import {AxiosResponse, AxiosError} from 'axios';
const inquirer = require('inquirer');
const conversion = require('phantom-html-to-pdf')();

const spawnHTML = require('./generateHTML.ts');
console.log(spawnHTML);

type AnswersType = {
    githubID: string,
    confirm: boolean
}
export type UserDataType = {
    color: string,
    login: string,
    name: string,
    location: string,
    profile: string,
    blog: string,
    bio: string,
    numRepos: number,
    followers: number,
    starred: string,
    following: number
}

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

function writeToFile(fileName: string, data: UserDataType) {
    conversion({html: spawnHTML(data)}, function(err: Error ,pdf: any) {
        if(err) console.log(err);
        const output = fs.createWriteStream(fileName);
        console.log(pdf.logs);
        console.log(pdf.numberOfPages);
        pdf.stream.pipe(output);
    });
}

function init() {
    inquirer.prompt(questions).then((answers: AnswersType) => {
        if(answers.confirm) {
            axios.get(`https://api.github.com/users/${answers.githubID}?token=${process.env.GITHUB_TOKEN}`)
                .then((response: AxiosResponse) => {
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
                .catch((err: AxiosError) => {
                    console.log(err)
            });
        }
    })
}

init();

