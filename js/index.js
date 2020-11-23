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
var xiding_nav = document.querySelector('.xiding_nav_news')
new_nav_header.children[9].remove()
new_nav_header.children[10].remove()
new_nav_header.children[11].remove()

// new_nav_header.style.position = 'none'
// new_nav_header.style.marginTop = '0px'
// new_nav_header.style.zIndex = '999'
// new_nav_header.style.top = '0px'
xiding_nav.appendChild(new_nav_header);