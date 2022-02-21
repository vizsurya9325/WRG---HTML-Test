var product_gallery_thumb = new Swiper('.treva_products_thumb', {
    spaceBetween: 12,
    slidesPerView: 8,
    watchSlidesProgress: true,

})
var product_gallery = new Swiper('.treva_products', {
    lazy: true,

    navigation: {
        nextEl: '.prod-button-next',
        prevEl: '.prod-button-prev',
    },
    thumbs: {
        swiper: product_gallery_thumb,
    },
});
$(document).ready(function() {
    var val = $('.quan-val').text();
    $('.btn-input#plus').on('click', function() {
        if (val >= 1) {
            $('.quan-val').text(val++);
        }
    });
    $('.btn-input#minus').on('click', function() {
        if (val >= 1) {
            $('.quan-val').text(val--);
        }
    });
});