$(function() {

    // 先判断本地存储是否有数据
    if (localStorage.getItem('goods')) {
        var goodArr = JSON.parse(localStorage.getItem('goods'));
        $.ajax({ //先获取后端所有商品信息
                url: './data/goods.json',
                type: 'get',
                dataType: 'json',
                success: function(json) {
                    var domStr = '';
                    $.each(goodArr, function(index, item) {
                        $.each(json, function(ind, ite) {
                            if (item.code === ite.code) { //把所有商品与本地存储通过遍历比较，并存入页面
                                domStr += ` <li>
                            <img src="${ite.imgurl}" alt="">
                            <h3>${ite.title}</h3>
                            <p>${ite.price}</p>
                            <span num="${item.num}" code="${ite.code}"><button class="left">&lt;</button>${item.num}<button class="right">&gt;</button></span>
                            <em code="${ite.code}">删除</em>
                          </li>`
                            }

                        })
                    })
                    $('.list').html(domStr)
                }
            })
            // 点击删除按钮
            // 因为删除按钮是动态的，所以需要事件委托
            // 移除商品
        $('.list').on('click', 'li em', function() {
            // 删除对应em的li
            $(this).parent().remove()
                // 删除对应本地数据
                // 可以根据em存过code来删
            var code = $(this).attr('code')

            $.each(goodArr, function(index, item) {
                    if (item.code === code) {
                        goodArr.splice(index, 1); //数组方法，表示从当下满足条件的下标元素往后截掉一个元素，就是删除当前元素
                        return false;
                    }
                })
                // goodArr删除好了，现在更新到本地存储
            localStorage.setItem('goods', JSON.stringify(goodArr))
                // 判断goodArr里面还有没有元素，当没有元素还是会显示[]，不为空，不符合实际
            if (goodArr.length <= 0) {
                // 清除本地数据
                localStorage.removeItem('goods')
                var domStr = ` <li style="font-size:19px;text-align:center;margin-top:20px;">购物车里没有数据！！</li>`

                $('.list').html(domStr)
            }
            alert('商品移出购物车成功！')
        })
        $('.list').on('click', 'li span .left', function() {
            // var num = $(this).parent().attr('num');
            var code = $(this).parent().attr('code');
            var _this = this
            $.each(goodArr, function(index, item) {
                    if (item.code === code) {
                        item.num--;
                        if (item.num < 1) {
                            item.num = 1;
                            alert('商品数量不能少于一个')
                        }
                        $(_this).parent().html('<button class="left">&lt;</button>' + item.num + '<button class="right">&gt;</button>')
                        return false;
                    }
                })
                // console.log(goodArr);
                // localStorage.setItem()
            localStorage.setItem('goods', JSON.stringify(goodArr))
        })
        $('.list').on('click', 'li span .right', function() {
            // var num = $(this).parent().attr('num');
            var code = $(this).parent().attr('code');
            var _this = this
            $.each(goodArr, function(index, item) {
                    if (item.code === code) {
                        item.num++;
                        $(_this).parent().html('<button class="left">&lt;</button>' + item.num + '<button class="right">&gt;</button>')
                        return false;
                    }
                })
                // console.log(goodArr);
                // localStorage.setItem()
            localStorage.setItem('goods', JSON.stringify(goodArr))
        })

    } else {
        // 当购物车本来就没有商品信息
        var domStr = ` <li style="font-size:19px;text-align:center;margin-top:20px;">购物车里没有数据！！</li>`

        $('.list').html(domStr)
    }



})