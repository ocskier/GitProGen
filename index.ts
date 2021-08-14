require('dotenv').config();

const fs = require('fs');

const inquirer = require('inquirer');
const html_to_pdf = require('html-pdf-node');
const axios = require('axios');
const spawnHTML = require('./generateHTML');

export interface UserDataType {
  color: string;
  login: string;
  name: string;
  location: string;
  avatar_url: string;
  html_url: string;
  blog: string;
  bio: string;
  public_repos: number;
  followers: number;
  starred: string;
  following: number;
}

const questions = [
  {
    message: 'What is your github username?',
    type: 'input',
    name: 'githubID',
  },
  {
    message: 'What color do you want your profile?',
    type: 'list',
    choices: ['green', 'blue', 'pink', 'red'],
    name: 'color',
  },
  {
    message: 'Are you sure?',
    type: 'confirm',
    name: 'confirm',
  },
];

function writeToFile(fileName: string, data: UserDataType) {
  let file = { content: spawnHTML(data) };
  let options = { path: fileName };
  html_to_pdf.generatePdf(file, options).then((pdfBuffer: Buffer) => {
  console.log("PDF Buffer:-", pdfBuffer);
});
}

async function init() {
  try {
    const { githubID, color, confirm } = await inquirer.prompt(questions);
    if (confirm) {
      const data = await getGHData(githubID, color);
      data && writeToFile('output.pdf', data);
    }
  } catch (err) {
    console.log(err);
  }
}

async function getGHData(id: string, color: string) {
  const response = await axios.get(
    `https://api.github.com/users/${id}?token=${process.env.GITHUB_TOKEN}`
  );
  const stars = await axios.get(
    `https://api.github.com/users/${id}/starred?token=${process.env.GITHUB_TOKEN}`
  );
  response.data.color = color;
  response.data.starred = stars.data.length;
  return response.data;
}

init();
