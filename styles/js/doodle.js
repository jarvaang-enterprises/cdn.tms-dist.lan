function doodle() {
    (function () {
        var c = void 0, e = true, f = false;
        window.google = window.google || {};
        window.google.ml = function () { };
        var g = function (a, d, b) {
            a = a.split(".");
            b = b || window; !(a[0] in b) && b.execScript && b.execScript("var " + a[0]);
            for (var j; a.length && (j = a.shift());)!a.length && d !== c ? b[j] = d : b = b[j] ? b[j] : b[j] = {}
        }, h = function (a, d, b) {
            return a.call.apply(a.bind, arguments)
        }, i = function (a, d, b) {
            if (!a) throw Error();
            if (arguments.length > 2) {
                var j = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var b = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(b, j);
                    return a.apply(d, b)
                }
            } else return function () {
                return a.apply(d, arguments)
            }
        }, k = function (a, d, b) {
            k = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? h : i;
            g("google.bindFn", k, c);
            return k.apply(null, arguments)
        };
        google.exportSymbol = function (a, d, b) {
            g(a, d, b)
        };
        google.exportProperty = function (a, d, b) {
            a[d] = b
        };
        g("google.bindFn", k, c);
        g("google.partial", function (a, d) {
            var b = Array.prototype.slice.call(arguments, 1);
            return function () {
                var d = Array.prototype.slice.call(arguments);
                d.unshift.apply(d, b); return a.apply(this, d)
            }
        }, c);
        var l = {
            k: f, z: f, D: f, opera: f
        }, m = {
            k: f, w: f, c: f, A: f, B: f, C: f, v: f, s: f, p: f, opera: f
        }, n = "", q = "", r = function (a) {
            for (var d in l) l[d] = f;
            for (var b in m) m[b] = f;
            d = b = null;
            if (window.opera) l.opera = e, m.opera = e, b = d = /Opera[\/\s](\S+)/;
            else if (a.indexOf("MSIE") >= 0) l.k = e, m.k = e, b = d = /MSIE\s+([^\);]+)(\)|;)/;
            else if (a.indexOf("WebKit") >= 0) {
                l.D = e;
                b = /Version\/(\S+)/;
                if (a.indexOf("Chrome") >= 0) m.v = e, d = /Chrome\/(\S+)/;
                else if (a.indexOf("Android") >= 0 && a.indexOf("Mobile") < 0) m.s = e, d = /Version\/(\S+)/;
                else if (a.indexOf("Android") >= 0 && a.indexOf("Mobile") >= 0) m.p = e, d = b;
                else if (a.indexOf("Safari") >= 0) m.c = e, d = b;
                if (a.indexOf("iPad") >= 0) {
                    if (m.A = e, !m.c) m.c = e, d = b
                } else if (a.indexOf("iPhone") >= 0) {
                    if (m.B = e, !m.c) m.c = e, d = b
                } else if (a.indexOf("iPod") >= 0 && (m.C = e, !m.c)) m.c = e, d = b;
                b = /WebKit\/(\S+)/
            } else if (a.indexOf("Gecko") >= 0) {
                l.z = e;
                if (a.indexOf("Firefox") >= 0) m.w = e, d = /Firefox\/(\S+)/;
                b = /rv\:([^\);]+)(\)|;)/
            } b && (n = (b = b.exec(a)) ? b[1] : "");
            d && (q = (b = d.exec(a)) ? b[1] : "", m.k && (a = document ? document.documentMode : c) && a > parseFloat(q) && (q = a.toFixed(1).toString()));
            g("google.browser.engine.IE", l.k, c);
            g("google.browser.engine.GECKO", l.z, c);
            g("google.browser.engine.WEBKIT", l.D, c);
            g("google.browser.engine.OPERA", l.opera, c);
            g("google.browser.engine.version", n, c);
            g("google.browser.product.IE", m.k, c);
            g("google.browser.product.FIREFOX", m.w, c);
            g("google.browser.product.SAFARI", m.c, c);
            g("google.browser.product.IPAD", m.A, c);
            g("google.browser.product.IPHONE", m.B, c);
            g("google.browser.product.IPOD", m.C, c);
            g("google.browser.product.CHROME", m.v, c);
            g("google.browser.product.ANDROID_TABLET", m.s, c);
            g("google.browser.product.ANDROID_MOBILE", m.p, c);
            g("google.browser.product.OPERA", m.opera, c);
            g("google.browser.product.version", q, c)
        };
        r(google.ua || window.navigator.userAgent);
        var t = function (a, d) {
            function b(a, b) {
                if (a < b) return -1;
                else if (a > b) return 1;
                return 0
            } for (var j = 0, B = a.replace(/^\s+|\s+$/g, "").split("."), D = d.replace(/^\s+|\s+$/g, "").split("."), R = Math.max(B.length, D.length), s = 0;
                j == 0 && s < R; s++) {
                var S = B[s] || "", T = D[s] || "", U = RegExp("(\\d*)(\\D*)", "g"), V = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var o = U.exec(S) || ["", "", ""], p = V.exec(T) || ["", "", ""];
                    if (o[0].length == 0 && p[0].length == 0) break;
                    j = b(o[1].length == 0 ? 0 : parseInt(o[1], 10), p[1].length == 0 ? 0 : parseInt(p[1], 10)) || b(o[2].length == 0, p[2].length == 0) || b(o[2], p[2])
                } while (j == 0)
            } return j
        };
        g("google.browser.init", r, c);
        g("google.browser.compareVersions", t, c);
        g("google.browser.isEngineVersion", function (a) {
            return t(n, a) >= 0
        }, c);
        g("google.browser.isProductVersion", function (a) {
            return t(q, a) >= 0
        }, c);
        g("google.listen", function (a, d, b) {
            a.addEventListener ? a.addEventListener(d, b, f) : a.attachEvent("on" + d, b)
        }, c);
        g("google.unlisten", function (a, d, b) {
            a.removeEventListener ? a.removeEventListener(d, b, f) : a.detachEvent("on" + d, b)
        }, c);
        try {
            if (!google.doodle) google.doodle = {};
            var distFromDot = 200,
                distFromDotX = -200,
                distFromDotY = -200,
                lastWindowLeft, lastWindowTop, lastWindowWidth,
                windowDeltaX = 0,
                windowDeltaY = 0,
                windowDeltaW = 0,
                updateInterval = 35,
                updateTimerID, dots = [],
                dotContainer, isIE, windowSizes = function () {
                    return [window.screenLeft || window.screenX || 0, window.screenTop || window.screenY || 0, document.body.clientWidth || 0]
                }, L = function (x0, d, b, j) {
                    this.x = this.F = x0;
                    this.y = this.G = d;
                    this.r = this.m = b;
                    this.d = 100 * (Math.random() - 0.5);
                    this.g = 100 * (Math.random() - 0.5);
                    this.o = 3 + Math.random() * 98;
                    this.H = 0.1 + Math.random() * 0.4;
                    this.h = 0;
                    this.i = 1;
                    this.n = f;
                    this.a = document.createElement("div");
                    x0 = this.a.style;
                    x0.position = "absolute";
                    x0.zIndex = "-1";
                    j = "#" + j;
                    isIE ? (this.a.innerHTML = ".", x0.color = j, x0.cursor = "default", x0.font = "100px Monospace") : (this.a.className = "circle", x0.backgroundColor = j);
                    dotContainer.appendChild(this.a)
                }; L.prototype = {
                    remove: function () {
                        this.a && dotContainer.removeChild(this.a);
                        this.a = null
                    },
                    update: function () {
                        this.x += this.d;
                        this.y += this.g;
                        this.d = Math.min(50, Math.max(-50, (this.d + (windowDeltaX + windowDeltaW) / this.m) * 0.92));
                        this.g = Math.min(50, Math.max(-50, (this.g + windowDeltaY / this.m) * 0.92));
                        var a = distFromDotX - this.x, d = distFromDotY - this.y, b = Math.sqrt(a * a + d * d);
                        a /= b;
                        d /= b;
                        b < distFromDot ? (this.d -= a * this.o, this.g -= d * this.o, this.h += (0.005 - this.h) * 0.4, this.i = Math.max(0, this.i * 0.9 - 0.01), this.d *= 1 - this.i, this.g *= 1 - this.i) : (this.h += (this.H - this.h) * 0.005, this.i = Math.min(1, this.i + 0.03));
                        a = this.F - this.x;
                        d = this.G - this.y;
                        b = Math.sqrt(a * a + d * d);
                        this.d += a * this.h;
                        this.g += d * this.h;
                        this.r = this.m + b / 8;
                        this.n = b < 0.3 && this.d < 0.3 && this.g < 0.3;
                        if (!this.n) {
                            a = this.a.style;
                            if (!isIE) a.width = a.height = this.r * 2 + "px";
                            a.left = this.x - (isIE ? 20 : 0) + "px";
                            a.top = this.y - (isIE ? 60 : 0) + "px"
                        }
                    }
                };
            var createDot = function (a, d, b, j) {
                return new L(a, d, b, j)
            }, O = function () {
                dots = [
                    createDot(-24, 10, 17, "3d7b90"),
                    createDot(10, 20, 14, "3d7b90"),
                    createDot(60, 20, 9, "3d7b90"),
                    createDot(85, 20, 5, "3d7b90"),
                    createDot(100, 20, 3, "3d7b90"),
                    createDot(40, 20, 9, "4976f3"),
                    createDot(42, 39, 10, "ef9a1e"),
                    createDot(44, 58, 12, "d44d61"),
                    createDot(46, 80, 14, "4f7af2"),
                    createDot(48, 109, 15, "ed9d33"),
                    createDot(50, 140, 17, "d44d61"),

                    createDot(120, 20, 9, "4976f3"),
                    createDot(119, 39, 10, "ef9a1e"),
                    createDot(117, 58, 11, "d44d61"),
                    createDot(116, 80, 13, "4f7af2"),
                    createDot(110, 109, 15, "ed9d33"),
                    createDot(105, 140, 17, "d44d61"),
                    createDot(140, 27, 9.5, "d44d61"),
                    createDot(155, 43, 9, "ef9a1e"),
                    createDot(165, 60, 8, "d44d61"),
                    createDot(169, 78, 6, "4f7af2"),
                    createDot(195, 35, 9.5, "d44d61"),
                    createDot(185, 53, 9, "ef9a1e"),
                    createDot(180, 70, 6, "d44d61"),
                    createDot(210, 20, 9, "4976f3"),
                    createDot(212, 39, 10, "ef9a1e"),
                    createDot(214, 58, 11, "d44d61"),
                    createDot(216, 80, 13, "4f7af2"),
                    createDot(218, 109, 15, "ed9d33"),
                    createDot(224, 140, 17, "d44d61"),

                    createDot(352, 45, 7, "4976f3"),
                    createDot(338, 30, 9, "ef9a1e"),
                    createDot(320, 18, 10, "d44d65"),
                    createDot(292, 18, 13, "4f7af2"),
                    createDot(274, 39.5, 14, "ed9d33"),

                    createDot(288, 64, 14, "4f7af2"),
                    createDot(313, 77, 12, "d44d65"),
                    createDot(336, 85, 10, "4f7af2"),
                    createDot(353, 98, 8, "ed9d33"),
                    createDot(360, 113, 7, "d44d61"),
                    createDot(360, 127, 7, "d44d61"),
                    createDot(353, 141, 8, "ed9d33"),
                    createDot(333, 146, 10, "4f7af2"),
                    createDot(309, 148, 12, "d44d65"),
                    createDot(290, 140, 10, "4f7af2"),
                    createDot(278, 133, 7, "d44d61"),
                    createDot(276, 123, 5, "d44d61"),
                    createDot(270, 117, 3, "d44d61"),
                ];
                var a = windowSizes();
                lastWindowLeft = a[0];
                lastWindowTop = a[1];
                lastWindowWidth = a[2];
                N()
            }, N = function () {
                var a = windowSizes(), d = a[0], b = a[1], a = a[2];
                windowDeltaX = d - lastWindowLeft;
                windowDeltaY = b - lastWindowTop;
                windowDeltaW = a - lastWindowWidth;
                lastWindowLeft = d;
                lastWindowTop = b;
                lastWindowWidth = a;
                distFromDot = Math.max(0, distFromDot - 2);
                d = e;
                for (b = 0; a = dots[b++];)
                    a.update(), d &= a.n;
                updateInterval = d ? 250 : 35;
                updateTimerID = window.setTimeout(N, updateInterval)
            }, P = function (a) {
                distFromDot = 200;
                distFromDotX = a.clientX - dotContainer.offsetLeft;
                distFromDotY = a.clientY - dotContainer.offsetTop
            }, W = function (a) {
                if (!google.doodle.dotContainer && google.dstr && google.rein)
                    google.doodle.dotContainer = e, google.dstr.push(Q), google.rein.push(function () {
                        W(e)
                    });
                isIE = google.browser.engine.IE && google.browser.compareVersions("9", google.browser.engine.version) > 0;
                google.doodle.cpDestroy = Q;
                google.doodle.cpInit = W;
                if (dotContainer = document.getElementById("tmslogo"))
                    a && isIE ? location.reload(f) : (dotContainer.style.background = "none", google.listen(document, "mousemove", P), O())
            }, Q = function () {
                google.unlisten(document, "mousemove", P);
                updateTimerID && window.clearTimeout(updateTimerID);
                if (H)
                    for (var a = 0, d; d = H[a++];)
                        d.remove();
                dots = []
            };
            google.lastWindowLeft ? google.lastWindowLeft({
                id: "DOODLE"
            }, W) : W()
        } catch (X) {
            google.ml(X, f, {
                _sn: "DOODLE"
            })
        };
    })();
}
