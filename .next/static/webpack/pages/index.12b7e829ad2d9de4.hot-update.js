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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exploreWorlds\": function() { return /* binding */ exploreWorlds; },\n/* harmony export */   \"insights\": function() { return /* binding */ insights; },\n/* harmony export */   \"newFeatures\": function() { return /* binding */ newFeatures; },\n/* harmony export */   \"socials\": function() { return /* binding */ socials; },\n/* harmony export */   \"startingFeatures\": function() { return /* binding */ startingFeatures; }\n/* harmony export */ });\nconst exploreWorlds = [\n    {\n        id: \"world-1\",\n        imgUrl: \"/planet-01.png\",\n        title: \"For Traders\",\n        subtitle: \"Take advantage of optimal swap rates, minimal slippage and concentrated liquidity as the Smart Order Router seeks to find traders the most optimal price.\"\n    },\n    {\n        id: \"world-2\",\n        imgUrl: \"/planet-02.png\",\n        title: \"For Investors\",\n        subtitle: \"Flip traditional finance on its head with customisable crypto index  funds; eliminate the middleman and earn yield on your portfolio.\"\n    },\n    {\n        id: \"world-3\",\n        imgUrl: \"/planet-03.png\",\n        title: \"Weighted Pools\",\n        subtitle: \"\"\n    },\n    {\n        id: \"world-4\",\n        imgUrl: \"/planet-04.png\",\n        title: \"Custom Pools\"\n    },\n    {\n        id: \"world-5\",\n        imgUrl: \"/planet-05.png\",\n        title: \"Smart Order Router\"\n    }\n];\nconst startingFeatures = [\n    \"Use the official Chain Bridge to securely transfer your Bitcoin (BTC) to the Merlin Chain.\",\n    \"Choose the liquidity pools you wish to participate in and deposit your assets.\",\n    \"Engage in farming activities to earn rewards. Once you have accumulated enough, claim your profits.\"\n];\nconst newFeatures = [\n    {\n        imgUrl: \"/vrpano.svg\",\n        title: \"A new world\",\n        subtitle: \"we have the latest update with new world for you to try never mind\"\n    },\n    {\n        imgUrl: \"/headset.svg\",\n        title: \"More realistic\",\n        subtitle: \"In the latest update, your eyes are narrow, making the world more realistic than ever\"\n    }\n];\nconst insights = [\n    {\n        imgUrl: \"/planet-06.png\",\n        title: \"Introducing — AraraSwap\",\n        subtitle: \"Introducing AraraSwap, the cutting-edge Decentralized Exchange (DEX) on the Merlin Blockchain. As a state-of-the-art Automated Market Maker (AMM), AraraSwap is built on the Balancer V2 framework to become the leading liquidity hub for DeFi on Merlin.\",\n        link: \"https://medium.com/@AraraSwap/introducing-araraswap-c4756e28286a\"\n    }\n];\nconst socials = [\n    {\n        name: \"twitter\",\n        url: \"/twitter.svg\",\n        link: \"https://x.com/AraraSwap\"\n    },\n    {\n        name: \"discord\",\n        url: \"/discord.svg\",\n        link: \"https://discord.gg/ytePhjKqtj\"\n    },\n    {\n        name: \"medium\",\n        url: \"/medium.svg\",\n        link: \"https://medium.com/@AraraSwap\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxNQUFNQSxnQkFBZ0I7SUFDM0I7UUFDRUMsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsVUFBVTtJQUNaO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsVUFBVTtJQUNaO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsVUFBVTtJQUNaO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7Q0FDRCxDQUFDO0FBRUssTUFBTUUsbUJBQW1CO0lBQzlCO0lBQ0E7SUFDQTtDQUNELENBQUM7QUFFSyxNQUFNQyxjQUFjO0lBQ3pCO1FBQ0VKLFFBQVE7UUFDUkMsT0FBTztRQUNQQyxVQUNJO0lBQ047SUFDQTtRQUNFRixRQUFRO1FBQ1JDLE9BQU87UUFDUEMsVUFDSTtJQUNOO0NBQ0QsQ0FBQztBQUVLLE1BQU1HLFdBQVc7SUFDdEI7UUFDRUwsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLFVBQ0k7UUFDSkksTUFBTTtJQUNSO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLFVBQVU7SUFDckI7UUFDRUMsTUFBTTtRQUNOQyxLQUFLO1FBQ0xILE1BQU07SUFDUjtJQUNBO1FBQ0VFLE1BQU07UUFDTkMsS0FBSztRQUNMSCxNQUFNO0lBQ1I7SUFDQTtRQUNFRSxNQUFNO1FBQ05DLEtBQUs7UUFDTEgsTUFBTTtJQUNSO0NBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25zdGFudHMvaW5kZXguanM/MzczNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZXhwbG9yZVdvcmxkcyA9IFtcclxuICB7XHJcbiAgICBpZDogJ3dvcmxkLTEnLFxyXG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wMS5wbmcnLFxyXG4gICAgdGl0bGU6ICdGb3IgVHJhZGVycycsXHJcbiAgICBzdWJ0aXRsZTogJ1Rha2UgYWR2YW50YWdlIG9mIG9wdGltYWwgc3dhcCByYXRlcywgbWluaW1hbCBzbGlwcGFnZSBhbmQgY29uY2VudHJhdGVkIGxpcXVpZGl0eSBhcyB0aGUgU21hcnQgT3JkZXIgUm91dGVyIHNlZWtzIHRvIGZpbmQgdHJhZGVycyB0aGUgbW9zdCBvcHRpbWFsIHByaWNlLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3dvcmxkLTInLFxyXG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wMi5wbmcnLFxyXG4gICAgdGl0bGU6ICdGb3IgSW52ZXN0b3JzJyxcclxuICAgIHN1YnRpdGxlOiAnRmxpcCB0cmFkaXRpb25hbCBmaW5hbmNlIG9uIGl0cyBoZWFkIHdpdGggY3VzdG9taXNhYmxlIGNyeXB0byBpbmRleCAgZnVuZHM7IGVsaW1pbmF0ZSB0aGUgbWlkZGxlbWFuIGFuZCBlYXJuIHlpZWxkIG9uIHlvdXIgcG9ydGZvbGlvLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3dvcmxkLTMnLFxyXG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wMy5wbmcnLFxyXG4gICAgdGl0bGU6ICdXZWlnaHRlZCBQb29scycsXHJcbiAgICBzdWJ0aXRsZTogJydcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnd29ybGQtNCcsXHJcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTA0LnBuZycsXHJcbiAgICB0aXRsZTogJ0N1c3RvbSBQb29scycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3dvcmxkLTUnLFxyXG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wNS5wbmcnLFxyXG4gICAgdGl0bGU6ICdTbWFydCBPcmRlciBSb3V0ZXInLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgc3RhcnRpbmdGZWF0dXJlcyA9IFtcclxuICAnVXNlIHRoZSBvZmZpY2lhbCBDaGFpbiBCcmlkZ2UgdG8gc2VjdXJlbHkgdHJhbnNmZXIgeW91ciBCaXRjb2luIChCVEMpIHRvIHRoZSBNZXJsaW4gQ2hhaW4uJyxcclxuICAnQ2hvb3NlIHRoZSBsaXF1aWRpdHkgcG9vbHMgeW91IHdpc2ggdG8gcGFydGljaXBhdGUgaW4gYW5kIGRlcG9zaXQgeW91ciBhc3NldHMuJyxcclxuICAnRW5nYWdlIGluIGZhcm1pbmcgYWN0aXZpdGllcyB0byBlYXJuIHJld2FyZHMuIE9uY2UgeW91IGhhdmUgYWNjdW11bGF0ZWQgZW5vdWdoLCBjbGFpbSB5b3VyIHByb2ZpdHMuJyxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdGZWF0dXJlcyA9IFtcclxuICB7XHJcbiAgICBpbWdVcmw6ICcvdnJwYW5vLnN2ZycsXHJcbiAgICB0aXRsZTogJ0EgbmV3IHdvcmxkJyxcclxuICAgIHN1YnRpdGxlOlxyXG4gICAgICAgICd3ZSBoYXZlIHRoZSBsYXRlc3QgdXBkYXRlIHdpdGggbmV3IHdvcmxkIGZvciB5b3UgdG8gdHJ5IG5ldmVyIG1pbmQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1nVXJsOiAnL2hlYWRzZXQuc3ZnJyxcclxuICAgIHRpdGxlOiAnTW9yZSByZWFsaXN0aWMnLFxyXG4gICAgc3VidGl0bGU6XHJcbiAgICAgICAgJ0luIHRoZSBsYXRlc3QgdXBkYXRlLCB5b3VyIGV5ZXMgYXJlIG5hcnJvdywgbWFraW5nIHRoZSB3b3JsZCBtb3JlIHJlYWxpc3RpYyB0aGFuIGV2ZXInLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgaW5zaWdodHMgPSBbXHJcbiAge1xyXG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wNi5wbmcnLFxyXG4gICAgdGl0bGU6ICdJbnRyb2R1Y2luZyDigJQgQXJhcmFTd2FwJyxcclxuICAgIHN1YnRpdGxlOlxyXG4gICAgICAgICdJbnRyb2R1Y2luZyBBcmFyYVN3YXAsIHRoZSBjdXR0aW5nLWVkZ2UgRGVjZW50cmFsaXplZCBFeGNoYW5nZSAoREVYKSBvbiB0aGUgTWVybGluIEJsb2NrY2hhaW4uIEFzIGEgc3RhdGUtb2YtdGhlLWFydCBBdXRvbWF0ZWQgTWFya2V0IE1ha2VyIChBTU0pLCBBcmFyYVN3YXAgaXMgYnVpbHQgb24gdGhlIEJhbGFuY2VyIFYyIGZyYW1ld29yayB0byBiZWNvbWUgdGhlIGxlYWRpbmcgbGlxdWlkaXR5IGh1YiBmb3IgRGVGaSBvbiBNZXJsaW4uJyxcclxuICAgIGxpbms6ICdodHRwczovL21lZGl1bS5jb20vQEFyYXJhU3dhcC9pbnRyb2R1Y2luZy1hcmFyYXN3YXAtYzQ3NTZlMjgyODZhJ1xyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBzb2NpYWxzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICd0d2l0dGVyJyxcclxuICAgIHVybDogJy90d2l0dGVyLnN2ZycsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly94LmNvbS9BcmFyYVN3YXAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ2Rpc2NvcmQnLFxyXG4gICAgdXJsOiAnL2Rpc2NvcmQuc3ZnJyxcclxuICAgIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cveXRlUGhqS3F0aicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnbWVkaXVtJyxcclxuICAgIHVybDogJy9tZWRpdW0uc3ZnJyxcclxuICAgIGxpbms6ICdodHRwczovL21lZGl1bS5jb20vQEFyYXJhU3dhcCcsXHJcbiAgfSxcclxuXTtcclxuIl0sIm5hbWVzIjpbImV4cGxvcmVXb3JsZHMiLCJpZCIsImltZ1VybCIsInRpdGxlIiwic3VidGl0bGUiLCJzdGFydGluZ0ZlYXR1cmVzIiwibmV3RmVhdHVyZXMiLCJpbnNpZ2h0cyIsImxpbmsiLCJzb2NpYWxzIiwibmFtZSIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants/index.js\n"));

/***/ })

});