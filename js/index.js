const burger_icon = document.getElementById('burger_icon');
const mobilMenu = document.getElementById('mobilMenu');
const mobilOverlay = document.getElementById('mobilOverlay');
burger_icon.onclick = function () {
    // this.childNodes.style.background = '#ffb600'
    mobilMenu.classList.add('mobilMenu_opened');
    mobilOverlay.style = 'opacity:1;visibility:visible';
    document.body.classList.add('overflow-hidden');
}
mobilOverlay.onclick = function () {
    this.style = 'opacity:0;visibility:hidden';
    mobilMenu.classList.remove('mobilMenu_opened');
    document.body.classList.remove('overflow-hidden');
}
$(() => {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        animateIn: 'animate__slideInDown',
        animateOut: 'animate__slideOutRight',
        nav: true,
        dots: true,
        // responsiveClass:true,
        autoplay: true,
        autoPlayTimeOut: 4000,
        fluidSpeed: 1000,
    });
    document.querySelectorAll('.owl-nav button span').forEach(item => item.remove())
    $('.owl-carousel').ready(() => {
        setTimeout(() => {
            $('.active h2').addClass('animate__fadeInDown');
            $('.active p').addClass('animate__fadeInUp');
        }, 500)
        setTimeout(() => {
            $('.active h2').addClass('animate__fadeOutUp');
            $('.active p').addClass('animate__fadeOutDown');
            $('.active h2').removeClass('animate__fadeInDown');
            $('.active p').removeClass('animate__fadeInUp');
        }, 3500)
    })

    $(".owl-carousel").on('change.owl.carousel', function () {
        $('.active h2').removeClass('animate__fadeOutUp');
        $('.active p').removeClass('animate__fadeOutDown');
        $('.active h2').removeClass('animate__fadeInDown');
        $('.active p').removeClass('animate__fadeInUp');
        setTimeout(() => {
            $('.active h2').addClass('animate__fadeInDown');
            $('.active p').addClass('animate__fadeInUp');
        }, 1000)
        setTimeout(() => {
            $('.active h2').removeClass('animate__fadeInDown');
            $('.active p').removeClass('animate__fadeInUp');
            $('.active h2').addClass('animate__fadeOutUp');
            $('.active p').addClass('animate__fadeOutDown');
        }, 4000)

    });
    $('.lang').click(function () {
        $(this).find('.flags').toggleClass('lang-opened');
        $(this).find('.flag').toggleClass('opacity-100');
    })
});

let slideImg = ['img/Law_Degree.jpeg-2-thumb-big.jpg', 'img/slider1.jpg'];
const slideContent = document.querySelectorAll('.slide-content');
const partnersImg = ['orasi','connect','planit','climb','lexington','nous']
slideContent.forEach((item, i) => {
    item.style.background = `url(${slideImg[i]})center/cover no-repeat`
})
const partners = document.querySelectorAll('.partner-item');
partners.forEach((item, i) => {
    item.style.background = `url("img/${partnersImg[i]}.png") no-repeat center/cover `;
})