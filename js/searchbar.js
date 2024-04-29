document.getElementById('searchInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    var searchTerm = event.target.value.trim().toLowerCase();
    if (searchTerm === 'login') {
      window.location.href = 'index.html'; // Redirect to index.html
    } else {
      // Handle other search terms or do nothing
    }
  }
});