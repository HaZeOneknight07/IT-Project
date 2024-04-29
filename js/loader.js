document.addEventListener("DOMContentLoaded", function () {
    // Show the preloader
    document.querySelector(".preloader-container").style.display = "block";

    // Hide the main content
    document.getElementById("main-content").style.display = "none";
});

window.addEventListener("load", function () {
    // Hide the preloader
    document.querySelector(".preloader-container").style.display = "none";

    // Show the main content
    document.getElementById("main-content").style.display = "block";
});
