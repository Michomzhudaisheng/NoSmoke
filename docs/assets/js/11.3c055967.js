(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{180:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[r("a",{attrs:{href:"https://npmjs.org/package/nosmoke",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/npm/v/nosmoke.svg?style=flat-square",alt:"NPM version"}}),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://travis-ci.org/macacajs/NoSmoke",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/travis/macacajs/NoSmoke.svg?style=flat-square",alt:"build status"}}),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://coveralls.io/r/macacajs/NoSmoke?branch=master",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/coveralls/macacajs/NoSmoke.svg?style=flat-square",alt:"Test coverage"}}),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"http://nodejs.org/download/",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/badge/node.js-%3E=_8-green.svg?style=flat-square",alt:"node version"}}),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://npmjs.org/package/nosmoke",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://img.shields.io/npm/dm/nosmoke.svg?style=flat-square",alt:"npm download"}}),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://macacajs.github.io/NoSmoke/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文版"),r("OutboundLink")],1)]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("A cross platform UI crawler which scans view trees then generate and execute UI test cases. For full set of documentation, please refer to:\n"),r("a",{attrs:{href:"https://macacajs.github.io/NoSmoke/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),r("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://github.com/SamuelZhaoY",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://avatars0.githubusercontent.com/u/8198256?v=4",width:"100px;"}}),r("br"),t._m(2),r("OutboundLink")],1),r("br")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://github.com/xudafeng",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://avatars1.githubusercontent.com/u/1011681?v=4",width:"100px;"}}),r("br"),t._m(3),r("OutboundLink")],1),r("br")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[r("a",{attrs:{href:"https://github.com/butterflyingdog",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://avatars1.githubusercontent.com/u/26514264?v=4",width:"100px;"}}),r("br"),t._m(4),r("OutboundLink")],1),r("br")])])]),t._v(" "),r("tbody")]),t._v(" "),r("p",[t._v("This project follows the git-contributor "),r("a",{attrs:{href:"https://github.com/xudafeng/git-contributor",target:"_blank",rel:"noopener noreferrer"}},[t._v("spec"),r("OutboundLink")],1),t._v(", auto upated at "),r("code",[t._v("Sun Dec 09 2018 21:26:54 GMT+0800")]),t._v(".")]),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("With it you can:")]),t._v(" "),r("ul",[t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),r("li",[t._v("[x] "),r("strong",[t._v("Testing result visualisation")]),t._v(" via "),r("a",{attrs:{href:"https://github.com/macacajs/macaca-reporter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Macaca-Reporter"),r("OutboundLink")],1)])]),t._v(" "),t._m(9),t._v(" "),r("p",[t._v("In order to design a multiplatform UI automation tool, the overall architcture is devided into 3 different layers.")]),t._v(" "),r("ul",[r("li",[t._v("The "),r("strong",[t._v("Proxy")]),t._v(" layer, which are tester drivers wrapping local platform testing tool like UIAutomator, XCUITest. They establishes sockets which recieve and executes requests in format of "),r("a",{attrs:{href:"https://www.w3.org/TR/webdriver/",target:"_blank",rel:"noopener noreferrer"}},[t._v("web driver"),r("OutboundLink")],1),t._v(" protocol.")]),t._v(" "),t._m(10),t._v(" "),t._m(11)]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),r("p",[t._v("Configuration params and configuration templates for android/iOS demos "),r("router-link",{attrs:{to:"/guide/cross-platform.html"}},[t._v("templates")]),t._v(" "),r("router-link",{attrs:{to:"/guide/configuration.html"}},[t._v("list of configuration")])],1),t._v(" "),t._m(25),t._v(" "),r("p",[t._v("For every iteration in the DFS crawling process, users can intercept the action and manually post out UI actions based on xpath:\n"),r("router-link",{attrs:{to:"/guide/hooks.html"}},[t._v("hooks reference")])],1),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),t._v(" "),r("p",[t._v("Since NoSmoke 2.0 utilizes OCR to replace the previous xml source tree parsing implementation. You may need to install tesseract on your device properly to use the ocr strategy introduced in NoSmoke 2.0.")]),t._v(" "),r("p",[t._v("For mac-os user:")]),t._v(" "),t._m(33),r("p",[t._v("Full list of dependencies:")]),t._v(" "),t._m(34),r("p",[t._v("Install nosmoke in a single line:")]),t._v(" "),t._m(35),t._m(36),t._v(" "),r("p",[t._v("In your workspace directory, execute the following command")]),t._v(" "),t._m(37),t._m(38),t._v(" "),t._m(39),t._v(" "),r("p",[t._v("The MIT License (MIT)")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"nosmoke"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nosmoke","aria-hidden":"true"}},[this._v("#")]),this._v(" NoSmoke")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"contributors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contributors","aria-hidden":"true"}},[this._v("#")]),this._v(" Contributors")])},function(){var t=this.$createElement,e=this._self._c||t;return e("sub",[e("b",[this._v("SamuelZhaoY")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("sub",[e("b",[this._v("xudafeng")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("sub",[e("b",[this._v("butterflyingdog")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_1-advantages-of-nosmoke"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-advantages-of-nosmoke","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. Advantages of NoSmoke:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("[x] "),e("strong",[this._v("Automated UI test")]),this._v(" with simple configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("[x] "),e("strong",[this._v("More accurate than monkey test")]),this._v(" with view tree crawling")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("[x] "),e("strong",[this._v("Multiple platforms")]),this._v(" iOS, Android and Web !! :]")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-how-it-works"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-how-it-works","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. How it works?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("The "),e("strong",[this._v("Macaca-Server")]),this._v(" layer, which are node server created on PC. It provides a set of cli-command based on which users can install the testing app and init the proxy on a specific device. Further it routes http request to proxies in various platforms.")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[t._v("The "),r("strong",[t._v("NoSmoke")]),t._v(" layer, it contains a node client which posting various crawling and analysis commands to "),r("strong",[t._v("Macaca-Server")]),t._v(" layer. The crawling algorithm in this module utilizes the node client to fetch window sources and convert it to a DFS tree model, then eventually send out a UI action to the target app via "),r("strong",[t._v("macaca-server")]),t._v(" and "),r("strong",[t._v("proxy")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/wiki/macacajs/NoSmoke/assets/macaca-architecture.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3-why-the-name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-why-the-name","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. Why the name?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Since all the good ones are taken, "),e("code",[this._v("NoSmoke")]),this._v(" comes from the ideas across "),e("code",[this._v("smoke testing")]),this._v(", but smoke is not good for health ...")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_4-features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-features","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. Features")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-1-muliplatform"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-muliplatform","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.1 Muliplatform")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("NoSmoke supports UI crawling and testing for "),r("strong",[t._v("iOS")]),t._v(", "),r("strong",[t._v("Android")]),t._v(" and "),r("strong",[t._v("PC Web")]),t._v(", "),r("a",{attrs:{href:"//github.com/macacajs/macaca-reporter"}},[t._v("macaca-reporter")]),t._v(" is used to gather and present the crawling process. During the execution of nosmoke, the current page and relevent action info will be revealed on reporter:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"for-android"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-android","aria-hidden":"true"}},[this._v("#")]),this._v(" For Android")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/8198256/31303578-988f5db2-ab42-11e7-8b96-52175fe4ba92.gif",alt:"macaca-android"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"for-ios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-ios","aria-hidden":"true"}},[this._v("#")]),this._v(" For iOS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/8198256/31303576-98897564-ab42-11e7-9a12-36e5aaf5161d.gif",alt:"macaca-ios"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"for-pc-web"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for-pc-web","aria-hidden":"true"}},[this._v("#")]),this._v(" For PC-Web")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/8198256/31303577-988df9c2-ab42-11e7-8c60-1bd456cedddd.gif",alt:"web-pc"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-2-configurable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-configurable","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.2 Configurable")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-3-hook"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-hook","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.3 Hook")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_5-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-setup","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. Setup")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_5-1-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" 5.1. Requirements:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("iOS simulator 11.0 and xcode 10.0 and above.")]),this._v(" "),e("li",[this._v("Android 6.0 and above, supporting both device and simulator. For real device testing please install null-keyboard")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Note")]),this._v(" You could also check environment by "),e("code",[this._v("macaca doctor")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" i macaca-cli -g\n$ macaca doctor\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_5-2-setup-run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-setup-run","aria-hidden":"true"}},[this._v("#")]),this._v(" 5.2. Setup & Run:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"step-1-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-setup","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("strong",[this._v("Step 1.")]),this._v(" Setup:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("brew install tesseract --all-languages\n")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i macaca-android -g\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i macaca-ios -g\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i macaca-cli -g\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i macaca-electron -g\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" i nosmoke -g\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{attrs:{id:"step-2-run-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-run-it","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("strong",[this._v("Step 2.")]),this._v(" Run it:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# initialize macaca server")]),this._v("\nmacaca server --verbose "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("&")]),this._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# initialize nosmoke")]),this._v("\nnosmoke\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Note:")]),this._v(" For full set of command please check: "),e("code",[this._v("nosmoke --help")]),this._v(" "),e("br"),this._v(" "),e("strong",[this._v("Note:")]),this._v(" Invoking nosmoke itself will simply run the default demo application. To run your own application, you should put -h (setup hooks ,optional) and -c (the path of the configuration file is a must) in order to run the crawler")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[this._v("#")]),this._v(" License")])}],!1,null,null,null);s.options.__file="README.md";e.default=s.exports}}]);