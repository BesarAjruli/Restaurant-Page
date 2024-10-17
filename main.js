/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about),\n/* harmony export */   aboutTitle: () => (/* binding */ aboutTitle)\n/* harmony export */ });\nconst aboutTitle = document.createElement('h1');\nconst about = document.createElement('p');\n\naboutTitle.textContent = 'About Aquila Steak House';\n\nabout.innerHTML = \n  `Aquila Steak House is the epitome of refined dining, where culinary mastery meets sophisticated ambiance. Located in the vibrant heart of the city, Aquila is designed to offer a memorable experience from the moment guests walk through its doors. Inspired by timeless elegance and modern flair, the restaurant boasts a captivating interior with plush seating, rich oak paneling, and subtle touches of luxury in every corner. The soft glow of chandeliers and candle-lit tables provides an inviting, intimate setting, perfect for romantic evenings, business dinners, and celebratory gatherings.<br><br>\n  \n  At Aquila, the focus is on the art of steak. Our chefs source only the finest, sustainably-raised beef, hand-selected for its exceptional marbling and flavor. Every steak is aged to perfection, ensuring tenderness and depth of taste, before being expertly grilled over an open flame. Whether you prefer a delicately prepared filet mignon or a bold, hearty tomahawk steak, each cut is served with house-made sauces, infused with gourmet ingredients like truffle and aged balsamic.<br><br>\n\n  Beyond steaks, our menu reflects a dedication to seasonal and locally-sourced produce, offering a range of artisanal sides, fresh seafood, and exquisite desserts. Our award-winning sommeliers have curated a wine list featuring some of the world’s rarest and most prestigious labels, ensuring each dish is paired with the perfect glass.<br><br>\n\n  Service at Aquila is as impeccable as the food. Our staff is committed to providing a seamless, personalized dining experience, anticipating your needs and delivering with grace and precision. Whether you are here to enjoy a quiet dinner for two or host an exclusive event in our private dining room, Aquila promises an evening of luxury, sophistication, and unforgettable cuisine.`;\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutHome: () => (/* binding */ aboutHome),\n/* harmony export */   restaurantName: () => (/* binding */ restaurantName)\n/* harmony export */ });\nconst restaurantName = document.createElement('h1');\nconst aboutHome = document.createElement('p');\n\nrestaurantName.textContent = 'Aquila Steak House';\n\naboutHome.innerHTML =\n  'Aquila Restaurant is an upscale steakhouse where elegance meets culinary excellence. Nestled in the heart of the city, the restaurant offers a luxurious dining experience in a sleek, modern setting. With its dim ambient lighting, rich wooden interiors, and floor-to-ceiling windows showcasing stunning views, Aquila creates the perfect atmosphere for intimate dinners and special occasions.<br><br> At Aquila, the menu is crafted to celebrate the finest cuts of beef, expertly aged and grilled to perfection. From tender filet mignon to robust tomahawk steaks, each dish is prepared with precision and served with gourmet sauces and sides. Guests can also indulge in an extensive wine list, featuring rare vintages and carefully selected pairings to complement each meal.<br><br>The attentive service and refined atmosphere make Aquila a destination for discerning diners seeking a truly exceptional steakhouse experience.';\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/content.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\nconst mainContainer = document.querySelector(\"#content\");\n\nmainContainer.append(_content__WEBPACK_IMPORTED_MODULE_0__.restaurantName, _content__WEBPACK_IMPORTED_MODULE_0__.aboutHome);\n\ndocument.querySelector(\"#home\").addEventListener(\"click\", () => {\n  mainContainer.innerHTML = \"\";\n  mainContainer.append(_content__WEBPACK_IMPORTED_MODULE_0__.restaurantName, _content__WEBPACK_IMPORTED_MODULE_0__.aboutHome);\n});\n\ndocument.querySelector(\"#about\").addEventListener(\"click\", () => {\n  mainContainer.innerHTML = \"\";\n  mainContainer.append(_about__WEBPACK_IMPORTED_MODULE_1__.aboutTitle, _about__WEBPACK_IMPORTED_MODULE_1__.about);\n});\n\ndocument.querySelector(\"#menu\").addEventListener(\"click\", () => {\n  mainContainer.innerHTML = \"\";\n\n  for (let i = 0; i < _menu__WEBPACK_IMPORTED_MODULE_2__.menu.length; i++) {\n    const container = document.createElement(\"div\");\n    const name = document.createElement(\"h3\");\n    const description = document.createElement(\"p\");\n    const price = document.createElement(\"span\");\n\n    name.textContent = _menu__WEBPACK_IMPORTED_MODULE_2__.menu[i].name;\n    description.textContent = _menu__WEBPACK_IMPORTED_MODULE_2__.menu[i].description;\n    price.textContent = `${_menu__WEBPACK_IMPORTED_MODULE_2__.menu[i].price}$`;\n\n    container.append(name, description, price)\n    mainContainer.appendChild(container)\n  }\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nlet menu = [];\n\nclass foods {\n  constructor(name, description, price, category) {\n    this.name = name;\n    this.description = description;\n    this.price = price;\n    this.category = category;\n  }\n}\n\nmenu.push(\n  new foods(\n    \"Oysters on the Half Shell\",\n    \"Freshly shucked oysters, served with a tangy mignonette and lemon wedges.\",\n    24,\n    \"Starters\",\n  ),\n  new foods(\n    'Lobster Bisque',\n    'Rich, creamy soup infused with the delicate flavors of lobster and a hint of brandy.',\n    18,\n    'Starters'\n  ),\n  new foods(\n    'Filet Mignon (8 oz)',\n    'Center-cut filet, known for its tenderness, grilled to perfection and served with a red wine reduction.',\n    55,\n    'Steaks'\n  ),\n  new foods(\n    'Tomahawk Steak (32 oz)',\n    'A grand, bone-in ribeye, perfect for sharing, with bold flavor and a charred crust. Served with chimichurri sauce.',\n    120,\n    'Steaks'\n  )\n);\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;