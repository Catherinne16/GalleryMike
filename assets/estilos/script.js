$(document).ready(function() {
    $('#myCarousel').carousel({
        interval: 2000, // Cambia la imagen cada 2 segundos
        ride: 'carousel'
    });

    // Ajustar tamaño del carrusel para evitar redimensionamiento
    var $carousel = $('#myCarousel');
    var $items = $carousel.find('.carousel-item');
    var imgHeight = 0;

    // Calcula la altura de la imagen más alta
    $items.each(function() {
        var img = $(this).find('img');
        if (img.height() > imgHeight) {
            imgHeight = img.height();
        }
    });

    // Ajusta la altura del contenedor del carrusel
    $carousel.find('.carousel-inner').css('height', imgHeight + 'px');
});