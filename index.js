// LIBRARIES PACKAGES

const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require("./generate");


async function init() {
    try {
        // QUESTIONS TO USER
        const responses = await inquirer.prompt([{
                type: "input",
                name: "title",
                message: "What is your Project title? "
            },
            {
                type: "input",
                name: "description",
                message: "Write your project description here: "
            },
            {
                type: "input",
                name: "installation",
                message: "Write your project installation here here: "
            },
            {
                type: "input",
                name: "usage",
                message: "Write your project usage here: "
            },
            {
                type: "list",
                message: "What is your License?",
                name: "license",
                choices: ["MIT", "GPLv2", "Apache", "other"]
            },
            {
                type: "input",
                name: "contributing",
                message: "Who is contributing in this project here: "
            },
            {
                type: "input",
                name: "tests",
                message: "explain testing this project here: "
            },
            {
                type: "input",
                name: "username",
                message: "What is your GitHub username? "
            },
            {
                type: "input",
                name: "email",
                message: "What is your email adress? "
            }
        ]);



        const {
            title,
            description,
            installation,
            usage,
            license,
            contributing,
            tests,
            username,
            email
        } = responses;
        console.log(responses);

        // GET GITHUB INFO FROM GITHUB API
        const repo = await axios.get(`https://api.github.com/users/${username}`);
        const {
            data
        } = repo;
        const {
            name,
            avatar_url,
            html_url,
            company
        } = data;
        console.log(data);

        // CREATE MARKDOWN FILE
        const markdown = await generateMarkdown({
            title,
            description,
            installation,
            usage,
            license,
            contributing,
            tests,
            username,
            email,
            name,
            avatar_url,
            html_url,
            company
        });

        fs.writeFileSync("README" + ".md", markdown, function (err) {
            if (err) {
                throw err;
            }
        });

    } catch (err) {
        console.log(err);
    }
}

init();