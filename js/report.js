document.addEventListener("DOMContentLoaded", function () {
    var localStorageItem = function (key) {
      return localStorage.getItem(key) || "";
    };

    var selectedOption = localStorageItem("selectedOption");
    console.log("Selected Option:", selectedOption);

    var jobNumber = localStorageItem("jobNumber");
    var clientRefNumber = localStorageItem("clientRefNumber");
    var date = localStorageItem("date");
    var name = localStorageItem("name");
    var address = localStorageItem("address");
    var phoneNumber = localStorageItem("phoneNumber");

    var optionDisplayNames = {
      Xactimate: "Xactimate",
      Sedgwick: "Sedgwick",
    };

    document.getElementById("selectedOption").innerHTML =
      "<strong>Selected Option:</strong> " +
      (optionDisplayNames[selectedOption] || "");
    document.getElementById("jobNumberBox").innerHTML =
      "<strong>Job Number:</strong> " + jobNumber;
    if (selectedOption === "Xactimate") {
      document.getElementById("clientRefNumberBox").innerHTML =
        "<strong>Client Reference Number:</strong> " + clientRefNumber;
    }
    // Format the date as "dd/mm/yy"
    document.getElementById("dateBox").innerHTML =
      "<strong>Date:</strong> " + formatDate(date);
    document.getElementById("nameBox").innerHTML =
      "<strong>Name:</strong> " + name;
    document.getElementById("addressBox").innerHTML =
      "<strong>Address:</strong> " + address;
    document.getElementById("phoneNumberBox").innerHTML =
      "<strong>Phone Number:</strong> " + phoneNumber;

    // Leave the report box empty
    document.getElementById("report-input1").value = "";
  });

  function submitReport() {
    var reportText = document.getElementById("report-input1").value;

    // Validation to check if the reportText is empty
    if (!reportText) {
      alert("Please enter text into the report.");
      return;
    }

    localStorage.setItem("ReportText", reportText);
    window.location.href = "hub.html";
  }

  // Function to format date as "dd/mm/yy"
  function formatDate(inputDate) {
    var dateObj = new Date(inputDate);
    var day = dateObj.getDate();
    var month = dateObj.getMonth() + 1; // Months are zero-based
    var year = dateObj.getFullYear() % 100; // Get last two digits of the year

    return `${day}/${month}/${year}`;
  }