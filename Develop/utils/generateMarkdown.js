// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license!=='none') {
    return `![Github license](https://shields.io/badge/-${license}-license-magenta.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license!=='none') {
    return `\n* [License](#license\n)`
  } 
  return ''
} 
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license!=='none') {
    return `## License
    Licensed under the ${license}.`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Testing](#test)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributors
${data.contributors}
## Testing
${data.test}
## Questions
${data.questions}
`;
}

export default generateMarkdown;
