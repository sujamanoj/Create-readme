const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      // Takes user text input
      type: "input",
      name: "username",
      message: "Enter Your Github Username",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "ineed a value to continue";
        }
      },
    },
    {
      // Takes user text input
      type: "input",
      name: "email",
      message: "Enter Your Email Address",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "ineed a value to continue";
        }
      },
    },
    {
      // Takes user text input
      type: "input",
      name: "title",
      message: "What's Your Projects Name?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "ineed a value to continue";
        }
      },
    },
    {
      // Takes user text input
      type: "input",
      name: "description",
      message: "Enter A Descrition For Your Project",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "ineed a value to continue";
        }
      },
    },
    {
      // Takes user text input
      type: "input",
      name: "installation",
      message: "Enter Your Projects Installation Instructions",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "ineed a value to continue";
        }
      },
    },
    {
      // Takes user text input
      type: "input",
      name: "usage",
      message: "Enter Usage Info",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "ineed a value to continue";
        }
      },
    },
    {
      // Takes user text input
      type: "input",
      name: "contribution",
      message: "Enter Your Project Contribution Guidelines",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "ineed a value to continue";
        }
      },
    },
    {
      // Takes user input via checkbox using spacebar to add choice and up and down keys to move down list
      type: "checkbox",
      message: "Licensing Options",
      name: "license",
      choices: [
        "None",
        "Apache2.0",
        "GNU Public v3.0",
        "MIT",
        "Boost Software 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public 2.0",
        "GNU Affero General Public v3.0",
        "GNU General Public v2.0",
        "GNU Lesser General Public v2.1",
        "Mozilla Public 2.0",
        "the Unilicense",
      ],
    },
    // Where the user input is stored (data)
  ])

  .then(
    ({
      title,
      description,
      instruction,
      email,
      installation,
      contribution,
      license,
      usage,
      username,
    }) => {
      const template = `# $(title)
      ## Table of Contents
     - [Description](#description)
     - [installation](#installation)
     - [Usage](#usage)
     - [Contribution](#Contribution)
     - [Test Instructions](#Test-Instructions)
     - [Contact Information](#Contact-Information)
     ### Description
     ${description}
     ### installation
     ${installation}
     ### Usage
     ${usage}
     ### Contribution
     ${contribution}
     ## license
     ${license}
     ## Instruction
     ${instruction}
     ### Contact-Information
     [Github Profile](https://github.com/${username})
     ${email}`;

      createNewFile(title, template);
    }
  );
function createNewFile(fileName, data) {
  fs.writeFile(
    `./${fileName.toLowerCase().split(" ").join("")}.md`,
    data,
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("your Readme has been generated");
    }
  );
}

