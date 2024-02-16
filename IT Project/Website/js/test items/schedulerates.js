// schedulerates.js

let ratesData;

// Function to display rates in the results div
function displayRates(searchTerm) {
    const resultsDiv = document.getElementById('rateResults');
    resultsDiv.innerHTML = ''; // Clear previous results

    // Filter rates based on the search term's first letter
    const filteredRates = ratesData.filter(rate => rate.name.toLowerCase().startsWith(searchTerm.toLowerCase()));

    // Display filtered rates in the results div
    const listContainer = document.createElement('div');
    listContainer.classList.add('list-container');

    filteredRates.forEach(rate => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');
        listItem.textContent = rate.name;
        listItem.onclick = () => selectRate(rate.id);
        listContainer.appendChild(listItem);
    });

    resultsDiv.appendChild(listContainer);
}

// Function to select a rate
function selectRate(rateId) {
    const selectedRateIdInput = document.getElementById('selectedRateId');
    selectedRateIdInput.value = rateId;

    // Fetch and display additional details (price, etc.) based on rateId
    const selectedRate = ratesData.find(rate => rate.id === rateId);
    if (selectedRate) {
        document.getElementById('ratePrice').textContent = `Price: £${selectedRate.price.toFixed(2)}`;
    }
}

// Function to handle enter key press
function handleEnterKey(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission

        // Get selected rate ID and quantity
        const selectedRateId = document.getElementById('selectedRateId').value;
        const quantity = document.getElementById('quantity').value;

        // Validate selected rate ID and quantity
        if (selectedRateId && quantity && !isNaN(quantity) && quantity > 0) {
            // Fetch rate information based on the selected rate ID
            const rate = ratesData.find(rate => rate.id === selectedRateId);
            if (rate) {
                // Calculate total price
                const totalPrice = quantity * rate.price;

                // Display total price
                alert(`Total Price: £${totalPrice.toFixed(2)}`);
            } else {
                alert('Rate information not found for the selected rate.');
            }
        } else {
            alert('Invalid input. Please select a rate and enter a valid quantity.');
        }
    }
}

// Load the JSON file and initialize the page
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const ratesResponse = await fetch('rates.json');
        if (!ratesResponse.ok) {
            throw new Error(`Failed to fetch rates data: ${ratesResponse.status} ${ratesResponse.statusText}`);
        }
        ratesData = await ratesResponse.json(); // Store the loaded rates data
    } catch (error) {
        console.error(error);
    }
});
