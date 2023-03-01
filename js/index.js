const burger_icon = document.getElementById('burger_icon');
const mobilMenu = document.getElementById('mobilMenu');
const mobilOverlay = document.getElementById('mobilOverlay');
burger_icon.onclick = function(){
    // this.childNodes.style.background = '#ffb600'
    mobilMenu.classList.add('mobilMenu_opened');
    mobilOverlay.style ='opacity:1;visibility:visible';
}
mobilOverlay.onclick = function (){
    this.style ='opacity:0;visibility:hidden';
    mobilMenu.classList.remove('mobilMenu_opened')
}
$(()=>{
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        animateIn: 'slideInDown',
        animateOut:'slideOutRight',
        nav: true,
        dots:true,
        // responsiveClass:true,
        smartSpeed:1500,
        autoplay:true,
    });
    document.querySelectorAll('.owl-nav button span').forEach(item=> item.remove())
})
let slideImg = ['img/Law_Degree.jpeg-2-thumb-big.jpg','img/slider1.jpg'];
const slideContent = document.querySelectorAll('.slide-content');
slideContent.forEach((item,i)=>{
    item.style.background = `url(${slideImg[i]})center/cover no-repeat`
})