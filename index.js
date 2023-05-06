// importing modules
const fs = require("fs");
const inquirer = require("inquirer");

// inquirer prompt function to prompt user the questions and get input for those questions
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the project title",
      name: "title",
    },
    {
      type: "input",
      message: "What would you like to add to your description section",
      name: "description",
    },
    {
      type: "input",
      message: "What would you like to add to your installation section",
      name: "installation",
    },
    {
      type: "input",
      message: "What would you like to add to your usage section",
      name: "usage",
    },
    {
      type: "input",
      message: "What would you like to add to your contribution section",
      name: "contribution",
    },
    {
      type: "input",
      message: "What would you like to add to your tests section",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your GitHub username",
      name: "github",
    },
    {
      type: "input",
      message: "What email address do you want questions to be sent to",
      name: "email",
    },
    {
      type: "list",
      message: "What license would you like to add to your readme file",
      name: "license",
      choices: [
        "Academic Free License v3.0",
        "Apache License 2.0",
        "Artistic License 2.0",
        "Boost Software License 1.0",
        "Creative Commons",
        "Creative Commons Zero v1.0 Universal",
        "Creative Commons Attribution 4.0",
        "Creative Commons Attribution Share Alike 4.0",
        "Educational Community License v2.0",
        "Eclipse Public License 1.0",
        "Eclipse Public License 2.0",
        "European Union Public License 1.1",
        "GNU Affero General Public License v3.0",
        "GNU General Public License family",
        "GNU General Public License v2.0",
        "GNU General Public License v3.0",
        "GNU Lesser General Public License family",
        "GNU Lesser General Public License v2.1",
        "GNU Lesser General Public License v3.0",
        "ISC",
        "LaTeX Project Public License v1.3c",
        "Microsoft Public License",
        "MIT",
        "Mozilla Public License 2.0",
        "Open Software License 3.0",
        "PostgreSQL License",
        "SIL Open Font License 1.1",
        "University of Illinois/NCSA Open Source License",
        "The Unlicense",
        "zLib License",
      ],
    },
  ])
  .then((data) => {
    // removes the spaces in the license's name and replaces them with "%20" so that the badge shows up properly
    let license = data.license.split(" ");
    let licenseBadge = "";
    for (let i = 0; i < license.length; i++) {
      licenseBadge += license[i] + "%20";
    }
    // readme file template
    let template = ` 
# ${data.title} ![License](https://img.shields.io/badge/License-${licenseBadge}-blue.svg)

## Description
${data.description}
## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation <a id="Installation"></a>
${data.installation}

## Usage <a id="Usage"></a>
${data.usage}

## License <a id="License"></a>
Covered under ${data.license} ![License](https://img.shields.io/badge/License-${licenseBadge}-blue.svg)

## Contributing <a id="Contributing"></a>
${data.contribution}

## Tests <a id="Tests"></a>
${data.tests}

## Questions <a id="Questions"></a>
My github is https://github.com/${data.github} and email for contact is ${data.email}
`;
    // using the users input and the template, writes a readme.md file in the generated readme folder
    fs.writeFile("./generated-readme/README.md", template, (err) => {
      if (err) {
        throw err;
      } else {
        console.log(
          "Your file has been generated successfully, check the generated-readme folder"
        );
      }
    });
  });
