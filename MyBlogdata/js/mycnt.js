'use strict';
//timeCounter
    var div4 = document.getElementsByTagName("cnt")[0];
 
        var timer1 = setInterval(fn, 1);//设置定时器，1毫秒跳动1次
 
        function fn() {
            //获取时间差：未来时间减去此刻的毫秒值
            var nowtime1 = new Date();
            var former = new Date("2021/09/30 22:00:00");
            var timeSum1 = nowtime1.getTime() - former.getTime();
 
            //根据时间差分别计算天数，小时数等，parseInt() 函数可解析一个字符串，并返回一个整数。
 
            var day1 = parseInt(timeSum1 / 1000 / 60 / 60 / 24);
            var hour1 = parseInt(timeSum1 / 1000 / 60 / 60 % 24);
            var minu1 = parseInt(timeSum1 / 1000 / 60 % 60);
            var sec1 = parseInt(timeSum1 / 1000 % 60);
            day1 = day1 +1;
            //问题处理：所有的时间小于10的时候，在前面自动补0，毫秒值要补双0（比如如，把 8 秒改成 08 秒）
            day1 = day1 < 10 ? "0" + day1 : day1;  //day小于10吗？如果小于，就补0；如果不小于，就是day本身
            hour1 = hour1 < 10 ? "0" + hour1 : hour1;
            minu1 = minu1 < 10 ? "0" + minu1 : minu1;
            sec1 = sec1 < 10 ? "0" + sec1 : sec1;
 
            div4.innerHTML = "吼吼!!原来我们已经在一起" + day1 + "天" + hour1 + "小时" + minu1 + "分" + sec1 + "秒啦！！！";
        }
