(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{420:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("使用 "),s("a",{attrs:{href:"https://cocoapods.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CocoaPods"),s("OutboundLink")],1),t._v(" 或 "),s("a",{attrs:{href:"https://github.com/Carthage/Carthage",target:"_blank",rel:"noopener noreferrer"}},[t._v("Carthage"),s("OutboundLink")],1),t._v(" 可以方便地将 Weex 集成到自己的项目中。")]),t._m(1),t._m(2),s("p",[t._v("从 Cocoapods "),s("a",{attrs:{href:"https://cocoapods.org/pods/WeexSDK",target:"_blank",rel:"noopener noreferrer"}},[t._v("仓库"),s("OutboundLink")],1),t._v("中获取 WeexSDK 的最新版本。")]),s("p",[t._v("将 WeexSDK 添加到你的 Podfile 中。")]),t._m(3),t._m(4),t._m(5),s("p",[t._v("在工程中创建一个 Cartfile，"),s("a",{attrs:{href:"https://github.com/Carthage/Carthage#adding-frameworks-to-an-application",target:"_blank",rel:"noopener noreferrer"}},[t._v("Carthage 使用方法"),s("OutboundLink")],1),t._v("。")]),s("p",[t._v("添加 "),s("code",[t._v('github "apache/incubator-weex"')]),t._v(" 到 "),s("a",{attrs:{href:"https://github.com/Carthage/Carthage/blob/master/Documentation/Artifacts.md#cartfile",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("Cartfile")]),s("OutboundLink")],1)]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),s("p",[t._v("Weex 支持自定义组件、模块，可以参考以下两篇文档。")]),s("ul",[s("li",[s("router-link",{attrs:{to:"./../extend/extend-ios.html"}},[t._v("Extend iOS")])],1),s("li",[s("router-link",{attrs:{to:"./../extend/extend-ios-with-swift.html"}},[t._v("Extend iOS with swift")])],1)]),t._m(17),s("p",[t._v("当页面渲染完成后，屏幕再旋转，页面不会自动适配。所以，如果你的 App 允许屏幕旋转，务必在页面渲染前更新屏幕宽度。")]),t._m(18),s("p",[t._v("修改 view-port-width 的方法，会影响前端代码，通常不要设置，默认为 750px。")]),t._m(19),s("p",[t._v("监听 UIDeviceOrientationDidChangeNotification 通知，并调用下面方法修改屏幕尺寸（假设已经旋转完成，[UIScreen mainScreen].bounds.size.width 就是当前宽度）")]),t._m(20)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"集成-weex-到-ios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集成-weex-到-ios"}},[this._v("#")]),this._v(" 集成 Weex 到 iOS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_1-配置依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置依赖"}},[this._v("#")]),this._v(" 1. 配置依赖")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"使用-cocoapods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-cocoapods"}},[this._v("#")]),this._v(" 使用 CocoaPods")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("source "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'git@github.com:CocoaPods/Specs.git'")]),t._v("\ntarget "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YourTarget'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n    platform "),s("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":ios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8.0'")]),t._v("\n    pod "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WeexSDK'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.20.1'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("运行 "),e("code",[this._v("pod install")]),this._v(" 命令安装依赖。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"使用-carthage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-carthage"}},[this._v("#")]),this._v(" 使用 Carthage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("运行 "),e("code",[this._v("carthage update")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-初始化-weex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-初始化-weex"}},[this._v("#")]),this._v(" 2. 初始化 Weex")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("建议在 "),e("code",[this._v("didFinishLaunchingWithOptions")]),this._v(" 回调中初始化 Weex，你也可以在子线程中异步初始化，但需要确保渲染 Weex 页面前初始化已经全部完成。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('// App configuration\n[WXAppConfiguration setAppGroup:@"Your app group"];\n[WXAppConfiguration setAppName:@"Your app name"];\n[WXAppConfiguration setAppVersion:@"Your app version"];\n\n//Initialize WeexSDK\n[WXSDKEngine initSDKEnvironment];\n\n//Register custom modules and components, optional.\n[WXSDKEngine registerComponent:@"myview" withClass:[MyViewComponent class]];\n[WXSDKEngine registerModule:@"mymodule" withClass:[MyWeexModule class]];\n\n//Register the implementation of protocol, optional.\n[WXSDKEngine registerHandler:[WXAppNavigationImpl new] withProtocol:@protocol(WXNavigationProtocol)];\n\n//Set the log level, optional\n[WXLog setLogLevel: WXLogLevelWarning];\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3-创建一个-weex-实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建一个-weex-实例"}},[this._v("#")]),this._v(" 3. 创建一个 Weex 实例")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("你既可以在全页面中使用 Weex，也可以在一个 view 中渲染 Weex。只需要创建一个 Weex 实例并指定好回调方法，提供一个合法的 URL 就可以了。在 "),e("code",[this._v("onCreate")]),this._v(" 回调方法中将根 view 添加到你想显示内容的地方，并通过 "),e("code",[this._v("instance.frame =")]),this._v(" 来设置它的尺寸和位置。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('#import <WeexSDK/WXSDKInstance.h>\n\n- (void)viewDidLoad\n{\n    [super viewDidLoad];\n    _instance = [[WXSDKInstance alloc] init];\n    _instance.viewController = self;\n    _instance.frame = self.view.frame;\n    __weak typeof(self) weakSelf = self;\n    _instance.onCreate = ^(UIView *view) {\n        [weakSelf.weexView removeFromSuperview];\n        weakSelf.weexView = view;\n        [weakSelf.view addSubview:view];\n    };\n    _instance.onFailed = ^(NSError *error) {\n        //process failure, you could open an h5 web page instead or just show the error.\n    };\n    _instance.renderFinish = ^ (UIView *view) {\n        //process renderFinish\n    };\n    NSURL *url = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"js"];\n    [_instance renderWithURL:url options:@{@"bundleUrl":[self.url absoluteString]} data:nil];\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_4-销毁实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-销毁实例"}},[this._v("#")]),this._v(" 4. 销毁实例")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("必须"),e("strong",[this._v("显式地")]),this._v("销毁 Weex 实例，否则可能引起内存泄漏。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("[instance destroyInstance];\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_5-扩展-weex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-扩展-weex"}},[this._v("#")]),this._v(" 5. 扩展 Weex")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_6-在-ipad-中使用-weex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-在-ipad-中使用-weex"}},[this._v("#")]),this._v(" 6. 在 iPad 中使用 Weex")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("前端样式中指定的坐标在渲染时会根据 "),e("strong",[this._v("屏幕宽度")]),this._v(" 和 "),e("strong",[this._v("当前页面的 view-port-width")]),this._v(" 进行换算。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" meta "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meta'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    meta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setViewport")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1536")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("[WXCoreBridge setDeviceSize:[UIScreen mainScreen].bounds.size];\n")])])])}],!1,null,null,null);e.default=n.exports}}]);