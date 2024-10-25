const burgerImages = document.querySelectorAll('.burger img');
const toggleImage = document.querySelector('.burger-toggle img'); 

let currentIndex = 0;
toggleImage.src = burgerImages[currentIndex].src; 

burgerImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index; 
        toggleImage.src = burgerImages[currentIndex].src; 
    });
});

function createStars() {
    const starsContainer = document.getElementById('stars');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * windowWidth}px`;
        star.style.top = `${Math.random() * windowHeight}px`;
        starsContainer.appendChild(star);
    }
}

window.addEventListener('load', createStars);
