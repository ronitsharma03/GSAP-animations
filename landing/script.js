

// Create a timeline
let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

// Array of image containers and text elements
const imgContainers = document.querySelectorAll('.img-container');
const texts = document.querySelectorAll('#text h1');

// Loop through each image container and text pair
imgContainers.forEach((imgContainer, index) => {
  // Add animation for image container
  tl.to(imgContainer, {
    width: "100%",
    ease: Expo.easeInOut,
    stagger: 2,
  }, index*4); // Stagger the animations

  // Add animation for text appearance
  tl.to(texts[index], {
    ease: Expo.easeInOut,
    top: 0,
    stagger: 2
}, index*4); // Sync with the img-container animation

  // Add animation for text disappearance
  tl.to(texts[index], {
    ease: Expo.easeInOut,
    top: "-100%",
    stagger: 2,
    // delay: 1 // Ensure it stays visible before moving out
  }, index*4 + 3); // Stagger to ensure it starts after the text has appeared
});

