'use strict';
//timeCounter
    var div4 = document.getElementsByTagName("cnt")[0];
 
        var timer = setInterval(fn, 1);//设置定时器，1毫秒跳动1次
 
        function fn() {
            //获取时间差：未来时间减去此刻的毫秒值
            var nowtime = new Date();
            var former = new Date("2022/03/03 12:00:00");
            var timeSum = nowtime.getTime() - former.getTime();
 
            //根据时间差分别计算天数，小时数等，parseInt() 函数可解析一个字符串，并返回一个整数。
 
            var day = parseInt(timeSum / 1000 / 60 / 60 / 24);
            var hour = parseInt(timeSum / 1000 / 60 / 60 % 24);
            var minu = parseInt(timeSum / 1000 / 60 % 60);
            var sec = parseInt(timeSum / 1000 % 60);
            var millsec = parseInt(timeSum % 1000);
 
            //问题处理：所有的时间小于10的时候，在前面自动补0，毫秒值要补双0（比如如，把 8 秒改成 08 秒）
            day = day < 10 ? "0" + day : day;  //day小于10吗？如果小于，就补0；如果不小于，就是day本身
            hour = hour < 10 ? "0" + hour : hour;
            minu = minu < 10 ? "0" + minu : minu;
            sec = sec < 10 ? "0" + sec : sec;
            if (millsec < 10) {
                millsec = "00" + millsec;
            } else if (millsec < 100) {
                millsec = "0" + millsec;
            }
 
            // 输出
            /*if (timeSum < 0) {
                div3.innerHTML = "距离考研开始还有00天00小时00分00秒000毫秒";

                clearInterval(timer);/* 清除定时器 
                return;
            } */
            div4.innerHTML = "距离上一次见面已经" + day + "天" + hour + "小时" + minu + "分" + sec + "秒";
        }
