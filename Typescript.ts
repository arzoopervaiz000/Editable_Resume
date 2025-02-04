const form = document.getElementById("resumeForm");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("form submitted");


    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement
    const EducationElement = document.getElementById(
      "Education"
    ) as HTMLInputElement;
    const ExperienceElement = document.getElementById(
      "Experience"
    ) as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;

    if (
      
      nameElement &&
      emailElement &&
      phoneElement &&
      EducationElement &&
      ExperienceElement &&
      skillsElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const Education = EducationElement.value;
      const Experience = ExperienceElement.value;
      const skills = skillsElement.value;
      

      const resumeOutput = `
        <h2>Resume</h2>
        
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>phone:</strong> ${phone}</p>
    
        <h3>Education</h3>
        <p>${Education}</p>

        <h3>Experience</h3>
        <p>${Experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
    
      `;
      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
      } else {
        console.log("The resume output elements are missing");
      }
    } else {
      console.log("one or more output elements are missing");
    }
  });
} 