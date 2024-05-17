firebase.auth().onAuthStateChanged(user => {
    if (user) {
        if (user.email === 'admin@gelder.co.uk') {
            // User is authenticated and has the correct email
            console.log('Access granted');
        } else {
            // User is authenticated but does not have the correct email
            alert('You do not have permission to access this page.');
            window.location.href = 'index.html';
        }
    } else {
        // No user is authenticated
        window.location.href = 'index.html';
    }
});
