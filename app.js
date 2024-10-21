let randomInterval;

// Function to generate and display random numbers
function displayRandomNumber() {
    const randomNumbersDiv = document.getElementById('randomNumbers');
    const randomNumber = Math.floor(10000 + Math.random() * 900000); // Random number between 5 and 6 digits

    // Create a new number element
    const numberElement = document.createElement('div');
    numberElement.textContent = randomNumber;
    numberElement.style.transform = 'translateY(0)';
    randomNumbersDiv.appendChild(numberElement);

    // Animate the rotation
    if (randomNumbersDiv.childNodes.length > 1) {
        const oldElement = randomNumbersDiv.childNodes[0];
        oldElement.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            randomNumbersDiv.removeChild(oldElement);
        }, 50); // Remove the old element after animation
    }
}

// Start displaying random numbers every second
function startRandomNumberDisplay() {
    randomInterval = setInterval(displayRandomNumber, 600);
}

// Stop displaying random numbers
function stopRandomNumberDisplay() {
    clearInterval(randomInterval);
}

// Event listener for the button click
document.getElementById('submitButton').addEventListener('click', function() {
    const numberInput = document.getElementById('numberInput').value;
    const displayNumber = document.getElementById('displayNumber');
    const lotteryTicket = document.getElementById('numberImage');
    const ticketNumber = document.getElementById('ticketNumber');
    const randomNumbersDiv = document.getElementById('randomNumbers');

    if (numberInput) {
        displayNumber.textContent = `Nagaland Lottery Live Machine`;

        // Start generating random numbers
        startRandomNumberDisplay();

        // Animate the entered number and ticket after a delay
        setTimeout(() => {
            stopRandomNumberDisplay(); // Stop random numbers
            
            // Clear random numbers display
            randomNumbersDiv.innerHTML = '';

            // Display the entered number in the random numbers area
            const enteredNumberElement = document.createElement('div');
            enteredNumberElement.textContent = numberInput;
            enteredNumberElement.style.fontSize = '36px'; // Adjust font size if needed
            enteredNumberElement.style.fontWeight = 'bold';
            enteredNumberElement.style.color = 'red'; // Color can be adjusted
            randomNumbersDiv.appendChild(enteredNumberElement);

            // Show the lottery ticket
            ticketNumber.textContent = numberInput;
            lotteryTicket.style.display = 'flex'; // Make it visible

            lotteryTicket.style.opacity = '0'; // Start as invisible

            // Trigger image animation
            setTimeout(() => {
                lotteryTicket.style.transform = 'translateY(0)'; // Slide the ticket into view
                lotteryTicket.style.opacity = '1'; // Fade in the ticket
            }, 50); // Short delay before starting the slide
        }, 5000); // Wait for 5 seconds before showing the entered number and ticket
    } else {
        displayNumber.textContent = 'Please enter a number.';
        ticketNumber.textContent = ''; // Clear ticket number if no input
        lotteryTicket.style.display = 'none'; // Hide the ticket
    }
});

// Disable random number generation on initial load
window.onload = function() {
    document.getElementById('randomNumbers').innerHTML = '';
    document.getElementById('numberImage').style.display = 'none'; // Hide ticket initially
};
