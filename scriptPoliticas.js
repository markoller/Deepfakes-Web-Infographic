document.getElementById("revelarSolapa").addEventListener("click", function() {
    const solapaYBoton = document.querySelector('.solapaYBoton');
    
    if (solapaYBoton.classList.contains('visible')) {
        // Si está visible, lo ocultamos
        solapaYBoton.classList.remove('visible');
        solapaYBoton.classList.add('oculto');
    } else {
        // Si está oculto, lo mostramos
        solapaYBoton.classList.remove('oculto');
        solapaYBoton.classList.add('visible');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const muskDemonio = document.querySelector('.muskDemonio');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Reinicia la animación eliminando y volviendo a agregar la clase
                muskDemonio.classList.remove('animated');
                
                // Forzar el reflujo para reiniciar la animación
                void muskDemonio.offsetWidth;

                muskDemonio.classList.add('animated');
            } else {
                // Opcional: puedes detener la animación eliminando la clase si lo prefieres
                muskDemonio.classList.remove('animated');
            }
        });
    }, {
        threshold: 0.5 // La animación comenzará cuando el 50% de la sección esté visible
    });

    observer.observe(document.querySelector('.seccion7Politicas'));
});

