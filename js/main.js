// Ocultar Preloader al cargar la página
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    // Le bajamos la opacidad para que el cambio sea suave
    preloader.classList.add('opacity-0');
    
    // Lo quitamos del DOM después de medio segundo (lo que dura la transición)
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});