document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("searchInput")
      addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          var searchTerm = event.target.value.trim().toLowerCase();
          var loggedInUser = localStorage.getItem("loggedInUsername"); // Retrieve logged-in user from local storage
  
          // List of search terms for non-managers
          var searchTermsForNonManagers = [
            "login",
            "siteinformation",
            "siteinfo",
            "report",
            "hub",
            "rates",
            "documents",
            "complete",
            "insuredinfo",
            "reportinfo",
            "lv",
            "xactimate",
            "xact",
            "x",
            "sedgwick",
            "srs",
            "s",
          ];
          // List of search terms for managers
          var allowedSearchTermsForManagers = [
            "rates",
            "lv",
            "x",
            "xact",
            "xactimate",
            "srs",
            "salesforce",
            "sedgwick",
            "s",
          ];
  
          // Check if the user is logged in as managers@gelder.co.uk
          if (loggedInUser === "managers@gelder.co.uk") {
            // Check if the search term is allowed for managers
            if (allowedSearchTermsForManagers.includes(searchTerm)) {
              // Handle the allowed search term for managers
              switch (searchTerm) {
                case "rates":
                  window.location.href = "ratesoption.html"; // Redirect to ratesoption.html
                  break;
                case "lv":
                case "x":
                case "xact":
                case "xactimate":
                  window.location.href = "scheduleestimateXM.html"; // Redirect to scheduleestimateXM.html
                  break;
                case "srs":
                case "salesforce":
                case "sedgwick":
                case "s":
                  window.location.href = "scheduleestimateSM.html"; // Redirect to scheduleestimateSM.html
                  break;
                default:
                  // Handle other search terms for managers if needed
                  console.log("Invalid search term for managers");
                  break;
              }
            } else {
              // Redirect to a specific page for managers only if no valid search term is provided
              window.location.href = "ratesoption.html";
            }
          } else {
            // Allow full search functionality for non-managers
            // Check if the entered search term matches any of the predefined search terms for non-managers
            if (searchTermsForNonManagers.includes(searchTerm)) {
              // Redirect or perform action based on the matched search term
              switch (searchTerm) {
                case "login":
                  window.location.href = "index.html"; // Redirect to index.html for 'login'
                  break;
                case "siteinformation":
                case "siteinfo":
                  window.location.href = "siteinformation.html";
                  break;
                case "report":
                  window.location.href = "report.html";
                  break;
                case "hub":
                  window.location.href = "hub.html";
                  break;
                case "rates":
                  window.location.href = "ratesoption.html";
                  break;
                case "documents":
                  window.location.href = "documents.html";
                  break;
                case "complete":
                  window.location.href = "complete.html";
                  break;
                case "insuredinfo":
                  window.location.href = "insuredinfo.html";
                  break;
                case "reportinfo":
                  window.location.href = "reportinfo.html";
                  break;
                case "lv":
                case "xactimate":
                case "xact":
                case "x":
                  window.location.href = "scheduleestimateX.html";
                  break;
                case "salesforce":
                case "sedgwick":
                case "srs":
                case "s":
                  window.location.href = "scheduleestimateS.html";
                  break;
                default:
                  // Handle default case or do nothing
                  break;
              }
            } else {
              // Handle other search terms for non-managers or do nothing
            }
          }
        }
      });
  });
  