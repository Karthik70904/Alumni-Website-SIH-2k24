document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('opportunity-form');
    const jobTitleInput = document.getElementById('job-title');
    const companyNameInput = document.getElementById('company-name');
    const list = document.getElementById('list');

    // Load stored opportunities on page load
    loadOpportunities();

    // Add a new opportunity
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const jobTitle = jobTitleInput.value;
        const companyName = companyNameInput.value;
        
        if (jobTitle && companyName) {
            const opportunity = { jobTitle, companyName };
            saveOpportunity(opportunity);
            jobTitleInput.value = '';
            companyNameInput.value = '';
        }
    });

    // Save to local storage
    function saveOpportunity(opportunity) {
        let opportunities = JSON.parse(localStorage.getItem('opportunities')) || [];
        opportunities.push(opportunity);
        localStorage.setItem('opportunities', JSON.stringify(opportunities));
        loadOpportunities();
    }

    // Load opportunities from local storage
    function loadOpportunities() {
        list.innerHTML = '';
        let opportunities = JSON.parse(localStorage.getItem('opportunities')) || [];
        opportunities.forEach((opp, index) => {
            const li = document.createElement('li');
            li.textContent = `${opp.jobTitle} - ${opp.companyName}`;
            const deleteBtn = document.createElement('span');
            deleteBtn.textContent = 'X';
            deleteBtn.className = 'delete-btn';
            deleteBtn.onclick = () => {
                deleteOpportunity(index);
            };
            li.appendChild(deleteBtn);
            list.appendChild(li);
        });
    }

    // Delete an opportunity
    function deleteOpportunity(index) {
        let opportunities = JSON.parse(localStorage.getItem('opportunities'));
        opportunities.splice(index, 1);
        localStorage.setItem('opportunities', JSON.stringify(opportunities));
        loadOpportunities();
    }
});