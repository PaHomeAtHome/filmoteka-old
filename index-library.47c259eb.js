parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"cZF8":[function(require,module,exports) {
const b="1b50ba0e0b99203af5e26bdcee6d2298";
},{}],"XgnG":[function(require,module,exports) {

},{}],"efGe":[function(require,module,exports) {

},{}],"RSqK":[function(require,module,exports) {
const e={btnClick:document.querySelector(".btn"),modal:document.querySelector(".film-details"),closeBtn:document.querySelector(".modal__icon-close"),modalWrapper:document.querySelector(".modal-wrapper"),backdrop:document.querySelector(".backdrop"),filmDetails:document.querySelector(".film-details")};function t(){return'\n      <img\n        class="film-details__image"\n        src="https://fakeimg.pl/350x200/?text=Hello"\n        alt="временная картинка"\n      />\n      <div class="film-details__wrapper">\n        <h2 class="film-details__title">Title</h2>\n        <ul class="film-details__list ">\n          <li class="film-details__item">\n            <p class="film-details__text">Vote / Votes</p>\n            <span class="film-details__span film-details__span--accent"\n              >7.3</span\n            >\n            <span class="film-details__separator">/</span>\n            <span class="film-details__span film-details__span--noaccent"\n              >1260</span\n            >\n          </li>\n          <li class="film-details__item">\n            <p class="film-details__text">Popularity</p>\n            <span class="film-details__span">100.2</span>\n          </li>\n          <li class="film-details__item">\n            <p class="film-details__text">Original Title</p>\n            <span class="film-details__span">A FISTFUL OF LEAD</span>\n          </li>\n          <li class="film-details__item">\n            <p class="film-details__text">Genre</p>\n            <span class="film-details__span">Comedia</span>\n          </li>\n        </ul>\n        <p class="film-details__about">About</p>\n        <p class="film-details__overview">\n          Four of the West’s most infamous outlaws assemble to steal a huge\n          stash of gold from the most corrupt settlement of the gold rush towns.\n          But not all goes to plan one is killed and the other three escapes\n          with bags of gold hide out in the abandoned gold mine where they\n          happen across another gang of three – who themselves were planning to\n          hit the very same bank! As tensions rise, things go from bad to worse\n          as they realise the bags of gold are filled with lead... they’ve been\n          double crossed – but by who and how?\n        </p>\n\n       \n\n        <ul class="film-details__btn-list">\n          <li class="film-details__btn-item">\n            <button type="button" class="film-details__btn film-details__btn--watched">add to Watched</button>\n          </li>\n          <li class="film-details__btn-item">\n            <button type="button" class="film-details__btn film-details__btn--queue">add to queue</button>\n          </li>\n        </ul>\n      </div>\n   \n   \n  '}function s(e){"backdrop"===e.target.classList.value&&n()}function l(e){"Escape"===e.key&&n()}function n(){e.modalWrapper.classList.add("is-hidden"),e.backdrop.removeEventListener("click",n),document.removeEventListener("keydown",e=>l(e))}function a(){e.closeBtn.addEventListener("click",n),e.backdrop.addEventListener("click",e=>s(e)),document.addEventListener("keydown",e=>l(e))}function i(){e.filmDetails.textContent="",e.modalWrapper.classList.remove("is-hidden"),e.filmDetails.insertAdjacentHTML("beforeend",t()),a()}e.btnClick.addEventListener("click",i);
},{}],"vQE2":[function(require,module,exports) {
document.body.onload=function(){setTimeout(function(){const n=document.getElementById("preloader");n.classList.contains("done")||n.classList.add("done")},500)};
},{}],"DIZc":[function(require,module,exports) {
"use strict";var e=o(require("./js/api")),r=o(require("./js/header-library")),t=o(require("./js/card")),n=o(require("./js/modal")),u=o(require("./js/loader"));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i();if(r&&r.has(e))return r.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=n?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(t,u,o):t[u]=e[u]}return t.default=e,r&&r.set(e,t),t}
},{"./js/api":"cZF8","./js/header-library":"XgnG","./js/card":"XgnG","./js/modal":"RSqK","./js/loader":"vQE2"}]},{},["DIZc"], null)
//# sourceMappingURL=/filmoteka-old/index-library.47c259eb.js.map