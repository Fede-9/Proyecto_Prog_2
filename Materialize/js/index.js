// navbar
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

// carousel
document.addEventListener('DOMContentLoaded', function() {
    var elems2 = document.querySelectorAll('.carousel');
    var instances2 = M.Carousel.init(elems2,{
        indicators: true,
        fullWidth: true,
    });
});