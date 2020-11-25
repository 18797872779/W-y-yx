$('.wy_goods').load('./nav_left.html', function() {
    var wy_left_nav = document.querySelector('.wy_left_nav')
    var xiding_nav = document.querySelector('.xiding_nav')
        //滚动事件
    window.onscroll = function() {
        var stop = document.body.scrollTop || document.documentElement.scrollTop; //获取页面滚动条到顶端的距离

        if (stop >= 120) {
            animate_pub(xiding_nav, { top: 0 }, 200)
            if (stop >= 570) {
                wy_left_nav.style.position = 'fixed'
                wy_left_nav.style.top = '60px'
            } else {
                wy_left_nav.style.position = 'absolute';
                wy_left_nav.style.top = '580px'
            }
        } else {
            xiding_nav.style.top = '-50px'


        }

    }

})





// banner图轮播
var mySwiper = new Swiper('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项

    // autoplay:true,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
})