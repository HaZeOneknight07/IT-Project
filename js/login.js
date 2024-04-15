// Login Validation Script

// Delay the hiding of preloader and showing login content after 5 seconds
setTimeout(function () {
  document.querySelector(".preloader-container").classList.add("hide");
  document.getElementById("main-content").classList.remove("hide");
}, 5000);

// Function to create new user
function createUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // New user created successfully
          var user = userCredential.user;
          alert('New user created successfully');
          console.log('New user:', user);
          // Clear form fields
          document.getElementById('newUserEmail').value = '';
          document.getElementById('newUserPassword').value = '';
      })
      .catch((error) => {
          // Handle errors
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
          console.error('Error creating user:', errorMessage);
      });
}

// Form submission handler for login form
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  console.log('Form submitted'); // Debugging statement
  
  // Get email and password from form
  var email = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  console.log('Email:', email, 'Password:', password); // Debugging statement
  
  // Authenticate user
  authenticateUser(email, password);
});

// Function to authenticate user
function authenticateUser(email, password) {
  // Authenticate user using Firebase
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed in successfully
      var user = userCredential.user;
      console.log('User signed in:', user);
      // Redirect user or perform other actions
    })
    .catch((error) => {
      // Handle authentication errors
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      console.error('Error authenticating user:', errorMessage);
    });
}

// Caps Lock Indicator Script
document.getElementById("password").addEventListener("keyup", function (event) {
  var capsLockEnabled = event.getModifierState && event.getModifierState("CapsLock");
  var warningElement = document.querySelector(".caps-lock-warning");
  if (capsLockEnabled) {
    warningElement.style.display = "block";
  } else {
    warningElement.style.display = "none";
  }
});