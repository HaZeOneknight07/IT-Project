document.addEventListener("DOMContentLoaded", function() {
  // Delay the hiding of preloader and showing login content after 5 seconds
  setTimeout(function () {
    document.querySelector(".preloader-container").classList.add("hide");
    document.getElementById("main-content").classList.remove("hide");
  }, 5000);

  var credentials = [
    {
      username: "admin@gelder.co.uk",
      password: "ADMIN!Gelder18#",
      name: "Admin",
      job: "Administrator",
    },
    {
      username: "surveys@gelder.co.uk",
      password: "GelderSurveyors1",
      name: "Surveyor",
      job: "Surveyor",
    },
    {
      username: "managers@gelder.co.uk",
      password: "GelderManagers1",
      name: "Manager",
      job: "Contracts Manager",
    },
    // Add more username/password/name/job pairs as needed using same format
  ];

  function redirectToHome() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = credentials.find(cred => cred.username === username);

    if (user && password === user.password) {
      document.getElementById("name").value = user.name;
      document.getElementById("job").value = user.job;

      localStorage.setItem("loggedInUsername", username);
      localStorage.setItem("loggedInPassword", password);

      if (username === "managers@gelder.co.uk") {
        window.location.href = "scheduleoption.html";
      } else if (username === "surveyors@gelder.co.uk") {
        window.location.href = "hub.html";
      } else if (username === "admin@gelder.co.uk") {
        window.location.href = "admin.html";
      }
    } else {
      alert("Invalid login credentials. Please try again.");
    }
  }

  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    redirectToHome();
  });

  document.getElementById("password").addEventListener("keyup", function (event) {
    var capsLockEnabled = event.getModifierState && event.getModifierState("CapsLock");
    var warningElement = document.querySelector(".caps-lock-warning");
    if (capsLockEnabled) {
      warningElement.style.display = "block";
    } else {
      warningElement.style.display = "none";
    }
  });
});
