const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');

const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
let currentIndex = 0;

function updateGallery(index) {
    gallery.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    console.log(currentIndex);

    updateGallery(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateGallery(currentIndex);
});