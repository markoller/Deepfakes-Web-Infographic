// script.js
document.addEventListener("DOMContentLoaded", () => {
    const imagen = document.getElementById("imagenDeslizable");

    imagen.addEventListener("click", () => {
        imagen.classList.toggle("deslizar"); // Alterna la clase deslizar al hacer clic
    });
});
 

function animarImagen() {
    var imagen = document.querySelector('.mapabillie');
    imagen.classList.add('animar');
}