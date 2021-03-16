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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\n\n\n\nwindow.onload = function() {\n    (0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.navFunction)();\n    (0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.headerFunction)();\n    (0,_modules_home__WEBPACK_IMPORTED_MODULE_0__.bodyFunction)();\n    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.showMenu)();\n    (0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__.showContact)();\n}\n\n\n//# sourceURL=webpack://restaurant-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showContact\": () => (/* binding */ showContact)\n/* harmony export */ });\nconst showContact = () => {\n    const contactBtn = document.querySelectorAll(\".contact\");\n    //remove content\n    contactBtn.forEach((e) => {\n        e.addEventListener(\"click\", function() {\n            const content = document.getElementById(\"content\");\n            while(content.firstChild) {\n                content.removeChild(content.lastChild);\n            }\n            //add content\n            //first contact section\n            const header = document.createElement(\"div\");\n            const title = document.createElement(\"h1\");\n            const contactDiv = document.createElement(\"div\");\n            const contactCol = document.createElement(\"div\");\n            const faqBtn = document.createElement(\"button\");\n            const mainList = document.createElement(\"ul\");\n            header.className = \"row\";\n            header.id = \"contactHeader\";\n            title.className = \"contactTitle\";\n            title.textContent = \"Contact Us\";\n            contactDiv.className = \"row\";\n            contactDiv.id = \"contactDiv\";\n            contactCol.className = \"col-sm-5\";\n            contactCol.id = \"contactCol\";\n            faqBtn.className = \"contactBtn\";\n            faqBtn.textContent = \"FAQ:\";\n            mainList.className = \"listFix\";\n            content.appendChild(header);\n            header.appendChild(title);\n            content.appendChild(contactDiv);\n            contactDiv.appendChild(contactCol);\n            contactCol.appendChild(faqBtn);\n            contactCol.appendChild(mainList);\n            //FAQ question list items\n            for(let i = 0; i < 4; i++) {\n                const item = document.createElement(\"li\");\n                item.className = \"faqList\";\n                if(i === 0) {\n                    item.textContent = \"Lorem ipsum dolor sit amet?\";\n                } else if(i === 1) {\n                    item.textContent = \"Donec imperdiet velit ligula?\";\n                } else if(i === 2) {\n                    item.textContent = \"Sed quis porttitor mauris?\";\n                } else if(i === 3) {\n                    item.textContent = \"Morbi sodales mauris quis nulla?\";\n                }\n                mainList.appendChild(item);\n            }\n            //Second Column\n            const contactCol2 = document.createElement(\"div\");\n            const locateBtn = document.createElement(\"button\");\n            locateBtn.className = \"contactBtn\";\n            locateBtn.textContent = \"Find Nearby Location:\";\n            contactCol2.className = \"col-sm-5\";\n            contactCol2.id = \"contactCol\";\n            contactDiv.appendChild(contactCol2);\n            contactCol2.appendChild(locateBtn);\n            //creates two input boxes for user\n            for(let i = 0; i < 2; i++) {\n                const label = document.createElement(\"label\");\n                const input = document.createElement(\"input\");\n                label.className = \"para\";\n                input.type = \"text\";\n                if(i === 0) {\n                    label.textContent = \"City, State:\"\n                } else if(i === 1) {\n                    label.textContent = \"Zipcode:\";\n                }\n                contactCol2.appendChild(label);\n                contactCol2.appendChild(input);\n            }\n            //second contact section\n            const contactDiv2 = document.createElement(\"div\");\n            const contactCol3 = document.createElement(\"div\");\n            const contBtn = document.createElement(\"button\");\n            contactDiv2.className = \"row\";\n            contactDiv2.id = \"contactDiv\";\n            contactCol3.className = \"container\";\n            contactCol3.id = \"contactCol\";\n            contBtn.className = \"contactBtn emailBtn\";\n            contBtn.textContent = \"Email Us:\";\n            content.appendChild(contactDiv2);\n            contactDiv2.appendChild(contactCol3);\n            contactCol3.appendChild(contBtn);\n            //input column\n            const emailCol = document.createElement(\"div\");\n            emailCol.className = \"container\";\n            emailCol.id = \"contactCol\";\n            contactDiv2.appendChild(emailCol);\n            //creates two input boxes\n            for(let i = 0; i < 2; i++) {\n                const emLabel = document.createElement(\"label\");\n                const emInput = document.createElement(\"input\");\n                emInput.type = \"text\";\n                if(i === 0) {\n                    emLabel.className = \"para\";\n                    emLabel.textContent = \"Your Email:\";\n                    emInput.className = \"emailInput\"\n                } else if(i === 1) {\n                    emLabel.textContent = \"Message:\";\n                    emLabel.className = \"para paraEmail\";\n                    emInput.className = \"emailMsg\";\n                }\n                emailCol.appendChild(emLabel);\n                emailCol.appendChild(emInput);\n            }\n        })\n    })\n}\n\n\n\n//# sourceURL=webpack://restaurant-project/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navFunction\": () => (/* binding */ navFunction),\n/* harmony export */   \"headerFunction\": () => (/* binding */ headerFunction),\n/* harmony export */   \"bodyFunction\": () => (/* binding */ bodyFunction)\n/* harmony export */ });\nconst content = document.getElementById(\"content\");\n//adds content to navigationbar\nconst navFunction = () => {\n    //navbar and title\n    const navDiv = document.getElementById(\"navDiv\");\n    const titleDiv = document.createElement(\"div\");\n    const col1 = document.createElement(\"div\");\n    const title = document.createElement(\"h1\");\n    titleDiv.className = \"row\";\n    titleDiv.id = \"navBar\";\n    col1.className = \"col-sm-5\";\n    col1.id = \"btnDiv\";\n    title.textContent = \"Lorem Ipsum\";\n    title.id = \"reloadBtn\";\n    navDiv.appendChild(titleDiv);\n    titleDiv.appendChild(col1);\n    col1.appendChild(title);\n\n    //navbuttons\n    const col2 = document.createElement(\"div\");\n    const tabs = document.createElement(\"div\");\n    const list = document.createElement(\"ul\");\n    col2.className = \"col-sm-5\";\n    col2.id = \"btnDiv\";\n    tabs.className = \"tabs\";\n    list.className = \"nav nav-tabs\";\n    titleDiv.appendChild(col2);\n    col2.appendChild(tabs);\n    tabs.appendChild(list);\n    //adding multiple nav buttons\n    for(let i = 0; i < 4; i++) {\n        const navBtns = document.createElement(\"li\");\n        const alink = document.createElement(\"a\");\n        const dropDiv = document.createElement(\"div\");\n        const item1 = document.createElement(\"a\");\n        const item2 = document.createElement(\"a\");\n        navBtns.className = \"nav-item dropdown\";\n        alink.className = \"nav-link dropdown-toggle\";\n        alink.id = \"mytabs\";\n        alink.dataset.toggle = \"dropdown\";\n        alink.textContent = \"nav btn\";\n        dropDiv.className = \"dropdown-menu\";\n        item1.className = \"dropdown-item menu\";\n        item2.className = \"dropdown-item contact\";\n        item1.id = \"dropdown-tab-tabs-above-1\";\n        item2.id = \"dropdown-tab-tabs-above-2\";\n        item1.textContent = \"Option a\";\n        item2.textContent = \"Option b\";\n        list.appendChild(navBtns);\n        navBtns.appendChild(alink);\n        alink.appendChild(dropDiv);\n        dropDiv.appendChild(item1);\n        dropDiv.appendChild(item2);\n    }\n    //reload home function\n    const reloadHome = document.getElementById(\"reloadBtn\");\n    reloadHome.addEventListener(\"click\", function() {\n        while(content.firstChild) {\n            content.removeChild(content.lastChild);\n        }\n        //add home content\n        headerFunction();\n        bodyFunction();\n    })\n}\n\n//adds content to the body\nconst headerFunction = () => {\n    //background\n    const headerDiv = document.createElement(\"div\");\n    const image = document.createElement(\"img\");\n    headerDiv.className = \"container-fixed\";\n    headerDiv.id = \"header\";\n    image.id = \"horizontal\";\n    image.src = \"img/horizontal.png\";\n    content.appendChild(headerDiv);\n    headerDiv.appendChild(image);\n\n    //text overlay\n    const overlay = document.createElement(\"div\");\n    const title = document.createElement(\"p\");\n    const subtitle = document.createElement(\"p\");\n    overlay.className = \"overlay\";\n    title.id = \"title\";\n    title.className = \"textShadow\";\n    title.textContent = \"Lorem Ipsum\";\n    subtitle.id = \"subtitle\";\n    subtitle.className = \"textShadow\";\n    subtitle.textContent = \"Nam elit sapien, convallis at pulvinar nec, eleifend condimentum urna.\";\n    headerDiv.appendChild(overlay);\n    overlay.appendChild(title);\n    overlay.appendChild(subtitle);\n}\n\nconst bodyFunction = () => {\n    const mainBody = document.createElement(\"div\");\n    //first column\n    const col1 = document.createElement(\"div\");\n    const header = document.createElement(\"p\");\n    const menuBtn = document.createElement(\"button\");\n    mainBody.className = \"row\";\n    mainBody.id = \"intro\";\n    col1.className = \"col-sm-8\";\n    col1.id = \"introCol\";\n    header.id = \"headerText\";\n    header.textContent = \"Nullam dui libero.\";\n    menuBtn.id = \"menuBtn\";\n    menuBtn.textContent = \"view menu\"\n    content.appendChild(mainBody);\n    mainBody.appendChild(col1);\n    col1.appendChild(header);\n\n    for(let i = 0; i < 3; i++) {\n        const box = document.createElement(\"div\");\n        const para = document.createElement(\"p\");\n        box.className = \"container-fixed\";\n        box.id = \"paraBox\";\n        para.id = \"paragraph\";\n        //decides the text content for each paragraph\n        if(i === 0) {\n            para.textContent = \"Pellentesque porta elit eget magna faucibus at pretium risus malesuada.\"\n        } else if(i === 1) {\n            para.textContent = \"Curabitur laoreet interdum nisl tincidunt mattis. Phasellus venenatis nisl dui, at porttitor elit dignissim a.\"\n        } else if(i === 2) {\n            para.textContent = \"Vivamus vitae convallis magna.\";\n            para.style.fontSize = \"3vw\";\n            para.style.fontWeight = \"600\";\n        } else {\n            para.textContent = \"error\"\n        }\n        col1.appendChild(box);\n        box.appendChild(para);\n    }\n    col1.appendChild(menuBtn);\n\n    //second column\n    const col2 = document.createElement(\"div\");\n    const image = document.createElement(\"img\");\n    col2.className = \"col-sm-4\";\n    col2.style.padding = \"0\";\n    image.id = \"vertical\";\n    image.src = \"img/vertical.png\";\n    mainBody.appendChild(col2);\n    col2.appendChild(image);\n}\n\n\n\n//# sourceURL=webpack://restaurant-project/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMenu\": () => (/* binding */ showMenu)\n/* harmony export */ });\nconst showMenu = () => {\n    const menuBtn = document.querySelectorAll(\".menu\");\n    //remove content\n    menuBtn.forEach((e) => {\n        e.addEventListener(\"click\", function() {\n            const content = document.getElementById(\"content\");\n            while(content.firstChild) {\n                content.removeChild(content.lastChild);\n            }\n            //add content\n            //menu page content\n            const header = document.createElement(\"div\");\n            const title = document.createElement(\"h1\");\n            const mainRow = document.createElement(\"div\");\n            header.className = \"container-fixed\";\n            header.id = \"menuHeader\";\n            title.className = \"menuTitle\";\n            title.textContent = \"Lorem Ipsum Dolor:\";\n            mainRow.className = \"row\";\n            mainRow.id = \"menuRow\";\n            content.appendChild(header);\n            header.appendChild(title);\n            content.appendChild(mainRow);\n            //creates three identically built divs\n            for(let i = 0; i < 3; i++) {\n                const menuCol = document.createElement(\"div\");\n                const image = document.createElement(\"img\");\n                const overlay = document.createElement(\"div\");\n                const menuTitle = document.createElement(\"p\");\n                const btnOverlay = document.createElement(\"div\");\n                const menuBtn = document.createElement(\"button\");\n                menuCol.className = \"col-sm-4 menuCol\";\n                image.className = \"menuImgs\";\n                overlay.className = \"menuOverlay\";\n                menuTitle.className = \"imgTitle textShadow\";\n                btnOverlay.className = \"btnOverlay\";\n                menuBtn.className = \"menuBtn2\";\n                menuBtn.textContent = \"view menu\";\n                //different text content for each div\n                if(i === 0) {\n                    image.src = \"img/breakfast.png\";\n                    menuTitle.textContent = \"Breakfast\";\n                } else if(i === 1) {\n                    image.src = \"img/lunch.png\";\n                    menuTitle.textContent = \"Lunch\";\n                } else if(i ===2) {\n                    image.src = \"img/dinner.png\";\n                    menuTitle.textContent = \"Dinner\";\n                }\n                mainRow.appendChild(menuCol);\n                menuCol.appendChild(image);\n                menuCol.appendChild(overlay);\n                overlay.appendChild(menuTitle);\n                menuCol.appendChild(btnOverlay);\n                btnOverlay.appendChild(menuBtn);\n            }\n        })\n    })\n}\n\n\n\n//# sourceURL=webpack://restaurant-project/./src/modules/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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