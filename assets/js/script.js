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
