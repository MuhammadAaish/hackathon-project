"use strict";
// Toggle Skills Visibility
const toggleSkillsButton = document.getElementById('toggle-skills');
const skillsSection = document.getElementById('skills');
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', () => {
    if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
// Form Submission and Resume Generation
const resumeForm = document.getElementById('resume-form');
const generatedResume = document.getElementById('generated-resume');
resumeForm === null || resumeForm === void 0 ? void 0 : resumeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = (document.getElementById('name')).value;
    const email = (document.getElementById('email')).value;
    const phone = (document.getElementById('phone')).value;
    const education = (document.getElementById('education')).value;
    const skills = (document.getElementById('skills')).value;
    const workExperience = (document.getElementById('work-experience')).value;
    const username = name.split(' ').join('').toLowerCase();
    const shareableLink = `https://${username}.vercel.app/resume`;
    // Create and display the resume dynamically
    generatedResume.innerHTML = `
    <h1>${name}</h1>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Education:</strong> ${education}</p>
    <p><strong>Skills:</strong> ${skills}</p>
    <p><strong>Work Experience:</strong> ${workExperience}</p>
    <p>Share your resume: <a href="${shareableLink}" target="_blank">${shareableLink}</a></p>
    <button id="download-pdf">Download as PDF</button>
  `;
    // PDF Download Button
    const downloadButton = document.getElementById('download-pdf');
    downloadButton === null || downloadButton === void 0 ? void 0 : downloadButton.addEventListener('click', () => {
        // Logic to download resume as PDF
        const resumeElement = document.getElementById('generated-resume');
        // Configure html2pdf options
        const options = {
            margin: 0.5,
            filename: `${name.replace(/\s+/g, '_')}_resume.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        // Trigger html2pdf conversion and download
        html2pdf().from(resumeElement).set(options).save();
    });
});
// Editing the resume content dynamically on click
generatedResume === null || generatedResume === void 0 ? void 0 : generatedResume.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'P' || target.tagName === 'H1') {
        const newValue = prompt('Edit this content:', target.innerText);
        if (newValue) {
            target.innerText = newValue;
        }
    }
});
