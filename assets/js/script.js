// Prices for each card
const prices = {
    1: '49.99',
    2: '69.99',
    3: '89.99'
};

// Function to toggle the price when the button is clicked
function togglePrice(cardNumber) {
    // Get the card element by its ID
    const card = document.getElementById(`card${cardNumber}`);
    
    // Get the price element
    const priceElement = card.querySelector('.price');
    
    // Get the button element
    const button = card.querySelector('.fund-card-show');
    
    // Check if the price is currently showing
    if (priceElement.classList.contains('show')) {
        // Hide the price (set to dashed)
        priceElement.textContent = '-- -- --';
        priceElement.classList.remove('show');
        button.classList.remove('clicked');
    } else {
        // Show the price
        priceElement.textContent = prices[cardNumber];
        priceElement.classList.add('show');
        button.classList.add('clicked');
    }
}


// chat upload section js 
// script.js
// script.js
const toggleButton = document.getElementById('upload-btn');
const toggleDiv = document.getElementById('toggle-div');
const closeButton = document.getElementById('close-btn');

// Toggle class on button and div
toggleButton.addEventListener('click', () => {
    toggleDiv.classList.toggle('show');
    toggleButton.classList.toggle('active-btn'); // Add/remove active class on button
});

// Close the div and remove button's class when close button is clicked
closeButton.addEventListener('click', () => {
    toggleDiv.classList.remove('show');
    toggleButton.classList.remove('active-btn'); // Remove active class from button
});

// Close the div and remove button's class when clicked outside
document.addEventListener('click', (event) => {
    if (!toggleDiv.contains(event.target) && event.target !== toggleButton) {
        toggleDiv.classList.remove('show');
        toggleButton.classList.remove('active-btn'); // Remove active class from button
    }
});
