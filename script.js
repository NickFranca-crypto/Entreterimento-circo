document.addEventListener("DOMContentLoaded", () => {
    const attractions = document.querySelectorAll('.attraction');

    attractions.forEach(attraction => {
        attraction.addEventListener('click', () => {
            alert(`Você clicou em: ${attraction.querySelector('h3').innerText}`);
        });
    });
});
