document.getElementById('matchingForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = {
        task: document.getElementById('task').value,
        talkativity: parseFloat(document.getElementById('talkativity').value) / 100,
        formality: parseFloat(document.getElementById('formality').value) / 100,
        friendliness: parseFloat(document.getElementById('friendliness').value) / 100,
        extroversion: parseFloat(document.getElementById('extroversion').value) / 100,
        time_required: parseInt(document.getElementById('time').value),
        additional: ''
    };

    // Send the form data to your backend (Express server)
    try {
        const response = await fetch('/api/matches', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        document.getElementById('results').innerText = `Best matches: ${JSON.stringify(result)}`;
    } catch (error) {
        console.error('Error submitting form:', error);
        document.getElementById('results').innerText = 'Error finding matches';
    }
});

const socket = io();  // Assuming the client and server are on the same domain

socket.on('new-match', (matches) => {
    document.getElementById('results').innerText = `New match found: ${JSON.stringify(matches)}`;
});