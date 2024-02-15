// Add your existing functions here
function redirectToHome() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "username" && password === "password") {
        window.location.href = "home.html";
    } else {
        alert("Invalid login credentials. Please try again.");
    }
}

function displayData() {
    const fileInput = document.getElementById('fileInput');
    const tableContainer = document.getElementById('tableContainer');

    const file = fileInput.files[0];

    if (file) {
        Papa.parse(file, {
            header: true,
            complete: function (result) {
                displayDataInTable(result.data, tableContainer);
            }
        });
    } else {
        alert('Please select a CSV file.');
    }
}

function displayDataInTable(jsonData, container) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headers = Object.keys(jsonData[0]);
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    jsonData.forEach(data => {
        const row = document.createElement('tr');
        headers.forEach(header => {
            const td = document.createElement('td');
            td.textContent = data[header];
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    container.innerHTML = '';
    container.appendChild(table);
}

// Add any other functions as needed
