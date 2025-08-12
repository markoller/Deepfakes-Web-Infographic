//MENSAJE POPUP SEGUN SCROLL

window.addEventListener("scroll", function() {
    const seccion1 = document.querySelector('.seccion1');
    const popup = document.querySelector('.popup');
    const seccion1Top = seccion1.getBoundingClientRect().top;

    // Mostrar el popup cuando la primera sección comience a entrar en la vista
    if (seccion1Top <= window.innerHeight) {
        popup.style.display = "flex"; // Muestra el popup
    }
});

//VIDEOS AUTOPLAY SEGUN SCROLL

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video-seccion3');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();  // Reproduce el video cuando la sección es visible
            } else {
                video.pause(); // Pausa el video cuando la sección no es visible
            }
        });
    }, {
        threshold: 0.5 // El video empezará a reproducirse cuando el 50% de la sección esté visible
    });

    observer.observe(document.querySelector('.seccion3'));
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video-grafico');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();  // Reproduce el video cuando la sección es visible
            } else {
                video.pause(); // Pausa el video cuando la sección no es visible
            }
        });
    }, {
        threshold: 0.5 // El video empezará a reproducirse cuando el 50% de la sección esté visible
    });

    observer.observe(document.querySelector('.grafico-seccion2'));
});

//Ventana afectadas

document.getElementById('abrirVentana').addEventListener('click', function() {
    document.getElementById('ventana').classList.remove('oculto');
});

document.getElementById('cerrarVentana').addEventListener('click', function() {
    document.getElementById('ventana').classList.add('oculto');
});

//Ventana politicas
document.getElementById('abrirVentana2').addEventListener('click', function() {
    document.getElementById('ventana2').classList.remove('oculto');
});

document.getElementById('cerrarVentana2').addEventListener('click', function() {
    document.getElementById('ventana2').classList.add('oculto');
});

//Ventana legalidad

document.getElementById('abrirVentana3').addEventListener('click', function() {
    document.getElementById('ventana3').classList.remove('oculto');
});

document.getElementById('cerrarVentana3').addEventListener('click', function() {
    document.getElementById('ventana3').classList.add('oculto');
});

//POSICION DE LAS VENTANAS AL HACER CLICK EN ELLAS

let maxZIndex = 1000; 

function traerAlFrente(ventana) {
    maxZIndex++;
    ventana.style.zIndex = maxZIndex; 
}

document.getElementById('ventana').addEventListener('click', function() {
    traerAlFrente(document.getElementById('ventana'));
});

document.getElementById('ventana2').addEventListener('click', function() {
    traerAlFrente(document.getElementById('ventana2'));
});

document.getElementById('ventana3').addEventListener('click', function() {
    traerAlFrente(document.getElementById('ventana3'));
});

