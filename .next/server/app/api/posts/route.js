/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/posts/route";
exports.ids = ["app/api/posts/route"];
exports.modules = {

/***/ "(rsc)/./app/api/posts/route.ts":
/*!********************************!*\
  !*** ./app/api/posts/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mdx */ \"(rsc)/./lib/mdx/index.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.3.1_@babel+core@7.25.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/api/server.js\");\n// pages/api/posts.ts\n\n\nasync function GET(request) {\n    const { searchParams } = new URL(request.url);\n    const category = searchParams.get(\"category\") || \"projects\";\n    try {\n        const posts = (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_0__.getPosts)(category);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(posts);\n    } catch (error) {\n        console.error(\"Failed to fetch posts:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: \"Failed to fetch posts\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Bvc3RzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFCQUFxQjtBQUNnQjtBQUVNO0FBRXBDLGVBQWVFLElBQUlDLE9BQWdCO0lBQ3hDLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSUYsUUFBUUcsR0FBRztJQUM1QyxNQUFNQyxXQUFXSCxhQUFhSSxHQUFHLENBQUMsZUFBZTtJQUVqRCxJQUFJO1FBQ0YsTUFBTUMsUUFBUVQsa0RBQVFBLENBQUNPO1FBQ3ZCLE9BQU9OLHFEQUFZQSxDQUFDUyxJQUFJLENBQUNEO0lBQzNCLEVBQUUsT0FBT0UsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsMEJBQTBCQTtRQUN4QyxPQUFPVixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBd0IsR0FBRztZQUFFRSxRQUFRO1FBQUk7SUFDN0U7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2ZhbmluZHJhL015IFNpdGVzL3dlYnNpdGUvYXBwL2FwaS9wb3N0cy9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvcG9zdHMudHNcbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSBcIkAvbGliL21keFwiO1xuXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgY29uc3QgY2F0ZWdvcnkgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiY2F0ZWdvcnlcIikgfHwgXCJwcm9qZWN0c1wiO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcG9zdHMgPSBnZXRQb3N0cyhjYXRlZ29yeSk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHBvc3RzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHBvc3RzOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHBvc3RzXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImdldFBvc3RzIiwiTmV4dFJlc3BvbnNlIiwiR0VUIiwicmVxdWVzdCIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsImNhdGVnb3J5IiwiZ2V0IiwicG9zdHMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/posts/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mdx/index.ts":
/*!**************************!*\
  !*** ./lib/mdx/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPosts: () => (/* binding */ getPosts)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"(rsc)/./node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter/index.js\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction readFile(filePath) {\n    try {\n        const rawContent = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, \"utf-8\");\n        const { data, content } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(rawContent);\n        const slug = path__WEBPACK_IMPORTED_MODULE_1___default().basename(filePath, path__WEBPACK_IMPORTED_MODULE_1___default().extname(filePath));\n        return {\n            ...data,\n            slug,\n            content\n        };\n    } catch (error) {\n        console.error(`Failed to read or parse the file at ${filePath}:`, error);\n        return null;\n    }\n}\nfunction getFiles(dir) {\n    try {\n        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(dir)) {\n            fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"app\", \"(posts)\", \"projects\", \"posts\"), {\n                recursive: true\n            });\n        }\n        return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(dir).filter((file)=>path__WEBPACK_IMPORTED_MODULE_1___default().extname(file) === \".mdx\");\n    } catch (error) {\n        console.error(`Failed to read or create directory at ${dir}:`, error);\n        return [];\n    }\n}\nfunction getPosts(directory) {\n    const files = getFiles(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"app\", \"(posts)\", directory, \"posts\"));\n    return files.map((file)=>readFile(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"app\", \"(posts)\", directory, \"posts\", file))).filter((post)=>post !== null);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbWR4L2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFb0I7QUFDSTtBQUVTO0FBRWpDLFNBQVNHLFNBQVNDLFFBQWdCO0lBQ2hDLElBQUk7UUFDRixNQUFNQyxhQUFhTCxzREFBZSxDQUFDSSxVQUFVO1FBQzdDLE1BQU0sRUFBRUcsSUFBSSxFQUFFQyxPQUFPLEVBQUUsR0FBR04sa0RBQU1BLENBQUNHO1FBRWpDLE1BQU1JLE9BQU9SLG9EQUFhLENBQUNHLFVBQVVILG1EQUFZLENBQUNHO1FBRWxELE9BQU87WUFDTCxHQUFHRyxJQUFJO1lBQ1BFO1lBQ0FEO1FBQ0Y7SUFDRixFQUFFLE9BQU9JLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLENBQUMsb0NBQW9DLEVBQUVSLFNBQVMsQ0FBQyxDQUFDLEVBQUVRO1FBQ2xFLE9BQU87SUFDVDtBQUNGO0FBRUEsU0FBU0UsU0FBU0MsR0FBVztJQUMzQixJQUFJO1FBQ0YsSUFBSSxDQUFDZixvREFBYSxDQUFDZSxNQUFNO1lBQ3ZCZixtREFBWSxDQUFDQyxnREFBUyxDQUFDa0IsUUFBUUMsR0FBRyxJQUFJLE9BQU8sV0FBVyxZQUFZLFVBQVU7Z0JBQUVDLFdBQVc7WUFBSztRQUNsRztRQUNBLE9BQU9yQixxREFBYyxDQUFDZSxLQUFLUSxNQUFNLENBQUMsQ0FBQ0MsT0FBU3ZCLG1EQUFZLENBQUN1QixVQUFVO0lBQ3JFLEVBQUUsT0FBT1osT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsQ0FBQyxzQ0FBc0MsRUFBRUcsSUFBSSxDQUFDLENBQUMsRUFBRUg7UUFDL0QsT0FBTyxFQUFFO0lBQ1g7QUFDRjtBQUVPLFNBQVNhLFNBQVNDLFNBQWlCO0lBQ3hDLE1BQU1DLFFBQVFiLFNBQVNiLGdEQUFTLENBQUNrQixRQUFRQyxHQUFHLElBQUksT0FBTyxXQUFXTSxXQUFXO0lBQzdFLE9BQU9DLE1BQU1DLEdBQUcsQ0FBQyxDQUFDSixPQUFTckIsU0FBU0YsZ0RBQVMsQ0FBQ2tCLFFBQVFDLEdBQUcsSUFBSSxPQUFPLFdBQVdNLFdBQVcsU0FBU0YsUUFBUUQsTUFBTSxDQUFDLENBQUNNLE9BQXVCQSxTQUFTO0FBQ3JKIiwic291cmNlcyI6WyIvVXNlcnMvZmFuaW5kcmEvTXkgU2l0ZXMvd2Vic2l0ZS9saWIvbWR4L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUG9zdCB9IGZyb20gXCJAL3R5cGVzL3Bvc3RcIjtcblxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcblxuZnVuY3Rpb24gcmVhZEZpbGUoZmlsZVBhdGg6IHN0cmluZyk6IFBvc3QgfCBudWxsIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByYXdDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBcInV0Zi04XCIpO1xuICAgIGNvbnN0IHsgZGF0YSwgY29udGVudCB9ID0gbWF0dGVyKHJhd0NvbnRlbnQpO1xuXG4gICAgY29uc3Qgc2x1ZyA9IHBhdGguYmFzZW5hbWUoZmlsZVBhdGgsIHBhdGguZXh0bmFtZShmaWxlUGF0aCkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBzbHVnLFxuICAgICAgY29udGVudCxcbiAgICB9IGFzIFBvc3Q7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIHJlYWQgb3IgcGFyc2UgdGhlIGZpbGUgYXQgJHtmaWxlUGF0aH06YCwgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEZpbGVzKGRpcjogc3RyaW5nKTogc3RyaW5nW10ge1xuICB0cnkge1xuICAgIGlmICghZnMuZXhpc3RzU3luYyhkaXIpKSB7XG4gICAgICBmcy5ta2RpclN5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiYXBwXCIsIFwiKHBvc3RzKVwiLCBcInByb2plY3RzXCIsIFwicG9zdHNcIiksIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZnMucmVhZGRpclN5bmMoZGlyKS5maWx0ZXIoKGZpbGUpID0+IHBhdGguZXh0bmFtZShmaWxlKSA9PT0gXCIubWR4XCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byByZWFkIG9yIGNyZWF0ZSBkaXJlY3RvcnkgYXQgJHtkaXJ9OmAsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RzKGRpcmVjdG9yeTogc3RyaW5nKTogUG9zdFtdIHtcbiAgY29uc3QgZmlsZXMgPSBnZXRGaWxlcyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJhcHBcIiwgXCIocG9zdHMpXCIsIGRpcmVjdG9yeSwgXCJwb3N0c1wiKSk7XG4gIHJldHVybiBmaWxlcy5tYXAoKGZpbGUpID0+IHJlYWRGaWxlKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImFwcFwiLCBcIihwb3N0cylcIiwgZGlyZWN0b3J5LCBcInBvc3RzXCIsIGZpbGUpKSkuZmlsdGVyKChwb3N0KTogcG9zdCBpcyBQb3N0ID0+IHBvc3QgIT09IG51bGwpO1xufVxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsIm1hdHRlciIsInJlYWRGaWxlIiwiZmlsZVBhdGgiLCJyYXdDb250ZW50IiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsImNvbnRlbnQiLCJzbHVnIiwiYmFzZW5hbWUiLCJleHRuYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiZ2V0RmlsZXMiLCJkaXIiLCJleGlzdHNTeW5jIiwibWtkaXJTeW5jIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJyZWN1cnNpdmUiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsImZpbGUiLCJnZXRQb3N0cyIsImRpcmVjdG9yeSIsImZpbGVzIiwibWFwIiwicG9zdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mdx/index.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.3.1_@babel+core@7.25.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.ts&appDir=%2FUsers%2Ffanindra%2FMy%20Sites%2Fwebsite%2Fapp&pageExtensions=md&pageExtensions=mdx&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffanindra%2FMy%20Sites%2Fwebsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.3.1_@babel+core@7.25.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.ts&appDir=%2FUsers%2Ffanindra%2FMy%20Sites%2Fwebsite%2Fapp&pageExtensions=md&pageExtensions=mdx&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffanindra%2FMy%20Sites%2Fwebsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.3.1_@babel+core@7.25.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.3.1_@babel+core@7.25.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.3.1_@babel+core@7.25.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_fanindra_My_Sites_website_app_api_posts_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/posts/route.ts */ \"(rsc)/./app/api/posts/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/posts/route\",\n        pathname: \"/api/posts\",\n        filename: \"route\",\n        bundlePath: \"app/api/posts/route\"\n    },\n    resolvedPagePath: \"/Users/fanindra/My Sites/website/app/api/posts/route.ts\",\n    nextConfigOutput,\n    userland: _Users_fanindra_My_Sites_website_app_api_posts_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4zLjFfQGJhYmVsK2NvcmVANy4yNS44X3JlYWN0LWRvbUAxOS4xLjBfcmVhY3RAMTkuMS4wX19yZWFjdEAxOS4xLjAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyL2luZGV4LmpzP25hbWU9YXBwJTJGYXBpJTJGcG9zdHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnBvc3RzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcG9zdHMlMkZyb3V0ZS50cyZhcHBEaXI9JTJGVXNlcnMlMkZmYW5pbmRyYSUyRk15JTIwU2l0ZXMlMkZ3ZWJzaXRlJTJGYXBwJnBhZ2VFeHRlbnNpb25zPW1kJnBhZ2VFeHRlbnNpb25zPW1keCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZmYW5pbmRyYSUyRk15JTIwU2l0ZXMlMkZ3ZWJzaXRlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNPO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZmFuaW5kcmEvTXkgU2l0ZXMvd2Vic2l0ZS9hcHAvYXBpL3Bvc3RzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wb3N0cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Bvc3RzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9wb3N0cy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9mYW5pbmRyYS9NeSBTaXRlcy93ZWJzaXRlL2FwcC9hcGkvcG9zdHMvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.3.1_@babel+core@7.25.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.ts&appDir=%2FUsers%2Ffanindra%2FMy%20Sites%2Fwebsite%2Fapp&pageExtensions=md&pageExtensions=mdx&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffanindra%2FMy%20Sites%2Fwebsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.3.1_@babel+core@7.25.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.3.1_@babel+core@7.25.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/next@15.3.1_@babel+core@7.25.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.3.1_@babel+core@7.25.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.3.1_@babel+core@7.25.8_react-dom@19.1.0_react@19.1.0__react@19.1.0","vendor-chunks/esprima@4.0.1","vendor-chunks/js-yaml@3.14.1","vendor-chunks/gray-matter@4.0.3","vendor-chunks/kind-of@6.0.3","vendor-chunks/section-matter@1.0.0","vendor-chunks/extend-shallow@2.0.1","vendor-chunks/is-extendable@0.1.1","vendor-chunks/strip-bom-string@1.0.0"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.3.1_@babel+core@7.25.8_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.ts&appDir=%2FUsers%2Ffanindra%2FMy%20Sites%2Fwebsite%2Fapp&pageExtensions=md&pageExtensions=mdx&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Ffanindra%2FMy%20Sites%2Fwebsite&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();