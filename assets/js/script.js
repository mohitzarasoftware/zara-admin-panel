
// menu btn 
const menuBtn = document.getElementById('chat-menu-btn');
const chatMenu = document.getElementById('chat-menu-detail');

// Toggle class on button click
menuBtn.addEventListener('click', (event) => {
    chatMenu.classList.toggle('menu-open');
    event.stopPropagation(); // Prevent event from bubbling up
});

// Close the div when clicking outside
document.addEventListener('click', (event) => {
    if (!chatMenu.contains(event.target) && event.target !== menuBtn) {
        chatMenu.classList.remove('menu-open'); // Remove class when clicking outside
    }
});



// Function for toggling divs and handling outside click with exclusive open div
function setupToggle(toggleButtonId, toggleDivId, closeButtonId) {
    const toggleButton = document.getElementById(toggleButtonId);
    const toggleDiv = document.getElementById(toggleDivId);
    const closeButton = document.getElementById(closeButtonId);

    // Toggle class on button and div
    toggleButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        closeAllDivs(); // Close all other divs before opening this one
        toggleDiv.classList.toggle('show');
        toggleButton.classList.toggle('active-btn');
    });

    // Close the div and remove button's class when close button is clicked
    closeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDiv.classList.remove('show');
        toggleButton.classList.remove('active-btn');
    });

    // Close the div and remove button's class when clicked outside
    document.addEventListener('click', (event) => {
        if (!toggleDiv.contains(event.target) && event.target !== toggleButton) {
            closeAllDivs();
        }
    });

    // Function to close all divs and remove the active class from buttons
    function closeAllDivs() {
        const allDivs = document.querySelectorAll('.toggle-div'); // Use a common class for all divs
        const allButtons = document.querySelectorAll('.toggle-btn'); // Use a common class for all buttons
        allDivs.forEach(div => div.classList.remove('show'));
        allButtons.forEach(button => button.classList.remove('active-btn'));
    }
}

// Setup multiple sections by calling the function with different IDs
setupToggle('upload-btn', 'toggle-div', 'close-btn');
setupToggle('rating-upload-btn', 'rating-toggle-div', 'rating-close-btn'); // For rating section

