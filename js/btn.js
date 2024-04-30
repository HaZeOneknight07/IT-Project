// Retrieve logged-in user from local storage
var loggedInUser = localStorage.getItem("loggedInUsername");

// Define the default redirect URL and button text
var redirectUrl = 'claiminfo.html';
var buttonText = 'Back to Claim Info';

// Check if the logged-in user is managers@gelder.co.uk
if (loggedInUser === 'managers@gelder.co.uk') {
    // If yes, update redirect URL and button text
    redirectUrl = 'ratesoption.html';
    buttonText = 'Back to Schedule Option';
}

// Create the anchor tag with the appropriate href and text
var backButton = document.createElement('a');
backButton.setAttribute('href', redirectUrl);
backButton.setAttribute('class', 'back-button');
backButton.textContent = buttonText;

// Get the existing container where the button is located
var container = document.getElementById('itemContainer');

// Remove the existing anchor tag if it exists
var existingBackButton = container.querySelector('.back-button');
if (existingBackButton) {
    existingBackButton.remove();
}

// Append the new anchor tag to the container
container.appendChild(backButton);
