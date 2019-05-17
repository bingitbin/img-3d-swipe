(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "3a82":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5010":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_house_img_swipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3a82");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_house_img_swipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_house_img_swipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_house_img_swipe_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"78c785b0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./examples/components/house-img-swipe.vue?vue&type=template&id=7e9fa7c6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"house-img-swipe-container",class:{'house-swipe1': _vm.swipeList.length === 1, 'house-swipe2': _vm.swipeList.length === 2},on:{"click":_vm.goHouseDetail,"touchstart":_vm.onTouchStart,"touchmove":_vm.onTouchMove,"touchend":_vm.onTouchEnd,"touchcancel":_vm.onTouchEnd}},_vm._l((_vm.swipeList),function(item,index){return _c('div',{key:index,staticClass:"swipe-item default-loading-background",class:{transition:_vm.transition},style:(item.style)},[_c('img',{attrs:{"src":item.img}})])}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./examples/components/house-img-swipe.vue?vue&type=template&id=7e9fa7c6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./examples/components/house-img-swipe.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var house_img_swipevue_type_script_lang_js_ = ({
  name: 'HouseImgSwipe',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      swipeList: [],
      // 距离相对名称
      distanceRelativelyName: null,
      transition: false
    }
  },
  watch: {
    data (val) {
      this.initSwipe()
    }
  },
  created () {
    this.initSwipe()
  },
  computed: {
    disabled () {
      return this.swipeList.length < 2
    },
    activeSwipe () {
      let activeIndex = this.swipeList.findIndex(_ => _.active)
      return { index: activeIndex, item: this.swipeList[activeIndex] }
    }
  },
  methods: {
    initSwipe () {
      let data = this.data || []
      let threeDZ = 0
      let swipeItem
      this.swipeList = data.map((item, index) => {
        swipeItem = { ...item }
        swipeItem.distance =
          swipeItem.distance < 1000
            ? swipeItem.distance + 'm'
            : (swipeItem.distance / 1000).toFixed(1) + 'km'
        swipeItem.active = index === 0
        swipeItem.z_index = this.data.length - index
        swipeItem.threeDZ = threeDZ
        swipeItem.style = this.getStyle(swipeItem.z_index, threeDZ)
        threeDZ += 50
        return swipeItem
      })
    },
    goHouseDetail () {
      // this.$router.push({
      //   name: 'apartment-detail',
      //   params: { apartmentId: this.activeSwipe.item.houseId }
      // })
    },
    onTouchStart (event) {
      if (this.disabled) {
        return
      }
      this.deltaX = 0
      this.offsetX = 0
      this.startX = event.touches[0].clientX
      this.startY = event.touches[0].clientY
      this.startTime = event.timeStamp
    },
    onTouchMove (event) {
      this.transition = false
      if (this.disabled) {
        return
      }

      const touch = event.touches[0]
      this.deltaX = touch.clientX - this.startX
      if (this.deltaX > 0) {
        return
      }
      this.deltaY = touch.clientY - this.startY
      this.offsetX = Math.abs(this.deltaX)
      this.offsetY = Math.abs(this.deltaY)
      if (this.offsetX > this.offsetY && this.offsetX > 10) {
        event.preventDefault()
        event.stopPropagation()
        this.moveImg()
      }
    },
    moveImg () {
      let activeItem = this.activeSwipe.item
      // activeItem.style.left = `${-this.offsetX}px`
      activeItem.style.opacity = 1 * ((500 - this.offsetX) / 500)
      // -${this.offsetX / 5}
      activeItem.style.transform = `translate3d(-${40 * (this.offsetX / 350)}px, 0px, -${50 * (this.offsetX / 350)}px)`
      this.swipeList.filter(_ => !_.active).forEach(_ => {
        _.style.transform = `translate3d(0px, 0px, -${_.threeDZ - 50 * (this.offsetX / 350)}px)`
      })
    },
    onTouchEnd (event) {
      this.transition = true
      let activeSwipe = this.activeSwipe
      let activeIndex = activeSwipe.index
      let activeItem = activeSwipe.item
      // activeItem.style.left = 0
      activeItem.style.opacity = 1

      if (this.disabled || this.deltaX > 0) {
        this.calculateStyle()
        return
      }

      if (this.offsetX / (event.timeStamp - this.startTime) < 0.2 && this.offsetX < 100) {
        this.calculateStyle()
        // activeItem.style = this.getStyle(activeItem.z_index, activeItem.threeDZ)
        return
      }
      activeItem.active = false
      // eslint-disable-next-line
      this.swipeList[
        activeIndex === this.swipeList.length - 1
          ? 0
          : activeIndex + 1
      ].active = true

      this.calculateStyle()
    },
    calculateStyle () {
      let activeIndex = this.swipeList.findIndex(_ => _.active)
      let threeDZ = 0
      let zIndex = this.swipeList.length

      let swipeItem
      for (let i = activeIndex; i < this.swipeList.length; i++) {
        swipeItem = this.swipeList[i]
        swipeItem.z_index = zIndex
        swipeItem.threeDZ = threeDZ
        swipeItem.style = this.getStyle(zIndex, threeDZ)
        threeDZ += 50
        zIndex--
      }
      for (let i = 0; i < activeIndex; i++) {
        swipeItem = this.swipeList[i]
        swipeItem.z_index = zIndex
        swipeItem.threeDZ = threeDZ
        swipeItem.style = this.getStyle(zIndex, threeDZ)
        threeDZ += 50
        zIndex--
      }
    },
    getStyle (zIndex, threeDZ) {
      return {
        left: 0,
        opacity: 1,
        'z-index': zIndex,
        transform: `translate3d(0px, 0px, -${threeDZ}px)`
      }
    }
  }
});

// CONCATENATED MODULE: ./examples/components/house-img-swipe.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_house_img_swipevue_type_script_lang_js_ = (house_img_swipevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./examples/components/house-img-swipe.vue?vue&type=style&index=0&lang=scss&
var house_img_swipevue_type_style_index_0_lang_scss_ = __webpack_require__("5010");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./examples/components/house-img-swipe.vue






/* normalize component */

var component = normalizeComponent(
  components_house_img_swipevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var house_img_swipe = (component.exports);
// CONCATENATED MODULE: ./examples/components/index.js


/* harmony default export */ var components = (house_img_swipe);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ })

/******/ });
});