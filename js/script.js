// back to top
document.querySelector('.backtotop1 > p').addEventListener('click', function() {
  window.scrollTo({
    top: 0, // Scroll to the top of the page
    behavior: 'smooth' // Smooth scroll animation
  });
});

// scroll hero section
let sliderBtnLeft = document.getElementById("slide-btn-left");
let sliderBtnRight = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item");

let startSlider = 0;
let endSlider = (imgItem.length - 1) * 100; // end position (slider will stop at the last image)

// Left Button (move slider to the left)
sliderBtnLeft.addEventListener("click", () => {
  if (startSlider > 0) {
    startSlider -= 100; // Move one step left (reduce the position)
  } else {
    // Loop back to the last image when at the start
    startSlider = endSlider;
  }
  updateSliderPosition();
});

// Right Button (move slider to the right)
sliderBtnRight.addEventListener("click", () => {
  if (startSlider < endSlider) {
    startSlider += 100; // Move one step right (increase the position)
  } else {
    // Loop back to the first image when at the last
    startSlider = 0;
  }
  updateSliderPosition();
});

// Function to update the position of each image in the slider
function updateSliderPosition() {
  imgItem.forEach(element => {
    element.style.transform = `translateX(-${startSlider}%)`;
  });
}

// Auto-scroll functionality (move right every 2 seconds)
let autoScroll = setInterval(() => {
  if (startSlider < endSlider) {
    startSlider += 100; // Move one step right (increase the position)
  } else {
    // Loop back to the first image when at the last
    startSlider = 0;
  }
  updateSliderPosition();
}, 4000); // Auto-scroll every 2 seconds

// Stop auto-scroll when user interacts with the buttons
sliderBtnLeft.addEventListener("click", () => {
  clearInterval(autoScroll); // Clear auto-scroll when left button is clicked
  autoScroll = setInterval(() => {
    if (startSlider < endSlider) {
      startSlider += 100;
    } else {
      startSlider = 0;
    }
    updateSliderPosition();
  }, 2000); // Restart auto-scroll after clicking
});

sliderBtnRight.addEventListener("click", () => {
  clearInterval(autoScroll); // Clear auto-scroll when right button is clicked
  autoScroll = setInterval(() => {
    if (startSlider < endSlider) {
      startSlider += 100;
    } else {
      startSlider = 0;
    }
    updateSliderPosition();
  }, 2000); // Restart auto-scroll after clicking
});


// Change language
