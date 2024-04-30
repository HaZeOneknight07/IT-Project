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

// Get the existing anchor tag
var backButton = document.querySelector('.back-button');

// Update the href and text of the existing button
backButton.setAttribute('href', redirectUrl);
backButton.textContent = buttonText;
