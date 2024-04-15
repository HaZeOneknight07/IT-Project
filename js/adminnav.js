$(document).ready(function () {
    $(document).delegate(".open", "click", function (event) {
        $(this).addClass("opened");
        event.stopPropagation();
    });
    $(document).delegate("body", "click", function (event) {
        $(".open").removeClass("opened");
    });
    $(document).delegate(".close", "click", function (event) {
        $(".open").removeClass("opened");
        event.stopPropagation();
    });
});

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

// Form submission handler
document.getElementById('createUserForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get email and password from form
    var email = document.getElementById('newUserEmail').value;
    var password = document.getElementById('newUserPassword').value;
    
    // Create new user
    createUser(email, password);
});
