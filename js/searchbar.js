document.addEventListener('DOMContentLoaded', function() {
document.getElementById('searchInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    var searchTerm = event.target.value.trim().toLowerCase();
    // List of search terms
    var searchTerms = ['login', 'siteinformation', 'siteinfo', 'report', 'hub', 'rates', 'documents', 'complete', 'insuredinfo', 'reportinfo', 'xactimate', 'xact', 'x', 'sedgwick', 'srs', 's']; // Add more search terms as needed
    
    // Check if the entered search term matches any of the predefined search terms
    if (searchTerms.includes(searchTerm)) {
      // Redirect or perform action based on the matched search term
      switch (searchTerm) {
        case 'login':
          window.location.href = 'index.html'; // Redirect to index.html for 'login'
          break;
        case 'siteinformation':
        case 'siteinfo':
          window.location.href = 'siteinformation.html'; 
          break;
        case 'report':
          window.location.href = 'report.html'; 
          break;
        case 'hub':
          window.location.href = 'hub.html'; 
          break;
        case 'rates':
          window.location.href = 'rates.html'; 
          break;
        case 'documents':
          window.location.href = 'documents.html'; 
          break;
        case 'complete':
          window.location.href = 'complete.html'; 
          break;
        case 'insuredinfo':
          window.location.href = 'insuredinfo.html'; 
          break;
        case 'reportinfo':
          window.location.href = 'reportinfo.html'; 
          break;
        case 'xactimate':
        case 'xact':
        case 'x':
          window.location.href = 'scheduleestimateX.html'; 
          break;
        case 'sedgwick':
        case 'srs':
        case 's':
          window.location.href = 'scheduleestimateS.html'; 
          break;
        default:
          // Handle default case or do nothing
          break;
      }
    } else {
      // Handle other search terms or do nothing
    }
  }
});
});
