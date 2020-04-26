function generate(data) {
    return `
## Project title: ${data.title} 
## Project by ${data.name}
  ![](${data.avatar_url})
## Email adress: ${data.email}
## Description: ${data.description}
## Table of Contents

    - [Installation](#installation)
    - [Usage](#Usage)
    - [License](#License)
    - [Contributing](#Contributing)
    - [Tests](#Tests)
    - [Questions](#Questions)
  
## Installation 
   ${data.installation}
  
## Usage
  ${data.usage}
  
## License
  ${data.license}
  
## Contributing
  ${data.contributing}
  
## Tests
  ${data.tests}
  
  ## Questions
  Questions`;
}

module.exports = generate;