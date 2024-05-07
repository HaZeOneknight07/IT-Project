// Function to show/hide option boxes based on selected client
function showOptionBoxes() {
    var selectedOption = document.getElementById("scheduling-option").value;
    var XactimateBoxes = document.getElementById("Xactimate-boxes");
    var SedgwickBoxes = document.getElementById("Sedgwick-boxes");

    // Display Xactimate boxes if selected, hide Sedgwick boxes, and vice versa
    if (selectedOption === "Xactimate") {
        XactimateBoxes.style.display = "block";
        SedgwickBoxes.style.display = "none";
        XactimateBoxes.classList.remove("fadeOut");
        XactimateBoxes.classList.add("fadeIn");
        SedgwickBoxes.classList.remove("fadeIn");
        SedgwickBoxes.classList.add("fadeOut");
    } else if (selectedOption === "Sedgwick") {
        SedgwickBoxes.style.display = "block";
        XactimateBoxes.style.display = "none";
        SedgwickBoxes.classList.remove("fadeOut");
        SedgwickBoxes.classList.add("fadeIn");
        XactimateBoxes.classList.remove("fadeIn");
        XactimateBoxes.classList.add("fadeOut");
    } else {
        XactimateBoxes.style.display = "none";
        SedgwickBoxes.style.display = "none";
        XactimateBoxes.classList.remove("fadeIn");
        XactimateBoxes.classList.add("fadeOut");
        SedgwickBoxes.classList.remove("fadeIn");
        SedgwickBoxes.classList.add("fadeOut");
    }
}


  // Function to submit the form and store data in local storage
  function submitForm() {
    var selectedOption = document.getElementById("scheduling-option").value;
    var jobNumber, clientRefNumber, date, name, address, phoneNumber;

    // Get values based on the selected client
    if (selectedOption === "Xactimate") {
      jobNumber = document.getElementById("Xactimate-input1").value;
      clientRefNumber = document.getElementById("Xactimate-input2").value;
      date = document.getElementById("Xactimate-date").value;
      name = document.getElementById("Xactimate-name").value;
      address = document.getElementById("Xactimate-input4").value;
      phoneNumber = document.getElementById("Xactimate-input5").value;
    } else if (selectedOption === "Sedgwick") {
      jobNumber = document.getElementById("Sedgwick-input1").value;
      date = document.getElementById("Sedgwick-date").value;
      name = document.getElementById("Sedgwick-name").value;
      address = document.getElementById("Sedgwick-input4").value;
      phoneNumber = document.getElementById("Sedgwick-input5").value;
    }

    // Check if required fields are filled
    if (!jobNumber || !date || !name || !address || !phoneNumber) {
      alert("Please fill in all fields.");
      return;
    }

    // Validate phone number format
    var phoneRegex =
      /^(?:(?:\+|00)44|0) ?(?:\d{3}|\(0\d{3}\)) ?\d{3}(?: |-)?\d{4}$/;

    if (!phoneRegex.test(phoneNumber)) {
      alert("Please enter a valid UK phone number.");
      return;
    }

    // Store data in local storage
    localStorage.setItem("selectedOption", selectedOption);
    localStorage.setItem("jobNumber", jobNumber);
    localStorage.setItem("clientRefNumber", clientRefNumber);
    localStorage.setItem("date", date);
    localStorage.setItem("name", name);
    localStorage.setItem("address", address);
    localStorage.setItem("phoneNumber", phoneNumber);

    window.location.href = "report.html";
  }