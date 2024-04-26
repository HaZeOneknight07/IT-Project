document.addEventListener("DOMContentLoaded", function () {
    // Retrieve report text from localStorage
    var reportText = localStorage.getItem("ReportText");

    // Display report text on the page
    document.getElementById("displayReportText").textContent =
      reportText || "No report text available.";
  });