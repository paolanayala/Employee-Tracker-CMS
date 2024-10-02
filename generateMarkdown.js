// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![MIT License](https://img.shields.io/badge/MIT%20License%20-%20path)';
  } else {
      return '';

  };
}
const licenseBadge = renderLicenseBadge('MIT');
console.log(licenseBadge);

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenses = {
    MIT: 'https://opensource.org/licenses/MIT',
    
  }; 
  return licenses[license] || 'License not found';
} 


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license === 'MIT') {
    licenseSection = `
    ##License`
    console.log(renderLicenseSection(license));
  } else {
    licenseSection = `
    ## License
    This project does not have a license.`;
  }
    return renderLicenseSection;
}

// TODO: Create a function to generate markdown for README
//generates the string holding prompts data
function generateMarkdown(data) {
  return `# Title
  ${data.title}
 # Project Description
${data.motivation}
${data.problemSolve}
${data.lessonsLearned}
# Contribution
${data.contributionGuidelines}
# Installation
${data.installation}
# Testing
${data.testInstructions}
# Questions/ Contact
${data.github}
${data.email}
# License
${data.license}

`;
}

export default generateMarkdown;
