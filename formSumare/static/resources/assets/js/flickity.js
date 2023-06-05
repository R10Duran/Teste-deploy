/*!
 * Flickity PACKAGED v2.3.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */ !(function (t, e) {
  'function' == typeof define && define.amd
    ? define('jquery-bridget/jquery-bridget', ['jquery'], function (i) {
        return e(t, i)
      })
    : 'object' == typeof module && module.exports
    ? (module.exports = e(t, require('jquery')))
    : (t.jQueryBridget = e(t, t.jQuery))
})(window, function t(e, i) {
  'use strict'
  var n = Array.prototype.slice,
    s = e.console,
    o =
      void 0 === s
        ? function () {}
        : function (t) {
            s.error(t)
          }
  function r(t, s, r) {
    ;(r = r || i || e.jQuery) &&
      (s.prototype.option ||
        (s.prototype.option = function (t) {
          r.isPlainObject(t) && (this.options = r.extend(!0, this.options, t))
        }),
      (r.fn[t] = function (e) {
        if ('string' == typeof e) {
          var i,
            a,
            h,
            l,
            c,
            d = n.call(arguments, 1)
          return (
            (i = this),
            (a = e),
            (h = d),
            (c = '$().' + t + '("' + a + '")'),
            i.each(function (e, i) {
              var n = r.data(i, t)
              if (!n) {
                o(t + ' not initialized. Cannot call methods, i.e. ' + c)
                return
              }
              var s = n[a]
              if (!s || '_' == a.charAt(0)) {
                o(c + ' is not a valid method')
                return
              }
              var d = s.apply(n, h)
              l = void 0 === l ? d : l
            }),
            void 0 !== l ? l : i
          )
        }
        return (
          (function e(i, n) {
            i.each(function (e, i) {
              var o = r.data(i, t)
              o
                ? (o.option(n), o._init())
                : ((o = new s(i, n)), r.data(i, t, o))
            })
          })(this, e),
          this
        )
      }),
      a(r))
  }
  function a(t) {
    !t || (t && t.bridget) || (t.bridget = r)
  }
  return a(i || e.jQuery), r
}),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define('ev-emitter/ev-emitter', e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e())
  })('undefined' != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || [])
          return -1 == n.indexOf(e) && n.push(e), this
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e)
          var i = (this._onceEvents = this._onceEvents || {})
          return ((i[t] = i[t] || {})[e] = !0), this
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t]
        if (i && i.length) {
          var n = i.indexOf(e)
          return -1 != n && i.splice(n, 1), this
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t]
        if (i && i.length) {
          ;(i = i.slice(0)), (e = e || [])
          for (
            var n = this._onceEvents && this._onceEvents[t], s = 0;
            s < i.length;
            s++
          ) {
            var o = i[s]
            n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e)
          }
          return this
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents
      }),
      t
    )
  }),
  /*!
   * getSize v2.0.3
   * measure size of elements
   * MIT license
   */ (function (t, e) {
    'function' == typeof define && define.amd
      ? define('get-size/get-size', e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e())
  })(window, function t() {
    'use strict'
    function e(t) {
      var e = parseFloat(t)
      return -1 == t.indexOf('%') && !isNaN(e) && e
    }
    var i,
      n =
        'undefined' == typeof console
          ? function t() {}
          : function (t) {
              console.error(t)
            },
      s = [
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth'
      ],
      o = s.length
    function r(t) {
      var e = getComputedStyle(t)
      return (
        e ||
          n(
            'Style returned ' +
              e +
              '. Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1'
          ),
        e
      )
    }
    var a = !1
    function h(t) {
      if (
        ((function t() {
          if (!a) {
            a = !0
            var n = document.createElement('div')
            ;(n.style.width = '200px'),
              (n.style.padding = '1px 2px 3px 4px'),
              (n.style.borderStyle = 'solid'),
              (n.style.borderWidth = '1px 2px 3px 4px'),
              (n.style.boxSizing = 'border-box')
            var s = document.body || document.documentElement
            s.appendChild(n),
              (i = 200 == Math.round(e(r(n).width))),
              (h.isBoxSizeOuter = i),
              s.removeChild(n)
          }
        })(),
        'string' == typeof t && (t = document.querySelector(t)),
        t && 'object' == typeof t && t.nodeType)
      ) {
        var n = r(t)
        if ('none' == n.display)
          return (function t() {
            for (
              var e = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0
                },
                i = 0;
              i < o;
              i++
            )
              e[s[i]] = 0
            return e
          })()
        var l = {}
        ;(l.width = t.offsetWidth), (l.height = t.offsetHeight)
        for (
          var c = (l.isBorderBox = 'border-box' == n.boxSizing), d = 0;
          d < o;
          d++
        ) {
          var u = s[d],
            p = parseFloat(n[u])
          l[u] = isNaN(p) ? 0 : p
        }
        var f = l.paddingLeft + l.paddingRight,
          g = l.paddingTop + l.paddingBottom,
          v = l.marginLeft + l.marginRight,
          m = l.marginTop + l.marginBottom,
          y = l.borderLeftWidth + l.borderRightWidth,
          b = l.borderTopWidth + l.borderBottomWidth,
          E = c && i,
          S = e(n.width)
        !1 !== S && (l.width = S + (E ? 0 : f + y))
        var C = e(n.height)
        return (
          !1 !== C && (l.height = C + (E ? 0 : g + b)),
          (l.innerWidth = l.width - (f + y)),
          (l.innerHeight = l.height - (g + b)),
          (l.outerWidth = l.width + v),
          (l.outerHeight = l.height + m),
          l
        )
      }
    }
    return h
  }),
  (function (t, e) {
    'use strict'
    'function' == typeof define && define.amd
      ? define('desandro-matches-selector/matches-selector', e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e())
  })(window, function t() {
    'use strict'
    var e = (function () {
      var t = window.Element.prototype
      if (t.matches) return 'matches'
      if (t.matchesSelector) return 'matchesSelector'
      for (var e = ['webkit', 'moz', 'ms', 'o'], i = 0; i < e.length; i++) {
        var n = e[i] + 'MatchesSelector'
        if (t[n]) return n
      }
    })()
    return function t(i, n) {
      return i[e](n)
    }
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'fizzy-ui-utils/utils',
          ['desandro-matches-selector/matches-selector'],
          function (i) {
            return e(t, i)
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(t, require('desandro-matches-selector')))
      : (t.fizzyUIUtils = e(t, t.matchesSelector))
  })(window, function t(e, i) {
    var n = {}
    ;(n.extend = function (t, e) {
      for (var i in e) t[i] = e[i]
      return t
    }),
      (n.modulo = function (t, e) {
        return ((t % e) + e) % e
      })
    var s = Array.prototype.slice
    ;(n.makeArray = function (t) {
      return Array.isArray(t)
        ? t
        : null == t
        ? []
        : 'object' == typeof t && 'number' == typeof t.length
        ? s.call(t)
        : [t]
    }),
      (n.removeFrom = function (t, e) {
        var i = t.indexOf(e)
        ;-1 != i && t.splice(i, 1)
      }),
      (n.getParent = function (t, e) {
        for (; t.parentNode && t != document.body; )
          if (i((t = t.parentNode), e)) return t
      }),
      (n.getQueryElement = function (t) {
        return 'string' == typeof t ? document.querySelector(t) : t
      }),
      (n.handleEvent = function (t) {
        var e = 'on' + t.type
        this[e] && this[e](t)
      }),
      (n.filterFindElements = function (t, e) {
        t = n.makeArray(t)
        var s = []
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!e) {
                s.push(t)
                return
              }
              i(t, e) && s.push(t)
              for (var n = t.querySelectorAll(e), o = 0; o < n.length; o++)
                s.push(n[o])
            }
          }),
          s
        )
      }),
      (n.debounceMethod = function (t, e, i) {
        i = i || 100
        var n = t.prototype[e],
          s = e + 'Timeout'
        t.prototype[e] = function () {
          clearTimeout(this[s])
          var t = arguments,
            e = this
          this[s] = setTimeout(function () {
            n.apply(e, t), delete e[s]
          }, i)
        }
      }),
      (n.docReady = function (t) {
        var e = document.readyState
        'complete' == e || 'interactive' == e
          ? setTimeout(t)
          : document.addEventListener('DOMContentLoaded', t)
      }),
      (n.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + '-' + i
          })
          .toLowerCase()
      })
    var o = e.console
    return (
      (n.htmlInit = function (t, i) {
        n.docReady(function () {
          var s = n.toDashed(i),
            r = 'data-' + s,
            a = document.querySelectorAll('[' + r + ']'),
            h = document.querySelectorAll('.js-' + s),
            l = n.makeArray(a).concat(n.makeArray(h)),
            c = r + '-options',
            d = e.jQuery
          l.forEach(function (e) {
            var n,
              s = e.getAttribute(r) || e.getAttribute(c)
            try {
              n = s && JSON.parse(s)
            } catch (a) {
              o &&
                o.error('Error parsing ' + r + ' on ' + e.className + ': ' + a)
              return
            }
            var h = new t(e, n)
            d && d.data(e, i, h)
          })
        })
      }),
      n
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define('flickity/js/cell', ['get-size/get-size'], function (i) {
          return e(t, i)
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = e(t, require('get-size')))
      : ((t.Flickity = t.Flickity || {}), (t.Flickity.Cell = e(t, t.getSize)))
  })(window, function t(e, i) {
    function n(t, e) {
      ;(this.element = t), (this.parent = e), this.create()
    }
    var s = n.prototype
    return (
      (s.create = function () {
        ;(this.element.style.position = 'absolute'),
          this.element.setAttribute('aria-hidden', 'true'),
          (this.x = 0),
          (this.shift = 0),
          (this.element.style[this.parent.originSide] = 0)
      }),
      (s.destroy = function () {
        this.unselect(), (this.element.style.position = '')
        var t = this.parent.originSide
        ;(this.element.style[t] = ''),
          (this.element.style.transform = ''),
          this.element.removeAttribute('aria-hidden')
      }),
      (s.getSize = function () {
        this.size = i(this.element)
      }),
      (s.setPosition = function (t) {
        ;(this.x = t), this.updateTarget(), this.renderPosition(t)
      }),
      (s.updateTarget = s.setDefaultTarget =
        function () {
          var t =
            'left' == this.parent.originSide ? 'marginLeft' : 'marginRight'
          this.target =
            this.x + this.size[t] + this.size.width * this.parent.cellAlign
        }),
      (s.renderPosition = function (t) {
        var i = 0,
          n = 0,
          s = 0,
          o = 0
        ;(i = e.outerWidth),
          (n = e.outerHeight),
          i <= 633 ? ((s = 1), (o = 0)) : ((s = 0.8), (o = 110))
        var r = 'left' === this.parent.originSide ? s : -s,
          a = this.parent.options.percentPosition
            ? t * r * (this.parent.size.innerWidth / this.size.width) + o
            : t * r + o
        this.element.style.transform =
          'translateX(' + this.parent.getPositionValue(a) + ')'
      }),
      (s.select = function () {
        this.element.classList.add('is-selected'),
          this.element.removeAttribute('aria-hidden')
      }),
      (s.unselect = function () {
        this.element.classList.remove('is-selected'),
          this.element.setAttribute('aria-hidden', 'true')
      }),
      (s.wrapShift = function (t) {
        ;(this.shift = t),
          this.renderPosition(this.x + this.parent.slideableWidth * t)
      }),
      (s.remove = function () {
        this.element.parentNode.removeChild(this.element)
      }),
      n
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define('flickity/js/slide', e)
      : 'object' == typeof module && module.exports
      ? (module.exports = e())
      : ((t.Flickity = t.Flickity || {}), (t.Flickity.Slide = e()))
  })(window, function t() {
    'use strict'
    function e(t) {
      ;(this.parent = t),
        (this.isOriginLeft = 'left' == t.originSide),
        (this.cells = []),
        (this.outerWidth = 0),
        (this.height = 0)
    }
    var i = e.prototype
    return (
      (i.addCell = function (t) {
        if (
          (this.cells.push(t),
          (this.outerWidth += t.size.outerWidth),
          (this.height = Math.max(t.size.outerHeight, this.height)),
          1 == this.cells.length)
        ) {
          this.x = t.x
          var e = this.isOriginLeft ? 'marginLeft' : 'marginRight'
          this.firstMargin = t.size[e]
        }
      }),
      (i.updateTarget = function () {
        var t = this.isOriginLeft ? 'marginRight' : 'marginLeft',
          e = this.getLastCell(),
          i = e ? e.size[t] : 0,
          n = this.outerWidth - (this.firstMargin + i)
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign
      }),
      (i.getLastCell = function () {
        return this.cells[this.cells.length - 1]
      }),
      (i.select = function () {
        this.cells.forEach(function (t) {
          t.select()
        })
      }),
      (i.unselect = function () {
        this.cells.forEach(function (t) {
          t.unselect()
        })
      }),
      (i.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element
        })
      }),
      e
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define('flickity/js/animate', ['fizzy-ui-utils/utils'], function (i) {
          return e(t, i)
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = e(t, require('fizzy-ui-utils')))
      : ((t.Flickity = t.Flickity || {}),
        (t.Flickity.animatePrototype = e(t, t.fizzyUIUtils)))
  })(window, function t(e, i) {
    var n = {}
    return (
      (n.startAnimation = function () {
        this.isAnimating ||
          ((this.isAnimating = !0), (this.restingFrames = 0), this.animate())
      }),
      (n.animate = function () {
        this.applyDragForce(), this.applySelectedAttraction()
        var t = this.x
        if (
          (this.integratePhysics(),
          this.positionSlider(),
          this.settle(t),
          this.isAnimating)
        ) {
          var e = this
          requestAnimationFrame(function t() {
            e.animate()
          })
        }
      }),
      (n.positionSlider = function () {
        var t = this.x
        this.options.wrapAround &&
          this.cells.length > 1 &&
          ((t = i.modulo(t, this.slideableWidth)),
          (t -= this.slideableWidth),
          this.shiftWrapCells(t)),
          this.setTranslateX(t, this.isAnimating),
          this.dispatchScrollEvent()
      }),
      (n.setTranslateX = function (t, e) {
        ;(t += this.cursorPosition), (t = this.options.rightToLeft ? -t : t)
        var i = this.getPositionValue(t)
        this.slider.style.transform = e
          ? 'translate3d(' + i + ',0,0)'
          : 'translateX(' + i + ')'
      }),
      (n.dispatchScrollEvent = function () {
        var t = this.slides[0]
        if (t) {
          var e = -this.x - t.target,
            i = e / this.slidesWidth
          this.dispatchEvent('scroll', null, [i, e])
        }
      }),
      (n.positionSliderAtSelected = function () {
        this.cells.length &&
          ((this.x = -this.selectedSlide.target),
          (this.velocity = 0),
          this.positionSlider())
      }),
      (n.getPositionValue = function (t) {
        return this.options.percentPosition
          ? 0.01 * Math.round((t / this.size.innerWidth) * 1e4) + '%'
          : Math.round(t) + 'px'
      }),
      (n.settle = function (t) {
        !this.isPointerDown &&
          Math.round(100 * this.x) == Math.round(100 * t) &&
          this.restingFrames++,
          this.restingFrames > 2 &&
            ((this.isAnimating = !1),
            delete this.isFreeScrolling,
            this.positionSlider(),
            this.dispatchEvent('settle', null, [this.selectedIndex]))
      }),
      (n.shiftWrapCells = function (t) {
        var e = this.cursorPosition + t
        this._shiftCells(this.beforeShiftCells, e, -1)
        var i =
          this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition)
        this._shiftCells(this.afterShiftCells, i, 1)
      }),
      (n._shiftCells = function (t, e, i) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            o = e > 0 ? i : 0
          s.wrapShift(o), (e -= s.size.outerWidth)
        }
      }),
      (n._unshiftCells = function (t) {
        if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
      }),
      (n.integratePhysics = function () {
        ;(this.x += this.velocity), (this.velocity *= this.getFrictionFactor())
      }),
      (n.applyForce = function (t) {
        this.velocity += t
      }),
      (n.getFrictionFactor = function () {
        return (
          1 -
          this.options[this.isFreeScrolling ? 'freeScrollFriction' : 'friction']
        )
      }),
      (n.getRestingPosition = function () {
        return this.x + this.velocity / (1 - this.getFrictionFactor())
      }),
      (n.applyDragForce = function () {
        if (this.isDraggable && this.isPointerDown) {
          var t = this.dragX - this.x - this.velocity
          this.applyForce(t)
        }
      }),
      (n.applySelectedAttraction = function () {
        if (
          (!this.isDraggable || !this.isPointerDown) &&
          !this.isFreeScrolling &&
          this.slides.length
        ) {
          var t =
            (-1 * this.selectedSlide.target - this.x) *
            this.options.selectedAttraction
          this.applyForce(t)
        }
      }),
      n
    )
  }),
  (function (t, e) {
    if ('function' == typeof define && define.amd)
      define('flickity/js/flickity', [
        'ev-emitter/ev-emitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './cell',
        './slide',
        './animate'
      ], function (i, n, s, o, r, a) {
        return e(t, i, n, s, o, r, a)
      })
    else if ('object' == typeof module && module.exports)
      module.exports = e(
        t,
        require('ev-emitter'),
        require('get-size'),
        require('fizzy-ui-utils'),
        require('./cell'),
        require('./slide'),
        require('./animate')
      )
    else {
      var i = t.Flickity
      t.Flickity = e(
        t,
        t.EvEmitter,
        t.getSize,
        t.fizzyUIUtils,
        i.Cell,
        i.Slide,
        i.animatePrototype
      )
    }
  })(window, function t(e, i, n, s, o, r, a) {
    var h = e.jQuery,
      l = e.getComputedStyle,
      c = e.console
    function d(t, e) {
      for (t = s.makeArray(t); t.length; ) e.appendChild(t.shift())
    }
    var u = 0,
      p = {}
    function f(t, e) {
      var i = s.getQueryElement(t)
      if (!i) {
        c && c.error('Bad element for Flickity: ' + (i || t))
        return
      }
      if (((this.element = i), this.element.flickityGUID)) {
        var n = p[this.element.flickityGUID]
        return n && n.option(e), n
      }
      h && (this.$element = h(this.element)),
        (this.options = s.extend({}, this.constructor.defaults)),
        this.option(e),
        this._create()
    }
    ;(f.defaults = {
      accessibility: !0,
      cellAlign: 'center',
      freeScrollFriction: 0.075,
      friction: 0.28,
      namespaceJQueryEvents: !0,
      percentPosition: !0,
      resize: !0,
      selectedAttraction: 0.025,
      setGallerySize: !0
    }),
      (f.createMethods = [])
    var g = f.prototype
    s.extend(g, i.prototype),
      (g._create = function () {
        var t = (this.guid = ++u)
        for (var i in ((this.element.flickityGUID = t),
        (p[t] = this),
        (this.selectedIndex = 0),
        (this.restingFrames = 0),
        (this.x = 0),
        (this.velocity = 0),
        (this.originSide = this.options.rightToLeft ? 'right' : 'left'),
        (this.viewport = document.createElement('div')),
        (this.viewport.className = 'flickity-viewport'),
        this._createSlider(),
        (this.options.resize || this.options.watchCSS) &&
          e.addEventListener('resize', this),
        this.options.on)) {
          var n = this.options.on[i]
          this.on(i, n)
        }
        f.createMethods.forEach(function (t) {
          this[t]()
        }, this),
          this.options.watchCSS ? this.watchCSS() : this.activate()
      }),
      (g.option = function (t) {
        s.extend(this.options, t)
      }),
      (g.activate = function () {
        this.isActive ||
          ((this.isActive = !0),
          this.element.classList.add('flickity-enabled'),
          this.options.rightToLeft &&
            this.element.classList.add('flickity-rtl'),
          this.getSize(),
          d(this._filterFindCellElements(this.element.children), this.slider),
          this.viewport.appendChild(this.slider),
          this.element.appendChild(this.viewport),
          this.reloadCells(),
          this.options.accessibility &&
            ((this.element.tabIndex = 0),
            this.element.addEventListener('keydown', this)),
          this.emitEvent('activate'),
          this.selectInitialIndex(),
          (this.isInitActivated = !0),
          this.dispatchEvent('ready'))
      }),
      (g._createSlider = function () {
        var t = document.createElement('div')
        ;(t.className = 'flickity-slider'),
          (t.style[this.originSide] = 0),
          (this.slider = t)
      }),
      (g._filterFindCellElements = function (t) {
        return s.filterFindElements(t, this.options.cellSelector)
      }),
      (g.reloadCells = function () {
        ;(this.cells = this._makeCells(this.slider.children)),
          this.positionCells(),
          this._getWrapShiftCells(),
          this.setGallerySize()
      }),
      (g._makeCells = function (t) {
        return this._filterFindCellElements(t).map(function (t) {
          return new o(t, this)
        }, this)
      }),
      (g.getLastCell = function () {
        return this.cells[this.cells.length - 1]
      }),
      (g.getLastSlide = function () {
        return this.slides[this.slides.length - 1]
      }),
      (g.positionCells = function () {
        this._sizeCells(this.cells), this._positionCells(0)
      }),
      (g._positionCells = function (t) {
        ;(t = t || 0), (this.maxCellHeight = (t && this.maxCellHeight) || 0)
        var e = 0
        if (t > 0) {
          var i = this.cells[t - 1]
          e = i.x + i.size.outerWidth
        }
        for (var n = this.cells.length, s = t; s < n; s++) {
          var o = this.cells[s]
          o.setPosition(e),
            (e += o.size.outerWidth),
            (this.maxCellHeight = Math.max(
              o.size.outerHeight,
              this.maxCellHeight
            ))
        }
        ;(this.slideableWidth = e),
          this.updateSlides(),
          this._containSlides(),
          (this.slidesWidth = n
            ? this.getLastSlide().target - this.slides[0].target
            : 0)
      }),
      (g._sizeCells = function (t) {
        t.forEach(function (t) {
          t.getSize()
        })
      }),
      (g.updateSlides = function () {
        if (((this.slides = []), this.cells.length)) {
          var t = new r(this)
          this.slides.push(t)
          var e = 'left' == this.originSide ? 'marginRight' : 'marginLeft',
            i = this._getCanCellFit()
          this.cells.forEach(function (n, s) {
            if (!t.cells.length) {
              t.addCell(n)
              return
            }
            var o =
              t.outerWidth - t.firstMargin + (n.size.outerWidth - n.size[e])
            i.call(this, s, o) ||
              (t.updateTarget(), (t = new r(this)), this.slides.push(t)),
              t.addCell(n)
          }, this),
            t.updateTarget(),
            this.updateSelectedSlide()
        }
      }),
      (g._getCanCellFit = function () {
        var t = this.options.groupCells
        if (!t)
          return function () {
            return !1
          }
        if ('number' == typeof t) {
          var e = parseInt(t, 10)
          return function (t) {
            return t % e != 0
          }
        }
        var i = 'string' == typeof t && t.match(/^(\d+)%$/),
          n = i ? parseInt(i[1], 10) / 100 : 1
        return function (t, e) {
          return e <= (this.size.innerWidth + 1) * n
        }
      }),
      (g._init = g.reposition =
        function () {
          this.positionCells(), this.positionSliderAtSelected()
        }),
      (g.getSize = function () {
        ;(this.size = n(this.element)),
          this.setCellAlign(),
          (this.cursorPosition = this.size.innerWidth * this.cellAlign)
      })
    var v = {
      center: { left: 0.5, right: 0.5 },
      left: { left: 0, right: 1 },
      right: { right: 0, left: 1 }
    }
    return (
      (g.setCellAlign = function () {
        var t = v[this.options.cellAlign]
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
      }),
      (g.setGallerySize = function () {
        if (this.options.setGallerySize) {
          var t =
            this.options.adaptiveHeight && this.selectedSlide
              ? this.selectedSlide.height
              : this.maxCellHeight
          this.viewport.style.height = t + 'px'
        }
      }),
      (g._getWrapShiftCells = function () {
        if (this.options.wrapAround) {
          this._unshiftCells(this.beforeShiftCells),
            this._unshiftCells(this.afterShiftCells)
          var t = this.cursorPosition,
            e = this.cells.length - 1
          ;(this.beforeShiftCells = this._getGapCells(t, e, -1)),
            (t = this.size.innerWidth - this.cursorPosition),
            (this.afterShiftCells = this._getGapCells(t, 0, 1))
        }
      }),
      (g._getGapCells = function (t, e, i) {
        for (var n = []; t > 0; ) {
          var s = this.cells[e]
          if (!s) break
          n.push(s), (e += i), (t -= s.size.outerWidth)
        }
        return n
      }),
      (g._containSlides = function () {
        if (
          this.options.contain &&
          !this.options.wrapAround &&
          this.cells.length
        ) {
          var t = this.options.rightToLeft,
            e =
              this.slideableWidth -
              this.getLastCell().size[t ? 'marginLeft' : 'marginRight'],
            i = e < this.size.innerWidth,
            n =
              this.cursorPosition +
              this.cells[0].size[t ? 'marginRight' : 'marginLeft'],
            s = e - this.size.innerWidth * (1 - this.cellAlign)
          this.slides.forEach(function (t) {
            i
              ? (t.target = e * this.cellAlign)
              : ((t.target = Math.max(t.target, n)),
                (t.target = Math.min(t.target, s)))
          }, this)
        }
      }),
      (g.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i
        if ((this.emitEvent(t, n), h && this.$element)) {
          var s = (t += this.options.namespaceJQueryEvents ? '.flickity' : '')
          if (e) {
            var o = new h.Event(e)
            ;(o.type = t), (s = o)
          }
          this.$element.trigger(s, i)
        }
      }),
      (g.select = function (t, e, i) {
        if (
          this.isActive &&
          ((t = parseInt(t, 10)),
          this._wrapSelect(t),
          (this.options.wrapAround || e) &&
            (t = s.modulo(t, this.slides.length)),
          this.slides[t])
        ) {
          var n = this.selectedIndex
          ;(this.selectedIndex = t),
            this.updateSelectedSlide(),
            i ? this.positionSliderAtSelected() : this.startAnimation(),
            this.options.adaptiveHeight && this.setGallerySize(),
            this.dispatchEvent('select', null, [t]),
            t != n && this.dispatchEvent('change', null, [t]),
            this.dispatchEvent('cellSelect')
        }
      }),
      (g._wrapSelect = function (t) {
        var e = this.slides.length
        if (!(this.options.wrapAround && e > 1)) return t
        var i = s.modulo(t, e),
          n = Math.abs(i - this.selectedIndex),
          o = Math.abs(i + e - this.selectedIndex),
          r = Math.abs(i - e - this.selectedIndex)
        !this.isDragSelect && o < n
          ? (t += e)
          : !this.isDragSelect && r < n && (t -= e),
          t < 0
            ? (this.x -= this.slideableWidth)
            : t >= e && (this.x += this.slideableWidth)
      }),
      (g.previous = function (t, e) {
        this.select(this.selectedIndex - 1, t, e)
      }),
      (g.next = function (t, e) {
        this.select(this.selectedIndex + 1, t, e)
      }),
      (g.updateSelectedSlide = function () {
        var t = this.slides[this.selectedIndex]
        t &&
          (this.unselectSelectedSlide(),
          (this.selectedSlide = t),
          t.select(),
          (this.selectedCells = t.cells),
          (this.selectedElements = t.getCellElements()),
          (this.selectedCell = t.cells[0]),
          (this.selectedElement = this.selectedElements[0]))
      }),
      (g.unselectSelectedSlide = function () {
        this.selectedSlide && this.selectedSlide.unselect()
      }),
      (g.selectInitialIndex = function () {
        var t = this.options.initialIndex
        if (this.isInitActivated) {
          this.select(this.selectedIndex, !1, !0)
          return
        }
        if (t && 'string' == typeof t && this.queryCell(t)) {
          this.selectCell(t, !1, !0)
          return
        }
        var e = 0
        t && this.slides[t] && (e = t), this.select(e, !1, !0)
      }),
      (g.selectCell = function (t, e, i) {
        var n = this.queryCell(t)
        if (n) {
          var s = this.getCellSlideIndex(n)
          this.select(s, e, i)
        }
      }),
      (g.getCellSlideIndex = function (t) {
        for (var e = 0; e < this.slides.length; e++)
          if (-1 != this.slides[e].cells.indexOf(t)) return e
      }),
      (g.getCell = function (t) {
        for (var e = 0; e < this.cells.length; e++) {
          var i = this.cells[e]
          if (i.element == t) return i
        }
      }),
      (g.getCells = function (t) {
        t = s.makeArray(t)
        var e = []
        return (
          t.forEach(function (t) {
            var i = this.getCell(t)
            i && e.push(i)
          }, this),
          e
        )
      }),
      (g.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element
        })
      }),
      (g.getParentCell = function (t) {
        return (
          this.getCell(t) ||
          ((t = s.getParent(t, '.flickity-slider > *')), this.getCell(t))
        )
      }),
      (g.getAdjacentCellElements = function (t, e) {
        if (!t) return this.selectedSlide.getCellElements()
        e = void 0 === e ? this.selectedIndex : e
        var i = this.slides.length
        if (1 + 2 * t >= i) return this.getCellElements()
        for (var n = [], o = e - t; o <= e + t; o++) {
          var r = this.options.wrapAround ? s.modulo(o, i) : o,
            a = this.slides[r]
          a && (n = n.concat(a.getCellElements()))
        }
        return n
      }),
      (g.queryCell = function (t) {
        if ('number' == typeof t) return this.cells[t]
        if ('string' == typeof t) {
          if (t.match(/^[#.]?[\d/]/)) return
          t = this.element.querySelector(t)
        }
        return this.getCell(t)
      }),
      (g.uiChange = function () {
        this.emitEvent('uiChange')
      }),
      (g.childUIPointerDown = function (t) {
        'touchstart' != t.type && t.preventDefault(), this.focus()
      }),
      (g.onresize = function () {
        this.watchCSS(), this.resize()
      }),
      s.debounceMethod(f, 'onresize', 150),
      (g.resize = function () {
        if (this.isActive && !this.isAnimating && !this.isDragging) {
          this.getSize(),
            this.options.wrapAround &&
              (this.x = s.modulo(this.x, this.slideableWidth)),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize(),
            this.emitEvent('resize')
          var t = this.selectedElements && this.selectedElements[0]
          this.selectCell(t, !1, !0)
        }
      }),
      (g.watchCSS = function () {
        this.options.watchCSS &&
          (-1 != l(this.element, ':after').content.indexOf('flickity')
            ? this.activate()
            : this.deactivate())
      }),
      (g.onkeydown = function (t) {
        var e = document.activeElement && document.activeElement != this.element
        if (this.options.accessibility && !e) {
          var i = f.keyboardHandlers[t.keyCode]
          i && i.call(this)
        }
      }),
      (f.keyboardHandlers = {
        37: function () {
          var t = this.options.rightToLeft ? 'next' : 'previous'
          this.uiChange(), this[t]()
        },
        39: function () {
          var t = this.options.rightToLeft ? 'previous' : 'next'
          this.uiChange(), this[t]()
        }
      }),
      (g.focus = function () {
        var t = e.pageYOffset
        this.element.focus({ preventScroll: !0 }),
          e.pageYOffset != t && e.scrollTo(e.pageXOffset, t)
      }),
      (g.deactivate = function () {
        this.isActive &&
          (this.element.classList.remove('flickity-enabled'),
          this.element.classList.remove('flickity-rtl'),
          this.unselectSelectedSlide(),
          this.cells.forEach(function (t) {
            t.destroy()
          }),
          this.element.removeChild(this.viewport),
          d(this.slider.children, this.element),
          this.options.accessibility &&
            (this.element.removeAttribute('tabIndex'),
            this.element.removeEventListener('keydown', this)),
          (this.isActive = !1),
          this.emitEvent('deactivate'))
      }),
      (g.destroy = function () {
        this.deactivate(),
          e.removeEventListener('resize', this),
          this.allOff(),
          this.emitEvent('destroy'),
          h && this.$element && h.removeData(this.element, 'flickity'),
          delete this.element.flickityGUID,
          delete p[this.guid]
      }),
      s.extend(g, a),
      (f.data = function (t) {
        var e = (t = s.getQueryElement(t)) && t.flickityGUID
        return e && p[e]
      }),
      s.htmlInit(f, 'flickity'),
      h && h.bridget && h.bridget('flickity', f),
      (f.setJQuery = function (t) {
        h = t
      }),
      (f.Cell = o),
      (f.Slide = r),
      f
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'unipointer/unipointer',
          ['ev-emitter/ev-emitter'],
          function (i) {
            return e(t, i)
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(t, require('ev-emitter')))
      : (t.Unipointer = e(t, t.EvEmitter))
  })(window, function t(e, i) {
    function n() {}
    var s = (n.prototype = Object.create(i.prototype))
    ;(s.bindStartEvent = function (t) {
      this._bindStartEvent(t, !0)
    }),
      (s.unbindStartEvent = function (t) {
        this._bindStartEvent(t, !1)
      }),
      (s._bindStartEvent = function (t, i) {
        var n = (i = void 0 === i || i)
            ? 'addEventListener'
            : 'removeEventListener',
          s = 'mousedown'
        'ontouchstart' in e
          ? (s = 'touchstart')
          : e.PointerEvent && (s = 'pointerdown'),
          t[n](s, this)
      }),
      (s.handleEvent = function (t) {
        var e = 'on' + t.type
        this[e] && this[e](t)
      }),
      (s.getTouch = function (t) {
        for (var e = 0; e < t.length; e++) {
          var i = t[e]
          if (i.identifier == this.pointerIdentifier) return i
        }
      }),
      (s.onmousedown = function (t) {
        var e = t.button
        ;(e && 0 !== e && 1 !== e) || this._pointerDown(t, t)
      }),
      (s.ontouchstart = function (t) {
        this._pointerDown(t, t.changedTouches[0])
      }),
      (s.onpointerdown = function (t) {
        this._pointerDown(t, t)
      }),
      (s._pointerDown = function (t, e) {
        t.button ||
          this.isPointerDown ||
          ((this.isPointerDown = !0),
          (this.pointerIdentifier =
            void 0 !== e.pointerId ? e.pointerId : e.identifier),
          this.pointerDown(t, e))
      }),
      (s.pointerDown = function (t, e) {
        this._bindPostStartEvents(t), this.emitEvent('pointerDown', [t, e])
      })
    var o = {
      mousedown: ['mousemove', 'mouseup'],
      touchstart: ['touchmove', 'touchend', 'touchcancel'],
      pointerdown: ['pointermove', 'pointerup', 'pointercancel']
    }
    return (
      (s._bindPostStartEvents = function (t) {
        if (t) {
          var i = o[t.type]
          i.forEach(function (t) {
            e.addEventListener(t, this)
          }, this),
            (this._boundPointerEvents = i)
        }
      }),
      (s._unbindPostStartEvents = function () {
        this._boundPointerEvents &&
          (this._boundPointerEvents.forEach(function (t) {
            e.removeEventListener(t, this)
          }, this),
          delete this._boundPointerEvents)
      }),
      (s.onmousemove = function (t) {
        this._pointerMove(t, t)
      }),
      (s.onpointermove = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
      }),
      (s.ontouchmove = function (t) {
        var e = this.getTouch(t.changedTouches)
        e && this._pointerMove(t, e)
      }),
      (s._pointerMove = function (t, e) {
        this.pointerMove(t, e)
      }),
      (s.pointerMove = function (t, e) {
        this.emitEvent('pointerMove', [t, e])
      }),
      (s.onmouseup = function (t) {
        this._pointerUp(t, t)
      }),
      (s.onpointerup = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
      }),
      (s.ontouchend = function (t) {
        var e = this.getTouch(t.changedTouches)
        e && this._pointerUp(t, e)
      }),
      (s._pointerUp = function (t, e) {
        this._pointerDone(), this.pointerUp(t, e)
      }),
      (s.pointerUp = function (t, e) {
        this.emitEvent('pointerUp', [t, e])
      }),
      (s._pointerDone = function () {
        this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
      }),
      (s._pointerReset = function () {
        ;(this.isPointerDown = !1), delete this.pointerIdentifier
      }),
      (s.pointerDone = function t() {}),
      (s.onpointercancel = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
      }),
      (s.ontouchcancel = function (t) {
        var e = this.getTouch(t.changedTouches)
        e && this._pointerCancel(t, e)
      }),
      (s._pointerCancel = function (t, e) {
        this._pointerDone(), this.pointerCancel(t, e)
      }),
      (s.pointerCancel = function (t, e) {
        this.emitEvent('pointerCancel', [t, e])
      }),
      (n.getPointerPoint = function (t) {
        return { x: t.pageX, y: t.pageY }
      }),
      n
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'unidragger/unidragger',
          ['unipointer/unipointer'],
          function (i) {
            return e(t, i)
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(t, require('unipointer')))
      : (t.Unidragger = e(t, t.Unipointer))
  })(window, function t(e, i) {
    function n() {}
    var s = (n.prototype = Object.create(i.prototype))
    ;(s.bindHandles = function () {
      this._bindHandles(!0)
    }),
      (s.unbindHandles = function () {
        this._bindHandles(!1)
      }),
      (s._bindHandles = function (t) {
        for (
          var i = (t = void 0 === t || t)
              ? 'addEventListener'
              : 'removeEventListener',
            n = t ? this._touchActionValue : '',
            s = 0;
          s < this.handles.length;
          s++
        ) {
          var o = this.handles[s]
          this._bindStartEvent(o, t),
            o[i]('click', this),
            e.PointerEvent && (o.style.touchAction = n)
        }
      }),
      (s._touchActionValue = 'none'),
      (s.pointerDown = function (t, e) {
        this.okayPointerDown(t) &&
          ((this.pointerDownPointer = { pageX: e.pageX, pageY: e.pageY }),
          t.preventDefault(),
          this.pointerDownBlur(),
          this._bindPostStartEvents(t),
          this.emitEvent('pointerDown', [t, e]))
      })
    var o = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
      r = {
        radio: !0,
        checkbox: !0,
        button: !0,
        submit: !0,
        image: !0,
        file: !0
      }
    return (
      (s.okayPointerDown = function (t) {
        var e = o[t.target.nodeName],
          i = r[t.target.type],
          n = !e || i
        return n || this._pointerReset(), n
      }),
      (s.pointerDownBlur = function () {
        var t = document.activeElement
        t && t.blur && t != document.body && t.blur()
      }),
      (s.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e)
        this.emitEvent('pointerMove', [t, e, i]), this._dragMove(t, e, i)
      }),
      (s._dragPointerMove = function (t, e) {
        var i = {
          x: e.pageX - this.pointerDownPointer.pageX,
          y: e.pageY - this.pointerDownPointer.pageY
        }
        return (
          !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
        )
      }),
      (s.hasDragStarted = function (t) {
        return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
      }),
      (s.pointerUp = function (t, e) {
        this.emitEvent('pointerUp', [t, e]), this._dragPointerUp(t, e)
      }),
      (s._dragPointerUp = function (t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
      }),
      (s._dragStart = function (t, e) {
        ;(this.isDragging = !0),
          (this.isPreventingClicks = !0),
          this.dragStart(t, e)
      }),
      (s.dragStart = function (t, e) {
        this.emitEvent('dragStart', [t, e])
      }),
      (s._dragMove = function (t, e, i) {
        this.isDragging && this.dragMove(t, e, i)
      }),
      (s.dragMove = function (t, e, i) {
        t.preventDefault(), this.emitEvent('dragMove', [t, e, i])
      }),
      (s._dragEnd = function (t, e) {
        ;(this.isDragging = !1),
          setTimeout(
            function () {
              delete this.isPreventingClicks
            }.bind(this)
          ),
          this.dragEnd(t, e)
      }),
      (s.dragEnd = function (t, e) {
        this.emitEvent('dragEnd', [t, e])
      }),
      (s.onclick = function (t) {
        this.isPreventingClicks && t.preventDefault()
      }),
      (s._staticClick = function (t, e) {
        ;(this.isIgnoringMouseUp && 'mouseup' == t.type) ||
          (this.staticClick(t, e),
          'mouseup' != t.type &&
            ((this.isIgnoringMouseUp = !0),
            setTimeout(
              function () {
                delete this.isIgnoringMouseUp
              }.bind(this),
              400
            )))
      }),
      (s.staticClick = function (t, e) {
        this.emitEvent('staticClick', [t, e])
      }),
      (n.getPointerPoint = i.getPointerPoint),
      n
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/drag',
          ['./flickity', 'unidragger/unidragger', 'fizzy-ui-utils/utils'],
          function (i, n, s) {
            return e(t, i, n, s)
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(
          t,
          require('./flickity'),
          require('unidragger'),
          require('fizzy-ui-utils')
        ))
      : (t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils))
  })(window, function t(e, i, n, s) {
    s.extend(i.defaults, { draggable: '>1', dragThreshold: 3 }),
      i.createMethods.push('_createDrag')
    var o = i.prototype
    s.extend(o, n.prototype),
      (o._touchActionValue = 'pan-y'),
      (o._createDrag = function () {
        this.on('activate', this.onActivateDrag),
          this.on('uiChange', this._uiChangeDrag),
          this.on('deactivate', this.onDeactivateDrag),
          this.on('cellChange', this.updateDraggable)
      }),
      (o.onActivateDrag = function () {
        ;(this.handles = [this.viewport]),
          this.bindHandles(),
          this.updateDraggable()
      }),
      (o.onDeactivateDrag = function () {
        this.unbindHandles(), this.element.classList.remove('is-draggable')
      }),
      (o.updateDraggable = function () {
        '>1' == this.options.draggable
          ? (this.isDraggable = this.slides.length > 1)
          : (this.isDraggable = this.options.draggable),
          this.isDraggable
            ? this.element.classList.add('is-draggable')
            : this.element.classList.remove('is-draggable')
      }),
      (o.bindDrag = function () {
        ;(this.options.draggable = !0), this.updateDraggable()
      }),
      (o.unbindDrag = function () {
        ;(this.options.draggable = !1), this.updateDraggable()
      }),
      (o._uiChangeDrag = function () {
        delete this.isFreeScrolling
      }),
      (o.pointerDown = function (t, i) {
        if (!this.isDraggable) {
          this._pointerDownDefault(t, i)
          return
        }
        this.okayPointerDown(t) &&
          (this._pointerDownPreventDefault(t),
          this.pointerDownFocus(t),
          document.activeElement != this.element && this.pointerDownBlur(),
          (this.dragX = this.x),
          this.viewport.classList.add('is-pointer-down'),
          (this.pointerDownScroll = a()),
          e.addEventListener('scroll', this),
          this._pointerDownDefault(t, i))
      }),
      (o._pointerDownDefault = function (t, e) {
        ;(this.pointerDownPointer = { pageX: e.pageX, pageY: e.pageY }),
          this._bindPostStartEvents(t),
          this.dispatchEvent('pointerDown', t, [e])
      })
    var r = { INPUT: !0, TEXTAREA: !0, SELECT: !0 }
    function a() {
      return { x: e.pageXOffset, y: e.pageYOffset }
    }
    return (
      (o.pointerDownFocus = function (t) {
        r[t.target.nodeName] || this.focus()
      }),
      (o._pointerDownPreventDefault = function (t) {
        var e = 'touchstart' == t.type,
          i = 'touch' == t.pointerType,
          n = r[t.target.nodeName]
        e || i || n || t.preventDefault()
      }),
      (o.hasDragStarted = function (t) {
        return Math.abs(t.x) > this.options.dragThreshold
      }),
      (o.pointerUp = function (t, e) {
        delete this.isTouchScrolling,
          this.viewport.classList.remove('is-pointer-down'),
          this.dispatchEvent('pointerUp', t, [e]),
          this._dragPointerUp(t, e)
      }),
      (o.pointerDone = function () {
        e.removeEventListener('scroll', this), delete this.pointerDownScroll
      }),
      (o.dragStart = function (t, i) {
        this.isDraggable &&
          ((this.dragStartPosition = this.x),
          this.startAnimation(),
          e.removeEventListener('scroll', this),
          this.dispatchEvent('dragStart', t, [i]))
      }),
      (o.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e)
        this.dispatchEvent('pointerMove', t, [e, i]), this._dragMove(t, e, i)
      }),
      (o.dragMove = function (t, e, i) {
        if (this.isDraggable) {
          t.preventDefault(), (this.previousDragX = this.dragX)
          var n = this.options.rightToLeft ? -1 : 1
          this.options.wrapAround && (i.x %= this.slideableWidth)
          var s = this.dragStartPosition + i.x * n
          if (!this.options.wrapAround && this.slides.length) {
            var o = Math.max(-this.slides[0].target, this.dragStartPosition)
            s = s > o ? (s + o) * 0.5 : s
            var r = Math.min(
              -this.getLastSlide().target,
              this.dragStartPosition
            )
            s = s < r ? (s + r) * 0.5 : s
          }
          ;(this.dragX = s),
            (this.dragMoveTime = new Date()),
            this.dispatchEvent('dragMove', t, [e, i])
        }
      }),
      (o.dragEnd = function (t, e) {
        if (this.isDraggable) {
          this.options.freeScroll && (this.isFreeScrolling = !0)
          var i = this.dragEndRestingSelect()
          if (this.options.freeScroll && !this.options.wrapAround) {
            var n = this.getRestingPosition()
            this.isFreeScrolling =
              -n > this.slides[0].target && -n < this.getLastSlide().target
          } else
            this.options.freeScroll ||
              i != this.selectedIndex ||
              (i += this.dragEndBoostSelect())
          delete this.previousDragX,
            (this.isDragSelect = this.options.wrapAround),
            this.select(i),
            delete this.isDragSelect,
            this.dispatchEvent('dragEnd', t, [e])
        }
      }),
      (o.dragEndRestingSelect = function () {
        var t = this.getRestingPosition(),
          e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
          i = this._getClosestResting(t, e, 1),
          n = this._getClosestResting(t, e, -1)
        return i.distance < n.distance ? i.index : n.index
      }),
      (o._getClosestResting = function (t, e, i) {
        for (
          var n = this.selectedIndex,
            s = 1 / 0,
            o =
              this.options.contain && !this.options.wrapAround
                ? function (t, e) {
                    return t <= e
                  }
                : function (t, e) {
                    return t < e
                  };
          o(e, s) &&
          ((n += i), (s = e), null !== (e = this.getSlideDistance(-t, n)));

        )
          e = Math.abs(e)
        return { distance: s, index: n - i }
      }),
      (o.getSlideDistance = function (t, e) {
        var i = this.slides.length,
          n = this.options.wrapAround && i > 1,
          o = n ? s.modulo(e, i) : e,
          r = this.slides[o]
        if (!r) return null
        var a = n ? this.slideableWidth * Math.floor(e / i) : 0
        return t - (r.target + a)
      }),
      (o.dragEndBoostSelect = function () {
        if (
          void 0 === this.previousDragX ||
          !this.dragMoveTime ||
          new Date() - this.dragMoveTime > 100
        )
          return 0
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
          e = this.previousDragX - this.dragX
        return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0
      }),
      (o.staticClick = function (t, e) {
        var i = this.getParentCell(t.target),
          n = i && i.element,
          s = i && this.cells.indexOf(i)
        this.dispatchEvent('staticClick', t, [e, n, s])
      }),
      (o.onscroll = function () {
        var t = a(),
          e = this.pointerDownScroll.x - t.x,
          i = this.pointerDownScroll.y - t.y
        ;(Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
      }),
      i
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/prev-next-button',
          ['./flickity', 'unipointer/unipointer', 'fizzy-ui-utils/utils'],
          function (i, n, s) {
            return e(t, i, n, s)
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(
          t,
          require('./flickity'),
          require('unipointer'),
          require('fizzy-ui-utils')
        ))
      : e(t, t.Flickity, t.Unipointer, t.fizzyUIUtils)
  })(window, function t(e, i, n, s) {
    'use strict'
    var o = 'http://www.w3.org/2000/svg'
    function r(t, e) {
      ;(this.direction = t), (this.parent = e), this._create()
    }
    ;(r.prototype = Object.create(n.prototype)),
      (r.prototype._create = function () {
        ;(this.isEnabled = !0), (this.isPrevious = -1 == this.direction)
        var t = this.parent.options.rightToLeft ? 0.8 : -0.8
        this.isLeft = this.direction == t
        var e = (this.element = document.createElement('button'))
        ;(e.className = 'flickity-button flickity-prev-next-button'),
          (e.className += this.isPrevious ? ' previous' : ' next'),
          e.setAttribute('type', 'button'),
          this.disable(),
          e.setAttribute('aria-label', this.isPrevious ? 'Previous' : 'Next')
        var i = this.createSVG()
        e.appendChild(i),
          this.parent.on('select', this.update.bind(this)),
          this.on(
            'pointerDown',
            this.parent.childUIPointerDown.bind(this.parent)
          )
      }),
      (r.prototype.activate = function () {
        this.bindStartEvent(this.element),
          this.element.addEventListener('click', this),
          this.parent.element.appendChild(this.element)
      }),
      (r.prototype.deactivate = function () {
        this.parent.element.removeChild(this.element),
          this.unbindStartEvent(this.element),
          this.element.removeEventListener('click', this)
      }),
      (r.prototype.createSVG = function () {
        var t,
          e = document.createElementNS(o, 'svg')
        e.setAttribute('class', 'flickity-button-icon'),
          e.setAttribute('viewBox', '0 0 100 100')
        var i = document.createElementNS(o, 'path'),
          n =
            'string' == typeof (t = this.parent.options.arrowShape)
              ? t
              : 'M ' +
                t.x0 +
                ',50 L ' +
                t.x1 +
                ',' +
                (t.y1 + 50) +
                ' L ' +
                t.x2 +
                ',' +
                (t.y2 + 50) +
                ' L ' +
                t.x3 +
                ',50  L ' +
                t.x2 +
                ',' +
                (50 - t.y2) +
                ' L ' +
                t.x1 +
                ',' +
                (50 - t.y1) +
                ' Z'
        return (
          i.setAttribute('d', n),
          i.setAttribute('class', 'arrow'),
          this.isLeft ||
            i.setAttribute('transform', 'translate(100, 100) rotate(180) '),
          e.appendChild(i),
          e
        )
      }),
      (r.prototype.handleEvent = s.handleEvent),
      (r.prototype.onclick = function () {
        if (this.isEnabled) {
          this.parent.uiChange()
          var t = this.isPrevious ? 'previous' : 'next'
          this.parent[t]()
        }
      }),
      (r.prototype.enable = function () {
        this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0))
      }),
      (r.prototype.disable = function () {
        this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1))
      }),
      (r.prototype.update = function () {
        var t = this.parent.slides
        if (this.parent.options.wrapAround && t.length > 1) {
          this.enable()
          return
        }
        var e = t.length ? t.length - 0.8 : 0.8,
          i = this.isPrevious ? 0 : e
        this[this.parent.selectedIndex == i ? 'disable' : 'enable']()
      }),
      (r.prototype.destroy = function () {
        this.deactivate(), this.allOff()
      }),
      s.extend(i.defaults, {
        prevNextButtons: !0,
        arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 }
      }),
      i.createMethods.push('_createPrevNextButtons')
    var a = i.prototype
    return (
      (a._createPrevNextButtons = function () {
        this.options.prevNextButtons &&
          ((this.prevButton = new r(-1, this)),
          (this.nextButton = new r(1, this)),
          this.on('activate', this.activatePrevNextButtons))
      }),
      (a.activatePrevNextButtons = function () {
        this.prevButton.activate(),
          this.nextButton.activate(),
          this.on('deactivate', this.deactivatePrevNextButtons)
      }),
      (a.deactivatePrevNextButtons = function () {
        this.prevButton.deactivate(),
          this.nextButton.deactivate(),
          this.off('deactivate', this.deactivatePrevNextButtons)
      }),
      (i.PrevNextButton = r),
      i
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/page-dots',
          ['./flickity', 'unipointer/unipointer', 'fizzy-ui-utils/utils'],
          function (i, n, s) {
            return e(t, i, n, s)
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(
          t,
          require('./flickity'),
          require('unipointer'),
          require('fizzy-ui-utils')
        ))
      : e(t, t.Flickity, t.Unipointer, t.fizzyUIUtils)
  })(window, function t(e, i, n, s) {
    function o(t) {
      ;(this.parent = t), this._create()
    }
    ;(o.prototype = Object.create(n.prototype)),
      (o.prototype._create = function () {
        ;(this.holder = document.createElement('ol')),
          (this.holder.className = 'flickity-page-dots'),
          (this.dots = []),
          (this.handleClick = this.onClick.bind(this)),
          this.on(
            'pointerDown',
            this.parent.childUIPointerDown.bind(this.parent)
          )
      }),
      (o.prototype.activate = function () {
        this.setDots(),
          this.holder.addEventListener('click', this.handleClick),
          this.bindStartEvent(this.holder),
          this.parent.element.appendChild(this.holder)
      }),
      (o.prototype.deactivate = function () {
        this.holder.removeEventListener('click', this.handleClick),
          this.unbindStartEvent(this.holder),
          this.parent.element.removeChild(this.holder)
      }),
      (o.prototype.setDots = function () {
        var t = this.parent.slides.length - this.dots.length
        t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
      }),
      (o.prototype.addDots = function (t) {
        for (
          var e = document.createDocumentFragment(),
            i = [],
            n = this.dots.length,
            s = n + t,
            o = n;
          o < s;
          o++
        ) {
          var r = document.createElement('li')
          ;(r.className = 'dot'),
            r.setAttribute('aria-label', 'Page dot ' + (o + 1)),
            e.appendChild(r),
            i.push(r)
        }
        this.holder.appendChild(e), (this.dots = this.dots.concat(i))
      }),
      (o.prototype.removeDots = function (t) {
        this.dots.splice(this.dots.length - t, t).forEach(function (t) {
          this.holder.removeChild(t)
        }, this)
      }),
      (o.prototype.updateSelected = function () {
        this.selectedDot &&
          ((this.selectedDot.className = 'dot'),
          this.selectedDot.removeAttribute('aria-current')),
          this.dots.length &&
            ((this.selectedDot = this.dots[this.parent.selectedIndex]),
            (this.selectedDot.className = 'dot is-selected'),
            this.selectedDot.setAttribute('aria-current', 'step'))
      }),
      (o.prototype.onTap = o.prototype.onClick =
        function (t) {
          var e = t.target
          if ('LI' == e.nodeName) {
            this.parent.uiChange()
            var i = this.dots.indexOf(e)
            this.parent.select(i)
          }
        }),
      (o.prototype.destroy = function () {
        this.deactivate(), this.allOff()
      }),
      (i.PageDots = o),
      s.extend(i.defaults, { pageDots: !0 }),
      i.createMethods.push('_createPageDots')
    var r = i.prototype
    return (
      (r._createPageDots = function () {
        this.options.pageDots &&
          ((this.pageDots = new o(this)),
          this.on('activate', this.activatePageDots),
          this.on('select', this.updateSelectedPageDots),
          this.on('cellChange', this.updatePageDots),
          this.on('resize', this.updatePageDots),
          this.on('deactivate', this.deactivatePageDots))
      }),
      (r.activatePageDots = function () {
        this.pageDots.activate()
      }),
      (r.updateSelectedPageDots = function () {
        this.pageDots.updateSelected()
      }),
      (r.updatePageDots = function () {
        this.pageDots.setDots()
      }),
      (r.deactivatePageDots = function () {
        this.pageDots.deactivate()
      }),
      (i.PageDots = o),
      i
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/player',
          ['ev-emitter/ev-emitter', 'fizzy-ui-utils/utils', './flickity'],
          function (t, i, n) {
            return e(t, i, n)
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(
          require('ev-emitter'),
          require('fizzy-ui-utils'),
          require('./flickity')
        ))
      : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
  })(window, function t(e, i, n) {
    function s(t) {
      ;(this.parent = t),
        (this.state = 'stopped'),
        (this.onVisibilityChange = this.visibilityChange.bind(this)),
        (this.onVisibilityPlay = this.visibilityPlay.bind(this))
    }
    ;(s.prototype = Object.create(e.prototype)),
      (s.prototype.play = function () {
        if ('playing' != this.state) {
          if (document.hidden) {
            document.addEventListener('visibilitychange', this.onVisibilityPlay)
            return
          }
          ;(this.state = 'playing'),
            document.addEventListener(
              'visibilitychange',
              this.onVisibilityChange
            ),
            this.tick()
        }
      }),
      (s.prototype.tick = function () {
        if ('playing' == this.state) {
          var t = this.parent.options.autoPlay
          t = 'number' == typeof t ? t : 3e3
          var e = this
          this.clear(),
            (this.timeout = setTimeout(function () {
              e.parent.next(!0), e.tick()
            }, t))
        }
      }),
      (s.prototype.stop = function () {
        ;(this.state = 'stopped'),
          this.clear(),
          document.removeEventListener(
            'visibilitychange',
            this.onVisibilityChange
          )
      }),
      (s.prototype.clear = function () {
        clearTimeout(this.timeout)
      }),
      (s.prototype.pause = function () {
        'playing' == this.state && ((this.state = 'paused'), this.clear())
      }),
      (s.prototype.unpause = function () {
        'paused' == this.state && this.play()
      }),
      (s.prototype.visibilityChange = function () {
        this[document.hidden ? 'pause' : 'unpause']()
      }),
      (s.prototype.visibilityPlay = function () {
        this.play(),
          document.removeEventListener(
            'visibilitychange',
            this.onVisibilityPlay
          )
      }),
      i.extend(n.defaults, { pauseAutoPlayOnHover: !0 }),
      n.createMethods.push('_createPlayer')
    var o = n.prototype
    return (
      (o._createPlayer = function () {
        ;(this.player = new s(this)),
          this.on('activate', this.activatePlayer),
          this.on('uiChange', this.stopPlayer),
          this.on('pointerDown', this.stopPlayer),
          this.on('deactivate', this.deactivatePlayer)
      }),
      (o.activatePlayer = function () {
        this.options.autoPlay &&
          (this.player.play(),
          this.element.addEventListener('mouseenter', this))
      }),
      (o.playPlayer = function () {
        this.player.play()
      }),
      (o.stopPlayer = function () {
        this.player.stop()
      }),
      (o.pausePlayer = function () {
        this.player.pause()
      }),
      (o.unpausePlayer = function () {
        this.player.unpause()
      }),
      (o.deactivatePlayer = function () {
        this.player.stop(), this.element.removeEventListener('mouseenter', this)
      }),
      (o.onmouseenter = function () {
        this.options.pauseAutoPlayOnHover &&
          (this.player.pause(),
          this.element.addEventListener('mouseleave', this))
      }),
      (o.onmouseleave = function () {
        this.player.unpause(),
          this.element.removeEventListener('mouseleave', this)
      }),
      (n.Player = s),
      n
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/add-remove-cell',
          ['./flickity', 'fizzy-ui-utils/utils'],
          function (i, n) {
            return e(t, i, n)
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(
          t,
          require('./flickity'),
          require('fizzy-ui-utils')
        ))
      : e(t, t.Flickity, t.fizzyUIUtils)
  })(window, function t(e, i, n) {
    var s = i.prototype
    return (
      (s.insert = function (t, e) {
        var i = this._makeCells(t)
        if (i && i.length) {
          var n,
            s,
            o = this.cells.length
          e = void 0 === e ? o : e
          var r =
              ((n = i),
              (s = document.createDocumentFragment()),
              n.forEach(function (t) {
                s.appendChild(t.element)
              }),
              s),
            a = e == o
          if (a) this.slider.appendChild(r)
          else {
            var h = this.cells[e].element
            this.slider.insertBefore(r, h)
          }
          if (0 === e) this.cells = i.concat(this.cells)
          else if (a) this.cells = this.cells.concat(i)
          else {
            var l = this.cells.splice(e, o - e)
            this.cells = this.cells.concat(i).concat(l)
          }
          this._sizeCells(i), this.cellChange(e, !0)
        }
      }),
      (s.append = function (t) {
        this.insert(t, this.cells.length)
      }),
      (s.prepend = function (t) {
        this.insert(t, 0)
      }),
      (s.remove = function (t) {
        var e = this.getCells(t)
        if (e && e.length) {
          var i = this.cells.length - 1
          e.forEach(function (t) {
            t.remove(),
              (i = Math.min(this.cells.indexOf(t), i)),
              n.removeFrom(this.cells, t)
          }, this),
            this.cellChange(i, !0)
        }
      }),
      (s.cellSizeChange = function (t) {
        var e = this.getCell(t)
        if (e) {
          e.getSize()
          var i = this.cells.indexOf(e)
          this.cellChange(i)
        }
      }),
      (s.cellChange = function (t, e) {
        var i = this.selectedElement
        this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize()
        var n = this.getCell(i)
        n && (this.selectedIndex = this.getCellSlideIndex(n)),
          (this.selectedIndex = Math.min(
            this.slides.length - 1,
            this.selectedIndex
          )),
          this.emitEvent('cellChange', [t]),
          this.select(this.selectedIndex),
          e && this.positionSliderAtSelected()
      }),
      i
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/lazyload',
          ['./flickity', 'fizzy-ui-utils/utils'],
          function (i, n) {
            return e(t, i, n)
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(
          t,
          require('./flickity'),
          require('fizzy-ui-utils')
        ))
      : e(t, t.Flickity, t.fizzyUIUtils)
  })(window, function t(e, i, n) {
    'use strict'
    i.createMethods.push('_createLazyload')
    var s = i.prototype
    function o(t, e) {
      ;(this.img = t), (this.flickity = e), this.load()
    }
    return (
      (s._createLazyload = function () {
        this.on('select', this.lazyLoad)
      }),
      (s.lazyLoad = function () {
        var t = this.options.lazyLoad
        if (t) {
          var e = this.getAdjacentCellElements('number' == typeof t ? t : 0),
            i = []
          e.forEach(function (t) {
            var e = (function t(e) {
              if ('IMG' == e.nodeName) {
                var i = e.getAttribute('data-flickity-lazyload'),
                  s = e.getAttribute('data-flickity-lazyload-src'),
                  o = e.getAttribute('data-flickity-lazyload-srcset')
                if (i || s || o) return [e]
              }
              var r = e.querySelectorAll(
                'img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]'
              )
              return n.makeArray(r)
            })(t)
            i = i.concat(e)
          }),
            i.forEach(function (t) {
              new o(t, this)
            }, this)
        }
      }),
      (o.prototype.handleEvent = n.handleEvent),
      (o.prototype.load = function () {
        this.img.addEventListener('load', this),
          this.img.addEventListener('error', this)
        var t =
            this.img.getAttribute('data-flickity-lazyload') ||
            this.img.getAttribute('data-flickity-lazyload-src'),
          e = this.img.getAttribute('data-flickity-lazyload-srcset')
        ;(this.img.src = t),
          e && this.img.setAttribute('srcset', e),
          this.img.removeAttribute('data-flickity-lazyload'),
          this.img.removeAttribute('data-flickity-lazyload-src'),
          this.img.removeAttribute('data-flickity-lazyload-srcset')
      }),
      (o.prototype.onload = function (t) {
        this.complete(t, 'flickity-lazyloaded')
      }),
      (o.prototype.onerror = function (t) {
        this.complete(t, 'flickity-lazyerror')
      }),
      (o.prototype.complete = function (t, e) {
        this.img.removeEventListener('load', this),
          this.img.removeEventListener('error', this)
        var i = this.flickity.getParentCell(this.img),
          n = i && i.element
        this.flickity.cellSizeChange(n),
          this.img.classList.add(e),
          this.flickity.dispatchEvent('lazyLoad', t, n)
      }),
      (i.LazyLoader = o),
      i
    )
  }),
  /*!
   * Flickity v2.3.0
   * Touch, responsive, flickable carousels
   *
   * Licensed GPLv3 for open source use
   * or Flickity Commercial License for commercial use
   *
   * https://flickity.metafizzy.co
   * Copyright 2015-2021 Metafizzy
   */ (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity/js/index',
          [
            './flickity',
            './drag',
            './prev-next-button',
            './page-dots',
            './player',
            './add-remove-cell',
            './lazyload'
          ],
          e
        )
      : 'object' == typeof module &&
        module.exports &&
        (module.exports = e(
          require('./flickity'),
          require('./drag'),
          require('./prev-next-button'),
          require('./page-dots'),
          require('./player'),
          require('./add-remove-cell'),
          require('./lazyload')
        ))
  })(window, function t(e) {
    return e
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          'flickity-as-nav-for/as-nav-for',
          ['flickity/js/index', 'fizzy-ui-utils/utils'],
          e
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(require('flickity'), require('fizzy-ui-utils')))
      : (t.Flickity = e(t.Flickity, t.fizzyUIUtils))
  })(window, function t(e, i) {
    e.createMethods.push('_createAsNavFor')
    var n = e.prototype
    function s(t, e, i) {
      return (e - t) * i + t
    }
    return (
      (n._createAsNavFor = function () {
        this.on('activate', this.activateAsNavFor),
          this.on('deactivate', this.deactivateAsNavFor),
          this.on('destroy', this.destroyAsNavFor)
        var t = this.options.asNavFor
        if (t) {
          var e = this
          setTimeout(function i() {
            e.setNavCompanion(t)
          })
        }
      }),
      (n.setNavCompanion = function (t) {
        t = i.getQueryElement(t)
        var n = e.data(t)
        if (n && n != this) {
          this.navCompanion = n
          var s = this
          ;(this.onNavCompanionSelect = function () {
            s.navCompanionSelect()
          }),
            n.on('select', this.onNavCompanionSelect),
            this.on('staticClick', this.onNavStaticClick),
            this.navCompanionSelect(!0)
        }
      }),
      (n.navCompanionSelect = function (t) {
        var e = this.navCompanion && this.navCompanion.selectedCells
        if (e) {
          var i,
            n,
            s,
            o = e[0],
            r = this.navCompanion.cells.indexOf(o),
            a = r + e.length - 1,
            h = Math.floor(
              ((i = r), ((n = a) - i) * (s = this.navCompanion.cellAlign) + i)
            )
          if (
            (this.selectCell(h, !1, t),
            this.removeNavSelectedElements(),
            !(h >= this.cells.length))
          ) {
            var l = this.cells.slice(r, a + 1)
            ;(this.navSelectedElements = l.map(function (t) {
              return t.element
            })),
              this.changeNavSelectedClass('add')
          }
        }
      }),
      (n.changeNavSelectedClass = function (t) {
        this.navSelectedElements.forEach(function (e) {
          e.classList[t]('is-nav-selected')
        })
      }),
      (n.activateAsNavFor = function () {
        this.navCompanionSelect(!0)
      }),
      (n.removeNavSelectedElements = function () {
        this.navSelectedElements &&
          (this.changeNavSelectedClass('remove'),
          delete this.navSelectedElements)
      }),
      (n.onNavStaticClick = function (t, e, i, n) {
        'number' == typeof n && this.navCompanion.selectCell(n)
      }),
      (n.deactivateAsNavFor = function () {
        this.removeNavSelectedElements()
      }),
      (n.destroyAsNavFor = function () {
        this.navCompanion &&
          (this.navCompanion.off('select', this.onNavCompanionSelect),
          this.off('staticClick', this.onNavStaticClick),
          delete this.navCompanion)
      }),
      e
    )
  }),
  /*!
   * imagesLoaded v4.1.4
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */ (function (t, e) {
    'use strict'
    'function' == typeof define && define.amd
      ? define(
          'imagesloaded/imagesloaded',
          ['ev-emitter/ev-emitter'],
          function (i) {
            return e(t, i)
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(t, require('ev-emitter')))
      : (t.imagesLoaded = e(t, t.EvEmitter))
  })('undefined' != typeof window ? window : this, function t(e, i) {
    var n = e.jQuery,
      s = e.console
    function o(t, e) {
      for (var i in e) t[i] = e[i]
      return t
    }
    var r = Array.prototype.slice
    function a(t, e, i) {
      if (!(this instanceof a)) return new a(t, e, i)
      var h,
        l = t
      if (('string' == typeof t && (l = document.querySelectorAll(t)), !l)) {
        s.error('Bad element for imagesLoaded ' + (l || t))
        return
      }
      ;(this.elements = Array.isArray((h = l))
        ? h
        : 'object' == typeof h && 'number' == typeof h.length
        ? r.call(h)
        : [h]),
        (this.options = o({}, this.options)),
        'function' == typeof e ? (i = e) : o(this.options, e),
        i && this.on('always', i),
        this.getImages(),
        n && (this.jqDeferred = new n.Deferred()),
        setTimeout(this.check.bind(this))
    }
    ;(a.prototype = Object.create(i.prototype)),
      (a.prototype.options = {}),
      (a.prototype.getImages = function () {
        ;(this.images = []), this.elements.forEach(this.addElementImages, this)
      }),
      (a.prototype.addElementImages = function (t) {
        'IMG' == t.nodeName && this.addImage(t),
          !0 === this.options.background && this.addElementBackgroundImages(t)
        var e = t.nodeType
        if (e && h[e]) {
          for (var i = t.querySelectorAll('img'), n = 0; n < i.length; n++) {
            var s = i[n]
            this.addImage(s)
          }
          if ('string' == typeof this.options.background) {
            var o = t.querySelectorAll(this.options.background)
            for (n = 0; n < o.length; n++) {
              var r = o[n]
              this.addElementBackgroundImages(r)
            }
          }
        }
      })
    var h = { 1: !0, 9: !0, 11: !0 }
    function l(t) {
      this.img = t
    }
    function c(t, e) {
      ;(this.url = t), (this.element = e), (this.img = new Image())
    }
    return (
      (a.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t)
        if (e)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage);
            null !== n;

          ) {
            var s = n && n[2]
            s && this.addBackground(s, t), (n = i.exec(e.backgroundImage))
          }
      }),
      (a.prototype.addImage = function (t) {
        var e = new l(t)
        this.images.push(e)
      }),
      (a.prototype.addBackground = function (t, e) {
        var i = new c(t, e)
        this.images.push(i)
      }),
      (a.prototype.check = function () {
        var t = this
        if (
          ((this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          !this.images.length)
        ) {
          this.complete()
          return
        }
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n)
          })
        }
        this.images.forEach(function (t) {
          t.once('progress', e), t.check()
        })
      }),
      (a.prototype.progress = function (t, e, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent('progress', [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && s && s.log('progress: ' + i, t, e)
      }),
      (a.prototype.complete = function () {
        var t = this.hasAnyBroken ? 'fail' : 'done'
        if (
          ((this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent('always', [this]),
          this.jqDeferred)
        ) {
          var e = this.hasAnyBroken ? 'reject' : 'resolve'
          this.jqDeferred[e](this)
        }
      }),
      (l.prototype = Object.create(i.prototype)),
      (l.prototype.check = function () {
        if (this.getIsImageComplete()) {
          this.confirm(0 !== this.img.naturalWidth, 'naturalWidth')
          return
        }
        ;(this.proxyImage = new Image()),
          this.proxyImage.addEventListener('load', this),
          this.proxyImage.addEventListener('error', this),
          this.img.addEventListener('load', this),
          this.img.addEventListener('error', this),
          (this.proxyImage.src = this.img.src)
      }),
      (l.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
      }),
      (l.prototype.confirm = function (t, e) {
        ;(this.isLoaded = t), this.emitEvent('progress', [this, this.img, e])
      }),
      (l.prototype.handleEvent = function (t) {
        var e = 'on' + t.type
        this[e] && this[e](t)
      }),
      (l.prototype.onload = function () {
        this.confirm(!0, 'onload'), this.unbindEvents()
      }),
      (l.prototype.onerror = function () {
        this.confirm(!1, 'onerror'), this.unbindEvents()
      }),
      (l.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener('load', this),
          this.proxyImage.removeEventListener('error', this),
          this.img.removeEventListener('load', this),
          this.img.removeEventListener('error', this)
      }),
      (c.prototype = Object.create(l.prototype)),
      (c.prototype.check = function () {
        this.img.addEventListener('load', this),
          this.img.addEventListener('error', this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, 'naturalWidth'),
            this.unbindEvents())
      }),
      (c.prototype.unbindEvents = function () {
        this.img.removeEventListener('load', this),
          this.img.removeEventListener('error', this)
      }),
      (c.prototype.confirm = function (t, e) {
        ;(this.isLoaded = t),
          this.emitEvent('progress', [this, this.element, e])
      }),
      (a.makeJQueryPlugin = function (t) {
        ;(t = t || e.jQuery) &&
          ((n = t).fn.imagesLoaded = function (t, e) {
            return new a(this, t, e).jqDeferred.promise(n(this))
          })
      }),
      a.makeJQueryPlugin(),
      a
    )
  }),
  (function (t, e) {
    'function' == typeof define && define.amd
      ? define(
          ['flickity/js/index', 'imagesloaded/imagesloaded'],
          function (i, n) {
            return e(t, i, n)
          }
        )
      : 'object' == typeof module && module.exports
      ? (module.exports = e(t, require('flickity'), require('imagesloaded')))
      : (t.Flickity = e(t, t.Flickity, t.imagesLoaded))
  })(window, function t(e, i, n) {
    'use strict'
    i.createMethods.push('_createImagesLoaded')
    var s = i.prototype
    return (
      (s._createImagesLoaded = function () {
        this.on('activate', this.imagesLoaded)
      }),
      (s.imagesLoaded = function () {
        if (this.options.imagesLoaded) {
          var t = this
          n(this.slider).on('progress', function e(i, n) {
            var s = t.getParentCell(n.img)
            t.cellSizeChange(s && s.element),
              t.options.freeScroll || t.positionSliderAtSelected()
          })
        }
      }),
      i
    )
  })
