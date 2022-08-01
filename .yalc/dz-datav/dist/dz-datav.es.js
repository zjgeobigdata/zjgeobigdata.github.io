import './style.css';
import { defineComponent as Ii, shallowRef as Yo, inject as Kn, toRefs as L_, computed as ri, unref as H, getCurrentInstance as I_, watch as nr, watchEffect as Af, onMounted as Co, onUnmounted as Yv, h as R_, nextTick as Xv, openBlock as Nt, createBlock as yl, normalizeClass as Do, ref as Ee, reactive as Na, createElementBlock as se, normalizeStyle as O_, Fragment as gu, renderList as qv, createCommentVNode as Qn, createElementVNode as Gt, renderSlot as N_ } from "vue";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var _u = function(e, t) {
  return _u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
    r.__proto__ = i;
  } || function(r, i) {
    for (var n in i)
      Object.prototype.hasOwnProperty.call(i, n) && (r[n] = i[n]);
  }, _u(e, t);
};
function k(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  _u(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var k_ = function() {
  function e() {
    this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
  }
  return e;
}(), B_ = function() {
  function e() {
    this.browser = new k_(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
  }
  return e;
}(), kr = new B_();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (kr.wxa = !0, kr.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? kr.worker = !0 : typeof navigator > "u" ? (kr.node = !0, kr.svgSupported = !0) : z_(navigator.userAgent, kr);
function z_(e, t) {
  var r = t.browser, i = e.match(/Firefox\/([\d.]+)/), n = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/.+?rv:(([\d.]+))/), a = e.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(e);
  i && (r.firefox = !0, r.version = i[1]), n && (r.ie = !0, r.version = n[1]), a && (r.edge = !0, r.version = a[1], r.newEdge = +a[1].split(".")[0] > 18), o && (r.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !r.ie && !r.edge, t.pointerEventsSupported = "onpointerdown" in window && (r.edge || r.ie && +r.version >= 11), t.domSupported = typeof document < "u";
  var s = document.documentElement.style;
  t.transform3dSupported = (r.ie && "transition" in s || r.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in s) && !("OTransition" in s), t.transformSupported = t.transform3dSupported || r.ie && +r.version >= 9;
}
const Z = kr;
var ml = 12, F_ = "sans-serif", qr = ml + "px " + F_, V_ = 20, H_ = 100, G_ = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function W_(e) {
  var t = {};
  if (typeof JSON > "u")
    return t;
  for (var r = 0; r < e.length; r++) {
    var i = String.fromCharCode(r + 32), n = (e.charCodeAt(r) - V_) / H_;
    t[i] = n;
  }
  return t;
}
var $_ = W_(G_), Ri = {
  createCanvas: function() {
    return typeof document < "u" && document.createElement("canvas");
  },
  measureText: function() {
    var e, t;
    return function(r, i) {
      if (!e) {
        var n = Ri.createCanvas();
        e = n && n.getContext("2d");
      }
      if (e)
        return t !== i && (t = e.font = i || qr), e.measureText(r);
      r = r || "", i = i || qr;
      var a = /^([0-9]*?)px$/.exec(i), o = +(a && a[1]) || ml, s = 0;
      if (i.indexOf("mono") >= 0)
        s = o * r.length;
      else
        for (var u = 0; u < r.length; u++) {
          var l = $_[r[u]];
          s += l == null ? o : l * o;
        }
      return { width: s };
    };
  }(),
  loadImage: function(e, t, r) {
    var i = new Image();
    return i.onload = t, i.onerror = r, i.src = e, i;
  }
}, Zv = fr([
  "Function",
  "RegExp",
  "Date",
  "Error",
  "CanvasGradient",
  "CanvasPattern",
  "Image",
  "Canvas"
], function(e, t) {
  return e["[object " + t + "]"] = !0, e;
}, {}), Kv = fr([
  "Int8",
  "Uint8",
  "Uint8Clamped",
  "Int16",
  "Uint16",
  "Int32",
  "Uint32",
  "Float32",
  "Float64"
], function(e, t) {
  return e["[object " + t + "Array]"] = !0, e;
}, {}), Oi = Object.prototype.toString, Ao = Array.prototype, U_ = Ao.forEach, Y_ = Ao.filter, wl = Ao.slice, X_ = Ao.map, Ef = function() {
}.constructor, Jn = Ef ? Ef.prototype : null, Sl = "__proto__", q_ = 2311;
function Qv() {
  return q_++;
}
function Gr() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  typeof console < "u" && console.error.apply(console, e);
}
function j(e) {
  if (e == null || typeof e != "object")
    return e;
  var t = e, r = Oi.call(e);
  if (r === "[object Array]") {
    if (!mn(e)) {
      t = [];
      for (var i = 0, n = e.length; i < n; i++)
        t[i] = j(e[i]);
    }
  } else if (Kv[r]) {
    if (!mn(e)) {
      var a = e.constructor;
      if (a.from)
        t = a.from(e);
      else {
        t = new a(e.length);
        for (var i = 0, n = e.length; i < n; i++)
          t[i] = e[i];
      }
    }
  } else if (!Zv[r] && !mn(e) && !Pn(e)) {
    t = {};
    for (var o in e)
      e.hasOwnProperty(o) && o !== Sl && (t[o] = j(e[o]));
  }
  return t;
}
function ht(e, t, r) {
  if (!F(t) || !F(e))
    return r ? j(t) : e;
  for (var i in t)
    if (t.hasOwnProperty(i) && i !== Sl) {
      var n = e[i], a = t[i];
      F(a) && F(n) && !N(a) && !N(n) && !Pn(a) && !Pn(n) && !Mf(a) && !Mf(n) && !mn(a) && !mn(n) ? ht(n, a, r) : (r || !(i in e)) && (e[i] = j(t[i]));
    }
  return e;
}
function O(e, t) {
  if (Object.assign)
    Object.assign(e, t);
  else
    for (var r in t)
      t.hasOwnProperty(r) && r !== Sl && (e[r] = t[r]);
  return e;
}
function ct(e, t, r) {
  for (var i = yt(t), n = 0; n < i.length; n++) {
    var a = i[n];
    (r ? t[a] != null : e[a] == null) && (e[a] = t[a]);
  }
  return e;
}
function nt(e, t) {
  if (e) {
    if (e.indexOf)
      return e.indexOf(t);
    for (var r = 0, i = e.length; r < i; r++)
      if (e[r] === t)
        return r;
  }
  return -1;
}
function Z_(e, t) {
  var r = e.prototype;
  function i() {
  }
  i.prototype = t.prototype, e.prototype = new i();
  for (var n in r)
    r.hasOwnProperty(n) && (e.prototype[n] = r[n]);
  e.prototype.constructor = e, e.superClass = t;
}
function qe(e, t, r) {
  if (e = "prototype" in e ? e.prototype : e, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames)
    for (var i = Object.getOwnPropertyNames(t), n = 0; n < i.length; n++) {
      var a = i[n];
      a !== "constructor" && (r ? t[a] != null : e[a] == null) && (e[a] = t[a]);
    }
  else
    ct(e, t, r);
}
function Yt(e) {
  return !e || typeof e == "string" ? !1 : typeof e.length == "number";
}
function A(e, t, r) {
  if (!!(e && t))
    if (e.forEach && e.forEach === U_)
      e.forEach(t, r);
    else if (e.length === +e.length)
      for (var i = 0, n = e.length; i < n; i++)
        t.call(r, e[i], i, e);
    else
      for (var a in e)
        e.hasOwnProperty(a) && t.call(r, e[a], a, e);
}
function q(e, t, r) {
  if (!e)
    return [];
  if (!t)
    return bl(e);
  if (e.map && e.map === X_)
    return e.map(t, r);
  for (var i = [], n = 0, a = e.length; n < a; n++)
    i.push(t.call(r, e[n], n, e));
  return i;
}
function fr(e, t, r, i) {
  if (!!(e && t)) {
    for (var n = 0, a = e.length; n < a; n++)
      r = t.call(i, r, e[n], n, e);
    return r;
  }
}
function _e(e, t, r) {
  if (!e)
    return [];
  if (!t)
    return bl(e);
  if (e.filter && e.filter === Y_)
    return e.filter(t, r);
  for (var i = [], n = 0, a = e.length; n < a; n++)
    t.call(r, e[n], n, e) && i.push(e[n]);
  return i;
}
function yt(e) {
  if (!e)
    return [];
  if (Object.keys)
    return Object.keys(e);
  var t = [];
  for (var r in e)
    e.hasOwnProperty(r) && t.push(r);
  return t;
}
function K_(e, t) {
  for (var r = [], i = 2; i < arguments.length; i++)
    r[i - 2] = arguments[i];
  return function() {
    return e.apply(t, r.concat(wl.call(arguments)));
  };
}
var at = Jn && J(Jn.bind) ? Jn.call.bind(Jn.bind) : K_;
function _t(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return function() {
    return e.apply(this, t.concat(wl.call(arguments)));
  };
}
function N(e) {
  return Array.isArray ? Array.isArray(e) : Oi.call(e) === "[object Array]";
}
function J(e) {
  return typeof e == "function";
}
function z(e) {
  return typeof e == "string";
}
function Ka(e) {
  return Oi.call(e) === "[object String]";
}
function dt(e) {
  return typeof e == "number";
}
function F(e) {
  var t = typeof e;
  return t === "function" || !!e && t === "object";
}
function Mf(e) {
  return !!Zv[Oi.call(e)];
}
function Xt(e) {
  return !!Kv[Oi.call(e)];
}
function Pn(e) {
  return typeof e == "object" && typeof e.nodeType == "number" && typeof e.ownerDocument == "object";
}
function Eo(e) {
  return e.colorStops != null;
}
function Q_(e) {
  return e.image != null;
}
function J_(e) {
  return Oi.call(e) === "[object RegExp]";
}
function Jv(e) {
  return e !== e;
}
function Zr() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = 0, i = e.length; r < i; r++)
    if (e[r] != null)
      return e[r];
}
function tt(e, t) {
  return e != null ? e : t;
}
function yn(e, t, r) {
  return e != null ? e : t != null ? t : r;
}
function bl(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return wl.apply(e, t);
}
function jv(e) {
  if (typeof e == "number")
    return [e, e, e, e];
  var t = e.length;
  return t === 2 ? [e[0], e[1], e[0], e[1]] : t === 3 ? [e[0], e[1], e[2], e[1]] : e;
}
function X(e, t) {
  if (!e)
    throw new Error(t);
}
function Le(e) {
  return e == null ? null : typeof e.trim == "function" ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var td = "__ec_primitive__";
function yu(e) {
  e[td] = !0;
}
function mn(e) {
  return e[td];
}
var j_ = function() {
  function e(t) {
    this.data = {};
    var r = N(t);
    this.data = {};
    var i = this;
    t instanceof e ? t.each(n) : t && A(t, n);
    function n(a, o) {
      r ? i.set(a, o) : i.set(o, a);
    }
  }
  return e.prototype.get = function(t) {
    return this.data.hasOwnProperty(t) ? this.data[t] : null;
  }, e.prototype.set = function(t, r) {
    return this.data[t] = r;
  }, e.prototype.each = function(t, r) {
    for (var i in this.data)
      this.data.hasOwnProperty(i) && t.call(r, this.data[i], i);
  }, e.prototype.keys = function() {
    return yt(this.data);
  }, e.prototype.removeKey = function(t) {
    delete this.data[t];
  }, e;
}();
function Q(e) {
  return new j_(e);
}
function ty(e, t) {
  for (var r = new e.constructor(e.length + t.length), i = 0; i < e.length; i++)
    r[i] = e[i];
  for (var n = e.length, i = 0; i < t.length; i++)
    r[i + n] = t[i];
  return r;
}
function Mo(e, t) {
  var r;
  if (Object.create)
    r = Object.create(e);
  else {
    var i = function() {
    };
    i.prototype = e, r = new i();
  }
  return t && O(r, t), r;
}
function ed(e) {
  var t = e.style;
  t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
}
function Ai(e, t) {
  return e.hasOwnProperty(t);
}
function Ut() {
}
var ey = 180 / Math.PI;
function Ni(e, t) {
  return e == null && (e = 0), t == null && (t = 0), [e, t];
}
function ry(e) {
  return [e[0], e[1]];
}
function Pf(e, t, r) {
  return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e;
}
function iy(e, t, r) {
  return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e;
}
function ny(e) {
  return Math.sqrt(ay(e));
}
function ay(e) {
  return e[0] * e[0] + e[1] * e[1];
}
function Xo(e, t, r) {
  return e[0] = t[0] * r, e[1] = t[1] * r, e;
}
function oy(e, t) {
  var r = ny(t);
  return r === 0 ? (e[0] = 0, e[1] = 0) : (e[0] = t[0] / r, e[1] = t[1] / r), e;
}
function mu(e, t) {
  return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]));
}
var wu = mu;
function sy(e, t) {
  return (e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]);
}
var Ti = sy;
function qo(e, t, r, i) {
  return e[0] = t[0] + i * (r[0] - t[0]), e[1] = t[1] + i * (r[1] - t[1]), e;
}
function Re(e, t, r) {
  var i = t[0], n = t[1];
  return e[0] = r[0] * i + r[2] * n + r[4], e[1] = r[1] * i + r[3] * n + r[5], e;
}
function wi(e, t, r) {
  return e[0] = Math.min(t[0], r[0]), e[1] = Math.min(t[1], r[1]), e;
}
function Si(e, t, r) {
  return e[0] = Math.max(t[0], r[0]), e[1] = Math.max(t[1], r[1]), e;
}
var ii = function() {
  function e(t, r) {
    this.target = t, this.topTarget = r && r.topTarget;
  }
  return e;
}(), uy = function() {
  function e(t) {
    this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this);
  }
  return e.prototype._dragStart = function(t) {
    for (var r = t.target; r && !r.draggable; )
      r = r.parent || r.__hostTarget;
    r && (this._draggingTarget = r, r.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new ii(r, t), "dragstart", t.event));
  }, e.prototype._drag = function(t) {
    var r = this._draggingTarget;
    if (r) {
      var i = t.offsetX, n = t.offsetY, a = i - this._x, o = n - this._y;
      this._x = i, this._y = n, r.drift(a, o, t), this.handler.dispatchToElement(new ii(r, t), "drag", t.event);
      var s = this.handler.findHover(i, n, r).target, u = this._dropTarget;
      this._dropTarget = s, r !== s && (u && s !== u && this.handler.dispatchToElement(new ii(u, t), "dragleave", t.event), s && s !== u && this.handler.dispatchToElement(new ii(s, t), "dragenter", t.event));
    }
  }, e.prototype._dragEnd = function(t) {
    var r = this._draggingTarget;
    r && (r.dragging = !1), this.handler.dispatchToElement(new ii(r, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new ii(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
  }, e;
}();
const ly = uy;
var fy = function() {
  function e(t) {
    t && (this._$eventProcessor = t);
  }
  return e.prototype.on = function(t, r, i, n) {
    this._$handlers || (this._$handlers = {});
    var a = this._$handlers;
    if (typeof r == "function" && (n = i, i = r, r = null), !i || !t)
      return this;
    var o = this._$eventProcessor;
    r != null && o && o.normalizeQuery && (r = o.normalizeQuery(r)), a[t] || (a[t] = []);
    for (var s = 0; s < a[t].length; s++)
      if (a[t][s].h === i)
        return this;
    var u = {
      h: i,
      query: r,
      ctx: n || this,
      callAtLast: i.zrEventfulCallAtLast
    }, l = a[t].length - 1, f = a[t][l];
    return f && f.callAtLast ? a[t].splice(l, 0, u) : a[t].push(u), this;
  }, e.prototype.isSilent = function(t) {
    var r = this._$handlers;
    return !r || !r[t] || !r[t].length;
  }, e.prototype.off = function(t, r) {
    var i = this._$handlers;
    if (!i)
      return this;
    if (!t)
      return this._$handlers = {}, this;
    if (r) {
      if (i[t]) {
        for (var n = [], a = 0, o = i[t].length; a < o; a++)
          i[t][a].h !== r && n.push(i[t][a]);
        i[t] = n;
      }
      i[t] && i[t].length === 0 && delete i[t];
    } else
      delete i[t];
    return this;
  }, e.prototype.trigger = function(t) {
    for (var r = [], i = 1; i < arguments.length; i++)
      r[i - 1] = arguments[i];
    if (!this._$handlers)
      return this;
    var n = this._$handlers[t], a = this._$eventProcessor;
    if (n)
      for (var o = r.length, s = n.length, u = 0; u < s; u++) {
        var l = n[u];
        if (!(a && a.filter && l.query != null && !a.filter(t, l.query)))
          switch (o) {
            case 0:
              l.h.call(l.ctx);
              break;
            case 1:
              l.h.call(l.ctx, r[0]);
              break;
            case 2:
              l.h.call(l.ctx, r[0], r[1]);
              break;
            default:
              l.h.apply(l.ctx, r);
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(t), this;
  }, e.prototype.triggerWithContext = function(t) {
    for (var r = [], i = 1; i < arguments.length; i++)
      r[i - 1] = arguments[i];
    if (!this._$handlers)
      return this;
    var n = this._$handlers[t], a = this._$eventProcessor;
    if (n)
      for (var o = r.length, s = r[o - 1], u = n.length, l = 0; l < u; l++) {
        var f = n[l];
        if (!(a && a.filter && f.query != null && !a.filter(t, f.query)))
          switch (o) {
            case 0:
              f.h.call(s);
              break;
            case 1:
              f.h.call(s, r[0]);
              break;
            case 2:
              f.h.call(s, r[0], r[1]);
              break;
            default:
              f.h.apply(s, r.slice(1, o - 1));
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(t), this;
  }, e;
}();
const ze = fy;
var hy = Math.log(2);
function Su(e, t, r, i, n, a) {
  var o = i + "-" + n, s = e.length;
  if (a.hasOwnProperty(o))
    return a[o];
  if (t === 1) {
    var u = Math.round(Math.log((1 << s) - 1 & ~n) / hy);
    return e[r][u];
  }
  for (var l = i | 1 << r, f = r + 1; i & 1 << f; )
    f++;
  for (var h = 0, c = 0, v = 0; c < s; c++) {
    var d = 1 << c;
    d & n || (h += (v % 2 ? -1 : 1) * e[r][c] * Su(e, t - 1, f, l, n | d, a), v++);
  }
  return a[o] = h, h;
}
function Lf(e, t) {
  var r = [
    [e[0], e[1], 1, 0, 0, 0, -t[0] * e[0], -t[0] * e[1]],
    [0, 0, 0, e[0], e[1], 1, -t[1] * e[0], -t[1] * e[1]],
    [e[2], e[3], 1, 0, 0, 0, -t[2] * e[2], -t[2] * e[3]],
    [0, 0, 0, e[2], e[3], 1, -t[3] * e[2], -t[3] * e[3]],
    [e[4], e[5], 1, 0, 0, 0, -t[4] * e[4], -t[4] * e[5]],
    [0, 0, 0, e[4], e[5], 1, -t[5] * e[4], -t[5] * e[5]],
    [e[6], e[7], 1, 0, 0, 0, -t[6] * e[6], -t[6] * e[7]],
    [0, 0, 0, e[6], e[7], 1, -t[7] * e[6], -t[7] * e[7]]
  ], i = {}, n = Su(r, 8, 0, 0, 0, i);
  if (n !== 0) {
    for (var a = [], o = 0; o < 8; o++)
      for (var s = 0; s < 8; s++)
        a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * Su(r, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, i) / n * t[o];
    return function(u, l, f) {
      var h = l * a[6] + f * a[7] + 1;
      u[0] = (l * a[0] + f * a[1] + a[2]) / h, u[1] = (l * a[3] + f * a[4] + a[5]) / h;
    };
  }
}
var If = "___zrEVENTSAVED", Zo = [];
function cy(e, t, r, i, n) {
  return bu(Zo, t, i, n, !0) && bu(e, r, Zo[0], Zo[1]);
}
function bu(e, t, r, i, n) {
  if (t.getBoundingClientRect && Z.domSupported && !rd(t)) {
    var a = t[If] || (t[If] = {}), o = vy(t, a), s = dy(o, a, n);
    if (s)
      return s(e, r, i), !0;
  }
  return !1;
}
function vy(e, t) {
  var r = t.markers;
  if (r)
    return r;
  r = t.markers = [];
  for (var i = ["left", "right"], n = ["top", "bottom"], a = 0; a < 4; a++) {
    var o = document.createElement("div"), s = o.style, u = a % 2, l = (a >> 1) % 2;
    s.cssText = [
      "position: absolute",
      "visibility: hidden",
      "padding: 0",
      "margin: 0",
      "border-width: 0",
      "user-select: none",
      "width:0",
      "height:0",
      i[u] + ":0",
      n[l] + ":0",
      i[1 - u] + ":auto",
      n[1 - l] + ":auto",
      ""
    ].join("!important;"), e.appendChild(o), r.push(o);
  }
  return r;
}
function dy(e, t, r) {
  for (var i = r ? "invTrans" : "trans", n = t[i], a = t.srcCoords, o = [], s = [], u = !0, l = 0; l < 4; l++) {
    var f = e[l].getBoundingClientRect(), h = 2 * l, c = f.left, v = f.top;
    o.push(c, v), u = u && a && c === a[h] && v === a[h + 1], s.push(e[l].offsetLeft, e[l].offsetTop);
  }
  return u && n ? n : (t.srcCoords = o, t[i] = r ? Lf(s, o) : Lf(o, s));
}
function rd(e) {
  return e.nodeName.toUpperCase() === "CANVAS";
}
var py = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ko = [], gy = Z.browser.firefox && +Z.browser.version.split(".")[0] < 39;
function xu(e, t, r, i) {
  return r = r || {}, i ? Rf(e, t, r) : gy && t.layerX != null && t.layerX !== t.offsetX ? (r.zrX = t.layerX, r.zrY = t.layerY) : t.offsetX != null ? (r.zrX = t.offsetX, r.zrY = t.offsetY) : Rf(e, t, r), r;
}
function Rf(e, t, r) {
  if (Z.domSupported && e.getBoundingClientRect) {
    var i = t.clientX, n = t.clientY;
    if (rd(e)) {
      var a = e.getBoundingClientRect();
      r.zrX = i - a.left, r.zrY = n - a.top;
      return;
    } else if (bu(Ko, e, i, n)) {
      r.zrX = Ko[0], r.zrY = Ko[1];
      return;
    }
  }
  r.zrX = r.zrY = 0;
}
function xl(e) {
  return e || window.event;
}
function ae(e, t, r) {
  if (t = xl(t), t.zrX != null)
    return t;
  var i = t.type, n = i && i.indexOf("touch") >= 0;
  if (n) {
    var o = i !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
    o && xu(e, o, t, r);
  } else {
    xu(e, t, t, r);
    var a = _y(t);
    t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
  }
  var s = t.button;
  return t.which == null && s !== void 0 && py.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t;
}
function _y(e) {
  var t = e.wheelDelta;
  if (t)
    return t;
  var r = e.deltaX, i = e.deltaY;
  if (r == null || i == null)
    return t;
  var n = Math.abs(i !== 0 ? i : r), a = i > 0 ? -1 : i < 0 ? 1 : r > 0 ? -1 : 1;
  return 3 * n * a;
}
function yy(e, t, r, i) {
  e.addEventListener(t, r, i);
}
function my(e, t, r, i) {
  e.removeEventListener(t, r, i);
}
var id = function(e) {
  e.preventDefault(), e.stopPropagation(), e.cancelBubble = !0;
}, wy = function() {
  function e() {
    this._track = [];
  }
  return e.prototype.recognize = function(t, r, i) {
    return this._doTrack(t, r, i), this._recognize(t);
  }, e.prototype.clear = function() {
    return this._track.length = 0, this;
  }, e.prototype._doTrack = function(t, r, i) {
    var n = t.touches;
    if (!!n) {
      for (var a = {
        points: [],
        touches: [],
        target: r,
        event: t
      }, o = 0, s = n.length; o < s; o++) {
        var u = n[o], l = xu(i, u, {});
        a.points.push([l.zrX, l.zrY]), a.touches.push(u);
      }
      this._track.push(a);
    }
  }, e.prototype._recognize = function(t) {
    for (var r in Qo)
      if (Qo.hasOwnProperty(r)) {
        var i = Qo[r](this._track, t);
        if (i)
          return i;
      }
  }, e;
}();
function Of(e) {
  var t = e[1][0] - e[0][0], r = e[1][1] - e[0][1];
  return Math.sqrt(t * t + r * r);
}
function Sy(e) {
  return [
    (e[0][0] + e[1][0]) / 2,
    (e[0][1] + e[1][1]) / 2
  ];
}
var Qo = {
  pinch: function(e, t) {
    var r = e.length;
    if (!!r) {
      var i = (e[r - 1] || {}).points, n = (e[r - 2] || {}).points || i;
      if (n && n.length > 1 && i && i.length > 1) {
        var a = Of(i) / Of(n);
        !isFinite(a) && (a = 1), t.pinchScale = a;
        var o = Sy(i);
        return t.pinchX = o[0], t.pinchY = o[1], {
          type: "pinch",
          target: e[0].target,
          event: t
        };
      }
    }
  }
}, nd = "silent";
function by(e, t, r) {
  return {
    type: e,
    event: r,
    target: t.target,
    topTarget: t.topTarget,
    cancelBubble: !1,
    offsetX: r.zrX,
    offsetY: r.zrY,
    gestureEvent: r.gestureEvent,
    pinchX: r.pinchX,
    pinchY: r.pinchY,
    pinchScale: r.pinchScale,
    wheelDelta: r.zrDelta,
    zrByTouch: r.zrByTouch,
    which: r.which,
    stop: xy
  };
}
function xy() {
  id(this.event);
}
var Ty = function(e) {
  k(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.handler = null, r;
  }
  return t.prototype.dispose = function() {
  }, t.prototype.setCursor = function() {
  }, t;
}(ze), Gi = function() {
  function e(t, r) {
    this.x = t, this.y = r;
  }
  return e;
}(), Cy = [
  "click",
  "dblclick",
  "mousewheel",
  "mouseout",
  "mouseup",
  "mousedown",
  "mousemove",
  "contextmenu"
], ad = function(e) {
  k(t, e);
  function t(r, i, n, a) {
    var o = e.call(this) || this;
    return o._hovered = new Gi(0, 0), o.storage = r, o.painter = i, o.painterRoot = a, n = n || new Ty(), o.proxy = null, o.setHandlerProxy(n), o._draggingMgr = new ly(o), o;
  }
  return t.prototype.setHandlerProxy = function(r) {
    this.proxy && this.proxy.dispose(), r && (A(Cy, function(i) {
      r.on && r.on(i, this[i], this);
    }, this), r.handler = this), this.proxy = r;
  }, t.prototype.mousemove = function(r) {
    var i = r.zrX, n = r.zrY, a = od(this, i, n), o = this._hovered, s = o.target;
    s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
    var u = this._hovered = a ? new Gi(i, n) : this.findHover(i, n), l = u.target, f = this.proxy;
    f.setCursor && f.setCursor(l ? l.cursor : "default"), s && l !== s && this.dispatchToElement(o, "mouseout", r), this.dispatchToElement(u, "mousemove", r), l && l !== s && this.dispatchToElement(u, "mouseover", r);
  }, t.prototype.mouseout = function(r) {
    var i = r.zrEventControl;
    i !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", r), i !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: r });
  }, t.prototype.resize = function() {
    this._hovered = new Gi(0, 0);
  }, t.prototype.dispatch = function(r, i) {
    var n = this[r];
    n && n.call(this, i);
  }, t.prototype.dispose = function() {
    this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
  }, t.prototype.setCursorStyle = function(r) {
    var i = this.proxy;
    i.setCursor && i.setCursor(r);
  }, t.prototype.dispatchToElement = function(r, i, n) {
    r = r || {};
    var a = r.target;
    if (!(a && a.silent)) {
      for (var o = "on" + i, s = by(i, r, n); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(i, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
        ;
      s.cancelBubble || (this.trigger(i, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(u) {
        typeof u[o] == "function" && u[o].call(u, s), u.trigger && u.trigger(i, s);
      }));
    }
  }, t.prototype.findHover = function(r, i, n) {
    for (var a = this.storage.getDisplayList(), o = new Gi(r, i), s = a.length - 1; s >= 0; s--) {
      var u = void 0;
      if (a[s] !== n && !a[s].ignore && (u = Dy(a[s], r, i)) && (!o.topTarget && (o.topTarget = a[s]), u !== nd)) {
        o.target = a[s];
        break;
      }
    }
    return o;
  }, t.prototype.processGesture = function(r, i) {
    this._gestureMgr || (this._gestureMgr = new wy());
    var n = this._gestureMgr;
    i === "start" && n.clear();
    var a = n.recognize(r, this.findHover(r.zrX, r.zrY, null).target, this.proxy.dom);
    if (i === "end" && n.clear(), a) {
      var o = a.type;
      r.gestureEvent = o;
      var s = new Gi();
      s.target = a.target, this.dispatchToElement(s, o, a.event);
    }
  }, t;
}(ze);
A(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(e) {
  ad.prototype[e] = function(t) {
    var r = t.zrX, i = t.zrY, n = od(this, r, i), a, o;
    if ((e !== "mouseup" || !n) && (a = this.findHover(r, i), o = a.target), e === "mousedown")
      this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
    else if (e === "mouseup")
      this._upEl = o;
    else if (e === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || wu(this._downPoint, [t.zrX, t.zrY]) > 4)
        return;
      this._downPoint = null;
    }
    this.dispatchToElement(a, e, t);
  };
});
function Dy(e, t, r) {
  if (e[e.rectHover ? "rectContain" : "contain"](t, r)) {
    for (var i = e, n = void 0, a = !1; i; ) {
      if (i.ignoreClip && (a = !0), !a) {
        var o = i.getClipPath();
        if (o && !o.contain(t, r))
          return !1;
        i.silent && (n = !0);
      }
      var s = i.__hostTarget;
      i = s || i.parent;
    }
    return n ? nd : !0;
  }
  return !1;
}
function od(e, t, r) {
  var i = e.painter;
  return t < 0 || t > i.getWidth() || r < 0 || r > i.getHeight();
}
const Ay = ad;
var sd = 32, Wi = 7;
function Ey(e) {
  for (var t = 0; e >= sd; )
    t |= e & 1, e >>= 1;
  return e + t;
}
function Nf(e, t, r, i) {
  var n = t + 1;
  if (n === r)
    return 1;
  if (i(e[n++], e[t]) < 0) {
    for (; n < r && i(e[n], e[n - 1]) < 0; )
      n++;
    My(e, t, n);
  } else
    for (; n < r && i(e[n], e[n - 1]) >= 0; )
      n++;
  return n - t;
}
function My(e, t, r) {
  for (r--; t < r; ) {
    var i = e[t];
    e[t++] = e[r], e[r--] = i;
  }
}
function kf(e, t, r, i, n) {
  for (i === t && i++; i < r; i++) {
    for (var a = e[i], o = t, s = i, u; o < s; )
      u = o + s >>> 1, n(a, e[u]) < 0 ? s = u : o = u + 1;
    var l = i - o;
    switch (l) {
      case 3:
        e[o + 3] = e[o + 2];
      case 2:
        e[o + 2] = e[o + 1];
      case 1:
        e[o + 1] = e[o];
        break;
      default:
        for (; l > 0; )
          e[o + l] = e[o + l - 1], l--;
    }
    e[o] = a;
  }
}
function Jo(e, t, r, i, n, a) {
  var o = 0, s = 0, u = 1;
  if (a(e, t[r + n]) > 0) {
    for (s = i - n; u < s && a(e, t[r + n + u]) > 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s), o += n, u += n;
  } else {
    for (s = n + 1; u < s && a(e, t[r + n - u]) <= 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    o = n - u, u = n - l;
  }
  for (o++; o < u; ) {
    var f = o + (u - o >>> 1);
    a(e, t[r + f]) > 0 ? o = f + 1 : u = f;
  }
  return u;
}
function jo(e, t, r, i, n, a) {
  var o = 0, s = 0, u = 1;
  if (a(e, t[r + n]) < 0) {
    for (s = n + 1; u < s && a(e, t[r + n - u]) < 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    o = n - u, u = n - l;
  } else {
    for (s = i - n; u < s && a(e, t[r + n + u]) >= 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s), o += n, u += n;
  }
  for (o++; o < u; ) {
    var f = o + (u - o >>> 1);
    a(e, t[r + f]) < 0 ? u = f : o = f + 1;
  }
  return u;
}
function Py(e, t) {
  var r = Wi, i, n, a = 0;
  e.length;
  var o = [];
  i = [], n = [];
  function s(v, d) {
    i[a] = v, n[a] = d, a += 1;
  }
  function u() {
    for (; a > 1; ) {
      var v = a - 2;
      if (v >= 1 && n[v - 1] <= n[v] + n[v + 1] || v >= 2 && n[v - 2] <= n[v] + n[v - 1])
        n[v - 1] < n[v + 1] && v--;
      else if (n[v] > n[v + 1])
        break;
      f(v);
    }
  }
  function l() {
    for (; a > 1; ) {
      var v = a - 2;
      v > 0 && n[v - 1] < n[v + 1] && v--, f(v);
    }
  }
  function f(v) {
    var d = i[v], _ = n[v], p = i[v + 1], g = n[v + 1];
    n[v] = _ + g, v === a - 3 && (i[v + 1] = i[v + 2], n[v + 1] = n[v + 2]), a--;
    var y = jo(e[p], e, d, _, 0, t);
    d += y, _ -= y, _ !== 0 && (g = Jo(e[d + _ - 1], e, p, g, g - 1, t), g !== 0 && (_ <= g ? h(d, _, p, g) : c(d, _, p, g)));
  }
  function h(v, d, _, p) {
    var g = 0;
    for (g = 0; g < d; g++)
      o[g] = e[v + g];
    var y = 0, m = _, w = v;
    if (e[w++] = e[m++], --p === 0) {
      for (g = 0; g < d; g++)
        e[w + g] = o[y + g];
      return;
    }
    if (d === 1) {
      for (g = 0; g < p; g++)
        e[w + g] = e[m + g];
      e[w + p] = o[y];
      return;
    }
    for (var b = r, S, T, x; ; ) {
      S = 0, T = 0, x = !1;
      do
        if (t(e[m], o[y]) < 0) {
          if (e[w++] = e[m++], T++, S = 0, --p === 0) {
            x = !0;
            break;
          }
        } else if (e[w++] = o[y++], S++, T = 0, --d === 1) {
          x = !0;
          break;
        }
      while ((S | T) < b);
      if (x)
        break;
      do {
        if (S = jo(e[m], o, y, d, 0, t), S !== 0) {
          for (g = 0; g < S; g++)
            e[w + g] = o[y + g];
          if (w += S, y += S, d -= S, d <= 1) {
            x = !0;
            break;
          }
        }
        if (e[w++] = e[m++], --p === 0) {
          x = !0;
          break;
        }
        if (T = Jo(o[y], e, m, p, 0, t), T !== 0) {
          for (g = 0; g < T; g++)
            e[w + g] = e[m + g];
          if (w += T, m += T, p -= T, p === 0) {
            x = !0;
            break;
          }
        }
        if (e[w++] = o[y++], --d === 1) {
          x = !0;
          break;
        }
        b--;
      } while (S >= Wi || T >= Wi);
      if (x)
        break;
      b < 0 && (b = 0), b += 2;
    }
    if (r = b, r < 1 && (r = 1), d === 1) {
      for (g = 0; g < p; g++)
        e[w + g] = e[m + g];
      e[w + p] = o[y];
    } else {
      if (d === 0)
        throw new Error();
      for (g = 0; g < d; g++)
        e[w + g] = o[y + g];
    }
  }
  function c(v, d, _, p) {
    var g = 0;
    for (g = 0; g < p; g++)
      o[g] = e[_ + g];
    var y = v + d - 1, m = p - 1, w = _ + p - 1, b = 0, S = 0;
    if (e[w--] = e[y--], --d === 0) {
      for (b = w - (p - 1), g = 0; g < p; g++)
        e[b + g] = o[g];
      return;
    }
    if (p === 1) {
      for (w -= d, y -= d, S = w + 1, b = y + 1, g = d - 1; g >= 0; g--)
        e[S + g] = e[b + g];
      e[w] = o[m];
      return;
    }
    for (var T = r; ; ) {
      var x = 0, C = 0, E = !1;
      do
        if (t(o[m], e[y]) < 0) {
          if (e[w--] = e[y--], x++, C = 0, --d === 0) {
            E = !0;
            break;
          }
        } else if (e[w--] = o[m--], C++, x = 0, --p === 1) {
          E = !0;
          break;
        }
      while ((x | C) < T);
      if (E)
        break;
      do {
        if (x = d - jo(o[m], e, v, d, d - 1, t), x !== 0) {
          for (w -= x, y -= x, d -= x, S = w + 1, b = y + 1, g = x - 1; g >= 0; g--)
            e[S + g] = e[b + g];
          if (d === 0) {
            E = !0;
            break;
          }
        }
        if (e[w--] = o[m--], --p === 1) {
          E = !0;
          break;
        }
        if (C = p - Jo(e[y], o, 0, p, p - 1, t), C !== 0) {
          for (w -= C, m -= C, p -= C, S = w + 1, b = m + 1, g = 0; g < C; g++)
            e[S + g] = o[b + g];
          if (p <= 1) {
            E = !0;
            break;
          }
        }
        if (e[w--] = e[y--], --d === 0) {
          E = !0;
          break;
        }
        T--;
      } while (x >= Wi || C >= Wi);
      if (E)
        break;
      T < 0 && (T = 0), T += 2;
    }
    if (r = T, r < 1 && (r = 1), p === 1) {
      for (w -= d, y -= d, S = w + 1, b = y + 1, g = d - 1; g >= 0; g--)
        e[S + g] = e[b + g];
      e[w] = o[m];
    } else {
      if (p === 0)
        throw new Error();
      for (b = w - (p - 1), g = 0; g < p; g++)
        e[b + g] = o[g];
    }
  }
  return {
    mergeRuns: u,
    forceMergeRuns: l,
    pushRun: s
  };
}
function ka(e, t, r, i) {
  r || (r = 0), i || (i = e.length);
  var n = i - r;
  if (!(n < 2)) {
    var a = 0;
    if (n < sd) {
      a = Nf(e, r, i, t), kf(e, r, i, r + a, t);
      return;
    }
    var o = Py(e, t), s = Ey(n);
    do {
      if (a = Nf(e, r, i, t), a < s) {
        var u = n;
        u > s && (u = s), kf(e, r, r + u, r + a, t), a = u;
      }
      o.pushRun(r, a), o.mergeRuns(), n -= a, r += a;
    } while (n !== 0);
    o.forceMergeRuns();
  }
}
var Jt = 1, fn = 2, yi = 4, Bf = !1;
function ts() {
  Bf || (Bf = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function zf(e, t) {
  return e.zlevel === t.zlevel ? e.z === t.z ? e.z2 - t.z2 : e.z - t.z : e.zlevel - t.zlevel;
}
var Ly = function() {
  function e() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = zf;
  }
  return e.prototype.traverse = function(t, r) {
    for (var i = 0; i < this._roots.length; i++)
      this._roots[i].traverse(t, r);
  }, e.prototype.getDisplayList = function(t, r) {
    r = r || !1;
    var i = this._displayList;
    return (t || !i.length) && this.updateDisplayList(r), i;
  }, e.prototype.updateDisplayList = function(t) {
    this._displayListLen = 0;
    for (var r = this._roots, i = this._displayList, n = 0, a = r.length; n < a; n++)
      this._updateAndAddDisplayable(r[n], null, t);
    i.length = this._displayListLen, ka(i, zf);
  }, e.prototype._updateAndAddDisplayable = function(t, r, i) {
    if (!(t.ignore && !i)) {
      t.beforeUpdate(), t.update(), t.afterUpdate();
      var n = t.getClipPath();
      if (t.ignoreClip)
        r = null;
      else if (n) {
        r ? r = r.slice() : r = [];
        for (var a = n, o = t; a; )
          a.parent = o, a.updateTransform(), r.push(a), o = a, a = a.getClipPath();
      }
      if (t.childrenRef) {
        for (var s = t.childrenRef(), u = 0; u < s.length; u++) {
          var l = s[u];
          t.__dirty && (l.__dirty |= Jt), this._updateAndAddDisplayable(l, r, i);
        }
        t.__dirty = 0;
      } else {
        var f = t;
        r && r.length ? f.__clipPaths = r : f.__clipPaths && f.__clipPaths.length > 0 && (f.__clipPaths = []), isNaN(f.z) && (ts(), f.z = 0), isNaN(f.z2) && (ts(), f.z2 = 0), isNaN(f.zlevel) && (ts(), f.zlevel = 0), this._displayList[this._displayListLen++] = f;
      }
      var h = t.getDecalElement && t.getDecalElement();
      h && this._updateAndAddDisplayable(h, r, i);
      var c = t.getTextGuideLine();
      c && this._updateAndAddDisplayable(c, r, i);
      var v = t.getTextContent();
      v && this._updateAndAddDisplayable(v, r, i);
    }
  }, e.prototype.addRoot = function(t) {
    t.__zr && t.__zr.storage === this || this._roots.push(t);
  }, e.prototype.delRoot = function(t) {
    if (t instanceof Array) {
      for (var r = 0, i = t.length; r < i; r++)
        this.delRoot(t[r]);
      return;
    }
    var n = nt(this._roots, t);
    n >= 0 && this._roots.splice(n, 1);
  }, e.prototype.delAllRoots = function() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  }, e.prototype.getRoots = function() {
    return this._roots;
  }, e.prototype.dispose = function() {
    this._displayList = null, this._roots = null;
  }, e;
}();
const Iy = Ly;
var ud;
ud = Z.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(e) {
  return setTimeout(e, 16);
};
const Tu = ud;
var Ba = {
  linear: function(e) {
    return e;
  },
  quadraticIn: function(e) {
    return e * e;
  },
  quadraticOut: function(e) {
    return e * (2 - e);
  },
  quadraticInOut: function(e) {
    return (e *= 2) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
  },
  cubicIn: function(e) {
    return e * e * e;
  },
  cubicOut: function(e) {
    return --e * e * e + 1;
  },
  cubicInOut: function(e) {
    return (e *= 2) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2);
  },
  quarticIn: function(e) {
    return e * e * e * e;
  },
  quarticOut: function(e) {
    return 1 - --e * e * e * e;
  },
  quarticInOut: function(e) {
    return (e *= 2) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2);
  },
  quinticIn: function(e) {
    return e * e * e * e * e;
  },
  quinticOut: function(e) {
    return --e * e * e * e * e + 1;
  },
  quinticInOut: function(e) {
    return (e *= 2) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2);
  },
  sinusoidalIn: function(e) {
    return 1 - Math.cos(e * Math.PI / 2);
  },
  sinusoidalOut: function(e) {
    return Math.sin(e * Math.PI / 2);
  },
  sinusoidalInOut: function(e) {
    return 0.5 * (1 - Math.cos(Math.PI * e));
  },
  exponentialIn: function(e) {
    return e === 0 ? 0 : Math.pow(1024, e - 1);
  },
  exponentialOut: function(e) {
    return e === 1 ? 1 : 1 - Math.pow(2, -10 * e);
  },
  exponentialInOut: function(e) {
    return e === 0 ? 0 : e === 1 ? 1 : (e *= 2) < 1 ? 0.5 * Math.pow(1024, e - 1) : 0.5 * (-Math.pow(2, -10 * (e - 1)) + 2);
  },
  circularIn: function(e) {
    return 1 - Math.sqrt(1 - e * e);
  },
  circularOut: function(e) {
    return Math.sqrt(1 - --e * e);
  },
  circularInOut: function(e) {
    return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  },
  elasticIn: function(e) {
    var t, r = 0.1, i = 0.4;
    return e === 0 ? 0 : e === 1 ? 1 : (!r || r < 1 ? (r = 1, t = i / 4) : t = i * Math.asin(1 / r) / (2 * Math.PI), -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / i)));
  },
  elasticOut: function(e) {
    var t, r = 0.1, i = 0.4;
    return e === 0 ? 0 : e === 1 ? 1 : (!r || r < 1 ? (r = 1, t = i / 4) : t = i * Math.asin(1 / r) / (2 * Math.PI), r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / i) + 1);
  },
  elasticInOut: function(e) {
    var t, r = 0.1, i = 0.4;
    return e === 0 ? 0 : e === 1 ? 1 : (!r || r < 1 ? (r = 1, t = i / 4) : t = i * Math.asin(1 / r) / (2 * Math.PI), (e *= 2) < 1 ? -0.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / i)) : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / i) * 0.5 + 1);
  },
  backIn: function(e) {
    var t = 1.70158;
    return e * e * ((t + 1) * e - t);
  },
  backOut: function(e) {
    var t = 1.70158;
    return --e * e * ((t + 1) * e + t) + 1;
  },
  backInOut: function(e) {
    var t = 2.5949095;
    return (e *= 2) < 1 ? 0.5 * (e * e * ((t + 1) * e - t)) : 0.5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
  },
  bounceIn: function(e) {
    return 1 - Ba.bounceOut(1 - e);
  },
  bounceOut: function(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  bounceInOut: function(e) {
    return e < 0.5 ? Ba.bounceIn(e * 2) * 0.5 : Ba.bounceOut(e * 2 - 1) * 0.5 + 0.5;
  }
};
const ld = Ba;
var jn = Math.pow, lr = Math.sqrt, Qa = 1e-8, fd = 1e-4, Ff = lr(3), ta = 1 / 3, Me = Ni(), le = Ni(), Ci = Ni();
function ar(e) {
  return e > -Qa && e < Qa;
}
function hd(e) {
  return e > Qa || e < -Qa;
}
function Ct(e, t, r, i, n) {
  var a = 1 - n;
  return a * a * (a * e + 3 * n * t) + n * n * (n * i + 3 * a * r);
}
function Vf(e, t, r, i, n) {
  var a = 1 - n;
  return 3 * (((t - e) * a + 2 * (r - t) * n) * a + (i - r) * n * n);
}
function cd(e, t, r, i, n, a) {
  var o = i + 3 * (t - r) - e, s = 3 * (r - t * 2 + e), u = 3 * (t - e), l = e - n, f = s * s - 3 * o * u, h = s * u - 9 * o * l, c = u * u - 3 * s * l, v = 0;
  if (ar(f) && ar(h))
    if (ar(s))
      a[0] = 0;
    else {
      var d = -u / s;
      d >= 0 && d <= 1 && (a[v++] = d);
    }
  else {
    var _ = h * h - 4 * f * c;
    if (ar(_)) {
      var p = h / f, d = -s / o + p, g = -p / 2;
      d >= 0 && d <= 1 && (a[v++] = d), g >= 0 && g <= 1 && (a[v++] = g);
    } else if (_ > 0) {
      var y = lr(_), m = f * s + 1.5 * o * (-h + y), w = f * s + 1.5 * o * (-h - y);
      m < 0 ? m = -jn(-m, ta) : m = jn(m, ta), w < 0 ? w = -jn(-w, ta) : w = jn(w, ta);
      var d = (-s - (m + w)) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d);
    } else {
      var b = (2 * f * s - 3 * o * h) / (2 * lr(f * f * f)), S = Math.acos(b) / 3, T = lr(f), x = Math.cos(S), d = (-s - 2 * T * x) / (3 * o), g = (-s + T * (x + Ff * Math.sin(S))) / (3 * o), C = (-s + T * (x - Ff * Math.sin(S))) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d), g >= 0 && g <= 1 && (a[v++] = g), C >= 0 && C <= 1 && (a[v++] = C);
    }
  }
  return v;
}
function vd(e, t, r, i, n) {
  var a = 6 * r - 12 * t + 6 * e, o = 9 * t + 3 * i - 3 * e - 9 * r, s = 3 * t - 3 * e, u = 0;
  if (ar(o)) {
    if (hd(a)) {
      var l = -s / a;
      l >= 0 && l <= 1 && (n[u++] = l);
    }
  } else {
    var f = a * a - 4 * o * s;
    if (ar(f))
      n[0] = -a / (2 * o);
    else if (f > 0) {
      var h = lr(f), l = (-a + h) / (2 * o), c = (-a - h) / (2 * o);
      l >= 0 && l <= 1 && (n[u++] = l), c >= 0 && c <= 1 && (n[u++] = c);
    }
  }
  return u;
}
function Ja(e, t, r, i, n, a) {
  var o = (t - e) * n + e, s = (r - t) * n + t, u = (i - r) * n + r, l = (s - o) * n + o, f = (u - s) * n + s, h = (f - l) * n + l;
  a[0] = e, a[1] = o, a[2] = l, a[3] = h, a[4] = h, a[5] = f, a[6] = u, a[7] = i;
}
function Ry(e, t, r, i, n, a, o, s, u, l, f) {
  var h, c = 5e-3, v = 1 / 0, d, _, p, g;
  Me[0] = u, Me[1] = l;
  for (var y = 0; y < 1; y += 0.05)
    le[0] = Ct(e, r, n, o, y), le[1] = Ct(t, i, a, s, y), p = Ti(Me, le), p < v && (h = y, v = p);
  v = 1 / 0;
  for (var m = 0; m < 32 && !(c < fd); m++)
    d = h - c, _ = h + c, le[0] = Ct(e, r, n, o, d), le[1] = Ct(t, i, a, s, d), p = Ti(le, Me), d >= 0 && p < v ? (h = d, v = p) : (Ci[0] = Ct(e, r, n, o, _), Ci[1] = Ct(t, i, a, s, _), g = Ti(Ci, Me), _ <= 1 && g < v ? (h = _, v = g) : c *= 0.5);
  return f && (f[0] = Ct(e, r, n, o, h), f[1] = Ct(t, i, a, s, h)), lr(v);
}
function Oy(e, t, r, i, n, a, o, s, u) {
  for (var l = e, f = t, h = 0, c = 1 / u, v = 1; v <= u; v++) {
    var d = v * c, _ = Ct(e, r, n, o, d), p = Ct(t, i, a, s, d), g = _ - l, y = p - f;
    h += Math.sqrt(g * g + y * y), l = _, f = p;
  }
  return h;
}
function Pt(e, t, r, i) {
  var n = 1 - i;
  return n * (n * e + 2 * i * t) + i * i * r;
}
function Hf(e, t, r, i) {
  return 2 * ((1 - i) * (t - e) + i * (r - t));
}
function Ny(e, t, r, i, n) {
  var a = e - 2 * t + r, o = 2 * (t - e), s = e - i, u = 0;
  if (ar(a)) {
    if (hd(o)) {
      var l = -s / o;
      l >= 0 && l <= 1 && (n[u++] = l);
    }
  } else {
    var f = o * o - 4 * a * s;
    if (ar(f)) {
      var l = -o / (2 * a);
      l >= 0 && l <= 1 && (n[u++] = l);
    } else if (f > 0) {
      var h = lr(f), l = (-o + h) / (2 * a), c = (-o - h) / (2 * a);
      l >= 0 && l <= 1 && (n[u++] = l), c >= 0 && c <= 1 && (n[u++] = c);
    }
  }
  return u;
}
function dd(e, t, r) {
  var i = e + r - 2 * t;
  return i === 0 ? 0.5 : (e - t) / i;
}
function ja(e, t, r, i, n) {
  var a = (t - e) * i + e, o = (r - t) * i + t, s = (o - a) * i + a;
  n[0] = e, n[1] = a, n[2] = s, n[3] = s, n[4] = o, n[5] = r;
}
function ky(e, t, r, i, n, a, o, s, u) {
  var l, f = 5e-3, h = 1 / 0;
  Me[0] = o, Me[1] = s;
  for (var c = 0; c < 1; c += 0.05) {
    le[0] = Pt(e, r, n, c), le[1] = Pt(t, i, a, c);
    var v = Ti(Me, le);
    v < h && (l = c, h = v);
  }
  h = 1 / 0;
  for (var d = 0; d < 32 && !(f < fd); d++) {
    var _ = l - f, p = l + f;
    le[0] = Pt(e, r, n, _), le[1] = Pt(t, i, a, _);
    var v = Ti(le, Me);
    if (_ >= 0 && v < h)
      l = _, h = v;
    else {
      Ci[0] = Pt(e, r, n, p), Ci[1] = Pt(t, i, a, p);
      var g = Ti(Ci, Me);
      p <= 1 && g < h ? (l = p, h = g) : f *= 0.5;
    }
  }
  return u && (u[0] = Pt(e, r, n, l), u[1] = Pt(t, i, a, l)), lr(h);
}
function By(e, t, r, i, n, a, o) {
  for (var s = e, u = t, l = 0, f = 1 / o, h = 1; h <= o; h++) {
    var c = h * f, v = Pt(e, r, n, c), d = Pt(t, i, a, c), _ = v - s, p = d - u;
    l += Math.sqrt(_ * _ + p * p), s = v, u = d;
  }
  return l;
}
var zy = /cubic-bezier\(([0-9,\.e ]+)\)/;
function pd(e) {
  var t = e && zy.exec(e);
  if (t) {
    var r = t[1].split(","), i = +Le(r[0]), n = +Le(r[1]), a = +Le(r[2]), o = +Le(r[3]);
    if (isNaN(i + n + a + o))
      return;
    var s = [];
    return function(u) {
      return u <= 0 ? 0 : u >= 1 ? 1 : cd(0, i, a, 1, u, s) && Ct(0, n, o, 1, s[0]);
    };
  }
}
var Fy = function() {
  function e(t) {
    this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || Ut, this.ondestroy = t.ondestroy || Ut, this.onrestart = t.onrestart || Ut, t.easing && this.setEasing(t.easing);
  }
  return e.prototype.step = function(t, r) {
    if (this._inited || (this._startTime = t + this._delay, this._inited = !0), this._paused) {
      this._pausedTime += r;
      return;
    }
    var i = this._life, n = t - this._startTime - this._pausedTime, a = n / i;
    a < 0 && (a = 0), a = Math.min(a, 1);
    var o = this.easingFunc, s = o ? o(a) : a;
    if (this.onframe(s), a === 1)
      if (this.loop) {
        var u = n % i;
        this._startTime = t - u, this._pausedTime = 0, this.onrestart();
      } else
        return !0;
    return !1;
  }, e.prototype.pause = function() {
    this._paused = !0;
  }, e.prototype.resume = function() {
    this._paused = !1;
  }, e.prototype.setEasing = function(t) {
    this.easing = t, this.easingFunc = J(t) ? t : ld[t] || pd(t);
  }, e;
}();
const Vy = Fy;
var gd = function() {
  function e(t) {
    this.value = t;
  }
  return e;
}(), Hy = function() {
  function e() {
    this._len = 0;
  }
  return e.prototype.insert = function(t) {
    var r = new gd(t);
    return this.insertEntry(r), r;
  }, e.prototype.insertEntry = function(t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
  }, e.prototype.remove = function(t) {
    var r = t.prev, i = t.next;
    r ? r.next = i : this.head = i, i ? i.prev = r : this.tail = r, t.next = t.prev = null, this._len--;
  }, e.prototype.len = function() {
    return this._len;
  }, e.prototype.clear = function() {
    this.head = this.tail = null, this._len = 0;
  }, e;
}(), Gy = function() {
  function e(t) {
    this._list = new Hy(), this._maxSize = 10, this._map = {}, this._maxSize = t;
  }
  return e.prototype.put = function(t, r) {
    var i = this._list, n = this._map, a = null;
    if (n[t] == null) {
      var o = i.len(), s = this._lastRemovedEntry;
      if (o >= this._maxSize && o > 0) {
        var u = i.head;
        i.remove(u), delete n[u.key], a = u.value, this._lastRemovedEntry = u;
      }
      s ? s.value = r : s = new gd(r), s.key = t, i.insertEntry(s), n[t] = s;
    }
    return a;
  }, e.prototype.get = function(t) {
    var r = this._map[t], i = this._list;
    if (r != null)
      return r !== i.tail && (i.remove(r), i.insertEntry(r)), r.value;
  }, e.prototype.clear = function() {
    this._list.clear(), this._map = {};
  }, e.prototype.len = function() {
    return this._list.len();
  }, e;
}();
const $n = Gy;
var Gf = {
  transparent: [0, 0, 0, 0],
  aliceblue: [240, 248, 255, 1],
  antiquewhite: [250, 235, 215, 1],
  aqua: [0, 255, 255, 1],
  aquamarine: [127, 255, 212, 1],
  azure: [240, 255, 255, 1],
  beige: [245, 245, 220, 1],
  bisque: [255, 228, 196, 1],
  black: [0, 0, 0, 1],
  blanchedalmond: [255, 235, 205, 1],
  blue: [0, 0, 255, 1],
  blueviolet: [138, 43, 226, 1],
  brown: [165, 42, 42, 1],
  burlywood: [222, 184, 135, 1],
  cadetblue: [95, 158, 160, 1],
  chartreuse: [127, 255, 0, 1],
  chocolate: [210, 105, 30, 1],
  coral: [255, 127, 80, 1],
  cornflowerblue: [100, 149, 237, 1],
  cornsilk: [255, 248, 220, 1],
  crimson: [220, 20, 60, 1],
  cyan: [0, 255, 255, 1],
  darkblue: [0, 0, 139, 1],
  darkcyan: [0, 139, 139, 1],
  darkgoldenrod: [184, 134, 11, 1],
  darkgray: [169, 169, 169, 1],
  darkgreen: [0, 100, 0, 1],
  darkgrey: [169, 169, 169, 1],
  darkkhaki: [189, 183, 107, 1],
  darkmagenta: [139, 0, 139, 1],
  darkolivegreen: [85, 107, 47, 1],
  darkorange: [255, 140, 0, 1],
  darkorchid: [153, 50, 204, 1],
  darkred: [139, 0, 0, 1],
  darksalmon: [233, 150, 122, 1],
  darkseagreen: [143, 188, 143, 1],
  darkslateblue: [72, 61, 139, 1],
  darkslategray: [47, 79, 79, 1],
  darkslategrey: [47, 79, 79, 1],
  darkturquoise: [0, 206, 209, 1],
  darkviolet: [148, 0, 211, 1],
  deeppink: [255, 20, 147, 1],
  deepskyblue: [0, 191, 255, 1],
  dimgray: [105, 105, 105, 1],
  dimgrey: [105, 105, 105, 1],
  dodgerblue: [30, 144, 255, 1],
  firebrick: [178, 34, 34, 1],
  floralwhite: [255, 250, 240, 1],
  forestgreen: [34, 139, 34, 1],
  fuchsia: [255, 0, 255, 1],
  gainsboro: [220, 220, 220, 1],
  ghostwhite: [248, 248, 255, 1],
  gold: [255, 215, 0, 1],
  goldenrod: [218, 165, 32, 1],
  gray: [128, 128, 128, 1],
  green: [0, 128, 0, 1],
  greenyellow: [173, 255, 47, 1],
  grey: [128, 128, 128, 1],
  honeydew: [240, 255, 240, 1],
  hotpink: [255, 105, 180, 1],
  indianred: [205, 92, 92, 1],
  indigo: [75, 0, 130, 1],
  ivory: [255, 255, 240, 1],
  khaki: [240, 230, 140, 1],
  lavender: [230, 230, 250, 1],
  lavenderblush: [255, 240, 245, 1],
  lawngreen: [124, 252, 0, 1],
  lemonchiffon: [255, 250, 205, 1],
  lightblue: [173, 216, 230, 1],
  lightcoral: [240, 128, 128, 1],
  lightcyan: [224, 255, 255, 1],
  lightgoldenrodyellow: [250, 250, 210, 1],
  lightgray: [211, 211, 211, 1],
  lightgreen: [144, 238, 144, 1],
  lightgrey: [211, 211, 211, 1],
  lightpink: [255, 182, 193, 1],
  lightsalmon: [255, 160, 122, 1],
  lightseagreen: [32, 178, 170, 1],
  lightskyblue: [135, 206, 250, 1],
  lightslategray: [119, 136, 153, 1],
  lightslategrey: [119, 136, 153, 1],
  lightsteelblue: [176, 196, 222, 1],
  lightyellow: [255, 255, 224, 1],
  lime: [0, 255, 0, 1],
  limegreen: [50, 205, 50, 1],
  linen: [250, 240, 230, 1],
  magenta: [255, 0, 255, 1],
  maroon: [128, 0, 0, 1],
  mediumaquamarine: [102, 205, 170, 1],
  mediumblue: [0, 0, 205, 1],
  mediumorchid: [186, 85, 211, 1],
  mediumpurple: [147, 112, 219, 1],
  mediumseagreen: [60, 179, 113, 1],
  mediumslateblue: [123, 104, 238, 1],
  mediumspringgreen: [0, 250, 154, 1],
  mediumturquoise: [72, 209, 204, 1],
  mediumvioletred: [199, 21, 133, 1],
  midnightblue: [25, 25, 112, 1],
  mintcream: [245, 255, 250, 1],
  mistyrose: [255, 228, 225, 1],
  moccasin: [255, 228, 181, 1],
  navajowhite: [255, 222, 173, 1],
  navy: [0, 0, 128, 1],
  oldlace: [253, 245, 230, 1],
  olive: [128, 128, 0, 1],
  olivedrab: [107, 142, 35, 1],
  orange: [255, 165, 0, 1],
  orangered: [255, 69, 0, 1],
  orchid: [218, 112, 214, 1],
  palegoldenrod: [238, 232, 170, 1],
  palegreen: [152, 251, 152, 1],
  paleturquoise: [175, 238, 238, 1],
  palevioletred: [219, 112, 147, 1],
  papayawhip: [255, 239, 213, 1],
  peachpuff: [255, 218, 185, 1],
  peru: [205, 133, 63, 1],
  pink: [255, 192, 203, 1],
  plum: [221, 160, 221, 1],
  powderblue: [176, 224, 230, 1],
  purple: [128, 0, 128, 1],
  red: [255, 0, 0, 1],
  rosybrown: [188, 143, 143, 1],
  royalblue: [65, 105, 225, 1],
  saddlebrown: [139, 69, 19, 1],
  salmon: [250, 128, 114, 1],
  sandybrown: [244, 164, 96, 1],
  seagreen: [46, 139, 87, 1],
  seashell: [255, 245, 238, 1],
  sienna: [160, 82, 45, 1],
  silver: [192, 192, 192, 1],
  skyblue: [135, 206, 235, 1],
  slateblue: [106, 90, 205, 1],
  slategray: [112, 128, 144, 1],
  slategrey: [112, 128, 144, 1],
  snow: [255, 250, 250, 1],
  springgreen: [0, 255, 127, 1],
  steelblue: [70, 130, 180, 1],
  tan: [210, 180, 140, 1],
  teal: [0, 128, 128, 1],
  thistle: [216, 191, 216, 1],
  tomato: [255, 99, 71, 1],
  turquoise: [64, 224, 208, 1],
  violet: [238, 130, 238, 1],
  wheat: [245, 222, 179, 1],
  white: [255, 255, 255, 1],
  whitesmoke: [245, 245, 245, 1],
  yellow: [255, 255, 0, 1],
  yellowgreen: [154, 205, 50, 1]
};
function wn(e) {
  return e = Math.round(e), e < 0 ? 0 : e > 255 ? 255 : e;
}
function Wf(e) {
  return e < 0 ? 0 : e > 1 ? 1 : e;
}
function es(e) {
  var t = e;
  return t.length && t.charAt(t.length - 1) === "%" ? wn(parseFloat(t) / 100 * 255) : wn(parseInt(t, 10));
}
function to(e) {
  var t = e;
  return t.length && t.charAt(t.length - 1) === "%" ? Wf(parseFloat(t) / 100) : Wf(parseFloat(t));
}
function rs(e, t, r) {
  return r < 0 ? r += 1 : r > 1 && (r -= 1), r * 6 < 1 ? e + (t - e) * r * 6 : r * 2 < 1 ? t : r * 3 < 2 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function ne(e, t, r, i, n) {
  return e[0] = t, e[1] = r, e[2] = i, e[3] = n, e;
}
function Cu(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
}
var _d = new $n(20), ea = null;
function ni(e, t) {
  ea && Cu(ea, t), ea = _d.put(e, ea || t.slice());
}
function Wr(e, t) {
  if (!!e) {
    t = t || [];
    var r = _d.get(e);
    if (r)
      return Cu(t, r);
    e = e + "";
    var i = e.replace(/ /g, "").toLowerCase();
    if (i in Gf)
      return Cu(t, Gf[i]), ni(e, t), t;
    var n = i.length;
    if (i.charAt(0) === "#") {
      if (n === 4 || n === 5) {
        var a = parseInt(i.slice(1, 4), 16);
        if (!(a >= 0 && a <= 4095)) {
          ne(t, 0, 0, 0, 1);
          return;
        }
        return ne(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, n === 5 ? parseInt(i.slice(4), 16) / 15 : 1), ni(e, t), t;
      } else if (n === 7 || n === 9) {
        var a = parseInt(i.slice(1, 7), 16);
        if (!(a >= 0 && a <= 16777215)) {
          ne(t, 0, 0, 0, 1);
          return;
        }
        return ne(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, n === 9 ? parseInt(i.slice(7), 16) / 255 : 1), ni(e, t), t;
      }
      return;
    }
    var o = i.indexOf("("), s = i.indexOf(")");
    if (o !== -1 && s + 1 === n) {
      var u = i.substr(0, o), l = i.substr(o + 1, s - (o + 1)).split(","), f = 1;
      switch (u) {
        case "rgba":
          if (l.length !== 4)
            return l.length === 3 ? ne(t, +l[0], +l[1], +l[2], 1) : ne(t, 0, 0, 0, 1);
          f = to(l.pop());
        case "rgb":
          if (l.length !== 3) {
            ne(t, 0, 0, 0, 1);
            return;
          }
          return ne(t, es(l[0]), es(l[1]), es(l[2]), f), ni(e, t), t;
        case "hsla":
          if (l.length !== 4) {
            ne(t, 0, 0, 0, 1);
            return;
          }
          return l[3] = to(l[3]), $f(l, t), ni(e, t), t;
        case "hsl":
          if (l.length !== 3) {
            ne(t, 0, 0, 0, 1);
            return;
          }
          return $f(l, t), ni(e, t), t;
        default:
          return;
      }
    }
    ne(t, 0, 0, 0, 1);
  }
}
function $f(e, t) {
  var r = (parseFloat(e[0]) % 360 + 360) % 360 / 360, i = to(e[1]), n = to(e[2]), a = n <= 0.5 ? n * (i + 1) : n + i - n * i, o = n * 2 - a;
  return t = t || [], ne(t, wn(rs(o, a, r + 1 / 3) * 255), wn(rs(o, a, r) * 255), wn(rs(o, a, r - 1 / 3) * 255), 1), e.length === 4 && (t[3] = e[3]), t;
}
function Uf(e, t) {
  var r = Wr(e);
  if (r) {
    for (var i = 0; i < 3; i++)
      t < 0 ? r[i] = r[i] * (1 - t) | 0 : r[i] = (255 - r[i]) * t + r[i] | 0, r[i] > 255 ? r[i] = 255 : r[i] < 0 && (r[i] = 0);
    return Tl(r, r.length === 4 ? "rgba" : "rgb");
  }
}
function Tl(e, t) {
  if (!(!e || !e.length)) {
    var r = e[0] + "," + e[1] + "," + e[2];
    return (t === "rgba" || t === "hsva" || t === "hsla") && (r += "," + e[3]), t + "(" + r + ")";
  }
}
function eo(e, t) {
  var r = Wr(e);
  return r ? (0.299 * r[0] + 0.587 * r[1] + 0.114 * r[2]) * r[3] / 255 + (1 - r[3]) * t : 0;
}
function Wy(e) {
  return e.type === "linear";
}
function $y(e) {
  return e.type === "radial";
}
(function() {
  return Z.hasGlobalWindow && J(window.btoa) ? function(e) {
    return window.btoa(unescape(e));
  } : typeof Buffer < "u" ? function(e) {
    return Buffer.from(e).toString("base64");
  } : function(e) {
    return process.env.NODE_ENV !== "production" && Gr("Base64 isn't natively supported in the current environment."), null;
  };
})();
var Du = Array.prototype.slice;
function We(e, t, r) {
  return (t - e) * r + e;
}
function is(e, t, r, i) {
  for (var n = t.length, a = 0; a < n; a++)
    e[a] = We(t[a], r[a], i);
  return e;
}
function Uy(e, t, r, i) {
  for (var n = t.length, a = n && t[0].length, o = 0; o < n; o++) {
    e[o] || (e[o] = []);
    for (var s = 0; s < a; s++)
      e[o][s] = We(t[o][s], r[o][s], i);
  }
  return e;
}
function ra(e, t, r, i) {
  for (var n = t.length, a = 0; a < n; a++)
    e[a] = t[a] + r[a] * i;
  return e;
}
function Yf(e, t, r, i) {
  for (var n = t.length, a = n && t[0].length, o = 0; o < n; o++) {
    e[o] || (e[o] = []);
    for (var s = 0; s < a; s++)
      e[o][s] = t[o][s] + r[o][s] * i;
  }
  return e;
}
function Yy(e, t) {
  for (var r = e.length, i = t.length, n = r > i ? t : e, a = Math.min(r, i), o = n[a - 1] || { color: [0, 0, 0, 0], offset: 0 }, s = a; s < Math.max(r, i); s++)
    n.push({
      offset: o.offset,
      color: o.color.slice()
    });
}
function Xy(e, t, r) {
  var i = e, n = t;
  if (!(!i.push || !n.push)) {
    var a = i.length, o = n.length;
    if (a !== o) {
      var s = a > o;
      if (s)
        i.length = o;
      else
        for (var u = a; u < o; u++)
          i.push(r === 1 ? n[u] : Du.call(n[u]));
    }
    for (var l = i[0] && i[0].length, u = 0; u < i.length; u++)
      if (r === 1)
        isNaN(i[u]) && (i[u] = n[u]);
      else
        for (var f = 0; f < l; f++)
          isNaN(i[u][f]) && (i[u][f] = n[u][f]);
  }
}
function za(e) {
  if (Yt(e)) {
    var t = e.length;
    if (Yt(e[0])) {
      for (var r = [], i = 0; i < t; i++)
        r.push(Du.call(e[i]));
      return r;
    }
    return Du.call(e);
  }
  return e;
}
function Fa(e) {
  return e[0] = Math.floor(e[0]) || 0, e[1] = Math.floor(e[1]) || 0, e[2] = Math.floor(e[2]) || 0, e[3] = e[3] == null ? 1 : e[3], "rgba(" + e.join(",") + ")";
}
function qy(e) {
  return Yt(e && e[0]) ? 2 : 1;
}
var ia = 0, Va = 1, yd = 2, hn = 3, Au = 4, Eu = 5, Xf = 6;
function qf(e) {
  return e === Au || e === Eu;
}
function na(e) {
  return e === Va || e === yd;
}
var $i = [0, 0, 0, 0], Zy = function() {
  function e(t) {
    this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = t;
  }
  return e.prototype.isFinished = function() {
    return this._finished;
  }, e.prototype.setFinished = function() {
    this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished();
  }, e.prototype.needsAnimate = function() {
    return this.keyframes.length >= 1;
  }, e.prototype.getAdditiveTrack = function() {
    return this._additiveTrack;
  }, e.prototype.addKeyframe = function(t, r, i) {
    this._needsSort = !0;
    var n = this.keyframes, a = n.length, o = !1, s = Xf, u = r;
    if (Yt(r)) {
      var l = qy(r);
      s = l, (l === 1 && !dt(r[0]) || l === 2 && !dt(r[0][0])) && (o = !0);
    } else if (dt(r) && !Jv(r))
      s = ia;
    else if (z(r))
      if (!isNaN(+r))
        s = ia;
      else {
        var f = Wr(r);
        f && (u = f, s = hn);
      }
    else if (Eo(r)) {
      var h = O({}, u);
      h.colorStops = q(r.colorStops, function(v) {
        return {
          offset: v.offset,
          color: Wr(v.color)
        };
      }), Wy(r) ? s = Au : $y(r) && (s = Eu), u = h;
    }
    a === 0 ? this.valType = s : (s !== this.valType || s === Xf) && (o = !0), this.discrete = this.discrete || o;
    var c = {
      time: t,
      value: u,
      rawValue: r,
      percent: 0
    };
    return i && (c.easing = i, c.easingFunc = J(i) ? i : ld[i] || pd(i)), n.push(c), c;
  }, e.prototype.prepare = function(t, r) {
    var i = this.keyframes;
    this._needsSort && i.sort(function(_, p) {
      return _.time - p.time;
    });
    for (var n = this.valType, a = i.length, o = i[a - 1], s = this.discrete, u = na(n), l = qf(n), f = 0; f < a; f++) {
      var h = i[f], c = h.value, v = o.value;
      h.percent = h.time / t, s || (u && f !== a - 1 ? Xy(c, v, n) : l && Yy(c.colorStops, v.colorStops));
    }
    if (!s && n !== Eu && r && this.needsAnimate() && r.needsAnimate() && n === r.valType && !r._finished) {
      this._additiveTrack = r;
      for (var d = i[0].value, f = 0; f < a; f++)
        n === ia ? i[f].additiveValue = i[f].value - d : n === hn ? i[f].additiveValue = ra([], i[f].value, d, -1) : na(n) && (i[f].additiveValue = n === Va ? ra([], i[f].value, d, -1) : Yf([], i[f].value, d, -1));
    }
  }, e.prototype.step = function(t, r) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var i = this._additiveTrack != null, n = i ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, u = this.propName, l = a === hn, f, h = this._lastFr, c = Math.min, v, d;
      if (s === 1)
        v = d = o[0];
      else {
        if (r < 0)
          f = 0;
        else if (r < this._lastFrP) {
          var _ = c(h + 1, s - 1);
          for (f = _; f >= 0 && !(o[f].percent <= r); f--)
            ;
          f = c(f, s - 2);
        } else {
          for (f = h; f < s && !(o[f].percent > r); f++)
            ;
          f = c(f - 1, s - 2);
        }
        d = o[f + 1], v = o[f];
      }
      if (!!(v && d)) {
        this._lastFr = f, this._lastFrP = r;
        var p = d.percent - v.percent, g = p === 0 ? 1 : c((r - v.percent) / p, 1);
        d.easingFunc && (g = d.easingFunc(g));
        var y = i ? this._additiveValue : l ? $i : t[u];
        if ((na(a) || l) && !y && (y = this._additiveValue = []), this.discrete)
          t[u] = g < 1 ? v.rawValue : d.rawValue;
        else if (na(a))
          a === Va ? is(y, v[n], d[n], g) : Uy(y, v[n], d[n], g);
        else if (qf(a)) {
          var m = v[n], w = d[n], b = a === Au;
          t[u] = {
            type: b ? "linear" : "radial",
            x: We(m.x, w.x, g),
            y: We(m.y, w.y, g),
            colorStops: q(m.colorStops, function(T, x) {
              var C = w.colorStops[x];
              return {
                offset: We(T.offset, C.offset, g),
                color: Fa(is([], T.color, C.color, g))
              };
            }),
            global: w.global
          }, b ? (t[u].x2 = We(m.x2, w.x2, g), t[u].y2 = We(m.y2, w.y2, g)) : t[u].r = We(m.r, w.r, g);
        } else if (l)
          is(y, v[n], d[n], g), i || (t[u] = Fa(y));
        else {
          var S = We(v[n], d[n], g);
          i ? this._additiveValue = S : t[u] = S;
        }
        i && this._addToTarget(t);
      }
    }
  }, e.prototype._addToTarget = function(t) {
    var r = this.valType, i = this.propName, n = this._additiveValue;
    r === ia ? t[i] = t[i] + n : r === hn ? (Wr(t[i], $i), ra($i, $i, n, 1), t[i] = Fa($i)) : r === Va ? ra(t[i], t[i], n, 1) : r === yd && Yf(t[i], t[i], n, 1);
  }, e;
}(), Ky = function() {
  function e(t, r, i, n) {
    if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = r, r && n) {
      Gr("Can' use additive animation on looped animation.");
      return;
    }
    this._additiveAnimators = n, this._allowDiscrete = i;
  }
  return e.prototype.getMaxTime = function() {
    return this._maxTime;
  }, e.prototype.getDelay = function() {
    return this._delay;
  }, e.prototype.getLoop = function() {
    return this._loop;
  }, e.prototype.getTarget = function() {
    return this._target;
  }, e.prototype.changeTarget = function(t) {
    this._target = t;
  }, e.prototype.when = function(t, r, i) {
    return this.whenWithKeys(t, r, yt(r), i);
  }, e.prototype.whenWithKeys = function(t, r, i, n) {
    for (var a = this._tracks, o = 0; o < i.length; o++) {
      var s = i[o], u = a[s];
      if (!u) {
        u = a[s] = new Zy(s);
        var l = void 0, f = this._getAdditiveTrack(s);
        if (f) {
          var h = f.keyframes, c = h[h.length - 1];
          l = c && c.value, f.valType === hn && l && (l = Fa(l));
        } else
          l = this._target[s];
        if (l == null)
          continue;
        t > 0 && u.addKeyframe(0, za(l), n), this._trackKeys.push(s);
      }
      u.addKeyframe(t, za(r[s]), n);
    }
    return this._maxTime = Math.max(this._maxTime, t), this;
  }, e.prototype.pause = function() {
    this._clip.pause(), this._paused = !0;
  }, e.prototype.resume = function() {
    this._clip.resume(), this._paused = !1;
  }, e.prototype.isPaused = function() {
    return !!this._paused;
  }, e.prototype.duration = function(t) {
    return this._maxTime = t, this._force = !0, this;
  }, e.prototype._doneCallback = function() {
    this._setTracksFinished(), this._clip = null;
    var t = this._doneCbs;
    if (t)
      for (var r = t.length, i = 0; i < r; i++)
        t[i].call(this);
  }, e.prototype._abortedCallback = function() {
    this._setTracksFinished();
    var t = this.animation, r = this._abortedCbs;
    if (t && t.removeClip(this._clip), this._clip = null, r)
      for (var i = 0; i < r.length; i++)
        r[i].call(this);
  }, e.prototype._setTracksFinished = function() {
    for (var t = this._tracks, r = this._trackKeys, i = 0; i < r.length; i++)
      t[r[i]].setFinished();
  }, e.prototype._getAdditiveTrack = function(t) {
    var r, i = this._additiveAnimators;
    if (i)
      for (var n = 0; n < i.length; n++) {
        var a = i[n].getTrack(t);
        a && (r = a);
      }
    return r;
  }, e.prototype.start = function(t) {
    if (!(this._started > 0)) {
      this._started = 1;
      for (var r = this, i = [], n = this._maxTime || 0, a = 0; a < this._trackKeys.length; a++) {
        var o = this._trackKeys[a], s = this._tracks[o], u = this._getAdditiveTrack(o), l = s.keyframes, f = l.length;
        if (s.prepare(n, u), s.needsAnimate())
          if (!this._allowDiscrete && s.discrete) {
            var h = l[f - 1];
            h && (r._target[s.propName] = h.rawValue), s.setFinished();
          } else
            i.push(s);
      }
      if (i.length || this._force) {
        var c = new Vy({
          life: n,
          loop: this._loop,
          delay: this._delay || 0,
          onframe: function(v) {
            r._started = 2;
            var d = r._additiveAnimators;
            if (d) {
              for (var _ = !1, p = 0; p < d.length; p++)
                if (d[p]._clip) {
                  _ = !0;
                  break;
                }
              _ || (r._additiveAnimators = null);
            }
            for (var p = 0; p < i.length; p++)
              i[p].step(r._target, v);
            var g = r._onframeCbs;
            if (g)
              for (var p = 0; p < g.length; p++)
                g[p](r._target, v);
          },
          ondestroy: function() {
            r._doneCallback();
          }
        });
        this._clip = c, this.animation && this.animation.addClip(c), t && c.setEasing(t);
      } else
        this._doneCallback();
      return this;
    }
  }, e.prototype.stop = function(t) {
    if (!!this._clip) {
      var r = this._clip;
      t && r.onframe(1), this._abortedCallback();
    }
  }, e.prototype.delay = function(t) {
    return this._delay = t, this;
  }, e.prototype.during = function(t) {
    return t && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t)), this;
  }, e.prototype.done = function(t) {
    return t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)), this;
  }, e.prototype.aborted = function(t) {
    return t && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t)), this;
  }, e.prototype.getClip = function() {
    return this._clip;
  }, e.prototype.getTrack = function(t) {
    return this._tracks[t];
  }, e.prototype.getTracks = function() {
    var t = this;
    return q(this._trackKeys, function(r) {
      return t._tracks[r];
    });
  }, e.prototype.stopTracks = function(t, r) {
    if (!t.length || !this._clip)
      return !0;
    for (var i = this._tracks, n = this._trackKeys, a = 0; a < t.length; a++) {
      var o = i[t[a]];
      o && !o.isFinished() && (r ? o.step(this._target, 1) : this._started === 1 && o.step(this._target, 0), o.setFinished());
    }
    for (var s = !0, a = 0; a < n.length; a++)
      if (!i[n[a]].isFinished()) {
        s = !1;
        break;
      }
    return s && this._abortedCallback(), s;
  }, e.prototype.saveTo = function(t, r, i) {
    if (!!t) {
      r = r || this._trackKeys;
      for (var n = 0; n < r.length; n++) {
        var a = r[n], o = this._tracks[a];
        if (!(!o || o.isFinished())) {
          var s = o.keyframes, u = s[i ? 0 : s.length - 1];
          u && (t[a] = za(u.rawValue));
        }
      }
    }
  }, e.prototype.__changeFinalValue = function(t, r) {
    r = r || yt(t);
    for (var i = 0; i < r.length; i++) {
      var n = r[i], a = this._tracks[n];
      if (!!a) {
        var o = a.keyframes;
        if (o.length > 1) {
          var s = o.pop();
          a.addKeyframe(s.time, t[n]), a.prepare(this._maxTime, a.getAdditiveTrack());
        }
      }
    }
  }, e;
}();
const Cl = Ky;
function bi() {
  return new Date().getTime();
}
var Qy = function(e) {
  k(t, e);
  function t(r) {
    var i = e.call(this) || this;
    return i._running = !1, i._time = 0, i._pausedTime = 0, i._pauseStart = 0, i._paused = !1, r = r || {}, i.stage = r.stage || {}, i;
  }
  return t.prototype.addClip = function(r) {
    r.animation && this.removeClip(r), this._head ? (this._tail.next = r, r.prev = this._tail, r.next = null, this._tail = r) : this._head = this._tail = r, r.animation = this;
  }, t.prototype.addAnimator = function(r) {
    r.animation = this;
    var i = r.getClip();
    i && this.addClip(i);
  }, t.prototype.removeClip = function(r) {
    if (!!r.animation) {
      var i = r.prev, n = r.next;
      i ? i.next = n : this._head = n, n ? n.prev = i : this._tail = i, r.next = r.prev = r.animation = null;
    }
  }, t.prototype.removeAnimator = function(r) {
    var i = r.getClip();
    i && this.removeClip(i), r.animation = null;
  }, t.prototype.update = function(r) {
    for (var i = bi() - this._pausedTime, n = i - this._time, a = this._head; a; ) {
      var o = a.next, s = a.step(i, n);
      s && (a.ondestroy(), this.removeClip(a)), a = o;
    }
    this._time = i, r || (this.trigger("frame", n), this.stage.update && this.stage.update());
  }, t.prototype._startLoop = function() {
    var r = this;
    this._running = !0;
    function i() {
      r._running && (Tu(i), !r._paused && r.update());
    }
    Tu(i);
  }, t.prototype.start = function() {
    this._running || (this._time = bi(), this._pausedTime = 0, this._startLoop());
  }, t.prototype.stop = function() {
    this._running = !1;
  }, t.prototype.pause = function() {
    this._paused || (this._pauseStart = bi(), this._paused = !0);
  }, t.prototype.resume = function() {
    this._paused && (this._pausedTime += bi() - this._pauseStart, this._paused = !1);
  }, t.prototype.clear = function() {
    for (var r = this._head; r; ) {
      var i = r.next;
      r.prev = r.next = r.animation = null, r = i;
    }
    this._head = this._tail = null;
  }, t.prototype.isFinished = function() {
    return this._head == null;
  }, t.prototype.animate = function(r, i) {
    i = i || {}, this.start();
    var n = new Cl(r, i.loop);
    return this.addAnimator(n), n;
  }, t;
}(ze);
const Jy = Qy;
var jy = 300, ns = Z.domSupported, as = function() {
  var e = [
    "click",
    "dblclick",
    "mousewheel",
    "wheel",
    "mouseout",
    "mouseup",
    "mousedown",
    "mousemove",
    "contextmenu"
  ], t = [
    "touchstart",
    "touchend",
    "touchmove"
  ], r = {
    pointerdown: 1,
    pointerup: 1,
    pointermove: 1,
    pointerout: 1
  }, i = q(e, function(n) {
    var a = n.replace("mouse", "pointer");
    return r.hasOwnProperty(a) ? a : n;
  });
  return {
    mouse: e,
    touch: t,
    pointer: i
  };
}(), Zf = {
  mouse: ["mousemove", "mouseup"],
  pointer: ["pointermove", "pointerup"]
}, Kf = !1;
function Mu(e) {
  var t = e.pointerType;
  return t === "pen" || t === "touch";
}
function tm(e) {
  e.touching = !0, e.touchTimer != null && (clearTimeout(e.touchTimer), e.touchTimer = null), e.touchTimer = setTimeout(function() {
    e.touching = !1, e.touchTimer = null;
  }, 700);
}
function os(e) {
  e && (e.zrByTouch = !0);
}
function em(e, t) {
  return ae(e.dom, new rm(e, t), !0);
}
function md(e, t) {
  for (var r = t, i = !1; r && r.nodeType !== 9 && !(i = r.domBelongToZr || r !== t && r === e.painterRoot); )
    r = r.parentNode;
  return i;
}
var rm = function() {
  function e(t, r) {
    this.stopPropagation = Ut, this.stopImmediatePropagation = Ut, this.preventDefault = Ut, this.type = r.type, this.target = this.currentTarget = t.dom, this.pointerType = r.pointerType, this.clientX = r.clientX, this.clientY = r.clientY;
  }
  return e;
}(), pe = {
  mousedown: function(e) {
    e = ae(this.dom, e), this.__mayPointerCapture = [e.zrX, e.zrY], this.trigger("mousedown", e);
  },
  mousemove: function(e) {
    e = ae(this.dom, e);
    var t = this.__mayPointerCapture;
    t && (e.zrX !== t[0] || e.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", e);
  },
  mouseup: function(e) {
    e = ae(this.dom, e), this.__togglePointerCapture(!1), this.trigger("mouseup", e);
  },
  mouseout: function(e) {
    e = ae(this.dom, e);
    var t = e.toElement || e.relatedTarget;
    md(this, t) || (this.__pointerCapturing && (e.zrEventControl = "no_globalout"), this.trigger("mouseout", e));
  },
  wheel: function(e) {
    Kf = !0, e = ae(this.dom, e), this.trigger("mousewheel", e);
  },
  mousewheel: function(e) {
    Kf || (e = ae(this.dom, e), this.trigger("mousewheel", e));
  },
  touchstart: function(e) {
    e = ae(this.dom, e), os(e), this.__lastTouchMoment = new Date(), this.handler.processGesture(e, "start"), pe.mousemove.call(this, e), pe.mousedown.call(this, e);
  },
  touchmove: function(e) {
    e = ae(this.dom, e), os(e), this.handler.processGesture(e, "change"), pe.mousemove.call(this, e);
  },
  touchend: function(e) {
    e = ae(this.dom, e), os(e), this.handler.processGesture(e, "end"), pe.mouseup.call(this, e), +new Date() - +this.__lastTouchMoment < jy && pe.click.call(this, e);
  },
  pointerdown: function(e) {
    pe.mousedown.call(this, e);
  },
  pointermove: function(e) {
    Mu(e) || pe.mousemove.call(this, e);
  },
  pointerup: function(e) {
    pe.mouseup.call(this, e);
  },
  pointerout: function(e) {
    Mu(e) || pe.mouseout.call(this, e);
  }
};
A(["click", "dblclick", "contextmenu"], function(e) {
  pe[e] = function(t) {
    t = ae(this.dom, t), this.trigger(e, t);
  };
});
var Pu = {
  pointermove: function(e) {
    Mu(e) || Pu.mousemove.call(this, e);
  },
  pointerup: function(e) {
    Pu.mouseup.call(this, e);
  },
  mousemove: function(e) {
    this.trigger("mousemove", e);
  },
  mouseup: function(e) {
    var t = this.__pointerCapturing;
    this.__togglePointerCapture(!1), this.trigger("mouseup", e), t && (e.zrEventControl = "only_globalout", this.trigger("mouseout", e));
  }
};
function im(e, t) {
  var r = t.domHandlers;
  Z.pointerEventsSupported ? A(as.pointer, function(i) {
    Ha(t, i, function(n) {
      r[i].call(e, n);
    });
  }) : (Z.touchEventsSupported && A(as.touch, function(i) {
    Ha(t, i, function(n) {
      r[i].call(e, n), tm(t);
    });
  }), A(as.mouse, function(i) {
    Ha(t, i, function(n) {
      n = xl(n), t.touching || r[i].call(e, n);
    });
  }));
}
function nm(e, t) {
  Z.pointerEventsSupported ? A(Zf.pointer, r) : Z.touchEventsSupported || A(Zf.mouse, r);
  function r(i) {
    function n(a) {
      a = xl(a), md(e, a.target) || (a = em(e, a), t.domHandlers[i].call(e, a));
    }
    Ha(t, i, n, { capture: !0 });
  }
}
function Ha(e, t, r, i) {
  e.mounted[t] = r, e.listenerOpts[t] = i, yy(e.domTarget, t, r, i);
}
function ss(e) {
  var t = e.mounted;
  for (var r in t)
    t.hasOwnProperty(r) && my(e.domTarget, r, t[r], e.listenerOpts[r]);
  e.mounted = {};
}
var Qf = function() {
  function e(t, r) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = r;
  }
  return e;
}(), am = function(e) {
  k(t, e);
  function t(r, i) {
    var n = e.call(this) || this;
    return n.__pointerCapturing = !1, n.dom = r, n.painterRoot = i, n._localHandlerScope = new Qf(r, pe), ns && (n._globalHandlerScope = new Qf(document, Pu)), im(n, n._localHandlerScope), n;
  }
  return t.prototype.dispose = function() {
    ss(this._localHandlerScope), ns && ss(this._globalHandlerScope);
  }, t.prototype.setCursor = function(r) {
    this.dom.style && (this.dom.style.cursor = r || "default");
  }, t.prototype.__togglePointerCapture = function(r) {
    if (this.__mayPointerCapture = null, ns && +this.__pointerCapturing ^ +r) {
      this.__pointerCapturing = r;
      var i = this._globalHandlerScope;
      r ? nm(this, i) : ss(i);
    }
  }, t;
}(ze);
const om = am;
var wd = 1;
Z.hasGlobalWindow && (wd = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var ro = wd, Lu = 0.4, Iu = "#333", Ru = "#ccc", sm = "#eee";
function Ln() {
  return [1, 0, 0, 1, 0, 0];
}
function Dl(e) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e;
}
function um(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e;
}
function Di(e, t, r) {
  var i = t[0] * r[0] + t[2] * r[1], n = t[1] * r[0] + t[3] * r[1], a = t[0] * r[2] + t[2] * r[3], o = t[1] * r[2] + t[3] * r[3], s = t[0] * r[4] + t[2] * r[5] + t[4], u = t[1] * r[4] + t[3] * r[5] + t[5];
  return e[0] = i, e[1] = n, e[2] = a, e[3] = o, e[4] = s, e[5] = u, e;
}
function Ou(e, t, r) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4] + r[0], e[5] = t[5] + r[1], e;
}
function Al(e, t, r) {
  var i = t[0], n = t[2], a = t[4], o = t[1], s = t[3], u = t[5], l = Math.sin(r), f = Math.cos(r);
  return e[0] = i * f + o * l, e[1] = -i * l + o * f, e[2] = n * f + s * l, e[3] = -n * l + f * s, e[4] = f * a + l * u, e[5] = f * u - l * a, e;
}
function lm(e, t, r) {
  var i = r[0], n = r[1];
  return e[0] = t[0] * i, e[1] = t[1] * n, e[2] = t[2] * i, e[3] = t[3] * n, e[4] = t[4] * i, e[5] = t[5] * n, e;
}
function Sd(e, t) {
  var r = t[0], i = t[2], n = t[4], a = t[1], o = t[3], s = t[5], u = r * o - a * i;
  return u ? (u = 1 / u, e[0] = o * u, e[1] = -a * u, e[2] = -i * u, e[3] = r * u, e[4] = (i * s - o * n) * u, e[5] = (a * n - r * s) * u, e) : null;
}
var Jf = Dl, jf = 5e-5;
function dr(e) {
  return e > jf || e < -jf;
}
var pr = [], ai = [], us = Ln(), ls = Math.abs, El = function() {
  function e() {
  }
  return e.prototype.getLocalTransform = function(t) {
    return e.getLocalTransform(this, t);
  }, e.prototype.setPosition = function(t) {
    this.x = t[0], this.y = t[1];
  }, e.prototype.setScale = function(t) {
    this.scaleX = t[0], this.scaleY = t[1];
  }, e.prototype.setSkew = function(t) {
    this.skewX = t[0], this.skewY = t[1];
  }, e.prototype.setOrigin = function(t) {
    this.originX = t[0], this.originY = t[1];
  }, e.prototype.needLocalTransform = function() {
    return dr(this.rotation) || dr(this.x) || dr(this.y) || dr(this.scaleX - 1) || dr(this.scaleY - 1) || dr(this.skewX) || dr(this.skewY);
  }, e.prototype.updateTransform = function() {
    var t = this.parent && this.parent.transform, r = this.needLocalTransform(), i = this.transform;
    if (!(r || t)) {
      i && Jf(i);
      return;
    }
    i = i || Ln(), r ? this.getLocalTransform(i) : Jf(i), t && (r ? Di(i, t, i) : um(i, t)), this.transform = i, this._resolveGlobalScaleRatio(i);
  }, e.prototype._resolveGlobalScaleRatio = function(t) {
    var r = this.globalScaleRatio;
    if (r != null && r !== 1) {
      this.getGlobalScale(pr);
      var i = pr[0] < 0 ? -1 : 1, n = pr[1] < 0 ? -1 : 1, a = ((pr[0] - i) * r + i) / pr[0] || 0, o = ((pr[1] - n) * r + n) / pr[1] || 0;
      t[0] *= a, t[1] *= a, t[2] *= o, t[3] *= o;
    }
    this.invTransform = this.invTransform || Ln(), Sd(this.invTransform, t);
  }, e.prototype.getComputedTransform = function() {
    for (var t = this, r = []; t; )
      r.push(t), t = t.parent;
    for (; t = r.pop(); )
      t.updateTransform();
    return this.transform;
  }, e.prototype.setLocalTransform = function(t) {
    if (!!t) {
      var r = t[0] * t[0] + t[1] * t[1], i = t[2] * t[2] + t[3] * t[3], n = Math.atan2(t[1], t[0]), a = Math.PI / 2 + n - Math.atan2(t[3], t[2]);
      i = Math.sqrt(i) * Math.cos(a), r = Math.sqrt(r), this.skewX = a, this.skewY = 0, this.rotation = -n, this.x = +t[4], this.y = +t[5], this.scaleX = r, this.scaleY = i, this.originX = 0, this.originY = 0;
    }
  }, e.prototype.decomposeTransform = function() {
    if (!!this.transform) {
      var t = this.parent, r = this.transform;
      t && t.transform && (Di(ai, t.invTransform, r), r = ai);
      var i = this.originX, n = this.originY;
      (i || n) && (us[4] = i, us[5] = n, Di(ai, r, us), ai[4] -= i, ai[5] -= n, r = ai), this.setLocalTransform(r);
    }
  }, e.prototype.getGlobalScale = function(t) {
    var r = this.transform;
    return t = t || [], r ? (t[0] = Math.sqrt(r[0] * r[0] + r[1] * r[1]), t[1] = Math.sqrt(r[2] * r[2] + r[3] * r[3]), r[0] < 0 && (t[0] = -t[0]), r[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
  }, e.prototype.transformCoordToLocal = function(t, r) {
    var i = [t, r], n = this.invTransform;
    return n && Re(i, i, n), i;
  }, e.prototype.transformCoordToGlobal = function(t, r) {
    var i = [t, r], n = this.transform;
    return n && Re(i, i, n), i;
  }, e.prototype.getLineScale = function() {
    var t = this.transform;
    return t && ls(t[0] - 1) > 1e-10 && ls(t[3] - 1) > 1e-10 ? Math.sqrt(ls(t[0] * t[3] - t[2] * t[1])) : 1;
  }, e.prototype.copyTransform = function(t) {
    fm(this, t);
  }, e.getLocalTransform = function(t, r) {
    r = r || [];
    var i = t.originX || 0, n = t.originY || 0, a = t.scaleX, o = t.scaleY, s = t.anchorX, u = t.anchorY, l = t.rotation || 0, f = t.x, h = t.y, c = t.skewX ? Math.tan(t.skewX) : 0, v = t.skewY ? Math.tan(-t.skewY) : 0;
    if (i || n || s || u) {
      var d = i + s, _ = n + u;
      r[4] = -d * a - c * _ * o, r[5] = -_ * o - v * d * a;
    } else
      r[4] = r[5] = 0;
    return r[0] = a, r[3] = o, r[1] = v * a, r[2] = c * o, l && Al(r, r, l), r[4] += i + f, r[5] += n + h, r;
  }, e.initDefaultProps = function() {
    var t = e.prototype;
    t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
  }(), e;
}(), In = [
  "x",
  "y",
  "originX",
  "originY",
  "anchorX",
  "anchorY",
  "rotation",
  "scaleX",
  "scaleY",
  "skewX",
  "skewY"
];
function fm(e, t) {
  for (var r = 0; r < In.length; r++) {
    var i = In[r];
    e[i] = t[i];
  }
}
var hm = function() {
  function e(t, r) {
    this.x = t || 0, this.y = r || 0;
  }
  return e.prototype.copy = function(t) {
    return this.x = t.x, this.y = t.y, this;
  }, e.prototype.clone = function() {
    return new e(this.x, this.y);
  }, e.prototype.set = function(t, r) {
    return this.x = t, this.y = r, this;
  }, e.prototype.equal = function(t) {
    return t.x === this.x && t.y === this.y;
  }, e.prototype.add = function(t) {
    return this.x += t.x, this.y += t.y, this;
  }, e.prototype.scale = function(t) {
    this.x *= t, this.y *= t;
  }, e.prototype.scaleAndAdd = function(t, r) {
    this.x += t.x * r, this.y += t.y * r;
  }, e.prototype.sub = function(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }, e.prototype.dot = function(t) {
    return this.x * t.x + this.y * t.y;
  }, e.prototype.len = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }, e.prototype.lenSquare = function() {
    return this.x * this.x + this.y * this.y;
  }, e.prototype.normalize = function() {
    var t = this.len();
    return this.x /= t, this.y /= t, this;
  }, e.prototype.distance = function(t) {
    var r = this.x - t.x, i = this.y - t.y;
    return Math.sqrt(r * r + i * i);
  }, e.prototype.distanceSquare = function(t) {
    var r = this.x - t.x, i = this.y - t.y;
    return r * r + i * i;
  }, e.prototype.negate = function() {
    return this.x = -this.x, this.y = -this.y, this;
  }, e.prototype.transform = function(t) {
    if (!!t) {
      var r = this.x, i = this.y;
      return this.x = t[0] * r + t[2] * i + t[4], this.y = t[1] * r + t[3] * i + t[5], this;
    }
  }, e.prototype.toArray = function(t) {
    return t[0] = this.x, t[1] = this.y, t;
  }, e.prototype.fromArray = function(t) {
    this.x = t[0], this.y = t[1];
  }, e.set = function(t, r, i) {
    t.x = r, t.y = i;
  }, e.copy = function(t, r) {
    t.x = r.x, t.y = r.y;
  }, e.len = function(t) {
    return Math.sqrt(t.x * t.x + t.y * t.y);
  }, e.lenSquare = function(t) {
    return t.x * t.x + t.y * t.y;
  }, e.dot = function(t, r) {
    return t.x * r.x + t.y * r.y;
  }, e.add = function(t, r, i) {
    t.x = r.x + i.x, t.y = r.y + i.y;
  }, e.sub = function(t, r, i) {
    t.x = r.x - i.x, t.y = r.y - i.y;
  }, e.scale = function(t, r, i) {
    t.x = r.x * i, t.y = r.y * i;
  }, e.scaleAndAdd = function(t, r, i, n) {
    t.x = r.x + i.x * n, t.y = r.y + i.y * n;
  }, e.lerp = function(t, r, i, n) {
    var a = 1 - n;
    t.x = a * r.x + n * i.x, t.y = a * r.y + n * i.y;
  }, e;
}();
const G = hm;
var aa = Math.min, oa = Math.max, gr = new G(), _r = new G(), yr = new G(), mr = new G(), Ui = new G(), Yi = new G(), cm = function() {
  function e(t, r, i, n) {
    i < 0 && (t = t + i, i = -i), n < 0 && (r = r + n, n = -n), this.x = t, this.y = r, this.width = i, this.height = n;
  }
  return e.prototype.union = function(t) {
    var r = aa(t.x, this.x), i = aa(t.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = oa(t.x + t.width, this.x + this.width) - r : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = oa(t.y + t.height, this.y + this.height) - i : this.height = t.height, this.x = r, this.y = i;
  }, e.prototype.applyTransform = function(t) {
    e.applyTransform(this, this, t);
  }, e.prototype.calculateTransform = function(t) {
    var r = this, i = t.width / r.width, n = t.height / r.height, a = Ln();
    return Ou(a, a, [-r.x, -r.y]), lm(a, a, [i, n]), Ou(a, a, [t.x, t.y]), a;
  }, e.prototype.intersect = function(t, r) {
    if (!t)
      return !1;
    t instanceof e || (t = e.create(t));
    var i = this, n = i.x, a = i.x + i.width, o = i.y, s = i.y + i.height, u = t.x, l = t.x + t.width, f = t.y, h = t.y + t.height, c = !(a < u || l < n || s < f || h < o);
    if (r) {
      var v = 1 / 0, d = 0, _ = Math.abs(a - u), p = Math.abs(l - n), g = Math.abs(s - f), y = Math.abs(h - o), m = Math.min(_, p), w = Math.min(g, y);
      a < u || l < n ? m > d && (d = m, _ < p ? G.set(Yi, -_, 0) : G.set(Yi, p, 0)) : m < v && (v = m, _ < p ? G.set(Ui, _, 0) : G.set(Ui, -p, 0)), s < f || h < o ? w > d && (d = w, g < y ? G.set(Yi, 0, -g) : G.set(Yi, 0, y)) : m < v && (v = m, g < y ? G.set(Ui, 0, g) : G.set(Ui, 0, -y));
    }
    return r && G.copy(r, c ? Ui : Yi), c;
  }, e.prototype.contain = function(t, r) {
    var i = this;
    return t >= i.x && t <= i.x + i.width && r >= i.y && r <= i.y + i.height;
  }, e.prototype.clone = function() {
    return new e(this.x, this.y, this.width, this.height);
  }, e.prototype.copy = function(t) {
    e.copy(this, t);
  }, e.prototype.plain = function() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }, e.prototype.isFinite = function() {
    return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
  }, e.prototype.isZero = function() {
    return this.width === 0 || this.height === 0;
  }, e.create = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e.copy = function(t, r) {
    t.x = r.x, t.y = r.y, t.width = r.width, t.height = r.height;
  }, e.applyTransform = function(t, r, i) {
    if (!i) {
      t !== r && e.copy(t, r);
      return;
    }
    if (i[1] < 1e-5 && i[1] > -1e-5 && i[2] < 1e-5 && i[2] > -1e-5) {
      var n = i[0], a = i[3], o = i[4], s = i[5];
      t.x = r.x * n + o, t.y = r.y * a + s, t.width = r.width * n, t.height = r.height * a, t.width < 0 && (t.x += t.width, t.width = -t.width), t.height < 0 && (t.y += t.height, t.height = -t.height);
      return;
    }
    gr.x = yr.x = r.x, gr.y = mr.y = r.y, _r.x = mr.x = r.x + r.width, _r.y = yr.y = r.y + r.height, gr.transform(i), mr.transform(i), _r.transform(i), yr.transform(i), t.x = aa(gr.x, _r.x, yr.x, mr.x), t.y = aa(gr.y, _r.y, yr.y, mr.y);
    var u = oa(gr.x, _r.x, yr.x, mr.x), l = oa(gr.y, _r.y, yr.y, mr.y);
    t.width = u - t.x, t.height = l - t.y;
  }, e;
}();
const st = cm;
var th = {};
function jt(e, t) {
  t = t || qr;
  var r = th[t];
  r || (r = th[t] = new $n(500));
  var i = r.get(e);
  return i == null && (i = Ri.measureText(e, t).width, r.put(e, i)), i;
}
function eh(e, t, r, i) {
  var n = jt(e, t), a = Ml(t), o = cn(0, n, r), s = mi(0, a, i), u = new st(o, s, n, a);
  return u;
}
function bd(e, t, r, i) {
  var n = ((e || "") + "").split(`
`), a = n.length;
  if (a === 1)
    return eh(n[0], t, r, i);
  for (var o = new st(0, 0, 0, 0), s = 0; s < n.length; s++) {
    var u = eh(n[s], t, r, i);
    s === 0 ? o.copy(u) : o.union(u);
  }
  return o;
}
function cn(e, t, r) {
  return r === "right" ? e -= t : r === "center" && (e -= t / 2), e;
}
function mi(e, t, r) {
  return r === "middle" ? e -= t / 2 : r === "bottom" && (e -= t), e;
}
function Ml(e) {
  return jt("\u56FD", e);
}
function Ei(e, t) {
  return typeof e == "string" ? e.lastIndexOf("%") >= 0 ? parseFloat(e) / 100 * t : parseFloat(e) : e;
}
function io(e, t, r) {
  var i = t.position || "inside", n = t.distance != null ? t.distance : 5, a = r.height, o = r.width, s = a / 2, u = r.x, l = r.y, f = "left", h = "top";
  if (i instanceof Array)
    u += Ei(i[0], r.width), l += Ei(i[1], r.height), f = null, h = null;
  else
    switch (i) {
      case "left":
        u -= n, l += s, f = "right", h = "middle";
        break;
      case "right":
        u += n + o, l += s, h = "middle";
        break;
      case "top":
        u += o / 2, l -= n, f = "center", h = "bottom";
        break;
      case "bottom":
        u += o / 2, l += a + n, f = "center";
        break;
      case "inside":
        u += o / 2, l += s, f = "center", h = "middle";
        break;
      case "insideLeft":
        u += n, l += s, h = "middle";
        break;
      case "insideRight":
        u += o - n, l += s, f = "right", h = "middle";
        break;
      case "insideTop":
        u += o / 2, l += n, f = "center";
        break;
      case "insideBottom":
        u += o / 2, l += a - n, f = "center", h = "bottom";
        break;
      case "insideTopLeft":
        u += n, l += n;
        break;
      case "insideTopRight":
        u += o - n, l += n, f = "right";
        break;
      case "insideBottomLeft":
        u += n, l += a - n, h = "bottom";
        break;
      case "insideBottomRight":
        u += o - n, l += a - n, f = "right", h = "bottom";
        break;
    }
  return e = e || {}, e.x = u, e.y = l, e.align = f, e.verticalAlign = h, e;
}
var fs = "__zr_normal__", hs = In.concat(["ignore"]), vm = fr(In, function(e, t) {
  return e[t] = !0, e;
}, { ignore: !1 }), oi = {}, dm = new st(0, 0, 0, 0), Pl = function() {
  function e(t) {
    this.id = Qv(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t);
  }
  return e.prototype._init = function(t) {
    this.attr(t);
  }, e.prototype.drift = function(t, r, i) {
    switch (this.draggable) {
      case "horizontal":
        r = 0;
        break;
      case "vertical":
        t = 0;
        break;
    }
    var n = this.transform;
    n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += r, this.decomposeTransform(), this.markRedraw();
  }, e.prototype.beforeUpdate = function() {
  }, e.prototype.afterUpdate = function() {
  }, e.prototype.update = function() {
    this.updateTransform(), this.__dirty && this.updateInnerText();
  }, e.prototype.updateInnerText = function(t) {
    var r = this._textContent;
    if (r && (!r.ignore || t)) {
      this.textConfig || (this.textConfig = {});
      var i = this.textConfig, n = i.local, a = r.innerTransformable, o = void 0, s = void 0, u = !1;
      a.parent = n ? this : null;
      var l = !1;
      if (a.copyTransform(r), i.position != null) {
        var f = dm;
        i.layoutRect ? f.copy(i.layoutRect) : f.copy(this.getBoundingRect()), n || f.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(oi, i, f) : io(oi, i, f), a.x = oi.x, a.y = oi.y, o = oi.align, s = oi.verticalAlign;
        var h = i.origin;
        if (h && i.rotation != null) {
          var c = void 0, v = void 0;
          h === "center" ? (c = f.width * 0.5, v = f.height * 0.5) : (c = Ei(h[0], f.width), v = Ei(h[1], f.height)), l = !0, a.originX = -a.x + c + (n ? 0 : f.x), a.originY = -a.y + v + (n ? 0 : f.y);
        }
      }
      i.rotation != null && (a.rotation = i.rotation);
      var d = i.offset;
      d && (a.x += d[0], a.y += d[1], l || (a.originX = -d[0], a.originY = -d[1]));
      var _ = i.inside == null ? typeof i.position == "string" && i.position.indexOf("inside") >= 0 : i.inside, p = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}), g = void 0, y = void 0, m = void 0;
      _ && this.canBeInsideText() ? (g = i.insideFill, y = i.insideStroke, (g == null || g === "auto") && (g = this.getInsideTextFill()), (y == null || y === "auto") && (y = this.getInsideTextStroke(g), m = !0)) : (g = i.outsideFill, y = i.outsideStroke, (g == null || g === "auto") && (g = this.getOutsideFill()), (y == null || y === "auto") && (y = this.getOutsideStroke(g), m = !0)), g = g || "#000", (g !== p.fill || y !== p.stroke || m !== p.autoStroke || o !== p.align || s !== p.verticalAlign) && (u = !0, p.fill = g, p.stroke = y, p.autoStroke = m, p.align = o, p.verticalAlign = s, r.setDefaultTextStyle(p)), r.__dirty |= Jt, u && r.dirtyStyle(!0);
    }
  }, e.prototype.canBeInsideText = function() {
    return !0;
  }, e.prototype.getInsideTextFill = function() {
    return "#fff";
  }, e.prototype.getInsideTextStroke = function(t) {
    return "#000";
  }, e.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? Ru : Iu;
  }, e.prototype.getOutsideStroke = function(t) {
    var r = this.__zr && this.__zr.getBackgroundColor(), i = typeof r == "string" && Wr(r);
    i || (i = [255, 255, 255, 1]);
    for (var n = i[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
      i[o] = i[o] * n + (a ? 0 : 255) * (1 - n);
    return i[3] = 1, Tl(i, "rgba");
  }, e.prototype.traverse = function(t, r) {
  }, e.prototype.attrKV = function(t, r) {
    t === "textConfig" ? this.setTextConfig(r) : t === "textContent" ? this.setTextContent(r) : t === "clipPath" ? this.setClipPath(r) : t === "extra" ? (this.extra = this.extra || {}, O(this.extra, r)) : this[t] = r;
  }, e.prototype.hide = function() {
    this.ignore = !0, this.markRedraw();
  }, e.prototype.show = function() {
    this.ignore = !1, this.markRedraw();
  }, e.prototype.attr = function(t, r) {
    if (typeof t == "string")
      this.attrKV(t, r);
    else if (F(t))
      for (var i = t, n = yt(i), a = 0; a < n.length; a++) {
        var o = n[a];
        this.attrKV(o, t[o]);
      }
    return this.markRedraw(), this;
  }, e.prototype.saveCurrentToNormalState = function(t) {
    this._innerSaveToNormal(t);
    for (var r = this._normalState, i = 0; i < this.animators.length; i++) {
      var n = this.animators[i], a = n.__fromStateTransition;
      if (!(n.getLoop() || a && a !== fs)) {
        var o = n.targetName, s = o ? r[o] : r;
        n.saveTo(s);
      }
    }
  }, e.prototype._innerSaveToNormal = function(t) {
    var r = this._normalState;
    r || (r = this._normalState = {}), t.textConfig && !r.textConfig && (r.textConfig = this.textConfig), this._savePrimaryToNormal(t, r, hs);
  }, e.prototype._savePrimaryToNormal = function(t, r, i) {
    for (var n = 0; n < i.length; n++) {
      var a = i[n];
      t[a] != null && !(a in r) && (r[a] = this[a]);
    }
  }, e.prototype.hasState = function() {
    return this.currentStates.length > 0;
  }, e.prototype.getState = function(t) {
    return this.states[t];
  }, e.prototype.ensureState = function(t) {
    var r = this.states;
    return r[t] || (r[t] = {}), r[t];
  }, e.prototype.clearStates = function(t) {
    this.useState(fs, !1, t);
  }, e.prototype.useState = function(t, r, i, n) {
    var a = t === fs, o = this.hasState();
    if (!(!o && a)) {
      var s = this.currentStates, u = this.stateTransition;
      if (!(nt(s, t) >= 0 && (r || s.length === 1))) {
        var l;
        if (this.stateProxy && !a && (l = this.stateProxy(t)), l || (l = this.states && this.states[t]), !l && !a) {
          Gr("State " + t + " not exists.");
          return;
        }
        a || this.saveCurrentToNormalState(l);
        var f = !!(l && l.hoverLayer || n);
        f && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, l, this._normalState, r, !i && !this.__inHover && u && u.duration > 0, u);
        var h = this._textContent, c = this._textGuide;
        return h && h.useState(t, r, i, f), c && c.useState(t, r, i, f), a ? (this.currentStates = [], this._normalState = {}) : r ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !f && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~Jt), l;
      }
    }
  }, e.prototype.useStates = function(t, r, i) {
    if (!t.length)
      this.clearStates();
    else {
      var n = [], a = this.currentStates, o = t.length, s = o === a.length;
      if (s) {
        for (var u = 0; u < o; u++)
          if (t[u] !== a[u]) {
            s = !1;
            break;
          }
      }
      if (s)
        return;
      for (var u = 0; u < o; u++) {
        var l = t[u], f = void 0;
        this.stateProxy && (f = this.stateProxy(l, t)), f || (f = this.states[l]), f && n.push(f);
      }
      var h = n[o - 1], c = !!(h && h.hoverLayer || i);
      c && this._toggleHoverLayerFlag(!0);
      var v = this._mergeStates(n), d = this.stateTransition;
      this.saveCurrentToNormalState(v), this._applyStateObj(t.join(","), v, this._normalState, !1, !r && !this.__inHover && d && d.duration > 0, d);
      var _ = this._textContent, p = this._textGuide;
      _ && _.useStates(t, r, c), p && p.useStates(t, r, c), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !c && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~Jt);
    }
  }, e.prototype._updateAnimationTargets = function() {
    for (var t = 0; t < this.animators.length; t++) {
      var r = this.animators[t];
      r.targetName && r.changeTarget(this[r.targetName]);
    }
  }, e.prototype.removeState = function(t) {
    var r = nt(this.currentStates, t);
    if (r >= 0) {
      var i = this.currentStates.slice();
      i.splice(r, 1), this.useStates(i);
    }
  }, e.prototype.replaceState = function(t, r, i) {
    var n = this.currentStates.slice(), a = nt(n, t), o = nt(n, r) >= 0;
    a >= 0 ? o ? n.splice(a, 1) : n[a] = r : i && !o && n.push(r), this.useStates(n);
  }, e.prototype.toggleState = function(t, r) {
    r ? this.useState(t, !0) : this.removeState(t);
  }, e.prototype._mergeStates = function(t) {
    for (var r = {}, i, n = 0; n < t.length; n++) {
      var a = t[n];
      O(r, a), a.textConfig && (i = i || {}, O(i, a.textConfig));
    }
    return i && (r.textConfig = i), r;
  }, e.prototype._applyStateObj = function(t, r, i, n, a, o) {
    var s = !(r && n);
    r && r.textConfig ? (this.textConfig = O({}, n ? this.textConfig : i.textConfig), O(this.textConfig, r.textConfig)) : s && i.textConfig && (this.textConfig = i.textConfig);
    for (var u = {}, l = !1, f = 0; f < hs.length; f++) {
      var h = hs[f], c = a && vm[h];
      r && r[h] != null ? c ? (l = !0, u[h] = r[h]) : this[h] = r[h] : s && i[h] != null && (c ? (l = !0, u[h] = i[h]) : this[h] = i[h]);
    }
    if (!a)
      for (var f = 0; f < this.animators.length; f++) {
        var v = this.animators[f], d = v.targetName;
        v.getLoop() || v.__changeFinalValue(d ? (r || i)[d] : r || i);
      }
    l && this._transitionState(t, u, o);
  }, e.prototype._attachComponent = function(t) {
    if (t.__zr && !t.__hostTarget) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Text element has been added to zrender.");
      return;
    }
    if (t === this) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Recursive component attachment.");
      return;
    }
    var r = this.__zr;
    r && t.addSelfToZr(r), t.__zr = r, t.__hostTarget = this;
  }, e.prototype._detachComponent = function(t) {
    t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null;
  }, e.prototype.getClipPath = function() {
    return this._clipPath;
  }, e.prototype.setClipPath = function(t) {
    this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), this._clipPath = t, this.markRedraw();
  }, e.prototype.removeClipPath = function() {
    var t = this._clipPath;
    t && (this._detachComponent(t), this._clipPath = null, this.markRedraw());
  }, e.prototype.getTextContent = function() {
    return this._textContent;
  }, e.prototype.setTextContent = function(t) {
    var r = this._textContent;
    if (r !== t) {
      if (r && r !== t && this.removeTextContent(), process.env.NODE_ENV !== "production" && t.__zr && !t.__hostTarget)
        throw new Error("Text element has been added to zrender.");
      t.innerTransformable = new El(), this._attachComponent(t), this._textContent = t, this.markRedraw();
    }
  }, e.prototype.setTextConfig = function(t) {
    this.textConfig || (this.textConfig = {}), O(this.textConfig, t), this.markRedraw();
  }, e.prototype.removeTextConfig = function() {
    this.textConfig = null, this.markRedraw();
  }, e.prototype.removeTextContent = function() {
    var t = this._textContent;
    t && (t.innerTransformable = null, this._detachComponent(t), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw());
  }, e.prototype.getTextGuideLine = function() {
    return this._textGuide;
  }, e.prototype.setTextGuideLine = function(t) {
    this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), this._textGuide = t, this.markRedraw();
  }, e.prototype.removeTextGuideLine = function() {
    var t = this._textGuide;
    t && (this._detachComponent(t), this._textGuide = null, this.markRedraw());
  }, e.prototype.markRedraw = function() {
    this.__dirty |= Jt;
    var t = this.__zr;
    t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
  }, e.prototype.dirty = function() {
    this.markRedraw();
  }, e.prototype._toggleHoverLayerFlag = function(t) {
    this.__inHover = t;
    var r = this._textContent, i = this._textGuide;
    r && (r.__inHover = t), i && (i.__inHover = t);
  }, e.prototype.addSelfToZr = function(t) {
    if (this.__zr !== t) {
      this.__zr = t;
      var r = this.animators;
      if (r)
        for (var i = 0; i < r.length; i++)
          t.animation.addAnimator(r[i]);
      this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), this._textGuide && this._textGuide.addSelfToZr(t);
    }
  }, e.prototype.removeSelfFromZr = function(t) {
    if (!!this.__zr) {
      this.__zr = null;
      var r = this.animators;
      if (r)
        for (var i = 0; i < r.length; i++)
          t.animation.removeAnimator(r[i]);
      this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), this._textGuide && this._textGuide.removeSelfFromZr(t);
    }
  }, e.prototype.animate = function(t, r, i) {
    var n = t ? this[t] : this;
    if (process.env.NODE_ENV !== "production" && !n) {
      Gr('Property "' + t + '" is not existed in element ' + this.id);
      return;
    }
    var a = new Cl(n, r, i);
    return t && (a.targetName = t), this.addAnimator(a, t), a;
  }, e.prototype.addAnimator = function(t, r) {
    var i = this.__zr, n = this;
    t.during(function() {
      n.updateDuringAnimation(r);
    }).done(function() {
      var a = n.animators, o = nt(a, t);
      o >= 0 && a.splice(o, 1);
    }), this.animators.push(t), i && i.animation.addAnimator(t), i && i.wakeUp();
  }, e.prototype.updateDuringAnimation = function(t) {
    this.markRedraw();
  }, e.prototype.stopAnimation = function(t, r) {
    for (var i = this.animators, n = i.length, a = [], o = 0; o < n; o++) {
      var s = i[o];
      !t || t === s.scope ? s.stop(r) : a.push(s);
    }
    return this.animators = a, this;
  }, e.prototype.animateTo = function(t, r, i) {
    cs(this, t, r, i);
  }, e.prototype.animateFrom = function(t, r, i) {
    cs(this, t, r, i, !0);
  }, e.prototype._transitionState = function(t, r, i, n) {
    for (var a = cs(this, r, i, n), o = 0; o < a.length; o++)
      a[o].__fromStateTransition = t;
  }, e.prototype.getBoundingRect = function() {
    return null;
  }, e.prototype.getPaintRect = function() {
    return null;
  }, e.initDefaultProps = function() {
    var t = e.prototype;
    t.type = "element", t.name = "", t.ignore = t.silent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = t.__inHover = !1, t.__dirty = Jt;
    var r = {};
    function i(a, o, s) {
      r[a + o + s] || (console.warn("DEPRECATED: '" + a + "' has been deprecated. use '" + o + "', '" + s + "' instead"), r[a + o + s] = !0);
    }
    function n(a, o, s, u) {
      Object.defineProperty(t, a, {
        get: function() {
          if (process.env.NODE_ENV !== "production" && i(a, s, u), !this[o]) {
            var f = this[o] = [];
            l(this, f);
          }
          return this[o];
        },
        set: function(f) {
          process.env.NODE_ENV !== "production" && i(a, s, u), this[s] = f[0], this[u] = f[1], this[o] = f, l(this, f);
        }
      });
      function l(f, h) {
        Object.defineProperty(h, 0, {
          get: function() {
            return f[s];
          },
          set: function(c) {
            f[s] = c;
          }
        }), Object.defineProperty(h, 1, {
          get: function() {
            return f[u];
          },
          set: function(c) {
            f[u] = c;
          }
        });
      }
    }
    Object.defineProperty && (n("position", "_legacyPos", "x", "y"), n("scale", "_legacyScale", "scaleX", "scaleY"), n("origin", "_legacyOrigin", "originX", "originY"));
  }(), e;
}();
qe(Pl, ze);
qe(Pl, El);
function cs(e, t, r, i, n) {
  r = r || {};
  var a = [];
  xd(e, "", e, t, r, i, a, n);
  var o = a.length, s = !1, u = r.done, l = r.aborted, f = function() {
    s = !0, o--, o <= 0 && (s ? u && u() : l && l());
  }, h = function() {
    o--, o <= 0 && (s ? u && u() : l && l());
  };
  o || u && u(), a.length > 0 && r.during && a[0].during(function(d, _) {
    r.during(_);
  });
  for (var c = 0; c < a.length; c++) {
    var v = a[c];
    f && v.done(f), h && v.aborted(h), r.force && v.duration(r.duration), v.start(r.easing);
  }
  return a;
}
function vs(e, t, r) {
  for (var i = 0; i < r; i++)
    e[i] = t[i];
}
function pm(e) {
  return Yt(e[0]);
}
function gm(e, t, r) {
  if (Yt(t[r]))
    if (Yt(e[r]) || (e[r] = []), Xt(t[r])) {
      var i = t[r].length;
      e[r].length !== i && (e[r] = new t[r].constructor(i), vs(e[r], t[r], i));
    } else {
      var n = t[r], a = e[r], o = n.length;
      if (pm(n))
        for (var s = n[0].length, u = 0; u < o; u++)
          a[u] ? vs(a[u], n[u], s) : a[u] = Array.prototype.slice.call(n[u]);
      else
        vs(a, n, o);
      a.length = n.length;
    }
  else
    e[r] = t[r];
}
function _m(e, t) {
  return e === t || Yt(e) && Yt(t) && ym(e, t);
}
function ym(e, t) {
  var r = e.length;
  if (r !== t.length)
    return !1;
  for (var i = 0; i < r; i++)
    if (e[i] !== t[i])
      return !1;
  return !0;
}
function xd(e, t, r, i, n, a, o, s) {
  for (var u = yt(i), l = n.duration, f = n.delay, h = n.additive, c = n.setToFinal, v = !F(a), d = e.animators, _ = [], p = 0; p < u.length; p++) {
    var g = u[p], y = i[g];
    if (y != null && r[g] != null && (v || a[g]))
      if (F(y) && !Yt(y) && !Eo(y)) {
        if (t) {
          s || (r[g] = y, e.updateDuringAnimation(t));
          continue;
        }
        xd(e, g, r[g], y, n, a && a[g], o, s);
      } else
        _.push(g);
    else
      s || (r[g] = y, e.updateDuringAnimation(t), _.push(g));
  }
  var m = _.length;
  if (!h && m)
    for (var w = 0; w < d.length; w++) {
      var b = d[w];
      if (b.targetName === t) {
        var S = b.stopTracks(_);
        if (S) {
          var T = nt(d, b);
          d.splice(T, 1);
        }
      }
    }
  if (n.force || (_ = _e(_, function(D) {
    return !_m(i[D], r[D]);
  }), m = _.length), m > 0 || n.force && !o.length) {
    var x = void 0, C = void 0, E = void 0;
    if (s) {
      C = {}, c && (x = {});
      for (var w = 0; w < m; w++) {
        var g = _[w];
        C[g] = r[g], c ? x[g] = i[g] : r[g] = i[g];
      }
    } else if (c) {
      E = {};
      for (var w = 0; w < m; w++) {
        var g = _[w];
        E[g] = za(r[g]), gm(r, i, g);
      }
    }
    var b = new Cl(r, !1, !1, h ? _e(d, function(M) {
      return M.targetName === t;
    }) : null);
    b.targetName = t, n.scope && (b.scope = n.scope), c && x && b.whenWithKeys(0, x, _), E && b.whenWithKeys(0, E, _), b.whenWithKeys(l == null ? 500 : l, s ? C : i, _).delay(f || 0), e.addAnimator(b, t), o.push(b);
  }
}
const Td = Pl;
var Cd = function(e) {
  k(t, e);
  function t(r) {
    var i = e.call(this) || this;
    return i.isGroup = !0, i._children = [], i.attr(r), i;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.children = function() {
    return this._children.slice();
  }, t.prototype.childAt = function(r) {
    return this._children[r];
  }, t.prototype.childOfName = function(r) {
    for (var i = this._children, n = 0; n < i.length; n++)
      if (i[n].name === r)
        return i[n];
  }, t.prototype.childCount = function() {
    return this._children.length;
  }, t.prototype.add = function(r) {
    if (r && (r !== this && r.parent !== this && (this._children.push(r), this._doAdd(r)), process.env.NODE_ENV !== "production" && r.__hostTarget))
      throw "This elemenet has been used as an attachment";
    return this;
  }, t.prototype.addBefore = function(r, i) {
    if (r && r !== this && r.parent !== this && i && i.parent === this) {
      var n = this._children, a = n.indexOf(i);
      a >= 0 && (n.splice(a, 0, r), this._doAdd(r));
    }
    return this;
  }, t.prototype.replace = function(r, i) {
    var n = nt(this._children, r);
    return n >= 0 && this.replaceAt(i, n), this;
  }, t.prototype.replaceAt = function(r, i) {
    var n = this._children, a = n[i];
    if (r && r !== this && r.parent !== this && r !== a) {
      n[i] = r, a.parent = null;
      var o = this.__zr;
      o && a.removeSelfFromZr(o), this._doAdd(r);
    }
    return this;
  }, t.prototype._doAdd = function(r) {
    r.parent && r.parent.remove(r), r.parent = this;
    var i = this.__zr;
    i && i !== r.__zr && r.addSelfToZr(i), i && i.refresh();
  }, t.prototype.remove = function(r) {
    var i = this.__zr, n = this._children, a = nt(n, r);
    return a < 0 ? this : (n.splice(a, 1), r.parent = null, i && r.removeSelfFromZr(i), i && i.refresh(), this);
  }, t.prototype.removeAll = function() {
    for (var r = this._children, i = this.__zr, n = 0; n < r.length; n++) {
      var a = r[n];
      i && a.removeSelfFromZr(i), a.parent = null;
    }
    return r.length = 0, this;
  }, t.prototype.eachChild = function(r, i) {
    for (var n = this._children, a = 0; a < n.length; a++) {
      var o = n[a];
      r.call(i, o, a);
    }
    return this;
  }, t.prototype.traverse = function(r, i) {
    for (var n = 0; n < this._children.length; n++) {
      var a = this._children[n], o = r.call(i, a);
      a.isGroup && !o && a.traverse(r, i);
    }
    return this;
  }, t.prototype.addSelfToZr = function(r) {
    e.prototype.addSelfToZr.call(this, r);
    for (var i = 0; i < this._children.length; i++) {
      var n = this._children[i];
      n.addSelfToZr(r);
    }
  }, t.prototype.removeSelfFromZr = function(r) {
    e.prototype.removeSelfFromZr.call(this, r);
    for (var i = 0; i < this._children.length; i++) {
      var n = this._children[i];
      n.removeSelfFromZr(r);
    }
  }, t.prototype.getBoundingRect = function(r) {
    for (var i = new st(0, 0, 0, 0), n = r || this._children, a = [], o = null, s = 0; s < n.length; s++) {
      var u = n[s];
      if (!(u.ignore || u.invisible)) {
        var l = u.getBoundingRect(), f = u.getLocalTransform(a);
        f ? (st.applyTransform(i, l, f), o = o || i.clone(), o.union(i)) : (o = o || l.clone(), o.union(l));
      }
    }
    return o || i;
  }, t;
}(Td);
Cd.prototype.type = "group";
const ye = Cd;
/*!
* ZRender, a high performance 2d drawing library.
*
* Copyright (c) 2013, Baidu Inc.
* All rights reserved.
*
* LICENSE
* https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
*/
var vn = {}, Dd = {};
function mm(e) {
  delete Dd[e];
}
function wm(e) {
  if (!e)
    return !1;
  if (typeof e == "string")
    return eo(e, 1) < Lu;
  if (e.colorStops) {
    for (var t = e.colorStops, r = 0, i = t.length, n = 0; n < i; n++)
      r += eo(t[n].color, 1);
    return r /= i, r < Lu;
  }
  return !1;
}
var Sm = function() {
  function e(t, r, i) {
    var n = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, i = i || {}, this.dom = r, this.id = t;
    var a = new Iy(), o = i.renderer || "canvas";
    if (vn[o] || (o = yt(vn)[0]), process.env.NODE_ENV !== "production" && !vn[o])
      throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
    i.useDirtyRect = i.useDirtyRect == null ? !1 : i.useDirtyRect;
    var s = new vn[o](r, a, i, t), u = i.ssr || s.ssrOnly;
    this.storage = a, this.painter = s;
    var l = !Z.node && !Z.worker && !u ? new om(s.getViewportRoot(), s.root) : null;
    this.handler = new Ay(a, s, l, s.root), this.animation = new Jy({
      stage: {
        update: u ? null : function() {
          return n._flush(!0);
        }
      }
    }), u || this.animation.start();
  }
  return e.prototype.add = function(t) {
    !t || (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
  }, e.prototype.remove = function(t) {
    !t || (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
  }, e.prototype.configLayer = function(t, r) {
    this.painter.configLayer && this.painter.configLayer(t, r), this.refresh();
  }, e.prototype.setBackgroundColor = function(t) {
    this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = wm(t);
  }, e.prototype.getBackgroundColor = function() {
    return this._backgroundColor;
  }, e.prototype.setDarkMode = function(t) {
    this._darkMode = t;
  }, e.prototype.isDarkMode = function() {
    return this._darkMode;
  }, e.prototype.refreshImmediately = function(t) {
    t || this.animation.update(!0), this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1;
  }, e.prototype.refresh = function() {
    this._needsRefresh = !0, this.animation.start();
  }, e.prototype.flush = function() {
    this._flush(!1);
  }, e.prototype._flush = function(t) {
    var r, i = bi();
    this._needsRefresh && (r = !0, this.refreshImmediately(t)), this._needsRefreshHover && (r = !0, this.refreshHoverImmediately());
    var n = bi();
    r ? (this._stillFrameAccum = 0, this.trigger("rendered", {
      elapsedTime: n - i
    })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
  }, e.prototype.setSleepAfterStill = function(t) {
    this._sleepAfterStill = t;
  }, e.prototype.wakeUp = function() {
    this.animation.start(), this._stillFrameAccum = 0;
  }, e.prototype.refreshHover = function() {
    this._needsRefreshHover = !0;
  }, e.prototype.refreshHoverImmediately = function() {
    this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.getType() === "canvas" && this.painter.refreshHover();
  }, e.prototype.resize = function(t) {
    t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize();
  }, e.prototype.clearAnimation = function() {
    this.animation.clear();
  }, e.prototype.getWidth = function() {
    return this.painter.getWidth();
  }, e.prototype.getHeight = function() {
    return this.painter.getHeight();
  }, e.prototype.setCursorStyle = function(t) {
    this.handler.setCursorStyle(t);
  }, e.prototype.findHover = function(t, r) {
    return this.handler.findHover(t, r);
  }, e.prototype.on = function(t, r, i) {
    return this.handler.on(t, r, i), this;
  }, e.prototype.off = function(t, r) {
    this.handler.off(t, r);
  }, e.prototype.trigger = function(t, r) {
    this.handler.trigger(t, r);
  }, e.prototype.clear = function() {
    for (var t = this.storage.getRoots(), r = 0; r < t.length; r++)
      t[r] instanceof ye && t[r].removeSelfFromZr(this);
    this.storage.delAllRoots(), this.painter.clear();
  }, e.prototype.dispose = function() {
    this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, mm(this.id);
  }, e;
}();
function rh(e, t) {
  var r = new Sm(Qv(), e, t);
  return Dd[r.id] = r, r;
}
function bm(e, t) {
  vn[e] = t;
}
var ih = 1e-4, Ad = 20;
function xm(e) {
  return e.replace(/^\s+|\s+$/g, "");
}
function Tm(e, t, r, i) {
  var n = t[0], a = t[1], o = r[0], s = r[1], u = a - n, l = s - o;
  if (u === 0)
    return l === 0 ? o : (o + s) / 2;
  if (i)
    if (u > 0) {
      if (e <= n)
        return o;
      if (e >= a)
        return s;
    } else {
      if (e >= n)
        return o;
      if (e <= a)
        return s;
    }
  else {
    if (e === n)
      return o;
    if (e === a)
      return s;
  }
  return (e - n) / u * l + o;
}
function ft(e, t) {
  switch (e) {
    case "center":
    case "middle":
      e = "50%";
      break;
    case "left":
    case "top":
      e = "0%";
      break;
    case "right":
    case "bottom":
      e = "100%";
      break;
  }
  return z(e) ? xm(e).match(/%$/) ? parseFloat(e) / 100 * t : parseFloat(e) : e == null ? NaN : +e;
}
function dn(e, t, r) {
  return t == null && (t = 10), t = Math.min(Math.max(0, t), Ad), e = (+e).toFixed(t), r ? e : +e;
}
function nh(e) {
  if (e = +e, isNaN(e))
    return 0;
  if (e > 1e-14) {
    for (var t = 1, r = 0; r < 15; r++, t *= 10)
      if (Math.round(e * t) / t === e)
        return r;
  }
  return Cm(e);
}
function Cm(e) {
  var t = e.toString().toLowerCase(), r = t.indexOf("e"), i = r > 0 ? +t.slice(r + 1) : 0, n = r > 0 ? r : t.length, a = t.indexOf("."), o = a < 0 ? 0 : n - 1 - a;
  return Math.max(0, o - i);
}
function Dm(e, t, r) {
  if (!e[t])
    return 0;
  var i = fr(e, function(d, _) {
    return d + (isNaN(_) ? 0 : _);
  }, 0);
  if (i === 0)
    return 0;
  for (var n = Math.pow(10, r), a = q(e, function(d) {
    return (isNaN(d) ? 0 : d) / i * n * 100;
  }), o = n * 100, s = q(a, function(d) {
    return Math.floor(d);
  }), u = fr(s, function(d, _) {
    return d + _;
  }, 0), l = q(a, function(d, _) {
    return d - s[_];
  }); u < o; ) {
    for (var f = Number.NEGATIVE_INFINITY, h = null, c = 0, v = l.length; c < v; ++c)
      l[c] > f && (f = l[c], h = c);
    ++s[h], l[h] = 0, ++u;
  }
  return s[t] / n;
}
function Am(e, t) {
  var r = Math.max(nh(e), nh(t)), i = e + t;
  return r > Ad ? i : dn(i, r);
}
function Ed(e) {
  var t = Math.PI * 2;
  return (e % t + t) % t;
}
function no(e) {
  return e > -ih && e < ih;
}
var Em = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function Po(e) {
  if (e instanceof Date)
    return e;
  if (z(e)) {
    var t = Em.exec(e);
    if (!t)
      return new Date(NaN);
    if (t[8]) {
      var r = +t[4] || 0;
      return t[8].toUpperCase() !== "Z" && (r -= +t[8].slice(0, 3)), new Date(Date.UTC(+t[1], +(t[2] || 1) - 1, +t[3] || 1, r, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0));
    } else
      return new Date(+t[1], +(t[2] || 1) - 1, +t[3] || 1, +t[4] || 0, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0);
  } else if (e == null)
    return new Date(NaN);
  return new Date(Math.round(e));
}
function ao(e) {
  var t = parseFloat(e);
  return t == e && (t !== 0 || !z(e) || e.indexOf("x") <= 0) ? t : NaN;
}
function Md(e) {
  return !isNaN(ao(e));
}
function Pd() {
  return Math.round(Math.random() * 9);
}
function Ld(e, t) {
  return t === 0 ? e : Ld(t, e % t);
}
function ah(e, t) {
  return e == null ? t : t == null ? e : e * t / Ld(e, t);
}
var Mm = "[ECharts] ", oh = {}, Pm = typeof console < "u" && console.warn && console.log;
function Lo(e, t, r) {
  if (Pm) {
    if (r) {
      if (oh[t])
        return;
      oh[t] = !0;
    }
    console[e](Mm + t);
  }
}
function Lm(e, t) {
  Lo("log", e, t);
}
function Rn(e, t) {
  Lo("warn", e, t);
}
function Rt(e, t) {
  Lo("error", e, t);
}
function ke(e) {
  process.env.NODE_ENV !== "production" && Lo("warn", "DEPRECATED: " + e, !0);
}
function mt(e, t, r) {
  process.env.NODE_ENV !== "production" && ke((r ? "[" + r + "]" : "") + (e + " is deprecated, use " + t + " instead."));
}
function oo() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = "";
  if (process.env.NODE_ENV !== "production") {
    var i = function(n) {
      return n === void 0 ? "undefined" : n === 1 / 0 ? "Infinity" : n === -1 / 0 ? "-Infinity" : Jv(n) ? "NaN" : n instanceof Date ? "Date(" + n.toISOString() + ")" : J(n) ? "function () { ... }" : J_(n) ? n + "" : null;
    };
    r = q(e, function(n) {
      if (z(n))
        return n;
      var a = i(n);
      if (a != null)
        return a;
      if (typeof JSON < "u" && JSON.stringify)
        try {
          return JSON.stringify(n, function(o, s) {
            var u = i(s);
            return u == null ? s : u;
          });
        } catch {
          return "?";
        }
      else
        return "?";
    }).join(" ");
  }
  return r;
}
function Wt(e) {
  throw new Error(e);
}
var Id = "series\0", Im = "\0_ec_\0";
function zt(e) {
  return e instanceof Array ? e : e == null ? [] : [e];
}
function Nu(e, t, r) {
  if (e) {
    e[t] = e[t] || {}, e.emphasis = e.emphasis || {}, e.emphasis[t] = e.emphasis[t] || {};
    for (var i = 0, n = r.length; i < n; i++) {
      var a = r[i];
      !e.emphasis[t].hasOwnProperty(a) && e[t].hasOwnProperty(a) && (e.emphasis[t][a] = e[t][a]);
    }
  }
}
var sh = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
function Un(e) {
  return F(e) && !N(e) && !(e instanceof Date) ? e.value : e;
}
function Rm(e) {
  return F(e) && !(e instanceof Array);
}
function Om(e, t, r) {
  var i = r === "normalMerge", n = r === "replaceMerge", a = r === "replaceAll";
  e = e || [], t = (t || []).slice();
  var o = Q();
  A(t, function(u, l) {
    if (!F(u)) {
      t[l] = null;
      return;
    }
    process.env.NODE_ENV !== "production" && (u.id != null && !lh(u.id) && uh(u.id), u.name != null && !lh(u.name) && uh(u.name));
  });
  var s = Nm(e, o, r);
  return (i || n) && km(s, e, o, t), i && Bm(s, t), i || n ? zm(s, t, n) : a && Fm(s, t), Vm(s), s;
}
function Nm(e, t, r) {
  var i = [];
  if (r === "replaceAll")
    return i;
  for (var n = 0; n < e.length; n++) {
    var a = e[n];
    a && a.id != null && t.set(a.id, n), i.push({
      existing: r === "replaceMerge" || Mi(a) ? null : a,
      newOption: null,
      keyInfo: null,
      brandNew: null
    });
  }
  return i;
}
function km(e, t, r, i) {
  A(i, function(n, a) {
    if (!(!n || n.id == null)) {
      var o = Sn(n.id), s = r.get(o);
      if (s != null) {
        var u = e[s];
        X(!u.newOption, 'Duplicated option on id "' + o + '".'), u.newOption = n, u.existing = t[s], i[a] = null;
      }
    }
  });
}
function Bm(e, t) {
  A(t, function(r, i) {
    if (!(!r || r.name == null))
      for (var n = 0; n < e.length; n++) {
        var a = e[n].existing;
        if (!e[n].newOption && a && (a.id == null || r.id == null) && !Mi(r) && !Mi(a) && Rd("name", a, r)) {
          e[n].newOption = r, t[i] = null;
          return;
        }
      }
  });
}
function zm(e, t, r) {
  A(t, function(i) {
    if (!!i) {
      for (var n, a = 0; (n = e[a]) && (n.newOption || Mi(n.existing) || n.existing && i.id != null && !Rd("id", i, n.existing)); )
        a++;
      n ? (n.newOption = i, n.brandNew = r) : e.push({
        newOption: i,
        brandNew: r,
        existing: null,
        keyInfo: null
      }), a++;
    }
  });
}
function Fm(e, t) {
  A(t, function(r) {
    e.push({
      newOption: r,
      brandNew: !0,
      existing: null,
      keyInfo: null
    });
  });
}
function Vm(e) {
  var t = Q();
  A(e, function(r) {
    var i = r.existing;
    i && t.set(i.id, r);
  }), A(e, function(r) {
    var i = r.newOption;
    X(!i || i.id == null || !t.get(i.id) || t.get(i.id) === r, "id duplicates: " + (i && i.id)), i && i.id != null && t.set(i.id, r), !r.keyInfo && (r.keyInfo = {});
  }), A(e, function(r, i) {
    var n = r.existing, a = r.newOption, o = r.keyInfo;
    if (!!F(a)) {
      if (o.name = a.name != null ? Sn(a.name) : n ? n.name : Id + i, n)
        o.id = Sn(n.id);
      else if (a.id != null)
        o.id = Sn(a.id);
      else {
        var s = 0;
        do
          o.id = "\0" + o.name + "\0" + s++;
        while (t.get(o.id));
      }
      t.set(o.id, r);
    }
  });
}
function Rd(e, t, r) {
  var i = Oe(t[e], null), n = Oe(r[e], null);
  return i != null && n != null && i === n;
}
function Sn(e) {
  if (process.env.NODE_ENV !== "production" && e == null)
    throw new Error();
  return Oe(e, "");
}
function Oe(e, t) {
  return e == null ? t : z(e) ? e : dt(e) || Ka(e) ? e + "" : t;
}
function uh(e) {
  process.env.NODE_ENV !== "production" && Rn("`" + e + "` is invalid id or name. Must be a string or number.");
}
function lh(e) {
  return Ka(e) || Md(e);
}
function Ll(e) {
  var t = e.name;
  return !!(t && t.indexOf(Id));
}
function Mi(e) {
  return e && e.id != null && Sn(e.id).indexOf(Im) === 0;
}
function Hm(e, t, r) {
  A(e, function(i) {
    var n = i.newOption;
    F(n) && (i.keyInfo.mainType = t, i.keyInfo.subType = Gm(t, n, i.existing, r));
  });
}
function Gm(e, t, r, i) {
  var n = t.type ? t.type : r ? r.subType : i.determineSubType(e, t);
  return n;
}
function Yn(e, t) {
  if (t.dataIndexInside != null)
    return t.dataIndexInside;
  if (t.dataIndex != null)
    return N(t.dataIndex) ? q(t.dataIndex, function(r) {
      return e.indexOfRawIndex(r);
    }) : e.indexOfRawIndex(t.dataIndex);
  if (t.name != null)
    return N(t.name) ? q(t.name, function(r) {
      return e.indexOfName(r);
    }) : e.indexOfName(t.name);
}
function At() {
  var e = "__ec_inner_" + Wm++;
  return function(t) {
    return t[e] || (t[e] = {});
  };
}
var Wm = Pd();
function ds(e, t, r) {
  var i = Il(t, r), n = i.mainTypeSpecified, a = i.queryOptionMap, o = i.others, s = o, u = r ? r.defaultMainType : null;
  return !n && u && a.set(u, {}), a.each(function(l, f) {
    var h = Xn(e, f, l, {
      useDefault: u === f,
      enableAll: r && r.enableAll != null ? r.enableAll : !0,
      enableNone: r && r.enableNone != null ? r.enableNone : !0
    });
    s[f + "Models"] = h.models, s[f + "Model"] = h.models[0];
  }), s;
}
function Il(e, t) {
  var r;
  if (z(e)) {
    var i = {};
    i[e + "Index"] = 0, r = i;
  } else
    r = e;
  var n = Q(), a = {}, o = !1;
  return A(r, function(s, u) {
    if (u === "dataIndex" || u === "dataIndexInside") {
      a[u] = s;
      return;
    }
    var l = u.match(/^(\w+)(Index|Id|Name)$/) || [], f = l[1], h = (l[2] || "").toLowerCase();
    if (!(!f || !h || t && t.includeMainTypes && nt(t.includeMainTypes, f) < 0)) {
      o = o || !!f;
      var c = n.get(f) || n.set(f, {});
      c[h] = s;
    }
  }), {
    mainTypeSpecified: o,
    queryOptionMap: n,
    others: a
  };
}
var zr = {
  useDefault: !0,
  enableAll: !1,
  enableNone: !1
};
function Xn(e, t, r, i) {
  i = i || zr;
  var n = r.index, a = r.id, o = r.name, s = {
    models: null,
    specified: n != null || a != null || o != null
  };
  if (!s.specified) {
    var u = void 0;
    return s.models = i.useDefault && (u = e.getComponent(t)) ? [u] : [], s;
  }
  return n === "none" || n === !1 ? (X(i.enableNone, '`"none"` or `false` is not a valid value on index option.'), s.models = [], s) : (n === "all" && (X(i.enableAll, '`"all"` is not a valid value on index option.'), n = a = o = null), s.models = e.queryComponents({
    mainType: t,
    index: n,
    id: a,
    name: o
  }), s);
}
function Od(e, t, r) {
  e.setAttribute ? e.setAttribute(t, r) : e[t] = r;
}
function $m(e, t) {
  return e.getAttribute ? e.getAttribute(t) : e[t];
}
function Um(e) {
  return e === "auto" ? Z.domSupported ? "html" : "richText" : e || "html";
}
var Ym = ".", wr = "___EC__COMPONENT__CONTAINER___", Nd = "___EC__EXTENDED_CLASS___";
function Ie(e) {
  var t = {
    main: "",
    sub: ""
  };
  if (e) {
    var r = e.split(Ym);
    t.main = r[0] || "", t.sub = r[1] || "";
  }
  return t;
}
function Xm(e) {
  X(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(e), 'componentType "' + e + '" illegal');
}
function qm(e) {
  return !!(e && e[Nd]);
}
function Rl(e, t) {
  e.$constructor = e, e.extend = function(r) {
    process.env.NODE_ENV !== "production" && A(t, function(a) {
      r[a] || console.warn("Method `" + a + "` should be implemented" + (r.type ? " in " + r.type : "") + ".");
    });
    var i = this, n;
    return Zm(i) ? n = function(a) {
      k(o, a);
      function o() {
        return a.apply(this, arguments) || this;
      }
      return o;
    }(i) : (n = function() {
      (r.$constructor || i).apply(this, arguments);
    }, Z_(n, this)), O(n.prototype, r), n[Nd] = !0, n.extend = this.extend, n.superCall = Jm, n.superApply = jm, n.superClass = i, n;
  };
}
function Zm(e) {
  return J(e) && /^class\s/.test(Function.prototype.toString.call(e));
}
function kd(e, t) {
  e.extend = t.extend;
}
var Km = Math.round(Math.random() * 10);
function Qm(e) {
  var t = ["__\0is_clz", Km++].join("_");
  e.prototype[t] = !0, process.env.NODE_ENV !== "production" && X(!e.isInstance, 'The method "is" can not be defined.'), e.isInstance = function(r) {
    return !!(r && r[t]);
  };
}
function Jm(e, t) {
  for (var r = [], i = 2; i < arguments.length; i++)
    r[i - 2] = arguments[i];
  return this.superClass.prototype[t].apply(e, r);
}
function jm(e, t, r) {
  return this.superClass.prototype[t].apply(e, r);
}
function Ol(e) {
  var t = {};
  e.registerClass = function(i) {
    var n = i.type || i.prototype.type;
    if (n) {
      Xm(n), i.prototype.type = n;
      var a = Ie(n);
      if (!a.sub)
        process.env.NODE_ENV !== "production" && t[a.main] && console.warn(a.main + " exists."), t[a.main] = i;
      else if (a.sub !== wr) {
        var o = r(a);
        o[a.sub] = i;
      }
    }
    return i;
  }, e.getClass = function(i, n, a) {
    var o = t[i];
    if (o && o[wr] && (o = n ? o[n] : null), a && !o)
      throw new Error(n ? "Component " + i + "." + (n || "") + " is used but not imported." : i + ".type should be specified.");
    return o;
  }, e.getClassesByMainType = function(i) {
    var n = Ie(i), a = [], o = t[n.main];
    return o && o[wr] ? A(o, function(s, u) {
      u !== wr && a.push(s);
    }) : a.push(o), a;
  }, e.hasClass = function(i) {
    var n = Ie(i);
    return !!t[n.main];
  }, e.getAllClassMainTypes = function() {
    var i = [];
    return A(t, function(n, a) {
      i.push(a);
    }), i;
  }, e.hasSubTypes = function(i) {
    var n = Ie(i), a = t[n.main];
    return a && a[wr];
  };
  function r(i) {
    var n = t[i.main];
    return (!n || !n[wr]) && (n = t[i.main] = {}, n[wr] = !0), n;
  }
}
function On(e, t) {
  for (var r = 0; r < e.length; r++)
    e[r][1] || (e[r][1] = e[r][0]);
  return t = t || !1, function(i, n, a) {
    for (var o = {}, s = 0; s < e.length; s++) {
      var u = e[s][1];
      if (!(n && nt(n, u) >= 0 || a && nt(a, u) < 0)) {
        var l = i.getShallow(u, t);
        l != null && (o[e[s][0]] = l);
      }
    }
    return o;
  };
}
var t0 = [
  ["fill", "color"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["opacity"],
  ["shadowColor"]
], e0 = On(t0), r0 = function() {
  function e() {
  }
  return e.prototype.getAreaStyle = function(t, r) {
    return e0(this, t, r);
  }, e;
}(), ku = new $n(50);
function i0(e) {
  if (typeof e == "string") {
    var t = ku.get(e);
    return t && t.image;
  } else
    return e;
}
function Bd(e, t, r, i, n) {
  if (e)
    if (typeof e == "string") {
      if (t && t.__zrImageSrc === e || !r)
        return t;
      var a = ku.get(e), o = { hostEl: r, cb: i, cbPayload: n };
      return a ? (t = a.image, !Io(t) && a.pending.push(o)) : (t = Ri.loadImage(e, fh, fh), t.__zrImageSrc = e, ku.put(e, t.__cachedImgObj = {
        image: t,
        pending: [o]
      })), t;
    } else
      return e;
  else
    return t;
}
function fh() {
  var e = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var t = 0; t < e.pending.length; t++) {
    var r = e.pending[t], i = r.cb;
    i && i(this, r.cbPayload), r.hostEl.dirty();
  }
  e.pending.length = 0;
}
function Io(e) {
  return e && e.width && e.height;
}
var ps = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function n0(e, t, r, i, n) {
  if (!t)
    return "";
  var a = (e + "").split(`
`);
  n = zd(t, r, i, n);
  for (var o = 0, s = a.length; o < s; o++)
    a[o] = Fd(a[o], n);
  return a.join(`
`);
}
function zd(e, t, r, i) {
  i = i || {};
  var n = O({}, i);
  n.font = t, r = tt(r, "..."), n.maxIterations = tt(i.maxIterations, 2);
  var a = n.minChar = tt(i.minChar, 0);
  n.cnCharWidth = jt("\u56FD", t);
  var o = n.ascCharWidth = jt("a", t);
  n.placeholder = tt(i.placeholder, "");
  for (var s = e = Math.max(0, e - 1), u = 0; u < a && s >= o; u++)
    s -= o;
  var l = jt(r, t);
  return l > s && (r = "", l = 0), s = e - l, n.ellipsis = r, n.ellipsisWidth = l, n.contentWidth = s, n.containerWidth = e, n;
}
function Fd(e, t) {
  var r = t.containerWidth, i = t.font, n = t.contentWidth;
  if (!r)
    return "";
  var a = jt(e, i);
  if (a <= r)
    return e;
  for (var o = 0; ; o++) {
    if (a <= n || o >= t.maxIterations) {
      e += t.ellipsis;
      break;
    }
    var s = o === 0 ? a0(e, n, t.ascCharWidth, t.cnCharWidth) : a > 0 ? Math.floor(e.length * n / a) : 0;
    e = e.substr(0, s), a = jt(e, i);
  }
  return e === "" && (e = t.placeholder), e;
}
function a0(e, t, r, i) {
  for (var n = 0, a = 0, o = e.length; a < o && n < t; a++) {
    var s = e.charCodeAt(a);
    n += 0 <= s && s <= 127 ? r : i;
  }
  return a;
}
function o0(e, t) {
  e != null && (e += "");
  var r = t.overflow, i = t.padding, n = t.font, a = r === "truncate", o = Ml(n), s = tt(t.lineHeight, o), u = !!t.backgroundColor, l = t.lineOverflow === "truncate", f = t.width, h;
  f != null && (r === "break" || r === "breakAll") ? h = e ? Vd(e, t.font, f, r === "breakAll", 0).lines : [] : h = e ? e.split(`
`) : [];
  var c = h.length * s, v = tt(t.height, c);
  if (c > v && l) {
    var d = Math.floor(v / s);
    h = h.slice(0, d);
  }
  if (e && a && f != null)
    for (var _ = zd(f, n, t.ellipsis, {
      minChar: t.truncateMinChar,
      placeholder: t.placeholder
    }), p = 0; p < h.length; p++)
      h[p] = Fd(h[p], _);
  for (var g = v, y = 0, p = 0; p < h.length; p++)
    y = Math.max(jt(h[p], n), y);
  f == null && (f = y);
  var m = y;
  return i && (g += i[0] + i[2], m += i[1] + i[3], f += i[1] + i[3]), u && (m = f), {
    lines: h,
    height: v,
    outerWidth: m,
    outerHeight: g,
    lineHeight: s,
    calculatedLineHeight: o,
    contentWidth: y,
    contentHeight: c,
    width: f
  };
}
var s0 = function() {
  function e() {
  }
  return e;
}(), hh = function() {
  function e(t) {
    this.tokens = [], t && (this.tokens = t);
  }
  return e;
}(), u0 = function() {
  function e() {
    this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [];
  }
  return e;
}();
function l0(e, t) {
  var r = new u0();
  if (e != null && (e += ""), !e)
    return r;
  for (var i = t.width, n = t.height, a = t.overflow, o = (a === "break" || a === "breakAll") && i != null ? { width: i, accumWidth: 0, breakAll: a === "breakAll" } : null, s = ps.lastIndex = 0, u; (u = ps.exec(e)) != null; ) {
    var l = u.index;
    l > s && gs(r, e.substring(s, l), t, o), gs(r, u[2], t, o, u[1]), s = ps.lastIndex;
  }
  s < e.length && gs(r, e.substring(s, e.length), t, o);
  var f = [], h = 0, c = 0, v = t.padding, d = a === "truncate", _ = t.lineOverflow === "truncate";
  function p(B, W, K) {
    B.width = W, B.lineHeight = K, h += K, c = Math.max(c, W);
  }
  t:
    for (var g = 0; g < r.lines.length; g++) {
      for (var y = r.lines[g], m = 0, w = 0, b = 0; b < y.tokens.length; b++) {
        var S = y.tokens[b], T = S.styleName && t.rich[S.styleName] || {}, x = S.textPadding = T.padding, C = x ? x[1] + x[3] : 0, E = S.font = T.font || t.font;
        S.contentHeight = Ml(E);
        var D = tt(T.height, S.contentHeight);
        if (S.innerHeight = D, x && (D += x[0] + x[2]), S.height = D, S.lineHeight = yn(T.lineHeight, t.lineHeight, D), S.align = T && T.align || t.align, S.verticalAlign = T && T.verticalAlign || "middle", _ && n != null && h + S.lineHeight > n) {
          b > 0 ? (y.tokens = y.tokens.slice(0, b), p(y, w, m), r.lines = r.lines.slice(0, g + 1)) : r.lines = r.lines.slice(0, g);
          break t;
        }
        var M = T.width, P = M == null || M === "auto";
        if (typeof M == "string" && M.charAt(M.length - 1) === "%")
          S.percentWidth = M, f.push(S), S.contentWidth = jt(S.text, E);
        else {
          if (P) {
            var L = T.backgroundColor, I = L && L.image;
            I && (I = i0(I), Io(I) && (S.width = Math.max(S.width, I.width * D / I.height)));
          }
          var R = d && i != null ? i - w : null;
          R != null && R < S.width ? !P || R < C ? (S.text = "", S.width = S.contentWidth = 0) : (S.text = n0(S.text, R - C, E, t.ellipsis, { minChar: t.truncateMinChar }), S.width = S.contentWidth = jt(S.text, E)) : S.contentWidth = jt(S.text, E);
        }
        S.width += C, w += S.width, T && (m = Math.max(m, S.lineHeight));
      }
      p(y, w, m);
    }
  r.outerWidth = r.width = tt(i, c), r.outerHeight = r.height = tt(n, h), r.contentHeight = h, r.contentWidth = c, v && (r.outerWidth += v[1] + v[3], r.outerHeight += v[0] + v[2]);
  for (var g = 0; g < f.length; g++) {
    var S = f[g], $ = S.percentWidth;
    S.width = parseInt($, 10) / 100 * r.width;
  }
  return r;
}
function gs(e, t, r, i, n) {
  var a = t === "", o = n && r.rich[n] || {}, s = e.lines, u = o.font || r.font, l = !1, f, h;
  if (i) {
    var c = o.padding, v = c ? c[1] + c[3] : 0;
    if (o.width != null && o.width !== "auto") {
      var d = Ei(o.width, i.width) + v;
      s.length > 0 && d + i.accumWidth > i.width && (f = t.split(`
`), l = !0), i.accumWidth = d;
    } else {
      var _ = Vd(t, u, i.width, i.breakAll, i.accumWidth);
      i.accumWidth = _.accumWidth + v, h = _.linesWidths, f = _.lines;
    }
  } else
    f = t.split(`
`);
  for (var p = 0; p < f.length; p++) {
    var g = f[p], y = new s0();
    if (y.styleName = n, y.text = g, y.isLineHolder = !g && !a, typeof o.width == "number" ? y.width = o.width : y.width = h ? h[p] : jt(g, u), !p && !l) {
      var m = (s[s.length - 1] || (s[0] = new hh())).tokens, w = m.length;
      w === 1 && m[0].isLineHolder ? m[0] = y : (g || !w || a) && m.push(y);
    } else
      s.push(new hh([y]));
  }
}
function f0(e) {
  var t = e.charCodeAt(0);
  return t >= 33 && t <= 383;
}
var h0 = fr(",&?/;] ".split(""), function(e, t) {
  return e[t] = !0, e;
}, {});
function c0(e) {
  return f0(e) ? !!h0[e] : !0;
}
function Vd(e, t, r, i, n) {
  for (var a = [], o = [], s = "", u = "", l = 0, f = 0, h = 0; h < e.length; h++) {
    var c = e.charAt(h);
    if (c === `
`) {
      u && (s += u, f += l), a.push(s), o.push(f), s = "", u = "", l = 0, f = 0;
      continue;
    }
    var v = jt(c, t), d = i ? !1 : !c0(c);
    if (a.length ? f + v > r : n + f + v > r) {
      f ? (s || u) && (d ? (s || (s = u, u = "", l = 0, f = l), a.push(s), o.push(f - l), u += c, l += v, s = "", f = l) : (u && (s += u, u = "", l = 0), a.push(s), o.push(f), s = c, f = v)) : d ? (a.push(u), o.push(l), u = c, l = v) : (a.push(c), o.push(v));
      continue;
    }
    f += v, d ? (u += c, l += v) : (u && (s += u, u = "", l = 0), s += c);
  }
  return !a.length && !s && (s = e, u = "", l = 0), u && (s += u), s && (a.push(s), o.push(f)), a.length === 1 && (f += n), {
    accumWidth: f,
    lines: a,
    linesWidths: o
  };
}
var Bu = "__zr_style_" + Math.round(Math.random() * 10), $r = {
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "#000",
  opacity: 1,
  blend: "source-over"
}, Ro = {
  style: {
    shadowBlur: !0,
    shadowOffsetX: !0,
    shadowOffsetY: !0,
    shadowColor: !0,
    opacity: !0
  }
};
$r[Bu] = !0;
var ch = ["z", "z2", "invisible"], v0 = ["invisible"], d0 = function(e) {
  k(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype._init = function(r) {
    for (var i = yt(r), n = 0; n < i.length; n++) {
      var a = i[n];
      a === "style" ? this.useStyle(r[a]) : e.prototype.attrKV.call(this, a, r[a]);
    }
    this.style || this.useStyle({});
  }, t.prototype.beforeBrush = function() {
  }, t.prototype.afterBrush = function() {
  }, t.prototype.innerBeforeBrush = function() {
  }, t.prototype.innerAfterBrush = function() {
  }, t.prototype.shouldBePainted = function(r, i, n, a) {
    var o = this.transform;
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && p0(this, r, i) || o && !o[0] && !o[3])
      return !1;
    if (n && this.__clipPaths) {
      for (var s = 0; s < this.__clipPaths.length; ++s)
        if (this.__clipPaths[s].isZeroArea())
          return !1;
    }
    if (a && this.parent)
      for (var u = this.parent; u; ) {
        if (u.ignore)
          return !1;
        u = u.parent;
      }
    return !0;
  }, t.prototype.contain = function(r, i) {
    return this.rectContain(r, i);
  }, t.prototype.traverse = function(r, i) {
    r.call(i, this);
  }, t.prototype.rectContain = function(r, i) {
    var n = this.transformCoordToLocal(r, i), a = this.getBoundingRect();
    return a.contain(n[0], n[1]);
  }, t.prototype.getPaintRect = function() {
    var r = this._paintRect;
    if (!this._paintRect || this.__dirty) {
      var i = this.transform, n = this.getBoundingRect(), a = this.style, o = a.shadowBlur || 0, s = a.shadowOffsetX || 0, u = a.shadowOffsetY || 0;
      r = this._paintRect || (this._paintRect = new st(0, 0, 0, 0)), i ? st.applyTransform(r, n, i) : r.copy(n), (o || s || u) && (r.width += o * 2 + Math.abs(s), r.height += o * 2 + Math.abs(u), r.x = Math.min(r.x, r.x + s - o), r.y = Math.min(r.y, r.y + u - o));
      var l = this.dirtyRectTolerance;
      r.isZero() || (r.x = Math.floor(r.x - l), r.y = Math.floor(r.y - l), r.width = Math.ceil(r.width + 1 + l * 2), r.height = Math.ceil(r.height + 1 + l * 2));
    }
    return r;
  }, t.prototype.setPrevPaintRect = function(r) {
    r ? (this._prevPaintRect = this._prevPaintRect || new st(0, 0, 0, 0), this._prevPaintRect.copy(r)) : this._prevPaintRect = null;
  }, t.prototype.getPrevPaintRect = function() {
    return this._prevPaintRect;
  }, t.prototype.animateStyle = function(r) {
    return this.animate("style", r);
  }, t.prototype.updateDuringAnimation = function(r) {
    r === "style" ? this.dirtyStyle() : this.markRedraw();
  }, t.prototype.attrKV = function(r, i) {
    r !== "style" ? e.prototype.attrKV.call(this, r, i) : this.style ? this.setStyle(i) : this.useStyle(i);
  }, t.prototype.setStyle = function(r, i) {
    return typeof r == "string" ? this.style[r] = i : O(this.style, r), this.dirtyStyle(), this;
  }, t.prototype.dirtyStyle = function(r) {
    r || this.markRedraw(), this.__dirty |= fn, this._rect && (this._rect = null);
  }, t.prototype.dirty = function() {
    this.dirtyStyle();
  }, t.prototype.styleChanged = function() {
    return !!(this.__dirty & fn);
  }, t.prototype.styleUpdated = function() {
    this.__dirty &= ~fn;
  }, t.prototype.createStyle = function(r) {
    return Mo($r, r);
  }, t.prototype.useStyle = function(r) {
    r[Bu] || (r = this.createStyle(r)), this.__inHover ? this.__hoverStyle = r : this.style = r, this.dirtyStyle();
  }, t.prototype.isStyleObject = function(r) {
    return r[Bu];
  }, t.prototype._innerSaveToNormal = function(r) {
    e.prototype._innerSaveToNormal.call(this, r);
    var i = this._normalState;
    r.style && !i.style && (i.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(r, i, ch);
  }, t.prototype._applyStateObj = function(r, i, n, a, o, s) {
    e.prototype._applyStateObj.call(this, r, i, n, a, o, s);
    var u = !(i && a), l;
    if (i && i.style ? o ? a ? l = i.style : (l = this._mergeStyle(this.createStyle(), n.style), this._mergeStyle(l, i.style)) : (l = this._mergeStyle(this.createStyle(), a ? this.style : n.style), this._mergeStyle(l, i.style)) : u && (l = n.style), l)
      if (o) {
        var f = this.style;
        if (this.style = this.createStyle(u ? {} : f), u)
          for (var h = yt(f), c = 0; c < h.length; c++) {
            var v = h[c];
            v in l && (l[v] = l[v], this.style[v] = f[v]);
          }
        for (var d = yt(l), c = 0; c < d.length; c++) {
          var v = d[c];
          this.style[v] = this.style[v];
        }
        this._transitionState(r, {
          style: l
        }, s, this.getAnimationStyleProps());
      } else
        this.useStyle(l);
    for (var _ = this.__inHover ? v0 : ch, c = 0; c < _.length; c++) {
      var v = _[c];
      i && i[v] != null ? this[v] = i[v] : u && n[v] != null && (this[v] = n[v]);
    }
  }, t.prototype._mergeStates = function(r) {
    for (var i = e.prototype._mergeStates.call(this, r), n, a = 0; a < r.length; a++) {
      var o = r[a];
      o.style && (n = n || {}, this._mergeStyle(n, o.style));
    }
    return n && (i.style = n), i;
  }, t.prototype._mergeStyle = function(r, i) {
    return O(r, i), r;
  }, t.prototype.getAnimationStyleProps = function() {
    return Ro;
  }, t.initDefaultProps = function() {
    var r = t.prototype;
    r.type = "displayable", r.invisible = !1, r.z = 0, r.z2 = 0, r.zlevel = 0, r.culling = !1, r.cursor = "pointer", r.rectHover = !1, r.incremental = !1, r._rect = null, r.dirtyRectTolerance = 0, r.__dirty = Jt | fn;
  }(), t;
}(Td), _s = new st(0, 0, 0, 0), ys = new st(0, 0, 0, 0);
function p0(e, t, r) {
  return _s.copy(e.getBoundingRect()), e.transform && _s.applyTransform(e.transform), ys.width = t, ys.height = r, !_s.intersect(ys);
}
const qn = d0;
var fe = Math.min, he = Math.max, ms = Math.sin, ws = Math.cos, Sr = Math.PI * 2, sa = Ni(), ua = Ni(), la = Ni();
function vh(e, t, r, i, n, a) {
  n[0] = fe(e, r), n[1] = fe(t, i), a[0] = he(e, r), a[1] = he(t, i);
}
var dh = [], ph = [];
function g0(e, t, r, i, n, a, o, s, u, l) {
  var f = vd, h = Ct, c = f(e, r, n, o, dh);
  u[0] = 1 / 0, u[1] = 1 / 0, l[0] = -1 / 0, l[1] = -1 / 0;
  for (var v = 0; v < c; v++) {
    var d = h(e, r, n, o, dh[v]);
    u[0] = fe(d, u[0]), l[0] = he(d, l[0]);
  }
  c = f(t, i, a, s, ph);
  for (var v = 0; v < c; v++) {
    var _ = h(t, i, a, s, ph[v]);
    u[1] = fe(_, u[1]), l[1] = he(_, l[1]);
  }
  u[0] = fe(e, u[0]), l[0] = he(e, l[0]), u[0] = fe(o, u[0]), l[0] = he(o, l[0]), u[1] = fe(t, u[1]), l[1] = he(t, l[1]), u[1] = fe(s, u[1]), l[1] = he(s, l[1]);
}
function _0(e, t, r, i, n, a, o, s) {
  var u = dd, l = Pt, f = he(fe(u(e, r, n), 1), 0), h = he(fe(u(t, i, a), 1), 0), c = l(e, r, n, f), v = l(t, i, a, h);
  o[0] = fe(e, n, c), o[1] = fe(t, a, v), s[0] = he(e, n, c), s[1] = he(t, a, v);
}
function y0(e, t, r, i, n, a, o, s, u) {
  var l = wi, f = Si, h = Math.abs(n - a);
  if (h % Sr < 1e-4 && h > 1e-4) {
    s[0] = e - r, s[1] = t - i, u[0] = e + r, u[1] = t + i;
    return;
  }
  if (sa[0] = ws(n) * r + e, sa[1] = ms(n) * i + t, ua[0] = ws(a) * r + e, ua[1] = ms(a) * i + t, l(s, sa, ua), f(u, sa, ua), n = n % Sr, n < 0 && (n = n + Sr), a = a % Sr, a < 0 && (a = a + Sr), n > a && !o ? a += Sr : n < a && o && (n += Sr), o) {
    var c = a;
    a = n, n = c;
  }
  for (var v = 0; v < a; v += Math.PI / 2)
    v > n && (la[0] = ws(v) * r + e, la[1] = ms(v) * i + t, l(s, la, s), f(u, la, u));
}
var et = {
  M: 1,
  L: 2,
  C: 3,
  Q: 4,
  A: 5,
  Z: 6,
  R: 7
}, br = [], xr = [], Te = [], Qe = [], Ce = [], De = [], Ss = Math.min, bs = Math.max, Tr = Math.cos, Cr = Math.sin, He = Math.abs, zu = Math.PI, rr = zu * 2, xs = typeof Float32Array < "u", Xi = [];
function Ts(e) {
  var t = Math.round(e / zu * 1e8) / 1e8;
  return t % 2 * zu;
}
function m0(e, t) {
  var r = Ts(e[0]);
  r < 0 && (r += rr);
  var i = r - e[0], n = e[1];
  n += i, !t && n - r >= rr ? n = r + rr : t && r - n >= rr ? n = r - rr : !t && r > n ? n = r + (rr - Ts(r - n)) : t && r < n && (n = r - (rr - Ts(n - r))), e[0] = r, e[1] = n;
}
var w0 = function() {
  function e(t) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = []);
  }
  return e.prototype.increaseVersion = function() {
    this._version++;
  }, e.prototype.getVersion = function() {
    return this._version;
  }, e.prototype.setScale = function(t, r, i) {
    i = i || 0, i > 0 && (this._ux = He(i / ro / t) || 0, this._uy = He(i / ro / r) || 0);
  }, e.prototype.setDPR = function(t) {
    this.dpr = t;
  }, e.prototype.setContext = function(t) {
    this._ctx = t;
  }, e.prototype.getContext = function() {
    return this._ctx;
  }, e.prototype.beginPath = function() {
    return this._ctx && this._ctx.beginPath(), this.reset(), this;
  }, e.prototype.reset = function() {
    this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++;
  }, e.prototype.moveTo = function(t, r) {
    return this._drawPendingPt(), this.addData(et.M, t, r), this._ctx && this._ctx.moveTo(t, r), this._x0 = t, this._y0 = r, this._xi = t, this._yi = r, this;
  }, e.prototype.lineTo = function(t, r) {
    var i = He(t - this._xi), n = He(r - this._yi), a = i > this._ux || n > this._uy;
    if (this.addData(et.L, t, r), this._ctx && a && this._ctx.lineTo(t, r), a)
      this._xi = t, this._yi = r, this._pendingPtDist = 0;
    else {
      var o = i * i + n * n;
      o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = r, this._pendingPtDist = o);
    }
    return this;
  }, e.prototype.bezierCurveTo = function(t, r, i, n, a, o) {
    return this._drawPendingPt(), this.addData(et.C, t, r, i, n, a, o), this._ctx && this._ctx.bezierCurveTo(t, r, i, n, a, o), this._xi = a, this._yi = o, this;
  }, e.prototype.quadraticCurveTo = function(t, r, i, n) {
    return this._drawPendingPt(), this.addData(et.Q, t, r, i, n), this._ctx && this._ctx.quadraticCurveTo(t, r, i, n), this._xi = i, this._yi = n, this;
  }, e.prototype.arc = function(t, r, i, n, a, o) {
    this._drawPendingPt(), Xi[0] = n, Xi[1] = a, m0(Xi, o), n = Xi[0], a = Xi[1];
    var s = a - n;
    return this.addData(et.A, t, r, i, i, n, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, r, i, n, a, o), this._xi = Tr(a) * i + t, this._yi = Cr(a) * i + r, this;
  }, e.prototype.arcTo = function(t, r, i, n, a) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, r, i, n, a), this;
  }, e.prototype.rect = function(t, r, i, n) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(t, r, i, n), this.addData(et.R, t, r, i, n), this;
  }, e.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(et.Z);
    var t = this._ctx, r = this._x0, i = this._y0;
    return t && t.closePath(), this._xi = r, this._yi = i, this;
  }, e.prototype.fill = function(t) {
    t && t.fill(), this.toStatic();
  }, e.prototype.stroke = function(t) {
    t && t.stroke(), this.toStatic();
  }, e.prototype.len = function() {
    return this._len;
  }, e.prototype.setData = function(t) {
    var r = t.length;
    !(this.data && this.data.length === r) && xs && (this.data = new Float32Array(r));
    for (var i = 0; i < r; i++)
      this.data[i] = t[i];
    this._len = r;
  }, e.prototype.appendPath = function(t) {
    t instanceof Array || (t = [t]);
    for (var r = t.length, i = 0, n = this._len, a = 0; a < r; a++)
      i += t[a].len();
    xs && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
    for (var a = 0; a < r; a++)
      for (var o = t[a].data, s = 0; s < o.length; s++)
        this.data[n++] = o[s];
    this._len = n;
  }, e.prototype.addData = function(t, r, i, n, a, o, s, u, l) {
    if (!!this._saveData) {
      var f = this.data;
      this._len + arguments.length > f.length && (this._expandData(), f = this.data);
      for (var h = 0; h < arguments.length; h++)
        f[this._len++] = arguments[h];
    }
  }, e.prototype._drawPendingPt = function() {
    this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0);
  }, e.prototype._expandData = function() {
    if (!(this.data instanceof Array)) {
      for (var t = [], r = 0; r < this._len; r++)
        t[r] = this.data[r];
      this.data = t;
    }
  }, e.prototype.toStatic = function() {
    if (!!this._saveData) {
      this._drawPendingPt();
      var t = this.data;
      t instanceof Array && (t.length = this._len, xs && this._len > 11 && (this.data = new Float32Array(t)));
    }
  }, e.prototype.getBoundingRect = function() {
    Te[0] = Te[1] = Ce[0] = Ce[1] = Number.MAX_VALUE, Qe[0] = Qe[1] = De[0] = De[1] = -Number.MAX_VALUE;
    var t = this.data, r = 0, i = 0, n = 0, a = 0, o;
    for (o = 0; o < this._len; ) {
      var s = t[o++], u = o === 1;
      switch (u && (r = t[o], i = t[o + 1], n = r, a = i), s) {
        case et.M:
          r = n = t[o++], i = a = t[o++], Ce[0] = n, Ce[1] = a, De[0] = n, De[1] = a;
          break;
        case et.L:
          vh(r, i, t[o], t[o + 1], Ce, De), r = t[o++], i = t[o++];
          break;
        case et.C:
          g0(r, i, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], Ce, De), r = t[o++], i = t[o++];
          break;
        case et.Q:
          _0(r, i, t[o++], t[o++], t[o], t[o + 1], Ce, De), r = t[o++], i = t[o++];
          break;
        case et.A:
          var l = t[o++], f = t[o++], h = t[o++], c = t[o++], v = t[o++], d = t[o++] + v;
          o += 1;
          var _ = !t[o++];
          u && (n = Tr(v) * h + l, a = Cr(v) * c + f), y0(l, f, h, c, v, d, _, Ce, De), r = Tr(d) * h + l, i = Cr(d) * c + f;
          break;
        case et.R:
          n = r = t[o++], a = i = t[o++];
          var p = t[o++], g = t[o++];
          vh(n, a, n + p, a + g, Ce, De);
          break;
        case et.Z:
          r = n, i = a;
          break;
      }
      wi(Te, Te, Ce), Si(Qe, Qe, De);
    }
    return o === 0 && (Te[0] = Te[1] = Qe[0] = Qe[1] = 0), new st(Te[0], Te[1], Qe[0] - Te[0], Qe[1] - Te[1]);
  }, e.prototype._calculateLength = function() {
    var t = this.data, r = this._len, i = this._ux, n = this._uy, a = 0, o = 0, s = 0, u = 0;
    this._pathSegLen || (this._pathSegLen = []);
    for (var l = this._pathSegLen, f = 0, h = 0, c = 0; c < r; ) {
      var v = t[c++], d = c === 1;
      d && (a = t[c], o = t[c + 1], s = a, u = o);
      var _ = -1;
      switch (v) {
        case et.M:
          a = s = t[c++], o = u = t[c++];
          break;
        case et.L: {
          var p = t[c++], g = t[c++], y = p - a, m = g - o;
          (He(y) > i || He(m) > n || c === r - 1) && (_ = Math.sqrt(y * y + m * m), a = p, o = g);
          break;
        }
        case et.C: {
          var w = t[c++], b = t[c++], p = t[c++], g = t[c++], S = t[c++], T = t[c++];
          _ = Oy(a, o, w, b, p, g, S, T, 10), a = S, o = T;
          break;
        }
        case et.Q: {
          var w = t[c++], b = t[c++], p = t[c++], g = t[c++];
          _ = By(a, o, w, b, p, g, 10), a = p, o = g;
          break;
        }
        case et.A:
          var x = t[c++], C = t[c++], E = t[c++], D = t[c++], M = t[c++], P = t[c++], L = P + M;
          c += 1, t[c++], d && (s = Tr(M) * E + x, u = Cr(M) * D + C), _ = bs(E, D) * Ss(rr, Math.abs(P)), a = Tr(L) * E + x, o = Cr(L) * D + C;
          break;
        case et.R: {
          s = a = t[c++], u = o = t[c++];
          var I = t[c++], R = t[c++];
          _ = I * 2 + R * 2;
          break;
        }
        case et.Z: {
          var y = s - a, m = u - o;
          _ = Math.sqrt(y * y + m * m), a = s, o = u;
          break;
        }
      }
      _ >= 0 && (l[h++] = _, f += _);
    }
    return this._pathLen = f, f;
  }, e.prototype.rebuildPath = function(t, r) {
    var i = this.data, n = this._ux, a = this._uy, o = this._len, s, u, l, f, h, c, v = r < 1, d, _, p = 0, g = 0, y, m = 0, w, b;
    if (v && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, _ = this._pathLen, y = r * _, !y))
      return;
    t:
      for (var S = 0; S < o; ) {
        var T = i[S++], x = S === 1;
        switch (x && (l = i[S], f = i[S + 1], s = l, u = f), T !== et.L && m > 0 && (t.lineTo(w, b), m = 0), T) {
          case et.M:
            s = l = i[S++], u = f = i[S++], t.moveTo(l, f);
            break;
          case et.L: {
            h = i[S++], c = i[S++];
            var C = He(h - l), E = He(c - f);
            if (C > n || E > a) {
              if (v) {
                var D = d[g++];
                if (p + D > y) {
                  var M = (y - p) / D;
                  t.lineTo(l * (1 - M) + h * M, f * (1 - M) + c * M);
                  break t;
                }
                p += D;
              }
              t.lineTo(h, c), l = h, f = c, m = 0;
            } else {
              var P = C * C + E * E;
              P > m && (w = h, b = c, m = P);
            }
            break;
          }
          case et.C: {
            var L = i[S++], I = i[S++], R = i[S++], $ = i[S++], B = i[S++], W = i[S++];
            if (v) {
              var D = d[g++];
              if (p + D > y) {
                var M = (y - p) / D;
                Ja(l, L, R, B, M, br), Ja(f, I, $, W, M, xr), t.bezierCurveTo(br[1], xr[1], br[2], xr[2], br[3], xr[3]);
                break t;
              }
              p += D;
            }
            t.bezierCurveTo(L, I, R, $, B, W), l = B, f = W;
            break;
          }
          case et.Q: {
            var L = i[S++], I = i[S++], R = i[S++], $ = i[S++];
            if (v) {
              var D = d[g++];
              if (p + D > y) {
                var M = (y - p) / D;
                ja(l, L, R, M, br), ja(f, I, $, M, xr), t.quadraticCurveTo(br[1], xr[1], br[2], xr[2]);
                break t;
              }
              p += D;
            }
            t.quadraticCurveTo(L, I, R, $), l = R, f = $;
            break;
          }
          case et.A:
            var K = i[S++], rt = i[S++], U = i[S++], ut = i[S++], wt = i[S++], Zt = i[S++], be = i[S++], te = !i[S++], Kt = U > ut ? U : ut, bt = He(U - ut) > 1e-3, pt = wt + Zt, V = !1;
            if (v) {
              var D = d[g++];
              p + D > y && (pt = wt + Zt * (y - p) / D, V = !0), p += D;
            }
            if (bt && t.ellipse ? t.ellipse(K, rt, U, ut, be, wt, pt, te) : t.arc(K, rt, Kt, wt, pt, te), V)
              break t;
            x && (s = Tr(wt) * U + K, u = Cr(wt) * ut + rt), l = Tr(pt) * U + K, f = Cr(pt) * ut + rt;
            break;
          case et.R:
            s = l = i[S], u = f = i[S + 1], h = i[S++], c = i[S++];
            var Y = i[S++], xe = i[S++];
            if (v) {
              var D = d[g++];
              if (p + D > y) {
                var St = y - p;
                t.moveTo(h, c), t.lineTo(h + Ss(St, Y), c), St -= Y, St > 0 && t.lineTo(h + Y, c + Ss(St, xe)), St -= xe, St > 0 && t.lineTo(h + bs(Y - St, 0), c + xe), St -= Y, St > 0 && t.lineTo(h, c + bs(xe - St, 0));
                break t;
              }
              p += D;
            }
            t.rect(h, c, Y, xe);
            break;
          case et.Z:
            if (v) {
              var D = d[g++];
              if (p + D > y) {
                var M = (y - p) / D;
                t.lineTo(l * (1 - M) + s * M, f * (1 - M) + u * M);
                break t;
              }
              p += D;
            }
            t.closePath(), l = s, f = u;
        }
      }
  }, e.prototype.clone = function() {
    var t = new e(), r = this.data;
    return t.data = r.slice ? r.slice() : Array.prototype.slice.call(r), t._len = this._len, t;
  }, e.CMD = et, e.initDefaultProps = function() {
    var t = e.prototype;
    t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0;
  }(), e;
}();
const Kr = w0;
function si(e, t, r, i, n, a, o) {
  if (n === 0)
    return !1;
  var s = n, u = 0, l = e;
  if (o > t + s && o > i + s || o < t - s && o < i - s || a > e + s && a > r + s || a < e - s && a < r - s)
    return !1;
  if (e !== r)
    u = (t - i) / (e - r), l = (e * i - r * t) / (e - r);
  else
    return Math.abs(a - e) <= s / 2;
  var f = u * a - o + l, h = f * f / (u * u + 1);
  return h <= s / 2 * s / 2;
}
function S0(e, t, r, i, n, a, o, s, u, l, f) {
  if (u === 0)
    return !1;
  var h = u;
  if (f > t + h && f > i + h && f > a + h && f > s + h || f < t - h && f < i - h && f < a - h && f < s - h || l > e + h && l > r + h && l > n + h && l > o + h || l < e - h && l < r - h && l < n - h && l < o - h)
    return !1;
  var c = Ry(e, t, r, i, n, a, o, s, l, f, null);
  return c <= h / 2;
}
function b0(e, t, r, i, n, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  if (u > t + l && u > i + l && u > a + l || u < t - l && u < i - l && u < a - l || s > e + l && s > r + l && s > n + l || s < e - l && s < r - l && s < n - l)
    return !1;
  var f = ky(e, t, r, i, n, a, s, u, null);
  return f <= l / 2;
}
var gh = Math.PI * 2;
function fa(e) {
  return e %= gh, e < 0 && (e += gh), e;
}
var qi = Math.PI * 2;
function x0(e, t, r, i, n, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  s -= e, u -= t;
  var f = Math.sqrt(s * s + u * u);
  if (f - l > r || f + l < r)
    return !1;
  if (Math.abs(i - n) % qi < 1e-4)
    return !0;
  if (a) {
    var h = i;
    i = fa(n), n = fa(h);
  } else
    i = fa(i), n = fa(n);
  i > n && (n += qi);
  var c = Math.atan2(u, s);
  return c < 0 && (c += qi), c >= i && c <= n || c + qi >= i && c + qi <= n;
}
function Dr(e, t, r, i, n, a) {
  if (a > t && a > i || a < t && a < i || i === t)
    return 0;
  var o = (a - t) / (i - t), s = i < t ? 1 : -1;
  (o === 1 || o === 0) && (s = i < t ? 0.5 : -0.5);
  var u = o * (r - e) + e;
  return u === n ? 1 / 0 : u > n ? s : 0;
}
var Je = Kr.CMD, Ar = Math.PI * 2, T0 = 1e-4;
function C0(e, t) {
  return Math.abs(e - t) < T0;
}
var kt = [-1, -1, -1], ue = [-1, -1];
function D0() {
  var e = ue[0];
  ue[0] = ue[1], ue[1] = e;
}
function A0(e, t, r, i, n, a, o, s, u, l) {
  if (l > t && l > i && l > a && l > s || l < t && l < i && l < a && l < s)
    return 0;
  var f = cd(t, i, a, s, l, kt);
  if (f === 0)
    return 0;
  for (var h = 0, c = -1, v = void 0, d = void 0, _ = 0; _ < f; _++) {
    var p = kt[_], g = p === 0 || p === 1 ? 0.5 : 1, y = Ct(e, r, n, o, p);
    y < u || (c < 0 && (c = vd(t, i, a, s, ue), ue[1] < ue[0] && c > 1 && D0(), v = Ct(t, i, a, s, ue[0]), c > 1 && (d = Ct(t, i, a, s, ue[1]))), c === 2 ? p < ue[0] ? h += v < t ? g : -g : p < ue[1] ? h += d < v ? g : -g : h += s < d ? g : -g : p < ue[0] ? h += v < t ? g : -g : h += s < v ? g : -g);
  }
  return h;
}
function E0(e, t, r, i, n, a, o, s) {
  if (s > t && s > i && s > a || s < t && s < i && s < a)
    return 0;
  var u = Ny(t, i, a, s, kt);
  if (u === 0)
    return 0;
  var l = dd(t, i, a);
  if (l >= 0 && l <= 1) {
    for (var f = 0, h = Pt(t, i, a, l), c = 0; c < u; c++) {
      var v = kt[c] === 0 || kt[c] === 1 ? 0.5 : 1, d = Pt(e, r, n, kt[c]);
      d < o || (kt[c] < l ? f += h < t ? v : -v : f += a < h ? v : -v);
    }
    return f;
  } else {
    var v = kt[0] === 0 || kt[0] === 1 ? 0.5 : 1, d = Pt(e, r, n, kt[0]);
    return d < o ? 0 : a < t ? v : -v;
  }
}
function M0(e, t, r, i, n, a, o, s) {
  if (s -= t, s > r || s < -r)
    return 0;
  var u = Math.sqrt(r * r - s * s);
  kt[0] = -u, kt[1] = u;
  var l = Math.abs(i - n);
  if (l < 1e-4)
    return 0;
  if (l >= Ar - 1e-4) {
    i = 0, n = Ar;
    var f = a ? 1 : -1;
    return o >= kt[0] + e && o <= kt[1] + e ? f : 0;
  }
  if (i > n) {
    var h = i;
    i = n, n = h;
  }
  i < 0 && (i += Ar, n += Ar);
  for (var c = 0, v = 0; v < 2; v++) {
    var d = kt[v];
    if (d + e > o) {
      var _ = Math.atan2(s, d), f = a ? 1 : -1;
      _ < 0 && (_ = Ar + _), (_ >= i && _ <= n || _ + Ar >= i && _ + Ar <= n) && (_ > Math.PI / 2 && _ < Math.PI * 1.5 && (f = -f), c += f);
    }
  }
  return c;
}
function Hd(e, t, r, i, n) {
  for (var a = e.data, o = e.len(), s = 0, u = 0, l = 0, f = 0, h = 0, c, v, d = 0; d < o; ) {
    var _ = a[d++], p = d === 1;
    switch (_ === Je.M && d > 1 && (r || (s += Dr(u, l, f, h, i, n))), p && (u = a[d], l = a[d + 1], f = u, h = l), _) {
      case Je.M:
        f = a[d++], h = a[d++], u = f, l = h;
        break;
      case Je.L:
        if (r) {
          if (si(u, l, a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += Dr(u, l, a[d], a[d + 1], i, n) || 0;
        u = a[d++], l = a[d++];
        break;
      case Je.C:
        if (r) {
          if (S0(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += A0(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], i, n) || 0;
        u = a[d++], l = a[d++];
        break;
      case Je.Q:
        if (r) {
          if (b0(u, l, a[d++], a[d++], a[d], a[d + 1], t, i, n))
            return !0;
        } else
          s += E0(u, l, a[d++], a[d++], a[d], a[d + 1], i, n) || 0;
        u = a[d++], l = a[d++];
        break;
      case Je.A:
        var g = a[d++], y = a[d++], m = a[d++], w = a[d++], b = a[d++], S = a[d++];
        d += 1;
        var T = !!(1 - a[d++]);
        c = Math.cos(b) * m + g, v = Math.sin(b) * w + y, p ? (f = c, h = v) : s += Dr(u, l, c, v, i, n);
        var x = (i - g) * w / m + g;
        if (r) {
          if (x0(g, y, w, b, b + S, T, t, x, n))
            return !0;
        } else
          s += M0(g, y, w, b, b + S, T, x, n);
        u = Math.cos(b + S) * m + g, l = Math.sin(b + S) * w + y;
        break;
      case Je.R:
        f = u = a[d++], h = l = a[d++];
        var C = a[d++], E = a[d++];
        if (c = f + C, v = h + E, r) {
          if (si(f, h, c, h, t, i, n) || si(c, h, c, v, t, i, n) || si(c, v, f, v, t, i, n) || si(f, v, f, h, t, i, n))
            return !0;
        } else
          s += Dr(c, h, c, v, i, n), s += Dr(f, v, f, h, i, n);
        break;
      case Je.Z:
        if (r) {
          if (si(u, l, f, h, t, i, n))
            return !0;
        } else
          s += Dr(u, l, f, h, i, n);
        u = f, l = h;
        break;
    }
  }
  return !r && !C0(l, h) && (s += Dr(u, l, f, h, i, n) || 0), s !== 0;
}
function P0(e, t, r) {
  return Hd(e, 0, !1, t, r);
}
function L0(e, t, r, i) {
  return Hd(e, t, !0, r, i);
}
var Gd = ct({
  fill: "#000",
  stroke: null,
  strokePercent: 1,
  fillOpacity: 1,
  strokeOpacity: 1,
  lineDashOffset: 0,
  lineWidth: 1,
  lineCap: "butt",
  miterLimit: 10,
  strokeNoScale: !1,
  strokeFirst: !1
}, $r), I0 = {
  style: ct({
    fill: !0,
    stroke: !0,
    strokePercent: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineDashOffset: !0,
    lineWidth: !0,
    miterLimit: !0
  }, Ro.style)
}, Cs = In.concat([
  "invisible",
  "culling",
  "z",
  "z2",
  "zlevel",
  "parent"
]), R0 = function(e) {
  k(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.update = function() {
    var r = this;
    e.prototype.update.call(this);
    var i = this.style;
    if (i.decal) {
      var n = this._decalEl = this._decalEl || new t();
      n.buildPath === t.prototype.buildPath && (n.buildPath = function(u) {
        r.buildPath(u, r.shape);
      }), n.silent = !0;
      var a = n.style;
      for (var o in i)
        a[o] !== i[o] && (a[o] = i[o]);
      a.fill = i.fill ? i.decal : null, a.decal = null, a.shadowColor = null, i.strokeFirst && (a.stroke = null);
      for (var s = 0; s < Cs.length; ++s)
        n[Cs[s]] = this[Cs[s]];
      n.__dirty |= Jt;
    } else
      this._decalEl && (this._decalEl = null);
  }, t.prototype.getDecalElement = function() {
    return this._decalEl;
  }, t.prototype._init = function(r) {
    var i = yt(r);
    this.shape = this.getDefaultShape();
    var n = this.getDefaultStyle();
    n && this.useStyle(n);
    for (var a = 0; a < i.length; a++) {
      var o = i[a], s = r[o];
      o === "style" ? this.style ? O(this.style, s) : this.useStyle(s) : o === "shape" ? O(this.shape, s) : e.prototype.attrKV.call(this, o, s);
    }
    this.style || this.useStyle({});
  }, t.prototype.getDefaultStyle = function() {
    return null;
  }, t.prototype.getDefaultShape = function() {
    return {};
  }, t.prototype.canBeInsideText = function() {
    return this.hasFill();
  }, t.prototype.getInsideTextFill = function() {
    var r = this.style.fill;
    if (r !== "none") {
      if (z(r)) {
        var i = eo(r, 0);
        return i > 0.5 ? Iu : i > 0.2 ? sm : Ru;
      } else if (r)
        return Ru;
    }
    return Iu;
  }, t.prototype.getInsideTextStroke = function(r) {
    var i = this.style.fill;
    if (z(i)) {
      var n = this.__zr, a = !!(n && n.isDarkMode()), o = eo(r, 0) < Lu;
      if (a === o)
        return i;
    }
  }, t.prototype.buildPath = function(r, i, n) {
  }, t.prototype.pathUpdated = function() {
    this.__dirty &= ~yi;
  }, t.prototype.getUpdatedPathProxy = function(r) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, r), this.path;
  }, t.prototype.createPathProxy = function() {
    this.path = new Kr(!1);
  }, t.prototype.hasStroke = function() {
    var r = this.style, i = r.stroke;
    return !(i == null || i === "none" || !(r.lineWidth > 0));
  }, t.prototype.hasFill = function() {
    var r = this.style, i = r.fill;
    return i != null && i !== "none";
  }, t.prototype.getBoundingRect = function() {
    var r = this._rect, i = this.style, n = !r;
    if (n) {
      var a = !1;
      this.path || (a = !0, this.createPathProxy());
      var o = this.path;
      (a || this.__dirty & yi) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), r = o.getBoundingRect();
    }
    if (this._rect = r, this.hasStroke() && this.path && this.path.len() > 0) {
      var s = this._rectStroke || (this._rectStroke = r.clone());
      if (this.__dirty || n) {
        s.copy(r);
        var u = i.strokeNoScale ? this.getLineScale() : 1, l = i.lineWidth;
        if (!this.hasFill()) {
          var f = this.strokeContainThreshold;
          l = Math.max(l, f == null ? 4 : f);
        }
        u > 1e-10 && (s.width += l / u, s.height += l / u, s.x -= l / u / 2, s.y -= l / u / 2);
      }
      return s;
    }
    return r;
  }, t.prototype.contain = function(r, i) {
    var n = this.transformCoordToLocal(r, i), a = this.getBoundingRect(), o = this.style;
    if (r = n[0], i = n[1], a.contain(r, i)) {
      var s = this.path;
      if (this.hasStroke()) {
        var u = o.lineWidth, l = o.strokeNoScale ? this.getLineScale() : 1;
        if (l > 1e-10 && (this.hasFill() || (u = Math.max(u, this.strokeContainThreshold)), L0(s, u / l, r, i)))
          return !0;
      }
      if (this.hasFill())
        return P0(s, r, i);
    }
    return !1;
  }, t.prototype.dirtyShape = function() {
    this.__dirty |= yi, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
  }, t.prototype.dirty = function() {
    this.dirtyStyle(), this.dirtyShape();
  }, t.prototype.animateShape = function(r) {
    return this.animate("shape", r);
  }, t.prototype.updateDuringAnimation = function(r) {
    r === "style" ? this.dirtyStyle() : r === "shape" ? this.dirtyShape() : this.markRedraw();
  }, t.prototype.attrKV = function(r, i) {
    r === "shape" ? this.setShape(i) : e.prototype.attrKV.call(this, r, i);
  }, t.prototype.setShape = function(r, i) {
    var n = this.shape;
    return n || (n = this.shape = {}), typeof r == "string" ? n[r] = i : O(n, r), this.dirtyShape(), this;
  }, t.prototype.shapeChanged = function() {
    return !!(this.__dirty & yi);
  }, t.prototype.createStyle = function(r) {
    return Mo(Gd, r);
  }, t.prototype._innerSaveToNormal = function(r) {
    e.prototype._innerSaveToNormal.call(this, r);
    var i = this._normalState;
    r.shape && !i.shape && (i.shape = O({}, this.shape));
  }, t.prototype._applyStateObj = function(r, i, n, a, o, s) {
    e.prototype._applyStateObj.call(this, r, i, n, a, o, s);
    var u = !(i && a), l;
    if (i && i.shape ? o ? a ? l = i.shape : (l = O({}, n.shape), O(l, i.shape)) : (l = O({}, a ? this.shape : n.shape), O(l, i.shape)) : u && (l = n.shape), l)
      if (o) {
        this.shape = O({}, this.shape);
        for (var f = {}, h = yt(l), c = 0; c < h.length; c++) {
          var v = h[c];
          typeof l[v] == "object" ? this.shape[v] = l[v] : f[v] = l[v];
        }
        this._transitionState(r, {
          shape: f
        }, s);
      } else
        this.shape = l, this.dirtyShape();
  }, t.prototype._mergeStates = function(r) {
    for (var i = e.prototype._mergeStates.call(this, r), n, a = 0; a < r.length; a++) {
      var o = r[a];
      o.shape && (n = n || {}, this._mergeStyle(n, o.shape));
    }
    return n && (i.shape = n), i;
  }, t.prototype.getAnimationStyleProps = function() {
    return I0;
  }, t.prototype.isZeroArea = function() {
    return !1;
  }, t.extend = function(r) {
    var i = function(a) {
      k(o, a);
      function o(s) {
        var u = a.call(this, s) || this;
        return r.init && r.init.call(u, s), u;
      }
      return o.prototype.getDefaultStyle = function() {
        return j(r.style);
      }, o.prototype.getDefaultShape = function() {
        return j(r.shape);
      }, o;
    }(t);
    for (var n in r)
      typeof r[n] == "function" && (i.prototype[n] = r[n]);
    return i;
  }, t.initDefaultProps = function() {
    var r = t.prototype;
    r.type = "path", r.strokeContainThreshold = 5, r.segmentIgnoreThreshold = 0, r.subPixelOptimize = !1, r.autoBatch = !1, r.__dirty = Jt | fn | yi;
  }(), t;
}(qn);
const it = R0;
var O0 = ct({
  strokeFirst: !0,
  font: qr,
  x: 0,
  y: 0,
  textAlign: "left",
  textBaseline: "top",
  miterLimit: 2
}, Gd), Wd = function(e) {
  k(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.hasStroke = function() {
    var r = this.style, i = r.stroke;
    return i != null && i !== "none" && r.lineWidth > 0;
  }, t.prototype.hasFill = function() {
    var r = this.style, i = r.fill;
    return i != null && i !== "none";
  }, t.prototype.createStyle = function(r) {
    return Mo(O0, r);
  }, t.prototype.setBoundingRect = function(r) {
    this._rect = r;
  }, t.prototype.getBoundingRect = function() {
    var r = this.style;
    if (!this._rect) {
      var i = r.text;
      i != null ? i += "" : i = "";
      var n = bd(i, r.font, r.textAlign, r.textBaseline);
      if (n.x += r.x || 0, n.y += r.y || 0, this.hasStroke()) {
        var a = r.lineWidth;
        n.x -= a / 2, n.y -= a / 2, n.width += a, n.height += a;
      }
      this._rect = n;
    }
    return this._rect;
  }, t.initDefaultProps = function() {
    var r = t.prototype;
    r.dirtyRectTolerance = 10;
  }(), t;
}(qn);
Wd.prototype.type = "tspan";
const Fu = Wd;
var N0 = ct({
  x: 0,
  y: 0
}, $r), k0 = {
  style: ct({
    x: !0,
    y: !0,
    width: !0,
    height: !0,
    sx: !0,
    sy: !0,
    sWidth: !0,
    sHeight: !0
  }, Ro.style)
};
function B0(e) {
  return !!(e && typeof e != "string" && e.width && e.height);
}
var $d = function(e) {
  k(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.createStyle = function(r) {
    return Mo(N0, r);
  }, t.prototype._getSize = function(r) {
    var i = this.style, n = i[r];
    if (n != null)
      return n;
    var a = B0(i.image) ? i.image : this.__image;
    if (!a)
      return 0;
    var o = r === "width" ? "height" : "width", s = i[o];
    return s == null ? a[r] : a[r] / a[o] * s;
  }, t.prototype.getWidth = function() {
    return this._getSize("width");
  }, t.prototype.getHeight = function() {
    return this._getSize("height");
  }, t.prototype.getAnimationStyleProps = function() {
    return k0;
  }, t.prototype.getBoundingRect = function() {
    var r = this.style;
    return this._rect || (this._rect = new st(r.x || 0, r.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, t;
}(qn);
$d.prototype.type = "image";
const ki = $d;
function z0(e, t) {
  var r = t.x, i = t.y, n = t.width, a = t.height, o = t.r, s, u, l, f;
  n < 0 && (r = r + n, n = -n), a < 0 && (i = i + a, a = -a), typeof o == "number" ? s = u = l = f = o : o instanceof Array ? o.length === 1 ? s = u = l = f = o[0] : o.length === 2 ? (s = l = o[0], u = f = o[1]) : o.length === 3 ? (s = o[0], u = f = o[1], l = o[2]) : (s = o[0], u = o[1], l = o[2], f = o[3]) : s = u = l = f = 0;
  var h;
  s + u > n && (h = s + u, s *= n / h, u *= n / h), l + f > n && (h = l + f, l *= n / h, f *= n / h), u + l > a && (h = u + l, u *= a / h, l *= a / h), s + f > a && (h = s + f, s *= a / h, f *= a / h), e.moveTo(r + s, i), e.lineTo(r + n - u, i), u !== 0 && e.arc(r + n - u, i + u, u, -Math.PI / 2, 0), e.lineTo(r + n, i + a - l), l !== 0 && e.arc(r + n - l, i + a - l, l, 0, Math.PI / 2), e.lineTo(r + f, i + a), f !== 0 && e.arc(r + f, i + a - f, f, Math.PI / 2, Math.PI), e.lineTo(r, i + s), s !== 0 && e.arc(r + s, i + s, s, Math.PI, Math.PI * 1.5);
}
var xi = Math.round;
function Ud(e, t, r) {
  if (!!t) {
    var i = t.x1, n = t.x2, a = t.y1, o = t.y2;
    e.x1 = i, e.x2 = n, e.y1 = a, e.y2 = o;
    var s = r && r.lineWidth;
    return s && (xi(i * 2) === xi(n * 2) && (e.x1 = e.x2 = Fr(i, s, !0)), xi(a * 2) === xi(o * 2) && (e.y1 = e.y2 = Fr(a, s, !0))), e;
  }
}
function Yd(e, t, r) {
  if (!!t) {
    var i = t.x, n = t.y, a = t.width, o = t.height;
    e.x = i, e.y = n, e.width = a, e.height = o;
    var s = r && r.lineWidth;
    return s && (e.x = Fr(i, s, !0), e.y = Fr(n, s, !0), e.width = Math.max(Fr(i + a, s, !1) - e.x, a === 0 ? 0 : 1), e.height = Math.max(Fr(n + o, s, !1) - e.y, o === 0 ? 0 : 1)), e;
  }
}
function Fr(e, t, r) {
  if (!t)
    return e;
  var i = xi(e * 2);
  return (i + xi(t)) % 2 === 0 ? i / 2 : (i + (r ? 1 : -1)) / 2;
}
var F0 = function() {
  function e() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  }
  return e;
}(), V0 = {}, Xd = function(e) {
  k(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new F0();
  }, t.prototype.buildPath = function(r, i) {
    var n, a, o, s;
    if (this.subPixelOptimize) {
      var u = Yd(V0, i, this.style);
      n = u.x, a = u.y, o = u.width, s = u.height, u.r = i.r, i = u;
    } else
      n = i.x, a = i.y, o = i.width, s = i.height;
    i.r ? z0(r, i) : r.rect(n, a, o, s);
  }, t.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, t;
}(it);
Xd.prototype.type = "rect";
const Dt = Xd;
var _h = {
  fill: "#000"
}, yh = 2, H0 = {
  style: ct({
    fill: !0,
    stroke: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineWidth: !0,
    fontSize: !0,
    lineHeight: !0,
    width: !0,
    height: !0,
    textShadowColor: !0,
    textShadowBlur: !0,
    textShadowOffsetX: !0,
    textShadowOffsetY: !0,
    backgroundColor: !0,
    padding: !0,
    borderColor: !0,
    borderWidth: !0,
    borderRadius: !0
  }, Ro.style)
}, qd = function(e) {
  k(t, e);
  function t(r) {
    var i = e.call(this) || this;
    return i.type = "text", i._children = [], i._defaultStyle = _h, i.attr(r), i;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.update = function() {
    e.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
    for (var r = 0; r < this._children.length; r++) {
      var i = this._children[r];
      i.zlevel = this.zlevel, i.z = this.z, i.z2 = this.z2, i.culling = this.culling, i.cursor = this.cursor, i.invisible = this.invisible;
    }
  }, t.prototype.updateTransform = function() {
    var r = this.innerTransformable;
    r ? (r.updateTransform(), r.transform && (this.transform = r.transform)) : e.prototype.updateTransform.call(this);
  }, t.prototype.getLocalTransform = function(r) {
    var i = this.innerTransformable;
    return i ? i.getLocalTransform(r) : e.prototype.getLocalTransform.call(this, r);
  }, t.prototype.getComputedTransform = function() {
    return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), e.prototype.getComputedTransform.call(this);
  }, t.prototype._updateSubTexts = function() {
    this._childCursor = 0, Y0(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
  }, t.prototype.addSelfToZr = function(r) {
    e.prototype.addSelfToZr.call(this, r);
    for (var i = 0; i < this._children.length; i++)
      this._children[i].__zr = r;
  }, t.prototype.removeSelfFromZr = function(r) {
    e.prototype.removeSelfFromZr.call(this, r);
    for (var i = 0; i < this._children.length; i++)
      this._children[i].__zr = null;
  }, t.prototype.getBoundingRect = function() {
    if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
      for (var r = new st(0, 0, 0, 0), i = this._children, n = [], a = null, o = 0; o < i.length; o++) {
        var s = i[o], u = s.getBoundingRect(), l = s.getLocalTransform(n);
        l ? (r.copy(u), r.applyTransform(l), a = a || r.clone(), a.union(r)) : (a = a || u.clone(), a.union(u));
      }
      this._rect = a || r;
    }
    return this._rect;
  }, t.prototype.setDefaultTextStyle = function(r) {
    this._defaultStyle = r || _h;
  }, t.prototype.setTextContent = function(r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Can't attach text on another text");
  }, t.prototype._mergeStyle = function(r, i) {
    if (!i)
      return r;
    var n = i.rich, a = r.rich || n && {};
    return O(r, i), n && a ? (this._mergeRich(a, n), r.rich = a) : a && (r.rich = a), r;
  }, t.prototype._mergeRich = function(r, i) {
    for (var n = yt(i), a = 0; a < n.length; a++) {
      var o = n[a];
      r[o] = r[o] || {}, O(r[o], i[o]);
    }
  }, t.prototype.getAnimationStyleProps = function() {
    return H0;
  }, t.prototype._getOrCreateChild = function(r) {
    var i = this._children[this._childCursor];
    return (!i || !(i instanceof r)) && (i = new r()), this._children[this._childCursor++] = i, i.__zr = this.__zr, i.parent = this, i;
  }, t.prototype._updatePlainTexts = function() {
    var r = this.style, i = r.font || qr, n = r.padding, a = Ch(r), o = o0(a, r), s = Ds(r), u = !!r.backgroundColor, l = o.outerHeight, f = o.outerWidth, h = o.contentWidth, c = o.lines, v = o.lineHeight, d = this._defaultStyle, _ = r.x || 0, p = r.y || 0, g = r.align || d.align || "left", y = r.verticalAlign || d.verticalAlign || "top", m = _, w = mi(p, o.contentHeight, y);
    if (s || n) {
      var b = cn(_, f, g), S = mi(p, l, y);
      s && this._renderBackground(r, r, b, S, f, l);
    }
    w += v / 2, n && (m = Th(_, g, n), y === "top" ? w += n[0] : y === "bottom" && (w -= n[2]));
    for (var T = 0, x = !1, C = xh("fill" in r ? r.fill : (x = !0, d.fill)), E = bh("stroke" in r ? r.stroke : !u && (!d.autoStroke || x) ? (T = yh, d.stroke) : null), D = r.textShadowBlur > 0, M = r.width != null && (r.overflow === "truncate" || r.overflow === "break" || r.overflow === "breakAll"), P = o.calculatedLineHeight, L = 0; L < c.length; L++) {
      var I = this._getOrCreateChild(Fu), R = I.createStyle();
      I.useStyle(R), R.text = c[L], R.x = m, R.y = w, g && (R.textAlign = g), R.textBaseline = "middle", R.opacity = r.opacity, R.strokeFirst = !0, D && (R.shadowBlur = r.textShadowBlur || 0, R.shadowColor = r.textShadowColor || "transparent", R.shadowOffsetX = r.textShadowOffsetX || 0, R.shadowOffsetY = r.textShadowOffsetY || 0), R.stroke = E, R.fill = C, E && (R.lineWidth = r.lineWidth || T, R.lineDash = r.lineDash, R.lineDashOffset = r.lineDashOffset || 0), R.font = i, wh(R, r), w += v, M && I.setBoundingRect(new st(cn(R.x, r.width, R.textAlign), mi(R.y, P, R.textBaseline), h, P));
    }
  }, t.prototype._updateRichTexts = function() {
    var r = this.style, i = Ch(r), n = l0(i, r), a = n.width, o = n.outerWidth, s = n.outerHeight, u = r.padding, l = r.x || 0, f = r.y || 0, h = this._defaultStyle, c = r.align || h.align, v = r.verticalAlign || h.verticalAlign, d = cn(l, o, c), _ = mi(f, s, v), p = d, g = _;
    u && (p += u[3], g += u[0]);
    var y = p + a;
    Ds(r) && this._renderBackground(r, r, d, _, o, s);
    for (var m = !!r.backgroundColor, w = 0; w < n.lines.length; w++) {
      for (var b = n.lines[w], S = b.tokens, T = S.length, x = b.lineHeight, C = b.width, E = 0, D = p, M = y, P = T - 1, L = void 0; E < T && (L = S[E], !L.align || L.align === "left"); )
        this._placeToken(L, r, x, g, D, "left", m), C -= L.width, D += L.width, E++;
      for (; P >= 0 && (L = S[P], L.align === "right"); )
        this._placeToken(L, r, x, g, M, "right", m), C -= L.width, M -= L.width, P--;
      for (D += (a - (D - p) - (y - M) - C) / 2; E <= P; )
        L = S[E], this._placeToken(L, r, x, g, D + L.width / 2, "center", m), D += L.width, E++;
      g += x;
    }
  }, t.prototype._placeToken = function(r, i, n, a, o, s, u) {
    var l = i.rich[r.styleName] || {};
    l.text = r.text;
    var f = r.verticalAlign, h = a + n / 2;
    f === "top" ? h = a + r.height / 2 : f === "bottom" && (h = a + n - r.height / 2);
    var c = !r.isLineHolder && Ds(l);
    c && this._renderBackground(l, i, s === "right" ? o - r.width : s === "center" ? o - r.width / 2 : o, h - r.height / 2, r.width, r.height);
    var v = !!l.backgroundColor, d = r.textPadding;
    d && (o = Th(o, s, d), h -= r.height / 2 - d[0] - r.innerHeight / 2);
    var _ = this._getOrCreateChild(Fu), p = _.createStyle();
    _.useStyle(p);
    var g = this._defaultStyle, y = !1, m = 0, w = xh("fill" in l ? l.fill : "fill" in i ? i.fill : (y = !0, g.fill)), b = bh("stroke" in l ? l.stroke : "stroke" in i ? i.stroke : !v && !u && (!g.autoStroke || y) ? (m = yh, g.stroke) : null), S = l.textShadowBlur > 0 || i.textShadowBlur > 0;
    p.text = r.text, p.x = o, p.y = h, S && (p.shadowBlur = l.textShadowBlur || i.textShadowBlur || 0, p.shadowColor = l.textShadowColor || i.textShadowColor || "transparent", p.shadowOffsetX = l.textShadowOffsetX || i.textShadowOffsetX || 0, p.shadowOffsetY = l.textShadowOffsetY || i.textShadowOffsetY || 0), p.textAlign = s, p.textBaseline = "middle", p.font = r.font || qr, p.opacity = yn(l.opacity, i.opacity, 1), wh(p, l), b && (p.lineWidth = yn(l.lineWidth, i.lineWidth, m), p.lineDash = tt(l.lineDash, i.lineDash), p.lineDashOffset = i.lineDashOffset || 0, p.stroke = b), w && (p.fill = w);
    var T = r.contentWidth, x = r.contentHeight;
    _.setBoundingRect(new st(cn(p.x, T, p.textAlign), mi(p.y, x, p.textBaseline), T, x));
  }, t.prototype._renderBackground = function(r, i, n, a, o, s) {
    var u = r.backgroundColor, l = r.borderWidth, f = r.borderColor, h = u && u.image, c = u && !h, v = r.borderRadius, d = this, _, p;
    if (c || r.lineHeight || l && f) {
      _ = this._getOrCreateChild(Dt), _.useStyle(_.createStyle()), _.style.fill = null;
      var g = _.shape;
      g.x = n, g.y = a, g.width = o, g.height = s, g.r = v, _.dirtyShape();
    }
    if (c) {
      var y = _.style;
      y.fill = u || null, y.fillOpacity = tt(r.fillOpacity, 1);
    } else if (h) {
      p = this._getOrCreateChild(ki), p.onload = function() {
        d.dirtyStyle();
      };
      var m = p.style;
      m.image = u.image, m.x = n, m.y = a, m.width = o, m.height = s;
    }
    if (l && f) {
      var y = _.style;
      y.lineWidth = l, y.stroke = f, y.strokeOpacity = tt(r.strokeOpacity, 1), y.lineDash = r.borderDash, y.lineDashOffset = r.borderDashOffset || 0, _.strokeContainThreshold = 0, _.hasFill() && _.hasStroke() && (y.strokeFirst = !0, y.lineWidth *= 2);
    }
    var w = (_ || p).style;
    w.shadowBlur = r.shadowBlur || 0, w.shadowColor = r.shadowColor || "transparent", w.shadowOffsetX = r.shadowOffsetX || 0, w.shadowOffsetY = r.shadowOffsetY || 0, w.opacity = yn(r.opacity, i.opacity, 1);
  }, t.makeFont = function(r) {
    var i = "";
    return U0(r) && (i = [
      r.fontStyle,
      r.fontWeight,
      $0(r.fontSize),
      r.fontFamily || "sans-serif"
    ].join(" ")), i && Le(i) || r.textFont || r.font;
  }, t;
}(qn), G0 = { left: !0, right: 1, center: 1 }, W0 = { top: 1, bottom: 1, middle: 1 }, mh = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function $0(e) {
  return typeof e == "string" && (e.indexOf("px") !== -1 || e.indexOf("rem") !== -1 || e.indexOf("em") !== -1) ? e : isNaN(+e) ? ml + "px" : e + "px";
}
function wh(e, t) {
  for (var r = 0; r < mh.length; r++) {
    var i = mh[r], n = t[i];
    n != null && (e[i] = n);
  }
}
function U0(e) {
  return e.fontSize != null || e.fontFamily || e.fontWeight;
}
function Y0(e) {
  return Sh(e), A(e.rich, Sh), e;
}
function Sh(e) {
  if (e) {
    e.font = qd.makeFont(e);
    var t = e.align;
    t === "middle" && (t = "center"), e.align = t == null || G0[t] ? t : "left";
    var r = e.verticalAlign;
    r === "center" && (r = "middle"), e.verticalAlign = r == null || W0[r] ? r : "top";
    var i = e.padding;
    i && (e.padding = jv(e.padding));
  }
}
function bh(e, t) {
  return e == null || t <= 0 || e === "transparent" || e === "none" ? null : e.image || e.colorStops ? "#000" : e;
}
function xh(e) {
  return e == null || e === "none" ? null : e.image || e.colorStops ? "#000" : e;
}
function Th(e, t, r) {
  return t === "right" ? e - r[1] : t === "center" ? e + r[3] / 2 - r[1] / 2 : e + r[3];
}
function Ch(e) {
  var t = e.text;
  return t != null && (t += ""), t;
}
function Ds(e) {
  return !!(e.backgroundColor || e.lineHeight || e.borderWidth && e.borderColor);
}
const Ft = qd;
var ot = At(), X0 = function(e, t, r, i) {
  if (i) {
    var n = ot(i);
    n.dataIndex = r, n.dataType = t, n.seriesIndex = e, i.type === "group" && i.traverse(function(a) {
      var o = ot(a);
      o.seriesIndex = e, o.dataIndex = r, o.dataType = t;
    });
  }
}, Dh = 1, Ah = {}, Zd = At(), Nl = At(), Kd = 0, kl = 1, Bl = 2, Be = ["emphasis", "blur", "select"], so = ["normal", "emphasis", "blur", "select"], q0 = 10, Z0 = 9, Ur = "highlight", Ga = "downplay", bn = "select", Wa = "unselect", xn = "toggleSelect";
function ui(e) {
  return e != null && e !== "none";
}
var Eh = new $n(100);
function Mh(e) {
  if (z(e)) {
    var t = Eh.get(e);
    return t || (t = Uf(e, -0.1), Eh.put(e, t)), t;
  } else if (Eo(e)) {
    var r = O({}, e);
    return r.colorStops = q(e.colorStops, function(i) {
      return {
        offset: i.offset,
        color: Uf(i.color, -0.1)
      };
    }), r;
  }
  return e;
}
function Oo(e, t, r) {
  e.onHoverStateChange && (e.hoverState || 0) !== r && e.onHoverStateChange(t), e.hoverState = r;
}
function Qd(e) {
  Oo(e, "emphasis", Bl);
}
function Jd(e) {
  e.hoverState === Bl && Oo(e, "normal", Kd);
}
function zl(e) {
  Oo(e, "blur", kl);
}
function jd(e) {
  e.hoverState === kl && Oo(e, "normal", Kd);
}
function K0(e) {
  e.selected = !0;
}
function Q0(e) {
  e.selected = !1;
}
function Ph(e, t, r) {
  t(e, r);
}
function Ze(e, t, r) {
  Ph(e, t, r), e.isGroup && e.traverse(function(i) {
    Ph(i, t, r);
  });
}
function J0(e, t, r, i) {
  for (var n = e.style, a = {}, o = 0; o < t.length; o++) {
    var s = t[o], u = n[s];
    a[s] = u == null ? i && i[s] : u;
  }
  for (var o = 0; o < e.animators.length; o++) {
    var l = e.animators[o];
    l.__fromStateTransition && l.__fromStateTransition.indexOf(r) < 0 && l.targetName === "style" && l.saveTo(a, t);
  }
  return a;
}
function j0(e, t, r, i) {
  var n = r && nt(r, "select") >= 0, a = !1;
  if (e instanceof it) {
    var o = Zd(e), s = n && o.selectFill || o.normalFill, u = n && o.selectStroke || o.normalStroke;
    if (ui(s) || ui(u)) {
      i = i || {};
      var l = i.style || {};
      l.fill === "inherit" ? (a = !0, i = O({}, i), l = O({}, l), l.fill = s) : !ui(l.fill) && ui(s) ? (a = !0, i = O({}, i), l = O({}, l), l.fill = Mh(s)) : !ui(l.stroke) && ui(u) && (a || (i = O({}, i), l = O({}, l)), l.stroke = Mh(u)), i.style = l;
    }
  }
  if (i && i.z2 == null) {
    a || (i = O({}, i));
    var f = e.z2EmphasisLift;
    i.z2 = e.z2 + (f != null ? f : q0);
  }
  return i;
}
function t1(e, t, r) {
  if (r && r.z2 == null) {
    r = O({}, r);
    var i = e.z2SelectLift;
    r.z2 = e.z2 + (i != null ? i : Z0);
  }
  return r;
}
function e1(e, t, r) {
  var i = nt(e.currentStates, t) >= 0, n = e.style.opacity, a = i ? null : J0(e, ["opacity"], t, {
    opacity: 1
  });
  r = r || {};
  var o = r.style || {};
  return o.opacity == null && (r = O({}, r), o = O({
    opacity: i ? n : a.opacity * 0.1
  }, o), r.style = o), r;
}
function As(e, t) {
  var r = this.states[e];
  if (this.style) {
    if (e === "emphasis")
      return j0(this, e, t, r);
    if (e === "blur")
      return e1(this, e, r);
    if (e === "select")
      return t1(this, e, r);
  }
  return r;
}
function r1(e) {
  e.stateProxy = As;
  var t = e.getTextContent(), r = e.getTextGuideLine();
  t && (t.stateProxy = As), r && (r.stateProxy = As);
}
function Lh(e, t) {
  !ip(e, t) && !e.__highByOuter && Ze(e, Qd);
}
function Ih(e, t) {
  !ip(e, t) && !e.__highByOuter && Ze(e, Jd);
}
function Vu(e, t) {
  e.__highByOuter |= 1 << (t || 0), Ze(e, Qd);
}
function Hu(e, t) {
  !(e.__highByOuter &= ~(1 << (t || 0))) && Ze(e, Jd);
}
function i1(e) {
  Ze(e, zl);
}
function tp(e) {
  Ze(e, jd);
}
function ep(e) {
  Ze(e, K0);
}
function rp(e) {
  Ze(e, Q0);
}
function ip(e, t) {
  return e.__highDownSilentOnTouch && t.zrByTouch;
}
function np(e) {
  var t = e.getModel(), r = [], i = [];
  t.eachComponent(function(n, a) {
    var o = Nl(a), s = n === "series", u = s ? e.getViewOfSeriesModel(a) : e.getViewOfComponentModel(a);
    !s && i.push(u), o.isBlured && (u.group.traverse(function(l) {
      jd(l);
    }), s && r.push(a)), o.isBlured = !1;
  }), A(i, function(n) {
    n && n.toggleBlurSeries && n.toggleBlurSeries(r, !1, t);
  });
}
function Gu(e, t, r, i) {
  var n = i.getModel();
  r = r || "coordinateSystem";
  function a(l, f) {
    for (var h = 0; h < f.length; h++) {
      var c = l.getItemGraphicEl(f[h]);
      c && tp(c);
    }
  }
  if (e != null && !(!t || t === "none")) {
    var o = n.getSeriesByIndex(e), s = o.coordinateSystem;
    s && s.master && (s = s.master);
    var u = [];
    n.eachSeries(function(l) {
      var f = o === l, h = l.coordinateSystem;
      h && h.master && (h = h.master);
      var c = h && s ? h === s : f;
      if (!(r === "series" && !f || r === "coordinateSystem" && !c || t === "series" && f)) {
        var v = i.getViewOfSeriesModel(l);
        if (v.group.traverse(function(p) {
          zl(p);
        }), Yt(t))
          a(l.getData(), t);
        else if (F(t))
          for (var d = yt(t), _ = 0; _ < d.length; _++)
            a(l.getData(d[_]), t[d[_]]);
        u.push(l), Nl(l).isBlured = !0;
      }
    }), n.eachComponent(function(l, f) {
      if (l !== "series") {
        var h = i.getViewOfComponentModel(f);
        h && h.toggleBlurSeries && h.toggleBlurSeries(u, !0, n);
      }
    });
  }
}
function Wu(e, t, r) {
  if (!(e == null || t == null)) {
    var i = r.getModel().getComponent(e, t);
    if (!!i) {
      Nl(i).isBlured = !0;
      var n = r.getViewOfComponentModel(i);
      !n || !n.focusBlurEnabled || n.group.traverse(function(a) {
        zl(a);
      });
    }
  }
}
function n1(e, t, r) {
  var i = e.seriesIndex, n = e.getData(t.dataType);
  if (!n) {
    process.env.NODE_ENV !== "production" && Rt("Unknown dataType " + t.dataType);
    return;
  }
  var a = Yn(n, t);
  a = (N(a) ? a[0] : a) || 0;
  var o = n.getItemGraphicEl(a);
  if (!o)
    for (var s = n.count(), u = 0; !o && u < s; )
      o = n.getItemGraphicEl(u++);
  if (o) {
    var l = ot(o);
    Gu(i, l.focus, l.blurScope, r);
  } else {
    var f = e.get(["emphasis", "focus"]), h = e.get(["emphasis", "blurScope"]);
    f != null && Gu(i, f, h, r);
  }
}
function Fl(e, t, r, i) {
  var n = {
    focusSelf: !1,
    dispatchers: null
  };
  if (e == null || e === "series" || t == null || r == null)
    return n;
  var a = i.getModel().getComponent(e, t);
  if (!a)
    return n;
  var o = i.getViewOfComponentModel(a);
  if (!o || !o.findHighDownDispatchers)
    return n;
  for (var s = o.findHighDownDispatchers(r), u, l = 0; l < s.length; l++)
    if (process.env.NODE_ENV !== "production" && !Pi(s[l]) && Rt("param should be highDownDispatcher"), ot(s[l]).focus === "self") {
      u = !0;
      break;
    }
  return {
    focusSelf: u,
    dispatchers: s
  };
}
function a1(e, t, r) {
  process.env.NODE_ENV !== "production" && !Pi(e) && Rt("param should be highDownDispatcher");
  var i = ot(e), n = Fl(i.componentMainType, i.componentIndex, i.componentHighDownName, r), a = n.dispatchers, o = n.focusSelf;
  a ? (o && Wu(i.componentMainType, i.componentIndex, r), A(a, function(s) {
    return Lh(s, t);
  })) : (Gu(i.seriesIndex, i.focus, i.blurScope, r), i.focus === "self" && Wu(i.componentMainType, i.componentIndex, r), Lh(e, t));
}
function o1(e, t, r) {
  process.env.NODE_ENV !== "production" && !Pi(e) && Rt("param should be highDownDispatcher"), np(r);
  var i = ot(e), n = Fl(i.componentMainType, i.componentIndex, i.componentHighDownName, r).dispatchers;
  n ? A(n, function(a) {
    return Ih(a, t);
  }) : Ih(e, t);
}
function s1(e, t, r) {
  if (!!Uu(t)) {
    var i = t.dataType, n = e.getData(i), a = Yn(n, t);
    N(a) || (a = [a]), e[t.type === xn ? "toggleSelect" : t.type === bn ? "select" : "unselect"](a, i);
  }
}
function Rh(e) {
  var t = e.getAllData();
  A(t, function(r) {
    var i = r.data, n = r.type;
    i.eachItemGraphicEl(function(a, o) {
      e.isSelected(o, n) ? ep(a) : rp(a);
    });
  });
}
function u1(e) {
  var t = [];
  return e.eachSeries(function(r) {
    var i = r.getAllData();
    A(i, function(n) {
      n.data;
      var a = n.type, o = r.getSelectedDataIndices();
      if (o.length > 0) {
        var s = {
          dataIndex: o,
          seriesIndex: r.seriesIndex
        };
        a != null && (s.dataType = a), t.push(s);
      }
    });
  }), t;
}
function $u(e, t, r) {
  sp(e, !0), Ze(e, r1), f1(e, t, r);
}
function l1(e) {
  sp(e, !1);
}
function ap(e, t, r, i) {
  i ? l1(e) : $u(e, t, r);
}
function f1(e, t, r) {
  var i = ot(e);
  t != null ? (i.focus = t, i.blurScope = r) : i.focus && (i.focus = null);
}
var Oh = ["emphasis", "blur", "select"], h1 = {
  itemStyle: "getItemStyle",
  lineStyle: "getLineStyle",
  areaStyle: "getAreaStyle"
};
function op(e, t, r, i) {
  r = r || "itemStyle";
  for (var n = 0; n < Oh.length; n++) {
    var a = Oh[n], o = t.getModel([a, r]), s = e.ensureState(a);
    s.style = i ? i(o) : o[h1[r]]();
  }
}
function sp(e, t) {
  var r = t === !1, i = e;
  e.highDownSilentOnTouch && (i.__highDownSilentOnTouch = e.highDownSilentOnTouch), (!r || i.__highDownDispatcher) && (i.__highByOuter = i.__highByOuter || 0, i.__highDownDispatcher = !r);
}
function Pi(e) {
  return !!(e && e.__highDownDispatcher);
}
function c1(e) {
  var t = Ah[e];
  return t == null && Dh <= 32 && (t = Ah[e] = Dh++), t;
}
function Uu(e) {
  var t = e.type;
  return t === bn || t === Wa || t === xn;
}
function Nh(e) {
  var t = e.type;
  return t === Ur || t === Ga;
}
function v1(e) {
  var t = Zd(e);
  t.normalFill = e.style.fill, t.normalStroke = e.style.stroke;
  var r = e.states.select || {};
  t.selectFill = r.style && r.style.fill || null, t.selectStroke = r.style && r.style.stroke || null;
}
var li = Kr.CMD, d1 = [[], [], []], kh = Math.sqrt, p1 = Math.atan2;
function g1(e, t) {
  if (!!t) {
    var r = e.data, i = e.len(), n, a, o, s, u, l, f = li.M, h = li.C, c = li.L, v = li.R, d = li.A, _ = li.Q;
    for (o = 0, s = 0; o < i; ) {
      switch (n = r[o++], s = o, a = 0, n) {
        case f:
          a = 1;
          break;
        case c:
          a = 1;
          break;
        case h:
          a = 3;
          break;
        case _:
          a = 2;
          break;
        case d:
          var p = t[4], g = t[5], y = kh(t[0] * t[0] + t[1] * t[1]), m = kh(t[2] * t[2] + t[3] * t[3]), w = p1(-t[1] / m, t[0] / y);
          r[o] *= y, r[o++] += p, r[o] *= m, r[o++] += g, r[o++] *= y, r[o++] *= m, r[o++] += w, r[o++] += w, o += 2, s = o;
          break;
        case v:
          l[0] = r[o++], l[1] = r[o++], Re(l, l, t), r[s++] = l[0], r[s++] = l[1], l[0] += r[o++], l[1] += r[o++], Re(l, l, t), r[s++] = l[0], r[s++] = l[1];
      }
      for (u = 0; u < a; u++) {
        var b = d1[u];
        b[0] = r[o++], b[1] = r[o++], Re(b, b, t), r[s++] = b[0], r[s++] = b[1];
      }
    }
    e.increaseVersion();
  }
}
var Es = Math.sqrt, ha = Math.sin, ca = Math.cos, Zi = Math.PI;
function Bh(e) {
  return Math.sqrt(e[0] * e[0] + e[1] * e[1]);
}
function Yu(e, t) {
  return (e[0] * t[0] + e[1] * t[1]) / (Bh(e) * Bh(t));
}
function zh(e, t) {
  return (e[0] * t[1] < e[1] * t[0] ? -1 : 1) * Math.acos(Yu(e, t));
}
function Fh(e, t, r, i, n, a, o, s, u, l, f) {
  var h = u * (Zi / 180), c = ca(h) * (e - r) / 2 + ha(h) * (t - i) / 2, v = -1 * ha(h) * (e - r) / 2 + ca(h) * (t - i) / 2, d = c * c / (o * o) + v * v / (s * s);
  d > 1 && (o *= Es(d), s *= Es(d));
  var _ = (n === a ? -1 : 1) * Es((o * o * (s * s) - o * o * (v * v) - s * s * (c * c)) / (o * o * (v * v) + s * s * (c * c))) || 0, p = _ * o * v / s, g = _ * -s * c / o, y = (e + r) / 2 + ca(h) * p - ha(h) * g, m = (t + i) / 2 + ha(h) * p + ca(h) * g, w = zh([1, 0], [(c - p) / o, (v - g) / s]), b = [(c - p) / o, (v - g) / s], S = [(-1 * c - p) / o, (-1 * v - g) / s], T = zh(b, S);
  if (Yu(b, S) <= -1 && (T = Zi), Yu(b, S) >= 1 && (T = 0), T < 0) {
    var x = Math.round(T / Zi * 1e6) / 1e6;
    T = Zi * 2 + x % 2 * Zi;
  }
  f.addData(l, y, m, o, s, w, T, h, a);
}
var _1 = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, y1 = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function m1(e) {
  var t = new Kr();
  if (!e)
    return t;
  var r = 0, i = 0, n = r, a = i, o, s = Kr.CMD, u = e.match(_1);
  if (!u)
    return t;
  for (var l = 0; l < u.length; l++) {
    for (var f = u[l], h = f.charAt(0), c = void 0, v = f.match(y1) || [], d = v.length, _ = 0; _ < d; _++)
      v[_] = parseFloat(v[_]);
    for (var p = 0; p < d; ) {
      var g = void 0, y = void 0, m = void 0, w = void 0, b = void 0, S = void 0, T = void 0, x = r, C = i, E = void 0, D = void 0;
      switch (h) {
        case "l":
          r += v[p++], i += v[p++], c = s.L, t.addData(c, r, i);
          break;
        case "L":
          r = v[p++], i = v[p++], c = s.L, t.addData(c, r, i);
          break;
        case "m":
          r += v[p++], i += v[p++], c = s.M, t.addData(c, r, i), n = r, a = i, h = "l";
          break;
        case "M":
          r = v[p++], i = v[p++], c = s.M, t.addData(c, r, i), n = r, a = i, h = "L";
          break;
        case "h":
          r += v[p++], c = s.L, t.addData(c, r, i);
          break;
        case "H":
          r = v[p++], c = s.L, t.addData(c, r, i);
          break;
        case "v":
          i += v[p++], c = s.L, t.addData(c, r, i);
          break;
        case "V":
          i = v[p++], c = s.L, t.addData(c, r, i);
          break;
        case "C":
          c = s.C, t.addData(c, v[p++], v[p++], v[p++], v[p++], v[p++], v[p++]), r = v[p - 2], i = v[p - 1];
          break;
        case "c":
          c = s.C, t.addData(c, v[p++] + r, v[p++] + i, v[p++] + r, v[p++] + i, v[p++] + r, v[p++] + i), r += v[p - 2], i += v[p - 1];
          break;
        case "S":
          g = r, y = i, E = t.len(), D = t.data, o === s.C && (g += r - D[E - 4], y += i - D[E - 3]), c = s.C, x = v[p++], C = v[p++], r = v[p++], i = v[p++], t.addData(c, g, y, x, C, r, i);
          break;
        case "s":
          g = r, y = i, E = t.len(), D = t.data, o === s.C && (g += r - D[E - 4], y += i - D[E - 3]), c = s.C, x = r + v[p++], C = i + v[p++], r += v[p++], i += v[p++], t.addData(c, g, y, x, C, r, i);
          break;
        case "Q":
          x = v[p++], C = v[p++], r = v[p++], i = v[p++], c = s.Q, t.addData(c, x, C, r, i);
          break;
        case "q":
          x = v[p++] + r, C = v[p++] + i, r += v[p++], i += v[p++], c = s.Q, t.addData(c, x, C, r, i);
          break;
        case "T":
          g = r, y = i, E = t.len(), D = t.data, o === s.Q && (g += r - D[E - 4], y += i - D[E - 3]), r = v[p++], i = v[p++], c = s.Q, t.addData(c, g, y, r, i);
          break;
        case "t":
          g = r, y = i, E = t.len(), D = t.data, o === s.Q && (g += r - D[E - 4], y += i - D[E - 3]), r += v[p++], i += v[p++], c = s.Q, t.addData(c, g, y, r, i);
          break;
        case "A":
          m = v[p++], w = v[p++], b = v[p++], S = v[p++], T = v[p++], x = r, C = i, r = v[p++], i = v[p++], c = s.A, Fh(x, C, r, i, S, T, m, w, b, c, t);
          break;
        case "a":
          m = v[p++], w = v[p++], b = v[p++], S = v[p++], T = v[p++], x = r, C = i, r += v[p++], i += v[p++], c = s.A, Fh(x, C, r, i, S, T, m, w, b, c, t);
          break;
      }
    }
    (h === "z" || h === "Z") && (c = s.Z, t.addData(c), r = n, i = a), o = c;
  }
  return t.toStatic(), t;
}
var up = function(e) {
  k(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.applyTransform = function(r) {
  }, t;
}(it);
function lp(e) {
  return e.setData != null;
}
function fp(e, t) {
  var r = m1(e), i = O({}, t);
  return i.buildPath = function(n) {
    if (lp(n)) {
      n.setData(r.data);
      var a = n.getContext();
      a && n.rebuildPath(a, 1);
    } else {
      var a = n;
      r.rebuildPath(a, 1);
    }
  }, i.applyTransform = function(n) {
    g1(r, n), this.dirtyShape();
  }, i;
}
function w1(e, t) {
  return new up(fp(e, t));
}
function S1(e, t) {
  var r = fp(e, t), i = function(n) {
    k(a, n);
    function a(o) {
      var s = n.call(this, o) || this;
      return s.applyTransform = r.applyTransform, s.buildPath = r.buildPath, s;
    }
    return a;
  }(up);
  return i;
}
function b1(e, t) {
  for (var r = [], i = e.length, n = 0; n < i; n++) {
    var a = e[n];
    r.push(a.getUpdatedPathProxy(!0));
  }
  var o = new it(t);
  return o.createPathProxy(), o.buildPath = function(s) {
    if (lp(s)) {
      s.appendPath(r);
      var u = s.getContext();
      u && s.rebuildPath(u, 1);
    }
  }, o;
}
var x1 = function() {
  function e() {
    this.cx = 0, this.cy = 0, this.r = 0;
  }
  return e;
}(), hp = function(e) {
  k(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new x1();
  }, t.prototype.buildPath = function(r, i) {
    r.moveTo(i.cx + i.r, i.cy), r.arc(i.cx, i.cy, i.r, 0, Math.PI * 2);
  }, t;
}(it);
hp.prototype.type = "circle";
const Vl = hp;
var T1 = function() {
  function e() {
    this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
  }
  return e;
}(), cp = function(e) {
  k(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new T1();
  }, t.prototype.buildPath = function(r, i) {
    var n = 0.5522848, a = i.cx, o = i.cy, s = i.rx, u = i.ry, l = s * n, f = u * n;
    r.moveTo(a - s, o), r.bezierCurveTo(a - s, o - f, a - l, o - u, a, o - u), r.bezierCurveTo(a + l, o - u, a + s, o - f, a + s, o), r.bezierCurveTo(a + s, o + f, a + l, o + u, a, o + u), r.bezierCurveTo(a - l, o + u, a - s, o + f, a - s, o), r.closePath();
  }, t;
}(it);
cp.prototype.type = "ellipse";
const vp = cp;
var dp = Math.PI, Ms = dp * 2, Er = Math.sin, fi = Math.cos, C1 = Math.acos, Et = Math.atan2, Vh = Math.abs, Tn = Math.sqrt, pn = Math.max, Ae = Math.min, de = 1e-4;
function D1(e, t, r, i, n, a, o, s) {
  var u = r - e, l = i - t, f = o - n, h = s - a, c = h * u - f * l;
  if (!(c * c < de))
    return c = (f * (t - a) - h * (e - n)) / c, [e + c * u, t + c * l];
}
function va(e, t, r, i, n, a, o) {
  var s = e - r, u = t - i, l = (o ? a : -a) / Tn(s * s + u * u), f = l * u, h = -l * s, c = e + f, v = t + h, d = r + f, _ = i + h, p = (c + d) / 2, g = (v + _) / 2, y = d - c, m = _ - v, w = y * y + m * m, b = n - a, S = c * _ - d * v, T = (m < 0 ? -1 : 1) * Tn(pn(0, b * b * w - S * S)), x = (S * m - y * T) / w, C = (-S * y - m * T) / w, E = (S * m + y * T) / w, D = (-S * y + m * T) / w, M = x - p, P = C - g, L = E - p, I = D - g;
  return M * M + P * P > L * L + I * I && (x = E, C = D), {
    cx: x,
    cy: C,
    x0: -f,
    y0: -h,
    x1: x * (n / b - 1),
    y1: C * (n / b - 1)
  };
}
function A1(e) {
  var t;
  if (N(e)) {
    var r = e.length;
    if (!r)
      return e;
    r === 1 ? t = [e[0], e[0], 0, 0] : r === 2 ? t = [e[0], e[0], e[1], e[1]] : r === 3 ? t = e.concat(e[2]) : t = e;
  } else
    t = [e, e, e, e];
  return t;
}
function E1(e, t) {
  var r, i = pn(t.r, 0), n = pn(t.r0 || 0, 0), a = i > 0, o = n > 0;
  if (!(!a && !o)) {
    if (a || (i = n, n = 0), n > i) {
      var s = i;
      i = n, n = s;
    }
    var u = t.startAngle, l = t.endAngle;
    if (!(isNaN(u) || isNaN(l))) {
      var f = t.cx, h = t.cy, c = !!t.clockwise, v = Vh(l - u), d = v > Ms && v % Ms;
      if (d > de && (v = d), !(i > de))
        e.moveTo(f, h);
      else if (v > Ms - de)
        e.moveTo(f + i * fi(u), h + i * Er(u)), e.arc(f, h, i, u, l, !c), n > de && (e.moveTo(f + n * fi(l), h + n * Er(l)), e.arc(f, h, n, l, u, c));
      else {
        var _ = void 0, p = void 0, g = void 0, y = void 0, m = void 0, w = void 0, b = void 0, S = void 0, T = void 0, x = void 0, C = void 0, E = void 0, D = void 0, M = void 0, P = void 0, L = void 0, I = i * fi(u), R = i * Er(u), $ = n * fi(l), B = n * Er(l), W = v > de;
        if (W) {
          var K = t.cornerRadius;
          K && (r = A1(K), _ = r[0], p = r[1], g = r[2], y = r[3]);
          var rt = Vh(i - n) / 2;
          if (m = Ae(rt, g), w = Ae(rt, y), b = Ae(rt, _), S = Ae(rt, p), C = T = pn(m, w), E = x = pn(b, S), (T > de || x > de) && (D = i * fi(l), M = i * Er(l), P = n * fi(u), L = n * Er(u), v < dp)) {
            var U = D1(I, R, P, L, D, M, $, B);
            if (U) {
              var ut = I - U[0], wt = R - U[1], Zt = D - U[0], be = M - U[1], te = 1 / Er(C1((ut * Zt + wt * be) / (Tn(ut * ut + wt * wt) * Tn(Zt * Zt + be * be))) / 2), Kt = Tn(U[0] * U[0] + U[1] * U[1]);
              C = Ae(T, (i - Kt) / (te + 1)), E = Ae(x, (n - Kt) / (te - 1));
            }
          }
        }
        if (!W)
          e.moveTo(f + I, h + R);
        else if (C > de) {
          var bt = Ae(g, C), pt = Ae(y, C), V = va(P, L, I, R, i, bt, c), Y = va(D, M, $, B, i, pt, c);
          e.moveTo(f + V.cx + V.x0, h + V.cy + V.y0), C < T && bt === pt ? e.arc(f + V.cx, h + V.cy, C, Et(V.y0, V.x0), Et(Y.y0, Y.x0), !c) : (bt > 0 && e.arc(f + V.cx, h + V.cy, bt, Et(V.y0, V.x0), Et(V.y1, V.x1), !c), e.arc(f, h, i, Et(V.cy + V.y1, V.cx + V.x1), Et(Y.cy + Y.y1, Y.cx + Y.x1), !c), pt > 0 && e.arc(f + Y.cx, h + Y.cy, pt, Et(Y.y1, Y.x1), Et(Y.y0, Y.x0), !c));
        } else
          e.moveTo(f + I, h + R), e.arc(f, h, i, u, l, !c);
        if (!(n > de) || !W)
          e.lineTo(f + $, h + B);
        else if (E > de) {
          var bt = Ae(_, E), pt = Ae(p, E), V = va($, B, D, M, n, -pt, c), Y = va(I, R, P, L, n, -bt, c);
          e.lineTo(f + V.cx + V.x0, h + V.cy + V.y0), E < x && bt === pt ? e.arc(f + V.cx, h + V.cy, E, Et(V.y0, V.x0), Et(Y.y0, Y.x0), !c) : (pt > 0 && e.arc(f + V.cx, h + V.cy, pt, Et(V.y0, V.x0), Et(V.y1, V.x1), !c), e.arc(f, h, n, Et(V.cy + V.y1, V.cx + V.x1), Et(Y.cy + Y.y1, Y.cx + Y.x1), c), bt > 0 && e.arc(f + Y.cx, h + Y.cy, bt, Et(Y.y1, Y.x1), Et(Y.y0, Y.x0), !c));
        } else
          e.lineTo(f + $, h + B), e.arc(f, h, n, l, u, c);
      }
      e.closePath();
    }
  }
}
var M1 = function() {
  function e() {
    this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
  }
  return e;
}(), pp = function(e) {
  k(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new M1();
  }, t.prototype.buildPath = function(r, i) {
    E1(r, i);
  }, t.prototype.isZeroArea = function() {
    return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
  }, t;
}(it);
pp.prototype.type = "sector";
const Jr = pp;
var P1 = function() {
  function e() {
    this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
  }
  return e;
}(), gp = function(e) {
  k(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new P1();
  }, t.prototype.buildPath = function(r, i) {
    var n = i.cx, a = i.cy, o = Math.PI * 2;
    r.moveTo(n + i.r, a), r.arc(n, a, i.r, 0, o, !1), r.moveTo(n + i.r0, a), r.arc(n, a, i.r0, 0, o, !0);
  }, t;
}(it);
gp.prototype.type = "ring";
const _p = gp;
function L1(e, t, r, i) {
  var n = [], a = [], o = [], s = [], u, l, f, h;
  if (i) {
    f = [1 / 0, 1 / 0], h = [-1 / 0, -1 / 0];
    for (var c = 0, v = e.length; c < v; c++)
      wi(f, f, e[c]), Si(h, h, e[c]);
    wi(f, f, i[0]), Si(h, h, i[1]);
  }
  for (var c = 0, v = e.length; c < v; c++) {
    var d = e[c];
    if (r)
      u = e[c ? c - 1 : v - 1], l = e[(c + 1) % v];
    else if (c === 0 || c === v - 1) {
      n.push(ry(e[c]));
      continue;
    } else
      u = e[c - 1], l = e[c + 1];
    iy(a, l, u), Xo(a, a, t);
    var _ = mu(d, u), p = mu(d, l), g = _ + p;
    g !== 0 && (_ /= g, p /= g), Xo(o, a, -_), Xo(s, a, p);
    var y = Pf([], d, o), m = Pf([], d, s);
    i && (Si(y, y, f), wi(y, y, h), Si(m, m, f), wi(m, m, h)), n.push(y), n.push(m);
  }
  return r && n.push(n.shift()), n;
}
function yp(e, t, r) {
  var i = t.smooth, n = t.points;
  if (n && n.length >= 2) {
    if (i) {
      var a = L1(n, i, r, t.smoothConstraint);
      e.moveTo(n[0][0], n[0][1]);
      for (var o = n.length, s = 0; s < (r ? o : o - 1); s++) {
        var u = a[s * 2], l = a[s * 2 + 1], f = n[(s + 1) % o];
        e.bezierCurveTo(u[0], u[1], l[0], l[1], f[0], f[1]);
      }
    } else {
      e.moveTo(n[0][0], n[0][1]);
      for (var s = 1, h = n.length; s < h; s++)
        e.lineTo(n[s][0], n[s][1]);
    }
    r && e.closePath();
  }
}
var I1 = function() {
  function e() {
    this.points = null, this.smooth = 0, this.smoothConstraint = null;
  }
  return e;
}(), mp = function(e) {
  k(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new I1();
  }, t.prototype.buildPath = function(r, i) {
    yp(r, i, !0);
  }, t;
}(it);
mp.prototype.type = "polygon";
const wp = mp;
var R1 = function() {
  function e() {
    this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
  }
  return e;
}(), Sp = function(e) {
  k(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new R1();
  }, t.prototype.buildPath = function(r, i) {
    yp(r, i, !1);
  }, t;
}(it);
Sp.prototype.type = "polyline";
const No = Sp;
var O1 = {}, N1 = function() {
  function e() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  }
  return e;
}(), bp = function(e) {
  k(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new N1();
  }, t.prototype.buildPath = function(r, i) {
    var n, a, o, s;
    if (this.subPixelOptimize) {
      var u = Ud(O1, i, this.style);
      n = u.x1, a = u.y1, o = u.x2, s = u.y2;
    } else
      n = i.x1, a = i.y1, o = i.x2, s = i.y2;
    var l = i.percent;
    l !== 0 && (r.moveTo(n, a), l < 1 && (o = n * (1 - l) + o * l, s = a * (1 - l) + s * l), r.lineTo(o, s));
  }, t.prototype.pointAt = function(r) {
    var i = this.shape;
    return [
      i.x1 * (1 - r) + i.x2 * r,
      i.y1 * (1 - r) + i.y2 * r
    ];
  }, t;
}(it);
bp.prototype.type = "line";
const Zn = bp;
var Vt = [], k1 = function() {
  function e() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
  }
  return e;
}();
function Hh(e, t, r) {
  var i = e.cpx2, n = e.cpy2;
  return i != null || n != null ? [
    (r ? Vf : Ct)(e.x1, e.cpx1, e.cpx2, e.x2, t),
    (r ? Vf : Ct)(e.y1, e.cpy1, e.cpy2, e.y2, t)
  ] : [
    (r ? Hf : Pt)(e.x1, e.cpx1, e.x2, t),
    (r ? Hf : Pt)(e.y1, e.cpy1, e.y2, t)
  ];
}
var xp = function(e) {
  k(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new k1();
  }, t.prototype.buildPath = function(r, i) {
    var n = i.x1, a = i.y1, o = i.x2, s = i.y2, u = i.cpx1, l = i.cpy1, f = i.cpx2, h = i.cpy2, c = i.percent;
    c !== 0 && (r.moveTo(n, a), f == null || h == null ? (c < 1 && (ja(n, u, o, c, Vt), u = Vt[1], o = Vt[2], ja(a, l, s, c, Vt), l = Vt[1], s = Vt[2]), r.quadraticCurveTo(u, l, o, s)) : (c < 1 && (Ja(n, u, f, o, c, Vt), u = Vt[1], f = Vt[2], o = Vt[3], Ja(a, l, h, s, c, Vt), l = Vt[1], h = Vt[2], s = Vt[3]), r.bezierCurveTo(u, l, f, h, o, s)));
  }, t.prototype.pointAt = function(r) {
    return Hh(this.shape, r, !1);
  }, t.prototype.tangentAt = function(r) {
    var i = Hh(this.shape, r, !0);
    return oy(i, i);
  }, t;
}(it);
xp.prototype.type = "bezier-curve";
const Tp = xp;
var B1 = function() {
  function e() {
    this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
  }
  return e;
}(), Cp = function(e) {
  k(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new B1();
  }, t.prototype.buildPath = function(r, i) {
    var n = i.cx, a = i.cy, o = Math.max(i.r, 0), s = i.startAngle, u = i.endAngle, l = i.clockwise, f = Math.cos(s), h = Math.sin(s);
    r.moveTo(f * o + n, h * o + a), r.arc(n, a, o, s, u, !l);
  }, t;
}(it);
Cp.prototype.type = "arc";
const Hl = Cp;
var z1 = function(e) {
  k(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.type = "compound", r;
  }
  return t.prototype._updatePathDirty = function() {
    for (var r = this.shape.paths, i = this.shapeChanged(), n = 0; n < r.length; n++)
      i = i || r[n].shapeChanged();
    i && this.dirtyShape();
  }, t.prototype.beforeBrush = function() {
    this._updatePathDirty();
    for (var r = this.shape.paths || [], i = this.getGlobalScale(), n = 0; n < r.length; n++)
      r[n].path || r[n].createPathProxy(), r[n].path.setScale(i[0], i[1], r[n].segmentIgnoreThreshold);
  }, t.prototype.buildPath = function(r, i) {
    for (var n = i.paths || [], a = 0; a < n.length; a++)
      n[a].buildPath(r, n[a].shape, !0);
  }, t.prototype.afterBrush = function() {
    for (var r = this.shape.paths || [], i = 0; i < r.length; i++)
      r[i].pathUpdated();
  }, t.prototype.getBoundingRect = function() {
    return this._updatePathDirty.call(this), it.prototype.getBoundingRect.call(this);
  }, t;
}(it);
const F1 = z1;
var V1 = function() {
  function e(t) {
    this.colorStops = t || [];
  }
  return e.prototype.addColorStop = function(t, r) {
    this.colorStops.push({
      offset: t,
      color: r
    });
  }, e;
}();
const Dp = V1;
var H1 = function(e) {
  k(t, e);
  function t(r, i, n, a, o, s) {
    var u = e.call(this, o) || this;
    return u.x = r == null ? 0 : r, u.y = i == null ? 0 : i, u.x2 = n == null ? 1 : n, u.y2 = a == null ? 0 : a, u.type = "linear", u.global = s || !1, u;
  }
  return t;
}(Dp);
const G1 = H1;
var W1 = function(e) {
  k(t, e);
  function t(r, i, n, a, o) {
    var s = e.call(this, a) || this;
    return s.x = r == null ? 0.5 : r, s.y = i == null ? 0.5 : i, s.r = n == null ? 0.5 : n, s.type = "radial", s.global = o || !1, s;
  }
  return t;
}(Dp);
const $1 = W1;
var Mr = [0, 0], Pr = [0, 0], da = new G(), pa = new G(), U1 = function() {
  function e(t, r) {
    this._corners = [], this._axes = [], this._origin = [0, 0];
    for (var i = 0; i < 4; i++)
      this._corners[i] = new G();
    for (var i = 0; i < 2; i++)
      this._axes[i] = new G();
    t && this.fromBoundingRect(t, r);
  }
  return e.prototype.fromBoundingRect = function(t, r) {
    var i = this._corners, n = this._axes, a = t.x, o = t.y, s = a + t.width, u = o + t.height;
    if (i[0].set(a, o), i[1].set(s, o), i[2].set(s, u), i[3].set(a, u), r)
      for (var l = 0; l < 4; l++)
        i[l].transform(r);
    G.sub(n[0], i[1], i[0]), G.sub(n[1], i[3], i[0]), n[0].normalize(), n[1].normalize();
    for (var l = 0; l < 2; l++)
      this._origin[l] = n[l].dot(i[0]);
  }, e.prototype.intersect = function(t, r) {
    var i = !0, n = !r;
    return da.set(1 / 0, 1 / 0), pa.set(0, 0), !this._intersectCheckOneSide(this, t, da, pa, n, 1) && (i = !1, n) || !this._intersectCheckOneSide(t, this, da, pa, n, -1) && (i = !1, n) || n || G.copy(r, i ? da : pa), i;
  }, e.prototype._intersectCheckOneSide = function(t, r, i, n, a, o) {
    for (var s = !0, u = 0; u < 2; u++) {
      var l = this._axes[u];
      if (this._getProjMinMaxOnAxis(u, t._corners, Mr), this._getProjMinMaxOnAxis(u, r._corners, Pr), Mr[1] < Pr[0] || Mr[0] > Pr[1]) {
        if (s = !1, a)
          return s;
        var f = Math.abs(Pr[0] - Mr[1]), h = Math.abs(Mr[0] - Pr[1]);
        Math.min(f, h) > n.len() && (f < h ? G.scale(n, l, -f * o) : G.scale(n, l, h * o));
      } else if (i) {
        var f = Math.abs(Pr[0] - Mr[1]), h = Math.abs(Mr[0] - Pr[1]);
        Math.min(f, h) < i.len() && (f < h ? G.scale(i, l, f * o) : G.scale(i, l, -h * o));
      }
    }
    return s;
  }, e.prototype._getProjMinMaxOnAxis = function(t, r, i) {
    for (var n = this._axes[t], a = this._origin, o = r[0].dot(n) + a[t], s = o, u = o, l = 1; l < r.length; l++) {
      var f = r[l].dot(n) + a[t];
      s = Math.min(f, s), u = Math.max(f, u);
    }
    i[0] = s, i[1] = u;
  }, e;
}();
const uo = U1;
var Y1 = [], X1 = function(e) {
  k(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.notClear = !0, r.incremental = !0, r._displayables = [], r._temporaryDisplayables = [], r._cursor = 0, r;
  }
  return t.prototype.traverse = function(r, i) {
    r.call(i, this);
  }, t.prototype.useStyle = function() {
    this.style = {};
  }, t.prototype.getCursor = function() {
    return this._cursor;
  }, t.prototype.innerAfterBrush = function() {
    this._cursor = this._displayables.length;
  }, t.prototype.clearDisplaybles = function() {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = !1;
  }, t.prototype.clearTemporalDisplayables = function() {
    this._temporaryDisplayables = [];
  }, t.prototype.addDisplayable = function(r, i) {
    i ? this._temporaryDisplayables.push(r) : this._displayables.push(r), this.markRedraw();
  }, t.prototype.addDisplayables = function(r, i) {
    i = i || !1;
    for (var n = 0; n < r.length; n++)
      this.addDisplayable(r[n], i);
  }, t.prototype.getDisplayables = function() {
    return this._displayables;
  }, t.prototype.getTemporalDisplayables = function() {
    return this._temporaryDisplayables;
  }, t.prototype.eachPendingDisplayable = function(r) {
    for (var i = this._cursor; i < this._displayables.length; i++)
      r && r(this._displayables[i]);
    for (var i = 0; i < this._temporaryDisplayables.length; i++)
      r && r(this._temporaryDisplayables[i]);
  }, t.prototype.update = function() {
    this.updateTransform();
    for (var r = this._cursor; r < this._displayables.length; r++) {
      var i = this._displayables[r];
      i.parent = this, i.update(), i.parent = null;
    }
    for (var r = 0; r < this._temporaryDisplayables.length; r++) {
      var i = this._temporaryDisplayables[r];
      i.parent = this, i.update(), i.parent = null;
    }
  }, t.prototype.getBoundingRect = function() {
    if (!this._rect) {
      for (var r = new st(1 / 0, 1 / 0, -1 / 0, -1 / 0), i = 0; i < this._displayables.length; i++) {
        var n = this._displayables[i], a = n.getBoundingRect().clone();
        n.needLocalTransform() && a.applyTransform(n.getLocalTransform(Y1)), r.union(a);
      }
      this._rect = r;
    }
    return this._rect;
  }, t.prototype.contain = function(r, i) {
    var n = this.transformCoordToLocal(r, i), a = this.getBoundingRect();
    if (a.contain(n[0], n[1]))
      for (var o = 0; o < this._displayables.length; o++) {
        var s = this._displayables[o];
        if (s.contain(r, i))
          return !0;
      }
    return !1;
  }, t;
}(qn);
const q1 = X1;
var Z1 = At();
function K1(e, t, r, i, n) {
  var a;
  if (t && t.ecModel) {
    var o = t.ecModel.getUpdatePayload();
    a = o && o.animation;
  }
  var s = t && t.isAnimationEnabled(), u = e === "update";
  if (s) {
    var l = void 0, f = void 0, h = void 0;
    i ? (l = tt(i.duration, 200), f = tt(i.easing, "cubicOut"), h = 0) : (l = t.getShallow(u ? "animationDurationUpdate" : "animationDuration"), f = t.getShallow(u ? "animationEasingUpdate" : "animationEasing"), h = t.getShallow(u ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (l = a.duration), a.easing != null && (f = a.easing), a.delay != null && (h = a.delay)), J(h) && (h = h(r, n)), J(l) && (l = l(r));
    var c = {
      duration: l || 0,
      delay: h,
      easing: f
    };
    return c;
  } else
    return null;
}
function Gl(e, t, r, i, n, a, o) {
  var s = !1, u;
  J(n) ? (o = a, a = n, n = null) : F(n) && (a = n.cb, o = n.during, s = n.isFrom, u = n.removeOpt, n = n.dataIndex);
  var l = e === "leave";
  l || t.stopAnimation("leave");
  var f = K1(e, i, n, l ? u || {} : null, i && i.getAnimationDelayParams ? i.getAnimationDelayParams(t, n) : null);
  if (f && f.duration > 0) {
    var h = f.duration, c = f.delay, v = f.easing, d = {
      duration: h,
      delay: c || 0,
      easing: v,
      done: a,
      force: !!a || !!o,
      setToFinal: !l,
      scope: e,
      during: o
    };
    s ? t.animateFrom(r, d) : t.animateTo(r, d);
  } else
    t.stopAnimation(), !s && t.attr(r), o && o(1), a && a();
}
function me(e, t, r, i, n, a) {
  Gl("update", e, t, r, i, n, a);
}
function Ne(e, t, r, i, n, a) {
  Gl("enter", e, t, r, i, n, a);
}
function Cn(e) {
  if (!e.__zr)
    return !0;
  for (var t = 0; t < e.animators.length; t++) {
    var r = e.animators[t];
    if (r.scope === "leave")
      return !0;
  }
  return !1;
}
function Ap(e, t, r, i, n, a) {
  Cn(e) || Gl("leave", e, t, r, i, n, a);
}
function Gh(e, t, r, i) {
  e.removeTextContent(), e.removeTextGuideLine(), Ap(e, {
    style: {
      opacity: 0
    }
  }, t, r, i);
}
function lo(e, t, r) {
  function i() {
    e.parent && e.parent.remove(e);
  }
  e.isGroup ? e.traverse(function(n) {
    n.isGroup || Gh(n, t, r, i);
  }) : Gh(e, t, r, i);
}
function Ep(e) {
  Z1(e).oldStyle = e.style;
}
var fo = Math.max, ho = Math.min, Xu = {};
function Q1(e) {
  return it.extend(e);
}
var J1 = S1;
function j1(e, t) {
  return J1(e, t);
}
function we(e, t) {
  Xu[e] = t;
}
function tw(e) {
  if (Xu.hasOwnProperty(e))
    return Xu[e];
}
function Wl(e, t, r, i) {
  var n = w1(e, t);
  return r && (i === "center" && (r = Pp(r, n.getBoundingRect())), Lp(n, r)), n;
}
function Mp(e, t, r) {
  var i = new ki({
    style: {
      image: e,
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height
    },
    onload: function(n) {
      if (r === "center") {
        var a = {
          width: n.width,
          height: n.height
        };
        i.setStyle(Pp(t, a));
      }
    }
  });
  return i;
}
function Pp(e, t) {
  var r = t.width / t.height, i = e.height * r, n;
  i <= e.width ? n = e.height : (i = e.width, n = i / r);
  var a = e.x + e.width / 2, o = e.y + e.height / 2;
  return {
    x: a - i / 2,
    y: o - n / 2,
    width: i,
    height: n
  };
}
var ew = b1;
function Lp(e, t) {
  if (!!e.applyTransform) {
    var r = e.getBoundingRect(), i = r.calculateTransform(t);
    e.applyTransform(i);
  }
}
function rw(e) {
  return Ud(e.shape, e.shape, e.style), e;
}
function iw(e) {
  return Yd(e.shape, e.shape, e.style), e;
}
var nw = Fr;
function aw(e, t) {
  for (var r = Dl([]); e && e !== t; )
    Di(r, e.getLocalTransform(), r), e = e.parent;
  return r;
}
function $l(e, t, r) {
  return t && !Yt(t) && (t = El.getLocalTransform(t)), r && (t = Sd([], t)), Re([], e, t);
}
function ow(e, t, r) {
  var i = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Math.abs(2 * t[4] / t[0]), n = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Math.abs(2 * t[4] / t[2]), a = [e === "left" ? -i : e === "right" ? i : 0, e === "top" ? -n : e === "bottom" ? n : 0];
  return a = $l(a, t, r), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
}
function Wh(e) {
  return !e.isGroup;
}
function sw(e) {
  return e.shape != null;
}
function uw(e, t, r) {
  if (!e || !t)
    return;
  function i(o) {
    var s = {};
    return o.traverse(function(u) {
      Wh(u) && u.anid && (s[u.anid] = u);
    }), s;
  }
  function n(o) {
    var s = {
      x: o.x,
      y: o.y,
      rotation: o.rotation
    };
    return sw(o) && (s.shape = O({}, o.shape)), s;
  }
  var a = i(e);
  t.traverse(function(o) {
    if (Wh(o) && o.anid) {
      var s = a[o.anid];
      if (s) {
        var u = n(o);
        o.attr(n(s)), me(o, u, r, ot(o).dataIndex);
      }
    }
  });
}
function lw(e, t) {
  return q(e, function(r) {
    var i = r[0];
    i = fo(i, t.x), i = ho(i, t.x + t.width);
    var n = r[1];
    return n = fo(n, t.y), n = ho(n, t.y + t.height), [i, n];
  });
}
function fw(e, t) {
  var r = fo(e.x, t.x), i = ho(e.x + e.width, t.x + t.width), n = fo(e.y, t.y), a = ho(e.y + e.height, t.y + t.height);
  if (i >= r && a >= n)
    return {
      x: r,
      y: n,
      width: i - r,
      height: a - n
    };
}
function Ul(e, t, r) {
  var i = O({
    rectHover: !0
  }, t), n = i.style = {
    strokeNoScale: !0
  };
  if (r = r || {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }, e)
    return e.indexOf("image://") === 0 ? (n.image = e.slice(8), ct(n, r), new ki(i)) : Wl(e.replace("path://", ""), i, r, "center");
}
function hw(e, t, r, i, n) {
  for (var a = 0, o = n[n.length - 1]; a < n.length; a++) {
    var s = n[a];
    if (Ip(e, t, r, i, s[0], s[1], o[0], o[1]))
      return !0;
    o = s;
  }
}
function Ip(e, t, r, i, n, a, o, s) {
  var u = r - e, l = i - t, f = o - n, h = s - a, c = Ps(f, h, u, l);
  if (cw(c))
    return !1;
  var v = e - n, d = t - a, _ = Ps(v, d, u, l) / c;
  if (_ < 0 || _ > 1)
    return !1;
  var p = Ps(v, d, f, h) / c;
  return !(p < 0 || p > 1);
}
function Ps(e, t, r, i) {
  return e * i - r * t;
}
function cw(e) {
  return e <= 1e-6 && e >= -1e-6;
}
function Yl(e) {
  var t = e.itemTooltipOption, r = e.componentModel, i = e.itemName, n = z(t) ? {
    formatter: t
  } : t, a = r.mainType, o = r.componentIndex, s = {
    componentType: a,
    name: i,
    $vars: ["name"]
  };
  s[a + "Index"] = o;
  var u = e.formatterParamsExtra;
  u && A(yt(u), function(f) {
    Ai(s, f) || (s[f] = u[f], s.$vars.push(f));
  });
  var l = ot(e.el);
  l.componentMainType = a, l.componentIndex = o, l.tooltipConfig = {
    name: i,
    option: ct({
      content: i,
      formatterParams: s
    }, n)
  };
}
function $h(e, t) {
  var r;
  e.isGroup && (r = t(e)), r || e.traverse(t);
}
function Xl(e, t) {
  if (e)
    if (N(e))
      for (var r = 0; r < e.length; r++)
        $h(e[r], t);
    else
      $h(e, t);
}
we("circle", Vl);
we("ellipse", vp);
we("sector", Jr);
we("ring", _p);
we("polygon", wp);
we("polyline", No);
we("rect", Dt);
we("line", Zn);
we("bezierCurve", Tp);
we("arc", Hl);
const vw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  updateProps: me,
  initProps: Ne,
  removeElement: Ap,
  removeElementWithFadeOut: lo,
  isElementRemoved: Cn,
  extendShape: Q1,
  extendPath: j1,
  registerShape: we,
  getShapeClass: tw,
  makePath: Wl,
  makeImage: Mp,
  mergePath: ew,
  resizePath: Lp,
  subPixelOptimizeLine: rw,
  subPixelOptimizeRect: iw,
  subPixelOptimize: nw,
  getTransform: aw,
  applyTransform: $l,
  transformDirection: ow,
  groupTransition: uw,
  clipPointsByRect: lw,
  clipRectByRect: fw,
  createIcon: Ul,
  linePolygonIntersect: hw,
  lineLineIntersect: Ip,
  setTooltipConfig: Yl,
  traverseElements: Xl,
  Group: ye,
  Image: ki,
  Text: Ft,
  Circle: Vl,
  Ellipse: vp,
  Sector: Jr,
  Ring: _p,
  Polygon: wp,
  Polyline: No,
  Rect: Dt,
  Line: Zn,
  BezierCurve: Tp,
  Arc: Hl,
  IncrementalDisplayable: q1,
  CompoundPath: F1,
  LinearGradient: G1,
  RadialGradient: $1,
  BoundingRect: st,
  OrientedBoundingRect: uo,
  Point: G,
  Path: it
}, Symbol.toStringTag, { value: "Module" }));
var ko = {};
function dw(e, t) {
  for (var r = 0; r < Be.length; r++) {
    var i = Be[r], n = t[i], a = e.ensureState(i);
    a.style = a.style || {}, a.style.text = n;
  }
  var o = e.currentStates.slice();
  e.clearStates(!0), e.setStyle({
    text: t.normal
  }), e.useStates(o, !0);
}
function Uh(e, t, r) {
  var i = e.labelFetcher, n = e.labelDataIndex, a = e.labelDimIndex, o = t.normal, s;
  i && (s = i.getFormattedLabel(n, "normal", null, a, o && o.get("formatter"), r != null ? {
    interpolatedValue: r
  } : null)), s == null && (s = J(e.defaultText) ? e.defaultText(n, e, r) : e.defaultText);
  for (var u = {
    normal: s
  }, l = 0; l < Be.length; l++) {
    var f = Be[l], h = t[f];
    u[f] = tt(i ? i.getFormattedLabel(n, f, null, a, h && h.get("formatter")) : null, s);
  }
  return u;
}
function ql(e, t, r, i) {
  r = r || ko;
  for (var n = e instanceof Ft, a = !1, o = 0; o < so.length; o++) {
    var s = t[so[o]];
    if (s && s.getShallow("show")) {
      a = !0;
      break;
    }
  }
  var u = n ? e : e.getTextContent();
  if (a) {
    n || (u || (u = new Ft(), e.setTextContent(u)), e.stateProxy && (u.stateProxy = e.stateProxy));
    var l = Uh(r, t), f = t.normal, h = !!f.getShallow("show"), c = hr(f, i && i.normal, r, !1, !n);
    c.text = l.normal, n || e.setTextConfig(Yh(f, r, !1));
    for (var o = 0; o < Be.length; o++) {
      var v = Be[o], s = t[v];
      if (s) {
        var d = u.ensureState(v), _ = !!tt(s.getShallow("show"), h);
        if (_ !== h && (d.ignore = !_), d.style = hr(s, i && i[v], r, !0, !n), d.style.text = l[v], !n) {
          var p = e.ensureState(v);
          p.textConfig = Yh(s, r, !0);
        }
      }
    }
    u.silent = !!f.getShallow("silent"), u.style.x != null && (c.x = u.style.x), u.style.y != null && (c.y = u.style.y), u.ignore = !h, u.useStyle(c), u.dirty(), r.enableTextSetter && (Zl(u).setLabelText = function(g) {
      var y = Uh(r, t, g);
      dw(u, y);
    });
  } else
    u && (u.ignore = !0);
  e.dirty();
}
function Rp(e, t) {
  t = t || "label";
  for (var r = {
    normal: e.getModel(t)
  }, i = 0; i < Be.length; i++) {
    var n = Be[i];
    r[n] = e.getModel([n, t]);
  }
  return r;
}
function hr(e, t, r, i, n) {
  var a = {};
  return pw(a, e, r, i, n), t && O(a, t), a;
}
function Yh(e, t, r) {
  t = t || {};
  var i = {}, n, a = e.getShallow("rotate"), o = tt(e.getShallow("distance"), r ? null : 5), s = e.getShallow("offset");
  return n = e.getShallow("position") || (r ? null : "inside"), n === "outside" && (n = t.defaultOutsidePosition || "top"), n != null && (i.position = n), s != null && (i.offset = s), a != null && (a *= Math.PI / 180, i.rotation = a), o != null && (i.distance = o), i.outsideFill = e.get("color") === "inherit" ? t.inheritColor || null : "auto", i;
}
function pw(e, t, r, i, n) {
  r = r || ko;
  var a = t.ecModel, o = a && a.option.textStyle, s = gw(t), u;
  if (s) {
    u = {};
    for (var l in s)
      if (s.hasOwnProperty(l)) {
        var f = t.getModel(["rich", l]);
        Kh(u[l] = {}, f, o, r, i, n, !1, !0);
      }
  }
  u && (e.rich = u);
  var h = t.get("overflow");
  h && (e.overflow = h);
  var c = t.get("minMargin");
  c != null && (e.margin = c), Kh(e, t, o, r, i, n, !0, !1);
}
function gw(e) {
  for (var t; e && e !== e.ecModel; ) {
    var r = (e.option || ko).rich;
    if (r) {
      t = t || {};
      for (var i = yt(r), n = 0; n < i.length; n++) {
        var a = i[n];
        t[a] = 1;
      }
    }
    e = e.parentModel;
  }
  return t;
}
var Xh = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], qh = ["align", "lineHeight", "width", "height", "tag", "verticalAlign"], Zh = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
function Kh(e, t, r, i, n, a, o, s) {
  r = !n && r || ko;
  var u = i && i.inheritColor, l = t.getShallow("color"), f = t.getShallow("textBorderColor"), h = tt(t.getShallow("opacity"), r.opacity);
  (l === "inherit" || l === "auto") && (process.env.NODE_ENV !== "production" && l === "auto" && mt("color: 'auto'", "color: 'inherit'"), u ? l = u : l = null), (f === "inherit" || f === "auto") && (process.env.NODE_ENV !== "production" && f === "auto" && mt("color: 'auto'", "color: 'inherit'"), u ? f = u : f = null), a || (l = l || r.color, f = f || r.textBorderColor), l != null && (e.fill = l), f != null && (e.stroke = f);
  var c = tt(t.getShallow("textBorderWidth"), r.textBorderWidth);
  c != null && (e.lineWidth = c);
  var v = tt(t.getShallow("textBorderType"), r.textBorderType);
  v != null && (e.lineDash = v);
  var d = tt(t.getShallow("textBorderDashOffset"), r.textBorderDashOffset);
  d != null && (e.lineDashOffset = d), !n && h == null && !s && (h = i && i.defaultOpacity), h != null && (e.opacity = h), !n && !a && e.fill == null && i.inheritColor && (e.fill = i.inheritColor);
  for (var _ = 0; _ < Xh.length; _++) {
    var p = Xh[_], g = tt(t.getShallow(p), r[p]);
    g != null && (e[p] = g);
  }
  for (var _ = 0; _ < qh.length; _++) {
    var p = qh[_], g = t.getShallow(p);
    g != null && (e[p] = g);
  }
  if (e.verticalAlign == null) {
    var y = t.getShallow("baseline");
    y != null && (e.verticalAlign = y);
  }
  if (!o || !i.disableBox) {
    for (var _ = 0; _ < Zh.length; _++) {
      var p = Zh[_], g = t.getShallow(p);
      g != null && (e[p] = g);
    }
    var m = t.getShallow("borderType");
    m != null && (e.borderDash = m), (e.backgroundColor === "auto" || e.backgroundColor === "inherit") && u && (process.env.NODE_ENV !== "production" && e.backgroundColor === "auto" && mt("backgroundColor: 'auto'", "backgroundColor: 'inherit'"), e.backgroundColor = u), (e.borderColor === "auto" || e.borderColor === "inherit") && u && (process.env.NODE_ENV !== "production" && e.borderColor === "auto" && mt("borderColor: 'auto'", "borderColor: 'inherit'"), e.borderColor = u);
  }
}
function _w(e, t) {
  var r = t && t.getModel("textStyle");
  return Le([
    e.fontStyle || r && r.getShallow("fontStyle") || "",
    e.fontWeight || r && r.getShallow("fontWeight") || "",
    (e.fontSize || r && r.getShallow("fontSize") || 12) + "px",
    e.fontFamily || r && r.getShallow("fontFamily") || "sans-serif"
  ].join(" "));
}
var Zl = At();
function yw(e, t, r, i) {
  if (!!e) {
    var n = Zl(e);
    n.prevValue = n.value, n.value = r;
    var a = t.normal;
    n.valueAnimation = a.get("valueAnimation"), n.valueAnimation && (n.precision = a.get("precision"), n.defaultInterpolatedText = i, n.statesModels = t);
  }
}
var mw = ["textStyle", "color"], Ls = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], Is = new Ft(), ww = function() {
  function e() {
  }
  return e.prototype.getTextColor = function(t) {
    var r = this.ecModel;
    return this.getShallow("color") || (!t && r ? r.get(mw) : null);
  }, e.prototype.getFont = function() {
    return _w({
      fontStyle: this.getShallow("fontStyle"),
      fontWeight: this.getShallow("fontWeight"),
      fontSize: this.getShallow("fontSize"),
      fontFamily: this.getShallow("fontFamily")
    }, this.ecModel);
  }, e.prototype.getTextRect = function(t) {
    for (var r = {
      text: t,
      verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
    }, i = 0; i < Ls.length; i++)
      r[Ls[i]] = this.getShallow(Ls[i]);
    return Is.useStyle(r), Is.update(), Is.getBoundingRect();
  }, e;
}();
const Sw = ww;
var Op = [
  ["lineWidth", "width"],
  ["stroke", "color"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "type"],
  ["lineDashOffset", "dashOffset"],
  ["lineCap", "cap"],
  ["lineJoin", "join"],
  ["miterLimit"]
], bw = On(Op), xw = function() {
  function e() {
  }
  return e.prototype.getLineStyle = function(t) {
    return bw(this, t);
  }, e;
}(), Np = [
  ["fill", "color"],
  ["stroke", "borderColor"],
  ["lineWidth", "borderWidth"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "borderType"],
  ["lineDashOffset", "borderDashOffset"],
  ["lineCap", "borderCap"],
  ["lineJoin", "borderJoin"],
  ["miterLimit", "borderMiterLimit"]
], Tw = On(Np), Cw = function() {
  function e() {
  }
  return e.prototype.getItemStyle = function(t, r) {
    return Tw(this, t, r);
  }, e;
}(), jr = function() {
  function e(t, r, i) {
    this.parentModel = r, this.ecModel = i, this.option = t;
  }
  return e.prototype.init = function(t, r, i) {
  }, e.prototype.mergeOption = function(t, r) {
    ht(this.option, t, !0);
  }, e.prototype.get = function(t, r) {
    return t == null ? this.option : this._doGet(this.parsePath(t), !r && this.parentModel);
  }, e.prototype.getShallow = function(t, r) {
    var i = this.option, n = i == null ? i : i[t];
    if (n == null && !r) {
      var a = this.parentModel;
      a && (n = a.getShallow(t));
    }
    return n;
  }, e.prototype.getModel = function(t, r) {
    var i = t != null, n = i ? this.parsePath(t) : null, a = i ? this._doGet(n) : this.option;
    return r = r || this.parentModel && this.parentModel.getModel(this.resolveParentPath(n)), new e(a, r, this.ecModel);
  }, e.prototype.isEmpty = function() {
    return this.option == null;
  }, e.prototype.restoreData = function() {
  }, e.prototype.clone = function() {
    var t = this.constructor;
    return new t(j(this.option));
  }, e.prototype.parsePath = function(t) {
    return typeof t == "string" ? t.split(".") : t;
  }, e.prototype.resolveParentPath = function(t) {
    return t;
  }, e.prototype.isAnimationEnabled = function() {
    if (!Z.node && this.option) {
      if (this.option.animation != null)
        return !!this.option.animation;
      if (this.parentModel)
        return this.parentModel.isAnimationEnabled();
    }
  }, e.prototype._doGet = function(t, r) {
    var i = this.option;
    if (!t)
      return i;
    for (var n = 0; n < t.length && !(!!t[n] && (i = i && typeof i == "object" ? i[t[n]] : null, i == null)); n++)
      ;
    return i == null && r && (i = r._doGet(this.resolveParentPath(t), r.parentModel)), i;
  }, e;
}();
Rl(jr);
Qm(jr);
qe(jr, xw);
qe(jr, Cw);
qe(jr, r0);
qe(jr, Sw);
const It = jr;
var Dw = Math.round(Math.random() * 10);
function Bo(e) {
  return [e || "", Dw++].join("_");
}
function Aw(e) {
  var t = {};
  e.registerSubTypeDefaulter = function(r, i) {
    var n = Ie(r);
    t[n.main] = i;
  }, e.determineSubType = function(r, i) {
    var n = i.type;
    if (!n) {
      var a = Ie(r).main;
      e.hasSubTypes(r) && t[a] && (n = t[a](i));
    }
    return n;
  };
}
function Ew(e, t) {
  e.topologicalTravel = function(a, o, s, u) {
    if (!a.length)
      return;
    var l = r(o), f = l.graph, h = l.noEntryList, c = {};
    for (A(a, function(y) {
      c[y] = !0;
    }); h.length; ) {
      var v = h.pop(), d = f[v], _ = !!c[v];
      _ && (s.call(u, v, d.originalDeps.slice()), delete c[v]), A(d.successor, _ ? g : p);
    }
    A(c, function() {
      var y = "";
      throw process.env.NODE_ENV !== "production" && (y = oo("Circular dependency may exists: ", c, a, o)), new Error(y);
    });
    function p(y) {
      f[y].entryCount--, f[y].entryCount === 0 && h.push(y);
    }
    function g(y) {
      c[y] = !0, p(y);
    }
  };
  function r(a) {
    var o = {}, s = [];
    return A(a, function(u) {
      var l = i(o, u), f = l.originalDeps = t(u), h = n(f, a);
      l.entryCount = h.length, l.entryCount === 0 && s.push(u), A(h, function(c) {
        nt(l.predecessor, c) < 0 && l.predecessor.push(c);
        var v = i(o, c);
        nt(v.successor, c) < 0 && v.successor.push(u);
      });
    }), {
      graph: o,
      noEntryList: s
    };
  }
  function i(a, o) {
    return a[o] || (a[o] = {
      predecessor: [],
      successor: []
    }), a[o];
  }
  function n(a, o) {
    var s = [];
    return A(a, function(u) {
      nt(o, u) >= 0 && s.push(u);
    }), s;
  }
}
function kp(e, t) {
  return ht(ht({}, e, !0), t, !0);
}
const Mw = {
  time: {
    month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  legend: {
    selector: {
      all: "All",
      inverse: "Inv"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "Box Select",
        polygon: "Lasso Select",
        lineX: "Horizontally Select",
        lineY: "Vertically Select",
        keep: "Keep Selections",
        clear: "Clear Selections"
      }
    },
    dataView: {
      title: "Data View",
      lang: ["Data View", "Close", "Refresh"]
    },
    dataZoom: {
      title: {
        zoom: "Zoom",
        back: "Zoom Reset"
      }
    },
    magicType: {
      title: {
        line: "Switch to Line Chart",
        bar: "Switch to Bar Chart",
        stack: "Stack",
        tiled: "Tile"
      }
    },
    restore: {
      title: "Restore"
    },
    saveAsImage: {
      title: "Save as Image",
      lang: ["Right Click to Save Image"]
    }
  },
  series: {
    typeNames: {
      pie: "Pie chart",
      bar: "Bar chart",
      line: "Line chart",
      scatter: "Scatter plot",
      effectScatter: "Ripple scatter plot",
      radar: "Radar chart",
      tree: "Tree",
      treemap: "Treemap",
      boxplot: "Boxplot",
      candlestick: "Candlestick",
      k: "K line chart",
      heatmap: "Heat map",
      map: "Map",
      parallel: "Parallel coordinate map",
      lines: "Line graph",
      graph: "Relationship graph",
      sankey: "Sankey diagram",
      funnel: "Funnel chart",
      gauge: "Gauge",
      pictorialBar: "Pictorial bar",
      themeRiver: "Theme River Map",
      sunburst: "Sunburst"
    }
  },
  aria: {
    general: {
      withTitle: 'This is a chart about "{title}"',
      withoutTitle: "This is a chart"
    },
    series: {
      single: {
        prefix: "",
        withName: " with type {seriesType} named {seriesName}.",
        withoutName: " with type {seriesType}."
      },
      multiple: {
        prefix: ". It consists of {seriesCount} series count.",
        withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
        withoutName: " The {seriesId} series is a {seriesType}.",
        separator: {
          middle: "",
          end: ""
        }
      }
    },
    data: {
      allData: "The data is as follows: ",
      partialData: "The first {displayCnt} items are: ",
      withName: "the data for {name} is {value}",
      withoutName: "{value}",
      separator: {
        middle: ", ",
        end: ". "
      }
    }
  }
}, Pw = {
  time: {
    month: ["\u4E00\u6708", "\u4E8C\u6708", "\u4E09\u6708", "\u56DB\u6708", "\u4E94\u6708", "\u516D\u6708", "\u4E03\u6708", "\u516B\u6708", "\u4E5D\u6708", "\u5341\u6708", "\u5341\u4E00\u6708", "\u5341\u4E8C\u6708"],
    monthAbbr: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"],
    dayOfWeek: ["\u661F\u671F\u65E5", "\u661F\u671F\u4E00", "\u661F\u671F\u4E8C", "\u661F\u671F\u4E09", "\u661F\u671F\u56DB", "\u661F\u671F\u4E94", "\u661F\u671F\u516D"],
    dayOfWeekAbbr: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"]
  },
  legend: {
    selector: {
      all: "\u5168\u9009",
      inverse: "\u53CD\u9009"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "\u77E9\u5F62\u9009\u62E9",
        polygon: "\u5708\u9009",
        lineX: "\u6A2A\u5411\u9009\u62E9",
        lineY: "\u7EB5\u5411\u9009\u62E9",
        keep: "\u4FDD\u6301\u9009\u62E9",
        clear: "\u6E05\u9664\u9009\u62E9"
      }
    },
    dataView: {
      title: "\u6570\u636E\u89C6\u56FE",
      lang: ["\u6570\u636E\u89C6\u56FE", "\u5173\u95ED", "\u5237\u65B0"]
    },
    dataZoom: {
      title: {
        zoom: "\u533A\u57DF\u7F29\u653E",
        back: "\u533A\u57DF\u7F29\u653E\u8FD8\u539F"
      }
    },
    magicType: {
      title: {
        line: "\u5207\u6362\u4E3A\u6298\u7EBF\u56FE",
        bar: "\u5207\u6362\u4E3A\u67F1\u72B6\u56FE",
        stack: "\u5207\u6362\u4E3A\u5806\u53E0",
        tiled: "\u5207\u6362\u4E3A\u5E73\u94FA"
      }
    },
    restore: {
      title: "\u8FD8\u539F"
    },
    saveAsImage: {
      title: "\u4FDD\u5B58\u4E3A\u56FE\u7247",
      lang: ["\u53F3\u952E\u53E6\u5B58\u4E3A\u56FE\u7247"]
    }
  },
  series: {
    typeNames: {
      pie: "\u997C\u56FE",
      bar: "\u67F1\u72B6\u56FE",
      line: "\u6298\u7EBF\u56FE",
      scatter: "\u6563\u70B9\u56FE",
      effectScatter: "\u6D9F\u6F2A\u6563\u70B9\u56FE",
      radar: "\u96F7\u8FBE\u56FE",
      tree: "\u6811\u56FE",
      treemap: "\u77E9\u5F62\u6811\u56FE",
      boxplot: "\u7BB1\u578B\u56FE",
      candlestick: "K\u7EBF\u56FE",
      k: "K\u7EBF\u56FE",
      heatmap: "\u70ED\u529B\u56FE",
      map: "\u5730\u56FE",
      parallel: "\u5E73\u884C\u5750\u6807\u56FE",
      lines: "\u7EBF\u56FE",
      graph: "\u5173\u7CFB\u56FE",
      sankey: "\u6851\u57FA\u56FE",
      funnel: "\u6F0F\u6597\u56FE",
      gauge: "\u4EEA\u8868\u76D8\u56FE",
      pictorialBar: "\u8C61\u5F62\u67F1\u56FE",
      themeRiver: "\u4E3B\u9898\u6CB3\u6D41\u56FE",
      sunburst: "\u65ED\u65E5\u56FE"
    }
  },
  aria: {
    general: {
      withTitle: "\u8FD9\u662F\u4E00\u4E2A\u5173\u4E8E\u201C{title}\u201D\u7684\u56FE\u8868\u3002",
      withoutTitle: "\u8FD9\u662F\u4E00\u4E2A\u56FE\u8868\uFF0C"
    },
    series: {
      single: {
        prefix: "",
        withName: "\u56FE\u8868\u7C7B\u578B\u662F{seriesType}\uFF0C\u8868\u793A{seriesName}\u3002",
        withoutName: "\u56FE\u8868\u7C7B\u578B\u662F{seriesType}\u3002"
      },
      multiple: {
        prefix: "\u5B83\u7531{seriesCount}\u4E2A\u56FE\u8868\u7CFB\u5217\u7EC4\u6210\u3002",
        withName: "\u7B2C{seriesId}\u4E2A\u7CFB\u5217\u662F\u4E00\u4E2A\u8868\u793A{seriesName}\u7684{seriesType}\uFF0C",
        withoutName: "\u7B2C{seriesId}\u4E2A\u7CFB\u5217\u662F\u4E00\u4E2A{seriesType}\uFF0C",
        separator: {
          middle: "\uFF1B",
          end: "\u3002"
        }
      }
    },
    data: {
      allData: "\u5176\u6570\u636E\u662F\u2014\u2014",
      partialData: "\u5176\u4E2D\uFF0C\u524D{displayCnt}\u9879\u662F\u2014\u2014",
      withName: "{name}\u7684\u6570\u636E\u662F{value}",
      withoutName: "{value}",
      separator: {
        middle: "\uFF0C",
        end: ""
      }
    }
  }
};
var co = "ZH", Kl = "EN", Nn = Kl, $a = {}, Ql = {}, Bp = Z.domSupported ? function() {
  var e = (document.documentElement.lang || navigator.language || navigator.browserLanguage).toUpperCase();
  return e.indexOf(co) > -1 ? co : Nn;
}() : Nn;
function zp(e, t) {
  e = e.toUpperCase(), Ql[e] = new It(t), $a[e] = t;
}
function Lw(e) {
  if (z(e)) {
    var t = $a[e.toUpperCase()] || {};
    return e === co || e === Kl ? j(t) : ht(j(t), j($a[Nn]), !1);
  } else
    return ht(j(e), j($a[Nn]), !1);
}
function Iw(e) {
  return Ql[e];
}
function Rw() {
  return Ql[Nn];
}
zp(Kl, Mw);
zp(co, Pw);
function Lr(e, t) {
  return e += "", "0000".substr(0, t - e.length) + e;
}
function Fp(e, t, r, i) {
  var n = Po(e), a = n[Ow(r)](), o = n[Nw(r)]() + 1, s = Math.floor((o - 1) / 3) + 1, u = n[kw(r)](), l = n["get" + (r ? "UTC" : "") + "Day"](), f = n[Bw(r)](), h = (f - 1) % 12 + 1, c = n[zw(r)](), v = n[Fw(r)](), d = n[Vw(r)](), _ = i instanceof It ? i : Iw(i || Bp) || Rw(), p = _.getModel("time"), g = p.get("month"), y = p.get("monthAbbr"), m = p.get("dayOfWeek"), w = p.get("dayOfWeekAbbr");
  return (t || "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, a % 100 + "").replace(/{Q}/g, s + "").replace(/{MMMM}/g, g[o - 1]).replace(/{MMM}/g, y[o - 1]).replace(/{MM}/g, Lr(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, Lr(u, 2)).replace(/{d}/g, u + "").replace(/{eeee}/g, m[l]).replace(/{ee}/g, w[l]).replace(/{e}/g, l + "").replace(/{HH}/g, Lr(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, Lr(h + "", 2)).replace(/{h}/g, h + "").replace(/{mm}/g, Lr(c, 2)).replace(/{m}/g, c + "").replace(/{ss}/g, Lr(v, 2)).replace(/{s}/g, v + "").replace(/{SSS}/g, Lr(d, 3)).replace(/{S}/g, d + "");
}
function Ow(e) {
  return e ? "getUTCFullYear" : "getFullYear";
}
function Nw(e) {
  return e ? "getUTCMonth" : "getMonth";
}
function kw(e) {
  return e ? "getUTCDate" : "getDate";
}
function Bw(e) {
  return e ? "getUTCHours" : "getHours";
}
function zw(e) {
  return e ? "getUTCMinutes" : "getMinutes";
}
function Fw(e) {
  return e ? "getUTCSeconds" : "getSeconds";
}
function Vw(e) {
  return e ? "getUTCMilliseconds" : "getMilliseconds";
}
function Hw(e) {
  if (!Md(e))
    return z(e) ? e : "-";
  var t = (e + "").split(".");
  return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
}
function Vp(e, t) {
  return e = (e || "").toLowerCase().replace(/-(.)/g, function(r, i) {
    return i.toUpperCase();
  }), t && e && (e = e.charAt(0).toUpperCase() + e.slice(1)), e;
}
var zo = jv, Gw = /([&<>"'])/g, Ww = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function ce(e) {
  return e == null ? "" : (e + "").replace(Gw, function(t, r) {
    return Ww[r];
  });
}
function qu(e, t, r) {
  var i = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
  function n(f) {
    return f && Le(f) ? f : "-";
  }
  function a(f) {
    return !!(f != null && !isNaN(f) && isFinite(f));
  }
  var o = t === "time", s = e instanceof Date;
  if (o || s) {
    var u = o ? Po(e) : e;
    if (isNaN(+u)) {
      if (s)
        return "-";
    } else
      return Fp(u, i, r);
  }
  if (t === "ordinal")
    return Ka(e) ? n(e) : dt(e) && a(e) ? e + "" : "-";
  var l = ao(e);
  return a(l) ? Hw(l) : Ka(e) ? n(e) : typeof e == "boolean" ? e + "" : "-";
}
var Qh = ["a", "b", "c", "d", "e", "f", "g"], Rs = function(e, t) {
  return "{" + e + (t == null ? "" : t) + "}";
};
function Hp(e, t, r) {
  N(t) || (t = [t]);
  var i = t.length;
  if (!i)
    return "";
  for (var n = t[0].$vars || [], a = 0; a < n.length; a++) {
    var o = Qh[a];
    e = e.replace(Rs(o), Rs(o, 0));
  }
  for (var s = 0; s < i; s++)
    for (var u = 0; u < n.length; u++) {
      var l = t[s][n[u]];
      e = e.replace(Rs(Qh[u], s), r ? ce(l) : l);
    }
  return e;
}
function $w(e, t) {
  var r = z(e) ? {
    color: e,
    extraCssText: t
  } : e || {}, i = r.color, n = r.type;
  t = r.extraCssText;
  var a = r.renderMode || "html";
  if (!i)
    return "";
  if (a === "html")
    return n === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + ce(i) + ";" + (t || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + ce(i) + ";" + (t || "") + '"></span>';
  var o = r.markerId || "markerX";
  return {
    renderMode: a,
    content: "{" + o + "|}  ",
    style: n === "subItem" ? {
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: i
    } : {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: i
    }
  };
}
function kn(e, t) {
  return t = t || "transparent", z(e) ? e : F(e) && e.colorStops && (e.colorStops[0] || {}).color || t;
}
function Jh(e, t) {
  if (t === "_blank" || t === "blank") {
    var r = window.open();
    r.opener = null, r.location.href = e;
  } else
    window.open(e, t);
}
var Ua = A, Uw = ["left", "right", "top", "bottom", "width", "height"], ga = [["width", "left", "right"], ["height", "top", "bottom"]];
function Jl(e, t, r, i, n) {
  var a = 0, o = 0;
  i == null && (i = 1 / 0), n == null && (n = 1 / 0);
  var s = 0;
  t.eachChild(function(u, l) {
    var f = u.getBoundingRect(), h = t.childAt(l + 1), c = h && h.getBoundingRect(), v, d;
    if (e === "horizontal") {
      var _ = f.width + (c ? -c.x + f.x : 0);
      v = a + _, v > i || u.newline ? (a = 0, v = _, o += s + r, s = f.height) : s = Math.max(s, f.height);
    } else {
      var p = f.height + (c ? -c.y + f.y : 0);
      d = o + p, d > n || u.newline ? (a += s + r, o = 0, d = p, s = f.width) : s = Math.max(s, f.width);
    }
    u.newline || (u.x = a, u.y = o, u.markRedraw(), e === "horizontal" ? a = v + r : o = d + r);
  });
}
var Dn = Jl;
_t(Jl, "vertical");
_t(Jl, "horizontal");
function Bn(e, t, r) {
  r = zo(r || 0);
  var i = t.width, n = t.height, a = ft(e.left, i), o = ft(e.top, n), s = ft(e.right, i), u = ft(e.bottom, n), l = ft(e.width, i), f = ft(e.height, n), h = r[2] + r[0], c = r[1] + r[3], v = e.aspect;
  switch (isNaN(l) && (l = i - s - c - a), isNaN(f) && (f = n - u - h - o), v != null && (isNaN(l) && isNaN(f) && (v > i / n ? l = i * 0.8 : f = n * 0.8), isNaN(l) && (l = v * f), isNaN(f) && (f = l / v)), isNaN(a) && (a = i - s - l - c), isNaN(o) && (o = n - u - f - h), e.left || e.right) {
    case "center":
      a = i / 2 - l / 2 - r[3];
      break;
    case "right":
      a = i - l - c;
      break;
  }
  switch (e.top || e.bottom) {
    case "middle":
    case "center":
      o = n / 2 - f / 2 - r[0];
      break;
    case "bottom":
      o = n - f - h;
      break;
  }
  a = a || 0, o = o || 0, isNaN(l) && (l = i - c - a - (s || 0)), isNaN(f) && (f = n - h - o - (u || 0));
  var d = new st(a + r[3], o + r[0], l, f);
  return d.margin = r, d;
}
function vo(e) {
  var t = e.layoutMode || e.constructor.layoutMode;
  return F(t) ? t : t ? {
    type: t
  } : null;
}
function zn(e, t, r) {
  var i = r && r.ignoreSize;
  !N(i) && (i = [i, i]);
  var n = o(ga[0], 0), a = o(ga[1], 1);
  l(ga[0], e, n), l(ga[1], e, a);
  function o(f, h) {
    var c = {}, v = 0, d = {}, _ = 0, p = 2;
    if (Ua(f, function(m) {
      d[m] = e[m];
    }), Ua(f, function(m) {
      s(t, m) && (c[m] = d[m] = t[m]), u(c, m) && v++, u(d, m) && _++;
    }), i[h])
      return u(t, f[1]) ? d[f[2]] = null : u(t, f[2]) && (d[f[1]] = null), d;
    if (_ === p || !v)
      return d;
    if (v >= p)
      return c;
    for (var g = 0; g < f.length; g++) {
      var y = f[g];
      if (!s(c, y) && s(e, y)) {
        c[y] = e[y];
        break;
      }
    }
    return c;
  }
  function s(f, h) {
    return f.hasOwnProperty(h);
  }
  function u(f, h) {
    return f[h] != null && f[h] !== "auto";
  }
  function l(f, h, c) {
    Ua(f, function(v) {
      h[v] = c[v];
    });
  }
}
function jl(e) {
  return Yw({}, e);
}
function Yw(e, t) {
  return t && e && Ua(Uw, function(r) {
    t.hasOwnProperty(r) && (e[r] = t[r]);
  }), e;
}
var Xw = At(), Bi = function(e) {
  k(t, e);
  function t(r, i, n) {
    var a = e.call(this, r, i, n) || this;
    return a.uid = Bo("ec_cpt_model"), a;
  }
  return t.prototype.init = function(r, i, n) {
    this.mergeDefaultAndTheme(r, n);
  }, t.prototype.mergeDefaultAndTheme = function(r, i) {
    var n = vo(this), a = n ? jl(r) : {}, o = i.getTheme();
    ht(r, o.get(this.mainType)), ht(r, this.getDefaultOption()), n && zn(r, a, n);
  }, t.prototype.mergeOption = function(r, i) {
    ht(this.option, r, !0);
    var n = vo(this);
    n && zn(this.option, r, n);
  }, t.prototype.optionUpdated = function(r, i) {
  }, t.prototype.getDefaultOption = function() {
    var r = this.constructor;
    if (!qm(r))
      return r.defaultOption;
    var i = Xw(this);
    if (!i.defaultOption) {
      for (var n = [], a = r; a; ) {
        var o = a.prototype.defaultOption;
        o && n.push(o), a = a.superClass;
      }
      for (var s = {}, u = n.length - 1; u >= 0; u--)
        s = ht(s, n[u], !0);
      i.defaultOption = s;
    }
    return i.defaultOption;
  }, t.prototype.getReferringComponents = function(r, i) {
    var n = r + "Index", a = r + "Id";
    return Xn(this.ecModel, r, {
      index: this.get(n, !0),
      id: this.get(a, !0)
    }, i);
  }, t.prototype.getBoxLayoutParams = function() {
    var r = this;
    return {
      left: r.get("left"),
      top: r.get("top"),
      right: r.get("right"),
      bottom: r.get("bottom"),
      width: r.get("width"),
      height: r.get("height")
    };
  }, t.prototype.getZLevelKey = function() {
    return "";
  }, t.prototype.setZLevel = function(r) {
    this.option.zlevel = r;
  }, t.protoInitialize = function() {
    var r = t.prototype;
    r.type = "component", r.id = "", r.name = "", r.mainType = "", r.subType = "", r.componentIndex = 0;
  }(), t;
}(It);
kd(Bi, It);
Ol(Bi);
Aw(Bi);
Ew(Bi, qw);
function qw(e) {
  var t = [];
  return A(Bi.getClassesByMainType(e), function(r) {
    t = t.concat(r.dependencies || r.prototype.dependencies || []);
  }), t = q(t, function(r) {
    return Ie(r).main;
  }), e !== "dataset" && nt(t, "dataset") <= 0 && t.unshift("dataset"), t;
}
const lt = Bi;
var Gp = "";
typeof navigator < "u" && (Gp = navigator.platform || "");
var hi = "rgba(0, 0, 0, 0.2)";
const Zw = {
  darkMode: "auto",
  colorBy: "series",
  color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
  gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
  aria: {
    decal: {
      decals: [{
        color: hi,
        dashArrayX: [1, 0],
        dashArrayY: [2, 5],
        symbolSize: 1,
        rotation: Math.PI / 6
      }, {
        color: hi,
        symbol: "circle",
        dashArrayX: [[8, 8], [0, 8, 8, 0]],
        dashArrayY: [6, 0],
        symbolSize: 0.8
      }, {
        color: hi,
        dashArrayX: [1, 0],
        dashArrayY: [4, 3],
        rotation: -Math.PI / 4
      }, {
        color: hi,
        dashArrayX: [[6, 6], [0, 6, 6, 0]],
        dashArrayY: [6, 0]
      }, {
        color: hi,
        dashArrayX: [[1, 0], [1, 6]],
        dashArrayY: [1, 0, 6, 0],
        rotation: Math.PI / 4
      }, {
        color: hi,
        symbol: "triangle",
        dashArrayX: [[9, 9], [0, 9, 9, 0]],
        dashArrayY: [7, 2],
        symbolSize: 0.75
      }]
    }
  },
  textStyle: {
    fontFamily: Gp.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal"
  },
  blendMode: null,
  stateAnimation: {
    duration: 300,
    easing: "cubicOut"
  },
  animation: "auto",
  animationDuration: 1e3,
  animationDurationUpdate: 500,
  animationEasing: "cubicInOut",
  animationEasingUpdate: "cubicInOut",
  animationThreshold: 2e3,
  progressiveThreshold: 3e3,
  progressive: 400,
  hoverLayerThreshold: 3e3,
  useUTC: !1
};
var Zu = Q(["tooltip", "label", "itemName", "itemId", "itemGroupId", "seriesName"]), ve = "original", qt = "arrayRows", Se = "objectRows", Fe = "keyedColumns", Ye = "typedArray", Wp = "unknown", Xe = "column", zi = "row", xt = {
  Must: 1,
  Might: 2,
  Not: 3
}, $p = At();
function Kw(e) {
  $p(e).datasetMap = Q();
}
function Qw(e, t, r) {
  var i = {}, n = tf(t);
  if (!n || !e)
    return i;
  var a = [], o = [], s = t.ecModel, u = $p(s).datasetMap, l = n.uid + "_" + r.seriesLayoutBy, f, h;
  e = e.slice(), A(e, function(_, p) {
    var g = F(_) ? _ : e[p] = {
      name: _
    };
    g.type === "ordinal" && f == null && (f = p, h = d(g)), i[g.name] = [];
  });
  var c = u.get(l) || u.set(l, {
    categoryWayDim: h,
    valueWayDim: 0
  });
  A(e, function(_, p) {
    var g = _.name, y = d(_);
    if (f == null) {
      var m = c.valueWayDim;
      v(i[g], m, y), v(o, m, y), c.valueWayDim += y;
    } else if (f === p)
      v(i[g], 0, y), v(a, 0, y);
    else {
      var m = c.categoryWayDim;
      v(i[g], m, y), v(o, m, y), c.categoryWayDim += y;
    }
  });
  function v(_, p, g) {
    for (var y = 0; y < g; y++)
      _.push(p + y);
  }
  function d(_) {
    var p = _.dimsDef;
    return p ? p.length : 1;
  }
  return a.length && (i.itemName = a), o.length && (i.seriesName = o), i;
}
function Jw(e, t, r) {
  var i = {}, n = tf(e);
  if (!n)
    return i;
  var a = t.sourceFormat, o = t.dimensionsDefine, s;
  (a === Se || a === Fe) && A(o, function(f, h) {
    (F(f) ? f.name : f) === "name" && (s = h);
  });
  var u = function() {
    for (var f = {}, h = {}, c = [], v = 0, d = Math.min(5, r); v < d; v++) {
      var _ = Yp(t.data, a, t.seriesLayoutBy, o, t.startIndex, v);
      c.push(_);
      var p = _ === xt.Not;
      if (p && f.v == null && v !== s && (f.v = v), (f.n == null || f.n === f.v || !p && c[f.n] === xt.Not) && (f.n = v), g(f) && c[f.n] !== xt.Not)
        return f;
      p || (_ === xt.Might && h.v == null && v !== s && (h.v = v), (h.n == null || h.n === h.v) && (h.n = v));
    }
    function g(y) {
      return y.v != null && y.n != null;
    }
    return g(f) ? f : g(h) ? h : null;
  }();
  if (u) {
    i.value = [u.v];
    var l = s != null ? s : u.n;
    i.itemName = [l], i.seriesName = [l];
  }
  return i;
}
function tf(e) {
  var t = e.get("data", !0);
  if (!t)
    return Xn(e.ecModel, "dataset", {
      index: e.get("datasetIndex", !0),
      id: e.get("datasetId", !0)
    }, zr).models[0];
}
function jw(e) {
  return !e.get("transform", !0) && !e.get("fromTransformResult", !0) ? [] : Xn(e.ecModel, "dataset", {
    index: e.get("fromDatasetIndex", !0),
    id: e.get("fromDatasetId", !0)
  }, zr).models;
}
function Up(e, t) {
  return Yp(e.data, e.sourceFormat, e.seriesLayoutBy, e.dimensionsDefine, e.startIndex, t);
}
function Yp(e, t, r, i, n, a) {
  var o, s = 5;
  if (Xt(e))
    return xt.Not;
  var u, l;
  if (i) {
    var f = i[a];
    F(f) ? (u = f.name, l = f.type) : z(f) && (u = f);
  }
  if (l != null)
    return l === "ordinal" ? xt.Must : xt.Not;
  if (t === qt) {
    var h = e;
    if (r === zi) {
      for (var c = h[a], v = 0; v < (c || []).length && v < s; v++)
        if ((o = w(c[n + v])) != null)
          return o;
    } else
      for (var v = 0; v < h.length && v < s; v++) {
        var d = h[n + v];
        if (d && (o = w(d[a])) != null)
          return o;
      }
  } else if (t === Se) {
    var _ = e;
    if (!u)
      return xt.Not;
    for (var v = 0; v < _.length && v < s; v++) {
      var p = _[v];
      if (p && (o = w(p[u])) != null)
        return o;
    }
  } else if (t === Fe) {
    var g = e;
    if (!u)
      return xt.Not;
    var c = g[u];
    if (!c || Xt(c))
      return xt.Not;
    for (var v = 0; v < c.length && v < s; v++)
      if ((o = w(c[v])) != null)
        return o;
  } else if (t === ve)
    for (var y = e, v = 0; v < y.length && v < s; v++) {
      var p = y[v], m = Un(p);
      if (!N(m))
        return xt.Not;
      if ((o = w(m[a])) != null)
        return o;
    }
  function w(b) {
    var S = z(b);
    if (b != null && isFinite(b) && b !== "")
      return S ? xt.Might : xt.Not;
    if (S && b !== "-")
      return xt.Must;
  }
  return xt.Not;
}
var tS = Q();
function eS(e, t, r) {
  var i = tS.get(t);
  if (!i)
    return r;
  var n = i(e);
  if (!n)
    return r;
  if (process.env.NODE_ENV !== "production")
    for (var a = 0; a < n.length; a++)
      X(Mi(n[a]));
  return r.concat(n);
}
var jh = At();
At();
var ef = function() {
  function e() {
  }
  return e.prototype.getColorFromPalette = function(t, r, i) {
    var n = zt(this.get("color", !0)), a = this.get("colorLayer", !0);
    return iS(this, jh, n, a, t, r, i);
  }, e.prototype.clearColorPalette = function() {
    nS(this, jh);
  }, e;
}();
function rS(e, t) {
  for (var r = e.length, i = 0; i < r; i++)
    if (e[i].length > t)
      return e[i];
  return e[r - 1];
}
function iS(e, t, r, i, n, a, o) {
  a = a || e;
  var s = t(a), u = s.paletteIdx || 0, l = s.paletteNameMap = s.paletteNameMap || {};
  if (l.hasOwnProperty(n))
    return l[n];
  var f = o == null || !i ? r : rS(i, o);
  if (f = f || r, !(!f || !f.length)) {
    var h = f[u];
    return n && (l[n] = h), s.paletteIdx = (u + 1) % f.length, h;
  }
}
function nS(e, t) {
  t(e).paletteIdx = 0, t(e).paletteNameMap = {};
}
var _a, Ki, tc, Os = "\0_ec_inner", ec = 1, aS = {
  grid: "GridComponent",
  polar: "PolarComponent",
  geo: "GeoComponent",
  singleAxis: "SingleAxisComponent",
  parallel: "ParallelComponent",
  calendar: "CalendarComponent",
  graphic: "GraphicComponent",
  toolbox: "ToolboxComponent",
  tooltip: "TooltipComponent",
  axisPointer: "AxisPointerComponent",
  brush: "BrushComponent",
  title: "TitleComponent",
  timeline: "TimelineComponent",
  markPoint: "MarkPointComponent",
  markLine: "MarkLineComponent",
  markArea: "MarkAreaComponent",
  legend: "LegendComponent",
  dataZoom: "DataZoomComponent",
  visualMap: "VisualMapComponent",
  xAxis: "GridComponent",
  yAxis: "GridComponent",
  angleAxis: "PolarComponent",
  radiusAxis: "PolarComponent"
}, oS = {
  line: "LineChart",
  bar: "BarChart",
  pie: "PieChart",
  scatter: "ScatterChart",
  radar: "RadarChart",
  map: "MapChart",
  tree: "TreeChart",
  treemap: "TreemapChart",
  graph: "GraphChart",
  gauge: "GaugeChart",
  funnel: "FunnelChart",
  parallel: "ParallelChart",
  sankey: "SankeyChart",
  boxplot: "BoxplotChart",
  candlestick: "CandlestickChart",
  effectScatter: "EffectScatterChart",
  lines: "LinesChart",
  heatmap: "HeatmapChart",
  pictorialBar: "PictorialBarChart",
  themeRiver: "ThemeRiverChart",
  sunburst: "SunburstChart",
  custom: "CustomChart"
}, po = {};
function sS(e) {
  A(e, function(t, r) {
    if (!lt.hasClass(r)) {
      var i = aS[r];
      i && !po[i] && (Rt("Component " + r + ` is used but not imported.
import { ` + i + ` } from 'echarts/components';
echarts.use([` + i + "]);"), po[i] = !0);
    }
  });
}
var Xp = function(e) {
  k(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.init = function(r, i, n, a, o, s) {
    a = a || {}, this.option = null, this._theme = new It(a), this._locale = new It(o), this._optionManager = s;
  }, t.prototype.setOption = function(r, i, n) {
    process.env.NODE_ENV !== "production" && (X(r != null, "option is null/undefined"), X(r[Os] !== ec, "please use chart.getOption()"));
    var a = nc(i);
    this._optionManager.setOption(r, n, a), this._resetOption(null, a);
  }, t.prototype.resetOption = function(r, i) {
    return this._resetOption(r, nc(i));
  }, t.prototype._resetOption = function(r, i) {
    var n = !1, a = this._optionManager;
    if (!r || r === "recreate") {
      var o = a.mountOption(r === "recreate");
      process.env.NODE_ENV !== "production" && sS(o), !this.option || r === "recreate" ? tc(this, o) : (this.restoreData(), this._mergeOption(o, i)), n = !0;
    }
    if ((r === "timeline" || r === "media") && this.restoreData(), !r || r === "recreate" || r === "timeline") {
      var s = a.getTimelineOption(this);
      s && (n = !0, this._mergeOption(s, i));
    }
    if (!r || r === "recreate" || r === "media") {
      var u = a.getMediaOption(this);
      u.length && A(u, function(l) {
        n = !0, this._mergeOption(l, i);
      }, this);
    }
    return n;
  }, t.prototype.mergeOption = function(r) {
    this._mergeOption(r, null);
  }, t.prototype._mergeOption = function(r, i) {
    var n = this.option, a = this._componentsMap, o = this._componentsCount, s = [], u = Q(), l = i && i.replaceMergeMainTypeMap;
    Kw(this), A(r, function(h, c) {
      h != null && (lt.hasClass(c) ? c && (s.push(c), u.set(c, !0)) : n[c] = n[c] == null ? j(h) : ht(n[c], h, !0));
    }), l && l.each(function(h, c) {
      lt.hasClass(c) && !u.get(c) && (s.push(c), u.set(c, !0));
    }), lt.topologicalTravel(s, lt.getAllClassMainTypes(), f, this);
    function f(h) {
      var c = eS(this, h, zt(r[h])), v = a.get(h), d = v ? l && l.get(h) ? "replaceMerge" : "normalMerge" : "replaceAll", _ = Om(v, c, d);
      Hm(_, h, lt), n[h] = null, a.set(h, null), o.set(h, 0);
      var p = [], g = [], y = 0, m, w;
      A(_, function(b, S) {
        var T = b.existing, x = b.newOption;
        if (!x)
          T && (T.mergeOption({}, this), T.optionUpdated({}, !1));
        else {
          var C = h === "series", E = lt.getClass(
            h,
            b.keyInfo.subType,
            !C
          );
          if (!E) {
            if (process.env.NODE_ENV !== "production") {
              var D = b.keyInfo.subType, M = oS[D];
              po[D] || (po[D] = !0, Rt(M ? "Series " + D + ` is used but not imported.
import { ` + M + ` } from 'echarts/charts';
echarts.use([` + M + "]);" : "Unkown series " + D));
            }
            return;
          }
          if (h === "tooltip") {
            if (m) {
              process.env.NODE_ENV !== "production" && (w || (Rn("Currently only one tooltip component is allowed."), w = !0));
              return;
            }
            m = !0;
          }
          if (T && T.constructor === E)
            T.name = b.keyInfo.name, T.mergeOption(x, this), T.optionUpdated(x, !1);
          else {
            var P = O({
              componentIndex: S
            }, b.keyInfo);
            T = new E(x, this, this, P), O(T, P), b.brandNew && (T.__requireNewView = !0), T.init(x, this, this), T.optionUpdated(null, !0);
          }
        }
        T ? (p.push(T.option), g.push(T), y++) : (p.push(void 0), g.push(void 0));
      }, this), n[h] = p, a.set(h, g), o.set(h, y), h === "series" && _a(this);
    }
    this._seriesIndices || _a(this);
  }, t.prototype.getOption = function() {
    var r = j(this.option);
    return A(r, function(i, n) {
      if (lt.hasClass(n)) {
        for (var a = zt(i), o = a.length, s = !1, u = o - 1; u >= 0; u--)
          a[u] && !Mi(a[u]) ? s = !0 : (a[u] = null, !s && o--);
        a.length = o, r[n] = a;
      }
    }), delete r[Os], r;
  }, t.prototype.getTheme = function() {
    return this._theme;
  }, t.prototype.getLocaleModel = function() {
    return this._locale;
  }, t.prototype.setUpdatePayload = function(r) {
    this._payload = r;
  }, t.prototype.getUpdatePayload = function() {
    return this._payload;
  }, t.prototype.getComponent = function(r, i) {
    var n = this._componentsMap.get(r);
    if (n) {
      var a = n[i || 0];
      if (a)
        return a;
      if (i == null) {
        for (var o = 0; o < n.length; o++)
          if (n[o])
            return n[o];
      }
    }
  }, t.prototype.queryComponents = function(r) {
    var i = r.mainType;
    if (!i)
      return [];
    var n = r.index, a = r.id, o = r.name, s = this._componentsMap.get(i);
    if (!s || !s.length)
      return [];
    var u;
    return n != null ? (u = [], A(zt(n), function(l) {
      s[l] && u.push(s[l]);
    })) : a != null ? u = rc("id", a, s) : o != null ? u = rc("name", o, s) : u = _e(s, function(l) {
      return !!l;
    }), ic(u, r);
  }, t.prototype.findComponents = function(r) {
    var i = r.query, n = r.mainType, a = s(i), o = a ? this.queryComponents(a) : _e(this._componentsMap.get(n), function(l) {
      return !!l;
    });
    return u(ic(o, r));
    function s(l) {
      var f = n + "Index", h = n + "Id", c = n + "Name";
      return l && (l[f] != null || l[h] != null || l[c] != null) ? {
        mainType: n,
        index: l[f],
        id: l[h],
        name: l[c]
      } : null;
    }
    function u(l) {
      return r.filter ? _e(l, r.filter) : l;
    }
  }, t.prototype.eachComponent = function(r, i, n) {
    var a = this._componentsMap;
    if (J(r)) {
      var o = i, s = r;
      a.each(function(h, c) {
        for (var v = 0; h && v < h.length; v++) {
          var d = h[v];
          d && s.call(o, c, d, d.componentIndex);
        }
      });
    } else
      for (var u = z(r) ? a.get(r) : F(r) ? this.findComponents(r) : null, l = 0; u && l < u.length; l++) {
        var f = u[l];
        f && i.call(n, f, f.componentIndex);
      }
  }, t.prototype.getSeriesByName = function(r) {
    var i = Oe(r, null);
    return _e(this._componentsMap.get("series"), function(n) {
      return !!n && i != null && n.name === i;
    });
  }, t.prototype.getSeriesByIndex = function(r) {
    return this._componentsMap.get("series")[r];
  }, t.prototype.getSeriesByType = function(r) {
    return _e(this._componentsMap.get("series"), function(i) {
      return !!i && i.subType === r;
    });
  }, t.prototype.getSeries = function() {
    return _e(this._componentsMap.get("series"), function(r) {
      return !!r;
    });
  }, t.prototype.getSeriesCount = function() {
    return this._componentsCount.get("series");
  }, t.prototype.eachSeries = function(r, i) {
    Ki(this), A(this._seriesIndices, function(n) {
      var a = this._componentsMap.get("series")[n];
      r.call(i, a, n);
    }, this);
  }, t.prototype.eachRawSeries = function(r, i) {
    A(this._componentsMap.get("series"), function(n) {
      n && r.call(i, n, n.componentIndex);
    });
  }, t.prototype.eachSeriesByType = function(r, i, n) {
    Ki(this), A(this._seriesIndices, function(a) {
      var o = this._componentsMap.get("series")[a];
      o.subType === r && i.call(n, o, a);
    }, this);
  }, t.prototype.eachRawSeriesByType = function(r, i, n) {
    return A(this.getSeriesByType(r), i, n);
  }, t.prototype.isSeriesFiltered = function(r) {
    return Ki(this), this._seriesIndicesMap.get(r.componentIndex) == null;
  }, t.prototype.getCurrentSeriesIndices = function() {
    return (this._seriesIndices || []).slice();
  }, t.prototype.filterSeries = function(r, i) {
    Ki(this);
    var n = [];
    A(this._seriesIndices, function(a) {
      var o = this._componentsMap.get("series")[a];
      r.call(i, o, a) && n.push(a);
    }, this), this._seriesIndices = n, this._seriesIndicesMap = Q(n);
  }, t.prototype.restoreData = function(r) {
    _a(this);
    var i = this._componentsMap, n = [];
    i.each(function(a, o) {
      lt.hasClass(o) && n.push(o);
    }), lt.topologicalTravel(n, lt.getAllClassMainTypes(), function(a) {
      A(i.get(a), function(o) {
        o && (a !== "series" || !uS(o, r)) && o.restoreData();
      });
    });
  }, t.internalField = function() {
    _a = function(r) {
      var i = r._seriesIndices = [];
      A(r._componentsMap.get("series"), function(n) {
        n && i.push(n.componentIndex);
      }), r._seriesIndicesMap = Q(i);
    }, Ki = function(r) {
      if (process.env.NODE_ENV !== "production" && !r._seriesIndices)
        throw new Error("Option should contains series.");
    }, tc = function(r, i) {
      r.option = {}, r.option[Os] = ec, r._componentsMap = Q({
        series: []
      }), r._componentsCount = Q();
      var n = i.aria;
      F(n) && n.enabled == null && (n.enabled = !0), lS(i, r._theme.option), ht(i, Zw, !1), r._mergeOption(i, null);
    };
  }(), t;
}(It);
function uS(e, t) {
  if (t) {
    var r = t.seriesIndex, i = t.seriesId, n = t.seriesName;
    return r != null && e.componentIndex !== r || i != null && e.id !== i || n != null && e.name !== n;
  }
}
function lS(e, t) {
  var r = e.color && !e.colorLayer;
  A(t, function(i, n) {
    n === "colorLayer" && r || lt.hasClass(n) || (typeof i == "object" ? e[n] = e[n] ? ht(e[n], i, !1) : j(i) : e[n] == null && (e[n] = i));
  });
}
function rc(e, t, r) {
  if (N(t)) {
    var i = Q();
    return A(t, function(a) {
      if (a != null) {
        var o = Oe(a, null);
        o != null && i.set(a, !0);
      }
    }), _e(r, function(a) {
      return a && i.get(a[e]);
    });
  } else {
    var n = Oe(t, null);
    return _e(r, function(a) {
      return a && n != null && a[e] === n;
    });
  }
}
function ic(e, t) {
  return t.hasOwnProperty("subType") ? _e(e, function(r) {
    return r && r.subType === t.subType;
  }) : e;
}
function nc(e) {
  var t = Q();
  return e && A(zt(e.replaceMerge), function(r) {
    process.env.NODE_ENV !== "production" && X(lt.hasClass(r), '"' + r + '" is not valid component main type in "replaceMerge"'), t.set(r, !0);
  }), {
    replaceMergeMainTypeMap: t
  };
}
qe(Xp, ef);
const qp = Xp;
var fS = [
  "getDom",
  "getZr",
  "getWidth",
  "getHeight",
  "getDevicePixelRatio",
  "dispatchAction",
  "isSSR",
  "isDisposed",
  "on",
  "off",
  "getDataURL",
  "getConnectedDataURL",
  "getOption",
  "getId",
  "updateLabelLayout"
], hS = function() {
  function e(t) {
    A(fS, function(r) {
      this[r] = at(t[r], t);
    }, this);
  }
  return e;
}();
const Zp = hS;
var Ns = {}, cS = function() {
  function e() {
    this._coordinateSystems = [];
  }
  return e.prototype.create = function(t, r) {
    var i = [];
    A(Ns, function(n, a) {
      var o = n.create(t, r);
      i = i.concat(o || []);
    }), this._coordinateSystems = i;
  }, e.prototype.update = function(t, r) {
    A(this._coordinateSystems, function(i) {
      i.update && i.update(t, r);
    });
  }, e.prototype.getCoordinateSystems = function() {
    return this._coordinateSystems.slice();
  }, e.register = function(t, r) {
    Ns[t] = r;
  }, e.get = function(t) {
    return Ns[t];
  }, e;
}();
const rf = cS;
var vS = /^(min|max)?(.+)$/, dS = function() {
  function e(t) {
    this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t;
  }
  return e.prototype.setOption = function(t, r, i) {
    t && (A(zt(t.series), function(o) {
      o && o.data && Xt(o.data) && yu(o.data);
    }), A(zt(t.dataset), function(o) {
      o && o.source && Xt(o.source) && yu(o.source);
    })), t = j(t);
    var n = this._optionBackup, a = pS(t, r, !n);
    this._newBaseOption = a.baseOption, n ? (a.timelineOptions.length && (n.timelineOptions = a.timelineOptions), a.mediaList.length && (n.mediaList = a.mediaList), a.mediaDefault && (n.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
  }, e.prototype.mountOption = function(t) {
    var r = this._optionBackup;
    return this._timelineOptions = r.timelineOptions, this._mediaList = r.mediaList, this._mediaDefault = r.mediaDefault, this._currentMediaIndices = [], j(t ? r.baseOption : this._newBaseOption);
  }, e.prototype.getTimelineOption = function(t) {
    var r, i = this._timelineOptions;
    if (i.length) {
      var n = t.getComponent("timeline");
      n && (r = j(
        i[n.getCurrentIndex()]
      ));
    }
    return r;
  }, e.prototype.getMediaOption = function(t) {
    var r = this._api.getWidth(), i = this._api.getHeight(), n = this._mediaList, a = this._mediaDefault, o = [], s = [];
    if (!n.length && !a)
      return s;
    for (var u = 0, l = n.length; u < l; u++)
      gS(n[u].query, r, i) && o.push(u);
    return !o.length && a && (o = [-1]), o.length && !yS(o, this._currentMediaIndices) && (s = q(o, function(f) {
      return j(f === -1 ? a.option : n[f].option);
    })), this._currentMediaIndices = o, s;
  }, e;
}();
function pS(e, t, r) {
  var i = [], n, a, o = e.baseOption, s = e.timeline, u = e.options, l = e.media, f = !!e.media, h = !!(u || s || o && o.timeline);
  o ? (a = o, a.timeline || (a.timeline = s)) : ((h || f) && (e.options = e.media = null), a = e), f && (N(l) ? A(l, function(v) {
    process.env.NODE_ENV !== "production" && v && !v.option && F(v.query) && F(v.query.option) && Rt("Illegal media option. Must be like { media: [ { query: {}, option: {} } ] }"), v && v.option && (v.query ? i.push(v) : n || (n = v));
  }) : process.env.NODE_ENV !== "production" && Rt("Illegal media option. Must be an array. Like { media: [ {...}, {...} ] }")), c(a), A(u, function(v) {
    return c(v);
  }), A(i, function(v) {
    return c(v.option);
  });
  function c(v) {
    A(t, function(d) {
      d(v, r);
    });
  }
  return {
    baseOption: a,
    timelineOptions: u || [],
    mediaDefault: n,
    mediaList: i
  };
}
function gS(e, t, r) {
  var i = {
    width: t,
    height: r,
    aspectratio: t / r
  }, n = !0;
  return A(e, function(a, o) {
    var s = o.match(vS);
    if (!(!s || !s[1] || !s[2])) {
      var u = s[1], l = s[2].toLowerCase();
      _S(i[l], a, u) || (n = !1);
    }
  }), n;
}
function _S(e, t, r) {
  return r === "min" ? e >= t : r === "max" ? e <= t : e === t;
}
function yS(e, t) {
  return e.join(",") === t.join(",");
}
const mS = dS;
var ee = A, Fn = F, ac = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
function ks(e) {
  var t = e && e.itemStyle;
  if (!!t)
    for (var r = 0, i = ac.length; r < i; r++) {
      var n = ac[r], a = t.normal, o = t.emphasis;
      a && a[n] && (process.env.NODE_ENV !== "production" && mt("itemStyle.normal." + n, n), e[n] = e[n] || {}, e[n].normal ? ht(e[n].normal, a[n]) : e[n].normal = a[n], a[n] = null), o && o[n] && (process.env.NODE_ENV !== "production" && mt("itemStyle.emphasis." + n, "emphasis." + n), e[n] = e[n] || {}, e[n].emphasis ? ht(e[n].emphasis, o[n]) : e[n].emphasis = o[n], o[n] = null);
    }
}
function Lt(e, t, r) {
  if (e && e[t] && (e[t].normal || e[t].emphasis)) {
    var i = e[t].normal, n = e[t].emphasis;
    i && (process.env.NODE_ENV !== "production" && ke("'normal' hierarchy in " + t + " has been removed since 4.0. All style properties are configured in " + t + " directly now."), r ? (e[t].normal = e[t].emphasis = null, ct(e[t], i)) : e[t] = i), n && (process.env.NODE_ENV !== "production" && ke(t + ".emphasis has been changed to emphasis." + t + " since 4.0"), e.emphasis = e.emphasis || {}, e.emphasis[t] = n, n.focus && (e.emphasis.focus = n.focus), n.blurScope && (e.emphasis.blurScope = n.blurScope));
  }
}
function gn(e) {
  Lt(e, "itemStyle"), Lt(e, "lineStyle"), Lt(e, "areaStyle"), Lt(e, "label"), Lt(e, "labelLine"), Lt(e, "upperLabel"), Lt(e, "edgeLabel");
}
function gt(e, t) {
  var r = Fn(e) && e[t], i = Fn(r) && r.textStyle;
  if (i) {
    process.env.NODE_ENV !== "production" && ke("textStyle hierarchy in " + t + " has been removed since 4.0. All textStyle properties are configured in " + t + " directly now.");
    for (var n = 0, a = sh.length; n < a; n++) {
      var o = sh[n];
      i.hasOwnProperty(o) && (r[o] = i[o]);
    }
  }
}
function oe(e) {
  e && (gn(e), gt(e, "label"), e.emphasis && gt(e.emphasis, "label"));
}
function wS(e) {
  if (!!Fn(e)) {
    ks(e), gn(e), gt(e, "label"), gt(e, "upperLabel"), gt(e, "edgeLabel"), e.emphasis && (gt(e.emphasis, "label"), gt(e.emphasis, "upperLabel"), gt(e.emphasis, "edgeLabel"));
    var t = e.markPoint;
    t && (ks(t), oe(t));
    var r = e.markLine;
    r && (ks(r), oe(r));
    var i = e.markArea;
    i && oe(i);
    var n = e.data;
    if (e.type === "graph") {
      n = n || e.nodes;
      var a = e.links || e.edges;
      if (a && !Xt(a))
        for (var o = 0; o < a.length; o++)
          oe(a[o]);
      A(e.categories, function(l) {
        gn(l);
      });
    }
    if (n && !Xt(n))
      for (var o = 0; o < n.length; o++)
        oe(n[o]);
    if (t = e.markPoint, t && t.data)
      for (var s = t.data, o = 0; o < s.length; o++)
        oe(s[o]);
    if (r = e.markLine, r && r.data)
      for (var u = r.data, o = 0; o < u.length; o++)
        N(u[o]) ? (oe(u[o][0]), oe(u[o][1])) : oe(u[o]);
    e.type === "gauge" ? (gt(e, "axisLabel"), gt(e, "title"), gt(e, "detail")) : e.type === "treemap" ? (Lt(e.breadcrumb, "itemStyle"), A(e.levels, function(l) {
      gn(l);
    })) : e.type === "tree" && gn(e.leaves);
  }
}
function Ge(e) {
  return N(e) ? e : e ? [e] : [];
}
function oc(e) {
  return (N(e) ? e[0] : e) || {};
}
function SS(e, t) {
  ee(Ge(e.series), function(i) {
    Fn(i) && wS(i);
  });
  var r = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
  t && r.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), ee(r, function(i) {
    ee(Ge(e[i]), function(n) {
      n && (gt(n, "axisLabel"), gt(n.axisPointer, "label"));
    });
  }), ee(Ge(e.parallel), function(i) {
    var n = i && i.parallelAxisDefault;
    gt(n, "axisLabel"), gt(n && n.axisPointer, "label");
  }), ee(Ge(e.calendar), function(i) {
    Lt(i, "itemStyle"), gt(i, "dayLabel"), gt(i, "monthLabel"), gt(i, "yearLabel");
  }), ee(Ge(e.radar), function(i) {
    gt(i, "name"), i.name && i.axisName == null && (i.axisName = i.name, delete i.name, process.env.NODE_ENV !== "production" && ke("name property in radar component has been changed to axisName")), i.nameGap != null && i.axisNameGap == null && (i.axisNameGap = i.nameGap, delete i.nameGap, process.env.NODE_ENV !== "production" && ke("nameGap property in radar component has been changed to axisNameGap")), process.env.NODE_ENV !== "production" && ee(i.indicator, function(n) {
      n.text && mt("text", "name", "radar.indicator");
    });
  }), ee(Ge(e.geo), function(i) {
    Fn(i) && (oe(i), ee(Ge(i.regions), function(n) {
      oe(n);
    }));
  }), ee(Ge(e.timeline), function(i) {
    oe(i), Lt(i, "label"), Lt(i, "itemStyle"), Lt(i, "controlStyle", !0);
    var n = i.data;
    N(n) && A(n, function(a) {
      F(a) && (Lt(a, "label"), Lt(a, "itemStyle"));
    });
  }), ee(Ge(e.toolbox), function(i) {
    Lt(i, "iconStyle"), ee(i.feature, function(n) {
      Lt(n, "iconStyle");
    });
  }), gt(oc(e.axisPointer), "label"), gt(oc(e.tooltip).axisPointer, "label");
}
function bS(e, t) {
  for (var r = t.split(","), i = e, n = 0; n < r.length && (i = i && i[r[n]], i != null); n++)
    ;
  return i;
}
function xS(e, t, r, i) {
  for (var n = t.split(","), a = e, o, s = 0; s < n.length - 1; s++)
    o = n[s], a[o] == null && (a[o] = {}), a = a[o];
  (i || a[n[s]] == null) && (a[n[s]] = r);
}
function sc(e) {
  e && A(TS, function(t) {
    t[0] in e && !(t[1] in e) && (e[t[1]] = e[t[0]]);
  });
}
var TS = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], CS = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], Bs = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
function Qi(e) {
  var t = e && e.itemStyle;
  if (t)
    for (var r = 0; r < Bs.length; r++) {
      var i = Bs[r][1], n = Bs[r][0];
      t[i] != null && (t[n] = t[i], process.env.NODE_ENV !== "production" && mt(i, n));
    }
}
function uc(e) {
  !e || e.alignTo === "edge" && e.margin != null && e.edgeDistance == null && (process.env.NODE_ENV !== "production" && mt("label.margin", "label.edgeDistance", "pie"), e.edgeDistance = e.margin);
}
function lc(e) {
  !e || e.downplay && !e.blur && (e.blur = e.downplay, process.env.NODE_ENV !== "production" && mt("downplay", "blur", "sunburst"));
}
function DS(e) {
  !e || e.focusNodeAdjacency != null && (e.emphasis = e.emphasis || {}, e.emphasis.focus == null && (process.env.NODE_ENV !== "production" && mt("focusNodeAdjacency", "emphasis: { focus: 'adjacency'}", "graph/sankey"), e.emphasis.focus = "adjacency"));
}
function Kp(e, t) {
  if (e)
    for (var r = 0; r < e.length; r++)
      t(e[r]), e[r] && Kp(e[r].children, t);
}
function Qp(e, t) {
  SS(e, t), e.series = zt(e.series), A(e.series, function(r) {
    if (!!F(r)) {
      var i = r.type;
      if (i === "line")
        r.clipOverflow != null && (r.clip = r.clipOverflow, process.env.NODE_ENV !== "production" && mt("clipOverflow", "clip", "line"));
      else if (i === "pie" || i === "gauge") {
        r.clockWise != null && (r.clockwise = r.clockWise, process.env.NODE_ENV !== "production" && mt("clockWise", "clockwise")), uc(r.label);
        var n = r.data;
        if (n && !Xt(n))
          for (var a = 0; a < n.length; a++)
            uc(n[a]);
        r.hoverOffset != null && (r.emphasis = r.emphasis || {}, (r.emphasis.scaleSize = null) && (process.env.NODE_ENV !== "production" && mt("hoverOffset", "emphasis.scaleSize"), r.emphasis.scaleSize = r.hoverOffset));
      } else if (i === "gauge") {
        var o = bS(r, "pointer.color");
        o != null && xS(r, "itemStyle.color", o);
      } else if (i === "bar") {
        Qi(r), Qi(r.backgroundStyle), Qi(r.emphasis);
        var n = r.data;
        if (n && !Xt(n))
          for (var a = 0; a < n.length; a++)
            typeof n[a] == "object" && (Qi(n[a]), Qi(n[a] && n[a].emphasis));
      } else if (i === "sunburst") {
        var s = r.highlightPolicy;
        s && (r.emphasis = r.emphasis || {}, r.emphasis.focus || (r.emphasis.focus = s, process.env.NODE_ENV !== "production" && mt("highlightPolicy", "emphasis.focus", "sunburst"))), lc(r), Kp(r.data, lc);
      } else
        i === "graph" || i === "sankey" ? DS(r) : i === "map" && (r.mapType && !r.map && (process.env.NODE_ENV !== "production" && mt("mapType", "map", "map"), r.map = r.mapType), r.mapLocation && (process.env.NODE_ENV !== "production" && ke("`mapLocation` is not used anymore."), ct(r, r.mapLocation)));
      r.hoverAnimation != null && (r.emphasis = r.emphasis || {}, r.emphasis && r.emphasis.scale == null && (process.env.NODE_ENV !== "production" && mt("hoverAnimation", "emphasis.scale"), r.emphasis.scale = r.hoverAnimation)), sc(r);
    }
  }), e.dataRange && (e.visualMap = e.dataRange), A(CS, function(r) {
    var i = e[r];
    i && (N(i) || (i = [i]), A(i, function(n) {
      sc(n);
    }));
  });
}
function AS(e) {
  var t = Q();
  e.eachSeries(function(r) {
    var i = r.get("stack");
    if (i) {
      var n = t.get(i) || t.set(i, []), a = r.getData(), o = {
        stackResultDimension: a.getCalculationInfo("stackResultDimension"),
        stackedOverDimension: a.getCalculationInfo("stackedOverDimension"),
        stackedDimension: a.getCalculationInfo("stackedDimension"),
        stackedByDimension: a.getCalculationInfo("stackedByDimension"),
        isStackedByIndex: a.getCalculationInfo("isStackedByIndex"),
        data: a,
        seriesModel: r
      };
      if (!o.stackedDimension || !(o.isStackedByIndex || o.stackedByDimension))
        return;
      n.length && a.setCalculationInfo("stackedOnSeries", n[n.length - 1].seriesModel), n.push(o);
    }
  }), t.each(ES);
}
function ES(e) {
  A(e, function(t, r) {
    var i = [], n = [NaN, NaN], a = [t.stackResultDimension, t.stackedOverDimension], o = t.data, s = t.isStackedByIndex, u = t.seriesModel.get("stackStrategy") || "samesign";
    o.modify(a, function(l, f, h) {
      var c = o.get(t.stackedDimension, h);
      if (isNaN(c))
        return n;
      var v, d;
      s ? d = o.getRawIndex(h) : v = o.get(t.stackedByDimension, h);
      for (var _ = NaN, p = r - 1; p >= 0; p--) {
        var g = e[p];
        if (s || (d = g.data.rawIndexOf(g.stackedByDimension, v)), d >= 0) {
          var y = g.data.getByRawIndex(g.stackResultDimension, d);
          if (u === "all" || u === "positive" && y > 0 || u === "negative" && y < 0 || u === "samesign" && c >= 0 && y > 0 || u === "samesign" && c <= 0 && y < 0) {
            c = Am(c, y), _ = y;
            break;
          }
        }
      }
      return i[0] = c, i[1] = _, i;
    });
  });
}
var Fo = function() {
  function e(t) {
    this.data = t.data || (t.sourceFormat === Fe ? {} : []), this.sourceFormat = t.sourceFormat || Wp, this.seriesLayoutBy = t.seriesLayoutBy || Xe, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
    var r = this.dimensionsDefine = t.dimensionsDefine;
    if (r)
      for (var i = 0; i < r.length; i++) {
        var n = r[i];
        n.type == null && Up(this, i) === xt.Must && (n.type = "ordinal");
      }
  }
  return e;
}();
function nf(e) {
  return e instanceof Fo;
}
function Ku(e, t, r) {
  r = r || Jp(e);
  var i = t.seriesLayoutBy, n = PS(e, r, i, t.sourceHeader, t.dimensions), a = new Fo({
    data: e,
    sourceFormat: r,
    seriesLayoutBy: i,
    dimensionsDefine: n.dimensionsDefine,
    startIndex: n.startIndex,
    dimensionsDetectedCount: n.dimensionsDetectedCount,
    metaRawOption: j(t)
  });
  return a;
}
function af(e) {
  return new Fo({
    data: e,
    sourceFormat: Xt(e) ? Ye : ve
  });
}
function MS(e) {
  return new Fo({
    data: e.data,
    sourceFormat: e.sourceFormat,
    seriesLayoutBy: e.seriesLayoutBy,
    dimensionsDefine: j(e.dimensionsDefine),
    startIndex: e.startIndex,
    dimensionsDetectedCount: e.dimensionsDetectedCount
  });
}
function Jp(e) {
  var t = Wp;
  if (Xt(e))
    t = Ye;
  else if (N(e)) {
    e.length === 0 && (t = qt);
    for (var r = 0, i = e.length; r < i; r++) {
      var n = e[r];
      if (n != null) {
        if (N(n)) {
          t = qt;
          break;
        } else if (F(n)) {
          t = Se;
          break;
        }
      }
    }
  } else if (F(e)) {
    for (var a in e)
      if (Ai(e, a) && Yt(e[a])) {
        t = Fe;
        break;
      }
  }
  return t;
}
function PS(e, t, r, i, n) {
  var a, o;
  if (!e)
    return {
      dimensionsDefine: fc(n),
      startIndex: o,
      dimensionsDetectedCount: a
    };
  if (t === qt) {
    var s = e;
    i === "auto" || i == null ? hc(function(l) {
      l != null && l !== "-" && (z(l) ? o == null && (o = 1) : o = 0);
    }, r, s, 10) : o = dt(i) ? i : i ? 1 : 0, !n && o === 1 && (n = [], hc(function(l, f) {
      n[f] = l != null ? l + "" : "";
    }, r, s, 1 / 0)), a = n ? n.length : r === zi ? s.length : s[0] ? s[0].length : null;
  } else if (t === Se)
    n || (n = LS(e));
  else if (t === Fe)
    n || (n = [], A(e, function(l, f) {
      n.push(f);
    }));
  else if (t === ve) {
    var u = Un(e[0]);
    a = N(u) && u.length || 1;
  } else
    t === Ye && process.env.NODE_ENV !== "production" && X(!!n, "dimensions must be given if data is TypedArray.");
  return {
    startIndex: o,
    dimensionsDefine: fc(n),
    dimensionsDetectedCount: a
  };
}
function LS(e) {
  for (var t = 0, r; t < e.length && !(r = e[t++]); )
    ;
  if (r) {
    var i = [];
    return A(r, function(n, a) {
      i.push(a);
    }), i;
  }
}
function fc(e) {
  if (!!e) {
    var t = Q();
    return q(e, function(r, i) {
      r = F(r) ? r : {
        name: r
      };
      var n = {
        name: r.name,
        displayName: r.displayName,
        type: r.type
      };
      if (n.name == null)
        return n;
      n.name += "", n.displayName == null && (n.displayName = n.name);
      var a = t.get(n.name);
      return a ? n.name += "-" + a.count++ : t.set(n.name, {
        count: 1
      }), n;
    });
  }
}
function hc(e, t, r, i) {
  if (t === zi)
    for (var n = 0; n < r.length && n < i; n++)
      e(r[n] ? r[n][0] : null, n);
  else
    for (var a = r[0] || [], n = 0; n < a.length && n < i; n++)
      e(a[n], n);
}
function jp(e) {
  var t = e.sourceFormat;
  return t === Se || t === Fe;
}
var Ir, Rr, Or, cc, vc, tg = function() {
  function e(t, r) {
    var i = nf(t) ? t : af(t);
    this._source = i;
    var n = this._data = i.data;
    if (i.sourceFormat === Ye) {
      if (process.env.NODE_ENV !== "production" && r == null)
        throw new Error("Typed array data must specify dimension size");
      this._offset = 0, this._dimSize = r, this._data = n;
    }
    vc(this, n, i);
  }
  return e.prototype.getSource = function() {
    return this._source;
  }, e.prototype.count = function() {
    return 0;
  }, e.prototype.getItem = function(t, r) {
  }, e.prototype.appendData = function(t) {
  }, e.prototype.clean = function() {
  }, e.protoInitialize = function() {
    var t = e.prototype;
    t.pure = !1, t.persistent = !0;
  }(), e.internalField = function() {
    var t;
    vc = function(o, s, u) {
      var l = u.sourceFormat, f = u.seriesLayoutBy, h = u.startIndex, c = u.dimensionsDefine, v = cc[of(l, f)];
      if (process.env.NODE_ENV !== "production" && X(v, "Invalide sourceFormat: " + l), O(o, v), l === Ye)
        o.getItem = r, o.count = n, o.fillStorage = i;
      else {
        var d = eg(l, f);
        o.getItem = at(d, null, s, h, c);
        var _ = rg(l, f);
        o.count = at(_, null, s, h, c);
      }
    };
    var r = function(o, s) {
      o = o - this._offset, s = s || [];
      for (var u = this._data, l = this._dimSize, f = l * o, h = 0; h < l; h++)
        s[h] = u[f + h];
      return s;
    }, i = function(o, s, u, l) {
      for (var f = this._data, h = this._dimSize, c = 0; c < h; c++) {
        for (var v = l[c], d = v[0] == null ? 1 / 0 : v[0], _ = v[1] == null ? -1 / 0 : v[1], p = s - o, g = u[c], y = 0; y < p; y++) {
          var m = f[y * h + c];
          g[o + y] = m, m < d && (d = m), m > _ && (_ = m);
        }
        v[0] = d, v[1] = _;
      }
    }, n = function() {
      return this._data ? this._data.length / this._dimSize : 0;
    };
    cc = (t = {}, t[qt + "_" + Xe] = {
      pure: !0,
      appendData: a
    }, t[qt + "_" + zi] = {
      pure: !0,
      appendData: function() {
        throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
      }
    }, t[Se] = {
      pure: !0,
      appendData: a
    }, t[Fe] = {
      pure: !0,
      appendData: function(o) {
        var s = this._data;
        A(o, function(u, l) {
          for (var f = s[l] || (s[l] = []), h = 0; h < (u || []).length; h++)
            f.push(u[h]);
        });
      }
    }, t[ve] = {
      appendData: a
    }, t[Ye] = {
      persistent: !1,
      pure: !0,
      appendData: function(o) {
        process.env.NODE_ENV !== "production" && X(Xt(o), "Added data must be TypedArray if data in initialization is TypedArray"), this._data = o;
      },
      clean: function() {
        this._offset += this.count(), this._data = null;
      }
    }, t);
    function a(o) {
      for (var s = 0; s < o.length; s++)
        this._data.push(o[s]);
    }
  }(), e;
}(), dc = function(e, t, r, i) {
  return e[i];
}, IS = (Ir = {}, Ir[qt + "_" + Xe] = function(e, t, r, i) {
  return e[i + t];
}, Ir[qt + "_" + zi] = function(e, t, r, i, n) {
  i += t;
  for (var a = n || [], o = e, s = 0; s < o.length; s++) {
    var u = o[s];
    a[s] = u ? u[i] : null;
  }
  return a;
}, Ir[Se] = dc, Ir[Fe] = function(e, t, r, i, n) {
  for (var a = n || [], o = 0; o < r.length; o++) {
    var s = r[o].name;
    if (process.env.NODE_ENV !== "production" && s == null)
      throw new Error();
    var u = e[s];
    a[o] = u ? u[i] : null;
  }
  return a;
}, Ir[ve] = dc, Ir);
function eg(e, t) {
  var r = IS[of(e, t)];
  return process.env.NODE_ENV !== "production" && X(r, 'Do not support get item on "' + e + '", "' + t + '".'), r;
}
var pc = function(e, t, r) {
  return e.length;
}, RS = (Rr = {}, Rr[qt + "_" + Xe] = function(e, t, r) {
  return Math.max(0, e.length - t);
}, Rr[qt + "_" + zi] = function(e, t, r) {
  var i = e[0];
  return i ? Math.max(0, i.length - t) : 0;
}, Rr[Se] = pc, Rr[Fe] = function(e, t, r) {
  var i = r[0].name;
  if (process.env.NODE_ENV !== "production" && i == null)
    throw new Error();
  var n = e[i];
  return n ? n.length : 0;
}, Rr[ve] = pc, Rr);
function rg(e, t) {
  var r = RS[of(e, t)];
  return process.env.NODE_ENV !== "production" && X(r, 'Do not suppport count on "' + e + '", "' + t + '".'), r;
}
var zs = function(e, t, r) {
  return e[t];
}, OS = (Or = {}, Or[qt] = zs, Or[Se] = function(e, t, r) {
  return e[r];
}, Or[Fe] = zs, Or[ve] = function(e, t, r) {
  var i = Un(e);
  return i instanceof Array ? i[t] : i;
}, Or[Ye] = zs, Or);
function ig(e) {
  var t = OS[e];
  return process.env.NODE_ENV !== "production" && X(t, 'Do not suppport get value on "' + e + '".'), t;
}
function of(e, t) {
  return e === qt ? e + "_" + t : e;
}
function Li(e, t, r) {
  if (!!e) {
    var i = e.getRawDataItem(t);
    if (i != null) {
      var n = e.getStore(), a = n.getSource().sourceFormat;
      if (r != null) {
        var o = e.getDimensionIndex(r), s = n.getDimensionProperty(o);
        return ig(a)(i, o, s);
      } else {
        var u = i;
        return a === ve && (u = Un(i)), u;
      }
    }
  }
}
var NS = /\{@(.+?)\}/g, kS = function() {
  function e() {
  }
  return e.prototype.getDataParams = function(t, r) {
    var i = this.getData(r), n = this.getRawValue(t, r), a = i.getRawIndex(t), o = i.getName(t), s = i.getRawDataItem(t), u = i.getItemVisual(t, "style"), l = u && u[i.getItemVisual(t, "drawType") || "fill"], f = u && u.stroke, h = this.mainType, c = h === "series", v = i.userOutput && i.userOutput.get();
    return {
      componentType: h,
      componentSubType: this.subType,
      componentIndex: this.componentIndex,
      seriesType: c ? this.subType : null,
      seriesIndex: this.seriesIndex,
      seriesId: c ? this.id : null,
      seriesName: c ? this.name : null,
      name: o,
      dataIndex: a,
      data: s,
      dataType: r,
      value: n,
      color: l,
      borderColor: f,
      dimensionNames: v ? v.fullDimensions : null,
      encode: v ? v.encode : null,
      $vars: ["seriesName", "name", "value"]
    };
  }, e.prototype.getFormattedLabel = function(t, r, i, n, a, o) {
    r = r || "normal";
    var s = this.getData(i), u = this.getDataParams(t, i);
    if (o && (u.value = o.interpolatedValue), n != null && N(u.value) && (u.value = u.value[n]), !a) {
      var l = s.getItemModel(t);
      a = l.get(r === "normal" ? ["label", "formatter"] : [r, "label", "formatter"]);
    }
    if (J(a))
      return u.status = r, u.dimensionIndex = n, a(u);
    if (z(a)) {
      var f = Hp(a, u);
      return f.replace(NS, function(h, c) {
        var v = c.length, d = c;
        d.charAt(0) === "[" && d.charAt(v - 1) === "]" && (d = +d.slice(1, v - 1), process.env.NODE_ENV !== "production" && isNaN(d) && Rt("Invalide label formatter: @" + c + ", only support @[0], @[1], @[2], ..."));
        var _ = Li(s, t, d);
        if (o && N(o.interpolatedValue)) {
          var p = s.getDimensionIndex(d);
          p >= 0 && (_ = o.interpolatedValue[p]);
        }
        return _ != null ? _ + "" : "";
      });
    }
  }, e.prototype.getRawValue = function(t, r) {
    return Li(this.getData(r), t);
  }, e.prototype.formatTooltip = function(t, r, i) {
  }, e;
}();
function gc(e) {
  var t, r;
  return F(e) ? e.type ? r = e : process.env.NODE_ENV !== "production" && console.warn("The return type of `formatTooltip` is not supported: " + oo(e)) : t = e, {
    text: t,
    frag: r
  };
}
function An(e) {
  return new BS(e);
}
var BS = function() {
  function e(t) {
    t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0;
  }
  return e.prototype.perform = function(t) {
    var r = this._upstream, i = t && t.skip;
    if (this._dirty && r) {
      var n = this.context;
      n.data = n.outputData = r.context.outputData;
    }
    this.__pipeline && (this.__pipeline.currentTask = this);
    var a;
    this._plan && !i && (a = this._plan(this.context));
    var o = f(this._modBy), s = this._modDataCount || 0, u = f(t && t.modBy), l = t && t.modDataCount || 0;
    (o !== u || s !== l) && (a = "reset");
    function f(y) {
      return !(y >= 1) && (y = 1), y;
    }
    var h;
    (this._dirty || a === "reset") && (this._dirty = !1, h = this._doReset(i)), this._modBy = u, this._modDataCount = l;
    var c = t && t.step;
    if (r ? (process.env.NODE_ENV !== "production" && X(r._outputDueEnd != null), this._dueEnd = r._outputDueEnd) : (process.env.NODE_ENV !== "production" && X(!this._progress || this._count), this._dueEnd = this._count ? this._count(this.context) : 1 / 0), this._progress) {
      var v = this._dueIndex, d = Math.min(c != null ? this._dueIndex + c : 1 / 0, this._dueEnd);
      if (!i && (h || v < d)) {
        var _ = this._progress;
        if (N(_))
          for (var p = 0; p < _.length; p++)
            this._doProgress(_[p], v, d, u, l);
        else
          this._doProgress(_, v, d, u, l);
      }
      this._dueIndex = d;
      var g = this._settedOutputEnd != null ? this._settedOutputEnd : d;
      process.env.NODE_ENV !== "production" && X(g >= this._outputDueEnd), this._outputDueEnd = g;
    } else
      this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
    return this.unfinished();
  }, e.prototype.dirty = function() {
    this._dirty = !0, this._onDirty && this._onDirty(this.context);
  }, e.prototype._doProgress = function(t, r, i, n, a) {
    _c.reset(r, i, n, a), this._callingProgress = t, this._callingProgress({
      start: r,
      end: i,
      count: i - r,
      next: _c.next
    }, this.context);
  }, e.prototype._doReset = function(t) {
    this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
    var r, i;
    !t && this._reset && (r = this._reset(this.context), r && r.progress && (i = r.forceFirstProgress, r = r.progress), N(r) && !r.length && (r = null)), this._progress = r, this._modBy = this._modDataCount = null;
    var n = this._downstream;
    return n && n.dirty(), i;
  }, e.prototype.unfinished = function() {
    return this._progress && this._dueIndex < this._dueEnd;
  }, e.prototype.pipe = function(t) {
    process.env.NODE_ENV !== "production" && X(t && !t._disposed && t !== this), (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
  }, e.prototype.dispose = function() {
    this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
  }, e.prototype.getUpstream = function() {
    return this._upstream;
  }, e.prototype.getDownstream = function() {
    return this._downstream;
  }, e.prototype.setOutputEnd = function(t) {
    this._outputDueEnd = this._settedOutputEnd = t;
  }, e;
}(), _c = function() {
  var e, t, r, i, n, a = {
    reset: function(u, l, f, h) {
      t = u, e = l, r = f, i = h, n = Math.ceil(i / r), a.next = r > 1 && i > 0 ? s : o;
    }
  };
  return a;
  function o() {
    return t < e ? t++ : null;
  }
  function s() {
    var u = t % n * r + Math.ceil(t / n), l = t >= e ? null : u < i ? u : t;
    return t++, l;
  }
}();
function Ya(e, t) {
  var r = t && t.type;
  return r === "ordinal" ? e : (r === "time" && !dt(e) && e != null && e !== "-" && (e = +Po(e)), e == null || e === "" ? NaN : +e);
}
Q({
  number: function(e) {
    return parseFloat(e);
  },
  time: function(e) {
    return +Po(e);
  },
  trim: function(e) {
    return z(e) ? Le(e) : e;
  }
});
var zS = function() {
  function e(t, r) {
    var i = t === "desc";
    this._resultLT = i ? 1 : -1, r == null && (r = i ? "min" : "max"), this._incomparable = r === "min" ? -1 / 0 : 1 / 0;
  }
  return e.prototype.evaluate = function(t, r) {
    var i = dt(t) ? t : ao(t), n = dt(r) ? r : ao(r), a = isNaN(i), o = isNaN(n);
    if (a && (i = this._incomparable), o && (n = this._incomparable), a && o) {
      var s = z(t), u = z(r);
      s && (i = u ? t : 0), u && (n = s ? r : 0);
    }
    return i < n ? this._resultLT : i > n ? -this._resultLT : 0;
  }, e;
}(), FS = function() {
  function e() {
  }
  return e.prototype.getRawData = function() {
    throw new Error("not supported");
  }, e.prototype.getRawDataItem = function(t) {
    throw new Error("not supported");
  }, e.prototype.cloneRawData = function() {
  }, e.prototype.getDimensionInfo = function(t) {
  }, e.prototype.cloneAllDimensionInfo = function() {
  }, e.prototype.count = function() {
  }, e.prototype.retrieveValue = function(t, r) {
  }, e.prototype.retrieveValueFromItem = function(t, r) {
  }, e.prototype.convertValue = function(t, r) {
    return Ya(t, r);
  }, e;
}();
function VS(e, t) {
  var r = new FS(), i = e.data, n = r.sourceFormat = e.sourceFormat, a = e.startIndex, o = "";
  e.seriesLayoutBy !== Xe && (process.env.NODE_ENV !== "production" && (o = '`seriesLayoutBy` of upstream dataset can only be "column" in data transform.'), Wt(o));
  var s = [], u = {}, l = e.dimensionsDefine;
  if (l)
    A(l, function(_, p) {
      var g = _.name, y = {
        index: p,
        name: g,
        displayName: _.displayName
      };
      if (s.push(y), g != null) {
        var m = "";
        Ai(u, g) && (process.env.NODE_ENV !== "production" && (m = 'dimension name "' + g + '" duplicated.'), Wt(m)), u[g] = y;
      }
    });
  else
    for (var f = 0; f < e.dimensionsDetectedCount; f++)
      s.push({
        index: f
      });
  var h = eg(n, Xe);
  t.__isBuiltIn && (r.getRawDataItem = function(_) {
    return h(i, a, s, _);
  }, r.getRawData = at(HS, null, e)), r.cloneRawData = at(GS, null, e);
  var c = rg(n, Xe);
  r.count = at(c, null, i, a, s);
  var v = ig(n);
  r.retrieveValue = function(_, p) {
    var g = h(i, a, s, _);
    return d(g, p);
  };
  var d = r.retrieveValueFromItem = function(_, p) {
    if (_ != null) {
      var g = s[p];
      if (g)
        return v(_, p, g.name);
    }
  };
  return r.getDimensionInfo = at(WS, null, s, u), r.cloneAllDimensionInfo = at($S, null, s), r;
}
function HS(e) {
  var t = e.sourceFormat;
  if (!sf(t)) {
    var r = "";
    process.env.NODE_ENV !== "production" && (r = "`getRawData` is not supported in source format " + t), Wt(r);
  }
  return e.data;
}
function GS(e) {
  var t = e.sourceFormat, r = e.data;
  if (!sf(t)) {
    var i = "";
    process.env.NODE_ENV !== "production" && (i = "`cloneRawData` is not supported in source format " + t), Wt(i);
  }
  if (t === qt) {
    for (var n = [], a = 0, o = r.length; a < o; a++)
      n.push(r[a].slice());
    return n;
  } else if (t === Se) {
    for (var n = [], a = 0, o = r.length; a < o; a++)
      n.push(O({}, r[a]));
    return n;
  }
}
function WS(e, t, r) {
  if (r != null) {
    if (dt(r) || !isNaN(r) && !Ai(t, r))
      return e[r];
    if (Ai(t, r))
      return t[r];
  }
}
function $S(e) {
  return j(e);
}
var ng = Q();
function US(e) {
  e = j(e);
  var t = e.type, r = "";
  t || (process.env.NODE_ENV !== "production" && (r = "Must have a `type` when `registerTransform`."), Wt(r));
  var i = t.split(":");
  i.length !== 2 && (process.env.NODE_ENV !== "production" && (r = 'Name must include namespace like "ns:regression".'), Wt(r));
  var n = !1;
  i[0] === "echarts" && (t = i[1], n = !0), e.__isBuiltIn = n, ng.set(t, e);
}
function YS(e, t, r) {
  var i = zt(e), n = i.length, a = "";
  n || (process.env.NODE_ENV !== "production" && (a = "If `transform` declared, it should at least contain one transform."), Wt(a));
  for (var o = 0, s = n; o < s; o++) {
    var u = i[o];
    t = XS(u, t, r, n === 1 ? null : o), o !== s - 1 && (t.length = Math.max(t.length, 1));
  }
  return t;
}
function XS(e, t, r, i) {
  var n = "";
  t.length || (process.env.NODE_ENV !== "production" && (n = "Must have at least one upstream dataset."), Wt(n)), F(e) || (process.env.NODE_ENV !== "production" && (n = "transform declaration must be an object rather than " + typeof e + "."), Wt(n));
  var a = e.type, o = ng.get(a);
  o || (process.env.NODE_ENV !== "production" && (n = 'Can not find transform on type "' + a + '".'), Wt(n));
  var s = q(t, function(f) {
    return VS(f, o);
  }), u = zt(o.transform({
    upstream: s[0],
    upstreamList: s,
    config: j(e.config)
  }));
  if (process.env.NODE_ENV !== "production" && e.print) {
    var l = q(u, function(f) {
      var h = i != null ? " === pipe index: " + i : "";
      return ["=== dataset index: " + r.datasetIndex + h + " ===", "- transform result data:", oo(f.data), "- transform result dimensions:", oo(f.dimensions)].join(`
`);
    }).join(`
`);
    Lm(l);
  }
  return q(u, function(f, h) {
    var c = "";
    F(f) || (process.env.NODE_ENV !== "production" && (c = "A transform should not return some empty results."), Wt(c)), f.data || (process.env.NODE_ENV !== "production" && (c = "Transform result data should be not be null or undefined"), Wt(c));
    var v = Jp(f.data);
    sf(v) || (process.env.NODE_ENV !== "production" && (c = "Transform result data should be array rows or object rows."), Wt(c));
    var d, _ = t[0];
    if (_ && h === 0 && !f.dimensions) {
      var p = _.startIndex;
      p && (f.data = _.data.slice(0, p).concat(f.data)), d = {
        seriesLayoutBy: Xe,
        sourceHeader: p,
        dimensions: _.metaRawOption.dimensions
      };
    } else
      d = {
        seriesLayoutBy: Xe,
        sourceHeader: 0,
        dimensions: f.dimensions
      };
    return Ku(f.data, d, null);
  });
}
function sf(e) {
  return e === qt || e === Se;
}
var Vo = "undefined", qS = typeof Uint32Array === Vo ? Array : Uint32Array, ZS = typeof Uint16Array === Vo ? Array : Uint16Array, ag = typeof Int32Array === Vo ? Array : Int32Array, yc = typeof Float64Array === Vo ? Array : Float64Array, og = {
  float: yc,
  int: ag,
  ordinal: Array,
  number: Array,
  time: yc
}, Fs;
function Ji(e) {
  return e > 65535 ? qS : ZS;
}
function ci() {
  return [1 / 0, -1 / 0];
}
function KS(e) {
  var t = e.constructor;
  return t === Array ? e.slice() : new t(e);
}
function mc(e, t, r, i, n) {
  var a = og[r || "float"];
  if (n) {
    var o = e[t], s = o && o.length;
    if (s !== i) {
      for (var u = new a(i), l = 0; l < s; l++)
        u[l] = o[l];
      e[t] = u;
    }
  } else
    e[t] = new a(i);
}
var Qu = function() {
  function e() {
    this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = Q();
  }
  return e.prototype.initData = function(t, r, i) {
    process.env.NODE_ENV !== "production" && X(J(t.getItem) && J(t.count), "Invalid data provider."), this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
    var n = t.getSource(), a = this.defaultDimValueGetter = Fs[n.sourceFormat];
    this._dimValueGetter = i || a, this._rawExtent = [];
    var o = jp(n);
    this._dimensions = q(r, function(s) {
      return process.env.NODE_ENV !== "production" && o && X(s.property != null), {
        type: s.type,
        property: s.property
      };
    }), this._initDataFromProvider(0, t.count());
  }, e.prototype.getProvider = function() {
    return this._provider;
  }, e.prototype.getSource = function() {
    return this._provider.getSource();
  }, e.prototype.ensureCalculationDimension = function(t, r) {
    var i = this._calcDimNameToIdx, n = this._dimensions, a = i.get(t);
    if (a != null) {
      if (n[a].type === r)
        return a;
    } else
      a = n.length;
    return n[a] = {
      type: r
    }, i.set(t, a), this._chunks[a] = new og[r || "float"](this._rawCount), this._rawExtent[a] = ci(), a;
  }, e.prototype.collectOrdinalMeta = function(t, r) {
    var i = this._chunks[t], n = this._dimensions[t], a = this._rawExtent, o = n.ordinalOffset || 0, s = i.length;
    o === 0 && (a[t] = ci());
    for (var u = a[t], l = o; l < s; l++) {
      var f = i[l] = r.parseAndCollect(i[l]);
      isNaN(f) || (u[0] = Math.min(f, u[0]), u[1] = Math.max(f, u[1]));
    }
    n.ordinalMeta = r, n.ordinalOffset = s, n.type = "ordinal";
  }, e.prototype.getOrdinalMeta = function(t) {
    var r = this._dimensions[t], i = r.ordinalMeta;
    return i;
  }, e.prototype.getDimensionProperty = function(t) {
    var r = this._dimensions[t];
    return r && r.property;
  }, e.prototype.appendData = function(t) {
    process.env.NODE_ENV !== "production" && X(!this._indices, "appendData can only be called on raw data.");
    var r = this._provider, i = this.count();
    r.appendData(t);
    var n = r.count();
    return r.persistent || (n += i), i < n && this._initDataFromProvider(i, n, !0), [i, n];
  }, e.prototype.appendValues = function(t, r) {
    for (var i = this._chunks, n = this._dimensions, a = n.length, o = this._rawExtent, s = this.count(), u = s + Math.max(t.length, r || 0), l = 0; l < a; l++) {
      var f = n[l];
      mc(i, l, f.type, u, !0);
    }
    for (var h = [], c = s; c < u; c++)
      for (var v = c - s, d = 0; d < a; d++) {
        var f = n[d], _ = Fs.arrayRows.call(this, t[v] || h, f.property, v, d);
        i[d][c] = _;
        var p = o[d];
        _ < p[0] && (p[0] = _), _ > p[1] && (p[1] = _);
      }
    return this._rawCount = this._count = u, {
      start: s,
      end: u
    };
  }, e.prototype._initDataFromProvider = function(t, r, i) {
    for (var n = this._provider, a = this._chunks, o = this._dimensions, s = o.length, u = this._rawExtent, l = q(o, function(y) {
      return y.property;
    }), f = 0; f < s; f++) {
      var h = o[f];
      u[f] || (u[f] = ci()), mc(a, f, h.type, r, i);
    }
    if (n.fillStorage)
      n.fillStorage(t, r, a, u);
    else
      for (var c = [], v = t; v < r; v++) {
        c = n.getItem(v, c);
        for (var d = 0; d < s; d++) {
          var _ = a[d], p = this._dimValueGetter(c, l[d], v, d);
          _[v] = p;
          var g = u[d];
          p < g[0] && (g[0] = p), p > g[1] && (g[1] = p);
        }
      }
    !n.persistent && n.clean && n.clean(), this._rawCount = this._count = r, this._extent = [];
  }, e.prototype.count = function() {
    return this._count;
  }, e.prototype.get = function(t, r) {
    if (!(r >= 0 && r < this._count))
      return NaN;
    var i = this._chunks[t];
    return i ? i[this.getRawIndex(r)] : NaN;
  }, e.prototype.getValues = function(t, r) {
    var i = [], n = [];
    if (r == null) {
      r = t, t = [];
      for (var a = 0; a < this._dimensions.length; a++)
        n.push(a);
    } else
      n = t;
    for (var a = 0, o = n.length; a < o; a++)
      i.push(this.get(n[a], r));
    return i;
  }, e.prototype.getByRawIndex = function(t, r) {
    if (!(r >= 0 && r < this._rawCount))
      return NaN;
    var i = this._chunks[t];
    return i ? i[r] : NaN;
  }, e.prototype.getSum = function(t) {
    var r = this._chunks[t], i = 0;
    if (r)
      for (var n = 0, a = this.count(); n < a; n++) {
        var o = this.get(t, n);
        isNaN(o) || (i += o);
      }
    return i;
  }, e.prototype.getMedian = function(t) {
    var r = [];
    this.each([t], function(a) {
      isNaN(a) || r.push(a);
    });
    var i = r.sort(function(a, o) {
      return a - o;
    }), n = this.count();
    return n === 0 ? 0 : n % 2 === 1 ? i[(n - 1) / 2] : (i[n / 2] + i[n / 2 - 1]) / 2;
  }, e.prototype.indexOfRawIndex = function(t) {
    if (t >= this._rawCount || t < 0)
      return -1;
    if (!this._indices)
      return t;
    var r = this._indices, i = r[t];
    if (i != null && i < this._count && i === t)
      return t;
    for (var n = 0, a = this._count - 1; n <= a; ) {
      var o = (n + a) / 2 | 0;
      if (r[o] < t)
        n = o + 1;
      else if (r[o] > t)
        a = o - 1;
      else
        return o;
    }
    return -1;
  }, e.prototype.indicesOfNearest = function(t, r, i) {
    var n = this._chunks, a = n[t], o = [];
    if (!a)
      return o;
    i == null && (i = 1 / 0);
    for (var s = 1 / 0, u = -1, l = 0, f = 0, h = this.count(); f < h; f++) {
      var c = this.getRawIndex(f), v = r - a[c], d = Math.abs(v);
      d <= i && ((d < s || d === s && v >= 0 && u < 0) && (s = d, u = v, l = 0), v === u && (o[l++] = f));
    }
    return o.length = l, o;
  }, e.prototype.getIndices = function() {
    var t, r = this._indices;
    if (r) {
      var i = r.constructor, n = this._count;
      if (i === Array) {
        t = new i(n);
        for (var a = 0; a < n; a++)
          t[a] = r[a];
      } else
        t = new i(r.buffer, 0, n);
    } else {
      var i = Ji(this._rawCount);
      t = new i(this.count());
      for (var a = 0; a < t.length; a++)
        t[a] = a;
    }
    return t;
  }, e.prototype.filter = function(t, r) {
    if (!this._count)
      return this;
    for (var i = this.clone(), n = i.count(), a = Ji(i._rawCount), o = new a(n), s = [], u = t.length, l = 0, f = t[0], h = i._chunks, c = 0; c < n; c++) {
      var v = void 0, d = i.getRawIndex(c);
      if (u === 0)
        v = r(c);
      else if (u === 1) {
        var _ = h[f][d];
        v = r(_, c);
      } else {
        for (var p = 0; p < u; p++)
          s[p] = h[t[p]][d];
        s[p] = c, v = r.apply(null, s);
      }
      v && (o[l++] = d);
    }
    return l < n && (i._indices = o), i._count = l, i._extent = [], i._updateGetRawIdx(), i;
  }, e.prototype.selectRange = function(t) {
    var r = this.clone(), i = r._count;
    if (!i)
      return this;
    var n = yt(t), a = n.length;
    if (!a)
      return this;
    var o = r.count(), s = Ji(r._rawCount), u = new s(o), l = 0, f = n[0], h = t[f][0], c = t[f][1], v = r._chunks, d = !1;
    if (!r._indices) {
      var _ = 0;
      if (a === 1) {
        for (var p = v[n[0]], g = 0; g < i; g++) {
          var y = p[g];
          (y >= h && y <= c || isNaN(y)) && (u[l++] = _), _++;
        }
        d = !0;
      } else if (a === 2) {
        for (var p = v[n[0]], m = v[n[1]], w = t[n[1]][0], b = t[n[1]][1], g = 0; g < i; g++) {
          var y = p[g], S = m[g];
          (y >= h && y <= c || isNaN(y)) && (S >= w && S <= b || isNaN(S)) && (u[l++] = _), _++;
        }
        d = !0;
      }
    }
    if (!d)
      if (a === 1)
        for (var g = 0; g < o; g++) {
          var T = r.getRawIndex(g), y = v[n[0]][T];
          (y >= h && y <= c || isNaN(y)) && (u[l++] = T);
        }
      else
        for (var g = 0; g < o; g++) {
          for (var x = !0, T = r.getRawIndex(g), C = 0; C < a; C++) {
            var E = n[C], y = v[E][T];
            (y < t[E][0] || y > t[E][1]) && (x = !1);
          }
          x && (u[l++] = r.getRawIndex(g));
        }
    return l < o && (r._indices = u), r._count = l, r._extent = [], r._updateGetRawIdx(), r;
  }, e.prototype.map = function(t, r) {
    var i = this.clone(t);
    return this._updateDims(i, t, r), i;
  }, e.prototype.modify = function(t, r) {
    this._updateDims(this, t, r);
  }, e.prototype._updateDims = function(t, r, i) {
    for (var n = t._chunks, a = [], o = r.length, s = t.count(), u = [], l = t._rawExtent, f = 0; f < r.length; f++)
      l[r[f]] = ci();
    for (var h = 0; h < s; h++) {
      for (var c = t.getRawIndex(h), v = 0; v < o; v++)
        u[v] = n[r[v]][c];
      u[o] = h;
      var d = i && i.apply(null, u);
      if (d != null) {
        typeof d != "object" && (a[0] = d, d = a);
        for (var f = 0; f < d.length; f++) {
          var _ = r[f], p = d[f], g = l[_], y = n[_];
          y && (y[c] = p), p < g[0] && (g[0] = p), p > g[1] && (g[1] = p);
        }
      }
    }
  }, e.prototype.lttbDownSample = function(t, r) {
    var i = this.clone([t], !0), n = i._chunks, a = n[t], o = this.count(), s = 0, u = Math.floor(1 / r), l = this.getRawIndex(0), f, h, c, v = new (Ji(this._rawCount))(Math.min((Math.ceil(o / u) + 2) * 2, o));
    v[s++] = l;
    for (var d = 1; d < o - 1; d += u) {
      for (var _ = Math.min(d + u, o - 1), p = Math.min(d + u * 2, o), g = (p + _) / 2, y = 0, m = _; m < p; m++) {
        var w = this.getRawIndex(m), b = a[w];
        isNaN(b) || (y += b);
      }
      y /= p - _;
      var S = d, T = Math.min(d + u, o), x = d - 1, C = a[l];
      f = -1, c = S;
      for (var E = -1, D = 0, m = S; m < T; m++) {
        var w = this.getRawIndex(m), b = a[w];
        if (isNaN(b)) {
          D++, E < 0 && (E = w);
          continue;
        }
        h = Math.abs((x - g) * (b - C) - (x - m) * (y - C)), h > f && (f = h, c = w);
      }
      D > 0 && D < T - S && (v[s++] = Math.min(E, c), c = Math.max(E, c)), v[s++] = c, l = c;
    }
    return v[s++] = this.getRawIndex(o - 1), i._count = s, i._indices = v, i.getRawIndex = this._getRawIdx, i;
  }, e.prototype.downSample = function(t, r, i, n) {
    for (var a = this.clone([t], !0), o = a._chunks, s = [], u = Math.floor(1 / r), l = o[t], f = this.count(), h = a._rawExtent[t] = ci(), c = new (Ji(this._rawCount))(Math.ceil(f / u)), v = 0, d = 0; d < f; d += u) {
      u > f - d && (u = f - d, s.length = u);
      for (var _ = 0; _ < u; _++) {
        var p = this.getRawIndex(d + _);
        s[_] = l[p];
      }
      var g = i(s), y = this.getRawIndex(Math.min(d + n(s, g) || 0, f - 1));
      l[y] = g, g < h[0] && (h[0] = g), g > h[1] && (h[1] = g), c[v++] = y;
    }
    return a._count = v, a._indices = c, a._updateGetRawIdx(), a;
  }, e.prototype.each = function(t, r) {
    if (!!this._count)
      for (var i = t.length, n = this._chunks, a = 0, o = this.count(); a < o; a++) {
        var s = this.getRawIndex(a);
        switch (i) {
          case 0:
            r(a);
            break;
          case 1:
            r(n[t[0]][s], a);
            break;
          case 2:
            r(n[t[0]][s], n[t[1]][s], a);
            break;
          default:
            for (var u = 0, l = []; u < i; u++)
              l[u] = n[t[u]][s];
            l[u] = a, r.apply(null, l);
        }
      }
  }, e.prototype.getDataExtent = function(t) {
    var r = this._chunks[t], i = ci();
    if (!r)
      return i;
    var n = this.count(), a = !this._indices, o;
    if (a)
      return this._rawExtent[t].slice();
    if (o = this._extent[t], o)
      return o.slice();
    o = i;
    for (var s = o[0], u = o[1], l = 0; l < n; l++) {
      var f = this.getRawIndex(l), h = r[f];
      h < s && (s = h), h > u && (u = h);
    }
    return o = [s, u], this._extent[t] = o, o;
  }, e.prototype.getRawDataItem = function(t) {
    var r = this.getRawIndex(t);
    if (this._provider.persistent)
      return this._provider.getItem(r);
    for (var i = [], n = this._chunks, a = 0; a < n.length; a++)
      i.push(n[a][r]);
    return i;
  }, e.prototype.clone = function(t, r) {
    var i = new e(), n = this._chunks, a = t && fr(t, function(s, u) {
      return s[u] = !0, s;
    }, {});
    if (a)
      for (var o = 0; o < n.length; o++)
        i._chunks[o] = a[o] ? KS(n[o]) : n[o];
    else
      i._chunks = n;
    return this._copyCommonProps(i), r || (i._indices = this._cloneIndices()), i._updateGetRawIdx(), i;
  }, e.prototype._copyCommonProps = function(t) {
    t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = j(this._extent), t._rawExtent = j(this._rawExtent);
  }, e.prototype._cloneIndices = function() {
    if (this._indices) {
      var t = this._indices.constructor, r = void 0;
      if (t === Array) {
        var i = this._indices.length;
        r = new t(i);
        for (var n = 0; n < i; n++)
          r[n] = this._indices[n];
      } else
        r = new t(this._indices);
      return r;
    }
    return null;
  }, e.prototype._getRawIdxIdentity = function(t) {
    return t;
  }, e.prototype._getRawIdx = function(t) {
    return t < this._count && t >= 0 ? this._indices[t] : -1;
  }, e.prototype._updateGetRawIdx = function() {
    this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity;
  }, e.internalField = function() {
    function t(r, i, n, a) {
      return Ya(r[a], this._dimensions[a]);
    }
    Fs = {
      arrayRows: t,
      objectRows: function(r, i, n, a) {
        return Ya(r[i], this._dimensions[a]);
      },
      keyedColumns: t,
      original: function(r, i, n, a) {
        var o = r && (r.value == null ? r : r.value);
        return Ya(o instanceof Array ? o[a] : o, this._dimensions[a]);
      },
      typedArray: function(r, i, n, a) {
        return r[a];
      }
    };
  }(), e;
}(), QS = function() {
  function e(t) {
    this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = t;
  }
  return e.prototype.dirty = function() {
    this._setLocalSource([], []), this._storeList = [], this._dirty = !0;
  }, e.prototype._setLocalSource = function(t, r) {
    this._sourceList = t, this._upstreamSignList = r, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0);
  }, e.prototype._getVersionSign = function() {
    return this._sourceHost.uid + "_" + this._versionSignBase;
  }, e.prototype.prepareSource = function() {
    this._isDirty() && (this._createSource(), this._dirty = !1);
  }, e.prototype._createSource = function() {
    this._setLocalSource([], []);
    var t = this._sourceHost, r = this._getUpstreamSourceManagers(), i = !!r.length, n, a;
    if (ji(t)) {
      var o = t, s = void 0, u = void 0, l = void 0;
      if (i) {
        var f = r[0];
        f.prepareSource(), l = f.getSource(), s = l.data, u = l.sourceFormat, a = [f._getVersionSign()];
      } else
        s = o.get("data", !0), u = Xt(s) ? Ye : ve, a = [];
      var h = this._getSourceMetaRawOption() || {}, c = l && l.metaRawOption || {}, v = tt(h.seriesLayoutBy, c.seriesLayoutBy) || null, d = tt(h.sourceHeader, c.sourceHeader), _ = tt(h.dimensions, c.dimensions), p = v !== c.seriesLayoutBy || !!d != !!c.sourceHeader || _;
      n = p ? [Ku(s, {
        seriesLayoutBy: v,
        sourceHeader: d,
        dimensions: _
      }, u)] : [];
    } else {
      var g = t;
      if (i) {
        var y = this._applyTransform(r);
        n = y.sourceList, a = y.upstreamSignList;
      } else {
        var m = g.get("source", !0);
        n = [Ku(m, this._getSourceMetaRawOption(), null)], a = [];
      }
    }
    process.env.NODE_ENV !== "production" && X(n && a), this._setLocalSource(n, a);
  }, e.prototype._applyTransform = function(t) {
    var r = this._sourceHost, i = r.get("transform", !0), n = r.get("fromTransformResult", !0);
    if (process.env.NODE_ENV !== "production" && X(n != null || i != null), n != null) {
      var a = "";
      t.length !== 1 && (process.env.NODE_ENV !== "production" && (a = "When using `fromTransformResult`, there should be only one upstream dataset"), wc(a));
    }
    var o, s = [], u = [];
    return A(t, function(l) {
      l.prepareSource();
      var f = l.getSource(n || 0), h = "";
      n != null && !f && (process.env.NODE_ENV !== "production" && (h = "Can not retrieve result by `fromTransformResult`: " + n), wc(h)), s.push(f), u.push(l._getVersionSign());
    }), i ? o = YS(i, s, {
      datasetIndex: r.componentIndex
    }) : n != null && (o = [MS(s[0])]), {
      sourceList: o,
      upstreamSignList: u
    };
  }, e.prototype._isDirty = function() {
    if (this._dirty)
      return !0;
    for (var t = this._getUpstreamSourceManagers(), r = 0; r < t.length; r++) {
      var i = t[r];
      if (i._isDirty() || this._upstreamSignList[r] !== i._getVersionSign())
        return !0;
    }
  }, e.prototype.getSource = function(t) {
    t = t || 0;
    var r = this._sourceList[t];
    if (!r) {
      var i = this._getUpstreamSourceManagers();
      return i[0] && i[0].getSource(t);
    }
    return r;
  }, e.prototype.getSharedDataStore = function(t) {
    process.env.NODE_ENV !== "production" && X(ji(this._sourceHost), "Can only call getDataStore on series source manager.");
    var r = t.makeStoreSchema();
    return this._innerGetDataStore(r.dimensions, t.source, r.hash);
  }, e.prototype._innerGetDataStore = function(t, r, i) {
    var n = 0, a = this._storeList, o = a[n];
    o || (o = a[n] = {});
    var s = o[i];
    if (!s) {
      var u = this._getUpstreamSourceManagers()[0];
      ji(this._sourceHost) && u ? s = u._innerGetDataStore(t, r, i) : (s = new Qu(), s.initData(new tg(r, t.length), t)), o[i] = s;
    }
    return s;
  }, e.prototype._getUpstreamSourceManagers = function() {
    var t = this._sourceHost;
    if (ji(t)) {
      var r = tf(t);
      return r ? [r.getSourceManager()] : [];
    } else
      return q(jw(t), function(i) {
        return i.getSourceManager();
      });
  }, e.prototype._getSourceMetaRawOption = function() {
    var t = this._sourceHost, r, i, n;
    if (ji(t))
      r = t.get("seriesLayoutBy", !0), i = t.get("sourceHeader", !0), n = t.get("dimensions", !0);
    else if (!this._getUpstreamSourceManagers().length) {
      var a = t;
      r = a.get("seriesLayoutBy", !0), i = a.get("sourceHeader", !0), n = a.get("dimensions", !0);
    }
    return {
      seriesLayoutBy: r,
      sourceHeader: i,
      dimensions: n
    };
  }, e;
}();
function ji(e) {
  return e.mainType === "series";
}
function wc(e) {
  throw new Error(e);
}
var sg = "line-height:1";
function ug(e, t) {
  var r = e.color || "#6e7079", i = e.fontSize || 12, n = e.fontWeight || "400", a = e.color || "#464646", o = e.fontSize || 14, s = e.fontWeight || "900";
  return t === "html" ? {
    nameStyle: "font-size:" + ce(i + "") + "px;color:" + ce(r) + ";font-weight:" + ce(n + ""),
    valueStyle: "font-size:" + ce(o + "") + "px;color:" + ce(a) + ";font-weight:" + ce(s + "")
  } : {
    nameStyle: {
      fontSize: i,
      fill: r,
      fontWeight: n
    },
    valueStyle: {
      fontSize: o,
      fill: a,
      fontWeight: s
    }
  };
}
var JS = [0, 10, 20, 30], jS = ["", `
`, `

`, `


`];
function Vn(e, t) {
  return t.type = e, t;
}
function Ju(e) {
  return e.type === "section";
}
function lg(e) {
  return Ju(e) ? tb : eb;
}
function fg(e) {
  if (Ju(e)) {
    var t = 0, r = e.blocks.length, i = r > 1 || r > 0 && !e.noHeader;
    return A(e.blocks, function(n) {
      var a = fg(n);
      a >= t && (t = a + +(i && (!a || Ju(n) && !n.noHeader)));
    }), t;
  }
  return 0;
}
function tb(e, t, r, i) {
  var n = t.noHeader, a = rb(fg(t)), o = [], s = t.blocks || [];
  X(!s || N(s)), s = s || [];
  var u = e.orderMode;
  if (t.sortBlocks && u) {
    s = s.slice();
    var l = {
      valueAsc: "asc",
      valueDesc: "desc"
    };
    if (Ai(l, u)) {
      var f = new zS(l[u], null);
      s.sort(function(d, _) {
        return f.evaluate(d.sortParam, _.sortParam);
      });
    } else
      u === "seriesDesc" && s.reverse();
  }
  A(s, function(d, _) {
    var p = t.valueFormatter, g = lg(d)(
      p ? O(O({}, e), {
        valueFormatter: p
      }) : e,
      d,
      _ > 0 ? a.html : 0,
      i
    );
    g != null && o.push(g);
  });
  var h = e.renderMode === "richText" ? o.join(a.richText) : ju(o.join(""), n ? r : a.html);
  if (n)
    return h;
  var c = qu(t.header, "ordinal", e.useUTC), v = ug(i, e.renderMode).nameStyle;
  return e.renderMode === "richText" ? hg(e, c, v) + a.richText + h : ju('<div style="' + v + ";" + sg + ';">' + ce(c) + "</div>" + h, r);
}
function eb(e, t, r, i) {
  var n = e.renderMode, a = t.noName, o = t.noValue, s = !t.markerType, u = t.name, l = e.useUTC, f = t.valueFormatter || e.valueFormatter || function(w) {
    return w = N(w) ? w : [w], q(w, function(b, S) {
      return qu(b, N(v) ? v[S] : v, l);
    });
  };
  if (!(a && o)) {
    var h = s ? "" : e.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || "#333", n), c = a ? "" : qu(u, "ordinal", l), v = t.valueType, d = o ? [] : f(t.value), _ = !s || !a, p = !s && a, g = ug(i, n), y = g.nameStyle, m = g.valueStyle;
    return n === "richText" ? (s ? "" : h) + (a ? "" : hg(e, c, y)) + (o ? "" : ab(e, d, _, p, m)) : ju((s ? "" : h) + (a ? "" : ib(c, !s, y)) + (o ? "" : nb(d, _, p, m)), r);
  }
}
function Sc(e, t, r, i, n, a) {
  if (!!e) {
    var o = lg(e), s = {
      useUTC: n,
      renderMode: r,
      orderMode: i,
      markupStyleCreator: t,
      valueFormatter: e.valueFormatter
    };
    return o(s, e, 0, a);
  }
}
function rb(e) {
  return {
    html: JS[e],
    richText: jS[e]
  };
}
function ju(e, t) {
  var r = '<div style="clear:both"></div>', i = "margin: " + t + "px 0 0";
  return '<div style="' + i + ";" + sg + ';">' + e + r + "</div>";
}
function ib(e, t, r) {
  var i = t ? "margin-left:2px" : "";
  return '<span style="' + r + ";" + i + '">' + ce(e) + "</span>";
}
function nb(e, t, r, i) {
  var n = r ? "10px" : "20px", a = t ? "float:right;margin-left:" + n : "";
  return e = N(e) ? e : [e], '<span style="' + a + ";" + i + '">' + q(e, function(o) {
    return ce(o);
  }).join("&nbsp;&nbsp;") + "</span>";
}
function hg(e, t, r) {
  return e.markupStyleCreator.wrapRichTextStyle(t, r);
}
function ab(e, t, r, i, n) {
  var a = [n], o = i ? 10 : 20;
  return r && a.push({
    padding: [0, 0, 0, o],
    align: "right"
  }), e.markupStyleCreator.wrapRichTextStyle(N(t) ? t.join("  ") : t, a);
}
function ob(e, t) {
  var r = e.getData().getItemVisual(t, "style"), i = r[e.visualDrawType];
  return kn(i);
}
function cg(e, t) {
  var r = e.get("padding");
  return r != null ? r : t === "richText" ? [8, 10] : 10;
}
var Vs = function() {
  function e() {
    this.richTextStyles = {}, this._nextStyleNameId = Pd();
  }
  return e.prototype._generateStyleName = function() {
    return "__EC_aUTo_" + this._nextStyleNameId++;
  }, e.prototype.makeTooltipMarker = function(t, r, i) {
    var n = i === "richText" ? this._generateStyleName() : null, a = $w({
      color: r,
      type: t,
      renderMode: i,
      markerId: n
    });
    return z(a) ? a : (process.env.NODE_ENV !== "production" && X(n), this.richTextStyles[n] = a.style, a.content);
  }, e.prototype.wrapRichTextStyle = function(t, r) {
    var i = {};
    N(r) ? A(r, function(a) {
      return O(i, a);
    }) : O(i, r);
    var n = this._generateStyleName();
    return this.richTextStyles[n] = i, "{" + n + "|" + t + "}";
  }, e;
}();
function sb(e) {
  var t = e.series, r = e.dataIndex, i = e.multipleSeries, n = t.getData(), a = n.mapDimensionsAll("defaultedTooltip"), o = a.length, s = t.getRawValue(r), u = N(s), l = ob(t, r), f, h, c, v;
  if (o > 1 || u && !o) {
    var d = ub(s, t, r, a, l);
    f = d.inlineValues, h = d.inlineValueTypes, c = d.blocks, v = d.inlineValues[0];
  } else if (o) {
    var _ = n.getDimensionInfo(a[0]);
    v = f = Li(n, r, a[0]), h = _.type;
  } else
    v = f = u ? s[0] : s;
  var p = Ll(t), g = p && t.name || "", y = n.getName(r), m = i ? g : y;
  return Vn("section", {
    header: g,
    noHeader: i || !p,
    sortParam: v,
    blocks: [Vn("nameValue", {
      markerType: "item",
      markerColor: l,
      name: m,
      noName: !Le(m),
      value: f,
      valueType: h
    })].concat(c || [])
  });
}
function ub(e, t, r, i, n) {
  var a = t.getData(), o = fr(e, function(h, c, v) {
    var d = a.getDimensionInfo(v);
    return h = h || d && d.tooltip !== !1 && d.displayName != null;
  }, !1), s = [], u = [], l = [];
  i.length ? A(i, function(h) {
    f(Li(a, r, h), h);
  }) : A(e, f);
  function f(h, c) {
    var v = a.getDimensionInfo(c);
    !v || v.otherDims.tooltip === !1 || (o ? l.push(Vn("nameValue", {
      markerType: "subItem",
      markerColor: n,
      name: v.displayName,
      value: h,
      valueType: v.type
    })) : (s.push(h), u.push(v.type)));
  }
  return {
    inlineValues: s,
    inlineValueTypes: u,
    blocks: l
  };
}
var je = At();
function ya(e, t) {
  return e.getName(t) || e.getId(t);
}
var lb = "__universalTransitionEnabled", Ho = function(e) {
  k(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r._selectedDataIndicesMap = {}, r;
  }
  return t.prototype.init = function(r, i, n) {
    this.seriesIndex = this.componentIndex, this.dataTask = An({
      count: hb,
      reset: cb
    }), this.dataTask.context = {
      model: this
    }, this.mergeDefaultAndTheme(r, n);
    var a = je(this).sourceManager = new QS(this);
    a.prepareSource();
    var o = this.getInitialData(r, n);
    xc(o, this), this.dataTask.context.data = o, process.env.NODE_ENV !== "production" && X(o, "getInitialData returned invalid data."), je(this).dataBeforeProcessed = o, bc(this), this._initSelectedMapFromData(o);
  }, t.prototype.mergeDefaultAndTheme = function(r, i) {
    var n = vo(this), a = n ? jl(r) : {}, o = this.subType;
    lt.hasClass(o) && (o += "Series"), ht(r, i.getTheme().get(this.subType)), ht(r, this.getDefaultOption()), Nu(r, "label", ["show"]), this.fillDataTextStyle(r.data), n && zn(r, a, n);
  }, t.prototype.mergeOption = function(r, i) {
    r = ht(this.option, r, !0), this.fillDataTextStyle(r.data);
    var n = vo(this);
    n && zn(this.option, r, n);
    var a = je(this).sourceManager;
    a.dirty(), a.prepareSource();
    var o = this.getInitialData(r, i);
    xc(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, je(this).dataBeforeProcessed = o, bc(this), this._initSelectedMapFromData(o);
  }, t.prototype.fillDataTextStyle = function(r) {
    if (r && !Xt(r))
      for (var i = ["show"], n = 0; n < r.length; n++)
        r[n] && r[n].label && Nu(r[n], "label", i);
  }, t.prototype.getInitialData = function(r, i) {
  }, t.prototype.appendData = function(r) {
    var i = this.getRawData();
    i.appendData(r.data);
  }, t.prototype.getData = function(r) {
    var i = tl(this);
    if (i) {
      var n = i.context.data;
      return r == null ? n : n.getLinkedData(r);
    } else
      return je(this).data;
  }, t.prototype.getAllData = function() {
    var r = this.getData();
    return r && r.getLinkedDataAll ? r.getLinkedDataAll() : [{
      data: r
    }];
  }, t.prototype.setData = function(r) {
    var i = tl(this);
    if (i) {
      var n = i.context;
      n.outputData = r, i !== this.dataTask && (n.data = r);
    }
    je(this).data = r;
  }, t.prototype.getEncode = function() {
    var r = this.get("encode", !0);
    if (r)
      return Q(r);
  }, t.prototype.getSourceManager = function() {
    return je(this).sourceManager;
  }, t.prototype.getSource = function() {
    return this.getSourceManager().getSource();
  }, t.prototype.getRawData = function() {
    return je(this).dataBeforeProcessed;
  }, t.prototype.getColorBy = function() {
    var r = this.get("colorBy");
    return r || "series";
  }, t.prototype.isColorBySeries = function() {
    return this.getColorBy() === "series";
  }, t.prototype.getBaseAxis = function() {
    var r = this.coordinateSystem;
    return r && r.getBaseAxis && r.getBaseAxis();
  }, t.prototype.formatTooltip = function(r, i, n) {
    return sb({
      series: this,
      dataIndex: r,
      multipleSeries: i
    });
  }, t.prototype.isAnimationEnabled = function() {
    var r = this.ecModel;
    if (Z.node && !(r && r.ssr))
      return !1;
    var i = this.getShallow("animation");
    return i && this.getData().count() > this.getShallow("animationThreshold") && (i = !1), !!i;
  }, t.prototype.restoreData = function() {
    this.dataTask.dirty();
  }, t.prototype.getColorFromPalette = function(r, i, n) {
    var a = this.ecModel, o = ef.prototype.getColorFromPalette.call(this, r, i, n);
    return o || (o = a.getColorFromPalette(r, i, n)), o;
  }, t.prototype.coordDimToDataDim = function(r) {
    return this.getRawData().mapDimensionsAll(r);
  }, t.prototype.getProgressive = function() {
    return this.get("progressive");
  }, t.prototype.getProgressiveThreshold = function() {
    return this.get("progressiveThreshold");
  }, t.prototype.select = function(r, i) {
    this._innerSelect(this.getData(i), r);
  }, t.prototype.unselect = function(r, i) {
    var n = this.option.selectedMap;
    if (!!n) {
      var a = this.option.selectedMode, o = this.getData(i);
      if (a === "series" || n === "all") {
        this.option.selectedMap = {}, this._selectedDataIndicesMap = {};
        return;
      }
      for (var s = 0; s < r.length; s++) {
        var u = r[s], l = ya(o, u);
        n[l] = !1, this._selectedDataIndicesMap[l] = -1;
      }
    }
  }, t.prototype.toggleSelect = function(r, i) {
    for (var n = [], a = 0; a < r.length; a++)
      n[0] = r[a], this.isSelected(r[a], i) ? this.unselect(n, i) : this.select(n, i);
  }, t.prototype.getSelectedDataIndices = function() {
    if (this.option.selectedMap === "all")
      return [].slice.call(this.getData().getIndices());
    for (var r = this._selectedDataIndicesMap, i = yt(r), n = [], a = 0; a < i.length; a++) {
      var o = r[i[a]];
      o >= 0 && n.push(o);
    }
    return n;
  }, t.prototype.isSelected = function(r, i) {
    var n = this.option.selectedMap;
    if (!n)
      return !1;
    var a = this.getData(i);
    return (n === "all" || n[ya(a, r)]) && !a.getItemModel(r).get(["select", "disabled"]);
  }, t.prototype.isUniversalTransitionEnabled = function() {
    if (this[lb])
      return !0;
    var r = this.option.universalTransition;
    return r ? r === !0 ? !0 : r && r.enabled : !1;
  }, t.prototype._innerSelect = function(r, i) {
    var n, a, o = this.option, s = o.selectedMode, u = i.length;
    if (!(!s || !u)) {
      if (s === "series")
        o.selectedMap = "all";
      else if (s === "multiple") {
        F(o.selectedMap) || (o.selectedMap = {});
        for (var l = o.selectedMap, f = 0; f < u; f++) {
          var h = i[f], c = ya(r, h);
          l[c] = !0, this._selectedDataIndicesMap[c] = r.getRawIndex(h);
        }
      } else if (s === "single" || s === !0) {
        var v = i[u - 1], c = ya(r, v);
        o.selectedMap = (n = {}, n[c] = !0, n), this._selectedDataIndicesMap = (a = {}, a[c] = r.getRawIndex(v), a);
      }
    }
  }, t.prototype._initSelectedMapFromData = function(r) {
    if (!this.option.selectedMap) {
      var i = [];
      r.hasItemOption && r.each(function(n) {
        var a = r.getRawDataItem(n);
        a && a.selected && i.push(n);
      }), i.length > 0 && this._innerSelect(r, i);
    }
  }, t.registerClass = function(r) {
    return lt.registerClass(r);
  }, t.protoInitialize = function() {
    var r = t.prototype;
    r.type = "series.__base__", r.seriesIndex = 0, r.ignoreStyleOnData = !1, r.hasSymbolVisual = !1, r.defaultSymbol = "circle", r.visualStyleAccessPath = "itemStyle", r.visualDrawType = "fill";
  }(), t;
}(lt);
qe(Ho, kS);
qe(Ho, ef);
kd(Ho, lt);
function bc(e) {
  var t = e.name;
  Ll(e) || (e.name = fb(e) || t);
}
function fb(e) {
  var t = e.getRawData(), r = t.mapDimensionsAll("seriesName"), i = [];
  return A(r, function(n) {
    var a = t.getDimensionInfo(n);
    a.displayName && i.push(a.displayName);
  }), i.join(" ");
}
function hb(e) {
  return e.model.getRawData().count();
}
function cb(e) {
  var t = e.model;
  return t.setData(t.getRawData().cloneShallow()), vb;
}
function vb(e, t) {
  t.outputData && e.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData);
}
function xc(e, t) {
  A(ty(e.CHANGABLE_METHODS, e.DOWNSAMPLE_METHODS), function(r) {
    e.wrapMethod(r, _t(db, t));
  });
}
function db(e, t) {
  var r = tl(e);
  return r && r.setOutputEnd((t || this).count()), t;
}
function tl(e) {
  var t = (e.ecModel || {}).scheduler, r = t && t.getPipeline(e.uid);
  if (r) {
    var i = r.currentTask;
    if (i) {
      var n = i.agentStubMap;
      n && (i = n.get(e.uid));
    }
    return i;
  }
}
const Qr = Ho;
var uf = function() {
  function e() {
    this.group = new ye(), this.uid = Bo("viewComponent");
  }
  return e.prototype.init = function(t, r) {
  }, e.prototype.render = function(t, r, i, n) {
  }, e.prototype.dispose = function(t, r) {
  }, e.prototype.updateView = function(t, r, i, n) {
  }, e.prototype.updateLayout = function(t, r, i, n) {
  }, e.prototype.updateVisual = function(t, r, i, n) {
  }, e.prototype.toggleBlurSeries = function(t, r, i) {
  }, e.prototype.eachRendered = function(t) {
    var r = this.group;
    r && r.traverse(t);
  }, e;
}();
Rl(uf);
Ol(uf);
const cr = uf;
function vg() {
  var e = At();
  return function(t) {
    var r = e(t), i = t.pipelineContext, n = !!r.large, a = !!r.progressiveRender, o = r.large = !!(i && i.large), s = r.progressiveRender = !!(i && i.progressiveRender);
    return (n !== o || a !== s) && "reset";
  };
}
var dg = At(), pb = vg(), lf = function() {
  function e() {
    this.group = new ye(), this.uid = Bo("viewChart"), this.renderTask = An({
      plan: gb,
      reset: _b
    }), this.renderTask.context = {
      view: this
    };
  }
  return e.prototype.init = function(t, r) {
  }, e.prototype.render = function(t, r, i, n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("render method must been implemented");
  }, e.prototype.highlight = function(t, r, i, n) {
    var a = t.getData(n && n.dataType);
    if (!a) {
      process.env.NODE_ENV !== "production" && Rt("Unknown dataType " + n.dataType);
      return;
    }
    Cc(a, n, "emphasis");
  }, e.prototype.downplay = function(t, r, i, n) {
    var a = t.getData(n && n.dataType);
    if (!a) {
      process.env.NODE_ENV !== "production" && Rt("Unknown dataType " + n.dataType);
      return;
    }
    Cc(a, n, "normal");
  }, e.prototype.remove = function(t, r) {
    this.group.removeAll();
  }, e.prototype.dispose = function(t, r) {
  }, e.prototype.updateView = function(t, r, i, n) {
    this.render(t, r, i, n);
  }, e.prototype.updateLayout = function(t, r, i, n) {
    this.render(t, r, i, n);
  }, e.prototype.updateVisual = function(t, r, i, n) {
    this.render(t, r, i, n);
  }, e.prototype.eachRendered = function(t) {
    Xl(this.group, t);
  }, e.markUpdateMethod = function(t, r) {
    dg(t).updateMethod = r;
  }, e.protoInitialize = function() {
    var t = e.prototype;
    t.type = "chart";
  }(), e;
}();
function Tc(e, t, r) {
  e && Pi(e) && (t === "emphasis" ? Vu : Hu)(e, r);
}
function Cc(e, t, r) {
  var i = Yn(e, t), n = t && t.highlightKey != null ? c1(t.highlightKey) : null;
  i != null ? A(zt(i), function(a) {
    Tc(e.getItemGraphicEl(a), r, n);
  }) : e.eachItemGraphicEl(function(a) {
    Tc(a, r, n);
  });
}
Rl(lf, ["dispose"]);
Ol(lf);
function gb(e) {
  return pb(e.model);
}
function _b(e) {
  var t = e.model, r = e.ecModel, i = e.api, n = e.payload, a = t.pipelineContext.progressiveRender, o = e.view, s = n && dg(n).updateMethod, u = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
  return u !== "render" && o[u](t, r, i, n), yb[u];
}
var yb = {
  incrementalPrepareRender: {
    progress: function(e, t) {
      t.view.incrementalRender(e, t.model, t.ecModel, t.api, t.payload);
    }
  },
  render: {
    forceFirstProgress: !0,
    progress: function(e, t) {
      t.view.render(t.model, t.ecModel, t.api, t.payload);
    }
  }
};
const Yr = lf;
var go = "\0__throttleOriginMethod", Dc = "\0__throttleRate", Ac = "\0__throttleType";
function Go(e, t, r) {
  var i, n = 0, a = 0, o = null, s, u, l, f;
  t = t || 0;
  function h() {
    a = new Date().getTime(), o = null, e.apply(u, l || []);
  }
  var c = function() {
    for (var v = [], d = 0; d < arguments.length; d++)
      v[d] = arguments[d];
    i = new Date().getTime(), u = this, l = v;
    var _ = f || t, p = f || r;
    f = null, s = i - (p ? n : a) - _, clearTimeout(o), p ? o = setTimeout(h, _) : s >= 0 ? h() : o = setTimeout(h, -s), n = i;
  };
  return c.clear = function() {
    o && (clearTimeout(o), o = null);
  }, c.debounceNextCall = function(v) {
    f = v;
  }, c;
}
function pg(e, t, r, i) {
  var n = e[t];
  if (!!n) {
    var a = n[go] || n, o = n[Ac], s = n[Dc];
    if (s !== r || o !== i) {
      if (r == null || !i)
        return e[t] = a;
      n = e[t] = Go(a, r, i === "debounce"), n[go] = a, n[Ac] = i, n[Dc] = r;
    }
    return n;
  }
}
function el(e, t) {
  var r = e[t];
  r && r[go] && (r.clear && r.clear(), e[t] = r[go]);
}
var Ec = At(), Mc = {
  itemStyle: On(Np, !0),
  lineStyle: On(Op, !0)
}, mb = {
  lineStyle: "stroke",
  itemStyle: "fill"
};
function gg(e, t) {
  var r = e.visualStyleMapper || Mc[t];
  return r || (console.warn("Unkown style type '" + t + "'."), Mc.itemStyle);
}
function _g(e, t) {
  var r = e.visualDrawType || mb[t];
  return r || (console.warn("Unkown style type '" + t + "'."), "fill");
}
var wb = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(e, t) {
    var r = e.getData(), i = e.visualStyleAccessPath || "itemStyle", n = e.getModel(i), a = gg(e, i), o = a(n), s = n.getShallow("decal");
    s && (r.setVisual("decal", s), s.dirty = !0);
    var u = _g(e, i), l = o[u], f = J(l) ? l : null, h = o.fill === "auto" || o.stroke === "auto";
    if (!o[u] || f || h) {
      var c = e.getColorFromPalette(
        e.name,
        null,
        t.getSeriesCount()
      );
      o[u] || (o[u] = c, r.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || J(o.fill) ? c : o.fill, o.stroke = o.stroke === "auto" || J(o.stroke) ? c : o.stroke;
    }
    if (r.setVisual("style", o), r.setVisual("drawType", u), !t.isSeriesFiltered(e) && f)
      return r.setVisual("colorFromPalette", !1), {
        dataEach: function(v, d) {
          var _ = e.getDataParams(d), p = O({}, o);
          p[u] = f(_), v.setItemVisual(d, "style", p);
        }
      };
  }
}, tn = new It(), Sb = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(e, t) {
    if (!(e.ignoreStyleOnData || t.isSeriesFiltered(e))) {
      var r = e.getData(), i = e.visualStyleAccessPath || "itemStyle", n = gg(e, i), a = r.getVisual("drawType");
      return {
        dataEach: r.hasItemOption ? function(o, s) {
          var u = o.getRawDataItem(s);
          if (u && u[i]) {
            tn.option = u[i];
            var l = n(tn), f = o.ensureUniqueItemVisual(s, "style");
            O(f, l), tn.option.decal && (o.setItemVisual(s, "decal", tn.option.decal), tn.option.decal.dirty = !0), a in l && o.setItemVisual(s, "colorFromPalette", !1);
          }
        } : null
      };
    }
  }
}, bb = {
  performRawSeries: !0,
  overallReset: function(e) {
    var t = Q();
    e.eachSeries(function(r) {
      var i = r.getColorBy();
      if (!r.isColorBySeries()) {
        var n = r.type + "-" + i, a = t.get(n);
        a || (a = {}, t.set(n, a)), Ec(r).scope = a;
      }
    }), e.eachSeries(function(r) {
      if (!(r.isColorBySeries() || e.isSeriesFiltered(r))) {
        var i = r.getRawData(), n = {}, a = r.getData(), o = Ec(r).scope, s = r.visualStyleAccessPath || "itemStyle", u = _g(r, s);
        a.each(function(l) {
          var f = a.getRawIndex(l);
          n[f] = l;
        }), i.each(function(l) {
          var f = n[l], h = a.getItemVisual(f, "colorFromPalette");
          if (h) {
            var c = a.ensureUniqueItemVisual(f, "style"), v = i.getName(l) || l + "", d = i.count();
            c[u] = r.getColorFromPalette(v, o, d);
          }
        });
      }
    });
  }
}, ma = Math.PI;
function xb(e, t) {
  t = t || {}, ct(t, {
    text: "loading",
    textColor: "#000",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "sans-serif",
    maskColor: "rgba(255, 255, 255, 0.8)",
    showSpinner: !0,
    color: "#5470c6",
    spinnerRadius: 10,
    lineWidth: 5,
    zlevel: 0
  });
  var r = new ye(), i = new Dt({
    style: {
      fill: t.maskColor
    },
    zlevel: t.zlevel,
    z: 1e4
  });
  r.add(i);
  var n = new Ft({
    style: {
      text: t.text,
      fill: t.textColor,
      fontSize: t.fontSize,
      fontWeight: t.fontWeight,
      fontStyle: t.fontStyle,
      fontFamily: t.fontFamily
    },
    zlevel: t.zlevel,
    z: 10001
  }), a = new Dt({
    style: {
      fill: "none"
    },
    textContent: n,
    textConfig: {
      position: "right",
      distance: 10
    },
    zlevel: t.zlevel,
    z: 10001
  });
  r.add(a);
  var o;
  return t.showSpinner && (o = new Hl({
    shape: {
      startAngle: -ma / 2,
      endAngle: -ma / 2 + 0.1,
      r: t.spinnerRadius
    },
    style: {
      stroke: t.color,
      lineCap: "round",
      lineWidth: t.lineWidth
    },
    zlevel: t.zlevel,
    z: 10001
  }), o.animateShape(!0).when(1e3, {
    endAngle: ma * 3 / 2
  }).start("circularInOut"), o.animateShape(!0).when(1e3, {
    startAngle: ma * 3 / 2
  }).delay(300).start("circularInOut"), r.add(o)), r.resize = function() {
    var s = n.getBoundingRect().width, u = t.showSpinner ? t.spinnerRadius : 0, l = (e.getWidth() - u * 2 - (t.showSpinner && s ? 10 : 0) - s) / 2 - (t.showSpinner && s ? 0 : 5 + s / 2) + (t.showSpinner ? 0 : s / 2) + (s ? 0 : u), f = e.getHeight() / 2;
    t.showSpinner && o.setShape({
      cx: l,
      cy: f
    }), a.setShape({
      x: l - u,
      y: f - u,
      width: u * 2,
      height: u * 2
    }), i.setShape({
      x: 0,
      y: 0,
      width: e.getWidth(),
      height: e.getHeight()
    });
  }, r.resize(), r;
}
var Tb = function() {
  function e(t, r, i, n) {
    this._stageTaskMap = Q(), this.ecInstance = t, this.api = r, i = this._dataProcessorHandlers = i.slice(), n = this._visualHandlers = n.slice(), this._allHandlers = i.concat(n);
  }
  return e.prototype.restoreData = function(t, r) {
    t.restoreData(r), this._stageTaskMap.each(function(i) {
      var n = i.overallTask;
      n && n.dirty();
    });
  }, e.prototype.getPerformArgs = function(t, r) {
    if (!!t.__pipeline) {
      var i = this._pipelineMap.get(t.__pipeline.id), n = i.context, a = !r && i.progressiveEnabled && (!n || n.progressiveRender) && t.__idxInPipeline > i.blockIndex, o = a ? i.step : null, s = n && n.modDataCount, u = s != null ? Math.ceil(s / o) : null;
      return {
        step: o,
        modBy: u,
        modDataCount: s
      };
    }
  }, e.prototype.getPipeline = function(t) {
    return this._pipelineMap.get(t);
  }, e.prototype.updateStreamModes = function(t, r) {
    var i = this._pipelineMap.get(t.uid), n = t.getData(), a = n.count(), o = i.progressiveEnabled && r.incrementalPrepareRender && a >= i.threshold, s = t.get("large") && a >= t.get("largeThreshold"), u = t.get("progressiveChunkMode") === "mod" ? a : null;
    t.pipelineContext = i.context = {
      progressiveRender: o,
      modDataCount: u,
      large: s
    };
  }, e.prototype.restorePipelines = function(t) {
    var r = this, i = r._pipelineMap = Q();
    t.eachSeries(function(n) {
      var a = n.getProgressive(), o = n.uid;
      i.set(o, {
        id: o,
        head: null,
        tail: null,
        threshold: n.getProgressiveThreshold(),
        progressiveEnabled: a && !(n.preventIncremental && n.preventIncremental()),
        blockIndex: -1,
        step: Math.round(a || 700),
        count: 0
      }), r._pipe(n, n.dataTask);
    });
  }, e.prototype.prepareStageTasks = function() {
    var t = this._stageTaskMap, r = this.api.getModel(), i = this.api;
    A(this._allHandlers, function(n) {
      var a = t.get(n.uid) || t.set(n.uid, {}), o = "";
      process.env.NODE_ENV !== "production" && (o = '"reset" and "overallReset" must not be both specified.'), X(!(n.reset && n.overallReset), o), n.reset && this._createSeriesStageTask(n, a, r, i), n.overallReset && this._createOverallStageTask(n, a, r, i);
    }, this);
  }, e.prototype.prepareView = function(t, r, i, n) {
    var a = t.renderTask, o = a.context;
    o.model = r, o.ecModel = i, o.api = n, a.__block = !t.incrementalPrepareRender, this._pipe(r, a);
  }, e.prototype.performDataProcessorTasks = function(t, r) {
    this._performStageTasks(this._dataProcessorHandlers, t, r, {
      block: !0
    });
  }, e.prototype.performVisualTasks = function(t, r, i) {
    this._performStageTasks(this._visualHandlers, t, r, i);
  }, e.prototype._performStageTasks = function(t, r, i, n) {
    n = n || {};
    var a = !1, o = this;
    A(t, function(u, l) {
      if (!(n.visualType && n.visualType !== u.visualType)) {
        var f = o._stageTaskMap.get(u.uid), h = f.seriesTaskMap, c = f.overallTask;
        if (c) {
          var v, d = c.agentStubMap;
          d.each(function(p) {
            s(n, p) && (p.dirty(), v = !0);
          }), v && c.dirty(), o.updatePayload(c, i);
          var _ = o.getPerformArgs(c, n.block);
          d.each(function(p) {
            p.perform(_);
          }), c.perform(_) && (a = !0);
        } else
          h && h.each(function(p, g) {
            s(n, p) && p.dirty();
            var y = o.getPerformArgs(p, n.block);
            y.skip = !u.performRawSeries && r.isSeriesFiltered(p.context.model), o.updatePayload(p, i), p.perform(y) && (a = !0);
          });
      }
    });
    function s(u, l) {
      return u.setDirty && (!u.dirtyMap || u.dirtyMap.get(l.__pipeline.id));
    }
    this.unfinished = a || this.unfinished;
  }, e.prototype.performSeriesTasks = function(t) {
    var r;
    t.eachSeries(function(i) {
      r = i.dataTask.perform() || r;
    }), this.unfinished = r || this.unfinished;
  }, e.prototype.plan = function() {
    this._pipelineMap.each(function(t) {
      var r = t.tail;
      do {
        if (r.__block) {
          t.blockIndex = r.__idxInPipeline;
          break;
        }
        r = r.getUpstream();
      } while (r);
    });
  }, e.prototype.updatePayload = function(t, r) {
    r !== "remain" && (t.context.payload = r);
  }, e.prototype._createSeriesStageTask = function(t, r, i, n) {
    var a = this, o = r.seriesTaskMap, s = r.seriesTaskMap = Q(), u = t.seriesType, l = t.getTargetSeries;
    t.createOnAllSeries ? i.eachRawSeries(f) : u ? i.eachRawSeriesByType(u, f) : l && l(i, n).each(f);
    function f(h) {
      var c = h.uid, v = s.set(c, o && o.get(c) || An({
        plan: Mb,
        reset: Pb,
        count: Ib
      }));
      v.context = {
        model: h,
        ecModel: i,
        api: n,
        useClearVisual: t.isVisual && !t.isLayout,
        plan: t.plan,
        reset: t.reset,
        scheduler: a
      }, a._pipe(h, v);
    }
  }, e.prototype._createOverallStageTask = function(t, r, i, n) {
    var a = this, o = r.overallTask = r.overallTask || An({
      reset: Cb
    });
    o.context = {
      ecModel: i,
      api: n,
      overallReset: t.overallReset,
      scheduler: a
    };
    var s = o.agentStubMap, u = o.agentStubMap = Q(), l = t.seriesType, f = t.getTargetSeries, h = !0, c = !1, v = "";
    process.env.NODE_ENV !== "production" && (v = '"createOnAllSeries" do not supported for "overallReset", becuase it will block all streams.'), X(!t.createOnAllSeries, v), l ? i.eachRawSeriesByType(l, d) : f ? f(i, n).each(d) : (h = !1, A(i.getSeries(), d));
    function d(_) {
      var p = _.uid, g = u.set(p, s && s.get(p) || (c = !0, An({
        reset: Db,
        onDirty: Eb
      })));
      g.context = {
        model: _,
        overallProgress: h
      }, g.agent = o, g.__block = h, a._pipe(_, g);
    }
    c && o.dirty();
  }, e.prototype._pipe = function(t, r) {
    var i = t.uid, n = this._pipelineMap.get(i);
    !n.head && (n.head = r), n.tail && n.tail.pipe(r), n.tail = r, r.__idxInPipeline = n.count++, r.__pipeline = n;
  }, e.wrapStageHandler = function(t, r) {
    return J(t) && (t = {
      overallReset: t,
      seriesType: Rb(t)
    }), t.uid = Bo("stageHandler"), r && (t.visualType = r), t;
  }, e;
}();
function Cb(e) {
  e.overallReset(e.ecModel, e.api, e.payload);
}
function Db(e) {
  return e.overallProgress && Ab;
}
function Ab() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function Eb() {
  this.agent && this.agent.dirty();
}
function Mb(e) {
  return e.plan ? e.plan(e.model, e.ecModel, e.api, e.payload) : null;
}
function Pb(e) {
  e.useClearVisual && e.data.clearAllVisual();
  var t = e.resetDefines = zt(e.reset(e.model, e.ecModel, e.api, e.payload));
  return t.length > 1 ? q(t, function(r, i) {
    return yg(i);
  }) : Lb;
}
var Lb = yg(0);
function yg(e) {
  return function(t, r) {
    var i = r.data, n = r.resetDefines[e];
    if (n && n.dataEach)
      for (var a = t.start; a < t.end; a++)
        n.dataEach(i, a);
    else
      n && n.progress && n.progress(t, i);
  };
}
function Ib(e) {
  return e.data.count();
}
function Rb(e) {
  _o = null;
  try {
    e(Hn, mg);
  } catch {
  }
  return _o;
}
var Hn = {}, mg = {}, _o;
wg(Hn, qp);
wg(mg, Zp);
Hn.eachSeriesByType = Hn.eachRawSeriesByType = function(e) {
  _o = e;
};
Hn.eachComponent = function(e) {
  e.mainType === "series" && e.subType && (_o = e.subType);
};
function wg(e, t) {
  for (var r in t.prototype)
    e[r] = Ut;
}
const Sg = Tb;
var Pc = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"];
const Ob = {
  color: Pc,
  colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], Pc]
};
var Ot = "#B9B8CE", Lc = "#100C2A", wa = function() {
  return {
    axisLine: {
      lineStyle: {
        color: Ot
      }
    },
    splitLine: {
      lineStyle: {
        color: "#484753"
      }
    },
    splitArea: {
      areaStyle: {
        color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"]
      }
    },
    minorSplitLine: {
      lineStyle: {
        color: "#20203B"
      }
    }
  };
}, Ic = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"], bg = {
  darkMode: !0,
  color: Ic,
  backgroundColor: Lc,
  axisPointer: {
    lineStyle: {
      color: "#817f91"
    },
    crossStyle: {
      color: "#817f91"
    },
    label: {
      color: "#fff"
    }
  },
  legend: {
    textStyle: {
      color: Ot
    }
  },
  textStyle: {
    color: Ot
  },
  title: {
    textStyle: {
      color: "#EEF1FA"
    },
    subtextStyle: {
      color: "#B9B8CE"
    }
  },
  toolbox: {
    iconStyle: {
      borderColor: Ot
    }
  },
  dataZoom: {
    borderColor: "#71708A",
    textStyle: {
      color: Ot
    },
    brushStyle: {
      color: "rgba(135,163,206,0.3)"
    },
    handleStyle: {
      color: "#353450",
      borderColor: "#C5CBE3"
    },
    moveHandleStyle: {
      color: "#B0B6C3",
      opacity: 0.3
    },
    fillerColor: "rgba(135,163,206,0.2)",
    emphasis: {
      handleStyle: {
        borderColor: "#91B7F2",
        color: "#4D587D"
      },
      moveHandleStyle: {
        color: "#636D9A",
        opacity: 0.7
      }
    },
    dataBackground: {
      lineStyle: {
        color: "#71708A",
        width: 1
      },
      areaStyle: {
        color: "#71708A"
      }
    },
    selectedDataBackground: {
      lineStyle: {
        color: "#87A3CE"
      },
      areaStyle: {
        color: "#87A3CE"
      }
    }
  },
  visualMap: {
    textStyle: {
      color: Ot
    }
  },
  timeline: {
    lineStyle: {
      color: Ot
    },
    label: {
      color: Ot
    },
    controlStyle: {
      color: Ot,
      borderColor: Ot
    }
  },
  calendar: {
    itemStyle: {
      color: Lc
    },
    dayLabel: {
      color: Ot
    },
    monthLabel: {
      color: Ot
    },
    yearLabel: {
      color: Ot
    }
  },
  timeAxis: wa(),
  logAxis: wa(),
  valueAxis: wa(),
  categoryAxis: wa(),
  line: {
    symbol: "circle"
  },
  graph: {
    color: Ic
  },
  gauge: {
    title: {
      color: Ot
    },
    axisLine: {
      lineStyle: {
        color: [[1, "rgba(207,212,219,0.2)"]]
      }
    },
    axisLabel: {
      color: Ot
    },
    detail: {
      color: "#EEF1FA"
    }
  },
  candlestick: {
    itemStyle: {
      color: "#f64e56",
      color0: "#54ea92",
      borderColor: "#f64e56",
      borderColor0: "#54ea92"
    }
  }
};
bg.categoryAxis.splitLine.show = !1;
const Nb = bg;
var kb = function() {
  function e() {
  }
  return e.prototype.normalizeQuery = function(t) {
    var r = {}, i = {}, n = {};
    if (z(t)) {
      var a = Ie(t);
      r.mainType = a.main || null, r.subType = a.sub || null;
    } else {
      var o = ["Index", "Name", "Id"], s = {
        name: 1,
        dataIndex: 1,
        dataType: 1
      };
      A(t, function(u, l) {
        for (var f = !1, h = 0; h < o.length; h++) {
          var c = o[h], v = l.lastIndexOf(c);
          if (v > 0 && v === l.length - c.length) {
            var d = l.slice(0, v);
            d !== "data" && (r.mainType = d, r[c.toLowerCase()] = u, f = !0);
          }
        }
        s.hasOwnProperty(l) && (i[l] = u, f = !0), f || (n[l] = u);
      });
    }
    return {
      cptQuery: r,
      dataQuery: i,
      otherQuery: n
    };
  }, e.prototype.filter = function(t, r) {
    var i = this.eventInfo;
    if (!i)
      return !0;
    var n = i.targetEl, a = i.packedEvent, o = i.model, s = i.view;
    if (!o || !s)
      return !0;
    var u = r.cptQuery, l = r.dataQuery;
    return f(u, o, "mainType") && f(u, o, "subType") && f(u, o, "index", "componentIndex") && f(u, o, "name") && f(u, o, "id") && f(l, a, "name") && f(l, a, "dataIndex") && f(l, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, r.otherQuery, n, a));
    function f(h, c, v, d) {
      return h[v] == null || c[d || v] === h[v];
    }
  }, e.prototype.afterTrigger = function() {
    this.eventInfo = null;
  }, e;
}(), rl = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], Rc = rl.concat(["symbolKeepAspect"]), Bb = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(e, t) {
    var r = e.getData();
    if (e.legendIcon && r.setVisual("legendIcon", e.legendIcon), !e.hasSymbolVisual)
      return;
    for (var i = {}, n = {}, a = !1, o = 0; o < rl.length; o++) {
      var s = rl[o], u = e.get(s);
      J(u) ? (a = !0, n[s] = u) : i[s] = u;
    }
    if (i.symbol = i.symbol || e.defaultSymbol, r.setVisual(O({
      legendIcon: e.legendIcon || i.symbol,
      symbolKeepAspect: e.get("symbolKeepAspect")
    }, i)), t.isSeriesFiltered(e))
      return;
    var l = yt(n);
    function f(h, c) {
      for (var v = e.getRawValue(c), d = e.getDataParams(c), _ = 0; _ < l.length; _++) {
        var p = l[_];
        h.setItemVisual(c, p, n[p](v, d));
      }
    }
    return {
      dataEach: a ? f : null
    };
  }
}, zb = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(e, t) {
    if (!e.hasSymbolVisual || t.isSeriesFiltered(e))
      return;
    var r = e.getData();
    function i(n, a) {
      for (var o = n.getItemModel(a), s = 0; s < Rc.length; s++) {
        var u = Rc[s], l = o.getShallow(u, !0);
        l != null && n.setItemVisual(a, u, l);
      }
    }
    return {
      dataEach: r.hasItemOption ? i : null
    };
  }
};
function Fb(e, t, r) {
  switch (r) {
    case "color":
      var i = e.getItemVisual(t, "style");
      return i[e.getVisual("drawType")];
    case "opacity":
      return e.getItemVisual(t, "style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return e.getItemVisual(t, r);
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + r);
  }
}
function Vb(e, t) {
  switch (t) {
    case "color":
      var r = e.getVisual("style");
      return r[e.getVisual("drawType")];
    case "opacity":
      return e.getVisual("style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return e.getVisual(t);
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + t);
  }
}
function Hb(e, t) {
  function r(i, n) {
    var a = [];
    return i.eachComponent({
      mainType: "series",
      subType: e,
      query: n
    }, function(o) {
      a.push(o.seriesIndex);
    }), a;
  }
  A([[e + "ToggleSelect", "toggleSelect"], [e + "Select", "select"], [e + "UnSelect", "unselect"]], function(i) {
    t(i[0], function(n, a, o) {
      n = O({}, n), process.env.NODE_ENV !== "production" && mt(n.type, i[1]), o.dispatchAction(O(n, {
        type: i[1],
        seriesIndex: r(a, n)
      }));
    });
  });
}
function vi(e, t, r, i, n) {
  var a = e + t;
  r.isSilent(a) || (process.env.NODE_ENV !== "production" && ke("event " + a + " is deprecated."), i.eachComponent({
    mainType: "series",
    subType: "pie"
  }, function(o) {
    for (var s = o.seriesIndex, u = o.option.selectedMap, l = n.selected, f = 0; f < l.length; f++)
      if (l[f].seriesIndex === s) {
        var h = o.getData(), c = Yn(h, n.fromActionPayload);
        r.trigger(a, {
          type: a,
          seriesId: o.id,
          name: N(c) ? h.getName(c[0]) : h.getName(c),
          selected: z(u) ? u : O({}, u)
        });
      }
  }));
}
function Gb(e, t, r) {
  e.on("selectchanged", function(i) {
    var n = r.getModel();
    i.isFromClick ? (vi("map", "selectchanged", t, n, i), vi("pie", "selectchanged", t, n, i)) : i.fromAction === "select" ? (vi("map", "selected", t, n, i), vi("pie", "selected", t, n, i)) : i.fromAction === "unselect" && (vi("map", "unselected", t, n, i), vi("pie", "unselected", t, n, i));
  });
}
function _n(e, t, r) {
  for (var i; e && !(t(e) && (i = e, r)); )
    e = e.__hostTarget || e.parent;
  return i;
}
var Wb = Math.round(Math.random() * 9), $b = typeof Object.defineProperty == "function", Ub = function() {
  function e() {
    this._id = "__ec_inner_" + Wb++;
  }
  return e.prototype.get = function(t) {
    return this._guard(t)[this._id];
  }, e.prototype.set = function(t, r) {
    var i = this._guard(t);
    return $b ? Object.defineProperty(i, this._id, {
      value: r,
      enumerable: !1,
      configurable: !0
    }) : i[this._id] = r, this;
  }, e.prototype.delete = function(t) {
    return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1;
  }, e.prototype.has = function(t) {
    return !!this._guard(t)[this._id];
  }, e.prototype._guard = function(t) {
    if (t !== Object(t))
      throw TypeError("Value of WeakMap is not a non-null object.");
    return t;
  }, e;
}();
const Yb = Ub;
var Xb = it.extend({
  type: "triangle",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(e, t) {
    var r = t.cx, i = t.cy, n = t.width / 2, a = t.height / 2;
    e.moveTo(r, i - a), e.lineTo(r + n, i + a), e.lineTo(r - n, i + a), e.closePath();
  }
}), qb = it.extend({
  type: "diamond",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(e, t) {
    var r = t.cx, i = t.cy, n = t.width / 2, a = t.height / 2;
    e.moveTo(r, i - a), e.lineTo(r + n, i), e.lineTo(r, i + a), e.lineTo(r - n, i), e.closePath();
  }
}), Zb = it.extend({
  type: "pin",
  shape: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(e, t) {
    var r = t.x, i = t.y, n = t.width / 5 * 3, a = Math.max(n, t.height), o = n / 2, s = o * o / (a - o), u = i - a + o + s, l = Math.asin(s / o), f = Math.cos(l) * o, h = Math.sin(l), c = Math.cos(l), v = o * 0.6, d = o * 0.7;
    e.moveTo(r - f, u + s), e.arc(r, u, o, Math.PI - l, Math.PI * 2 + l), e.bezierCurveTo(r + f - h * v, u + s + c * v, r, i - d, r, i), e.bezierCurveTo(r, i - d, r - f + h * v, u + s + c * v, r - f, u + s), e.closePath();
  }
}), Kb = it.extend({
  type: "arrow",
  shape: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(e, t) {
    var r = t.height, i = t.width, n = t.x, a = t.y, o = i / 3 * 2;
    e.moveTo(n, a), e.lineTo(n + o, a + r), e.lineTo(n, a + r / 4 * 3), e.lineTo(n - o, a + r), e.lineTo(n, a), e.closePath();
  }
}), Qb = {
  line: Zn,
  rect: Dt,
  roundRect: Dt,
  square: Dt,
  circle: Vl,
  diamond: qb,
  pin: Zb,
  arrow: Kb,
  triangle: Xb
}, Jb = {
  line: function(e, t, r, i, n) {
    n.x1 = e, n.y1 = t + i / 2, n.x2 = e + r, n.y2 = t + i / 2;
  },
  rect: function(e, t, r, i, n) {
    n.x = e, n.y = t, n.width = r, n.height = i;
  },
  roundRect: function(e, t, r, i, n) {
    n.x = e, n.y = t, n.width = r, n.height = i, n.r = Math.min(r, i) / 4;
  },
  square: function(e, t, r, i, n) {
    var a = Math.min(r, i);
    n.x = e, n.y = t, n.width = a, n.height = a;
  },
  circle: function(e, t, r, i, n) {
    n.cx = e + r / 2, n.cy = t + i / 2, n.r = Math.min(r, i) / 2;
  },
  diamond: function(e, t, r, i, n) {
    n.cx = e + r / 2, n.cy = t + i / 2, n.width = r, n.height = i;
  },
  pin: function(e, t, r, i, n) {
    n.x = e + r / 2, n.y = t + i / 2, n.width = r, n.height = i;
  },
  arrow: function(e, t, r, i, n) {
    n.x = e + r / 2, n.y = t + i / 2, n.width = r, n.height = i;
  },
  triangle: function(e, t, r, i, n) {
    n.cx = e + r / 2, n.cy = t + i / 2, n.width = r, n.height = i;
  }
}, il = {};
A(Qb, function(e, t) {
  il[t] = new e();
});
var jb = it.extend({
  type: "symbol",
  shape: {
    symbolType: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function(e, t, r) {
    var i = io(e, t, r), n = this.shape;
    return n && n.symbolType === "pin" && t.position === "inside" && (i.y = r.y + r.height * 0.4), i;
  },
  buildPath: function(e, t, r) {
    var i = t.symbolType;
    if (i !== "none") {
      var n = il[i];
      n || (i = "rect", n = il[i]), Jb[i](t.x, t.y, t.width, t.height, n.shape), n.buildPath(e, n.shape, r);
    }
  }
});
function tx(e, t) {
  if (this.type !== "image") {
    var r = this.style;
    this.__isEmptyBrush ? (r.stroke = e, r.fill = t || "#fff", r.lineWidth = 2) : this.shape.symbolType === "line" ? r.stroke = e : r.fill = e, this.markRedraw();
  }
}
function ff(e, t, r, i, n, a, o) {
  var s = e.indexOf("empty") === 0;
  s && (e = e.substr(5, 1).toLowerCase() + e.substr(6));
  var u;
  return e.indexOf("image://") === 0 ? u = Mp(e.slice(8), new st(t, r, i, n), o ? "center" : "cover") : e.indexOf("path://") === 0 ? u = Wl(e.slice(7), {}, new st(t, r, i, n), o ? "center" : "cover") : u = new jb({
    shape: {
      symbolType: e,
      x: t,
      y: r,
      width: i,
      height: n
    }
  }), u.__isEmptyBrush = s, u.setColor = tx, a && u.setColor(a), u;
}
function ex(e, t) {
  if (e != null)
    return N(e) || (e = [e, e]), [ft(e[0], t[0]) || 0, ft(tt(e[1], e[0]), t[1]) || 0];
}
function Vr(e) {
  return isFinite(e);
}
function rx(e, t, r) {
  var i = t.x == null ? 0 : t.x, n = t.x2 == null ? 1 : t.x2, a = t.y == null ? 0 : t.y, o = t.y2 == null ? 0 : t.y2;
  t.global || (i = i * r.width + r.x, n = n * r.width + r.x, a = a * r.height + r.y, o = o * r.height + r.y), i = Vr(i) ? i : 0, n = Vr(n) ? n : 1, a = Vr(a) ? a : 0, o = Vr(o) ? o : 0;
  var s = e.createLinearGradient(i, a, n, o);
  return s;
}
function ix(e, t, r) {
  var i = r.width, n = r.height, a = Math.min(i, n), o = t.x == null ? 0.5 : t.x, s = t.y == null ? 0.5 : t.y, u = t.r == null ? 0.5 : t.r;
  t.global || (o = o * i + r.x, s = s * n + r.y, u = u * a), o = Vr(o) ? o : 0.5, s = Vr(s) ? s : 0.5, u = u >= 0 && Vr(u) ? u : 0.5;
  var l = e.createRadialGradient(o, s, 0, o, s, u);
  return l;
}
function nl(e, t, r) {
  for (var i = t.type === "radial" ? ix(e, t, r) : rx(e, t, r), n = t.colorStops, a = 0; a < n.length; a++)
    i.addColorStop(n[a].offset, n[a].color);
  return i;
}
function nx(e, t) {
  if (e === t || !e && !t)
    return !1;
  if (!e || !t || e.length !== t.length)
    return !0;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !0;
  return !1;
}
function Sa(e) {
  return parseInt(e, 10);
}
function ba(e, t, r) {
  var i = ["width", "height"][t], n = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
  if (r[i] != null && r[i] !== "auto")
    return parseFloat(r[i]);
  var s = document.defaultView.getComputedStyle(e);
  return (e[n] || Sa(s[i]) || Sa(e.style[i])) - (Sa(s[a]) || 0) - (Sa(s[o]) || 0) | 0;
}
function ax(e, t) {
  return !e || e === "solid" || !(t > 0) ? null : e === "dashed" ? [4 * t, 2 * t] : e === "dotted" ? [t] : dt(e) ? [e] : N(e) ? e : null;
}
function xg(e) {
  var t = e.style, r = t.lineDash && t.lineWidth > 0 && ax(t.lineDash, t.lineWidth), i = t.lineDashOffset;
  if (r) {
    var n = t.strokeNoScale && e.getLineScale ? e.getLineScale() : 1;
    n && n !== 1 && (r = q(r, function(a) {
      return a / n;
    }), i /= n);
  }
  return [r, i];
}
var ox = new Kr(!0);
function yo(e) {
  var t = e.stroke;
  return !(t == null || t === "none" || !(e.lineWidth > 0));
}
function Oc(e) {
  return typeof e == "string" && e !== "none";
}
function mo(e) {
  var t = e.fill;
  return t != null && t !== "none";
}
function Nc(e, t) {
  if (t.fillOpacity != null && t.fillOpacity !== 1) {
    var r = e.globalAlpha;
    e.globalAlpha = t.fillOpacity * t.opacity, e.fill(), e.globalAlpha = r;
  } else
    e.fill();
}
function kc(e, t) {
  if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
    var r = e.globalAlpha;
    e.globalAlpha = t.strokeOpacity * t.opacity, e.stroke(), e.globalAlpha = r;
  } else
    e.stroke();
}
function al(e, t, r) {
  var i = Bd(t.image, t.__image, r);
  if (Io(i)) {
    var n = e.createPattern(i, t.repeat || "repeat");
    if (typeof DOMMatrix == "function" && n && n.setTransform) {
      var a = new DOMMatrix();
      a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * ey), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), n.setTransform(a);
    }
    return n;
  }
}
function sx(e, t, r, i) {
  var n, a = yo(r), o = mo(r), s = r.strokePercent, u = s < 1, l = !t.path;
  (!t.silent || u) && l && t.createPathProxy();
  var f = t.path || ox, h = t.__dirty;
  if (!i) {
    var c = r.fill, v = r.stroke, d = o && !!c.colorStops, _ = a && !!v.colorStops, p = o && !!c.image, g = a && !!v.image, y = void 0, m = void 0, w = void 0, b = void 0, S = void 0;
    (d || _) && (S = t.getBoundingRect()), d && (y = h ? nl(e, c, S) : t.__canvasFillGradient, t.__canvasFillGradient = y), _ && (m = h ? nl(e, v, S) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = m), p && (w = h || !t.__canvasFillPattern ? al(e, c, t) : t.__canvasFillPattern, t.__canvasFillPattern = w), g && (b = h || !t.__canvasStrokePattern ? al(e, v, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = w), d ? e.fillStyle = y : p && (w ? e.fillStyle = w : o = !1), _ ? e.strokeStyle = m : g && (b ? e.strokeStyle = b : a = !1);
  }
  var T = t.getGlobalScale();
  f.setScale(T[0], T[1], t.segmentIgnoreThreshold);
  var x, C;
  e.setLineDash && r.lineDash && (n = xg(t), x = n[0], C = n[1]);
  var E = !0;
  (l || h & yi) && (f.setDPR(e.dpr), u ? f.setContext(null) : (f.setContext(e), E = !1), f.reset(), t.buildPath(f, t.shape, i), f.toStatic(), t.pathUpdated()), E && f.rebuildPath(e, u ? s : 1), x && (e.setLineDash(x), e.lineDashOffset = C), i || (r.strokeFirst ? (a && kc(e, r), o && Nc(e, r)) : (o && Nc(e, r), a && kc(e, r))), x && e.setLineDash([]);
}
function ux(e, t, r) {
  var i = t.__image = Bd(r.image, t.__image, t, t.onload);
  if (!(!i || !Io(i))) {
    var n = r.x || 0, a = r.y || 0, o = t.getWidth(), s = t.getHeight(), u = i.width / i.height;
    if (o == null && s != null ? o = s * u : s == null && o != null ? s = o / u : o == null && s == null && (o = i.width, s = i.height), r.sWidth && r.sHeight) {
      var l = r.sx || 0, f = r.sy || 0;
      e.drawImage(i, l, f, r.sWidth, r.sHeight, n, a, o, s);
    } else if (r.sx && r.sy) {
      var l = r.sx, f = r.sy, h = o - l, c = s - f;
      e.drawImage(i, l, f, h, c, n, a, o, s);
    } else
      e.drawImage(i, n, a, o, s);
  }
}
function lx(e, t, r) {
  var i, n = r.text;
  if (n != null && (n += ""), n) {
    e.font = r.font || qr, e.textAlign = r.textAlign, e.textBaseline = r.textBaseline;
    var a = void 0, o = void 0;
    e.setLineDash && r.lineDash && (i = xg(t), a = i[0], o = i[1]), a && (e.setLineDash(a), e.lineDashOffset = o), r.strokeFirst ? (yo(r) && e.strokeText(n, r.x, r.y), mo(r) && e.fillText(n, r.x, r.y)) : (mo(r) && e.fillText(n, r.x, r.y), yo(r) && e.strokeText(n, r.x, r.y)), a && e.setLineDash([]);
  }
}
var Bc = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], zc = [
  ["lineCap", "butt"],
  ["lineJoin", "miter"],
  ["miterLimit", 10]
];
function Tg(e, t, r, i, n) {
  var a = !1;
  if (!i && (r = r || {}, t === r))
    return !1;
  if (i || t.opacity !== r.opacity) {
    $t(e, n), a = !0;
    var o = Math.max(Math.min(t.opacity, 1), 0);
    e.globalAlpha = isNaN(o) ? $r.opacity : o;
  }
  (i || t.blend !== r.blend) && (a || ($t(e, n), a = !0), e.globalCompositeOperation = t.blend || $r.blend);
  for (var s = 0; s < Bc.length; s++) {
    var u = Bc[s];
    (i || t[u] !== r[u]) && (a || ($t(e, n), a = !0), e[u] = e.dpr * (t[u] || 0));
  }
  return (i || t.shadowColor !== r.shadowColor) && (a || ($t(e, n), a = !0), e.shadowColor = t.shadowColor || $r.shadowColor), a;
}
function Fc(e, t, r, i, n) {
  var a = Gn(t, n.inHover), o = i ? null : r && Gn(r, n.inHover) || {};
  if (a === o)
    return !1;
  var s = Tg(e, a, o, i, n);
  if ((i || a.fill !== o.fill) && (s || ($t(e, n), s = !0), Oc(a.fill) && (e.fillStyle = a.fill)), (i || a.stroke !== o.stroke) && (s || ($t(e, n), s = !0), Oc(a.stroke) && (e.strokeStyle = a.stroke)), (i || a.opacity !== o.opacity) && (s || ($t(e, n), s = !0), e.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
    var u = a.lineWidth, l = u / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
    e.lineWidth !== l && (s || ($t(e, n), s = !0), e.lineWidth = l);
  }
  for (var f = 0; f < zc.length; f++) {
    var h = zc[f], c = h[0];
    (i || a[c] !== o[c]) && (s || ($t(e, n), s = !0), e[c] = a[c] || h[1]);
  }
  return s;
}
function fx(e, t, r, i, n) {
  return Tg(e, Gn(t, n.inHover), r && Gn(r, n.inHover), i, n);
}
function Cg(e, t) {
  var r = t.transform, i = e.dpr || 1;
  r ? e.setTransform(i * r[0], i * r[1], i * r[2], i * r[3], i * r[4], i * r[5]) : e.setTransform(i, 0, 0, i, 0, 0);
}
function hx(e, t, r) {
  for (var i = !1, n = 0; n < e.length; n++) {
    var a = e[n];
    i = i || a.isZeroArea(), Cg(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip();
  }
  r.allClipped = i;
}
function cx(e, t) {
  return e && t ? e[0] !== t[0] || e[1] !== t[1] || e[2] !== t[2] || e[3] !== t[3] || e[4] !== t[4] || e[5] !== t[5] : !(!e && !t);
}
var Vc = 1, Hc = 2, Gc = 3, Wc = 4;
function vx(e) {
  var t = mo(e), r = yo(e);
  return !(e.lineDash || !(+t ^ +r) || t && typeof e.fill != "string" || r && typeof e.stroke != "string" || e.strokePercent < 1 || e.strokeOpacity < 1 || e.fillOpacity < 1);
}
function $t(e, t) {
  t.batchFill && e.fill(), t.batchStroke && e.stroke(), t.batchFill = "", t.batchStroke = "";
}
function Gn(e, t) {
  return t && e.__hoverStyle || e.style;
}
function Dg(e, t) {
  Hr(e, t, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0);
}
function Hr(e, t, r, i) {
  var n = t.transform;
  if (!t.shouldBePainted(r.viewWidth, r.viewHeight, !1, !1)) {
    t.__dirty &= ~Jt, t.__isRendered = !1;
    return;
  }
  var a = t.__clipPaths, o = r.prevElClipPaths, s = !1, u = !1;
  if ((!o || nx(a, o)) && (o && o.length && ($t(e, r), e.restore(), u = s = !0, r.prevElClipPaths = null, r.allClipped = !1, r.prevEl = null), a && a.length && ($t(e, r), e.save(), hx(a, e, r), s = !0), r.prevElClipPaths = a), r.allClipped) {
    t.__isRendered = !1;
    return;
  }
  t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
  var l = r.prevEl;
  l || (u = s = !0);
  var f = t instanceof it && t.autoBatch && vx(t.style);
  s || cx(n, l.transform) ? ($t(e, r), Cg(e, t)) : f || $t(e, r);
  var h = Gn(t, r.inHover);
  t instanceof it ? (r.lastDrawType !== Vc && (u = !0, r.lastDrawType = Vc), Fc(e, t, l, u, r), (!f || !r.batchFill && !r.batchStroke) && e.beginPath(), sx(e, t, h, f), f && (r.batchFill = h.fill || "", r.batchStroke = h.stroke || "")) : t instanceof Fu ? (r.lastDrawType !== Gc && (u = !0, r.lastDrawType = Gc), Fc(e, t, l, u, r), lx(e, t, h)) : t instanceof ki ? (r.lastDrawType !== Hc && (u = !0, r.lastDrawType = Hc), fx(e, t, l, u, r), ux(e, t, h)) : t.getTemporalDisplayables && (r.lastDrawType !== Wc && (u = !0, r.lastDrawType = Wc), dx(e, t, r)), f && i && $t(e, r), t.innerAfterBrush(), t.afterBrush && t.afterBrush(), r.prevEl = t, t.__dirty = 0, t.__isRendered = !0;
}
function dx(e, t, r) {
  var i = t.getDisplayables(), n = t.getTemporalDisplayables();
  e.save();
  var a = {
    prevElClipPaths: null,
    prevEl: null,
    allClipped: !1,
    viewWidth: r.viewWidth,
    viewHeight: r.viewHeight,
    inHover: r.inHover
  }, o, s;
  for (o = t.getCursor(), s = i.length; o < s; o++) {
    var u = i[o];
    u.beforeBrush && u.beforeBrush(), u.innerBeforeBrush(), Hr(e, u, a, o === s - 1), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  for (var l = 0, f = n.length; l < f; l++) {
    var u = n[l];
    u.beforeBrush && u.beforeBrush(), u.innerBeforeBrush(), Hr(e, u, a, l === f - 1), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  t.clearTemporalDisplayables(), t.notClear = !0, e.restore();
}
var Hs = new Yb(), $c = new $n(100), Uc = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
function ol(e, t) {
  if (e === "none")
    return null;
  var r = t.getDevicePixelRatio(), i = t.getZr(), n = i.painter.type === "svg";
  e.dirty && Hs.delete(e);
  var a = Hs.get(e);
  if (a)
    return a;
  var o = ct(e, {
    symbol: "rect",
    symbolSize: 1,
    symbolKeepAspect: !0,
    color: "rgba(0, 0, 0, 0.2)",
    backgroundColor: null,
    dashArrayX: 5,
    dashArrayY: 5,
    rotation: 0,
    maxTileWidth: 512,
    maxTileHeight: 512
  });
  o.backgroundColor === "none" && (o.backgroundColor = null);
  var s = {
    repeat: "repeat"
  };
  return u(s), s.rotation = o.rotation, s.scaleX = s.scaleY = n ? 1 : 1 / r, Hs.set(e, s), e.dirty = !1, s;
  function u(l) {
    for (var f = [r], h = !0, c = 0; c < Uc.length; ++c) {
      var v = o[Uc[c]];
      if (v != null && !N(v) && !z(v) && !dt(v) && typeof v != "boolean") {
        h = !1;
        break;
      }
      f.push(v);
    }
    var d;
    if (h) {
      d = f.join(",") + (n ? "-svg" : "");
      var _ = $c.get(d);
      _ && (n ? l.svgElement = _ : l.image = _);
    }
    var p = Eg(o.dashArrayX), g = px(o.dashArrayY), y = Ag(o.symbol), m = gx(p), w = Mg(g), b = !n && Ri.createCanvas(), S = n && {
      tag: "g",
      attrs: {},
      key: "dcl",
      children: []
    }, T = C(), x;
    b && (b.width = T.width * r, b.height = T.height * r, x = b.getContext("2d")), E(), h && $c.put(d, b || S), l.image = b, l.svgElement = S, l.svgWidth = T.width, l.svgHeight = T.height;
    function C() {
      for (var D = 1, M = 0, P = m.length; M < P; ++M)
        D = ah(D, m[M]);
      for (var L = 1, M = 0, P = y.length; M < P; ++M)
        L = ah(L, y[M].length);
      D *= L;
      var I = w * m.length * y.length;
      if (process.env.NODE_ENV !== "production") {
        var R = function($) {
          console.warn("Calculated decal size is greater than " + $ + " due to decal option settings so " + $ + " is used for the decal size. Please consider changing the decal option to make a smaller decal or set " + $ + " to be larger to avoid incontinuity.");
        };
        D > o.maxTileWidth && R("maxTileWidth"), I > o.maxTileHeight && R("maxTileHeight");
      }
      return {
        width: Math.max(1, Math.min(D, o.maxTileWidth)),
        height: Math.max(1, Math.min(I, o.maxTileHeight))
      };
    }
    function E() {
      x && (x.clearRect(0, 0, b.width, b.height), o.backgroundColor && (x.fillStyle = o.backgroundColor, x.fillRect(0, 0, b.width, b.height)));
      for (var D = 0, M = 0; M < g.length; ++M)
        D += g[M];
      if (D <= 0)
        return;
      for (var P = -w, L = 0, I = 0, R = 0; P < T.height; ) {
        if (L % 2 === 0) {
          for (var $ = I / 2 % y.length, B = 0, W = 0, K = 0; B < T.width * 2; ) {
            for (var rt = 0, M = 0; M < p[R].length; ++M)
              rt += p[R][M];
            if (rt <= 0)
              break;
            if (W % 2 === 0) {
              var U = (1 - o.symbolSize) * 0.5, ut = B + p[R][W] * U, wt = P + g[L] * U, Zt = p[R][W] * o.symbolSize, be = g[L] * o.symbolSize, te = K / 2 % y[$].length;
              Kt(ut, wt, Zt, be, y[$][te]);
            }
            B += p[R][W], ++K, ++W, W === p[R].length && (W = 0);
          }
          ++R, R === p.length && (R = 0);
        }
        P += g[L], ++I, ++L, L === g.length && (L = 0);
      }
      function Kt(bt, pt, V, Y, xe) {
        var St = n ? 1 : r, Ke = ff(xe, bt * St, pt * St, V * St, Y * St, o.color, o.symbolKeepAspect);
        if (n) {
          var Ve = i.painter.renderOneToVNode(Ke);
          Ve && S.children.push(Ve);
        } else
          Dg(x, Ke);
      }
    }
  }
}
function Ag(e) {
  if (!e || e.length === 0)
    return [["rect"]];
  if (z(e))
    return [[e]];
  for (var t = !0, r = 0; r < e.length; ++r)
    if (!z(e[r])) {
      t = !1;
      break;
    }
  if (t)
    return Ag([e]);
  for (var i = [], r = 0; r < e.length; ++r)
    z(e[r]) ? i.push([e[r]]) : i.push(e[r]);
  return i;
}
function Eg(e) {
  if (!e || e.length === 0)
    return [[0, 0]];
  if (dt(e)) {
    var t = Math.ceil(e);
    return [[t, t]];
  }
  for (var r = !0, i = 0; i < e.length; ++i)
    if (!dt(e[i])) {
      r = !1;
      break;
    }
  if (r)
    return Eg([e]);
  for (var n = [], i = 0; i < e.length; ++i)
    if (dt(e[i])) {
      var t = Math.ceil(e[i]);
      n.push([t, t]);
    } else {
      var t = q(e[i], function(s) {
        return Math.ceil(s);
      });
      t.length % 2 === 1 ? n.push(t.concat(t)) : n.push(t);
    }
  return n;
}
function px(e) {
  if (!e || typeof e == "object" && e.length === 0)
    return [0, 0];
  if (dt(e)) {
    var t = Math.ceil(e);
    return [t, t];
  }
  var r = q(e, function(i) {
    return Math.ceil(i);
  });
  return e.length % 2 ? r.concat(r) : r;
}
function gx(e) {
  return q(e, function(t) {
    return Mg(t);
  });
}
function Mg(e) {
  for (var t = 0, r = 0; r < e.length; ++r)
    t += e[r];
  return e.length % 2 === 1 ? t * 2 : t;
}
function _x(e, t) {
  e.eachRawSeries(function(r) {
    if (!e.isSeriesFiltered(r)) {
      var i = r.getData();
      i.hasItemVisual() && i.each(function(o) {
        var s = i.getItemVisual(o, "decal");
        if (s) {
          var u = i.ensureUniqueItemVisual(o, "style");
          u.decal = ol(s, t);
        }
      });
      var n = i.getVisual("decal");
      if (n) {
        var a = i.getVisual("style");
        a.decal = ol(n, t);
      }
    }
  });
}
var yx = new ze();
const ge = yx;
var wo = {};
function mx(e, t) {
  process.env.NODE_ENV !== "production" && wo[e] && Rt("Already has an implementation of " + e + "."), wo[e] = t;
}
function Sx(e) {
  return process.env.NODE_ENV !== "production" && (wo[e] || Rt("Implementation of " + e + " doesn't exists.")), wo[e];
}
var Yc = typeof window < "u", bx = 1, xx = 800, Tx = 900, Cx = 1e3, Dx = 2e3, Ax = 5e3, Pg = 1e3, Ex = 1100, hf = 2e3, Lg = 3e3, Mx = 4e3, Wo = 4500, Px = 4600, Lx = 5e3, Ix = 6e3, Ig = 7e3, Rx = {
  PROCESSOR: {
    FILTER: Cx,
    SERIES_FILTER: xx,
    STATISTIC: Ax
  },
  VISUAL: {
    LAYOUT: Pg,
    PROGRESSIVE_LAYOUT: Ex,
    GLOBAL: hf,
    CHART: Lg,
    POST_CHART_LAYOUT: Px,
    COMPONENT: Mx,
    BRUSH: Lx,
    CHART_ITEM: Wo,
    ARIA: Ix,
    DECAL: Ig
  }
}, Mt = "__flagInMainProcess", Ht = "__pendingUpdate", Gs = "__needsUpdateStatus", Xc = /^[a-zA-Z0-9_]+$/, Ws = "__connectUpdateStatus", qc = 0, Ox = 1, Nx = 2;
function Rg(e) {
  return function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    if (this.isDisposed()) {
      Qt(this.id);
      return;
    }
    return Ng(this, e, t);
  };
}
function Og(e) {
  return function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    return Ng(this, e, t);
  };
}
function Ng(e, t, r) {
  return r[0] = r[0] && r[0].toLowerCase(), ze.prototype[t].apply(e, r);
}
var kg = function(e) {
  k(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t;
}(ze), Bg = kg.prototype;
Bg.on = Og("on");
Bg.off = Og("off");
var di, $s, xa, tr, Us, Ys, Xs, en, rn, Zc, Kc, qs, Qc, Ta, Jc, zg, re, jc, Fg = function(e) {
  k(t, e);
  function t(r, i, n) {
    var a = e.call(this, new kb()) || this;
    a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], n = n || {}, z(i) && (i = Vg[i]), a._dom = r;
    var o = "canvas", s = !1;
    if (process.env.NODE_ENV !== "production") {
      var u = Yc ? window : global;
      o = u.__ECHARTS__DEFAULT__RENDERER__ || o;
      var l = u.__ECHARTS__DEFAULT__USE_DIRTY_RECT__;
      s = l == null ? s : l;
    }
    var f = a._zr = rh(r, {
      renderer: n.renderer || o,
      devicePixelRatio: n.devicePixelRatio,
      width: n.width,
      height: n.height,
      ssr: n.ssr,
      useDirtyRect: n.useDirtyRect == null ? s : n.useDirtyRect
    });
    a._ssr = n.ssr, a._throttledZrFlush = Go(at(f.flush, f), 17), i = j(i), i && Qp(i, !0), a._theme = i, a._locale = Lw(n.locale || Bp), a._coordSysMgr = new rf();
    var h = a._api = Jc(a);
    function c(v, d) {
      return v.__prio - d.__prio;
    }
    return ka(bo, c), ka(sl, c), a._scheduler = new Sg(a, h, sl, bo), a._messageCenter = new kg(), a._initEvents(), a.resize = at(a.resize, a), f.animation.on("frame", a._onframe, a), Zc(f, a), Kc(f, a), yu(a), a;
  }
  return t.prototype._onframe = function() {
    if (!this._disposed) {
      jc(this);
      var r = this._scheduler;
      if (this[Ht]) {
        var i = this[Ht].silent;
        this[Mt] = !0;
        try {
          di(this), tr.update.call(this, null, this[Ht].updateParams);
        } catch (u) {
          throw this[Mt] = !1, this[Ht] = null, u;
        }
        this._zr.flush(), this[Mt] = !1, this[Ht] = null, en.call(this, i), rn.call(this, i);
      } else if (r.unfinished) {
        var n = bx, a = this._model, o = this._api;
        r.unfinished = !1;
        do {
          var s = +new Date();
          r.performSeriesTasks(a), r.performDataProcessorTasks(a), Ys(this, a), r.performVisualTasks(a), Ta(this, this._model, o, "remain", {}), n -= +new Date() - s;
        } while (n > 0 && r.unfinished);
        r.unfinished || this._zr.flush();
      }
    }
  }, t.prototype.getDom = function() {
    return this._dom;
  }, t.prototype.getId = function() {
    return this.id;
  }, t.prototype.getZr = function() {
    return this._zr;
  }, t.prototype.isSSR = function() {
    return this._ssr;
  }, t.prototype.setOption = function(r, i, n) {
    if (this[Mt]) {
      process.env.NODE_ENV !== "production" && Rt("`setOption` should not be called during main process.");
      return;
    }
    if (this._disposed) {
      Qt(this.id);
      return;
    }
    var a, o, s;
    if (F(i) && (n = i.lazyUpdate, a = i.silent, o = i.replaceMerge, s = i.transition, i = i.notMerge), this[Mt] = !0, !this._model || i) {
      var u = new mS(this._api), l = this._theme, f = this._model = new qp();
      f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, l, this._locale, u);
    }
    this._model.setOption(r, {
      replaceMerge: o
    }, ul);
    var h = {
      seriesTransition: s,
      optionChanged: !0
    };
    if (n)
      this[Ht] = {
        silent: a,
        updateParams: h
      }, this[Mt] = !1, this.getZr().wakeUp();
    else {
      try {
        di(this), tr.update.call(this, null, h);
      } catch (c) {
        throw this[Ht] = null, this[Mt] = !1, c;
      }
      this._ssr || this._zr.flush(), this[Ht] = null, this[Mt] = !1, en.call(this, a), rn.call(this, a);
    }
  }, t.prototype.setTheme = function() {
    ke("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
  }, t.prototype.getModel = function() {
    return this._model;
  }, t.prototype.getOption = function() {
    return this._model && this._model.getOption();
  }, t.prototype.getWidth = function() {
    return this._zr.getWidth();
  }, t.prototype.getHeight = function() {
    return this._zr.getHeight();
  }, t.prototype.getDevicePixelRatio = function() {
    return this._zr.painter.dpr || Yc && window.devicePixelRatio || 1;
  }, t.prototype.getRenderedCanvas = function(r) {
    return process.env.NODE_ENV !== "production" && mt("getRenderedCanvas", "renderToCanvas"), this.renderToCanvas(r);
  }, t.prototype.renderToCanvas = function(r) {
    r = r || {};
    var i = this._zr.painter;
    if (process.env.NODE_ENV !== "production" && i.type !== "canvas")
      throw new Error("renderToCanvas can only be used in the canvas renderer.");
    return i.getRenderedCanvas({
      backgroundColor: r.backgroundColor || this._model.get("backgroundColor"),
      pixelRatio: r.pixelRatio || this.getDevicePixelRatio()
    });
  }, t.prototype.renderToSVGString = function(r) {
    r = r || {};
    var i = this._zr.painter;
    if (process.env.NODE_ENV !== "production" && i.type !== "svg")
      throw new Error("renderToSVGString can only be used in the svg renderer.");
    return i.renderToString({
      useViewBox: r.useViewBox
    });
  }, t.prototype.getSvgDataURL = function() {
    if (!!Z.svgSupported) {
      var r = this._zr, i = r.storage.getDisplayList();
      return A(i, function(n) {
        n.stopAnimation(null, !0);
      }), r.painter.toDataURL();
    }
  }, t.prototype.getDataURL = function(r) {
    if (this._disposed) {
      Qt(this.id);
      return;
    }
    r = r || {};
    var i = r.excludeComponents, n = this._model, a = [], o = this;
    A(i, function(u) {
      n.eachComponent({
        mainType: u
      }, function(l) {
        var f = o._componentsMap[l.__viewId];
        f.group.ignore || (a.push(f), f.group.ignore = !0);
      });
    });
    var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(r).toDataURL("image/" + (r && r.type || "png"));
    return A(a, function(u) {
      u.group.ignore = !1;
    }), s;
  }, t.prototype.getConnectedDataURL = function(r) {
    if (this._disposed) {
      Qt(this.id);
      return;
    }
    var i = r.type === "svg", n = this.group, a = Math.min, o = Math.max, s = 1 / 0;
    if (tv[n]) {
      var u = s, l = s, f = -s, h = -s, c = [], v = r && r.pixelRatio || this.getDevicePixelRatio();
      A(Mn, function(m, w) {
        if (m.group === n) {
          var b = i ? m.getZr().painter.getSvgDom().innerHTML : m.renderToCanvas(j(r)), S = m.getDom().getBoundingClientRect();
          u = a(S.left, u), l = a(S.top, l), f = o(S.right, f), h = o(S.bottom, h), c.push({
            dom: b,
            left: S.left,
            top: S.top
          });
        }
      }), u *= v, l *= v, f *= v, h *= v;
      var d = f - u, _ = h - l, p = Ri.createCanvas(), g = rh(p, {
        renderer: i ? "svg" : "canvas"
      });
      if (g.resize({
        width: d,
        height: _
      }), i) {
        var y = "";
        return A(c, function(m) {
          var w = m.left - u, b = m.top - l;
          y += '<g transform="translate(' + w + "," + b + ')">' + m.dom + "</g>";
        }), g.painter.getSvgRoot().innerHTML = y, r.connectedBackgroundColor && g.painter.setBackgroundColor(r.connectedBackgroundColor), g.refreshImmediately(), g.painter.toDataURL();
      } else
        return r.connectedBackgroundColor && g.add(new Dt({
          shape: {
            x: 0,
            y: 0,
            width: d,
            height: _
          },
          style: {
            fill: r.connectedBackgroundColor
          }
        })), A(c, function(m) {
          var w = new ki({
            style: {
              x: m.left * v - u,
              y: m.top * v - l,
              image: m.dom
            }
          });
          g.add(w);
        }), g.refreshImmediately(), p.toDataURL("image/" + (r && r.type || "png"));
    } else
      return this.getDataURL(r);
  }, t.prototype.convertToPixel = function(r, i) {
    return Us(this, "convertToPixel", r, i);
  }, t.prototype.convertFromPixel = function(r, i) {
    return Us(this, "convertFromPixel", r, i);
  }, t.prototype.containPixel = function(r, i) {
    if (this._disposed) {
      Qt(this.id);
      return;
    }
    var n = this._model, a, o = ds(n, r);
    return A(o, function(s, u) {
      u.indexOf("Models") >= 0 && A(s, function(l) {
        var f = l.coordinateSystem;
        if (f && f.containPoint)
          a = a || !!f.containPoint(i);
        else if (u === "seriesModels") {
          var h = this._chartsMap[l.__viewId];
          h && h.containPoint ? a = a || h.containPoint(i, l) : process.env.NODE_ENV !== "production" && console.warn(u + ": " + (h ? "The found component do not support containPoint." : "No view mapping to the found component."));
        } else
          process.env.NODE_ENV !== "production" && console.warn(u + ": containPoint is not supported");
      }, this);
    }, this), !!a;
  }, t.prototype.getVisual = function(r, i) {
    var n = this._model, a = ds(n, r, {
      defaultMainType: "series"
    }), o = a.seriesModel;
    process.env.NODE_ENV !== "production" && (o || console.warn("There is no specified seires model"));
    var s = o.getData(), u = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
    return u != null ? Fb(s, u, i) : Vb(s, i);
  }, t.prototype.getViewOfComponentModel = function(r) {
    return this._componentsMap[r.__viewId];
  }, t.prototype.getViewOfSeriesModel = function(r) {
    return this._chartsMap[r.__viewId];
  }, t.prototype._initEvents = function() {
    var r = this;
    A(kx, function(i) {
      var n = function(a) {
        var o = r.getModel(), s = a.target, u, l = i === "globalout";
        if (l ? u = {} : s && _n(s, function(d) {
          var _ = ot(d);
          if (_ && _.dataIndex != null) {
            var p = _.dataModel || o.getSeriesByIndex(_.seriesIndex);
            return u = p && p.getDataParams(_.dataIndex, _.dataType) || {}, !0;
          } else if (_.eventData)
            return u = O({}, _.eventData), !0;
        }, !0), u) {
          var f = u.componentType, h = u.componentIndex;
          (f === "markLine" || f === "markPoint" || f === "markArea") && (f = "series", h = u.seriesIndex);
          var c = f && h != null && o.getComponent(f, h), v = c && r[c.mainType === "series" ? "_chartsMap" : "_componentsMap"][c.__viewId];
          process.env.NODE_ENV !== "production" && !l && !(c && v) && console.warn("model or view can not be found by params"), u.event = a, u.type = i, r._$eventProcessor.eventInfo = {
            targetEl: s,
            packedEvent: u,
            model: c,
            view: v
          }, r.trigger(i, u);
        }
      };
      n.zrEventfulCallAtLast = !0, r._zr.on(i, n, r);
    }), A(En, function(i, n) {
      r._messageCenter.on(n, function(a) {
        this.trigger(n, a);
      }, r);
    }), A(["selectchanged"], function(i) {
      r._messageCenter.on(i, function(n) {
        this.trigger(i, n);
      }, r);
    }), Gb(this._messageCenter, this, this._api);
  }, t.prototype.isDisposed = function() {
    return this._disposed;
  }, t.prototype.clear = function() {
    if (this._disposed) {
      Qt(this.id);
      return;
    }
    this.setOption({
      series: []
    }, !0);
  }, t.prototype.dispose = function() {
    if (this._disposed) {
      Qt(this.id);
      return;
    }
    this._disposed = !0;
    var r = this.getDom();
    r && Od(this.getDom(), vf, "");
    var i = this, n = i._api, a = i._model;
    A(i._componentsViews, function(o) {
      o.dispose(a, n);
    }), A(i._chartsViews, function(o) {
      o.dispose(a, n);
    }), i._zr.dispose(), i._dom = i._model = i._chartsMap = i._componentsMap = i._chartsViews = i._componentsViews = i._scheduler = i._api = i._zr = i._throttledZrFlush = i._theme = i._coordSysMgr = i._messageCenter = null, delete Mn[i.id];
  }, t.prototype.resize = function(r) {
    if (this[Mt]) {
      process.env.NODE_ENV !== "production" && Rt("`resize` should not be called during main process.");
      return;
    }
    if (this._disposed) {
      Qt(this.id);
      return;
    }
    this._zr.resize(r);
    var i = this._model;
    if (this._loadingFX && this._loadingFX.resize(), !!i) {
      var n = i.resetOption("media"), a = r && r.silent;
      this[Ht] && (a == null && (a = this[Ht].silent), n = !0, this[Ht] = null), this[Mt] = !0;
      try {
        n && di(this), tr.update.call(this, {
          type: "resize",
          animation: O({
            duration: 0
          }, r && r.animation)
        });
      } catch (o) {
        throw this[Mt] = !1, o;
      }
      this[Mt] = !1, en.call(this, a), rn.call(this, a);
    }
  }, t.prototype.showLoading = function(r, i) {
    if (this._disposed) {
      Qt(this.id);
      return;
    }
    if (F(r) && (i = r, r = ""), r = r || "default", this.hideLoading(), !ll[r]) {
      process.env.NODE_ENV !== "production" && console.warn("Loading effects " + r + " not exists.");
      return;
    }
    var n = ll[r](this._api, i), a = this._zr;
    this._loadingFX = n, a.add(n);
  }, t.prototype.hideLoading = function() {
    if (this._disposed) {
      Qt(this.id);
      return;
    }
    this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
  }, t.prototype.makeActionFromEvent = function(r) {
    var i = O({}, r);
    return i.type = En[r.type], i;
  }, t.prototype.dispatchAction = function(r, i) {
    if (this._disposed) {
      Qt(this.id);
      return;
    }
    if (F(i) || (i = {
      silent: !!i
    }), !!So[r.type] && !!this._model) {
      if (this[Mt]) {
        this._pendingActions.push(r);
        return;
      }
      var n = i.silent;
      Xs.call(this, r, n);
      var a = i.flush;
      a ? this._zr.flush() : a !== !1 && Z.browser.weChat && this._throttledZrFlush(), en.call(this, n), rn.call(this, n);
    }
  }, t.prototype.updateLabelLayout = function() {
    ge.trigger("series:layoutlabels", this._model, this._api, {
      updatedSeries: []
    });
  }, t.prototype.appendData = function(r) {
    if (this._disposed) {
      Qt(this.id);
      return;
    }
    var i = r.seriesIndex, n = this.getModel(), a = n.getSeriesByIndex(i);
    process.env.NODE_ENV !== "production" && X(r.data && a), a.appendData(r), this._scheduler.unfinished = !0, this.getZr().wakeUp();
  }, t.internalField = function() {
    di = function(h) {
      var c = h._scheduler;
      c.restorePipelines(h._model), c.prepareStageTasks(), $s(h, !0), $s(h, !1), c.plan();
    }, $s = function(h, c) {
      for (var v = h._model, d = h._scheduler, _ = c ? h._componentsViews : h._chartsViews, p = c ? h._componentsMap : h._chartsMap, g = h._zr, y = h._api, m = 0; m < _.length; m++)
        _[m].__alive = !1;
      c ? v.eachComponent(function(S, T) {
        S !== "series" && w(T);
      }) : v.eachSeries(w);
      function w(S) {
        var T = S.__requireNewView;
        S.__requireNewView = !1;
        var x = "_ec_" + S.id + "_" + S.type, C = !T && p[x];
        if (!C) {
          var E = Ie(S.type), D = c ? cr.getClass(E.main, E.sub) : Yr.getClass(E.sub);
          process.env.NODE_ENV !== "production" && X(D, E.sub + " does not exist."), C = new D(), C.init(v, y), p[x] = C, _.push(C), g.add(C.group);
        }
        S.__viewId = C.__id = x, C.__alive = !0, C.__model = S, C.group.__ecComponentInfo = {
          mainType: S.mainType,
          index: S.componentIndex
        }, !c && d.prepareView(C, S, v, y);
      }
      for (var m = 0; m < _.length; ) {
        var b = _[m];
        b.__alive ? m++ : (!c && b.renderTask.dispose(), g.remove(b.group), b.dispose(v, y), _.splice(m, 1), p[b.__id] === b && delete p[b.__id], b.__id = b.group.__ecComponentInfo = null);
      }
    }, xa = function(h, c, v, d, _) {
      var p = h._model;
      if (p.setUpdatePayload(v), !d) {
        A([].concat(h._componentsViews).concat(h._chartsViews), b);
        return;
      }
      var g = {};
      g[d + "Id"] = v[d + "Id"], g[d + "Index"] = v[d + "Index"], g[d + "Name"] = v[d + "Name"];
      var y = {
        mainType: d,
        query: g
      };
      _ && (y.subType = _);
      var m = v.excludeSeriesId, w;
      m != null && (w = Q(), A(zt(m), function(S) {
        var T = Oe(S, null);
        T != null && w.set(T, !0);
      })), p && p.eachComponent(y, function(S) {
        var T = w && w.get(S.id) !== null;
        if (!T)
          if (Nh(v))
            if (S instanceof Qr)
              v.type === Ur && !v.notBlur && !S.get(["emphasis", "disabled"]) && n1(S, v, h._api);
            else {
              var x = Fl(S.mainType, S.componentIndex, v.name, h._api), C = x.focusSelf, E = x.dispatchers;
              v.type === Ur && C && !v.notBlur && Wu(S.mainType, S.componentIndex, h._api), E && A(E, function(D) {
                v.type === Ur ? Vu(D) : Hu(D);
              });
            }
          else
            Uu(v) && S instanceof Qr && (s1(S, v, h._api), Rh(S), re(h));
      }, h), p && p.eachComponent(y, function(S) {
        var T = w && w.get(S.id) !== null;
        T || b(h[d === "series" ? "_chartsMap" : "_componentsMap"][S.__viewId]);
      }, h);
      function b(S) {
        S && S.__alive && S[c] && S[c](S.__model, p, h._api, v);
      }
    }, tr = {
      prepareAndUpdate: function(h) {
        di(this), tr.update.call(this, h, {
          optionChanged: h.newOption != null
        });
      },
      update: function(h, c) {
        var v = this._model, d = this._api, _ = this._zr, p = this._coordSysMgr, g = this._scheduler;
        if (!!v) {
          v.setUpdatePayload(h), g.restoreData(v, h), g.performSeriesTasks(v), p.create(v, d), g.performDataProcessorTasks(v, h), Ys(this, v), p.update(v, d), r(v), g.performVisualTasks(v, h), qs(this, v, d, h, c);
          var y = v.get("backgroundColor") || "transparent", m = v.get("darkMode");
          _.setBackgroundColor(y), m != null && m !== "auto" && _.setDarkMode(m), ge.trigger("afterupdate", v, d);
        }
      },
      updateTransform: function(h) {
        var c = this, v = this._model, d = this._api;
        if (!!v) {
          v.setUpdatePayload(h);
          var _ = [];
          v.eachComponent(function(g, y) {
            if (g !== "series") {
              var m = c.getViewOfComponentModel(y);
              if (m && m.__alive)
                if (m.updateTransform) {
                  var w = m.updateTransform(y, v, d, h);
                  w && w.update && _.push(m);
                } else
                  _.push(m);
            }
          });
          var p = Q();
          v.eachSeries(function(g) {
            var y = c._chartsMap[g.__viewId];
            if (y.updateTransform) {
              var m = y.updateTransform(g, v, d, h);
              m && m.update && p.set(g.uid, 1);
            } else
              p.set(g.uid, 1);
          }), r(v), this._scheduler.performVisualTasks(v, h, {
            setDirty: !0,
            dirtyMap: p
          }), Ta(this, v, d, h, {}, p), ge.trigger("afterupdate", v, d);
        }
      },
      updateView: function(h) {
        var c = this._model;
        !c || (c.setUpdatePayload(h), Yr.markUpdateMethod(h, "updateView"), r(c), this._scheduler.performVisualTasks(c, h, {
          setDirty: !0
        }), qs(this, c, this._api, h, {}), ge.trigger("afterupdate", c, this._api));
      },
      updateVisual: function(h) {
        var c = this, v = this._model;
        !v || (v.setUpdatePayload(h), v.eachSeries(function(d) {
          d.getData().clearAllVisual();
        }), Yr.markUpdateMethod(h, "updateVisual"), r(v), this._scheduler.performVisualTasks(v, h, {
          visualType: "visual",
          setDirty: !0
        }), v.eachComponent(function(d, _) {
          if (d !== "series") {
            var p = c.getViewOfComponentModel(_);
            p && p.__alive && p.updateVisual(_, v, c._api, h);
          }
        }), v.eachSeries(function(d) {
          var _ = c._chartsMap[d.__viewId];
          _.updateVisual(d, v, c._api, h);
        }), ge.trigger("afterupdate", v, this._api));
      },
      updateLayout: function(h) {
        tr.update.call(this, h);
      }
    }, Us = function(h, c, v, d) {
      if (h._disposed) {
        Qt(h.id);
        return;
      }
      for (var _ = h._model, p = h._coordSysMgr.getCoordinateSystems(), g, y = ds(_, v), m = 0; m < p.length; m++) {
        var w = p[m];
        if (w[c] && (g = w[c](_, y, d)) != null)
          return g;
      }
      process.env.NODE_ENV !== "production" && console.warn("No coordinate system that supports " + c + " found by the given finder.");
    }, Ys = function(h, c) {
      var v = h._chartsMap, d = h._scheduler;
      c.eachSeries(function(_) {
        d.updateStreamModes(_, v[_.__viewId]);
      });
    }, Xs = function(h, c) {
      var v = this, d = this.getModel(), _ = h.type, p = h.escapeConnect, g = So[_], y = g.actionInfo, m = (y.update || "update").split(":"), w = m.pop(), b = m[0] != null && Ie(m[0]);
      this[Mt] = !0;
      var S = [h], T = !1;
      h.batch && (T = !0, S = q(h.batch, function(L) {
        return L = ct(O({}, L), h), L.batch = null, L;
      }));
      var x = [], C, E = Uu(h), D = Nh(h);
      if (D && np(this._api), A(S, function(L) {
        if (C = g.action(L, v._model, v._api), C = C || O({}, L), C.type = y.event || C.type, x.push(C), D) {
          var I = Il(h), R = I.queryOptionMap, $ = I.mainTypeSpecified, B = $ ? R.keys()[0] : "series";
          xa(v, w, L, B), re(v);
        } else
          E ? (xa(v, w, L, "series"), re(v)) : b && xa(v, w, L, b.main, b.sub);
      }), w !== "none" && !D && !E && !b)
        try {
          this[Ht] ? (di(this), tr.update.call(this, h), this[Ht] = null) : tr[w].call(this, h);
        } catch (L) {
          throw this[Mt] = !1, L;
        }
      if (T ? C = {
        type: y.event || _,
        escapeConnect: p,
        batch: x
      } : C = x[0], this[Mt] = !1, !c) {
        var M = this._messageCenter;
        if (M.trigger(C.type, C), E) {
          var P = {
            type: "selectchanged",
            escapeConnect: p,
            selected: u1(d),
            isFromClick: h.isFromClick || !1,
            fromAction: h.type,
            fromActionPayload: h
          };
          M.trigger(P.type, P);
        }
      }
    }, en = function(h) {
      for (var c = this._pendingActions; c.length; ) {
        var v = c.shift();
        Xs.call(this, v, h);
      }
    }, rn = function(h) {
      !h && this.trigger("updated");
    }, Zc = function(h, c) {
      h.on("rendered", function(v) {
        c.trigger("rendered", v), h.animation.isFinished() && !c[Ht] && !c._scheduler.unfinished && !c._pendingActions.length && c.trigger("finished");
      });
    }, Kc = function(h, c) {
      h.on("mouseover", function(v) {
        var d = v.target, _ = _n(d, Pi);
        _ && (a1(_, v, c._api), re(c));
      }).on("mouseout", function(v) {
        var d = v.target, _ = _n(d, Pi);
        _ && (o1(_, v, c._api), re(c));
      }).on("click", function(v) {
        var d = v.target, _ = _n(d, function(y) {
          return ot(y).dataIndex != null;
        }, !0);
        if (_) {
          var p = _.selected ? "unselect" : "select", g = ot(_);
          c._api.dispatchAction({
            type: p,
            dataType: g.dataType,
            dataIndexInside: g.dataIndex,
            seriesIndex: g.seriesIndex,
            isFromClick: !0
          });
        }
      });
    };
    function r(h) {
      h.clearColorPalette(), h.eachSeries(function(c) {
        c.clearColorPalette();
      });
    }
    function i(h) {
      var c = [], v = [], d = !1;
      if (h.eachComponent(function(y, m) {
        var w = m.get("zlevel") || 0, b = m.get("z") || 0, S = m.getZLevelKey();
        d = d || !!S, (y === "series" ? v : c).push({
          zlevel: w,
          z: b,
          idx: m.componentIndex,
          type: y,
          key: S
        });
      }), d) {
        var _ = c.concat(v), p, g;
        ka(_, function(y, m) {
          return y.zlevel === m.zlevel ? y.z - m.z : y.zlevel - m.zlevel;
        }), A(_, function(y) {
          var m = h.getComponent(y.type, y.idx), w = y.zlevel, b = y.key;
          p != null && (w = Math.max(p, w)), b ? (w === p && b !== g && w++, g = b) : g && (w === p && w++, g = ""), p = w, m.setZLevel(w);
        });
      }
    }
    qs = function(h, c, v, d, _) {
      i(c), Qc(h, c, v, d, _), A(h._chartsViews, function(p) {
        p.__alive = !1;
      }), Ta(h, c, v, d, _), A(h._chartsViews, function(p) {
        p.__alive || p.remove(c, v);
      });
    }, Qc = function(h, c, v, d, _, p) {
      A(p || h._componentsViews, function(g) {
        var y = g.__model;
        l(y, g), g.render(y, c, v, d), s(y, g), f(y, g);
      });
    }, Ta = function(h, c, v, d, _, p) {
      var g = h._scheduler;
      _ = O(_ || {}, {
        updatedSeries: c.getSeries()
      }), ge.trigger("series:beforeupdate", c, v, _);
      var y = !1;
      c.eachSeries(function(m) {
        var w = h._chartsMap[m.__viewId];
        w.__alive = !0;
        var b = w.renderTask;
        g.updatePayload(b, d), l(m, w), p && p.get(m.uid) && b.dirty(), b.perform(g.getPerformArgs(b)) && (y = !0), w.group.silent = !!m.get("silent"), o(m, w), Rh(m);
      }), g.unfinished = y || g.unfinished, ge.trigger("series:layoutlabels", c, v, _), ge.trigger("series:transition", c, v, _), c.eachSeries(function(m) {
        var w = h._chartsMap[m.__viewId];
        s(m, w), f(m, w);
      }), a(h, c), ge.trigger("series:afterupdate", c, v, _);
    }, re = function(h) {
      h[Gs] = !0, h.getZr().wakeUp();
    }, jc = function(h) {
      !h[Gs] || (h.getZr().storage.traverse(function(c) {
        Cn(c) || n(c);
      }), h[Gs] = !1);
    };
    function n(h) {
      for (var c = [], v = h.currentStates, d = 0; d < v.length; d++) {
        var _ = v[d];
        _ === "emphasis" || _ === "blur" || _ === "select" || c.push(_);
      }
      h.selected && h.states.select && c.push("select"), h.hoverState === Bl && h.states.emphasis ? c.push("emphasis") : h.hoverState === kl && h.states.blur && c.push("blur"), h.useStates(c);
    }
    function a(h, c) {
      var v = h._zr, d = v.storage, _ = 0;
      d.traverse(function(p) {
        p.isGroup || _++;
      }), _ > c.get("hoverLayerThreshold") && !Z.node && !Z.worker && c.eachSeries(function(p) {
        if (!p.preventUsingHoverLayer) {
          var g = h._chartsMap[p.__viewId];
          g.__alive && g.eachRendered(function(y) {
            y.states.emphasis && (y.states.emphasis.hoverLayer = !0);
          });
        }
      });
    }
    function o(h, c) {
      var v = h.get("blendMode") || null;
      c.eachRendered(function(d) {
        d.isGroup || (d.style.blend = v);
      });
    }
    function s(h, c) {
      if (!h.preventAutoZ) {
        var v = h.get("z") || 0, d = h.get("zlevel") || 0;
        c.eachRendered(function(_) {
          return u(_, v, d, -1 / 0), !0;
        });
      }
    }
    function u(h, c, v, d) {
      var _ = h.getTextContent(), p = h.getTextGuideLine(), g = h.isGroup;
      if (g)
        for (var y = h.childrenRef(), m = 0; m < y.length; m++)
          d = Math.max(u(y[m], c, v, d), d);
      else
        h.z = c, h.zlevel = v, d = Math.max(h.z2, d);
      if (_ && (_.z = c, _.zlevel = v, isFinite(d) && (_.z2 = d + 2)), p) {
        var w = h.textGuideLineConfig;
        p.z = c, p.zlevel = v, isFinite(d) && (p.z2 = d + (w && w.showAbove ? 1 : -1));
      }
      return d;
    }
    function l(h, c) {
      c.eachRendered(function(v) {
        if (!Cn(v)) {
          var d = v.getTextContent(), _ = v.getTextGuideLine();
          v.stateTransition && (v.stateTransition = null), d && d.stateTransition && (d.stateTransition = null), _ && _.stateTransition && (_.stateTransition = null), v.hasState() ? (v.prevStates = v.currentStates, v.clearStates()) : v.prevStates && (v.prevStates = null);
        }
      });
    }
    function f(h, c) {
      var v = h.getModel("stateAnimation"), d = h.isAnimationEnabled(), _ = v.get("duration"), p = _ > 0 ? {
        duration: _,
        delay: v.get("delay"),
        easing: v.get("easing")
      } : null;
      c.eachRendered(function(g) {
        if (g.states && g.states.emphasis) {
          if (Cn(g))
            return;
          if (g instanceof it && v1(g), g.__dirty) {
            var y = g.prevStates;
            y && g.useStates(y);
          }
          if (d) {
            g.stateTransition = p;
            var m = g.getTextContent(), w = g.getTextGuideLine();
            m && (m.stateTransition = p), w && (w.stateTransition = p);
          }
          g.__dirty && n(g);
        }
      });
    }
    Jc = function(h) {
      return new (function(c) {
        k(v, c);
        function v() {
          return c !== null && c.apply(this, arguments) || this;
        }
        return v.prototype.getCoordinateSystems = function() {
          return h._coordSysMgr.getCoordinateSystems();
        }, v.prototype.getComponentByElement = function(d) {
          for (; d; ) {
            var _ = d.__ecComponentInfo;
            if (_ != null)
              return h._model.getComponent(_.mainType, _.index);
            d = d.parent;
          }
        }, v.prototype.enterEmphasis = function(d, _) {
          Vu(d, _), re(h);
        }, v.prototype.leaveEmphasis = function(d, _) {
          Hu(d, _), re(h);
        }, v.prototype.enterBlur = function(d) {
          i1(d), re(h);
        }, v.prototype.leaveBlur = function(d) {
          tp(d), re(h);
        }, v.prototype.enterSelect = function(d) {
          ep(d), re(h);
        }, v.prototype.leaveSelect = function(d) {
          rp(d), re(h);
        }, v.prototype.getModel = function() {
          return h.getModel();
        }, v.prototype.getViewOfComponentModel = function(d) {
          return h.getViewOfComponentModel(d);
        }, v.prototype.getViewOfSeriesModel = function(d) {
          return h.getViewOfSeriesModel(d);
        }, v;
      }(Zp))(h);
    }, zg = function(h) {
      function c(v, d) {
        for (var _ = 0; _ < v.length; _++) {
          var p = v[_];
          p[Ws] = d;
        }
      }
      A(En, function(v, d) {
        h._messageCenter.on(d, function(_) {
          if (tv[h.group] && h[Ws] !== qc) {
            if (_ && _.escapeConnect)
              return;
            var p = h.makeActionFromEvent(_), g = [];
            A(Mn, function(y) {
              y !== h && y.group === h.group && g.push(y);
            }), c(g, qc), A(g, function(y) {
              y[Ws] !== Ox && y.dispatchAction(p);
            }), c(g, Nx);
          }
        });
      });
    };
  }(), t;
}(ze), cf = Fg.prototype;
cf.on = Rg("on");
cf.off = Rg("off");
cf.one = function(e, t, r) {
  var i = this;
  ke("ECharts#one is deprecated.");
  function n() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    t && t.apply && t.apply(this, a), i.off(e, n);
  }
  this.on.call(this, e, n, r);
};
var kx = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
function Qt(e) {
  process.env.NODE_ENV !== "production" && console.warn("Instance " + e + " has been disposed");
}
var So = {}, En = {}, sl = [], ul = [], bo = [], Vg = {}, ll = {}, Mn = {}, tv = {}, Bx = +new Date() - 0, vf = "_echarts_instance_";
function zx(e, t, r) {
  var i = !(r && r.ssr);
  if (i) {
    if (process.env.NODE_ENV !== "production" && !e)
      throw new Error("Initialize failed: invalid dom.");
    var n = Fx(e);
    if (n)
      return process.env.NODE_ENV !== "production" && console.warn("There is a chart instance already initialized on the dom."), n;
    process.env.NODE_ENV !== "production" && Pn(e) && e.nodeName.toUpperCase() !== "CANVAS" && (!e.clientWidth && (!r || r.width == null) || !e.clientHeight && (!r || r.height == null)) && console.warn("Can't get DOM width or height. Please check dom.clientWidth and dom.clientHeight. They should not be 0.For example, you may need to call this in the callback of window.onload.");
  }
  var a = new Fg(e, t, r);
  return a.id = "ec_" + Bx++, Mn[a.id] = a, i && Od(e, vf, a.id), zg(a), ge.trigger("afterinit", a), a;
}
function Fx(e) {
  return Mn[$m(e, vf)];
}
function Hg(e, t) {
  Vg[e] = t;
}
function Gg(e) {
  nt(ul, e) < 0 && ul.push(e);
}
function Wg(e, t) {
  pf(sl, e, t, Dx);
}
function Vx(e) {
  df("afterinit", e);
}
function Hx(e) {
  df("afterupdate", e);
}
function df(e, t) {
  ge.on(e, t);
}
function Fi(e, t, r) {
  J(t) && (r = t, t = "");
  var i = F(e) ? e.type : [e, e = {
    event: t
  }][0];
  e.event = (e.event || i).toLowerCase(), t = e.event, !En[t] && (X(Xc.test(i) && Xc.test(t)), So[i] || (So[i] = {
    action: r,
    actionInfo: e
  }), En[t] = i);
}
function Gx(e, t) {
  rf.register(e, t);
}
function Wx(e, t) {
  pf(bo, e, t, Pg, "layout");
}
function ti(e, t) {
  pf(bo, e, t, Lg, "visual");
}
var ev = [];
function pf(e, t, r, i, n) {
  if ((J(t) || F(t)) && (r = t, t = i), process.env.NODE_ENV !== "production") {
    if (isNaN(t) || t == null)
      throw new Error("Illegal priority");
    A(e, function(o) {
      X(o.__raw !== r);
    });
  }
  if (!(nt(ev, r) >= 0)) {
    ev.push(r);
    var a = Sg.wrapStageHandler(r, n);
    a.__prio = t, a.__raw = r, e.push(a);
  }
}
function $g(e, t) {
  ll[e] = t;
}
function $x(e, t, r) {
  var i = Sx("registerMap");
  i && i(e, t, r);
}
var Ux = US;
ti(hf, wb);
ti(Wo, Sb);
ti(Wo, bb);
ti(hf, Bb);
ti(Wo, zb);
ti(Ig, _x);
Gg(Qp);
Wg(Tx, AS);
$g("default", xb);
Fi({
  type: Ur,
  event: Ur,
  update: Ur
}, Ut);
Fi({
  type: Ga,
  event: Ga,
  update: Ga
}, Ut);
Fi({
  type: bn,
  event: bn,
  update: bn
}, Ut);
Fi({
  type: Wa,
  event: Wa,
  update: Wa
}, Ut);
Fi({
  type: xn,
  event: xn,
  update: xn
}, Ut);
Hg("light", Ob);
Hg("dark", Nb);
function nn(e) {
  return e == null ? 0 : e.length || 1;
}
function rv(e) {
  return e;
}
var Yx = function() {
  function e(t, r, i, n, a, o) {
    this._old = t, this._new = r, this._oldKeyGetter = i || rv, this._newKeyGetter = n || rv, this.context = a, this._diffModeMultiple = o === "multiple";
  }
  return e.prototype.add = function(t) {
    return this._add = t, this;
  }, e.prototype.update = function(t) {
    return this._update = t, this;
  }, e.prototype.updateManyToOne = function(t) {
    return this._updateManyToOne = t, this;
  }, e.prototype.updateOneToMany = function(t) {
    return this._updateOneToMany = t, this;
  }, e.prototype.updateManyToMany = function(t) {
    return this._updateManyToMany = t, this;
  }, e.prototype.remove = function(t) {
    return this._remove = t, this;
  }, e.prototype.execute = function() {
    this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
  }, e.prototype._executeOneToOne = function() {
    var t = this._old, r = this._new, i = {}, n = new Array(t.length), a = new Array(r.length);
    this._initIndexMap(t, null, n, "_oldKeyGetter"), this._initIndexMap(r, i, a, "_newKeyGetter");
    for (var o = 0; o < t.length; o++) {
      var s = n[o], u = i[s], l = nn(u);
      if (l > 1) {
        var f = u.shift();
        u.length === 1 && (i[s] = u[0]), this._update && this._update(f, o);
      } else
        l === 1 ? (i[s] = null, this._update && this._update(u, o)) : this._remove && this._remove(o);
    }
    this._performRestAdd(a, i);
  }, e.prototype._executeMultiple = function() {
    var t = this._old, r = this._new, i = {}, n = {}, a = [], o = [];
    this._initIndexMap(t, i, a, "_oldKeyGetter"), this._initIndexMap(r, n, o, "_newKeyGetter");
    for (var s = 0; s < a.length; s++) {
      var u = a[s], l = i[u], f = n[u], h = nn(l), c = nn(f);
      if (h > 1 && c === 1)
        this._updateManyToOne && this._updateManyToOne(f, l), n[u] = null;
      else if (h === 1 && c > 1)
        this._updateOneToMany && this._updateOneToMany(f, l), n[u] = null;
      else if (h === 1 && c === 1)
        this._update && this._update(f, l), n[u] = null;
      else if (h > 1 && c > 1)
        this._updateManyToMany && this._updateManyToMany(f, l), n[u] = null;
      else if (h > 1)
        for (var v = 0; v < h; v++)
          this._remove && this._remove(l[v]);
      else
        this._remove && this._remove(l);
    }
    this._performRestAdd(o, n);
  }, e.prototype._performRestAdd = function(t, r) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i], a = r[n], o = nn(a);
      if (o > 1)
        for (var s = 0; s < o; s++)
          this._add && this._add(a[s]);
      else
        o === 1 && this._add && this._add(a);
      r[n] = null;
    }
  }, e.prototype._initIndexMap = function(t, r, i, n) {
    for (var a = this._diffModeMultiple, o = 0; o < t.length; o++) {
      var s = "_ec_" + this[n](t[o], o);
      if (a || (i[o] = s), !!r) {
        var u = r[s], l = nn(u);
        l === 0 ? (r[s] = o, a && i.push(s)) : l === 1 ? r[s] = [u, o] : u.push(o);
      }
    }
  }, e;
}();
const Xx = Yx;
var qx = function() {
  function e(t, r) {
    this._encode = t, this._schema = r;
  }
  return e.prototype.get = function() {
    return {
      fullDimensions: this._getFullDimensionNames(),
      encode: this._encode
    };
  }, e.prototype._getFullDimensionNames = function() {
    return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), this._cachedDimNames;
  }, e;
}();
function Zx(e, t) {
  var r = {}, i = r.encode = {}, n = Q(), a = [], o = [], s = {};
  A(e.dimensions, function(c) {
    var v = e.getDimensionInfo(c), d = v.coordDim;
    if (d) {
      process.env.NODE_ENV !== "production" && X(Zu.get(d) == null);
      var _ = v.coordDimIndex;
      Zs(i, d)[_] = c, v.isExtraCoord || (n.set(d, 1), Qx(v.type) && (a[0] = c), Zs(s, d)[_] = e.getDimensionIndex(v.name)), v.defaultTooltip && o.push(c);
    }
    Zu.each(function(p, g) {
      var y = Zs(i, g), m = v.otherDims[g];
      m != null && m !== !1 && (y[m] = v.name);
    });
  });
  var u = [], l = {};
  n.each(function(c, v) {
    var d = i[v];
    l[v] = d[0], u = u.concat(d);
  }), r.dataDimsOnCoord = u, r.dataDimIndicesOnCoord = q(u, function(c) {
    return e.getDimensionInfo(c).storeDimIndex;
  }), r.encodeFirstDimNotExtra = l;
  var f = i.label;
  f && f.length && (a = f.slice());
  var h = i.tooltip;
  return h && h.length ? o = h.slice() : o.length || (o = a.slice()), i.defaultedLabel = a, i.defaultedTooltip = o, r.userOutput = new qx(s, t), r;
}
function Zs(e, t) {
  return e.hasOwnProperty(t) || (e[t] = []), e[t];
}
function Kx(e) {
  return e === "category" ? "ordinal" : e === "time" ? "time" : "float";
}
function Qx(e) {
  return !(e === "ordinal" || e === "time");
}
var Jx = function() {
  function e(t) {
    this.otherDims = {}, t != null && O(this, t);
  }
  return e;
}();
const Xa = Jx;
var jx = At(), tT = {
  float: "f",
  int: "i",
  ordinal: "o",
  number: "n",
  time: "t"
}, Ug = function() {
  function e(t) {
    this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted);
  }
  return e.prototype.isDimensionOmitted = function() {
    return this._dimOmitted;
  }, e.prototype._updateDimOmitted = function(t) {
    this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = qg(this.source)));
  }, e.prototype.getSourceDimensionIndex = function(t) {
    return tt(this._dimNameMap.get(t), -1);
  }, e.prototype.getSourceDimension = function(t) {
    var r = this.source.dimensionsDefine;
    if (r)
      return r[t];
  }, e.prototype.makeStoreSchema = function() {
    for (var t = this._fullDimCount, r = jp(this.source), i = !Zg(t), n = "", a = [], o = 0, s = 0; o < t; o++) {
      var u = void 0, l = void 0, f = void 0, h = this.dimensions[s];
      if (h && h.storeDimIndex === o)
        u = r ? h.name : null, l = h.type, f = h.ordinalMeta, s++;
      else {
        var c = this.getSourceDimension(o);
        c && (u = r ? c.name : null, l = c.type);
      }
      a.push({
        property: u,
        type: l,
        ordinalMeta: f
      }), r && u != null && (!h || !h.isCalculationCoord) && (n += i ? u.replace(/\`/g, "`1").replace(/\$/g, "`2") : u), n += "$", n += tT[l] || "f", f && (n += f.uid), n += "$";
    }
    var v = this.source, d = [v.seriesLayoutBy, v.startIndex, n].join("$$");
    return {
      dimensions: a,
      hash: d
    };
  }, e.prototype.makeOutputDimensionNames = function() {
    for (var t = [], r = 0, i = 0; r < this._fullDimCount; r++) {
      var n = void 0, a = this.dimensions[i];
      if (a && a.storeDimIndex === r)
        a.isCalculationCoord || (n = a.name), i++;
      else {
        var o = this.getSourceDimension(r);
        o && (n = o.name);
      }
      t.push(n);
    }
    return t;
  }, e.prototype.appendCalculationDimension = function(t) {
    this.dimensions.push(t), t.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0);
  }, e;
}();
function Yg(e) {
  return e instanceof Ug;
}
function Xg(e) {
  for (var t = Q(), r = 0; r < (e || []).length; r++) {
    var i = e[r], n = F(i) ? i.name : i;
    n != null && t.get(n) == null && t.set(n, r);
  }
  return t;
}
function qg(e) {
  var t = jx(e);
  return t.dimNameMap || (t.dimNameMap = Xg(e.dimensionsDefine));
}
function Zg(e) {
  return e > 30;
}
var an = F, er = q, eT = typeof Int32Array > "u" ? Array : Int32Array, rT = "e\0\0", iv = -1, iT = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], nT = ["_approximateExtent"], nv, Ca, on, pi, Ks, Da, Qs, aT = function() {
  function e(t, r) {
    this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "lttbDownSample"];
    var i, n = !1;
    Yg(t) ? (i = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (n = !0, i = t), i = i || ["x", "y"];
    for (var a = {}, o = [], s = {}, u = !1, l = {}, f = 0; f < i.length; f++) {
      var h = i[f], c = z(h) ? new Xa({
        name: h
      }) : h instanceof Xa ? h : new Xa(h), v = c.name;
      c.type = c.type || "float", c.coordDim || (c.coordDim = v, c.coordDimIndex = 0);
      var d = c.otherDims = c.otherDims || {};
      o.push(v), a[v] = c, l[v] != null && (u = !0), c.createInvertedIndices && (s[v] = []), d.itemName === 0 && (this._nameDimIdx = f), d.itemId === 0 && (this._idDimIdx = f), process.env.NODE_ENV !== "production" && X(n || c.storeDimIndex >= 0), n && (c.storeDimIndex = f);
    }
    if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(u), this.hostModel = r, this._invertedIndicesMap = s, this._dimOmitted) {
      var _ = this._dimIdxToName = Q();
      A(o, function(p) {
        _.set(a[p].storeDimIndex, p);
      });
    }
  }
  return e.prototype.getDimension = function(t) {
    var r = this._recognizeDimIndex(t);
    if (r == null)
      return t;
    if (r = t, !this._dimOmitted)
      return this.dimensions[r];
    var i = this._dimIdxToName.get(r);
    if (i != null)
      return i;
    var n = this._schema.getSourceDimension(r);
    if (n)
      return n.name;
  }, e.prototype.getDimensionIndex = function(t) {
    var r = this._recognizeDimIndex(t);
    if (r != null)
      return r;
    if (t == null)
      return -1;
    var i = this._getDimInfo(t);
    return i ? i.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t) : -1;
  }, e.prototype._recognizeDimIndex = function(t) {
    if (dt(t) || t != null && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
      return +t;
  }, e.prototype._getStoreDimIndex = function(t) {
    var r = this.getDimensionIndex(t);
    if (process.env.NODE_ENV !== "production" && r == null)
      throw new Error("Unkown dimension " + t);
    return r;
  }, e.prototype.getDimensionInfo = function(t) {
    return this._getDimInfo(this.getDimension(t));
  }, e.prototype._initGetDimensionInfo = function(t) {
    var r = this._dimInfos;
    this._getDimInfo = t ? function(i) {
      return r.hasOwnProperty(i) ? r[i] : void 0;
    } : function(i) {
      return r[i];
    };
  }, e.prototype.getDimensionsOnCoord = function() {
    return this._dimSummary.dataDimsOnCoord.slice();
  }, e.prototype.mapDimension = function(t, r) {
    var i = this._dimSummary;
    if (r == null)
      return i.encodeFirstDimNotExtra[t];
    var n = i.encode[t];
    return n ? n[r] : null;
  }, e.prototype.mapDimensionsAll = function(t) {
    var r = this._dimSummary, i = r.encode[t];
    return (i || []).slice();
  }, e.prototype.getStore = function() {
    return this._store;
  }, e.prototype.initData = function(t, r, i) {
    var n = this, a;
    if (t instanceof Qu && (a = t), !a) {
      var o = this.dimensions, s = nf(t) || Yt(t) ? new tg(t, o.length) : t;
      a = new Qu();
      var u = er(o, function(l) {
        return {
          type: n._dimInfos[l].type,
          property: l
        };
      });
      a.initData(s, u, i);
    }
    this._store = a, this._nameList = (r || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = Zx(this, this._schema), this.userOutput = this._dimSummary.userOutput;
  }, e.prototype.appendData = function(t) {
    var r = this._store.appendData(t);
    this._doInit(r[0], r[1]);
  }, e.prototype.appendValues = function(t, r) {
    var i = this._store.appendValues(t, r.length), n = i.start, a = i.end, o = this._shouldMakeIdFromName();
    if (this._updateOrdinalMeta(), r)
      for (var s = n; s < a; s++) {
        var u = s - n;
        this._nameList[s] = r[u], o && Qs(this, s);
      }
  }, e.prototype._updateOrdinalMeta = function() {
    for (var t = this._store, r = this.dimensions, i = 0; i < r.length; i++) {
      var n = this._dimInfos[r[i]];
      n.ordinalMeta && t.collectOrdinalMeta(n.storeDimIndex, n.ordinalMeta);
    }
  }, e.prototype._shouldMakeIdFromName = function() {
    var t = this._store.getProvider();
    return this._idDimIdx == null && t.getSource().sourceFormat !== Ye && !t.fillStorage;
  }, e.prototype._doInit = function(t, r) {
    if (!(t >= r)) {
      var i = this._store, n = i.getProvider();
      this._updateOrdinalMeta();
      var a = this._nameList, o = this._idList, s = n.getSource().sourceFormat, u = s === ve;
      if (u && !n.pure)
        for (var l = [], f = t; f < r; f++) {
          var h = n.getItem(f, l);
          if (!this.hasItemOption && Rm(h) && (this.hasItemOption = !0), h) {
            var c = h.name;
            a[f] == null && c != null && (a[f] = Oe(c, null));
            var v = h.id;
            o[f] == null && v != null && (o[f] = Oe(v, null));
          }
        }
      if (this._shouldMakeIdFromName())
        for (var f = t; f < r; f++)
          Qs(this, f);
      nv(this);
    }
  }, e.prototype.getApproximateExtent = function(t) {
    return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t));
  }, e.prototype.setApproximateExtent = function(t, r) {
    r = this.getDimension(r), this._approximateExtent[r] = t.slice();
  }, e.prototype.getCalculationInfo = function(t) {
    return this._calculationInfo[t];
  }, e.prototype.setCalculationInfo = function(t, r) {
    an(t) ? O(this._calculationInfo, t) : this._calculationInfo[t] = r;
  }, e.prototype.getName = function(t) {
    var r = this.getRawIndex(t), i = this._nameList[r];
    return i == null && this._nameDimIdx != null && (i = on(this, this._nameDimIdx, r)), i == null && (i = ""), i;
  }, e.prototype._getCategory = function(t, r) {
    var i = this._store.get(t, r), n = this._store.getOrdinalMeta(t);
    return n ? n.categories[i] : i;
  }, e.prototype.getId = function(t) {
    return Ca(this, this.getRawIndex(t));
  }, e.prototype.count = function() {
    return this._store.count();
  }, e.prototype.get = function(t, r) {
    var i = this._store, n = this._dimInfos[t];
    if (n)
      return i.get(n.storeDimIndex, r);
  }, e.prototype.getByRawIndex = function(t, r) {
    var i = this._store, n = this._dimInfos[t];
    if (n)
      return i.getByRawIndex(n.storeDimIndex, r);
  }, e.prototype.getIndices = function() {
    return this._store.getIndices();
  }, e.prototype.getDataExtent = function(t) {
    return this._store.getDataExtent(this._getStoreDimIndex(t));
  }, e.prototype.getSum = function(t) {
    return this._store.getSum(this._getStoreDimIndex(t));
  }, e.prototype.getMedian = function(t) {
    return this._store.getMedian(this._getStoreDimIndex(t));
  }, e.prototype.getValues = function(t, r) {
    var i = this, n = this._store;
    return N(t) ? n.getValues(er(t, function(a) {
      return i._getStoreDimIndex(a);
    }), r) : n.getValues(t);
  }, e.prototype.hasValue = function(t) {
    for (var r = this._dimSummary.dataDimIndicesOnCoord, i = 0, n = r.length; i < n; i++)
      if (isNaN(this._store.get(r[i], t)))
        return !1;
    return !0;
  }, e.prototype.indexOfName = function(t) {
    for (var r = 0, i = this._store.count(); r < i; r++)
      if (this.getName(r) === t)
        return r;
    return -1;
  }, e.prototype.getRawIndex = function(t) {
    return this._store.getRawIndex(t);
  }, e.prototype.indexOfRawIndex = function(t) {
    return this._store.indexOfRawIndex(t);
  }, e.prototype.rawIndexOf = function(t, r) {
    var i = t && this._invertedIndicesMap[t];
    if (process.env.NODE_ENV !== "production" && !i)
      throw new Error("Do not supported yet");
    var n = i[r];
    return n == null || isNaN(n) ? iv : n;
  }, e.prototype.indicesOfNearest = function(t, r, i) {
    return this._store.indicesOfNearest(this._getStoreDimIndex(t), r, i);
  }, e.prototype.each = function(t, r, i) {
    J(t) && (i = r, r = t, t = []);
    var n = i || this, a = er(pi(t), this._getStoreDimIndex, this);
    this._store.each(a, n ? at(r, n) : r);
  }, e.prototype.filterSelf = function(t, r, i) {
    J(t) && (i = r, r = t, t = []);
    var n = i || this, a = er(pi(t), this._getStoreDimIndex, this);
    return this._store = this._store.filter(a, n ? at(r, n) : r), this;
  }, e.prototype.selectRange = function(t) {
    var r = this, i = {}, n = yt(t);
    return A(n, function(a) {
      var o = r._getStoreDimIndex(a);
      i[o] = t[a];
    }), this._store = this._store.selectRange(i), this;
  }, e.prototype.mapArray = function(t, r, i) {
    J(t) && (i = r, r = t, t = []), i = i || this;
    var n = [];
    return this.each(t, function() {
      n.push(r && r.apply(this, arguments));
    }, i), n;
  }, e.prototype.map = function(t, r, i, n) {
    var a = i || n || this, o = er(pi(t), this._getStoreDimIndex, this), s = Da(this);
    return s._store = this._store.map(o, a ? at(r, a) : r), s;
  }, e.prototype.modify = function(t, r, i, n) {
    var a = this, o = i || n || this;
    process.env.NODE_ENV !== "production" && A(pi(t), function(u) {
      var l = a.getDimensionInfo(u);
      l.isCalculationCoord || console.error("Danger: only stack dimension can be modified");
    });
    var s = er(pi(t), this._getStoreDimIndex, this);
    this._store.modify(s, o ? at(r, o) : r);
  }, e.prototype.downSample = function(t, r, i, n) {
    var a = Da(this);
    return a._store = this._store.downSample(this._getStoreDimIndex(t), r, i, n), a;
  }, e.prototype.lttbDownSample = function(t, r) {
    var i = Da(this);
    return i._store = this._store.lttbDownSample(this._getStoreDimIndex(t), r), i;
  }, e.prototype.getRawDataItem = function(t) {
    return this._store.getRawDataItem(t);
  }, e.prototype.getItemModel = function(t) {
    var r = this.hostModel, i = this.getRawDataItem(t);
    return new It(i, r, r && r.ecModel);
  }, e.prototype.diff = function(t) {
    var r = this;
    return new Xx(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function(i) {
      return Ca(t, i);
    }, function(i) {
      return Ca(r, i);
    });
  }, e.prototype.getVisual = function(t) {
    var r = this._visual;
    return r && r[t];
  }, e.prototype.setVisual = function(t, r) {
    this._visual = this._visual || {}, an(t) ? O(this._visual, t) : this._visual[t] = r;
  }, e.prototype.getItemVisual = function(t, r) {
    var i = this._itemVisuals[t], n = i && i[r];
    return n == null ? this.getVisual(r) : n;
  }, e.prototype.hasItemVisual = function() {
    return this._itemVisuals.length > 0;
  }, e.prototype.ensureUniqueItemVisual = function(t, r) {
    var i = this._itemVisuals, n = i[t];
    n || (n = i[t] = {});
    var a = n[r];
    return a == null && (a = this.getVisual(r), N(a) ? a = a.slice() : an(a) && (a = O({}, a)), n[r] = a), a;
  }, e.prototype.setItemVisual = function(t, r, i) {
    var n = this._itemVisuals[t] || {};
    this._itemVisuals[t] = n, an(r) ? O(n, r) : n[r] = i;
  }, e.prototype.clearAllVisual = function() {
    this._visual = {}, this._itemVisuals = [];
  }, e.prototype.setLayout = function(t, r) {
    an(t) ? O(this._layout, t) : this._layout[t] = r;
  }, e.prototype.getLayout = function(t) {
    return this._layout[t];
  }, e.prototype.getItemLayout = function(t) {
    return this._itemLayouts[t];
  }, e.prototype.setItemLayout = function(t, r, i) {
    this._itemLayouts[t] = i ? O(this._itemLayouts[t] || {}, r) : r;
  }, e.prototype.clearItemLayouts = function() {
    this._itemLayouts.length = 0;
  }, e.prototype.setItemGraphicEl = function(t, r) {
    var i = this.hostModel && this.hostModel.seriesIndex;
    X0(i, this.dataType, t, r), this._graphicEls[t] = r;
  }, e.prototype.getItemGraphicEl = function(t) {
    return this._graphicEls[t];
  }, e.prototype.eachItemGraphicEl = function(t, r) {
    A(this._graphicEls, function(i, n) {
      i && t && t.call(r, i, n);
    });
  }, e.prototype.cloneShallow = function(t) {
    return t || (t = new e(this._schema ? this._schema : er(this.dimensions, this._getDimInfo, this), this.hostModel)), Ks(t, this), t._store = this._store, t;
  }, e.prototype.wrapMethod = function(t, r) {
    var i = this[t];
    !J(i) || (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
      var n = i.apply(this, arguments);
      return r.apply(this, [n].concat(bl(arguments)));
    });
  }, e.internalField = function() {
    nv = function(t) {
      var r = t._invertedIndicesMap;
      A(r, function(i, n) {
        var a = t._dimInfos[n], o = a.ordinalMeta, s = t._store;
        if (o) {
          i = r[n] = new eT(o.categories.length);
          for (var u = 0; u < i.length; u++)
            i[u] = iv;
          for (var u = 0; u < s.count(); u++)
            i[s.get(a.storeDimIndex, u)] = u;
        }
      });
    }, on = function(t, r, i) {
      return Oe(t._getCategory(r, i), null);
    }, Ca = function(t, r) {
      var i = t._idList[r];
      return i == null && t._idDimIdx != null && (i = on(t, t._idDimIdx, r)), i == null && (i = rT + r), i;
    }, pi = function(t) {
      return N(t) || (t = t != null ? [t] : []), t;
    }, Da = function(t) {
      var r = new e(t._schema ? t._schema : er(t.dimensions, t._getDimInfo, t), t.hostModel);
      return Ks(r, t), r;
    }, Ks = function(t, r) {
      A(iT.concat(r.__wrappedMethods || []), function(i) {
        r.hasOwnProperty(i) && (t[i] = r[i]);
      }), t.__wrappedMethods = r.__wrappedMethods, A(nT, function(i) {
        t[i] = j(r[i]);
      }), t._calculationInfo = O({}, r._calculationInfo);
    }, Qs = function(t, r) {
      var i = t._nameList, n = t._idList, a = t._nameDimIdx, o = t._idDimIdx, s = i[r], u = n[r];
      if (s == null && a != null && (i[r] = s = on(t, a, r)), u == null && o != null && (n[r] = u = on(t, o, r)), u == null && s != null) {
        var l = t._nameRepeatCount, f = l[s] = (l[s] || 0) + 1;
        u = s, f > 1 && (u += "__ec__" + f), n[r] = u;
      }
    };
  }(), e;
}();
const Kg = aT;
function Qg(e, t) {
  nf(e) || (e = af(e)), t = t || {};
  var r = t.coordDimensions || [], i = t.dimensionsDefine || e.dimensionsDefine || [], n = Q(), a = [], o = sT(e, r, i, t.dimensionsCount), s = t.canOmitUnusedDimensions && Zg(o), u = i === e.dimensionsDefine, l = u ? qg(e) : Xg(i), f = t.encodeDefine;
  !f && t.encodeDefaulter && (f = t.encodeDefaulter(e, o));
  for (var h = Q(f), c = new ag(o), v = 0; v < c.length; v++)
    c[v] = -1;
  function d(C) {
    var E = c[C];
    if (E < 0) {
      var D = i[C], M = F(D) ? D : {
        name: D
      }, P = new Xa(), L = M.name;
      L != null && l.get(L) != null && (P.name = P.displayName = L), M.type != null && (P.type = M.type), M.displayName != null && (P.displayName = M.displayName);
      var I = a.length;
      return c[C] = I, P.storeDimIndex = C, a.push(P), P;
    }
    return a[E];
  }
  if (!s)
    for (var v = 0; v < o; v++)
      d(v);
  h.each(function(C, E) {
    var D = zt(C).slice();
    if (D.length === 1 && !z(D[0]) && D[0] < 0) {
      h.set(E, !1);
      return;
    }
    var M = h.set(E, []);
    A(D, function(P, L) {
      var I = z(P) ? l.get(P) : P;
      I != null && I < o && (M[L] = I, p(d(I), E, L));
    });
  });
  var _ = 0;
  A(r, function(C) {
    var E, D, M, P;
    if (z(C))
      E = C, P = {};
    else {
      P = C, E = P.name;
      var L = P.ordinalMeta;
      P.ordinalMeta = null, P = O({}, P), P.ordinalMeta = L, D = P.dimsDef, M = P.otherDims, P.name = P.coordDim = P.coordDimIndex = P.dimsDef = P.otherDims = null;
    }
    var I = h.get(E);
    if (I !== !1) {
      if (I = zt(I), !I.length)
        for (var R = 0; R < (D && D.length || 1); R++) {
          for (; _ < o && d(_).coordDim != null; )
            _++;
          _ < o && I.push(_++);
        }
      A(I, function($, B) {
        var W = d($);
        if (u && P.type != null && (W.type = P.type), p(ct(W, P), E, B), W.name == null && D) {
          var K = D[B];
          !F(K) && (K = {
            name: K
          }), W.name = W.displayName = K.name, W.defaultTooltip = K.defaultTooltip;
        }
        M && ct(W.otherDims, M);
      });
    }
  });
  function p(C, E, D) {
    Zu.get(E) != null ? C.otherDims[E] = D : (C.coordDim = E, C.coordDimIndex = D, n.set(E, !0));
  }
  var g = t.generateCoord, y = t.generateCoordCount, m = y != null;
  y = g ? y || 1 : 0;
  var w = g || "value";
  function b(C) {
    C.name == null && (C.name = C.coordDim);
  }
  if (s)
    A(a, function(C) {
      b(C);
    }), a.sort(function(C, E) {
      return C.storeDimIndex - E.storeDimIndex;
    });
  else
    for (var S = 0; S < o; S++) {
      var T = d(S), x = T.coordDim;
      x == null && (T.coordDim = uT(w, n, m), T.coordDimIndex = 0, (!g || y <= 0) && (T.isExtraCoord = !0), y--), b(T), T.type == null && (Up(e, S) === xt.Must || T.isExtraCoord && (T.otherDims.itemName != null || T.otherDims.seriesName != null)) && (T.type = "ordinal");
    }
  return oT(a), new Ug({
    source: e,
    dimensions: a,
    fullDimensionCount: o,
    dimensionOmitted: s
  });
}
function oT(e) {
  for (var t = Q(), r = 0; r < e.length; r++) {
    var i = e[r], n = i.name, a = t.get(n) || 0;
    a > 0 && (i.name = n + (a - 1)), a++, t.set(n, a);
  }
}
function sT(e, t, r, i) {
  var n = Math.max(e.dimensionsDetectedCount || 1, t.length, r.length, i || 0);
  return A(t, function(a) {
    var o;
    F(a) && (o = a.dimsDef) && (n = Math.max(n, o.length));
  }), n;
}
function uT(e, t, r) {
  var i = t.data;
  if (r || i.hasOwnProperty(e)) {
    for (var n = 0; i.hasOwnProperty(e + n); )
      n++;
    e += n;
  }
  return t.set(e, !0), e;
}
var lT = function() {
  function e(t) {
    this.coordSysDims = [], this.axisMap = Q(), this.categoryAxisMap = Q(), this.coordSysName = t;
  }
  return e;
}();
function fT(e) {
  var t = e.get("coordinateSystem"), r = new lT(t), i = hT[t];
  if (i)
    return i(e, r, r.axisMap, r.categoryAxisMap), r;
}
var hT = {
  cartesian2d: function(e, t, r, i) {
    var n = e.getReferringComponents("xAxis", zr).models[0], a = e.getReferringComponents("yAxis", zr).models[0];
    if (process.env.NODE_ENV !== "production") {
      if (!n)
        throw new Error('xAxis "' + Zr(e.get("xAxisIndex"), e.get("xAxisId"), 0) + '" not found');
      if (!a)
        throw new Error('yAxis "' + Zr(e.get("xAxisIndex"), e.get("yAxisId"), 0) + '" not found');
    }
    t.coordSysDims = ["x", "y"], r.set("x", n), r.set("y", a), gi(n) && (i.set("x", n), t.firstCategoryDimIndex = 0), gi(a) && (i.set("y", a), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  singleAxis: function(e, t, r, i) {
    var n = e.getReferringComponents("singleAxis", zr).models[0];
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error("singleAxis should be specified.");
    t.coordSysDims = ["single"], r.set("single", n), gi(n) && (i.set("single", n), t.firstCategoryDimIndex = 0);
  },
  polar: function(e, t, r, i) {
    var n = e.getReferringComponents("polar", zr).models[0], a = n.findAxisModel("radiusAxis"), o = n.findAxisModel("angleAxis");
    if (process.env.NODE_ENV !== "production") {
      if (!o)
        throw new Error("angleAxis option not found");
      if (!a)
        throw new Error("radiusAxis option not found");
    }
    t.coordSysDims = ["radius", "angle"], r.set("radius", a), r.set("angle", o), gi(a) && (i.set("radius", a), t.firstCategoryDimIndex = 0), gi(o) && (i.set("angle", o), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  geo: function(e, t, r, i) {
    t.coordSysDims = ["lng", "lat"];
  },
  parallel: function(e, t, r, i) {
    var n = e.ecModel, a = n.getComponent("parallel", e.get("parallelIndex")), o = t.coordSysDims = a.dimensions.slice();
    A(a.parallelAxisIndex, function(s, u) {
      var l = n.getComponent("parallelAxis", s), f = o[u];
      r.set(f, l), gi(l) && (i.set(f, l), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = u));
    });
  }
};
function gi(e) {
  return e.get("type") === "category";
}
function cT(e, t, r) {
  r = r || {};
  var i = r.byIndex, n = r.stackedCoordDimension, a, o, s;
  vT(t) ? a = t : (o = t.schema, a = o.dimensions, s = t.store);
  var u = !!(e && e.get("stack")), l, f, h, c;
  if (A(a, function(y, m) {
    z(y) && (a[m] = y = {
      name: y
    }), u && !y.isExtraCoord && (!i && !l && y.ordinalMeta && (l = y), !f && y.type !== "ordinal" && y.type !== "time" && (!n || n === y.coordDim) && (f = y));
  }), f && !i && !l && (i = !0), f) {
    h = "__\0ecstackresult_" + e.id, c = "__\0ecstackedover_" + e.id, l && (l.createInvertedIndices = !0);
    var v = f.coordDim, d = f.type, _ = 0;
    A(a, function(y) {
      y.coordDim === v && _++;
    });
    var p = {
      name: h,
      coordDim: v,
      coordDimIndex: _,
      type: d,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length
    }, g = {
      name: c,
      coordDim: c,
      coordDimIndex: _ + 1,
      type: d,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length + 1
    };
    o ? (s && (p.storeDimIndex = s.ensureCalculationDimension(c, d), g.storeDimIndex = s.ensureCalculationDimension(h, d)), o.appendCalculationDimension(p), o.appendCalculationDimension(g)) : (a.push(p), a.push(g));
  }
  return {
    stackedDimension: f && f.name,
    stackedByDimension: l && l.name,
    isStackedByIndex: i,
    stackedOverDimension: c,
    stackResultDimension: h
  };
}
function vT(e) {
  return !Yg(e.schema);
}
function dT(e, t) {
  return !!t && t === e.getCalculationInfo("stackedDimension");
}
function pT(e, t) {
  var r = e.get("coordinateSystem"), i = rf.get(r), n;
  return t && t.coordSysDims && (n = q(t.coordSysDims, function(a) {
    var o = {
      name: a
    }, s = t.axisMap.get(a);
    if (s) {
      var u = s.get("type");
      o.type = Kx(u);
    }
    return o;
  })), n || (n = i && (i.getDimensionsInfo ? i.getDimensionsInfo() : i.dimensions.slice()) || ["x", "y"]), n;
}
function gT(e, t, r) {
  var i, n;
  return r && A(e, function(a, o) {
    var s = a.coordDim, u = r.categoryAxisMap.get(s);
    u && (i == null && (i = o), a.ordinalMeta = u.getOrdinalMeta(), t && (a.createInvertedIndices = !0)), a.otherDims.itemName != null && (n = !0);
  }), !n && i != null && (e[i].otherDims.itemName = 0), i;
}
function Jg(e, t, r) {
  r = r || {};
  var i = t.getSourceManager(), n, a = !1;
  e ? (a = !0, n = af(e)) : (n = i.getSource(), a = n.sourceFormat === ve);
  var o = fT(t), s = pT(t, o), u = r.useEncodeDefaulter, l = J(u) ? u : u ? _t(Qw, s, t) : null, f = {
    coordDimensions: s,
    generateCoord: r.generateCoord,
    encodeDefine: t.getEncode(),
    encodeDefaulter: l,
    canOmitUnusedDimensions: !a
  }, h = Qg(n, f), c = gT(h.dimensions, r.createInvertedIndices, o), v = a ? null : i.getSharedDataStore(h), d = cT(t, {
    schema: h,
    store: v
  }), _ = new Kg(h, t);
  _.setCalculationInfo(d);
  var p = c != null && _T(n) ? function(g, y, m, w) {
    return w === c ? m : this.defaultDimValueGetter(g, y, m, w);
  } : null;
  return _.hasItemOption = !1, _.initData(
    a ? n : v,
    null,
    p
  ), _;
}
function _T(e) {
  if (e.sourceFormat === ve) {
    var t = yT(e.data || []);
    return !N(Un(t));
  }
}
function yT(e) {
  for (var t = 0; t < e.length && e[t] == null; )
    t++;
  return e[t];
}
var jg = typeof Float32Array < "u", mT = jg ? Float32Array : Array;
function Js(e) {
  return N(e) ? jg ? new Float32Array(e) : e : new mT(e);
}
var wT = "__ec_stack_";
function t_(e) {
  return e.get("stack") || wT + e.seriesIndex;
}
function e_(e) {
  return e.dim + e.index;
}
function ST(e, t) {
  var r = [];
  return t.eachSeriesByType(e, function(i) {
    r_(i) && r.push(i);
  }), r;
}
function bT(e) {
  var t = {};
  A(e, function(u) {
    var l = u.coordinateSystem, f = l.getBaseAxis();
    if (!(f.type !== "time" && f.type !== "value"))
      for (var h = u.getData(), c = f.dim + "_" + f.index, v = h.getDimensionIndex(h.mapDimension(f.dim)), d = h.getStore(), _ = 0, p = d.count(); _ < p; ++_) {
        var g = d.get(v, _);
        t[c] ? t[c].push(g) : t[c] = [g];
      }
  });
  var r = {};
  for (var i in t)
    if (t.hasOwnProperty(i)) {
      var n = t[i];
      if (n) {
        n.sort(function(u, l) {
          return u - l;
        });
        for (var a = null, o = 1; o < n.length; ++o) {
          var s = n[o] - n[o - 1];
          s > 0 && (a = a === null ? s : Math.min(a, s));
        }
        r[i] = a;
      }
    }
  return r;
}
function xT(e) {
  var t = bT(e), r = [];
  return A(e, function(i) {
    var n = i.coordinateSystem, a = n.getBaseAxis(), o = a.getExtent(), s;
    if (a.type === "category")
      s = a.getBandWidth();
    else if (a.type === "value" || a.type === "time") {
      var u = a.dim + "_" + a.index, l = t[u], f = Math.abs(o[1] - o[0]), h = a.scale.getExtent(), c = Math.abs(h[1] - h[0]);
      s = l ? f / c * l : f;
    } else {
      var v = i.getData();
      s = Math.abs(o[1] - o[0]) / v.count();
    }
    var d = ft(i.get("barWidth"), s), _ = ft(i.get("barMaxWidth"), s), p = ft(
      i.get("barMinWidth") || (i_(i) ? 0.5 : 1),
      s
    ), g = i.get("barGap"), y = i.get("barCategoryGap");
    r.push({
      bandWidth: s,
      barWidth: d,
      barMaxWidth: _,
      barMinWidth: p,
      barGap: g,
      barCategoryGap: y,
      axisKey: e_(a),
      stackId: t_(i)
    });
  }), TT(r);
}
function TT(e) {
  var t = {};
  A(e, function(i, n) {
    var a = i.axisKey, o = i.bandWidth, s = t[a] || {
      bandWidth: o,
      remainedWidth: o,
      autoWidthCount: 0,
      categoryGap: null,
      gap: "20%",
      stacks: {}
    }, u = s.stacks;
    t[a] = s;
    var l = i.stackId;
    u[l] || s.autoWidthCount++, u[l] = u[l] || {
      width: 0,
      maxWidth: 0
    };
    var f = i.barWidth;
    f && !u[l].width && (u[l].width = f, f = Math.min(s.remainedWidth, f), s.remainedWidth -= f);
    var h = i.barMaxWidth;
    h && (u[l].maxWidth = h);
    var c = i.barMinWidth;
    c && (u[l].minWidth = c);
    var v = i.barGap;
    v != null && (s.gap = v);
    var d = i.barCategoryGap;
    d != null && (s.categoryGap = d);
  });
  var r = {};
  return A(t, function(i, n) {
    r[n] = {};
    var a = i.stacks, o = i.bandWidth, s = i.categoryGap;
    if (s == null) {
      var u = yt(a).length;
      s = Math.max(35 - u * 4, 15) + "%";
    }
    var l = ft(s, o), f = ft(i.gap, 1), h = i.remainedWidth, c = i.autoWidthCount, v = (h - l) / (c + (c - 1) * f);
    v = Math.max(v, 0), A(a, function(g) {
      var y = g.maxWidth, m = g.minWidth;
      if (g.width) {
        var w = g.width;
        y && (w = Math.min(w, y)), m && (w = Math.max(w, m)), g.width = w, h -= w + f * w, c--;
      } else {
        var w = v;
        y && y < w && (w = Math.min(y, h)), m && m > w && (w = m), w !== v && (g.width = w, h -= w + f * w, c--);
      }
    }), v = (h - l) / (c + (c - 1) * f), v = Math.max(v, 0);
    var d = 0, _;
    A(a, function(g, y) {
      g.width || (g.width = v), _ = g, d += g.width * (1 + f);
    }), _ && (d -= _.width * f);
    var p = -d / 2;
    A(a, function(g, y) {
      r[n][y] = r[n][y] || {
        bandWidth: o,
        offset: p,
        width: g.width
      }, p += g.width * (1 + f);
    });
  }), r;
}
function CT(e, t) {
  var r = ST(e, t), i = xT(r);
  A(r, function(n) {
    var a = n.getData(), o = n.coordinateSystem, s = o.getBaseAxis(), u = t_(n), l = i[e_(s)][u], f = l.offset, h = l.width;
    a.setLayout({
      bandWidth: l.bandWidth,
      offset: f,
      size: h
    });
  });
}
function DT(e) {
  return {
    seriesType: e,
    plan: vg(),
    reset: function(t) {
      if (!!r_(t)) {
        var r = t.getData(), i = t.coordinateSystem, n = i.getBaseAxis(), a = i.getOtherAxis(n), o = r.getDimensionIndex(r.mapDimension(a.dim)), s = r.getDimensionIndex(r.mapDimension(n.dim)), u = t.get("showBackground", !0), l = r.mapDimension(a.dim), f = r.getCalculationInfo("stackResultDimension"), h = dT(r, l) && !!r.getCalculationInfo("stackedOnSeries"), c = a.isHorizontal(), v = AT(n, a), d = i_(t), _ = t.get("barMinHeight") || 0, p = f && r.getDimensionIndex(f), g = r.getLayout("size"), y = r.getLayout("offset");
        return {
          progress: function(m, w) {
            for (var b = m.count, S = d && Js(b * 3), T = d && u && Js(b * 3), x = d && Js(b), C = i.master.getRect(), E = c ? C.width : C.height, D, M = w.getStore(), P = 0; (D = m.next()) != null; ) {
              var L = M.get(h ? p : o, D), I = M.get(s, D), R = v, $ = void 0;
              h && ($ = +L - M.get(o, D));
              var B = void 0, W = void 0, K = void 0, rt = void 0;
              if (c) {
                var U = i.dataToPoint([L, I]);
                if (h) {
                  var ut = i.dataToPoint([$, I]);
                  R = ut[0];
                }
                B = R, W = U[1] + y, K = U[0] - R, rt = g, Math.abs(K) < _ && (K = (K < 0 ? -1 : 1) * _);
              } else {
                var U = i.dataToPoint([I, L]);
                if (h) {
                  var ut = i.dataToPoint([I, $]);
                  R = ut[1];
                }
                B = U[0] + y, W = R, K = g, rt = U[1] - R, Math.abs(rt) < _ && (rt = (rt <= 0 ? -1 : 1) * _);
              }
              d ? (S[P] = B, S[P + 1] = W, S[P + 2] = c ? K : rt, T && (T[P] = c ? C.x : B, T[P + 1] = c ? W : C.y, T[P + 2] = E), x[D] = D) : w.setItemLayout(D, {
                x: B,
                y: W,
                width: K,
                height: rt
              }), P += 3;
            }
            d && w.setLayout({
              largePoints: S,
              largeDataIndices: x,
              largeBackgroundPoints: T,
              valueAxisHorizontal: c
            });
          }
        };
      }
    }
  };
}
function r_(e) {
  return e.coordinateSystem && e.coordinateSystem.type === "cartesian2d";
}
function i_(e) {
  return e.pipelineContext && e.pipelineContext.large;
}
function AT(e, t) {
  return t.toGlobalCoord(t.dataToCoord(t.type === "log" ? 1 : 0));
}
function n_(e, t) {
  return e.type === "category" ? e.scale.getLabel(t) : t.value;
}
function ET(e) {
  var t = e.get("interval");
  return t == null ? "auto" : t;
}
function MT(e) {
  return e.type === "category" && ET(e.getLabelModel()) === 0;
}
var av = [], PT = {
  registerPreprocessor: Gg,
  registerProcessor: Wg,
  registerPostInit: Vx,
  registerPostUpdate: Hx,
  registerUpdateLifecycle: df,
  registerAction: Fi,
  registerCoordinateSystem: Gx,
  registerLayout: Wx,
  registerVisual: ti,
  registerTransform: Ux,
  registerLoading: $g,
  registerMap: $x,
  registerImpl: mx,
  PRIORITY: Rx,
  ComponentModel: lt,
  ComponentView: cr,
  SeriesModel: Qr,
  ChartView: Yr,
  registerComponentModel: function(e) {
    lt.registerClass(e);
  },
  registerComponentView: function(e) {
    cr.registerClass(e);
  },
  registerSeriesModel: function(e) {
    Qr.registerClass(e);
  },
  registerChartView: function(e) {
    Yr.registerClass(e);
  },
  registerSubTypeDefaulter: function(e, t) {
    lt.registerSubTypeDefaulter(e, t);
  },
  registerPainter: function(e, t) {
    bm(e, t);
  }
};
function vr(e) {
  if (N(e)) {
    A(e, function(t) {
      vr(t);
    });
    return;
  }
  nt(av, e) >= 0 || (av.push(e), J(e) && (e = {
    install: e
  }), e.install(PT));
}
Kr.CMD;
function a_(e, t, r, i, n, a, o, s) {
  var u = n - e, l = a - t, f = r - e, h = i - t, c = Math.sqrt(f * f + h * h);
  f /= c, h /= c;
  var v = u * f + l * h, d = v / c;
  s && (d = Math.min(Math.max(d, 0), 1)), d *= c;
  var _ = o[0] = e + d * f, p = o[1] = t + d * h;
  return Math.sqrt((_ - n) * (_ - n) + (p - a) * (p - a));
}
var or = new G(), vt = new G(), Tt = new G(), sr = new G(), Pe = new G(), xo = [], Bt = new G();
function LT(e, t) {
  if (t <= 180 && t > 0) {
    t = t / 180 * Math.PI, or.fromArray(e[0]), vt.fromArray(e[1]), Tt.fromArray(e[2]), G.sub(sr, or, vt), G.sub(Pe, Tt, vt);
    var r = sr.len(), i = Pe.len();
    if (!(r < 1e-3 || i < 1e-3)) {
      sr.scale(1 / r), Pe.scale(1 / i);
      var n = sr.dot(Pe), a = Math.cos(t);
      if (a < n) {
        var o = a_(vt.x, vt.y, Tt.x, Tt.y, or.x, or.y, xo, !1);
        Bt.fromArray(xo), Bt.scaleAndAdd(Pe, o / Math.tan(Math.PI - t));
        var s = Tt.x !== vt.x ? (Bt.x - vt.x) / (Tt.x - vt.x) : (Bt.y - vt.y) / (Tt.y - vt.y);
        if (isNaN(s))
          return;
        s < 0 ? G.copy(Bt, vt) : s > 1 && G.copy(Bt, Tt), Bt.toArray(e[1]);
      }
    }
  }
}
function IT(e, t, r) {
  if (r <= 180 && r > 0) {
    r = r / 180 * Math.PI, or.fromArray(e[0]), vt.fromArray(e[1]), Tt.fromArray(e[2]), G.sub(sr, vt, or), G.sub(Pe, Tt, vt);
    var i = sr.len(), n = Pe.len();
    if (!(i < 1e-3 || n < 1e-3)) {
      sr.scale(1 / i), Pe.scale(1 / n);
      var a = sr.dot(t), o = Math.cos(r);
      if (a < o) {
        var s = a_(vt.x, vt.y, Tt.x, Tt.y, or.x, or.y, xo, !1);
        Bt.fromArray(xo);
        var u = Math.PI / 2, l = Math.acos(Pe.dot(t)), f = u + l - r;
        if (f >= u)
          G.copy(Bt, Tt);
        else {
          Bt.scaleAndAdd(Pe, s / Math.tan(Math.PI / 2 - f));
          var h = Tt.x !== vt.x ? (Bt.x - vt.x) / (Tt.x - vt.x) : (Bt.y - vt.y) / (Tt.y - vt.y);
          if (isNaN(h))
            return;
          h < 0 ? G.copy(Bt, vt) : h > 1 && G.copy(Bt, Tt);
        }
        Bt.toArray(e[1]);
      }
    }
  }
}
function ov(e, t, r, i) {
  var n = r === "normal", a = n ? e : e.ensureState(r);
  a.ignore = t;
  var o = i.get("smooth");
  o && o === !0 && (o = 0.3), a.shape = a.shape || {}, o > 0 && (a.shape.smooth = o);
  var s = i.getModel("lineStyle").getLineStyle();
  n ? e.useStyle(s) : a.style = s;
}
function RT(e, t) {
  var r = t.smooth, i = t.points;
  if (!!i)
    if (e.moveTo(i[0][0], i[0][1]), r > 0 && i.length >= 3) {
      var n = wu(i[0], i[1]), a = wu(i[1], i[2]);
      if (!n || !a) {
        e.lineTo(i[1][0], i[1][1]), e.lineTo(i[2][0], i[2][1]);
        return;
      }
      var o = Math.min(n, a) * r, s = qo([], i[1], i[0], o / n), u = qo([], i[1], i[2], o / a), l = qo([], s, u, 0.5);
      e.bezierCurveTo(s[0], s[1], s[0], s[1], l[0], l[1]), e.bezierCurveTo(u[0], u[1], u[0], u[1], i[2][0], i[2][1]);
    } else
      for (var f = 1; f < i.length; f++)
        e.lineTo(i[f][0], i[f][1]);
}
function OT(e, t, r) {
  var i = e.getTextGuideLine(), n = e.getTextContent();
  if (!n) {
    i && e.removeTextGuideLine();
    return;
  }
  for (var a = t.normal, o = a.get("show"), s = n.ignore, u = 0; u < so.length; u++) {
    var l = so[u], f = t[l], h = l === "normal";
    if (f) {
      var c = f.get("show"), v = h ? s : tt(n.states[l] && n.states[l].ignore, s);
      if (v || !tt(c, o)) {
        var d = h ? i : i && i.states[l];
        d && (d.ignore = !0);
        continue;
      }
      i || (i = new No(), e.setTextGuideLine(i), !h && (s || !o) && ov(i, !0, "normal", t.normal), e.stateProxy && (i.stateProxy = e.stateProxy)), ov(i, !1, l, f);
    }
  }
  if (i) {
    ct(i.style, r), i.style.fill = null;
    var _ = a.get("showAbove"), p = e.textGuideLineConfig = e.textGuideLineConfig || {};
    p.showAbove = _ || !1, i.buildPath = RT;
  }
}
function NT(e, t) {
  t = t || "labelLine";
  for (var r = {
    normal: e.getModel(t)
  }, i = 0; i < Be.length; i++) {
    var n = Be[i];
    r[n] = e.getModel([n, t]);
  }
  return r;
}
function kT(e) {
  for (var t = [], r = 0; r < e.length; r++) {
    var i = e[r];
    if (!i.defaultAttr.ignore) {
      var n = i.label, a = n.getComputedTransform(), o = n.getBoundingRect(), s = !a || a[1] < 1e-5 && a[2] < 1e-5, u = n.style.margin || 0, l = o.clone();
      l.applyTransform(a), l.x -= u / 2, l.y -= u / 2, l.width += u, l.height += u;
      var f = s ? new uo(o, a) : null;
      t.push({
        label: n,
        labelLine: i.labelLine,
        rect: l,
        localRect: o,
        obb: f,
        priority: i.priority,
        defaultAttr: i.defaultAttr,
        layoutOption: i.computedLayoutOption,
        axisAligned: s,
        transform: a
      });
    }
  }
  return t;
}
function BT(e, t, r, i, n, a) {
  var o = e.length;
  if (o < 2)
    return;
  e.sort(function(x, C) {
    return x.rect[t] - C.rect[t];
  });
  for (var s = 0, u, l = !1, f = 0, h = 0; h < o; h++) {
    var c = e[h], v = c.rect;
    u = v[t] - s, u < 0 && (v[t] -= u, c.label[t] -= u, l = !0);
    var d = Math.max(-u, 0);
    f += d, s = v[t] + v[r];
  }
  f > 0 && a && b(-f / o, 0, o);
  var _ = e[0], p = e[o - 1], g, y;
  m(), g < 0 && S(-g, 0.8), y < 0 && S(y, 0.8), m(), w(g, y, 1), w(y, g, -1), m(), g < 0 && T(-g), y < 0 && T(y);
  function m() {
    g = _.rect[t] - i, y = n - p.rect[t] - p.rect[r];
  }
  function w(x, C, E) {
    if (x < 0) {
      var D = Math.min(C, -x);
      if (D > 0) {
        b(D * E, 0, o);
        var M = D + x;
        M < 0 && S(-M * E, 1);
      } else
        S(-x * E, 1);
    }
  }
  function b(x, C, E) {
    x !== 0 && (l = !0);
    for (var D = C; D < E; D++) {
      var M = e[D], P = M.rect;
      P[t] += x, M.label[t] += x;
    }
  }
  function S(x, C) {
    for (var E = [], D = 0, M = 1; M < o; M++) {
      var P = e[M - 1].rect, L = Math.max(e[M].rect[t] - P[t] - P[r], 0);
      E.push(L), D += L;
    }
    if (!!D) {
      var I = Math.min(Math.abs(x) / D, C);
      if (x > 0)
        for (var M = 0; M < o - 1; M++) {
          var R = E[M] * I;
          b(R, 0, M + 1);
        }
      else
        for (var M = o - 1; M > 0; M--) {
          var R = E[M - 1] * I;
          b(-R, M, o);
        }
    }
  }
  function T(x) {
    var C = x < 0 ? -1 : 1;
    x = Math.abs(x);
    for (var E = Math.ceil(x / (o - 1)), D = 0; D < o - 1; D++)
      if (C > 0 ? b(E, 0, D + 1) : b(-E, o - D - 1, o), x -= E, x <= 0)
        return;
  }
  return l;
}
function zT(e, t, r, i) {
  return BT(e, "y", "height", t, r, i);
}
function FT(e) {
  var t = [];
  e.sort(function(_, p) {
    return p.priority - _.priority;
  });
  var r = new st(0, 0, 0, 0);
  function i(_) {
    if (!_.ignore) {
      var p = _.ensureState("emphasis");
      p.ignore == null && (p.ignore = !1);
    }
    _.ignore = !0;
  }
  for (var n = 0; n < e.length; n++) {
    var a = e[n], o = a.axisAligned, s = a.localRect, u = a.transform, l = a.label, f = a.labelLine;
    r.copy(a.rect), r.width -= 0.1, r.height -= 0.1, r.x += 0.05, r.y += 0.05;
    for (var h = a.obb, c = !1, v = 0; v < t.length; v++) {
      var d = t[v];
      if (!!r.intersect(d.rect)) {
        if (o && d.axisAligned) {
          c = !0;
          break;
        }
        if (d.obb || (d.obb = new uo(d.localRect, d.transform)), h || (h = new uo(s, u)), h.intersect(d.obb)) {
          c = !0;
          break;
        }
      }
    }
    c ? (i(l), f && i(f)) : (l.attr("ignore", a.defaultAttr.ignore), f && f.attr("ignore", a.defaultAttr.labelGuideIgnore), t.push(a));
  }
}
function sv(e, t, r) {
  var i = Ri.createCanvas(), n = t.getWidth(), a = t.getHeight(), o = i.style;
  return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = n + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", e)), i.width = n * r, i.height = a * r, i;
}
var VT = function(e) {
  k(t, e);
  function t(r, i, n) {
    var a = e.call(this) || this;
    a.motionBlur = !1, a.lastFrameAlpha = 0.7, a.dpr = 1, a.virtual = !1, a.config = {}, a.incremental = !1, a.zlevel = 0, a.maxRepaintRectCount = 5, a.__dirty = !0, a.__firstTimePaint = !0, a.__used = !1, a.__drawIndex = 0, a.__startIndex = 0, a.__endIndex = 0, a.__prevStartIndex = null, a.__prevEndIndex = null;
    var o;
    n = n || ro, typeof r == "string" ? o = sv(r, i, n) : F(r) && (o = r, r = o.id), a.id = r, a.dom = o;
    var s = o.style;
    return s && (ed(o), o.onselectstart = function() {
      return !1;
    }, s.padding = "0", s.margin = "0", s.borderWidth = "0"), a.painter = i, a.dpr = n, a;
  }
  return t.prototype.getElementCount = function() {
    return this.__endIndex - this.__startIndex;
  }, t.prototype.afterBrush = function() {
    this.__prevStartIndex = this.__startIndex, this.__prevEndIndex = this.__endIndex;
  }, t.prototype.initContext = function() {
    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
  }, t.prototype.setUnpainted = function() {
    this.__firstTimePaint = !0;
  }, t.prototype.createBackBuffer = function() {
    var r = this.dpr;
    this.domBack = sv("back-" + this.id, this.painter, r), this.ctxBack = this.domBack.getContext("2d"), r !== 1 && this.ctxBack.scale(r, r);
  }, t.prototype.createRepaintRects = function(r, i, n, a) {
    if (this.__firstTimePaint)
      return this.__firstTimePaint = !1, null;
    var o = [], s = this.maxRepaintRectCount, u = !1, l = new st(0, 0, 0, 0);
    function f(y) {
      if (!(!y.isFinite() || y.isZero()))
        if (o.length === 0) {
          var m = new st(0, 0, 0, 0);
          m.copy(y), o.push(m);
        } else {
          for (var w = !1, b = 1 / 0, S = 0, T = 0; T < o.length; ++T) {
            var x = o[T];
            if (x.intersect(y)) {
              var C = new st(0, 0, 0, 0);
              C.copy(x), C.union(y), o[T] = C, w = !0;
              break;
            } else if (u) {
              l.copy(y), l.union(x);
              var E = y.width * y.height, D = x.width * x.height, M = l.width * l.height, P = M - E - D;
              P < b && (b = P, S = T);
            }
          }
          if (u && (o[S].union(y), w = !0), !w) {
            var m = new st(0, 0, 0, 0);
            m.copy(y), o.push(m);
          }
          u || (u = o.length >= s);
        }
    }
    for (var h = this.__startIndex; h < this.__endIndex; ++h) {
      var c = r[h];
      if (c) {
        var v = c.shouldBePainted(n, a, !0, !0), d = c.__isRendered && (c.__dirty & Jt || !v) ? c.getPrevPaintRect() : null;
        d && f(d);
        var _ = v && (c.__dirty & Jt || !c.__isRendered) ? c.getPaintRect() : null;
        _ && f(_);
      }
    }
    for (var h = this.__prevStartIndex; h < this.__prevEndIndex; ++h) {
      var c = i[h], v = c.shouldBePainted(n, a, !0, !0);
      if (c && (!v || !c.__zr) && c.__isRendered) {
        var d = c.getPrevPaintRect();
        d && f(d);
      }
    }
    var p;
    do {
      p = !1;
      for (var h = 0; h < o.length; ) {
        if (o[h].isZero()) {
          o.splice(h, 1);
          continue;
        }
        for (var g = h + 1; g < o.length; )
          o[h].intersect(o[g]) ? (p = !0, o[h].union(o[g]), o.splice(g, 1)) : g++;
        h++;
      }
    } while (p);
    return this._paintRects = o, o;
  }, t.prototype.debugGetPaintRects = function() {
    return (this._paintRects || []).slice();
  }, t.prototype.resize = function(r, i) {
    var n = this.dpr, a = this.dom, o = a.style, s = this.domBack;
    o && (o.width = r + "px", o.height = i + "px"), a.width = r * n, a.height = i * n, s && (s.width = r * n, s.height = i * n, n !== 1 && this.ctxBack.scale(n, n));
  }, t.prototype.clear = function(r, i, n) {
    var a = this.dom, o = this.ctx, s = a.width, u = a.height;
    i = i || this.clearColor;
    var l = this.motionBlur && !r, f = this.lastFrameAlpha, h = this.dpr, c = this;
    l && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(a, 0, 0, s / h, u / h));
    var v = this.domBack;
    function d(_, p, g, y) {
      if (o.clearRect(_, p, g, y), i && i !== "transparent") {
        var m = void 0;
        Eo(i) ? (m = i.__canvasGradient || nl(o, i, {
          x: 0,
          y: 0,
          width: g,
          height: y
        }), i.__canvasGradient = m) : Q_(i) && (m = al(o, i, {
          dirty: function() {
            c.setUnpainted(), c.__painter.refresh();
          }
        })), o.save(), o.fillStyle = m || i, o.fillRect(_, p, g, y), o.restore();
      }
      l && (o.save(), o.globalAlpha = f, o.drawImage(v, _, p, g, y), o.restore());
    }
    !n || l ? d(0, 0, s, u) : n.length && A(n, function(_) {
      d(_.x * h, _.y * h, _.width * h, _.height * h);
    });
  }, t;
}(ze);
const js = VT;
var uv = 1e5, Nr = 314159, Aa = 0.01, HT = 1e-3;
function GT(e) {
  return e ? e.__builtin__ ? !0 : !(typeof e.resize != "function" || typeof e.refresh != "function") : !1;
}
function WT(e, t) {
  var r = document.createElement("div");
  return r.style.cssText = [
    "position:relative",
    "width:" + e + "px",
    "height:" + t + "px",
    "padding:0",
    "margin:0",
    "border-width:0"
  ].join(";") + ";", r;
}
var $T = function() {
  function e(t, r, i, n) {
    this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
    var a = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
    this._opts = i = O({}, i || {}), this.dpr = i.devicePixelRatio || ro, this._singleCanvas = a, this.root = t;
    var o = t.style;
    o && (ed(t), t.innerHTML = ""), this.storage = r;
    var s = this._zlevelList;
    this._prevDisplayList = [];
    var u = this._layers;
    if (a) {
      var f = t, h = f.width, c = f.height;
      i.width != null && (h = i.width), i.height != null && (c = i.height), this.dpr = i.devicePixelRatio || 1, f.width = h * this.dpr, f.height = c * this.dpr, this._width = h, this._height = c;
      var v = new js(f, this, this.dpr);
      v.__builtin__ = !0, v.initContext(), u[Nr] = v, v.zlevel = Nr, s.push(Nr), this._domRoot = t;
    } else {
      this._width = ba(t, 0, i), this._height = ba(t, 1, i);
      var l = this._domRoot = WT(this._width, this._height);
      t.appendChild(l);
    }
  }
  return e.prototype.getType = function() {
    return "canvas";
  }, e.prototype.isSingleCanvas = function() {
    return this._singleCanvas;
  }, e.prototype.getViewportRoot = function() {
    return this._domRoot;
  }, e.prototype.getViewportRootOffset = function() {
    var t = this.getViewportRoot();
    if (t)
      return {
        offsetLeft: t.offsetLeft || 0,
        offsetTop: t.offsetTop || 0
      };
  }, e.prototype.refresh = function(t) {
    var r = this.storage.getDisplayList(!0), i = this._prevDisplayList, n = this._zlevelList;
    this._redrawId = Math.random(), this._paintList(r, i, t, this._redrawId);
    for (var a = 0; a < n.length; a++) {
      var o = n[a], s = this._layers[o];
      if (!s.__builtin__ && s.refresh) {
        var u = a === 0 ? this._backgroundColor : null;
        s.refresh(u);
      }
    }
    return this._opts.useDirtyRect && (this._prevDisplayList = r.slice()), this;
  }, e.prototype.refreshHover = function() {
    this._paintHoverList(this.storage.getDisplayList(!1));
  }, e.prototype._paintHoverList = function(t) {
    var r = t.length, i = this._hoverlayer;
    if (i && i.clear(), !!r) {
      for (var n = {
        inHover: !0,
        viewWidth: this._width,
        viewHeight: this._height
      }, a, o = 0; o < r; o++) {
        var s = t[o];
        s.__inHover && (i || (i = this._hoverlayer = this.getLayer(uv)), a || (a = i.ctx, a.save()), Hr(a, s, n, o === r - 1));
      }
      a && a.restore();
    }
  }, e.prototype.getHoverLayer = function() {
    return this.getLayer(uv);
  }, e.prototype.paintOne = function(t, r) {
    Dg(t, r);
  }, e.prototype._paintList = function(t, r, i, n) {
    if (this._redrawId === n) {
      i = i || !1, this._updateLayerStatus(t);
      var a = this._doPaintList(t, r, i), o = a.finished, s = a.needsRefreshHover;
      if (this._needsManuallyCompositing && this._compositeManually(), s && this._paintHoverList(t), o)
        this.eachLayer(function(l) {
          l.afterBrush && l.afterBrush();
        });
      else {
        var u = this;
        Tu(function() {
          u._paintList(t, r, i, n);
        });
      }
    }
  }, e.prototype._compositeManually = function() {
    var t = this.getLayer(Nr).ctx, r = this._domRoot.width, i = this._domRoot.height;
    t.clearRect(0, 0, r, i), this.eachBuiltinLayer(function(n) {
      n.virtual && t.drawImage(n.dom, 0, 0, r, i);
    });
  }, e.prototype._doPaintList = function(t, r, i) {
    for (var n = this, a = [], o = this._opts.useDirtyRect, s = 0; s < this._zlevelList.length; s++) {
      var u = this._zlevelList[s], l = this._layers[u];
      l.__builtin__ && l !== this._hoverlayer && (l.__dirty || i) && a.push(l);
    }
    for (var f = !0, h = !1, c = function(_) {
      var p = a[_], g = p.ctx, y = o && p.createRepaintRects(t, r, v._width, v._height), m = i ? p.__startIndex : p.__drawIndex, w = !i && p.incremental && Date.now, b = w && Date.now(), S = p.zlevel === v._zlevelList[0] ? v._backgroundColor : null;
      if (p.__startIndex === p.__endIndex)
        p.clear(!1, S, y);
      else if (m === p.__startIndex) {
        var T = t[m];
        (!T.incremental || !T.notClear || i) && p.clear(!1, S, y);
      }
      m === -1 && (console.error("For some unknown reason. drawIndex is -1"), m = p.__startIndex);
      var x, C = function(P) {
        var L = {
          inHover: !1,
          allClipped: !1,
          prevEl: null,
          viewWidth: n._width,
          viewHeight: n._height
        };
        for (x = m; x < p.__endIndex; x++) {
          var I = t[x];
          if (I.__inHover && (h = !0), n._doPaintEl(I, p, o, P, L, x === p.__endIndex - 1), w) {
            var R = Date.now() - b;
            if (R > 15)
              break;
          }
        }
        L.prevElClipPaths && g.restore();
      };
      if (y)
        if (y.length === 0)
          x = p.__endIndex;
        else
          for (var E = v.dpr, D = 0; D < y.length; ++D) {
            var M = y[D];
            g.save(), g.beginPath(), g.rect(M.x * E, M.y * E, M.width * E, M.height * E), g.clip(), C(M), g.restore();
          }
      else
        g.save(), C(), g.restore();
      p.__drawIndex = x, p.__drawIndex < p.__endIndex && (f = !1);
    }, v = this, d = 0; d < a.length; d++)
      c(d);
    return Z.wxa && A(this._layers, function(_) {
      _ && _.ctx && _.ctx.draw && _.ctx.draw();
    }), {
      finished: f,
      needsRefreshHover: h
    };
  }, e.prototype._doPaintEl = function(t, r, i, n, a, o) {
    var s = r.ctx;
    if (i) {
      var u = t.getPaintRect();
      (!n || u && u.intersect(n)) && (Hr(s, t, a, o), t.setPrevPaintRect(u));
    } else
      Hr(s, t, a, o);
  }, e.prototype.getLayer = function(t, r) {
    this._singleCanvas && !this._needsManuallyCompositing && (t = Nr);
    var i = this._layers[t];
    return i || (i = new js("zr_" + t, this, this.dpr), i.zlevel = t, i.__builtin__ = !0, this._layerConfig[t] ? ht(i, this._layerConfig[t], !0) : this._layerConfig[t - Aa] && ht(i, this._layerConfig[t - Aa], !0), r && (i.virtual = r), this.insertLayer(t, i), i.initContext()), i;
  }, e.prototype.insertLayer = function(t, r) {
    var i = this._layers, n = this._zlevelList, a = n.length, o = this._domRoot, s = null, u = -1;
    if (i[t]) {
      process.env.NODE_ENV !== "production" && Gr("ZLevel " + t + " has been used already");
      return;
    }
    if (!GT(r)) {
      process.env.NODE_ENV !== "production" && Gr("Layer of zlevel " + t + " is not valid");
      return;
    }
    if (a > 0 && t > n[0]) {
      for (u = 0; u < a - 1 && !(n[u] < t && n[u + 1] > t); u++)
        ;
      s = i[n[u]];
    }
    if (n.splice(u + 1, 0, t), i[t] = r, !r.virtual)
      if (s) {
        var l = s.dom;
        l.nextSibling ? o.insertBefore(r.dom, l.nextSibling) : o.appendChild(r.dom);
      } else
        o.firstChild ? o.insertBefore(r.dom, o.firstChild) : o.appendChild(r.dom);
    r.__painter = this;
  }, e.prototype.eachLayer = function(t, r) {
    for (var i = this._zlevelList, n = 0; n < i.length; n++) {
      var a = i[n];
      t.call(r, this._layers[a], a);
    }
  }, e.prototype.eachBuiltinLayer = function(t, r) {
    for (var i = this._zlevelList, n = 0; n < i.length; n++) {
      var a = i[n], o = this._layers[a];
      o.__builtin__ && t.call(r, o, a);
    }
  }, e.prototype.eachOtherLayer = function(t, r) {
    for (var i = this._zlevelList, n = 0; n < i.length; n++) {
      var a = i[n], o = this._layers[a];
      o.__builtin__ || t.call(r, o, a);
    }
  }, e.prototype.getLayers = function() {
    return this._layers;
  }, e.prototype._updateLayerStatus = function(t) {
    this.eachBuiltinLayer(function(h, c) {
      h.__dirty = h.__used = !1;
    });
    function r(h) {
      a && (a.__endIndex !== h && (a.__dirty = !0), a.__endIndex = h);
    }
    if (this._singleCanvas)
      for (var i = 1; i < t.length; i++) {
        var n = t[i];
        if (n.zlevel !== t[i - 1].zlevel || n.incremental) {
          this._needsManuallyCompositing = !0;
          break;
        }
      }
    var a = null, o = 0, s, u;
    for (u = 0; u < t.length; u++) {
      var n = t[u], l = n.zlevel, f = void 0;
      s !== l && (s = l, o = 0), n.incremental ? (f = this.getLayer(l + HT, this._needsManuallyCompositing), f.incremental = !0, o = 1) : f = this.getLayer(l + (o > 0 ? Aa : 0), this._needsManuallyCompositing), f.__builtin__ || Gr("ZLevel " + l + " has been used by unkown layer " + f.id), f !== a && (f.__used = !0, f.__startIndex !== u && (f.__dirty = !0), f.__startIndex = u, f.incremental ? f.__drawIndex = -1 : f.__drawIndex = u, r(u), a = f), n.__dirty & Jt && !n.__inHover && (f.__dirty = !0, f.incremental && f.__drawIndex < 0 && (f.__drawIndex = u));
    }
    r(u), this.eachBuiltinLayer(function(h, c) {
      !h.__used && h.getElementCount() > 0 && (h.__dirty = !0, h.__startIndex = h.__endIndex = h.__drawIndex = 0), h.__dirty && h.__drawIndex < 0 && (h.__drawIndex = h.__startIndex);
    });
  }, e.prototype.clear = function() {
    return this.eachBuiltinLayer(this._clearLayer), this;
  }, e.prototype._clearLayer = function(t) {
    t.clear();
  }, e.prototype.setBackgroundColor = function(t) {
    this._backgroundColor = t, A(this._layers, function(r) {
      r.setUnpainted();
    });
  }, e.prototype.configLayer = function(t, r) {
    if (r) {
      var i = this._layerConfig;
      i[t] ? ht(i[t], r, !0) : i[t] = r;
      for (var n = 0; n < this._zlevelList.length; n++) {
        var a = this._zlevelList[n];
        if (a === t || a === t + Aa) {
          var o = this._layers[a];
          ht(o, i[t], !0);
        }
      }
    }
  }, e.prototype.delLayer = function(t) {
    var r = this._layers, i = this._zlevelList, n = r[t];
    !n || (n.dom.parentNode.removeChild(n.dom), delete r[t], i.splice(nt(i, t), 1));
  }, e.prototype.resize = function(t, r) {
    if (this._domRoot.style) {
      var i = this._domRoot;
      i.style.display = "none";
      var n = this._opts, a = this.root;
      if (t != null && (n.width = t), r != null && (n.height = r), t = ba(a, 0, n), r = ba(a, 1, n), i.style.display = "", this._width !== t || r !== this._height) {
        i.style.width = t + "px", i.style.height = r + "px";
        for (var o in this._layers)
          this._layers.hasOwnProperty(o) && this._layers[o].resize(t, r);
        this.refresh(!0);
      }
      this._width = t, this._height = r;
    } else {
      if (t == null || r == null)
        return;
      this._width = t, this._height = r, this.getLayer(Nr).resize(t, r);
    }
    return this;
  }, e.prototype.clearLayer = function(t) {
    var r = this._layers[t];
    r && r.clear();
  }, e.prototype.dispose = function() {
    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
  }, e.prototype.getRenderedCanvas = function(t) {
    if (t = t || {}, this._singleCanvas && !this._compositeManually)
      return this._layers[Nr].dom;
    var r = new js("image", this, t.pixelRatio || this.dpr);
    r.initContext(), r.clear(!1, t.backgroundColor || this._backgroundColor);
    var i = r.ctx;
    if (t.pixelRatio <= this.dpr) {
      this.refresh();
      var n = r.dom.width, a = r.dom.height;
      this.eachLayer(function(h) {
        h.__builtin__ ? i.drawImage(h.dom, 0, 0, n, a) : h.renderToCanvas && (i.save(), h.renderToCanvas(i), i.restore());
      });
    } else
      for (var o = {
        inHover: !1,
        viewWidth: this._width,
        viewHeight: this._height
      }, s = this.storage.getDisplayList(!0), u = 0, l = s.length; u < l; u++) {
        var f = s[u];
        Hr(i, f, o, u === l - 1);
      }
    return r.dom;
  }, e.prototype.getWidth = function() {
    return this._width;
  }, e.prototype.getHeight = function() {
    return this._height;
  }, e;
}();
const UT = $T;
function gf(e) {
  e.registerPainter("canvas", UT);
}
function YT(e, t) {
  var r = e.mapDimensionsAll("defaultedLabel"), i = r.length;
  if (i === 1) {
    var n = Li(e, t, r[0]);
    return n != null ? n + "" : null;
  } else if (i) {
    for (var a = [], o = 0; o < r.length; o++)
      a.push(Li(e, t, r[o]));
    return a.join(" ");
  }
}
function XT(e, t) {
  var r = e.mapDimensionsAll("defaultedLabel");
  if (!N(t))
    return t + "";
  for (var i = [], n = 0; n < r.length; n++) {
    var a = e.getDimensionIndex(r[n]);
    a >= 0 && i.push(t[a]);
  }
  return i.join(" ");
}
function qT(e, t, r, i, n) {
  var a = e.getArea(), o = a.x, s = a.y, u = a.width, l = a.height, f = r.get(["lineStyle", "width"]) || 2;
  o -= f / 2, s -= f / 2, u += f, l += f, o = Math.floor(o), u = Math.round(u);
  var h = new Dt({
    shape: {
      x: o,
      y: s,
      width: u,
      height: l
    }
  });
  if (t) {
    var c = e.getBaseAxis(), v = c.isHorizontal(), d = c.inverse;
    v ? (d && (h.shape.x += u), h.shape.width = 0) : (d || (h.shape.y += l), h.shape.height = 0);
    var _ = J(n) ? function(p) {
      n(p, h);
    } : null;
    Ne(h, {
      shape: {
        width: u,
        height: l,
        x: o,
        y: s
      }
    }, r, null, i, _);
  }
  return h;
}
function ZT(e, t, r) {
  var i = e.getArea(), n = dn(i.r0, 1), a = dn(i.r, 1), o = new Jr({
    shape: {
      cx: dn(e.cx, 1),
      cy: dn(e.cy, 1),
      r0: n,
      r: a,
      startAngle: i.startAngle,
      endAngle: i.endAngle,
      clockwise: i.clockwise
    }
  });
  if (t) {
    var s = e.getBaseAxis().dim === "angle";
    s ? o.shape.endAngle = i.startAngle : o.shape.r = n, Ne(o, {
      shape: {
        endAngle: i.endAngle,
        r: a
      }
    }, r);
  }
  return o;
}
function KT(e, t, r, i, n) {
  if (e) {
    if (e.type === "polar")
      return ZT(e, t, r);
    if (e.type === "cartesian2d")
      return qT(e, t, r, i, n);
  } else
    return null;
  return null;
}
function o_(e, t) {
  return e.type === t;
}
var QT = {
  average: function(e) {
    for (var t = 0, r = 0, i = 0; i < e.length; i++)
      isNaN(e[i]) || (t += e[i], r++);
    return r === 0 ? NaN : t / r;
  },
  sum: function(e) {
    for (var t = 0, r = 0; r < e.length; r++)
      t += e[r] || 0;
    return t;
  },
  max: function(e) {
    for (var t = -1 / 0, r = 0; r < e.length; r++)
      e[r] > t && (t = e[r]);
    return isFinite(t) ? t : NaN;
  },
  min: function(e) {
    for (var t = 1 / 0, r = 0; r < e.length; r++)
      e[r] < t && (t = e[r]);
    return isFinite(t) ? t : NaN;
  },
  nearest: function(e) {
    return e[0];
  }
}, JT = function(e) {
  return Math.round(e.length / 2);
};
function jT(e) {
  return {
    seriesType: e,
    reset: function(t, r, i) {
      var n = t.getData(), a = t.get("sampling"), o = t.coordinateSystem, s = n.count();
      if (s > 10 && o.type === "cartesian2d" && a) {
        var u = o.getBaseAxis(), l = o.getOtherAxis(u), f = u.getExtent(), h = i.getDevicePixelRatio(), c = Math.abs(f[1] - f[0]) * (h || 1), v = Math.round(s / c);
        if (isFinite(v) && v > 1) {
          a === "lttb" && t.setData(n.lttbDownSample(n.mapDimension(l.dim), 1 / v));
          var d = void 0;
          z(a) ? d = QT[a] : J(a) && (d = a), d && t.setData(n.downSample(n.mapDimension(l.dim), 1 / v, d, JT));
        }
      }
    }
  };
}
var s_ = function(e) {
  k(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.type = t.type, r;
  }
  return t.prototype.getInitialData = function(r, i) {
    return Jg(null, this, {
      useEncodeDefaulter: !0
    });
  }, t.prototype.getMarkerPosition = function(r) {
    var i = this.coordinateSystem;
    if (i && i.clampData) {
      var n = i.dataToPoint(i.clampData(r)), a = this.getData(), o = a.getLayout("offset"), s = a.getLayout("size"), u = i.getBaseAxis().isHorizontal() ? 0 : 1;
      return n[u] += o + s / 2, n;
    }
    return [NaN, NaN];
  }, t.type = "series.__base_bar__", t.defaultOption = {
    z: 2,
    coordinateSystem: "cartesian2d",
    legendHoverLink: !0,
    barMinHeight: 0,
    barMinAngle: 0,
    large: !1,
    largeThreshold: 400,
    progressive: 3e3,
    progressiveChunkMode: "mod"
  }, t;
}(Qr);
Qr.registerClass(s_);
const lv = s_;
var tC = function(e) {
  k(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.type = t.type, r;
  }
  return t.prototype.getInitialData = function() {
    return Jg(null, this, {
      useEncodeDefaulter: !0,
      createInvertedIndices: !!this.get("realtimeSort", !0) || null
    });
  }, t.prototype.getProgressive = function() {
    return this.get("large") ? this.get("progressive") : !1;
  }, t.prototype.getProgressiveThreshold = function() {
    var r = this.get("progressiveThreshold"), i = this.get("largeThreshold");
    return i > r && (r = i), r;
  }, t.prototype.brushSelector = function(r, i, n) {
    return n.rect(i.getItemLayout(r));
  }, t.type = "series.bar", t.dependencies = ["grid", "polar"], t.defaultOption = kp(lv.defaultOption, {
    clip: !0,
    roundCap: !1,
    showBackground: !1,
    backgroundStyle: {
      color: "rgba(180, 180, 180, 0.2)",
      borderColor: null,
      borderWidth: 0,
      borderType: "solid",
      borderRadius: 0,
      shadowBlur: 0,
      shadowColor: null,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1
    },
    select: {
      itemStyle: {
        borderColor: "#212121"
      }
    },
    realtimeSort: !1
  }), t;
}(lv);
const eC = tC;
var rC = function() {
  function e() {
    this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
  }
  return e;
}(), iC = function(e) {
  k(t, e);
  function t(r) {
    var i = e.call(this, r) || this;
    return i.type = "sausage", i;
  }
  return t.prototype.getDefaultShape = function() {
    return new rC();
  }, t.prototype.buildPath = function(r, i) {
    var n = i.cx, a = i.cy, o = Math.max(i.r0 || 0, 0), s = Math.max(i.r, 0), u = (s - o) * 0.5, l = o + u, f = i.startAngle, h = i.endAngle, c = i.clockwise, v = Math.PI * 2, d = c ? h - f < v : f - h < v;
    d || (f = h - (c ? v : -v));
    var _ = Math.cos(f), p = Math.sin(f), g = Math.cos(h), y = Math.sin(h);
    d ? (r.moveTo(_ * o + n, p * o + a), r.arc(_ * l + n, p * l + a, u, -Math.PI + f, f, !c)) : r.moveTo(_ * s + n, p * s + a), r.arc(n, a, s, f, h, !c), r.arc(g * l + n, y * l + a, u, h - Math.PI * 2, h - Math.PI, !c), o !== 0 && r.arc(n, a, o, h, f, c);
  }, t;
}(it);
const fv = iC;
function nC(e, t) {
  t = t || {};
  var r = t.isRoundCap;
  return function(i, n, a) {
    var o = n.position;
    if (!o || o instanceof Array)
      return io(i, n, a);
    var s = e(o), u = n.distance != null ? n.distance : 5, l = this.shape, f = l.cx, h = l.cy, c = l.r, v = l.r0, d = (c + v) / 2, _ = l.startAngle, p = l.endAngle, g = (_ + p) / 2, y = r ? Math.abs(c - v) / 2 : 0, m = Math.cos, w = Math.sin, b = f + c * m(_), S = h + c * w(_), T = "left", x = "top";
    switch (s) {
      case "startArc":
        b = f + (v - u) * m(g), S = h + (v - u) * w(g), T = "center", x = "top";
        break;
      case "insideStartArc":
        b = f + (v + u) * m(g), S = h + (v + u) * w(g), T = "center", x = "bottom";
        break;
      case "startAngle":
        b = f + d * m(_) + Ea(_, u + y, !1), S = h + d * w(_) + Ma(_, u + y, !1), T = "right", x = "middle";
        break;
      case "insideStartAngle":
        b = f + d * m(_) + Ea(_, -u + y, !1), S = h + d * w(_) + Ma(_, -u + y, !1), T = "left", x = "middle";
        break;
      case "middle":
        b = f + d * m(g), S = h + d * w(g), T = "center", x = "middle";
        break;
      case "endArc":
        b = f + (c + u) * m(g), S = h + (c + u) * w(g), T = "center", x = "bottom";
        break;
      case "insideEndArc":
        b = f + (c - u) * m(g), S = h + (c - u) * w(g), T = "center", x = "top";
        break;
      case "endAngle":
        b = f + d * m(p) + Ea(p, u + y, !0), S = h + d * w(p) + Ma(p, u + y, !0), T = "left", x = "middle";
        break;
      case "insideEndAngle":
        b = f + d * m(p) + Ea(p, -u + y, !0), S = h + d * w(p) + Ma(p, -u + y, !0), T = "right", x = "middle";
        break;
      default:
        return io(i, n, a);
    }
    return i = i || {}, i.x = b, i.y = S, i.align = T, i.verticalAlign = x, i;
  };
}
function aC(e, t, r, i) {
  if (dt(i)) {
    e.setTextConfig({
      rotation: i
    });
    return;
  } else if (N(t)) {
    e.setTextConfig({
      rotation: 0
    });
    return;
  }
  var n = e.shape, a = n.clockwise ? n.startAngle : n.endAngle, o = n.clockwise ? n.endAngle : n.startAngle, s = (a + o) / 2, u, l = r(t);
  switch (l) {
    case "startArc":
    case "insideStartArc":
    case "middle":
    case "insideEndArc":
    case "endArc":
      u = s;
      break;
    case "startAngle":
    case "insideStartAngle":
      u = a;
      break;
    case "endAngle":
    case "insideEndAngle":
      u = o;
      break;
    default:
      e.setTextConfig({
        rotation: 0
      });
      return;
  }
  var f = Math.PI * 1.5 - u;
  l === "middle" && f > Math.PI / 2 && f < Math.PI * 1.5 && (f -= Math.PI), e.setTextConfig({
    rotation: f
  });
}
function Ea(e, t, r) {
  return t * Math.sin(e) * (r ? -1 : 1);
}
function Ma(e, t, r) {
  return t * Math.cos(e) * (r ? 1 : -1);
}
var tu = Math.max, eu = Math.min;
function oC(e, t) {
  var r = e.getArea && e.getArea();
  if (o_(e, "cartesian2d")) {
    var i = e.getBaseAxis();
    if (i.type !== "category" || !i.onBand) {
      var n = t.getLayout("bandWidth");
      i.isHorizontal() ? (r.x -= n, r.width += n * 2) : (r.y -= n, r.height += n * 2);
    }
  }
  return r;
}
var sC = function(e) {
  k(t, e);
  function t() {
    var r = e.call(this) || this;
    return r.type = t.type, r._isFirstFrame = !0, r;
  }
  return t.prototype.render = function(r, i, n, a) {
    this._model = r, this._removeOnRenderedListener(n), this._updateDrawMode(r);
    var o = r.get("coordinateSystem");
    o === "cartesian2d" || o === "polar" ? (this._progressiveEls = null, this._isLargeDraw ? this._renderLarge(r, i, n) : this._renderNormal(r, i, n, a)) : process.env.NODE_ENV !== "production" && Rn("Only cartesian2d and polar supported for bar.");
  }, t.prototype.incrementalPrepareRender = function(r) {
    this._clear(), this._updateDrawMode(r), this._updateLargeClip(r);
  }, t.prototype.incrementalRender = function(r, i) {
    this._progressiveEls = [], this._incrementalRenderLarge(r, i);
  }, t.prototype.eachRendered = function(r) {
    Xl(this._progressiveEls || this.group, r);
  }, t.prototype._updateDrawMode = function(r) {
    var i = r.pipelineContext.large;
    (this._isLargeDraw == null || i !== this._isLargeDraw) && (this._isLargeDraw = i, this._clear());
  }, t.prototype._renderNormal = function(r, i, n, a) {
    var o = this.group, s = r.getData(), u = this._data, l = r.coordinateSystem, f = l.getBaseAxis(), h;
    l.type === "cartesian2d" ? h = f.isHorizontal() : l.type === "polar" && (h = f.dim === "angle");
    var c = r.isAnimationEnabled() ? r : null, v = uC(r, l);
    v && this._enableRealtimeSort(v, s, n);
    var d = r.get("clip", !0) || v, _ = oC(l, s);
    o.removeClipPath();
    var p = r.get("roundCap", !0), g = r.get("showBackground", !0), y = r.getModel("backgroundStyle"), m = y.get("borderRadius") || 0, w = [], b = this._backgroundEls, S = a && a.isInitSort, T = a && a.type === "changeAxisOrder";
    function x(D) {
      var M = Pa[l.type](s, D), P = pC(l, h, M);
      return P.useStyle(y.getItemStyle()), l.type === "cartesian2d" && P.setShape("r", m), w[D] = P, P;
    }
    s.diff(u).add(function(D) {
      var M = s.getItemModel(D), P = Pa[l.type](s, D, M);
      if (g && x(D), !(!s.hasValue(D) || !pv[l.type](P))) {
        var L = !1;
        d && (L = hv[l.type](_, P));
        var I = cv[l.type](r, s, D, P, h, c, f.model, !1, p);
        v && (I.forceLabelAnimation = !0), gv(I, s, D, M, P, r, h, l.type === "polar"), S ? I.attr({
          shape: P
        }) : v ? vv(v, c, I, P, D, h, !1, !1) : Ne(I, {
          shape: P
        }, r, D), s.setItemGraphicEl(D, I), o.add(I), I.ignore = L;
      }
    }).update(function(D, M) {
      var P = s.getItemModel(D), L = Pa[l.type](s, D, P);
      if (g) {
        var I = void 0;
        b.length === 0 ? I = x(M) : (I = b[M], I.useStyle(y.getItemStyle()), l.type === "cartesian2d" && I.setShape("r", m), w[D] = I);
        var R = Pa[l.type](s, D), $ = l_(h, R, l);
        me(I, {
          shape: $
        }, c, D);
      }
      var B = u.getItemGraphicEl(M);
      if (!s.hasValue(D) || !pv[l.type](L)) {
        o.remove(B);
        return;
      }
      var W = !1;
      if (d && (W = hv[l.type](_, L), W && o.remove(B)), B ? Ep(B) : B = cv[l.type](r, s, D, L, h, c, f.model, !!B, p), v && (B.forceLabelAnimation = !0), T) {
        var K = B.getTextContent();
        if (K) {
          var rt = Zl(K);
          rt.prevValue != null && (rt.prevValue = rt.value);
        }
      } else
        gv(B, s, D, P, L, r, h, l.type === "polar");
      S ? B.attr({
        shape: L
      }) : v ? vv(v, c, B, L, D, h, !0, T) : me(B, {
        shape: L
      }, r, D, null), s.setItemGraphicEl(D, B), B.ignore = W, o.add(B);
    }).remove(function(D) {
      var M = u.getItemGraphicEl(D);
      M && lo(M, r, D);
    }).execute();
    var C = this._backgroundGroup || (this._backgroundGroup = new ye());
    C.removeAll();
    for (var E = 0; E < w.length; ++E)
      C.add(w[E]);
    o.add(C), this._backgroundEls = w, this._data = s;
  }, t.prototype._renderLarge = function(r, i, n) {
    this._clear(), yv(r, this.group), this._updateLargeClip(r);
  }, t.prototype._incrementalRenderLarge = function(r, i) {
    this._removeBackground(), yv(i, this.group, this._progressiveEls, !0);
  }, t.prototype._updateLargeClip = function(r) {
    var i = r.get("clip", !0) && KT(r.coordinateSystem, !1, r), n = this.group;
    i ? n.setClipPath(i) : n.removeClipPath();
  }, t.prototype._enableRealtimeSort = function(r, i, n) {
    var a = this;
    if (!!i.count()) {
      var o = r.baseAxis;
      if (this._isFirstFrame)
        this._dispatchInitSort(i, r, n), this._isFirstFrame = !1;
      else {
        var s = function(u) {
          var l = i.getItemGraphicEl(u), f = l && l.shape;
          return f && Math.abs(o.isHorizontal() ? f.height : f.width) || 0;
        };
        this._onRendered = function() {
          a._updateSortWithinSameData(i, s, o, n);
        }, n.getZr().on("rendered", this._onRendered);
      }
    }
  }, t.prototype._dataSort = function(r, i, n) {
    var a = [];
    return r.each(r.mapDimension(i.dim), function(o, s) {
      var u = n(s);
      u = u == null ? NaN : u, a.push({
        dataIndex: s,
        mappedValue: u,
        ordinalNumber: o
      });
    }), a.sort(function(o, s) {
      return s.mappedValue - o.mappedValue;
    }), {
      ordinalNumbers: q(a, function(o) {
        return o.ordinalNumber;
      })
    };
  }, t.prototype._isOrderChangedWithinSameData = function(r, i, n) {
    for (var a = n.scale, o = r.mapDimension(n.dim), s = Number.MAX_VALUE, u = 0, l = a.getOrdinalMeta().categories.length; u < l; ++u) {
      var f = r.rawIndexOf(o, a.getRawOrdinalNumber(u)), h = f < 0 ? Number.MIN_VALUE : i(r.indexOfRawIndex(f));
      if (h > s)
        return !0;
      s = h;
    }
    return !1;
  }, t.prototype._isOrderDifferentInView = function(r, i) {
    for (var n = i.scale, a = n.getExtent(), o = Math.max(0, a[0]), s = Math.min(a[1], n.getOrdinalMeta().categories.length - 1); o <= s; ++o)
      if (r.ordinalNumbers[o] !== n.getRawOrdinalNumber(o))
        return !0;
  }, t.prototype._updateSortWithinSameData = function(r, i, n, a) {
    if (!!this._isOrderChangedWithinSameData(r, i, n)) {
      var o = this._dataSort(r, n, i);
      this._isOrderDifferentInView(o, n) && (this._removeOnRenderedListener(a), a.dispatchAction({
        type: "changeAxisOrder",
        componentType: n.dim + "Axis",
        axisId: n.index,
        sortInfo: o
      }));
    }
  }, t.prototype._dispatchInitSort = function(r, i, n) {
    var a = i.baseAxis, o = this._dataSort(r, a, function(s) {
      return r.get(r.mapDimension(i.otherAxis.dim), s);
    });
    n.dispatchAction({
      type: "changeAxisOrder",
      componentType: a.dim + "Axis",
      isInitSort: !0,
      axisId: a.index,
      sortInfo: o
    });
  }, t.prototype.remove = function(r, i) {
    this._clear(this._model), this._removeOnRenderedListener(i);
  }, t.prototype.dispose = function(r, i) {
    this._removeOnRenderedListener(i);
  }, t.prototype._removeOnRenderedListener = function(r) {
    this._onRendered && (r.getZr().off("rendered", this._onRendered), this._onRendered = null);
  }, t.prototype._clear = function(r) {
    var i = this.group, n = this._data;
    r && r.isAnimationEnabled() && n && !this._isLargeDraw ? (this._removeBackground(), this._backgroundEls = [], n.eachItemGraphicEl(function(a) {
      lo(a, r, ot(a).dataIndex);
    })) : i.removeAll(), this._data = null, this._isFirstFrame = !0;
  }, t.prototype._removeBackground = function() {
    this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
  }, t.type = "bar", t;
}(Yr), hv = {
  cartesian2d: function(e, t) {
    var r = t.width < 0 ? -1 : 1, i = t.height < 0 ? -1 : 1;
    r < 0 && (t.x += t.width, t.width = -t.width), i < 0 && (t.y += t.height, t.height = -t.height);
    var n = e.x + e.width, a = e.y + e.height, o = tu(t.x, e.x), s = eu(t.x + t.width, n), u = tu(t.y, e.y), l = eu(t.y + t.height, a), f = s < o, h = l < u;
    return t.x = f && o > n ? s : o, t.y = h && u > a ? l : u, t.width = f ? 0 : s - o, t.height = h ? 0 : l - u, r < 0 && (t.x += t.width, t.width = -t.width), i < 0 && (t.y += t.height, t.height = -t.height), f || h;
  },
  polar: function(e, t) {
    var r = t.r0 <= t.r ? 1 : -1;
    if (r < 0) {
      var i = t.r;
      t.r = t.r0, t.r0 = i;
    }
    var n = eu(t.r, e.r), a = tu(t.r0, e.r0);
    t.r = n, t.r0 = a;
    var o = n - a < 0;
    if (r < 0) {
      var i = t.r;
      t.r = t.r0, t.r0 = i;
    }
    return o;
  }
}, cv = {
  cartesian2d: function(e, t, r, i, n, a, o, s, u) {
    var l = new Dt({
      shape: O({}, i),
      z2: 1
    });
    if (l.__dataIndex = r, l.name = "item", a) {
      var f = l.shape, h = n ? "height" : "width";
      f[h] = 0;
    }
    return l;
  },
  polar: function(e, t, r, i, n, a, o, s, u) {
    var l = !n && u ? fv : Jr, f = new l({
      shape: i,
      z2: 1
    });
    f.name = "item";
    var h = u_(n);
    if (f.calculateTextPosition = nC(h, {
      isRoundCap: l === fv
    }), a) {
      var c = f.shape, v = n ? "r" : "endAngle", d = {};
      c[v] = n ? 0 : i.startAngle, d[v] = i[v], (s ? me : Ne)(f, {
        shape: d
      }, a);
    }
    return f;
  }
};
function uC(e, t) {
  var r = e.get("realtimeSort", !0), i = t.getBaseAxis();
  if (process.env.NODE_ENV !== "production" && r && (i.type !== "category" && Rn("`realtimeSort` will not work because this bar series is not based on a category axis."), t.type !== "cartesian2d" && Rn("`realtimeSort` will not work because this bar series is not on cartesian2d.")), r && i.type === "category" && t.type === "cartesian2d")
    return {
      baseAxis: i,
      otherAxis: t.getOtherAxis(i)
    };
}
function vv(e, t, r, i, n, a, o, s) {
  var u, l;
  a ? (l = {
    x: i.x,
    width: i.width
  }, u = {
    y: i.y,
    height: i.height
  }) : (l = {
    y: i.y,
    height: i.height
  }, u = {
    x: i.x,
    width: i.width
  }), s || (o ? me : Ne)(r, {
    shape: u
  }, t, n, null);
  var f = t ? e.baseAxis.model : null;
  (o ? me : Ne)(r, {
    shape: l
  }, f, n);
}
function dv(e, t) {
  for (var r = 0; r < t.length; r++)
    if (!isFinite(e[t[r]]))
      return !0;
  return !1;
}
var lC = ["x", "y", "width", "height"], fC = ["cx", "cy", "r", "startAngle", "endAngle"], pv = {
  cartesian2d: function(e) {
    return !dv(e, lC);
  },
  polar: function(e) {
    return !dv(e, fC);
  }
}, Pa = {
  cartesian2d: function(e, t, r) {
    var i = e.getItemLayout(t), n = r ? cC(r, i) : 0, a = i.width > 0 ? 1 : -1, o = i.height > 0 ? 1 : -1;
    return {
      x: i.x + a * n / 2,
      y: i.y + o * n / 2,
      width: i.width - a * n,
      height: i.height - o * n
    };
  },
  polar: function(e, t, r) {
    var i = e.getItemLayout(t);
    return {
      cx: i.cx,
      cy: i.cy,
      r0: i.r0,
      r: i.r,
      startAngle: i.startAngle,
      endAngle: i.endAngle,
      clockwise: i.clockwise
    };
  }
};
function hC(e) {
  return e.startAngle != null && e.endAngle != null && e.startAngle === e.endAngle;
}
function u_(e) {
  return function(t) {
    var r = t ? "Arc" : "Angle";
    return function(i) {
      switch (i) {
        case "start":
        case "insideStart":
        case "end":
        case "insideEnd":
          return i + r;
        default:
          return i;
      }
    };
  }(e);
}
function gv(e, t, r, i, n, a, o, s) {
  var u = t.getItemVisual(r, "style");
  s || e.setShape("r", i.get(["itemStyle", "borderRadius"]) || 0), e.useStyle(u);
  var l = i.getShallow("cursor");
  l && e.attr("cursor", l);
  var f = s ? o ? n.r >= n.r0 ? "endArc" : "startArc" : n.endAngle >= n.startAngle ? "endAngle" : "startAngle" : o ? n.height >= 0 ? "bottom" : "top" : n.width >= 0 ? "right" : "left", h = Rp(i);
  ql(e, h, {
    labelFetcher: a,
    labelDataIndex: r,
    defaultText: YT(a.getData(), r),
    inheritColor: u.fill,
    defaultOpacity: u.opacity,
    defaultOutsidePosition: f
  });
  var c = e.getTextContent();
  if (s && c) {
    var v = i.get(["label", "position"]);
    e.textConfig.inside = v === "middle" ? !0 : null, aC(e, v === "outside" ? f : v, u_(o), i.get(["label", "rotate"]));
  }
  yw(c, h, a.getRawValue(r), function(_) {
    return XT(t, _);
  });
  var d = i.getModel(["emphasis"]);
  ap(e, d.get("focus"), d.get("blurScope"), d.get("disabled")), op(e, i), hC(n) && (e.style.fill = "none", e.style.stroke = "none", A(e.states, function(_) {
    _.style && (_.style.fill = _.style.stroke = "none");
  }));
}
function cC(e, t) {
  var r = e.get(["itemStyle", "borderColor"]);
  if (!r || r === "none")
    return 0;
  var i = e.get(["itemStyle", "borderWidth"]) || 0, n = isNaN(t.width) ? Number.MAX_VALUE : Math.abs(t.width), a = isNaN(t.height) ? Number.MAX_VALUE : Math.abs(t.height);
  return Math.min(i, n, a);
}
var vC = function() {
  function e() {
  }
  return e;
}(), _v = function(e) {
  k(t, e);
  function t(r) {
    var i = e.call(this, r) || this;
    return i.type = "largeBar", i;
  }
  return t.prototype.getDefaultShape = function() {
    return new vC();
  }, t.prototype.buildPath = function(r, i) {
    for (var n = i.points, a = this.baseDimIdx, o = 1 - this.baseDimIdx, s = [], u = [], l = this.barWidth, f = 0; f < n.length; f += 3)
      u[a] = l, u[o] = n[f + 2], s[a] = n[f + a], s[o] = n[f + o], r.rect(s[0], s[1], u[0], u[1]);
  }, t;
}(it);
function yv(e, t, r, i) {
  var n = e.getData(), a = n.getLayout("valueAxisHorizontal") ? 1 : 0, o = n.getLayout("largeDataIndices"), s = n.getLayout("size"), u = e.getModel("backgroundStyle"), l = n.getLayout("largeBackgroundPoints");
  if (l) {
    var f = new _v({
      shape: {
        points: l
      },
      incremental: !!i,
      silent: !0,
      z2: 0
    });
    f.baseDimIdx = a, f.largeDataIndices = o, f.barWidth = s, f.useStyle(u.getItemStyle()), t.add(f), r && r.push(f);
  }
  var h = new _v({
    shape: {
      points: n.getLayout("largePoints")
    },
    incremental: !!i,
    z2: 1
  });
  h.baseDimIdx = a, h.largeDataIndices = o, h.barWidth = s, t.add(h), h.useStyle(n.getVisual("style")), ot(h).seriesIndex = e.seriesIndex, e.get("silent") || (h.on("mousedown", mv), h.on("mousemove", mv)), r && r.push(h);
}
var mv = Go(function(e) {
  var t = this, r = dC(t, e.offsetX, e.offsetY);
  ot(t).dataIndex = r >= 0 ? r : null;
}, 30, !1);
function dC(e, t, r) {
  for (var i = e.baseDimIdx, n = 1 - i, a = e.shape.points, o = e.largeDataIndices, s = [], u = [], l = e.barWidth, f = 0, h = a.length / 3; f < h; f++) {
    var c = f * 3;
    if (u[i] = l, u[n] = a[c + 2], s[i] = a[c + i], s[n] = a[c + n], u[n] < 0 && (s[n] += u[n], u[n] = -u[n]), t >= s[0] && t <= s[0] + u[0] && r >= s[1] && r <= s[1] + u[1])
      return o[f];
  }
  return -1;
}
function l_(e, t, r) {
  if (o_(r, "cartesian2d")) {
    var i = t, n = r.getArea();
    return {
      x: e ? i.x : n.x,
      y: e ? n.y : i.y,
      width: e ? i.width : n.width,
      height: e ? n.height : i.height
    };
  } else {
    var n = r.getArea(), a = t;
    return {
      cx: n.cx,
      cy: n.cy,
      r0: e ? n.r0 : a.r0,
      r: e ? n.r : a.r,
      startAngle: e ? a.startAngle : 0,
      endAngle: e ? a.endAngle : Math.PI * 2
    };
  }
}
function pC(e, t, r) {
  var i = e.type === "polar" ? Jr : Dt;
  return new i({
    shape: l_(t, r, e),
    silent: !0,
    z2: 0
  });
}
const gC = sC;
function _C(e) {
  e.registerChartView(gC), e.registerSeriesModel(eC), e.registerLayout(e.PRIORITY.VISUAL.LAYOUT, _t(CT, "bar")), e.registerLayout(e.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, DT("bar")), e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, jT("bar")), e.registerAction({
    type: "changeAxisOrder",
    event: "changeAxisOrder",
    update: "update"
  }, function(t, r) {
    var i = t.componentType || "series";
    r.eachComponent({
      mainType: i,
      query: t
    }, function(n) {
      t.sortInfo && n.axis.setCategorySortInfo(t.sortInfo);
    });
  });
}
var La = Math.PI * 2, wv = Math.PI / 180;
function f_(e, t) {
  return Bn(e.getBoxLayoutParams(), {
    width: t.getWidth(),
    height: t.getHeight()
  });
}
function h_(e, t) {
  var r = f_(e, t), i = e.get("center"), n = e.get("radius");
  N(n) || (n = [0, n]), N(i) || (i = [i, i]);
  var a = ft(r.width, t.getWidth()), o = ft(r.height, t.getHeight()), s = Math.min(a, o), u = ft(i[0], a) + r.x, l = ft(i[1], o) + r.y, f = ft(n[0], s / 2), h = ft(n[1], s / 2);
  return {
    cx: u,
    cy: l,
    r0: f,
    r: h
  };
}
function yC(e, t, r) {
  t.eachSeriesByType(e, function(i) {
    var n = i.getData(), a = n.mapDimension("value"), o = f_(i, r), s = h_(i, r), u = s.cx, l = s.cy, f = s.r, h = s.r0, c = -i.get("startAngle") * wv, v = i.get("minAngle") * wv, d = 0;
    n.each(a, function(E) {
      !isNaN(E) && d++;
    });
    var _ = n.getSum(a), p = Math.PI / (_ || d) * 2, g = i.get("clockwise"), y = i.get("roseType"), m = i.get("stillShowZeroSum"), w = n.getDataExtent(a);
    w[0] = 0;
    var b = La, S = 0, T = c, x = g ? 1 : -1;
    if (n.setLayout({
      viewRect: o,
      r: f
    }), n.each(a, function(E, D) {
      var M;
      if (isNaN(E)) {
        n.setItemLayout(D, {
          angle: NaN,
          startAngle: NaN,
          endAngle: NaN,
          clockwise: g,
          cx: u,
          cy: l,
          r0: h,
          r: y ? NaN : f
        });
        return;
      }
      y !== "area" ? M = _ === 0 && m ? p : E * p : M = La / d, M < v ? (M = v, b -= v) : S += E;
      var P = T + x * M;
      n.setItemLayout(D, {
        angle: M,
        startAngle: T,
        endAngle: P,
        clockwise: g,
        cx: u,
        cy: l,
        r0: h,
        r: y ? Tm(E, w, [h, f]) : f
      }), T = P;
    }), b < La && d)
      if (b <= 1e-3) {
        var C = La / d;
        n.each(a, function(E, D) {
          if (!isNaN(E)) {
            var M = n.getItemLayout(D);
            M.angle = C, M.startAngle = c + x * D * C, M.endAngle = c + x * (D + 1) * C;
          }
        });
      } else
        p = b / S, T = c, n.each(a, function(E, D) {
          if (!isNaN(E)) {
            var M = n.getItemLayout(D), P = M.angle === v ? v : E * p;
            M.startAngle = T, M.endAngle = T + x * P, T += x * P;
          }
        });
  });
}
function mC(e) {
  return {
    seriesType: e,
    reset: function(t, r) {
      var i = r.findComponents({
        mainType: "legend"
      });
      if (!(!i || !i.length)) {
        var n = t.getData();
        n.filterSelf(function(a) {
          for (var o = n.getName(a), s = 0; s < i.length; s++)
            if (!i[s].isSelected(o))
              return !1;
          return !0;
        });
      }
    }
  };
}
var wC = Math.PI / 180;
function Sv(e, t, r, i, n, a, o, s, u, l) {
  if (e.length < 2)
    return;
  function f(_) {
    for (var p = _.rB, g = p * p, y = 0; y < _.list.length; y++) {
      var m = _.list[y], w = Math.abs(m.label.y - r), b = i + m.len, S = b * b, T = Math.sqrt((1 - Math.abs(w * w / g)) * S), x = t + (T + m.len2) * n, C = x - m.label.x, E = m.targetTextWidth - C * n;
      c_(m, E, !0), m.label.x = x;
    }
  }
  function h(_) {
    for (var p = {
      list: [],
      maxY: 0
    }, g = {
      list: [],
      maxY: 0
    }, y = 0; y < _.length; y++)
      if (_[y].labelAlignTo === "none") {
        var m = _[y], w = m.label.y > r ? g : p, b = Math.abs(m.label.y - r);
        if (b >= w.maxY) {
          var S = m.label.x - t - m.len2 * n, T = i + m.len, x = Math.abs(S) < T ? Math.sqrt(b * b / (1 - S * S / T / T)) : T;
          w.rB = x, w.maxY = b;
        }
        w.list.push(m);
      }
    f(p), f(g);
  }
  for (var c = e.length, v = 0; v < c; v++)
    if (e[v].position === "outer" && e[v].labelAlignTo === "labelLine") {
      var d = e[v].label.x - l;
      e[v].linePoints[1][0] += d, e[v].label.x = l;
    }
  zT(e, u, u + o) && h(e);
}
function SC(e, t, r, i, n, a, o, s) {
  for (var u = [], l = [], f = Number.MAX_VALUE, h = -Number.MAX_VALUE, c = 0; c < e.length; c++) {
    var v = e[c].label;
    ru(e[c]) || (v.x < t ? (f = Math.min(f, v.x), u.push(e[c])) : (h = Math.max(h, v.x), l.push(e[c])));
  }
  for (var c = 0; c < e.length; c++) {
    var d = e[c];
    if (!ru(d) && d.linePoints) {
      if (d.labelStyleWidth != null)
        continue;
      var v = d.label, _ = d.linePoints, p = void 0;
      d.labelAlignTo === "edge" ? v.x < t ? p = _[2][0] - d.labelDistance - o - d.edgeDistance : p = o + n - d.edgeDistance - _[2][0] - d.labelDistance : d.labelAlignTo === "labelLine" ? v.x < t ? p = f - o - d.bleedMargin : p = o + n - h - d.bleedMargin : v.x < t ? p = v.x - o - d.bleedMargin : p = o + n - v.x - d.bleedMargin, d.targetTextWidth = p, c_(d, p);
    }
  }
  Sv(l, t, r, i, 1, n, a, o, s, h), Sv(u, t, r, i, -1, n, a, o, s, f);
  for (var c = 0; c < e.length; c++) {
    var d = e[c];
    if (!ru(d) && d.linePoints) {
      var v = d.label, _ = d.linePoints, g = d.labelAlignTo === "edge", y = v.style.padding, m = y ? y[1] + y[3] : 0, w = v.style.backgroundColor ? 0 : m, b = d.rect.width + w, S = _[1][0] - _[2][0];
      g ? v.x < t ? _[2][0] = o + d.edgeDistance + b + d.labelDistance : _[2][0] = o + n - d.edgeDistance - b - d.labelDistance : (v.x < t ? _[2][0] = v.x + d.labelDistance : _[2][0] = v.x - d.labelDistance, _[1][0] = _[2][0] + S), _[1][1] = _[2][1] = v.y;
    }
  }
}
function c_(e, t, r) {
  if (r === void 0 && (r = !1), e.labelStyleWidth == null) {
    var i = e.label, n = i.style, a = e.rect, o = n.backgroundColor, s = n.padding, u = s ? s[1] + s[3] : 0, l = n.overflow, f = a.width + (o ? 0 : u);
    if (t < f || r) {
      var h = a.height;
      if (l && l.match("break")) {
        i.setStyle("backgroundColor", null), i.setStyle("width", t - u);
        var c = i.getBoundingRect();
        i.setStyle("width", Math.ceil(c.width)), i.setStyle("backgroundColor", o);
      } else {
        var v = t - u, d = t < f ? v : r ? v > e.unconstrainedWidth ? null : v : null;
        i.setStyle("width", d);
      }
      var _ = i.getBoundingRect();
      a.width = _.width;
      var p = (i.style.margin || 0) + 2.1;
      a.height = _.height + p, a.y -= (a.height - h) / 2;
    }
  }
}
function ru(e) {
  return e.position === "center";
}
function bC(e) {
  var t = e.getData(), r = [], i, n, a = !1, o = (e.get("minShowLabelAngle") || 0) * wC, s = t.getLayout("viewRect"), u = t.getLayout("r"), l = s.width, f = s.x, h = s.y, c = s.height;
  function v(S) {
    S.ignore = !0;
  }
  function d(S) {
    if (!S.ignore)
      return !0;
    for (var T in S.states)
      if (S.states[T].ignore === !1)
        return !0;
    return !1;
  }
  t.each(function(S) {
    var T = t.getItemGraphicEl(S), x = T.shape, C = T.getTextContent(), E = T.getTextGuideLine(), D = t.getItemModel(S), M = D.getModel("label"), P = M.get("position") || D.get(["emphasis", "label", "position"]), L = M.get("distanceToLabelLine"), I = M.get("alignTo"), R = ft(M.get("edgeDistance"), l), $ = M.get("bleedMargin"), B = D.getModel("labelLine"), W = B.get("length");
    W = ft(W, l);
    var K = B.get("length2");
    if (K = ft(K, l), Math.abs(x.endAngle - x.startAngle) < o) {
      A(C.states, v), C.ignore = !0;
      return;
    }
    if (!!d(C)) {
      var rt = (x.startAngle + x.endAngle) / 2, U = Math.cos(rt), ut = Math.sin(rt), wt, Zt, be, te;
      i = x.cx, n = x.cy;
      var Kt = P === "inside" || P === "inner";
      if (P === "center")
        wt = x.cx, Zt = x.cy, te = "center";
      else {
        var bt = (Kt ? (x.r + x.r0) / 2 * U : x.r * U) + i, pt = (Kt ? (x.r + x.r0) / 2 * ut : x.r * ut) + n;
        if (wt = bt + U * 3, Zt = pt + ut * 3, !Kt) {
          var V = bt + U * (W + u - x.r), Y = pt + ut * (W + u - x.r), xe = V + (U < 0 ? -1 : 1) * K, St = Y;
          I === "edge" ? wt = U < 0 ? f + R : f + l - R : wt = xe + (U < 0 ? -L : L), Zt = St, be = [[bt, pt], [V, Y], [xe, St]];
        }
        te = Kt ? "center" : I === "edge" ? U > 0 ? "right" : "left" : U > 0 ? "left" : "right";
      }
      var Ke = Math.PI, Ve = 0, Vi = M.get("rotate");
      if (dt(Vi))
        Ve = Vi * (Ke / 180);
      else if (P === "center")
        Ve = 0;
      else if (Vi === "radial" || Vi === !0) {
        var M_ = U < 0 ? -rt + Ke : -rt;
        Ve = M_;
      } else if (Vi === "tangential" && P !== "outside" && P !== "outer") {
        var ei = Math.atan2(U, ut);
        ei < 0 && (ei = Ke * 2 + ei);
        var P_ = ut > 0;
        P_ && (ei = Ke + ei), Ve = ei - Ke;
      }
      if (a = !!Ve, C.x = wt, C.y = Zt, C.rotation = Ve, C.setStyle({
        verticalAlign: "middle"
      }), Kt) {
        C.setStyle({
          align: te
        });
        var Uo = C.states.select;
        Uo && (Uo.x += C.x, Uo.y += C.y);
      } else {
        var Hi = C.getBoundingRect().clone();
        Hi.applyTransform(C.getComputedTransform());
        var Df = (C.style.margin || 0) + 2.1;
        Hi.y -= Df / 2, Hi.height += Df, r.push({
          label: C,
          labelLine: E,
          position: P,
          len: W,
          len2: K,
          minTurnAngle: B.get("minTurnAngle"),
          maxSurfaceAngle: B.get("maxSurfaceAngle"),
          surfaceNormal: new G(U, ut),
          linePoints: be,
          textAlign: te,
          labelDistance: L,
          labelAlignTo: I,
          edgeDistance: R,
          bleedMargin: $,
          rect: Hi,
          unconstrainedWidth: Hi.width,
          labelStyleWidth: C.style.width
        });
      }
      T.setTextConfig({
        inside: Kt
      });
    }
  }), !a && e.get("avoidLabelOverlap") && SC(r, i, n, u, l, c, f, h);
  for (var _ = 0; _ < r.length; _++) {
    var p = r[_], g = p.label, y = p.labelLine, m = isNaN(g.x) || isNaN(g.y);
    if (g) {
      g.setStyle({
        align: p.textAlign
      }), m && (A(g.states, v), g.ignore = !0);
      var w = g.states.select;
      w && (w.x += g.x, w.y += g.y);
    }
    if (y) {
      var b = p.linePoints;
      m || !b ? (A(y.states, v), y.ignore = !0) : (LT(b, p.minTurnAngle), IT(b, p.surfaceNormal, p.maxSurfaceAngle), y.setShape({
        points: b
      }), g.__hostTarget.textGuideLineConfig = {
        anchor: new G(b[0][0], b[0][1])
      });
    }
  }
}
function Ia(e, t, r) {
  var i = e.get("borderRadius");
  if (i == null)
    return r ? {
      cornerRadius: 0
    } : null;
  N(i) || (i = [i, i, i, i]);
  var n = Math.abs(t.r || 0 - t.r0 || 0);
  return {
    cornerRadius: q(i, function(a) {
      return Ei(a, n);
    })
  };
}
var xC = function(e) {
  k(t, e);
  function t(r, i, n) {
    var a = e.call(this) || this;
    a.z2 = 2;
    var o = new Ft();
    return a.setTextContent(o), a.updateData(r, i, n, !0), a;
  }
  return t.prototype.updateData = function(r, i, n, a) {
    var o = this, s = r.hostModel, u = r.getItemModel(i), l = u.getModel("emphasis"), f = r.getItemLayout(i), h = O(Ia(u.getModel("itemStyle"), f, !0), f);
    if (isNaN(h.startAngle)) {
      o.setShape(h);
      return;
    }
    if (a) {
      o.setShape(h);
      var c = s.getShallow("animationType");
      s.ecModel.ssr ? (Ne(o, {
        scaleX: 0,
        scaleY: 0
      }, s, {
        dataIndex: i,
        isFrom: !0
      }), o.originX = h.cx, o.originY = h.cy) : c === "scale" ? (o.shape.r = f.r0, Ne(o, {
        shape: {
          r: f.r
        }
      }, s, i)) : n != null ? (o.setShape({
        startAngle: n,
        endAngle: n
      }), Ne(o, {
        shape: {
          startAngle: f.startAngle,
          endAngle: f.endAngle
        }
      }, s, i)) : (o.shape.endAngle = f.startAngle, me(o, {
        shape: {
          endAngle: f.endAngle
        }
      }, s, i));
    } else
      Ep(o), me(o, {
        shape: h
      }, s, i);
    o.useStyle(r.getItemVisual(i, "style")), op(o, u);
    var v = (f.startAngle + f.endAngle) / 2, d = s.get("selectedOffset"), _ = Math.cos(v) * d, p = Math.sin(v) * d, g = u.getShallow("cursor");
    g && o.attr("cursor", g), this._updateLabel(s, r, i), o.ensureState("emphasis").shape = O({
      r: f.r + (l.get("scale") && l.get("scaleSize") || 0)
    }, Ia(l.getModel("itemStyle"), f)), O(o.ensureState("select"), {
      x: _,
      y: p,
      shape: Ia(u.getModel(["select", "itemStyle"]), f)
    }), O(o.ensureState("blur"), {
      shape: Ia(u.getModel(["blur", "itemStyle"]), f)
    });
    var y = o.getTextGuideLine(), m = o.getTextContent();
    y && O(y.ensureState("select"), {
      x: _,
      y: p
    }), O(m.ensureState("select"), {
      x: _,
      y: p
    }), ap(this, l.get("focus"), l.get("blurScope"), l.get("disabled"));
  }, t.prototype._updateLabel = function(r, i, n) {
    var a = this, o = i.getItemModel(n), s = o.getModel("labelLine"), u = i.getItemVisual(n, "style"), l = u && u.fill, f = u && u.opacity;
    ql(a, Rp(o), {
      labelFetcher: i.hostModel,
      labelDataIndex: n,
      inheritColor: l,
      defaultOpacity: f,
      defaultText: r.getFormattedLabel(n, "normal") || i.getName(n)
    });
    var h = a.getTextContent();
    a.setTextConfig({
      position: null,
      rotation: null
    }), h.attr({
      z2: 10
    });
    var c = r.get(["label", "position"]);
    if (c !== "outside" && c !== "outer")
      a.removeTextGuideLine();
    else {
      var v = this.getTextGuideLine();
      v || (v = new No(), this.setTextGuideLine(v)), OT(this, NT(o), {
        stroke: l,
        opacity: yn(s.get(["lineStyle", "opacity"]), f, 1)
      });
    }
  }, t;
}(Jr), TC = function(e) {
  k(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.ignoreLabelLineUpdate = !0, r;
  }
  return t.prototype.render = function(r, i, n, a) {
    var o = r.getData(), s = this._data, u = this.group, l;
    if (!s && o.count() > 0) {
      for (var f = o.getItemLayout(0), h = 1; isNaN(f && f.startAngle) && h < o.count(); ++h)
        f = o.getItemLayout(h);
      f && (l = f.startAngle);
    }
    if (this._emptyCircleSector && u.remove(this._emptyCircleSector), o.count() === 0 && r.get("showEmptyCircle")) {
      var c = new Jr({
        shape: h_(r, n)
      });
      c.useStyle(r.getModel("emptyCircleStyle").getItemStyle()), this._emptyCircleSector = c, u.add(c);
    }
    o.diff(s).add(function(v) {
      var d = new xC(o, v, l);
      o.setItemGraphicEl(v, d), u.add(d);
    }).update(function(v, d) {
      var _ = s.getItemGraphicEl(d);
      _.updateData(o, v, l), _.off("click"), u.add(_), o.setItemGraphicEl(v, _);
    }).remove(function(v) {
      var d = s.getItemGraphicEl(v);
      lo(d, r, v);
    }).execute(), bC(r), r.get("animationTypeUpdate") !== "expansion" && (this._data = o);
  }, t.prototype.dispose = function() {
  }, t.prototype.containPoint = function(r, i) {
    var n = i.getData(), a = n.getItemLayout(0);
    if (a) {
      var o = r[0] - a.cx, s = r[1] - a.cy, u = Math.sqrt(o * o + s * s);
      return u <= a.r && u >= a.r0;
    }
  }, t.type = "pie", t;
}(Yr);
const CC = TC;
function DC(e, t, r) {
  t = N(t) && {
    coordDimensions: t
  } || O({
    encodeDefine: e.getEncode()
  }, t);
  var i = e.getSource(), n = Qg(i, t).dimensions, a = new Kg(n, e);
  return a.initData(i, r), a;
}
var AC = function() {
  function e(t, r) {
    this._getDataWithEncodedVisual = t, this._getRawData = r;
  }
  return e.prototype.getAllNames = function() {
    var t = this._getRawData();
    return t.mapArray(t.getName);
  }, e.prototype.containName = function(t) {
    var r = this._getRawData();
    return r.indexOfName(t) >= 0;
  }, e.prototype.indexOfName = function(t) {
    var r = this._getDataWithEncodedVisual();
    return r.indexOfName(t);
  }, e.prototype.getItemVisual = function(t, r) {
    var i = this._getDataWithEncodedVisual();
    return i.getItemVisual(t, r);
  }, e;
}();
const EC = AC;
var MC = function(e) {
  k(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.init = function(r) {
    e.prototype.init.apply(this, arguments), this.legendVisualProvider = new EC(at(this.getData, this), at(this.getRawData, this)), this._defaultLabelLine(r);
  }, t.prototype.mergeOption = function() {
    e.prototype.mergeOption.apply(this, arguments);
  }, t.prototype.getInitialData = function() {
    return DC(this, {
      coordDimensions: ["value"],
      encodeDefaulter: _t(Jw, this)
    });
  }, t.prototype.getDataParams = function(r) {
    var i = this.getData(), n = e.prototype.getDataParams.call(this, r), a = [];
    return i.each(i.mapDimension("value"), function(o) {
      a.push(o);
    }), n.percent = Dm(a, r, i.hostModel.get("percentPrecision")), n.$vars.push("percent"), n;
  }, t.prototype._defaultLabelLine = function(r) {
    Nu(r, "labelLine", ["show"]);
    var i = r.labelLine, n = r.emphasis.labelLine;
    i.show = i.show && r.label.show, n.show = n.show && r.emphasis.label.show;
  }, t.type = "series.pie", t.defaultOption = {
    z: 2,
    legendHoverLink: !0,
    colorBy: "data",
    center: ["50%", "50%"],
    radius: [0, "75%"],
    clockwise: !0,
    startAngle: 90,
    minAngle: 0,
    minShowLabelAngle: 0,
    selectedOffset: 10,
    percentPrecision: 2,
    stillShowZeroSum: !0,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: null,
    height: null,
    label: {
      rotate: 0,
      show: !0,
      overflow: "truncate",
      position: "outer",
      alignTo: "none",
      edgeDistance: "25%",
      bleedMargin: 10,
      distanceToLabelLine: 5
    },
    labelLine: {
      show: !0,
      length: 15,
      length2: 15,
      smooth: !1,
      minTurnAngle: 90,
      maxSurfaceAngle: 90,
      lineStyle: {
        width: 1,
        type: "solid"
      }
    },
    itemStyle: {
      borderWidth: 1,
      borderJoin: "round"
    },
    showEmptyCircle: !0,
    emptyCircleStyle: {
      color: "lightgray",
      opacity: 1
    },
    labelLayout: {
      hideOverlap: !0
    },
    emphasis: {
      scale: !0,
      scaleSize: 5
    },
    avoidLabelOverlap: !0,
    animationType: "expansion",
    animationDuration: 1e3,
    animationTypeUpdate: "transition",
    animationEasingUpdate: "cubicInOut",
    animationDurationUpdate: 500,
    animationEasing: "cubicInOut"
  }, t;
}(Qr);
const PC = MC;
function LC(e) {
  return {
    seriesType: e,
    reset: function(t, r) {
      var i = t.getData();
      i.filterSelf(function(n) {
        var a = i.mapDimension("value"), o = i.get(a, n);
        return !(dt(o) && !isNaN(o) && o < 0);
      });
    }
  };
}
function v_(e) {
  e.registerChartView(CC), e.registerSeriesModel(PC), Hb("pie", e.registerAction), e.registerLayout(_t(yC, "pie")), e.registerProcessor(mC("pie")), e.registerProcessor(LC("pie"));
}
function bv(e, t, r) {
  r = r || {};
  var i = e.coordinateSystem, n = t.axis, a = {}, o = n.getAxesOnZeroOf()[0], s = n.position, u = o ? "onZero" : s, l = n.dim, f = i.getRect(), h = [f.x, f.x + f.width, f.y, f.y + f.height], c = {
    left: 0,
    right: 1,
    top: 0,
    bottom: 1,
    onZero: 2
  }, v = t.get("offset") || 0, d = l === "x" ? [h[2] - v, h[3] + v] : [h[0] - v, h[1] + v];
  if (o) {
    var _ = o.toGlobalCoord(o.dataToCoord(0));
    d[c.onZero] = Math.max(Math.min(_, d[1]), d[0]);
  }
  a.position = [l === "y" ? d[c[u]] : h[0], l === "x" ? d[c[u]] : h[3]], a.rotation = Math.PI / 2 * (l === "x" ? 0 : 1);
  var p = {
    top: -1,
    bottom: 1,
    left: -1,
    right: 1
  };
  a.labelDirection = a.tickDirection = a.nameDirection = p[s], a.labelOffset = o ? d[c[s]] - d[c.onZero] : 0, t.get(["axisTick", "inside"]) && (a.tickDirection = -a.tickDirection), Zr(r.labelInside, t.get(["axisLabel", "inside"])) && (a.labelDirection = -a.labelDirection);
  var g = t.get(["axisLabel", "rotate"]);
  return a.labelRotate = u === "top" ? -g : g, a.z2 = 1, a;
}
var ur = Math.PI, Xr = function() {
  function e(t, r) {
    this.group = new ye(), this.opt = r, this.axisModel = t, ct(r, {
      labelOffset: 0,
      nameDirection: 1,
      tickDirection: 1,
      labelDirection: 1,
      silent: !0,
      handleAutoShown: function() {
        return !0;
      }
    });
    var i = new ye({
      x: r.position[0],
      y: r.position[1],
      rotation: r.rotation
    });
    i.updateTransform(), this._transformGroup = i;
  }
  return e.prototype.hasBuilder = function(t) {
    return !!xv[t];
  }, e.prototype.add = function(t) {
    xv[t](this.opt, this.axisModel, this.group, this._transformGroup);
  }, e.prototype.getGroup = function() {
    return this.group;
  }, e.innerTextLayout = function(t, r, i) {
    var n = Ed(r - t), a, o;
    return no(n) ? (o = i > 0 ? "top" : "bottom", a = "center") : no(n - ur) ? (o = i > 0 ? "bottom" : "top", a = "center") : (o = "middle", n > 0 && n < ur ? a = i > 0 ? "right" : "left" : a = i > 0 ? "left" : "right"), {
      rotation: n,
      textAlign: a,
      textVerticalAlign: o
    };
  }, e.makeAxisEventDataBase = function(t) {
    var r = {
      componentType: t.mainType,
      componentIndex: t.componentIndex
    };
    return r[t.mainType + "Index"] = t.componentIndex, r;
  }, e.isLabelSilent = function(t) {
    var r = t.get("tooltip");
    return t.get("silent") || !(t.get("triggerEvent") || r && r.show);
  }, e;
}(), xv = {
  axisLine: function(e, t, r, i) {
    var n = t.get(["axisLine", "show"]);
    if (n === "auto" && e.handleAutoShown && (n = e.handleAutoShown("axisLine")), !!n) {
      var a = t.axis.getExtent(), o = i.transform, s = [a[0], 0], u = [a[1], 0];
      o && (Re(s, s, o), Re(u, u, o));
      var l = O({
        lineCap: "round"
      }, t.getModel(["axisLine", "lineStyle"]).getLineStyle()), f = new Zn({
        subPixelOptimize: !0,
        shape: {
          x1: s[0],
          y1: s[1],
          x2: u[0],
          y2: u[1]
        },
        style: l,
        strokeContainThreshold: e.strokeContainThreshold || 5,
        silent: !0,
        z2: 1
      });
      f.anid = "line", r.add(f);
      var h = t.get(["axisLine", "symbol"]);
      if (h != null) {
        var c = t.get(["axisLine", "symbolSize"]);
        z(h) && (h = [h, h]), (z(c) || dt(c)) && (c = [c, c]);
        var v = ex(t.get(["axisLine", "symbolOffset"]) || 0, c), d = c[0], _ = c[1];
        A([{
          rotate: e.rotation + Math.PI / 2,
          offset: v[0],
          r: 0
        }, {
          rotate: e.rotation - Math.PI / 2,
          offset: v[1],
          r: Math.sqrt((s[0] - u[0]) * (s[0] - u[0]) + (s[1] - u[1]) * (s[1] - u[1]))
        }], function(p, g) {
          if (h[g] !== "none" && h[g] != null) {
            var y = ff(h[g], -d / 2, -_ / 2, d, _, l.stroke, !0), m = p.r + p.offset;
            y.attr({
              rotation: p.rotate,
              x: s[0] + m * Math.cos(e.rotation),
              y: s[1] - m * Math.sin(e.rotation),
              silent: !0,
              z2: 11
            }), r.add(y);
          }
        });
      }
    }
  },
  axisTickLabel: function(e, t, r, i) {
    var n = OC(r, i, t, e), a = kC(r, i, t, e);
    if (RC(t, a, n), NC(r, i, t, e.tickDirection), t.get(["axisLabel", "hideOverlap"])) {
      var o = kT(q(a, function(s) {
        return {
          label: s,
          priority: s.z2,
          defaultAttr: {
            ignore: s.ignore
          }
        };
      }));
      FT(o);
    }
  },
  axisName: function(e, t, r, i) {
    var n = Zr(e.axisName, t.get("name"));
    if (!!n) {
      var a = t.get("nameLocation"), o = e.nameDirection, s = t.getModel("nameTextStyle"), u = t.get("nameGap") || 0, l = t.axis.getExtent(), f = l[0] > l[1] ? -1 : 1, h = [
        a === "start" ? l[0] - f * u : a === "end" ? l[1] + f * u : (l[0] + l[1]) / 2,
        Cv(a) ? e.labelOffset + o * u : 0
      ], c, v = t.get("nameRotate");
      v != null && (v = v * ur / 180);
      var d;
      Cv(a) ? c = Xr.innerTextLayout(
        e.rotation,
        v != null ? v : e.rotation,
        o
      ) : (c = IC(e.rotation, a, v || 0, l), d = e.axisNameAvailableWidth, d != null && (d = Math.abs(d / Math.sin(c.rotation)), !isFinite(d) && (d = null)));
      var _ = s.getFont(), p = t.get("nameTruncate", !0) || {}, g = p.ellipsis, y = Zr(e.nameTruncateMaxWidth, p.maxWidth, d), m = new Ft({
        x: h[0],
        y: h[1],
        rotation: c.rotation,
        silent: Xr.isLabelSilent(t),
        style: hr(s, {
          text: n,
          font: _,
          overflow: "truncate",
          width: y,
          ellipsis: g,
          fill: s.getTextColor() || t.get(["axisLine", "lineStyle", "color"]),
          align: s.get("align") || c.textAlign,
          verticalAlign: s.get("verticalAlign") || c.textVerticalAlign
        }),
        z2: 1
      });
      if (Yl({
        el: m,
        componentModel: t,
        itemName: n
      }), m.__fullText = n, m.anid = "name", t.get("triggerEvent")) {
        var w = Xr.makeAxisEventDataBase(t);
        w.targetType = "axisName", w.name = n, ot(m).eventData = w;
      }
      i.add(m), m.updateTransform(), r.add(m), m.decomposeTransform();
    }
  }
};
function IC(e, t, r, i) {
  var n = Ed(r - e), a, o, s = i[0] > i[1], u = t === "start" && !s || t !== "start" && s;
  return no(n - ur / 2) ? (o = u ? "bottom" : "top", a = "center") : no(n - ur * 1.5) ? (o = u ? "top" : "bottom", a = "center") : (o = "middle", n < ur * 1.5 && n > ur / 2 ? a = u ? "left" : "right" : a = u ? "right" : "left"), {
    rotation: n,
    textAlign: a,
    textVerticalAlign: o
  };
}
function RC(e, t, r) {
  if (!MT(e.axis)) {
    var i = e.get(["axisLabel", "showMinLabel"]), n = e.get(["axisLabel", "showMaxLabel"]);
    t = t || [], r = r || [];
    var a = t[0], o = t[1], s = t[t.length - 1], u = t[t.length - 2], l = r[0], f = r[1], h = r[r.length - 1], c = r[r.length - 2];
    i === !1 ? (ie(a), ie(l)) : Tv(a, o) && (i ? (ie(o), ie(f)) : (ie(a), ie(l))), n === !1 ? (ie(s), ie(h)) : Tv(u, s) && (n ? (ie(u), ie(c)) : (ie(s), ie(h)));
  }
}
function ie(e) {
  e && (e.ignore = !0);
}
function Tv(e, t) {
  var r = e && e.getBoundingRect().clone(), i = t && t.getBoundingRect().clone();
  if (!(!r || !i)) {
    var n = Dl([]);
    return Al(n, n, -e.rotation), r.applyTransform(Di([], n, e.getLocalTransform())), i.applyTransform(Di([], n, t.getLocalTransform())), r.intersect(i);
  }
}
function Cv(e) {
  return e === "middle" || e === "center";
}
function d_(e, t, r, i, n) {
  for (var a = [], o = [], s = [], u = 0; u < e.length; u++) {
    var l = e[u].coord;
    o[0] = l, o[1] = 0, s[0] = l, s[1] = r, t && (Re(o, o, t), Re(s, s, t));
    var f = new Zn({
      subPixelOptimize: !0,
      shape: {
        x1: o[0],
        y1: o[1],
        x2: s[0],
        y2: s[1]
      },
      style: i,
      z2: 2,
      autoBatch: !0,
      silent: !0
    });
    f.anid = n + "_" + e[u].tickValue, a.push(f);
  }
  return a;
}
function OC(e, t, r, i) {
  var n = r.axis, a = r.getModel("axisTick"), o = a.get("show");
  if (o === "auto" && i.handleAutoShown && (o = i.handleAutoShown("axisTick")), !(!o || n.scale.isBlank())) {
    for (var s = a.getModel("lineStyle"), u = i.tickDirection * a.get("length"), l = n.getTicksCoords(), f = d_(l, t.transform, u, ct(s.getLineStyle(), {
      stroke: r.get(["axisLine", "lineStyle", "color"])
    }), "ticks"), h = 0; h < f.length; h++)
      e.add(f[h]);
    return f;
  }
}
function NC(e, t, r, i) {
  var n = r.axis, a = r.getModel("minorTick");
  if (!(!a.get("show") || n.scale.isBlank())) {
    var o = n.getMinorTicksCoords();
    if (!!o.length)
      for (var s = a.getModel("lineStyle"), u = i * a.get("length"), l = ct(s.getLineStyle(), ct(r.getModel("axisTick").getLineStyle(), {
        stroke: r.get(["axisLine", "lineStyle", "color"])
      })), f = 0; f < o.length; f++)
        for (var h = d_(o[f], t.transform, u, l, "minorticks_" + f), c = 0; c < h.length; c++)
          e.add(h[c]);
  }
}
function kC(e, t, r, i) {
  var n = r.axis, a = Zr(i.axisLabelShow, r.get(["axisLabel", "show"]));
  if (!(!a || n.scale.isBlank())) {
    var o = r.getModel("axisLabel"), s = o.get("margin"), u = n.getViewLabels(), l = (Zr(i.labelRotate, o.get("rotate")) || 0) * ur / 180, f = Xr.innerTextLayout(i.rotation, l, i.labelDirection), h = r.getCategories && r.getCategories(!0), c = [], v = Xr.isLabelSilent(r), d = r.get("triggerEvent");
    return A(u, function(_, p) {
      var g = n.scale.type === "ordinal" ? n.scale.getRawOrdinalNumber(_.tickValue) : _.tickValue, y = _.formattedLabel, m = _.rawLabel, w = o;
      if (h && h[g]) {
        var b = h[g];
        F(b) && b.textStyle && (w = new It(b.textStyle, o, r.ecModel));
      }
      var S = w.getTextColor() || r.get(["axisLine", "lineStyle", "color"]), T = n.dataToCoord(g), x = new Ft({
        x: T,
        y: i.labelOffset + i.labelDirection * s,
        rotation: f.rotation,
        silent: v,
        z2: 10 + (_.level || 0),
        style: hr(w, {
          text: y,
          align: w.getShallow("align", !0) || f.textAlign,
          verticalAlign: w.getShallow("verticalAlign", !0) || w.getShallow("baseline", !0) || f.textVerticalAlign,
          fill: J(S) ? S(
            n.type === "category" ? m : n.type === "value" ? g + "" : g,
            p
          ) : S
        })
      });
      if (x.anid = "label_" + g, d) {
        var C = Xr.makeAxisEventDataBase(r);
        C.targetType = "axisLabel", C.value = m, C.tickIndex = p, n.type === "category" && (C.dataIndex = g), ot(x).eventData = C;
      }
      t.add(x), x.updateTransform(), c.push(x), e.add(x), x.decomposeTransform();
    }), c;
  }
}
const BC = Xr;
function zC(e, t) {
  var r = {
    axesInfo: {},
    seriesInvolved: !1,
    coordSysAxesInfo: {},
    coordSysMap: {}
  };
  return FC(r, e, t), r.seriesInvolved && HC(r, e), r;
}
function FC(e, t, r) {
  var i = t.getComponent("tooltip"), n = t.getComponent("axisPointer"), a = n.get("link", !0) || [], o = [];
  A(r.getCoordinateSystems(), function(s) {
    if (!s.axisPointerEnabled)
      return;
    var u = Wn(s.model), l = e.coordSysAxesInfo[u] = {};
    e.coordSysMap[u] = s;
    var f = s.model, h = f.getModel("tooltip", i);
    if (A(s.getAxes(), _t(_, !1, null)), s.getTooltipAxes && i && h.get("show")) {
      var c = h.get("trigger") === "axis", v = h.get(["axisPointer", "type"]) === "cross", d = s.getTooltipAxes(h.get(["axisPointer", "axis"]));
      (c || v) && A(d.baseAxes, _t(_, v ? "cross" : !0, c)), v && A(d.otherAxes, _t(_, "cross", !1));
    }
    function _(p, g, y) {
      var m = y.model.getModel("axisPointer", n), w = m.get("show");
      if (!(!w || w === "auto" && !p && !fl(m))) {
        g == null && (g = m.get("triggerTooltip")), m = p ? VC(y, h, n, t, p, g) : m;
        var b = m.get("snap"), S = Wn(y.model), T = g || b || y.type === "category", x = e.axesInfo[S] = {
          key: S,
          axis: y,
          coordSys: s,
          axisPointerModel: m,
          triggerTooltip: g,
          involveSeries: T,
          snap: b,
          useHandle: fl(m),
          seriesModels: [],
          linkGroup: null
        };
        l[S] = x, e.seriesInvolved = e.seriesInvolved || T;
        var C = GC(a, y);
        if (C != null) {
          var E = o[C] || (o[C] = {
            axesInfo: {}
          });
          E.axesInfo[S] = x, E.mapper = a[C].mapper, x.linkGroup = E;
        }
      }
    }
  });
}
function VC(e, t, r, i, n, a) {
  var o = t.getModel("axisPointer"), s = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], u = {};
  A(s, function(c) {
    u[c] = j(o.get(c));
  }), u.snap = e.type !== "category" && !!a, o.get("type") === "cross" && (u.type = "line");
  var l = u.label || (u.label = {});
  if (l.show == null && (l.show = !1), n === "cross") {
    var f = o.get(["label", "show"]);
    if (l.show = f != null ? f : !0, !a) {
      var h = u.lineStyle = o.get("crossStyle");
      h && ct(l, h.textStyle);
    }
  }
  return e.model.getModel("axisPointer", new It(u, r, i));
}
function HC(e, t) {
  t.eachSeries(function(r) {
    var i = r.coordinateSystem, n = r.get(["tooltip", "trigger"], !0), a = r.get(["tooltip", "show"], !0);
    !i || n === "none" || n === !1 || n === "item" || a === !1 || r.get(["axisPointer", "show"], !0) === !1 || A(e.coordSysAxesInfo[Wn(i.model)], function(o) {
      var s = o.axis;
      i.getAxis(s.dim) === s && (o.seriesModels.push(r), o.seriesDataCount == null && (o.seriesDataCount = 0), o.seriesDataCount += r.getData().count());
    });
  });
}
function GC(e, t) {
  for (var r = t.model, i = t.dim, n = 0; n < e.length; n++) {
    var a = e[n] || {};
    if (iu(a[i + "AxisId"], r.id) || iu(a[i + "AxisIndex"], r.componentIndex) || iu(a[i + "AxisName"], r.name))
      return n;
  }
}
function iu(e, t) {
  return e === "all" || N(e) && nt(e, t) >= 0 || e === t;
}
function WC(e) {
  var t = _f(e);
  if (!!t) {
    var r = t.axisPointerModel, i = t.axis.scale, n = r.option, a = r.get("status"), o = r.get("value");
    o != null && (o = i.parse(o));
    var s = fl(r);
    a == null && (n.status = s ? "show" : "hide");
    var u = i.getExtent().slice();
    u[0] > u[1] && u.reverse(), (o == null || o > u[1]) && (o = u[1]), o < u[0] && (o = u[0]), n.value = o, s && (n.status = t.axis.scale.isBlank() ? "hide" : "show");
  }
}
function _f(e) {
  var t = (e.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
  return t && t.axesInfo[Wn(e)];
}
function $C(e) {
  var t = _f(e);
  return t && t.axisPointerModel;
}
function fl(e) {
  return !!e.get(["handle", "show"]);
}
function Wn(e) {
  return e.type + "||" + e.id;
}
var nu = {}, UC = function(e) {
  k(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.type = t.type, r;
  }
  return t.prototype.render = function(r, i, n, a) {
    this.axisPointerClass && WC(r), e.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(r, n, !0);
  }, t.prototype.updateAxisPointer = function(r, i, n, a) {
    this._doUpdateAxisPointerClass(r, n, !1);
  }, t.prototype.remove = function(r, i) {
    var n = this._axisPointer;
    n && n.remove(i);
  }, t.prototype.dispose = function(r, i) {
    this._disposeAxisPointer(i), e.prototype.dispose.apply(this, arguments);
  }, t.prototype._doUpdateAxisPointerClass = function(r, i, n) {
    var a = t.getAxisPointerClass(this.axisPointerClass);
    if (!!a) {
      var o = $C(r);
      o ? (this._axisPointer || (this._axisPointer = new a())).render(r, o, i, n) : this._disposeAxisPointer(i);
    }
  }, t.prototype._disposeAxisPointer = function(r) {
    this._axisPointer && this._axisPointer.dispose(r), this._axisPointer = null;
  }, t.registerAxisPointerClass = function(r, i) {
    if (process.env.NODE_ENV !== "production" && nu[r])
      throw new Error("axisPointer " + r + " exists");
    nu[r] = i;
  }, t.getAxisPointerClass = function(r) {
    return r && nu[r];
  }, t.type = "axis", t;
}(cr);
const YC = UC;
var Br = At(), Dv = j, au = at, XC = function() {
  function e() {
    this._dragging = !1, this.animationThreshold = 15;
  }
  return e.prototype.render = function(t, r, i, n) {
    var a = r.get("value"), o = r.get("status");
    if (this._axisModel = t, this._axisPointerModel = r, this._api = i, !(!n && this._lastValue === a && this._lastStatus === o)) {
      this._lastValue = a, this._lastStatus = o;
      var s = this._group, u = this._handle;
      if (!o || o === "hide") {
        s && s.hide(), u && u.hide();
        return;
      }
      s && s.show(), u && u.show();
      var l = {};
      this.makeElOption(l, a, t, r, i);
      var f = l.graphicKey;
      f !== this._lastGraphicKey && this.clear(i), this._lastGraphicKey = f;
      var h = this._moveAnimation = this.determineAnimation(t, r);
      if (!s)
        s = this._group = new ye(), this.createPointerEl(s, l, t, r), this.createLabelEl(s, l, t, r), i.getZr().add(s);
      else {
        var c = _t(Av, r, h);
        this.updatePointerEl(s, l, c), this.updateLabelEl(s, l, c, r);
      }
      Mv(s, r, !0), this._renderHandle(a);
    }
  }, e.prototype.remove = function(t) {
    this.clear(t);
  }, e.prototype.dispose = function(t) {
    this.clear(t);
  }, e.prototype.determineAnimation = function(t, r) {
    var i = r.get("animation"), n = t.axis, a = n.type === "category", o = r.get("snap");
    if (!o && !a)
      return !1;
    if (i === "auto" || i == null) {
      var s = this.animationThreshold;
      if (a && n.getBandWidth() > s)
        return !0;
      if (o) {
        var u = _f(t).seriesDataCount, l = n.getExtent();
        return Math.abs(l[0] - l[1]) / u > s;
      }
      return !1;
    }
    return i === !0;
  }, e.prototype.makeElOption = function(t, r, i, n, a) {
  }, e.prototype.createPointerEl = function(t, r, i, n) {
    var a = r.pointer;
    if (a) {
      var o = Br(t).pointerEl = new vw[a.type](Dv(r.pointer));
      t.add(o);
    }
  }, e.prototype.createLabelEl = function(t, r, i, n) {
    if (r.label) {
      var a = Br(t).labelEl = new Ft(Dv(r.label));
      t.add(a), Ev(a, n);
    }
  }, e.prototype.updatePointerEl = function(t, r, i) {
    var n = Br(t).pointerEl;
    n && r.pointer && (n.setStyle(r.pointer.style), i(n, {
      shape: r.pointer.shape
    }));
  }, e.prototype.updateLabelEl = function(t, r, i, n) {
    var a = Br(t).labelEl;
    a && (a.setStyle(r.label.style), i(a, {
      x: r.label.x,
      y: r.label.y
    }), Ev(a, n));
  }, e.prototype._renderHandle = function(t) {
    if (!(this._dragging || !this.updateHandleTransform)) {
      var r = this._axisPointerModel, i = this._api.getZr(), n = this._handle, a = r.getModel("handle"), o = r.get("status");
      if (!a.get("show") || !o || o === "hide") {
        n && i.remove(n), this._handle = null;
        return;
      }
      var s;
      this._handle || (s = !0, n = this._handle = Ul(a.get("icon"), {
        cursor: "move",
        draggable: !0,
        onmousemove: function(l) {
          id(l.event);
        },
        onmousedown: au(this._onHandleDragMove, this, 0, 0),
        drift: au(this._onHandleDragMove, this),
        ondragend: au(this._onHandleDragEnd, this)
      }), i.add(n)), Mv(n, r, !1), n.setStyle(a.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
      var u = a.get("size");
      N(u) || (u = [u, u]), n.scaleX = u[0] / 2, n.scaleY = u[1] / 2, pg(this, "_doDispatchAxisPointer", a.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, s);
    }
  }, e.prototype._moveHandleToValue = function(t, r) {
    Av(this._axisPointerModel, !r && this._moveAnimation, this._handle, ou(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
  }, e.prototype._onHandleDragMove = function(t, r) {
    var i = this._handle;
    if (!!i) {
      this._dragging = !0;
      var n = this.updateHandleTransform(ou(i), [t, r], this._axisModel, this._axisPointerModel);
      this._payloadInfo = n, i.stopAnimation(), i.attr(ou(n)), Br(i).lastProp = null, this._doDispatchAxisPointer();
    }
  }, e.prototype._doDispatchAxisPointer = function() {
    var t = this._handle;
    if (!!t) {
      var r = this._payloadInfo, i = this._axisModel;
      this._api.dispatchAction({
        type: "updateAxisPointer",
        x: r.cursorPoint[0],
        y: r.cursorPoint[1],
        tooltipOption: r.tooltipOption,
        axesInfo: [{
          axisDim: i.axis.dim,
          axisIndex: i.componentIndex
        }]
      });
    }
  }, e.prototype._onHandleDragEnd = function() {
    this._dragging = !1;
    var t = this._handle;
    if (!!t) {
      var r = this._axisPointerModel.get("value");
      this._moveHandleToValue(r), this._api.dispatchAction({
        type: "hideTip"
      });
    }
  }, e.prototype.clear = function(t) {
    this._lastValue = null, this._lastStatus = null;
    var r = t.getZr(), i = this._group, n = this._handle;
    r && i && (this._lastGraphicKey = null, i && r.remove(i), n && r.remove(n), this._group = null, this._handle = null, this._payloadInfo = null), el(this, "_doDispatchAxisPointer");
  }, e.prototype.doClear = function() {
  }, e.prototype.buildLabel = function(t, r, i) {
    return i = i || 0, {
      x: t[i],
      y: t[1 - i],
      width: r[i],
      height: r[1 - i]
    };
  }, e;
}();
function Av(e, t, r, i) {
  p_(Br(r).lastProp, i) || (Br(r).lastProp = i, t ? me(r, i, e) : (r.stopAnimation(), r.attr(i)));
}
function p_(e, t) {
  if (F(e) && F(t)) {
    var r = !0;
    return A(t, function(i, n) {
      r = r && p_(e[n], i);
    }), !!r;
  } else
    return e === t;
}
function Ev(e, t) {
  e[t.get(["label", "show"]) ? "show" : "hide"]();
}
function ou(e) {
  return {
    x: e.x || 0,
    y: e.y || 0,
    rotation: e.rotation || 0
  };
}
function Mv(e, t, r) {
  var i = t.get("z"), n = t.get("zlevel");
  e && e.traverse(function(a) {
    a.type !== "group" && (i != null && (a.z = i), n != null && (a.zlevel = n), a.silent = r);
  });
}
const qC = XC;
function ZC(e) {
  var t = e.get("type"), r = e.getModel(t + "Style"), i;
  return t === "line" ? (i = r.getLineStyle(), i.fill = null) : t === "shadow" && (i = r.getAreaStyle(), i.stroke = null), i;
}
function KC(e, t, r, i, n) {
  var a = r.get("value"), o = g_(a, t.axis, t.ecModel, r.get("seriesDataIndices"), {
    precision: r.get(["label", "precision"]),
    formatter: r.get(["label", "formatter"])
  }), s = r.getModel("label"), u = zo(s.get("padding") || 0), l = s.getFont(), f = bd(o, l), h = n.position, c = f.width + u[1] + u[3], v = f.height + u[0] + u[2], d = n.align;
  d === "right" && (h[0] -= c), d === "center" && (h[0] -= c / 2);
  var _ = n.verticalAlign;
  _ === "bottom" && (h[1] -= v), _ === "middle" && (h[1] -= v / 2), QC(h, c, v, i);
  var p = s.get("backgroundColor");
  (!p || p === "auto") && (p = t.get(["axisLine", "lineStyle", "color"])), e.label = {
    x: h[0],
    y: h[1],
    style: hr(s, {
      text: o,
      font: l,
      fill: s.getTextColor(),
      padding: u,
      backgroundColor: p
    }),
    z2: 10
  };
}
function QC(e, t, r, i) {
  var n = i.getWidth(), a = i.getHeight();
  e[0] = Math.min(e[0] + t, n) - t, e[1] = Math.min(e[1] + r, a) - r, e[0] = Math.max(e[0], 0), e[1] = Math.max(e[1], 0);
}
function g_(e, t, r, i, n) {
  e = t.scale.parse(e);
  var a = t.scale.getLabel({
    value: e
  }, {
    precision: n.precision
  }), o = n.formatter;
  if (o) {
    var s = {
      value: n_(t, {
        value: e
      }),
      axisDimension: t.dim,
      axisIndex: t.index,
      seriesData: []
    };
    A(i, function(u) {
      var l = r.getSeriesByIndex(u.seriesIndex), f = u.dataIndexInside, h = l && l.getDataParams(f);
      h && s.seriesData.push(h);
    }), z(o) ? a = o.replace("{value}", a) : J(o) && (a = o(s));
  }
  return a;
}
function __(e, t, r) {
  var i = Ln();
  return Al(i, i, r.rotation), Ou(i, i, r.position), $l([e.dataToCoord(t), (r.labelOffset || 0) + (r.labelDirection || 1) * (r.labelMargin || 0)], i);
}
function JC(e, t, r, i, n, a) {
  var o = BC.innerTextLayout(r.rotation, 0, r.labelDirection);
  r.labelMargin = n.get(["label", "margin"]), KC(t, i, n, a, {
    position: __(i.axis, e, r),
    align: o.textAlign,
    verticalAlign: o.textVerticalAlign
  });
}
function jC(e, t, r) {
  return r = r || 0, {
    x1: e[r],
    y1: e[1 - r],
    x2: t[r],
    y2: t[1 - r]
  };
}
function tD(e, t, r) {
  return r = r || 0, {
    x: e[r],
    y: e[1 - r],
    width: t[r],
    height: t[1 - r]
  };
}
var eD = function(e) {
  k(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.makeElOption = function(r, i, n, a, o) {
    var s = n.axis, u = s.grid, l = a.get("type"), f = Pv(u, s).getOtherAxis(s).getGlobalExtent(), h = s.toGlobalCoord(s.dataToCoord(i, !0));
    if (l && l !== "none") {
      var c = ZC(a), v = rD[l](s, h, f);
      v.style = c, r.graphicKey = v.type, r.pointer = v;
    }
    var d = bv(u.model, n);
    JC(
      i,
      r,
      d,
      n,
      a,
      o
    );
  }, t.prototype.getHandleTransform = function(r, i, n) {
    var a = bv(i.axis.grid.model, i, {
      labelInside: !1
    });
    a.labelMargin = n.get(["handle", "margin"]);
    var o = __(i.axis, r, a);
    return {
      x: o[0],
      y: o[1],
      rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0)
    };
  }, t.prototype.updateHandleTransform = function(r, i, n, a) {
    var o = n.axis, s = o.grid, u = o.getGlobalExtent(!0), l = Pv(s, o).getOtherAxis(o).getGlobalExtent(), f = o.dim === "x" ? 0 : 1, h = [r.x, r.y];
    h[f] += i[f], h[f] = Math.min(u[1], h[f]), h[f] = Math.max(u[0], h[f]);
    var c = (l[1] + l[0]) / 2, v = [c, c];
    v[f] = h[f];
    var d = [{
      verticalAlign: "middle"
    }, {
      align: "center"
    }];
    return {
      x: h[0],
      y: h[1],
      rotation: r.rotation,
      cursorPoint: v,
      tooltipOption: d[f]
    };
  }, t;
}(qC);
function Pv(e, t) {
  var r = {};
  return r[t.dim + "AxisIndex"] = t.index, e.getCartesian(r);
}
var rD = {
  line: function(e, t, r) {
    var i = jC([t, r[0]], [t, r[1]], Lv(e));
    return {
      type: "Line",
      subPixelOptimize: !0,
      shape: i
    };
  },
  shadow: function(e, t, r) {
    var i = Math.max(1, e.getBandWidth()), n = r[1] - r[0];
    return {
      type: "Rect",
      shape: tD([t - i / 2, r[0]], [i, n], Lv(e))
    };
  }
};
function Lv(e) {
  return e.dim === "x" ? 0 : 1;
}
const iD = eD;
var nD = function(e) {
  k(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.type = t.type, r;
  }
  return t.type = "axisPointer", t.defaultOption = {
    show: "auto",
    z: 50,
    type: "line",
    snap: !1,
    triggerTooltip: !0,
    value: null,
    status: null,
    link: [],
    animation: null,
    animationDurationUpdate: 200,
    lineStyle: {
      color: "#B9BEC9",
      width: 1,
      type: "dashed"
    },
    shadowStyle: {
      color: "rgba(210,219,238,0.2)"
    },
    label: {
      show: !0,
      formatter: null,
      precision: "auto",
      margin: 3,
      color: "#fff",
      padding: [5, 7, 5, 7],
      backgroundColor: "auto",
      borderColor: null,
      borderWidth: 0,
      borderRadius: 3
    },
    handle: {
      show: !1,
      icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
      size: 45,
      margin: 50,
      color: "#333",
      shadowBlur: 3,
      shadowColor: "#aaa",
      shadowOffsetX: 0,
      shadowOffsetY: 2,
      throttle: 40
    }
  }, t;
}(lt);
const aD = nD;
var Ue = At(), oD = A;
function y_(e, t, r) {
  if (!Z.node) {
    var i = t.getZr();
    Ue(i).records || (Ue(i).records = {}), sD(i, t);
    var n = Ue(i).records[e] || (Ue(i).records[e] = {});
    n.handler = r;
  }
}
function sD(e, t) {
  if (Ue(e).initialized)
    return;
  Ue(e).initialized = !0, r("click", _t(Iv, "click")), r("mousemove", _t(Iv, "mousemove")), r("globalout", lD);
  function r(i, n) {
    e.on(i, function(a) {
      var o = fD(t);
      oD(Ue(e).records, function(s) {
        s && n(s, a, o.dispatchAction);
      }), uD(o.pendings, t);
    });
  }
}
function uD(e, t) {
  var r = e.showTip.length, i = e.hideTip.length, n;
  r ? n = e.showTip[r - 1] : i && (n = e.hideTip[i - 1]), n && (n.dispatchAction = null, t.dispatchAction(n));
}
function lD(e, t, r) {
  e.handler("leave", null, r);
}
function Iv(e, t, r, i) {
  t.handler(e, r, i);
}
function fD(e) {
  var t = {
    showTip: [],
    hideTip: []
  }, r = function(i) {
    var n = t[i.type];
    n ? n.push(i) : (i.dispatchAction = r, e.dispatchAction(i));
  };
  return {
    dispatchAction: r,
    pendings: t
  };
}
function hl(e, t) {
  if (!Z.node) {
    var r = t.getZr(), i = (Ue(r).records || {})[e];
    i && (Ue(r).records[e] = null);
  }
}
var hD = function(e) {
  k(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.type = t.type, r;
  }
  return t.prototype.render = function(r, i, n) {
    var a = i.getComponent("tooltip"), o = r.get("triggerOn") || a && a.get("triggerOn") || "mousemove|click";
    y_("axisPointer", n, function(s, u, l) {
      o !== "none" && (s === "leave" || o.indexOf(s) >= 0) && l({
        type: "updateAxisPointer",
        currTrigger: s,
        x: u && u.offsetX,
        y: u && u.offsetY
      });
    });
  }, t.prototype.remove = function(r, i) {
    hl("axisPointer", i);
  }, t.prototype.dispose = function(r, i) {
    hl("axisPointer", i);
  }, t.type = "axisPointer", t;
}(cr);
const cD = hD;
function m_(e, t) {
  var r = [], i = e.seriesIndex, n;
  if (i == null || !(n = t.getSeriesByIndex(i)))
    return {
      point: []
    };
  var a = n.getData(), o = Yn(a, e);
  if (o == null || o < 0 || N(o))
    return {
      point: []
    };
  var s = a.getItemGraphicEl(o), u = n.coordinateSystem;
  if (n.getTooltipPosition)
    r = n.getTooltipPosition(o) || [];
  else if (u && u.dataToPoint)
    if (e.isStacked) {
      var l = u.getBaseAxis(), f = u.getOtherAxis(l), h = f.dim, c = l.dim, v = h === "x" || h === "radius" ? 1 : 0, d = a.mapDimension(c), _ = [];
      _[v] = a.get(d, o), _[1 - v] = a.get(a.getCalculationInfo("stackResultDimension"), o), r = u.dataToPoint(_) || [];
    } else
      r = u.dataToPoint(a.getValues(q(u.dimensions, function(g) {
        return a.mapDimension(g);
      }), o)) || [];
  else if (s) {
    var p = s.getBoundingRect().clone();
    p.applyTransform(s.transform), r = [p.x + p.width / 2, p.y + p.height / 2];
  }
  return {
    point: r,
    el: s
  };
}
var Rv = At();
function vD(e, t, r) {
  var i = e.currTrigger, n = [e.x, e.y], a = e, o = e.dispatchAction || at(r.dispatchAction, r), s = t.getComponent("axisPointer").coordSysAxesInfo;
  if (!!s) {
    qa(n) && (n = m_({
      seriesIndex: a.seriesIndex,
      dataIndex: a.dataIndex
    }, t).point);
    var u = qa(n), l = a.axesInfo, f = s.axesInfo, h = i === "leave" || qa(n), c = {}, v = {}, d = {
      list: [],
      map: {}
    }, _ = {
      showPointer: _t(pD, v),
      showTooltip: _t(gD, d)
    };
    A(s.coordSysMap, function(g, y) {
      var m = u || g.containPoint(n);
      A(s.coordSysAxesInfo[y], function(w, b) {
        var S = w.axis, T = wD(l, w);
        if (!h && m && (!l || T)) {
          var x = T && T.value;
          x == null && !u && (x = S.pointToData(n)), x != null && Ov(w, x, _, !1, c);
        }
      });
    });
    var p = {};
    return A(f, function(g, y) {
      var m = g.linkGroup;
      m && !v[y] && A(m.axesInfo, function(w, b) {
        var S = v[b];
        if (w !== g && S) {
          var T = S.value;
          m.mapper && (T = g.axis.scale.parse(m.mapper(T, Nv(w), Nv(g)))), p[g.key] = T;
        }
      });
    }), A(p, function(g, y) {
      Ov(f[y], g, _, !0, c);
    }), _D(v, f, c), yD(d, n, e, o), mD(f, o, r), c;
  }
}
function Ov(e, t, r, i, n) {
  var a = e.axis;
  if (!(a.scale.isBlank() || !a.containData(t))) {
    if (!e.involveSeries) {
      r.showPointer(e, t);
      return;
    }
    var o = dD(t, e), s = o.payloadBatch, u = o.snapToValue;
    s[0] && n.seriesIndex == null && O(n, s[0]), !i && e.snap && a.containData(u) && u != null && (t = u), r.showPointer(e, t, s), r.showTooltip(e, o, u);
  }
}
function dD(e, t) {
  var r = t.axis, i = r.dim, n = e, a = [], o = Number.MAX_VALUE, s = -1;
  return A(t.seriesModels, function(u, l) {
    var f = u.getData().mapDimensionsAll(i), h, c;
    if (u.getAxisTooltipData) {
      var v = u.getAxisTooltipData(f, e, r);
      c = v.dataIndices, h = v.nestestValue;
    } else {
      if (c = u.getData().indicesOfNearest(
        f[0],
        e,
        r.type === "category" ? 0.5 : null
      ), !c.length)
        return;
      h = u.getData().get(f[0], c[0]);
    }
    if (!(h == null || !isFinite(h))) {
      var d = e - h, _ = Math.abs(d);
      _ <= o && ((_ < o || d >= 0 && s < 0) && (o = _, s = d, n = h, a.length = 0), A(c, function(p) {
        a.push({
          seriesIndex: u.seriesIndex,
          dataIndexInside: p,
          dataIndex: u.getData().getRawIndex(p)
        });
      }));
    }
  }), {
    payloadBatch: a,
    snapToValue: n
  };
}
function pD(e, t, r, i) {
  e[t.key] = {
    value: r,
    payloadBatch: i
  };
}
function gD(e, t, r, i) {
  var n = r.payloadBatch, a = t.axis, o = a.model, s = t.axisPointerModel;
  if (!(!t.triggerTooltip || !n.length)) {
    var u = t.coordSys.model, l = Wn(u), f = e.map[l];
    f || (f = e.map[l] = {
      coordSysId: u.id,
      coordSysIndex: u.componentIndex,
      coordSysType: u.type,
      coordSysMainType: u.mainType,
      dataByAxis: []
    }, e.list.push(f)), f.dataByAxis.push({
      axisDim: a.dim,
      axisIndex: o.componentIndex,
      axisType: o.type,
      axisId: o.id,
      value: i,
      valueLabelOpt: {
        precision: s.get(["label", "precision"]),
        formatter: s.get(["label", "formatter"])
      },
      seriesDataIndices: n.slice()
    });
  }
}
function _D(e, t, r) {
  var i = r.axesInfo = [];
  A(t, function(n, a) {
    var o = n.axisPointerModel.option, s = e[a];
    s ? (!n.useHandle && (o.status = "show"), o.value = s.value, o.seriesDataIndices = (s.payloadBatch || []).slice()) : !n.useHandle && (o.status = "hide"), o.status === "show" && i.push({
      axisDim: n.axis.dim,
      axisIndex: n.axis.model.componentIndex,
      value: o.value
    });
  });
}
function yD(e, t, r, i) {
  if (qa(t) || !e.list.length) {
    i({
      type: "hideTip"
    });
    return;
  }
  var n = ((e.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
  i({
    type: "showTip",
    escapeConnect: !0,
    x: t[0],
    y: t[1],
    tooltipOption: r.tooltipOption,
    position: r.position,
    dataIndexInside: n.dataIndexInside,
    dataIndex: n.dataIndex,
    seriesIndex: n.seriesIndex,
    dataByCoordSys: e.list
  });
}
function mD(e, t, r) {
  var i = r.getZr(), n = "axisPointerLastHighlights", a = Rv(i)[n] || {}, o = Rv(i)[n] = {};
  A(e, function(l, f) {
    var h = l.axisPointerModel.option;
    h.status === "show" && A(h.seriesDataIndices, function(c) {
      var v = c.seriesIndex + " | " + c.dataIndex;
      o[v] = c;
    });
  });
  var s = [], u = [];
  A(a, function(l, f) {
    !o[f] && u.push(l);
  }), A(o, function(l, f) {
    !a[f] && s.push(l);
  }), u.length && r.dispatchAction({
    type: "downplay",
    escapeConnect: !0,
    notBlur: !0,
    batch: u
  }), s.length && r.dispatchAction({
    type: "highlight",
    escapeConnect: !0,
    notBlur: !0,
    batch: s
  });
}
function wD(e, t) {
  for (var r = 0; r < (e || []).length; r++) {
    var i = e[r];
    if (t.axis.dim === i.axisDim && t.axis.model.componentIndex === i.axisIndex)
      return i;
  }
}
function Nv(e) {
  var t = e.axis.model, r = {}, i = r.axisDim = e.axis.dim;
  return r.axisIndex = r[i + "AxisIndex"] = t.componentIndex, r.axisName = r[i + "AxisName"] = t.name, r.axisId = r[i + "AxisId"] = t.id, r;
}
function qa(e) {
  return !e || e[0] == null || isNaN(e[0]) || e[1] == null || isNaN(e[1]);
}
function SD(e) {
  YC.registerAxisPointerClass("CartesianAxisPointer", iD), e.registerComponentModel(aD), e.registerComponentView(cD), e.registerPreprocessor(function(t) {
    if (t) {
      (!t.axisPointer || t.axisPointer.length === 0) && (t.axisPointer = {});
      var r = t.axisPointer.link;
      r && !N(r) && (t.axisPointer.link = [r]);
    }
  }), e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC, function(t, r) {
    t.getComponent("axisPointer").coordSysAxesInfo = zC(t, r);
  }), e.registerAction({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, vD);
}
function bD(e, t) {
  var r = zo(t.get("padding")), i = t.getItemStyle(["color", "opacity"]);
  return i.fill = t.get("backgroundColor"), e = new Dt({
    shape: {
      x: e.x - r[3],
      y: e.y - r[0],
      width: e.width + r[1] + r[3],
      height: e.height + r[0] + r[2],
      r: t.get("borderRadius")
    },
    style: i,
    silent: !0,
    z2: -1
  }), e;
}
var xD = function(e) {
  k(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.type = t.type, r;
  }
  return t.type = "tooltip", t.dependencies = ["axisPointer"], t.defaultOption = {
    z: 60,
    show: !0,
    showContent: !0,
    trigger: "item",
    triggerOn: "mousemove|click",
    alwaysShowContent: !1,
    displayMode: "single",
    renderMode: "auto",
    confine: null,
    showDelay: 0,
    hideDelay: 100,
    transitionDuration: 0.4,
    enterable: !1,
    backgroundColor: "#fff",
    shadowBlur: 10,
    shadowColor: "rgba(0, 0, 0, .2)",
    shadowOffsetX: 1,
    shadowOffsetY: 2,
    borderRadius: 4,
    borderWidth: 1,
    padding: null,
    extraCssText: "",
    axisPointer: {
      type: "line",
      axis: "auto",
      animation: "auto",
      animationDurationUpdate: 200,
      animationEasingUpdate: "exponentialOut",
      crossStyle: {
        color: "#999",
        width: 1,
        type: "dashed",
        textStyle: {}
      }
    },
    textStyle: {
      color: "#666",
      fontSize: 14
    }
  }, t;
}(lt);
const TD = xD;
function w_(e) {
  var t = e.get("confine");
  return t != null ? !!t : e.get("renderMode") === "richText";
}
function S_(e) {
  if (!!Z.domSupported) {
    for (var t = document.documentElement.style, r = 0, i = e.length; r < i; r++)
      if (e[r] in t)
        return e[r];
  }
}
var b_ = S_(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), CD = S_(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
function x_(e, t) {
  if (!e)
    return t;
  t = Vp(t, !0);
  var r = e.indexOf(t);
  return e = r === -1 ? t : "-" + e.slice(0, r) + "-" + t, e.toLowerCase();
}
function DD(e, t) {
  var r = e.currentStyle || document.defaultView && document.defaultView.getComputedStyle(e);
  return r ? t ? r[t] : r : null;
}
var AD = x_(CD, "transition"), yf = x_(b_, "transform"), ED = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (Z.transform3dSupported ? "will-change:transform;" : "");
function MD(e) {
  return e = e === "left" ? "right" : e === "right" ? "left" : e === "top" ? "bottom" : "top", e;
}
function PD(e, t, r) {
  if (!z(r) || r === "inside")
    return "";
  var i = e.get("backgroundColor"), n = e.get("borderWidth");
  t = kn(t);
  var a = MD(r), o = Math.max(Math.round(n) * 1.5, 6), s = "", u = yf + ":", l;
  nt(["left", "right"], a) > -1 ? (s += "top:50%", u += "translateY(-50%) rotate(" + (l = a === "left" ? -225 : -45) + "deg)") : (s += "left:50%", u += "translateX(-50%) rotate(" + (l = a === "top" ? 225 : 45) + "deg)");
  var f = l * Math.PI / 180, h = o + n, c = h * Math.abs(Math.cos(f)) + h * Math.abs(Math.sin(f)), v = Math.round(((c - Math.SQRT2 * n) / 2 + Math.SQRT2 * n - (c - h) / 2) * 100) / 100;
  s += ";" + a + ":-" + v + "px";
  var d = t + " solid " + n + "px;", _ = ["position:absolute;width:" + o + "px;height:" + o + "px;", s + ";" + u + ";", "border-bottom:" + d, "border-right:" + d, "background-color:" + i + ";"];
  return '<div style="' + _.join("") + '"></div>';
}
function LD(e, t) {
  var r = "cubic-bezier(0.23,1,0.32,1)", i = " " + e / 2 + "s " + r, n = "opacity" + i + ",visibility" + i;
  return t || (i = " " + e + "s " + r, n += Z.transformSupported ? "," + yf + i : ",left" + i + ",top" + i), AD + ":" + n;
}
function kv(e, t, r) {
  var i = e.toFixed(0) + "px", n = t.toFixed(0) + "px";
  if (!Z.transformSupported)
    return r ? "top:" + n + ";left:" + i + ";" : [["top", n], ["left", i]];
  var a = Z.transform3dSupported, o = "translate" + (a ? "3d" : "") + "(" + i + "," + n + (a ? ",0" : "") + ")";
  return r ? "top:0;left:0;" + yf + ":" + o + ";" : [["top", 0], ["left", 0], [b_, o]];
}
function ID(e) {
  var t = [], r = e.get("fontSize"), i = e.getTextColor();
  i && t.push("color:" + i), t.push("font:" + e.getFont()), r && t.push("line-height:" + Math.round(r * 3 / 2) + "px");
  var n = e.get("textShadowColor"), a = e.get("textShadowBlur") || 0, o = e.get("textShadowOffsetX") || 0, s = e.get("textShadowOffsetY") || 0;
  return n && a && t.push("text-shadow:" + o + "px " + s + "px " + a + "px " + n), A(["decoration", "align"], function(u) {
    var l = e.get(u);
    l && t.push("text-" + u + ":" + l);
  }), t.join(";");
}
function RD(e, t, r) {
  var i = [], n = e.get("transitionDuration"), a = e.get("backgroundColor"), o = e.get("shadowBlur"), s = e.get("shadowColor"), u = e.get("shadowOffsetX"), l = e.get("shadowOffsetY"), f = e.getModel("textStyle"), h = cg(e, "html"), c = u + "px " + l + "px " + o + "px " + s;
  return i.push("box-shadow:" + c), t && n && i.push(LD(n, r)), a && i.push("background-color:" + a), A(["width", "color", "radius"], function(v) {
    var d = "border-" + v, _ = Vp(d), p = e.get(_);
    p != null && i.push(d + ":" + p + (v === "color" ? "" : "px"));
  }), i.push(ID(f)), h != null && i.push("padding:" + zo(h).join("px ") + "px"), i.join(";") + ";";
}
function Bv(e, t, r, i, n) {
  var a = t && t.painter;
  if (r) {
    var o = a && a.getViewportRoot();
    o && cy(e, o, document.body, i, n);
  } else {
    e[0] = i, e[1] = n;
    var s = a && a.getViewportRootOffset();
    s && (e[0] += s.offsetLeft, e[1] += s.offsetTop);
  }
  e[2] = e[0] / t.getWidth(), e[3] = e[1] / t.getHeight();
}
var OD = function() {
  function e(t, r, i) {
    if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._firstShow = !0, this._longHide = !0, Z.wxa)
      return null;
    var n = document.createElement("div");
    n.domBelongToZr = !0, this.el = n;
    var a = this._zr = r.getZr(), o = this._appendToBody = i && i.appendToBody;
    Bv(this._styleCoord, a, o, r.getWidth() / 2, r.getHeight() / 2), o ? document.body.appendChild(n) : t.appendChild(n), this._container = t;
    var s = this;
    n.onmouseenter = function() {
      s._enterable && (clearTimeout(s._hideTimeout), s._show = !0), s._inContent = !0;
    }, n.onmousemove = function(u) {
      if (u = u || window.event, !s._enterable) {
        var l = a.handler, f = a.painter.getViewportRoot();
        ae(f, u, !0), l.dispatch("mousemove", u);
      }
    }, n.onmouseleave = function() {
      s._inContent = !1, s._enterable && s._show && s.hideLater(s._hideDelay);
    };
  }
  return e.prototype.update = function(t) {
    var r = this._container, i = DD(r, "position"), n = r.style;
    n.position !== "absolute" && i !== "absolute" && (n.position = "relative");
    var a = t.get("alwaysShowContent");
    a && this._moveIfResized(), this.el.className = t.get("className") || "";
  }, e.prototype.show = function(t, r) {
    clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
    var i = this.el, n = i.style, a = this._styleCoord;
    i.innerHTML ? n.cssText = ED + RD(t, !this._firstShow, this._longHide) + kv(a[0], a[1], !0) + ("border-color:" + kn(r) + ";") + (t.get("extraCssText") || "") + (";pointer-events:" + (this._enterable ? "auto" : "none")) : n.display = "none", this._show = !0, this._firstShow = !1, this._longHide = !1;
  }, e.prototype.setContent = function(t, r, i, n, a) {
    var o = this.el;
    if (t == null) {
      o.innerHTML = "";
      return;
    }
    var s = "";
    if (z(a) && i.get("trigger") === "item" && !w_(i) && (s = PD(i, n, a)), z(t))
      o.innerHTML = t + s;
    else if (t) {
      o.innerHTML = "", N(t) || (t = [t]);
      for (var u = 0; u < t.length; u++)
        Pn(t[u]) && t[u].parentNode !== o && o.appendChild(t[u]);
      if (s && o.childNodes.length) {
        var l = document.createElement("div");
        l.innerHTML = s, o.appendChild(l);
      }
    }
  }, e.prototype.setEnterable = function(t) {
    this._enterable = t;
  }, e.prototype.getSize = function() {
    var t = this.el;
    return [t.offsetWidth, t.offsetHeight];
  }, e.prototype.moveTo = function(t, r) {
    var i = this._styleCoord;
    if (Bv(i, this._zr, this._appendToBody, t, r), i[0] != null && i[1] != null) {
      var n = this.el.style, a = kv(i[0], i[1]);
      A(a, function(o) {
        n[o[0]] = o[1];
      });
    }
  }, e.prototype._moveIfResized = function() {
    var t = this._styleCoord[2], r = this._styleCoord[3];
    this.moveTo(t * this._zr.getWidth(), r * this._zr.getHeight());
  }, e.prototype.hide = function() {
    var t = this, r = this.el.style;
    r.visibility = "hidden", r.opacity = "0", Z.transform3dSupported && (r.willChange = ""), this._show = !1, this._longHideTimeout = setTimeout(function() {
      return t._longHide = !0;
    }, 500);
  }, e.prototype.hideLater = function(t) {
    this._show && !(this._inContent && this._enterable) && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(at(this.hide, this), t)) : this.hide());
  }, e.prototype.isShow = function() {
    return this._show;
  }, e.prototype.dispose = function() {
    this.el.parentNode.removeChild(this.el);
  }, e;
}();
const ND = OD;
var kD = function() {
  function e(t) {
    this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._zr = t.getZr(), Fv(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2);
  }
  return e.prototype.update = function(t) {
    var r = t.get("alwaysShowContent");
    r && this._moveIfResized();
  }, e.prototype.show = function() {
    this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0;
  }, e.prototype.setContent = function(t, r, i, n, a) {
    var o = this;
    F(t) && Wt(process.env.NODE_ENV !== "production" ? "Passing DOM nodes as content is not supported in richText tooltip!" : ""), this.el && this._zr.remove(this.el);
    var s = i.getModel("textStyle");
    this.el = new Ft({
      style: {
        rich: r.richTextStyles,
        text: t,
        lineHeight: 22,
        borderWidth: 1,
        borderColor: n,
        textShadowColor: s.get("textShadowColor"),
        fill: i.get(["textStyle", "color"]),
        padding: cg(i, "richText"),
        verticalAlign: "top",
        align: "left"
      },
      z: i.get("z")
    }), A(["backgroundColor", "borderRadius", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"], function(l) {
      o.el.style[l] = i.get(l);
    }), A(["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], function(l) {
      o.el.style[l] = s.get(l) || 0;
    }), this._zr.add(this.el);
    var u = this;
    this.el.on("mouseover", function() {
      u._enterable && (clearTimeout(u._hideTimeout), u._show = !0), u._inContent = !0;
    }), this.el.on("mouseout", function() {
      u._enterable && u._show && u.hideLater(u._hideDelay), u._inContent = !1;
    });
  }, e.prototype.setEnterable = function(t) {
    this._enterable = t;
  }, e.prototype.getSize = function() {
    var t = this.el, r = this.el.getBoundingRect(), i = zv(t.style);
    return [r.width + i.left + i.right, r.height + i.top + i.bottom];
  }, e.prototype.moveTo = function(t, r) {
    var i = this.el;
    if (i) {
      var n = this._styleCoord;
      Fv(n, this._zr, t, r), t = n[0], r = n[1];
      var a = i.style, o = ir(a.borderWidth || 0), s = zv(a);
      i.x = t + o + s.left, i.y = r + o + s.top, i.markRedraw();
    }
  }, e.prototype._moveIfResized = function() {
    var t = this._styleCoord[2], r = this._styleCoord[3];
    this.moveTo(t * this._zr.getWidth(), r * this._zr.getHeight());
  }, e.prototype.hide = function() {
    this.el && this.el.hide(), this._show = !1;
  }, e.prototype.hideLater = function(t) {
    this._show && !(this._inContent && this._enterable) && (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(at(this.hide, this), t)) : this.hide());
  }, e.prototype.isShow = function() {
    return this._show;
  }, e.prototype.dispose = function() {
    this._zr.remove(this.el);
  }, e;
}();
function ir(e) {
  return Math.max(0, e);
}
function zv(e) {
  var t = ir(e.shadowBlur || 0), r = ir(e.shadowOffsetX || 0), i = ir(e.shadowOffsetY || 0);
  return {
    left: ir(t - r),
    right: ir(t + r),
    top: ir(t - i),
    bottom: ir(t + i)
  };
}
function Fv(e, t, r, i) {
  e[0] = r, e[1] = i, e[2] = e[0] / t.getWidth(), e[3] = e[1] / t.getHeight();
}
const BD = kD;
var zD = new Dt({
  shape: {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }
}), FD = function(e) {
  k(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.type = t.type, r;
  }
  return t.prototype.init = function(r, i) {
    if (!(Z.node || !i.getDom())) {
      var n = r.getComponent("tooltip"), a = this._renderMode = Um(n.get("renderMode"));
      this._tooltipContent = a === "richText" ? new BD(i) : new ND(i.getDom(), i, {
        appendToBody: n.get("appendToBody", !0)
      });
    }
  }, t.prototype.render = function(r, i, n) {
    if (!(Z.node || !n.getDom())) {
      this.group.removeAll(), this._tooltipModel = r, this._ecModel = i, this._api = n, this._alwaysShowContent = r.get("alwaysShowContent");
      var a = this._tooltipContent;
      a.update(r), a.setEnterable(r.get("enterable")), this._initGlobalListener(), this._keepShow(), this._renderMode !== "richText" && r.get("transitionDuration") ? pg(this, "_updatePosition", 50, "fixRate") : el(this, "_updatePosition");
    }
  }, t.prototype._initGlobalListener = function() {
    var r = this._tooltipModel, i = r.get("triggerOn");
    y_("itemTooltip", this._api, at(function(n, a, o) {
      i !== "none" && (i.indexOf(n) >= 0 ? this._tryShow(a, o) : n === "leave" && this._hide(o));
    }, this));
  }, t.prototype._keepShow = function() {
    var r = this._tooltipModel, i = this._ecModel, n = this._api, a = r.get("triggerOn");
    if (this._lastX != null && this._lastY != null && a !== "none" && a !== "click") {
      var o = this;
      clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
        !n.isDisposed() && o.manuallyShowTip(r, i, n, {
          x: o._lastX,
          y: o._lastY,
          dataByCoordSys: o._lastDataByCoordSys
        });
      });
    }
  }, t.prototype.manuallyShowTip = function(r, i, n, a) {
    if (!(a.from === this.uid || Z.node || !n.getDom())) {
      var o = Vv(a, n);
      this._ticket = "";
      var s = a.dataByCoordSys, u = WD(a, i, n);
      if (u) {
        var l = u.el.getBoundingRect().clone();
        l.applyTransform(u.el.transform), this._tryShow({
          offsetX: l.x + l.width / 2,
          offsetY: l.y + l.height / 2,
          target: u.el,
          position: a.position,
          positionDefault: "bottom"
        }, o);
      } else if (a.tooltip && a.x != null && a.y != null) {
        var f = zD;
        f.x = a.x, f.y = a.y, f.update(), ot(f).tooltipConfig = {
          name: null,
          option: a.tooltip
        }, this._tryShow({
          offsetX: a.x,
          offsetY: a.y,
          target: f
        }, o);
      } else if (s)
        this._tryShow({
          offsetX: a.x,
          offsetY: a.y,
          position: a.position,
          dataByCoordSys: s,
          tooltipOption: a.tooltipOption
        }, o);
      else if (a.seriesIndex != null) {
        if (this._manuallyAxisShowTip(r, i, n, a))
          return;
        var h = m_(a, i), c = h.point[0], v = h.point[1];
        c != null && v != null && this._tryShow({
          offsetX: c,
          offsetY: v,
          target: h.el,
          position: a.position,
          positionDefault: "bottom"
        }, o);
      } else
        a.x != null && a.y != null && (n.dispatchAction({
          type: "updateAxisPointer",
          x: a.x,
          y: a.y
        }), this._tryShow({
          offsetX: a.x,
          offsetY: a.y,
          position: a.position,
          target: n.getZr().findHover(a.x, a.y).target
        }, o));
    }
  }, t.prototype.manuallyHideTip = function(r, i, n, a) {
    var o = this._tooltipContent;
    !this._alwaysShowContent && this._tooltipModel && o.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, a.from !== this.uid && this._hide(Vv(a, n));
  }, t.prototype._manuallyAxisShowTip = function(r, i, n, a) {
    var o = a.seriesIndex, s = a.dataIndex, u = i.getComponent("axisPointer").coordSysAxesInfo;
    if (!(o == null || s == null || u == null)) {
      var l = i.getSeriesByIndex(o);
      if (!!l) {
        var f = l.getData(), h = sn([f.getItemModel(s), l, (l.coordinateSystem || {}).model], this._tooltipModel);
        if (h.get("trigger") === "axis")
          return n.dispatchAction({
            type: "updateAxisPointer",
            seriesIndex: o,
            dataIndex: s,
            position: a.position
          }), !0;
      }
    }
  }, t.prototype._tryShow = function(r, i) {
    var n = r.target, a = this._tooltipModel;
    if (!!a) {
      this._lastX = r.offsetX, this._lastY = r.offsetY;
      var o = r.dataByCoordSys;
      if (o && o.length)
        this._showAxisTooltip(o, r);
      else if (n) {
        this._lastDataByCoordSys = null;
        var s, u;
        _n(n, function(l) {
          if (ot(l).dataIndex != null)
            return s = l, !0;
          if (ot(l).tooltipConfig != null)
            return u = l, !0;
        }, !0), s ? this._showSeriesItemTooltip(r, s, i) : u ? this._showComponentItemTooltip(r, u, i) : this._hide(i);
      } else
        this._lastDataByCoordSys = null, this._hide(i);
    }
  }, t.prototype._showOrMove = function(r, i) {
    var n = r.get("showDelay");
    i = at(i, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(i, n) : i();
  }, t.prototype._showAxisTooltip = function(r, i) {
    var n = this._ecModel, a = this._tooltipModel, o = [i.offsetX, i.offsetY], s = sn([i.tooltipOption], a), u = this._renderMode, l = [], f = Vn("section", {
      blocks: [],
      noHeader: !0
    }), h = [], c = new Vs();
    A(r, function(y) {
      A(y.dataByAxis, function(m) {
        var w = n.getComponent(m.axisDim + "Axis", m.axisIndex), b = m.value;
        if (!(!w || b == null)) {
          var S = g_(b, w.axis, n, m.seriesDataIndices, m.valueLabelOpt), T = Vn("section", {
            header: S,
            noHeader: !Le(S),
            sortBlocks: !0,
            blocks: []
          });
          f.blocks.push(T), A(m.seriesDataIndices, function(x) {
            var C = n.getSeriesByIndex(x.seriesIndex), E = x.dataIndexInside, D = C.getDataParams(E);
            if (!(D.dataIndex < 0)) {
              D.axisDim = m.axisDim, D.axisIndex = m.axisIndex, D.axisType = m.axisType, D.axisId = m.axisId, D.axisValue = n_(w.axis, {
                value: b
              }), D.axisValueLabel = S, D.marker = c.makeTooltipMarker("item", kn(D.color), u);
              var M = gc(C.formatTooltip(E, !0, null)), P = M.frag;
              if (P) {
                var L = sn([C], a).get("valueFormatter");
                T.blocks.push(L ? O({
                  valueFormatter: L
                }, P) : P);
              }
              M.text && h.push(M.text), l.push(D);
            }
          });
        }
      });
    }), f.blocks.reverse(), h.reverse();
    var v = i.position, d = s.get("order"), _ = Sc(f, c, u, d, n.get("useUTC"), s.get("textStyle"));
    _ && h.unshift(_);
    var p = u === "richText" ? `

` : "<br/>", g = h.join(p);
    this._showOrMove(s, function() {
      this._updateContentNotChangedOnAxis(r, l) ? this._updatePosition(s, v, o[0], o[1], this._tooltipContent, l) : this._showTooltipContent(s, g, l, Math.random() + "", o[0], o[1], v, null, c);
    });
  }, t.prototype._showSeriesItemTooltip = function(r, i, n) {
    var a = this._ecModel, o = ot(i), s = o.seriesIndex, u = a.getSeriesByIndex(s), l = o.dataModel || u, f = o.dataIndex, h = o.dataType, c = l.getData(h), v = this._renderMode, d = r.positionDefault, _ = sn([c.getItemModel(f), l, u && (u.coordinateSystem || {}).model], this._tooltipModel, d ? {
      position: d
    } : null), p = _.get("trigger");
    if (!(p != null && p !== "item")) {
      var g = l.getDataParams(f, h), y = new Vs();
      g.marker = y.makeTooltipMarker("item", kn(g.color), v);
      var m = gc(l.formatTooltip(f, !1, h)), w = _.get("order"), b = _.get("valueFormatter"), S = m.frag, T = S ? Sc(b ? O({
        valueFormatter: b
      }, S) : S, y, v, w, a.get("useUTC"), _.get("textStyle")) : m.text, x = "item_" + l.name + "_" + f;
      this._showOrMove(_, function() {
        this._showTooltipContent(_, T, g, x, r.offsetX, r.offsetY, r.position, r.target, y);
      }), n({
        type: "showTip",
        dataIndexInside: f,
        dataIndex: c.getRawIndex(f),
        seriesIndex: s,
        from: this.uid
      });
    }
  }, t.prototype._showComponentItemTooltip = function(r, i, n) {
    var a = ot(i), o = a.tooltipConfig, s = o.option || {};
    if (z(s)) {
      var u = s;
      s = {
        content: u,
        formatter: u
      };
    }
    var l = [s], f = this._ecModel.getComponent(a.componentMainType, a.componentIndex);
    f && l.push(f), l.push({
      formatter: s.content
    });
    var h = r.positionDefault, c = sn(l, this._tooltipModel, h ? {
      position: h
    } : null), v = c.get("content"), d = Math.random() + "", _ = new Vs();
    this._showOrMove(c, function() {
      var p = j(c.get("formatterParams") || {});
      this._showTooltipContent(c, v, p, d, r.offsetX, r.offsetY, r.position, i, _);
    }), n({
      type: "showTip",
      from: this.uid
    });
  }, t.prototype._showTooltipContent = function(r, i, n, a, o, s, u, l, f) {
    if (this._ticket = "", !(!r.get("showContent") || !r.get("show"))) {
      var h = this._tooltipContent;
      h.setEnterable(r.get("enterable"));
      var c = r.get("formatter");
      u = u || r.get("position");
      var v = i, d = this._getNearestPoint([o, s], n, r.get("trigger"), r.get("borderColor")), _ = d.color;
      if (c)
        if (z(c)) {
          var p = r.ecModel.get("useUTC"), g = N(n) ? n[0] : n, y = g && g.axisType && g.axisType.indexOf("time") >= 0;
          v = c, y && (v = Fp(g.axisValue, v, p)), v = Hp(v, n, !0);
        } else if (J(c)) {
          var m = at(function(w, b) {
            w === this._ticket && (h.setContent(b, f, r, _, u), this._updatePosition(r, u, o, s, h, n, l));
          }, this);
          this._ticket = a, v = c(n, a, m);
        } else
          v = c;
      h.setContent(v, f, r, _, u), h.show(r, _), this._updatePosition(r, u, o, s, h, n, l);
    }
  }, t.prototype._getNearestPoint = function(r, i, n, a) {
    if (n === "axis" || N(i))
      return {
        color: a || (this._renderMode === "html" ? "#fff" : "none")
      };
    if (!N(i))
      return {
        color: a || i.color || i.borderColor
      };
  }, t.prototype._updatePosition = function(r, i, n, a, o, s, u) {
    var l = this._api.getWidth(), f = this._api.getHeight();
    i = i || r.get("position");
    var h = o.getSize(), c = r.get("align"), v = r.get("verticalAlign"), d = u && u.getBoundingRect().clone();
    if (u && d.applyTransform(u.transform), J(i) && (i = i([n, a], s, o.el, d, {
      viewSize: [l, f],
      contentSize: h.slice()
    })), N(i))
      n = ft(i[0], l), a = ft(i[1], f);
    else if (F(i)) {
      var _ = i;
      _.width = h[0], _.height = h[1];
      var p = Bn(_, {
        width: l,
        height: f
      });
      n = p.x, a = p.y, c = null, v = null;
    } else if (z(i) && u) {
      var g = GD(i, d, h, r.get("borderWidth"));
      n = g[0], a = g[1];
    } else {
      var g = VD(n, a, o, l, f, c ? null : 20, v ? null : 20);
      n = g[0], a = g[1];
    }
    if (c && (n -= Hv(c) ? h[0] / 2 : c === "right" ? h[0] : 0), v && (a -= Hv(v) ? h[1] / 2 : v === "bottom" ? h[1] : 0), w_(r)) {
      var g = HD(n, a, o, l, f);
      n = g[0], a = g[1];
    }
    o.moveTo(n, a);
  }, t.prototype._updateContentNotChangedOnAxis = function(r, i) {
    var n = this._lastDataByCoordSys, a = this._cbParamsList, o = !!n && n.length === r.length;
    return o && A(n, function(s, u) {
      var l = s.dataByAxis || [], f = r[u] || {}, h = f.dataByAxis || [];
      o = o && l.length === h.length, o && A(l, function(c, v) {
        var d = h[v] || {}, _ = c.seriesDataIndices || [], p = d.seriesDataIndices || [];
        o = o && c.value === d.value && c.axisType === d.axisType && c.axisId === d.axisId && _.length === p.length, o && A(_, function(g, y) {
          var m = p[y];
          o = o && g.seriesIndex === m.seriesIndex && g.dataIndex === m.dataIndex;
        }), a && A(c.seriesDataIndices, function(g) {
          var y = g.seriesIndex, m = i[y], w = a[y];
          m && w && w.data !== m.data && (o = !1);
        });
      });
    }), this._lastDataByCoordSys = r, this._cbParamsList = i, !!o;
  }, t.prototype._hide = function(r) {
    this._lastDataByCoordSys = null, r({
      type: "hideTip",
      from: this.uid
    });
  }, t.prototype.dispose = function(r, i) {
    Z.node || !i.getDom() || (el(this, "_updatePosition"), this._tooltipContent.dispose(), hl("itemTooltip", i));
  }, t.type = "tooltip", t;
}(cr);
function sn(e, t, r) {
  var i = t.ecModel, n;
  r ? (n = new It(r, i, i), n = new It(t.option, n, i)) : n = t;
  for (var a = e.length - 1; a >= 0; a--) {
    var o = e[a];
    o && (o instanceof It && (o = o.get("tooltip", !0)), z(o) && (o = {
      formatter: o
    }), o && (n = new It(o, n, i)));
  }
  return n;
}
function Vv(e, t) {
  return e.dispatchAction || at(t.dispatchAction, t);
}
function VD(e, t, r, i, n, a, o) {
  var s = r.getSize(), u = s[0], l = s[1];
  return a != null && (e + u + a + 2 > i ? e -= u + a : e += a), o != null && (t + l + o > n ? t -= l + o : t += o), [e, t];
}
function HD(e, t, r, i, n) {
  var a = r.getSize(), o = a[0], s = a[1];
  return e = Math.min(e + o, i) - o, t = Math.min(t + s, n) - s, e = Math.max(e, 0), t = Math.max(t, 0), [e, t];
}
function GD(e, t, r, i) {
  var n = r[0], a = r[1], o = Math.ceil(Math.SQRT2 * i) + 8, s = 0, u = 0, l = t.width, f = t.height;
  switch (e) {
    case "inside":
      s = t.x + l / 2 - n / 2, u = t.y + f / 2 - a / 2;
      break;
    case "top":
      s = t.x + l / 2 - n / 2, u = t.y - a - o;
      break;
    case "bottom":
      s = t.x + l / 2 - n / 2, u = t.y + f + o;
      break;
    case "left":
      s = t.x - n - o, u = t.y + f / 2 - a / 2;
      break;
    case "right":
      s = t.x + l + o, u = t.y + f / 2 - a / 2;
  }
  return [s, u];
}
function Hv(e) {
  return e === "center" || e === "middle";
}
function WD(e, t, r) {
  var i = Il(e).queryOptionMap, n = i.keys()[0];
  if (!(!n || n === "series")) {
    var a = Xn(t, n, i.get(n), {
      useDefault: !1,
      enableAll: !1,
      enableNone: !1
    }), o = a.models[0];
    if (!!o) {
      var s = r.getViewOfComponentModel(o), u;
      if (s.group.traverse(function(l) {
        var f = ot(l).tooltipConfig;
        if (f && f.name === e.name)
          return u = l, !0;
      }), u)
        return {
          componentMainType: n,
          componentIndex: o.componentIndex,
          el: u
        };
    }
  }
}
const $D = FD;
function mf(e) {
  vr(SD), e.registerComponentModel(TD), e.registerComponentView($D), e.registerAction({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, Ut), e.registerAction({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, Ut);
}
var UD = function(e) {
  k(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.type = t.type, r.layoutMode = {
      type: "box",
      ignoreSize: !0
    }, r;
  }
  return t.type = "title", t.defaultOption = {
    z: 6,
    show: !0,
    text: "",
    target: "blank",
    subtext: "",
    subtarget: "blank",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "#ccc",
    borderWidth: 0,
    padding: 5,
    itemGap: 10,
    textStyle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#464646"
    },
    subtextStyle: {
      fontSize: 12,
      color: "#6E7079"
    }
  }, t;
}(lt), YD = function(e) {
  k(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.type = t.type, r;
  }
  return t.prototype.render = function(r, i, n) {
    if (this.group.removeAll(), !!r.get("show")) {
      var a = this.group, o = r.getModel("textStyle"), s = r.getModel("subtextStyle"), u = r.get("textAlign"), l = tt(r.get("textBaseline"), r.get("textVerticalAlign")), f = new Ft({
        style: hr(o, {
          text: r.get("text"),
          fill: o.getTextColor()
        }, {
          disableBox: !0
        }),
        z2: 10
      }), h = f.getBoundingRect(), c = r.get("subtext"), v = new Ft({
        style: hr(s, {
          text: c,
          fill: s.getTextColor(),
          y: h.height + r.get("itemGap"),
          verticalAlign: "top"
        }, {
          disableBox: !0
        }),
        z2: 10
      }), d = r.get("link"), _ = r.get("sublink"), p = r.get("triggerEvent", !0);
      f.silent = !d && !p, v.silent = !_ && !p, d && f.on("click", function() {
        Jh(d, "_" + r.get("target"));
      }), _ && v.on("click", function() {
        Jh(_, "_" + r.get("subtarget"));
      }), ot(f).eventData = ot(v).eventData = p ? {
        componentType: "title",
        componentIndex: r.componentIndex
      } : null, a.add(f), c && a.add(v);
      var g = a.getBoundingRect(), y = r.getBoxLayoutParams();
      y.width = g.width, y.height = g.height;
      var m = Bn(y, {
        width: n.getWidth(),
        height: n.getHeight()
      }, r.get("padding"));
      u || (u = r.get("left") || r.get("right"), u === "middle" && (u = "center"), u === "right" ? m.x += m.width : u === "center" && (m.x += m.width / 2)), l || (l = r.get("top") || r.get("bottom"), l === "center" && (l = "middle"), l === "bottom" ? m.y += m.height : l === "middle" && (m.y += m.height / 2), l = l || "top"), a.x = m.x, a.y = m.y, a.markRedraw();
      var w = {
        align: u,
        verticalAlign: l
      };
      f.setStyle(w), v.setStyle(w), g = a.getBoundingRect();
      var b = m.margin, S = r.getItemStyle(["color", "opacity"]);
      S.fill = r.get("backgroundColor");
      var T = new Dt({
        shape: {
          x: g.x - b[3],
          y: g.y - b[0],
          width: g.width + b[1] + b[3],
          height: g.height + b[0] + b[2],
          r: r.get("borderRadius")
        },
        style: S,
        subPixelOptimize: !0,
        silent: !0
      });
      a.add(T);
    }
  }, t.type = "title", t;
}(cr);
function wf(e) {
  e.registerComponentModel(UD), e.registerComponentView(YD);
}
var XD = function(e, t) {
  if (t === "all")
    return {
      type: "all",
      title: e.getLocaleModel().get(["legend", "selector", "all"])
    };
  if (t === "inverse")
    return {
      type: "inverse",
      title: e.getLocaleModel().get(["legend", "selector", "inverse"])
    };
}, qD = function(e) {
  k(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.type = t.type, r.layoutMode = {
      type: "box",
      ignoreSize: !0
    }, r;
  }
  return t.prototype.init = function(r, i, n) {
    this.mergeDefaultAndTheme(r, n), r.selected = r.selected || {}, this._updateSelector(r);
  }, t.prototype.mergeOption = function(r, i) {
    e.prototype.mergeOption.call(this, r, i), this._updateSelector(r);
  }, t.prototype._updateSelector = function(r) {
    var i = r.selector, n = this.ecModel;
    i === !0 && (i = r.selector = ["all", "inverse"]), N(i) && A(i, function(a, o) {
      z(a) && (a = {
        type: a
      }), i[o] = ht(a, XD(n, a.type));
    });
  }, t.prototype.optionUpdated = function() {
    this._updateData(this.ecModel);
    var r = this._data;
    if (r[0] && this.get("selectedMode") === "single") {
      for (var i = !1, n = 0; n < r.length; n++) {
        var a = r[n].get("name");
        if (this.isSelected(a)) {
          this.select(a), i = !0;
          break;
        }
      }
      !i && this.select(r[0].get("name"));
    }
  }, t.prototype._updateData = function(r) {
    var i = [], n = [];
    r.eachRawSeries(function(s) {
      var u = s.name;
      n.push(u);
      var l;
      if (s.legendVisualProvider) {
        var f = s.legendVisualProvider, h = f.getAllNames();
        r.isSeriesFiltered(s) || (n = n.concat(h)), h.length ? i = i.concat(h) : l = !0;
      } else
        l = !0;
      l && Ll(s) && i.push(s.name);
    }), this._availableNames = n;
    var a = this.get("data") || i, o = q(a, function(s) {
      return (z(s) || dt(s)) && (s = {
        name: s
      }), new It(s, this, this.ecModel);
    }, this);
    this._data = o;
  }, t.prototype.getData = function() {
    return this._data;
  }, t.prototype.select = function(r) {
    var i = this.option.selected, n = this.get("selectedMode");
    if (n === "single") {
      var a = this._data;
      A(a, function(o) {
        i[o.get("name")] = !1;
      });
    }
    i[r] = !0;
  }, t.prototype.unSelect = function(r) {
    this.get("selectedMode") !== "single" && (this.option.selected[r] = !1);
  }, t.prototype.toggleSelected = function(r) {
    var i = this.option.selected;
    i.hasOwnProperty(r) || (i[r] = !0), this[i[r] ? "unSelect" : "select"](r);
  }, t.prototype.allSelect = function() {
    var r = this._data, i = this.option.selected;
    A(r, function(n) {
      i[n.get("name", !0)] = !0;
    });
  }, t.prototype.inverseSelect = function() {
    var r = this._data, i = this.option.selected;
    A(r, function(n) {
      var a = n.get("name", !0);
      i.hasOwnProperty(a) || (i[a] = !0), i[a] = !i[a];
    });
  }, t.prototype.isSelected = function(r) {
    var i = this.option.selected;
    return !(i.hasOwnProperty(r) && !i[r]) && nt(this._availableNames, r) >= 0;
  }, t.prototype.getOrient = function() {
    return this.get("orient") === "vertical" ? {
      index: 1,
      name: "vertical"
    } : {
      index: 0,
      name: "horizontal"
    };
  }, t.type = "legend.plain", t.dependencies = ["series"], t.defaultOption = {
    z: 4,
    show: !0,
    orient: "horizontal",
    left: "center",
    top: 0,
    align: "auto",
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "#ccc",
    borderRadius: 0,
    borderWidth: 0,
    padding: 5,
    itemGap: 10,
    itemWidth: 25,
    itemHeight: 14,
    symbolRotate: "inherit",
    symbolKeepAspect: !0,
    inactiveColor: "#ccc",
    inactiveBorderColor: "#ccc",
    inactiveBorderWidth: "auto",
    itemStyle: {
      color: "inherit",
      opacity: "inherit",
      borderColor: "inherit",
      borderWidth: "auto",
      borderCap: "inherit",
      borderJoin: "inherit",
      borderDashOffset: "inherit",
      borderMiterLimit: "inherit"
    },
    lineStyle: {
      width: "auto",
      color: "inherit",
      inactiveColor: "#ccc",
      inactiveWidth: 2,
      opacity: "inherit",
      type: "inherit",
      cap: "inherit",
      join: "inherit",
      dashOffset: "inherit",
      miterLimit: "inherit"
    },
    textStyle: {
      color: "#333"
    },
    selectedMode: !0,
    selector: !1,
    selectorLabel: {
      show: !0,
      borderRadius: 10,
      padding: [3, 5, 3, 5],
      fontSize: 12,
      fontFamily: "sans-serif",
      color: "#666",
      borderWidth: 1,
      borderColor: "#666"
    },
    emphasis: {
      selectorLabel: {
        show: !0,
        color: "#eee",
        backgroundColor: "#666"
      }
    },
    selectorPosition: "auto",
    selectorItemGap: 7,
    selectorButtonGap: 10,
    tooltip: {
      show: !1
    }
  }, t;
}(lt);
const cl = qD;
var _i = _t, vl = A, Ra = ye, ZD = function(e) {
  k(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.type = t.type, r.newlineDisabled = !1, r;
  }
  return t.prototype.init = function() {
    this.group.add(this._contentGroup = new Ra()), this.group.add(this._selectorGroup = new Ra()), this._isFirstRender = !0;
  }, t.prototype.getContentGroup = function() {
    return this._contentGroup;
  }, t.prototype.getSelectorGroup = function() {
    return this._selectorGroup;
  }, t.prototype.render = function(r, i, n) {
    var a = this._isFirstRender;
    if (this._isFirstRender = !1, this.resetInner(), !!r.get("show", !0)) {
      var o = r.get("align"), s = r.get("orient");
      (!o || o === "auto") && (o = r.get("left") === "right" && s === "vertical" ? "right" : "left");
      var u = r.get("selector", !0), l = r.get("selectorPosition", !0);
      u && (!l || l === "auto") && (l = s === "horizontal" ? "end" : "start"), this.renderInner(o, r, i, n, u, s, l);
      var f = r.getBoxLayoutParams(), h = {
        width: n.getWidth(),
        height: n.getHeight()
      }, c = r.get("padding"), v = Bn(f, h, c), d = this.layoutInner(r, o, v, a, u, l), _ = Bn(ct({
        width: d.width,
        height: d.height
      }, f), h, c);
      this.group.x = _.x - d.x, this.group.y = _.y - d.y, this.group.markRedraw(), this.group.add(this._backgroundEl = bD(d, r));
    }
  }, t.prototype.resetInner = function() {
    this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll();
  }, t.prototype.renderInner = function(r, i, n, a, o, s, u) {
    var l = this.getContentGroup(), f = Q(), h = i.get("selectedMode"), c = [];
    n.eachRawSeries(function(v) {
      !v.get("legendHoverLink") && c.push(v.id);
    }), vl(i.getData(), function(v, d) {
      var _ = v.get("name");
      if (!this.newlineDisabled && (_ === "" || _ === `
`)) {
        var p = new Ra();
        p.newline = !0, l.add(p);
        return;
      }
      var g = n.getSeriesByName(_)[0];
      if (!f.get(_)) {
        if (g) {
          var y = g.getData(), m = y.getVisual("legendLineStyle") || {}, w = y.getVisual("legendIcon"), b = y.getVisual("style"), S = this._createItem(g, _, d, v, i, r, m, b, w, h, a);
          S.on("click", _i(Gv, _, null, a, c)).on("mouseover", _i(dl, g.name, null, a, c)).on("mouseout", _i(pl, g.name, null, a, c)), f.set(_, !0);
        } else
          n.eachRawSeries(function(T) {
            if (!f.get(_) && T.legendVisualProvider) {
              var x = T.legendVisualProvider;
              if (!x.containName(_))
                return;
              var C = x.indexOfName(_), E = x.getItemVisual(C, "style"), D = x.getItemVisual(C, "legendIcon"), M = Wr(E.fill);
              M && M[3] === 0 && (M[3] = 0.2, E = O(O({}, E), {
                fill: Tl(M, "rgba")
              }));
              var P = this._createItem(T, _, d, v, i, r, {}, E, D, h, a);
              P.on("click", _i(Gv, null, _, a, c)).on("mouseover", _i(dl, null, _, a, c)).on("mouseout", _i(pl, null, _, a, c)), f.set(_, !0);
            }
          }, this);
        process.env.NODE_ENV !== "production" && (f.get(_) || console.warn(_ + " series not exists. Legend data should be same with series name or data name."));
      }
    }, this), o && this._createSelector(o, i, a, s, u);
  }, t.prototype._createSelector = function(r, i, n, a, o) {
    var s = this.getSelectorGroup();
    vl(r, function(l) {
      var f = l.type, h = new Ft({
        style: {
          x: 0,
          y: 0,
          align: "center",
          verticalAlign: "middle"
        },
        onclick: function() {
          n.dispatchAction({
            type: f === "all" ? "legendAllSelect" : "legendInverseSelect"
          });
        }
      });
      s.add(h);
      var c = i.getModel("selectorLabel"), v = i.getModel(["emphasis", "selectorLabel"]);
      ql(h, {
        normal: c,
        emphasis: v
      }, {
        defaultText: l.title
      }), $u(h);
    });
  }, t.prototype._createItem = function(r, i, n, a, o, s, u, l, f, h, c) {
    var v = r.visualDrawType, d = o.get("itemWidth"), _ = o.get("itemHeight"), p = o.isSelected(i), g = a.get("symbolRotate"), y = a.get("symbolKeepAspect"), m = a.get("icon");
    f = m || f || "roundRect";
    var w = KD(f, a, u, l, v, p, c), b = new Ra(), S = a.getModel("textStyle");
    if (J(r.getLegendIcon) && (!m || m === "inherit"))
      b.add(r.getLegendIcon({
        itemWidth: d,
        itemHeight: _,
        icon: f,
        iconRotate: g,
        itemStyle: w.itemStyle,
        lineStyle: w.lineStyle,
        symbolKeepAspect: y
      }));
    else {
      var T = m === "inherit" && r.getData().getVisual("symbol") ? g === "inherit" ? r.getData().getVisual("symbolRotate") : g : 0;
      b.add(QD({
        itemWidth: d,
        itemHeight: _,
        icon: f,
        iconRotate: T,
        itemStyle: w.itemStyle,
        lineStyle: w.lineStyle,
        symbolKeepAspect: y
      }));
    }
    var x = s === "left" ? d + 5 : -5, C = s, E = o.get("formatter"), D = i;
    z(E) && E ? D = E.replace("{name}", i != null ? i : "") : J(E) && (D = E(i));
    var M = a.get("inactiveColor");
    b.add(new Ft({
      style: hr(S, {
        text: D,
        x,
        y: _ / 2,
        fill: p ? S.getTextColor() : M,
        align: C,
        verticalAlign: "middle"
      })
    }));
    var P = new Dt({
      shape: b.getBoundingRect(),
      invisible: !0
    }), L = a.getModel("tooltip");
    return L.get("show") && Yl({
      el: P,
      componentModel: o,
      itemName: i,
      itemTooltipOption: L.option
    }), b.add(P), b.eachChild(function(I) {
      I.silent = !0;
    }), P.silent = !h, this.getContentGroup().add(b), $u(b), b.__legendDataIndex = n, b;
  }, t.prototype.layoutInner = function(r, i, n, a, o, s) {
    var u = this.getContentGroup(), l = this.getSelectorGroup();
    Dn(r.get("orient"), u, r.get("itemGap"), n.width, n.height);
    var f = u.getBoundingRect(), h = [-f.x, -f.y];
    if (l.markRedraw(), u.markRedraw(), o) {
      Dn(
        "horizontal",
        l,
        r.get("selectorItemGap", !0)
      );
      var c = l.getBoundingRect(), v = [-c.x, -c.y], d = r.get("selectorButtonGap", !0), _ = r.getOrient().index, p = _ === 0 ? "width" : "height", g = _ === 0 ? "height" : "width", y = _ === 0 ? "y" : "x";
      s === "end" ? v[_] += f[p] + d : h[_] += c[p] + d, v[1 - _] += f[g] / 2 - c[g] / 2, l.x = v[0], l.y = v[1], u.x = h[0], u.y = h[1];
      var m = {
        x: 0,
        y: 0
      };
      return m[p] = f[p] + d + c[p], m[g] = Math.max(f[g], c[g]), m[y] = Math.min(0, c[y] + v[1 - _]), m;
    } else
      return u.x = h[0], u.y = h[1], this.group.getBoundingRect();
  }, t.prototype.remove = function() {
    this.getContentGroup().removeAll(), this._isFirstRender = !0;
  }, t.type = "legend.plain", t;
}(cr);
function KD(e, t, r, i, n, a, o) {
  function s(p, g) {
    p.lineWidth === "auto" && (p.lineWidth = g.lineWidth > 0 ? 2 : 0), vl(p, function(y, m) {
      p[m] === "inherit" && (p[m] = g[m]);
    });
  }
  var u = t.getModel("itemStyle"), l = u.getItemStyle(), f = e.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke", h = u.getShallow("decal");
  l.decal = !h || h === "inherit" ? i.decal : ol(h, o), l.fill === "inherit" && (l.fill = i[n]), l.stroke === "inherit" && (l.stroke = i[f]), l.opacity === "inherit" && (l.opacity = (n === "fill" ? i : r).opacity), s(l, i);
  var c = t.getModel("lineStyle"), v = c.getLineStyle();
  if (s(v, r), l.fill === "auto" && (l.fill = i.fill), l.stroke === "auto" && (l.stroke = i.fill), v.stroke === "auto" && (v.stroke = i.fill), !a) {
    var d = t.get("inactiveBorderWidth"), _ = l[f];
    l.lineWidth = d === "auto" ? i.lineWidth > 0 && _ ? 2 : 0 : l.lineWidth, l.fill = t.get("inactiveColor"), l.stroke = t.get("inactiveBorderColor"), v.stroke = c.get("inactiveColor"), v.lineWidth = c.get("inactiveWidth");
  }
  return {
    itemStyle: l,
    lineStyle: v
  };
}
function QD(e) {
  var t = e.icon || "roundRect", r = ff(t, 0, 0, e.itemWidth, e.itemHeight, e.itemStyle.fill, e.symbolKeepAspect);
  return r.setStyle(e.itemStyle), r.rotation = (e.iconRotate || 0) * Math.PI / 180, r.setOrigin([e.itemWidth / 2, e.itemHeight / 2]), t.indexOf("empty") > -1 && (r.style.stroke = r.style.fill, r.style.fill = "#fff", r.style.lineWidth = 2), r;
}
function Gv(e, t, r, i) {
  pl(e, t, r, i), r.dispatchAction({
    type: "legendToggleSelect",
    name: e != null ? e : t
  }), dl(e, t, r, i);
}
function T_(e) {
  for (var t = e.getZr().storage.getDisplayList(), r, i = 0, n = t.length; i < n && !(r = t[i].states.emphasis); )
    i++;
  return r && r.hoverLayer;
}
function dl(e, t, r, i) {
  T_(r) || r.dispatchAction({
    type: "highlight",
    seriesName: e,
    name: t,
    excludeSeriesId: i
  });
}
function pl(e, t, r, i) {
  T_(r) || r.dispatchAction({
    type: "downplay",
    seriesName: e,
    name: t,
    excludeSeriesId: i
  });
}
const C_ = ZD;
function JD(e) {
  var t = e.findComponents({
    mainType: "legend"
  });
  t && t.length && e.filterSeries(function(r) {
    for (var i = 0; i < t.length; i++)
      if (!t[i].isSelected(r.name))
        return !1;
    return !0;
  });
}
function un(e, t, r) {
  var i = {}, n = e === "toggleSelected", a;
  return r.eachComponent("legend", function(o) {
    n && a != null ? o[a ? "select" : "unSelect"](t.name) : e === "allSelect" || e === "inverseSelect" ? o[e]() : (o[e](t.name), a = o.isSelected(t.name));
    var s = o.getData();
    A(s, function(u) {
      var l = u.get("name");
      if (!(l === `
` || l === "")) {
        var f = o.isSelected(l);
        i.hasOwnProperty(l) ? i[l] = i[l] && f : i[l] = f;
      }
    });
  }), e === "allSelect" || e === "inverseSelect" ? {
    selected: i
  } : {
    name: t.name,
    selected: i
  };
}
function jD(e) {
  e.registerAction("legendToggleSelect", "legendselectchanged", _t(un, "toggleSelected")), e.registerAction("legendAllSelect", "legendselectall", _t(un, "allSelect")), e.registerAction("legendInverseSelect", "legendinverseselect", _t(un, "inverseSelect")), e.registerAction("legendSelect", "legendselected", _t(un, "select")), e.registerAction("legendUnSelect", "legendunselected", _t(un, "unSelect"));
}
function D_(e) {
  e.registerComponentModel(cl), e.registerComponentView(C_), e.registerProcessor(e.PRIORITY.PROCESSOR.SERIES_FILTER, JD), e.registerSubTypeDefaulter("legend", function() {
    return "plain";
  }), jD(e);
}
var tA = function(e) {
  k(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.type = t.type, r;
  }
  return t.prototype.setScrollDataIndex = function(r) {
    this.option.scrollDataIndex = r;
  }, t.prototype.init = function(r, i, n) {
    var a = jl(r);
    e.prototype.init.call(this, r, i, n), Wv(this, r, a);
  }, t.prototype.mergeOption = function(r, i) {
    e.prototype.mergeOption.call(this, r, i), Wv(this, this.option, r);
  }, t.type = "legend.scroll", t.defaultOption = kp(cl.defaultOption, {
    scrollDataIndex: 0,
    pageButtonItemGap: 5,
    pageButtonGap: null,
    pageButtonPosition: "end",
    pageFormatter: "{current}/{total}",
    pageIcons: {
      horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
      vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
    },
    pageIconColor: "#2f4554",
    pageIconInactiveColor: "#aaa",
    pageIconSize: 15,
    pageTextStyle: {
      color: "#333"
    },
    animationDurationUpdate: 800
  }), t;
}(cl);
function Wv(e, t, r) {
  var i = e.getOrient(), n = [1, 1];
  n[i.index] = 0, zn(t, r, {
    type: "box",
    ignoreSize: !!n
  });
}
const eA = tA;
var $v = ye, su = ["width", "height"], uu = ["x", "y"], rA = function(e) {
  k(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.type = t.type, r.newlineDisabled = !0, r._currentIndex = 0, r;
  }
  return t.prototype.init = function() {
    e.prototype.init.call(this), this.group.add(this._containerGroup = new $v()), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new $v());
  }, t.prototype.resetInner = function() {
    e.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null;
  }, t.prototype.renderInner = function(r, i, n, a, o, s, u) {
    var l = this;
    e.prototype.renderInner.call(this, r, i, n, a, o, s, u);
    var f = this._controllerGroup, h = i.get("pageIconSize", !0), c = N(h) ? h : [h, h];
    d("pagePrev", 0);
    var v = i.getModel("pageTextStyle");
    f.add(new Ft({
      name: "pageText",
      style: {
        text: "xx/xx",
        fill: v.getTextColor(),
        font: v.getFont(),
        verticalAlign: "middle",
        align: "center"
      },
      silent: !0
    })), d("pageNext", 1);
    function d(_, p) {
      var g = _ + "DataIndex", y = Ul(i.get("pageIcons", !0)[i.getOrient().name][p], {
        onclick: at(l._pageGo, l, g, i, a)
      }, {
        x: -c[0] / 2,
        y: -c[1] / 2,
        width: c[0],
        height: c[1]
      });
      y.name = _, f.add(y);
    }
  }, t.prototype.layoutInner = function(r, i, n, a, o, s) {
    var u = this.getSelectorGroup(), l = r.getOrient().index, f = su[l], h = uu[l], c = su[1 - l], v = uu[1 - l];
    o && Dn(
      "horizontal",
      u,
      r.get("selectorItemGap", !0)
    );
    var d = r.get("selectorButtonGap", !0), _ = u.getBoundingRect(), p = [-_.x, -_.y], g = j(n);
    o && (g[f] = n[f] - _[f] - d);
    var y = this._layoutContentAndController(r, a, g, l, f, c, v, h);
    if (o) {
      if (s === "end")
        p[l] += y[f] + d;
      else {
        var m = _[f] + d;
        p[l] -= m, y[h] -= m;
      }
      y[f] += _[f] + d, p[1 - l] += y[v] + y[c] / 2 - _[c] / 2, y[c] = Math.max(y[c], _[c]), y[v] = Math.min(y[v], _[v] + p[1 - l]), u.x = p[0], u.y = p[1], u.markRedraw();
    }
    return y;
  }, t.prototype._layoutContentAndController = function(r, i, n, a, o, s, u, l) {
    var f = this.getContentGroup(), h = this._containerGroup, c = this._controllerGroup;
    Dn(r.get("orient"), f, r.get("itemGap"), a ? n.width : null, a ? null : n.height), Dn(
      "horizontal",
      c,
      r.get("pageButtonItemGap", !0)
    );
    var v = f.getBoundingRect(), d = c.getBoundingRect(), _ = this._showController = v[o] > n[o], p = [-v.x, -v.y];
    i || (p[a] = f[l]);
    var g = [0, 0], y = [-d.x, -d.y], m = tt(r.get("pageButtonGap", !0), r.get("itemGap", !0));
    if (_) {
      var w = r.get("pageButtonPosition", !0);
      w === "end" ? y[a] += n[o] - d[o] : g[a] += d[o] + m;
    }
    y[1 - a] += v[s] / 2 - d[s] / 2, f.setPosition(p), h.setPosition(g), c.setPosition(y);
    var b = {
      x: 0,
      y: 0
    };
    if (b[o] = _ ? n[o] : v[o], b[s] = Math.max(v[s], d[s]), b[u] = Math.min(0, d[u] + y[1 - a]), h.__rectSize = n[o], _) {
      var S = {
        x: 0,
        y: 0
      };
      S[o] = Math.max(n[o] - d[o] - m, 0), S[s] = b[s], h.setClipPath(new Dt({
        shape: S
      })), h.__rectSize = S[o];
    } else
      c.eachChild(function(x) {
        x.attr({
          invisible: !0,
          silent: !0
        });
      });
    var T = this._getPageInfo(r);
    return T.pageIndex != null && me(
      f,
      {
        x: T.contentPosition[0],
        y: T.contentPosition[1]
      },
      _ ? r : null
    ), this._updatePageInfoView(r, T), b;
  }, t.prototype._pageGo = function(r, i, n) {
    var a = this._getPageInfo(i)[r];
    a != null && n.dispatchAction({
      type: "legendScroll",
      scrollDataIndex: a,
      legendId: i.id
    });
  }, t.prototype._updatePageInfoView = function(r, i) {
    var n = this._controllerGroup;
    A(["pagePrev", "pageNext"], function(f) {
      var h = f + "DataIndex", c = i[h] != null, v = n.childOfName(f);
      v && (v.setStyle("fill", c ? r.get("pageIconColor", !0) : r.get("pageIconInactiveColor", !0)), v.cursor = c ? "pointer" : "default");
    });
    var a = n.childOfName("pageText"), o = r.get("pageFormatter"), s = i.pageIndex, u = s != null ? s + 1 : 0, l = i.pageCount;
    a && o && a.setStyle("text", z(o) ? o.replace("{current}", u == null ? "" : u + "").replace("{total}", l == null ? "" : l + "") : o({
      current: u,
      total: l
    }));
  }, t.prototype._getPageInfo = function(r) {
    var i = r.get("scrollDataIndex", !0), n = this.getContentGroup(), a = this._containerGroup.__rectSize, o = r.getOrient().index, s = su[o], u = uu[o], l = this._findTargetItemIndex(i), f = n.children(), h = f[l], c = f.length, v = c ? 1 : 0, d = {
      contentPosition: [n.x, n.y],
      pageCount: v,
      pageIndex: v - 1,
      pagePrevDataIndex: null,
      pageNextDataIndex: null
    };
    if (!h)
      return d;
    var _ = w(h);
    d.contentPosition[o] = -_.s;
    for (var p = l + 1, g = _, y = _, m = null; p <= c; ++p)
      m = w(f[p]), (!m && y.e > g.s + a || m && !b(m, g.s)) && (y.i > g.i ? g = y : g = m, g && (d.pageNextDataIndex == null && (d.pageNextDataIndex = g.i), ++d.pageCount)), y = m;
    for (var p = l - 1, g = _, y = _, m = null; p >= -1; --p)
      m = w(f[p]), (!m || !b(y, m.s)) && g.i < y.i && (y = g, d.pagePrevDataIndex == null && (d.pagePrevDataIndex = g.i), ++d.pageCount, ++d.pageIndex), g = m;
    return d;
    function w(S) {
      if (S) {
        var T = S.getBoundingRect(), x = T[u] + S[u];
        return {
          s: x,
          e: x + T[s],
          i: S.__legendDataIndex
        };
      }
    }
    function b(S, T) {
      return S.e >= T && S.s <= T + a;
    }
  }, t.prototype._findTargetItemIndex = function(r) {
    if (!this._showController)
      return 0;
    var i, n = this.getContentGroup(), a;
    return n.eachChild(function(o, s) {
      var u = o.__legendDataIndex;
      a == null && u != null && (a = s), u === r && (i = s);
    }), i != null ? i : a;
  }, t.type = "legend.scroll", t;
}(C_);
const iA = rA;
function nA(e) {
  e.registerAction("legendScroll", "legendscroll", function(t, r) {
    var i = t.scrollDataIndex;
    i != null && r.eachComponent({
      mainType: "legend",
      subType: "scroll",
      query: t
    }, function(n) {
      n.setScrollDataIndex(i);
    });
  });
}
function aA(e) {
  vr(D_), e.registerComponentModel(eA), e.registerComponentView(iA), nA(e);
}
function Sf(e) {
  vr(D_), vr(aA);
}
var lu = null;
function oA(e) {
  return lu || (lu = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
    return setTimeout(t, 16);
  }).bind(window)), lu(e);
}
var fu = null;
function sA(e) {
  fu || (fu = (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(t) {
    clearTimeout(t);
  }).bind(window)), fu(e);
}
function uA(e) {
  var t = document.createElement("style");
  return t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), (document.querySelector("head") || document.body).appendChild(t), t;
}
function Oa(e, t) {
  t === void 0 && (t = {});
  var r = document.createElement(e);
  return Object.keys(t).forEach(function(i) {
    r[i] = t[i];
  }), r;
}
function A_(e, t, r) {
  var i = window.getComputedStyle(e, r || null) || {
    display: "none"
  };
  return i[t];
}
function gl(e) {
  if (!document.documentElement.contains(e))
    return {
      detached: !0,
      rendered: !1
    };
  for (var t = e; t !== document; ) {
    if (A_(t, "display") === "none")
      return {
        detached: !1,
        rendered: !1
      };
    t = t.parentNode;
  }
  return {
    detached: !1,
    rendered: !0
  };
}
var lA = '.resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}', _l = 0, Za = null;
function fA(e, t) {
  e.__resize_mutation_handler__ || (e.__resize_mutation_handler__ = vA.bind(e));
  var r = e.__resize_listeners__;
  if (!r) {
    if (e.__resize_listeners__ = [], window.ResizeObserver) {
      var i = e.offsetWidth, n = e.offsetHeight, a = new ResizeObserver(function() {
        !e.__resize_observer_triggered__ && (e.__resize_observer_triggered__ = !0, e.offsetWidth === i && e.offsetHeight === n) || To(e);
      }), o = gl(e), s = o.detached, u = o.rendered;
      e.__resize_observer_triggered__ = s === !1 && u === !1, e.__resize_observer__ = a, a.observe(e);
    } else if (e.attachEvent && e.addEventListener)
      e.__resize_legacy_resize_handler__ = function() {
        To(e);
      }, e.attachEvent("onresize", e.__resize_legacy_resize_handler__), document.addEventListener("DOMSubtreeModified", e.__resize_mutation_handler__);
    else if (_l || (Za = uA(lA)), dA(e), e.__resize_rendered__ = gl(e).rendered, window.MutationObserver) {
      var l = new MutationObserver(e.__resize_mutation_handler__);
      l.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), e.__resize_mutation_observer__ = l;
    }
  }
  e.__resize_listeners__.push(t), _l++;
}
function hA(e, t) {
  var r = e.__resize_listeners__;
  if (!!r) {
    if (t && r.splice(r.indexOf(t), 1), !r.length || !t) {
      if (e.detachEvent && e.removeEventListener) {
        e.detachEvent("onresize", e.__resize_legacy_resize_handler__), document.removeEventListener("DOMSubtreeModified", e.__resize_mutation_handler__);
        return;
      }
      e.__resize_observer__ ? (e.__resize_observer__.unobserve(e), e.__resize_observer__.disconnect(), e.__resize_observer__ = null) : (e.__resize_mutation_observer__ && (e.__resize_mutation_observer__.disconnect(), e.__resize_mutation_observer__ = null), e.removeEventListener("scroll", bf), e.removeChild(e.__resize_triggers__.triggers), e.__resize_triggers__ = null), e.__resize_listeners__ = null;
    }
    !--_l && Za && Za.parentNode.removeChild(Za);
  }
}
function cA(e) {
  var t = e.__resize_last__, r = t.width, i = t.height, n = e.offsetWidth, a = e.offsetHeight;
  return n !== r || a !== i ? {
    width: n,
    height: a
  } : null;
}
function vA() {
  var e = gl(this), t = e.rendered, r = e.detached;
  t !== this.__resize_rendered__ && (!r && this.__resize_triggers__ && (xf(this), this.addEventListener("scroll", bf, !0)), this.__resize_rendered__ = t, To(this));
}
function bf() {
  var e = this;
  xf(this), this.__resize_raf__ && sA(this.__resize_raf__), this.__resize_raf__ = oA(function() {
    var t = cA(e);
    t && (e.__resize_last__ = t, To(e));
  });
}
function To(e) {
  !e || !e.__resize_listeners__ || e.__resize_listeners__.forEach(function(t) {
    t.call(e, e);
  });
}
function dA(e) {
  var t = A_(e, "position");
  (!t || t === "static") && (e.style.position = "relative"), e.__resize_old_position__ = t, e.__resize_last__ = {};
  var r = Oa("div", {
    className: "resize-triggers"
  }), i = Oa("div", {
    className: "resize-expand-trigger"
  }), n = Oa("div"), a = Oa("div", {
    className: "resize-contract-trigger"
  });
  i.appendChild(n), r.appendChild(i), r.appendChild(a), e.appendChild(r), e.__resize_triggers__ = {
    triggers: r,
    expand: i,
    expandChild: n,
    contract: a
  }, xf(e), e.addEventListener("scroll", bf, !0), e.__resize_last__ = {
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
function xf(e) {
  var t = e.__resize_triggers__, r = t.expand, i = t.expandChild, n = t.contract, a = n.scrollWidth, o = n.scrollHeight, s = r.offsetWidth, u = r.offsetHeight, l = r.scrollWidth, f = r.scrollHeight;
  n.scrollLeft = a, n.scrollTop = o, i.style.width = s + 1 + "px", i.style.height = u + 1 + "px", r.scrollLeft = l, r.scrollTop = f;
}
var $e = function() {
  return $e = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++)
      for (var n in t = arguments[r])
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e;
  }, $e.apply(this, arguments);
}, pA = ["getWidth", "getHeight", "getDom", "getOption", "resize", "dispatchAction", "convertToPixel", "convertFromPixel", "containPixel", "getDataURL", "getConnectedDataURL", "appendData", "clear", "isDisposed", "dispose"];
function gA(e) {
  return t = /* @__PURE__ */ Object.create(null), pA.forEach(function(r) {
    t[r] = function(i) {
      return function() {
        for (var n = [], a = 0; a < arguments.length; a++)
          n[a] = arguments[a];
        if (!e.value)
          throw new Error("ECharts is not initialized yet.");
        return e.value[i].apply(e.value, n);
      };
    }(r);
  }), t;
  var t;
}
var _A = { autoresize: Boolean }, yA = { loading: Boolean, loadingOptions: Object }, mA = /^on[^a-z]/, wA = function(e) {
  return mA.test(e);
}, Uv = [], ln = [];
(function(e, t) {
  if (e && typeof document < "u") {
    var r, i = t.prepend === !0 ? "prepend" : "append", n = t.singleTag === !0, a = typeof t.container == "string" ? document.querySelector(t.container) : document.getElementsByTagName("head")[0];
    if (n) {
      var o = Uv.indexOf(a);
      o === -1 && (o = Uv.push(a) - 1, ln[o] = {}), r = ln[o] && ln[o][i] ? ln[o][i] : ln[o][i] = s();
    } else
      r = s();
    e.charCodeAt(0) === 65279 && (e = e.substring(1)), r.styleSheet ? r.styleSheet.cssText += e : r.appendChild(document.createTextNode(e));
  }
  function s() {
    var u = document.createElement("style");
    if (u.setAttribute("type", "text/css"), t.attributes)
      for (var l = Object.keys(t.attributes), f = 0; f < l.length; f++)
        u.setAttribute(l[f], t.attributes[l[f]]);
    var h = i === "prepend" ? "afterbegin" : "beforeend";
    return a.insertAdjacentElement(h, u), u;
  }
})("x-vue-echarts{display:block;width:100%;height:100%}", {});
var Tf = Ii({ name: "echarts", props: $e($e({ option: Object, theme: { type: [Object, String] }, initOptions: Object, updateOptions: Object, group: String, manualUpdate: Boolean }, _A), yA), inheritAttrs: !1, setup: function(e, t) {
  var r = t.attrs, i = Yo(), n = Yo(), a = Yo(), o = Kn("ecTheme", null), s = Kn("ecInitOptions", null), u = Kn("ecUpdateOptions", null), l = L_(e), f = l.autoresize, h = l.manualUpdate, c = l.loading, v = l.loadingOptions, d = ri(function() {
    return a.value || e.option || null;
  }), _ = ri(function() {
    return e.theme || H(o) || {};
  }), p = ri(function() {
    return e.initOptions || H(s) || {};
  }), g = ri(function() {
    return e.updateOptions || H(u) || {};
  }), y = ri(function() {
    return function(x) {
      var C = {};
      for (var E in x)
        wA(E) || (C[E] = x[E]);
      return C;
    }(r);
  }), m = I_().proxy.$listeners;
  function w(x) {
    if (i.value) {
      var C = n.value = zx(i.value, _.value, p.value);
      e.group && (C.group = e.group);
      var E = m;
      E || (E = {}, Object.keys(r).filter(function(M) {
        return M.indexOf("on") === 0 && M.length > 2;
      }).forEach(function(M) {
        var P = M.charAt(2).toLowerCase() + M.slice(3);
        P.substring(P.length - 4) === "Once" && (P = "~".concat(P.substring(0, P.length - 4))), E[P] = r[M];
      })), Object.keys(E).forEach(function(M) {
        var P = E[M];
        if (P) {
          var L = M.toLowerCase();
          L.charAt(0) === "~" && (L = L.substring(1), P.__once__ = !0);
          var I = C;
          if (L.indexOf("zr:") === 0 && (I = C.getZr(), L = L.substring(3)), P.__once__) {
            delete P.__once__;
            var R = P;
            P = function() {
              for (var $ = [], B = 0; B < arguments.length; B++)
                $[B] = arguments[B];
              R.apply(void 0, $), I.off(L, P);
            };
          }
          I.on(L, P);
        }
      }), f.value ? Xv(function() {
        C && !C.isDisposed() && C.resize(), D();
      }) : D();
    }
    function D() {
      var M = x || d.value;
      M && C.setOption(M, g.value);
    }
  }
  function b() {
    n.value && (n.value.dispose(), n.value = void 0);
  }
  var S = null;
  nr(h, function(x) {
    typeof S == "function" && (S(), S = null), x || (S = nr(function() {
      return e.option;
    }, function(C, E) {
      C && (n.value ? n.value.setOption(C, $e({ notMerge: C.value !== (E == null ? void 0 : E.value) }, g.value)) : w());
    }, { deep: !0 }));
  }, { immediate: !0 }), nr([_, p], function() {
    b(), w();
  }, { deep: !0 }), Af(function() {
    e.group && n.value && (n.value.group = e.group);
  });
  var T = gA(n);
  return function(x, C, E) {
    var D = Kn("ecLoadingOptions", {}), M = ri(function() {
      return $e($e({}, H(D)), E == null ? void 0 : E.value);
    });
    Af(function() {
      var P = x.value;
      P && (C.value ? P.showLoading(M.value) : P.hideLoading());
    });
  }(n, c, v), function(x, C, E) {
    var D = null;
    nr([E, x, C], function(M, P, L) {
      var I = M[0], R = M[1], $ = M[2];
      I && R && $ && (D = Go(function() {
        R.resize();
      }, 100), fA(I, D)), L(function() {
        D && I && hA(I, D);
      });
    });
  }(n, f, i), Co(function() {
    w();
  }), Yv(b), $e({ chart: n, root: i, setOption: function(x, C) {
    e.manualUpdate && (a.value = x), n.value ? n.value.setOption(x, C || {}) : w(x);
  }, nonEventAttrs: y }, T);
}, render: function() {
  var e = $e({}, this.nonEventAttrs);
  return e.ref = "root", e.class = e.class ? ["echarts"].concat(e.class) : "echarts", R_("x-vue-echarts", e);
} });
const SA = /* @__PURE__ */ Ii({
  __name: "index",
  props: {
    option: {
      type: Object
    },
    theme: {
      type: String
    },
    class: {
      type: String
    }
  },
  setup(e) {
    const t = e;
    return vr([
      gf,
      v_,
      wf,
      mf,
      Sf
    ]), (r, i) => (Nt(), yl(H(Tf), {
      class: Do(t.class),
      option: t.option
    }, null, 8, ["class", "option"]));
  }
}), hu = {
  install(e) {
    e.component("DzCharts", SA);
  }
}, bA = /* @__PURE__ */ Ii({
  __name: "index",
  props: {
    class: null,
    data: null,
    config: null
  },
  setup(e) {
    const t = e;
    vr([
      gf,
      _C,
      Sf,
      wf,
      mf
    ]);
    const r = (f) => ({
      legend: {
        ...f
      }
    }), i = (f) => ({
      grid: f
    }), n = (f) => ({
      xAxis: f
    }), a = (f) => ({
      yAxis: f
    }), o = (f) => ({
      axisLabel: f
    }), s = (f) => ({
      series: f.map((h) => ({
        type: "bar",
        color: h.color,
        data: h.data
      }))
    }), u = (f, h) => Ee({
      ...r(h.legendConfig),
      ...i(h.gridConfig),
      ...n(h.xAxisConfig),
      ...a(h.yAxisConfig),
      ...o(h.aAxisLabelConfig),
      ...s(f)
    });
    let l = u(t.data, t.config);
    return nr([() => t.data, () => t.config], (f) => {
      l = u(f[0], f[1]);
    }, {
      deep: !0
    }), (f, h) => (Nt(), yl(H(Tf), {
      class: Do(t.class),
      option: H(l)
    }, null, 8, ["class", "option"]));
  }
}), cu = {
  install(e) {
    e.component("DzBarChart", bA);
  }
}, xA = /* @__PURE__ */ Ii({
  __name: "index",
  props: {
    class: null,
    data: null,
    config: null
  },
  setup(e) {
    const t = e;
    vr([
      gf,
      v_,
      wf,
      mf,
      Sf
    ]);
    const r = (s) => ({
      legend: {
        ...s
      }
    }), i = (s) => ({
      title: s
    }), n = (s, u) => ({
      series: [
        {
          name: "ringChart",
          type: "pie",
          radius: u.radius,
          center: u.center,
          color: u.color,
          label: u.label,
          labelLine: u.labelLine,
          data: s
        }
      ]
    }), a = (s, u) => Ee({
      ...r(u.legendConfig),
      ...i(u.title),
      ...n(s, u)
    });
    let o = a(t.data, t.config);
    return nr([() => t.data, () => t.config], (s) => {
      o = a(s[0], s[1]);
    }, {
      deep: !0
    }), (s, u) => (Nt(), yl(H(Tf), {
      class: Do(t.class),
      option: H(o)
    }, null, 8, ["class", "option"]));
  }
}), vu = {
  install(e) {
    e.component("DzRingChart", xA);
  }
};
function TA(e, t, r) {
  let i;
  return function() {
    clearTimeout(i), i = setTimeout(() => {
      t.call(r, ...arguments);
    }, e);
  };
}
function CA(e, t) {
  const r = window.MutationObserver, i = new r(t);
  return i.observe(e, { attributes: !0, attributeFilter: ["style"], attributeOldValue: !0 }), i;
}
function Cf(e, t) {
  for (const r in t) {
    if (e[r] && typeof e[r] == "object") {
      Cf(e[r], t[r]);
      continue;
    }
    if (typeof t[r] == "object") {
      e[r] = $o(t[r], !0);
      continue;
    }
    e[r] = t[r];
  }
  return e;
}
function $o(e, t) {
  if (!e)
    return e;
  const { parse: r, stringify: i } = JSON;
  if (!t)
    return r(i(e));
  const n = e instanceof Array ? [] : {};
  if (e && typeof e == "object")
    for (const a in e)
      Object.prototype.hasOwnProperty.call(e, a) && (e[a] && typeof e[a] == "object" ? n[a] = $o(e[a], !0) : n[a] = e[a]);
  return n;
}
const E_ = (e, t, r) => {
  const i = Ee(0), n = Ee(0);
  let a, o = null, s = null;
  const u = (v = !0) => new Promise((d) => {
    Xv(() => {
      s = e.value, i.value = e.value ? e.value.clientWidth : 0, n.value = e.value ? e.value.clientHeight : 0, e.value ? (!i.value || !n.value) && console.warn("DataV: Component width or height is 0px, rendering abnormality may occur!") : console.warn("DataV: Failed to get dom node, component rendering may be abnormal!"), typeof t == "function" && v && t(), d(!0);
    });
  }), l = () => {
    a = TA(100, u, void 0);
  }, f = () => {
    o = CA(s, a), window.addEventListener("resize", a);
  }, h = () => {
    !o || (o.disconnect(), o.takeRecords(), o = null, window.removeEventListener("resize", a));
  }, c = async () => {
    await u(!1), l(), f(), typeof r == "function" && r();
  };
  return Co(() => {
    c();
  }), Yv(() => {
    h();
  }), {
    width: i,
    height: n,
    initWH: u
  };
};
const DA = ["width", "height"], AA = ["fill", "x", "y", "width", "height"], EA = ["values", "begin"], MA = ["fill", "x", "y", "width", "height"], PA = ["values"], LA = ["values"], IA = ["values"], RA = ["values"], OA = ["fill", "x", "y", "height"], NA = /* @__PURE__ */ Gt("animate", {
  attributeName: "width",
  values: "0;40;0",
  dur: "2s",
  repeatCount: "indefinite"
}, null, -1), kA = ["values"], BA = /* @__PURE__ */ Ii({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = e, r = Ee(null), i = Na([200, 50]), n = Ee(4), a = Ee(20), o = Ee(2.5), s = Ee(o.value / 2), u = Na(["#fff", "#0de7c2"]), l = Na({
      mergedColor: [],
      rects: [],
      points: [],
      svgScale: [1, 1]
    }), f = () => {
      g();
    }, h = () => {
      g();
    }, { width: c, height: v } = E_(r, f, h), d = () => {
      const [m, w] = i, b = m / (a.value + 1), S = w / (n.value + 1), T = new Array(n.value).fill(0).map((x, C) => new Array(a.value).fill(0).map((E, D) => [
        b * (D + 1),
        S * (C + 1)
      ]));
      l.points = T.reduce((x, C) => [...x, ...C], []);
    }, _ = () => {
      const m = l.points[a.value * 2 - 1], w = l.points[a.value * 2 - 3];
      l.rects = [m, w];
    }, p = () => {
      const [m, w] = i;
      l.svgScale = [c.value / m, v.value / w];
    }, g = () => {
      d(), _(), p();
    }, y = () => {
      l.mergedColor = Cf($o(u, !0), t.color || []);
    };
    return nr(() => t.color, () => {
      y();
    }), Co(() => {
      y();
    }), (m, w) => (Nt(), se("div", {
      ref_key: "dvDecoration1",
      ref: r,
      class: "dv-decoration-1"
    }, [
      (Nt(), se("svg", {
        width: `${i[0]}px`,
        height: `${i[1]}px`,
        style: O_(`transform:scale(${l.svgScale[0]}, ${l.svgScale[1]});`)
      }, [
        (Nt(!0), se(gu, null, qv(l.points, (b) => (Nt(), se(gu, { key: b }, [
          Math.random() > 0.6 ? (Nt(), se("rect", {
            key: 0,
            fill: l.mergedColor[0],
            x: b[0] - s.value,
            y: b[1] - s.value,
            width: o.value,
            height: o.value
          }, [
            Math.random() > 0.6 ? (Nt(), se("animate", {
              key: 0,
              attributeName: "fill",
              values: `${l.mergedColor[0]};transparent`,
              dur: "1s",
              begin: Math.random() * 2,
              repeatCount: "indefinite"
            }, null, 8, EA)) : Qn("", !0)
          ], 8, AA)) : Qn("", !0)
        ], 64))), 128)),
        l.rects[0] ? (Nt(), se("rect", {
          key: 0,
          fill: l.mergedColor[1],
          x: l.rects[0][0] - o.value,
          y: l.rects[0][1] - o.value,
          width: o.value * 2,
          height: o.value * 2
        }, [
          Gt("animate", {
            attributeName: "width",
            values: `0;${o.value * 2}`,
            dur: "2s",
            repeatCount: "indefinite"
          }, null, 8, PA),
          Gt("animate", {
            attributeName: "height",
            values: `0;${o.value * 2}`,
            dur: "2s",
            repeatCount: "indefinite"
          }, null, 8, LA),
          Gt("animate", {
            attributeName: "x",
            values: `${l.rects[0][0]};${l.rects[0][0] - o.value}`,
            dur: "2s",
            repeatCount: "indefinite"
          }, null, 8, IA),
          Gt("animate", {
            attributeName: "y",
            values: `${l.rects[0][1]};${l.rects[0][1] - o.value}`,
            dur: "2s",
            repeatCount: "indefinite"
          }, null, 8, RA)
        ], 8, MA)) : Qn("", !0),
        l.rects[1] ? (Nt(), se("rect", {
          key: 1,
          fill: l.mergedColor[1],
          x: l.rects[1][0] - 40,
          y: l.rects[1][1] - o.value,
          width: 40,
          height: o.value * 2
        }, [
          NA,
          Gt("animate", {
            attributeName: "x",
            values: `${l.rects[1][0]};${l.rects[1][0] - 40};${l.rects[1][0]}`,
            dur: "2s",
            repeatCount: "indefinite"
          }, null, 8, kA)
        ], 8, OA)) : Qn("", !0)
      ], 12, DA))
    ], 512));
  }
}), du = {
  install(e) {
    e.component("DzDecoration1", BA);
  }
};
const zA = ["width", "height"], FA = ["fill", "points"], VA = ["fill"], HA = ["values"], GA = ["fill"], WA = ["values"], $A = ["fill"], UA = ["values"], YA = { class: "border-box-content" }, XA = /* @__PURE__ */ Ii({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    }
  },
  setup(e, { expose: t }) {
    const r = e, i = Ee(null), n = Na({
      border: ["left-top", "right-top", "left-bottom", "right-bottom"],
      defaultColor: ["#4fd2dd", "#235fa7"],
      mergedColor: []
    }), a = () => {
      n.mergedColor = Cf($o(n.defaultColor, !0), r.color || []);
    }, { width: o, height: s, initWH: u } = E_(i);
    return t({
      initWH: u
    }), nr(() => r.color, () => {
      a();
    }), Co(() => {
      a();
    }), (l, f) => (Nt(), se("div", {
      ref_key: "borderBox1",
      ref: i,
      class: "dv-border-box-1"
    }, [
      (Nt(), se("svg", {
        class: "dv-border",
        width: H(o),
        height: H(s)
      }, [
        Gt("polygon", {
          fill: e.backgroundColor,
          points: `10, 27 10, ${H(s) - 27} 13, ${H(s) - 24} 13, ${H(s) - 21} 24, ${H(s) - 11}
      38, ${H(s) - 11} 41, ${H(s) - 8} 73, ${H(s) - 8} 75, ${H(s) - 10} 81, ${H(s) - 10}
      85, ${H(s) - 6} ${H(o) - 85}, ${H(s) - 6} ${H(o) - 81}, ${H(s) - 10} ${H(o) - 75}, ${H(s) - 10}
      ${H(o) - 73}, ${H(s) - 8} ${H(o) - 41}, ${H(s) - 8} ${H(o) - 38}, ${H(s) - 11}
      ${H(o) - 10}, ${H(s) - 27} ${H(o) - 10}, 27 ${H(o) - 13}, 25 ${H(o) - 13}, 21
      ${H(o) - 24}, 11 ${H(o) - 38}, 11 ${H(o) - 41}, 8 ${H(o) - 73}, 8 ${H(o) - 75}, 10
      ${H(o) - 81}, 10 ${H(o) - 85}, 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24`
        }, null, 8, FA)
      ], 8, zA)),
      (Nt(!0), se(gu, null, qv(n.border, (h) => (Nt(), se("svg", {
        key: h,
        width: "150px",
        height: "150px",
        class: Do(`${h} dv-border`)
      }, [
        Gt("polygon", {
          fill: n.mergedColor[0],
          points: "6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"
        }, [
          Gt("animate", {
            attributeName: "fill",
            values: `${n.mergedColor[0]};${n.mergedColor[1]};${n.mergedColor[0]}`,
            dur: "0.5s",
            begin: "0s",
            repeatCount: "indefinite"
          }, null, 8, HA)
        ], 8, VA),
        Gt("polygon", {
          fill: n.mergedColor[1],
          points: "27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8"
        }, [
          Gt("animate", {
            attributeName: "fill",
            values: `${n.mergedColor[1]};${n.mergedColor[0]};${n.mergedColor[1]}`,
            dur: "0.5s",
            begin: "0s",
            repeatCount: "indefinite"
          }, null, 8, WA)
        ], 8, GA),
        Gt("polygon", {
          fill: n.mergedColor[0],
          points: "9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"
        }, [
          Gt("animate", {
            attributeName: "fill",
            values: `${n.mergedColor[0]};${n.mergedColor[1]};transparent`,
            dur: "1s",
            begin: "0s",
            repeatCount: "indefinite"
          }, null, 8, UA)
        ], 8, $A)
      ], 2))), 128)),
      Gt("div", YA, [
        N_(l.$slots, "default")
      ])
    ], 512));
  }
}), pu = {
  install(e) {
    e.component("DzBorderBox1", XA);
  }
}, ZA = {
  install(e) {
    var t, r, i, n, a;
    (t = hu.install) == null || t.call(hu, e), (r = vu.install) == null || r.call(vu, e), (i = du.install) == null || i.call(du, e), (n = pu.install) == null || n.call(pu, e), (a = cu.install) == null || a.call(cu, e);
  }
};
export {
  bA as BarChart,
  cu as BarChartPlugin,
  XA as BorderBox1,
  pu as BorderBox1Plugin,
  SA as Charts,
  hu as ChartsPlugin,
  BA as Decoration1,
  du as Decoration1Plugin,
  xA as RingChart,
  vu as RingChartPlugin,
  ZA as default
};
