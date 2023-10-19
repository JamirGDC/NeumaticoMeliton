// Selecciona los elementos relevantes del carrusel
const carousel = document.querySelector('#default-carousel');
const items = carousel.querySelectorAll('[data-carousel-item]');
const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
const prevButton = carousel.querySelector('[data-carousel-prev]');
const nextButton = carousel.querySelector('[data-carousel-next]');

// Variable para rastrear la posición actual del carrusel
let currentPosition = 0;

// Función para mostrar la diapositiva en una posición específica
function showSlide(position) {
    if (position >= 0 && position < items.length) {
        // Oculta todas las diapositivas
        items.forEach(item => item.classList.add('hidden'));
        // Muestra la diapositiva en la posición deseada
        items[position].classList.remove('hidden');

        // Actualiza la posición actual
        currentPosition = position;
    }
}

// Función para avanzar a la siguiente diapositiva
function nextSlide() {
    showSlide(currentPosition + 1);
}

// Función para retroceder a la diapositiva anterior
function prevSlide() {
    showSlide(currentPosition - 1);
}

// Agrega eventos de clic a los botones "Previous" y "Next"
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Agrega eventos de clic a los indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
    });
});

// Inicializa el carrusel mostrando la posición predeterminada
showSlide(0);
