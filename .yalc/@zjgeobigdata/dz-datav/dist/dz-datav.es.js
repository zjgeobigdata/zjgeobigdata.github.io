import './style.css';
import { ref, onMounted, onUnmounted, nextTick, reactive, watch, openBlock, createElementBlock, unref, Fragment, renderList, createElementVNode, normalizeStyle, toDisplayString, createCommentVNode, computed, onBeforeUnmount, renderSlot, createStaticVNode, getCurrentInstance, createVNode, defineComponent, normalizeClass } from "vue";
function randomExtend(minNum, maxNum) {
  if (arguments.length === 1)
    return parseInt((Math.random() * minNum + 1).toString(), 10);
  else
    return parseInt((Math.random() * (maxNum - minNum + 1) + minNum).toString(), 10);
}
function debounce(delay, callback, vm) {
  let lastTime;
  return function() {
    clearTimeout(lastTime);
    lastTime = setTimeout(() => {
      callback.call(vm, ...arguments);
    }, delay);
  };
}
function observerDomResize(dom, callback) {
  const MutationObserver = window.MutationObserver;
  const observer = new MutationObserver(callback);
  observer.observe(dom, { attributes: true, attributeFilter: ["style"], attributeOldValue: true });
  return observer;
}
function getPointDistance(pointOne, pointTwo) {
  const minusX = Math.abs(pointOne[0] - pointTwo[0]);
  const minusY = Math.abs(pointOne[1] - pointTwo[1]);
  return Math.sqrt(minusX * minusX + minusY * minusY);
}
function getCircleRadianPoint(x, y, radius, radian) {
  return [x + Math.cos(radian) * radius, y + Math.sin(radian) * radius];
}
function filterNonNumber$1(array) {
  return array.filter((n) => {
    return typeof n === "number";
  });
}
function mulAdd$1(nums) {
  nums = filterNonNumber$1(nums);
  return nums.reduce((all, num) => {
    return all + num;
  }, 0);
}
function getTwoPointDistance$1(pointOne, pointTwo) {
  const minusX = Math.abs(pointOne.x - pointTwo.x);
  const minusY = Math.abs(pointOne.y - pointTwo.y);
  return Math.sqrt(minusX * minusX + minusY * minusY);
}
function getPolylineLength$1(points) {
  const lineSegments = new Array(points.length - 1).fill(0).map((foo, i) => {
    return [points[i], points[i + 1]];
  });
  const lengths = lineSegments.map((item) => {
    return getTwoPointDistance$1(item[0], item[1]);
  });
  return mulAdd$1(lengths);
}
function PointToString(point) {
  return `${point.x},${point.y}`;
}
function PointsToString(points) {
  return points.map(PointToString).join(" ");
}
function uuid(hasHyphen) {
  return (hasHyphen ? "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx" : "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx").replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
function deepMerge$1(target, merged) {
  for (const key in merged) {
    if (target[key] && typeof target[key] === "object") {
      deepMerge$1(target[key], merged[key]);
      continue;
    }
    if (typeof merged[key] === "object") {
      target[key] = deepClone(merged[key], true);
      continue;
    }
    target[key] = merged[key];
  }
  return target;
}
function deepClone(object, recursion) {
  if (!object)
    return object;
  const { parse, stringify } = JSON;
  if (!recursion)
    return parse(stringify(object));
  const clonedObj = object instanceof Array ? [] : {};
  if (object && typeof object === "object") {
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        if (object[key] && typeof object[key] === "object")
          clonedObj[key] = deepClone(object[key], true);
        else
          clonedObj[key] = object[key];
      }
    }
  }
  return clonedObj;
}
const autoResize = (dom, onResize, afterAutoResizeMixinInit) => {
  const width = ref(0);
  const height = ref(0);
  let debounceInitWHFun;
  let domObserver = null;
  let domHtml = null;
  const initWH = (resize = true) => {
    return new Promise((resolve) => {
      nextTick(() => {
        domHtml = dom.value;
        width.value = dom.value ? dom.value.clientWidth : 0;
        height.value = dom.value ? dom.value.clientHeight : 0;
        if (!dom.value)
          console.warn("DataV: Failed to get dom node, component rendering may be abnormal!");
        else if (!width.value || !height.value)
          console.warn("DataV: Component width or height is 0px, rendering abnormality may occur!");
        if (typeof onResize === "function" && resize)
          onResize();
        resolve(true);
      });
    });
  };
  const getDebounceInitWHFun = () => {
    debounceInitWHFun = debounce(100, initWH, void 0);
  };
  const bindDomResizeCallback = () => {
    domObserver = observerDomResize(domHtml, debounceInitWHFun);
    window.addEventListener("resize", debounceInitWHFun);
  };
  const unbindDomResizeCallback = () => {
    if (!domObserver)
      return;
    domObserver.disconnect();
    domObserver.takeRecords();
    domObserver = null;
    window.removeEventListener("resize", debounceInitWHFun);
  };
  const autoResizeMixinInit = async () => {
    await initWH(false);
    getDebounceInitWHFun();
    bindDomResizeCallback();
    if (typeof afterAutoResizeMixinInit === "function")
      afterAutoResizeMixinInit();
  };
  onMounted(() => {
    autoResizeMixinInit();
  });
  onUnmounted(() => {
    unbindDomResizeCallback();
  });
  return {
    width,
    height,
    initWH
  };
};
var index_vue_vue_type_style_index_0_lang$B = "";
const _hoisted_1$z = ["width", "height"];
const _hoisted_2$y = ["d", "fill"];
const _hoisted_3$w = ["fill", "x", "y"];
const _hoisted_4$t = ["xlink:href", "width", "height", "x", "y"];
const _hoisted_5$q = ["fill", "x", "y"];
const _sfc_main$B = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const conicalColumnChart = ref(null);
    const { width, height } = autoResize(conicalColumnChart, onResize, afterAutoResizeMixinInit);
    const state = reactive({
      defaultConfig: {
        data: [],
        img: [],
        fontSize: 12,
        imgSideLength: 30,
        columnColor: "rgba(0, 194, 255, 0.4)",
        textColor: "#fff",
        showValue: false
      },
      mergedConfig: null,
      column: []
    });
    watch(() => props.config, () => {
      calcData();
    }, {
      deep: true
    });
    function afterAutoResizeMixinInit() {
      calcData();
    }
    function onResize() {
      calcData();
    }
    function calcData() {
      mergeConfig();
      initData();
      calcSVGPath();
    }
    function mergeConfig() {
      state.mergedConfig = deepMerge$1(deepClone(state.defaultConfig, true), props.config || {});
    }
    function initData() {
      let { data } = state.mergedConfig;
      data = deepClone(data, true);
      data.sort(({ value: a }, { value: b }) => {
        if (a > b)
          return -1;
        else if (a < b)
          return 1;
        else
          return 0;
      });
      const max = data[0] ? data[0].value : 10;
      data = data.map((item) => ({
        ...item,
        percent: item.value / max
      }));
      state.mergedConfig.data = data;
    }
    function calcSVGPath() {
      const { imgSideLength, fontSize, data } = state.mergedConfig;
      const itemNum = data.length;
      const gap = width.value / (itemNum + 1);
      const useAbleHeight = height.value - imgSideLength - fontSize - 5;
      const svgBottom = height.value - fontSize - 5;
      state.column = data.map((item, i) => {
        const { percent } = item;
        const middleXPos = gap * (i + 1);
        const leftXPos = gap * i;
        const rightXpos = gap * (i + 2);
        const middleYPos = svgBottom - useAbleHeight * percent;
        const controlYPos = useAbleHeight * percent * 0.6 + middleYPos;
        const d = `
          M${leftXPos}, ${svgBottom}
          Q${middleXPos}, ${controlYPos} ${middleXPos},${middleYPos}
          M${middleXPos},${middleYPos}
          Q${middleXPos}, ${controlYPos} ${rightXpos},${svgBottom}
          L${leftXPos}, ${svgBottom}
          Z
        `;
        const textY = (svgBottom + middleYPos) / 2 + fontSize / 2;
        return {
          ...item,
          d,
          x: middleXPos,
          y: middleYPos,
          textY
        };
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "conicalColumnChart",
        ref: conicalColumnChart,
        class: "dv-conical-column-chart"
      }, [
        (openBlock(), createElementBlock("svg", {
          width: unref(width),
          height: unref(height)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(state.column, (item, i) => {
            return openBlock(), createElementBlock("g", { key: i }, [
              createElementVNode("path", {
                d: item.d,
                fill: state.mergedConfig.columnColor
              }, null, 8, _hoisted_2$y),
              createElementVNode("text", {
                style: normalizeStyle(`fontSize:${state.mergedConfig.fontSize}px`),
                fill: state.mergedConfig.textColor,
                x: item.x,
                y: unref(height) - 4
              }, toDisplayString(item.name), 13, _hoisted_3$w),
              state.mergedConfig.img.length ? (openBlock(), createElementBlock("image", {
                key: 0,
                "xlink:href": state.mergedConfig.img[i % state.mergedConfig.img.length],
                width: state.mergedConfig.imgSideLength,
                height: state.mergedConfig.imgSideLength,
                x: item.x - state.mergedConfig.imgSideLength / 2,
                y: item.y - state.mergedConfig.imgSideLength
              }, null, 8, _hoisted_4$t)) : createCommentVNode("", true),
              state.mergedConfig.showValue ? (openBlock(), createElementBlock("text", {
                key: 1,
                style: normalizeStyle(`fontSize:${state.mergedConfig.fontSize}px`),
                fill: state.mergedConfig.textColor,
                x: item.x,
                y: item.textY
              }, toDisplayString(item.value), 13, _hoisted_5$q)) : createCommentVNode("", true)
            ]);
          }), 128))
        ], 8, _hoisted_1$z))
      ], 512);
    };
  }
};
const ConicalColumnChartPlugin = {
  install(app) {
    app.component("DvConicalColumnChart", _sfc_main$B);
  }
};
var index_vue_vue_type_style_index_0_lang$A = "";
const _hoisted_1$y = ["id"];
const _hoisted_2$x = ["offset", "stop-color"];
const _hoisted_3$v = ["id", "x2"];
const _hoisted_4$s = ["offset", "stop-color"];
const _hoisted_5$p = ["x", "y", "rx", "ry", "stroke-width", "stroke", "width", "height"];
const _hoisted_6$n = ["stroke-width", "stroke-dasharray", "stroke", "points"];
const _hoisted_7$m = ["stroke", "fill", "x", "y"];
const _sfc_main$A = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const id = uuid();
    const percentPond = ref(null);
    const state = reactive({
      gradientId1: `percent-pond-gradientId1-${id}`,
      gradientId2: `percent-pond-gradientId2-${id}`,
      width: 0,
      height: 0,
      defaultConfig: {
        value: 0,
        colors: ["#3DE7C9", "#00BAFF"],
        borderWidth: 3,
        borderGap: 3,
        lineDash: [5, 1],
        textColor: "#fff",
        borderRadius: 5,
        localGradient: false,
        formatter: "{value}%"
      },
      mergedConfig: null
    });
    const rectWidth = computed(() => {
      if (!state.mergedConfig)
        return 0;
      const { borderWidth } = state.mergedConfig;
      return state.width - borderWidth;
    });
    const rectHeight = computed(() => {
      if (!state.mergedConfig)
        return 0;
      const { borderWidth } = state.mergedConfig;
      return state.height - borderWidth;
    });
    const points = computed(() => {
      const halfHeight = state.height / 2;
      if (!state.mergedConfig)
        return `0, ${halfHeight} 0, ${halfHeight}`;
      const { borderWidth, borderGap, value } = state.mergedConfig;
      const polylineLength = (state.width - (borderWidth + borderGap) * 2) / 100 * value;
      return `
        ${borderWidth + borderGap}, ${halfHeight}
        ${borderWidth + borderGap + polylineLength}, ${halfHeight + 1e-3}
      `;
    });
    const polylineWidth = computed(() => {
      if (!state.mergedConfig)
        return 0;
      const { borderWidth, borderGap } = state.mergedConfig;
      return state.height - (borderWidth + borderGap) * 2;
    });
    const linearGradient = computed(() => {
      if (!state.mergedConfig)
        return [];
      const { colors } = state.mergedConfig;
      const colorNum = colors.length;
      const colorOffsetGap = 100 / (colorNum - 1);
      return colors.map((c, i) => [colorOffsetGap * i, c]);
    });
    const polylineGradient = computed(() => {
      if (!state.mergedConfig)
        return state.gradientId2;
      if (state.mergedConfig.localGradient)
        return state.gradientId1;
      return state.gradientId2;
    });
    const gradient2XPos = computed(() => {
      if (!state.mergedConfig)
        return "100%";
      const { value } = state.mergedConfig;
      return `${200 - value}%`;
    });
    const details = computed(() => {
      if (!state.mergedConfig)
        return "";
      const { value, formatter } = state.mergedConfig;
      return formatter.replace("{value}", value);
    });
    watch(() => props.config, () => {
      mergeConfig();
    }, {
      deep: true
    });
    onMounted(() => {
      init();
    });
    async function init() {
      await initWH();
      if (!props.config)
        return;
      mergeConfig();
    }
    async function initWH() {
      await nextTick();
      const { clientWidth, clientHeight } = percentPond.value;
      state.width = clientWidth;
      state.height = clientHeight;
    }
    function mergeConfig() {
      state.mergedConfig = deepMerge$1(deepClone(state.defaultConfig, true), props.config || {});
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "percentPond",
        ref: percentPond,
        class: "dv-percent-pond"
      }, [
        (openBlock(), createElementBlock("svg", null, [
          createElementVNode("defs", null, [
            createElementVNode("linearGradient", {
              id: state.gradientId1,
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "0%"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(linearGradient), (lc) => {
                return openBlock(), createElementBlock("stop", {
                  key: lc[0],
                  offset: `${lc[0]}%`,
                  "stop-color": lc[1]
                }, null, 8, _hoisted_2$x);
              }), 128))
            ], 8, _hoisted_1$y),
            createElementVNode("linearGradient", {
              id: state.gradientId2,
              x1: "0%",
              y1: "0%",
              x2: unref(gradient2XPos),
              y2: "0%"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(linearGradient), (lc) => {
                return openBlock(), createElementBlock("stop", {
                  key: lc[0],
                  offset: `${lc[0]}%`,
                  "stop-color": lc[1]
                }, null, 8, _hoisted_4$s);
              }), 128))
            ], 8, _hoisted_3$v)
          ]),
          createElementVNode("rect", {
            x: state.mergedConfig ? state.mergedConfig.borderWidth / 2 : "0",
            y: state.mergedConfig ? state.mergedConfig.borderWidth / 2 : "0",
            rx: state.mergedConfig ? state.mergedConfig.borderRadius : "0",
            ry: state.mergedConfig ? state.mergedConfig.borderRadius : "0",
            fill: "transparent",
            "stroke-width": state.mergedConfig ? state.mergedConfig.borderWidth : "0",
            stroke: `url(#${state.gradientId1})`,
            width: unref(rectWidth) > 0 ? unref(rectWidth) : 0,
            height: unref(rectHeight) > 0 ? unref(rectHeight) : 0
          }, null, 8, _hoisted_5$p),
          createElementVNode("polyline", {
            "stroke-width": unref(polylineWidth),
            "stroke-dasharray": state.mergedConfig ? state.mergedConfig.lineDash.join(",") : "0",
            stroke: `url(#${unref(polylineGradient)})`,
            points: unref(points)
          }, null, 8, _hoisted_6$n),
          createElementVNode("text", {
            stroke: state.mergedConfig ? state.mergedConfig.textColor : "#fff",
            fill: state.mergedConfig ? state.mergedConfig.textColor : "#fff",
            x: state.width / 2,
            y: state.height / 2
          }, toDisplayString(unref(details)), 9, _hoisted_7$m)
        ]))
      ], 512);
    };
  }
};
const PercentPondPlugin = {
  install(app) {
    app.component("DvPercentPond", _sfc_main$A);
  }
};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var lib$4 = {};
var interopRequireDefault = { exports: {} };
(function(module) {
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }
  module.exports = _interopRequireDefault2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(interopRequireDefault);
var crender_class = {};
var defineProperty = { exports: {} };
(function(module) {
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(defineProperty);
var toConsumableArray = { exports: {} };
var arrayWithoutHoles = { exports: {} };
var arrayLikeToArray = { exports: {} };
(function(module) {
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(arrayLikeToArray);
(function(module) {
  var arrayLikeToArray$1 = arrayLikeToArray.exports;
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return arrayLikeToArray$1(arr);
  }
  module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(arrayWithoutHoles);
var iterableToArray = { exports: {} };
(function(module) {
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(iterableToArray);
var unsupportedIterableToArray = { exports: {} };
(function(module) {
  var arrayLikeToArray$1 = arrayLikeToArray.exports;
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray$1(o, minLen);
  }
  module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(unsupportedIterableToArray);
var nonIterableSpread = { exports: {} };
(function(module) {
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(nonIterableSpread);
(function(module) {
  var arrayWithoutHoles$1 = arrayWithoutHoles.exports;
  var iterableToArray$1 = iterableToArray.exports;
  var unsupportedIterableToArray$1 = unsupportedIterableToArray.exports;
  var nonIterableSpread$1 = nonIterableSpread.exports;
  function _toConsumableArray(arr) {
    return arrayWithoutHoles$1(arr) || iterableToArray$1(arr) || unsupportedIterableToArray$1(arr) || nonIterableSpread$1();
  }
  module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(toConsumableArray);
var classCallCheck = { exports: {} };
(function(module) {
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(classCallCheck);
var lib$3 = {};
var keywords = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _default = /* @__PURE__ */ new Map([["transparent", "rgba(0,0,0,0)"], ["black", "#000000"], ["silver", "#C0C0C0"], ["gray", "#808080"], ["white", "#FFFFFF"], ["maroon", "#800000"], ["red", "#FF0000"], ["purple", "#800080"], ["fuchsia", "#FF00FF"], ["green", "#008000"], ["lime", "#00FF00"], ["olive", "#808000"], ["yellow", "#FFFF00"], ["navy", "#000080"], ["blue", "#0000FF"], ["teal", "#008080"], ["aqua", "#00FFFF"], ["aliceblue", "#f0f8ff"], ["antiquewhite", "#faebd7"], ["aquamarine", "#7fffd4"], ["azure", "#f0ffff"], ["beige", "#f5f5dc"], ["bisque", "#ffe4c4"], ["blanchedalmond", "#ffebcd"], ["blueviolet", "#8a2be2"], ["brown", "#a52a2a"], ["burlywood", "#deb887"], ["cadetblue", "#5f9ea0"], ["chartreuse", "#7fff00"], ["chocolate", "#d2691e"], ["coral", "#ff7f50"], ["cornflowerblue", "#6495ed"], ["cornsilk", "#fff8dc"], ["crimson", "#dc143c"], ["cyan", "#00ffff"], ["darkblue", "#00008b"], ["darkcyan", "#008b8b"], ["darkgoldenrod", "#b8860b"], ["darkgray", "#a9a9a9"], ["darkgreen", "#006400"], ["darkgrey", "#a9a9a9"], ["darkkhaki", "#bdb76b"], ["darkmagenta", "#8b008b"], ["darkolivegreen", "#556b2f"], ["darkorange", "#ff8c00"], ["darkorchid", "#9932cc"], ["darkred", "#8b0000"], ["darksalmon", "#e9967a"], ["darkseagreen", "#8fbc8f"], ["darkslateblue", "#483d8b"], ["darkslategray", "#2f4f4f"], ["darkslategrey", "#2f4f4f"], ["darkturquoise", "#00ced1"], ["darkviolet", "#9400d3"], ["deeppink", "#ff1493"], ["deepskyblue", "#00bfff"], ["dimgray", "#696969"], ["dimgrey", "#696969"], ["dodgerblue", "#1e90ff"], ["firebrick", "#b22222"], ["floralwhite", "#fffaf0"], ["forestgreen", "#228b22"], ["gainsboro", "#dcdcdc"], ["ghostwhite", "#f8f8ff"], ["gold", "#ffd700"], ["goldenrod", "#daa520"], ["greenyellow", "#adff2f"], ["grey", "#808080"], ["honeydew", "#f0fff0"], ["hotpink", "#ff69b4"], ["indianred", "#cd5c5c"], ["indigo", "#4b0082"], ["ivory", "#fffff0"], ["khaki", "#f0e68c"], ["lavender", "#e6e6fa"], ["lavenderblush", "#fff0f5"], ["lawngreen", "#7cfc00"], ["lemonchiffon", "#fffacd"], ["lightblue", "#add8e6"], ["lightcoral", "#f08080"], ["lightcyan", "#e0ffff"], ["lightgoldenrodyellow", "#fafad2"], ["lightgray", "#d3d3d3"], ["lightgreen", "#90ee90"], ["lightgrey", "#d3d3d3"], ["lightpink", "#ffb6c1"], ["lightsalmon", "#ffa07a"], ["lightseagreen", "#20b2aa"], ["lightskyblue", "#87cefa"], ["lightslategray", "#778899"], ["lightslategrey", "#778899"], ["lightsteelblue", "#b0c4de"], ["lightyellow", "#ffffe0"], ["limegreen", "#32cd32"], ["linen", "#faf0e6"], ["magenta", "#ff00ff"], ["mediumaquamarine", "#66cdaa"], ["mediumblue", "#0000cd"], ["mediumorchid", "#ba55d3"], ["mediumpurple", "#9370db"], ["mediumseagreen", "#3cb371"], ["mediumslateblue", "#7b68ee"], ["mediumspringgreen", "#00fa9a"], ["mediumturquoise", "#48d1cc"], ["mediumvioletred", "#c71585"], ["midnightblue", "#191970"], ["mintcream", "#f5fffa"], ["mistyrose", "#ffe4e1"], ["moccasin", "#ffe4b5"], ["navajowhite", "#ffdead"], ["oldlace", "#fdf5e6"], ["olivedrab", "#6b8e23"], ["orange", "#ffa500"], ["orangered", "#ff4500"], ["orchid", "#da70d6"], ["palegoldenrod", "#eee8aa"], ["palegreen", "#98fb98"], ["paleturquoise", "#afeeee"], ["palevioletred", "#db7093"], ["papayawhip", "#ffefd5"], ["peachpuff", "#ffdab9"], ["peru", "#cd853f"], ["pink", "#ffc0cb"], ["plum", "#dda0dd"], ["powderblue", "#b0e0e6"], ["rosybrown", "#bc8f8f"], ["royalblue", "#4169e1"], ["saddlebrown", "#8b4513"], ["salmon", "#fa8072"], ["sandybrown", "#f4a460"], ["seagreen", "#2e8b57"], ["seashell", "#fff5ee"], ["sienna", "#a0522d"], ["skyblue", "#87ceeb"], ["slateblue", "#6a5acd"], ["slategray", "#708090"], ["slategrey", "#708090"], ["snow", "#fffafa"], ["springgreen", "#00ff7f"], ["steelblue", "#4682b4"], ["tan", "#d2b48c"], ["thistle", "#d8bfd8"], ["tomato", "#ff6347"], ["turquoise", "#40e0d0"], ["violet", "#ee82ee"], ["wheat", "#f5deb3"], ["whitesmoke", "#f5f5f5"], ["yellowgreen", "#9acd32"]]);
  exports["default"] = _default;
})(keywords);
(function(exports) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getRgbValue = getRgbValue;
  exports.getRgbaValue = getRgbaValue;
  exports.getOpacity = getOpacity;
  exports.toRgb = toRgb;
  exports.toHex = toHex;
  exports.getColorFromRgbValue = getColorFromRgbValue;
  exports.darken = darken;
  exports.lighten = lighten;
  exports.fade = fade;
  exports["default"] = void 0;
  var _toConsumableArray22 = _interopRequireDefault2(toConsumableArray.exports);
  var _keywords = _interopRequireDefault2(keywords);
  var hexReg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  var rgbReg = /^(rgb|rgba|RGB|RGBA)/;
  var rgbaReg = /^(rgba|RGBA)/;
  function validator5(color2) {
    var isHex = hexReg.test(color2);
    var isRgb = rgbReg.test(color2);
    if (isHex || isRgb)
      return color2;
    color2 = getColorByKeyword(color2);
    if (!color2) {
      console.error("Color: Invalid color!");
      return false;
    }
    return color2;
  }
  function getColorByKeyword(keyword) {
    if (!keyword) {
      console.error("getColorByKeywords: Missing parameters!");
      return false;
    }
    if (!_keywords["default"].has(keyword))
      return false;
    return _keywords["default"].get(keyword);
  }
  function getRgbValue(color2) {
    if (!color2) {
      console.error("getRgbValue: Missing parameters!");
      return false;
    }
    color2 = validator5(color2);
    if (!color2)
      return false;
    var isHex = hexReg.test(color2);
    var isRgb = rgbReg.test(color2);
    var lowerColor = color2.toLowerCase();
    if (isHex)
      return getRgbValueFromHex(lowerColor);
    if (isRgb)
      return getRgbValueFromRgb(lowerColor);
  }
  function getRgbValueFromHex(color2) {
    color2 = color2.replace("#", "");
    if (color2.length === 3)
      color2 = Array.from(color2).map(function(hexNum) {
        return hexNum + hexNum;
      }).join("");
    color2 = color2.split("");
    return new Array(3).fill(0).map(function(t, i) {
      return parseInt("0x".concat(color2[i * 2]).concat(color2[i * 2 + 1]));
    });
  }
  function getRgbValueFromRgb(color2) {
    return color2.replace(/rgb\(|rgba\(|\)/g, "").split(",").slice(0, 3).map(function(n) {
      return parseInt(n);
    });
  }
  function getRgbaValue(color2) {
    if (!color2) {
      console.error("getRgbaValue: Missing parameters!");
      return false;
    }
    var colorValue = getRgbValue(color2);
    if (!colorValue)
      return false;
    colorValue.push(getOpacity(color2));
    return colorValue;
  }
  function getOpacity(color2) {
    if (!color2) {
      console.error("getOpacity: Missing parameters!");
      return false;
    }
    color2 = validator5(color2);
    if (!color2)
      return false;
    var isRgba = rgbaReg.test(color2);
    if (!isRgba)
      return 1;
    color2 = color2.toLowerCase();
    return Number(color2.split(",").slice(-1)[0].replace(/[)|\s]/g, ""));
  }
  function toRgb(color2, opacity) {
    if (!color2) {
      console.error("toRgb: Missing parameters!");
      return false;
    }
    var rgbValue = getRgbValue(color2);
    if (!rgbValue)
      return false;
    var addOpacity = typeof opacity === "number";
    if (addOpacity)
      return "rgba(" + rgbValue.join(",") + ",".concat(opacity, ")");
    return "rgb(" + rgbValue.join(",") + ")";
  }
  function toHex(color2) {
    if (!color2) {
      console.error("toHex: Missing parameters!");
      return false;
    }
    if (hexReg.test(color2))
      return color2;
    color2 = getRgbValue(color2);
    if (!color2)
      return false;
    return "#" + color2.map(function(n) {
      return Number(n).toString(16);
    }).map(function(n) {
      return n === "0" ? "00" : n;
    }).join("");
  }
  function getColorFromRgbValue(value) {
    if (!value) {
      console.error("getColorFromRgbValue: Missing parameters!");
      return false;
    }
    var valueLength = value.length;
    if (valueLength !== 3 && valueLength !== 4) {
      console.error("getColorFromRgbValue: Value is illegal!");
      return false;
    }
    var color2 = valueLength === 3 ? "rgb(" : "rgba(";
    color2 += value.join(",") + ")";
    return color2;
  }
  function darken(color2) {
    var percent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (!color2) {
      console.error("darken: Missing parameters!");
      return false;
    }
    var rgbaValue = getRgbaValue(color2);
    if (!rgbaValue)
      return false;
    rgbaValue = rgbaValue.map(function(v, i) {
      return i === 3 ? v : v - Math.ceil(2.55 * percent);
    }).map(function(v) {
      return v < 0 ? 0 : v;
    });
    return getColorFromRgbValue(rgbaValue);
  }
  function lighten(color2) {
    var percent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (!color2) {
      console.error("lighten: Missing parameters!");
      return false;
    }
    var rgbaValue = getRgbaValue(color2);
    if (!rgbaValue)
      return false;
    rgbaValue = rgbaValue.map(function(v, i) {
      return i === 3 ? v : v + Math.ceil(2.55 * percent);
    }).map(function(v) {
      return v > 255 ? 255 : v;
    });
    return getColorFromRgbValue(rgbaValue);
  }
  function fade(color2) {
    var percent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    if (!color2) {
      console.error("fade: Missing parameters!");
      return false;
    }
    var rgbValue = getRgbValue(color2);
    if (!rgbValue)
      return false;
    var rgbaValue = [].concat((0, _toConsumableArray22["default"])(rgbValue), [percent / 100]);
    return getColorFromRgbValue(rgbaValue);
  }
  var _default = {
    fade,
    toHex,
    toRgb,
    darken,
    lighten,
    getOpacity,
    getRgbValue,
    getRgbaValue,
    getColorFromRgbValue
  };
  exports["default"] = _default;
})(lib$3);
var lib$2 = {};
var bezierCurveToPolyline = {};
var slicedToArray = { exports: {} };
var arrayWithHoles = { exports: {} };
(function(module) {
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(arrayWithHoles);
var iterableToArrayLimit = { exports: {} };
(function(module) {
  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(iterableToArrayLimit);
var nonIterableRest = { exports: {} };
(function(module) {
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(nonIterableRest);
(function(module) {
  var arrayWithHoles$1 = arrayWithHoles.exports;
  var iterableToArrayLimit$1 = iterableToArrayLimit.exports;
  var unsupportedIterableToArray$1 = unsupportedIterableToArray.exports;
  var nonIterableRest$1 = nonIterableRest.exports;
  function _slicedToArray(arr, i) {
    return arrayWithHoles$1(arr) || iterableToArrayLimit$1(arr, i) || unsupportedIterableToArray$1(arr, i) || nonIterableRest$1();
  }
  module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(slicedToArray);
(function(exports) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.bezierCurveToPolyline = bezierCurveToPolyline2;
  exports.getBezierCurveLength = getBezierCurveLength2;
  exports["default"] = void 0;
  var _slicedToArray22 = _interopRequireDefault2(slicedToArray.exports);
  var _toConsumableArray22 = _interopRequireDefault2(toConsumableArray.exports);
  var sqrt = Math.sqrt, pow2 = Math.pow, ceil = Math.ceil, abs2 = Math.abs;
  var defaultSegmentPointsNum = 50;
  function abstractBezierCurveToPolyline(bezierCurve) {
    var precision = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
    var segmentsNum = bezierCurve.length - 1;
    var startPoint = bezierCurve[0];
    var endPoint = bezierCurve[segmentsNum][2];
    var segments = bezierCurve.slice(1);
    var getSegmentTPointFuns = segments.map(function(seg, i) {
      var beginPoint = i === 0 ? startPoint : segments[i - 1][2];
      return createGetBezierCurveTPointFun.apply(void 0, [beginPoint].concat((0, _toConsumableArray22["default"])(seg)));
    });
    var segmentPointsNum = new Array(segmentsNum).fill(defaultSegmentPointsNum);
    var segmentPoints = getSegmentPointsByNum(getSegmentTPointFuns, segmentPointsNum);
    var result = calcUniformPointsByIteration(segmentPoints, getSegmentTPointFuns, segments, precision);
    result.segmentPoints.push(endPoint);
    return result;
  }
  function createGetBezierCurveTPointFun(beginPoint, controlPoint1, controlPoint2, endPoint) {
    return function(t) {
      var tSubed1 = 1 - t;
      var tSubed1Pow3 = pow2(tSubed1, 3);
      var tSubed1Pow2 = pow2(tSubed1, 2);
      var tPow3 = pow2(t, 3);
      var tPow2 = pow2(t, 2);
      return [beginPoint[0] * tSubed1Pow3 + 3 * controlPoint1[0] * t * tSubed1Pow2 + 3 * controlPoint2[0] * tPow2 * tSubed1 + endPoint[0] * tPow3, beginPoint[1] * tSubed1Pow3 + 3 * controlPoint1[1] * t * tSubed1Pow2 + 3 * controlPoint2[1] * tPow2 * tSubed1 + endPoint[1] * tPow3];
    };
  }
  function getTwoPointDistance2(_ref, _ref2) {
    var _ref3 = (0, _slicedToArray22["default"])(_ref, 2), ax = _ref3[0], ay = _ref3[1];
    var _ref4 = (0, _slicedToArray22["default"])(_ref2, 2), bx = _ref4[0], by = _ref4[1];
    return sqrt(pow2(ax - bx, 2) + pow2(ay - by, 2));
  }
  function getNumsSum(nums) {
    return nums.reduce(function(sum, num) {
      return sum + num;
    }, 0);
  }
  function getSegmentPointsDistance(segmentPoints) {
    return segmentPoints.map(function(points, i) {
      return new Array(points.length - 1).fill(0).map(function(temp, j) {
        return getTwoPointDistance2(points[j], points[j + 1]);
      });
    });
  }
  function getSegmentPointsByNum(getSegmentTPointFuns, segmentPointsNum) {
    return getSegmentTPointFuns.map(function(getSegmentTPointFun, i) {
      var tGap = 1 / segmentPointsNum[i];
      return new Array(segmentPointsNum[i]).fill("").map(function(foo, j) {
        return getSegmentTPointFun(j * tGap);
      });
    });
  }
  function getAllDeviations(segmentPointsDistance, avgLength) {
    return segmentPointsDistance.map(function(seg) {
      return seg.map(function(s) {
        return abs2(s - avgLength);
      });
    }).map(function(seg) {
      return getNumsSum(seg);
    }).reduce(function(total, v) {
      return total + v;
    }, 0);
  }
  function calcUniformPointsByIteration(segmentPoints, getSegmentTPointFuns, segments, precision) {
    var rounds = 4;
    var cycles = 1;
    var _loop = function _loop2() {
      var totalPointsNum = segmentPoints.reduce(function(total, seg) {
        return total + seg.length;
      }, 0);
      segmentPoints.forEach(function(seg, i) {
        return seg.push(segments[i][2]);
      });
      var segmentPointsDistance = getSegmentPointsDistance(segmentPoints);
      var lineSegmentNum = segmentPointsDistance.reduce(function(total, seg) {
        return total + seg.length;
      }, 0);
      var segmentlength = segmentPointsDistance.map(function(seg) {
        return getNumsSum(seg);
      });
      var totalLength = getNumsSum(segmentlength);
      var avgLength = totalLength / lineSegmentNum;
      var allDeviations = getAllDeviations(segmentPointsDistance, avgLength);
      if (allDeviations <= precision)
        return "break";
      totalPointsNum = ceil(avgLength / precision * totalPointsNum * 1.1);
      var segmentPointsNum = segmentlength.map(function(length) {
        return ceil(length / totalLength * totalPointsNum);
      });
      segmentPoints = getSegmentPointsByNum(getSegmentTPointFuns, segmentPointsNum);
      totalPointsNum = segmentPoints.reduce(function(total, seg) {
        return total + seg.length;
      }, 0);
      var segmentPointsForLength = JSON.parse(JSON.stringify(segmentPoints));
      segmentPointsForLength.forEach(function(seg, i) {
        return seg.push(segments[i][2]);
      });
      segmentPointsDistance = getSegmentPointsDistance(segmentPointsForLength);
      lineSegmentNum = segmentPointsDistance.reduce(function(total, seg) {
        return total + seg.length;
      }, 0);
      segmentlength = segmentPointsDistance.map(function(seg) {
        return getNumsSum(seg);
      });
      totalLength = getNumsSum(segmentlength);
      avgLength = totalLength / lineSegmentNum;
      var stepSize = 1 / totalPointsNum / 10;
      getSegmentTPointFuns.forEach(function(getSegmentTPointFun, i) {
        var currentSegmentPointsNum = segmentPointsNum[i];
        var t = new Array(currentSegmentPointsNum).fill("").map(function(foo, j2) {
          return j2 / segmentPointsNum[i];
        });
        for (var r = 0; r < rounds; r++) {
          var distance = getSegmentPointsDistance([segmentPoints[i]])[0];
          var deviations = distance.map(function(d) {
            return d - avgLength;
          });
          var offset = 0;
          for (var j = 0; j < currentSegmentPointsNum; j++) {
            if (j === 0)
              return;
            offset += deviations[j - 1];
            t[j] -= stepSize * offset;
            if (t[j] > 1)
              t[j] = 1;
            if (t[j] < 0)
              t[j] = 0;
            segmentPoints[i][j] = getSegmentTPointFun(t[j]);
          }
        }
      });
      rounds *= 4;
      cycles++;
    };
    do {
      var _ret = _loop();
      if (_ret === "break")
        break;
    } while (rounds <= 1025);
    segmentPoints = segmentPoints.reduce(function(all, seg) {
      return all.concat(seg);
    }, []);
    return {
      segmentPoints,
      cycles,
      rounds
    };
  }
  function bezierCurveToPolyline2(bezierCurve) {
    var precision = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
    if (!bezierCurve) {
      console.error("bezierCurveToPolyline: Missing parameters!");
      return false;
    }
    if (!(bezierCurve instanceof Array)) {
      console.error("bezierCurveToPolyline: Parameter bezierCurve must be an array!");
      return false;
    }
    if (typeof precision !== "number") {
      console.error("bezierCurveToPolyline: Parameter precision must be a number!");
      return false;
    }
    var _abstractBezierCurveT = abstractBezierCurveToPolyline(bezierCurve, precision), segmentPoints = _abstractBezierCurveT.segmentPoints;
    return segmentPoints;
  }
  function getBezierCurveLength2(bezierCurve) {
    var precision = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
    if (!bezierCurve) {
      console.error("getBezierCurveLength: Missing parameters!");
      return false;
    }
    if (!(bezierCurve instanceof Array)) {
      console.error("getBezierCurveLength: Parameter bezierCurve must be an array!");
      return false;
    }
    if (typeof precision !== "number") {
      console.error("getBezierCurveLength: Parameter precision must be a number!");
      return false;
    }
    var _abstractBezierCurveT2 = abstractBezierCurveToPolyline(bezierCurve, precision), segmentPoints = _abstractBezierCurveT2.segmentPoints;
    var pointsDistance = getSegmentPointsDistance([segmentPoints])[0];
    var length = getNumsSum(pointsDistance);
    return length;
  }
  var _default = bezierCurveToPolyline2;
  exports["default"] = _default;
})(bezierCurveToPolyline);
var polylineToBezierCurve$1 = {};
(function(exports) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _slicedToArray22 = _interopRequireDefault2(slicedToArray.exports);
  var _toConsumableArray22 = _interopRequireDefault2(toConsumableArray.exports);
  function polylineToBezierCurve2(polyline) {
    var close = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var offsetA = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.25;
    var offsetB = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.25;
    if (!(polyline instanceof Array)) {
      console.error("polylineToBezierCurve: Parameter polyline must be an array!");
      return false;
    }
    if (polyline.length <= 2) {
      console.error("polylineToBezierCurve: Converting to a curve requires at least 3 points!");
      return false;
    }
    var startPoint = polyline[0];
    var bezierCurveLineNum = polyline.length - 1;
    var bezierCurvePoints = new Array(bezierCurveLineNum).fill(0).map(function(foo, i) {
      return [].concat((0, _toConsumableArray22["default"])(getBezierCurveLineControlPoints(polyline, i, close, offsetA, offsetB)), [polyline[i + 1]]);
    });
    if (close)
      closeBezierCurve(bezierCurvePoints, startPoint);
    bezierCurvePoints.unshift(polyline[0]);
    return bezierCurvePoints;
  }
  function getBezierCurveLineControlPoints(polyline, index) {
    var close = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var offsetA = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.25;
    var offsetB = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0.25;
    var pointNum = polyline.length;
    if (pointNum < 3 || index >= pointNum)
      return;
    var beforePointIndex = index - 1;
    if (beforePointIndex < 0)
      beforePointIndex = close ? pointNum + beforePointIndex : 0;
    var afterPointIndex = index + 1;
    if (afterPointIndex >= pointNum)
      afterPointIndex = close ? afterPointIndex - pointNum : pointNum - 1;
    var afterNextPointIndex = index + 2;
    if (afterNextPointIndex >= pointNum)
      afterNextPointIndex = close ? afterNextPointIndex - pointNum : pointNum - 1;
    var pointBefore = polyline[beforePointIndex];
    var pointMiddle = polyline[index];
    var pointAfter = polyline[afterPointIndex];
    var pointAfterNext = polyline[afterNextPointIndex];
    return [[pointMiddle[0] + offsetA * (pointAfter[0] - pointBefore[0]), pointMiddle[1] + offsetA * (pointAfter[1] - pointBefore[1])], [pointAfter[0] - offsetB * (pointAfterNext[0] - pointMiddle[0]), pointAfter[1] - offsetB * (pointAfterNext[1] - pointMiddle[1])]];
  }
  function closeBezierCurve(bezierCurve, startPoint) {
    var firstSubCurve = bezierCurve[0];
    var lastSubCurve = bezierCurve.slice(-1)[0];
    bezierCurve.push([getSymmetryPoint(lastSubCurve[1], lastSubCurve[2]), getSymmetryPoint(firstSubCurve[0], startPoint), startPoint]);
    return bezierCurve;
  }
  function getSymmetryPoint(point, centerPoint) {
    var _point = (0, _slicedToArray22["default"])(point, 2), px = _point[0], py = _point[1];
    var _centerPoint = (0, _slicedToArray22["default"])(centerPoint, 2), cx = _centerPoint[0], cy = _centerPoint[1];
    var minusX = cx - px;
    var minusY = cy - py;
    return [cx + minusX, cy + minusY];
  }
  var _default = polylineToBezierCurve2;
  exports["default"] = _default;
})(polylineToBezierCurve$1);
(function(exports) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "bezierCurveToPolyline", {
    enumerable: true,
    get: function get() {
      return _bezierCurveToPolyline.bezierCurveToPolyline;
    }
  });
  Object.defineProperty(exports, "getBezierCurveLength", {
    enumerable: true,
    get: function get() {
      return _bezierCurveToPolyline.getBezierCurveLength;
    }
  });
  Object.defineProperty(exports, "polylineToBezierCurve", {
    enumerable: true,
    get: function get() {
      return _polylineToBezierCurve["default"];
    }
  });
  exports["default"] = void 0;
  var _bezierCurveToPolyline = bezierCurveToPolyline;
  var _polylineToBezierCurve = _interopRequireDefault2(polylineToBezierCurve$1);
  var _default = {
    bezierCurveToPolyline: _bezierCurveToPolyline.bezierCurveToPolyline,
    getBezierCurveLength: _bezierCurveToPolyline.getBezierCurveLength,
    polylineToBezierCurve: _polylineToBezierCurve["default"]
  };
  exports["default"] = _default;
})(lib$2);
var util$1 = {};
var _typeof = { exports: {} };
(function(module) {
  function _typeof3(obj) {
    "@babel/helpers - typeof";
    return module.exports = _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof3(obj);
  }
  module.exports = _typeof3, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(_typeof);
(function(exports) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.deepClone = deepClone2;
  exports.eliminateBlur = eliminateBlur;
  exports.checkPointIsInCircle = checkPointIsInCircle;
  exports.getTwoPointDistance = getTwoPointDistance2;
  exports.checkPointIsInPolygon = checkPointIsInPolygon;
  exports.checkPointIsInSector = checkPointIsInSector;
  exports.checkPointIsNearPolyline = checkPointIsNearPolyline;
  exports.checkPointIsInRect = checkPointIsInRect;
  exports.getRotatePointPos = getRotatePointPos;
  exports.getScalePointPos = getScalePointPos;
  exports.getTranslatePointPos = getTranslatePointPos;
  exports.getDistanceBetweenPointAndLine = getDistanceBetweenPointAndLine;
  exports.getCircleRadianPoint = getCircleRadianPoint2;
  exports.getRegularPolygonPoints = getRegularPolygonPoints;
  exports["default"] = void 0;
  var _toConsumableArray22 = _interopRequireDefault2(toConsumableArray.exports);
  var _slicedToArray22 = _interopRequireDefault2(slicedToArray.exports);
  var _typeof22 = _interopRequireDefault2(_typeof.exports);
  var abs2 = Math.abs, sqrt = Math.sqrt, sin = Math.sin, cos = Math.cos, max = Math.max, min = Math.min, PI = Math.PI;
  function deepClone2(object) {
    var recursion = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (!object)
      return object;
    var parse = JSON.parse, stringify = JSON.stringify;
    if (!recursion)
      return parse(stringify(object));
    var clonedObj = object instanceof Array ? [] : {};
    if (object && (0, _typeof22["default"])(object) === "object") {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          if (object[key] && (0, _typeof22["default"])(object[key]) === "object") {
            clonedObj[key] = deepClone2(object[key], true);
          } else {
            clonedObj[key] = object[key];
          }
        }
      }
    }
    return clonedObj;
  }
  function eliminateBlur(points) {
    return points.map(function(_ref) {
      var _ref2 = (0, _slicedToArray22["default"])(_ref, 2), x = _ref2[0], y = _ref2[1];
      return [parseInt(x) + 0.5, parseInt(y) + 0.5];
    });
  }
  function checkPointIsInCircle(point, rx, ry, r) {
    return getTwoPointDistance2(point, [rx, ry]) <= r;
  }
  function getTwoPointDistance2(_ref3, _ref4) {
    var _ref5 = (0, _slicedToArray22["default"])(_ref3, 2), xa = _ref5[0], ya = _ref5[1];
    var _ref6 = (0, _slicedToArray22["default"])(_ref4, 2), xb = _ref6[0], yb = _ref6[1];
    var minusX = abs2(xa - xb);
    var minusY = abs2(ya - yb);
    return sqrt(minusX * minusX + minusY * minusY);
  }
  function checkPointIsInPolygon(point, polygon) {
    var counter = 0;
    var _point = (0, _slicedToArray22["default"])(point, 2), x = _point[0], y = _point[1];
    var pointNum = polygon.length;
    for (var i = 1, p1 = polygon[0]; i <= pointNum; i++) {
      var p2 = polygon[i % pointNum];
      if (x > min(p1[0], p2[0]) && x <= max(p1[0], p2[0])) {
        if (y <= max(p1[1], p2[1])) {
          if (p1[0] !== p2[0]) {
            var xinters = (x - p1[0]) * (p2[1] - p1[1]) / (p2[0] - p1[0]) + p1[1];
            if (p1[1] === p2[1] || y <= xinters) {
              counter++;
            }
          }
        }
      }
      p1 = p2;
    }
    return counter % 2 === 1;
  }
  function checkPointIsInSector(point, rx, ry, r, startAngle, endAngle, clockWise) {
    if (!point)
      return false;
    if (getTwoPointDistance2(point, [rx, ry]) > r)
      return false;
    if (!clockWise) {
      var _deepClone = deepClone2([endAngle, startAngle]);
      var _deepClone2 = (0, _slicedToArray22["default"])(_deepClone, 2);
      startAngle = _deepClone2[0];
      endAngle = _deepClone2[1];
    }
    var reverseBE = startAngle > endAngle;
    if (reverseBE) {
      var _ref7 = [endAngle, startAngle];
      startAngle = _ref7[0];
      endAngle = _ref7[1];
    }
    var minus = endAngle - startAngle;
    if (minus >= PI * 2)
      return true;
    var _point2 = (0, _slicedToArray22["default"])(point, 2), x = _point2[0], y = _point2[1];
    var _getCircleRadianPoint = getCircleRadianPoint2(rx, ry, r, startAngle), _getCircleRadianPoint2 = (0, _slicedToArray22["default"])(_getCircleRadianPoint, 2), bx = _getCircleRadianPoint2[0], by = _getCircleRadianPoint2[1];
    var _getCircleRadianPoint3 = getCircleRadianPoint2(rx, ry, r, endAngle), _getCircleRadianPoint4 = (0, _slicedToArray22["default"])(_getCircleRadianPoint3, 2), ex = _getCircleRadianPoint4[0], ey = _getCircleRadianPoint4[1];
    var vPoint = [x - rx, y - ry];
    var vBArm = [bx - rx, by - ry];
    var vEArm = [ex - rx, ey - ry];
    var reverse = minus > PI;
    if (reverse) {
      var _deepClone3 = deepClone2([vEArm, vBArm]);
      var _deepClone4 = (0, _slicedToArray22["default"])(_deepClone3, 2);
      vBArm = _deepClone4[0];
      vEArm = _deepClone4[1];
    }
    var inSector = isClockWise(vBArm, vPoint) && !isClockWise(vEArm, vPoint);
    if (reverse)
      inSector = !inSector;
    if (reverseBE)
      inSector = !inSector;
    return inSector;
  }
  function isClockWise(vArm, vPoint) {
    var _vArm = (0, _slicedToArray22["default"])(vArm, 2), ax = _vArm[0], ay = _vArm[1];
    var _vPoint = (0, _slicedToArray22["default"])(vPoint, 2), px = _vPoint[0], py = _vPoint[1];
    return -ay * px + ax * py > 0;
  }
  function checkPointIsNearPolyline(point, polyline, lineWidth) {
    var halfLineWidth = lineWidth / 2;
    var moveUpPolyline = polyline.map(function(_ref8) {
      var _ref9 = (0, _slicedToArray22["default"])(_ref8, 2), x = _ref9[0], y = _ref9[1];
      return [x, y - halfLineWidth];
    });
    var moveDownPolyline = polyline.map(function(_ref10) {
      var _ref11 = (0, _slicedToArray22["default"])(_ref10, 2), x = _ref11[0], y = _ref11[1];
      return [x, y + halfLineWidth];
    });
    var polygon = [].concat((0, _toConsumableArray22["default"])(moveUpPolyline), (0, _toConsumableArray22["default"])(moveDownPolyline.reverse()));
    return checkPointIsInPolygon(point, polygon);
  }
  function checkPointIsInRect(_ref12, x, y, width, height) {
    var _ref13 = (0, _slicedToArray22["default"])(_ref12, 2), px = _ref13[0], py = _ref13[1];
    if (px < x)
      return false;
    if (py < y)
      return false;
    if (px > x + width)
      return false;
    if (py > y + height)
      return false;
    return true;
  }
  function getRotatePointPos() {
    var rotate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    var point = arguments.length > 1 ? arguments[1] : void 0;
    var origin = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [0, 0];
    if (!point)
      return false;
    if (rotate % 360 === 0)
      return point;
    var _point3 = (0, _slicedToArray22["default"])(point, 2), x = _point3[0], y = _point3[1];
    var _origin = (0, _slicedToArray22["default"])(origin, 2), ox = _origin[0], oy = _origin[1];
    rotate *= PI / 180;
    return [(x - ox) * cos(rotate) - (y - oy) * sin(rotate) + ox, (x - ox) * sin(rotate) + (y - oy) * cos(rotate) + oy];
  }
  function getScalePointPos() {
    var scale = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [1, 1];
    var point = arguments.length > 1 ? arguments[1] : void 0;
    var origin = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [0, 0];
    if (!point)
      return false;
    if (scale === 1)
      return point;
    var _point4 = (0, _slicedToArray22["default"])(point, 2), x = _point4[0], y = _point4[1];
    var _origin2 = (0, _slicedToArray22["default"])(origin, 2), ox = _origin2[0], oy = _origin2[1];
    var _scale = (0, _slicedToArray22["default"])(scale, 2), xs = _scale[0], ys = _scale[1];
    var relativePosX = x - ox;
    var relativePosY = y - oy;
    return [relativePosX * xs + ox, relativePosY * ys + oy];
  }
  function getTranslatePointPos(translate, point) {
    if (!translate || !point)
      return false;
    var _point5 = (0, _slicedToArray22["default"])(point, 2), x = _point5[0], y = _point5[1];
    var _translate = (0, _slicedToArray22["default"])(translate, 2), tx = _translate[0], ty = _translate[1];
    return [x + tx, y + ty];
  }
  function getDistanceBetweenPointAndLine(point, lineBegin, lineEnd) {
    if (!point || !lineBegin || !lineEnd)
      return false;
    var _point6 = (0, _slicedToArray22["default"])(point, 2), x = _point6[0], y = _point6[1];
    var _lineBegin = (0, _slicedToArray22["default"])(lineBegin, 2), x1 = _lineBegin[0], y1 = _lineBegin[1];
    var _lineEnd = (0, _slicedToArray22["default"])(lineEnd, 2), x2 = _lineEnd[0], y2 = _lineEnd[1];
    var a = y2 - y1;
    var b = x1 - x2;
    var c = y1 * (x2 - x1) - x1 * (y2 - y1);
    var molecule = abs2(a * x + b * y + c);
    var denominator = sqrt(a * a + b * b);
    return molecule / denominator;
  }
  function getCircleRadianPoint2(x, y, radius, radian) {
    return [x + cos(radian) * radius, y + sin(radian) * radius];
  }
  function getRegularPolygonPoints(rx, ry, r, side) {
    var minus = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : PI * -0.5;
    var radianGap = PI * 2 / side;
    var radians = new Array(side).fill("").map(function(t, i) {
      return i * radianGap + minus;
    });
    return radians.map(function(radian) {
      return getCircleRadianPoint2(rx, ry, r, radian);
    });
  }
  var _default = {
    deepClone: deepClone2,
    eliminateBlur,
    checkPointIsInCircle,
    checkPointIsInPolygon,
    checkPointIsInSector,
    checkPointIsNearPolyline,
    getTwoPointDistance: getTwoPointDistance2,
    getRotatePointPos,
    getScalePointPos,
    getTranslatePointPos,
    getCircleRadianPoint: getCircleRadianPoint2,
    getRegularPolygonPoints,
    getDistanceBetweenPointAndLine
  };
  exports["default"] = _default;
})(util$1);
var graphs = {};
var canvas = {};
(function(exports) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.drawPolylinePath = drawPolylinePath;
  exports.drawBezierCurvePath = drawBezierCurvePath;
  exports["default"] = void 0;
  var _toConsumableArray22 = _interopRequireDefault2(toConsumableArray.exports);
  function drawPolylinePath(ctx, points) {
    var beginPath = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var closePath = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    if (!ctx || points.length < 2)
      return false;
    if (beginPath)
      ctx.beginPath();
    points.forEach(function(point, i) {
      return point && (i === 0 ? ctx.moveTo.apply(ctx, (0, _toConsumableArray22["default"])(point)) : ctx.lineTo.apply(ctx, (0, _toConsumableArray22["default"])(point)));
    });
    if (closePath)
      ctx.closePath();
  }
  function drawBezierCurvePath(ctx, points) {
    var moveTo = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var beginPath = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    var closePath = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    if (!ctx || !points)
      return false;
    if (beginPath)
      ctx.beginPath();
    if (moveTo)
      ctx.moveTo.apply(ctx, (0, _toConsumableArray22["default"])(moveTo));
    points.forEach(function(item) {
      return item && ctx.bezierCurveTo.apply(ctx, (0, _toConsumableArray22["default"])(item[0]).concat((0, _toConsumableArray22["default"])(item[1]), (0, _toConsumableArray22["default"])(item[2])));
    });
    if (closePath)
      ctx.closePath();
  }
  var _default = {
    drawPolylinePath,
    drawBezierCurvePath
  };
  exports["default"] = _default;
})(canvas);
(function(exports) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.extendNewGraph = extendNewGraph;
  exports["default"] = exports.text = exports.bezierCurve = exports.smoothline = exports.polyline = exports.regPolygon = exports.sector = exports.arc = exports.ring = exports.rect = exports.ellipse = exports.circle = void 0;
  var _toConsumableArray22 = _interopRequireDefault2(toConsumableArray.exports);
  var _slicedToArray22 = _interopRequireDefault2(slicedToArray.exports);
  var _bezierCurve2 = _interopRequireDefault2(lib$2);
  var _util3 = util$1;
  var _canvas = canvas;
  var polylineToBezierCurve2 = _bezierCurve2["default"].polylineToBezierCurve, bezierCurveToPolyline2 = _bezierCurve2["default"].bezierCurveToPolyline;
  var circle = {
    shape: {
      rx: 0,
      ry: 0,
      r: 0
    },
    validator: function validator5(_ref) {
      var shape = _ref.shape;
      var rx = shape.rx, ry = shape.ry, r = shape.r;
      if (typeof rx !== "number" || typeof ry !== "number" || typeof r !== "number") {
        console.error("Circle shape configuration is abnormal!");
        return false;
      }
      return true;
    },
    draw: function draw5(_ref2, _ref3) {
      var ctx = _ref2.ctx;
      var shape = _ref3.shape;
      ctx.beginPath();
      var rx = shape.rx, ry = shape.ry, r = shape.r;
      ctx.arc(rx, ry, r > 0 ? r : 0.01, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    },
    hoverCheck: function hoverCheck2(position, _ref4) {
      var shape = _ref4.shape;
      var rx = shape.rx, ry = shape.ry, r = shape.r;
      return (0, _util3.checkPointIsInCircle)(position, rx, ry, r);
    },
    setGraphCenter: function setGraphCenter2(e, _ref5) {
      var shape = _ref5.shape, style = _ref5.style;
      var rx = shape.rx, ry = shape.ry;
      style.graphCenter = [rx, ry];
    },
    move: function move(_ref6, _ref7) {
      var movementX = _ref6.movementX, movementY = _ref6.movementY;
      var shape = _ref7.shape;
      this.attr("shape", {
        rx: shape.rx + movementX,
        ry: shape.ry + movementY
      });
    }
  };
  exports.circle = circle;
  var ellipse = {
    shape: {
      rx: 0,
      ry: 0,
      hr: 0,
      vr: 0
    },
    validator: function validator5(_ref8) {
      var shape = _ref8.shape;
      var rx = shape.rx, ry = shape.ry, hr = shape.hr, vr = shape.vr;
      if (typeof rx !== "number" || typeof ry !== "number" || typeof hr !== "number" || typeof vr !== "number") {
        console.error("Ellipse shape configuration is abnormal!");
        return false;
      }
      return true;
    },
    draw: function draw5(_ref9, _ref10) {
      var ctx = _ref9.ctx;
      var shape = _ref10.shape;
      ctx.beginPath();
      var rx = shape.rx, ry = shape.ry, hr = shape.hr, vr = shape.vr;
      ctx.ellipse(rx, ry, hr > 0 ? hr : 0.01, vr > 0 ? vr : 0.01, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    },
    hoverCheck: function hoverCheck2(position, _ref11) {
      var shape = _ref11.shape;
      var rx = shape.rx, ry = shape.ry, hr = shape.hr, vr = shape.vr;
      var a = Math.max(hr, vr);
      var b = Math.min(hr, vr);
      var c = Math.sqrt(a * a - b * b);
      var leftFocusPoint = [rx - c, ry];
      var rightFocusPoint = [rx + c, ry];
      var distance = (0, _util3.getTwoPointDistance)(position, leftFocusPoint) + (0, _util3.getTwoPointDistance)(position, rightFocusPoint);
      return distance <= 2 * a;
    },
    setGraphCenter: function setGraphCenter2(e, _ref12) {
      var shape = _ref12.shape, style = _ref12.style;
      var rx = shape.rx, ry = shape.ry;
      style.graphCenter = [rx, ry];
    },
    move: function move(_ref13, _ref14) {
      var movementX = _ref13.movementX, movementY = _ref13.movementY;
      var shape = _ref14.shape;
      this.attr("shape", {
        rx: shape.rx + movementX,
        ry: shape.ry + movementY
      });
    }
  };
  exports.ellipse = ellipse;
  var rect = {
    shape: {
      x: 0,
      y: 0,
      w: 0,
      h: 0
    },
    validator: function validator5(_ref15) {
      var shape = _ref15.shape;
      var x = shape.x, y = shape.y, w = shape.w, h = shape.h;
      if (typeof x !== "number" || typeof y !== "number" || typeof w !== "number" || typeof h !== "number") {
        console.error("Rect shape configuration is abnormal!");
        return false;
      }
      return true;
    },
    draw: function draw5(_ref16, _ref17) {
      var ctx = _ref16.ctx;
      var shape = _ref17.shape;
      ctx.beginPath();
      var x = shape.x, y = shape.y, w = shape.w, h = shape.h;
      ctx.rect(x, y, w, h);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    },
    hoverCheck: function hoverCheck2(position, _ref18) {
      var shape = _ref18.shape;
      var x = shape.x, y = shape.y, w = shape.w, h = shape.h;
      return (0, _util3.checkPointIsInRect)(position, x, y, w, h);
    },
    setGraphCenter: function setGraphCenter2(e, _ref19) {
      var shape = _ref19.shape, style = _ref19.style;
      var x = shape.x, y = shape.y, w = shape.w, h = shape.h;
      style.graphCenter = [x + w / 2, y + h / 2];
    },
    move: function move(_ref20, _ref21) {
      var movementX = _ref20.movementX, movementY = _ref20.movementY;
      var shape = _ref21.shape;
      this.attr("shape", {
        x: shape.x + movementX,
        y: shape.y + movementY
      });
    }
  };
  exports.rect = rect;
  var ring = {
    shape: {
      rx: 0,
      ry: 0,
      r: 0
    },
    validator: function validator5(_ref22) {
      var shape = _ref22.shape;
      var rx = shape.rx, ry = shape.ry, r = shape.r;
      if (typeof rx !== "number" || typeof ry !== "number" || typeof r !== "number") {
        console.error("Ring shape configuration is abnormal!");
        return false;
      }
      return true;
    },
    draw: function draw5(_ref23, _ref24) {
      var ctx = _ref23.ctx;
      var shape = _ref24.shape;
      ctx.beginPath();
      var rx = shape.rx, ry = shape.ry, r = shape.r;
      ctx.arc(rx, ry, r > 0 ? r : 0.01, 0, Math.PI * 2);
      ctx.stroke();
      ctx.closePath();
    },
    hoverCheck: function hoverCheck2(position, _ref25) {
      var shape = _ref25.shape, style = _ref25.style;
      var rx = shape.rx, ry = shape.ry, r = shape.r;
      var lineWidth = style.lineWidth;
      var halfLineWidth = lineWidth / 2;
      var minDistance = r - halfLineWidth;
      var maxDistance = r + halfLineWidth;
      var distance = (0, _util3.getTwoPointDistance)(position, [rx, ry]);
      return distance >= minDistance && distance <= maxDistance;
    },
    setGraphCenter: function setGraphCenter2(e, _ref26) {
      var shape = _ref26.shape, style = _ref26.style;
      var rx = shape.rx, ry = shape.ry;
      style.graphCenter = [rx, ry];
    },
    move: function move(_ref27, _ref28) {
      var movementX = _ref27.movementX, movementY = _ref27.movementY;
      var shape = _ref28.shape;
      this.attr("shape", {
        rx: shape.rx + movementX,
        ry: shape.ry + movementY
      });
    }
  };
  exports.ring = ring;
  var arc = {
    shape: {
      rx: 0,
      ry: 0,
      r: 0,
      startAngle: 0,
      endAngle: 0,
      clockWise: true
    },
    validator: function validator5(_ref29) {
      var shape = _ref29.shape;
      var keys = ["rx", "ry", "r", "startAngle", "endAngle"];
      if (keys.find(function(key) {
        return typeof shape[key] !== "number";
      })) {
        console.error("Arc shape configuration is abnormal!");
        return false;
      }
      return true;
    },
    draw: function draw5(_ref30, _ref31) {
      var ctx = _ref30.ctx;
      var shape = _ref31.shape;
      ctx.beginPath();
      var rx = shape.rx, ry = shape.ry, r = shape.r, startAngle = shape.startAngle, endAngle = shape.endAngle, clockWise = shape.clockWise;
      ctx.arc(rx, ry, r > 0 ? r : 1e-3, startAngle, endAngle, !clockWise);
      ctx.stroke();
      ctx.closePath();
    },
    hoverCheck: function hoverCheck2(position, _ref32) {
      var shape = _ref32.shape, style = _ref32.style;
      var rx = shape.rx, ry = shape.ry, r = shape.r, startAngle = shape.startAngle, endAngle = shape.endAngle, clockWise = shape.clockWise;
      var lineWidth = style.lineWidth;
      var halfLineWidth = lineWidth / 2;
      var insideRadius = r - halfLineWidth;
      var outsideRadius = r + halfLineWidth;
      return !(0, _util3.checkPointIsInSector)(position, rx, ry, insideRadius, startAngle, endAngle, clockWise) && (0, _util3.checkPointIsInSector)(position, rx, ry, outsideRadius, startAngle, endAngle, clockWise);
    },
    setGraphCenter: function setGraphCenter2(e, _ref33) {
      var shape = _ref33.shape, style = _ref33.style;
      var rx = shape.rx, ry = shape.ry;
      style.graphCenter = [rx, ry];
    },
    move: function move(_ref34, _ref35) {
      var movementX = _ref34.movementX, movementY = _ref34.movementY;
      var shape = _ref35.shape;
      this.attr("shape", {
        rx: shape.rx + movementX,
        ry: shape.ry + movementY
      });
    }
  };
  exports.arc = arc;
  var sector = {
    shape: {
      rx: 0,
      ry: 0,
      r: 0,
      startAngle: 0,
      endAngle: 0,
      clockWise: true
    },
    validator: function validator5(_ref36) {
      var shape = _ref36.shape;
      var keys = ["rx", "ry", "r", "startAngle", "endAngle"];
      if (keys.find(function(key) {
        return typeof shape[key] !== "number";
      })) {
        console.error("Sector shape configuration is abnormal!");
        return false;
      }
      return true;
    },
    draw: function draw5(_ref37, _ref38) {
      var ctx = _ref37.ctx;
      var shape = _ref38.shape;
      ctx.beginPath();
      var rx = shape.rx, ry = shape.ry, r = shape.r, startAngle = shape.startAngle, endAngle = shape.endAngle, clockWise = shape.clockWise;
      ctx.arc(rx, ry, r > 0 ? r : 0.01, startAngle, endAngle, !clockWise);
      ctx.lineTo(rx, ry);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    },
    hoverCheck: function hoverCheck2(position, _ref39) {
      var shape = _ref39.shape;
      var rx = shape.rx, ry = shape.ry, r = shape.r, startAngle = shape.startAngle, endAngle = shape.endAngle, clockWise = shape.clockWise;
      return (0, _util3.checkPointIsInSector)(position, rx, ry, r, startAngle, endAngle, clockWise);
    },
    setGraphCenter: function setGraphCenter2(e, _ref40) {
      var shape = _ref40.shape, style = _ref40.style;
      var rx = shape.rx, ry = shape.ry;
      style.graphCenter = [rx, ry];
    },
    move: function move(_ref41, _ref42) {
      var movementX = _ref41.movementX, movementY = _ref41.movementY;
      var shape = _ref42.shape;
      var rx = shape.rx, ry = shape.ry;
      this.attr("shape", {
        rx: rx + movementX,
        ry: ry + movementY
      });
    }
  };
  exports.sector = sector;
  var regPolygon = {
    shape: {
      rx: 0,
      ry: 0,
      r: 0,
      side: 0
    },
    validator: function validator5(_ref43) {
      var shape = _ref43.shape;
      var side = shape.side;
      var keys = ["rx", "ry", "r", "side"];
      if (keys.find(function(key) {
        return typeof shape[key] !== "number";
      })) {
        console.error("RegPolygon shape configuration is abnormal!");
        return false;
      }
      if (side < 3) {
        console.error("RegPolygon at least trigon!");
        return false;
      }
      return true;
    },
    draw: function draw5(_ref44, _ref45) {
      var ctx = _ref44.ctx;
      var shape = _ref45.shape, cache = _ref45.cache;
      ctx.beginPath();
      var rx = shape.rx, ry = shape.ry, r = shape.r, side = shape.side;
      if (!cache.points || cache.rx !== rx || cache.ry !== ry || cache.r !== r || cache.side !== side) {
        var _points = (0, _util3.getRegularPolygonPoints)(rx, ry, r, side);
        Object.assign(cache, {
          points: _points,
          rx,
          ry,
          r,
          side
        });
      }
      var points = cache.points;
      (0, _canvas.drawPolylinePath)(ctx, points);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    },
    hoverCheck: function hoverCheck2(position, _ref46) {
      var cache = _ref46.cache;
      var points = cache.points;
      return (0, _util3.checkPointIsInPolygon)(position, points);
    },
    setGraphCenter: function setGraphCenter2(e, _ref47) {
      var shape = _ref47.shape, style = _ref47.style;
      var rx = shape.rx, ry = shape.ry;
      style.graphCenter = [rx, ry];
    },
    move: function move(_ref48, _ref49) {
      var movementX = _ref48.movementX, movementY = _ref48.movementY;
      var shape = _ref49.shape, cache = _ref49.cache;
      var rx = shape.rx, ry = shape.ry;
      cache.rx += movementX;
      cache.ry += movementY;
      this.attr("shape", {
        rx: rx + movementX,
        ry: ry + movementY
      });
      cache.points = cache.points.map(function(_ref50) {
        var _ref51 = (0, _slicedToArray22["default"])(_ref50, 2), x = _ref51[0], y = _ref51[1];
        return [x + movementX, y + movementY];
      });
    }
  };
  exports.regPolygon = regPolygon;
  var polyline = {
    shape: {
      points: [],
      close: false
    },
    validator: function validator5(_ref52) {
      var shape = _ref52.shape;
      var points = shape.points;
      if (!(points instanceof Array)) {
        console.error("Polyline points should be an array!");
        return false;
      }
      return true;
    },
    draw: function draw5(_ref53, _ref54) {
      var ctx = _ref53.ctx;
      var shape = _ref54.shape, lineWidth = _ref54.style.lineWidth;
      ctx.beginPath();
      var points = shape.points, close = shape.close;
      if (lineWidth === 1)
        points = (0, _util3.eliminateBlur)(points);
      (0, _canvas.drawPolylinePath)(ctx, points);
      if (close) {
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else {
        ctx.stroke();
      }
    },
    hoverCheck: function hoverCheck2(position, _ref55) {
      var shape = _ref55.shape, style = _ref55.style;
      var points = shape.points, close = shape.close;
      var lineWidth = style.lineWidth;
      if (close) {
        return (0, _util3.checkPointIsInPolygon)(position, points);
      } else {
        return (0, _util3.checkPointIsNearPolyline)(position, points, lineWidth);
      }
    },
    setGraphCenter: function setGraphCenter2(e, _ref56) {
      var shape = _ref56.shape, style = _ref56.style;
      var points = shape.points;
      style.graphCenter = points[0];
    },
    move: function move(_ref57, _ref58) {
      var movementX = _ref57.movementX, movementY = _ref57.movementY;
      var shape = _ref58.shape;
      var points = shape.points;
      var moveAfterPoints = points.map(function(_ref59) {
        var _ref60 = (0, _slicedToArray22["default"])(_ref59, 2), x = _ref60[0], y = _ref60[1];
        return [x + movementX, y + movementY];
      });
      this.attr("shape", {
        points: moveAfterPoints
      });
    }
  };
  exports.polyline = polyline;
  var smoothline = {
    shape: {
      points: [],
      close: false
    },
    validator: function validator5(_ref61) {
      var shape = _ref61.shape;
      var points = shape.points;
      if (!(points instanceof Array)) {
        console.error("Smoothline points should be an array!");
        return false;
      }
      return true;
    },
    draw: function draw5(_ref62, _ref63) {
      var ctx = _ref62.ctx;
      var shape = _ref63.shape, cache = _ref63.cache;
      var points = shape.points, close = shape.close;
      if (!cache.points || cache.points.toString() !== points.toString()) {
        var _bezierCurve3 = polylineToBezierCurve2(points, close);
        var hoverPoints = bezierCurveToPolyline2(_bezierCurve3);
        Object.assign(cache, {
          points: (0, _util3.deepClone)(points, true),
          bezierCurve: _bezierCurve3,
          hoverPoints
        });
      }
      var bezierCurve2 = cache.bezierCurve;
      ctx.beginPath();
      (0, _canvas.drawBezierCurvePath)(ctx, bezierCurve2.slice(1), bezierCurve2[0]);
      if (close) {
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else {
        ctx.stroke();
      }
    },
    hoverCheck: function hoverCheck2(position, _ref64) {
      var cache = _ref64.cache, shape = _ref64.shape, style = _ref64.style;
      var hoverPoints = cache.hoverPoints;
      var close = shape.close;
      var lineWidth = style.lineWidth;
      if (close) {
        return (0, _util3.checkPointIsInPolygon)(position, hoverPoints);
      } else {
        return (0, _util3.checkPointIsNearPolyline)(position, hoverPoints, lineWidth);
      }
    },
    setGraphCenter: function setGraphCenter2(e, _ref65) {
      var shape = _ref65.shape, style = _ref65.style;
      var points = shape.points;
      style.graphCenter = points[0];
    },
    move: function move(_ref66, _ref67) {
      var movementX = _ref66.movementX, movementY = _ref66.movementY;
      var shape = _ref67.shape, cache = _ref67.cache;
      var points = shape.points;
      var moveAfterPoints = points.map(function(_ref68) {
        var _ref69 = (0, _slicedToArray22["default"])(_ref68, 2), x = _ref69[0], y = _ref69[1];
        return [x + movementX, y + movementY];
      });
      cache.points = moveAfterPoints;
      var _cache$bezierCurve$ = (0, _slicedToArray22["default"])(cache.bezierCurve[0], 2), fx = _cache$bezierCurve$[0], fy = _cache$bezierCurve$[1];
      var curves2 = cache.bezierCurve.slice(1);
      cache.bezierCurve = [[fx + movementX, fy + movementY]].concat((0, _toConsumableArray22["default"])(curves2.map(function(curve) {
        return curve.map(function(_ref70) {
          var _ref71 = (0, _slicedToArray22["default"])(_ref70, 2), x = _ref71[0], y = _ref71[1];
          return [x + movementX, y + movementY];
        });
      })));
      cache.hoverPoints = cache.hoverPoints.map(function(_ref72) {
        var _ref73 = (0, _slicedToArray22["default"])(_ref72, 2), x = _ref73[0], y = _ref73[1];
        return [x + movementX, y + movementY];
      });
      this.attr("shape", {
        points: moveAfterPoints
      });
    }
  };
  exports.smoothline = smoothline;
  var bezierCurve = {
    shape: {
      points: [],
      close: false
    },
    validator: function validator5(_ref74) {
      var shape = _ref74.shape;
      var points = shape.points;
      if (!(points instanceof Array)) {
        console.error("BezierCurve points should be an array!");
        return false;
      }
      return true;
    },
    draw: function draw5(_ref75, _ref76) {
      var ctx = _ref75.ctx;
      var shape = _ref76.shape, cache = _ref76.cache;
      var points = shape.points, close = shape.close;
      if (!cache.points || cache.points.toString() !== points.toString()) {
        var hoverPoints = bezierCurveToPolyline2(points, 20);
        Object.assign(cache, {
          points: (0, _util3.deepClone)(points, true),
          hoverPoints
        });
      }
      ctx.beginPath();
      (0, _canvas.drawBezierCurvePath)(ctx, points.slice(1), points[0]);
      if (close) {
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      } else {
        ctx.stroke();
      }
    },
    hoverCheck: function hoverCheck2(position, _ref77) {
      var cache = _ref77.cache, shape = _ref77.shape, style = _ref77.style;
      var hoverPoints = cache.hoverPoints;
      var close = shape.close;
      var lineWidth = style.lineWidth;
      if (close) {
        return (0, _util3.checkPointIsInPolygon)(position, hoverPoints);
      } else {
        return (0, _util3.checkPointIsNearPolyline)(position, hoverPoints, lineWidth);
      }
    },
    setGraphCenter: function setGraphCenter2(e, _ref78) {
      var shape = _ref78.shape, style = _ref78.style;
      var points = shape.points;
      style.graphCenter = points[0];
    },
    move: function move(_ref79, _ref80) {
      var movementX = _ref79.movementX, movementY = _ref79.movementY;
      var shape = _ref80.shape, cache = _ref80.cache;
      var points = shape.points;
      var _points$ = (0, _slicedToArray22["default"])(points[0], 2), fx = _points$[0], fy = _points$[1];
      var curves2 = points.slice(1);
      var bezierCurve2 = [[fx + movementX, fy + movementY]].concat((0, _toConsumableArray22["default"])(curves2.map(function(curve) {
        return curve.map(function(_ref81) {
          var _ref82 = (0, _slicedToArray22["default"])(_ref81, 2), x = _ref82[0], y = _ref82[1];
          return [x + movementX, y + movementY];
        });
      })));
      cache.points = bezierCurve2;
      cache.hoverPoints = cache.hoverPoints.map(function(_ref83) {
        var _ref84 = (0, _slicedToArray22["default"])(_ref83, 2), x = _ref84[0], y = _ref84[1];
        return [x + movementX, y + movementY];
      });
      this.attr("shape", {
        points: bezierCurve2
      });
    }
  };
  exports.bezierCurve = bezierCurve;
  var text = {
    shape: {
      content: "",
      position: [],
      maxWidth: void 0,
      rowGap: 0
    },
    validator: function validator5(_ref85) {
      var shape = _ref85.shape;
      var content = shape.content, position = shape.position, rowGap = shape.rowGap;
      if (typeof content !== "string") {
        console.error("Text content should be a string!");
        return false;
      }
      if (!(position instanceof Array)) {
        console.error("Text position should be an array!");
        return false;
      }
      if (typeof rowGap !== "number") {
        console.error("Text rowGap should be a number!");
        return false;
      }
      return true;
    },
    draw: function draw5(_ref86, _ref87) {
      var ctx = _ref86.ctx;
      var shape = _ref87.shape;
      var content = shape.content, position = shape.position, maxWidth = shape.maxWidth, rowGap = shape.rowGap;
      var textBaseline = ctx.textBaseline, font = ctx.font;
      var fontSize = parseInt(font.replace(/\D/g, ""));
      var _position = position, _position2 = (0, _slicedToArray22["default"])(_position, 2), x = _position2[0], y = _position2[1];
      content = content.split("\n");
      var rowNum = content.length;
      var lineHeight = fontSize + rowGap;
      var allHeight = rowNum * lineHeight - rowGap;
      var offset = 0;
      if (textBaseline === "middle") {
        offset = allHeight / 2;
        y += fontSize / 2;
      }
      if (textBaseline === "bottom") {
        offset = allHeight;
        y += fontSize;
      }
      position = new Array(rowNum).fill(0).map(function(foo, i) {
        return [x, y + i * lineHeight - offset];
      });
      ctx.beginPath();
      content.forEach(function(text2, i) {
        ctx.fillText.apply(ctx, [text2].concat((0, _toConsumableArray22["default"])(position[i]), [maxWidth]));
        ctx.strokeText.apply(ctx, [text2].concat((0, _toConsumableArray22["default"])(position[i]), [maxWidth]));
      });
      ctx.closePath();
    },
    hoverCheck: function hoverCheck2(position, _ref88) {
      _ref88.shape;
      _ref88.style;
      return false;
    },
    setGraphCenter: function setGraphCenter2(e, _ref89) {
      var shape = _ref89.shape, style = _ref89.style;
      var position = shape.position;
      style.graphCenter = (0, _toConsumableArray22["default"])(position);
    },
    move: function move(_ref90, _ref91) {
      var movementX = _ref90.movementX, movementY = _ref90.movementY;
      var shape = _ref91.shape;
      var _shape$position = (0, _slicedToArray22["default"])(shape.position, 2), x = _shape$position[0], y = _shape$position[1];
      this.attr("shape", {
        position: [x + movementX, y + movementY]
      });
    }
  };
  exports.text = text;
  var graphs2 = /* @__PURE__ */ new Map([["circle", circle], ["ellipse", ellipse], ["rect", rect], ["ring", ring], ["arc", arc], ["sector", sector], ["regPolygon", regPolygon], ["polyline", polyline], ["smoothline", smoothline], ["bezierCurve", bezierCurve], ["text", text]]);
  var _default = graphs2;
  exports["default"] = _default;
  function extendNewGraph(name, config2) {
    if (!name || !config2) {
      console.error("ExtendNewGraph Missing Parameters!");
      return;
    }
    if (!config2.shape) {
      console.error("Required attribute of shape to extendNewGraph!");
      return;
    }
    if (!config2.validator) {
      console.error("Required function of validator to extendNewGraph!");
      return;
    }
    if (!config2.draw) {
      console.error("Required function of draw to extendNewGraph!");
      return;
    }
    graphs2.set(name, config2);
  }
})(graphs);
var graph_class = {};
var regeneratorRuntime$1 = { exports: {} };
(function(module) {
  var _typeof$1 = _typeof.exports["default"];
  function _regeneratorRuntime() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    module.exports = _regeneratorRuntime = function _regeneratorRuntime2() {
      return exports;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function define2(obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
      return generator._invoke = function(innerFn2, self2, context2) {
        var state = "suspendedStart";
        return function(method, arg) {
          if ("executing" === state)
            throw new Error("Generator is already running");
          if ("completed" === state) {
            if ("throw" === method)
              throw arg;
            return doneResult();
          }
          for (context2.method = method, context2.arg = arg; ; ) {
            var delegate = context2.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context2);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel)
                  continue;
                return delegateResult;
              }
            }
            if ("next" === context2.method)
              context2.sent = context2._sent = context2.arg;
            else if ("throw" === context2.method) {
              if ("suspendedStart" === state)
                throw state = "completed", context2.arg;
              context2.dispatchException(context2.arg);
            } else
              "return" === context2.method && context2.abrupt("return", context2.arg);
            state = "executing";
            var record = tryCatch(innerFn2, self2, context2);
            if ("normal" === record.type) {
              if (state = context2.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
                continue;
              return {
                value: record.arg,
                done: context2.done
              };
            }
            "throw" === record.type && (state = "completed", context2.method = "throw", context2.arg = record.arg);
          }
        };
      }(innerFn, self, context), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
      return this;
    });
    var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg, value = result.value;
          return value && "object" == _typeof$1(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
            invoke("next", value2, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function(unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function(error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      this._invoke = function(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (void 0 === method) {
        if (context.delegate = null, "throw" === context.method) {
          if (delegate.iterator["return"] && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), "throw" === context.method))
            return ContinueSentinel;
          context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return ContinueSentinel;
      }
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type)
        return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod)
          return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next)
          return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1, next = function next2() {
            for (; ++i < iterable.length; ) {
              if (hasOwn.call(iterable, i))
                return next2.value = iterable[i], next2.done = false, next2;
            }
            return next2.value = void 0, next2.done = true, next2;
          };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: void 0,
        done: true
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function(genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function(arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
      return this;
    }), define(Gp, "toString", function() {
      return "[object Generator]";
    }), exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      return keys.reverse(), function next() {
        for (; keys.length; ) {
          var key2 = keys.pop();
          if (key2 in object)
            return next.value = key2, next.done = false, next;
        }
        return next.done = true, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
          for (var name in this) {
            "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
          }
      },
      stop: function stop() {
        this.done = true;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type)
          throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done)
          throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i], record = entry.completion;
          if ("root" === entry.tryLoc)
            return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc)
                return handle(entry.catchLoc, true);
              if (this.prev < entry.finallyLoc)
                return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc)
                return handle(entry.catchLoc, true);
            } else {
              if (!hasFinally)
                throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc)
                return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if ("throw" === record.type)
          throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc)
            return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName,
          nextLoc
        }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
      }
    }, exports;
  }
  module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(regeneratorRuntime$1);
var runtime = regeneratorRuntime$1.exports();
var regenerator = runtime;
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
var asyncToGenerator = { exports: {} };
(function(module) {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(asyncToGenerator);
var style_class = {};
(function(exports) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _toConsumableArray22 = _interopRequireDefault2(toConsumableArray.exports);
  var _classCallCheck22 = _interopRequireDefault2(classCallCheck.exports);
  var _color2 = lib$3;
  var _util3 = util$1;
  var Style = function Style2(style) {
    (0, _classCallCheck22["default"])(this, Style2);
    this.colorProcessor(style);
    var defaultStyle = {
      fill: [0, 0, 0, 1],
      stroke: [0, 0, 0, 0],
      opacity: 1,
      lineCap: null,
      lineJoin: null,
      lineDash: null,
      lineDashOffset: null,
      shadowBlur: 0,
      shadowColor: [0, 0, 0, 0],
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      lineWidth: 0,
      graphCenter: null,
      scale: null,
      rotate: null,
      translate: null,
      hoverCursor: "pointer",
      fontStyle: "normal",
      fontVarient: "normal",
      fontWeight: "normal",
      fontSize: 10,
      fontFamily: "Arial",
      textAlign: "center",
      textBaseline: "middle",
      gradientColor: null,
      gradientType: "linear",
      gradientParams: null,
      gradientWith: "stroke",
      gradientStops: "auto",
      colors: null
    };
    Object.assign(this, defaultStyle, style);
  };
  exports["default"] = Style;
  Style.prototype.colorProcessor = function(style) {
    var reverse = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var processor = reverse ? _color2.getColorFromRgbValue : _color2.getRgbaValue;
    var colorProcessorKeys = ["fill", "stroke", "shadowColor"];
    var allKeys = Object.keys(style);
    var colorKeys = allKeys.filter(function(key) {
      return colorProcessorKeys.find(function(k) {
        return k === key;
      });
    });
    colorKeys.forEach(function(key) {
      return style[key] = processor(style[key]);
    });
    var gradientColor = style.gradientColor, colors = style.colors;
    if (gradientColor)
      style.gradientColor = gradientColor.map(function(c) {
        return processor(c);
      });
    if (colors) {
      var colorsKeys = Object.keys(colors);
      colorsKeys.forEach(function(key) {
        return colors[key] = processor(colors[key]);
      });
    }
  };
  Style.prototype.initStyle = function(ctx) {
    initTransform(ctx, this);
    initGraphStyle(ctx, this);
    initGradient(ctx, this);
  };
  function initTransform(ctx, style) {
    ctx.save();
    var graphCenter = style.graphCenter, rotate = style.rotate, scale = style.scale, translate = style.translate;
    if (!(graphCenter instanceof Array))
      return;
    ctx.translate.apply(ctx, (0, _toConsumableArray22["default"])(graphCenter));
    if (rotate)
      ctx.rotate(rotate * Math.PI / 180);
    if (scale instanceof Array)
      ctx.scale.apply(ctx, (0, _toConsumableArray22["default"])(scale));
    if (translate)
      ctx.translate.apply(ctx, (0, _toConsumableArray22["default"])(translate));
    ctx.translate(-graphCenter[0], -graphCenter[1]);
  }
  var autoSetStyleKeys = ["lineCap", "lineJoin", "lineDashOffset", "shadowOffsetX", "shadowOffsetY", "lineWidth", "textAlign", "textBaseline"];
  function initGraphStyle(ctx, style) {
    var fill = style.fill, stroke = style.stroke, shadowColor = style.shadowColor, opacity = style.opacity;
    autoSetStyleKeys.forEach(function(key) {
      if (key || typeof key === "number")
        ctx[key] = style[key];
    });
    fill = (0, _toConsumableArray22["default"])(fill);
    stroke = (0, _toConsumableArray22["default"])(stroke);
    shadowColor = (0, _toConsumableArray22["default"])(shadowColor);
    fill[3] *= opacity;
    stroke[3] *= opacity;
    shadowColor[3] *= opacity;
    ctx.fillStyle = (0, _color2.getColorFromRgbValue)(fill);
    ctx.strokeStyle = (0, _color2.getColorFromRgbValue)(stroke);
    ctx.shadowColor = (0, _color2.getColorFromRgbValue)(shadowColor);
    var lineDash = style.lineDash, shadowBlur = style.shadowBlur;
    if (lineDash) {
      lineDash = lineDash.map(function(v) {
        return v >= 0 ? v : 0;
      });
      ctx.setLineDash(lineDash);
    }
    if (typeof shadowBlur === "number")
      ctx.shadowBlur = shadowBlur > 0 ? shadowBlur : 1e-3;
    var fontStyle = style.fontStyle, fontVarient = style.fontVarient, fontWeight = style.fontWeight, fontSize = style.fontSize, fontFamily = style.fontFamily;
    ctx.font = fontStyle + " " + fontVarient + " " + fontWeight + " " + fontSize + "px " + fontFamily;
  }
  function initGradient(ctx, style) {
    if (!gradientValidator(style))
      return;
    var gradientColor = style.gradientColor, gradientParams = style.gradientParams, gradientType = style.gradientType, gradientWith = style.gradientWith, gradientStops = style.gradientStops, opacity = style.opacity;
    gradientColor = gradientColor.map(function(color2) {
      var colorOpacity = color2[3] * opacity;
      var clonedColor = (0, _toConsumableArray22["default"])(color2);
      clonedColor[3] = colorOpacity;
      return clonedColor;
    });
    gradientColor = gradientColor.map(function(c) {
      return (0, _color2.getColorFromRgbValue)(c);
    });
    if (gradientStops === "auto")
      gradientStops = getAutoColorStops(gradientColor);
    var gradient = ctx["create".concat(gradientType.slice(0, 1).toUpperCase() + gradientType.slice(1), "Gradient")].apply(ctx, (0, _toConsumableArray22["default"])(gradientParams));
    gradientStops.forEach(function(stop, i) {
      return gradient.addColorStop(stop, gradientColor[i]);
    });
    ctx["".concat(gradientWith, "Style")] = gradient;
  }
  function gradientValidator(style) {
    var gradientColor = style.gradientColor, gradientParams = style.gradientParams, gradientType = style.gradientType, gradientWith = style.gradientWith, gradientStops = style.gradientStops;
    if (!gradientColor || !gradientParams)
      return false;
    if (gradientColor.length === 1) {
      console.warn("The gradient needs to provide at least two colors");
      return false;
    }
    if (gradientType !== "linear" && gradientType !== "radial") {
      console.warn("GradientType only supports linear or radial, current value is " + gradientType);
      return false;
    }
    var gradientParamsLength = gradientParams.length;
    if (gradientType === "linear" && gradientParamsLength !== 4 || gradientType === "radial" && gradientParamsLength !== 6) {
      console.warn("The expected length of gradientParams is " + (gradientType === "linear" ? "4" : "6"));
      return false;
    }
    if (gradientWith !== "fill" && gradientWith !== "stroke") {
      console.warn("GradientWith only supports fill or stroke, current value is " + gradientWith);
      return false;
    }
    if (gradientStops !== "auto" && !(gradientStops instanceof Array)) {
      console.warn("gradientStops only supports 'auto' or Number Array ([0, .5, 1]), current value is " + gradientStops);
      return false;
    }
    return true;
  }
  function getAutoColorStops(color2) {
    var stopGap = 1 / (color2.length - 1);
    return color2.map(function(foo, i) {
      return stopGap * i;
    });
  }
  Style.prototype.restoreTransform = function(ctx) {
    ctx.restore();
  };
  Style.prototype.update = function(change) {
    this.colorProcessor(change);
    Object.assign(this, change);
  };
  Style.prototype.getStyle = function() {
    var clonedStyle = (0, _util3.deepClone)(this, true);
    this.colorProcessor(clonedStyle, true);
    return clonedStyle;
  };
})(style_class);
var lib$1 = {};
var curves = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = exports.easeInOutBounce = exports.easeOutBounce = exports.easeInBounce = exports.easeInOutElastic = exports.easeOutElastic = exports.easeInElastic = exports.easeInOutBack = exports.easeOutBack = exports.easeInBack = exports.easeInOutQuint = exports.easeOutQuint = exports.easeInQuint = exports.easeInOutQuart = exports.easeOutQuart = exports.easeInQuart = exports.easeInOutCubic = exports.easeOutCubic = exports.easeInCubic = exports.easeInOutQuad = exports.easeOutQuad = exports.easeInQuad = exports.easeInOutSine = exports.easeOutSine = exports.easeInSine = exports.linear = void 0;
  var linear = [[[0, 1], "", [0.33, 0.67]], [[1, 0], [0.67, 0.33]]];
  exports.linear = linear;
  var easeInSine = [[[0, 1]], [[0.538, 0.564], [0.169, 0.912], [0.88, 0.196]], [[1, 0]]];
  exports.easeInSine = easeInSine;
  var easeOutSine = [[[0, 1]], [[0.444, 0.448], [0.169, 0.736], [0.718, 0.16]], [[1, 0]]];
  exports.easeOutSine = easeOutSine;
  var easeInOutSine = [[[0, 1]], [[0.5, 0.5], [0.2, 1], [0.8, 0]], [[1, 0]]];
  exports.easeInOutSine = easeInOutSine;
  var easeInQuad = [[[0, 1]], [[0.55, 0.584], [0.231, 0.904], [0.868, 0.264]], [[1, 0]]];
  exports.easeInQuad = easeInQuad;
  var easeOutQuad = [[[0, 1]], [[0.413, 0.428], [0.065, 0.816], [0.76, 0.04]], [[1, 0]]];
  exports.easeOutQuad = easeOutQuad;
  var easeInOutQuad = [[[0, 1]], [[0.5, 0.5], [0.3, 0.9], [0.7, 0.1]], [[1, 0]]];
  exports.easeInOutQuad = easeInOutQuad;
  var easeInCubic = [[[0, 1]], [[0.679, 0.688], [0.366, 0.992], [0.992, 0.384]], [[1, 0]]];
  exports.easeInCubic = easeInCubic;
  var easeOutCubic = [[[0, 1]], [[0.321, 0.312], [8e-3, 0.616], [0.634, 8e-3]], [[1, 0]]];
  exports.easeOutCubic = easeOutCubic;
  var easeInOutCubic = [[[0, 1]], [[0.5, 0.5], [0.3, 1], [0.7, 0]], [[1, 0]]];
  exports.easeInOutCubic = easeInOutCubic;
  var easeInQuart = [[[0, 1]], [[0.812, 0.74], [0.611, 0.988], [1.013, 0.492]], [[1, 0]]];
  exports.easeInQuart = easeInQuart;
  var easeOutQuart = [[[0, 1]], [[0.152, 0.244], [1e-3, 0.448], [0.285, -0.02]], [[1, 0]]];
  exports.easeOutQuart = easeOutQuart;
  var easeInOutQuart = [[[0, 1]], [[0.5, 0.5], [0.4, 1], [0.6, 0]], [[1, 0]]];
  exports.easeInOutQuart = easeInOutQuart;
  var easeInQuint = [[[0, 1]], [[0.857, 0.856], [0.714, 1], [1, 0.712]], [[1, 0]]];
  exports.easeInQuint = easeInQuint;
  var easeOutQuint = [[[0, 1]], [[0.108, 0.2], [1e-3, 0.4], [0.214, -0.012]], [[1, 0]]];
  exports.easeOutQuint = easeOutQuint;
  var easeInOutQuint = [[[0, 1]], [[0.5, 0.5], [0.5, 1], [0.5, 0]], [[1, 0]]];
  exports.easeInOutQuint = easeInOutQuint;
  var easeInBack = [[[0, 1]], [[0.667, 0.896], [0.38, 1.184], [0.955, 0.616]], [[1, 0]]];
  exports.easeInBack = easeInBack;
  var easeOutBack = [[[0, 1]], [[0.335, 0.028], [0.061, 0.22], [0.631, -0.18]], [[1, 0]]];
  exports.easeOutBack = easeOutBack;
  var easeInOutBack = [[[0, 1]], [[0.5, 0.5], [0.4, 1.4], [0.6, -0.4]], [[1, 0]]];
  exports.easeInOutBack = easeInOutBack;
  var easeInElastic = [[[0, 1]], [[0.474, 0.964], [0.382, 0.988], [0.557, 0.952]], [[0.619, 1.076], [0.565, 1.088], [0.669, 1.08]], [[0.77, 0.916], [0.712, 0.924], [0.847, 0.904]], [[0.911, 1.304], [0.872, 1.316], [0.961, 1.34]], [[1, 0]]];
  exports.easeInElastic = easeInElastic;
  var easeOutElastic = [[[0, 1]], [[0.073, -0.32], [0.034, -0.328], [0.104, -0.344]], [[0.191, 0.092], [0.11, 0.06], [0.256, 0.08]], [[0.31, -0.076], [0.26, -0.068], [0.357, -0.076]], [[0.432, 0.032], [0.362, 0.028], [0.683, -4e-3]], [[1, 0]]];
  exports.easeOutElastic = easeOutElastic;
  var easeInOutElastic = [[[0, 1]], [[0.21, 0.94], [0.167, 0.884], [0.252, 0.98]], [[0.299, 1.104], [0.256, 1.092], [0.347, 1.108]], [[0.5, 0.496], [0.451, 0.672], [0.548, 0.324]], [[0.696, -0.108], [0.652, -0.112], [0.741, -0.124]], [[0.805, 0.064], [0.756, 0.012], [0.866, 0.096]], [[1, 0]]];
  exports.easeInOutElastic = easeInOutElastic;
  var easeInBounce = [[[0, 1]], [[0.148, 1], [0.075, 0.868], [0.193, 0.848]], [[0.326, 1], [0.276, 0.836], [0.405, 0.712]], [[0.6, 1], [0.511, 0.708], [0.671, 0.348]], [[1, 0]]];
  exports.easeInBounce = easeInBounce;
  var easeOutBounce = [[[0, 1]], [[0.357, 4e-3], [0.27, 0.592], [0.376, 0.252]], [[0.604, -4e-3], [0.548, 0.312], [0.669, 0.184]], [[0.82, 0], [0.749, 0.184], [0.905, 0.132]], [[1, 0]]];
  exports.easeOutBounce = easeOutBounce;
  var easeInOutBounce = [[[0, 1]], [[0.102, 1], [0.05, 0.864], [0.117, 0.86]], [[0.216, 0.996], [0.208, 0.844], [0.227, 0.808]], [[0.347, 0.996], [0.343, 0.8], [0.48, 0.292]], [[0.635, 4e-3], [0.511, 0.676], [0.656, 0.208]], [[0.787, 0], [0.76, 0.2], [0.795, 0.144]], [[0.905, -4e-3], [0.899, 0.164], [0.944, 0.144]], [[1, 0]]];
  exports.easeInOutBounce = easeInOutBounce;
  var _default = /* @__PURE__ */ new Map([["linear", linear], ["easeInSine", easeInSine], ["easeOutSine", easeOutSine], ["easeInOutSine", easeInOutSine], ["easeInQuad", easeInQuad], ["easeOutQuad", easeOutQuad], ["easeInOutQuad", easeInOutQuad], ["easeInCubic", easeInCubic], ["easeOutCubic", easeOutCubic], ["easeInOutCubic", easeInOutCubic], ["easeInQuart", easeInQuart], ["easeOutQuart", easeOutQuart], ["easeInOutQuart", easeInOutQuart], ["easeInQuint", easeInQuint], ["easeOutQuint", easeOutQuint], ["easeInOutQuint", easeInOutQuint], ["easeInBack", easeInBack], ["easeOutBack", easeOutBack], ["easeInOutBack", easeInOutBack], ["easeInElastic", easeInElastic], ["easeOutElastic", easeOutElastic], ["easeInOutElastic", easeInOutElastic], ["easeInBounce", easeInBounce], ["easeOutBounce", easeOutBounce], ["easeInOutBounce", easeInOutBounce]]);
  exports["default"] = _default;
})(curves);
(function(exports) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.transition = transition;
  exports.injectNewCurve = injectNewCurve;
  exports["default"] = void 0;
  var _slicedToArray22 = _interopRequireDefault2(slicedToArray.exports);
  var _typeof22 = _interopRequireDefault2(_typeof.exports);
  var _curves = _interopRequireDefault2(curves);
  var defaultTransitionBC = "linear";
  function transition(tBC) {
    var startState = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    var endState = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var frameNum = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 30;
    var deep = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    if (!checkParams.apply(void 0, arguments))
      return false;
    try {
      var bezierCurve = getBezierCurve(tBC);
      var frameStateProgress = getFrameStateProgress(bezierCurve, frameNum);
      if (!deep || typeof endState === "number")
        return getTransitionState(startState, endState, frameStateProgress);
      return recursionTransitionState(startState, endState, frameStateProgress);
    } catch (_unused) {
      console.warn("Transition parameter may be abnormal!");
      return [endState];
    }
  }
  function checkParams(tBC) {
    var startState = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var endState = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var frameNum = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 30;
    if (!tBC || startState === false || endState === false || !frameNum) {
      console.error("transition: Missing Parameters!");
      return false;
    }
    if ((0, _typeof22["default"])(startState) !== (0, _typeof22["default"])(endState)) {
      console.error("transition: Inconsistent Status Types!");
      return false;
    }
    var stateType = (0, _typeof22["default"])(endState);
    if (stateType === "string" || stateType === "boolean" || !tBC.length) {
      console.error("transition: Unsupported Data Type of State!");
      return false;
    }
    if (!_curves["default"].has(tBC) && !(tBC instanceof Array)) {
      console.warn("transition: Transition curve not found, default curve will be used!");
    }
    return true;
  }
  function getBezierCurve(tBC) {
    var bezierCurve = "";
    if (_curves["default"].has(tBC)) {
      bezierCurve = _curves["default"].get(tBC);
    } else if (tBC instanceof Array) {
      bezierCurve = tBC;
    } else {
      bezierCurve = _curves["default"].get(defaultTransitionBC);
    }
    return bezierCurve;
  }
  function getFrameStateProgress(bezierCurve, frameNum) {
    var tMinus = 1 / (frameNum - 1);
    var tState = new Array(frameNum).fill(0).map(function(t, i) {
      return i * tMinus;
    });
    var frameState = tState.map(function(t) {
      return getFrameStateFromT(bezierCurve, t);
    });
    return frameState;
  }
  function getFrameStateFromT(bezierCurve, t) {
    var tBezierCurvePoint = getBezierCurvePointFromT(bezierCurve, t);
    var bezierCurvePointT = getBezierCurvePointTFromReT(tBezierCurvePoint, t);
    return getBezierCurveTState(tBezierCurvePoint, bezierCurvePointT);
  }
  function getBezierCurvePointFromT(bezierCurve, t) {
    var lastIndex = bezierCurve.length - 1;
    var begin = "", end = "";
    bezierCurve.findIndex(function(item, i) {
      if (i === lastIndex)
        return;
      begin = item;
      end = bezierCurve[i + 1];
      var currentMainPointX = begin[0][0];
      var nextMainPointX = end[0][0];
      return t >= currentMainPointX && t < nextMainPointX;
    });
    var p0 = begin[0];
    var p1 = begin[2] || begin[0];
    var p2 = end[1] || end[0];
    var p3 = end[0];
    return [p0, p1, p2, p3];
  }
  function getBezierCurvePointTFromReT(bezierCurve, t) {
    var reBeginX = bezierCurve[0][0];
    var reEndX = bezierCurve[3][0];
    var xMinus = reEndX - reBeginX;
    var tMinus = t - reBeginX;
    return tMinus / xMinus;
  }
  function getBezierCurveTState(_ref, t) {
    var _ref2 = (0, _slicedToArray22["default"])(_ref, 4), _ref2$ = (0, _slicedToArray22["default"])(_ref2[0], 2), p0 = _ref2$[1], _ref2$2 = (0, _slicedToArray22["default"])(_ref2[1], 2), p1 = _ref2$2[1], _ref2$3 = (0, _slicedToArray22["default"])(_ref2[2], 2), p2 = _ref2$3[1], _ref2$4 = (0, _slicedToArray22["default"])(_ref2[3], 2), p3 = _ref2$4[1];
    var pow2 = Math.pow;
    var tMinus = 1 - t;
    var result1 = p0 * pow2(tMinus, 3);
    var result2 = 3 * p1 * t * pow2(tMinus, 2);
    var result3 = 3 * p2 * pow2(t, 2) * tMinus;
    var result4 = p3 * pow2(t, 3);
    return 1 - (result1 + result2 + result3 + result4);
  }
  function getTransitionState(begin, end, frameState) {
    var stateType = "object";
    if (typeof begin === "number")
      stateType = "number";
    if (begin instanceof Array)
      stateType = "array";
    if (stateType === "number")
      return getNumberTransitionState(begin, end, frameState);
    if (stateType === "array")
      return getArrayTransitionState(begin, end, frameState);
    if (stateType === "object")
      return getObjectTransitionState(begin, end, frameState);
    return frameState.map(function(t) {
      return end;
    });
  }
  function getNumberTransitionState(begin, end, frameState) {
    var minus = end - begin;
    return frameState.map(function(s) {
      return begin + minus * s;
    });
  }
  function getArrayTransitionState(begin, end, frameState) {
    var minus = end.map(function(v, i) {
      if (typeof v !== "number")
        return false;
      return v - begin[i];
    });
    return frameState.map(function(s) {
      return minus.map(function(v, i) {
        if (v === false)
          return end[i];
        return begin[i] + v * s;
      });
    });
  }
  function getObjectTransitionState(begin, end, frameState) {
    var keys = Object.keys(end);
    var beginValue = keys.map(function(k) {
      return begin[k];
    });
    var endValue = keys.map(function(k) {
      return end[k];
    });
    var arrayState = getArrayTransitionState(beginValue, endValue, frameState);
    return arrayState.map(function(item) {
      var frameData = {};
      item.forEach(function(v, i) {
        return frameData[keys[i]] = v;
      });
      return frameData;
    });
  }
  function recursionTransitionState(begin, end, frameState) {
    var state = getTransitionState(begin, end, frameState);
    var _loop = function _loop2(key2) {
      var bTemp = begin[key2];
      var eTemp = end[key2];
      if ((0, _typeof22["default"])(eTemp) !== "object")
        return "continue";
      var data = recursionTransitionState(bTemp, eTemp, frameState);
      state.forEach(function(fs, i) {
        return fs[key2] = data[i];
      });
    };
    for (var key in end) {
      var _ret = _loop(key);
      if (_ret === "continue")
        continue;
    }
    return state;
  }
  function injectNewCurve(key, curve) {
    if (!key || !curve) {
      console.error("InjectNewCurve Missing Parameters!");
      return;
    }
    _curves["default"].set(key, curve);
  }
  var _default = transition;
  exports["default"] = _default;
})(lib$1);
(function(exports) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _regenerator = _interopRequireDefault2(regenerator);
  var _asyncToGenerator2 = _interopRequireDefault2(asyncToGenerator.exports);
  var _typeof22 = _interopRequireDefault2(_typeof.exports);
  var _toConsumableArray22 = _interopRequireDefault2(toConsumableArray.exports);
  var _classCallCheck22 = _interopRequireDefault2(classCallCheck.exports);
  var _style = _interopRequireDefault2(style_class);
  var _transition = _interopRequireDefault2(lib$1);
  var _util3 = util$1;
  var Graph = function Graph2(graph, config2) {
    (0, _classCallCheck22["default"])(this, Graph2);
    config2 = (0, _util3.deepClone)(config2, true);
    var defaultConfig = {
      visible: true,
      drag: false,
      hover: false,
      index: 1,
      animationDelay: 0,
      animationFrame: 30,
      animationCurve: "linear",
      animationPause: false,
      hoverRect: null,
      mouseEnter: null,
      mouseOuter: null,
      click: null
    };
    var configAbleNot = {
      status: "static",
      animationRoot: [],
      animationKeys: [],
      animationFrameState: [],
      cache: {}
    };
    if (!config2.shape)
      config2.shape = {};
    if (!config2.style)
      config2.style = {};
    var shape = Object.assign({}, graph.shape, config2.shape);
    Object.assign(defaultConfig, config2, configAbleNot);
    Object.assign(this, graph, defaultConfig);
    this.shape = shape;
    this.style = new _style["default"](config2.style);
    this.addedProcessor();
  };
  exports["default"] = Graph;
  Graph.prototype.addedProcessor = function() {
    if (typeof this.setGraphCenter === "function")
      this.setGraphCenter(null, this);
    if (typeof this.added === "function")
      this.added(this);
  };
  Graph.prototype.drawProcessor = function(render, graph) {
    var ctx = render.ctx;
    graph.style.initStyle(ctx);
    if (typeof this.beforeDraw === "function")
      this.beforeDraw(this, render);
    graph.draw(render, graph);
    if (typeof this.drawed === "function")
      this.drawed(this, render);
    graph.style.restoreTransform(ctx);
  };
  Graph.prototype.hoverCheckProcessor = function(position, _ref) {
    var hoverRect = _ref.hoverRect, style = _ref.style, hoverCheck2 = _ref.hoverCheck;
    var graphCenter = style.graphCenter, rotate = style.rotate, scale = style.scale, translate = style.translate;
    if (graphCenter) {
      if (rotate)
        position = (0, _util3.getRotatePointPos)(-rotate, position, graphCenter);
      if (scale)
        position = (0, _util3.getScalePointPos)(scale.map(function(s) {
          return 1 / s;
        }), position, graphCenter);
      if (translate)
        position = (0, _util3.getTranslatePointPos)(translate.map(function(v) {
          return v * -1;
        }), position);
    }
    if (hoverRect)
      return _util3.checkPointIsInRect.apply(void 0, [position].concat((0, _toConsumableArray22["default"])(hoverRect)));
    return hoverCheck2(position, this);
  };
  Graph.prototype.moveProcessor = function(e) {
    this.move(e, this);
    if (typeof this.beforeMove === "function")
      this.beforeMove(e, this);
    if (typeof this.setGraphCenter === "function")
      this.setGraphCenter(e, this);
    if (typeof this.moved === "function")
      this.moved(e, this);
  };
  Graph.prototype.attr = function(attrName) {
    var change = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
    if (!attrName || change === void 0)
      return false;
    var isObject = (0, _typeof22["default"])(this[attrName]) === "object";
    if (isObject)
      change = (0, _util3.deepClone)(change, true);
    var render = this.render;
    if (attrName === "style") {
      this.style.update(change);
    } else if (isObject) {
      Object.assign(this[attrName], change);
    } else {
      this[attrName] = change;
    }
    if (attrName === "index")
      render.sortGraphsByIndex();
    render.drawAllGraph();
  };
  Graph.prototype.animation = /* @__PURE__ */ function() {
    var _ref2 = (0, _asyncToGenerator2["default"])(
      /* @__PURE__ */ _regenerator["default"].mark(function _callee2(attrName, change) {
        var wait, changeRoot, changeKeys, beforeState, animationFrame, animationCurve, animationDelay, animationFrameState, render, _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                wait = _args2.length > 2 && _args2[2] !== void 0 ? _args2[2] : false;
                if (!(attrName !== "shape" && attrName !== "style")) {
                  _context2.next = 4;
                  break;
                }
                console.error("Only supported shape and style animation!");
                return _context2.abrupt("return");
              case 4:
                change = (0, _util3.deepClone)(change, true);
                if (attrName === "style")
                  this.style.colorProcessor(change);
                changeRoot = this[attrName];
                changeKeys = Object.keys(change);
                beforeState = {};
                changeKeys.forEach(function(key) {
                  return beforeState[key] = changeRoot[key];
                });
                animationFrame = this.animationFrame, animationCurve = this.animationCurve, animationDelay = this.animationDelay;
                animationFrameState = (0, _transition["default"])(animationCurve, beforeState, change, animationFrame, true);
                this.animationRoot.push(changeRoot);
                this.animationKeys.push(changeKeys);
                this.animationFrameState.push(animationFrameState);
                if (!wait) {
                  _context2.next = 17;
                  break;
                }
                return _context2.abrupt("return");
              case 17:
                if (!(animationDelay > 0)) {
                  _context2.next = 20;
                  break;
                }
                _context2.next = 20;
                return delay(animationDelay);
              case 20:
                render = this.render;
                return _context2.abrupt("return", new Promise(
                  /* @__PURE__ */ function() {
                    var _ref3 = (0, _asyncToGenerator2["default"])(
                      /* @__PURE__ */ _regenerator["default"].mark(function _callee(resolve) {
                        return _regenerator["default"].wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return render.launchAnimation();
                              case 2:
                                resolve();
                              case 3:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      })
                    );
                    return function(_x3) {
                      return _ref3.apply(this, arguments);
                    };
                  }()
                ));
              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      })
    );
    return function(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  Graph.prototype.turnNextAnimationFrame = function(timeStamp) {
    var animationDelay = this.animationDelay, animationRoot = this.animationRoot, animationKeys = this.animationKeys, animationFrameState = this.animationFrameState, animationPause = this.animationPause;
    if (animationPause)
      return;
    if (Date.now() - timeStamp < animationDelay)
      return;
    animationRoot.forEach(function(root, i) {
      animationKeys[i].forEach(function(key) {
        root[key] = animationFrameState[i][0][key];
      });
    });
    animationFrameState.forEach(function(stateItem, i) {
      stateItem.shift();
      var noFrame = stateItem.length === 0;
      if (noFrame)
        animationRoot[i] = null;
      if (noFrame)
        animationKeys[i] = null;
    });
    this.animationFrameState = animationFrameState.filter(function(state) {
      return state.length;
    });
    this.animationRoot = animationRoot.filter(function(root) {
      return root;
    });
    this.animationKeys = animationKeys.filter(function(keys) {
      return keys;
    });
  };
  Graph.prototype.animationEnd = function() {
    var animationFrameState = this.animationFrameState, animationKeys = this.animationKeys, animationRoot = this.animationRoot, render = this.render;
    animationRoot.forEach(function(root, i) {
      var currentKeys = animationKeys[i];
      var lastState = animationFrameState[i].pop();
      currentKeys.forEach(function(key) {
        return root[key] = lastState[key];
      });
    });
    this.animationFrameState = [];
    this.animationKeys = [];
    this.animationRoot = [];
    return render.drawAllGraph();
  };
  Graph.prototype.pauseAnimation = function() {
    this.attr("animationPause", true);
  };
  Graph.prototype.playAnimation = function() {
    var render = this.render;
    this.attr("animationPause", false);
    return new Promise(
      /* @__PURE__ */ function() {
        var _ref4 = (0, _asyncToGenerator2["default"])(
          /* @__PURE__ */ _regenerator["default"].mark(function _callee3(resolve) {
            return _regenerator["default"].wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return render.launchAnimation();
                  case 2:
                    resolve();
                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          })
        );
        return function(_x4) {
          return _ref4.apply(this, arguments);
        };
      }()
    );
  };
  Graph.prototype.delProcessor = function(render) {
    var _this = this;
    var graphs2 = render.graphs;
    var index = graphs2.findIndex(function(graph) {
      return graph === _this;
    });
    if (index === -1)
      return;
    if (typeof this.beforeDelete === "function")
      this.beforeDelete(this);
    graphs2.splice(index, 1, null);
    if (typeof this.deleted === "function")
      this.deleted(this);
  };
  function delay(time) {
    return new Promise(function(resolve) {
      setTimeout(resolve, time);
    });
  }
})(graph_class);
(function(exports) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _defineProperty22 = _interopRequireDefault2(defineProperty.exports);
  var _toConsumableArray22 = _interopRequireDefault2(toConsumableArray.exports);
  var _classCallCheck22 = _interopRequireDefault2(classCallCheck.exports);
  var _color2 = _interopRequireDefault2(lib$3);
  var _bezierCurve2 = _interopRequireDefault2(lib$2);
  var _util3 = util$1;
  var _graphs2 = _interopRequireDefault2(graphs);
  var _graph = _interopRequireDefault2(graph_class);
  function ownKeys2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys2(source, true).forEach(function(key) {
          (0, _defineProperty22["default"])(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys2(source).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var CRender2 = function CRender3(canvas2) {
    (0, _classCallCheck22["default"])(this, CRender3);
    if (!canvas2) {
      console.error("CRender Missing parameters!");
      return;
    }
    var ctx = canvas2.getContext("2d");
    var clientWidth = canvas2.clientWidth, clientHeight = canvas2.clientHeight;
    var area = [clientWidth, clientHeight];
    canvas2.setAttribute("width", clientWidth);
    canvas2.setAttribute("height", clientHeight);
    this.ctx = ctx;
    this.area = area;
    this.animationStatus = false;
    this.graphs = [];
    this.color = _color2["default"];
    this.bezierCurve = _bezierCurve2["default"];
    canvas2.addEventListener("mousedown", mouseDown.bind(this));
    canvas2.addEventListener("mousemove", mouseMove.bind(this));
    canvas2.addEventListener("mouseup", mouseUp.bind(this));
  };
  exports["default"] = CRender2;
  CRender2.prototype.clearArea = function() {
    var _this$ctx;
    var area = this.area;
    (_this$ctx = this.ctx).clearRect.apply(_this$ctx, [0, 0].concat((0, _toConsumableArray22["default"])(area)));
  };
  CRender2.prototype.add = function() {
    var config2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var name = config2.name;
    if (!name) {
      console.error("add Missing parameters!");
      return;
    }
    var graphConfig = _graphs2["default"].get(name);
    if (!graphConfig) {
      console.warn("No corresponding graph configuration found!");
      return;
    }
    var graph = new _graph["default"](graphConfig, config2);
    if (!graph.validator(graph))
      return;
    graph.render = this;
    this.graphs.push(graph);
    this.sortGraphsByIndex();
    this.drawAllGraph();
    return graph;
  };
  CRender2.prototype.sortGraphsByIndex = function() {
    var graphs2 = this.graphs;
    graphs2.sort(function(a, b) {
      if (a.index > b.index)
        return 1;
      if (a.index === b.index)
        return 0;
      if (a.index < b.index)
        return -1;
    });
  };
  CRender2.prototype.delGraph = function(graph) {
    if (typeof graph.delProcessor !== "function")
      return;
    graph.delProcessor(this);
    this.graphs = this.graphs.filter(function(graph2) {
      return graph2;
    });
    this.drawAllGraph();
  };
  CRender2.prototype.delAllGraph = function() {
    var _this = this;
    this.graphs.forEach(function(graph) {
      return graph.delProcessor(_this);
    });
    this.graphs = this.graphs.filter(function(graph) {
      return graph;
    });
    this.drawAllGraph();
  };
  CRender2.prototype.drawAllGraph = function() {
    var _this2 = this;
    this.clearArea();
    this.graphs.filter(function(graph) {
      return graph && graph.visible;
    }).forEach(function(graph) {
      return graph.drawProcessor(_this2, graph);
    });
  };
  CRender2.prototype.launchAnimation = function() {
    var _this3 = this;
    var animationStatus = this.animationStatus;
    if (animationStatus)
      return;
    this.animationStatus = true;
    return new Promise(function(resolve) {
      animation.call(_this3, function() {
        _this3.animationStatus = false;
        resolve();
      }, Date.now());
    });
  };
  function animation(callback, timeStamp) {
    var graphs2 = this.graphs;
    if (!animationAble(graphs2)) {
      callback();
      return;
    }
    graphs2.forEach(function(graph) {
      return graph.turnNextAnimationFrame(timeStamp);
    });
    this.drawAllGraph();
    requestAnimationFrame(animation.bind(this, callback, timeStamp));
  }
  function animationAble(graphs2) {
    return graphs2.find(function(graph) {
      return !graph.animationPause && graph.animationFrameState.length;
    });
  }
  function mouseDown(e) {
    var graphs2 = this.graphs;
    var hoverGraph = graphs2.find(function(graph) {
      return graph.status === "hover";
    });
    if (!hoverGraph)
      return;
    hoverGraph.status = "active";
  }
  function mouseMove(e) {
    var offsetX = e.offsetX, offsetY = e.offsetY;
    var position = [offsetX, offsetY];
    var graphs2 = this.graphs;
    var activeGraph = graphs2.find(function(graph) {
      return graph.status === "active" || graph.status === "drag";
    });
    if (activeGraph) {
      if (!activeGraph.drag)
        return;
      if (typeof activeGraph.move !== "function") {
        console.error("No move method is provided, cannot be dragged!");
        return;
      }
      activeGraph.moveProcessor(e);
      activeGraph.status = "drag";
      return;
    }
    var hoverGraph = graphs2.find(function(graph) {
      return graph.status === "hover";
    });
    var hoverAbleGraphs = graphs2.filter(function(graph) {
      return graph.hover && (typeof graph.hoverCheck === "function" || graph.hoverRect);
    });
    var hoveredGraph = hoverAbleGraphs.find(function(graph) {
      return graph.hoverCheckProcessor(position, graph);
    });
    if (hoveredGraph) {
      document.body.style.cursor = hoveredGraph.style.hoverCursor;
    } else {
      document.body.style.cursor = "default";
    }
    var hoverGraphMouseOuterIsFun = false, hoveredGraphMouseEnterIsFun = false;
    if (hoverGraph)
      hoverGraphMouseOuterIsFun = typeof hoverGraph.mouseOuter === "function";
    if (hoveredGraph)
      hoveredGraphMouseEnterIsFun = typeof hoveredGraph.mouseEnter === "function";
    if (!hoveredGraph && !hoverGraph)
      return;
    if (!hoveredGraph && hoverGraph) {
      if (hoverGraphMouseOuterIsFun)
        hoverGraph.mouseOuter(e, hoverGraph);
      hoverGraph.status = "static";
      return;
    }
    if (hoveredGraph && hoveredGraph === hoverGraph)
      return;
    if (hoveredGraph && !hoverGraph) {
      if (hoveredGraphMouseEnterIsFun)
        hoveredGraph.mouseEnter(e, hoveredGraph);
      hoveredGraph.status = "hover";
      return;
    }
    if (hoveredGraph && hoverGraph && hoveredGraph !== hoverGraph) {
      if (hoverGraphMouseOuterIsFun)
        hoverGraph.mouseOuter(e, hoverGraph);
      hoverGraph.status = "static";
      if (hoveredGraphMouseEnterIsFun)
        hoveredGraph.mouseEnter(e, hoveredGraph);
      hoveredGraph.status = "hover";
    }
  }
  function mouseUp(e) {
    var graphs2 = this.graphs;
    var activeGraph = graphs2.find(function(graph) {
      return graph.status === "active";
    });
    var dragGraph = graphs2.find(function(graph) {
      return graph.status === "drag";
    });
    if (activeGraph && typeof activeGraph.click === "function")
      activeGraph.click(e, activeGraph);
    graphs2.forEach(function(graph) {
      return graph && (graph.status = "static");
    });
    if (activeGraph)
      activeGraph.status = "hover";
    if (dragGraph)
      dragGraph.status = "hover";
  }
  CRender2.prototype.clone = function(graph) {
    var style = graph.style.getStyle();
    var clonedGraph = _objectSpread2({}, graph, {
      style
    });
    delete clonedGraph.render;
    clonedGraph = (0, _util3.deepClone)(clonedGraph, true);
    return this.add(clonedGraph);
  };
})(crender_class);
(function(exports) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "CRender", {
    enumerable: true,
    get: function get() {
      return _crender["default"];
    }
  });
  Object.defineProperty(exports, "extendNewGraph", {
    enumerable: true,
    get: function get() {
      return _graphs2.extendNewGraph;
    }
  });
  exports["default"] = void 0;
  var _crender = _interopRequireDefault2(crender_class);
  var _graphs2 = graphs;
  var _default = _crender["default"];
  exports["default"] = _default;
})(lib$4);
var CRender = /* @__PURE__ */ getDefaultExportFromCjs(lib$4);
var index_vue_vue_type_style_index_0_lang$z = "";
const _hoisted_1$x = { class: "dv-water-pond-level" };
const _hoisted_2$w = { key: 0 };
const _hoisted_3$u = ["id"];
const _hoisted_4$r = ["offset", "stop-color"];
const _hoisted_5$o = ["stroke", "fill", "x", "y"];
const _hoisted_6$m = ["cx", "cy", "rx", "ry", "stroke"];
const _hoisted_7$l = ["rx", "ry", "width", "height", "stroke"];
const _sfc_main$z = {
  __name: "index",
  props: {
    config: Object,
    default: () => ({})
  },
  setup(__props) {
    const props = __props;
    const id = uuid();
    const waterPondLevel = ref(null);
    const state = reactive({
      gradientId: `water-level-pond-${id}`,
      defaultConfig: {
        data: [],
        shape: "rect",
        waveNum: 3,
        waveHeight: 40,
        waveOpacity: 0.4,
        colors: ["#3DE7C9", "#00BAFF"],
        formatter: "{value}%"
      },
      mergedConfig: {},
      renderer: null,
      svgBorderGradient: [],
      details: "",
      waves: [],
      animation: false
    });
    const radius = computed(() => {
      const { shape: shape2 } = state.mergedConfig;
      if (shape2 === "round")
        return "50%";
      if (shape2 === "rect")
        return "0";
      if (shape2 === "roundRect")
        return "10px";
      return "0";
    });
    const shape = computed(() => {
      const { shape: shape2 } = state.mergedConfig;
      if (!shape2)
        return "rect";
      return shape2;
    });
    watch(() => props.config, () => {
      state.renderer.delAllGraph();
      state.waves = [];
      setTimeout(calcData, 0);
    }, {
      deep: true
    });
    onMounted(() => {
      init();
    });
    onBeforeUnmount(() => {
      state.renderer.delAllGraph();
      state.waves = [];
    });
    function init() {
      initRender();
      if (!props.config)
        return;
      calcData();
    }
    function initRender() {
      state.renderer = new CRender(waterPondLevel.value);
    }
    function calcData() {
      mergeConfig();
      calcSvgBorderGradient();
      calcDetails();
      addWave();
      animationWave();
    }
    function mergeConfig() {
      state.mergedConfig = deepMerge$1(deepClone(state.defaultConfig, true), props.config);
    }
    function calcSvgBorderGradient() {
      const { colors } = state.mergedConfig;
      const colorNum = colors.length;
      const colorOffsetGap = 100 / (colorNum - 1);
      state.svgBorderGradient = colors.map((c, i) => [colorOffsetGap * i, c]);
    }
    function calcDetails() {
      const { data, formatter } = state.mergedConfig;
      if (!data.length) {
        state.details = "";
        return;
      }
      const maxValue = Math.max(...data);
      state.details = formatter.replace("{value}", maxValue);
    }
    function addWave() {
      const shapes = getWaveShapes();
      const style = getWaveStyle();
      state.waves = shapes.map((shape2) => state.renderer.add({
        name: "smoothline",
        animationFrame: 300,
        shape: shape2,
        style,
        drawed
      }));
    }
    function getWaveShapes() {
      const { waveNum, waveHeight, data } = state.mergedConfig;
      const [w, h] = state.renderer.area;
      const pointsNum = waveNum * 4 + 4;
      const pointXGap = w / waveNum / 2;
      return data.map((v) => {
        let points = new Array(pointsNum).fill(0).map((foo, j) => {
          const x = w - pointXGap * j;
          const startY = (1 - v / 100) * h;
          const y = j % 2 === 0 ? startY : startY - waveHeight;
          return [x, y];
        });
        points = points.map((p) => mergeOffset2(p, [pointXGap * 2, 0]));
        return { points };
      });
    }
    function mergeOffset2([x, y], [ox, oy]) {
      return [x + ox, y + oy];
    }
    function getWaveStyle() {
      const h = state.renderer.area[1];
      return {
        gradientColor: state.mergedConfig.colors,
        gradientType: "linear",
        gradientParams: [0, 0, 0, h],
        gradientWith: "fill",
        opacity: state.mergedConfig.waveOpacity,
        translate: [0, 0]
      };
    }
    function drawed({ shape: { points } }, { ctx, area }) {
      const firstPoint = points[0];
      const lastPoint = points.slice(-1)[0];
      const h = area[1];
      ctx.lineTo(lastPoint[0], h);
      ctx.lineTo(firstPoint[0], h);
      ctx.closePath();
      ctx.fill();
    }
    async function animationWave(repeat = 1) {
      if (state.animation)
        return;
      state.animation = true;
      const w = state.renderer.area[0];
      state.waves.forEach((graph) => {
        graph.attr("style", { translate: [0, 0] });
        graph.animation("style", {
          translate: [w, 0]
        }, true);
      });
      await state.renderer.launchAnimation();
      state.animation = false;
      if (!state.renderer.graphs.length)
        return;
      animationWave(repeat + 1);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$x, [
        state.renderer ? (openBlock(), createElementBlock("svg", _hoisted_2$w, [
          createElementVNode("defs", null, [
            createElementVNode("linearGradient", {
              id: state.gradientId,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(state.svgBorderGradient, (lc) => {
                return openBlock(), createElementBlock("stop", {
                  key: lc[0],
                  offset: lc[0],
                  "stop-color": lc[1]
                }, null, 8, _hoisted_4$r);
              }), 128))
            ], 8, _hoisted_3$u)
          ]),
          state.renderer ? (openBlock(), createElementBlock("text", {
            key: 0,
            stroke: `url(#${state.gradientId})`,
            fill: `url(#${state.gradientId})`,
            x: state.renderer.area[0] / 2 + 8,
            y: state.renderer.area[1] / 2 + 8
          }, toDisplayString(state.details), 9, _hoisted_5$o)) : createCommentVNode("", true),
          !unref(shape) || unref(shape) === "round" ? (openBlock(), createElementBlock("ellipse", {
            key: 1,
            cx: state.renderer.area[0] / 2 + 8,
            cy: state.renderer.area[1] / 2 + 8,
            rx: state.renderer.area[0] / 2 + 5,
            ry: state.renderer.area[1] / 2 + 5,
            stroke: `url(#${state.gradientId})`
          }, null, 8, _hoisted_6$m)) : (openBlock(), createElementBlock("rect", {
            key: 2,
            x: "2",
            y: "2",
            rx: unref(shape) === "roundRect" ? 10 : 0,
            ry: unref(shape) === "roundRect" ? 10 : 0,
            width: state.renderer.area[0] + 12,
            height: state.renderer.area[1] + 12,
            stroke: `url(#${state.gradientId})`
          }, null, 8, _hoisted_7$l))
        ])) : createCommentVNode("", true),
        createElementVNode("canvas", {
          ref_key: "waterPondLevel",
          ref: waterPondLevel,
          style: normalizeStyle(`border-radius: ${unref(radius)};`)
        }, null, 4)
      ]);
    };
  }
};
const WaterLevelPondPlugin = {
  install(app) {
    app.component("DvWaterLevelPond", _sfc_main$z);
  }
};
var index_vue_vue_type_style_index_0_lang$y = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$y = {};
const _hoisted_1$w = { class: "dv-loading" };
const _hoisted_2$v = /* @__PURE__ */ createStaticVNode('<svg width="50px" height="50px"><circle cx="25" cy="25" r="20" fill="transparent" stroke-width="3" stroke-dasharray="31.415, 31.415" stroke="#02bcfe" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="0, 25 25;360, 25 25" dur="1.5s" repeatCount="indefinite"></animateTransform><animate attributeName="stroke" values="#02bcfe;#3be6cb;#02bcfe" dur="3s" repeatCount="indefinite"></animate></circle><circle cx="25" cy="25" r="10" fill="transparent" stroke-width="3" stroke-dasharray="15.7, 15.7" stroke="#3be6cb" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="360, 25 25;0, 25 25" dur="1.5s" repeatCount="indefinite"></animateTransform><animate attributeName="stroke" values="#3be6cb;#02bcfe;#3be6cb" dur="3s" repeatCount="indefinite"></animate></circle></svg>', 1);
const _hoisted_3$t = { class: "loading-tip" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$w, [
    _hoisted_2$v,
    createElementVNode("div", _hoisted_3$t, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
var Loading = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render]]);
const LoadingPlugin = {
  install(app) {
    app.component("DvLoading", Loading);
  }
};
var index_vue_vue_type_style_index_0_lang$x = "";
const _hoisted_1$v = ["width", "height"];
const _hoisted_2$u = ["id"];
const _hoisted_3$s = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#fff",
  "stop-opacity": "1"
}, null, -1);
const _hoisted_4$q = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#fff",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_5$n = [
  _hoisted_3$s,
  _hoisted_4$q
];
const _hoisted_6$l = ["id"];
const _hoisted_7$k = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#fff",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_8$g = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#fff",
  "stop-opacity": "1"
}, null, -1);
const _hoisted_9$g = [
  _hoisted_7$k,
  _hoisted_8$g
];
const _hoisted_10$c = ["id", "cx", "cy"];
const _hoisted_11$a = ["values", "dur"];
const _hoisted_12$9 = ["dur"];
const _hoisted_13$9 = ["id"];
const _hoisted_14$8 = ["xlink:href", "fill"];
const _hoisted_15$6 = ["xlink:href", "fill", "mask"];
const _hoisted_16$6 = ["xlink:href", "width", "height", "x", "y"];
const _hoisted_17$6 = ["fill", "x", "y"];
const _hoisted_18$5 = ["id", "d"];
const _hoisted_19$5 = ["xlink:href", "stroke-width", "stroke"];
const _hoisted_20$4 = ["id"];
const _hoisted_21$4 = ["r", "fill"];
const _hoisted_22$3 = ["dur", "path"];
const _hoisted_23$2 = ["xlink:href", "stroke-width", "stroke", "mask"];
const _hoisted_24$2 = ["from", "to", "dur"];
const _sfc_main$x = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    dev: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const id = uuid();
    const flylineChartEnhanced = ref(null);
    const { width, height } = autoResize(flylineChartEnhanced, onResize, afterAutoResizeMixinInit);
    const state = reactive({
      unique: Math.random(),
      flylineGradientId: `flyline-gradient-id-${id}`,
      haloGradientId: `halo-gradient-id-${id}`,
      defaultConfig: {
        points: [],
        lines: [],
        halo: {
          show: false,
          duration: [20, 30],
          color: "#fb7293",
          radius: 120
        },
        text: {
          show: false,
          offset: [0, 15],
          color: "#ffdb5c",
          fontSize: 12
        },
        icon: {
          show: false,
          src: "",
          width: 15,
          height: 15
        },
        line: {
          width: 1,
          color: "#ffde93",
          orbitColor: "rgba(103, 224, 227, .2)",
          duration: [20, 30],
          radius: 100
        },
        bgImgSrc: "",
        k: -0.5,
        curvature: 5,
        relative: true
      },
      flylines: [],
      flylineLengths: [],
      flylinePoints: [],
      mergedConfig: null
    });
    let instance;
    onMounted(() => {
      instance = getCurrentInstance();
    });
    watch(() => props.config, () => {
      calcData();
    }, {
      deep: true
    });
    function afterAutoResizeMixinInit() {
      calcData();
    }
    function onResize() {
      calcData();
    }
    async function calcData() {
      mergeConfig();
      calcflylinePoints();
      calcLinePaths();
      await calcLineLengths();
    }
    function mergeConfig() {
      const mergedConfig = deepMerge$1(deepClone(state.defaultConfig, true), props.config || {});
      const { points, lines, halo, text, icon, line: line2 } = mergedConfig;
      mergedConfig.points = points.map((item) => {
        item.halo = deepMerge$1(deepClone(halo, true), item.halo || {});
        item.text = deepMerge$1(deepClone(text, true), item.text || {});
        item.icon = deepMerge$1(deepClone(icon, true), item.icon || {});
        return item;
      });
      mergedConfig.lines = lines.map((item) => {
        return deepMerge$1(deepClone(line2, true), item);
      });
      state.mergedConfig = mergedConfig;
    }
    function calcflylinePoints() {
      const { relative, points } = state.mergedConfig;
      state.flylinePoints = points.map((item, i) => {
        const { coordinate: [x, y], halo, icon, text } = item;
        if (relative)
          item.coordinate = [x * width.value, y * height.value];
        item.halo.time = randomExtend(...halo.duration) / 10;
        const { width: iw, height: ih } = icon;
        item.icon.x = item.coordinate[0] - iw / 2;
        item.icon.y = item.coordinate[1] - ih / 2;
        const [ox, oy] = text.offset;
        item.text.x = item.coordinate[0] + ox;
        item.text.y = item.coordinate[1] + oy;
        item.key = `${item.coordinate.toString()}${i}`;
        return item;
      });
    }
    function calcLinePaths() {
      const { points, lines } = state.mergedConfig;
      state.flylines = lines.map((item) => {
        const { source, target, duration } = item;
        const sourcePoint = points.find(({ name }) => name === source).coordinate;
        const targetPoint = points.find(({ name }) => name === target).coordinate;
        const path = getPath(sourcePoint, targetPoint).map((item2) => item2.map((v) => parseFloat(v.toFixed(10))));
        const d = `M${path[0].toString()} Q${path[1].toString()} ${path[2].toString()}`;
        const key = `path${path.toString()}`;
        const time = randomExtend(...duration) / 10;
        return { ...item, path, key, d, time };
      });
    }
    function getPath(start, end) {
      const controlPoint = getControlPoint(start, end);
      return [start, controlPoint, end];
    }
    function getControlPoint([sx, sy], [ex, ey]) {
      const { curvature, k } = state.mergedConfig;
      const [mx, my] = [(sx + ex) / 2, (sy + ey) / 2];
      const distance = getPointDistance([sx, sy], [ex, ey]);
      const targetLength = distance / curvature;
      const disDived = targetLength / 2;
      let [dx, dy] = [mx, my];
      do {
        dx += disDived;
        dy = getKLinePointByx(k, [mx, my], dx)[1];
      } while (getPointDistance([mx, my], [dx, dy]) < targetLength);
      return [dx, dy];
    }
    function getKLinePointByx(k, [lx, ly], x) {
      const y = ly - k * lx + k * x;
      return [x, y];
    }
    async function calcLineLengths() {
      await nextTick();
      state.flylineLengths = state.flylines.map(({ key }) => instance.proxy.$refs[key][0].getTotalLength());
    }
    function consoleClickPos({ offsetX, offsetY }) {
      if (!props.dev)
        return;
      const relativeX = (offsetX / width.value).toFixed(2);
      const relativeY = (offsetY / height.value).toFixed(2);
      console.warn(`dv-flyline-chart-enhanced DEV: 
 Click Position is [${offsetX}, ${offsetY}] 
 Relative Position is [${relativeX}, ${relativeY}]`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "flylineChartEnhanced",
        ref: flylineChartEnhanced,
        class: "dv-flyline-chart-enhanced",
        style: normalizeStyle(`background-image: url(${state.mergedConfig ? state.mergedConfig.bgImgSrc : ""})`),
        onClick: consoleClickPos
      }, [
        state.flylines.length ? (openBlock(), createElementBlock("svg", {
          key: 0,
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("defs", null, [
            createElementVNode("radialGradient", {
              id: state.flylineGradientId,
              cx: "50%",
              cy: "50%",
              r: "50%"
            }, _hoisted_5$n, 8, _hoisted_2$u),
            createElementVNode("radialGradient", {
              id: state.haloGradientId,
              cx: "50%",
              cy: "50%",
              r: "50%"
            }, _hoisted_9$g, 8, _hoisted_6$l)
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(state.flylinePoints, (point) => {
            return openBlock(), createElementBlock("g", {
              key: point.key + Math.random()
            }, [
              createElementVNode("defs", null, [
                point.halo.show ? (openBlock(), createElementBlock("circle", {
                  key: 0,
                  id: `halo${state.unique}${point.key}`,
                  cx: point.coordinate[0],
                  cy: point.coordinate[1]
                }, [
                  createElementVNode("animate", {
                    attributeName: "r",
                    values: `1;${point.halo.radius}`,
                    dur: `${point.halo.time}s`,
                    repeatCount: "indefinite"
                  }, null, 8, _hoisted_11$a),
                  createElementVNode("animate", {
                    attributeName: "opacity",
                    values: "1;0",
                    dur: `${point.halo.time}s`,
                    repeatCount: "indefinite"
                  }, null, 8, _hoisted_12$9)
                ], 8, _hoisted_10$c)) : createCommentVNode("", true)
              ]),
              createElementVNode("mask", {
                id: `mask${state.unique}${point.key}`
              }, [
                point.halo.show ? (openBlock(), createElementBlock("use", {
                  key: 0,
                  "xlink:href": `#halo${state.unique}${point.key}`,
                  fill: `url(#${state.haloGradientId})`
                }, null, 8, _hoisted_14$8)) : createCommentVNode("", true)
              ], 8, _hoisted_13$9),
              point.halo.show ? (openBlock(), createElementBlock("use", {
                key: 0,
                "xlink:href": `#halo${state.unique}${point.key}`,
                fill: point.halo.color,
                mask: `url(#mask${state.unique}${point.key})`
              }, null, 8, _hoisted_15$6)) : createCommentVNode("", true),
              point.icon.show ? (openBlock(), createElementBlock("image", {
                key: 1,
                "xlink:href": point.icon.src,
                width: point.icon.width,
                height: point.icon.height,
                x: point.icon.x,
                y: point.icon.y
              }, null, 8, _hoisted_16$6)) : createCommentVNode("", true),
              point.text.show ? (openBlock(), createElementBlock("text", {
                key: 2,
                style: normalizeStyle(`fontSize:${point.text.fontSize}px;color:${point.text.color}`),
                fill: point.text.color,
                x: point.text.x,
                y: point.text.y
              }, toDisplayString(point.name), 13, _hoisted_17$6)) : createCommentVNode("", true)
            ]);
          }), 128)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(state.flylines, (line2, i) => {
            return openBlock(), createElementBlock("g", {
              key: line2.key + Math.random()
            }, [
              createElementVNode("defs", null, [
                createElementVNode("path", {
                  id: line2.key,
                  ref_for: true,
                  ref: line2.key,
                  d: line2.d,
                  fill: "transparent"
                }, null, 8, _hoisted_18$5)
              ]),
              createElementVNode("use", {
                "xlink:href": `#${line2.key}`,
                "stroke-width": line2.width,
                stroke: line2.orbitColor
              }, null, 8, _hoisted_19$5),
              createElementVNode("mask", {
                id: `mask${state.unique}${line2.key}`
              }, [
                createElementVNode("circle", {
                  cx: "0",
                  cy: "0",
                  r: line2.radius,
                  fill: `url(#${state.flylineGradientId})`
                }, [
                  createElementVNode("animateMotion", {
                    dur: line2.time,
                    path: line2.d,
                    rotate: "auto",
                    repeatCount: "indefinite"
                  }, null, 8, _hoisted_22$3)
                ], 8, _hoisted_21$4)
              ], 8, _hoisted_20$4),
              state.flylineLengths[i] ? (openBlock(), createElementBlock("use", {
                key: 0,
                "xlink:href": `#${line2.key}`,
                "stroke-width": line2.width,
                stroke: line2.color,
                mask: `url(#mask${state.unique}${line2.key})`
              }, [
                createElementVNode("animate", {
                  attributeName: "stroke-dasharray",
                  from: `0, ${state.flylineLengths[i]}`,
                  to: `${state.flylineLengths[i]}, 0`,
                  dur: line2.time,
                  repeatCount: "indefinite"
                }, null, 8, _hoisted_24$2)
              ], 8, _hoisted_23$2)) : createCommentVNode("", true)
            ]);
          }), 128))
        ], 8, _hoisted_1$v)) : createCommentVNode("", true)
      ], 4);
    };
  }
};
const FlylineChartEnhancedPlugin = {
  install(app) {
    app.component("DvFlylineChartEnhanced", _sfc_main$x);
  }
};
var index_vue_vue_type_style_index_0_lang$w = "";
const _hoisted_1$u = ["width", "height"];
const _hoisted_2$t = ["id"];
const _hoisted_3$r = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#fff",
  "stop-opacity": "1"
}, null, -1);
const _hoisted_4$p = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#fff",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_5$m = [
  _hoisted_3$r,
  _hoisted_4$p
];
const _hoisted_6$k = ["id"];
const _hoisted_7$j = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#fff",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_8$f = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#fff",
  "stop-opacity": "1"
}, null, -1);
const _hoisted_9$f = [
  _hoisted_7$j,
  _hoisted_8$f
];
const _hoisted_10$b = ["id", "cx", "cy"];
const _hoisted_11$9 = ["values", "dur"];
const _hoisted_12$8 = ["dur"];
const _hoisted_13$8 = ["xlink:href", "width", "height", "x", "y"];
const _hoisted_14$7 = ["id"];
const _hoisted_15$5 = ["xlink:href", "fill"];
const _hoisted_16$5 = ["xlink:href", "fill", "mask"];
const _hoisted_17$5 = ["id", "d"];
const _hoisted_18$4 = ["xlink:href", "stroke-width", "stroke"];
const _hoisted_19$4 = ["xlink:href", "stroke-width", "stroke", "mask"];
const _hoisted_20$3 = ["from", "to", "dur"];
const _hoisted_21$3 = ["id"];
const _hoisted_22$2 = ["r", "fill"];
const _hoisted_23$1 = ["dur", "path"];
const _hoisted_24$1 = ["xlink:href", "width", "height", "x", "y"];
const _hoisted_25$1 = ["fill", "x", "y"];
const _sfc_main$w = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    dev: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const id = uuid();
    const flylineChart = ref(null);
    const { width, height } = autoResize(flylineChart, onResize, afterAutoResizeMixinInit);
    const state = reactive({
      unique: Math.random(),
      maskId: `flyline-mask-id-${id}`,
      maskCircleId: `mask-circle-id-${id}`,
      gradientId: `gradient-id-${id}`,
      gradient2Id: `gradient2-id-${id}`,
      defaultConfig: {
        centerPoint: [0, 0],
        points: [],
        lineWidth: 1,
        orbitColor: "rgba(103, 224, 227, .2)",
        flylineColor: "#ffde93",
        k: -0.5,
        curvature: 5,
        flylineRadius: 100,
        duration: [20, 30],
        relative: true,
        bgImgUrl: "",
        text: {
          offset: [0, 15],
          color: "#ffdb5c",
          fontSize: 12
        },
        halo: {
          show: true,
          duration: 30,
          color: "#fb7293",
          radius: 120
        },
        centerPointImg: {
          width: 40,
          height: 40,
          url: ""
        },
        pointsImg: {
          width: 15,
          height: 15,
          url: ""
        }
      },
      mergedConfig: null,
      paths: [],
      lengths: [],
      times: [],
      texts: []
    });
    let instance;
    onMounted(() => {
      instance = getCurrentInstance();
    });
    watch(() => props.config, () => {
      calcData();
    }, {
      deep: true
    });
    function afterAutoResizeMixinInit() {
      calcData();
    }
    function onResize() {
      calcData();
    }
    async function calcData() {
      mergeConfig();
      createFlylinePaths();
      await calcLineLengths();
      calcTimes();
      calcTexts();
    }
    function mergeConfig() {
      const mergedConfig = deepMerge$1(deepClone(state.defaultConfig, true), props.config || {});
      const { points } = mergedConfig;
      mergedConfig.points = points.map((item) => {
        if (item instanceof Array)
          return { position: item, text: "" };
        return item;
      });
      state.mergedConfig = mergedConfig;
    }
    function createFlylinePaths() {
      let { centerPoint, points } = state.mergedConfig;
      const { relative } = state.mergedConfig;
      points = points.map(({ position }) => position);
      if (relative) {
        centerPoint = [width.value * centerPoint[0], height.value * centerPoint[1]];
        points = points.map(([x, y]) => [width.value * x, height.value * y]);
      }
      state.paths = points.map((point) => getPath(centerPoint, point));
    }
    function getPath(center, point) {
      const controlPoint = getControlPoint(center, point);
      return [point, controlPoint, center];
    }
    function getControlPoint([sx, sy], [ex, ey]) {
      const { curvature, k } = state.mergedConfig;
      const [mx, my] = [(sx + ex) / 2, (sy + ey) / 2];
      const distance = getPointDistance([sx, sy], [ex, ey]);
      const targetLength = distance / curvature;
      const disDived = targetLength / 2;
      let [dx, dy] = [mx, my];
      do {
        dx += disDived;
        dy = getKLinePointByx(k, [mx, my], dx)[1];
      } while (getPointDistance([mx, my], [dx, dy]) < targetLength);
      return [dx, dy];
    }
    function getKLinePointByx(k, [lx, ly], x) {
      const y = ly - k * lx + k * x;
      return [x, y];
    }
    async function calcLineLengths() {
      await nextTick();
      state.lengths = state.paths.map((foo, i) => instance.proxy.$refs[`path${i}`][0].getTotalLength());
    }
    function calcTimes() {
      const { duration, points } = state.mergedConfig;
      state.times = points.map((foo) => randomExtend(...duration) / 10);
    }
    function calcTexts() {
      const { points } = state.mergedConfig;
      state.texts = points.map(({ text }) => text);
    }
    function consoleClickPos({ offsetX, offsetY }) {
      if (!props.dev)
        return;
      const relativeX = (offsetX / width.value).toFixed(2);
      const relativeY = (offsetY / height.value).toFixed(2);
      console.warn(`dv-flyline-chart DEV: 
 Click Position is [${offsetX}, ${offsetY}] 
 Relative Position is [${relativeX}, ${relativeY}]`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "flylineChart",
        ref: flylineChart,
        class: "dv-flyline-chart",
        style: normalizeStyle(`background-image: url(${state.mergedConfig ? state.mergedConfig.bgImgUrl : ""})`),
        onClick: consoleClickPos
      }, [
        state.mergedConfig ? (openBlock(), createElementBlock("svg", {
          key: 0,
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("defs", null, [
            createElementVNode("radialGradient", {
              id: state.gradientId,
              cx: "50%",
              cy: "50%",
              r: "50%"
            }, _hoisted_5$m, 8, _hoisted_2$t),
            createElementVNode("radialGradient", {
              id: state.gradient2Id,
              cx: "50%",
              cy: "50%",
              r: "50%"
            }, _hoisted_9$f, 8, _hoisted_6$k),
            state.paths[0] ? (openBlock(), createElementBlock("circle", {
              key: 0,
              id: `circle${state.paths[0].toString()}`,
              cx: state.paths[0][2][0],
              cy: state.paths[0][2][1]
            }, [
              createElementVNode("animate", {
                attributeName: "r",
                values: `1;${state.mergedConfig.halo.radius}`,
                dur: state.mergedConfig.halo.duration / 10 + "s",
                repeatCount: "indefinite"
              }, null, 8, _hoisted_11$9),
              createElementVNode("animate", {
                attributeName: "opacity",
                values: "1;0",
                dur: state.mergedConfig.halo.duration / 10 + "s",
                repeatCount: "indefinite"
              }, null, 8, _hoisted_12$8)
            ], 8, _hoisted_10$b)) : createCommentVNode("", true)
          ]),
          state.paths[0] ? (openBlock(), createElementBlock("image", {
            key: 0,
            "xlink:href": state.mergedConfig.centerPointImg.url,
            width: state.mergedConfig.centerPointImg.width,
            height: state.mergedConfig.centerPointImg.height,
            x: state.paths[0][2][0] - state.mergedConfig.centerPointImg.width / 2,
            y: state.paths[0][2][1] - state.mergedConfig.centerPointImg.height / 2
          }, null, 8, _hoisted_13$8)) : createCommentVNode("", true),
          createElementVNode("mask", {
            id: `maskhalo${state.paths[0].toString()}`
          }, [
            state.paths[0] ? (openBlock(), createElementBlock("use", {
              key: 0,
              "xlink:href": `#circle${state.paths[0].toString()}`,
              fill: `url(#${state.gradient2Id})`
            }, null, 8, _hoisted_15$5)) : createCommentVNode("", true)
          ], 8, _hoisted_14$7),
          state.paths[0] && state.mergedConfig.halo.show ? (openBlock(), createElementBlock("use", {
            key: 1,
            "xlink:href": `#circle${state.paths[0].toString()}`,
            fill: state.mergedConfig.halo.color,
            mask: `url(#maskhalo${state.paths[0].toString()})`
          }, null, 8, _hoisted_16$5)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(state.paths, (path, i) => {
            return openBlock(), createElementBlock("g", { key: i }, [
              createElementVNode("defs", null, [
                createElementVNode("path", {
                  id: `path${path.toString()}`,
                  ref_for: true,
                  ref: `path${i}`,
                  d: `M${path[0].toString()} Q${path[1].toString()} ${path[2].toString()}`,
                  fill: "transparent"
                }, null, 8, _hoisted_17$5)
              ]),
              createElementVNode("use", {
                "xlink:href": `#path${path.toString()}`,
                "stroke-width": state.mergedConfig.lineWidth,
                stroke: state.mergedConfig.orbitColor
              }, null, 8, _hoisted_18$4),
              state.lengths[i] ? (openBlock(), createElementBlock("use", {
                key: 0,
                "xlink:href": `#path${path.toString()}`,
                "stroke-width": state.mergedConfig.lineWidth,
                stroke: state.mergedConfig.flylineColor,
                mask: `url(#mask${state.unique}${path.toString()})`
              }, [
                createElementVNode("animate", {
                  attributeName: "stroke-dasharray",
                  from: `0, ${state.lengths[i]}`,
                  to: `${state.lengths[i]}, 0`,
                  dur: state.times[i] || 0,
                  repeatCount: "indefinite"
                }, null, 8, _hoisted_20$3)
              ], 8, _hoisted_19$4)) : createCommentVNode("", true),
              createElementVNode("mask", {
                id: `mask${state.unique}${path.toString()}`
              }, [
                createElementVNode("circle", {
                  cx: "0",
                  cy: "0",
                  r: state.mergedConfig.flylineRadius,
                  fill: `url(#${state.gradientId})`
                }, [
                  createElementVNode("animateMotion", {
                    dur: state.times[i] || 0,
                    path: `M${path[0].toString()} Q${path[1].toString()} ${path[2].toString()}`,
                    rotate: "auto",
                    repeatCount: "indefinite"
                  }, null, 8, _hoisted_23$1)
                ], 8, _hoisted_22$2)
              ], 8, _hoisted_21$3),
              createElementVNode("image", {
                "xlink:href": state.mergedConfig.pointsImg.url,
                width: state.mergedConfig.pointsImg.width,
                height: state.mergedConfig.pointsImg.height,
                x: path[0][0] - state.mergedConfig.pointsImg.width / 2,
                y: path[0][1] - state.mergedConfig.pointsImg.height / 2
              }, null, 8, _hoisted_24$1),
              createElementVNode("text", {
                style: normalizeStyle(`fontSize:${state.mergedConfig.text.fontSize}px;`),
                fill: state.mergedConfig.text.color,
                x: path[0][0] + state.mergedConfig.text.offset[0],
                y: path[0][1] + state.mergedConfig.text.offset[1]
              }, toDisplayString(state.texts[i]), 13, _hoisted_25$1)
            ]);
          }), 128))
        ], 8, _hoisted_1$u)) : createCommentVNode("", true)
      ], 4);
    };
  }
};
const FlylineChartPlugin = {
  install(app) {
    app.component("DvFlylineChart", _sfc_main$w);
  }
};
var index_vue_vue_type_style_index_0_lang$v = "";
const _hoisted_1$t = { class: "ranking-info" };
const _hoisted_2$s = { class: "rank" };
const _hoisted_3$q = ["innerHTML"];
const _hoisted_4$o = { class: "ranking-value" };
const _hoisted_5$l = { class: "ranking-column" };
const _hoisted_6$j = /* @__PURE__ */ createElementVNode("div", { class: "shine" }, null, -1);
const _hoisted_7$i = [
  _hoisted_6$j
];
const _sfc_main$v = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const scrollRankingBoard = ref(null);
    const { width, height } = autoResize(scrollRankingBoard, onResize, afterAutoResizeMixinInit);
    const state = reactive({
      defaultConfig: {
        data: [],
        rowNum: 5,
        waitTime: 2e3,
        carousel: "single",
        unit: "",
        sort: true,
        valueFormatter: null
      },
      mergedConfig: null,
      rowsData: [],
      rows: [],
      heights: [],
      avgHeight: 0,
      animationIndex: 0,
      animationHandler: "",
      updater: 0
    });
    watch(() => props.config, () => {
      stopAnimation();
      calcData();
    }, {
      deep: true
    });
    onUnmounted(() => {
      stopAnimation();
    });
    function afterAutoResizeMixinInit() {
      calcData();
    }
    function onResize() {
      if (!state.mergedConfig)
        return;
      calcHeights(true);
    }
    function calcData() {
      mergeConfig();
      calcRowsData();
      calcHeights();
      animation(true);
    }
    function mergeConfig() {
      state.mergedConfig = deepMerge$1(deepClone(state.defaultConfig, true), props.config || {});
    }
    function calcRowsData() {
      let { data } = state.mergedConfig;
      const { rowNum, sort } = state.mergedConfig;
      sort && data.sort(({ value: a }, { value: b }) => {
        if (a > b)
          return -1;
        else if (a < b)
          return 1;
        else
          return 0;
      });
      const value = data.map(({ value: value2 }) => value2);
      const min = Math.min(...value) || 0;
      const minAbs = Math.abs(min);
      const max = Math.max(...value) || 0;
      const total = max + minAbs;
      data = data.map((row, i) => ({ ...row, ranking: i + 1, percent: (row.value + minAbs) / total * 100 }));
      const rowLength = data.length;
      if (rowLength > rowNum && rowLength < 2 * rowNum)
        data = [...data, ...data];
      data = data.map((d, i) => ({ ...d, scroll: i }));
      state.rowsData = data;
      state.rows = data;
    }
    function calcHeights(onresize = false) {
      const { rowNum, data } = state.mergedConfig;
      const avgHeight = height.value / rowNum;
      state.avgHeight = avgHeight;
      if (!onresize)
        state.heights = new Array(data.length).fill(avgHeight);
    }
    async function animation(start = false) {
      const { waitTime, carousel, rowNum } = state.mergedConfig;
      const rowLength = state.rowsData.length;
      if (rowNum >= rowLength)
        return;
      const { updater } = state;
      if (start) {
        await new Promise((resolve) => setTimeout(resolve, waitTime));
        if (updater !== state.updater)
          return;
      }
      const animationNum = carousel === "single" ? 1 : rowNum;
      const rows = state.rowsData.slice(state.animationIndex);
      rows.push(...state.rowsData.slice(0, state.animationIndex));
      state.rows = rows.slice(0, rowNum + 1);
      state.heights = new Array(rowLength).fill(state.avgHeight);
      await new Promise((resolve) => setTimeout(resolve, 300));
      if (updater !== state.updater)
        return;
      state.heights.splice(0, animationNum, ...new Array(animationNum).fill(0));
      state.animationIndex += animationNum;
      const back = state.animationIndex - rowLength;
      if (back >= 0)
        state.animationIndex = back;
      state.animationHandler = setTimeout(animation, waitTime - 300);
    }
    function stopAnimation() {
      state.updater = (state.updater + 1) % 999999;
      if (!state.animationHandler)
        return;
      clearTimeout(state.animationHandler);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "scrollRankingBoard",
        ref: scrollRankingBoard,
        class: "dv-scroll-ranking-board"
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(state.rows, (item, i) => {
          return openBlock(), createElementBlock("div", {
            key: item.toString() + item.scroll,
            class: "row-item",
            style: normalizeStyle(`height: ${state.heights[i]}px;`)
          }, [
            createElementVNode("div", _hoisted_1$t, [
              createElementVNode("div", _hoisted_2$s, " No." + toDisplayString(item.ranking), 1),
              createElementVNode("div", {
                class: "info-name",
                innerHTML: item.name
              }, null, 8, _hoisted_3$q),
              createElementVNode("div", _hoisted_4$o, toDisplayString(state.mergedConfig.valueFormatter ? state.mergedConfig.valueFormatter(item) : item.value + state.mergedConfig.unit), 1)
            ]),
            createElementVNode("div", _hoisted_5$l, [
              createElementVNode("div", {
                class: "inside-column",
                style: normalizeStyle(`width: ${item.percent}%;`)
              }, _hoisted_7$i, 4)
            ])
          ], 4);
        }), 128))
      ], 512);
    };
  }
};
const ScrollRankingBoardPlugin = {
  install(app) {
    app.component("DvScrollRankingBoard", _sfc_main$v);
  }
};
var index_vue_vue_type_style_index_0_lang$u = "";
const _hoisted_1$s = ["align", "innerHTML"];
const _hoisted_2$r = ["align", "onClick", "onMouseenter", "innerHTML"];
const _sfc_main$u = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["mouseover", "click"],
  setup(__props, { expose, emit: emitEvent }) {
    const props = __props;
    const scrollBoard = ref(null);
    const { width, height } = autoResize(scrollBoard, onResize, afterAutoResizeMixinInit);
    const state = reactive({
      defaultConfig: {
        header: [],
        data: [],
        rowNum: 5,
        headerBGC: "#00BAFF",
        oddRowBGC: "#003B51",
        evenRowBGC: "#0A2732",
        waitTime: 2e3,
        headerHeight: 35,
        columnWidth: [],
        align: [],
        index: false,
        indexHeader: "#",
        carousel: "single",
        hoverPause: true
      },
      mergedConfig: null,
      header: [],
      rowsData: [],
      rows: [],
      widths: [],
      heights: [],
      avgHeight: 0,
      aligns: [],
      animationIndex: 0,
      animationHandler: "",
      updater: 0,
      needCalc: false
    });
    watch(() => props.config, (v) => {
      stopAnimation();
      calcData();
    }, { deep: true });
    onUnmounted(() => {
      stopAnimation();
    });
    expose({
      updateRows
    });
    function handleClick(ri, ci, row, ceil) {
      const { ceils, rowIndex } = row;
      emitEvent("click", {
        row: ceils,
        ceil,
        rowIndex,
        columnIndex: ci
      });
    }
    function handleHover(enter, ri, ci, row, ceil) {
      if (enter) {
        const { ceils, rowIndex } = row;
        emitEvent("mouseover", {
          row: ceils,
          ceil,
          rowIndex,
          columnIndex: ci
        });
      }
      if (!state.mergedConfig.hoverPause)
        return;
      if (enter)
        stopAnimation();
      else
        animation(true);
    }
    function afterAutoResizeMixinInit() {
      calcData();
    }
    function onResize() {
      if (!state.mergedConfig)
        return;
      calcWidths();
      calcHeights();
    }
    function calcData() {
      mergeConfig();
      calcHeaderData();
      calcRowsData();
      calcWidths();
      calcHeights();
      calcAligns();
      animation(true);
    }
    function mergeConfig() {
      state.mergedConfig = deepMerge$1(deepClone(state.defaultConfig, true), props.config || {});
    }
    function calcHeaderData() {
      let { header } = state.mergedConfig;
      const { index, indexHeader } = state.mergedConfig;
      if (!header.length) {
        header = [];
        return;
      }
      header = [...header];
      if (index)
        header.unshift(indexHeader);
      state.header = header;
    }
    function calcRowsData() {
      let { data } = state.mergedConfig;
      const { index, headerBGC, rowNum } = state.mergedConfig;
      if (index) {
        data = data.map((row, i) => {
          row = [...row];
          const indexTag = `<span class="index" style="background-color: ${headerBGC};">${i + 1}</span>`;
          row.unshift(indexTag);
          return row;
        });
      }
      data = data.map((ceils, i) => ({ ceils, rowIndex: i }));
      const rowLength = data.length;
      if (rowLength > rowNum && rowLength < 2 * rowNum)
        data = [...data, ...data];
      data = data.map((d, i) => ({ ...d, scroll: i }));
      state.rowsData = data;
      state.rows = data;
    }
    function calcWidths() {
      const { columnWidth, header } = state.mergedConfig;
      const usedWidth = columnWidth.reduce((all, w) => all + w, 0);
      let columnNum = 0;
      if (state.rowsData[0])
        columnNum = state.rowsData[0].ceils.length;
      else if (header.length)
        columnNum = header.length;
      const avgWidth = (width.value - usedWidth) / (columnNum - columnWidth.length);
      const widths = new Array(columnNum).fill(avgWidth);
      state.widths = deepMerge$1(widths, columnWidth);
    }
    function calcHeights(onresize = false) {
      const { headerHeight, rowNum, data } = state.mergedConfig;
      let allHeight = height.value;
      if (state.header.length)
        allHeight -= headerHeight;
      const avgHeight = allHeight / rowNum;
      state.avgHeight = avgHeight;
      if (!onresize)
        state.heights = new Array(data.length).fill(avgHeight);
    }
    function calcAligns() {
      const columnNum = state.header.length;
      const aligns = new Array(columnNum).fill("left");
      const { align } = state.mergedConfig;
      state.aligns = deepMerge$1(aligns, align);
    }
    async function animation(start = false) {
      if (state.needCalc) {
        calcRowsData();
        calcHeights();
        state.needCalc = false;
      }
      const { waitTime, carousel, rowNum } = state.mergedConfig;
      const { updater } = state;
      const rowLength = state.rowsData.length;
      if (rowNum >= rowLength)
        return;
      if (start)
        await new Promise((resolve) => setTimeout(resolve, waitTime));
      if (updater !== state.updater)
        return;
      const animationNum = carousel === "single" ? 1 : rowNum;
      const rows = state.rowsData.slice(state.animationIndex);
      rows.push(...state.rowsData.slice(0, state.animationIndex));
      state.rows = rows.slice(0, carousel === "page" ? rowNum * 2 : rowNum + 1);
      state.heights = new Array(rowLength).fill(state.avgHeight);
      await new Promise((resolve) => setTimeout(resolve, 300));
      if (updater !== state.updater)
        return;
      state.heights.splice(0, animationNum, ...new Array(animationNum).fill(0));
      state.animationIndex += animationNum;
      const back = state.animationIndex - rowLength;
      if (back >= 0)
        state.animationIndex = back;
      state.animationHandler = setTimeout(animation, waitTime - 300);
    }
    function stopAnimation() {
      state.updater = (state.updater + 1) % 999999;
      if (!state.animationHandler)
        return;
      clearTimeout(state.animationHandler);
    }
    function updateRows(rows, animationIndex) {
      state.mergedConfig = {
        ...state.mergedConfig,
        data: [...rows]
      };
      state.needCalc = true;
      if (typeof animationIndex === "number")
        state.animationIndex = animationIndex;
      if (!state.animationHandler)
        animation(true);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "scrollBoard",
        ref: scrollBoard,
        class: "dv-scroll-board"
      }, [
        state.header.length && state.mergedConfig ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "header",
          style: normalizeStyle(`background-color: ${state.mergedConfig.headerBGC};`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(state.header, (headerItem, i) => {
            return openBlock(), createElementBlock("div", {
              key: `${headerItem}${i}`,
              class: "header-item",
              style: normalizeStyle(`
          height: ${state.mergedConfig.headerHeight}px;
          line-height: ${state.mergedConfig.headerHeight}px;
          width: ${state.widths[i]}px;
        `),
              align: state.aligns[i],
              innerHTML: headerItem
            }, null, 12, _hoisted_1$s);
          }), 128))
        ], 4)) : createCommentVNode("", true),
        state.mergedConfig ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "rows",
          style: normalizeStyle(`height: ${unref(height) - (state.header.length ? state.mergedConfig.headerHeight : 0)}px;`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(state.rows, (row, ri) => {
            return openBlock(), createElementBlock("div", {
              key: `${row.toString()}${row.scroll}`,
              class: "row-item",
              style: normalizeStyle(`
          height: ${state.heights[ri]}px;
          line-height: ${state.heights[ri]}px;
          background-color: ${state.mergedConfig[row.rowIndex % 2 === 0 ? "evenRowBGC" : "oddRowBGC"]};
        `)
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(row.ceils, (ceil, ci) => {
                return openBlock(), createElementBlock("div", {
                  key: `${ceil}${ri}${ci}`,
                  class: "ceil",
                  style: normalizeStyle(`width: ${state.widths[ci]}px;`),
                  align: state.aligns[ci],
                  onClick: ($event) => handleClick(ri, ci, row, ceil),
                  onMouseenter: ($event) => handleHover(true, ri, ci, row, ceil),
                  onMouseleave: _cache[0] || (_cache[0] = ($event) => handleHover(false)),
                  innerHTML: ceil
                }, null, 44, _hoisted_2$r);
              }), 128))
            ], 4);
          }), 128))
        ], 4)) : createCommentVNode("", true)
      ], 512);
    };
  }
};
const ScrollBoardPlugin = {
  install(app) {
    app.component("DvScrollBoard", _sfc_main$u);
  }
};
var lib = {};
var charts_class = {};
var util = {};
var _interopRequireDefault$c = interopRequireDefault.exports;
Object.defineProperty(util, "__esModule", {
  value: true
});
util.filterNonNumber = filterNonNumber;
util.deepMerge = deepMerge;
util.mulAdd = mulAdd;
util.mergeSameStackData = mergeSameStackData;
util.getTwoPointDistance = getTwoPointDistance;
util.getLinearGradientColor = getLinearGradientColor;
util.getPolylineLength = getPolylineLength;
util.getPointToLineDistance = getPointToLineDistance;
util.initNeedSeries = initNeedSeries;
util.radianToAngle = radianToAngle;
var _toConsumableArray2$9 = _interopRequireDefault$c(toConsumableArray.exports);
var _typeof2$8 = _interopRequireDefault$c(_typeof.exports);
var _util$c = util$1;
function filterNonNumber(array) {
  return array.filter(function(n) {
    return typeof n === "number";
  });
}
function deepMerge(target, merged) {
  for (var key in merged) {
    if (target[key] && (0, _typeof2$8["default"])(target[key]) === "object") {
      deepMerge(target[key], merged[key]);
      continue;
    }
    if ((0, _typeof2$8["default"])(merged[key]) === "object") {
      target[key] = (0, _util$c.deepClone)(merged[key], true);
      continue;
    }
    target[key] = merged[key];
  }
  return target;
}
function mulAdd(nums) {
  nums = filterNonNumber(nums);
  return nums.reduce(function(all, num) {
    return all + num;
  }, 0);
}
function mergeSameStackData(item, series) {
  var stack = item.stack;
  if (!stack)
    return (0, _toConsumableArray2$9["default"])(item.data);
  var stacks = series.filter(function(_ref) {
    var s = _ref.stack;
    return s === stack;
  });
  var index = stacks.findIndex(function(_ref2) {
    var d = _ref2.data;
    return d === item.data;
  });
  var datas = stacks.splice(0, index + 1).map(function(_ref3) {
    var data = _ref3.data;
    return data;
  });
  var dataLength = datas[0].length;
  return new Array(dataLength).fill(0).map(function(foo, i) {
    return mulAdd(datas.map(function(d) {
      return d[i];
    }));
  });
}
function getTwoPointDistance(pointOne, pointTwo) {
  var minusX = Math.abs(pointOne[0] - pointTwo[0]);
  var minusY = Math.abs(pointOne[1] - pointTwo[1]);
  return Math.sqrt(minusX * minusX + minusY * minusY);
}
function getLinearGradientColor(ctx, begin, end, color2) {
  if (!ctx || !begin || !end || !color2.length)
    return;
  var colors = color2;
  typeof colors === "string" && (colors = [color2, color2]);
  var linearGradientColor = ctx.createLinearGradient.apply(ctx, (0, _toConsumableArray2$9["default"])(begin).concat((0, _toConsumableArray2$9["default"])(end)));
  var colorGap = 1 / (colors.length - 1);
  colors.forEach(function(c, i) {
    return linearGradientColor.addColorStop(colorGap * i, c);
  });
  return linearGradientColor;
}
function getPolylineLength(points) {
  var lineSegments = new Array(points.length - 1).fill(0).map(function(foo, i) {
    return [points[i], points[i + 1]];
  });
  var lengths = lineSegments.map(function(item) {
    return getTwoPointDistance.apply(void 0, (0, _toConsumableArray2$9["default"])(item));
  });
  return mulAdd(lengths);
}
function getPointToLineDistance(point, linePointOne, linePointTwo) {
  var a = getTwoPointDistance(point, linePointOne);
  var b = getTwoPointDistance(point, linePointTwo);
  var c = getTwoPointDistance(linePointOne, linePointTwo);
  return 0.5 * Math.sqrt((a + b + c) * (a + b - c) * (a + c - b) * (b + c - a)) / c;
}
function initNeedSeries(series, config2, type) {
  series = series.filter(function(_ref4) {
    var st = _ref4.type;
    return st === type;
  });
  series = series.map(function(item) {
    return deepMerge((0, _util$c.deepClone)(config2, true), item);
  });
  return series.filter(function(_ref5) {
    var show = _ref5.show;
    return show;
  });
}
function radianToAngle(radian) {
  return radian / Math.PI * 180;
}
var _interopRequireDefault$b = interopRequireDefault.exports;
var _defineProperty2$9 = _interopRequireDefault$b(defineProperty.exports);
var _toConsumableArray2$8 = _interopRequireDefault$b(toConsumableArray.exports);
var _cRender = lib$4;
var _graphs = graphs;
var _util$b = util$1;
var _color$2 = lib$3;
var _index$2 = util;
function ownKeys$8(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$8(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$8(Object(source), true).forEach(function(key) {
        (0, _defineProperty2$9["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$8(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var pie$3 = {
  shape: {
    rx: 0,
    ry: 0,
    ir: 0,
    or: 0,
    startAngle: 0,
    endAngle: 0,
    clockWise: true
  },
  validator: function validator(_ref) {
    var shape = _ref.shape;
    var keys = ["rx", "ry", "ir", "or", "startAngle", "endAngle"];
    if (keys.find(function(key) {
      return typeof shape[key] !== "number";
    })) {
      console.error("Pie shape configuration is abnormal!");
      return false;
    }
    return true;
  },
  draw: function draw(_ref2, _ref3) {
    var ctx = _ref2.ctx;
    var shape = _ref3.shape;
    ctx.beginPath();
    var rx = shape.rx, ry = shape.ry, ir = shape.ir, or = shape.or, startAngle = shape.startAngle, endAngle = shape.endAngle, clockWise = shape.clockWise;
    rx = parseInt(rx) + 0.5;
    ry = parseInt(ry) + 0.5;
    ctx.arc(rx, ry, ir > 0 ? ir : 0, startAngle, endAngle, !clockWise);
    var connectPoint1 = (0, _util$b.getCircleRadianPoint)(rx, ry, or, endAngle).map(function(p) {
      return parseInt(p) + 0.5;
    });
    var connectPoint2 = (0, _util$b.getCircleRadianPoint)(rx, ry, ir, startAngle).map(function(p) {
      return parseInt(p) + 0.5;
    });
    ctx.lineTo.apply(ctx, (0, _toConsumableArray2$8["default"])(connectPoint1));
    ctx.arc(rx, ry, or > 0 ? or : 0, endAngle, startAngle, clockWise);
    ctx.lineTo.apply(ctx, (0, _toConsumableArray2$8["default"])(connectPoint2));
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }
};
var agArc = {
  shape: {
    rx: 0,
    ry: 0,
    r: 0,
    startAngle: 0,
    endAngle: 0,
    gradientStartAngle: null,
    gradientEndAngle: null
  },
  validator: function validator2(_ref4) {
    var shape = _ref4.shape;
    var keys = ["rx", "ry", "r", "startAngle", "endAngle"];
    if (keys.find(function(key) {
      return typeof shape[key] !== "number";
    })) {
      console.error("AgArc shape configuration is abnormal!");
      return false;
    }
    return true;
  },
  draw: function draw2(_ref5, _ref6) {
    var ctx = _ref5.ctx;
    var shape = _ref6.shape, style = _ref6.style;
    var gradient = style.gradient;
    gradient = gradient.map(function(cv) {
      return (0, _color$2.getColorFromRgbValue)(cv);
    });
    if (gradient.length === 1) {
      gradient = [gradient[0], gradient[0]];
    }
    var gradientArcNum = gradient.length - 1;
    var gradientStartAngle = shape.gradientStartAngle, gradientEndAngle = shape.gradientEndAngle, startAngle = shape.startAngle, endAngle = shape.endAngle, r = shape.r, rx = shape.rx, ry = shape.ry;
    if (gradientStartAngle === null)
      gradientStartAngle = startAngle;
    if (gradientEndAngle === null)
      gradientEndAngle = endAngle;
    var angleGap = (gradientEndAngle - gradientStartAngle) / gradientArcNum;
    if (angleGap === Math.PI * 2)
      angleGap = Math.PI * 2 - 1e-3;
    for (var i = 0; i < gradientArcNum; i++) {
      ctx.beginPath();
      var startPoint = (0, _util$b.getCircleRadianPoint)(rx, ry, r, startAngle + angleGap * i);
      var endPoint = (0, _util$b.getCircleRadianPoint)(rx, ry, r, startAngle + angleGap * (i + 1));
      var color2 = (0, _index$2.getLinearGradientColor)(ctx, startPoint, endPoint, [gradient[i], gradient[i + 1]]);
      var arcStartAngle = startAngle + angleGap * i;
      var arcEndAngle = startAngle + angleGap * (i + 1);
      var doBreak = false;
      if (arcEndAngle > endAngle) {
        arcEndAngle = endAngle;
        doBreak = true;
      }
      ctx.arc(rx, ry, r, arcStartAngle, arcEndAngle);
      ctx.strokeStyle = color2;
      ctx.stroke();
      if (doBreak)
        break;
    }
  }
};
var numberText = {
  shape: {
    number: [],
    content: "",
    position: [0, 0],
    toFixed: 0,
    rowGap: 0,
    formatter: null
  },
  validator: function validator3(_ref7) {
    var shape = _ref7.shape;
    var number = shape.number, content = shape.content, position = shape.position;
    if (!(number instanceof Array) || typeof content !== "string" || !(position instanceof Array)) {
      console.error("NumberText shape configuration is abnormal!");
      return false;
    }
    return true;
  },
  draw: function draw3(_ref8, _ref9) {
    var ctx = _ref8.ctx;
    var shape = _ref9.shape;
    var number = shape.number, content = shape.content, toFixed = shape.toFixed, rowGap = shape.rowGap, formatter = shape.formatter;
    var textSegments = content.split("{nt}");
    var textString = "";
    textSegments.forEach(function(t, i) {
      var currentNumber = number[i];
      if (typeof currentNumber !== "number")
        currentNumber = "";
      if (typeof currentNumber === "number") {
        currentNumber = currentNumber.toFixed(toFixed);
        if (typeof formatter === "function")
          currentNumber = formatter(currentNumber);
      }
      textString += t + (currentNumber || "");
    });
    _graphs.text.draw({
      ctx
    }, {
      shape: _objectSpread$8(_objectSpread$8({}, shape), {}, {
        content: textString,
        rowGap
      })
    });
  }
};
var lineIcon = {
  shape: {
    x: 0,
    y: 0,
    w: 0,
    h: 0
  },
  validator: function validator4(_ref10) {
    var shape = _ref10.shape;
    var x = shape.x, y = shape.y, w = shape.w, h = shape.h;
    if (typeof x !== "number" || typeof y !== "number" || typeof w !== "number" || typeof h !== "number") {
      console.error("lineIcon shape configuration is abnormal!");
      return false;
    }
    return true;
  },
  draw: function draw4(_ref11, _ref12) {
    var ctx = _ref11.ctx;
    var shape = _ref12.shape;
    ctx.beginPath();
    var x = shape.x, y = shape.y, w = shape.w, h = shape.h;
    var halfH = h / 2;
    ctx.strokeStyle = ctx.fillStyle;
    ctx.moveTo(x, y + halfH);
    ctx.lineTo(x + w, y + halfH);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.beginPath();
    var radius = halfH - 5 * 2;
    if (radius <= 0)
      radius = 3;
    ctx.arc(x + w / 2, y + halfH, radius, 0, Math.PI * 2);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "#fff";
    ctx.fill();
  },
  hoverCheck: function hoverCheck(position, _ref13) {
    var shape = _ref13.shape;
    var x = shape.x, y = shape.y, w = shape.w, h = shape.h;
    return (0, _util$b.checkPointIsInRect)(position, x, y, w, h);
  },
  setGraphCenter: function setGraphCenter(e, _ref14) {
    var shape = _ref14.shape, style = _ref14.style;
    var x = shape.x, y = shape.y, w = shape.w, h = shape.h;
    style.graphCenter = [x + w / 2, y + h / 2];
  }
};
(0, _cRender.extendNewGraph)("pie", pie$3);
(0, _cRender.extendNewGraph)("agArc", agArc);
(0, _cRender.extendNewGraph)("numberText", numberText);
(0, _cRender.extendNewGraph)("lineIcon", lineIcon);
var core = {};
var mergeColor$1 = {};
var config = {};
var color = {};
Object.defineProperty(color, "__esModule", {
  value: true
});
color.colorConfig = void 0;
var colorConfig = ["#37a2da", "#32c5e9", "#67e0e3", "#9fe6b8", "#ffdb5c", "#ff9f7f", "#fb7293", "#e062ae", "#e690d1", "#e7bcf3", "#9d96f5", "#8378ea", "#96bfff"];
color.colorConfig = colorConfig;
var grid$2 = {};
Object.defineProperty(grid$2, "__esModule", {
  value: true
});
grid$2.gridConfig = void 0;
var gridConfig = {
  left: "10%",
  right: "10%",
  top: 60,
  bottom: 60,
  style: {
    fill: "rgba(0, 0, 0, 0)"
  },
  rLevel: -30,
  animationCurve: "easeOutCubic",
  animationFrame: 30
};
grid$2.gridConfig = gridConfig;
var axis$2 = {};
Object.defineProperty(axis$2, "__esModule", {
  value: true
});
axis$2.yAxisConfig = axis$2.xAxisConfig = void 0;
var xAxisConfig = {
  name: "",
  show: true,
  position: "bottom",
  nameGap: 15,
  nameLocation: "end",
  nameTextStyle: {
    fill: "#333",
    fontSize: 10
  },
  min: "20%",
  max: "20%",
  interval: null,
  minInterval: null,
  maxInterval: null,
  boundaryGap: null,
  splitNumber: 5,
  axisLine: {
    show: true,
    style: {
      stroke: "#333",
      lineWidth: 1
    }
  },
  axisTick: {
    show: true,
    style: {
      stroke: "#333",
      lineWidth: 1
    }
  },
  axisLabel: {
    show: true,
    formatter: null,
    style: {
      fill: "#333",
      fontSize: 10,
      rotate: 0
    }
  },
  splitLine: {
    show: false,
    style: {
      stroke: "#d4d4d4",
      lineWidth: 1
    }
  },
  rLevel: -20,
  animationCurve: "easeOutCubic",
  animationFrame: 50
};
axis$2.xAxisConfig = xAxisConfig;
var yAxisConfig = {
  name: "",
  show: true,
  position: "left",
  nameGap: 15,
  nameLocation: "end",
  nameTextStyle: {
    fill: "#333",
    fontSize: 10
  },
  min: "20%",
  max: "20%",
  interval: null,
  minInterval: null,
  maxInterval: null,
  boundaryGap: null,
  splitNumber: 5,
  axisLine: {
    show: true,
    style: {
      stroke: "#333",
      lineWidth: 1
    }
  },
  axisTick: {
    show: true,
    style: {
      stroke: "#333",
      lineWidth: 1
    }
  },
  axisLabel: {
    show: true,
    formatter: null,
    style: {
      fill: "#333",
      fontSize: 10,
      rotate: 0
    }
  },
  splitLine: {
    show: true,
    style: {
      stroke: "#d4d4d4",
      lineWidth: 1
    }
  },
  rLevel: -20,
  animationCurve: "easeOutCubic",
  animationFrame: 50
};
axis$2.yAxisConfig = yAxisConfig;
var title$2 = {};
Object.defineProperty(title$2, "__esModule", {
  value: true
});
title$2.titleConfig = void 0;
var titleConfig = {
  show: true,
  text: "",
  offset: [0, -20],
  style: {
    fill: "#333",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    textBaseline: "bottom"
  },
  rLevel: 20,
  animationCurve: "easeOutCubic",
  animationFrame: 50
};
title$2.titleConfig = titleConfig;
var line$2 = {};
Object.defineProperty(line$2, "__esModule", {
  value: true
});
line$2.lineConfig = void 0;
var lineConfig = {
  show: true,
  name: "",
  stack: "",
  smooth: false,
  xAxisIndex: 0,
  yAxisIndex: 0,
  data: [],
  lineStyle: {
    lineWidth: 1
  },
  linePoint: {
    show: true,
    radius: 2,
    style: {
      fill: "#fff",
      lineWidth: 1
    }
  },
  lineArea: {
    show: false,
    gradient: [],
    style: {
      opacity: 0.5
    }
  },
  label: {
    show: false,
    position: "top",
    offset: [0, -10],
    formatter: null,
    style: {
      fontSize: 10
    }
  },
  rLevel: 10,
  animationCurve: "easeOutCubic",
  animationFrame: 50
};
line$2.lineConfig = lineConfig;
var bar$2 = {};
Object.defineProperty(bar$2, "__esModule", {
  value: true
});
bar$2.barConfig = void 0;
var barConfig = {
  show: true,
  name: "",
  stack: "",
  shapeType: "normal",
  echelonOffset: 10,
  barWidth: "auto",
  barGap: "30%",
  barCategoryGap: "20%",
  xAxisIndex: 0,
  yAxisIndex: 0,
  data: [],
  backgroundBar: {
    show: false,
    width: "auto",
    style: {
      fill: "rgba(200, 200, 200, .4)"
    }
  },
  label: {
    show: false,
    position: "top",
    offset: [0, -10],
    formatter: null,
    style: {
      fontSize: 10
    }
  },
  gradient: {
    color: [],
    local: true
  },
  barStyle: {},
  independentColor: false,
  independentColors: [],
  rLevel: 0,
  animationCurve: "easeOutCubic",
  animationFrame: 50
};
bar$2.barConfig = barConfig;
var pie$2 = {};
Object.defineProperty(pie$2, "__esModule", {
  value: true
});
pie$2.pieConfig = void 0;
var pieConfig = {
  show: true,
  name: "",
  radius: "50%",
  center: ["50%", "50%"],
  startAngle: -Math.PI / 2,
  roseType: false,
  roseSort: true,
  roseIncrement: "auto",
  data: [],
  insideLabel: {
    show: false,
    formatter: "{percent}%",
    style: {
      fontSize: 10,
      fill: "#fff",
      textAlign: "center",
      textBaseline: "middle"
    }
  },
  outsideLabel: {
    show: true,
    formatter: "{name}",
    style: {
      fontSize: 11
    },
    labelLineBendGap: "20%",
    labelLineEndLength: 50,
    labelLineStyle: {
      lineWidth: 1
    }
  },
  pieStyle: {},
  percentToFixed: 0,
  rLevel: 10,
  animationDelayGap: 60,
  animationCurve: "easeOutCubic",
  startAnimationCurve: "easeOutBack",
  animationFrame: 50
};
pie$2.pieConfig = pieConfig;
var radarAxis$2 = {};
Object.defineProperty(radarAxis$2, "__esModule", {
  value: true
});
radarAxis$2.radarAxisConfig = void 0;
var radarAxisConfig = {
  show: true,
  center: ["50%", "50%"],
  radius: "65%",
  startAngle: -Math.PI / 2,
  splitNum: 5,
  polygon: false,
  axisLabel: {
    show: true,
    labelGap: 15,
    color: [],
    style: {
      fill: "#333"
    }
  },
  axisLine: {
    show: true,
    color: [],
    style: {
      stroke: "#999",
      lineWidth: 1
    }
  },
  splitLine: {
    show: true,
    color: [],
    style: {
      stroke: "#d4d4d4",
      lineWidth: 1
    }
  },
  splitArea: {
    show: false,
    color: ["#f5f5f5", "#e6e6e6"],
    style: {}
  },
  rLevel: -10,
  animationCurve: "easeOutCubic",
  animationFrane: 50
};
radarAxis$2.radarAxisConfig = radarAxisConfig;
var radar$2 = {};
Object.defineProperty(radar$2, "__esModule", {
  value: true
});
radar$2.radarConfig = void 0;
var radarConfig = {
  show: true,
  name: "",
  data: [],
  radarStyle: {
    lineWidth: 1
  },
  point: {
    show: true,
    radius: 2,
    style: {
      fill: "#fff"
    }
  },
  label: {
    show: true,
    offset: [0, 0],
    labelGap: 5,
    formatter: null,
    style: {
      fontSize: 10
    }
  },
  rLevel: 10,
  animationCurve: "easeOutCubic",
  animationFrane: 50
};
radar$2.radarConfig = radarConfig;
var gauge$2 = {};
Object.defineProperty(gauge$2, "__esModule", {
  value: true
});
gauge$2.gaugeConfig = void 0;
var gaugeConfig = {
  show: true,
  name: "",
  radius: "60%",
  center: ["50%", "50%"],
  startAngle: -(Math.PI / 4) * 5,
  endAngle: Math.PI / 4,
  min: 0,
  max: 100,
  splitNum: 5,
  arcLineWidth: 15,
  data: [],
  dataItemStyle: {},
  axisTick: {
    show: true,
    tickLength: 6,
    style: {
      stroke: "#999",
      lineWidth: 1
    }
  },
  axisLabel: {
    show: true,
    data: [],
    formatter: null,
    labelGap: 5,
    style: {}
  },
  pointer: {
    show: true,
    valueIndex: 0,
    style: {
      scale: [1, 1],
      fill: "#fb7293"
    }
  },
  details: {
    show: false,
    formatter: null,
    offset: [0, 0],
    valueToFixed: 0,
    position: "center",
    style: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      textBaseline: "middle"
    }
  },
  backgroundArc: {
    show: true,
    style: {
      stroke: "#e0e0e0"
    }
  },
  rLevel: 10,
  animationCurve: "easeOutCubic",
  animationFrame: 50
};
gauge$2.gaugeConfig = gaugeConfig;
var legend$2 = {};
Object.defineProperty(legend$2, "__esModule", {
  value: true
});
legend$2.legendConfig = void 0;
var legendConfig = {
  show: true,
  orient: "horizontal",
  left: "auto",
  right: "auto",
  top: "auto",
  bottom: "auto",
  itemGap: 10,
  iconWidth: 25,
  iconHeight: 10,
  selectAble: true,
  data: [],
  textStyle: {
    fontFamily: "Arial",
    fontSize: 13,
    fill: "#000"
  },
  iconStyle: {},
  textUnselectedStyle: {
    fontFamily: "Arial",
    fontSize: 13,
    fill: "#999"
  },
  iconUnselectedStyle: {
    fill: "#999"
  },
  rLevel: 20,
  animationCurve: "easeOutCubic",
  animationFrame: 50
};
legend$2.legendConfig = legendConfig;
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.changeDefaultConfig = changeDefaultConfig;
  Object.defineProperty(exports, "colorConfig", {
    enumerable: true,
    get: function get() {
      return _color2.colorConfig;
    }
  });
  Object.defineProperty(exports, "gridConfig", {
    enumerable: true,
    get: function get() {
      return _grid.gridConfig;
    }
  });
  Object.defineProperty(exports, "xAxisConfig", {
    enumerable: true,
    get: function get() {
      return _axis.xAxisConfig;
    }
  });
  Object.defineProperty(exports, "yAxisConfig", {
    enumerable: true,
    get: function get() {
      return _axis.yAxisConfig;
    }
  });
  Object.defineProperty(exports, "titleConfig", {
    enumerable: true,
    get: function get() {
      return _title.titleConfig;
    }
  });
  Object.defineProperty(exports, "lineConfig", {
    enumerable: true,
    get: function get() {
      return _line.lineConfig;
    }
  });
  Object.defineProperty(exports, "barConfig", {
    enumerable: true,
    get: function get() {
      return _bar.barConfig;
    }
  });
  Object.defineProperty(exports, "pieConfig", {
    enumerable: true,
    get: function get() {
      return _pie2.pieConfig;
    }
  });
  Object.defineProperty(exports, "radarAxisConfig", {
    enumerable: true,
    get: function get() {
      return _radarAxis.radarAxisConfig;
    }
  });
  Object.defineProperty(exports, "radarConfig", {
    enumerable: true,
    get: function get() {
      return _radar.radarConfig;
    }
  });
  Object.defineProperty(exports, "gaugeConfig", {
    enumerable: true,
    get: function get() {
      return _gauge2.gaugeConfig;
    }
  });
  Object.defineProperty(exports, "legendConfig", {
    enumerable: true,
    get: function get() {
      return _legend.legendConfig;
    }
  });
  exports.keys = void 0;
  var _color2 = color;
  var _grid = grid$2;
  var _axis = axis$2;
  var _title = title$2;
  var _line = line$2;
  var _bar = bar$2;
  var _pie2 = pie$2;
  var _radarAxis = radarAxis$2;
  var _radar = radar$2;
  var _gauge2 = gauge$2;
  var _legend = legend$2;
  var _util3 = util;
  var allConfig = {
    colorConfig: _color2.colorConfig,
    gridConfig: _grid.gridConfig,
    xAxisConfig: _axis.xAxisConfig,
    yAxisConfig: _axis.yAxisConfig,
    titleConfig: _title.titleConfig,
    lineConfig: _line.lineConfig,
    barConfig: _bar.barConfig,
    pieConfig: _pie2.pieConfig,
    radarAxisConfig: _radarAxis.radarAxisConfig,
    radarConfig: _radar.radarConfig,
    gaugeConfig: _gauge2.gaugeConfig,
    legendConfig: _legend.legendConfig
  };
  function changeDefaultConfig(key, config2) {
    if (!allConfig["".concat(key, "Config")]) {
      console.warn("Change default config Error - Invalid key!");
      return;
    }
    (0, _util3.deepMerge)(allConfig["".concat(key, "Config")], config2);
  }
  var keys = ["color", "title", "legend", "xAxis", "yAxis", "grid", "radarAxis", "line", "bar", "pie", "radar", "gauge"];
  exports.keys = keys;
})(config);
Object.defineProperty(mergeColor$1, "__esModule", {
  value: true
});
mergeColor$1.mergeColor = mergeColor;
var _config$6 = config;
var _util$a = util$1;
var _util2$9 = util;
function mergeColor(chart) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var defaultColor = (0, _util$a.deepClone)(_config$6.colorConfig, true);
  var color2 = option.color, series = option.series;
  if (!series)
    series = [];
  if (!color2)
    color2 = [];
  option.color = color2 = (0, _util2$9.deepMerge)(defaultColor, color2);
  if (!series.length)
    return;
  var colorNum = color2.length;
  series.forEach(function(item, i) {
    if (item.color)
      return;
    item.color = color2[i % colorNum];
  });
  var pies = series.filter(function(_ref) {
    var type = _ref.type;
    return type === "pie";
  });
  pies.forEach(function(pie2) {
    return pie2.data.forEach(function(di, i) {
      return di.color = color2[i % colorNum];
    });
  });
  var gauges = series.filter(function(_ref2) {
    var type = _ref2.type;
    return type === "gauge";
  });
  gauges.forEach(function(gauge2) {
    return gauge2.data.forEach(function(di, i) {
      return di.color = color2[i % colorNum];
    });
  });
  var barWithIndependentColor = series.filter(function(_ref3) {
    var type = _ref3.type, independentColor = _ref3.independentColor;
    return type === "bar" && independentColor;
  });
  barWithIndependentColor.forEach(function(bar2) {
    if (bar2.independentColors)
      return;
    bar2.independentColors = color2;
  });
}
var title$1 = {};
var updater_class = {};
var _interopRequireDefault$a = interopRequireDefault.exports;
Object.defineProperty(updater_class, "__esModule", {
  value: true
});
updater_class.doUpdate = doUpdate;
updater_class.Updater = void 0;
var _toConsumableArray2$7 = _interopRequireDefault$a(toConsumableArray.exports);
var _typeof2$7 = _interopRequireDefault$a(_typeof.exports);
var _classCallCheck2 = _interopRequireDefault$a(classCallCheck.exports);
var Updater = function Updater2(config2, series) {
  (0, _classCallCheck2["default"])(this, Updater2);
  var chart = config2.chart, key = config2.key, getGraphConfig = config2.getGraphConfig;
  if (typeof getGraphConfig !== "function") {
    console.warn("Updater need function getGraphConfig!");
    return;
  }
  if (!chart[key])
    this.graphs = chart[key] = [];
  Object.assign(this, config2);
  this.update(series);
};
updater_class.Updater = Updater;
Updater.prototype.update = function(series) {
  var _this = this;
  var graphs2 = this.graphs, beforeUpdate = this.beforeUpdate;
  delRedundanceGraph(this, series);
  if (!series.length)
    return;
  var beforeUpdateType = (0, _typeof2$7["default"])(beforeUpdate);
  series.forEach(function(seriesItem, i) {
    if (beforeUpdateType === "function")
      beforeUpdate(graphs2, seriesItem, i, _this);
    var cache = graphs2[i];
    if (cache) {
      changeGraphs(cache, seriesItem, i, _this);
    } else {
      addGraphs(graphs2, seriesItem, i, _this);
    }
  });
};
function delRedundanceGraph(updater, series) {
  var graphs2 = updater.graphs, render = updater.chart.render;
  var cacheGraphNum = graphs2.length;
  var needGraphNum = series.length;
  if (cacheGraphNum > needGraphNum) {
    var needDelGraphs = graphs2.splice(needGraphNum);
    needDelGraphs.forEach(function(item) {
      return item.forEach(function(g) {
        return render.delGraph(g);
      });
    });
  }
}
function changeGraphs(cache, seriesItem, i, updater) {
  var getGraphConfig = updater.getGraphConfig, render = updater.chart.render, beforeChange = updater.beforeChange;
  var configs = getGraphConfig(seriesItem, updater);
  balanceGraphsNum(cache, configs, render);
  cache.forEach(function(graph, j) {
    var config2 = configs[j];
    if (typeof beforeChange === "function")
      beforeChange(graph, config2);
    updateGraphConfigByKey(graph, config2);
  });
}
function balanceGraphsNum(graphs2, graphConfig, render) {
  var cacheGraphNum = graphs2.length;
  var needGraphNum = graphConfig.length;
  if (needGraphNum > cacheGraphNum) {
    var lastCacheGraph = graphs2.slice(-1)[0];
    var needAddGraphNum = needGraphNum - cacheGraphNum;
    var needAddGraphs = new Array(needAddGraphNum).fill(0).map(function(foo) {
      return render.clone(lastCacheGraph);
    });
    graphs2.push.apply(graphs2, (0, _toConsumableArray2$7["default"])(needAddGraphs));
  } else if (needGraphNum < cacheGraphNum) {
    var needDelCache = graphs2.splice(needGraphNum);
    needDelCache.forEach(function(g) {
      return render.delGraph(g);
    });
  }
}
function addGraphs(graphs2, seriesItem, i, updater) {
  var getGraphConfig = updater.getGraphConfig, getStartGraphConfig = updater.getStartGraphConfig, chart = updater.chart;
  var render = chart.render;
  var startConfigs = null;
  if (typeof getStartGraphConfig === "function")
    startConfigs = getStartGraphConfig(seriesItem, updater);
  var configs = getGraphConfig(seriesItem, updater);
  if (!configs.length)
    return;
  if (startConfigs) {
    graphs2[i] = startConfigs.map(function(config2) {
      return render.add(config2);
    });
    graphs2[i].forEach(function(graph, i2) {
      var config2 = configs[i2];
      updateGraphConfigByKey(graph, config2);
    });
  } else {
    graphs2[i] = configs.map(function(config2) {
      return render.add(config2);
    });
  }
  var afterAddGraph = updater.afterAddGraph;
  if (typeof afterAddGraph === "function")
    afterAddGraph(graphs2[i]);
}
function updateGraphConfigByKey(graph, config2) {
  var keys = Object.keys(config2);
  keys.forEach(function(key) {
    if (key === "shape" || key === "style") {
      graph.animation(key, config2[key], true);
    } else {
      graph[key] = config2[key];
    }
  });
}
function doUpdate() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, chart = _ref.chart, series = _ref.series, key = _ref.key, getGraphConfig = _ref.getGraphConfig, getStartGraphConfig = _ref.getStartGraphConfig, beforeChange = _ref.beforeChange, beforeUpdate = _ref.beforeUpdate, afterAddGraph = _ref.afterAddGraph;
  if (chart[key]) {
    chart[key].update(series);
  } else {
    chart[key] = new Updater({
      chart,
      key,
      getGraphConfig,
      getStartGraphConfig,
      beforeChange,
      beforeUpdate,
      afterAddGraph
    }, series);
  }
}
var _interopRequireDefault$9 = interopRequireDefault.exports;
Object.defineProperty(title$1, "__esModule", {
  value: true
});
title$1.title = title;
var _slicedToArray2$9 = _interopRequireDefault$9(slicedToArray.exports);
var _updater$9 = updater_class;
var _util$9 = util$1;
var _config$5 = config;
var _util2$8 = util;
function title(chart) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var title2 = [];
  if (option.title) {
    title2[0] = (0, _util2$8.deepMerge)((0, _util$9.deepClone)(_config$5.titleConfig, true), option.title);
  }
  (0, _updater$9.doUpdate)({
    chart,
    series: title2,
    key: "title",
    getGraphConfig: getTitleConfig
  });
}
function getTitleConfig(titleItem, updater) {
  var animationCurve = _config$5.titleConfig.animationCurve, animationFrame = _config$5.titleConfig.animationFrame, rLevel = _config$5.titleConfig.rLevel;
  var shape = getTitleShape(titleItem, updater);
  var style = getTitleStyle(titleItem);
  return [{
    name: "text",
    index: rLevel,
    visible: titleItem.show,
    animationCurve,
    animationFrame,
    shape,
    style
  }];
}
function getTitleShape(titleItem, updater) {
  var offset = titleItem.offset, text = titleItem.text;
  var _updater$chart$gridAr = updater.chart.gridArea, x = _updater$chart$gridAr.x, y = _updater$chart$gridAr.y, w = _updater$chart$gridAr.w;
  var _offset = (0, _slicedToArray2$9["default"])(offset, 2), ox = _offset[0], oy = _offset[1];
  return {
    content: text,
    position: [x + w / 2 + ox, y + oy]
  };
}
function getTitleStyle(titleItem) {
  var style = titleItem.style;
  return style;
}
var grid$1 = {};
var _interopRequireDefault$8 = interopRequireDefault.exports;
Object.defineProperty(grid$1, "__esModule", {
  value: true
});
grid$1.grid = grid;
var _slicedToArray2$8 = _interopRequireDefault$8(slicedToArray.exports);
var _defineProperty2$8 = _interopRequireDefault$8(defineProperty.exports);
var _updater$8 = updater_class;
var _util$8 = util$1;
var _config$4 = config;
var _util2$7 = util;
function ownKeys$7(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$7(Object(source), true).forEach(function(key) {
        (0, _defineProperty2$8["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$7(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function grid(chart) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var grid2 = option.grid;
  grid2 = (0, _util2$7.deepMerge)((0, _util$8.deepClone)(_config$4.gridConfig, true), grid2 || {});
  (0, _updater$8.doUpdate)({
    chart,
    series: [grid2],
    key: "grid",
    getGraphConfig: getGridConfig
  });
}
function getGridConfig(gridItem, updater) {
  var animationCurve = gridItem.animationCurve, animationFrame = gridItem.animationFrame, rLevel = gridItem.rLevel;
  var shape = getGridShape(gridItem, updater);
  var style = getGridStyle(gridItem);
  updater.chart.gridArea = _objectSpread$7({}, shape);
  return [{
    name: "rect",
    index: rLevel,
    animationCurve,
    animationFrame,
    shape,
    style
  }];
}
function getGridShape(gridItem, updater) {
  var _updater$chart$render = (0, _slicedToArray2$8["default"])(updater.chart.render.area, 2), w = _updater$chart$render[0], h = _updater$chart$render[1];
  var left = getNumberValue(gridItem.left, w);
  var right = getNumberValue(gridItem.right, w);
  var top = getNumberValue(gridItem.top, h);
  var bottom = getNumberValue(gridItem.bottom, h);
  var width = w - left - right;
  var height = h - top - bottom;
  return {
    x: left,
    y: top,
    w: width,
    h: height
  };
}
function getNumberValue(val, all) {
  if (typeof val === "number")
    return val;
  if (typeof val !== "string")
    return 0;
  return all * parseInt(val) / 100;
}
function getGridStyle(gridItem) {
  var style = gridItem.style;
  return style;
}
var axis$1 = {};
var _interopRequireDefault$7 = interopRequireDefault.exports;
Object.defineProperty(axis$1, "__esModule", {
  value: true
});
axis$1.axis = axis;
var _typeof2$6 = _interopRequireDefault$7(_typeof.exports);
var _slicedToArray2$7 = _interopRequireDefault$7(slicedToArray.exports);
var _defineProperty2$7 = _interopRequireDefault$7(defineProperty.exports);
var _toConsumableArray2$6 = _interopRequireDefault$7(toConsumableArray.exports);
var _updater$7 = updater_class;
var _config$3 = config;
var _util$7 = util;
var _util2$6 = util$1;
function ownKeys$6(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$6(Object(source), true).forEach(function(key) {
        (0, _defineProperty2$7["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$6(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var axisConfig = {
  xAxisConfig: _config$3.xAxisConfig,
  yAxisConfig: _config$3.yAxisConfig
};
var abs = Math.abs, pow = Math.pow;
function axis(chart) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var xAxis = option.xAxis, yAxis = option.yAxis, series = option.series;
  var allAxis = [];
  if (xAxis && yAxis && series) {
    allAxis = getAllAxis(xAxis, yAxis);
    allAxis = mergeDefaultAxisConfig(allAxis);
    allAxis = allAxis.filter(function(_ref) {
      var show = _ref.show;
      return show;
    });
    allAxis = mergeDefaultBoundaryGap(allAxis);
    allAxis = calcAxisLabelData(allAxis, series);
    allAxis = setAxisPosition(allAxis);
    allAxis = calcAxisLinePosition(allAxis, chart);
    allAxis = calcAxisTickPosition(allAxis);
    allAxis = calcAxisNamePosition(allAxis);
    allAxis = calcSplitLinePosition(allAxis, chart);
  }
  (0, _updater$7.doUpdate)({
    chart,
    series: allAxis,
    key: "axisLine",
    getGraphConfig: getLineConfig$1
  });
  (0, _updater$7.doUpdate)({
    chart,
    series: allAxis,
    key: "axisTick",
    getGraphConfig: getTickConfig
  });
  (0, _updater$7.doUpdate)({
    chart,
    series: allAxis,
    key: "axisLabel",
    getGraphConfig: getLabelConfig$3
  });
  (0, _updater$7.doUpdate)({
    chart,
    series: allAxis,
    key: "axisName",
    getGraphConfig: getNameConfig
  });
  (0, _updater$7.doUpdate)({
    chart,
    series: allAxis,
    key: "splitLine",
    getGraphConfig: getSplitLineConfig$1
  });
  chart.axisData = allAxis;
}
function getAllAxis(xAxis, yAxis) {
  var allXAxis = [], allYAxis = [];
  if (xAxis instanceof Array) {
    var _allXAxis;
    (_allXAxis = allXAxis).push.apply(_allXAxis, (0, _toConsumableArray2$6["default"])(xAxis));
  } else {
    allXAxis.push(xAxis);
  }
  if (yAxis instanceof Array) {
    var _allYAxis;
    (_allYAxis = allYAxis).push.apply(_allYAxis, (0, _toConsumableArray2$6["default"])(yAxis));
  } else {
    allYAxis.push(yAxis);
  }
  allXAxis.splice(2);
  allYAxis.splice(2);
  allXAxis = allXAxis.map(function(axis2, i) {
    return _objectSpread$6(_objectSpread$6({}, axis2), {}, {
      index: i,
      axis: "x"
    });
  });
  allYAxis = allYAxis.map(function(axis2, i) {
    return _objectSpread$6(_objectSpread$6({}, axis2), {}, {
      index: i,
      axis: "y"
    });
  });
  return [].concat((0, _toConsumableArray2$6["default"])(allXAxis), (0, _toConsumableArray2$6["default"])(allYAxis));
}
function mergeDefaultAxisConfig(allAxis) {
  var xAxis = allAxis.filter(function(_ref2) {
    var axis2 = _ref2.axis;
    return axis2 === "x";
  });
  var yAxis = allAxis.filter(function(_ref3) {
    var axis2 = _ref3.axis;
    return axis2 === "y";
  });
  xAxis = xAxis.map(function(axis2) {
    return (0, _util$7.deepMerge)((0, _util2$6.deepClone)(_config$3.xAxisConfig), axis2);
  });
  yAxis = yAxis.map(function(axis2) {
    return (0, _util$7.deepMerge)((0, _util2$6.deepClone)(_config$3.yAxisConfig), axis2);
  });
  return [].concat((0, _toConsumableArray2$6["default"])(xAxis), (0, _toConsumableArray2$6["default"])(yAxis));
}
function mergeDefaultBoundaryGap(allAxis) {
  var valueAxis = allAxis.filter(function(_ref4) {
    var data = _ref4.data;
    return data === "value";
  });
  var labelAxis = allAxis.filter(function(_ref5) {
    var data = _ref5.data;
    return data !== "value";
  });
  valueAxis.forEach(function(axis2) {
    if (typeof axis2.boundaryGap === "boolean")
      return;
    axis2.boundaryGap = false;
  });
  labelAxis.forEach(function(axis2) {
    if (typeof axis2.boundaryGap === "boolean")
      return;
    axis2.boundaryGap = true;
  });
  return [].concat((0, _toConsumableArray2$6["default"])(valueAxis), (0, _toConsumableArray2$6["default"])(labelAxis));
}
function calcAxisLabelData(allAxis, series) {
  var valueAxis = allAxis.filter(function(_ref6) {
    var data = _ref6.data;
    return data === "value";
  });
  var labelAxis = allAxis.filter(function(_ref7) {
    var data = _ref7.data;
    return data instanceof Array;
  });
  valueAxis = calcValueAxisLabelData(valueAxis, series);
  labelAxis = calcLabelAxisLabelData(labelAxis);
  return [].concat((0, _toConsumableArray2$6["default"])(valueAxis), (0, _toConsumableArray2$6["default"])(labelAxis));
}
function calcValueAxisLabelData(valueAxis, series) {
  return valueAxis.map(function(axis2) {
    var minMaxValue = getValueAxisMaxMinValue(axis2, series);
    var _getTrueMinMax = getTrueMinMax(axis2, minMaxValue), _getTrueMinMax2 = (0, _slicedToArray2$7["default"])(_getTrueMinMax, 2), min = _getTrueMinMax2[0], max = _getTrueMinMax2[1];
    var interval = getValueInterval(min, max, axis2);
    var formatter = axis2.axisLabel.formatter;
    var label = [];
    if (min < 0 && max > 0) {
      label = getValueAxisLabelFromZero(min, max, interval);
    } else {
      label = getValueAxisLabelFromMin(min, max, interval);
    }
    label = label.map(function(l) {
      return parseFloat(l.toFixed(2));
    });
    return _objectSpread$6(_objectSpread$6({}, axis2), {}, {
      maxValue: label.slice(-1)[0],
      minValue: label[0],
      label: getAfterFormatterLabel(label, formatter)
    });
  });
}
function getValueAxisMaxMinValue(axis2, series) {
  series = series.filter(function(_ref8) {
    var show = _ref8.show, type = _ref8.type;
    if (show === false)
      return false;
    if (type === "pie")
      return false;
    return true;
  });
  if (series.length === 0)
    return [0, 0];
  var index = axis2.index, axisType = axis2.axis;
  series = mergeStackData(series);
  var axisName = axisType + "Axis";
  var valueSeries = series.filter(function(s) {
    return s[axisName] === index;
  });
  if (!valueSeries.length)
    valueSeries = series;
  return getSeriesMinMaxValue(valueSeries);
}
function getSeriesMinMaxValue(series) {
  if (!series)
    return;
  var minValue = Math.min.apply(Math, (0, _toConsumableArray2$6["default"])(series.map(function(_ref9) {
    var data = _ref9.data;
    return Math.min.apply(Math, (0, _toConsumableArray2$6["default"])((0, _util$7.filterNonNumber)(data)));
  })));
  var maxValue = Math.max.apply(Math, (0, _toConsumableArray2$6["default"])(series.map(function(_ref10) {
    var data = _ref10.data;
    return Math.max.apply(Math, (0, _toConsumableArray2$6["default"])((0, _util$7.filterNonNumber)(data)));
  })));
  return [minValue, maxValue];
}
function mergeStackData(series) {
  var seriesCloned = (0, _util2$6.deepClone)(series, true);
  series.forEach(function(item, i) {
    var data = (0, _util$7.mergeSameStackData)(item, series);
    seriesCloned[i].data = data;
  });
  return seriesCloned;
}
function getTrueMinMax(_ref11, _ref12) {
  var min = _ref11.min, max = _ref11.max, axis2 = _ref11.axis;
  var _ref13 = (0, _slicedToArray2$7["default"])(_ref12, 2), minValue = _ref13[0], maxValue = _ref13[1];
  var minType = (0, _typeof2$6["default"])(min), maxType = (0, _typeof2$6["default"])(max);
  if (!testMinMaxType(min)) {
    min = axisConfig[axis2 + "AxisConfig"].min;
    minType = "string";
  }
  if (!testMinMaxType(max)) {
    max = axisConfig[axis2 + "AxisConfig"].max;
    maxType = "string";
  }
  if (minType === "string") {
    min = parseInt(minValue - abs(minValue * parseFloat(min) / 100));
    var lever = getValueLever(min);
    min = parseFloat((min / lever - 0.1).toFixed(1)) * lever;
  }
  if (maxType === "string") {
    max = parseInt(maxValue + abs(maxValue * parseFloat(max) / 100));
    var _lever = getValueLever(max);
    max = parseFloat((max / _lever + 0.1).toFixed(1)) * _lever;
  }
  return [min, max];
}
function getValueLever(value) {
  var valueString = abs(value).toString();
  var valueLength = valueString.length;
  var firstZeroIndex = valueString.replace(/0*$/g, "").indexOf("0");
  var pow10Num = valueLength - 1;
  if (firstZeroIndex !== -1)
    pow10Num -= firstZeroIndex;
  return pow(10, pow10Num);
}
function testMinMaxType(val) {
  var valType = (0, _typeof2$6["default"])(val);
  var isValidString = valType === "string" && /^\d+%$/.test(val);
  var isValidNumber = valType === "number";
  return isValidString || isValidNumber;
}
function getValueAxisLabelFromZero(min, max, interval) {
  var negative = [], positive = [];
  var currentNegative = 0, currentPositive = 0;
  do {
    negative.push(currentNegative -= interval);
  } while (currentNegative > min);
  do {
    positive.push(currentPositive += interval);
  } while (currentPositive < max);
  return [].concat((0, _toConsumableArray2$6["default"])(negative.reverse()), [0], (0, _toConsumableArray2$6["default"])(positive));
}
function getValueAxisLabelFromMin(min, max, interval) {
  var label = [min], currentValue = min;
  do {
    label.push(currentValue += interval);
  } while (currentValue < max);
  return label;
}
function getAfterFormatterLabel(label, formatter) {
  if (!formatter)
    return label;
  if (typeof formatter === "string")
    label = label.map(function(l) {
      return formatter.replace("{value}", l);
    });
  if (typeof formatter === "function")
    label = label.map(function(value, index) {
      return formatter({
        value,
        index
      });
    });
  return label;
}
function calcLabelAxisLabelData(labelAxis) {
  return labelAxis.map(function(axis2) {
    var data = axis2.data, formatter = axis2.axisLabel.formatter;
    return _objectSpread$6(_objectSpread$6({}, axis2), {}, {
      label: getAfterFormatterLabel(data, formatter)
    });
  });
}
function getValueInterval(min, max, axis2) {
  var interval = axis2.interval, minInterval = axis2.minInterval, maxInterval = axis2.maxInterval, splitNumber = axis2.splitNumber, axisType = axis2.axis;
  var config2 = axisConfig[axisType + "AxisConfig"];
  if (typeof interval !== "number")
    interval = config2.interval;
  if (typeof minInterval !== "number")
    minInterval = config2.minInterval;
  if (typeof maxInterval !== "number")
    maxInterval = config2.maxInterval;
  if (typeof splitNumber !== "number")
    splitNumber = config2.splitNumber;
  if (typeof interval === "number")
    return interval;
  var valueInterval = parseInt((max - min) / (splitNumber - 1));
  if (valueInterval.toString().length > 1)
    valueInterval = parseInt(valueInterval.toString().replace(/\d$/, "0"));
  if (valueInterval === 0)
    valueInterval = 1;
  if (typeof minInterval === "number" && valueInterval < minInterval)
    return minInterval;
  if (typeof maxInterval === "number" && valueInterval > maxInterval)
    return maxInterval;
  return valueInterval;
}
function setAxisPosition(allAxis) {
  var xAxis = allAxis.filter(function(_ref14) {
    var axis2 = _ref14.axis;
    return axis2 === "x";
  });
  var yAxis = allAxis.filter(function(_ref15) {
    var axis2 = _ref15.axis;
    return axis2 === "y";
  });
  if (xAxis[0] && !xAxis[0].position)
    xAxis[0].position = _config$3.xAxisConfig.position;
  if (xAxis[1] && !xAxis[1].position) {
    xAxis[1].position = xAxis[0].position === "bottom" ? "top" : "bottom";
  }
  if (yAxis[0] && !yAxis[0].position)
    yAxis[0].position = _config$3.yAxisConfig.position;
  if (yAxis[1] && !yAxis[1].position) {
    yAxis[1].position = yAxis[0].position === "left" ? "right" : "left";
  }
  return [].concat((0, _toConsumableArray2$6["default"])(xAxis), (0, _toConsumableArray2$6["default"])(yAxis));
}
function calcAxisLinePosition(allAxis, chart) {
  var _chart$gridArea = chart.gridArea, x = _chart$gridArea.x, y = _chart$gridArea.y, w = _chart$gridArea.w, h = _chart$gridArea.h;
  allAxis = allAxis.map(function(axis2) {
    var position = axis2.position;
    var linePosition = [];
    if (position === "left") {
      linePosition = [[x, y], [x, y + h]].reverse();
    } else if (position === "right") {
      linePosition = [[x + w, y], [x + w, y + h]].reverse();
    } else if (position === "top") {
      linePosition = [[x, y], [x + w, y]];
    } else if (position === "bottom") {
      linePosition = [[x, y + h], [x + w, y + h]];
    }
    return _objectSpread$6(_objectSpread$6({}, axis2), {}, {
      linePosition
    });
  });
  return allAxis;
}
function calcAxisTickPosition(allAxis, chart) {
  return allAxis.map(function(axisItem) {
    var axis2 = axisItem.axis, linePosition = axisItem.linePosition, position = axisItem.position, label = axisItem.label, boundaryGap = axisItem.boundaryGap;
    if (typeof boundaryGap !== "boolean")
      boundaryGap = axisConfig[axis2 + "AxisConfig"].boundaryGap;
    var labelNum = label.length;
    var _linePosition = (0, _slicedToArray2$7["default"])(linePosition, 2), _linePosition$ = (0, _slicedToArray2$7["default"])(_linePosition[0], 2), startX = _linePosition$[0], startY = _linePosition$[1], _linePosition$2 = (0, _slicedToArray2$7["default"])(_linePosition[1], 2), endX = _linePosition$2[0], endY = _linePosition$2[1];
    var gapLength = axis2 === "x" ? endX - startX : endY - startY;
    var gap = gapLength / (boundaryGap ? labelNum : labelNum - 1);
    var tickPosition = new Array(labelNum).fill(0).map(function(foo, i) {
      if (axis2 === "x") {
        return [startX + gap * (boundaryGap ? i + 0.5 : i), startY];
      }
      return [startX, startY + gap * (boundaryGap ? i + 0.5 : i)];
    });
    var tickLinePosition = getTickLinePosition(axis2, boundaryGap, position, tickPosition, gap);
    return _objectSpread$6(_objectSpread$6({}, axisItem), {}, {
      tickPosition,
      tickLinePosition,
      tickGap: gap
    });
  });
}
function getTickLinePosition(axisType, boundaryGap, position, tickPosition, gap) {
  var index = axisType === "x" ? 1 : 0;
  var plus = 5;
  if (axisType === "x" && position === "top")
    plus = -5;
  if (axisType === "y" && position === "left")
    plus = -5;
  var tickLinePosition = tickPosition.map(function(lineStart) {
    var lineEnd = (0, _util2$6.deepClone)(lineStart);
    lineEnd[index] += plus;
    return [(0, _util2$6.deepClone)(lineStart), lineEnd];
  });
  if (!boundaryGap)
    return tickLinePosition;
  index = axisType === "x" ? 0 : 1;
  plus = gap / 2;
  tickLinePosition.forEach(function(_ref16) {
    var _ref17 = (0, _slicedToArray2$7["default"])(_ref16, 2), lineStart = _ref17[0], lineEnd = _ref17[1];
    lineStart[index] += plus;
    lineEnd[index] += plus;
  });
  return tickLinePosition;
}
function calcAxisNamePosition(allAxis, chart) {
  return allAxis.map(function(axisItem) {
    var nameGap = axisItem.nameGap, nameLocation = axisItem.nameLocation, position = axisItem.position, linePosition = axisItem.linePosition;
    var _linePosition2 = (0, _slicedToArray2$7["default"])(linePosition, 2), lineStart = _linePosition2[0], lineEnd = _linePosition2[1];
    var namePosition = (0, _toConsumableArray2$6["default"])(lineStart);
    if (nameLocation === "end")
      namePosition = (0, _toConsumableArray2$6["default"])(lineEnd);
    if (nameLocation === "center") {
      namePosition[0] = (lineStart[0] + lineEnd[0]) / 2;
      namePosition[1] = (lineStart[1] + lineEnd[1]) / 2;
    }
    var index = 0;
    if (position === "top" && nameLocation === "center")
      index = 1;
    if (position === "bottom" && nameLocation === "center")
      index = 1;
    if (position === "left" && nameLocation !== "center")
      index = 1;
    if (position === "right" && nameLocation !== "center")
      index = 1;
    var plus = nameGap;
    if (position === "top" && nameLocation !== "end")
      plus *= -1;
    if (position === "left" && nameLocation !== "start")
      plus *= -1;
    if (position === "bottom" && nameLocation === "start")
      plus *= -1;
    if (position === "right" && nameLocation === "end")
      plus *= -1;
    namePosition[index] += plus;
    return _objectSpread$6(_objectSpread$6({}, axisItem), {}, {
      namePosition
    });
  });
}
function calcSplitLinePosition(allAxis, chart) {
  var _chart$gridArea2 = chart.gridArea, w = _chart$gridArea2.w, h = _chart$gridArea2.h;
  return allAxis.map(function(axisItem) {
    var tickLinePosition = axisItem.tickLinePosition, position = axisItem.position, boundaryGap = axisItem.boundaryGap;
    var index = 0, plus = w;
    if (position === "top" || position === "bottom")
      index = 1;
    if (position === "top" || position === "bottom")
      plus = h;
    if (position === "right" || position === "bottom")
      plus *= -1;
    var splitLinePosition = tickLinePosition.map(function(_ref18) {
      var _ref19 = (0, _slicedToArray2$7["default"])(_ref18, 1), startPoint = _ref19[0];
      var endPoint = (0, _toConsumableArray2$6["default"])(startPoint);
      endPoint[index] += plus;
      return [(0, _toConsumableArray2$6["default"])(startPoint), endPoint];
    });
    if (!boundaryGap)
      splitLinePosition.shift();
    return _objectSpread$6(_objectSpread$6({}, axisItem), {}, {
      splitLinePosition
    });
  });
}
function getLineConfig$1(axisItem) {
  var animationCurve = axisItem.animationCurve, animationFrame = axisItem.animationFrame, rLevel = axisItem.rLevel;
  return [{
    name: "polyline",
    index: rLevel,
    visible: axisItem.axisLine.show,
    animationCurve,
    animationFrame,
    shape: getLineShape(axisItem),
    style: getLineStyle$1(axisItem)
  }];
}
function getLineShape(axisItem) {
  var linePosition = axisItem.linePosition;
  return {
    points: linePosition
  };
}
function getLineStyle$1(axisItem) {
  return axisItem.axisLine.style;
}
function getTickConfig(axisItem) {
  var animationCurve = axisItem.animationCurve, animationFrame = axisItem.animationFrame, rLevel = axisItem.rLevel;
  var shapes = getTickShapes(axisItem);
  var style = getTickStyle(axisItem);
  return shapes.map(function(shape) {
    return {
      name: "polyline",
      index: rLevel,
      visible: axisItem.axisTick.show,
      animationCurve,
      animationFrame,
      shape,
      style
    };
  });
}
function getTickShapes(axisItem) {
  var tickLinePosition = axisItem.tickLinePosition;
  return tickLinePosition.map(function(points) {
    return {
      points
    };
  });
}
function getTickStyle(axisItem) {
  return axisItem.axisTick.style;
}
function getLabelConfig$3(axisItem) {
  var animationCurve = axisItem.animationCurve, animationFrame = axisItem.animationFrame, rLevel = axisItem.rLevel;
  var shapes = getLabelShapes$2(axisItem);
  var styles = getLabelStyle$3(axisItem, shapes);
  return shapes.map(function(shape, i) {
    return {
      name: "text",
      index: rLevel,
      visible: axisItem.axisLabel.show,
      animationCurve,
      animationFrame,
      shape,
      style: styles[i],
      setGraphCenter: function setGraphCenter2() {
        return void 0;
      }
    };
  });
}
function getLabelShapes$2(axisItem) {
  var label = axisItem.label, tickPosition = axisItem.tickPosition, position = axisItem.position;
  return tickPosition.map(function(point, i) {
    return {
      position: getLabelRealPosition(point, position),
      content: label[i].toString()
    };
  });
}
function getLabelRealPosition(points, position) {
  var index = 0, plus = 10;
  if (position === "top" || position === "bottom")
    index = 1;
  if (position === "top" || position === "left")
    plus = -10;
  points = (0, _util2$6.deepClone)(points);
  points[index] += plus;
  return points;
}
function getLabelStyle$3(axisItem, shapes) {
  var position = axisItem.position;
  var style = axisItem.axisLabel.style;
  var align = getAxisLabelRealAlign(position);
  style = (0, _util$7.deepMerge)(align, style);
  var styles = shapes.map(function(_ref20) {
    var position2 = _ref20.position;
    return _objectSpread$6(_objectSpread$6({}, style), {}, {
      graphCenter: position2
    });
  });
  return styles;
}
function getAxisLabelRealAlign(position) {
  if (position === "left")
    return {
      textAlign: "right",
      textBaseline: "middle"
    };
  if (position === "right")
    return {
      textAlign: "left",
      textBaseline: "middle"
    };
  if (position === "top")
    return {
      textAlign: "center",
      textBaseline: "bottom"
    };
  if (position === "bottom")
    return {
      textAlign: "center",
      textBaseline: "top"
    };
}
function getNameConfig(axisItem) {
  var animationCurve = axisItem.animationCurve, animationFrame = axisItem.animationFrame, rLevel = axisItem.rLevel;
  return [{
    name: "text",
    index: rLevel,
    animationCurve,
    animationFrame,
    shape: getNameShape(axisItem),
    style: getNameStyle(axisItem)
  }];
}
function getNameShape(axisItem) {
  var name = axisItem.name, namePosition = axisItem.namePosition;
  return {
    content: name,
    position: namePosition
  };
}
function getNameStyle(axisItem) {
  var nameLocation = axisItem.nameLocation, position = axisItem.position, style = axisItem.nameTextStyle;
  var align = getNameRealAlign(position, nameLocation);
  return (0, _util$7.deepMerge)(align, style);
}
function getNameRealAlign(position, location) {
  if (position === "top" && location === "start" || position === "bottom" && location === "start" || position === "left" && location === "center")
    return {
      textAlign: "right",
      textBaseline: "middle"
    };
  if (position === "top" && location === "end" || position === "bottom" && location === "end" || position === "right" && location === "center")
    return {
      textAlign: "left",
      textBaseline: "middle"
    };
  if (position === "top" && location === "center" || position === "left" && location === "end" || position === "right" && location === "end")
    return {
      textAlign: "center",
      textBaseline: "bottom"
    };
  if (position === "bottom" && location === "center" || position === "left" && location === "start" || position === "right" && location === "start")
    return {
      textAlign: "center",
      textBaseline: "top"
    };
}
function getSplitLineConfig$1(axisItem) {
  var animationCurve = axisItem.animationCurve, animationFrame = axisItem.animationFrame, rLevel = axisItem.rLevel;
  var shapes = getSplitLineShapes(axisItem);
  var style = getSplitLineStyle$1(axisItem);
  return shapes.map(function(shape) {
    return {
      name: "polyline",
      index: rLevel,
      visible: axisItem.splitLine.show,
      animationCurve,
      animationFrame,
      shape,
      style
    };
  });
}
function getSplitLineShapes(axisItem) {
  var splitLinePosition = axisItem.splitLinePosition;
  return splitLinePosition.map(function(points) {
    return {
      points
    };
  });
}
function getSplitLineStyle$1(axisItem) {
  return axisItem.splitLine.style;
}
var line$1 = {};
var _interopRequireDefault$6 = interopRequireDefault.exports;
Object.defineProperty(line$1, "__esModule", {
  value: true
});
line$1.line = line;
var _typeof2$5 = _interopRequireDefault$6(_typeof.exports);
var _slicedToArray2$6 = _interopRequireDefault$6(slicedToArray.exports);
var _toConsumableArray2$5 = _interopRequireDefault$6(toConsumableArray.exports);
var _defineProperty2$6 = _interopRequireDefault$6(defineProperty.exports);
var _updater$6 = updater_class;
var _config$2 = config;
var _bezierCurve = _interopRequireDefault$6(lib$2);
var _util$6 = util;
function ownKeys$5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$5(Object(source), true).forEach(function(key) {
        (0, _defineProperty2$6["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$5(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
var polylineToBezierCurve = _bezierCurve["default"].polylineToBezierCurve, getBezierCurveLength = _bezierCurve["default"].getBezierCurveLength;
function line(chart) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var xAxis = option.xAxis, yAxis = option.yAxis, series = option.series;
  var lines = [];
  if (xAxis && yAxis && series) {
    lines = (0, _util$6.initNeedSeries)(series, _config$2.lineConfig, "line");
    lines = calcLinesPosition(lines, chart);
  }
  (0, _updater$6.doUpdate)({
    chart,
    series: lines,
    key: "lineArea",
    getGraphConfig: getLineAreaConfig,
    getStartGraphConfig: getStartLineAreaConfig,
    beforeUpdate: beforeUpdateLineAndArea,
    beforeChange: beforeChangeLineAndArea
  });
  (0, _updater$6.doUpdate)({
    chart,
    series: lines,
    key: "line",
    getGraphConfig: getLineConfig,
    getStartGraphConfig: getStartLineConfig,
    beforeUpdate: beforeUpdateLineAndArea,
    beforeChange: beforeChangeLineAndArea
  });
  (0, _updater$6.doUpdate)({
    chart,
    series: lines,
    key: "linePoint",
    getGraphConfig: getPointConfig$1,
    getStartGraphConfig: getStartPointConfig$1
  });
  (0, _updater$6.doUpdate)({
    chart,
    series: lines,
    key: "lineLabel",
    getGraphConfig: getLabelConfig$2
  });
}
function calcLinesPosition(lines, chart) {
  var axisData = chart.axisData;
  return lines.map(function(lineItem) {
    var lineData = (0, _util$6.mergeSameStackData)(lineItem, lines);
    lineData = mergeNonNumber(lineItem, lineData);
    var lineAxis = getLineAxis(lineItem, axisData);
    var linePosition = getLinePosition(lineData, lineAxis);
    var lineFillBottomPos = getLineFillBottomPos(lineAxis);
    return _objectSpread$5(_objectSpread$5({}, lineItem), {}, {
      linePosition: linePosition.filter(function(p) {
        return p;
      }),
      lineFillBottomPos
    });
  });
}
function mergeNonNumber(lineItem, lineData) {
  var data = lineItem.data;
  return lineData.map(function(v, i) {
    return typeof data[i] === "number" ? v : null;
  });
}
function getLineAxis(line2, axisData) {
  var xAxisIndex = line2.xAxisIndex, yAxisIndex = line2.yAxisIndex;
  var xAxis = axisData.find(function(_ref) {
    var axis2 = _ref.axis, index = _ref.index;
    return axis2 === "x" && index === xAxisIndex;
  });
  var yAxis = axisData.find(function(_ref2) {
    var axis2 = _ref2.axis, index = _ref2.index;
    return axis2 === "y" && index === yAxisIndex;
  });
  return [xAxis, yAxis];
}
function getLinePosition(lineData, lineAxis) {
  var valueAxisIndex = lineAxis.findIndex(function(_ref3) {
    var data = _ref3.data;
    return data === "value";
  });
  var valueAxis = lineAxis[valueAxisIndex];
  var labelAxis = lineAxis[1 - valueAxisIndex];
  var linePosition = valueAxis.linePosition, axis2 = valueAxis.axis;
  var tickPosition = labelAxis.tickPosition;
  var tickNum = tickPosition.length;
  var valueAxisPosIndex = axis2 === "x" ? 0 : 1;
  var valueAxisStartPos = linePosition[0][valueAxisPosIndex];
  var valueAxisEndPos = linePosition[1][valueAxisPosIndex];
  var valueAxisPosMinus = valueAxisEndPos - valueAxisStartPos;
  var maxValue = valueAxis.maxValue, minValue = valueAxis.minValue;
  var valueMinus = maxValue - minValue;
  var position = new Array(tickNum).fill(0).map(function(foo, i) {
    var v = lineData[i];
    if (typeof v !== "number")
      return null;
    var valuePercent = (v - minValue) / valueMinus;
    if (valueMinus === 0)
      valuePercent = 0;
    return valuePercent * valueAxisPosMinus + valueAxisStartPos;
  });
  return position.map(function(vPos, i) {
    if (i >= tickNum || typeof vPos !== "number")
      return null;
    var pos = [vPos, tickPosition[i][1 - valueAxisPosIndex]];
    if (valueAxisPosIndex === 0)
      return pos;
    pos.reverse();
    return pos;
  });
}
function getLineFillBottomPos(lineAxis) {
  var valueAxis = lineAxis.find(function(_ref4) {
    var data = _ref4.data;
    return data === "value";
  });
  var axis2 = valueAxis.axis, linePosition = valueAxis.linePosition, minValue = valueAxis.minValue, maxValue = valueAxis.maxValue;
  var changeIndex = axis2 === "x" ? 0 : 1;
  var changeValue = linePosition[0][changeIndex];
  if (minValue < 0 && maxValue > 0) {
    var valueMinus = maxValue - minValue;
    var posMinus = Math.abs(linePosition[0][changeIndex] - linePosition[1][changeIndex]);
    var offset = Math.abs(minValue) / valueMinus * posMinus;
    if (axis2 === "y")
      offset *= -1;
    changeValue += offset;
  }
  return {
    changeIndex,
    changeValue
  };
}
function getLineAreaConfig(lineItem) {
  var animationCurve = lineItem.animationCurve, animationFrame = lineItem.animationFrame, lineFillBottomPos = lineItem.lineFillBottomPos, rLevel = lineItem.rLevel;
  return [{
    name: getLineGraphName(lineItem),
    index: rLevel,
    animationCurve,
    animationFrame,
    visible: lineItem.lineArea.show,
    lineFillBottomPos,
    shape: getLineAndAreaShape(lineItem),
    style: getLineAreaStyle(lineItem),
    drawed: lineAreaDrawed
  }];
}
function getLineAndAreaShape(lineItem) {
  var linePosition = lineItem.linePosition;
  return {
    points: linePosition
  };
}
function getLineAreaStyle(lineItem) {
  var lineArea = lineItem.lineArea, color2 = lineItem.color;
  var gradient = lineArea.gradient, style = lineArea.style;
  var fillColor = [style.fill || color2];
  var gradientColor = (0, _util$6.deepMerge)(fillColor, gradient);
  if (gradientColor.length === 1)
    gradientColor.push(gradientColor[0]);
  var gradientParams = getGradientParams$1(lineItem);
  style = _objectSpread$5(_objectSpread$5({}, style), {}, {
    stroke: "rgba(0, 0, 0, 0)"
  });
  return (0, _util$6.deepMerge)({
    gradientColor,
    gradientParams,
    gradientType: "linear",
    gradientWith: "fill"
  }, style);
}
function getGradientParams$1(lineItem) {
  var lineFillBottomPos = lineItem.lineFillBottomPos, linePosition = lineItem.linePosition;
  var changeIndex = lineFillBottomPos.changeIndex, changeValue = lineFillBottomPos.changeValue;
  var mainPos = linePosition.map(function(p) {
    return p[changeIndex];
  });
  var maxPos = Math.max.apply(Math, (0, _toConsumableArray2$5["default"])(mainPos));
  var minPos = Math.min.apply(Math, (0, _toConsumableArray2$5["default"])(mainPos));
  var beginPos = maxPos;
  if (changeIndex === 1)
    beginPos = minPos;
  if (changeIndex === 1) {
    return [0, beginPos, 0, changeValue];
  } else {
    return [beginPos, 0, changeValue, 0];
  }
}
function lineAreaDrawed(_ref5, _ref6) {
  var lineFillBottomPos = _ref5.lineFillBottomPos, shape = _ref5.shape;
  var ctx = _ref6.ctx;
  var points = shape.points;
  var changeIndex = lineFillBottomPos.changeIndex, changeValue = lineFillBottomPos.changeValue;
  var linePoint1 = (0, _toConsumableArray2$5["default"])(points[points.length - 1]);
  var linePoint2 = (0, _toConsumableArray2$5["default"])(points[0]);
  linePoint1[changeIndex] = changeValue;
  linePoint2[changeIndex] = changeValue;
  ctx.lineTo.apply(ctx, (0, _toConsumableArray2$5["default"])(linePoint1));
  ctx.lineTo.apply(ctx, (0, _toConsumableArray2$5["default"])(linePoint2));
  ctx.closePath();
  ctx.fill();
}
function getStartLineAreaConfig(lineItem) {
  var config2 = getLineAreaConfig(lineItem)[0];
  var style = _objectSpread$5({}, config2.style);
  style.opacity = 0;
  config2.style = style;
  return [config2];
}
function beforeUpdateLineAndArea(graphs2, lineItem, i, updater) {
  var cache = graphs2[i];
  if (!cache)
    return;
  var currentName = getLineGraphName(lineItem);
  var render = updater.chart.render;
  var name = cache[0].name;
  var delAll = currentName !== name;
  if (!delAll)
    return;
  cache.forEach(function(g) {
    return render.delGraph(g);
  });
  graphs2[i] = null;
}
function beforeChangeLineAndArea(graph, config2) {
  var points = config2.shape.points;
  var graphPoints = graph.shape.points;
  var graphPointsNum = graphPoints.length;
  var pointsNum = points.length;
  if (pointsNum > graphPointsNum) {
    var lastPoint = graphPoints.slice(-1)[0];
    var newAddPoints = new Array(pointsNum - graphPointsNum).fill(0).map(function(foo) {
      return (0, _toConsumableArray2$5["default"])(lastPoint);
    });
    graphPoints.push.apply(graphPoints, (0, _toConsumableArray2$5["default"])(newAddPoints));
  } else if (pointsNum < graphPointsNum) {
    graphPoints.splice(pointsNum);
  }
}
function getLineConfig(lineItem) {
  var animationCurve = lineItem.animationCurve, animationFrame = lineItem.animationFrame, rLevel = lineItem.rLevel;
  return [{
    name: getLineGraphName(lineItem),
    index: rLevel + 1,
    animationCurve,
    animationFrame,
    shape: getLineAndAreaShape(lineItem),
    style: getLineStyle(lineItem)
  }];
}
function getLineGraphName(lineItem) {
  var smooth = lineItem.smooth;
  return smooth ? "smoothline" : "polyline";
}
function getLineStyle(lineItem) {
  var lineStyle = lineItem.lineStyle, color2 = lineItem.color, smooth = lineItem.smooth, linePosition = lineItem.linePosition;
  var lineLength = getLineLength(linePosition, smooth);
  return (0, _util$6.deepMerge)({
    stroke: color2,
    lineDash: [lineLength, 0]
  }, lineStyle);
}
function getLineLength(points) {
  var smooth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if (!smooth)
    return (0, _util$6.getPolylineLength)(points);
  var curve = polylineToBezierCurve(points);
  return getBezierCurveLength(curve);
}
function getStartLineConfig(lineItem) {
  var lineDash = lineItem.lineStyle.lineDash;
  var config2 = getLineConfig(lineItem)[0];
  var realLineDash = config2.style.lineDash;
  if (lineDash) {
    realLineDash = [0, 0];
  } else {
    realLineDash = (0, _toConsumableArray2$5["default"])(realLineDash).reverse();
  }
  config2.style.lineDash = realLineDash;
  return [config2];
}
function getPointConfig$1(lineItem) {
  var animationCurve = lineItem.animationCurve, animationFrame = lineItem.animationFrame, rLevel = lineItem.rLevel;
  var shapes = getPointShapes(lineItem);
  var style = getPointStyle$1(lineItem);
  return shapes.map(function(shape) {
    return {
      name: "circle",
      index: rLevel + 2,
      visible: lineItem.linePoint.show,
      animationCurve,
      animationFrame,
      shape,
      style
    };
  });
}
function getPointShapes(lineItem) {
  var linePosition = lineItem.linePosition, radius = lineItem.linePoint.radius;
  return linePosition.map(function(_ref7) {
    var _ref8 = (0, _slicedToArray2$6["default"])(_ref7, 2), rx = _ref8[0], ry = _ref8[1];
    return {
      r: radius,
      rx,
      ry
    };
  });
}
function getPointStyle$1(lineItem) {
  var color2 = lineItem.color, style = lineItem.linePoint.style;
  return (0, _util$6.deepMerge)({
    stroke: color2
  }, style);
}
function getStartPointConfig$1(lineItem) {
  var configs = getPointConfig$1(lineItem);
  configs.forEach(function(config2) {
    config2.shape.r = 0.1;
  });
  return configs;
}
function getLabelConfig$2(lineItem) {
  var animationCurve = lineItem.animationCurve, animationFrame = lineItem.animationFrame, rLevel = lineItem.rLevel;
  var shapes = getLabelShapes$1(lineItem);
  var style = getLabelStyle$2(lineItem);
  return shapes.map(function(shape, i) {
    return {
      name: "text",
      index: rLevel + 3,
      visible: lineItem.label.show,
      animationCurve,
      animationFrame,
      shape,
      style
    };
  });
}
function getLabelShapes$1(lineItem) {
  var contents = formatterLabel(lineItem);
  var position = getLabelPosition(lineItem);
  return contents.map(function(content, i) {
    return {
      content,
      position: position[i]
    };
  });
}
function getLabelPosition(lineItem) {
  var linePosition = lineItem.linePosition, lineFillBottomPos = lineItem.lineFillBottomPos, label = lineItem.label;
  var position = label.position, offset = label.offset;
  var changeIndex = lineFillBottomPos.changeIndex, changeValue = lineFillBottomPos.changeValue;
  return linePosition.map(function(pos) {
    if (position === "bottom") {
      pos = (0, _toConsumableArray2$5["default"])(pos);
      pos[changeIndex] = changeValue;
    }
    if (position === "center") {
      var bottom = (0, _toConsumableArray2$5["default"])(pos);
      bottom[changeIndex] = changeValue;
      pos = getCenterLabelPoint(pos, bottom);
    }
    return getOffsetedPoint$2(pos, offset);
  });
}
function getOffsetedPoint$2(_ref9, _ref10) {
  var _ref11 = (0, _slicedToArray2$6["default"])(_ref9, 2), x = _ref11[0], y = _ref11[1];
  var _ref12 = (0, _slicedToArray2$6["default"])(_ref10, 2), ox = _ref12[0], oy = _ref12[1];
  return [x + ox, y + oy];
}
function getCenterLabelPoint(_ref13, _ref14) {
  var _ref15 = (0, _slicedToArray2$6["default"])(_ref13, 2), ax = _ref15[0], ay = _ref15[1];
  var _ref16 = (0, _slicedToArray2$6["default"])(_ref14, 2), bx = _ref16[0], by = _ref16[1];
  return [(ax + bx) / 2, (ay + by) / 2];
}
function formatterLabel(lineItem) {
  var data = lineItem.data, formatter = lineItem.label.formatter;
  data = data.filter(function(d) {
    return typeof d === "number";
  }).map(function(d) {
    return d.toString();
  });
  if (!formatter)
    return data;
  var type = (0, _typeof2$5["default"])(formatter);
  if (type === "string")
    return data.map(function(d) {
      return formatter.replace("{value}", d);
    });
  if (type === "function")
    return data.map(function(value, index) {
      return formatter({
        value,
        index
      });
    });
  return data;
}
function getLabelStyle$2(lineItem) {
  var color2 = lineItem.color, style = lineItem.label.style;
  return (0, _util$6.deepMerge)({
    fill: color2
  }, style);
}
var bar$1 = {};
var _interopRequireDefault$5 = interopRequireDefault.exports;
Object.defineProperty(bar$1, "__esModule", {
  value: true
});
bar$1.bar = bar;
var _typeof2$4 = _interopRequireDefault$5(_typeof.exports);
var _defineProperty2$5 = _interopRequireDefault$5(defineProperty.exports);
var _slicedToArray2$5 = _interopRequireDefault$5(slicedToArray.exports);
var _toConsumableArray2$4 = _interopRequireDefault$5(toConsumableArray.exports);
var _updater$5 = updater_class;
var _config$1 = config;
var _util$5 = util$1;
var _util2$5 = util;
function ownKeys$4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$4(Object(source), true).forEach(function(key) {
        (0, _defineProperty2$5["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$4(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function bar(chart) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var xAxis = option.xAxis, yAxis = option.yAxis, series = option.series;
  var bars = [];
  if (xAxis && yAxis && series) {
    bars = (0, _util2$5.initNeedSeries)(series, _config$1.barConfig, "bar");
    bars = setBarAxis(bars, chart);
    bars = setBarPositionData(bars);
    bars = calcBarsPosition(bars);
  }
  (0, _updater$5.doUpdate)({
    chart,
    series: bars.slice(-1),
    key: "backgroundBar",
    getGraphConfig: getBackgroundBarConfig
  });
  bars.reverse();
  (0, _updater$5.doUpdate)({
    chart,
    series: bars,
    key: "bar",
    getGraphConfig: getBarConfig,
    getStartGraphConfig: getStartBarConfig,
    beforeUpdate: beforeUpdateBar
  });
  (0, _updater$5.doUpdate)({
    chart,
    series: bars,
    key: "barLabel",
    getGraphConfig: getLabelConfig$1
  });
}
function setBarAxis(bars, chart) {
  var axisData = chart.axisData;
  bars.forEach(function(bar2) {
    var xAxisIndex = bar2.xAxisIndex, yAxisIndex = bar2.yAxisIndex;
    if (typeof xAxisIndex !== "number")
      xAxisIndex = 0;
    if (typeof yAxisIndex !== "number")
      yAxisIndex = 0;
    var xAxis = axisData.find(function(_ref) {
      var axis3 = _ref.axis, index = _ref.index;
      return "".concat(axis3).concat(index) === "x".concat(xAxisIndex);
    });
    var yAxis = axisData.find(function(_ref2) {
      var axis3 = _ref2.axis, index = _ref2.index;
      return "".concat(axis3).concat(index) === "y".concat(yAxisIndex);
    });
    var axis2 = [xAxis, yAxis];
    var valueAxisIndex = axis2.findIndex(function(_ref3) {
      var data = _ref3.data;
      return data === "value";
    });
    bar2.valueAxis = axis2[valueAxisIndex];
    bar2.labelAxis = axis2[1 - valueAxisIndex];
  });
  return bars;
}
function setBarPositionData(bars, chart) {
  var labelBarGroup = groupBarByLabelAxis(bars);
  labelBarGroup.forEach(function(group) {
    setBarIndex(group);
    setBarNum(group);
    setBarCategoryWidth(group);
    setBarWidthAndGap(group);
    setBarAllWidthAndGap(group);
  });
  return bars;
}
function setBarIndex(bars) {
  var stacks = getBarStack(bars);
  stacks = stacks.map(function(stack) {
    return {
      stack,
      index: -1
    };
  });
  var currentIndex = 0;
  bars.forEach(function(bar2) {
    var stack = bar2.stack;
    if (!stack) {
      bar2.barIndex = currentIndex;
      currentIndex++;
    } else {
      var stackData = stacks.find(function(_ref4) {
        var s = _ref4.stack;
        return s === stack;
      });
      if (stackData.index === -1) {
        stackData.index = currentIndex;
        currentIndex++;
      }
      bar2.barIndex = stackData.index;
    }
  });
}
function groupBarByLabelAxis(bars) {
  var labelAxis = bars.map(function(_ref5) {
    var _ref5$labelAxis = _ref5.labelAxis, axis2 = _ref5$labelAxis.axis, index = _ref5$labelAxis.index;
    return axis2 + index;
  });
  labelAxis = (0, _toConsumableArray2$4["default"])(new Set(labelAxis));
  return labelAxis.map(function(axisIndex) {
    return bars.filter(function(_ref6) {
      var _ref6$labelAxis = _ref6.labelAxis, axis2 = _ref6$labelAxis.axis, index = _ref6$labelAxis.index;
      return axis2 + index === axisIndex;
    });
  });
}
function getBarStack(bars) {
  var stacks = [];
  bars.forEach(function(_ref7) {
    var stack = _ref7.stack;
    if (stack)
      stacks.push(stack);
  });
  return (0, _toConsumableArray2$4["default"])(new Set(stacks));
}
function setBarNum(bars) {
  var barNum = (0, _toConsumableArray2$4["default"])(new Set(bars.map(function(_ref8) {
    var barIndex = _ref8.barIndex;
    return barIndex;
  }))).length;
  bars.forEach(function(bar2) {
    return bar2.barNum = barNum;
  });
}
function setBarCategoryWidth(bars) {
  var lastBar = bars.slice(-1)[0];
  var barCategoryGap = lastBar.barCategoryGap, tickGap = lastBar.labelAxis.tickGap;
  var barCategoryWidth = 0;
  if (typeof barCategoryGap === "number") {
    barCategoryWidth = barCategoryGap;
  } else {
    barCategoryWidth = (1 - parseInt(barCategoryGap) / 100) * tickGap;
  }
  bars.forEach(function(bar2) {
    return bar2.barCategoryWidth = barCategoryWidth;
  });
}
function setBarWidthAndGap(bars) {
  var _bars$slice$ = bars.slice(-1)[0], barCategoryWidth = _bars$slice$.barCategoryWidth, barWidth = _bars$slice$.barWidth, barGap = _bars$slice$.barGap, barNum = _bars$slice$.barNum;
  var widthAndGap = [];
  if (typeof barWidth === "number" || barWidth !== "auto") {
    widthAndGap = getBarWidthAndGapWithPercentOrNumber(barCategoryWidth, barWidth, barGap);
  } else if (barWidth === "auto") {
    widthAndGap = getBarWidthAndGapWidthAuto(barCategoryWidth, barWidth, barGap, barNum);
  }
  var _widthAndGap = widthAndGap, _widthAndGap2 = (0, _slicedToArray2$5["default"])(_widthAndGap, 2), width = _widthAndGap2[0], gap = _widthAndGap2[1];
  bars.forEach(function(bar2) {
    bar2.barWidth = width;
    bar2.barGap = gap;
  });
}
function getBarWidthAndGapWithPercentOrNumber(barCategoryWidth, barWidth, barGap) {
  var width = 0, gap = 0;
  if (typeof barWidth === "number") {
    width = barWidth;
  } else {
    width = parseInt(barWidth) / 100 * barCategoryWidth;
  }
  if (typeof barGap === "number") {
    gap = barGap;
  } else {
    gap = parseInt(barGap) / 100 * width;
  }
  return [width, gap];
}
function getBarWidthAndGapWidthAuto(barCategoryWidth, barWidth, barGap, barNum) {
  var width = 0, gap = 0;
  var barItemWidth = barCategoryWidth / barNum;
  if (typeof barGap === "number") {
    gap = barGap;
    width = barItemWidth - gap;
  } else {
    var percent = 10 + parseInt(barGap) / 10;
    if (percent === 0) {
      width = barItemWidth * 2;
      gap = -width;
    } else {
      width = barItemWidth / percent * 10;
      gap = barItemWidth - width;
    }
  }
  return [width, gap];
}
function setBarAllWidthAndGap(bars) {
  var _bars$slice$2 = bars.slice(-1)[0], barGap = _bars$slice$2.barGap, barWidth = _bars$slice$2.barWidth, barNum = _bars$slice$2.barNum;
  var barAllWidthAndGap = (barGap + barWidth) * barNum - barGap;
  bars.forEach(function(bar2) {
    return bar2.barAllWidthAndGap = barAllWidthAndGap;
  });
}
function calcBarsPosition(bars, chart) {
  bars = calcBarValueAxisCoordinate(bars);
  bars = calcBarLabelAxisCoordinate(bars);
  bars = eliminateNullBarLabelAxis(bars);
  bars = keepSameNumBetweenBarAndData(bars);
  return bars;
}
function calcBarLabelAxisCoordinate(bars) {
  return bars.map(function(bar2) {
    var labelAxis = bar2.labelAxis, barAllWidthAndGap = bar2.barAllWidthAndGap, barGap = bar2.barGap, barWidth = bar2.barWidth, barIndex = bar2.barIndex;
    var tickGap = labelAxis.tickGap, tickPosition = labelAxis.tickPosition, axis2 = labelAxis.axis;
    var coordinateIndex = axis2 === "x" ? 0 : 1;
    var barLabelAxisPos = tickPosition.map(function(tick, i) {
      var barCategoryStartPos = tickPosition[i][coordinateIndex] - tickGap / 2;
      var barItemsStartPos = barCategoryStartPos + (tickGap - barAllWidthAndGap) / 2;
      return barItemsStartPos + (barIndex + 0.5) * barWidth + barIndex * barGap;
    });
    return _objectSpread$4(_objectSpread$4({}, bar2), {}, {
      barLabelAxisPos
    });
  });
}
function calcBarValueAxisCoordinate(bars) {
  return bars.map(function(bar2) {
    var data = (0, _util2$5.mergeSameStackData)(bar2, bars);
    data = eliminateNonNumberData(bar2, data);
    var _bar$valueAxis = bar2.valueAxis, axis2 = _bar$valueAxis.axis, minValue = _bar$valueAxis.minValue, maxValue = _bar$valueAxis.maxValue, linePosition = _bar$valueAxis.linePosition;
    var startPos = getValuePos(minValue, maxValue, minValue < 0 ? 0 : minValue, linePosition, axis2);
    var endPos = data.map(function(v) {
      return getValuePos(minValue, maxValue, v, linePosition, axis2);
    });
    var barValueAxisPos = endPos.map(function(p) {
      return [startPos, p];
    });
    return _objectSpread$4(_objectSpread$4({}, bar2), {}, {
      barValueAxisPos
    });
  });
}
function eliminateNonNumberData(barItem, barData) {
  var data = barItem.data;
  return barData.map(function(v, i) {
    return typeof data[i] === "number" ? v : null;
  }).filter(function(d) {
    return d !== null;
  });
}
function eliminateNullBarLabelAxis(bars) {
  return bars.map(function(bar2) {
    var barLabelAxisPos = bar2.barLabelAxisPos, data = bar2.data;
    data.forEach(function(d, i) {
      if (typeof d === "number")
        return;
      barLabelAxisPos[i] = null;
    });
    return _objectSpread$4(_objectSpread$4({}, bar2), {}, {
      barLabelAxisPos: barLabelAxisPos.filter(function(p) {
        return p !== null;
      })
    });
  });
}
function keepSameNumBetweenBarAndData(bars) {
  bars.forEach(function(bar2) {
    var data = bar2.data, barLabelAxisPos = bar2.barLabelAxisPos, barValueAxisPos = bar2.barValueAxisPos;
    var dataNum = data.filter(function(d) {
      return typeof d === "number";
    }).length;
    var axisPosNum = barLabelAxisPos.length;
    if (axisPosNum > dataNum) {
      barLabelAxisPos.splice(dataNum);
      barValueAxisPos.splice(dataNum);
    }
  });
  return bars;
}
function getValuePos(min, max, value, linePosition, axis2) {
  if (typeof value !== "number")
    return null;
  var valueMinus = max - min;
  var coordinateIndex = axis2 === "x" ? 0 : 1;
  var posMinus = linePosition[1][coordinateIndex] - linePosition[0][coordinateIndex];
  var percent = (value - min) / valueMinus;
  if (valueMinus === 0)
    percent = 0;
  var pos = percent * posMinus;
  return pos + linePosition[0][coordinateIndex];
}
function getBackgroundBarConfig(barItem) {
  var animationCurve = barItem.animationCurve, animationFrame = barItem.animationFrame, rLevel = barItem.rLevel;
  var shapes = getBackgroundBarShapes(barItem);
  var style = getBackgroundBarStyle(barItem);
  return shapes.map(function(shape) {
    return {
      name: "rect",
      index: rLevel,
      visible: barItem.backgroundBar.show,
      animationCurve,
      animationFrame,
      shape,
      style
    };
  });
}
function getBackgroundBarShapes(barItem) {
  var labelAxis = barItem.labelAxis, valueAxis = barItem.valueAxis;
  var tickPosition = labelAxis.tickPosition;
  var axis2 = valueAxis.axis, linePosition = valueAxis.linePosition;
  var width = getBackgroundBarWidth(barItem);
  var haltWidth = width / 2;
  var posIndex = axis2 === "x" ? 0 : 1;
  var centerPos = tickPosition.map(function(p) {
    return p[1 - posIndex];
  });
  var _ref9 = [linePosition[0][posIndex], linePosition[1][posIndex]], start = _ref9[0], end = _ref9[1];
  return centerPos.map(function(center) {
    if (axis2 === "x") {
      return {
        x: start,
        y: center - haltWidth,
        w: end - start,
        h: width
      };
    } else {
      return {
        x: center - haltWidth,
        y: end,
        w: width,
        h: start - end
      };
    }
  });
}
function getBackgroundBarWidth(barItem) {
  var barAllWidthAndGap = barItem.barAllWidthAndGap, barCategoryWidth = barItem.barCategoryWidth, backgroundBar = barItem.backgroundBar;
  var width = backgroundBar.width;
  if (typeof width === "number")
    return width;
  if (width === "auto")
    return barAllWidthAndGap;
  return parseInt(width) / 100 * barCategoryWidth;
}
function getBackgroundBarStyle(barItem) {
  return barItem.backgroundBar.style;
}
function getBarConfig(barItem) {
  var barLabelAxisPos = barItem.barLabelAxisPos, animationCurve = barItem.animationCurve, animationFrame = barItem.animationFrame, rLevel = barItem.rLevel;
  var name = getBarName(barItem);
  return barLabelAxisPos.map(function(foo, i) {
    return {
      name,
      index: rLevel,
      animationCurve,
      animationFrame,
      shape: getBarShape(barItem, i),
      style: getBarStyle(barItem, i)
    };
  });
}
function getBarName(barItem) {
  var shapeType = barItem.shapeType;
  if (shapeType === "leftEchelon" || shapeType === "rightEchelon")
    return "polyline";
  return "rect";
}
function getBarShape(barItem, i) {
  var shapeType = barItem.shapeType;
  if (shapeType === "leftEchelon") {
    return getLeftEchelonShape(barItem, i);
  } else if (shapeType === "rightEchelon") {
    return getRightEchelonShape(barItem, i);
  } else {
    return getNormalBarShape(barItem, i);
  }
}
function getLeftEchelonShape(barItem, i) {
  var barValueAxisPos = barItem.barValueAxisPos, barLabelAxisPos = barItem.barLabelAxisPos, barWidth = barItem.barWidth, echelonOffset = barItem.echelonOffset;
  var _barValueAxisPos$i = (0, _slicedToArray2$5["default"])(barValueAxisPos[i], 2), start = _barValueAxisPos$i[0], end = _barValueAxisPos$i[1];
  var labelAxisPos = barLabelAxisPos[i];
  var halfWidth = barWidth / 2;
  var valueAxis = barItem.valueAxis.axis;
  var points = [];
  if (valueAxis === "x") {
    points[0] = [end, labelAxisPos - halfWidth];
    points[1] = [end, labelAxisPos + halfWidth];
    points[2] = [start, labelAxisPos + halfWidth];
    points[3] = [start + echelonOffset, labelAxisPos - halfWidth];
    if (end - start < echelonOffset)
      points.splice(3, 1);
  } else {
    points[0] = [labelAxisPos - halfWidth, end];
    points[1] = [labelAxisPos + halfWidth, end];
    points[2] = [labelAxisPos + halfWidth, start];
    points[3] = [labelAxisPos - halfWidth, start - echelonOffset];
    if (start - end < echelonOffset)
      points.splice(3, 1);
  }
  return {
    points,
    close: true
  };
}
function getRightEchelonShape(barItem, i) {
  var barValueAxisPos = barItem.barValueAxisPos, barLabelAxisPos = barItem.barLabelAxisPos, barWidth = barItem.barWidth, echelonOffset = barItem.echelonOffset;
  var _barValueAxisPos$i2 = (0, _slicedToArray2$5["default"])(barValueAxisPos[i], 2), start = _barValueAxisPos$i2[0], end = _barValueAxisPos$i2[1];
  var labelAxisPos = barLabelAxisPos[i];
  var halfWidth = barWidth / 2;
  var valueAxis = barItem.valueAxis.axis;
  var points = [];
  if (valueAxis === "x") {
    points[0] = [end, labelAxisPos + halfWidth];
    points[1] = [end, labelAxisPos - halfWidth];
    points[2] = [start, labelAxisPos - halfWidth];
    points[3] = [start + echelonOffset, labelAxisPos + halfWidth];
    if (end - start < echelonOffset)
      points.splice(2, 1);
  } else {
    points[0] = [labelAxisPos + halfWidth, end];
    points[1] = [labelAxisPos - halfWidth, end];
    points[2] = [labelAxisPos - halfWidth, start];
    points[3] = [labelAxisPos + halfWidth, start - echelonOffset];
    if (start - end < echelonOffset)
      points.splice(2, 1);
  }
  return {
    points,
    close: true
  };
}
function getNormalBarShape(barItem, i) {
  var barValueAxisPos = barItem.barValueAxisPos, barLabelAxisPos = barItem.barLabelAxisPos, barWidth = barItem.barWidth;
  var _barValueAxisPos$i3 = (0, _slicedToArray2$5["default"])(barValueAxisPos[i], 2), start = _barValueAxisPos$i3[0], end = _barValueAxisPos$i3[1];
  var labelAxisPos = barLabelAxisPos[i];
  var valueAxis = barItem.valueAxis.axis;
  var shape = {};
  if (valueAxis === "x") {
    shape.x = start;
    shape.y = labelAxisPos - barWidth / 2;
    shape.w = end - start;
    shape.h = barWidth;
  } else {
    shape.x = labelAxisPos - barWidth / 2;
    shape.y = end;
    shape.w = barWidth;
    shape.h = start - end;
  }
  return shape;
}
function getBarStyle(barItem, i) {
  var barStyle = barItem.barStyle, gradient = barItem.gradient, color2 = barItem.color, independentColor = barItem.independentColor, independentColors = barItem.independentColors;
  var fillColor = [barStyle.fill || color2];
  var gradientColor = (0, _util2$5.deepMerge)(fillColor, gradient.color);
  if (independentColor) {
    var idtColor = independentColors[i % independentColors.length];
    gradientColor = idtColor instanceof Array ? idtColor : [idtColor];
  }
  if (gradientColor.length === 1)
    gradientColor.push(gradientColor[0]);
  var gradientParams = getGradientParams(barItem, i);
  return (0, _util2$5.deepMerge)({
    gradientColor,
    gradientParams,
    gradientType: "linear",
    gradientWith: "fill"
  }, barStyle);
}
function getGradientParams(barItem, i) {
  var barValueAxisPos = barItem.barValueAxisPos, barLabelAxisPos = barItem.barLabelAxisPos, data = barItem.data;
  var _barItem$valueAxis = barItem.valueAxis, linePosition = _barItem$valueAxis.linePosition, axis2 = _barItem$valueAxis.axis;
  var _barValueAxisPos$i4 = (0, _slicedToArray2$5["default"])(barValueAxisPos[i], 2), start = _barValueAxisPos$i4[0], end = _barValueAxisPos$i4[1];
  var labelAxisPos = barLabelAxisPos[i];
  var value = data[i];
  var _linePosition = (0, _slicedToArray2$5["default"])(linePosition, 2), lineStart = _linePosition[0], lineEnd = _linePosition[1];
  var valueAxisIndex = axis2 === "x" ? 0 : 1;
  var endPos = end;
  if (!barItem.gradient.local) {
    endPos = value < 0 ? lineStart[valueAxisIndex] : lineEnd[valueAxisIndex];
  }
  if (axis2 === "y") {
    return [labelAxisPos, endPos, labelAxisPos, start];
  } else {
    return [endPos, labelAxisPos, start, labelAxisPos];
  }
}
function getStartBarConfig(barItem) {
  var configs = getBarConfig(barItem);
  var shapeType = barItem.shapeType;
  configs.forEach(function(config2) {
    var shape = config2.shape;
    if (shapeType === "leftEchelon") {
      shape = getStartLeftEchelonShape(shape, barItem);
    } else if (shapeType === "rightEchelon") {
      shape = getStartRightEchelonShape(shape, barItem);
    } else {
      shape = getStartNormalBarShape(shape, barItem);
    }
    config2.shape = shape;
  });
  return configs;
}
function getStartLeftEchelonShape(shape, barItem) {
  var axis2 = barItem.valueAxis.axis;
  shape = (0, _util$5.deepClone)(shape);
  var _shape = shape, points = _shape.points;
  var index = axis2 === "x" ? 0 : 1;
  var start = points[2][index];
  points.forEach(function(point) {
    return point[index] = start;
  });
  return shape;
}
function getStartRightEchelonShape(shape, barItem) {
  var axis2 = barItem.valueAxis.axis;
  shape = (0, _util$5.deepClone)(shape);
  var _shape2 = shape, points = _shape2.points;
  var index = axis2 === "x" ? 0 : 1;
  var start = points[2][index];
  points.forEach(function(point) {
    return point[index] = start;
  });
  return shape;
}
function getStartNormalBarShape(shape, barItem) {
  var axis2 = barItem.valueAxis.axis;
  var x = shape.x, y = shape.y, w = shape.w, h = shape.h;
  if (axis2 === "x") {
    w = 0;
  } else {
    y = y + h;
    h = 0;
  }
  return {
    x,
    y,
    w,
    h
  };
}
function beforeUpdateBar(graphs2, barItem, i, updater) {
  var render = updater.chart.render;
  var name = getBarName(barItem);
  if (graphs2[i] && graphs2[i][0].name !== name) {
    graphs2[i].forEach(function(g) {
      return render.delGraph(g);
    });
    graphs2[i] = null;
  }
}
function getLabelConfig$1(barItem) {
  var animationCurve = barItem.animationCurve, animationFrame = barItem.animationFrame, rLevel = barItem.rLevel;
  var shapes = getLabelShapes(barItem);
  var style = getLabelStyle$1(barItem);
  return shapes.map(function(shape) {
    return {
      name: "text",
      index: rLevel,
      visible: barItem.label.show,
      animationCurve,
      animationFrame,
      shape,
      style
    };
  });
}
function getLabelShapes(barItem) {
  var contents = getFormatterLabels(barItem);
  var position = getLabelsPosition(barItem);
  return position.map(function(pos, i) {
    return {
      position: pos,
      content: contents[i]
    };
  });
}
function getFormatterLabels(barItem) {
  var data = barItem.data, label = barItem.label;
  var formatter = label.formatter;
  data = data.filter(function(d) {
    return typeof d === "number";
  }).map(function(d) {
    return d.toString();
  });
  if (!formatter)
    return data;
  var type = (0, _typeof2$4["default"])(formatter);
  if (type === "string")
    return data.map(function(d) {
      return formatter.replace("{value}", d);
    });
  if (type === "function")
    return data.map(function(d, i) {
      return formatter({
        value: d,
        index: i
      });
    });
  return data;
}
function getLabelsPosition(barItem) {
  var label = barItem.label, barValueAxisPos = barItem.barValueAxisPos, barLabelAxisPos = barItem.barLabelAxisPos;
  var position = label.position, offset = label.offset;
  var axis2 = barItem.valueAxis.axis;
  return barValueAxisPos.map(function(_ref10, i) {
    var _ref11 = (0, _slicedToArray2$5["default"])(_ref10, 2), start = _ref11[0], end = _ref11[1];
    var labelAxisPos = barLabelAxisPos[i];
    var pos = [end, labelAxisPos];
    if (position === "bottom") {
      pos = [start, labelAxisPos];
    }
    if (position === "center") {
      pos = [(start + end) / 2, labelAxisPos];
    }
    if (axis2 === "y")
      pos.reverse();
    return getOffsetedPoint$1(pos, offset);
  });
}
function getOffsetedPoint$1(_ref12, _ref13) {
  var _ref14 = (0, _slicedToArray2$5["default"])(_ref12, 2), x = _ref14[0], y = _ref14[1];
  var _ref15 = (0, _slicedToArray2$5["default"])(_ref13, 2), ox = _ref15[0], oy = _ref15[1];
  return [x + ox, y + oy];
}
function getLabelStyle$1(barItem) {
  var color2 = barItem.color, style = barItem.label.style, gc = barItem.gradient.color;
  if (gc.length)
    color2 = gc[0];
  style = (0, _util2$5.deepMerge)({
    fill: color2
  }, style);
  return style;
}
var pie$1 = {};
var _interopRequireDefault$4 = interopRequireDefault.exports;
Object.defineProperty(pie$1, "__esModule", {
  value: true
});
pie$1.pie = pie;
var _defineProperty2$4 = _interopRequireDefault$4(defineProperty.exports);
var _typeof2$3 = _interopRequireDefault$4(_typeof.exports);
var _slicedToArray2$4 = _interopRequireDefault$4(slicedToArray.exports);
var _toConsumableArray2$3 = _interopRequireDefault$4(toConsumableArray.exports);
var _updater$4 = updater_class;
var _pie = pie$2;
var _util$4 = util$1;
var _util2$4 = util;
function ownKeys$3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$3(Object(source), true).forEach(function(key) {
        (0, _defineProperty2$4["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$3(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function pie(chart) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var series = option.series;
  if (!series)
    series = [];
  var pies = (0, _util2$4.initNeedSeries)(series, _pie.pieConfig, "pie");
  pies = calcPiesCenter(pies, chart);
  pies = calcPiesRadius(pies, chart);
  pies = calcRosePiesRadius(pies);
  pies = calcPiesPercent(pies);
  pies = calcPiesAngle(pies);
  pies = calcPiesInsideLabelPos(pies);
  pies = calcPiesEdgeCenterPos(pies);
  pies = calcPiesOutSideLabelPos(pies);
  (0, _updater$4.doUpdate)({
    chart,
    series: pies,
    key: "pie",
    getGraphConfig: getPieConfig,
    getStartGraphConfig: getStartPieConfig,
    beforeChange: beforeChangePie
  });
  (0, _updater$4.doUpdate)({
    chart,
    series: pies,
    key: "pieInsideLabel",
    getGraphConfig: getInsideLabelConfig
  });
  (0, _updater$4.doUpdate)({
    chart,
    series: pies,
    key: "pieOutsideLabelLine",
    getGraphConfig: getOutsideLabelLineConfig,
    getStartGraphConfig: getStartOutsideLabelLineConfig
  });
  (0, _updater$4.doUpdate)({
    chart,
    series: pies,
    key: "pieOutsideLabel",
    getGraphConfig: getOutsideLabelConfig,
    getStartGraphConfig: getStartOutsideLabelConfig
  });
}
function calcPiesCenter(pies, chart) {
  var area = chart.render.area;
  pies.forEach(function(pie2) {
    var center = pie2.center;
    center = center.map(function(pos, i) {
      if (typeof pos === "number")
        return pos;
      return parseInt(pos) / 100 * area[i];
    });
    pie2.center = center;
  });
  return pies;
}
function calcPiesRadius(pies, chart) {
  var maxRadius = Math.min.apply(Math, (0, _toConsumableArray2$3["default"])(chart.render.area)) / 2;
  pies.forEach(function(pie2) {
    var radius = pie2.radius, data = pie2.data;
    radius = getNumberRadius(radius, maxRadius);
    data.forEach(function(item) {
      var itemRadius = item.radius;
      if (!itemRadius)
        itemRadius = radius;
      itemRadius = getNumberRadius(itemRadius, maxRadius);
      item.radius = itemRadius;
    });
    pie2.radius = radius;
  });
  return pies;
}
function getNumberRadius(radius, maxRadius) {
  if (!(radius instanceof Array))
    radius = [0, radius];
  radius = radius.map(function(r) {
    if (typeof r === "number")
      return r;
    return parseInt(r) / 100 * maxRadius;
  });
  return radius;
}
function calcRosePiesRadius(pies, chart) {
  var rosePie = pies.filter(function(_ref) {
    var roseType = _ref.roseType;
    return roseType;
  });
  rosePie.forEach(function(pie2) {
    var radius = pie2.radius, data = pie2.data, roseSort = pie2.roseSort;
    var roseIncrement = getRoseIncrement(pie2);
    var dataCopy = (0, _toConsumableArray2$3["default"])(data);
    data = sortData(data);
    data.forEach(function(item, i) {
      item.radius[1] = radius[1] - roseIncrement * i;
    });
    if (roseSort) {
      data.reverse();
    } else {
      pie2.data = dataCopy;
    }
    pie2.roseIncrement = roseIncrement;
  });
  return pies;
}
function sortData(data) {
  return data.sort(function(_ref2, _ref3) {
    var a = _ref2.value;
    var b = _ref3.value;
    if (a === b)
      return 0;
    if (a > b)
      return -1;
    if (a < b)
      return 1;
  });
}
function getRoseIncrement(pie2) {
  var radius = pie2.radius, roseIncrement = pie2.roseIncrement;
  if (typeof roseIncrement === "number")
    return roseIncrement;
  if (roseIncrement === "auto") {
    var data = pie2.data;
    var allRadius = data.reduce(function(all, _ref4) {
      var radius2 = _ref4.radius;
      return [].concat((0, _toConsumableArray2$3["default"])(all), (0, _toConsumableArray2$3["default"])(radius2));
    }, []);
    var minRadius = Math.min.apply(Math, (0, _toConsumableArray2$3["default"])(allRadius));
    var maxRadius = Math.max.apply(Math, (0, _toConsumableArray2$3["default"])(allRadius));
    return (maxRadius - minRadius) * 0.6 / (data.length - 1 || 1);
  }
  return parseInt(roseIncrement) / 100 * radius[1];
}
function calcPiesPercent(pies) {
  pies.forEach(function(pie2) {
    var data = pie2.data, percentToFixed = pie2.percentToFixed;
    var sum = getDataSum(data);
    data.forEach(function(item) {
      var value = item.value;
      item.percent = value / sum * 100;
      item.percentForLabel = toFixedNoCeil(value / sum * 100, percentToFixed);
    });
    var percentSumNoLast = (0, _util2$4.mulAdd)(data.slice(0, -1).map(function(_ref5) {
      var percent = _ref5.percent;
      return percent;
    }));
    data.slice(-1)[0].percent = 100 - percentSumNoLast;
    data.slice(-1)[0].percentForLabel = toFixedNoCeil(100 - percentSumNoLast, percentToFixed);
  });
  return pies;
}
function toFixedNoCeil(number) {
  var toFixed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var stringNumber = number.toString();
  var splitedNumber = stringNumber.split(".");
  var decimal = splitedNumber[1] || "0";
  var fixedDecimal = decimal.slice(0, toFixed);
  splitedNumber[1] = fixedDecimal;
  return parseFloat(splitedNumber.join("."));
}
function getDataSum(data) {
  return (0, _util2$4.mulAdd)(data.map(function(_ref6) {
    var value = _ref6.value;
    return value;
  }));
}
function calcPiesAngle(pies) {
  pies.forEach(function(pie2) {
    var start = pie2.startAngle, data = pie2.data;
    data.forEach(function(item, i) {
      var _getDataAngle = getDataAngle(data, i), _getDataAngle2 = (0, _slicedToArray2$4["default"])(_getDataAngle, 2), startAngle = _getDataAngle2[0], endAngle = _getDataAngle2[1];
      item.startAngle = start + startAngle;
      item.endAngle = start + endAngle;
    });
  });
  return pies;
}
function getDataAngle(data, i) {
  var fullAngle = Math.PI * 2;
  var needAddData = data.slice(0, i + 1);
  var percentSum = (0, _util2$4.mulAdd)(needAddData.map(function(_ref7) {
    var percent2 = _ref7.percent;
    return percent2;
  }));
  var percent = data[i].percent;
  var startPercent = percentSum - percent;
  return [fullAngle * startPercent / 100, fullAngle * percentSum / 100];
}
function calcPiesInsideLabelPos(pies) {
  pies.forEach(function(pieItem) {
    var data = pieItem.data;
    data.forEach(function(item) {
      item.insideLabelPos = getPieInsideLabelPos(pieItem, item);
    });
  });
  return pies;
}
function getPieInsideLabelPos(pieItem, dataItem) {
  var center = pieItem.center;
  var startAngle = dataItem.startAngle, endAngle = dataItem.endAngle, _dataItem$radius = (0, _slicedToArray2$4["default"])(dataItem.radius, 2), ir = _dataItem$radius[0], or = _dataItem$radius[1];
  var radius = (ir + or) / 2;
  var angle = (startAngle + endAngle) / 2;
  return _util$4.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2$3["default"])(center).concat([radius, angle]));
}
function calcPiesEdgeCenterPos(pies) {
  pies.forEach(function(pie2) {
    var data = pie2.data, center = pie2.center;
    data.forEach(function(item) {
      var startAngle = item.startAngle, endAngle = item.endAngle, radius = item.radius;
      var centerAngle = (startAngle + endAngle) / 2;
      var pos = _util$4.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2$3["default"])(center).concat([radius[1], centerAngle]));
      item.edgeCenterPos = pos;
    });
  });
  return pies;
}
function calcPiesOutSideLabelPos(pies) {
  pies.forEach(function(pieItem) {
    var leftPieDataItems = getLeftOrRightPieDataItems(pieItem);
    var rightPieDataItems = getLeftOrRightPieDataItems(pieItem, false);
    leftPieDataItems = sortPiesFromTopToBottom(leftPieDataItems);
    rightPieDataItems = sortPiesFromTopToBottom(rightPieDataItems);
    addLabelLineAndAlign(leftPieDataItems, pieItem);
    addLabelLineAndAlign(rightPieDataItems, pieItem, false);
  });
  return pies;
}
function getLabelLineBendRadius(pieItem) {
  var labelLineBendGap = pieItem.outsideLabel.labelLineBendGap;
  var maxRadius = getPieMaxRadius(pieItem);
  if (typeof labelLineBendGap !== "number") {
    labelLineBendGap = parseInt(labelLineBendGap) / 100 * maxRadius;
  }
  return labelLineBendGap + maxRadius;
}
function getPieMaxRadius(pieItem) {
  var data = pieItem.data;
  var radius = data.map(function(_ref8) {
    var _ref8$radius = (0, _slicedToArray2$4["default"])(_ref8.radius, 2);
    _ref8$radius[0];
    var r = _ref8$radius[1];
    return r;
  });
  return Math.max.apply(Math, (0, _toConsumableArray2$3["default"])(radius));
}
function getLeftOrRightPieDataItems(pieItem) {
  var left = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  var data = pieItem.data, center = pieItem.center;
  var centerXPos = center[0];
  return data.filter(function(_ref9) {
    var edgeCenterPos = _ref9.edgeCenterPos;
    var xPos = edgeCenterPos[0];
    if (left)
      return xPos <= centerXPos;
    return xPos > centerXPos;
  });
}
function sortPiesFromTopToBottom(dataItem) {
  dataItem.sort(function(_ref10, _ref11) {
    var _ref10$edgeCenterPos = (0, _slicedToArray2$4["default"])(_ref10.edgeCenterPos, 2);
    _ref10$edgeCenterPos[0];
    var ay = _ref10$edgeCenterPos[1];
    var _ref11$edgeCenterPos = (0, _slicedToArray2$4["default"])(_ref11.edgeCenterPos, 2);
    _ref11$edgeCenterPos[0];
    var by = _ref11$edgeCenterPos[1];
    if (ay > by)
      return 1;
    if (ay < by)
      return -1;
    if (ay === by)
      return 0;
  });
  return dataItem;
}
function addLabelLineAndAlign(dataItem, pieItem) {
  var left = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var center = pieItem.center, outsideLabel = pieItem.outsideLabel;
  var radius = getLabelLineBendRadius(pieItem);
  dataItem.forEach(function(item) {
    var edgeCenterPos = item.edgeCenterPos, startAngle = item.startAngle, endAngle = item.endAngle;
    var labelLineEndLength = outsideLabel.labelLineEndLength;
    var angle = (startAngle + endAngle) / 2;
    var bendPoint = _util$4.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2$3["default"])(center).concat([radius, angle]));
    var endPoint = (0, _toConsumableArray2$3["default"])(bendPoint);
    endPoint[0] += labelLineEndLength * (left ? -1 : 1);
    item.labelLine = [edgeCenterPos, bendPoint, endPoint];
    item.labelLineLength = (0, _util2$4.getPolylineLength)(item.labelLine);
    item.align = {
      textAlign: "left",
      textBaseline: "middle"
    };
    if (left)
      item.align.textAlign = "right";
  });
}
function getPieConfig(pieItem) {
  var data = pieItem.data, animationCurve = pieItem.animationCurve, animationFrame = pieItem.animationFrame, rLevel = pieItem.rLevel;
  return data.map(function(foo, i) {
    return {
      name: "pie",
      index: rLevel,
      animationCurve,
      animationFrame,
      shape: getPieShape(pieItem, i),
      style: getPieStyle(pieItem, i)
    };
  });
}
function getStartPieConfig(pieItem) {
  var animationDelayGap = pieItem.animationDelayGap, startAnimationCurve = pieItem.startAnimationCurve;
  var configs = getPieConfig(pieItem);
  configs.forEach(function(config2, i) {
    config2.animationCurve = startAnimationCurve;
    config2.animationDelay = i * animationDelayGap;
    config2.shape.or = config2.shape.ir;
  });
  return configs;
}
function beforeChangePie(graph) {
  graph.animationDelay = 0;
}
function getPieShape(pieItem, i) {
  var center = pieItem.center, data = pieItem.data;
  var dataItem = data[i];
  var radius = dataItem.radius, startAngle = dataItem.startAngle, endAngle = dataItem.endAngle;
  return {
    startAngle,
    endAngle,
    ir: radius[0],
    or: radius[1],
    rx: center[0],
    ry: center[1]
  };
}
function getPieStyle(pieItem, i) {
  var pieStyle = pieItem.pieStyle, data = pieItem.data;
  var dataItem = data[i];
  var color2 = dataItem.color;
  return (0, _util2$4.deepMerge)({
    fill: color2
  }, pieStyle);
}
function getInsideLabelConfig(pieItem) {
  var animationCurve = pieItem.animationCurve, animationFrame = pieItem.animationFrame, data = pieItem.data, rLevel = pieItem.rLevel;
  return data.map(function(foo, i) {
    return {
      name: "text",
      index: rLevel,
      visible: pieItem.insideLabel.show,
      animationCurve,
      animationFrame,
      shape: getInsideLabelShape(pieItem, i),
      style: getInsideLabelStyle(pieItem)
    };
  });
}
function getInsideLabelShape(pieItem, i) {
  var insideLabel = pieItem.insideLabel, data = pieItem.data;
  var formatter = insideLabel.formatter;
  var dataItem = data[i];
  var formatterType = (0, _typeof2$3["default"])(formatter);
  var label = "";
  if (formatterType === "string") {
    label = formatter.replace("{name}", dataItem.name);
    label = label.replace("{percent}", dataItem.percentForLabel);
    label = label.replace("{value}", dataItem.value);
  }
  if (formatterType === "function") {
    label = formatter(dataItem);
  }
  return {
    content: label,
    position: dataItem.insideLabelPos
  };
}
function getInsideLabelStyle(pieItem, i) {
  var style = pieItem.insideLabel.style;
  return style;
}
function getOutsideLabelLineConfig(pieItem) {
  var animationCurve = pieItem.animationCurve, animationFrame = pieItem.animationFrame, data = pieItem.data, rLevel = pieItem.rLevel;
  return data.map(function(foo, i) {
    return {
      name: "polyline",
      index: rLevel,
      visible: pieItem.outsideLabel.show,
      animationCurve,
      animationFrame,
      shape: getOutsideLabelLineShape(pieItem, i),
      style: getOutsideLabelLineStyle(pieItem, i)
    };
  });
}
function getStartOutsideLabelLineConfig(pieItem) {
  var data = pieItem.data;
  var configs = getOutsideLabelLineConfig(pieItem);
  configs.forEach(function(config2, i) {
    config2.style.lineDash = [0, data[i].labelLineLength];
  });
  return configs;
}
function getOutsideLabelLineShape(pieItem, i) {
  var data = pieItem.data;
  var dataItem = data[i];
  return {
    points: dataItem.labelLine
  };
}
function getOutsideLabelLineStyle(pieItem, i) {
  var outsideLabel = pieItem.outsideLabel, data = pieItem.data;
  var labelLineStyle = outsideLabel.labelLineStyle;
  var color2 = data[i].color;
  return (0, _util2$4.deepMerge)({
    stroke: color2,
    lineDash: [data[i].labelLineLength, 0]
  }, labelLineStyle);
}
function getOutsideLabelConfig(pieItem) {
  var animationCurve = pieItem.animationCurve, animationFrame = pieItem.animationFrame, data = pieItem.data, rLevel = pieItem.rLevel;
  return data.map(function(foo, i) {
    return {
      name: "text",
      index: rLevel,
      visible: pieItem.outsideLabel.show,
      animationCurve,
      animationFrame,
      shape: getOutsideLabelShape(pieItem, i),
      style: getOutsideLabelStyle(pieItem, i)
    };
  });
}
function getStartOutsideLabelConfig(pieItem) {
  var data = pieItem.data;
  var configs = getOutsideLabelConfig(pieItem);
  configs.forEach(function(config2, i) {
    config2.shape.position = data[i].labelLine[1];
  });
  return configs;
}
function getOutsideLabelShape(pieItem, i) {
  var outsideLabel = pieItem.outsideLabel, data = pieItem.data;
  var formatter = outsideLabel.formatter;
  var _data$i = data[i], labelLine = _data$i.labelLine, name = _data$i.name, percentForLabel = _data$i.percentForLabel, value = _data$i.value;
  var formatterType = (0, _typeof2$3["default"])(formatter);
  var label = "";
  if (formatterType === "string") {
    label = formatter.replace("{name}", name);
    label = label.replace("{percent}", percentForLabel);
    label = label.replace("{value}", value);
  }
  if (formatterType === "function") {
    label = formatter(data[i]);
  }
  return {
    content: label,
    position: labelLine[2]
  };
}
function getOutsideLabelStyle(pieItem, i) {
  var outsideLabel = pieItem.outsideLabel, data = pieItem.data;
  var _data$i2 = data[i], color2 = _data$i2.color, align = _data$i2.align;
  var style = outsideLabel.style;
  return (0, _util2$4.deepMerge)(_objectSpread$3({
    fill: color2
  }, align), style);
}
var radarAxis$1 = {};
var _interopRequireDefault$3 = interopRequireDefault.exports;
Object.defineProperty(radarAxis$1, "__esModule", {
  value: true
});
radarAxis$1.radarAxis = radarAxis;
var _slicedToArray2$3 = _interopRequireDefault$3(slicedToArray.exports);
var _defineProperty2$3 = _interopRequireDefault$3(defineProperty.exports);
var _toConsumableArray2$2 = _interopRequireDefault$3(toConsumableArray.exports);
var _updater$3 = updater_class;
var _index$1 = config;
var _util$3 = util$1;
var _util2$3 = util;
function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function(key) {
        (0, _defineProperty2$3["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function radarAxis(chart) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var radar2 = option.radar;
  var radarAxis2 = [];
  if (radar2) {
    radarAxis2 = mergeRadarAxisDefaultConfig(radar2);
    radarAxis2 = calcRadarAxisCenter(radarAxis2, chart);
    radarAxis2 = calcRadarAxisRingRadius(radarAxis2, chart);
    radarAxis2 = calcRadarAxisLinePosition(radarAxis2);
    radarAxis2 = calcRadarAxisAreaRadius(radarAxis2);
    radarAxis2 = calcRadarAxisLabelPosition(radarAxis2);
    radarAxis2 = [radarAxis2];
  }
  var radarAxisForUpdate = radarAxis2;
  if (radarAxis2.length && !radarAxis2[0].show)
    radarAxisForUpdate = [];
  (0, _updater$3.doUpdate)({
    chart,
    series: radarAxisForUpdate,
    key: "radarAxisSplitArea",
    getGraphConfig: getSplitAreaConfig,
    beforeUpdate: beforeUpdateSplitArea,
    beforeChange: beforeChangeSplitArea
  });
  (0, _updater$3.doUpdate)({
    chart,
    series: radarAxisForUpdate,
    key: "radarAxisSplitLine",
    getGraphConfig: getSplitLineConfig,
    beforeUpdate: beforeUpdateSplitLine,
    beforeChange: beforeChangeSplitLine
  });
  (0, _updater$3.doUpdate)({
    chart,
    series: radarAxisForUpdate,
    key: "radarAxisLine",
    getGraphConfig: getAxisLineConfig
  });
  (0, _updater$3.doUpdate)({
    chart,
    series: radarAxisForUpdate,
    key: "radarAxisLable",
    getGraphConfig: getAxisLabelConfig$1
  });
  chart.radarAxis = radarAxis2[0];
}
function mergeRadarAxisDefaultConfig(radar2) {
  return (0, _util2$3.deepMerge)((0, _util$3.deepClone)(_index$1.radarAxisConfig), radar2);
}
function calcRadarAxisCenter(radarAxis2, chart) {
  var area = chart.render.area;
  var center = radarAxis2.center;
  radarAxis2.centerPos = center.map(function(v, i) {
    if (typeof v === "number")
      return v;
    return parseInt(v) / 100 * area[i];
  });
  return radarAxis2;
}
function calcRadarAxisRingRadius(radarAxis2, chart) {
  var area = chart.render.area;
  var splitNum = radarAxis2.splitNum, radius = radarAxis2.radius;
  var maxRadius = Math.min.apply(Math, (0, _toConsumableArray2$2["default"])(area)) / 2;
  if (typeof radius !== "number")
    radius = parseInt(radius) / 100 * maxRadius;
  var splitGap = radius / splitNum;
  radarAxis2.ringRadius = new Array(splitNum).fill(0).map(function(foo, i) {
    return splitGap * (i + 1);
  });
  radarAxis2.radius = radius;
  return radarAxis2;
}
function calcRadarAxisLinePosition(radarAxis2) {
  var indicator = radarAxis2.indicator, centerPos = radarAxis2.centerPos, radius = radarAxis2.radius, startAngle = radarAxis2.startAngle;
  var fullAngle = Math.PI * 2;
  var indicatorNum = indicator.length;
  var indicatorGap = fullAngle / indicatorNum;
  var angles = new Array(indicatorNum).fill(0).map(function(foo, i) {
    return indicatorGap * i + startAngle;
  });
  radarAxis2.axisLineAngles = angles;
  radarAxis2.axisLinePosition = angles.map(function(g) {
    return _util$3.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2$2["default"])(centerPos).concat([radius, g]));
  });
  return radarAxis2;
}
function calcRadarAxisAreaRadius(radarAxis2) {
  var ringRadius = radarAxis2.ringRadius;
  var subRadius = ringRadius[0] / 2;
  radarAxis2.areaRadius = ringRadius.map(function(r) {
    return r - subRadius;
  });
  return radarAxis2;
}
function calcRadarAxisLabelPosition(radarAxis2) {
  var axisLineAngles = radarAxis2.axisLineAngles, centerPos = radarAxis2.centerPos, radius = radarAxis2.radius, axisLabel = radarAxis2.axisLabel;
  radius += axisLabel.labelGap;
  radarAxis2.axisLabelPosition = axisLineAngles.map(function(angle) {
    return _util$3.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2$2["default"])(centerPos).concat([radius, angle]));
  });
  return radarAxis2;
}
function getSplitAreaConfig(radarAxis2) {
  var areaRadius = radarAxis2.areaRadius, polygon = radarAxis2.polygon, animationCurve = radarAxis2.animationCurve, animationFrame = radarAxis2.animationFrame, rLevel = radarAxis2.rLevel;
  var name = polygon ? "regPolygon" : "ring";
  return areaRadius.map(function(foo, i) {
    return {
      name,
      index: rLevel,
      visible: radarAxis2.splitArea.show,
      animationCurve,
      animationFrame,
      shape: getSplitAreaShape(radarAxis2, i),
      style: getSplitAreaStyle(radarAxis2, i)
    };
  });
}
function getSplitAreaShape(radarAxis2, i) {
  var polygon = radarAxis2.polygon, areaRadius = radarAxis2.areaRadius, indicator = radarAxis2.indicator, centerPos = radarAxis2.centerPos;
  var indicatorNum = indicator.length;
  var shape = {
    rx: centerPos[0],
    ry: centerPos[1],
    r: areaRadius[i]
  };
  if (polygon)
    shape.side = indicatorNum;
  return shape;
}
function getSplitAreaStyle(radarAxis2, i) {
  var splitArea = radarAxis2.splitArea, ringRadius = radarAxis2.ringRadius, axisLineAngles = radarAxis2.axisLineAngles, polygon = radarAxis2.polygon, centerPos = radarAxis2.centerPos;
  var color2 = splitArea.color, style = splitArea.style;
  style = _objectSpread$2({
    fill: "rgba(0, 0, 0, 0)"
  }, style);
  var lineWidth = ringRadius[0] - 0;
  if (polygon) {
    var point1 = _util$3.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2$2["default"])(centerPos).concat([ringRadius[0], axisLineAngles[0]]));
    var point2 = _util$3.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2$2["default"])(centerPos).concat([ringRadius[0], axisLineAngles[1]]));
    lineWidth = (0, _util2$3.getPointToLineDistance)(centerPos, point1, point2);
  }
  style = (0, _util2$3.deepMerge)((0, _util$3.deepClone)(style, true), {
    lineWidth
  });
  if (!color2.length)
    return style;
  var colorNum = color2.length;
  return (0, _util2$3.deepMerge)(style, {
    stroke: color2[i % colorNum]
  });
}
function beforeUpdateSplitArea(graphs2, radarAxis2, i, updater) {
  var cache = graphs2[i];
  if (!cache)
    return;
  var render = updater.chart.render;
  var polygon = radarAxis2.polygon;
  var name = cache[0].name;
  var currentName = polygon ? "regPolygon" : "ring";
  var delAll = currentName !== name;
  if (!delAll)
    return;
  cache.forEach(function(g) {
    return render.delGraph(g);
  });
  graphs2[i] = null;
}
function beforeChangeSplitArea(graph, config2) {
  var side = config2.shape.side;
  if (typeof side !== "number")
    return;
  graph.shape.side = side;
}
function getSplitLineConfig(radarAxis2) {
  var ringRadius = radarAxis2.ringRadius, polygon = radarAxis2.polygon, animationCurve = radarAxis2.animationCurve, animationFrame = radarAxis2.animationFrame, rLevel = radarAxis2.rLevel;
  var name = polygon ? "regPolygon" : "ring";
  return ringRadius.map(function(foo, i) {
    return {
      name,
      index: rLevel,
      animationCurve,
      animationFrame,
      visible: radarAxis2.splitLine.show,
      shape: getSplitLineShape(radarAxis2, i),
      style: getSplitLineStyle(radarAxis2, i)
    };
  });
}
function getSplitLineShape(radarAxis2, i) {
  var ringRadius = radarAxis2.ringRadius, centerPos = radarAxis2.centerPos, indicator = radarAxis2.indicator, polygon = radarAxis2.polygon;
  var shape = {
    rx: centerPos[0],
    ry: centerPos[1],
    r: ringRadius[i]
  };
  var indicatorNum = indicator.length;
  if (polygon)
    shape.side = indicatorNum;
  return shape;
}
function getSplitLineStyle(radarAxis2, i) {
  var splitLine = radarAxis2.splitLine;
  var color2 = splitLine.color, style = splitLine.style;
  style = _objectSpread$2({
    fill: "rgba(0, 0, 0, 0)"
  }, style);
  if (!color2.length)
    return style;
  var colorNum = color2.length;
  return (0, _util2$3.deepMerge)(style, {
    stroke: color2[i % colorNum]
  });
}
function beforeUpdateSplitLine(graphs2, radarAxis2, i, updater) {
  var cache = graphs2[i];
  if (!cache)
    return;
  var render = updater.chart.render;
  var polygon = radarAxis2.polygon;
  var name = cache[0].name;
  var currenName = polygon ? "regPolygon" : "ring";
  var delAll = currenName !== name;
  if (!delAll)
    return;
  cache.forEach(function(g) {
    return render.delGraph(g);
  });
  graphs2[i] = null;
}
function beforeChangeSplitLine(graph, config2) {
  var side = config2.shape.side;
  if (typeof side !== "number")
    return;
  graph.shape.side = side;
}
function getAxisLineConfig(radarAxis2) {
  var axisLinePosition = radarAxis2.axisLinePosition, animationCurve = radarAxis2.animationCurve, animationFrame = radarAxis2.animationFrame, rLevel = radarAxis2.rLevel;
  return axisLinePosition.map(function(foo, i) {
    return {
      name: "polyline",
      index: rLevel,
      visible: radarAxis2.axisLine.show,
      animationCurve,
      animationFrame,
      shape: getAxisLineShape(radarAxis2, i),
      style: getAxisLineStyle(radarAxis2, i)
    };
  });
}
function getAxisLineShape(radarAxis2, i) {
  var centerPos = radarAxis2.centerPos, axisLinePosition = radarAxis2.axisLinePosition;
  var points = [centerPos, axisLinePosition[i]];
  return {
    points
  };
}
function getAxisLineStyle(radarAxis2, i) {
  var axisLine = radarAxis2.axisLine;
  var color2 = axisLine.color, style = axisLine.style;
  if (!color2.length)
    return style;
  var colorNum = color2.length;
  return (0, _util2$3.deepMerge)(style, {
    stroke: color2[i % colorNum]
  });
}
function getAxisLabelConfig$1(radarAxis2) {
  var axisLabelPosition = radarAxis2.axisLabelPosition, animationCurve = radarAxis2.animationCurve, animationFrame = radarAxis2.animationFrame, rLevel = radarAxis2.rLevel;
  return axisLabelPosition.map(function(foo, i) {
    return {
      name: "text",
      index: rLevel,
      visible: radarAxis2.axisLabel.show,
      animationCurve,
      animationFrame,
      shape: getAxisLableShape(radarAxis2, i),
      style: getAxisLableStyle(radarAxis2, i)
    };
  });
}
function getAxisLableShape(radarAxis2, i) {
  var axisLabelPosition = radarAxis2.axisLabelPosition, indicator = radarAxis2.indicator;
  return {
    content: indicator[i].name,
    position: axisLabelPosition[i]
  };
}
function getAxisLableStyle(radarAxis2, i) {
  var axisLabel = radarAxis2.axisLabel, _radarAxis$centerPos = (0, _slicedToArray2$3["default"])(radarAxis2.centerPos, 2), x = _radarAxis$centerPos[0], y = _radarAxis$centerPos[1], axisLabelPosition = radarAxis2.axisLabelPosition;
  var color2 = axisLabel.color, style = axisLabel.style;
  var _axisLabelPosition$i = (0, _slicedToArray2$3["default"])(axisLabelPosition[i], 2), labelXpos = _axisLabelPosition$i[0], labelYPos = _axisLabelPosition$i[1];
  var textAlign = labelXpos > x ? "left" : "right";
  var textBaseline = labelYPos > y ? "top" : "bottom";
  style = (0, _util2$3.deepMerge)({
    textAlign,
    textBaseline
  }, style);
  if (!color2.length)
    return style;
  var colorNum = color2.length;
  return (0, _util2$3.deepMerge)(style, {
    fill: color2[i % colorNum]
  });
}
var radar$1 = {};
var _interopRequireDefault$2 = interopRequireDefault.exports;
Object.defineProperty(radar$1, "__esModule", {
  value: true
});
radar$1.radar = radar;
var _defineProperty2$2 = _interopRequireDefault$2(defineProperty.exports);
var _typeof2$2 = _interopRequireDefault$2(_typeof.exports);
var _slicedToArray2$2 = _interopRequireDefault$2(slicedToArray.exports);
var _toConsumableArray2$1 = _interopRequireDefault$2(toConsumableArray.exports);
var _updater$2 = updater_class;
var _index = config;
var _util$2 = util$1;
var _color$1 = lib$3;
var _util2$2 = util;
function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        (0, _defineProperty2$2["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function radar(chart) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var series = option.series;
  if (!series)
    series = [];
  var radars = (0, _util2$2.initNeedSeries)(series, _index.radarConfig, "radar");
  radars = calcRadarPosition(radars, chart);
  radars = calcRadarLabelPosition(radars, chart);
  radars = calcRadarLabelAlign(radars, chart);
  (0, _updater$2.doUpdate)({
    chart,
    series: radars,
    key: "radar",
    getGraphConfig: getRadarConfig,
    getStartGraphConfig: getStartRadarConfig,
    beforeChange: beforeChangeRadar
  });
  (0, _updater$2.doUpdate)({
    chart,
    series: radars,
    key: "radarPoint",
    getGraphConfig: getPointConfig,
    getStartGraphConfig: getStartPointConfig
  });
  (0, _updater$2.doUpdate)({
    chart,
    series: radars,
    key: "radarLabel",
    getGraphConfig: getLabelConfig
  });
}
function calcRadarPosition(radars, chart) {
  var radarAxis2 = chart.radarAxis;
  if (!radarAxis2)
    return [];
  var indicator = radarAxis2.indicator, axisLineAngles = radarAxis2.axisLineAngles, radius = radarAxis2.radius, centerPos = radarAxis2.centerPos;
  radars.forEach(function(radarItem) {
    var data = radarItem.data;
    radarItem.dataRadius = [];
    radarItem.radarPosition = indicator.map(function(_ref, i) {
      var max = _ref.max, min = _ref.min;
      var v = data[i];
      if (typeof max !== "number")
        max = v;
      if (typeof min !== "number")
        min = 0;
      if (typeof v !== "number")
        v = min;
      var dataRadius = (v - min) / (max - min) * radius;
      radarItem.dataRadius[i] = dataRadius;
      return _util$2.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2$1["default"])(centerPos).concat([dataRadius, axisLineAngles[i]]));
    });
  });
  return radars;
}
function calcRadarLabelPosition(radars, chart) {
  var radarAxis2 = chart.radarAxis;
  if (!radarAxis2)
    return [];
  var centerPos = radarAxis2.centerPos, axisLineAngles = radarAxis2.axisLineAngles;
  radars.forEach(function(radarItem) {
    var dataRadius = radarItem.dataRadius, label = radarItem.label;
    var labelGap = label.labelGap;
    radarItem.labelPosition = dataRadius.map(function(r, i) {
      return _util$2.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2$1["default"])(centerPos).concat([r + labelGap, axisLineAngles[i]]));
    });
  });
  return radars;
}
function calcRadarLabelAlign(radars, chart) {
  var radarAxis2 = chart.radarAxis;
  if (!radarAxis2)
    return [];
  var _radarAxis$centerPos = (0, _slicedToArray2$2["default"])(radarAxis2.centerPos, 2), x = _radarAxis$centerPos[0], y = _radarAxis$centerPos[1];
  radars.forEach(function(radarItem) {
    var labelPosition = radarItem.labelPosition;
    var labelAlign = labelPosition.map(function(_ref2) {
      var _ref3 = (0, _slicedToArray2$2["default"])(_ref2, 2), lx = _ref3[0], ly = _ref3[1];
      var textAlign = lx > x ? "left" : "right";
      var textBaseline = ly > y ? "top" : "bottom";
      return {
        textAlign,
        textBaseline
      };
    });
    radarItem.labelAlign = labelAlign;
  });
  return radars;
}
function getRadarConfig(radarItem) {
  var animationCurve = radarItem.animationCurve, animationFrame = radarItem.animationFrame, rLevel = radarItem.rLevel;
  return [{
    name: "polyline",
    index: rLevel,
    animationCurve,
    animationFrame,
    shape: getRadarShape(radarItem),
    style: getRadarStyle(radarItem)
  }];
}
function getStartRadarConfig(radarItem, updater) {
  var centerPos = updater.chart.radarAxis.centerPos;
  var config2 = getRadarConfig(radarItem)[0];
  var pointNum = config2.shape.points.length;
  var points = new Array(pointNum).fill(0).map(function(foo) {
    return (0, _toConsumableArray2$1["default"])(centerPos);
  });
  config2.shape.points = points;
  return [config2];
}
function getRadarShape(radarItem) {
  var radarPosition = radarItem.radarPosition;
  return {
    points: radarPosition,
    close: true
  };
}
function getRadarStyle(radarItem) {
  var radarStyle = radarItem.radarStyle, color2 = radarItem.color;
  var colorRgbaValue = (0, _color$1.getRgbaValue)(color2);
  colorRgbaValue[3] = 0.5;
  var radarDefaultColor = {
    stroke: color2,
    fill: (0, _color$1.getColorFromRgbValue)(colorRgbaValue)
  };
  return (0, _util2$2.deepMerge)(radarDefaultColor, radarStyle);
}
function beforeChangeRadar(graph, _ref4) {
  var shape = _ref4.shape;
  var graphPoints = graph.shape.points;
  var graphPointsNum = graphPoints.length;
  var pointsNum = shape.points.length;
  if (pointsNum > graphPointsNum) {
    var lastPoint = graphPoints.slice(-1)[0];
    var newAddPoints = new Array(pointsNum - graphPointsNum).fill(0).map(function(foo) {
      return (0, _toConsumableArray2$1["default"])(lastPoint);
    });
    graphPoints.push.apply(graphPoints, (0, _toConsumableArray2$1["default"])(newAddPoints));
  } else if (pointsNum < graphPointsNum) {
    graphPoints.splice(pointsNum);
  }
}
function getPointConfig(radarItem) {
  var radarPosition = radarItem.radarPosition, animationCurve = radarItem.animationCurve, animationFrame = radarItem.animationFrame, rLevel = radarItem.rLevel;
  return radarPosition.map(function(foo, i) {
    return {
      name: "circle",
      index: rLevel,
      animationCurve,
      animationFrame,
      visible: radarItem.point.show,
      shape: getPointShape(radarItem, i),
      style: getPointStyle(radarItem)
    };
  });
}
function getStartPointConfig(radarItem) {
  var configs = getPointConfig(radarItem);
  configs.forEach(function(config2) {
    return config2.shape.r = 0.01;
  });
  return configs;
}
function getPointShape(radarItem, i) {
  var radarPosition = radarItem.radarPosition, point = radarItem.point;
  var radius = point.radius;
  var position = radarPosition[i];
  return {
    rx: position[0],
    ry: position[1],
    r: radius
  };
}
function getPointStyle(radarItem, i) {
  var point = radarItem.point, color2 = radarItem.color;
  var style = point.style;
  return (0, _util2$2.deepMerge)({
    stroke: color2
  }, style);
}
function getLabelConfig(radarItem) {
  var labelPosition = radarItem.labelPosition, animationCurve = radarItem.animationCurve, animationFrame = radarItem.animationFrame, rLevel = radarItem.rLevel;
  return labelPosition.map(function(foo, i) {
    return {
      name: "text",
      index: rLevel,
      visible: radarItem.label.show,
      animationCurve,
      animationFrame,
      shape: getLabelShape(radarItem, i),
      style: getLabelStyle(radarItem, i)
    };
  });
}
function getLabelShape(radarItem, i) {
  var labelPosition = radarItem.labelPosition, label = radarItem.label, data = radarItem.data;
  var offset = label.offset, formatter = label.formatter;
  var position = mergePointOffset(labelPosition[i], offset);
  var labelText = data[i] ? data[i].toString() : "0";
  var formatterType = (0, _typeof2$2["default"])(formatter);
  if (formatterType === "string")
    labelText = formatter.replace("{value}", labelText);
  if (formatterType === "function")
    labelText = formatter(labelText);
  return {
    content: labelText,
    position
  };
}
function mergePointOffset(_ref5, _ref6) {
  var _ref7 = (0, _slicedToArray2$2["default"])(_ref5, 2), x = _ref7[0], y = _ref7[1];
  var _ref8 = (0, _slicedToArray2$2["default"])(_ref6, 2), ox = _ref8[0], oy = _ref8[1];
  return [x + ox, y + oy];
}
function getLabelStyle(radarItem, i) {
  var label = radarItem.label, color2 = radarItem.color, labelAlign = radarItem.labelAlign;
  var style = label.style;
  var defaultColorAndAlign = _objectSpread$1({
    fill: color2
  }, labelAlign[i]);
  return (0, _util2$2.deepMerge)(defaultColorAndAlign, style);
}
var gauge$1 = {};
var _interopRequireDefault$1 = interopRequireDefault.exports;
Object.defineProperty(gauge$1, "__esModule", {
  value: true
});
gauge$1.gauge = gauge;
var _defineProperty2$1 = _interopRequireDefault$1(defineProperty.exports);
var _typeof2$1 = _interopRequireDefault$1(_typeof.exports);
var _slicedToArray2$1 = _interopRequireDefault$1(slicedToArray.exports);
var _toConsumableArray2 = _interopRequireDefault$1(toConsumableArray.exports);
var _updater$1 = updater_class;
var _gauge = gauge$2;
var _util$1 = util$1;
var _util2$1 = util;
var _color = lib$3;
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        (0, _defineProperty2$1["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function gauge(chart) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var series = option.series;
  if (!series)
    series = [];
  var gauges = (0, _util2$1.initNeedSeries)(series, _gauge.gaugeConfig, "gauge");
  gauges = calcGaugesCenter(gauges, chart);
  gauges = calcGaugesRadius(gauges, chart);
  gauges = calcGaugesDataRadiusAndLineWidth(gauges, chart);
  gauges = calcGaugesDataAngles(gauges);
  gauges = calcGaugesDataGradient(gauges);
  gauges = calcGaugesAxisTickPosition(gauges);
  gauges = calcGaugesLabelPositionAndAlign(gauges);
  gauges = calcGaugesLabelData(gauges);
  gauges = calcGaugesDetailsPosition(gauges);
  gauges = calcGaugesDetailsContent(gauges);
  (0, _updater$1.doUpdate)({
    chart,
    series: gauges,
    key: "gaugeAxisTick",
    getGraphConfig: getAxisTickConfig
  });
  (0, _updater$1.doUpdate)({
    chart,
    series: gauges,
    key: "gaugeAxisLabel",
    getGraphConfig: getAxisLabelConfig
  });
  (0, _updater$1.doUpdate)({
    chart,
    series: gauges,
    key: "gaugeBackgroundArc",
    getGraphConfig: getBackgroundArcConfig,
    getStartGraphConfig: getStartBackgroundArcConfig
  });
  (0, _updater$1.doUpdate)({
    chart,
    series: gauges,
    key: "gaugeArc",
    getGraphConfig: getArcConfig,
    getStartGraphConfig: getStartArcConfig,
    beforeChange: beforeChangeArc
  });
  (0, _updater$1.doUpdate)({
    chart,
    series: gauges,
    key: "gaugePointer",
    getGraphConfig: getPointerConfig,
    getStartGraphConfig: getStartPointerConfig
  });
  (0, _updater$1.doUpdate)({
    chart,
    series: gauges,
    key: "gaugeDetails",
    getGraphConfig: getDetailsConfig
  });
}
function calcGaugesCenter(gauges, chart) {
  var area = chart.render.area;
  gauges.forEach(function(gaugeItem) {
    var center = gaugeItem.center;
    center = center.map(function(pos, i) {
      if (typeof pos === "number")
        return pos;
      return parseInt(pos) / 100 * area[i];
    });
    gaugeItem.center = center;
  });
  return gauges;
}
function calcGaugesRadius(gauges, chart) {
  var area = chart.render.area;
  var maxRadius = Math.min.apply(Math, (0, _toConsumableArray2["default"])(area)) / 2;
  gauges.forEach(function(gaugeItem) {
    var radius = gaugeItem.radius;
    if (typeof radius !== "number") {
      radius = parseInt(radius) / 100 * maxRadius;
    }
    gaugeItem.radius = radius;
  });
  return gauges;
}
function calcGaugesDataRadiusAndLineWidth(gauges, chart) {
  var area = chart.render.area;
  var maxRadius = Math.min.apply(Math, (0, _toConsumableArray2["default"])(area)) / 2;
  gauges.forEach(function(gaugeItem) {
    var radius = gaugeItem.radius, data = gaugeItem.data, arcLineWidth = gaugeItem.arcLineWidth;
    data.forEach(function(item) {
      var arcRadius = item.radius, lineWidth = item.lineWidth;
      if (!arcRadius)
        arcRadius = radius;
      if (typeof arcRadius !== "number")
        arcRadius = parseInt(arcRadius) / 100 * maxRadius;
      item.radius = arcRadius;
      if (!lineWidth)
        lineWidth = arcLineWidth;
      item.lineWidth = lineWidth;
    });
  });
  return gauges;
}
function calcGaugesDataAngles(gauges, chart) {
  gauges.forEach(function(gaugeItem) {
    var startAngle = gaugeItem.startAngle, endAngle = gaugeItem.endAngle, data = gaugeItem.data, min = gaugeItem.min, max = gaugeItem.max;
    var angleMinus = endAngle - startAngle;
    var valueMinus = max - min;
    data.forEach(function(item) {
      var value = item.value;
      var itemAngle = Math.abs((value - min) / valueMinus * angleMinus);
      item.startAngle = startAngle;
      item.endAngle = startAngle + itemAngle;
    });
  });
  return gauges;
}
function calcGaugesDataGradient(gauges, chart) {
  gauges.forEach(function(gaugeItem) {
    var data = gaugeItem.data;
    data.forEach(function(item) {
      var color2 = item.color, gradient = item.gradient;
      if (!gradient || !gradient.length)
        gradient = color2;
      if (!(gradient instanceof Array))
        gradient = [gradient];
      item.gradient = gradient;
    });
  });
  return gauges;
}
function calcGaugesAxisTickPosition(gauges, chart) {
  gauges.forEach(function(gaugeItem) {
    var startAngle = gaugeItem.startAngle, endAngle = gaugeItem.endAngle, splitNum = gaugeItem.splitNum, center = gaugeItem.center, radius = gaugeItem.radius, arcLineWidth = gaugeItem.arcLineWidth, axisTick = gaugeItem.axisTick;
    var tickLength = axisTick.tickLength, lineWidth = axisTick.style.lineWidth;
    var angles = endAngle - startAngle;
    var outerRadius = radius - arcLineWidth / 2;
    var innerRadius = outerRadius - tickLength;
    var angleGap = angles / (splitNum - 1);
    var arcLength = 2 * Math.PI * radius * angles / (Math.PI * 2);
    var offset = Math.ceil(lineWidth / 2) / arcLength * angles;
    gaugeItem.tickAngles = [];
    gaugeItem.tickInnerRadius = [];
    gaugeItem.tickPosition = new Array(splitNum).fill(0).map(function(foo, i) {
      var angle = startAngle + angleGap * i;
      if (i === 0)
        angle += offset;
      if (i === splitNum - 1)
        angle -= offset;
      gaugeItem.tickAngles[i] = angle;
      gaugeItem.tickInnerRadius[i] = innerRadius;
      return [_util$1.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([outerRadius, angle])), _util$1.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([innerRadius, angle]))];
    });
  });
  return gauges;
}
function calcGaugesLabelPositionAndAlign(gauges, chart) {
  gauges.forEach(function(gaugeItem) {
    var center = gaugeItem.center, tickInnerRadius = gaugeItem.tickInnerRadius, tickAngles = gaugeItem.tickAngles, labelGap = gaugeItem.axisLabel.labelGap;
    var position = tickAngles.map(function(angle, i) {
      return _util$1.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([tickInnerRadius[i] - labelGap, tickAngles[i]]));
    });
    var align = position.map(function(_ref) {
      var _ref2 = (0, _slicedToArray2$1["default"])(_ref, 2), x = _ref2[0], y = _ref2[1];
      return {
        textAlign: x > center[0] ? "right" : "left",
        textBaseline: y > center[1] ? "bottom" : "top"
      };
    });
    gaugeItem.labelPosition = position;
    gaugeItem.labelAlign = align;
  });
  return gauges;
}
function calcGaugesLabelData(gauges, chart) {
  gauges.forEach(function(gaugeItem) {
    var axisLabel = gaugeItem.axisLabel, min = gaugeItem.min, max = gaugeItem.max, splitNum = gaugeItem.splitNum;
    var data = axisLabel.data, formatter = axisLabel.formatter;
    var valueGap = (max - min) / (splitNum - 1);
    var value = new Array(splitNum).fill(0).map(function(foo, i) {
      return parseInt(min + valueGap * i);
    });
    var formatterType = (0, _typeof2$1["default"])(formatter);
    data = (0, _util2$1.deepMerge)(value, data).map(function(v, i) {
      var label = v;
      if (formatterType === "string") {
        label = formatter.replace("{value}", v);
      }
      if (formatterType === "function") {
        label = formatter({
          value: v,
          index: i
        });
      }
      return label;
    });
    axisLabel.data = data;
  });
  return gauges;
}
function calcGaugesDetailsPosition(gauges, chart) {
  gauges.forEach(function(gaugeItem) {
    var data = gaugeItem.data, details = gaugeItem.details, center = gaugeItem.center;
    var position = details.position, offset = details.offset;
    var detailsPosition = data.map(function(_ref3) {
      var startAngle = _ref3.startAngle, endAngle = _ref3.endAngle, radius = _ref3.radius;
      var point = null;
      if (position === "center") {
        point = center;
      } else if (position === "start") {
        point = _util$1.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([radius, startAngle]));
      } else if (position === "end") {
        point = _util$1.getCircleRadianPoint.apply(void 0, (0, _toConsumableArray2["default"])(center).concat([radius, endAngle]));
      }
      return getOffsetedPoint(point, offset);
    });
    gaugeItem.detailsPosition = detailsPosition;
  });
  return gauges;
}
function calcGaugesDetailsContent(gauges, chart) {
  gauges.forEach(function(gaugeItem) {
    var data = gaugeItem.data, details = gaugeItem.details;
    var formatter = details.formatter;
    var formatterType = (0, _typeof2$1["default"])(formatter);
    var contents = data.map(function(dataItem) {
      var content = dataItem.value;
      if (formatterType === "string") {
        content = formatter.replace("{value}", "{nt}");
        content = content.replace("{name}", dataItem.name);
      }
      if (formatterType === "function")
        content = formatter(dataItem);
      return content.toString();
    });
    gaugeItem.detailsContent = contents;
  });
  return gauges;
}
function getOffsetedPoint(_ref4, _ref5) {
  var _ref6 = (0, _slicedToArray2$1["default"])(_ref4, 2), x = _ref6[0], y = _ref6[1];
  var _ref7 = (0, _slicedToArray2$1["default"])(_ref5, 2), ox = _ref7[0], oy = _ref7[1];
  return [x + ox, y + oy];
}
function getAxisTickConfig(gaugeItem) {
  var tickPosition = gaugeItem.tickPosition, animationCurve = gaugeItem.animationCurve, animationFrame = gaugeItem.animationFrame, rLevel = gaugeItem.rLevel;
  return tickPosition.map(function(foo, i) {
    return {
      name: "polyline",
      index: rLevel,
      visible: gaugeItem.axisTick.show,
      animationCurve,
      animationFrame,
      shape: getAxisTickShape(gaugeItem, i),
      style: getAxisTickStyle(gaugeItem)
    };
  });
}
function getAxisTickShape(gaugeItem, i) {
  var tickPosition = gaugeItem.tickPosition;
  return {
    points: tickPosition[i]
  };
}
function getAxisTickStyle(gaugeItem, i) {
  var style = gaugeItem.axisTick.style;
  return style;
}
function getAxisLabelConfig(gaugeItem) {
  var labelPosition = gaugeItem.labelPosition, animationCurve = gaugeItem.animationCurve, animationFrame = gaugeItem.animationFrame, rLevel = gaugeItem.rLevel;
  return labelPosition.map(function(foo, i) {
    return {
      name: "text",
      index: rLevel,
      visible: gaugeItem.axisLabel.show,
      animationCurve,
      animationFrame,
      shape: getAxisLabelShape(gaugeItem, i),
      style: getAxisLabelStyle(gaugeItem, i)
    };
  });
}
function getAxisLabelShape(gaugeItem, i) {
  var labelPosition = gaugeItem.labelPosition, data = gaugeItem.axisLabel.data;
  return {
    content: data[i].toString(),
    position: labelPosition[i]
  };
}
function getAxisLabelStyle(gaugeItem, i) {
  var labelAlign = gaugeItem.labelAlign, axisLabel = gaugeItem.axisLabel;
  var style = axisLabel.style;
  return (0, _util2$1.deepMerge)(_objectSpread({}, labelAlign[i]), style);
}
function getBackgroundArcConfig(gaugeItem) {
  var animationCurve = gaugeItem.animationCurve, animationFrame = gaugeItem.animationFrame, rLevel = gaugeItem.rLevel;
  return [{
    name: "arc",
    index: rLevel,
    visible: gaugeItem.backgroundArc.show,
    animationCurve,
    animationFrame,
    shape: getGaugeBackgroundArcShape(gaugeItem),
    style: getGaugeBackgroundArcStyle(gaugeItem)
  }];
}
function getGaugeBackgroundArcShape(gaugeItem) {
  var startAngle = gaugeItem.startAngle, endAngle = gaugeItem.endAngle, center = gaugeItem.center, radius = gaugeItem.radius;
  return {
    rx: center[0],
    ry: center[1],
    r: radius,
    startAngle,
    endAngle
  };
}
function getGaugeBackgroundArcStyle(gaugeItem) {
  var backgroundArc = gaugeItem.backgroundArc, arcLineWidth = gaugeItem.arcLineWidth;
  var style = backgroundArc.style;
  return (0, _util2$1.deepMerge)({
    lineWidth: arcLineWidth
  }, style);
}
function getStartBackgroundArcConfig(gaugeItem) {
  var config2 = getBackgroundArcConfig(gaugeItem)[0];
  var shape = _objectSpread({}, config2.shape);
  shape.endAngle = config2.shape.startAngle;
  config2.shape = shape;
  return [config2];
}
function getArcConfig(gaugeItem) {
  var data = gaugeItem.data, animationCurve = gaugeItem.animationCurve, animationFrame = gaugeItem.animationFrame, rLevel = gaugeItem.rLevel;
  return data.map(function(foo, i) {
    return {
      name: "agArc",
      index: rLevel,
      animationCurve,
      animationFrame,
      shape: getGaugeArcShape(gaugeItem, i),
      style: getGaugeArcStyle(gaugeItem, i)
    };
  });
}
function getGaugeArcShape(gaugeItem, i) {
  var data = gaugeItem.data, center = gaugeItem.center, gradientEndAngle = gaugeItem.endAngle;
  var _data$i = data[i], radius = _data$i.radius, startAngle = _data$i.startAngle, endAngle = _data$i.endAngle, localGradient = _data$i.localGradient;
  if (localGradient)
    gradientEndAngle = endAngle;
  return {
    rx: center[0],
    ry: center[1],
    r: radius,
    startAngle,
    endAngle,
    gradientEndAngle
  };
}
function getGaugeArcStyle(gaugeItem, i) {
  var data = gaugeItem.data, dataItemStyle = gaugeItem.dataItemStyle;
  var _data$i2 = data[i], lineWidth = _data$i2.lineWidth, gradient = _data$i2.gradient;
  gradient = gradient.map(function(c) {
    return (0, _color.getRgbaValue)(c);
  });
  return (0, _util2$1.deepMerge)({
    lineWidth,
    gradient
  }, dataItemStyle);
}
function getStartArcConfig(gaugeItem) {
  var configs = getArcConfig(gaugeItem);
  configs.map(function(config2) {
    var shape = _objectSpread({}, config2.shape);
    shape.endAngle = config2.shape.startAngle;
    config2.shape = shape;
  });
  return configs;
}
function beforeChangeArc(graph, config2) {
  var graphGradient = graph.style.gradient;
  var cacheNum = graphGradient.length;
  var needNum = config2.style.gradient.length;
  if (cacheNum > needNum) {
    graphGradient.splice(needNum);
  } else {
    var last = graphGradient.slice(-1)[0];
    graphGradient.push.apply(graphGradient, (0, _toConsumableArray2["default"])(new Array(needNum - cacheNum).fill(0).map(function(foo) {
      return (0, _toConsumableArray2["default"])(last);
    })));
  }
}
function getPointerConfig(gaugeItem) {
  var animationCurve = gaugeItem.animationCurve, animationFrame = gaugeItem.animationFrame, center = gaugeItem.center, rLevel = gaugeItem.rLevel;
  return [{
    name: "polyline",
    index: rLevel,
    visible: gaugeItem.pointer.show,
    animationCurve,
    animationFrame,
    shape: getPointerShape(gaugeItem),
    style: getPointerStyle(gaugeItem),
    setGraphCenter: function setGraphCenter2(foo, graph) {
      graph.style.graphCenter = center;
    }
  }];
}
function getPointerShape(gaugeItem) {
  var center = gaugeItem.center;
  return {
    points: getPointerPoints(center),
    close: true
  };
}
function getPointerStyle(gaugeItem) {
  var startAngle = gaugeItem.startAngle, endAngle = gaugeItem.endAngle, min = gaugeItem.min, max = gaugeItem.max, data = gaugeItem.data, pointer = gaugeItem.pointer, center = gaugeItem.center;
  var valueIndex = pointer.valueIndex, style = pointer.style;
  var value = data[valueIndex] ? data[valueIndex].value : 0;
  var angle = (value - min) / (max - min) * (endAngle - startAngle) + startAngle + Math.PI / 2;
  return (0, _util2$1.deepMerge)({
    rotate: (0, _util2$1.radianToAngle)(angle),
    scale: [1, 1],
    graphCenter: center
  }, style);
}
function getPointerPoints(_ref8) {
  var _ref9 = (0, _slicedToArray2$1["default"])(_ref8, 2), x = _ref9[0], y = _ref9[1];
  var point1 = [x, y - 40];
  var point2 = [x + 5, y];
  var point3 = [x, y + 10];
  var point4 = [x - 5, y];
  return [point1, point2, point3, point4];
}
function getStartPointerConfig(gaugeItem) {
  var startAngle = gaugeItem.startAngle;
  var config2 = getPointerConfig(gaugeItem)[0];
  config2.style.rotate = (0, _util2$1.radianToAngle)(startAngle + Math.PI / 2);
  return [config2];
}
function getDetailsConfig(gaugeItem) {
  var detailsPosition = gaugeItem.detailsPosition, animationCurve = gaugeItem.animationCurve, animationFrame = gaugeItem.animationFrame, rLevel = gaugeItem.rLevel;
  var visible = gaugeItem.details.show;
  return detailsPosition.map(function(foo, i) {
    return {
      name: "numberText",
      index: rLevel,
      visible,
      animationCurve,
      animationFrame,
      shape: getDetailsShape(gaugeItem, i),
      style: getDetailsStyle(gaugeItem, i)
    };
  });
}
function getDetailsShape(gaugeItem, i) {
  var detailsPosition = gaugeItem.detailsPosition, detailsContent = gaugeItem.detailsContent, data = gaugeItem.data, details = gaugeItem.details;
  var position = detailsPosition[i];
  var content = detailsContent[i];
  var dataValue = data[i].value;
  var toFixed = details.valueToFixed;
  return {
    number: [dataValue],
    content,
    position,
    toFixed
  };
}
function getDetailsStyle(gaugeItem, i) {
  var details = gaugeItem.details, data = gaugeItem.data;
  var style = details.style;
  var color2 = data[i].color;
  return (0, _util2$1.deepMerge)({
    fill: color2
  }, style);
}
var legend$1 = {};
var _interopRequireDefault = interopRequireDefault.exports;
Object.defineProperty(legend$1, "__esModule", {
  value: true
});
legend$1.legend = legend;
var _defineProperty2 = _interopRequireDefault(defineProperty.exports);
var _slicedToArray2 = _interopRequireDefault(slicedToArray.exports);
var _typeof2 = _interopRequireDefault(_typeof.exports);
var _updater = updater_class;
var _util = util$1;
var _config = config;
var _util2 = util;
function legend(chart) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var legend2 = option.legend;
  if (legend2) {
    legend2 = (0, _util2.deepMerge)((0, _util.deepClone)(_config.legendConfig, true), legend2);
    legend2 = initLegendData(legend2);
    legend2 = filterInvalidData(legend2, option, chart);
    legend2 = calcLegendTextWidth(legend2, chart);
    legend2 = calcLegendPosition(legend2, chart);
    legend2 = [legend2];
  } else {
    legend2 = [];
  }
  (0, _updater.doUpdate)({
    chart,
    series: legend2,
    key: "legendIcon",
    getGraphConfig: getIconConfig
  });
  (0, _updater.doUpdate)({
    chart,
    series: legend2,
    key: "legendText",
    getGraphConfig: getTextConfig
  });
}
function initLegendData(legend2) {
  var data = legend2.data;
  legend2.data = data.map(function(item) {
    var itemType = (0, _typeof2["default"])(item);
    if (itemType === "string") {
      return {
        name: item
      };
    } else if (itemType === "object") {
      return item;
    }
    return {
      name: ""
    };
  });
  return legend2;
}
function filterInvalidData(legend2, option, chart) {
  var series = option.series;
  var legendStatus = chart.legendStatus;
  var data = legend2.data.filter(function(item) {
    var name = item.name;
    var result = series.find(function(_ref) {
      var sn = _ref.name;
      return name === sn;
    });
    if (!result)
      return false;
    if (!item.color)
      item.color = result.color;
    if (!item.icon)
      item.icon = result.type;
    return item;
  });
  if (!legendStatus || legendStatus.length !== legend2.data.length)
    legendStatus = new Array(legend2.data.length).fill(true);
  data.forEach(function(item, i) {
    return item.status = legendStatus[i];
  });
  legend2.data = data;
  chart.legendStatus = legendStatus;
  return legend2;
}
function calcLegendTextWidth(legend2, chart) {
  var ctx = chart.render.ctx;
  var data = legend2.data, textStyle = legend2.textStyle, textUnselectedStyle = legend2.textUnselectedStyle;
  data.forEach(function(item) {
    var status = item.status, name = item.name;
    item.textWidth = getTextWidth(ctx, name, status ? textStyle : textUnselectedStyle);
  });
  return legend2;
}
function getTextWidth(ctx, text, style) {
  ctx.font = getFontConfig(style);
  return ctx.measureText(text).width;
}
function getFontConfig(style) {
  var fontFamily = style.fontFamily, fontSize = style.fontSize;
  return "".concat(fontSize, "px ").concat(fontFamily);
}
function calcLegendPosition(legend2, chart) {
  var orient = legend2.orient;
  if (orient === "vertical") {
    calcVerticalPosition(legend2, chart);
  } else {
    calcHorizontalPosition(legend2, chart);
  }
  return legend2;
}
function calcHorizontalPosition(legend2, chart) {
  var iconHeight = legend2.iconHeight, itemGap = legend2.itemGap;
  var lines = calcDefaultHorizontalPosition(legend2, chart);
  var xOffsets = lines.map(function(line2) {
    return getHorizontalXOffset(line2, legend2, chart);
  });
  var yOffset = getHorizontalYOffset(legend2, chart);
  var align = {
    textAlign: "left",
    textBaseline: "middle"
  };
  lines.forEach(function(line2, i) {
    return line2.forEach(function(item) {
      var iconPosition = item.iconPosition, textPosition = item.textPosition;
      var xOffset = xOffsets[i];
      var realYOffset = yOffset + i * (itemGap + iconHeight);
      item.iconPosition = mergeOffset(iconPosition, [xOffset, realYOffset]);
      item.textPosition = mergeOffset(textPosition, [xOffset, realYOffset]);
      item.align = align;
    });
  });
}
function calcDefaultHorizontalPosition(legend2, chart) {
  var data = legend2.data, iconWidth = legend2.iconWidth;
  var w = chart.render.area[0];
  var startIndex = 0;
  var lines = [[]];
  data.forEach(function(item, i) {
    var beforeWidth = getBeforeWidth(startIndex, i, legend2);
    var endXPos = beforeWidth + iconWidth + 5 + item.textWidth;
    if (endXPos >= w) {
      startIndex = i;
      beforeWidth = getBeforeWidth(startIndex, i, legend2);
      lines.push([]);
    }
    item.iconPosition = [beforeWidth, 0];
    item.textPosition = [beforeWidth + iconWidth + 5, 0];
    lines.slice(-1)[0].push(item);
  });
  return lines;
}
function getBeforeWidth(startIndex, currentIndex, legend2) {
  var data = legend2.data, iconWidth = legend2.iconWidth, itemGap = legend2.itemGap;
  var beforeItem = data.slice(startIndex, currentIndex);
  return (0, _util2.mulAdd)(beforeItem.map(function(_ref2) {
    var textWidth = _ref2.textWidth;
    return textWidth;
  })) + (currentIndex - startIndex) * (itemGap + 5 + iconWidth);
}
function getHorizontalXOffset(data, legend2, chart) {
  var left = legend2.left, right = legend2.right, iconWidth = legend2.iconWidth, itemGap = legend2.itemGap;
  var w = chart.render.area[0];
  var dataNum = data.length;
  var allWidth = (0, _util2.mulAdd)(data.map(function(_ref3) {
    var textWidth = _ref3.textWidth;
    return textWidth;
  })) + dataNum * (5 + iconWidth) + (dataNum - 1) * itemGap;
  var horizontal = [left, right].findIndex(function(pos) {
    return pos !== "auto";
  });
  if (horizontal === -1) {
    return (w - allWidth) / 2;
  } else if (horizontal === 0) {
    if (typeof left === "number")
      return left;
    return parseInt(left) / 100 * w;
  } else {
    if (typeof right !== "number")
      right = parseInt(right) / 100 * w;
    return w - (allWidth + right);
  }
}
function getHorizontalYOffset(legend2, chart) {
  var top = legend2.top, bottom = legend2.bottom, iconHeight = legend2.iconHeight;
  var h = chart.render.area[1];
  var vertical = [top, bottom].findIndex(function(pos) {
    return pos !== "auto";
  });
  var halfIconHeight = iconHeight / 2;
  if (vertical === -1) {
    var _chart$gridArea = chart.gridArea, y = _chart$gridArea.y, height = _chart$gridArea.h;
    return y + height + 45 - halfIconHeight;
  } else if (vertical === 0) {
    if (typeof top === "number")
      return top - halfIconHeight;
    return parseInt(top) / 100 * h - halfIconHeight;
  } else {
    if (typeof bottom !== "number")
      bottom = parseInt(bottom) / 100 * h;
    return h - bottom - halfIconHeight;
  }
}
function mergeOffset(_ref4, _ref5) {
  var _ref6 = (0, _slicedToArray2["default"])(_ref4, 2), x = _ref6[0], y = _ref6[1];
  var _ref7 = (0, _slicedToArray2["default"])(_ref5, 2), ox = _ref7[0], oy = _ref7[1];
  return [x + ox, y + oy];
}
function calcVerticalPosition(legend2, chart) {
  var _getVerticalXOffset = getVerticalXOffset(legend2, chart), _getVerticalXOffset2 = (0, _slicedToArray2["default"])(_getVerticalXOffset, 2), isRight = _getVerticalXOffset2[0], xOffset = _getVerticalXOffset2[1];
  var yOffset = getVerticalYOffset(legend2, chart);
  calcDefaultVerticalPosition(legend2, isRight);
  var align = {
    textAlign: "left",
    textBaseline: "middle"
  };
  legend2.data.forEach(function(item) {
    var textPosition = item.textPosition, iconPosition = item.iconPosition;
    item.textPosition = mergeOffset(textPosition, [xOffset, yOffset]);
    item.iconPosition = mergeOffset(iconPosition, [xOffset, yOffset]);
    item.align = align;
  });
}
function getVerticalXOffset(legend2, chart) {
  var left = legend2.left, right = legend2.right;
  var w = chart.render.area[0];
  var horizontal = [left, right].findIndex(function(pos) {
    return pos !== "auto";
  });
  if (horizontal === -1) {
    return [true, w - 10];
  } else {
    var offset = [left, right][horizontal];
    if (typeof offset !== "number")
      offset = parseInt(offset) / 100 * w;
    return [Boolean(horizontal), offset];
  }
}
function getVerticalYOffset(legend2, chart) {
  var iconHeight = legend2.iconHeight, itemGap = legend2.itemGap, data = legend2.data, top = legend2.top, bottom = legend2.bottom;
  var h = chart.render.area[1];
  var dataNum = data.length;
  var allHeight = dataNum * iconHeight + (dataNum - 1) * itemGap;
  var vertical = [top, bottom].findIndex(function(pos) {
    return pos !== "auto";
  });
  if (vertical === -1) {
    return (h - allHeight) / 2;
  } else {
    var offset = [top, bottom][vertical];
    if (typeof offset !== "number")
      offset = parseInt(offset) / 100 * h;
    if (vertical === 1)
      offset = h - offset - allHeight;
    return offset;
  }
}
function calcDefaultVerticalPosition(legend2, isRight) {
  var data = legend2.data, iconWidth = legend2.iconWidth, iconHeight = legend2.iconHeight, itemGap = legend2.itemGap;
  var halfIconHeight = iconHeight / 2;
  data.forEach(function(item, i) {
    var textWidth = item.textWidth;
    var yPos = (iconHeight + itemGap) * i + halfIconHeight;
    var iconXPos = isRight ? 0 - iconWidth : 0;
    var textXpos = isRight ? iconXPos - 5 - textWidth : iconWidth + 5;
    item.iconPosition = [iconXPos, yPos];
    item.textPosition = [textXpos, yPos];
  });
}
function getIconConfig(legendItem, updater) {
  var data = legendItem.data, selectAble = legendItem.selectAble, animationCurve = legendItem.animationCurve, animationFrame = legendItem.animationFrame, rLevel = legendItem.rLevel;
  return data.map(function(item, i) {
    return (0, _defineProperty2["default"])({
      name: item.icon === "line" ? "lineIcon" : "rect",
      index: rLevel,
      visible: legendItem.show,
      hover: selectAble,
      click: selectAble,
      animationCurve,
      animationFrame,
      shape: getIconShape(legendItem, i),
      style: getIconStyle(legendItem, i)
    }, "click", createClickCallBack(legendItem, i, updater));
  });
}
function getIconShape(legendItem, i) {
  var data = legendItem.data, iconWidth = legendItem.iconWidth, iconHeight = legendItem.iconHeight;
  var _data$i$iconPosition = (0, _slicedToArray2["default"])(data[i].iconPosition, 2), x = _data$i$iconPosition[0], y = _data$i$iconPosition[1];
  var halfIconHeight = iconHeight / 2;
  return {
    x,
    y: y - halfIconHeight,
    w: iconWidth,
    h: iconHeight
  };
}
function getIconStyle(legendItem, i) {
  var data = legendItem.data, iconStyle = legendItem.iconStyle, iconUnselectedStyle = legendItem.iconUnselectedStyle;
  var _data$i = data[i], status = _data$i.status, color2 = _data$i.color;
  var style = status ? iconStyle : iconUnselectedStyle;
  return (0, _util2.deepMerge)({
    fill: color2
  }, style);
}
function getTextConfig(legendItem, updater) {
  var data = legendItem.data, selectAble = legendItem.selectAble, animationCurve = legendItem.animationCurve, animationFrame = legendItem.animationFrame, rLevel = legendItem.rLevel;
  return data.map(function(foo, i) {
    return {
      name: "text",
      index: rLevel,
      visible: legendItem.show,
      hover: selectAble,
      animationCurve,
      animationFrame,
      hoverRect: getTextHoverRect(legendItem, i),
      shape: getTextShape(legendItem, i),
      style: getTextStyle(legendItem, i),
      click: createClickCallBack(legendItem, i, updater)
    };
  });
}
function getTextShape(legendItem, i) {
  var _legendItem$data$i = legendItem.data[i], textPosition = _legendItem$data$i.textPosition, name = _legendItem$data$i.name;
  return {
    content: name,
    position: textPosition
  };
}
function getTextStyle(legendItem, i) {
  var textStyle = legendItem.textStyle, textUnselectedStyle = legendItem.textUnselectedStyle;
  var _legendItem$data$i2 = legendItem.data[i], status = _legendItem$data$i2.status, align = _legendItem$data$i2.align;
  var style = status ? textStyle : textUnselectedStyle;
  return (0, _util2.deepMerge)((0, _util.deepClone)(style, true), align);
}
function getTextHoverRect(legendItem, i) {
  var textStyle = legendItem.textStyle, textUnselectedStyle = legendItem.textUnselectedStyle;
  var _legendItem$data$i3 = legendItem.data[i], status = _legendItem$data$i3.status, _legendItem$data$i3$t = (0, _slicedToArray2["default"])(_legendItem$data$i3.textPosition, 2), x = _legendItem$data$i3$t[0], y = _legendItem$data$i3$t[1], textWidth = _legendItem$data$i3.textWidth;
  var style = status ? textStyle : textUnselectedStyle;
  var fontSize = style.fontSize;
  return [x, y - fontSize / 2, textWidth, fontSize];
}
function createClickCallBack(legendItem, index, updater) {
  var name = legendItem.data[index].name;
  return function() {
    var _updater$chart = updater.chart, legendStatus = _updater$chart.legendStatus, option = _updater$chart.option;
    var status = !legendStatus[index];
    var change = option.series.find(function(_ref9) {
      var sn = _ref9.name;
      return sn === name;
    });
    change.show = status;
    legendStatus[index] = status;
    updater.chart.setOption(option);
  };
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "mergeColor", {
    enumerable: true,
    get: function get() {
      return _mergeColor.mergeColor;
    }
  });
  Object.defineProperty(exports, "title", {
    enumerable: true,
    get: function get() {
      return _title.title;
    }
  });
  Object.defineProperty(exports, "grid", {
    enumerable: true,
    get: function get() {
      return _grid.grid;
    }
  });
  Object.defineProperty(exports, "axis", {
    enumerable: true,
    get: function get() {
      return _axis.axis;
    }
  });
  Object.defineProperty(exports, "line", {
    enumerable: true,
    get: function get() {
      return _line.line;
    }
  });
  Object.defineProperty(exports, "bar", {
    enumerable: true,
    get: function get() {
      return _bar.bar;
    }
  });
  Object.defineProperty(exports, "pie", {
    enumerable: true,
    get: function get() {
      return _pie2.pie;
    }
  });
  Object.defineProperty(exports, "radarAxis", {
    enumerable: true,
    get: function get() {
      return _radarAxis.radarAxis;
    }
  });
  Object.defineProperty(exports, "radar", {
    enumerable: true,
    get: function get() {
      return _radar.radar;
    }
  });
  Object.defineProperty(exports, "gauge", {
    enumerable: true,
    get: function get() {
      return _gauge2.gauge;
    }
  });
  Object.defineProperty(exports, "legend", {
    enumerable: true,
    get: function get() {
      return _legend.legend;
    }
  });
  var _mergeColor = mergeColor$1;
  var _title = title$1;
  var _grid = grid$1;
  var _axis = axis$1;
  var _line = line$1;
  var _bar = bar$1;
  var _pie2 = pie$1;
  var _radarAxis = radarAxis$1;
  var _radar = radar$1;
  var _gauge2 = gauge$1;
  var _legend = legend$1;
})(core);
(function(exports) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _typeof22 = _interopRequireDefault2(_typeof.exports);
  var _classCallCheck22 = _interopRequireDefault2(classCallCheck.exports);
  var _cRender2 = _interopRequireDefault2(lib$4);
  var _util3 = util$1;
  var _core = core;
  var Charts2 = function Charts3(dom) {
    (0, _classCallCheck22["default"])(this, Charts3);
    if (!dom) {
      console.error("Charts Missing parameters!");
      return false;
    }
    var clientWidth = dom.clientWidth, clientHeight = dom.clientHeight;
    var canvas2 = document.createElement("canvas");
    canvas2.setAttribute("width", clientWidth);
    canvas2.setAttribute("height", clientHeight);
    dom.appendChild(canvas2);
    var attribute = {
      container: dom,
      canvas: canvas2,
      render: new _cRender2["default"](canvas2),
      option: null
    };
    Object.assign(this, attribute);
  };
  exports["default"] = Charts2;
  Charts2.prototype.setOption = function(option) {
    var animationEnd = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (!option || (0, _typeof22["default"])(option) !== "object") {
      console.error("setOption Missing parameters!");
      return false;
    }
    if (animationEnd)
      this.render.graphs.forEach(function(graph) {
        return graph.animationEnd();
      });
    var optionCloned = (0, _util3.deepClone)(option, true);
    (0, _core.mergeColor)(this, optionCloned);
    (0, _core.grid)(this, optionCloned);
    (0, _core.axis)(this, optionCloned);
    (0, _core.radarAxis)(this, optionCloned);
    (0, _core.title)(this, optionCloned);
    (0, _core.bar)(this, optionCloned);
    (0, _core.line)(this, optionCloned);
    (0, _core.pie)(this, optionCloned);
    (0, _core.radar)(this, optionCloned);
    (0, _core.gauge)(this, optionCloned);
    (0, _core.legend)(this, optionCloned);
    this.option = option;
    this.render.launchAnimation();
  };
  Charts2.prototype.resize = function() {
    var container = this.container, canvas2 = this.canvas, render = this.render, option = this.option;
    var clientWidth = container.clientWidth, clientHeight = container.clientHeight;
    canvas2.setAttribute("width", clientWidth);
    canvas2.setAttribute("height", clientHeight);
    render.area = [clientWidth, clientHeight];
    this.setOption(option);
  };
})(charts_class);
(function(exports) {
  var _interopRequireDefault2 = interopRequireDefault.exports;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "changeDefaultConfig", {
    enumerable: true,
    get: function get() {
      return _config2.changeDefaultConfig;
    }
  });
  exports["default"] = void 0;
  var _charts = _interopRequireDefault2(charts_class);
  var _config2 = config;
  var _default = _charts["default"];
  exports["default"] = _default;
})(lib);
var Charts = /* @__PURE__ */ getDefaultExportFromCjs(lib);
var index_vue_vue_type_style_index_0_lang$t = "";
const _sfc_main$t = {
  __name: "index",
  props: {
    option: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const chartsContainerRef = ref(null);
    const chartRef = ref(null);
    let chart = reactive({});
    autoResize(chartRef, onResize, afterAutoResizeMixinInit);
    watch(() => props.option, () => {
      if (!chart)
        return;
      chart.setOption(props.option, true);
    }, { deep: true });
    function afterAutoResizeMixinInit() {
      initChart();
    }
    function initChart() {
      chart = new Charts(chartRef.value);
      if (!props.option)
        return;
      chart.setOption(props.option);
    }
    function onResize() {
      if (!chart)
        return;
      chart.resize();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "chartsContainerRef",
        ref: chartsContainerRef,
        class: "dv-charts-container"
      }, [
        createElementVNode("div", {
          ref_key: "chartRef",
          ref: chartRef,
          class: "charts-canvas-container"
        }, null, 512)
      ], 512);
    };
  }
};
const ChartsPlugin = {
  install(app) {
    app.component("DvCharts", _sfc_main$t);
  }
};
var index_vue_vue_type_style_index_0_lang$s = "";
const _hoisted_1$r = { class: "dv-capsule-chart" };
const _hoisted_2$q = { class: "label-column" };
const _hoisted_3$p = /* @__PURE__ */ createElementVNode("div", null, "\xA0", -1);
const _hoisted_4$n = { class: "capsule-container" };
const _hoisted_5$k = {
  key: 0,
  class: "capsule-item-value"
};
const _hoisted_6$i = { class: "unit-label" };
const _hoisted_7$h = {
  key: 0,
  class: "unit-text"
};
const _sfc_main$s = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const state = reactive({
      defaultConfig: {
        data: [],
        colors: [
          "#37a2da",
          "#32c5e9",
          "#67e0e3",
          "#9fe6b8",
          "#ffdb5c",
          "#ff9f7f",
          "#fb7293"
        ],
        unit: "",
        showValue: false
      },
      mergedConfig: null,
      capsuleLength: [],
      capsuleValue: [],
      labelData: [],
      labelDataLength: []
    });
    watch(() => props.config, () => {
      calcData();
    }, {
      deep: true
    });
    function calcData() {
      mergeConfig();
      calcCapsuleLengthAndLabelData();
    }
    function mergeConfig() {
      state.mergedConfig = deepMerge$1(
        deepClone(state.defaultConfig, true),
        props.config || {}
      );
    }
    function calcCapsuleLengthAndLabelData() {
      const { data } = state.mergedConfig;
      if (!data.length)
        return;
      const capsuleValue = data.map(({ value }) => value);
      const maxValue = Math.max(...capsuleValue);
      state.capsuleValue = capsuleValue;
      state.capsuleLength = capsuleValue.map((v) => maxValue ? v / maxValue : 0);
      const oneFifth = maxValue / 5;
      const labelData = Array.from(
        new Set(new Array(6).fill(0).map((v, i) => Math.ceil(i * oneFifth)))
      );
      state.labelData = labelData;
      state.labelDataLength = Array.from(labelData).map(
        (v) => maxValue ? v / maxValue : 0
      );
    }
    onMounted(() => {
      calcData();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$r, [
        state.mergedConfig ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createElementVNode("div", _hoisted_2$q, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(state.mergedConfig.data, (item) => {
              return openBlock(), createElementBlock("div", {
                key: item.name
              }, toDisplayString(item.name), 1);
            }), 128)),
            _hoisted_3$p
          ]),
          createElementVNode("div", _hoisted_4$n, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(state.capsuleLength, (capsule, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "capsule-item"
              }, [
                createElementVNode("div", {
                  class: "capsule-item-column",
                  style: normalizeStyle(`width: ${capsule * 100}%; background-color: ${state.mergedConfig.colors[index % state.mergedConfig.colors.length]};`)
                }, [
                  state.mergedConfig.showValue ? (openBlock(), createElementBlock("div", _hoisted_5$k, toDisplayString(state.capsuleValue[index]), 1)) : createCommentVNode("", true)
                ], 4)
              ]);
            }), 128)),
            createElementVNode("div", _hoisted_6$i, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(state.labelData, (label, index) => {
                return openBlock(), createElementBlock("div", {
                  key: label + index
                }, toDisplayString(label), 1);
              }), 128))
            ])
          ]),
          state.mergedConfig.unit ? (openBlock(), createElementBlock("div", _hoisted_7$h, toDisplayString(state.mergedConfig.unit), 1)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ]);
    };
  }
};
const CapsuleChartPlugin = {
  install(app) {
    app.component("DvCapsuleChart", _sfc_main$s);
  }
};
var index_vue_vue_type_style_index_0_lang$r = "";
const _hoisted_1$q = { class: "dv-digital-flop" };
const _sfc_main$r = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    const digitalFlop = ref(null);
    const state = reactive({
      renderer: null,
      defaultConfig: {
        number: [],
        content: "",
        toFixed: 0,
        textAlign: "center",
        rowGap: 0,
        style: {
          fontSize: 30,
          fill: "#3de7c9"
        },
        formatter: void 0,
        animationCurve: "easeOutCubic",
        animationFrame: 50
      },
      mergedConfig: null,
      graph: null
    });
    watch(() => props.config, (newVal) => {
      update();
    }, { deep: true });
    onMounted(() => {
      init();
    });
    function init() {
      initRender();
      mergeConfig();
      initGraph();
    }
    function initRender() {
      state.renderer = new CRender(digitalFlop.value);
    }
    function mergeConfig() {
      state.mergedConfig = deepMerge$1(deepClone(state.defaultConfig, true), props.config || {});
    }
    function initGraph() {
      const shape = getShape();
      const style = getStyle();
      state.graph = state.renderer.add({
        name: "numberText",
        animationCurve: state.mergedConfig.animationCurve,
        animationFrame: state.mergedConfig.animationFrame,
        shape,
        style
      });
    }
    function getShape() {
      const { number, content, toFixed, textAlign, rowGap, formatter } = state.mergedConfig;
      const [w, h] = state.renderer.area;
      const position = [w / 2, h / 2];
      if (textAlign === "left")
        position[0] = 0;
      if (textAlign === "right")
        position[0] = w;
      return {
        number,
        content,
        toFixed,
        position,
        rowGap,
        formatter
      };
    }
    function getStyle() {
      const { style, textAlign } = state.mergedConfig;
      return deepMerge$1(style, {
        textAlign,
        textBaseline: "middle"
      });
    }
    function update() {
      state.graph.animationEnd();
      mergeConfig();
      if (!state.graph)
        return;
      const { animationCurve, animationFrame } = state.mergedConfig;
      const shape = getShape();
      const style = getStyle();
      mergeShape(state.graph, shape);
      state.graph.animationCurve = animationCurve;
      state.graph.animationFrame = animationFrame;
      state.graph.animation("style", style, true);
      state.graph.animation("shape", shape);
    }
    function mergeShape(graph, shape) {
      const cacheNum = graph.shape.number.length;
      const shapeNum = shape.number.length;
      if (cacheNum !== shapeNum)
        graph.shape.number = shape.number;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$q, [
        createElementVNode("canvas", {
          ref_key: "digitalFlop",
          ref: digitalFlop
        }, null, 512)
      ]);
    };
  }
};
var index_vue_vue_type_style_index_0_lang$q = "";
const _hoisted_1$p = { class: "dv-active-ring-chart" };
const _hoisted_2$p = { class: "active-ring-info" };
const _sfc_main$q = {
  __name: "index",
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const activeRingChart = ref(null);
    const state = reactive({
      defaultConfig: {
        radius: "50%",
        activeRadius: "55%",
        data: [{ name: "", value: 0 }],
        lineWidth: 20,
        activeTimeGap: 3e3,
        color: [],
        digitalFlopStyle: {
          fontSize: 25,
          fill: "#fff"
        },
        digitalFlopToFixed: 0,
        digitalFlopUnit: "",
        animationCurve: "easeOutCubic",
        animationFrame: 50,
        showOriginValue: false
      },
      mergedConfig: null,
      chart: null,
      activeIndex: 0,
      animationHandler: ""
    });
    const digitalFlop = computed(() => {
      if (!state.mergedConfig)
        return {};
      const {
        digitalFlopStyle,
        digitalFlopToFixed,
        data,
        showOriginValue,
        digitalFlopUnit
      } = state.mergedConfig;
      const value = data.map(({ value: value2 }) => value2);
      let displayValue;
      if (showOriginValue) {
        displayValue = value[state.activeIndex];
      } else {
        const sum = value.reduce((all, v) => all + v, 0);
        const percent = parseFloat(value[state.activeIndex] / sum * 100) || 0;
        displayValue = percent;
      }
      return {
        content: showOriginValue ? `{nt}${digitalFlopUnit}` : `{nt}${digitalFlopUnit || "%"}`,
        number: [displayValue],
        style: digitalFlopStyle,
        toFixed: digitalFlopToFixed
      };
    });
    const ringName = computed(() => {
      if (!state.mergedConfig)
        return "";
      return state.mergedConfig.data[state.activeIndex].name;
    });
    const fontSize = computed(() => {
      if (!state.mergedConfig)
        return "";
      return `font-size: ${state.mergedConfig.digitalFlopStyle.fontSize}px;`;
    });
    watch(() => props.config, () => {
      clearTimeout(state.animationHandler);
      state.activeIndex = 0;
      mergeConfig();
      setRingOption();
    }, {
      deep: true
    });
    onMounted(() => {
      init();
    });
    onUnmounted(() => {
      clearTimeout(state.animationHandler);
    });
    function init() {
      initChart();
      mergeConfig();
      setRingOption();
    }
    function initChart() {
      state.chart = new Charts(activeRingChart.value);
    }
    function mergeConfig() {
      state.mergedConfig = deepMerge$1(
        deepClone(state.defaultConfig, true),
        props.config || {}
      );
    }
    function setRingOption() {
      const option = getRingOption();
      state.chart.setOption(option, true);
      ringAnimation();
    }
    function getRingOption() {
      const radius = getRealRadius();
      state.mergedConfig.data.forEach((dataItem) => {
        dataItem.radius = radius;
      });
      return {
        series: [
          {
            type: "pie",
            ...state.mergedConfig,
            outsideLabel: {
              show: false
            }
          }
        ],
        color: state.mergedConfig.color
      };
    }
    function getRealRadius(active = false) {
      const { radius, activeRadius, lineWidth } = state.mergedConfig;
      const maxRadius = Math.min(...state.chart.render.area) / 2;
      const halfLineWidth = lineWidth / 2;
      let realRadius = active ? activeRadius : radius;
      if (typeof realRadius !== "number")
        realRadius = parseInt(realRadius) / 100 * maxRadius;
      const insideRadius = realRadius - halfLineWidth;
      const outSideRadius = realRadius + halfLineWidth;
      return [insideRadius, outSideRadius];
    }
    function ringAnimation() {
      const radius = getRealRadius();
      const active = getRealRadius(true);
      const option = getRingOption();
      const { data } = option.series[0];
      data.forEach((dataItem, i) => {
        if (i === state.activeIndex)
          dataItem.radius = active;
        else
          dataItem.radius = radius;
      });
      state.chart.setOption(option, true);
      const { activeTimeGap } = option.series[0];
      state.animationHandler = setTimeout((foo) => {
        state.activeIndex += 1;
        if (state.activeIndex >= data.length)
          state.activeIndex = 0;
        ringAnimation();
      }, activeTimeGap);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$p, [
        createElementVNode("div", {
          ref_key: "activeRingChart",
          ref: activeRingChart,
          class: "active-ring-chart-container"
        }, null, 512),
        createElementVNode("div", _hoisted_2$p, [
          createVNode(_sfc_main$r, { config: unref(digitalFlop) }, null, 8, ["config"]),
          createElementVNode("div", {
            class: "active-ring-name",
            style: normalizeStyle(unref(fontSize))
          }, toDisplayString(unref(ringName)), 5)
        ])
      ]);
    };
  }
};
const ActiveRingChartPlugin = {
  install(app) {
    app.component("DvActiveRingChart", _sfc_main$q);
  }
};
const DigitalFlopPlugin = {
  install(app) {
    app.component("DvDigitalFlop", _sfc_main$r);
  }
};
var index_vue_vue_type_style_index_0_lang$p = "";
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const fullScreenContainer = ref(null);
    const state = reactive({
      allWidth: 0,
      scale: 0,
      datavRoot: "",
      ready: false
    });
    const initConfig = () => {
      const { width, height } = screen;
      state.allWidth = width;
      if (fullScreenContainer.value) {
        fullScreenContainer.value.style.width = `${width}px`;
        fullScreenContainer.value.style.height = `${height}px`;
      }
    };
    const setAppScale = () => {
      const currentWidth = document.body.clientWidth;
      if (fullScreenContainer.value)
        fullScreenContainer.value.style.transform = `scale(${currentWidth / state.allWidth})`;
    };
    const onResize = () => {
      setAppScale();
    };
    const afterAutoResizeMixinInit = () => {
      initConfig();
      setAppScale();
      state.ready = true;
    };
    autoResize(fullScreenContainer, onResize, afterAutoResizeMixinInit);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: "dv-full-screen-container",
        ref_key: "fullScreenContainer",
        ref: fullScreenContainer
      }, [
        state.ready ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("", true)
      ], 512);
    };
  }
});
const FullScreenContainerPlugin = {
  install(app) {
    app.component("DvFullScreenContainer", _sfc_main$p);
  }
};
var index_vue_vue_type_style_index_0_lang$o = "";
const _hoisted_1$o = ["width", "height"];
const _hoisted_2$o = ["fill", "x", "y", "width", "height"];
const _hoisted_3$o = ["values", "begin"];
const _hoisted_4$m = ["fill", "x", "y", "width", "height"];
const _hoisted_5$j = ["values"];
const _hoisted_6$h = ["values"];
const _hoisted_7$g = ["values"];
const _hoisted_8$e = ["values"];
const _hoisted_9$e = ["fill", "x", "y", "height"];
const _hoisted_10$a = /* @__PURE__ */ createElementVNode("animate", {
  attributeName: "width",
  values: "0;40;0",
  dur: "2s",
  repeatCount: "indefinite"
}, null, -1);
const _hoisted_11$8 = ["values"];
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const dvDecoration1 = ref(null);
    const svgWH = reactive([200, 50]);
    const rowNum = ref(4);
    const rowPoints = ref(20);
    const pointSideLength = ref(2.5);
    const halfPointSideLength = ref(pointSideLength.value / 2);
    const defaultColor = reactive(["#fff", "#0de7c2"]);
    const state = reactive({
      mergedColor: [],
      rects: [],
      points: [],
      svgScale: [1, 1]
    });
    const onResize = () => {
      calcSVGData();
    };
    const afterAutoResizeMixinInit = () => {
      calcSVGData();
    };
    const { width, height } = autoResize(dvDecoration1, onResize, afterAutoResizeMixinInit);
    const calcPointsPosition = () => {
      const [w, h] = svgWH;
      const horizontalGap = w / (rowPoints.value + 1);
      const verticalGap = h / (rowNum.value + 1);
      const newPoints = new Array(rowNum.value).fill(0).map((foo, i) => new Array(rowPoints.value).fill(0).map((foo2, j) => [
        horizontalGap * (j + 1),
        verticalGap * (i + 1)
      ]));
      state.points = newPoints.reduce((all, item) => [...all, ...item], []);
    };
    const calcRectsPosition = () => {
      const rect1 = state.points[rowPoints.value * 2 - 1];
      const rect2 = state.points[rowPoints.value * 2 - 3];
      state.rects = [rect1, rect2];
    };
    const calcScale = () => {
      const [w, h] = svgWH;
      state.svgScale = [width.value / w, height.value / h];
    };
    const calcSVGData = () => {
      calcPointsPosition();
      calcRectsPosition();
      calcScale();
    };
    const mergeColor2 = () => {
      state.mergedColor = deepMerge$1(deepClone(defaultColor, true), props.color || []);
    };
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "dvDecoration1",
        ref: dvDecoration1,
        class: "dv-decoration-1"
      }, [
        (openBlock(), createElementBlock("svg", {
          width: `${svgWH[0]}px`,
          height: `${svgWH[1]}px`,
          style: normalizeStyle(`transform:scale(${state.svgScale[0]}, ${state.svgScale[1]});`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(state.points, (point) => {
            return openBlock(), createElementBlock(Fragment, { key: point }, [
              Math.random() > 0.6 ? (openBlock(), createElementBlock("rect", {
                key: 0,
                fill: state.mergedColor[0],
                x: point[0] - halfPointSideLength.value,
                y: point[1] - halfPointSideLength.value,
                width: pointSideLength.value,
                height: pointSideLength.value
              }, [
                Math.random() > 0.6 ? (openBlock(), createElementBlock("animate", {
                  key: 0,
                  attributeName: "fill",
                  values: `${state.mergedColor[0]};transparent`,
                  dur: "1s",
                  begin: Math.random() * 2,
                  repeatCount: "indefinite"
                }, null, 8, _hoisted_3$o)) : createCommentVNode("", true)
              ], 8, _hoisted_2$o)) : createCommentVNode("", true)
            ], 64);
          }), 128)),
          state.rects[0] ? (openBlock(), createElementBlock("rect", {
            key: 0,
            fill: state.mergedColor[1],
            x: state.rects[0][0] - pointSideLength.value,
            y: state.rects[0][1] - pointSideLength.value,
            width: pointSideLength.value * 2,
            height: pointSideLength.value * 2
          }, [
            createElementVNode("animate", {
              attributeName: "width",
              values: `0;${pointSideLength.value * 2}`,
              dur: "2s",
              repeatCount: "indefinite"
            }, null, 8, _hoisted_5$j),
            createElementVNode("animate", {
              attributeName: "height",
              values: `0;${pointSideLength.value * 2}`,
              dur: "2s",
              repeatCount: "indefinite"
            }, null, 8, _hoisted_6$h),
            createElementVNode("animate", {
              attributeName: "x",
              values: `${state.rects[0][0]};${state.rects[0][0] - pointSideLength.value}`,
              dur: "2s",
              repeatCount: "indefinite"
            }, null, 8, _hoisted_7$g),
            createElementVNode("animate", {
              attributeName: "y",
              values: `${state.rects[0][1]};${state.rects[0][1] - pointSideLength.value}`,
              dur: "2s",
              repeatCount: "indefinite"
            }, null, 8, _hoisted_8$e)
          ], 8, _hoisted_4$m)) : createCommentVNode("", true),
          state.rects[1] ? (openBlock(), createElementBlock("rect", {
            key: 1,
            fill: state.mergedColor[1],
            x: state.rects[1][0] - 40,
            y: state.rects[1][1] - pointSideLength.value,
            width: 40,
            height: pointSideLength.value * 2
          }, [
            _hoisted_10$a,
            createElementVNode("animate", {
              attributeName: "x",
              values: `${state.rects[1][0]};${state.rects[1][0] - 40};${state.rects[1][0]}`,
              dur: "2s",
              repeatCount: "indefinite"
            }, null, 8, _hoisted_11$8)
          ], 8, _hoisted_9$e)) : createCommentVNode("", true)
        ], 12, _hoisted_1$o))
      ], 512);
    };
  }
});
const Decoration1Plugin = {
  install(app) {
    app.component("DvDecoration1", _sfc_main$o);
  }
};
var index_vue_vue_type_style_index_0_lang$n = "";
const _hoisted_1$n = ["width", "height"];
const _hoisted_2$n = ["x", "y", "width", "height", "fill"];
const _hoisted_3$n = ["attributeName", "to", "dur"];
const _hoisted_4$l = ["x", "y", "fill"];
const _hoisted_5$i = ["attributeName", "to", "dur"];
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    },
    reverse: {
      type: Boolean,
      default: false
    },
    dur: {
      type: Number,
      default: 6
    }
  },
  setup(__props) {
    const props = __props;
    const decoration2 = ref(null);
    const state = reactive({
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      defaultColor: ["#3faacb", "#fff"],
      mergedColor: []
    });
    const mergeColor2 = () => {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    };
    const onResize = () => {
      calcSVGData();
    };
    const afterAutoResizeMixinInit = () => {
      calcSVGData();
    };
    const { width, height } = autoResize(decoration2, onResize, afterAutoResizeMixinInit);
    const calcSVGData = () => {
      if (props.reverse) {
        state.w = 1;
        state.h = height.value;
        state.x = width.value / 2;
        state.y = 0;
      } else {
        state.w = width.value;
        state.h = 1;
        state.x = 0;
        state.y = height.value / 2;
      }
    };
    watch(() => props.color, () => {
      mergeColor2();
    });
    watch(() => props.reverse, () => {
      calcSVGData();
    });
    onMounted(() => {
      mergeColor2();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "decoration2",
        ref: decoration2,
        class: "dv-decoration-2"
      }, [
        (openBlock(), createElementBlock("svg", {
          width: `${unref(width)}px`,
          height: `${unref(height)}px`
        }, [
          createElementVNode("rect", {
            x: state.x,
            y: state.y,
            width: state.w,
            height: state.h,
            fill: state.mergedColor[0]
          }, [
            createElementVNode("animate", {
              attributeName: __props.reverse ? "height" : "width",
              from: "0",
              to: __props.reverse ? unref(height) : unref(width),
              dur: `${__props.dur}s`,
              calcMode: "spline",
              keyTimes: "0;1",
              keySplines: ".42,0,.58,1",
              repeatCount: "indefinite"
            }, null, 8, _hoisted_3$n)
          ], 8, _hoisted_2$n),
          createElementVNode("rect", {
            x: state.x,
            y: state.y,
            width: "1",
            height: "1",
            fill: state.mergedColor[1]
          }, [
            createElementVNode("animate", {
              attributeName: __props.reverse ? "y" : "x",
              from: "0",
              to: __props.reverse ? unref(height) : unref(width),
              dur: `${__props.dur}s`,
              calcMode: "spline",
              keyTimes: "0;1",
              keySplines: "0.42,0,0.58,1",
              repeatCount: "indefinite"
            }, null, 8, _hoisted_5$i)
          ], 8, _hoisted_4$l)
        ], 8, _hoisted_1$n))
      ], 512);
    };
  }
});
const Decoration2Plugin = {
  install(app) {
    app.component("DvDecoration2", _sfc_main$n);
  }
};
var index_vue_vue_type_style_index_0_lang$m = "";
const _hoisted_1$m = ["width", "height"];
const _hoisted_2$m = ["fill", "x", "y"];
const _hoisted_3$m = ["values", "dur", "begin"];
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const pointSideLength = 7;
    const decoration3 = ref(null);
    const state = reactive({
      svgWH: [300, 35],
      svgScale: [1, 1],
      rowNum: 2,
      rowPoints: 25,
      pointSideLength,
      halfPointSideLength: pointSideLength / 2,
      points: [],
      defaultColor: ["#7acaec", "transparent"],
      mergedColor: []
    });
    const calcPointsPosition = () => {
      const [w, h] = state.svgWH;
      const horizontalGap = w / (state.rowPoints + 1);
      const verticalGap = h / (state.rowNum + 1);
      const points = new Array(state.rowNum).fill(0).map((foo, i) => new Array(state.rowPoints).fill(0).map((foo2, j) => [
        horizontalGap * (j + 1),
        verticalGap * (i + 1)
      ]));
      state.points = points.reduce((all, item) => [...all, ...item], []);
    };
    const afterAutoResizeMixinInit = () => {
      calcSVGData();
    };
    const calcSVGData = () => {
      calcPointsPosition();
      calcScale();
    };
    const onResize = () => {
      calcSVGData();
    };
    const { width, height } = autoResize(decoration3, onResize, afterAutoResizeMixinInit);
    const calcScale = () => {
      const [w, h] = state.svgWH;
      state.svgScale = [width.value / w, height.value / h];
    };
    const mergeColor2 = () => {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    };
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "decoration3",
        ref: decoration3,
        class: "dv-decoration-3"
      }, [
        (openBlock(), createElementBlock("svg", {
          width: `${state.svgWH[0]}px`,
          height: `${state.svgWH[1]}px`,
          style: normalizeStyle(`transform:scale(${state.svgScale[0]},${state.svgScale[1]});`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(state.points, (point) => {
            return openBlock(), createElementBlock("rect", {
              key: point,
              fill: state.mergedColor[0],
              x: point[0] - state.halfPointSideLength,
              y: point[1] - state.halfPointSideLength,
              width: pointSideLength,
              height: pointSideLength
            }, [
              Math.random() > 0.6 ? (openBlock(), createElementBlock("animate", {
                key: 0,
                attributeName: "fill",
                values: `${state.mergedColor.join(";")}`,
                dur: Math.random() + 1 + "s",
                begin: Math.random() * 2,
                repeatCount: "indefinite"
              }, null, 8, _hoisted_3$m)) : createCommentVNode("", true)
            ], 8, _hoisted_2$m);
          }), 128))
        ], 12, _hoisted_1$m))
      ], 512);
    };
  }
});
const Decoration3Plugin = {
  install(app) {
    app.component("DvDecoration3", _sfc_main$m);
  }
};
var index_vue_vue_type_style_index_0_lang$l = "";
const _hoisted_1$l = ["width", "height"];
const _hoisted_2$l = ["stroke", "points"];
const _hoisted_3$l = ["stroke", "points"];
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    },
    reverse: {
      type: Boolean,
      default: false
    },
    dur: {
      type: Number,
      default: 3
    }
  },
  setup(__props) {
    const props = __props;
    const decoration3 = ref(null);
    const state = reactive({
      defaultColor: ["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.3)"],
      mergedColor: []
    });
    const mergeColor2 = () => {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    };
    const { width, height } = autoResize(decoration3);
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "decoration3",
        ref: decoration3,
        class: "dv-decoration-4"
      }, [
        createElementVNode("div", {
          class: normalizeClass(`container ${__props.reverse ? "reverse" : "normal"}`),
          style: normalizeStyle(__props.reverse ? `width:${unref(width)}px;height:5px;animation-duration:${__props.dur}s` : `width:5px;height:${unref(height)}px;animation-duration:${__props.dur}s`)
        }, [
          (openBlock(), createElementBlock("svg", {
            width: __props.reverse ? unref(width) : 5,
            height: __props.reverse ? 5 : unref(height)
          }, [
            createElementVNode("polyline", {
              stroke: state.mergedColor[0],
              points: __props.reverse ? `0, 2.5 ${unref(width)}, 2.5` : `2.5, 0 2.5, ${unref(height)}`
            }, null, 8, _hoisted_2$l),
            createElementVNode("polyline", {
              class: "bold-line",
              stroke: state.mergedColor[1],
              "stroke-width": "3",
              "stroke-dasharray": "20, 80",
              "stroke-dashoffset": "-30",
              points: __props.reverse ? `0, 2.5 ${unref(width)}, 2.5` : `2.5, 0 2.5, ${unref(height)}`
            }, null, 8, _hoisted_3$l)
          ], 8, _hoisted_1$l))
        ], 6)
      ], 512);
    };
  }
});
const Decoration4Plugin = {
  install(app) {
    app.component("DvDecoration4", _sfc_main$l);
  }
};
var index_vue_vue_type_style_index_0_lang$k = "";
const _hoisted_1$k = ["width", "height"];
const _hoisted_2$k = ["stroke", "points"];
const _hoisted_3$k = ["from", "to", "dur"];
const _hoisted_4$k = ["stroke", "points"];
const _hoisted_5$h = ["from", "to", "dur"];
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    },
    dur: {
      type: Number,
      default: 1.2
    }
  },
  setup(__props) {
    const props = __props;
    const decoration5 = ref(null);
    const state = reactive({
      line1Points: "",
      line2Points: "",
      line1Length: 0,
      line2Length: 0,
      defaultColor: ["#3f96a5", "#3f96a5"],
      mergedColor: []
    });
    const afterAutoResizeMixinInit = () => {
      calcSVGData();
    };
    const onResize = () => {
      calcSVGData();
    };
    const { width, height } = autoResize(decoration5, onResize, afterAutoResizeMixinInit);
    const calcSVGData = () => {
      const line1Points = [
        { x: 0, y: height.value * 0.2 },
        { x: width.value * 0.18, y: height.value * 0.2 },
        { x: width.value * 0.2, y: height.value * 0.4 },
        { x: width.value * 0.25, y: height.value * 0.4 },
        { x: width.value * 0.27, y: height.value * 0.6 },
        { x: width.value * 0.72, y: height.value * 0.6 },
        { x: width.value * 0.75, y: height.value * 0.4 },
        { x: width.value * 0.8, y: height.value * 0.4 },
        { x: width.value * 0.82, y: height.value * 0.2 },
        { x: width.value, y: height.value * 0.2 }
      ];
      const line2Points = [
        { x: width.value * 0.3, y: height.value * 0.8 },
        { x: width.value * 0.7, y: height.value * 0.8 }
      ];
      const line1Length = getPolylineLength$1(line1Points);
      const line2Length = getPolylineLength$1(line2Points);
      state.line1Points = PointsToString(line1Points);
      state.line2Points = PointsToString(line2Points);
      state.line1Length = line1Length;
      state.line2Length = line2Length;
    };
    const mergeColor2 = () => {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    };
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "decoration5",
        ref: decoration5,
        class: "dv-decoration-5"
      }, [
        (openBlock(), createElementBlock("svg", {
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("polyline", {
            fill: "transparent",
            stroke: state.mergedColor[0],
            "stroke-width": "3",
            points: state.line1Points
          }, [
            createElementVNode("animate", {
              attributeName: "stroke-dasharray",
              attributeType: "XML",
              from: `0, ${state.line1Length / 2}, 0, ${state.line1Length / 2}`,
              to: `0, 0, ${state.line1Length}, 0`,
              dur: `${__props.dur}s`,
              begin: "0s",
              calcMode: "spline",
              keyTimes: "0;1",
              keySplines: "0.4,1,0.49,0.98",
              repeatCount: "indefinite"
            }, null, 8, _hoisted_3$k)
          ], 8, _hoisted_2$k),
          createElementVNode("polyline", {
            fill: "transparent",
            stroke: state.mergedColor[1],
            "stroke-width": "2",
            points: state.line2Points
          }, [
            createElementVNode("animate", {
              attributeName: "stroke-dasharray",
              attributeType: "XML",
              from: `0, ${state.line2Length / 2}, 0, ${state.line2Length / 2}`,
              to: `0, 0, ${state.line2Length}, 0`,
              dur: `${__props.dur}s`,
              begin: "0s",
              calcMode: "spline",
              keyTimes: "0;1",
              keySplines: ".4,1,.49,.98",
              repeatCount: "indefinite"
            }, null, 8, _hoisted_5$h)
          ], 8, _hoisted_4$k)
        ], 8, _hoisted_1$k))
      ], 512);
    };
  }
});
const Decoration5Plugin = {
  install(app) {
    app.component("DvDecoration5", _sfc_main$k);
  }
};
var index_vue_vue_type_style_index_0_lang$j = "";
const _hoisted_1$j = ["width", "height"];
const _hoisted_2$j = ["fill", "x", "y", "height"];
const _hoisted_3$j = ["values", "dur"];
const _hoisted_4$j = ["values", "dur"];
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const rectWidth = 7;
    const decoration6 = ref(null);
    const state = reactive({
      svgWH: [300, 35],
      svgScale: [1, 1],
      rowNum: 1,
      rowPoints: 40,
      rectWidth,
      halfRectWidth: rectWidth / 2,
      points: [],
      heights: [],
      minHeights: [],
      randoms: [],
      defaultColor: ["#7acaec", "#7acaec"],
      mergedColor: []
    });
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    const { width, height } = autoResize(decoration6, onResize, afterAutoResizeMixinInit);
    function afterAutoResizeMixinInit() {
      calcSVGData();
    }
    function calcSVGData() {
      calcPointsPosition();
      calcScale();
    }
    function calcPointsPosition() {
      const [w, h] = state.svgWH;
      const horizontalGap = w / (state.rowPoints + 1);
      const verticalGap = h / (state.rowNum + 1);
      const points = new Array(state.rowNum).fill(0).map((foo, i) => new Array(state.rowPoints).fill(0).map((foo2, j) => [
        horizontalGap * (j + 1),
        verticalGap * (i + 1)
      ]));
      state.points = points.reduce((all, item) => [...all, ...item], []);
      const heights = state.heights = new Array(state.rowNum * state.rowPoints).fill(0).map((foo) => Math.random() > 0.8 ? randomExtend(0.7 * h, h) : randomExtend(0.2 * h, 0.5 * h));
      state.minHeights = new Array(state.rowNum * state.rowPoints).fill(0).map((foo, i) => heights[i] * Math.random());
      state.randoms = new Array(state.rowNum * state.rowPoints).fill(0).map((foo) => Math.random() + 1.5);
    }
    function calcScale() {
      const [w, h] = state.svgWH;
      state.svgScale = [width.value / w, height.value / h];
    }
    function onResize() {
      calcSVGData();
    }
    function mergeColor2() {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "decoration6",
        ref: decoration6,
        class: "dv-decoration-6"
      }, [
        (openBlock(), createElementBlock("svg", {
          width: `${state.svgWH[0]}px`,
          height: `${state.svgWH[1]}px`,
          style: normalizeStyle(`transform:scale(${state.svgScale[0]},${state.svgScale[1]});`)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(state.points, (point, i) => {
            return openBlock(), createElementBlock("rect", {
              key: i,
              fill: state.mergedColor[Math.random() > 0.5 ? 0 : 1],
              x: point[0] - state.halfRectWidth,
              y: point[1] - state.heights[i] / 2,
              width: rectWidth,
              height: state.heights[i]
            }, [
              createElementVNode("animate", {
                attributeName: "y",
                values: `${point[1] - state.minHeights[i] / 2};${point[1] - state.heights[i] / 2};${point[1] - state.minHeights[i] / 2}`,
                dur: `${state.randoms[i]}s`,
                keyTimes: "0;0.5;1",
                calcMode: "spline",
                keySplines: "0.42,0,0.58,1;0.42,0,0.58,1",
                begin: "0s",
                repeatCount: "indefinite"
              }, null, 8, _hoisted_3$j),
              createElementVNode("animate", {
                attributeName: "height",
                values: `${state.minHeights[i]};${state.heights[i]};${state.minHeights[i]}`,
                dur: `${state.randoms[i]}s`,
                keyTimes: "0;0.5;1",
                calcMode: "spline",
                keySplines: "0.42,0,0.58,1;0.42,0,0.58,1",
                begin: "0s",
                repeatCount: "indefinite"
              }, null, 8, _hoisted_4$j)
            ], 8, _hoisted_2$j);
          }), 128))
        ], 12, _hoisted_1$j))
      ], 512);
    };
  }
});
const Decoration6Plugin = {
  install(app) {
    app.component("DvDecoration6", _sfc_main$j);
  }
};
var index_vue_vue_type_style_index_0_lang$i = "";
const _hoisted_1$i = { class: "dv-decoration-7" };
const _hoisted_2$i = {
  width: "21px",
  height: "20px"
};
const _hoisted_3$i = ["stroke"];
const _hoisted_4$i = ["stroke"];
const _hoisted_5$g = {
  width: "21px",
  height: "20px"
};
const _hoisted_6$g = ["stroke"];
const _hoisted_7$f = ["stroke"];
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const state = reactive({
      defaultColor: ["#1dc1f5", "#1dc1f5"],
      mergedColor: []
    });
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    function mergeColor2() {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$i, [
        (openBlock(), createElementBlock("svg", _hoisted_2$i, [
          createElementVNode("polyline", {
            "stroke-width": "4",
            fill: "transparent",
            stroke: state.mergedColor[0],
            points: "10, 0 19, 10 10, 20"
          }, null, 8, _hoisted_3$i),
          createElementVNode("polyline", {
            "stroke-width": "2",
            fill: "transparent",
            stroke: state.mergedColor[1],
            points: "2, 0 11, 10 2, 20"
          }, null, 8, _hoisted_4$i)
        ])),
        renderSlot(_ctx.$slots, "default"),
        (openBlock(), createElementBlock("svg", _hoisted_5$g, [
          createElementVNode("polyline", {
            "stroke-width": "4",
            fill: "transparent",
            stroke: state.mergedColor[0],
            points: "11, 0 2, 10 11, 20"
          }, null, 8, _hoisted_6$g),
          createElementVNode("polyline", {
            "stroke-width": "2",
            fill: "transparent",
            stroke: state.mergedColor[1],
            points: "19, 0 10, 10 19, 20"
          }, null, 8, _hoisted_7$f)
        ]))
      ]);
    };
  }
});
const Decoration7Plugin = {
  install(app) {
    app.component("DvDecoration7", _sfc_main$i);
  }
};
var index_vue_vue_type_style_index_0_lang$h = "";
const _hoisted_1$h = ["width", "height"];
const _hoisted_2$h = ["stroke", "points"];
const _hoisted_3$h = ["stroke", "points"];
const _hoisted_4$h = ["stroke", "points"];
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const decoration8 = ref(null);
    const state = reactive({
      defaultColor: ["#3f96a5", "#3f96a5"],
      mergedColor: []
    });
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    const { width, height } = autoResize(decoration8);
    function xPos(pos) {
      if (!props.reverse)
        return pos;
      return width.value - pos;
    }
    function mergeColor2() {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "decoration8",
        ref: decoration8,
        class: "dv-decoration-8"
      }, [
        (openBlock(), createElementBlock("svg", {
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            "stroke-width": "2",
            fill: "transparent",
            points: `${xPos(0)}, 0 ${xPos(30)}, ${unref(height) / 2}`
          }, null, 8, _hoisted_2$h),
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            "stroke-width": "2",
            fill: "transparent",
            points: `${xPos(20)}, 0 ${xPos(50)}, ${unref(height) / 2} ${xPos(unref(width))}, ${unref(height) / 2}`
          }, null, 8, _hoisted_3$h),
          createElementVNode("polyline", {
            stroke: state.mergedColor[1],
            fill: "transparent",
            "stroke-width": "3",
            points: `${xPos(0)}, ${unref(height) - 3}, ${xPos(200)}, ${unref(height) - 3}`
          }, null, 8, _hoisted_4$h)
        ], 8, _hoisted_1$h))
      ], 512);
    };
  }
});
const Decoration8Plugin = {
  install(app) {
    app.component("DvDecoration8", _sfc_main$h);
  }
};
var index_vue_vue_type_style_index_0_lang$g = "";
const _hoisted_1$g = ["width", "height"];
const _hoisted_2$g = ["id"];
const _hoisted_3$g = ["stroke"];
const _hoisted_4$g = ["dur"];
const _hoisted_5$f = ["stroke"];
const _hoisted_6$f = ["dur"];
const _hoisted_7$e = ["stroke"];
const _hoisted_8$d = ["xlink:href", "stroke", "fill"];
const _hoisted_9$d = ["dur", "begin"];
const _hoisted_10$9 = ["stroke"];
const _sfc_main$g = {
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    },
    dur: {
      type: Number,
      default: 3
    }
  },
  setup(__props) {
    const props = __props;
    const id = uuid();
    const decoration9 = ref < HTMLElement | null > null;
    const state = reactive({
      polygonId: `decoration-9-polygon-${id}`,
      svgWH: [100, 100],
      svgScale: [1, 1],
      defaultColor: ["rgba(3, 166, 224, 0.8)", "rgba(3, 166, 224, 0.5)"],
      mergedColor: []
    });
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    const { width, height } = autoResize(decoration9, onResize, afterAutoResizeMixinInit);
    function afterAutoResizeMixinInit() {
      calcScale();
    }
    function calcScale() {
      const [w, h] = state.svgWH;
      state.svgScale = [width.value / w, height.value / h];
    }
    function onResize() {
      calcScale();
    }
    function mergeColor2() {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "decoration9",
        ref: decoration9,
        class: "dv-decoration-9"
      }, [
        (openBlock(), createElementBlock("svg", {
          width: `${state.svgWH[0]}px`,
          height: `${state.svgWH[1]}px`,
          style: normalizeStyle(`transform:scale(${state.svgScale[0]},${state.svgScale[1]});`)
        }, [
          createElementVNode("defs", null, [
            createElementVNode("polygon", {
              id: state.polygonId,
              points: "15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5"
            }, null, 8, _hoisted_2$g)
          ]),
          createElementVNode("circle", {
            cx: "50",
            cy: "50",
            r: "45",
            fill: "transparent",
            stroke: state.mergedColor[1],
            "stroke-width": "10",
            "stroke-dasharray": "80, 100, 30, 100"
          }, [
            createElementVNode("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              values: "0 50 50;360 50 50",
              dur: `${__props.dur}s`,
              repeatCount: "indefinite"
            }, null, 8, _hoisted_4$g)
          ], 8, _hoisted_3$g),
          createElementVNode("circle", {
            cx: "50",
            cy: "50",
            r: "45",
            fill: "transparent",
            stroke: state.mergedColor[0],
            "stroke-width": "6",
            "stroke-dasharray": "50, 66, 100, 66"
          }, [
            createElementVNode("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              values: "0 50 50;-360 50 50",
              dur: `${__props.dur}s`,
              repeatCount: "indefinite"
            }, null, 8, _hoisted_6$f)
          ], 8, _hoisted_5$f),
          createElementVNode("circle", {
            cx: "50",
            cy: "50",
            r: "38",
            fill: "transparent",
            stroke: unref(lib$3.fade)(state.mergedColor[1] || state.defaultColor[1], 30),
            "stroke-width": "1",
            "stroke-dasharray": "5, 1"
          }, null, 8, _hoisted_7$e),
          (openBlock(true), createElementBlock(Fragment, null, renderList(new Array(20).fill(0), (foo, i) => {
            return openBlock(), createElementBlock("use", {
              key: i,
              "xlink:href": `#${state.polygonId}`,
              stroke: state.mergedColor[1],
              fill: Math.random() > 0.4 ? "transparent" : state.mergedColor[0]
            }, [
              createElementVNode("animateTransform", {
                attributeName: "transform",
                type: "rotate",
                values: "0 50 50;360 50 50",
                dur: `${__props.dur}s`,
                begin: `${i * __props.dur / 20}s`,
                repeatCount: "indefinite"
              }, null, 8, _hoisted_9$d)
            ], 8, _hoisted_8$d);
          }), 128)),
          createElementVNode("circle", {
            cx: "50",
            cy: "50",
            r: "26",
            fill: "transparent",
            stroke: unref(lib$3.fade)(state.mergedColor[1] || state.defaultColor[1], 30),
            "stroke-width": "1",
            "stroke-dasharray": "5, 1"
          }, null, 8, _hoisted_10$9)
        ], 12, _hoisted_1$g)),
        renderSlot(_ctx.$slots, "default")
      ], 512);
    };
  }
};
const Decoration9Plugin = {
  install(app) {
    app.component("DvDecoration9", _sfc_main$g);
  }
};
var index_vue_vue_type_style_index_0_lang$f = "";
const _hoisted_1$f = ["width", "height"];
const _hoisted_2$f = ["stroke", "points"];
const _hoisted_3$f = ["stroke", "points", "stroke-dasharray"];
const _hoisted_4$f = ["id", "values", "begin"];
const _hoisted_5$e = ["values", "begin"];
const _hoisted_6$e = ["stroke", "points", "stroke-dasharray"];
const _hoisted_7$d = ["id", "values", "begin"];
const _hoisted_8$c = ["values", "begin"];
const _hoisted_9$c = ["stroke", "points", "stroke-dasharray"];
const _hoisted_10$8 = ["id", "values", "begin"];
const _hoisted_11$7 = ["values", "begin"];
const _hoisted_12$7 = ["cy", "fill"];
const _hoisted_13$7 = ["id", "values", "begin"];
const _hoisted_14$6 = ["cx", "cy", "fill"];
const _hoisted_15$4 = ["id", "values", "begin"];
const _hoisted_16$4 = ["values", "begin"];
const _hoisted_17$4 = ["cx", "cy", "fill"];
const _hoisted_18$3 = ["id", "values", "begin"];
const _hoisted_19$3 = ["values", "begin"];
const _hoisted_20$2 = ["cx", "cy", "fill"];
const _hoisted_21$2 = ["id", "values", "begin"];
const _hoisted_22$1 = ["values", "begin"];
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const id = uuid();
    const decoration10 = ref(null);
    const state = reactive({
      animationId1: `d10ani1${id}`,
      animationId2: `d10ani2${id}`,
      animationId3: `d10ani3${id}`,
      animationId4: `d10ani4${id}`,
      animationId5: `d10ani5${id}`,
      animationId6: `d10ani6${id}`,
      animationId7: `d10ani7${id}`,
      defaultColor: ["#00c2ff", "rgba(0, 194, 255, 0.3)"],
      mergedColor: []
    });
    const { width, height } = autoResize(decoration10);
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    function mergeColor2() {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "decoration10",
        ref: decoration10,
        class: "dv-decoration-10"
      }, [
        (openBlock(), createElementBlock("svg", {
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("polyline", {
            stroke: state.mergedColor[1],
            "stroke-width": "2",
            points: `0, ${unref(height) / 2} ${unref(width)}, ${unref(height) / 2}`
          }, null, 8, _hoisted_2$f),
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            "stroke-width": "2",
            points: `5, ${unref(height) / 2} ${unref(width) * 0.2 - 3}, ${unref(height) / 2}`,
            "stroke-dasharray": `0, ${unref(width) * 0.2}`,
            fill: "freeze"
          }, [
            createElementVNode("animate", {
              id: state.animationId2,
              attributeName: "stroke-dasharray",
              values: `0, ${unref(width) * 0.2};${unref(width) * 0.2}, 0;`,
              dur: "3s",
              begin: `${state.animationId1}.end`,
              fill: "freeze"
            }, null, 8, _hoisted_4$f),
            createElementVNode("animate", {
              attributeName: "stroke-dasharray",
              values: `${unref(width) * 0.2}, 0;0, ${unref(width) * 0.2}`,
              dur: "0.01s",
              begin: `${state.animationId7}.end`,
              fill: "freeze"
            }, null, 8, _hoisted_5$e)
          ], 8, _hoisted_3$f),
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            "stroke-width": "2",
            points: `${unref(width) * 0.2 + 3}, ${unref(height) / 2} ${unref(width) * 0.8 - 3}, ${unref(height) / 2}`,
            "stroke-dasharray": `0, ${unref(width) * 0.6}`
          }, [
            createElementVNode("animate", {
              id: state.animationId4,
              attributeName: "stroke-dasharray",
              values: `0, ${unref(width) * 0.6};${unref(width) * 0.6}, 0`,
              dur: "3s",
              begin: `${state.animationId3}.end + 1s`,
              fill: "freeze"
            }, null, 8, _hoisted_7$d),
            createElementVNode("animate", {
              attributeName: "stroke-dasharray",
              values: `${unref(width) * 0.6}, 0;0, ${unref(width) * 0.6}`,
              dur: "0.01s",
              begin: `${state.animationId7}.end`,
              fill: "freeze"
            }, null, 8, _hoisted_8$c)
          ], 8, _hoisted_6$e),
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            "stroke-width": "2",
            points: `${unref(width) * 0.8 + 3}, ${unref(height) / 2} ${unref(width) - 5}, ${unref(height) / 2}`,
            "stroke-dasharray": `0, ${unref(width) * 0.2}`
          }, [
            createElementVNode("animate", {
              id: state.animationId6,
              attributeName: "stroke-dasharray",
              values: `0, ${unref(width) * 0.2};${unref(width) * 0.2}, 0`,
              dur: "3s",
              begin: `${state.animationId5}.end + 1s`,
              fill: "freeze"
            }, null, 8, _hoisted_10$8),
            createElementVNode("animate", {
              attributeName: "stroke-dasharray",
              values: `${unref(width) * 0.2}, 0;0, ${unref(width) * 0.3}`,
              dur: "0.01s",
              begin: `${state.animationId7}.end`,
              fill: "freeze"
            }, null, 8, _hoisted_11$7)
          ], 8, _hoisted_9$c),
          createElementVNode("circle", {
            cx: "2",
            cy: unref(height) / 2,
            r: "2",
            fill: state.mergedColor[1]
          }, [
            createElementVNode("animate", {
              id: state.animationId1,
              attributeName: "fill",
              values: `${state.mergedColor[1]};${state.mergedColor[0]}`,
              begin: `0s;${state.animationId7}.end`,
              dur: "0.3s",
              fill: "freeze"
            }, null, 8, _hoisted_13$7)
          ], 8, _hoisted_12$7),
          createElementVNode("circle", {
            cx: unref(width) * 0.2,
            cy: unref(height) / 2,
            r: "2",
            fill: state.mergedColor[1]
          }, [
            createElementVNode("animate", {
              id: state.animationId3,
              attributeName: "fill",
              values: `${state.mergedColor[1]};${state.mergedColor[0]}`,
              begin: `${state.animationId2}.end`,
              dur: "0.3s",
              fill: "freeze"
            }, null, 8, _hoisted_15$4),
            createElementVNode("animate", {
              attributeName: "fill",
              values: `${state.mergedColor[1]};${state.mergedColor[1]}`,
              dur: "0.01s",
              begin: `${state.animationId7}.end`,
              fill: "freeze"
            }, null, 8, _hoisted_16$4)
          ], 8, _hoisted_14$6),
          createElementVNode("circle", {
            cx: unref(width) * 0.8,
            cy: unref(height) / 2,
            r: "2",
            fill: state.mergedColor[1]
          }, [
            createElementVNode("animate", {
              id: state.animationId5,
              attributeName: "fill",
              values: `${state.mergedColor[1]};${state.mergedColor[0]}`,
              begin: `${state.animationId4}.end`,
              dur: "0.3s",
              fill: "freeze"
            }, null, 8, _hoisted_18$3),
            createElementVNode("animate", {
              attributeName: "fill",
              values: `${state.mergedColor[1]};${state.mergedColor[1]}`,
              dur: "0.01s",
              begin: `${state.animationId7}.end`,
              fill: "freeze"
            }, null, 8, _hoisted_19$3)
          ], 8, _hoisted_17$4),
          createElementVNode("circle", {
            cx: unref(width) - 2,
            cy: unref(height) / 2,
            r: "2",
            fill: state.mergedColor[1]
          }, [
            createElementVNode("animate", {
              id: state.animationId7,
              attributeName: "fill",
              values: `${state.mergedColor[1]};${state.mergedColor[0]}`,
              begin: `${state.animationId6}.end`,
              dur: "0.3s",
              fill: "freeze"
            }, null, 8, _hoisted_21$2),
            createElementVNode("animate", {
              attributeName: "fill",
              values: `${state.mergedColor[1]};${state.mergedColor[1]}`,
              dur: "0.01s",
              begin: `${state.animationId7}.end`,
              fill: "freeze"
            }, null, 8, _hoisted_22$1)
          ], 8, _hoisted_20$2)
        ], 8, _hoisted_1$f))
      ], 512);
    };
  }
});
const Decoration10Plugin = {
  install(app) {
    app.component("DvDecoration10", _sfc_main$f);
  }
};
var index_vue_vue_type_style_index_0_lang$e = "";
const _hoisted_1$e = ["width", "height"];
const _hoisted_2$e = ["fill", "stroke"];
const _hoisted_3$e = ["fill", "stroke", "points"];
const _hoisted_4$e = ["fill", "stroke", "points"];
const _hoisted_5$d = ["fill", "stroke", "points"];
const _hoisted_6$d = ["fill", "stroke", "points"];
const _hoisted_7$c = ["stroke", "points"];
const _hoisted_8$b = ["stroke", "points"];
const _hoisted_9$b = { class: "decoration-content" };
const _sfc_main$e = {
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const decoration11 = ref(null);
    const state = reactive({
      defaultColor: ["#1a98fc", "#2cf7fe"],
      mergedColor: []
    });
    const { width, height } = autoResize(decoration11);
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    function mergeColor2() {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "decoration11",
        ref: decoration11,
        class: "dv-decoration-11"
      }, [
        (openBlock(), createElementBlock("svg", {
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("polygon", {
            fill: unref(lib$3.fade)(state.mergedColor[1] || state.defaultColor[1], 10),
            stroke: state.mergedColor[1],
            points: `20 10, 25 4, 55 4 60 10`
          }, null, 8, _hoisted_2$e),
          createElementVNode("polygon", {
            fill: unref(lib$3.fade)(state.mergedColor[1] || state.defaultColor[1], 10),
            stroke: state.mergedColor[1],
            points: `20 ${unref(height) - 10}, 25 ${unref(height) - 4}, 55 ${unref(height) - 4} 60 ${unref(height) - 10}`
          }, null, 8, _hoisted_3$e),
          createElementVNode("polygon", {
            fill: unref(lib$3.fade)(state.mergedColor[1] || state.defaultColor[1], 10),
            stroke: state.mergedColor[1],
            points: `${unref(width) - 20} 10, ${unref(width) - 25} 4, ${unref(width) - 55} 4 ${unref(width) - 60} 10`
          }, null, 8, _hoisted_4$e),
          createElementVNode("polygon", {
            fill: unref(lib$3.fade)(state.mergedColor[1] || state.defaultColor[1], 10),
            stroke: state.mergedColor[1],
            points: `${unref(width) - 20} ${unref(height) - 10}, ${unref(width) - 25} ${unref(height) - 4}, ${unref(width) - 55} ${unref(height) - 4} ${unref(width) - 60} ${unref(height) - 10}`
          }, null, 8, _hoisted_5$d),
          createElementVNode("polygon", {
            fill: unref(lib$3.fade)(state.mergedColor[0] || state.defaultColor[0], 20),
            stroke: state.mergedColor[0],
            points: `
          20 10, 5 ${unref(height) / 2} 20 ${unref(height) - 10}
          ${unref(width) - 20} ${unref(height) - 10} ${unref(width) - 5} ${unref(height) / 2} ${unref(width) - 20} 10
        `
          }, null, 8, _hoisted_6$d),
          createElementVNode("polyline", {
            fill: "transparent",
            stroke: unref(lib$3.fade)(state.mergedColor[0] || state.defaultColor[0], 70),
            points: `25 18, 15 ${unref(height) / 2} 25 ${unref(height) - 18}`
          }, null, 8, _hoisted_7$c),
          createElementVNode("polyline", {
            fill: "transparent",
            stroke: unref(lib$3.fade)(state.mergedColor[0] || state.defaultColor[0], 70),
            points: `${unref(width) - 25} 18, ${unref(width) - 15} ${unref(height) / 2} ${unref(width) - 25} ${unref(height) - 18}`
          }, null, 8, _hoisted_8$b)
        ], 8, _hoisted_1$e)),
        createElementVNode("div", _hoisted_9$b, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 512);
    };
  }
};
const Decoration11Plugin = {
  install(app) {
    app.component("DvDecoration11", _sfc_main$e);
  }
};
var index_vue_vue_type_style_index_0_lang$d = "";
const _hoisted_1$d = ["width", "height"];
const _hoisted_2$d = ["id"];
const _hoisted_3$d = ["stroke", "stroke-width", "d"];
const _hoisted_4$d = ["id"];
const _hoisted_5$c = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "transparent",
  "stop-opacity": "1"
}, null, -1);
const _hoisted_6$c = ["stop-color"];
const _hoisted_7$b = ["r", "cx", "cy", "stroke", "stroke-width"];
const _hoisted_8$a = ["cx", "cy", "fill"];
const _hoisted_9$a = ["values", "dur"];
const _hoisted_10$7 = ["dur"];
const _hoisted_11$6 = ["cx", "cy", "fill"];
const _hoisted_12$6 = { key: 0 };
const _hoisted_13$6 = ["points", "stroke", "stroke-width"];
const _hoisted_14$5 = ["d", "stroke"];
const _hoisted_15$3 = ["xlink:href"];
const _hoisted_16$3 = ["values", "dur"];
const _hoisted_17$3 = { class: "decoration-content" };
const _sfc_main$d = {
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    },
    scanDur: {
      type: Number,
      default: 3
    },
    haloDur: {
      type: Number,
      default: 2
    }
  },
  setup(__props) {
    const props = __props;
    const id = uuid();
    const decoration12 = ref(null);
    const { width, height } = autoResize(decoration12, () => {
    }, afterAutoResizeMixinInit);
    const state = reactive({
      gId: `decoration-12-g-${id}`,
      gradientId: `decoration-12-gradient-${id}`,
      defaultColor: ["#2783ce", "#2cf7fe"],
      mergedColor: [],
      pathD: [],
      pathColor: [],
      circleR: [],
      splitLinePoints: [],
      arcD: [],
      segment: 30,
      sectorAngle: Math.PI / 3,
      ringNum: 3,
      ringWidth: 1,
      showSplitLine: true
    });
    const x = computed(() => {
      return width.value / 2;
    });
    const y = computed(() => {
      return height.value / 2;
    });
    watch(() => props.color, () => {
      mergeColor2();
      calcPathColor();
    });
    function init() {
      mergeColor2();
      calcPathD();
      calcPathColor();
      calcCircleR();
      calcSplitLinePoints();
      calcArcD();
    }
    function mergeColor2() {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    }
    function calcPathD() {
      const startAngle = -Math.PI / 2;
      const angleGap = state.sectorAngle / state.segment;
      const r = width.value / 4;
      let lastEndPoints = getCircleRadianPoint(x.value, y.value, r, startAngle);
      state.pathD = new Array(state.segment).fill("").map((_, i) => {
        const endPoints = getCircleRadianPoint(x.value, y.value, r, startAngle - (i + 1) * angleGap).map((_2) => parseFloat(_2.toFixed(5)));
        const d = `M${lastEndPoints.join(",")} A${r}, ${r} 0 0 0 ${endPoints.join(",")}`;
        lastEndPoints = endPoints;
        return d;
      });
    }
    function calcPathColor() {
      const colorGap = 100 / (state.segment - 1);
      state.pathColor = new Array(state.segment).fill(state.mergedColor[0]).map((_, i) => lib$3.fade(state.mergedColor[0], 100 - i * colorGap));
    }
    function calcCircleR() {
      const radiusGap = (width.value / 2 - state.ringWidth / 2) / state.ringNum;
      state.circleR = new Array(state.ringNum).fill(0).map((_, i) => radiusGap * (i + 1));
    }
    function calcSplitLinePoints() {
      const angleGap = Math.PI / 6;
      const r = width.value / 2;
      state.splitLinePoints = new Array(6).fill("").map((_, i) => {
        const startAngle = angleGap * (i + 1);
        const endAngle = startAngle + Math.PI;
        const startPoint = getCircleRadianPoint(x.value, y.value, r, startAngle);
        const endPoint = getCircleRadianPoint(x.value, y.value, r, endAngle);
        return `${startPoint.join(",")} ${endPoint.join(",")}`;
      });
    }
    function calcArcD() {
      const angleGap = Math.PI / 6;
      const r = width.value / 2 - 1;
      state.arcD = new Array(4).fill("").map((_, i) => {
        const startAngle = angleGap * (3 * i + 1);
        const endAngle = startAngle + angleGap;
        const startPoint = getCircleRadianPoint(x.value, y.value, r, startAngle);
        const endPoint = getCircleRadianPoint(x.value, y.value, r, endAngle);
        return `M${startPoint.join(",")} A${x.value}, ${y.value} 0 0 1 ${endPoint.join(",")}`;
      });
    }
    function afterAutoResizeMixinInit() {
      init();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "decoration12",
        ref: decoration12,
        class: "dv-decoration-12"
      }, [
        (openBlock(), createElementBlock("svg", {
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("defs", null, [
            createElementVNode("g", {
              id: state.gId
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(state.pathD, (d, i) => {
                return openBlock(), createElementBlock("path", {
                  key: d,
                  stroke: state.pathColor[i],
                  "stroke-width": unref(width) / 2,
                  fill: "transparent",
                  d
                }, null, 8, _hoisted_3$d);
              }), 128))
            ], 8, _hoisted_2$d),
            createElementVNode("radialGradient", {
              id: state.gradientId,
              cx: "50%",
              cy: "50%",
              r: "50%"
            }, [
              _hoisted_5$c,
              createElementVNode("stop", {
                offset: "100%",
                "stop-color": unref(lib$3.fade)(state.mergedColor[1] || state.defaultColor[1], 30),
                "stop-opacity": "1"
              }, null, 8, _hoisted_6$c)
            ], 8, _hoisted_4$d)
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(state.circleR, (r) => {
            return openBlock(), createElementBlock("circle", {
              key: r,
              r,
              cx: unref(x),
              cy: unref(y),
              stroke: state.mergedColor[1],
              "stroke-width": 0.8,
              fill: "transparent"
            }, null, 8, _hoisted_7$b);
          }), 128)),
          createElementVNode("circle", {
            r: "1",
            cx: unref(x),
            cy: unref(y),
            stroke: "transparent",
            fill: `url(#${state.gradientId})`
          }, [
            createElementVNode("animate", {
              attributeName: "r",
              values: `1;${unref(width) / 2}`,
              dur: `${__props.haloDur}s`,
              repeatCount: "indefinite"
            }, null, 8, _hoisted_9$a),
            createElementVNode("animate", {
              attributeName: "opacity",
              values: "1;0",
              dur: `${__props.haloDur}s`,
              repeatCount: "indefinite"
            }, null, 8, _hoisted_10$7)
          ], 8, _hoisted_8$a),
          createElementVNode("circle", {
            r: "2",
            cx: unref(x),
            cy: unref(y),
            fill: state.mergedColor[1]
          }, null, 8, _hoisted_11$6),
          state.showSplitLine ? (openBlock(), createElementBlock("g", _hoisted_12$6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(state.splitLinePoints, (p) => {
              return openBlock(), createElementBlock("polyline", {
                key: p,
                points: p,
                stroke: state.mergedColor[1],
                "stroke-width": 0.5,
                opacity: "50"
              }, null, 8, _hoisted_13$6);
            }), 128))
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(state.arcD, (d) => {
            return openBlock(), createElementBlock("path", {
              key: d,
              d,
              stroke: state.mergedColor[1],
              "stroke-width": "2.3",
              fill: "transparent"
            }, null, 8, _hoisted_14$5);
          }), 128)),
          createElementVNode("use", {
            "xlink:href": `#${state.gId}`
          }, [
            createElementVNode("animateTransform", {
              attributeName: "transform",
              type: "rotate",
              values: `0, ${unref(x)} ${unref(y)};360, ${unref(x)} ${unref(y)}`,
              dur: `${__props.scanDur}s`,
              repeatCount: "indefinite"
            }, null, 8, _hoisted_16$3)
          ], 8, _hoisted_15$3)
        ], 8, _hoisted_1$d)),
        createElementVNode("div", _hoisted_17$3, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 512);
    };
  }
};
const Decoration12Plugin = {
  install(app) {
    app.component("DvDecoration12", _sfc_main$d);
  }
};
var index_vue_vue_type_style_index_0_lang$c = "";
const _hoisted_1$c = ["width", "height"];
const _hoisted_2$c = ["fill", "points"];
const _hoisted_3$c = ["fill"];
const _hoisted_4$c = ["values"];
const _hoisted_5$b = ["fill"];
const _hoisted_6$b = ["values"];
const _hoisted_7$a = ["fill"];
const _hoisted_8$9 = ["values"];
const _hoisted_9$9 = { class: "border-box-content" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
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
  setup(__props, { expose }) {
    const props = __props;
    const borderBox1 = ref(null);
    const state = reactive({
      border: ["left-top", "right-top", "left-bottom", "right-bottom"],
      defaultColor: ["#4fd2dd", "#235fa7"],
      mergedColor: []
    });
    const mergeColor2 = () => {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    };
    const { width, height, initWH } = autoResize(borderBox1);
    expose({
      initWH
    });
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "borderBox1",
        ref: borderBox1,
        class: "dv-border-box-1"
      }, [
        (openBlock(), createElementBlock("svg", {
          class: "dv-border",
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("polygon", {
            fill: __props.backgroundColor,
            points: `10, 27 10, ${unref(height) - 27} 13, ${unref(height) - 24} 13, ${unref(height) - 21} 24, ${unref(height) - 11}
      38, ${unref(height) - 11} 41, ${unref(height) - 8} 73, ${unref(height) - 8} 75, ${unref(height) - 10} 81, ${unref(height) - 10}
      85, ${unref(height) - 6} ${unref(width) - 85}, ${unref(height) - 6} ${unref(width) - 81}, ${unref(height) - 10} ${unref(width) - 75}, ${unref(height) - 10}
      ${unref(width) - 73}, ${unref(height) - 8} ${unref(width) - 41}, ${unref(height) - 8} ${unref(width) - 38}, ${unref(height) - 11}
      ${unref(width) - 10}, ${unref(height) - 27} ${unref(width) - 10}, 27 ${unref(width) - 13}, 25 ${unref(width) - 13}, 21
      ${unref(width) - 24}, 11 ${unref(width) - 38}, 11 ${unref(width) - 41}, 8 ${unref(width) - 73}, 8 ${unref(width) - 75}, 10
      ${unref(width) - 81}, 10 ${unref(width) - 85}, 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24`
          }, null, 8, _hoisted_2$c)
        ], 8, _hoisted_1$c)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(state.border, (item) => {
          return openBlock(), createElementBlock("svg", {
            key: item,
            width: "150px",
            height: "150px",
            class: normalizeClass(`${item} dv-border`)
          }, [
            createElementVNode("polygon", {
              fill: state.mergedColor[0],
              points: "6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"
            }, [
              createElementVNode("animate", {
                attributeName: "fill",
                values: `${state.mergedColor[0]};${state.mergedColor[1]};${state.mergedColor[0]}`,
                dur: "0.5s",
                begin: "0s",
                repeatCount: "indefinite"
              }, null, 8, _hoisted_4$c)
            ], 8, _hoisted_3$c),
            createElementVNode("polygon", {
              fill: state.mergedColor[1],
              points: "27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8"
            }, [
              createElementVNode("animate", {
                attributeName: "fill",
                values: `${state.mergedColor[1]};${state.mergedColor[0]};${state.mergedColor[1]}`,
                dur: "0.5s",
                begin: "0s",
                repeatCount: "indefinite"
              }, null, 8, _hoisted_6$b)
            ], 8, _hoisted_5$b),
            createElementVNode("polygon", {
              fill: state.mergedColor[0],
              points: "9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"
            }, [
              createElementVNode("animate", {
                attributeName: "fill",
                values: `${state.mergedColor[0]};${state.mergedColor[1]};transparent`,
                dur: "1s",
                begin: "0s",
                repeatCount: "indefinite"
              }, null, 8, _hoisted_8$9)
            ], 8, _hoisted_7$a)
          ], 2);
        }), 128)),
        createElementVNode("div", _hoisted_9$9, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 512);
    };
  }
});
const BorderBox1Plugin = {
  install(app) {
    app.component("DvBorderBox1", _sfc_main$c);
  }
};
var index_vue_vue_type_style_index_0_lang$b = "";
const _hoisted_1$b = ["width", "height"];
const _hoisted_2$b = ["fill", "points"];
const _hoisted_3$b = ["stroke", "points"];
const _hoisted_4$b = ["stroke", "points"];
const _hoisted_5$a = ["fill"];
const _hoisted_6$a = ["fill", "cx"];
const _hoisted_7$9 = ["fill", "cx", "cy"];
const _hoisted_8$8 = ["fill", "cy"];
const _hoisted_9$8 = { class: "border-box-content" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
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
  setup(__props, { expose }) {
    const props = __props;
    const borderBox2 = ref(null);
    const state = reactive({
      defaultColor: ["#fff", "rgba(255, 255, 255, 0.6)"],
      mergedColor: []
    });
    const mergeColor2 = () => {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    };
    watch(() => props.color, () => {
      mergeColor2();
    });
    const { width, height, initWH } = autoResize(borderBox2);
    expose({
      initWH
    });
    onMounted(() => {
      mergeColor2();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "borderBox2",
        ref: borderBox2,
        class: "dv-border-box-2"
      }, [
        (openBlock(), createElementBlock("svg", {
          class: "dv-border-svg-container",
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("polygon", {
            fill: __props.backgroundColor,
            points: `
        7, 7 ${unref(width) - 7}, 7 ${unref(width) - 7}, ${unref(height) - 7} 7, ${unref(height) - 7}
      `
          }, null, 8, _hoisted_2$b),
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            points: `2, 2 ${unref(width) - 2} ,2 ${unref(width) - 2}, ${unref(height) - 2} 2, ${unref(height) - 2} 2, 2`
          }, null, 8, _hoisted_3$b),
          createElementVNode("polyline", {
            stroke: state.mergedColor[1],
            points: `6, 6 ${unref(width) - 6}, 6 ${unref(width) - 6}, ${unref(height) - 6} 6, ${unref(height) - 6} 6, 6`
          }, null, 8, _hoisted_4$b),
          createElementVNode("circle", {
            fill: state.mergedColor[0],
            cx: "11",
            cy: "11",
            r: "1"
          }, null, 8, _hoisted_5$a),
          createElementVNode("circle", {
            fill: state.mergedColor[0],
            cx: unref(width) - 11,
            cy: "11",
            r: "1"
          }, null, 8, _hoisted_6$a),
          createElementVNode("circle", {
            fill: state.mergedColor[0],
            cx: unref(width) - 11,
            cy: unref(height) - 11,
            r: "1"
          }, null, 8, _hoisted_7$9),
          createElementVNode("circle", {
            fill: state.mergedColor[0],
            cx: "11",
            cy: unref(height) - 11,
            r: "1"
          }, null, 8, _hoisted_8$8)
        ], 8, _hoisted_1$b)),
        createElementVNode("div", _hoisted_9$8, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 512);
    };
  }
});
const BorderBox2Plugin = {
  install(app) {
    app.component("DvBorderBox2", _sfc_main$b);
  }
};
var index_vue_vue_type_style_index_0_lang$a = "";
const _hoisted_1$a = ["width", "height"];
const _hoisted_2$a = ["fill", "points"];
const _hoisted_3$a = ["stroke", "points"];
const _hoisted_4$a = ["stroke", "points"];
const _hoisted_5$9 = ["stroke", "points"];
const _hoisted_6$9 = ["stroke", "points"];
const _hoisted_7$8 = { class: "border-box-content" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
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
  setup(__props, { expose }) {
    const props = __props;
    const borderBox3 = ref(null);
    const state = reactive({
      defaultColor: ["#2862b7", "#2862b7"],
      mergedColor: []
    });
    const { width, height, initWH } = autoResize(borderBox3);
    expose({
      initWH
    });
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    function mergeColor2() {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "borderBox3",
        ref: borderBox3,
        class: "dv-border-box-3"
      }, [
        (openBlock(), createElementBlock("svg", {
          class: "dv-border-svg-container",
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("polygon", {
            fill: __props.backgroundColor,
            points: `
        23, 23 ${unref(width) - 24}, 23 ${unref(width) - 24}, ${unref(height) - 24} 23, ${unref(height) - 24}
      `
          }, null, 8, _hoisted_2$a),
          createElementVNode("polyline", {
            class: "dv-bb3-line1",
            stroke: state.mergedColor[0],
            points: `4, 4 ${unref(width) - 22} ,4 ${unref(width) - 22}, ${unref(height) - 22} 4, ${unref(height) - 22} 4, 4`
          }, null, 8, _hoisted_3$a),
          createElementVNode("polyline", {
            class: "dv-bb3-line2",
            stroke: state.mergedColor[1],
            points: `10, 10 ${unref(width) - 16}, 10 ${unref(width) - 16}, ${unref(height) - 16} 10, ${unref(height) - 16} 10, 10`
          }, null, 8, _hoisted_4$a),
          createElementVNode("polyline", {
            class: "dv-bb3-line2",
            stroke: state.mergedColor[1],
            points: `16, 16 ${unref(width) - 10}, 16 ${unref(width) - 10}, ${unref(height) - 10} 16, ${unref(height) - 10} 16, 16`
          }, null, 8, _hoisted_5$9),
          createElementVNode("polyline", {
            class: "dv-bb3-line2",
            stroke: state.mergedColor[1],
            points: `22, 22 ${unref(width) - 4}, 22 ${unref(width) - 4}, ${unref(height) - 4} 22, ${unref(height) - 4} 22, 22`
          }, null, 8, _hoisted_6$9)
        ], 8, _hoisted_1$a)),
        createElementVNode("div", _hoisted_7$8, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 512);
    };
  }
});
const BorderBox3Plugin = {
  install(app) {
    app.component("DvBorderBox3", _sfc_main$a);
  }
};
var index_vue_vue_type_style_index_0_lang$9 = "";
const _hoisted_1$9 = ["width", "height"];
const _hoisted_2$9 = ["fill", "points"];
const _hoisted_3$9 = ["stroke", "points"];
const _hoisted_4$9 = ["stroke", "points"];
const _hoisted_5$8 = ["stroke", "points"];
const _hoisted_6$8 = ["stroke"];
const _hoisted_7$7 = ["stroke"];
const _hoisted_8$7 = ["stroke"];
const _hoisted_9$7 = ["stroke"];
const _hoisted_10$6 = ["stroke"];
const _hoisted_11$5 = ["stroke", "points"];
const _hoisted_12$5 = ["stroke", "points"];
const _hoisted_13$5 = { class: "border-box-content" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    },
    reverse: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    const borderBox4 = ref(null);
    const state = reactive({
      defaultColor: ["red", "rgba(0,0,255,0.8)"],
      mergedColor: []
    });
    const { width, height, initWH } = autoResize(borderBox4);
    expose({
      initWH
    });
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    function mergeColor2() {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "borderBox4",
        ref: borderBox4,
        class: "dv-border-box-4"
      }, [
        (openBlock(), createElementBlock("svg", {
          class: normalizeClass(`dv-border-svg-container ${__props.reverse && "dv-reverse"}`),
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("polygon", {
            fill: __props.backgroundColor,
            points: `
        ${unref(width) - 15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24
        16, 42 16, ${unref(height) - 32} 41, ${unref(height) - 7} ${unref(width) - 15}, ${unref(height) - 7}
      `
          }, null, 8, _hoisted_2$9),
          createElementVNode("polyline", {
            class: "dv-bb4-line-1",
            stroke: state.mergedColor[0],
            points: `145, ${unref(height) - 5} 40, ${unref(height) - 5} 10, ${unref(height) - 35}
          10, 40 40, 5 150, 5 170, 20 ${unref(width) - 15}, 20`
          }, null, 8, _hoisted_3$9),
          createElementVNode("polyline", {
            stroke: state.mergedColor[1],
            class: "dv-bb4-line-2",
            points: `245, ${unref(height) - 1} 36, ${unref(height) - 1} 14, ${unref(height) - 23}
          14, ${unref(height) - 100}`
          }, null, 8, _hoisted_4$9),
          createElementVNode("polyline", {
            class: "dv-bb4-line-3",
            stroke: state.mergedColor[0],
            points: `7, ${unref(height) - 40} 7, ${unref(height) - 75}`
          }, null, 8, _hoisted_5$8),
          createElementVNode("polyline", {
            class: "dv-bb4-line-4",
            stroke: state.mergedColor[0],
            points: `28, 24 13, 41 13, 64`
          }, null, 8, _hoisted_6$8),
          createElementVNode("polyline", {
            class: "dv-bb4-line-5",
            stroke: state.mergedColor[0],
            points: `5, 45 5, 140`
          }, null, 8, _hoisted_7$7),
          createElementVNode("polyline", {
            class: "dv-bb4-line-6",
            stroke: state.mergedColor[1],
            points: `14, 75 14, 180`
          }, null, 8, _hoisted_8$7),
          createElementVNode("polyline", {
            class: "dv-bb4-line-7",
            stroke: state.mergedColor[1],
            points: `55, 11 147, 11 167, 26 250, 26`
          }, null, 8, _hoisted_9$7),
          createElementVNode("polyline", {
            class: "dv-bb4-line-8",
            stroke: state.mergedColor[1],
            points: `158, 5 173, 16`
          }, null, 8, _hoisted_10$6),
          createElementVNode("polyline", {
            class: "dv-bb4-line-9",
            stroke: state.mergedColor[0],
            points: `200, 17 ${unref(width) - 10}, 17`
          }, null, 8, _hoisted_11$5),
          createElementVNode("polyline", {
            class: "dv-bb4-line-10",
            stroke: state.mergedColor[1],
            points: `385, 17 ${unref(width) - 10}, 17`
          }, null, 8, _hoisted_12$5)
        ], 10, _hoisted_1$9)),
        createElementVNode("div", _hoisted_13$5, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 512);
    };
  }
});
const BorderBox4Plugin = {
  install(app) {
    app.component("DvBorderBox4", _sfc_main$9);
  }
};
var index_vue_vue_type_style_index_0_lang$8 = "";
const _hoisted_1$8 = ["width", "height"];
const _hoisted_2$8 = ["fill", "points"];
const _hoisted_3$8 = ["stroke", "points"];
const _hoisted_4$8 = ["stroke", "points"];
const _hoisted_5$7 = ["stroke", "points"];
const _hoisted_6$7 = ["stroke", "points"];
const _hoisted_7$6 = ["stroke", "points"];
const _hoisted_8$6 = ["stroke", "points"];
const _hoisted_9$6 = { class: "border-box-content" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    },
    reverse: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    const borderBox5 = ref(null);
    const state = reactive({
      defaultColor: ["rgba(255, 255, 255, 0.35)", "rgba(255, 255, 255, 0.20)"],
      mergedColor: []
    });
    const { width, height, initWH } = autoResize(borderBox5);
    expose({
      initWH
    });
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    function mergeColor2() {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "borderBox5",
        ref: borderBox5,
        class: "dv-border-box-5"
      }, [
        (openBlock(), createElementBlock("svg", {
          class: normalizeClass(`dv-border-svg-container  ${__props.reverse && "dv-reverse"}`),
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("polygon", {
            fill: __props.backgroundColor,
            points: `
        10, 22 ${unref(width) - 22}, 22 ${unref(width) - 22}, ${unref(height) - 86} ${unref(width) - 84}, ${unref(height) - 24} 10, ${unref(height) - 24}
      `
          }, null, 8, _hoisted_2$8),
          createElementVNode("polyline", {
            class: "dv-bb5-line-1",
            stroke: state.mergedColor[0],
            points: `8, 5 ${unref(width) - 5}, 5 ${unref(width) - 5}, ${unref(height) - 100}
          ${unref(width) - 100}, ${unref(height) - 5} 8, ${unref(height) - 5} 8, 5`
          }, null, 8, _hoisted_3$8),
          createElementVNode("polyline", {
            class: "dv-bb5-line-2",
            stroke: state.mergedColor[1],
            points: `3, 5 ${unref(width) - 20}, 5 ${unref(width) - 20}, ${unref(height) - 60}
          ${unref(width) - 74}, ${unref(height) - 5} 3, ${unref(height) - 5} 3, 5`
          }, null, 8, _hoisted_4$8),
          createElementVNode("polyline", {
            class: "dv-bb5-line-3",
            stroke: state.mergedColor[1],
            points: `50, 13 ${unref(width) - 35}, 13`
          }, null, 8, _hoisted_5$7),
          createElementVNode("polyline", {
            class: "dv-bb5-line-4",
            stroke: state.mergedColor[1],
            points: `15, 20 ${unref(width) - 35}, 20`
          }, null, 8, _hoisted_6$7),
          createElementVNode("polyline", {
            class: "dv-bb5-line-5",
            stroke: state.mergedColor[1],
            points: `15, ${unref(height) - 20} ${unref(width) - 110}, ${unref(height) - 20}`
          }, null, 8, _hoisted_7$6),
          createElementVNode("polyline", {
            class: "dv-bb5-line-6",
            stroke: state.mergedColor[1],
            points: `15, ${unref(height) - 13} ${unref(width) - 110}, ${unref(height) - 13}`
          }, null, 8, _hoisted_8$6)
        ], 10, _hoisted_1$8)),
        createElementVNode("div", _hoisted_9$6, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 512);
    };
  }
});
const BorderBox5Plugin = {
  install(app) {
    app.component("DvBorderBox5", _sfc_main$8);
  }
};
var index_vue_vue_type_style_index_0_lang$7 = "";
const _hoisted_1$7 = ["width", "height"];
const _hoisted_2$7 = ["fill", "points"];
const _hoisted_3$7 = ["fill"];
const _hoisted_4$7 = ["fill", "cx"];
const _hoisted_5$6 = ["fill", "cx", "cy"];
const _hoisted_6$6 = ["fill", "cy"];
const _hoisted_7$5 = ["stroke", "points"];
const _hoisted_8$5 = ["stroke", "points"];
const _hoisted_9$5 = ["stroke", "points"];
const _hoisted_10$5 = ["stroke", "points"];
const _hoisted_11$4 = ["stroke"];
const _hoisted_12$4 = ["stroke"];
const _hoisted_13$4 = ["stroke", "points"];
const _hoisted_14$4 = ["stroke", "points"];
const _hoisted_15$2 = ["stroke", "points"];
const _hoisted_16$2 = ["stroke", "points"];
const _hoisted_17$2 = ["stroke", "points"];
const _hoisted_18$2 = ["stroke", "points"];
const _hoisted_19$2 = { class: "border-box-content" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
  setup(__props, { expose }) {
    const props = __props;
    const borderBox6 = ref(null);
    const state = reactive({
      defaultColor: ["rgba(255, 255, 255, 0.35)", "gray"],
      mergedColor: []
    });
    const { width, height, initWH } = autoResize(borderBox6);
    expose({
      initWH
    });
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    function mergeColor2() {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "borderBox6",
        ref: borderBox6,
        class: "dv-border-box-6"
      }, [
        (openBlock(), createElementBlock("svg", {
          class: "dv-border-svg-container",
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("polygon", {
            fill: __props.backgroundColor,
            points: `
        9, 7 ${unref(width) - 9}, 7 ${unref(width) - 9}, ${unref(height) - 7} 9, ${unref(height) - 7}
      `
          }, null, 8, _hoisted_2$7),
          createElementVNode("circle", {
            fill: state.mergedColor[1],
            cx: "5",
            cy: "5",
            r: "2"
          }, null, 8, _hoisted_3$7),
          createElementVNode("circle", {
            fill: state.mergedColor[1],
            cx: unref(width) - 5,
            cy: "5",
            r: "2"
          }, null, 8, _hoisted_4$7),
          createElementVNode("circle", {
            fill: state.mergedColor[1],
            cx: unref(width) - 5,
            cy: unref(height) - 5,
            r: "2"
          }, null, 8, _hoisted_5$6),
          createElementVNode("circle", {
            fill: state.mergedColor[1],
            cx: "5",
            cy: unref(height) - 5,
            r: "2"
          }, null, 8, _hoisted_6$6),
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            points: `10, 4 ${unref(width) - 10}, 4`
          }, null, 8, _hoisted_7$5),
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            points: `10, ${unref(height) - 4} ${unref(width) - 10}, ${unref(height) - 4}`
          }, null, 8, _hoisted_8$5),
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            points: `5, 70 5, ${unref(height) - 70}`
          }, null, 8, _hoisted_9$5),
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            points: `${unref(width) - 5}, 70 ${unref(width) - 5}, ${unref(height) - 70}`
          }, null, 8, _hoisted_10$5),
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            points: `3, 10, 3, 50`
          }, null, 8, _hoisted_11$4),
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            points: `7, 30 7, 80`
          }, null, 8, _hoisted_12$4),
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            points: `${unref(width) - 3}, 10 ${unref(width) - 3}, 50`
          }, null, 8, _hoisted_13$4),
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            points: `${unref(width) - 7}, 30 ${unref(width) - 7}, 80`
          }, null, 8, _hoisted_14$4),
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            points: `3, ${unref(height) - 10} 3, ${unref(height) - 50}`
          }, null, 8, _hoisted_15$2),
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            points: `7, ${unref(height) - 30} 7, ${unref(height) - 80}`
          }, null, 8, _hoisted_16$2),
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            points: `${unref(width) - 3}, ${unref(height) - 10} ${unref(width) - 3}, ${unref(height) - 50}`
          }, null, 8, _hoisted_17$2),
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            points: `${unref(width) - 7}, ${unref(height) - 30} ${unref(width) - 7}, ${unref(height) - 80}`
          }, null, 8, _hoisted_18$2)
        ], 8, _hoisted_1$7)),
        createElementVNode("div", _hoisted_19$2, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 512);
    };
  }
});
const BorderBox6Plugin = {
  install(app) {
    app.component("DvBorderBox6", _sfc_main$7);
  }
};
var index_vue_vue_type_style_index_0_lang$6 = "";
const _hoisted_1$6 = ["width", "height"];
const _hoisted_2$6 = ["stroke"];
const _hoisted_3$6 = ["stroke", "points"];
const _hoisted_4$6 = ["stroke", "points"];
const _hoisted_5$5 = ["stroke", "points"];
const _hoisted_6$5 = ["stroke"];
const _hoisted_7$4 = ["stroke", "points"];
const _hoisted_8$4 = ["stroke", "points"];
const _hoisted_9$4 = ["stroke", "points"];
const _hoisted_10$4 = { class: "border-box-content" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
  setup(__props, { expose }) {
    const props = __props;
    const borderBox7 = ref(null);
    const state = reactive({
      defaultColor: ["rgba(128,128,128,0.3)", "rgba(128,128,128,0.5)"],
      mergedColor: []
    });
    const { width, height, initWH } = autoResize(borderBox7);
    expose({
      initWH
    });
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    function mergeColor2() {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "borderBox7",
        ref: borderBox7,
        class: "dv-border-box-7",
        style: normalizeStyle(`box-shadow: inset 0 0 40px ${state.mergedColor[0]}; border: 1px solid ${state.mergedColor[0]}; background-color: ${__props.backgroundColor}`)
      }, [
        (openBlock(), createElementBlock("svg", {
          class: "dv-border-svg-container",
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("polyline", {
            class: "dv-bb7-line-width-2",
            stroke: state.mergedColor[0],
            points: `0, 25 0, 0 25, 0`
          }, null, 8, _hoisted_2$6),
          createElementVNode("polyline", {
            class: "dv-bb7-line-width-2",
            stroke: state.mergedColor[0],
            points: `${unref(width) - 25}, 0 ${unref(width)}, 0 ${unref(width)}, 25`
          }, null, 8, _hoisted_3$6),
          createElementVNode("polyline", {
            class: "dv-bb7-line-width-2",
            stroke: state.mergedColor[0],
            points: `${unref(width) - 25}, ${unref(height)} ${unref(width)}, ${unref(height)} ${unref(width)}, ${unref(height) - 25}`
          }, null, 8, _hoisted_4$6),
          createElementVNode("polyline", {
            class: "dv-bb7-line-width-2",
            stroke: state.mergedColor[0],
            points: `0, ${unref(height) - 25} 0, ${unref(height)} 25, ${unref(height)}`
          }, null, 8, _hoisted_5$5),
          createElementVNode("polyline", {
            class: "dv-bb7-line-width-5",
            stroke: state.mergedColor[1],
            points: `0, 10 0, 0 10, 0`
          }, null, 8, _hoisted_6$5),
          createElementVNode("polyline", {
            class: "dv-bb7-line-width-5",
            stroke: state.mergedColor[1],
            points: `${unref(width) - 10}, 0 ${unref(width)}, 0 ${unref(width)}, 10`
          }, null, 8, _hoisted_7$4),
          createElementVNode("polyline", {
            class: "dv-bb7-line-width-5",
            stroke: state.mergedColor[1],
            points: `${unref(width) - 10}, ${unref(height)} ${unref(width)}, ${unref(height)} ${unref(width)}, ${unref(height) - 10}`
          }, null, 8, _hoisted_8$4),
          createElementVNode("polyline", {
            class: "dv-bb7-line-width-5",
            stroke: state.mergedColor[1],
            points: `0, ${unref(height) - 10} 0, ${unref(height)} 10, ${unref(height)}`
          }, null, 8, _hoisted_9$4)
        ], 8, _hoisted_1$6)),
        createElementVNode("div", _hoisted_10$4, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 4);
    };
  }
});
const BorderBox7Plugin = {
  install(app) {
    app.component("DvBorderBox7", _sfc_main$6);
  }
};
var index_vue_vue_type_style_index_0_lang$5 = "";
const _hoisted_1$5 = ["width", "height"];
const _hoisted_2$5 = ["id", "d"];
const _hoisted_3$5 = ["id"];
const _hoisted_4$5 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#fff",
  "stop-opacity": "1"
}, null, -1);
const _hoisted_5$4 = /* @__PURE__ */ createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#fff",
  "stop-opacity": "0"
}, null, -1);
const _hoisted_6$4 = [
  _hoisted_4$5,
  _hoisted_5$4
];
const _hoisted_7$3 = ["id"];
const _hoisted_8$3 = ["fill"];
const _hoisted_9$3 = ["dur", "path"];
const _hoisted_10$3 = ["fill", "points"];
const _hoisted_11$3 = ["stroke", "xlink:href"];
const _hoisted_12$3 = ["stroke", "xlink:href", "mask"];
const _hoisted_13$3 = ["from", "to", "dur"];
const _hoisted_14$3 = { class: "border-box-content" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    },
    dur: {
      type: Number,
      default: 3
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    const id = uuid();
    const borderBox8 = ref(null);
    const state = reactive({
      ref: "border-box-8",
      path: `border-box-8-path-${id}`,
      gradient: `border-box-8-gradient-${id}`,
      mask: `border-box-8-mask-${id}`,
      defaultColor: ["#235fa7", "#4fd2dd"],
      mergedColor: []
    });
    const { width, height, initWH } = autoResize(borderBox8);
    expose({
      initWH
    });
    const length = computed(() => {
      return (width.value + height.value - 5) * 2;
    });
    const pathD = computed(() => {
      if (props.reverse)
        return `M 2.5, 2.5 L 2.5, ${height.value - 2.5} L ${width.value - 2.5}, ${height.value - 2.5} L ${width.value - 2.5}, 2.5 L 2.5, 2.5`;
      return `M2.5, 2.5 L${width.value - 2.5}, 2.5 L${width.value - 2.5}, ${height.value - 2.5} L2.5, ${height.value - 2.5} L2.5, 2.5`;
    });
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    function mergeColor2() {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "borderBox8",
        ref: borderBox8,
        class: "dv-border-box-8"
      }, [
        (openBlock(), createElementBlock("svg", {
          class: "dv-border-svg-container",
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("defs", null, [
            createElementVNode("path", {
              id: state.path,
              d: unref(pathD),
              fill: "transparent"
            }, null, 8, _hoisted_2$5),
            createElementVNode("radialGradient", {
              id: state.gradient,
              cx: "50%",
              cy: "50%",
              r: "50%"
            }, _hoisted_6$4, 8, _hoisted_3$5),
            createElementVNode("mask", {
              id: state.mask
            }, [
              createElementVNode("circle", {
                cx: "0",
                cy: "0",
                r: "150",
                fill: `url(#${state.gradient})`
              }, [
                createElementVNode("animateMotion", {
                  dur: `${__props.dur}s`,
                  path: unref(pathD),
                  rotate: "auto",
                  repeatCount: "indefinite"
                }, null, 8, _hoisted_9$3)
              ], 8, _hoisted_8$3)
            ], 8, _hoisted_7$3)
          ]),
          createElementVNode("polygon", {
            fill: __props.backgroundColor,
            points: `5, 5 ${unref(width) - 5}, 5 ${unref(width) - 5} ${unref(height) - 5} 5, ${unref(height) - 5}`
          }, null, 8, _hoisted_10$3),
          createElementVNode("use", {
            stroke: state.mergedColor[0],
            "stroke-width": "1",
            "xlink:href": `#${state.path}`
          }, null, 8, _hoisted_11$3),
          createElementVNode("use", {
            stroke: state.mergedColor[1],
            "stroke-width": "3",
            "xlink:href": `#${state.path}`,
            mask: `url(#${state.mask})`
          }, [
            createElementVNode("animate", {
              attributeName: "stroke-dasharray",
              from: `0, ${unref(length)}`,
              to: `${unref(length)}, 0`,
              dur: `${__props.dur}s`,
              repeatCount: "indefinite"
            }, null, 8, _hoisted_13$3)
          ], 8, _hoisted_12$3)
        ], 8, _hoisted_1$5)),
        createElementVNode("div", _hoisted_14$3, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 512);
    };
  }
});
const BorderBox8Plugin = {
  install(app) {
    app.component("DvBorderBox8", _sfc_main$5);
  }
};
var index_vue_vue_type_style_index_0_lang$4 = "";
const _hoisted_1$4 = ["width", "height"];
const _hoisted_2$4 = ["id"];
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("animate", {
  attributeName: "x1",
  values: "0%;100%;0%",
  dur: "10s",
  begin: "0s",
  repeatCount: "indefinite"
}, null, -1);
const _hoisted_4$4 = /* @__PURE__ */ createElementVNode("animate", {
  attributeName: "x2",
  values: "100%;0%;100%",
  dur: "10s",
  begin: "0s",
  repeatCount: "indefinite"
}, null, -1);
const _hoisted_5$3 = ["stop-color"];
const _hoisted_6$3 = ["values"];
const _hoisted_7$2 = ["stop-color"];
const _hoisted_8$2 = ["values"];
const _hoisted_9$2 = ["id"];
const _hoisted_10$2 = ["points"];
const _hoisted_11$2 = ["points"];
const _hoisted_12$2 = ["points"];
const _hoisted_13$2 = ["points"];
const _hoisted_14$2 = ["points"];
const _hoisted_15$1 = ["points"];
const _hoisted_16$1 = ["points"];
const _hoisted_17$1 = ["points"];
const _hoisted_18$1 = ["points"];
const _hoisted_19$1 = ["fill", "points"];
const _hoisted_20$1 = ["width", "height", "fill", "mask"];
const _hoisted_21$1 = { class: "border-box-content" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
  setup(__props, { expose }) {
    const props = __props;
    const id = uuid();
    const borderBox9 = ref(null);
    const { width, height, initWH } = autoResize(borderBox9);
    expose({
      initWH
    });
    const state = reactive({
      gradientId: `border-box-9-gradient-${id}`,
      maskId: `border-box-9-mask-${id}`,
      defaultColor: ["#11eefd", "#0078d2"],
      mergedColor: []
    });
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    function mergeColor2() {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "borderBox9",
        ref: borderBox9,
        class: "dv-border-box-9"
      }, [
        (openBlock(), createElementBlock("svg", {
          class: "dv-border-svg-container",
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("defs", null, [
            createElementVNode("linearGradient", {
              id: state.gradientId,
              x1: "0%",
              y1: "0%",
              x2: "100%",
              y2: "100%"
            }, [
              _hoisted_3$4,
              _hoisted_4$4,
              createElementVNode("stop", {
                offset: "0%",
                "stop-color": state.mergedColor[0]
              }, [
                createElementVNode("animate", {
                  attributeName: "stop-color",
                  values: `${state.mergedColor[0]};${state.mergedColor[1]};${state.mergedColor[0]}`,
                  dur: "10s",
                  begin: "0s",
                  repeatCount: "indefinite"
                }, null, 8, _hoisted_6$3)
              ], 8, _hoisted_5$3),
              createElementVNode("stop", {
                offset: "100%",
                "stop-color": state.mergedColor[1]
              }, [
                createElementVNode("animate", {
                  attributeName: "stop-color",
                  values: `${state.mergedColor[1]};${state.mergedColor[0]};${state.mergedColor[1]}`,
                  dur: "10s",
                  begin: "0s",
                  repeatCount: "indefinite"
                }, null, 8, _hoisted_8$2)
              ], 8, _hoisted_7$2)
            ], 8, _hoisted_2$4),
            createElementVNode("mask", {
              id: state.maskId
            }, [
              createElementVNode("polyline", {
                stroke: "#fff",
                "stroke-width": "3",
                fill: "transparent",
                points: `8, ${unref(height) * 0.4} 8, 3, ${unref(width) * 0.4 + 7}, 3`
              }, null, 8, _hoisted_10$2),
              createElementVNode("polyline", {
                fill: "#fff",
                points: `8, ${unref(height) * 0.15} 8, 3, ${unref(width) * 0.1 + 7}, 3
              ${unref(width) * 0.1}, 8 14, 8 14, ${unref(height) * 0.15 - 7}
            `
              }, null, 8, _hoisted_11$2),
              createElementVNode("polyline", {
                stroke: "#fff",
                "stroke-width": "3",
                fill: "transparent",
                points: `${unref(width) * 0.5}, 3 ${unref(width) - 3}, 3, ${unref(width) - 3}, ${unref(height) * 0.25}`
              }, null, 8, _hoisted_12$2),
              createElementVNode("polyline", {
                fill: "#fff",
                points: `
              ${unref(width) * 0.52}, 3 ${unref(width) * 0.58}, 3
              ${unref(width) * 0.58 - 7}, 9 ${unref(width) * 0.52 + 7}, 9
            `
              }, null, 8, _hoisted_13$2),
              createElementVNode("polyline", {
                fill: "#fff",
                points: `
              ${unref(width) * 0.9}, 3 ${unref(width) - 3}, 3 ${unref(width) - 3}, ${unref(height) * 0.1}
              ${unref(width) - 9}, ${unref(height) * 0.1 - 7} ${unref(width) - 9}, 9 ${unref(width) * 0.9 + 7}, 9
            `
              }, null, 8, _hoisted_14$2),
              createElementVNode("polyline", {
                stroke: "#fff",
                "stroke-width": "3",
                fill: "transparent",
                points: `8, ${unref(height) * 0.5} 8, ${unref(height) - 3} ${unref(width) * 0.3 + 7}, ${unref(height) - 3}`
              }, null, 8, _hoisted_15$1),
              createElementVNode("polyline", {
                fill: "#fff",
                points: `
              8, ${unref(height) * 0.55} 8, ${unref(height) * 0.7}
              2, ${unref(height) * 0.7 - 7} 2, ${unref(height) * 0.55 + 7}
            `
              }, null, 8, _hoisted_16$1),
              createElementVNode("polyline", {
                stroke: "#fff",
                "stroke-width": "3",
                fill: "transparent",
                points: `${unref(width) * 0.35}, ${unref(height) - 3} ${unref(width) - 3}, ${unref(height) - 3} ${unref(width) - 3}, ${unref(height) * 0.35}`
              }, null, 8, _hoisted_17$1),
              createElementVNode("polyline", {
                fill: "#fff",
                points: `
              ${unref(width) * 0.92}, ${unref(height) - 3} ${unref(width) - 3}, ${unref(height) - 3} ${unref(width) - 3}, ${unref(height) * 0.8}
              ${unref(width) - 9}, ${unref(height) * 0.8 + 7} ${unref(width) - 9}, ${unref(height) - 9} ${unref(width) * 0.92 + 7}, ${unref(height) - 9}
            `
              }, null, 8, _hoisted_18$1)
            ], 8, _hoisted_9$2)
          ]),
          createElementVNode("polygon", {
            fill: __props.backgroundColor,
            points: `
        15, 9 ${unref(width) * 0.1 + 1}, 9 ${unref(width) * 0.1 + 4}, 6 ${unref(width) * 0.52 + 2}, 6
        ${unref(width) * 0.52 + 6}, 10 ${unref(width) * 0.58 - 7}, 10 ${unref(width) * 0.58 - 2}, 6
        ${unref(width) * 0.9 + 2}, 6 ${unref(width) * 0.9 + 6}, 10 ${unref(width) - 10}, 10 ${unref(width) - 10}, ${unref(height) * 0.1 - 6}
        ${unref(width) - 6}, ${unref(height) * 0.1 - 1} ${unref(width) - 6}, ${unref(height) * 0.8 + 1} ${unref(width) - 10}, ${unref(height) * 0.8 + 6}
        ${unref(width) - 10}, ${unref(height) - 10} ${unref(width) * 0.92 + 7}, ${unref(height) - 10}  ${unref(width) * 0.92 + 2}, ${unref(height) - 6}
        11, ${unref(height) - 6} 11, ${unref(height) * 0.15 - 2} 15, ${unref(height) * 0.15 - 7}
      `
          }, null, 8, _hoisted_19$1),
          createElementVNode("rect", {
            x: "0",
            y: "0",
            width: unref(width),
            height: unref(height),
            fill: `url(#${state.gradientId})`,
            mask: `url(#${state.maskId})`
          }, null, 8, _hoisted_20$1)
        ], 8, _hoisted_1$4)),
        createElementVNode("div", _hoisted_21$1, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 512);
    };
  }
});
const BorderBox9Plugin = {
  install(app) {
    app.component("DvBorderBox9", _sfc_main$4);
  }
};
var index_vue_vue_type_style_index_0_lang$3 = "";
const _hoisted_1$3 = ["width", "height"];
const _hoisted_2$3 = ["fill", "points"];
const _hoisted_3$3 = ["fill"];
const _hoisted_4$3 = { class: "border-box-content" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
  setup(__props, { expose }) {
    const props = __props;
    const borderBox10 = ref(null);
    const { width, height, initWH } = autoResize(borderBox10);
    expose({
      initWH
    });
    const state = reactive({
      border: ["left-top", "right-top", "left-bottom", "right-bottom"],
      defaultColor: ["#1d48c4", "#d3e1f8"],
      mergedColor: []
    });
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    function mergeColor2() {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "borderBox10",
        ref: borderBox10,
        class: "dv-border-box-10",
        style: normalizeStyle(`box-shadow: inset 0 0 25px 3px ${state.mergedColor[0]}`)
      }, [
        (openBlock(), createElementBlock("svg", {
          class: "dv-border-svg-container",
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("polygon", {
            fill: __props.backgroundColor,
            points: `
        4, 0 ${unref(width) - 4}, 0 ${unref(width)}, 4 ${unref(width)}, ${unref(height) - 4} ${unref(width) - 4}, ${unref(height)}
        4, ${unref(height)} 0, ${unref(height) - 4} 0, 4
      `
          }, null, 8, _hoisted_2$3)
        ], 8, _hoisted_1$3)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(state.border, (item) => {
          return openBlock(), createElementBlock("svg", {
            key: item,
            width: "150px",
            height: "150px",
            class: normalizeClass(`${item} dv-border-svg-container`)
          }, [
            createElementVNode("polygon", {
              fill: state.mergedColor[1],
              points: "40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"
            }, null, 8, _hoisted_3$3)
          ], 2);
        }), 128)),
        createElementVNode("div", _hoisted_4$3, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 4);
    };
  }
});
const BorderBox10Plugin = {
  install(app) {
    app.component("DvBorderBox10", _sfc_main$3);
  }
};
var index_vue_vue_type_style_index_0_lang$2 = "";
const _hoisted_1$2 = ["width", "height"];
const _hoisted_2$2 = ["id"];
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("feMorphology", {
  operator: "dilate",
  radius: "2",
  in: "SourceAlpha",
  result: "thicken"
}, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createElementVNode("feGaussianBlur", {
  in: "thicken",
  stdDeviation: "3",
  result: "blurred"
}, null, -1);
const _hoisted_5$2 = ["flood-color"];
const _hoisted_6$2 = /* @__PURE__ */ createElementVNode("feComposite", {
  in: "glowColor",
  in2: "blurred",
  operator: "in",
  result: "softGlowColored"
}, null, -1);
const _hoisted_7$1 = /* @__PURE__ */ createElementVNode("feMerge", null, [
  /* @__PURE__ */ createElementVNode("feMergeNode", { in: "softGlowColored" }),
  /* @__PURE__ */ createElementVNode("feMergeNode", { in: "SourceGraphic" })
], -1);
const _hoisted_8$1 = ["fill", "points"];
const _hoisted_9$1 = ["stroke", "filter", "points"];
const _hoisted_10$1 = ["stroke", "points"];
const _hoisted_11$1 = ["stroke", "points"];
const _hoisted_12$1 = ["stroke", "fill", "filter", "points"];
const _hoisted_13$1 = ["filter", "fill", "points"];
const _hoisted_14$1 = /* @__PURE__ */ createElementVNode("animate", {
  attributeName: "opacity",
  values: "1;0.7;1",
  dur: "2s",
  begin: "0s",
  repeatCount: "indefinite"
}, null, -1);
const _hoisted_15 = [
  _hoisted_14$1
];
const _hoisted_16 = ["filter", "fill", "points"];
const _hoisted_17 = /* @__PURE__ */ createElementVNode("animate", {
  attributeName: "opacity",
  values: "0.7;0.4;0.7",
  dur: "2s",
  begin: "0s",
  repeatCount: "indefinite"
}, null, -1);
const _hoisted_18 = [
  _hoisted_17
];
const _hoisted_19 = ["filter", "fill", "points"];
const _hoisted_20 = /* @__PURE__ */ createElementVNode("animate", {
  attributeName: "opacity",
  values: "0.5;0.2;0.5",
  dur: "2s",
  begin: "0s",
  repeatCount: "indefinite"
}, null, -1);
const _hoisted_21 = [
  _hoisted_20
];
const _hoisted_22 = ["filter", "fill", "points"];
const _hoisted_23 = /* @__PURE__ */ createElementVNode("animate", {
  attributeName: "opacity",
  values: "1;0.7;1",
  dur: "2s",
  begin: "0s",
  repeatCount: "indefinite"
}, null, -1);
const _hoisted_24 = [
  _hoisted_23
];
const _hoisted_25 = ["filter", "fill", "points"];
const _hoisted_26 = /* @__PURE__ */ createElementVNode("animate", {
  attributeName: "opacity",
  values: "0.7;0.4;0.7",
  dur: "2s",
  begin: "0s",
  repeatCount: "indefinite"
}, null, -1);
const _hoisted_27 = [
  _hoisted_26
];
const _hoisted_28 = ["filter", "fill", "points"];
const _hoisted_29 = /* @__PURE__ */ createElementVNode("animate", {
  attributeName: "opacity",
  values: "0.5;0.2;0.5",
  dur: "2s",
  begin: "0s",
  repeatCount: "indefinite"
}, null, -1);
const _hoisted_30 = [
  _hoisted_29
];
const _hoisted_31 = ["x"];
const _hoisted_32 = ["fill", "filter", "points"];
const _hoisted_33 = ["fill", "filter", "points"];
const _hoisted_34 = { class: "border-box-content" };
const _sfc_main$2 = {
  __name: "index",
  props: {
    color: {
      type: Array,
      default: () => []
    },
    titleWidth: {
      type: Number,
      default: 250
    },
    title: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    const id = uuid();
    const borderBox11 = ref(null);
    const { width, height, initWH } = autoResize(borderBox11);
    expose({
      initWH
    });
    const state = reactive({
      filterId: `border-box-11-filterId-${id}`,
      defaultColor: ["#8aaafb", "#1f33a2"],
      mergedColor: []
    });
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    function mergeColor2() {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "borderBox11",
        ref: borderBox11,
        class: "dv-border-box-11"
      }, [
        (openBlock(), createElementBlock("svg", {
          class: "dv-border-svg-container",
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("defs", null, [
            createElementVNode("filter", {
              id: state.filterId,
              height: "150%",
              width: "150%",
              x: "-25%",
              y: "-25%"
            }, [
              _hoisted_3$2,
              _hoisted_4$2,
              createElementVNode("feFlood", {
                "flood-color": state.mergedColor[1],
                result: "glowColor"
              }, null, 8, _hoisted_5$2),
              _hoisted_6$2,
              _hoisted_7$1
            ], 8, _hoisted_2$2)
          ]),
          createElementVNode("polygon", {
            fill: __props.backgroundColor,
            points: `
        20, 32 ${unref(width) * 0.5 - __props.titleWidth / 2}, 32 ${unref(width) * 0.5 - __props.titleWidth / 2 + 20}, 53
        ${unref(width) * 0.5 + __props.titleWidth / 2 - 20}, 53 ${unref(width) * 0.5 + __props.titleWidth / 2}, 32
        ${unref(width) - 20}, 32 ${unref(width) - 8}, 48 ${unref(width) - 8}, ${unref(height) - 25} ${unref(width) - 20}, ${unref(height) - 8}
        20, ${unref(height) - 8} 8, ${unref(height) - 25} 8, 50
      `
          }, null, 8, _hoisted_8$1),
          createElementVNode("polyline", {
            stroke: state.mergedColor[0],
            filter: `url(#${state.filterId})`,
            points: `
          ${(unref(width) - __props.titleWidth) / 2}, 30
          20, 30 7, 50 7, ${50 + (unref(height) - 167) / 2}
          13, ${55 + (unref(height) - 167) / 2} 13, ${135 + (unref(height) - 167) / 2}
          7, ${140 + (unref(height) - 167) / 2} 7, ${unref(height) - 27}
          20, ${unref(height) - 7} ${unref(width) - 20}, ${unref(height) - 7} ${unref(width) - 7}, ${unref(height) - 27}
          ${unref(width) - 7}, ${140 + (unref(height) - 167) / 2} ${unref(width) - 13}, ${135 + (unref(height) - 167) / 2}
          ${unref(width) - 13}, ${55 + (unref(height) - 167) / 2} ${unref(width) - 7}, ${50 + (unref(height) - 167) / 2}
          ${unref(width) - 7}, 50 ${unref(width) - 20}, 30 ${(unref(width) + __props.titleWidth) / 2}, 30
          ${(unref(width) + __props.titleWidth) / 2 - 20}, 7 ${(unref(width) - __props.titleWidth) / 2 + 20}, 7
          ${(unref(width) - __props.titleWidth) / 2}, 30 ${(unref(width) - __props.titleWidth) / 2 + 20}, 52
          ${(unref(width) + __props.titleWidth) / 2 - 20}, 52 ${(unref(width) + __props.titleWidth) / 2}, 30
        `
          }, null, 8, _hoisted_9$1),
          createElementVNode("polygon", {
            stroke: state.mergedColor[0],
            fill: "transparent",
            points: `
          ${(unref(width) + __props.titleWidth) / 2 - 5}, 30 ${(unref(width) + __props.titleWidth) / 2 - 21}, 11
          ${(unref(width) + __props.titleWidth) / 2 - 27}, 11 ${(unref(width) + __props.titleWidth) / 2 - 8}, 34
        `
          }, null, 8, _hoisted_10$1),
          createElementVNode("polygon", {
            stroke: state.mergedColor[0],
            fill: "transparent",
            points: `
          ${(unref(width) - __props.titleWidth) / 2 + 5}, 30 ${(unref(width) - __props.titleWidth) / 2 + 22}, 49
          ${(unref(width) - __props.titleWidth) / 2 + 28}, 49 ${(unref(width) - __props.titleWidth) / 2 + 8}, 26
        `
          }, null, 8, _hoisted_11$1),
          createElementVNode("polygon", {
            stroke: state.mergedColor[0],
            fill: unref(lib$3.fade)(state.mergedColor[1] || state.defaultColor[1], 30),
            filter: `url(#${state.filterId})`,
            points: `
          ${(unref(width) + __props.titleWidth) / 2 - 11}, 37 ${(unref(width) + __props.titleWidth) / 2 - 32}, 11
          ${(unref(width) - __props.titleWidth) / 2 + 23}, 11 ${(unref(width) - __props.titleWidth) / 2 + 11}, 23
          ${(unref(width) - __props.titleWidth) / 2 + 33}, 49 ${(unref(width) + __props.titleWidth) / 2 - 22}, 49
        `
          }, null, 8, _hoisted_12$1),
          createElementVNode("polygon", {
            filter: `url(#${state.filterId})`,
            fill: state.mergedColor[0],
            opacity: "1",
            points: `
          ${(unref(width) - __props.titleWidth) / 2 - 10}, 37 ${(unref(width) - __props.titleWidth) / 2 - 31}, 37
          ${(unref(width) - __props.titleWidth) / 2 - 25}, 46 ${(unref(width) - __props.titleWidth) / 2 - 4}, 46
        `
          }, _hoisted_15, 8, _hoisted_13$1),
          createElementVNode("polygon", {
            filter: `url(#${state.filterId})`,
            fill: state.mergedColor[0],
            opacity: "0.7",
            points: `
          ${(unref(width) - __props.titleWidth) / 2 - 40}, 37 ${(unref(width) - __props.titleWidth) / 2 - 61}, 37
          ${(unref(width) - __props.titleWidth) / 2 - 55}, 46 ${(unref(width) - __props.titleWidth) / 2 - 34}, 46
        `
          }, _hoisted_18, 8, _hoisted_16),
          createElementVNode("polygon", {
            filter: `url(#${state.filterId})`,
            fill: state.mergedColor[0],
            opacity: "0.5",
            points: `
          ${(unref(width) - __props.titleWidth) / 2 - 70}, 37 ${(unref(width) - __props.titleWidth) / 2 - 91}, 37
          ${(unref(width) - __props.titleWidth) / 2 - 85}, 46 ${(unref(width) - __props.titleWidth) / 2 - 64}, 46
        `
          }, _hoisted_21, 8, _hoisted_19),
          createElementVNode("polygon", {
            filter: `url(#${state.filterId})`,
            fill: state.mergedColor[0],
            opacity: "1",
            points: `
          ${(unref(width) + __props.titleWidth) / 2 + 30}, 37 ${(unref(width) + __props.titleWidth) / 2 + 9}, 37
          ${(unref(width) + __props.titleWidth) / 2 + 3}, 46 ${(unref(width) + __props.titleWidth) / 2 + 24}, 46
        `
          }, _hoisted_24, 8, _hoisted_22),
          createElementVNode("polygon", {
            filter: `url(#${state.filterId})`,
            fill: state.mergedColor[0],
            opacity: "0.7",
            points: `
          ${(unref(width) + __props.titleWidth) / 2 + 60}, 37 ${(unref(width) + __props.titleWidth) / 2 + 39}, 37
          ${(unref(width) + __props.titleWidth) / 2 + 33}, 46 ${(unref(width) + __props.titleWidth) / 2 + 54}, 46
        `
          }, _hoisted_27, 8, _hoisted_25),
          createElementVNode("polygon", {
            filter: `url(#${state.filterId})`,
            fill: state.mergedColor[0],
            opacity: "0.5",
            points: `
          ${(unref(width) + __props.titleWidth) / 2 + 90}, 37 ${(unref(width) + __props.titleWidth) / 2 + 69}, 37
          ${(unref(width) + __props.titleWidth) / 2 + 63}, 46 ${(unref(width) + __props.titleWidth) / 2 + 84}, 46
        `
          }, _hoisted_30, 8, _hoisted_28),
          createElementVNode("text", {
            class: "dv-border-box-11-title",
            x: `${unref(width) / 2}`,
            y: "32",
            fill: "#fff",
            "font-size": "18",
            "text-anchor": "middle",
            "dominant-baseline": "middle"
          }, toDisplayString(__props.title), 9, _hoisted_31),
          createElementVNode("polygon", {
            fill: state.mergedColor[0],
            filter: `url(#${state.filterId})`,
            points: `
          7, ${53 + (unref(height) - 167) / 2} 11, ${57 + (unref(height) - 167) / 2}
          11, ${133 + (unref(height) - 167) / 2} 7, ${137 + (unref(height) - 167) / 2}
        `
          }, null, 8, _hoisted_32),
          createElementVNode("polygon", {
            fill: state.mergedColor[0],
            filter: `url(#${state.filterId})`,
            points: `
          ${unref(width) - 7}, ${53 + (unref(height) - 167) / 2} ${unref(width) - 11}, ${57 + (unref(height) - 167) / 2}
          ${unref(width) - 11}, ${133 + (unref(height) - 167) / 2} ${unref(width) - 7}, ${137 + (unref(height) - 167) / 2}
        `
          }, null, 8, _hoisted_33)
        ], 8, _hoisted_1$2)),
        createElementVNode("div", _hoisted_34, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 512);
    };
  }
};
const BorderBox11Plugin = {
  install(app) {
    app.component("DvBorderBox11", _sfc_main$2);
  }
};
var index_vue_vue_type_style_index_0_lang$1 = "";
const _hoisted_1$1 = ["width", "height"];
const _hoisted_2$1 = ["id"];
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("feMorphology", {
  operator: "dilate",
  radius: "1",
  in: "SourceAlpha",
  result: "thicken"
}, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createElementVNode("feGaussianBlur", {
  in: "thicken",
  stdDeviation: "2",
  result: "blurred"
}, null, -1);
const _hoisted_5$1 = ["flood-color"];
const _hoisted_6$1 = ["values"];
const _hoisted_7 = /* @__PURE__ */ createElementVNode("feComposite", {
  in: "glowColor",
  in2: "blurred",
  operator: "in",
  result: "softGlowColored"
}, null, -1);
const _hoisted_8 = /* @__PURE__ */ createElementVNode("feMerge", null, [
  /* @__PURE__ */ createElementVNode("feMergeNode", { in: "softGlowColored" }),
  /* @__PURE__ */ createElementVNode("feMergeNode", { in: "SourceGraphic" })
], -1);
const _hoisted_9 = ["fill", "stroke", "d"];
const _hoisted_10 = ["filter", "stroke"];
const _hoisted_11 = ["filter", "stroke", "d"];
const _hoisted_12 = ["filter", "stroke", "d"];
const _hoisted_13 = ["filter", "stroke", "d"];
const _hoisted_14 = { class: "border-box-content" };
const _sfc_main$1 = {
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
  setup(__props, { expose }) {
    const props = __props;
    const id = uuid();
    const borderBox12 = ref(null);
    const { width, height, initWH } = autoResize(borderBox12);
    expose({
      initWH
    });
    const state = reactive({
      filterId: `borderr-box-12-filterId-${id}`,
      defaultColor: ["#2e6099", "#7ce7fd"],
      mergedColor: []
    });
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    function mergeColor2() {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "borderBox12",
        ref: borderBox12,
        class: "dv-border-box-12"
      }, [
        (openBlock(), createElementBlock("svg", {
          class: "dv-border-svg-container",
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("defs", null, [
            createElementVNode("filter", {
              id: state.filterId,
              height: "150%",
              width: "150%",
              x: "-25%",
              y: "-25%"
            }, [
              _hoisted_3$1,
              _hoisted_4$1,
              createElementVNode("feFlood", {
                "flood-color": unref(lib$3.fade)(state.mergedColor[1] || state.defaultColor[1], 70),
                result: "glowColor"
              }, [
                createElementVNode("animate", {
                  attributeName: "flood-color",
                  values: `
                ${unref(lib$3.fade)(state.mergedColor[1] || state.defaultColor[1], 70)};
                ${unref(lib$3.fade)(state.mergedColor[1] || state.defaultColor[1], 30)};
                ${unref(lib$3.fade)(state.mergedColor[1] || state.defaultColor[1], 70)};
              `,
                  dur: "3s",
                  begin: "0s",
                  repeatCount: "indefinite"
                }, null, 8, _hoisted_6$1)
              ], 8, _hoisted_5$1),
              _hoisted_7,
              _hoisted_8
            ], 8, _hoisted_2$1)
          ]),
          unref(width) && unref(height) ? (openBlock(), createElementBlock("path", {
            key: 0,
            fill: __props.backgroundColor,
            "stroke-width": "2",
            stroke: state.mergedColor[0],
            d: `
          M15 5 L ${unref(width) - 15} 5 Q ${unref(width) - 5} 5, ${unref(width) - 5} 15
          L ${unref(width) - 5} ${unref(height) - 15} Q ${unref(width) - 5} ${unref(height) - 5}, ${unref(width) - 15} ${unref(height) - 5}
          L 15, ${unref(height) - 5} Q 5 ${unref(height) - 5} 5 ${unref(height) - 15} L 5 15
          Q 5 5 15 5
        `
          }, null, 8, _hoisted_9)) : createCommentVNode("", true),
          createElementVNode("path", {
            "stroke-width": "2",
            fill: "transparent",
            "stroke-linecap": "round",
            filter: `url(#${state.filterId})`,
            stroke: state.mergedColor[1],
            d: `M 20 5 L 15 5 Q 5 5 5 15 L 5 20`
          }, null, 8, _hoisted_10),
          createElementVNode("path", {
            "stroke-width": "2",
            fill: "transparent",
            "stroke-linecap": "round",
            filter: `url(#${state.filterId})`,
            stroke: state.mergedColor[1],
            d: `M ${unref(width) - 20} 5 L ${unref(width) - 15} 5 Q ${unref(width) - 5} 5 ${unref(width) - 5} 15 L ${unref(width) - 5} 20`
          }, null, 8, _hoisted_11),
          createElementVNode("path", {
            "stroke-width": "2",
            fill: "transparent",
            "stroke-linecap": "round",
            filter: `url(#${state.filterId})`,
            stroke: state.mergedColor[1],
            d: `
          M ${unref(width) - 20} ${unref(height) - 5} L ${unref(width) - 15} ${unref(height) - 5}
          Q ${unref(width) - 5} ${unref(height) - 5} ${unref(width) - 5} ${unref(height) - 15}
          L ${unref(width) - 5} ${unref(height) - 20}
        `
          }, null, 8, _hoisted_12),
          createElementVNode("path", {
            "stroke-width": "2",
            fill: "transparent",
            "stroke-linecap": "round",
            filter: `url(#${state.filterId})`,
            stroke: state.mergedColor[1],
            d: `
          M 20 ${unref(height) - 5} L 15 ${unref(height) - 5}
          Q 5 ${unref(height) - 5} 5 ${unref(height) - 15}
          L 5 ${unref(height) - 20}
        `
          }, null, 8, _hoisted_13)
        ], 8, _hoisted_1$1)),
        createElementVNode("div", _hoisted_14, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 512);
    };
  }
};
const BorderBox12Plugin = {
  install(app) {
    app.component("DvBorderBox12", _sfc_main$1);
  }
};
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = ["width", "height"];
const _hoisted_2 = ["fill", "stroke", "d"];
const _hoisted_3 = ["stroke"];
const _hoisted_4 = ["stroke"];
const _hoisted_5 = ["stroke", "d"];
const _hoisted_6 = { class: "border-box-content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
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
  setup(__props, { expose }) {
    const props = __props;
    const borderBox13 = ref(null);
    const { width, height, initWH } = autoResize(borderBox13);
    expose({
      initWH
    });
    const state = reactive({
      defaultColor: ["#6586ec", "#2cf7fe"],
      mergedColor: []
    });
    watch(() => props.color, () => {
      mergeColor2();
    });
    onMounted(() => {
      mergeColor2();
    });
    function mergeColor2() {
      state.mergedColor = deepMerge$1(deepClone(state.defaultColor, true), props.color || []);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "borderBox13",
        ref: borderBox13,
        class: "dv-border-box-13"
      }, [
        (openBlock(), createElementBlock("svg", {
          class: "dv-border-svg-container",
          width: unref(width),
          height: unref(height)
        }, [
          createElementVNode("path", {
            fill: __props.backgroundColor,
            stroke: state.mergedColor[0],
            d: `
          M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
          L ${unref(width) - 20} 10 L ${unref(width) - 5} 25
          L ${unref(width) - 5} ${unref(height) - 5} L 20 ${unref(height) - 5}
          L 5 ${unref(height) - 20} L 5 20
        `
          }, null, 8, _hoisted_2),
          createElementVNode("path", {
            fill: "transparent",
            "stroke-width": "3",
            "stroke-linecap": "round",
            "stroke-dasharray": "10, 5",
            stroke: state.mergedColor[0],
            d: `M 16 9 L 61 9`
          }, null, 8, _hoisted_3),
          createElementVNode("path", {
            fill: "transparent",
            stroke: state.mergedColor[1],
            d: `M 5 20 L 5 10 L 12 3  L 60 3 L 68 10`
          }, null, 8, _hoisted_4),
          createElementVNode("path", {
            fill: "transparent",
            stroke: state.mergedColor[1],
            d: `M ${unref(width) - 5} ${unref(height) - 30} L ${unref(width) - 5} ${unref(height) - 5} L ${unref(width) - 30} ${unref(height) - 5}`
          }, null, 8, _hoisted_5)
        ], 8, _hoisted_1)),
        createElementVNode("div", _hoisted_6, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 512);
    };
  }
});
const BorderBox13Plugin = {
  install(app) {
    app.component("DvBorderBox13", _sfc_main);
  }
};
const DataVVue3Plugin = {
  install(app) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
    (_a = ConicalColumnChartPlugin.install) == null ? void 0 : _a.call(ConicalColumnChartPlugin, app);
    (_b = PercentPondPlugin.install) == null ? void 0 : _b.call(PercentPondPlugin, app);
    (_c = WaterLevelPondPlugin.install) == null ? void 0 : _c.call(WaterLevelPondPlugin, app);
    (_d = LoadingPlugin.install) == null ? void 0 : _d.call(LoadingPlugin, app);
    (_e = FlylineChartEnhancedPlugin.install) == null ? void 0 : _e.call(FlylineChartEnhancedPlugin, app);
    (_f = FlylineChartPlugin.install) == null ? void 0 : _f.call(FlylineChartPlugin, app);
    (_g = ScrollRankingBoardPlugin.install) == null ? void 0 : _g.call(ScrollRankingBoardPlugin, app);
    (_h = ScrollBoardPlugin.install) == null ? void 0 : _h.call(ScrollBoardPlugin, app);
    (_i = ChartsPlugin.install) == null ? void 0 : _i.call(ChartsPlugin, app);
    (_j = CapsuleChartPlugin.install) == null ? void 0 : _j.call(CapsuleChartPlugin, app);
    (_k = ActiveRingChartPlugin.install) == null ? void 0 : _k.call(ActiveRingChartPlugin, app);
    (_l = DigitalFlopPlugin.install) == null ? void 0 : _l.call(DigitalFlopPlugin, app);
    (_m = FullScreenContainerPlugin.install) == null ? void 0 : _m.call(FullScreenContainerPlugin, app);
    (_n = Decoration1Plugin.install) == null ? void 0 : _n.call(Decoration1Plugin, app);
    (_o = Decoration2Plugin.install) == null ? void 0 : _o.call(Decoration2Plugin, app);
    (_p = Decoration3Plugin.install) == null ? void 0 : _p.call(Decoration3Plugin, app);
    (_q = Decoration4Plugin.install) == null ? void 0 : _q.call(Decoration4Plugin, app);
    (_r = Decoration5Plugin.install) == null ? void 0 : _r.call(Decoration5Plugin, app);
    (_s = Decoration6Plugin.install) == null ? void 0 : _s.call(Decoration6Plugin, app);
    (_t = Decoration7Plugin.install) == null ? void 0 : _t.call(Decoration7Plugin, app);
    (_u = Decoration8Plugin.install) == null ? void 0 : _u.call(Decoration8Plugin, app);
    (_v = Decoration9Plugin.install) == null ? void 0 : _v.call(Decoration9Plugin, app);
    (_w = Decoration10Plugin.install) == null ? void 0 : _w.call(Decoration10Plugin, app);
    (_x = Decoration11Plugin.install) == null ? void 0 : _x.call(Decoration11Plugin, app);
    (_y = Decoration12Plugin.install) == null ? void 0 : _y.call(Decoration12Plugin, app);
    (_z = BorderBox1Plugin.install) == null ? void 0 : _z.call(BorderBox1Plugin, app);
    (_A = BorderBox2Plugin.install) == null ? void 0 : _A.call(BorderBox2Plugin, app);
    (_B = BorderBox3Plugin.install) == null ? void 0 : _B.call(BorderBox3Plugin, app);
    (_C = BorderBox4Plugin.install) == null ? void 0 : _C.call(BorderBox4Plugin, app);
    (_D = BorderBox5Plugin.install) == null ? void 0 : _D.call(BorderBox5Plugin, app);
    (_E = BorderBox6Plugin.install) == null ? void 0 : _E.call(BorderBox6Plugin, app);
    (_F = BorderBox7Plugin.install) == null ? void 0 : _F.call(BorderBox7Plugin, app);
    (_G = BorderBox8Plugin.install) == null ? void 0 : _G.call(BorderBox8Plugin, app);
    (_H = BorderBox9Plugin.install) == null ? void 0 : _H.call(BorderBox9Plugin, app);
    (_I = BorderBox10Plugin.install) == null ? void 0 : _I.call(BorderBox10Plugin, app);
    (_J = BorderBox11Plugin.install) == null ? void 0 : _J.call(BorderBox11Plugin, app);
    (_K = BorderBox12Plugin.install) == null ? void 0 : _K.call(BorderBox12Plugin, app);
    (_L = BorderBox13Plugin.install) == null ? void 0 : _L.call(BorderBox13Plugin, app);
  }
};
export { _sfc_main$q as ActiveRingChart, ActiveRingChartPlugin, _sfc_main$c as BorderBox1, _sfc_main$3 as BorderBox10, BorderBox10Plugin, _sfc_main$2 as BorderBox11, BorderBox11Plugin, _sfc_main$1 as BorderBox12, BorderBox12Plugin, _sfc_main as BorderBox13, BorderBox13Plugin, BorderBox1Plugin, _sfc_main$b as BorderBox2, BorderBox2Plugin, _sfc_main$a as BorderBox3, BorderBox3Plugin, _sfc_main$9 as BorderBox4, BorderBox4Plugin, _sfc_main$8 as BorderBox5, BorderBox5Plugin, _sfc_main$7 as BorderBox6, BorderBox6Plugin, _sfc_main$6 as BorderBox7, BorderBox7Plugin, _sfc_main$5 as BorderBox8, BorderBox8Plugin, _sfc_main$4 as BorderBox9, BorderBox9Plugin, _sfc_main$s as CapsuleChart, CapsuleChartPlugin, _sfc_main$t as Charts, ChartsPlugin, _sfc_main$B as ConicalColumnChart, ConicalColumnChartPlugin, _sfc_main$o as Decoration1, _sfc_main$f as Decoration10, Decoration10Plugin, _sfc_main$e as Decoration11, Decoration11Plugin, _sfc_main$d as Decoration12, Decoration12Plugin, Decoration1Plugin, _sfc_main$n as Decoration2, Decoration2Plugin, _sfc_main$m as Decoration3, Decoration3Plugin, _sfc_main$l as Decoration4, Decoration4Plugin, _sfc_main$k as Decoration5, Decoration5Plugin, _sfc_main$j as Decoration6, Decoration6Plugin, _sfc_main$i as Decoration7, Decoration7Plugin, _sfc_main$h as Decoration8, Decoration8Plugin, _sfc_main$g as Decoration9, Decoration9Plugin, _sfc_main$r as DigitalFlop, DigitalFlopPlugin, _sfc_main$w as FlylineChart, _sfc_main$x as FlylineChartEnhanced, FlylineChartEnhancedPlugin, FlylineChartPlugin, _sfc_main$p as FullScreenContainer, FullScreenContainerPlugin, Loading, LoadingPlugin, _sfc_main$A as PercentPond, PercentPondPlugin, _sfc_main$u as ScrollBoard, ScrollBoardPlugin, _sfc_main$v as ScrollRankingBoard, ScrollRankingBoardPlugin, _sfc_main$z as WaterLevelPond, WaterLevelPondPlugin, DataVVue3Plugin as default };
