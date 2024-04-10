let sliderImages = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

function nextSlide() {
    sliderImages[currentSlide].style.transform = 'translateX(-100%)';
    currentSlide = (currentSlide + 1) % sliderImages.length;
    sliderImages[currentSlide].style.transform = 'translateX(0)';
}