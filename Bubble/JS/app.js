'use strict'
/*==================== VARIABLES ==================== */
let arrBubbles = document.querySelectorAll('.bubble');
let arrRnd = [];
let parallax__image = document.getElementsByClassName('bg-parallax__image');
/*==================== LOGIC ==================== */

for (let i = 0; arrBubbles.length > i; i++) {
    arrRnd[i] = getRandomIntInclusive(10, 80);
}

window.onmousemove = (e) => {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    for (let i = 0; arrBubbles.length > i; i++) {
        if (arrRnd[i] % 2 === 0) {
            arrBubbles[i].style.transform = 'translate(-' + x * arrRnd[i] + 'px, -' + y * arrRnd[i] + 'px)';
        } else {
            arrBubbles[i].style.transform = 'translate(+' + x * arrRnd[i] + 'px, +' + y * arrRnd[i] + 'px)';

        }
    }

}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/*==================== PARALLAX ==================== */

new simpleParallax(parallax__image, {
    scale: 1.5
});


/*==================== SLIDERS ==================== */
$(document).ready(function () {

    $('.js-tab-trigger').click(function () {
        var id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="' + id + '"]');

        $('.js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');

        $('.js-tab-content.active').removeClass('active');
        content.addClass('active');
    });
    btnRare.onclick= () => {
        let temp = 1;
        for(let i = 0;i < 12;i++){
            if (temp === 5){
                temp -= 4;
            }
            console.log(temp);
            slidesGallery[temp].setAttribute('src',`IMG/img_slider_rare${temp}.png`);
            temp++;
        }
    }
    btnExtraRare.onclick = () => {
        let temp = 1;
        for(let i = 0;i < 12;i++){
            if (temp === 5){
                temp -= 4;
            }
            console.log(temp);
            slidesGallery[temp].setAttribute('src',`IMG/img_slider_extraRare${temp}.png`);
             temp++;
        }

    }
});
$('.slider-gallery').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: $('.slider, .slider2, .slider3'),
    dots: false,
    arrows: false,
    centerMode: true,
    // focusOnSelect: true
    variableWidth: true
});
$('.slider-names').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    asNavFor: $('.slider, .slider2, .slider3'),
    centerMode: true,
    arrows: false,
    // focusOnSelect: true

});

$('.slider-info').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: $('.slider, .slider2, .slider3'),
    dots: false,
    fade: true,

    centerMode: true,
    arrows: true,
    // variableWidth: true,

    focusOnSelect: true
});

let btnRare = document.getElementsByClassName('follow__info-tabs-item_1')[0];
let btnExtraRare = document.getElementsByClassName('follow__info-tabs-item_2')[0];
let slidesGallery = document.querySelectorAll('.slider-gallery_slide');
