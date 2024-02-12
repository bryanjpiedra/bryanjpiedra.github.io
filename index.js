function flipCard(card) {
    card.classList.toggle('flip');
}

const button = document.getElementById('moveButton');
let clickCount = 0;
const buttonTexts = ['Almost there...', 'Redirecting...', 'Just kidding', 'Click again', 'I love you <3'];

button.addEventListener('click', function() {
    // Change the button text
    button.textContent = buttonTexts[clickCount];
    
    // Increment the click count
    clickCount++;
    
    // Check if the click count is 5
    if (clickCount === 6) {
        // Redirect to another webpage after the fifth click
        window.location.href = 'EstherVideo.html'; // Replace 'your-destination-page.html' with the actual URL
    }
});