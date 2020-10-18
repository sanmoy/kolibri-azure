!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=3)}([function(module,exports){module.exports=kolibriCoreAppGlobal},function(module,exports){module.exports=kolibriCoreAppGlobal.utils.coreBannerContent},function(module,exports){module.exports=kolibriCoreAppGlobal.urls},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var external_kolibriCoreAppGlobal_utils_coreBannerContent_=__webpack_require__(1),external_kolibriCoreAppGlobal_utils_coreBannerContent_default=__webpack_require__.n(external_kolibriCoreAppGlobal_utils_coreBannerContent_);var urls,DemoServerBannerContent=function(scriptExports,render,staticRenderFns,functionalTemplate,injectStyles,scopeId,moduleIdentifier,shadowMode){var hook,options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(render&&(options.render=render,options.staticRenderFns=staticRenderFns,options._compiled=!0),functionalTemplate&&(options.functional=!0),scopeId&&(options._scopeId="data-v-"+scopeId),moduleIdentifier?(hook=function(context){(context=context||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(context=__VUE_SSR_CONTEXT__),injectStyles&&injectStyles.call(this,context),context&&context._registeredComponents&&context._registeredComponents.add(moduleIdentifier)},options._ssrRegister=hook):injectStyles&&(hook=shadowMode?function(){injectStyles.call(this,(options.functional?this.parent:this).$root.$options.shadowRoot)}:injectStyles),hook)if(options.functional){options._injectStyles=hook;var originalRender=options.render;options.render=function(h,context){return hook.call(context),originalRender(h,context)}}else{var existing=options.beforeCreate;options.beforeCreate=existing?[].concat(existing,hook):[hook]}return{exports:scriptExports,options:options}}({name:"DemoServerBannerContent",props:{bannerClosed:{required:!0,type:Boolean,default:!1}},$trs:{demoServerHeader:"Welcome to the Kolibri demo site",demoServerP1:"Explore any of the three primary user types:",demoServerL1:"Learner ({user}/{pass} or access as a guest)",demoServerL2:"Coach ({user}/{pass})",demoServerL3:"Admin ({user}/{pass})",demoServerP2:"This online version of Kolibri is intended for demonstration purposes only. Users and data will be periodically deleted. The demo shows features of the latest Kolibri version, and all resources found are samples.",demoServerP3:"To learn more about using Kolibri in an offline context and better understand the platform:",demoServerA1:"Read the documentation",demoServerA2:"Download and install the latest release"}},(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _vm.bannerClosed?_c("h1",[_vm._v("\n  "+_vm._s(_vm.$tr("demoServerHeader"))+"\n")]):_c("div",[_c("h1",[_vm._v(_vm._s(_vm.$tr("demoServerHeader")))]),_c("p",[_vm._v(_vm._s(_vm.$tr("demoServerP1")))]),_c("ul",[_c("li",[_vm._v(_vm._s(_vm.$tr("demoServerL1",{user:"learnerdemo",pass:"pass"})))]),_c("li",[_vm._v(_vm._s(_vm.$tr("demoServerL2",{user:"coachdemo",pass:"pass"})))]),_c("li",[_vm._v(_vm._s(_vm.$tr("demoServerL3",{user:"admindemo",pass:"pass"})))])]),_c("p",[_vm._v(_vm._s(_vm.$tr("demoServerP2")))]),_c("p",[_vm._v(_vm._s(_vm.$tr("demoServerP3")))]),_c("ul",[_c("li",[_c("KExternalLink",{attrs:{href:"https://learningequality.org/documentation/",text:_vm.$tr("demoServerA1"),target:"_blank"}})],1),_c("li",[_c("KExternalLink",{attrs:{href:"https://learningequality.org/download/",text:_vm.$tr("demoServerA2"),target:"_blank"}})],1)])])}),[],!1,null,"29ae0ea8",null).exports,external_kolibriCoreAppGlobal_=__webpack_require__(0),external_kolibriCoreAppGlobal_default=__webpack_require__.n(external_kolibriCoreAppGlobal_),external_kolibriCoreAppGlobal_urls_=__webpack_require__(2);urls=__webpack_require__.n(external_kolibriCoreAppGlobal_urls_).a,__webpack_require__.p=urls.static("kolibri.plugins.demo_server.main/");var kolibri_module_KolibriModule=function(options){for(var ref,args=[],len=arguments.length-1;len-- >0;)args[len]=arguments[len+1];this.name="kolibri.plugins.demo_server.main";var safeOptions={};this.kolibriModuleOptions.forEach((function(option){options[option]&&(safeOptions[option]=options[option])})),Object.assign(this,safeOptions),(ref=this).initialize.apply(ref,[options].concat(args)),this._registerKolibriModule()},prototypeAccessors={kolibriModuleOptions:{configurable:!0},Kolibri:{configurable:!0}};prototypeAccessors.kolibriModuleOptions.get=function(){return[]},kolibri_module_KolibriModule.prototype._registerKolibriModule=function(){external_kolibriCoreAppGlobal_default.a.registerKolibriModuleSync(this)},kolibri_module_KolibriModule.prototype.initialize=function(){},kolibri_module_KolibriModule.prototype.ready=function(){},kolibri_module_KolibriModule.prototype.stopListening=function(event,method){external_kolibriCoreAppGlobal_default.a.stopListening(event,this,method)},kolibri_module_KolibriModule.prototype.emit=function(){for(var args=[],len=arguments.length;len--;)args[len]=arguments[len];external_kolibriCoreAppGlobal_default.a.emit.apply(external_kolibriCoreAppGlobal_default.a,args)},prototypeAccessors.Kolibri.get=function(){return external_kolibriCoreAppGlobal_default.a},Object.defineProperties(kolibri_module_KolibriModule.prototype,prototypeAccessors);var module_DemoServerModule=function(KolibriModule){function DemoServerModule(){KolibriModule.apply(this,arguments)}return KolibriModule&&(DemoServerModule.__proto__=KolibriModule),DemoServerModule.prototype=Object.create(KolibriModule&&KolibriModule.prototype),DemoServerModule.prototype.constructor=DemoServerModule,DemoServerModule.prototype.ready=function(){external_kolibriCoreAppGlobal_utils_coreBannerContent_default.a.register(DemoServerBannerContent)},DemoServerModule}(kolibri_module_KolibriModule);__webpack_exports__.default=new module_DemoServerModule}]);
//# sourceMappingURL=kolibri.plugins.demo_server.main-0.14.3.js.map