// Get the elements
const background = document.getElementById('bangoArt');


// Function to toggle the theme
function switchTheme() {
  if (background.style.backgroundColor === 'black') {
    background.style.backgroundColor = 'white';
    switchWord.textContent = 'black'; // Update the text
  } else {
    background.style.backgroundColor = 'black';
    switchWord.textContent = 'white'; // Update the text
  }
}

// Add a click event listener to the switchWord element
switchWord.addEventListener('click', switchTheme);
