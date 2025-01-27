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




// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to trigger animations on sections
function checkSectionAnimation() {
  const leftSection = document.querySelector('.left-section');
  const rightSection = document.querySelector('.right-section');
  const skillsSection = document.querySelector('#SKILLS');

  // If left section is in view, add the animation class
  if (isInViewport(leftSection)) {
    leftSection.classList.add('animate-left');
  }

  // If right section is in view, add the animation class
  if (isInViewport(rightSection)) {
    rightSection.classList.add('animate-right');
  }

  // If SKILLS section is in view, add the animation class
  if (isInViewport(skillsSection)) {
    skillsSection.classList.add('animate-skills');
  }
}

// Function to trigger animations on cards (with delays)
function checkCardAnimation() {
  const cards = document.querySelectorAll('.cardbody');

  cards.forEach((card, index) => {
    // If the card is in the viewport, trigger the animation with a delay
    if (isInViewport(card)) {
      card.classList.add('animate-left'); // Default to 'animate-left' for the first card
      if (index === 1) {
        card.classList.add('animate-bottom'); // Second card: Slide from bottom
      } else if (index === 2) {
        card.classList.add('animate-right'); // Third card: Slide from right
      }
      card.style.animationDelay = `${index * 1}ms`; // Delay for each card (1s delay for each subsequent card)
    }
  });
}

// Listen for scroll events and trigger both section and card animations
window.addEventListener('scroll', () => {
  checkSectionAnimation();
  checkCardAnimation();
});

// Trigger initial check in case the page is already loaded and some elements are in view
checkSectionAnimation();
checkCardAnimation();
