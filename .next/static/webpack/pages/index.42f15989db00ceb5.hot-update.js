"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exploreWorlds\": function() { return /* binding */ exploreWorlds; },\n/* harmony export */   \"insights\": function() { return /* binding */ insights; },\n/* harmony export */   \"newFeatures\": function() { return /* binding */ newFeatures; },\n/* harmony export */   \"socials\": function() { return /* binding */ socials; },\n/* harmony export */   \"startingFeatures\": function() { return /* binding */ startingFeatures; }\n/* harmony export */ });\nconst exploreWorlds = [\n    {\n        id: \"world-1\",\n        imgUrl: \"/planet-01.png\",\n        title: \"The Hogwarts\"\n    },\n    {\n        id: \"world-2\",\n        imgUrl: \"/planet-02.png\",\n        title: \"The Upside Down\"\n    },\n    {\n        id: \"world-3\",\n        imgUrl: \"/planet-03.png\",\n        title: \"Kadirojo Permai\"\n    },\n    {\n        id: \"world-4\",\n        imgUrl: \"/planet-04.png\",\n        title: \"Paradise Island\"\n    },\n    {\n        id: \"world-5\",\n        imgUrl: \"/planet-05.png\",\n        title: \"Hawkins Labs\"\n    }\n];\nconst startingFeatures = [\n    \"Use the official Chain Bridge to securely transfer your Bitcoin (BTC) to the Merlin Chain.\",\n    \"Choose the liquidity pools you wish to participate in and deposit your assets.\",\n    \"Engage in farming activities to earn rewards. Once youve accumulated enough, claim your profits.\"\n];\nconst newFeatures = [\n    {\n        imgUrl: \"/vrpano.svg\",\n        title: \"A new world\",\n        subtitle: \"we have the latest update with new world for you to try never mind\"\n    },\n    {\n        imgUrl: \"/headset.svg\",\n        title: \"More realistic\",\n        subtitle: \"In the latest update, your eyes are narrow, making the world more realistic than ever\"\n    }\n];\nconst insights = [\n    {\n        imgUrl: \"/planet-06.png\",\n        title: \"The launch of the Metaverse makes Elon musk ketar-ketir\",\n        subtitle: \"Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.\"\n    },\n    {\n        imgUrl: \"/planet-07.png\",\n        title: \"7 tips to easily master the madness of the Metaverse\",\n        subtitle: \"Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum\"\n    },\n    {\n        imgUrl: \"/planet-08.png\",\n        title: \"With one platform you can explore the whole world virtually\",\n        subtitle: \"Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem\"\n    }\n];\nconst socials = [\n    {\n        name: \"twitter\",\n        url: \"/twitter.svg\"\n    },\n    {\n        name: \"discord\",\n        url: \"/discord.svg\"\n    },\n    {\n        name: \"medium\",\n        url: \"/medium.svg\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxNQUFNQSxnQkFBZ0I7SUFDM0I7UUFDRUMsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7Q0FDRCxDQUFDO0FBRUssTUFBTUMsbUJBQW1CO0lBQzlCO0lBQ0E7SUFDQTtDQUNELENBQUM7QUFFSyxNQUFNQyxjQUFjO0lBQ3pCO1FBQ0VILFFBQVE7UUFDUkMsT0FBTztRQUNQRyxVQUNJO0lBQ047SUFDQTtRQUNFSixRQUFRO1FBQ1JDLE9BQU87UUFDUEcsVUFDSTtJQUNOO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLFdBQVc7SUFDdEI7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BHLFVBQ0k7SUFDTjtJQUNBO1FBQ0VKLFFBQVE7UUFDUkMsT0FBTztRQUNQRyxVQUNJO0lBQ047SUFDQTtRQUNFSixRQUFRO1FBQ1JDLE9BQU87UUFDUEcsVUFDSTtJQUNOO0NBQ0QsQ0FBQztBQUVLLE1BQU1FLFVBQVU7SUFDckI7UUFDRUMsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLEtBQUs7SUFDUDtJQUNBO1FBQ0VELE1BQU07UUFDTkMsS0FBSztJQUNQO0NBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25zdGFudHMvaW5kZXguanM/MzczNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZXhwbG9yZVdvcmxkcyA9IFtcclxuICB7XHJcbiAgICBpZDogJ3dvcmxkLTEnLFxyXG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wMS5wbmcnLFxyXG4gICAgdGl0bGU6ICdUaGUgSG9nd2FydHMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICd3b3JsZC0yJyxcclxuICAgIGltZ1VybDogJy9wbGFuZXQtMDIucG5nJyxcclxuICAgIHRpdGxlOiAnVGhlIFVwc2lkZSBEb3duJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnd29ybGQtMycsXHJcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTAzLnBuZycsXHJcbiAgICB0aXRsZTogJ0thZGlyb2pvIFBlcm1haScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3dvcmxkLTQnLFxyXG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wNC5wbmcnLFxyXG4gICAgdGl0bGU6ICdQYXJhZGlzZSBJc2xhbmQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICd3b3JsZC01JyxcclxuICAgIGltZ1VybDogJy9wbGFuZXQtMDUucG5nJyxcclxuICAgIHRpdGxlOiAnSGF3a2lucyBMYWJzJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXJ0aW5nRmVhdHVyZXMgPSBbXHJcbiAgJ1VzZSB0aGUgb2ZmaWNpYWwgQ2hhaW4gQnJpZGdlIHRvIHNlY3VyZWx5IHRyYW5zZmVyIHlvdXIgQml0Y29pbiAoQlRDKSB0byB0aGUgTWVybGluIENoYWluLicsXHJcbiAgJ0Nob29zZSB0aGUgbGlxdWlkaXR5IHBvb2xzIHlvdSB3aXNoIHRvIHBhcnRpY2lwYXRlIGluIGFuZCBkZXBvc2l0IHlvdXIgYXNzZXRzLicsXHJcbiAgJ0VuZ2FnZSBpbiBmYXJtaW5nIGFjdGl2aXRpZXMgdG8gZWFybiByZXdhcmRzLiBPbmNlIHlvdXZlIGFjY3VtdWxhdGVkIGVub3VnaCwgY2xhaW0geW91ciBwcm9maXRzLicsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbmV3RmVhdHVyZXMgPSBbXHJcbiAge1xyXG4gICAgaW1nVXJsOiAnL3ZycGFuby5zdmcnLFxyXG4gICAgdGl0bGU6ICdBIG5ldyB3b3JsZCcsXHJcbiAgICBzdWJ0aXRsZTpcclxuICAgICAgICAnd2UgaGF2ZSB0aGUgbGF0ZXN0IHVwZGF0ZSB3aXRoIG5ldyB3b3JsZCBmb3IgeW91IHRvIHRyeSBuZXZlciBtaW5kJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZ1VybDogJy9oZWFkc2V0LnN2ZycsXHJcbiAgICB0aXRsZTogJ01vcmUgcmVhbGlzdGljJyxcclxuICAgIHN1YnRpdGxlOlxyXG4gICAgICAgICdJbiB0aGUgbGF0ZXN0IHVwZGF0ZSwgeW91ciBleWVzIGFyZSBuYXJyb3csIG1ha2luZyB0aGUgd29ybGQgbW9yZSByZWFsaXN0aWMgdGhhbiBldmVyJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluc2lnaHRzID0gW1xyXG4gIHtcclxuICAgIGltZ1VybDogJy9wbGFuZXQtMDYucG5nJyxcclxuICAgIHRpdGxlOiAnVGhlIGxhdW5jaCBvZiB0aGUgTWV0YXZlcnNlIG1ha2VzIEVsb24gbXVzayBrZXRhci1rZXRpcicsXHJcbiAgICBzdWJ0aXRsZTpcclxuICAgICAgICAnTWFnbmEgZXRpYW0gdGVtcG9yIG9yY2kgZXUgbG9ib3J0aXMgZWxlbWVudHVtIG5pYmggdGVsbHVzIG1vbGVzdGllLiBEaWFtIG1hZWNlbmFzIHNlZCBlbmltIHV0IHNlbSB2aXZlcnJhIGFsaXF1ZS4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wNy5wbmcnLFxyXG4gICAgdGl0bGU6ICc3IHRpcHMgdG8gZWFzaWx5IG1hc3RlciB0aGUgbWFkbmVzcyBvZiB0aGUgTWV0YXZlcnNlJyxcclxuICAgIHN1YnRpdGxlOlxyXG4gICAgICAgICdWaXRhZSBjb25ndWUgZXUgY29uc2VxdWF0IGFjIGZlbGlzIGRvbmVjLiBFdCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIENvbnZhbGxpcyB0ZWxsdXMgaWQgaW50ZXJkdW0nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wOC5wbmcnLFxyXG4gICAgdGl0bGU6ICdXaXRoIG9uZSBwbGF0Zm9ybSB5b3UgY2FuIGV4cGxvcmUgdGhlIHdob2xlIHdvcmxkIHZpcnR1YWxseScsXHJcbiAgICBzdWJ0aXRsZTpcclxuICAgICAgICAnUXVhbSBxdWlzcXVlIGlkIGRpYW0gdmVsIHF1YW0gZWxlbWVudHVtLiBWaXZlcnJhIG5hbSBsaWJlcm8ganVzdG8gbGFvcmVldCBzaXQgYW1ldCBjdXJzdXMgc2l0LiBNYXVyaXMgaW4gYWxpcXVhbSBzZW0nLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgc29jaWFscyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAndHdpdHRlcicsXHJcbiAgICB1cmw6ICcvdHdpdHRlci5zdmcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ2Rpc2NvcmQnLFxyXG4gICAgdXJsOiAnL2Rpc2NvcmQuc3ZnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdtZWRpdW0nLFxyXG4gICAgdXJsOiAnL21lZGl1bS5zdmcnLFxyXG4gIH0sXHJcbl07XHJcbiJdLCJuYW1lcyI6WyJleHBsb3JlV29ybGRzIiwiaWQiLCJpbWdVcmwiLCJ0aXRsZSIsInN0YXJ0aW5nRmVhdHVyZXMiLCJuZXdGZWF0dXJlcyIsInN1YnRpdGxlIiwiaW5zaWdodHMiLCJzb2NpYWxzIiwibmFtZSIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants/index.js\n"));

/***/ })

});