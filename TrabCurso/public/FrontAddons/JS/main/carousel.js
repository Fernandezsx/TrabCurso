// Carousel and inactivity handler
const INACTIVITY_DELAY = 20000; // 20 seconds
const PROMO_IMAGES = [
    '/FrontAddons/IMG/ImagemHamburguerimg.jpg'
];

let inactivityTimer;

function startTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(showCarousel, INACTIVITY_DELAY);
}

function showCarousel() {
    const overlay = document.getElementById('carousel-overlay');
    if (!overlay) return;
    overlay.style.display = 'flex';
    let index = 0;
    const img = overlay.querySelector('img');
    if (img) img.src = PROMO_IMAGES[index];
    const interval = setInterval(() => {
        index = (index + 1) % PROMO_IMAGES.length;
        if (img) img.src = PROMO_IMAGES[index];
    }, 3000);

    function close() {
        overlay.style.display = 'none';
        clearInterval(interval);
        overlay.removeEventListener('click', close);
        window.location.reload(); // volta para a tela inicial
    }

    overlay.addEventListener('click', close);
}

function resetTimer() {
    startTimer();
}

document.addEventListener('DOMContentLoaded', () => {
    ['mousemove', 'mousedown', 'keydown', 'touchstart'].forEach(evt => {
        document.addEventListener(evt, resetTimer);
    });
    startTimer();
});
