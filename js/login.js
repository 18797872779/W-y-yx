var login1 = document.getElementById("login1");
var add1 = document.getElementById("add1");
var use = document.getElementById("user1")
var pas = document.getElementById("pass1")

login1.onclick = function() {
    var useVal = use.value;
    var pasVal = pas.value;
    if (!useVal || !pasVal) {
        alert("账号或密码不能为空")
    }
    ajax({
        url: '../data/user.php',
        type: 'post',
        // data: 'tt=123&abc=hehe&www=baidu',// 字符串形式的参数
        data: {
            user: useVal,
            pass: pasVal,
            type: "login"
        },
        dataType: 'json', // 返回的数据类型 text  json  xml
        cache: false, // 是否使用缓存，默认为false
        success: function(json) {
            alert(json.msg)
        },
        error: function(code) {
            alert(code)
        }
    })
}
add1.onclick = function() {

    var useVal = use.value;
    var pasVal = pas.value;
    if (!useVal || !pasVal) {
        alert("账号或密码不能为空")
    }
    ajax({
        url: '../data/user.php',
        type: 'post',
        // data: 'tt=123&abc=hehe&www=baidu',// 字符串形式的参数
        data: {
            user: useVal,
            pass: pasVal,
            type: "add"
        },
        dataType: 'json', // 返回的数据类型 text  json  xml
        cache: false, // 是否使用缓存，默认为false
        success: function(json) {
            alert(json.msg)
        },
        error: function(code) {
            alert(code)
        }
    })
}