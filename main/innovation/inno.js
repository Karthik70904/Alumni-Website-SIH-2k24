document.getElementById('submissionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const innovationName = document.getElementById('innovationName').value;
    const theme = document.getElementById('theme').value;
    const description = document.getElementById('description').value;
    const postedBy = document.getElementById('postedBy').value;

    const table = document.getElementById('innovationsTable');
    const newRow = table.insertRow();

    newRow.insertCell(0).innerText = innovationName;
    newRow.insertCell(1).innerText = theme;
    newRow.insertCell(2).innerText = description;
    newRow.insertCell(3).innerText = postedBy;

    // Reset the form
    document.getElementById('submissionForm').reset();
});