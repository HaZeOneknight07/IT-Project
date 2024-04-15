// Login Validation Script

// Delay the hiding of preloader and showing login content after 5 seconds
setTimeout(function () {
    document.querySelector(".preloader-container").classList.add("hide");
    document.getElementById("main-content").classList.remove("hide");
  }, 5000);

  var credentials = [
    { username: "surveys@gelder.co.uk", password: "GelderSurveyors1" },
    { username: "managers@gelder.co.uk", password: "GelderManagers1" },
    // Add more username/password pairs as needed using same format
  ];

  function redirectToHome() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        for (var i = 0; i < credentials.length; i++) {
            if (username === credentials[i].username && password === credentials[i].password) {
                // Store data in local storage
                localStorage.setItem("loggedInUsername", username);
                localStorage.setItem("loggedInPassword", password);

                // Redirect to Managers Version
                if (username === "managers@gelder.co.uk") {
                    window.location.href = "scheduleoption.html"; // Redirect to Schedule Option Page
                // Redirect to Surveyors Version
                } else {
                    window.location.href = "hub.html"; // Redirect to Hub Page
                }
                return;
            }
        }

        // If no match found in the loop
        alert("Invalid login credentials. Please try again.");
    }

    // Caps Lock Indicator Script

    document.getElementById('password').addEventListener('keyup', function(event) {
        var capsLockEnabled = event.getModifierState && event.getModifierState('CapsLock');
        var warningElement = document.querySelector('.caps-lock-warning');
        if (capsLockEnabled) {
          warningElement.style.display = 'block';
        } else {
          warningElement.style.display = 'none';
        }
      });