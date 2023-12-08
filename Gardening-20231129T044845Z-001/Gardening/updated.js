function filterPlants() {
    const filter = document.getElementById('filter').value;
    let plants = {
        all: ['Rose', 'Tulip', 'Daisy', 'Tomato', 'Cucumber', 'Pepper', 'Apple', 'Pear', 'Cherry'],
        flowers: ['Rose', 'Tulip', 'Daisy'],
        vegetables: ['Tomato', 'Cucumber', 'Pepper'],
        fruits: ['Apple', 'Pear', 'Cherry']
    };

    let filteredPlants = filter === 'all' ? plants.all : plants[filter]; 
    let plantListHTML = filteredPlants.map(plant => `<p>${plant}</p>`).join('');
    document.getElementById('plantList').innerHTML = plantListHTML;
}

document.getElementById('forumPostForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const postTitle = document.getElementById('postTitle').value.trim();
    const postContent = document.getElementById('postContent').value.trim();

    if (!postTitle || !postContent) {
        alert('Please fill in both title and content for your post.');
    } else {
        alert(`Your post titled "${postTitle}" has been added.`);
        // Here you can add code to actually add the post to your forum
    }
});
