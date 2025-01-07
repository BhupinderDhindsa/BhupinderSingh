// document.querySelector('form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     alert('Your message has been sent! Thank you for reaching out.');
// });

let currentIndex = 0;

// Get all slides
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

// Go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

// Go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Update the slider position
function updateSlider() {
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

// Automatically move to the next slide every 5 seconds
setInterval(nextSlide, 5000);


// Function to open the image in a popup
function openImagePopup(src) {
    const popup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popupImage");

    popupImage.src = src; // Set the source of the image
    popup.style.display = "block"; // Show the popup
}

// Function to close the image popup
function closeImagePopup() {
    const popup = document.getElementById("imagePopup");
    popup.style.display = "none"; // Hide the popup
}


