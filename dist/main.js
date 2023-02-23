/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Die Canvas-Elemente vom DOM holen\r\nvar canvas = document.querySelector('#canvas');\r\n// Die 2D-Rendering-Kontext-Objekt vom Canvas holen\r\nvar ctx = canvas.getContext('2d');\r\n// Die Dimensionen des Canvas setzen\r\ncanvas.width = window.innerWidth;\r\ncanvas.height = window.innerHeight;\r\n// Die Startposition des Strichs setzen\r\nvar x = 0;\r\nvar y = canvas.height / 2;\r\n// Die Animationsfunktion definieren\r\nfunction animate() {\r\n    // Die Hintergrundfarbe setzen\r\n    ctx.fillStyle = 'red';\r\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\r\n    // Die Strichfarbe und -stärke setzen\r\n    ctx.strokeStyle = 'black';\r\n    ctx.lineWidth = 2;\r\n    // Den Anfangspunkt des Strichs setzen\r\n    ctx.beginPath();\r\n    ctx.moveTo(x, y);\r\n    // Die Endposition des Strichs berechnen\r\n    x += 5;\r\n    y = canvas.height / 2 + Math.sin(x / 20) * 50;\r\n    // Die Endposition des Strichs setzen\r\n    ctx.lineTo(x, y);\r\n    // Den Strich zeichnen\r\n    ctx.stroke();\r\n    // Die Animation fortsetzen\r\n    requestAnimationFrame(animate);\r\n}\r\n// Die Animation starten\r\nanimate();\r\n\n\n//# sourceURL=webpack://webgl-metry/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;