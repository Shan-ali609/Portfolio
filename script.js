const humburger=document.querySelector('.imburger'); 
const ul= document.querySelector('ul');
humburger.addEventListener('click' , ()=>{
    ul.classList.toggle('ham_active');
})

// Select the element
const developerText = document.getElementById('developerText');

// Function to type out the text
function typeText(text) {
  developerText.textContent = '';  // Clear existing text content
  let index = 0;
  let interval = setInterval(() => {
    developerText.textContent += text[index];
    index++;
    if (index === text.length) {
      clearInterval(interval);  // Stop typing when the text is fully written
      setTimeout(() => {
        switchText();  // After 2 seconds, switch text
      }, 1000);
    }
  }, 150);  // Adjust this value for faster or slower typing speed
}

let count = 0;

function switchText() {
  if (count % 2 === 0) {
    // Type "WEB DEVELOPER"
    typeText("WEB DEVELOPER");
  } else {
    // Type "FULLSTACK DEVELOPER"
    typeText("FULL STACK DEVELOPER");
  }
  count++;
}

// Start the loop
switchText();
