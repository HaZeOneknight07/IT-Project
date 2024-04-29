document.addEventListener("DOMContentLoaded", function () {
    // Show the preloader
    document.querySelector(".preloader-container").style.display = "block";

    // Hide the main content (if needed)
    document.getElementById("main-content").style.display = "none";
});

window.addEventListener("load", function () {
    // Hide the preloader after a delay
    setTimeout(function () {
        document.querySelector(".preloader-container").style.display = "none";
        // Show the main content (if needed)
        document.getElementById("main-content").style.display = "block";
    }, 1000); // Adjust the delay (in milliseconds) as needed
});
