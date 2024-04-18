var credentials = [
    { username: "admin@gelder.co.uk", password: "ADMIN!Gelder18#", name: "Admin", job: "Administrator" },
    { username: "surveys@gelder.co.uk", password: "GelderSurveyors1", name: "Surveyor", job: "Surveyor" },
    { username: "managers@gelder.co.uk", password: "GelderManagers1", name: "Manager", job: "Manager" },
    // Add more username/password/name/job pairs as needed using same format
  ];
  
  function redirectToHome() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    for (var i = 0; i < credentials.length; i++) {
      if (
        username === credentials[i].username &&
        password === credentials[i].password
      ) {
        // Populate name and job title fields
        document.getElementById("name").value = credentials[i].name;
        document.getElementById("job").value = credentials[i].job;
  
        // Store data in local storage
        localStorage.setItem("loggedInUsername", username);
        localStorage.setItem("loggedInPassword", password);
    
        // Redirect based on user type
        if (username === "managers@gelder.co.uk") {
          window.location.href = "scheduleoption.html"; // Redirect to Schedule Option Page
        } else if (username === "surveyors@gelder.co.uk") {
          window.location.href = "hub.html"; // Redirect to Hub Page
        } else if (username === "admin@gelder.co.uk") {
          window.location.href = "admin.html"; // Redirect to Admin Panel
        }
        return;
      }
    }
    
    // If no match found in the loop
    alert("Invalid login credentials. Please try again.");
  }
  
  // Caps Lock Indicator Script
  document.getElementById("password").addEventListener("keyup", function (event) {
    var capsLockEnabled =
      event.getModifierState && event.getModifierState("CapsLock");
    var warningElement = document.querySelector(".caps-lock-warning");
    if (capsLockEnabled) {
      warningElement.style.display = "block";
    } else {
      warningElement.style.display = "none";
    }
  });
  