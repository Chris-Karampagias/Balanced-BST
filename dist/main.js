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

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mergeSort: () => (/* binding */ mergeSort),\n/* harmony export */   minValueNode: () => (/* binding */ minValueNode),\n/* harmony export */   prettyPrint: () => (/* binding */ prettyPrint),\n/* harmony export */   sortAndRemoveDuplicates: () => (/* binding */ sortAndRemoveDuplicates)\n/* harmony export */ });\nfunction merge(left, right) {\n  let sortedArr = [];\n  while (left.length && right.length) {\n    if (left[0] < right[0]) {\n      sortedArr.push(left.shift());\n    } else {\n      sortedArr.push(right.shift());\n    }\n  }\n  return [...sortedArr, ...left, ...right];\n}\n\nfunction mergeSort(arr) {\n  if (arr.length <= 1) return arr;\n  let mid = Math.floor(arr.length / 2);\n  let left = mergeSort(arr.slice(0, mid));\n  let right = mergeSort(arr.slice(mid));\n  return merge(left, right);\n}\n\nfunction removeDuplicates(array) {\n  for (let i = 0; i < array.length; i++) {\n    for (let j = i + 1; j < array.length; j++) {\n      if (array[i] === array[j]) {\n        array.splice(j, 1);\n      }\n    }\n  }\n  return array;\n}\n\nfunction sortAndRemoveDuplicates(array) {\n  array = removeDuplicates(array);\n  const sortedArray = mergeSort(array);\n  return sortedArray;\n}\n\nconst prettyPrint = (node, prefix = \"\", isLeft = true) => {\n  if (node === null) {\n    return;\n  }\n  if (node.right !== null) {\n    prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\n  }\n  console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.value}`);\n  if (node.left !== null) {\n    prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n  }\n};\n\nfunction minValueNode(currentNode) {\n  let parent = currentNode;\n  let temp = currentNode;\n  while (temp.left) {\n    parent = temp;\n    temp = temp.left;\n  }\n  return [parent, temp];\n}\n\n\n\n\n//# sourceURL=webpack://balanced-bst/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\nclass Node {\n  constructor(value) {\n    this.value = value;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass BST {\n  constructor(array) {\n    this.root = this.buildTree((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.sortAndRemoveDuplicates)(array));\n  }\n\n  buildTree(array) {\n    if (array.length === 0) {\n      return null;\n    }\n    let mid = parseInt(array.length / 2);\n    let node = new Node(array[mid]);\n    let leftHalf = array.slice(0, mid);\n    let rightHalf = array.slice(mid + 1);\n    node.left = this.buildTree(leftHalf);\n    node.right = this.buildTree(rightHalf);\n    return node;\n  }\n\n  insert(value) {\n    const newNode = new Node(value);\n    if (!this.root) {\n      this.root = newNode;\n      return this;\n    }\n    let temp = this.root;\n    while (true) {\n      if (newNode.value === temp.value) {\n        return undefined;\n      } else if (newNode.value < temp.value) {\n        if (temp.left) {\n          temp = temp.left;\n        } else {\n          temp.left = newNode;\n          return this;\n        }\n      } else {\n        if (temp.right) {\n          temp = temp.right;\n        } else {\n          temp.right = newNode;\n          return this;\n        }\n      }\n    }\n  }\n\n  delete(value) {\n    if (!this.root || !this.find(value)) {\n      return undefined;\n    }\n    let parent = this.root;\n    let temp = this.root;\n    while (temp.value != value) {\n      if (value < temp.value) {\n        if (temp.left) {\n          parent = temp;\n          temp = temp.left;\n        }\n      } else {\n        if (temp.right) {\n          parent = temp;\n          temp = temp.right;\n        }\n      }\n    }\n    if (!temp.right && !temp.left) {\n      // If node is a leaf\n      if (parent.left == temp) {\n        parent.left = null;\n        delete this.temp;\n        return temp;\n      } else {\n        parent.right = null;\n        delete this.temp;\n        return temp;\n      }\n    } else if (!temp.right) {\n      //If node has only one child(left)\n      if (parent.left == temp) {\n        parent.left = temp.left;\n        delete this.temp;\n        return temp;\n      } else {\n        parent.right = temp.left;\n        delete this.temp;\n        return temp;\n      }\n    } else if (!temp.left) {\n      //If node has only one child(right)\n      if (parent.left == temp) {\n        parent.left = temp.right;\n        delete this.temp;\n        return temp;\n      } else {\n        parent.right = temp.right;\n        delete this.temp;\n        return temp;\n      }\n    } else if (temp.right && temp.left) {\n      //If node has both children;\n      let minNode, node;\n      [parent, minNode] = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.minValueNode)(temp.right);\n      node = temp;\n      temp.value = minNode.value;\n      parent.left = null;\n      delete this.minNode;\n      return node;\n    } else {\n      //If node is not part of the tree\n      return undefined;\n    }\n  }\n\n  find(value) {\n    if (!this.root) {\n      return false;\n    }\n    let temp = this.root;\n    while (temp) {\n      if (value === temp.value) {\n        return temp;\n      } else if (value < temp.value) {\n        temp = temp.left;\n      } else {\n        temp = temp.right;\n      }\n    }\n    return false;\n  }\n\n  leverOrder(func = []) {\n    if (!this.root) {\n      return undefined;\n    }\n    const queue = [];\n    queue.push(this.root);\n    if (!Array.isArray(func)) {\n      while (queue.length != 0) {\n        if (queue[0].left != null) {\n          queue.push(queue[0].left);\n        }\n        if (queue[0].right != null) {\n          queue.push(queue[0].right);\n        }\n        let nodeVal = queue.shift().value;\n        func(nodeVal);\n      }\n      return;\n    } else {\n      while (queue.length != 0) {\n        if (queue[0].left != null) {\n          queue.push(queue[0].left);\n        }\n        if (queue[0].right != null) {\n          queue.push(queue[0].right);\n        }\n        let nodeVal = queue.shift().value;\n        func.push(nodeVal);\n      }\n      return func;\n    }\n  }\n\n  preOrder(func = []) {\n    if (!Array.isArray(func)) {\n      function traverse(node) {\n        func(node.value);\n        if (node.left) traverse(node.left);\n        if (node.right) traverse(node.right);\n      }\n      traverse(this.root);\n      return;\n    } else {\n      function traverse(node) {\n        func.push(node.value);\n        if (node.left) traverse(node.left);\n        if (node.right) traverse(node.right);\n      }\n      traverse(this.root);\n      return func;\n    }\n  }\n\n  postOrder(func = []) {\n    if (!Array.isArray(func)) {\n      function traverse(node) {\n        if (node.left) traverse(node.left);\n        if (node.right) traverse(node.right);\n        func(node.value);\n      }\n      traverse(this.root);\n      return;\n    } else {\n      function traverse(node) {\n        if (node.left) traverse(node.left);\n        if (node.right) traverse(node.right);\n        func.push(node.value);\n      }\n      traverse(this.root);\n      return func;\n    }\n  }\n\n  inOrder(func = []) {\n    if (!Array.isArray(func)) {\n      function traverse(node) {\n        if (node.left) traverse(node.left);\n        func(node.value);\n        if (node.right) traverse(node.right);\n      }\n      traverse(this.root);\n      return;\n    } else {\n      function traverse(node) {\n        if (node.left) traverse(node.left);\n        func.push(node.value);\n        if (node.right) traverse(node.right);\n      }\n      traverse(this.root);\n      return func;\n    }\n  }\n\n  height(node) {\n    if (!node) {\n      return 0;\n    }\n\n    let leftDepth = this.height(node.left);\n    let rightDepth = this.height(node.right);\n\n    if (leftDepth < rightDepth) {\n      return rightDepth + 1;\n    } else {\n      return leftDepth + 1;\n    }\n  }\n\n  depth(root, node) {\n    if (!root || !node) {\n      return 0;\n    }\n\n    if (root === node) {\n      return 0;\n    } else if (node.value < root.value) {\n      return this.depth(root.left, node) + 1;\n    } else {\n      return this.depth(root.right, node) + 1;\n    }\n  }\n\n  isBalanced(root = this.root) {\n    if (!root) {\n      return true;\n    }\n    let left = root.left;\n    let right = root.right;\n    let leftHeight = this.height(left);\n    let rightHeight = this.height(right);\n\n    if (\n      Math.abs(leftHeight - rightHeight) <= 1 &&\n      this.isBalanced(left) == true &&\n      this.isBalanced(right) == true\n    ) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  rebalance() {\n    const array = [];\n    this.leverOrder((node) => array.push(node));\n    this.root = this.buildTree((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.sortAndRemoveDuplicates)(array));\n  }\n}\n\n\n//# sourceURL=webpack://balanced-bst/./src/index.js?");

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