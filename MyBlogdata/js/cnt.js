'use strict';
//timeCounter
    var div5 = document.getElementsByTagName("cnt1")[0];
 
        var timer2 = setInterval(fn, 1);//设置定时器，1毫秒跳动1次
 
        function fn() {
            //获取时间差：未来时间减去此刻的毫秒值
            var nt = new Date();
            var fm = new Date("2022/05/21 21:00:00");
            var timeSum2 = nt.getTime() - fm.getTime();
 
            //根据时间差分别计算天数，小时数等，parseInt() 函数可解析一个字符串，并返回一个整数。
 
            var d = parseInt(timeSum2 / 1000 / 60 / 60 / 24);
            var h = parseInt(timeSum2 / 1000 / 60 / 60 % 24);
            var m = parseInt(timeSum2 / 1000 / 60 % 60);
            var s = parseInt(timeSum2 / 1000 % 60);
            var ms = parseInt(timeSum2 % 1000);
 
            //问题处理：所有的时间小于10的时候，在前面自动补0，毫秒值要补双0（比如如，把 8 秒改成 08 秒）
            d = d < 10 ? "0" + d : d;  //day小于10吗？如果小于，就补0；如果不小于，就是day本身
            h = h < 10 ? "0" + h : h;
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;
            if (ms < 10) {
                ms = "00" + ms;
            } else if (ms < 100) {
                ms = "0" + ms;
            }
 
            div5.innerHTML = "哦莫！距离咱们上一次见面已经" + d + "天" + h + "小时" + m + "分" + s + "秒了!!!";
        }
