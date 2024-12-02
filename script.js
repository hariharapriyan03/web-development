document.getElementById('resumeForm').addEventListener('input', updatePreview);
document.getElementById('addEducation').addEventListener('click', addEducation);
document.getElementById('addExperience').addEventListener('click', addExperience);
document.getElementById('clearForm').addEventListener('click', clearForm);

function updatePreview() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const skills = Array.from(document.querySelectorAll('#skillsContainer input:checked')).map(el => el.value).join(', ');
    
    let education = '';
    document.querySelectorAll('.education-row').forEach(row => {
        education += `<p>${row.querySelector('.edu-degree').value} at ${row.querySelector('.edu-institution').value}</p>`;
    });

    let experience = '';
    document.querySelectorAll('.experience-row').forEach(row => {
        experience += `<p>${row.querySelector('.exp-job').value} at ${row.querySelector('.exp-company').value}</p>`;
    });

    const previewContent = `
        <h4>${name}</h4>
        <p><h4>Email:</h4> ${email}</p>
        <p><h4>Phone: ${phone}</h4></p>
        <h4>Profile Summary</h4>
        <p>${summary}</p>
        <h4>Education</h4>
        ${education}
        <h4>Skills</h4>
        <p>${skills}</p>
        <h4>Experience</h4>
        ${experience}
    `;

    document.getElementById('previewContent').innerHTML = previewContent;
    document.getElementById('resumePreview').classList.add('visible');
}

function addEducation() {
    const educationContainer = document.getElementById('educationContainer');
    const educationRow = document.createElement('div');
    educationRow.classList.add('education-row');
    educationRow.innerHTML = `
        <input type="text" class="edu-degree" placeholder="Degree" required>
        <input type="text" class="edu-institution" placeholder="Institution" required>
    `;
    educationContainer.appendChild(educationRow);
}

function addExperience() {
    const experienceContainer = document.getElementById('experienceContainer');
    const experienceRow = document.createElement('div');
    experienceRow.classList.add('experience-row');
    experienceRow.innerHTML = `
        <input type="text" class="exp-job" placeholder="Job Title" required>
        <input type="text" class="exp-company" placeholder="Company" required>
    `;
    experienceContainer.appendChild(experienceRow);
}

function clearForm() {
    document.getElementById('resumeForm').reset();
    document.getElementById('previewContent').innerHTML = '';
    document.getElementById('resumePreview').classList.remove('visible');
    document.getElementById('educationContainer').innerHTML = '';
    document.getElementById('experienceContainer').innerHTML = '';
}