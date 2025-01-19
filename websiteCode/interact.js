// Script to add interactivity to the website

// Display an alert when the page loads
window.onload = function() {
    alert('Welcome to My GitHub Pages Site!');
};

// Add event listener to a button (if it exists)
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#myButton');

    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});
