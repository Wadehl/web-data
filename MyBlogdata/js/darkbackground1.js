if (hexo-config('darkmode.enable') || hexo-config('display_mode') == 'dark'){
	var dark = false;
	function universe() {
		window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
		var n, e, i, h, t = .05,
			s = document.getElementById("universe"),
			o = !0,
			a = "180,184,240",
			r = "226,225,142",
			d = "226,225,224",
			c = [];
	
		if(dark == false) {
			s.style.background="#eceff5";
			a = "230,145,55";
			r = "99,185,216";
			d = "155,155,155";
			console.log(a);
		}

		function f() {
    	//获取宽高 设置画布宽高 i密度
			n = window.innerWidth, e = window.innerHeight, i = 0.216 * n, s.setAttribute("width", n), s.setAttribute("height", e);
		}
		function u() {
    	//清除画布内容
			h.clearRect(0, 0, n, e);
			for (var t = c.length, i = 0; i < t; i++) {
				var s = c[i];
				s.move(), s.fadeIn(), s.fadeOut(), s.draw()
			}
		}
		function y() {
			this.reset = function() {
				this.giant = m(50), this.comet = !this.giant && !o && m(10), this.x = l(0, n - 10), this.y = l(0, e), this.r = l(1.1, 2.6), this.dx = l(t, 6 * t) + (this.comet + 1 - 1) * t * l(50, 120) + 2 * t, this.dy = -l(t, 6 * t) - (this.comet + 1 - 1) * t * l(50, 120), this.fadingOut = null, this.fadingIn = !0, this.opacity = 0, this.opacityTresh = l(.2, 1 - .4 * (this.comet + 1 - 1)), this.do = l(5e-4, .002) + .001 * (this.comet + 1 - 1)
			}, this.fadeIn = function() {
				this.fadingIn && (this.fadingIn = !(this.opacity > this.opacityTresh), this.opacity += this.do)
			}, this.fadeOut = function() {
				this.fadingOut && (this.fadingOut = !(this.opacity < 0), this.opacity -= this.do /2,(this.x>n||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(h.beginPath(),this.giant)h.fillStyle="rgba("+a+","+this.opacity+")",h.arc(this.x,this.y,this.r,0,2*Math.PI,!1);else if(this.comet){h.fillStyle="rgba("+d+","+this.opacity+")",h.arc(this.x,this.y,this.r,0,2*Math.PI,!1);for(var t=0;t<30;t++)h.fillStyle="rgba("+d+","+(this.opacity-this.opacity/20 * t) + ")", h.rect(this.x - this.dx / 4 * t, this.y - this.dy / 4 * t - 2, 2, 2), h.fill()
			} else h.fillStyle = "rgba(" + r + "," + this.opacity + ")", h.arc(this.x, this.y, this.r, 0, 2*Math.PI, !1);
			h.closePath(), h.fill()
		}, this.move = function() {
			this.x += this.dx, this.y += this.dy, !1 === this.fadingOut && this.reset(), (this.x > n - n / 4 || this.y < 0) && (this.fadingOut = !0)
		}, setTimeout(function() {
			o = !1
		}, 50)
	}
	function m(t) {
		return Math.floor(1e3 * Math.random()) + 1 < 10 * t
	}
	function l(t, i) {
		return Math.random() * (i - t) + t
	}
	f(), window.addEventListener("resize", f, !1), function() {
		h = s.getContext("2d");
		for (var t = 0; t < i; t++) c[t] = new y, c[t].reset();
		u()
	}(), function t() {
		true && u(), window.requestAnimationFrame(t)
	}()
	};
	universe()
	}
