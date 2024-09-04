document.getElementById('jobForm').addEventListener('submit', function(event){
    event.preventDefault();

    const jobTitle = document.getElementById('jobTitle').value;
    const companyName = document.getElementById('companyName').value;
    const jobDescription = document.getElementById('jobDescription').value;
    const applicationUrl = document.getElementById('applicationUrl').value;
    const jobImage = document.getElementById('jobImage').value;

    const jobDisplay = document.getElementById('jobsDisplay');

    const jobCard = document.createElement('div');
    jobCard.classList.add('job-card');

    jobCard.innerHTML = `
        <h2>${jobTitle}</h2>
        <h3>${companyName}</h3>
        <p>${jobDescription}</p>
        ${jobImage ? `<img src="${jobImage}" alt="Job Image">` : ''}
        <a href="${applicationUrl}" target="_blank">Apply Here</a>
    `;

    jobDisplay.appendChild(jobCard);

    // Clear the form fields
    document.getElementById('jobForm').reset();
});