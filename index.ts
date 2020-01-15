require("dotenv").config();

const fs = require("fs");

const inquirer = require("inquirer");
const conversion = require("phantom-html-to-pdf")();
const axios = require("axios");
const spawnHTML = require("./generateHTML");

export interface UserDataType {
  color: string;
  login: string;
  name: string;
  location: string;
  profile: string;
  blog: string;
  bio: string;
  numRepos: number;
  followers: number;
  starred: string;
  following: number;
}

const questions = [
  {
    message: "What is your github username?",
    type: "input",
    name: "githubID"
  },
  {
    message: "What color do you want your profile?",
    type: "list",
    choices: ["green", "blue", "pink", "red"],
    name: "color"
  },
  {
    message: "Are you sure?",
    type: "confirm",
    name: "confirm"
  }
];

function writeToFile(fileName: string, data: UserDataType) {
  conversion({ html: spawnHTML(data) }, function(err: Error, pdf: any) {
    if (err) console.log(err);
    const output = fs.createWriteStream(fileName);
    console.log(pdf.logs);
    console.log(pdf.numberOfPages);
    pdf.stream.pipe(output);
  });
}

async function init() {
  try {
    const { githubID, color, confirm } = await inquirer.prompt(questions);
    confirm && getGHData(githubID, color);
  } catch (err) {
    console.log(err);
  }
}

async function getGHData(id: string, color: string) {
  const response = await axios.get(
    `https://api.github.com/users/${id}?token=${process.env.GITHUB_TOKEN}`
  );
  const userData = {
    color: color,
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
  };
  userData && console.log(userData);
  userData && writeToFile("output.pdf", userData);
}

init();
