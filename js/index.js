// 头部提醒：
var $notice = $('.top_notice a');
setInterval(() => {
    $notice.animate({
        top: -80
    }, 500, 'swing')
    setTimeout(() => {
        $notice.animate({
            top: 0
        }, 100, 'swing')
    }, 100);
}, 10000);
//购物车点击跳转
var $goodCar = $('.goodsCar');
$goodCar.click(function() {
    open('goodCar.html')
})

//导航栏点击样式转换(运用选项卡思路)
var nav_header = document.querySelector('.nav_header');
var nav_lis = document.querySelectorAll('.nav_header li')
var nav_lisindex = 0
for (var i = 0; i < nav_lis.length; i++) {
    nav_lis[i].index = i;
    nav_lis[i].onclick = function() {
        nav_lis[nav_lisindex].className = '';
        nav_lis[nav_lisindex].children[0].className = '';
        nav_lis[this.index].className = 'nav_show'
        nav_lis[this.index].children[0].className = 'nav_a_show'
        nav_lisindex = this.index;
    }
}
// 头部导航吸顶
var new_nav_header = nav_header.cloneNode(true);
var xiding_nav_news = document.querySelector('.xiding_nav_news')
var xiding_nav = document.querySelector('.xiding_nav')
new_nav_header.children[9].remove()
new_nav_header.children[9].remove()
new_nav_header.children[9].remove()
    // new_nav_header.children[10].remove()
    // new_nav_header.style.position = 'none'
    // new_nav_header.style.marginTop = '0px'
    // new_nav_header.style.zIndex = '999'
    // new_nav_header.style.top = '0px'
xiding_nav_news.appendChild(new_nav_header);

window.onscroll = function() {
        var stop = document.body.scrollTop || document.documentElement.scrollTop;
        if (stop >= 120) {
            animate_pub(xiding_nav, { top: 0 }, 1000)
        } else {
            xiding_nav.style.top = '-50px'

        }
    }
    // var you_search = document.querySelector('.you_search');
    // you_search.onclick = function() {
    //     var you_inp = document.createElement('input')
    //     you_inp.placeholder = '宁静同款护颈贴'
    //     you_search.appendChild(you_inp);
    // }

//吸顶导航栏点击样式转换(运用选项卡思路)
var nav_header = document.querySelector('.nav_header');
var nav_lis = document.querySelectorAll('.nav_header li')
var nav_lisindex = 0
for (var i = 0; i < nav_lis.length; i++) {
    nav_lis[i].index = i;
    nav_lis[i].onclick = function() {
        nav_lis[nav_lisindex].className = '';
        nav_lis[nav_lisindex].children[0].className = '';
        nav_lis[this.index].className = 'nav_show'
        nav_lis[this.index].children[0].className = 'nav_a_show'
        nav_lisindex = this.index;
    }
}

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


// 下面商品轮播
var new_prev = document.querySelector(".new .prev");
var new_next = document.querySelector(".new .next");
var goods_lunbo = document.querySelector('.goods_lunbo');
var Goods_lunbo = document.querySelector('.Goods_lunbo');
var goodsindex = 0; //当前显示块的下标
var goodslen = goods_lunbo.children.length; //保存商品块的长度
var goodswidth = goods_lunbo.children[0].clientWidth;
// 商品块播放下一张:
function moveRight() {
    goodsindex++;
    // 临界值判断：
    if (goodsindex >= goodslen) { //当下标加到最后一张图片时
        goodsindex = goodslen;
        return;
    }
    animate_pub(Goods_lunbo, {
        'scrollLeft': goodsindex * goodswidth
    })
};


//商品块播放上一张:
function moveLeft() {
    goodsindex--;
    // 临界值判断：
    if (goodsindex <= 0) { //当下标加到最后一张图片时
        goodsindex = 0;
        Goods_lunbo.scrollLeft = goodsindex * goodswidth;
    };

    animate_pub(Goods_lunbo, {
        'scrollLeft': goodsindex * goodswidth
    });
};
new_next.onclick = function() {
    moveRight();
};
new_prev.onclick = function() {
    moveLeft();
};


// 人气推荐选项卡
var tab_a_change = document.querySelectorAll('.pro_tab span');
var pro_centers = document.querySelectorAll('.pro_center');
var tab_index = 0;
for (var i = 0; i < tab_a_change.length; i++) {
    tab_a_change[i].index = i;
    tab_a_change[i].onclick = function() {
        tab_a_change[tab_index].className = ''
        pro_centers[tab_index].className = 'pro_center';
        tab_a_change[this.index].className = 'pro_tab_show';
        pro_centers[this.index].className = 'pro_center_show pro_center';
        tab_index = this.index;
    }
}