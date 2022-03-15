// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title ='(╯>д<)╯(˙³˙⁾扔出去';
        clearTimeout(titleTime);
    }
    else {
        document.title = '(˘•ω•˘)ง(˙³˙⁾捡回来';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
