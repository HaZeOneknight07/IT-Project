// Delay the hiding of preloader and showing login content after 5 seconds
setTimeout(function () {
  document.querySelector(".preloader-container").classList.add("hide");
  document.getElementById("main-content").classList.remove("hide");
}, 5000);

document.addEventListener("DOMContentLoaded", function() {
  const firebaseConfig = {
    apiKey: "AIzaSyCq4mZfp2XSASkrdoCt4BrQHKsMpMdPz20",
    authDomain: "rates-website-db.firebaseapp.com",
    databaseURL: "https://rates-website-db-default-rtdb.firebaseio.com",
    projectId: "rates-website-db",
    storageBucket: "rates-website-db.appspot.com",
    messagingSenderId: "841721059290",
    appId: "1:841721059290:web:19edd2668bb7b86ca112e3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const database = firebase.database();
  
  // Add event listener for form submission
  const loginForm = document.getElementById("login-box");
  if (loginForm) {
      loginForm.addEventListener("submit", function(event) {
          event.preventDefault();
          redirectToHome();
      });
  } else {
      console.error("Login form element not found.");
  }
  
  // Listen for input events on username and password fields
  const usernameField = document.getElementById("username");
  const passwordField = document.getElementById("password");
  if (usernameField && passwordField) {
      usernameField.addEventListener("input", function() {
          handleAutofill(this);
      });
  
      passwordField.addEventListener("input", function() {
          handleAutofill(this);
      });
  } else {
      console.error("Username or password field not found.");
  }
  
  function handleAutofill(field) {
      if (field.value !== "") {
          field.nextElementSibling.classList.add("active");
      } else {
          field.nextElementSibling.classList.remove("active");
      }
  }
  
  function redirectToHome() {
      var username = document.getElementById("username").value.toLowerCase();
      var password = document.getElementById("password").value;
  
      auth.signInWithEmailAndPassword(username, password)
          .then((userCredential) => {
              var user = userCredential.user;
  
              // Store data in local storage
              localStorage.setItem("loggedInUsername", username);
              localStorage.setItem("loggedInUserEmail", username);
  
              // Fetch user role from Realtime Database using UID
              database.ref('users/' + user.uid).once('value').then((snapshot) => {
                  var role = snapshot.val().role;
  
                  // Redirect based on user role
                  if (role === "manager") {
                      window.location.href = "scheduleoption.html";
                  } else if (role === "surveyor") {
                      window.location.href = "hub.html";
                  } else if (role === "admin") {
                      window.location.href = "admin.html";
                  } else {
                      alert("Invalid user role.");
                  }
              });
          })
          .catch((error) => {
              alert("Invalid login credentials. Please try again.");
              console.error(error);
          });
  }
  
  // Caps Lock Indicator Script
  if (passwordField) {
      passwordField.addEventListener("keyup", function(event) {
          var capsLockEnabled = event.getModifierState && event.getModifierState("CapsLock");
          var warningElement = document.querySelector(".caps-lock-warning");
          if (capsLockEnabled) {
              warningElement.style.display = "block";
          } else {
              warningElement.style.display = "none";
          }
      });
  } else {
      console.error("Password field not found.");
  }
});
