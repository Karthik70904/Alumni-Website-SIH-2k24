document.addEventListener("DOMContentLoaded", () => {
    const storiesContainer = document.getElementById('stories');
    const addButton = document.getElementById('addButton');

    // Load stories from localStorage
    loadStories();

    addButton.addEventListener("click", () => {
        const name = document.getElementById('name').value;
        const story = document.getElementById('story').value;
        const image = document.getElementById('image').value;

        if (name && story && image) {
            const newStory = { name, story, image };
            saveStory(newStory);
            displayStory(newStory);
            clearInputs();
        }
    });
});

function loadStories() {
    const stories = JSON.parse(localStorage.getItem('successStories')) || [];
    stories.forEach(story => displayStory(story));
}

function saveStory(story) {
    const stories = JSON.parse(localStorage.getItem('successStories')) || [];
    stories.push(story);
    localStorage.setItem('successStories', JSON.stringify(stories));
}

function displayStory(story) {
    const storiesContainer = document.getElementById('stories');
    const storyElement = document.createElement('div');
    storyElement.className = 'story';
    storyElement.innerHTML = `
        <h2>${story.name}</h2>
        <p>${story.story}</p>
        <img src="${story.image}" alt="${story.name}">
        <button class="delete-button" onclick="deleteStory('${story.name}')">Delete</button>
    `;
    storiesContainer.appendChild(storyElement);
}

function clearInputs() {
    document.getElementById('name').value = '';
    document.getElementById('story').value = '';
    document.getElementById('image').value = '';
}

function deleteStory(name) {
    const stories = JSON.parse(localStorage.getItem('successStories')) || [];
    const updatedStories = stories.filter(story => story.name !== name);
    localStorage.setItem('successStories', JSON.stringify(updatedStories));
    location.reload(); // Reload to show updated stories
}