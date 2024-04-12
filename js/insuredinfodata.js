// Retrieve information from localStorage
var selectedOption = localStorage.getItem("selectedOption");
var jobNumber = localStorage.getItem("jobNumber");
var clientRefNumber = localStorage.getItem("clientRefNumber");
var date = localStorage.getItem("date");
var name = localStorage.getItem("name");
var address = localStorage.getItem("address");
var phoneNumber = localStorage.getItem("phoneNumber");

// Display information on the page
document.getElementById("client").textContent = selectedOption;
document.getElementById("jobNumber").textContent = jobNumber;
document.getElementById("clientRefNumber").textContent = clientRefNumber;
document.getElementById("name").textContent = name;

// Conditionally hide client reference number for Sedgwick
var clientRefNumberContainer = document.getElementById(
  "clientRefNumberContainer"
);
if (selectedOption === "Sedgwick") {
  clientRefNumberContainer.style.display = "none";
}

document.getElementById("date").textContent = formatDate(date);
document.getElementById("address").textContent = address;
document.getElementById("phoneNumber").textContent = phoneNumber;

// Function to format date as "dd/mm/yy"
function formatDate(inputDate) {
  var dateObj = new Date(inputDate);
  var day = dateObj.getDate();
  var month = dateObj.getMonth() + 1; // Months are zero-based
  var year = dateObj.getFullYear() % 100; // Get last two digits of the year

  return `${day}/${month}/${year}`;
}