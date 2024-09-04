let temporaryStories = [];

document.getElementById('success-story-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const story = document.getElementById('story').value;
  const imageFile = document.getElementById('image').files[0];

  const reader = new FileReader();

  reader.onloadend = function () {
    try {
      // Add new story to the temporary array
      temporaryStories.push({
        name: name,
        story: story,
        image: imageFile ? reader.result : null
      });

      displayStories(temporaryStories);

      // Display success message
      alert('Story submitted successfully!');
    } catch (error) {
      console.error('Error saving story:', error);
      // Display error message to user
      alert('There was an error saving your story. Please try again later.');
    }
  };

  if (imageFile) {
    reader.readAsDataURL(imageFile);
  } else {
    // Handle no image selection (optional: display message)
  }
});

function displayStories(stories) {
  const storiesSection = document.getElementById('stories-section');
  storiesSection.innerHTML = ''; // Clear existing stories

  stories.forEach((story, index) => {
    const storyDiv = document.createElement('div');
    storyDiv.className = 'story';
    storyDiv.innerHTML = `
      <img src="${story.image || 'placeholder.png'}" alt="Story Image">
      <div>
        <strong>${story.name}</strong>
        <p>${story.story}</p>
        <button class="delete-button">Delete</button>
      </div>
    `;

    const deleteButton = storyDiv.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
      stories.splice(index, 1); // Remove the story from the array
      displayStories(stories);
    });

    storiesSection.appendChild(storyDiv);
  });
}

// Load stories on page load
document.addEventListener('DOMContentLoaded', displayStories);