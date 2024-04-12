function loadPage(url) {
    // Show loading animation
    document.querySelector(".container").style.opacity = "1";

    // Redirect to the next page after a delay
    setTimeout(function () {
      window.location.href = url;
    }, 5000); // Adjust the delay time as needed (should match the loading animation duration)
  }