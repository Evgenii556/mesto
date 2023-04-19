(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._token=e.headers.authorization}var n,r;return n=t,(r=[{key:"_getResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getData",value:function(){return Promise.all([this.getUserInfo(),this.getCards()])}},{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{headers:{authorization:this._token}}).then(this._getResponse)}},{key:"editAvatar",value:function(t){return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._getResponse)}},{key:"editUserInfo",value:function(t,e){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:e})}).then(this._getResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._token}}).then(this._getResponse)}},{key:"setLike",value:function(t,e){return e?fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._getResponse):fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._getResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._getResponse)}},{key:"addCard",value:function(t){return fetch(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then(this._getResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._getResponse)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardData=e,this._dataLikes=e.likes,this._idCard=e._id,this._idUserCard=e.owner._id,this._currentUserId=n,this._template=o,this._handleCardClickFn=r.handleCardClick,this._likeCardFn=r.likeCard,this._handleDeleteCardFn=r.handleDeleteCard}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.children[0].cloneNode(!0)}},{key:"_deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_isUserCard",value:function(){return this._idUserCard===this._currentUserId}},{key:"_isLikedCard",value:function(){var t=this;return this._dataLikes.some((function(e){return e._id===t._currentUserId}))}},{key:"_setLikes",value:function(t){var e=this._isLikedCard();this._likeCardFn(this,this._idCard,e)}},{key:"togleLikeCard",value:function(t){this._dataLikes=t.likes,this._elementLikeButton.classList.toggle("element__like_active"),this._elementLikeCounter.textContent=t.likes.length}},{key:"_addEventListeners",value:function(){var t=this;this._elementLikeButton.addEventListener("click",(function(e){t._setLikes(e)})),this._isUserCard()&&this._elementDeleteButton.addEventListener("click",(function(){t._handleDeleteCardFn(t._idCard,t)})),this._elementImage.addEventListener("click",(function(){t._handleCardClickFn(t._cardData)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__image"),this._elementHeader=this._element.querySelector(".element__title"),this._elementDeleteButton=this._element.querySelector(".element__delete"),this._elementLikeButton=this._element.querySelector(".element__like"),this._elementLikeCounter=this._element.querySelector(".element__like-counter"),this._addEventListeners(),this._elementImage.src=this._cardData.link,this._elementImage.alt=this._cardData.name,this._elementHeader.textContent=this._cardData.name,this._elementLikeCounter.textContent=this._cardData.likes.length,this._isUserCard()||this._elementDeleteButton.remove(),this._isLikedCard()&&this._elementLikeButton.classList.add("element__like_active"),this._element}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function l(t,e,n){return(e=c(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}var s=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"_showInputError",(function(t){r._errorElement=r._form.querySelector(".".concat(t.id,"-error")),t.classList.add(r._inputErrorClass),r._errorElement.textContent=t.validationMessage,r._errorElement.classList.add(r._inputErrorActive)})),l(this,"_hideInputError",(function(t){r._errorElement=r._form.querySelector(".".concat(t.id,"-error")),t.classList.remove(r._inputErrorClass),r._errorElement.classList.remove(r._inputErrorActive),r._errorElement.textContent=""})),l(this,"_checkValidation",(function(t){t.validity.valid?r._hideInputError(t):r._showInputError(t,t.validationMessage)})),this._form=n,this._inputList=Array.from(this._form.querySelectorAll(e.inputSelector)),this._submitButton=this._form.querySelector(e.submitButtonSelector),this._inputErrorClass=e.inputErrorClass,this._inputErrorActive=e.inputErrorActive}var e,n;return e=t,(n=[{key:"toggleButtonStage",value:function(){this._hasInvalidInput(this._inputList)?this._submitButton.setAttribute("disabled",!0):this._submitButton.removeAttribute("disabled","")}},{key:"_setEventListeners",value:function(){var t=this;this.toggleButtonStage(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkValidation(e),t.toggleButtonStage()}))}))}},{key:"resetValidateEror",value:function(){var t=this;this.toggleButtonStage(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}var y=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._section=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(t){this._section.prepend(t)}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var v=function(){function t(e){var n=e.name,r=e.info,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameSelector=n,this._infoSelector=r,this._avatarSelector=o,this._name=document.querySelector(this._nameSelector),this._info=document.querySelector(this._infoSelector),this._avatar=document.querySelector(this._avatarSelector)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._nameProfile=this._name.textContent,this._infoProfile=this._info.textContent,{name:this._nameProfile,info:this._infoProfile}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about;this._name.textContent=e,this._info.textContent=n}},{key:"getUserAvatar",value:function(){return this._avatarProfile=this._avatar.src,{avatar:this._avatarProfile}}},{key:"setUserAvatar",value:function(t){var e=t.avatar;this._avatar.src=e}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,b(r.key),r)}}function b(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}var S=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=b(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popupElement=document.querySelector(e)}var e,n;return e=t,(n=[{key:"setEventListeners",value:function(){var t=this;this._popupButtonClose=this._popupElement.querySelector(".popup__close-icon"),this._popupButtonClose.addEventListener("click",(function(){return t.close()})),this._popupElement.addEventListener("mousedown",(function(e){e.target.classList.contains("popup")&&t.close()}))}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),window.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),window.removeEventListener("keydown",this._handleEscClose)}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=e,n._form=n._popupElement.querySelector(".popup__form"),n._buttonSubmit=n._form.querySelector(".popup__submit-button"),n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n._buttonSubmitText=n._buttonSubmit.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"showSave",value:function(t){this._buttonSubmit.textContent=t?"Сохранение...":this._buttonSubmitText}},{key:"setEventListeners",value:function(){var t=this;k(C(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"close",value:function(){k(C(u.prototype),"close",this).call(this),this._form.reset()}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},L.apply(this,arguments)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(r);if(o){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imageToView=e._popupElement.querySelector(".popup__image"),e._imageCaption=e._popupElement.querySelector(".popup__capture"),e}return e=u,(n=[{key:"open",value:function(t){var e=t.link,n=t.name;this._imageToView.src=e,this._imageToView.alt=n,this._imageCaption.textContent=n,L(R(u.prototype),"open",this).call(this)}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},A.apply(this,arguments)}function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===q(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=e._popupElement.querySelector(".popup__form"),e._buttonSubmit=e._form.querySelector(".popup__submit-button"),e._buttonSubmitText=e._buttonSubmit.textContent,e}return e=u,n=[{key:"confirmDeletion",value:function(t,e,n){this._idCard=t,this._thisCard=e,this._deleteThisCardFn=n}},{key:"showSave",value:function(t){this._buttonSubmit.textContent=t?"Удаление...":this._buttonSubmitText}},{key:"setEventListeners",value:function(){var t=this;A(x(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._deleteThisCardFn(t._idCard,t._thisCard)}))}}],n&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var F={inputErrorClass:"popup__input_type_error",inputErrorActive:"popup__input-error_active",submitButtonSelector:".popup__submit-button",formSelector:".popup__form",inputSelector:".popup__input"},z=document.querySelector(".content"),H=z.querySelector(".profile__avatar-button"),N=z.querySelector(".profile__edit-button"),J=z.querySelector(".profile__button-add"),M=z.querySelector(".popup__form_type_edit"),$=z.querySelector(".popup__form_type_avatar"),G=M.querySelector(".popup__input_type_name"),K=M.querySelector(".popup__input_type_job"),Q=z.querySelector(".popup__form_type_add"),W=new n({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"6a959611-dfd2-455f-b813-ecc56a298ccb","Content-Type":"application/json"}}),X="";W.getDatssa().then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return V(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Z.setUserInfo(o),Z.setUserAvatar(o),X=o._id,Y.renderItems(i)})).catch((function(t){console.log(t)}));var Y=new y(pt,".elements"),Z=new v({name:".profile__title",info:".profile__subtitle",avatar:".profile__avatar"}),tt=new j(".popup_type_edit",(function(t){tt.showSave(!0),W.editUserInfo(t.name,t.job).then((function(t){Z.setUserInfo({name:t.name,about:t.about}),tt.close()})).catch((function(t){console.log(t)})).finally((function(){tt.showSave(!1)}))})),et=new s(F,M);et.enableValidation(),N.addEventListener("click",(function(){var t=Z.getUserInfo(),e=t.name,n=t.info;G.value=e,K.value=n,et.resetValidateEror(),tt.open()})),tt.setEventListeners();var nt=new j(".popup_edit-avatar",(function(t){nt.showSave(!0),W.editAvatar(t.avatar).then((function(t){Z.setUserAvatar({avatar:t.avatar}),nt.close()})).catch((function(t){console.log(t)})).finally((function(){nt.showSave(!1)}))}));nt.setEventListeners();var rt=new s(F,$);rt.enableValidation(),H.addEventListener("click",(function(){Z.getUserAvatar(),rt.resetValidateEror(),nt.open()}));var ot=new j(".popup_type_add",(function(t){var e={name:t.title,link:t.image};ot.showSave(!0),W.addCard(e).then((function(t){pt(t),ot.close()})).catch((function(t){console.log(t)})).finally((function(){ot.showSave(!1)}))})),it=new s(F,Q);it.enableValidation(),J.addEventListener("click",(function(){it.resetValidateEror(),ot.showSave(!1),ot.open()})),ot.setEventListeners();var ut=new I(".popup_type_image");function at(t){ut.open(t)}ut.setEventListeners();var lt=new B(".popup_confirm");function ct(t,e){lt.confirmDeletion(t,e,st),lt.open()}function st(t,e){lt.showSave(!0),W.deleteCard(t).then((function(t){e._deleteCard(),lt.close()})).catch((function(t){console.log(t)})).finally((function(){lt.showSave(!1)}))}function ft(t,e,n){W.setLike(e,n).then((function(e){t.togleLikeCard(e)})).catch((function(t){console.log(t)}))}function pt(t){Y.addItem(function(t){return new i(t,X,{handleCardClick:at,likeCard:ft,handleDeleteCard:ct},"#item").generateCard()}(t))}lt.setEventListeners()})();