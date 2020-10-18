!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=8)}([function(module,exports){module.exports=kolibriCoreAppGlobal},function(module,exports,__webpack_require__){},function(module,exports){module.exports=kolibriCoreAppGlobal.utils.serverClock},function(module,exports){module.exports=kolibriCoreAppGlobal.coreVue.components.CoreFullscreen},function(module,__webpack_exports__,__webpack_require__){"use strict";(function(global){__webpack_exports__.a=(global.kolibriPluginDataGlobal||{})["kolibri.plugins.html5_viewer.main"]||{}}).call(this,__webpack_require__(6))},function(module,exports){module.exports=kolibriCoreAppGlobal.urls},function(module,exports){var g;g=function(){return this}();try{g=g||new Function("return this")()}catch(e){"object"==typeof window&&(g=window)}module.exports=g},function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_4_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_svg_icon_inline_loader_index_js_Html5AppRendererIndex_vue_vue_type_style_index_0_id_3448014e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1);__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_4_2_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_svg_icon_inline_loader_index_js_Html5AppRendererIndex_vue_vue_type_style_index_0_id_3448014e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__).a},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return hTML5AppModule}));var external_kolibriCoreAppGlobal_utils_serverClock_=__webpack_require__(2),external_kolibriCoreAppGlobal_coreVue_components_CoreFullscreen_=__webpack_require__(3),external_kolibriCoreAppGlobal_coreVue_components_CoreFullscreen_default=__webpack_require__.n(external_kolibriCoreAppGlobal_coreVue_components_CoreFullscreen_),Mediator=function(remote){this.local=window,this.remote=remote,this.local.addEventListener("message",this.handleMessage.bind(this)),this.__messageHandlers={}};Mediator.prototype.handleMessage=function(ev){var ref=ev.data,nameSpace=ref.nameSpace,event=ref.event,data=ref.data;void 0!==nameSpace&&void 0!==event&&this.__messageHandlers[nameSpace]&&this.__messageHandlers[nameSpace][event]&&this.__messageHandlers[nameSpace][event].forEach((function(callback){try{callback(data)}catch(e){console.debug("Error while executing callback for "+nameSpace+" for event "+event),console.debug(e)}}))},Mediator.prototype.sendLocalMessage=function(ref){void 0===ref&&(ref={});var message={event:ref.event,data:ref.data,nameSpace:ref.nameSpace};this.local.postMessage(message,"*")},Mediator.prototype.sendMessage=function(ref){var message={event:ref.event,data:ref.data,nameSpace:ref.nameSpace};this.remote.postMessage(message,"*")},Mediator.prototype.registerMessageHandler=function(ref){void 0===ref&&(ref={});var event=ref.event,nameSpace=ref.nameSpace,callback=ref.callback;"function"==typeof callback&&void 0!==event&&void 0!==nameSpace&&(this.__messageHandlers[nameSpace]||(this.__messageHandlers[nameSpace]={}),this.__messageHandlers[nameSpace][event]||(this.__messageHandlers[nameSpace][event]=[]),this.__messageHandlers[nameSpace][event].push(callback))},Mediator.prototype.removeMessageHandler=function(ref){void 0===ref&&(ref={});var event=ref.event,nameSpace=ref.nameSpace,callback=ref.callback;if(this.__messageHandlers[nameSpace]&&this.__messageHandlers[nameSpace][event]){if(callback){var index=this.__messageHandlers[nameSpace][event].indexOf(callback);if(index>-1)return this.__messageHandlers[nameSpace][event].splice(index,1)}this.__messageHandlers[nameSpace][event]=[]}};var src_mediator=Mediator,events={READYCHECK:"readycheck",READY:"ready",STATEUPDATE:"stateupdate",USERDATAUPDATE:"userdataupdate"},baseShim_BaseShim=function(mediator){this.__mediator=mediator,this.events=Object.assign({},events)};baseShim_BaseShim.prototype.setData=function(data){this.__setData(data),this.stateUpdated()},baseShim_BaseShim.prototype.setUserData=function(data){this.__setUserData&&(this.__setUserData(data),this.userDataUpdated())},baseShim_BaseShim.prototype.sendMessage=function(event,data){this.__mediator.sendMessage({nameSpace:this.nameSpace,event:event,data:data})},baseShim_BaseShim.prototype.on=function(event,callback){if(!Object.values(this.events).includes(event))throw ReferenceError(event+" is not a valid event name for "+this.nameSpace);this.__mediator.registerMessageHandler({nameSpace:this.nameSpace,event:event,callback:callback})},baseShim_BaseShim.prototype.off=function(event,callback){if(!Object.values(this.events).includes(event))throw ReferenceError(event+" is not a valid event name for "+this.nameSpace);this.__mediator.removeMessageHandler({nameSpace:this.nameSpace,event:event,callback:callback})},baseShim_BaseShim.prototype.stateUpdated=function(){this.sendMessage(this.events.STATEUPDATE,this.data)},baseShim_BaseShim.prototype.userDataUpdated=function(){this.sendMessage(this.events.USERDATAUPDATE,this.userData)};var baseShim=baseShim_BaseShim,internalKeys=["length","key","getItem","setItem","removeItem","clear"],localStorage=function(BaseStorage){function LocalStorage(mediator){BaseStorage.call(this,mediator),this.nameSpace="localStorage",this.__setData=this.__setData.bind(this),this.on(this.events.STATEUPDATE,this.__setData)}return BaseStorage&&(LocalStorage.__proto__=BaseStorage),LocalStorage.prototype=Object.create(BaseStorage&&BaseStorage.prototype),LocalStorage.prototype.constructor=LocalStorage,LocalStorage}(function(BaseShim){function BaseStorage(mediator){BaseShim.call(this,mediator),this.data={}}return BaseShim&&(BaseStorage.__proto__=BaseShim),BaseStorage.prototype=Object.create(BaseShim&&BaseShim.prototype),BaseStorage.prototype.constructor=BaseStorage,BaseStorage.prototype.__setData=function(data){void 0===data&&(data={}),this.data=data,this.setDataToShim()},BaseStorage.prototype.setDataFromShim=function(){var this$1=this,updatedData=Object.assign({},this.data),updated=!1,shimKeys=Object.keys(this.shim);shimKeys.forEach((function(key){if(!internalKeys.includes(key)){var value=String(this$1.shim[key]);this$1.data[key]!==value&&(updatedData[key]=value,updated=!0)}})),Object.keys(this.data).forEach((function(key){shimKeys.includes(key)||internalKeys.includes(key)||(delete updatedData[key],updated=!0)})),updated&&(this.__setData(updatedData),this.stateUpdated())},BaseStorage.prototype.setDataToShim=function(){var this$1=this;this.shim&&(Object.assign.apply(Object,[this.shim].concat(Object.entries(this.data).filter((function(entry){return!internalKeys.includes(entry[0])})).map((function(entry){var obj;return(obj={})[entry[0]]=entry[1],obj})))),Object.keys(this.shim).forEach((function(prop){this$1.data[prop]||delete this$1.shim[prop]})))},BaseStorage.prototype.iframeInitialize=function(){this.__setShimInterface(),Object.defineProperty(window,this.nameSpace,{value:this.shim,configurable:!0})},BaseStorage.prototype.__setShimInterface=function(){var self=this,Shim=function(){},prototypeAccessors={length:{configurable:!0}};return prototypeAccessors.length.get=function(){return self.setDataFromShim(),Object.keys(self.data).length},Shim.prototype.key=function(index){return self.setDataFromShim(),Object.keys(self.data)[index]||null},Shim.prototype.getItem=function(keyName){return self.setDataFromShim(),self.data[keyName]||null},Shim.prototype.setItem=function(keyName,value){value=String(value),self.data[keyName]=value,internalKeys.includes(keyName)||(this[keyName]=value),self.stateUpdated()},Shim.prototype.removeItem=function(keyName){delete self.data[keyName],internalKeys.includes(keyName)||delete this[keyName],self.stateUpdated()},Shim.prototype.clear=function(){self.data={},self.stateUpdated()},Object.defineProperties(Shim.prototype,prototypeAccessors),this.shim=new Shim,this.setDataToShim(),this.shim},BaseStorage}(baseShim)),cookie=function(BaseShim){function Cookie(mediator){BaseShim.call(this,mediator),Object.assign(this.events,{NOW:"now"}),this.nameSpace="cookie",this.__clearData(),this.__nowDiff=0,this.__setData=this.__setData.bind(this),this.__setNowDiff=this.__setNowDiff.bind(this),this.__getCookies=this.__getCookies.bind(this),this.__setItem=this.__setItem.bind(this),this.on(this.events.STATEUPDATE,this.__setData),this.on(this.events.NOW,this.__setNowDiff)}BaseShim&&(Cookie.__proto__=BaseShim),Cookie.prototype=Object.create(BaseShim&&BaseShim.prototype),Cookie.prototype.constructor=Cookie;var prototypeAccessors={data:{configurable:!0}};return Cookie.prototype.__clearData=function(){this.__data=Object.assign({},{rootCookies:{},byPath:{}})},Cookie.prototype.__removeExpiredCookies=function(data){var this$1=this,output={rootCookies:{},byPath:{}},filterCookies=function(sourceObj){var out={};return Object.keys(sourceObj).forEach((function(key){new Date(sourceObj[key].expires)>this$1.__now()&&(out[key]=sourceObj[key])})),out};return output.rootCookies=filterCookies(data.rootCookies),Object.keys(data.byPath).forEach((function(path){var filtered=filterCookies(data.byPath[path]);Object.keys(filtered).length&&(output.byPath[path]=filtered)})),output},Cookie.prototype.__setData=function(data){data&&data.rootCookies&&data.byPath?this.__data=this.__removeExpiredCookies(data):this.__clearData()},Cookie.prototype.iframeInitialize=function(){Object.defineProperty(document,this.nameSpace,{get:this.__getCookies,set:this.__setItem,configurable:!0})},prototypeAccessors.data.get=function(){var this$1=this,data={rootCookies:{},byPath:{}};function filterCookies(sourceObj){var output={};return Object.keys(sourceObj).forEach((function(key){"session"!==sourceObj[key].expires&&(output[key]=sourceObj[key])})),output}return data.rootCookies=filterCookies(this.__data.rootCookies),Object.keys(this.__data.byPath).forEach((function(path){var filtered=filterCookies(this$1.__data.byPath[path]);Object.keys(filtered).length&&(data.byPath[path]=filtered)})),this.__removeExpiredCookies(data)},Cookie.prototype.__now=function(){return new Date(Date.now()+this.__nowDiff)},Cookie.prototype.__setNowDiff=function(nowDiff){this.__nowDiff=nowDiff},Cookie.prototype.setNow=function(now){this.__setNowDiff(new Date(now).getTime()-Date.now()),this.sendMessage(this.events.NOW,this.__nowDiff)},Cookie.prototype.__getCookies=function(){var data=Object.assign({},this.__data.rootCookies),pathname=window.location.pathname;return this.__data.byPath[pathname]&&Object.assign(data,this.__data.byPath[pathname]),Object.keys(data).map((function(key){return key+"="+data[key].value})).join("; ")},Cookie.prototype.__setItem=function(valueString){var this$1=this;void 0===valueString&&(valueString="");var parts=valueString.split(";");if(parts[0]){var path,ref=parts[0].split("="),key=ref[0],store={value:ref[1],expires:"session"},deleteCookie=!1,pathRegex=/path=(.+)/,maxAgeRegex=/max-age=(.+)/,expiresRegex=/expires=(.+)/;parts.slice(1).forEach((function(part){try{var pathResult=pathRegex.exec(part),maxAgeResult=maxAgeRegex.exec(part),expiresResult=expiresRegex.exec(part);if(pathResult)path=pathResult[1];else if(maxAgeResult){var maxAge=Number(maxAgeResult[1]);if(isNaN(maxAge))return;maxAge>0?store.expires=new Date(this$1.__now().getTime()+maxAge):deleteCookie=!0}else if(expiresResult){var expirationDate=new Date(expiresResult[1]);if(isNaN(expirationDate))return;expirationDate<=Date.now()?deleteCookie=!0:store.expires=new Date(this$1.__now().getTime()+(expirationDate.getTime()-Date.now()))}}catch(e){}})),deleteCookie?this.__removeItem(key,path):path?(this.__data.byPath[path]||(this.__data.byPath[path]={}),this.__data.byPath[path][key]=store):this.__data.rootCookies[key]=store,this.stateUpdated()}},Cookie.prototype.__removeItem=function(key,path){path?this.__data.byPath[path]&&(delete this.__data.byPath[path][key],Object.keys(this.__data.byPath[path]).length||delete this.__data.byPath[path]):delete this.__data.rootCookies[key],this.stateUpdated()},Object.defineProperties(Cookie.prototype,prototypeAccessors),Cookie}(baseShim),logger=console,ERRORS_NO_ERROR=0,ERRORS_INVALID_ARGUMENT_ERROR=201,ERRORS_ELEMENT_CANNOT_HAVE_CHILDREN=202,ERRORS_ELEMENT_NOT_AN_ARRAY=203,ERRORS_NOT_IMPLEMENTED_ERROR=401,ERRORS_ELEMENT_IS_KEYWORD=402,ERRORS_ELEMENT_IS_READ_ONLY=403,ERRORS_ELEMENT_IS_WRITE_ONLY=404,ERRORS_INCORRECT_DATA_TYPE=405,READ_WRITE_RO="RO",READ_WRITE_RW="RW",READ_WRITE_WO="WO",CMIDecimal={validate:function(value){return!isNaN(value)}},timeSpanRegex=/(?:([0-9]{4}|[0-9]{2}):)?(?:([0-5][0-9]):)?([0-5][0-9](?:\.[0-9]{1,2})?)/,CMITimeSpan={validate:function(value){return timeSpanRegex.test(value)},convertFromSeconds:function(seconds){var format=function(value){return value<10?"0"+value:value},s=Math.round(seconds%60*100)/100,m=Math.floor(seconds%3600/60),h=Math.floor(seconds/3600);return h>=1e4?"":format(h)+":"+format(m)+":"+format(s)}},timeRegex=/((?:[0-1][0-9]|2[0-3])):([0-5][0-9]):([0-5][0-9](?:\.[0-9]{1,2})?)/;function isStringLike(value){return String(value)==value}var CMIString255={validate:function(value){return isStringLike(value)&&String(value).length<=255}},CMIString4096={validate:function(value){return isStringLike(value)&&String(value).length<=4096}},CMIIdentifier={validate:function(value){return CMIString255.validate(value)&&!/\s/.test(value)}},lowerCaseLetterNumber=/[0-9a-z]/;function singleLowerCaseLetterNumber(s){return 1===s.length&&lowerCaseLetterNumber.test(s)}var trueFalse=/[01tf]/,CMIFeedback={validate:function(value,obj){if(""===value)return!0;if(!isStringLike(value))return!1;if(value=String(value),"true-false"===obj.type)return trueFalse.test(value)&&1===value.length;if("choice"===obj.type){if("{"===value[0]){if("}"!==value[value.length-1])return!1;value=value.substring(1,value.length-1)}return value.split(",").every(singleLowerCaseLetterNumber)}if("fill-in"===obj.type||"performance"===obj.type)return value.length<=255;if("numeric"===obj.type)return CMIDecimal.validate(value);if("likert"===obj.type)return singleLowerCaseLetterNumber(value);if("matching"===obj.type){if("{"===value[0]){if("}"!==value[value.length-1])return!1;value=value.substring(1,value.length-1)}return value.split(",").every((function(s){return 3===s.length&&s.split(".").every(singleLowerCaseLetterNumber)}))}return"sequencing"!==obj.type||value.split(",").every(singleLowerCaseLetterNumber)}},SCORE_SCHEMA={hasChildren:!0,raw:{type:CMIDecimal,readWrite:READ_WRITE_RW},min:{type:CMIDecimal,readWrite:READ_WRITE_RW},max:{type:CMIDecimal,readWrite:READ_WRITE_RW}},STATUS_SCHEMA={readWrite:READ_WRITE_RW,values:{passed:"passed",completed:"completed",failed:"failed",incomplete:"incomplete",browsed:"browsed","not attempted":"not attempted","":""}},SCHEMA={cmi:{hasChildren:!0,core:{hasChildren:!0,student_id:{type:CMIIdentifier,fromUserData:function(userData){return userData.userId||""},readWrite:READ_WRITE_RO},student_name:{type:CMIString255,fromUserData:function(userData){return userData.userFullName||""},readWrite:READ_WRITE_RO},lesson_location:{type:CMIString255,readWrite:READ_WRITE_RW},credit:{fromUserData:function(userData){return userData.userId?"credit":"no-credit"},readWrite:READ_WRITE_RO},lesson_status:STATUS_SCHEMA,entry:{fromUserData:function(userData){return userData.progress?userData.progress<1?"resume":"":"ab-initio"},readWrite:READ_WRITE_RO},score:SCORE_SCHEMA,total_time:{type:CMITimeSpan,fromUserData:function(userData){return CMITimeSpan.convertFromSeconds(userData.timeSpent?userData.timeSpent:0)},readWrite:READ_WRITE_RO},lesson_mode:{fromUserData:function(userData){return userData.userId?userData.complete?"review":"normal":"browse"},readWrite:READ_WRITE_RO},exit:{readWrite:READ_WRITE_WO,values:{"time-out":"time-out",suspend:"suspend",logout:"logout","":""}},session_time:{type:CMITimeSpan,readWrite:READ_WRITE_WO}},launch_data:{type:CMIString4096,readWrite:READ_WRITE_RO},comments:{type:CMIString4096,readWrite:READ_WRITE_RW},comments_from_lms:{type:CMIString4096,readWrite:READ_WRITE_RO},objectives:{hasChildren:!0,arraySchema:{id:{type:CMIIdentifier,readWrite:READ_WRITE_RW},score:SCORE_SCHEMA,status:STATUS_SCHEMA}},student_data:{hasChildren:!0,mastery_score:{notImplemented:!0,readWrite:READ_WRITE_RO},max_time_allowed:{notImplemented:!0,readWrite:READ_WRITE_RO},time_limit_action:{notImplemented:!0,readWrite:READ_WRITE_RO}},student_preference:{hasChildren:!0,language:{type:CMIString255,fromUserData:function(userData){return userData.language?userData.language:""},readWrite:READ_WRITE_RW},audio:{notImplemented:!0,readWrite:READ_WRITE_RW},speed:{notImplemented:!0,readWrite:READ_WRITE_RW},text:{notImplemented:!0,readWrite:READ_WRITE_RW}},interactions:{hasChildren:!0,arraySchema:{id:{type:CMIIdentifier,readWrite:READ_WRITE_RW},objectives:{arraySchema:{id:{type:CMIIdentifier,readWrite:READ_WRITE_WO}}},time:{type:{validate:function(value){return timeRegex.test(value)}},readWrite:READ_WRITE_WO},type:{readWrite:READ_WRITE_WO,values:{"true-false":"true-false",choice:"choice","fill-in":"fill-in",matching:"matching",performance:"performance",sequencing:"sequencing",likert:"likert",numeric:"numeric","":""}},correct_responses:{arraySchema:{pattern:{readWrite:READ_WRITE_WO}}},weighting:{type:CMIDecimal,readWrite:READ_WRITE_WO},student_response:{type:CMIFeedback,readWrite:READ_WRITE_WO},result:{readWrite:READ_WRITE_WO,validate:function(value){return CMIDecimal.validate(value)||{correct:"correct",wrong:"wrong",unanticipated:"unanticipated",neutral:"neutral","":""}[value]}},latency:{readWrite:READ_WRITE_WO,type:CMITimeSpan}}},suspend_data:{type:CMIString4096,readWrite:READ_WRITE_RW}}};function throwError(errorCode){var error=TypeError(errorCode);throw error.name="SCORMError",error}function getByKeyPath(obj,keyPath,localSchema,userData){if(keyPath&&localSchema&&"string"==typeof keyPath||throwError(ERRORS_INVALID_ARGUMENT_ERROR),localSchema[keyPath]&&localSchema[keyPath].readWrite===READ_WRITE_WO&&throwError(ERRORS_ELEMENT_IS_WRITE_ONLY),localSchema[keyPath]&&localSchema[keyPath].fromUserData)return localSchema[keyPath].fromUserData(userData);if(obj&&Object.prototype.hasOwnProperty.call(obj,keyPath))return obj[keyPath];var period=keyPath.indexOf(".");if(-1!==period){var leadingKeyPath=keyPath.substr(0,period),innerObj=obj?obj[leadingKeyPath]:obj,innerKeyPath=keyPath.substr(period+1),innerSchema=localSchema[leadingKeyPath];if(innerSchema&&innerSchema.arraySchema?innerSchema=innerSchema.arraySchema:isNaN(leadingKeyPath)||(innerSchema=localSchema),"_count"===innerKeyPath){if(localSchema[leadingKeyPath]&&localSchema[leadingKeyPath].arraySchema)return Array.isArray(innerObj)?innerObj.length:0;throwError(ERRORS_ELEMENT_NOT_AN_ARRAY)}if("_children"===innerKeyPath){if(localSchema[leadingKeyPath]&&localSchema[leadingKeyPath].hasChildren)return Object.keys(innerSchema).filter((function(key){return"hasChildren"!==key&&!innerSchema[key].notImplemented})).join(",");throwError(ERRORS_ELEMENT_CANNOT_HAVE_CHILDREN)}return getByKeyPath(innerObj,innerKeyPath,innerSchema,userData)}if(localSchema[keyPath]&&!localSchema[keyPath].notImplemented)return"";localSchema[keyPath]&&localSchema[keyPath].notImplemented&&throwError(ERRORS_NOT_IMPLEMENTED_ERROR),throwError(ERRORS_INVALID_ARGUMENT_ERROR)}var statusProgressMap={passed:1,failed:.5,browsed:.5,"not attempted":0,incomplete:.5},src_SCORM=function(BaseShim){function SCORM(mediator){BaseShim.call(this,mediator),this.data={},this.userData={},this.nameSpace="SCORM",this.__setData=this.__setData.bind(this),this.__setUserData=this.__setUserData.bind(this),this.on(this.events.STATEUPDATE,this.__setData),this.on(this.events.USERDATAUPDATE,this.__setUserData)}return BaseShim&&(SCORM.__proto__=BaseShim),SCORM.prototype=Object.create(BaseShim&&BaseShim.prototype),SCORM.prototype.constructor=SCORM,SCORM.prototype.__setData=function(data){void 0===data&&(data={}),this.data=data},SCORM.prototype.__setUserData=function(userData){void 0===userData&&(userData={}),this.userData=userData},SCORM.prototype.__calculateProgress=function(){var score=getByKeyPath(this.data,"cmi.core.score",SCHEMA,self.userData);if(score){var min=Number(isNaN(score.min)?0:score.min),max=Number(isNaN(score.max)?100:score.max),raw=Number(isNaN(score.raw)?min:score.raw);return Math.max(Math.min((raw-min)/(max-min),1),0)}var lessonStatus=getByKeyPath(this.data,"cmi.core.lesson_status",SCHEMA,self.userData);return Object.prototype.hasOwnProperty.call(statusProgressMap,lessonStatus)?statusProgressMap[lessonStatus]:null},SCORM.prototype.iframeInitialize=function(){this.__setShimInterface();try{window.parent.API=this.shim}catch(e){if(e instanceof DOMException)return void logger.warn("Tried to setup the SCORM API in a sandboxed environment, it will not be enabled");throw e}},SCORM.prototype.__setShimInterface=function(){var self=this,error=ERRORS_NO_ERROR,Shim=function(){};return Shim.prototype.LMSInitialize=function(){return logger.debug("LMS Initialize called"),self.stateUpdated(),"true"},Shim.prototype.LMSFinish=function(){return logger.debug("LMS Finish called"),"true"},Shim.prototype.LMSSetValue=function(CMIElement,value){error=ERRORS_NO_ERROR,logger.debug("LMSSetValue called with path: "+CMIElement+" and value "+value);try{!function setByKeyPath(obj,keyPath,value,localSchema){keyPath&&localSchema&&"string"==typeof keyPath||throwError(ERRORS_INVALID_ARGUMENT_ERROR);var period=keyPath.indexOf(".");if(-1!==period){var leadingKeyPath=keyPath.substr(0,period),innerKeyPath=keyPath.substr(period+1),innerSchema=localSchema[leadingKeyPath];innerSchema&&innerSchema.arraySchema?(innerSchema=innerSchema.arraySchema,obj[leadingKeyPath]=obj[leadingKeyPath]||[]):isNaN(leadingKeyPath)||(innerSchema=localSchema),"_count"!==innerKeyPath&&"_children"!==innerKeyPath||throwError(ERRORS_ELEMENT_IS_KEYWORD),obj[leadingKeyPath]=obj[leadingKeyPath]||{},setByKeyPath(obj[leadingKeyPath],innerKeyPath,value,innerSchema)}else{var innerSchema$1=localSchema[keyPath];innerSchema$1&&innerSchema$1.readWrite===READ_WRITE_RO&&throwError(ERRORS_ELEMENT_IS_READ_ONLY),innerSchema$1&&innerSchema$1.notImplemented&&throwError(ERRORS_NOT_IMPLEMENTED_ERROR),innerSchema$1||throwError(ERRORS_INVALID_ARGUMENT_ERROR),(innerSchema$1.type&&!innerSchema$1.type.validate(value,obj)||innerSchema$1.validate&&!innerSchema$1.validate(value,obj)||innerSchema$1.values&&!innerSchema$1.values[value]||!innerSchema$1.type&&!isStringLike(value))&&throwError(ERRORS_INCORRECT_DATA_TYPE),obj[keyPath]=value}}(self.data,CMIElement,value,SCHEMA)}catch(e){if(e instanceof TypeError&&"SCORMError"===e.name)return error=e.message,"false";throw e}return self.stateUpdated(),"true"},Shim.prototype.LMSGetValue=function(CMIElement){error=ERRORS_NO_ERROR,logger.debug("LMSGetValue called with path: "+CMIElement);try{return getByKeyPath(self.data,CMIElement,SCHEMA,self.userData)}catch(e){if(e instanceof TypeError&&"SCORMError"===e.name)return error=e.message,"";throw e}},Shim.prototype.LMSCommit=function(){return error=ERRORS_NO_ERROR,logger.debug("LMS Commit called"),"true"},Shim.prototype.LMSGetLastError=function(){return error},Shim.prototype.LMSGetErrorString=function(errorCode){return logger.debug("LMS Get Error String called with code "+errorCode),""},Shim.prototype.LMSGetDiagnostic=function(errorCode){return logger.debug("LMS Get Diagnostic called with code "+errorCode),""},this.shim=new Shim,this.shim},SCORM}(baseShim),mainClient_MainClient=function(ref){void 0===ref&&(ref={});var iframe=ref.iframe,now=ref.now;if(this.events=events,this.iframe=iframe,"hashi"!==this.iframe.name)throw ReferenceError("Iframe passed to Hashi must have been initialized with name attribute hashi");this.mediator=new src_mediator(this.iframe.contentWindow),this.storage={localStorage:new localStorage(this.mediator),cookie:new cookie(this.mediator),SCORM:new src_SCORM(this.mediator)},this.now=now,this.__setData=this.__setData.bind(this)},mainClient_prototypeAccessors={data:{configurable:!0}};mainClient_MainClient.prototype.initialize=function(contentState,userData){var this$1=this;this.__setData(contentState,userData),this.__setListeners(),this.on(this.events.READY,(function(){this$1.__setData(this$1.data,this$1.userData),this$1.mediator.sendMessage({nameSpace:"hashi",event:events.READY,data:!0})})),this.mediator.sendMessage({nameSpace:"hashi",event:events.READYCHECK,data:!0})},mainClient_MainClient.prototype.updateData=function(ref){var this$1=this,contentState=ref.contentState,userData=ref.userData;userData&&(userData=JSON.parse(JSON.stringify(userData)),this.userData=userData),contentState&&(contentState=JSON.parse(JSON.stringify(contentState))),Object.keys(this.storage).forEach((function(key){var storage=this$1.storage[key];contentState&&contentState[storage.nameSpace]&&storage.setData(contentState[storage.nameSpace]),userData&&storage.setUserData(userData)}))},mainClient_MainClient.prototype.getProgress=function(){return this.storage.SCORM.__calculateProgress()},mainClient_MainClient.prototype.__setData=function(contentState,userData){this.updateData({contentState:contentState,userData:userData}),this.now&&this.storage.cookie.setNow(this.now())},mainClient_MainClient.prototype.__setListeners=function(){var this$1=this;Object.keys(this.storage).forEach((function(key){this$1.storage[key].on(events.STATEUPDATE,(function(){this$1.mediator.sendLocalMessage({nameSpace:"hashi",event:events.STATEUPDATE,data:this$1.data})}))}))},mainClient_prototypeAccessors.data.get=function(){var this$1=this,data={};return Object.keys(this.storage).forEach((function(key){var storage=this$1.storage[key];data[storage.nameSpace]=JSON.parse(JSON.stringify(storage.data))})),data},mainClient_MainClient.prototype.on=function(event,callback){if(!Object.values(events).includes(event))throw ReferenceError(event+" is not a valid event name for hashi");this.mediator.registerMessageHandler({nameSpace:"hashi",event:event,callback:callback})},mainClient_MainClient.prototype.onStateUpdate=function(callback){this.on(events.STATEUPDATE,callback)},mainClient_MainClient.prototype.onProgressUpdate=function(callback){this.on(events.PROGRESSUPDATE,callback)},Object.defineProperties(mainClient_MainClient.prototype,mainClient_prototypeAccessors);var mainClient=mainClient_MainClient,plugin_data_src=__webpack_require__(4),iOSTest=/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,IE11Test=/(trident).+rv[:\s]([\w.]+).+like\sgecko/i,views_Html5AppRendererIndexvue_type_script_lang_js_={name:"Html5AppRendererIndex",components:{CoreFullscreen:external_kolibriCoreAppGlobal_coreVue_components_CoreFullscreen_default.a},data:function(){return{isInFullscreen:!1}},computed:{name:function(){return"hashi"},rooturl:function(){var iOSorIE11=iOSTest.test(navigator.userAgent)||IE11Test.test(navigator.userAgent);return this.defaultFile.storage_url+(iOSorIE11?"?SKIP_HASHI=true":"")},iframeHeight:function(){return this.options&&this.options.height||"500px"},iframeWidth:function(){return this.options&&this.options.width||"auto"},contentRendererHeight:function(){return x=this.iframeHeight,y="37px",parseInt(x,10)+parseInt(y,10)+"px";var x,y},sandbox:function(){return plugin_data_src.a.html5_sandbox_tokens},fullscreenText:function(){return this.isInFullscreen?this.$tr("exitFullscreen"):this.$tr("enterFullscreen")},userData:function(){return{userId:this.userId,userFullName:this.userFullName,progress:this.progress,complete:this.progress>=1,language:this.lang.id,timeSpent:this.timeSpent}},containerStyle:function(){return this.isInFullscreen?{position:"absolute",top:"37px",bottom:0}:{height:this.iframeHeight}}},watch:{userData:function(newValue){newValue&&this.hashi&&this.hashi.updateData({userData:newValue})}},mounted:function(){var this$1=this;this.hashi=new mainClient({iframe:this.$refs.iframe,now:external_kolibriCoreAppGlobal_utils_serverClock_.now}),this.hashi.onStateUpdate((function(data){this$1.$emit("updateContentState",data)})),this.hashi.initialize(this.extraFields&&this.extraFields.contentState||{},this.userData),this.$emit("startTracking"),this.startTime=Object(external_kolibriCoreAppGlobal_utils_serverClock_.now)(),this.pollProgress()},beforeDestroy:function(){this.timeout&&clearTimeout(this.timeout),this.$emit("stopTracking")},methods:{recordProgress:function(){var totalTime=Object(external_kolibriCoreAppGlobal_utils_serverClock_.now)()-this.startTime,hashiProgress=this.hashi?this.hashi.getProgress():null;this.$emit("updateProgress",null===hashiProgress?Math.max(0,totalTime/3e5):hashiProgress),this.pollProgress()},pollProgress:function(){var this$1=this;this.timeout=setTimeout((function(){this$1.recordProgress()}),15e3)}},$trs:{exitFullscreen:"Exit Fullscreen",enterFullscreen:"View Fullscreen"}};__webpack_require__(7);var urls,Html5AppRendererIndex=function(scriptExports,render,staticRenderFns,functionalTemplate,injectStyles,scopeId,moduleIdentifier,shadowMode){var hook,options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(render&&(options.render=render,options.staticRenderFns=staticRenderFns,options._compiled=!0),functionalTemplate&&(options.functional=!0),scopeId&&(options._scopeId="data-v-"+scopeId),moduleIdentifier?(hook=function(context){(context=context||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(context=__VUE_SSR_CONTEXT__),injectStyles&&injectStyles.call(this,context),context&&context._registeredComponents&&context._registeredComponents.add(moduleIdentifier)},options._ssrRegister=hook):injectStyles&&(hook=shadowMode?function(){injectStyles.call(this,(options.functional?this.parent:this).$root.$options.shadowRoot)}:injectStyles),hook)if(options.functional){options._injectStyles=hook;var originalRender=options.render;options.render=function(h,context){return hook.call(context),originalRender(h,context)}}else{var existing=options.beforeCreate;options.beforeCreate=existing?[].concat(existing,hook):[hook]}return{exports:scriptExports,options:options}}(views_Html5AppRendererIndexvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("CoreFullscreen",{ref:"html5Renderer",staticClass:"html5-renderer",style:{height:_vm.contentRendererHeight,width:_vm.iframeWidth},on:{changeFullscreen:function($event){_vm.isInFullscreen=$event}}},[_c("div",{staticClass:"fullscreen-header",style:{backgroundColor:this.$themePalette.grey.v_100}},[_c("KButton",{attrs:{primary:!1,appearance:"flat-button"},on:{click:function($event){return _vm.$refs.html5Renderer.toggleFullscreen()}}},[_vm.isInFullscreen?_c("KIcon",{staticClass:"fs-icon",attrs:{icon:"fullscreen_exit"}}):_c("KIcon",{staticClass:"fs-icon",attrs:{icon:"fullscreen"}}),_vm._v("\n      "+_vm._s(_vm.fullscreenText)+"\n    ")],1)],1),_c("div",{staticClass:"iframe-container",style:_vm.containerStyle},[_c("iframe",{ref:"iframe",staticClass:"iframe",style:{backgroundColor:_vm.$themePalette.grey.v_100},attrs:{sandbox:_vm.sandbox,frameBorder:"0",name:_vm.name,src:_vm.rooturl}})])])}),[],!1,null,"3448014e",null).exports,external_kolibriCoreAppGlobal_=__webpack_require__(0),external_kolibriCoreAppGlobal_default=__webpack_require__.n(external_kolibriCoreAppGlobal_),external_kolibriCoreAppGlobal_urls_=__webpack_require__(5);urls=__webpack_require__.n(external_kolibriCoreAppGlobal_urls_).a,__webpack_require__.p=urls.static("kolibri.plugins.html5_viewer.main/");var KolibriModule=function(options){for(var ref,args=[],len=arguments.length-1;len-- >0;)args[len]=arguments[len+1];this.name="kolibri.plugins.html5_viewer.main";var safeOptions={};this.kolibriModuleOptions.forEach((function(option){options[option]&&(safeOptions[option]=options[option])})),Object.assign(this,safeOptions),(ref=this).initialize.apply(ref,[options].concat(args)),this._registerKolibriModule()},kolibri_module_prototypeAccessors={kolibriModuleOptions:{configurable:!0},Kolibri:{configurable:!0}};kolibri_module_prototypeAccessors.kolibriModuleOptions.get=function(){return[]},KolibriModule.prototype._registerKolibriModule=function(){external_kolibriCoreAppGlobal_default.a.registerKolibriModuleSync(this)},KolibriModule.prototype.initialize=function(){},KolibriModule.prototype.ready=function(){},KolibriModule.prototype.stopListening=function(event,method){external_kolibriCoreAppGlobal_default.a.stopListening(event,this,method)},KolibriModule.prototype.emit=function(){for(var args=[],len=arguments.length;len--;)args[len]=arguments[len];external_kolibriCoreAppGlobal_default.a.emit.apply(external_kolibriCoreAppGlobal_default.a,args)},kolibri_module_prototypeAccessors.Kolibri.get=function(){return external_kolibriCoreAppGlobal_default.a},Object.defineProperties(KolibriModule.prototype,kolibri_module_prototypeAccessors);var hTML5AppModule=new(function(ContentRendererModule){function HTML5AppModule(){ContentRendererModule.apply(this,arguments)}ContentRendererModule&&(HTML5AppModule.__proto__=ContentRendererModule),HTML5AppModule.prototype=Object.create(ContentRendererModule&&ContentRendererModule.prototype),HTML5AppModule.prototype.constructor=HTML5AppModule;var prototypeAccessors={rendererComponent:{configurable:!0}};return prototypeAccessors.rendererComponent.get=function(){return Html5AppRendererIndex},Object.defineProperties(HTML5AppModule.prototype,prototypeAccessors),HTML5AppModule}(function(KolibriModule){function ContentRenderer(){KolibriModule.apply(this,arguments)}KolibriModule&&(ContentRenderer.__proto__=KolibriModule),ContentRenderer.prototype=Object.create(KolibriModule&&KolibriModule.prototype),ContentRenderer.prototype.constructor=ContentRenderer;var prototypeAccessors={rendererComponent:{configurable:!0}};return prototypeAccessors.rendererComponent.get=function(){return null},ContentRenderer.prototype.loadDirectionalCSS=function(direction){return this.Kolibri.loadDirectionalCSS(this,direction)},Object.defineProperties(ContentRenderer.prototype,prototypeAccessors),ContentRenderer}(KolibriModule)))}]);
//# sourceMappingURL=kolibri.plugins.html5_viewer.main-0.14.3.js.map