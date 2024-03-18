function simulateLoadingAndRedirect(page) {
    var container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
    container.innerHTML = '<div class="box"></div>'.repeat(5);

    container.classList.add('fade-out');

    setTimeout(function () {
        navigateToPage(page);
    }, 5000); // Adjust the delay time as needed (should match the transition duration)

    function navigateToPage(page) {
        window.location.href = page;
    }
}
