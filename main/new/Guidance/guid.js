document.addEventListener('DOMContentLoaded', function() {
    const placementForm = document.getElementById('placementForm');
    const placementList = document.getElementById('placementList');

    placementForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const company = document.getElementById('company').value;
        const position = document.getElementById('position').value;
        const contact = document.getElementById('contact').value;

        const placement = { company, position, contact };
        savePlacement(placement);
        renderPlacements();
        placementForm.reset();
    });

    function savePlacement(placement) {
        let placements = localStorage.getItem('placements') ? JSON.parse(localStorage.getItem('placements')) : [];
        placements.push(placement);
        localStorage.setItem('placements', JSON.stringify(placements));
    }

    function renderPlacements() {
        let placements = localStorage.getItem('placements') ? JSON.parse(localStorage.getItem('placements')) : [];
        placementList.innerHTML = '';
        placements.forEach((placement, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${placement.company} | ${placement.position} | ${placement.contact} <button class="delete-btn" onclick="deletePlacement(${index})">Delete</button>`;
            placementList.appendChild(li);
        });
    }

    window.deletePlacement = function(index) {
        let placements = JSON.parse(localStorage.getItem('placements'));
        placements.splice(index, 1);
        localStorage.setItem('placements', JSON.stringify(placements));
        renderPlacements();
    }

    renderPlacements(); // render placements on initial load
});