document.getElementById('success-story-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page refresh

    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const story = document.getElementById('story').value;
    const imageFile = document.getElementById('image').files[0];

    // Create a FileReader to read the image
    const reader = new FileReader();
    reader.onload = function(event) {
        const storyContainer = document.getElementById('story-container');

        // Create a new story item
        const storyItem = document.createElement('div');
        storyItem.classList.add('story-item');

        // Add story content to the new story item
        storyItem.innerHTML = `
            <img src="${event.target.result}" alt="${name}'s Image">
            <h3>${name}, ${profession}</h3>
            <p>${story}</p>
        `;

        // Append the new story item to the container
        storyContainer.appendChild(storyItem);

        // Clear the form
        document.getElementById('success-story-form').reset();
    };

    // Read the image file
    if (imageFile) {
        reader.readAsDataURL(imageFile);
    } else {
        // Create story without an image if none is uploaded
        const storyContainer = document.getElementById('story-container');

        const storyItem = document.createElement('div');
        storyItem.classList.add('story-item');
        storyItem.innerHTML = `
            <h3>${name}, ${profession}</h3>
            <p>${story}</p>
        `;

        storyContainer.appendChild(storyItem);
        document.getElementById('success-story-form').reset();
    }
});