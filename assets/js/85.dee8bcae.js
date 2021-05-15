(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{322:function(e,t,a){"use strict";a.r(t);var r=a(0),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),a("p",[e._v("This page introduces the break change of Weex, you can visit "),a("a",{attrs:{href:"https://github.com/apache/incubator-weex/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub page"),a("OutboundLink")],1),e._v(" for detail changelog.")]),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),a("p",[e._v("Since 0.28.0, Weex provides a convenience library in JCenter with the following groupId and artifactId:")]),e._m(10),e._m(11),a("p",[e._v("Before Weex 0.28.0, Weex Android relied and bundled "),a("a",{attrs:{href:"https://github.com/alibaba/weex_js_engine/tree/bridge_branch_mergeTimer",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScriptCore"),a("OutboundLink")],1),e._v(" into its convenience binary(i.e. aar), and this approach have the following disadvantage:")]),a("ul",[a("li",[e._v("JavaScriptCore is partly licensed under BSD, partly licensed under LGPL, which is against the "),a("a",{attrs:{href:"https://apache.org/legal/resolved.html#category-a",target:"_blank",rel:"noopener noreferrer"}},[e._v("License policy of ASF"),a("OutboundLink")],1)]),a("li",[e._v("Users of Weex has no choice of JavaScript Interpreter if we continue bundling JavaScriptCore in convenience binary.")]),a("li",[e._v("The JavaScriptCore Weex used is a pruning version of "),a("a",{attrs:{href:"https://svn.webkit.org/repository/webkit/releases/WebKitGTK/webkit-2.17.4/Source/JavaScriptCore/",target:"_blank",rel:"noopener noreferrer"}},[e._v("official JavaScriptCore"),a("OutboundLink")],1),e._v(" in 2016 and not update since that time, which means we might miss a lot of new features.")])]),a("p",[e._v("Since Weex 0.28.0, the JavaScript Interpreter is not bundled in the convenience binary anymore, users have the freedom of using whatever JavaScript Interpreter they want as long as they implement the "),a("a",{attrs:{href:"https://svn.webkit.org/repository/webkit/releases/WebKitGTK/webkit-2.27.1/Source/JavaScriptCore/API/",target:"_blank",rel:"noopener noreferrer"}},[e._v("same interface"),a("OutboundLink")],1),e._v(".")]),e._m(12),e._m(13),a("p",[e._v("The above code snippet will download and bundle "),a("a",{attrs:{href:"https://www.npmjs.com/package/jsc-android/v/241213.1.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("jsc-android"),a("OutboundLink")],1),e._v(" of version "),a("code",[e._v("241213.1.0")]),e._v(". This is only for demonstration purpose, users always have the freedom of choosing JavaScript Interpreter in their APP.")]),e._m(14)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[this._v("#")]),this._v(" Introduction")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[this._v("#")]),this._v(" Version")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_0-28"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-28"}},[this._v("#")]),this._v(" 0.28")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),t("p",[this._v("The following three major change in 0.28 only affects Android developers.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"android"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android"}},[this._v("#")]),this._v(" Android")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"package-name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#package-name"}},[this._v("#")]),this._v(" Package name")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Due to the fact that Weex was a software of Alibaba Group (the mother company of Taobao Software Cooperation, ltd.) before donated to ASF (Apache Software Foundation),the Android package name of Weex was "),t("code",[this._v("com.taobao.weex")]),this._v(" before Weex 0.28.0 released.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Since Weex 0.28.0, the package name of Android(i.e. Java) files was changed to "),a("code",[e._v("org.apache.weex")]),e._v(", which may cause compiling failure if you try to upgrade from a older version. For backward-compatibility reasons, we provide an "),a("a",{attrs:{href:"#groupid-and-artifactid-in-jcenter"}},[e._v("artifact")]),e._v(" named "),a("code",[e._v("sdk_legacy")]),e._v(" where all files are still in the package name of "),a("code",[e._v("com.taobao.weex")]),e._v(". The legacy artifact may not be maintained in the future, please upgrade to the new package name when it's possible for you.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"groupid-and-artifactid-in-jcenter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#groupid-and-artifactid-in-jcenter"}},[this._v("#")]),this._v(" GroupId and artifactId in JCenter")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Due to the fact that Weex was a software of Alibaba Group (the mother company of Taobao Software Cooperation, ltd.) before donated to ASF (Apache Software Foundation),Weex Android was under "),t("code",[this._v("com.taobao.android:weex_sdk")]),this._v(" in JCenter before Weex 0.28.0 release.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("org.apache.weex:sdk")]),e._v(" is the currently stable package of Weex, where all Java files are under the package of "),a("code",[e._v("org.apache.weex")]),e._v(".")]),a("li",[a("code",[e._v("org.apache.weex:sdk_legacy")]),e._v(" is the legacy package of Weex, where all Java files are under the package of "),a("code",[e._v("com.taobao.weex")]),e._v(". This artifact may not be maintained in the future, please upgrade to the new package name when it's possible for you.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"javascript-interpreter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript-interpreter"}},[this._v("#")]),this._v(" JavaScript Interpreter")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This means users have to bundle a JavaScript Interpreter in their APP to run Weex. For users who don't have idea about how to choose JavaScript Interpreter, one can insert the following code snippet into the "),t("code",[this._v("build.gradle")]),this._v(" of the app:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("apply from: 'https://raw.githubusercontent.com/apache/incubator-weex/release/0.28/android/sdk/buildSrc/download_jsc.gradle'\n")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),a("ol",[a("li",[e._v("The "),a("strong",[e._v("JavaScriptCore Interpreter")]),e._v(" included above only supports armeabi-v7a, arm64-v8a, x86.")]),a("li",[e._v("The above script will copy "),a("strong",[e._v("JavaScriptCore Interpreter")]),e._v(" into "),a("code",[e._v("project.android.sourceSets.main.jniLibs")]),e._v(".")])]),a("p",[e._v("If there is any problems in your project when applying the script, please adjust it based on your condition.")])])}],!1,null,null,null);t.default=i.exports}}]);