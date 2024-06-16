// Function to load content dynamically
function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.log(error));
}

// Event listeners for navigation links
document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault();
    loadContent('home.html');
});

document.getElementById('projects-link').addEventListener('click', function(event) {
    event.preventDefault();
    loadContent('projects.html');
});

document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault();
    loadContent('about.html');
});

document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault();
    loadContent('contact.html');
});

// Initial load of Home page
window.onload = function() {
    loadContent('home.html');
};
