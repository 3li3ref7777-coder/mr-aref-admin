"use strict";(self["webpackChunkmr_admin"]=self["webpackChunkmr_admin"]||[]).push([[504],{734:function(e,t,n){n.d(t,{cY:function(){return D},FA:function(){return k},g:function(){return R},u:function(){return u},Uj:function(){return c},Fy:function(){return y},tD:function(){return J},bD:function(){return M},hp:function(){return V},T9:function(){return m},Tj:function(){return f},yU:function(){return g},XA:function(){return E},mS:function(){return l},Ku:function(){return z},ZQ:function(){return w},sr:function(){return T},zJ:function(){return Q},c1:function(){return I},Im:function(){return x},lT:function(){return S},zW:function(){return N},jZ:function(){return _},lV:function(){return b},nr:function(){return O},Ov:function(){return A},gE:function(){return $},Am:function(){return H},I9:function(){return U},eX:function(){return F}});const r=()=>{},s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296===(64512&s)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],B=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(B>>10)),t[r++]=String.fromCharCode(56320+(1023&B))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,o=i?e[s+1]:0,a=s+2<e.length,B=a?e[s+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let l=(15&o)<<2|B>>6,h=63&B;a||(h=64,i||(l=64)),r.push(n[c],n[u],n[l],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],i=s<e.length,o=i?n[e.charAt(s)]:0;++s;const B=s<e.length,c=B?n[e.charAt(s)]:64;++s;const u=s<e.length,l=u?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==c||null==l)throw new a;const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B=function(e){const t=s(e);return o.encodeByteArray(t,!0)},c=function(e){return B(e).replace(/\./g,"")},u=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,C=()=>{if("undefined"===typeof process)return;const e=void 0;return e?JSON.parse(e):void 0},p=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},d=()=>{try{return r()||h()||C()||p()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},f=e=>d()?.emulatorHosts?.[e],g=e=>{const t=f(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},m=()=>d()?.config,E=e=>d()?.[`_${e}`];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e},a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function _(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function v(){const e=d()?.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(t){return!1}}function I(){return"undefined"!==typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function T(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function b(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function S(){const e=w();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){return!v()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A(){return!v()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function N(){try{return"object"===typeof indexedDB}catch(e){return!1}}function F(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(n){t(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const L="FirebaseError";class R extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=L,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?P(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new R(r,o,n);return a}}function P(e,t){try{let n=0,r="";while(n<e.length){const s=e.indexOf("{$",n);if(-1===s){r+=e.substring(n);break}const i=e.indexOf("}",s+2);if(-1===i){r+=e.substring(n);break}const o=e.substring(s+2,i),a=t[o];r+=e.substring(n,s)+(null!=a?String(a):`<${o}?>`),n=i+1}return r}catch(n){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function M(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(G(n)&&G(i)){if(!M(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function G(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function U(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function V(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e,t){const n=new j(e,t);return n.subscribe.bind(n)}class j{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=K(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=q),void 0===r.error&&(r.error=q),void 0===r.complete&&(r.complete=q);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e){return e&&e._delegate?e._delegate:e}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){try{const t=e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e;return t.endsWith(".cloudworkstations.dev")}catch{return!1}}async function $(e){const t=await fetch(e,{credentials:"include"});return t.ok}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */},953:function(e,t,n){n.d(t,{C4:function(){return v},EW:function(){return Pe},Gc:function(){return ge},IG:function(){return Ie},KR:function(){return Oe},Kh:function(){return fe},Pr:function(){return Re},R1:function(){return Fe},Tm:function(){return ye},X2:function(){return c},bl:function(){return I},fE:function(){return we},g8:function(){return De},hV:function(){return Ve},hZ:function(){return P},i9:function(){return Se},ju:function(){return _e},qA:function(){return M},u4:function(){return k},ux:function(){return ve},wB:function(){return Ue},yC:function(){return o}});var r=n(33);
/**
* @vue/reactivity v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let s,i;class o{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&s&&(s.active?(this.parent=s,this.index=(s.scopes||(s.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes){const n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes){const n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}const n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){const t=s;try{return s=this,e()}finally{s=t}}else 0}on(){1===++this._on&&(this.prevScope=s,s=this)}off(){if(this._on>0&&0===--this._on){if(s===this)s=this.prevScope;else{let e=s;while(e){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){let t,n;for(this._active=!1,t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function a(){return s}const B=new WeakSet;class c{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,s&&(s.active?s.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,B.has(this)&&(B.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||C(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,T(this),f(this);const e=i,t=w;i=this,w=!0;try{return this.fn()}finally{0,g(this),i=e,w=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)D(e);this.deps=this.depsTail=void 0,T(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?B.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){m(this)&&this.run()}get dirty(){return m(this)}}let u,l,h=0;function C(e,t=!1){if(e.flags|=8,t)return e.next=l,void(l=e);e.next=u,u=e}function p(){h++}function d(){if(--h>0)return;if(l){let e=l;l=void 0;while(e){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;while(u){let n=u;u=void 0;while(n){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=r}}if(e)throw e}function f(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function g(e){let t,n=e.depsTail,r=n;while(r){const e=r.prevDep;-1===r.version?(r===n&&(n=e),D(r),y(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function m(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(E(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function E(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===b)return;if(e.globalVersion=b,!e.isSSR&&128&e.flags&&(!e.deps&&!e._dirty||!m(e)))return;e.flags|=2;const t=e.dep,n=i,s=w;i=e,w=!0;try{f(e);const n=e.fn(e._value);(0===t.version||(0,r.$H)(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(o){throw t.version++,o}finally{i=n,w=s,g(e),e.flags&=-3}}function D(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)D(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function y(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let w=!0;const _=[];function v(){_.push(w),w=!1}function I(){const e=_.pop();w=void 0===e||e}function T(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=i;i=void 0;try{t()}finally{i=e}}}let b=0;class S{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class O{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!i||!w||i===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==i)t=this.activeLink=new S(i,this),i.deps?(t.prevDep=i.depsTail,i.depsTail.nextDep=t,i.depsTail=t):i.deps=i.depsTail=t,A(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=i.depsTail,t.nextDep=void 0,i.depsTail.nextDep=t,i.depsTail=t,i.deps===t&&(i.deps=e)}return t}trigger(e){this.version++,b++,this.notify(e)}notify(e){p();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{d()}}}function A(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)A(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const N=new WeakMap,F=Symbol(""),L=Symbol(""),R=Symbol("");function k(e,t,n){if(w&&i){let t=N.get(e);t||N.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new O),r.map=t,r.key=n),r.track()}}function P(e,t,n,s,i,o){const a=N.get(e);if(!a)return void b++;const B=e=>{e&&e.trigger()};if(p(),"clear"===t)a.forEach(B);else{const i=(0,r.cy)(e),o=i&&(0,r.yI)(n);if(i&&"length"===n){const e=Number(s);a.forEach((t,n)=>{("length"===n||n===R||!(0,r.Bm)(n)&&n>=e)&&B(t)})}else switch((void 0!==n||a.has(void 0))&&B(a.get(n)),o&&B(a.get(R)),t){case"add":i?o&&B(a.get("length")):(B(a.get(F)),(0,r.CE)(e)&&B(a.get(L)));break;case"delete":i||(B(a.get(F)),(0,r.CE)(e)&&B(a.get(L)));break;case"set":(0,r.CE)(e)&&B(a.get(F));break}}d()}function x(e){const t=ve(e);return t===e?t:(k(t,"iterate",R),we(e)?t:t.map(Te))}function M(e){return k(e=ve(e),"iterate",R),e}function G(e,t){return ye(e)?De(e)?be(Te(t)):be(t):Te(t)}const H={__proto__:null,[Symbol.iterator](){return U(this,Symbol.iterator,e=>G(this,e))},concat(...e){return x(this).concat(...e.map(e=>(0,r.cy)(e)?x(e):e))},entries(){return U(this,"entries",e=>(e[1]=G(this,e[1]),e))},every(e,t){return J(this,"every",e,t,void 0,arguments)},filter(e,t){return J(this,"filter",e,t,e=>e.map(e=>G(this,e)),arguments)},find(e,t){return J(this,"find",e,t,e=>G(this,e),arguments)},findIndex(e,t){return J(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return J(this,"findLast",e,t,e=>G(this,e),arguments)},findLastIndex(e,t){return J(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return J(this,"forEach",e,t,void 0,arguments)},includes(...e){return K(this,"includes",e)},indexOf(...e){return K(this,"indexOf",e)},join(e){return x(this).join(e)},lastIndexOf(...e){return K(this,"lastIndexOf",e)},map(e,t){return J(this,"map",e,t,void 0,arguments)},pop(){return q(this,"pop")},push(...e){return q(this,"push",e)},reduce(e,...t){return j(this,"reduce",e,t)},reduceRight(e,...t){return j(this,"reduceRight",e,t)},shift(){return q(this,"shift")},some(e,t){return J(this,"some",e,t,void 0,arguments)},splice(...e){return q(this,"splice",e)},toReversed(){return x(this).toReversed()},toSorted(e){return x(this).toSorted(e)},toSpliced(...e){return x(this).toSpliced(...e)},unshift(...e){return q(this,"unshift",e)},values(){return U(this,"values",e=>G(this,e))}};function U(e,t,n){const r=M(e),s=r[t]();return r===e||we(e)||(s._next=s.next,s.next=()=>{const e=s._next();return e.done||(e.value=n(e.value)),e}),s}const V=Array.prototype;function J(e,t,n,r,s,i){const o=M(e),a=o!==e&&!we(e),B=o[t];if(B!==V[t]){const t=B.apply(e,i);return a?Te(t):t}let c=n;o!==e&&(a?c=function(t,r){return n.call(this,G(e,t),r,e)}:n.length>2&&(c=function(t,r){return n.call(this,t,r,e)}));const u=B.call(o,c,r);return a&&s?s(u):u}function j(e,t,n,r){const s=M(e),i=s!==e&&!we(e);let o=n,a=!1;s!==e&&(i?(a=0===r.length,o=function(t,r,s){return a&&(a=!1,t=G(e,t)),n.call(this,t,G(e,r),s,e)}):n.length>3&&(o=function(t,r,s){return n.call(this,t,r,s,e)}));const B=s[t](o,...r);return a?G(e,B):B}function K(e,t,n){const r=ve(e);k(r,"iterate",R);const s=r[t](...n);return-1!==s&&!1!==s||!_e(n[0])?s:(n[0]=ve(n[0]),r[t](...n))}function q(e,t,n=[]){v(),p();const r=ve(e)[t].apply(e,n);return d(),I(),r}const z=(0,r.pD)("__proto__,__v_isRef,__isVue"),Q=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>"arguments"!==e&&"caller"!==e).map(e=>Symbol[e]).filter(r.Bm));function $(e){(0,r.Bm)(e)||(e=String(e));const t=ve(this);return k(t,"has",e),t.hasOwnProperty(e)}class W{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if("__v_skip"===t)return e["__v_skip"];const s=this._isReadonly,i=this._isShallow;if("__v_isReactive"===t)return!s;if("__v_isReadonly"===t)return s;if("__v_isShallow"===t)return i;if("__v_raw"===t)return n===(s?i?pe:Ce:i?he:le).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,r.cy)(e);if(!s){let e;if(o&&(e=H[t]))return e;if("hasOwnProperty"===t)return $}const a=Reflect.get(e,t,Se(e)?e:n);if((0,r.Bm)(t)?Q.has(t):z(t))return a;if(s||k(e,"get",t),i)return a;if(Se(a)){const e=o&&(0,r.yI)(t)?a:a.value;return s&&(0,r.Gv)(e)?me(e):e}return(0,r.Gv)(a)?s?me(a):fe(a):a}}class Y extends W{constructor(e=!1){super(!1,e)}set(e,t,n,s){let i=e[t];const o=(0,r.cy)(e)&&(0,r.yI)(t);if(!this._isShallow){const e=ye(i);if(we(n)||ye(n)||(i=ve(i),n=ve(n)),!o&&Se(i)&&!Se(n))return e||(i.value=n),!0}const a=o?Number(t)<e.length:(0,r.$3)(e,t),B=Reflect.set(e,t,n,Se(e)?e:s);return e===ve(s)&&B&&(a?(0,r.$H)(n,i)&&P(e,"set",t,n,i):P(e,"add",t,n)),B}deleteProperty(e,t){const n=(0,r.$3)(e,t),s=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&P(e,"delete",t,void 0,s),i}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&Q.has(t)||k(e,"has",t),n}ownKeys(e){return k(e,"iterate",(0,r.cy)(e)?"length":F),Reflect.ownKeys(e)}}class X extends W{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Z=new Y,ee=new X,te=new Y(!0),ne=e=>e,re=e=>Reflect.getPrototypeOf(e);function se(e,t,n){return function(...s){const i=this["__v_raw"],o=ve(i),a=(0,r.CE)(o),B="entries"===e||e===Symbol.iterator&&a,c="keys"===e&&a,u=i[e](...s),l=n?ne:t?be:Te;return!t&&k(o,"iterate",c?L:F),(0,r.X$)(Object.create(u),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:B?[l(e[0]),l(e[1])]:l(e),done:t}}})}}function ie(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function oe(e,t){const n={get(n){const s=this["__v_raw"],i=ve(s),o=ve(n);e||((0,r.$H)(n,o)&&k(i,"get",n),k(i,"get",o));const{has:a}=re(i),B=t?ne:e?be:Te;return a.call(i,n)?B(s.get(n)):a.call(i,o)?B(s.get(o)):void(s!==i&&s.get(n))},get size(){const t=this["__v_raw"];return!e&&k(ve(t),"iterate",F),t.size},has(t){const n=this["__v_raw"],s=ve(n),i=ve(t);return e||((0,r.$H)(t,i)&&k(s,"has",t),k(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){const s=this,i=s["__v_raw"],o=ve(i),a=t?ne:e?be:Te;return!e&&k(o,"iterate",F),i.forEach((e,t)=>n.call(r,a(e),a(t),s))}};(0,r.X$)(n,e?{add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear")}:{add(e){const n=ve(this),s=re(n),i=ve(e),o=t||we(e)||ye(e)?e:i,a=s.has.call(n,o)||(0,r.$H)(e,o)&&s.has.call(n,e)||(0,r.$H)(i,o)&&s.has.call(n,i);return a||(n.add(o),P(n,"add",o,o)),this},set(e,n){t||we(n)||ye(n)||(n=ve(n));const s=ve(this),{has:i,get:o}=re(s);let a=i.call(s,e);a||(e=ve(e),a=i.call(s,e));const B=o.call(s,e);return s.set(e,n),a?(0,r.$H)(n,B)&&P(s,"set",e,n,B):P(s,"add",e,n),this},delete(e){const t=ve(this),{has:n,get:r}=re(t);let s=n.call(t,e);s||(e=ve(e),s=n.call(t,e));const i=r?r.call(t,e):void 0,o=t.delete(e);return s&&P(t,"delete",e,void 0,i),o},clear(){const e=ve(this),t=0!==e.size,n=void 0,r=e.clear();return t&&P(e,"clear",void 0,void 0,n),r}});const s=["keys","values","entries",Symbol.iterator];return s.forEach(r=>{n[r]=se(r,e,t)}),n}function ae(e,t){const n=oe(e,t);return(t,s,i)=>"__v_isReactive"===s?!e:"__v_isReadonly"===s?e:"__v_raw"===s?t:Reflect.get((0,r.$3)(n,s)&&s in t?n:t,s,i)}const Be={get:ae(!1,!1)},ce={get:ae(!1,!0)},ue={get:ae(!0,!1)};const le=new WeakMap,he=new WeakMap,Ce=new WeakMap,pe=new WeakMap;function de(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fe(e){return ye(e)?e:Ee(e,!1,Z,Be,le)}function ge(e){return Ee(e,!1,te,ce,he)}function me(e){return Ee(e,!0,ee,ue,Ce)}function Ee(e,t,n,s,i){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;if(e["__v_skip"]||!Object.isExtensible(e))return e;const o=i.get(e);if(o)return o;const a=de((0,r.Zf)(e));if(0===a)return e;const B=new Proxy(e,2===a?s:n);return i.set(e,B),B}function De(e){return ye(e)?De(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function ye(e){return!(!e||!e["__v_isReadonly"])}function we(e){return!(!e||!e["__v_isShallow"])}function _e(e){return!!e&&!!e["__v_raw"]}function ve(e){const t=e&&e["__v_raw"];return t?ve(t):e}function Ie(e){return!(0,r.$3)(e,"__v_skip")&&Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Te=e=>(0,r.Gv)(e)?fe(e):e,be=e=>(0,r.Gv)(e)?me(e):e;function Se(e){return!!e&&!0===e["__v_isRef"]}function Oe(e){return Ae(e,!1)}function Ae(e,t){return Se(e)?e:new Ne(e,t)}class Ne{constructor(e,t){this.dep=new O,this["__v_isRef"]=!0,this["__v_isShallow"]=!1,this._rawValue=t?e:ve(e),this._value=t?e:Te(e),this["__v_isShallow"]=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this["__v_isShallow"]||we(e)||ye(e);e=n?e:ve(e),(0,r.$H)(e,t)&&(this._rawValue=e,this._value=n?e:Te(e),this.dep.trigger())}}function Fe(e){return Se(e)?e.value:e}const Le={get:(e,t,n)=>"__v_raw"===t?e:Fe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Se(s)&&!Se(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Re(e){return De(e)?e:new Proxy(e,Le)}class ke{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new O(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=b-1,this.next=void 0,this.effect=this,this["__v_isReadonly"]=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags||i===this))return C(this,!0),!0}get value(){const e=this.dep.track();return E(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Pe(e,t,n=!1){let s,i;(0,r.Tn)(e)?s=e:(s=e.get,i=e.set);const o=new ke(s,i,n);return o}const xe={},Me=new WeakMap;let Ge;function He(e,t=!1,n=Ge){if(n){let t=Me.get(n);t||Me.set(n,t=[]),t.push(e)}else 0}function Ue(e,t,n=r.MZ){const{immediate:s,deep:i,once:o,scheduler:B,augmentJob:u,call:l}=n,h=e=>i?e:we(e)||!1===i||0===i?Ve(e,1):Ve(e);let C,p,d,f,g=!1,m=!1;if(Se(e)?(p=()=>e.value,g=we(e)):De(e)?(p=()=>h(e),g=!0):(0,r.cy)(e)?(m=!0,g=e.some(e=>De(e)||we(e)),p=()=>e.map(e=>Se(e)?e.value:De(e)?h(e):(0,r.Tn)(e)?l?l(e,2):e():void 0)):p=(0,r.Tn)(e)?t?l?()=>l(e,2):e:()=>{if(d){v();try{d()}finally{I()}}const t=Ge;Ge=C;try{return l?l(e,3,[f]):e(f)}finally{Ge=t}}:r.tE,t&&i){const e=p,t=!0===i?1/0:i;p=()=>Ve(e(),t)}const E=a(),D=()=>{C.stop(),E&&E.active&&(0,r.TF)(E.effects,C)};if(o&&t){const e=t;t=(...t)=>{const n=e(...t);return D(),n}}let y=m?new Array(e.length).fill(xe):xe;const w=e=>{if(1&C.flags&&(C.dirty||e))if(t){const n=C.run();if(e||i||g||(m?n.some((e,t)=>(0,r.$H)(e,y[t])):(0,r.$H)(n,y))){d&&d();const e=Ge;Ge=C;try{const e=[n,y===xe?void 0:m&&y[0]===xe?[]:y,f];y=n,l?l(t,3,e):t(...e)}finally{Ge=e}}}else C.run()};return u&&u(w),C=new c(p),C.scheduler=B?()=>B(w,!1):w,f=e=>He(e,!1,C),d=C.onStop=()=>{const e=Me.get(C);if(e){if(l)l(e,4);else for(const t of e)t();Me.delete(C)}},t?s?w(!0):y=C.run():B?B(w.bind(null,!0),!0):C.run(),D.pause=C.pause.bind(C),D.resume=C.resume.bind(C),D.stop=D,D}function Ve(e,t=1/0,n){if(t<=0||!(0,r.Gv)(e)||e["__v_skip"])return e;if(n=n||new Map,(n.get(e)||0)>=t)return e;if(n.set(e,t),t--,Se(e))Ve(e.value,t,n);else if((0,r.cy)(e))for(let r=0;r<e.length;r++)Ve(e[r],t,n);else if((0,r.vM)(e)||(0,r.CE)(e))e.forEach(e=>{Ve(e,t,n)});else if((0,r.Qd)(e)){for(const r in e)Ve(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Ve(e[r],t,n)}return e}n.d(t,["a1",0,be,"lJ",0,Te])},641:function(e,t,n){n.d(t,{CE:function(){return Ut},K9:function(){return mt},Lk:function(){return zt},Q3:function(){return Zt},bo:function(){return O},dY:function(){return f},eW:function(){return Xt},pI:function(){return de},qL:function(){return o},uX:function(){return Pt}});var r=n(953),s=n(33);function i(e,t,n,r){try{return r?e(...r):e()}catch(s){a(s,t,n)}}function o(e,t,n,r){if((0,s.Tn)(e)){const o=i(e,t,n,r);return o&&(0,s.yL)(o)&&o.catch(e=>{a(e,t,n)}),o}if((0,s.cy)(e)){const s=[];for(let i=0;i<e.length;i++)s.push(o(e[i],t,n,r));return s}}function a(e,t,n,o=!0){const a=t?t.vnode:null,{errorHandler:c,throwUnhandledErrorInProduction:u}=t&&t.appContext.config||s.MZ;if(t){let s=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(s){const t=s.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,a))return;s=s.parent}if(c)return(0,r.C4)(),i(c,null,10,[e,o,a]),void(0,r.bl)()}B(e,n,a,o,u)}function B(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const c=[];let u=-1;const l=[];let h=null,C=0;const p=Promise.resolve();let d=null;function f(e){const t=d||p;return e?t.then(this?e.bind(this):e):t}function g(e){let t=u+1,n=c.length;while(t<n){const r=t+n>>>1,s=c[r],i=_(s);i<e||i===e&&2&s.flags?t=r+1:n=r}return t}function m(e){if(!(1&e.flags)){const t=_(e),n=c[c.length-1];!n||!(2&e.flags)&&t>=_(n)?c.push(e):c.splice(g(t),0,e),e.flags|=1,E()}}function E(){d||(d=p.then(v))}function D(e){if((0,s.cy)(e))for(let t=0;t<e.length;t++)l.push(e[t]);else h&&-1===e.id?h.splice(C+1,0,e):1&e.flags||(l.push(e),e.flags|=1);E()}function y(e,t,n=u+1){for(0;n<c.length;n++){const t=c[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;0,c.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function w(e){if(l.length){const e=[...new Set(l)].sort((e,t)=>_(e)-_(t));if(l.length=0,h){for(let t=0;t<e.length;t++)h.push(e[t]);return}for(h=e,C=0;C<h.length;C++){const e=h[C];0,4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}h=null,C=0}}const _=e=>null==e.id?2&e.flags?-1:1/0:e.id;function v(e){s.tE;try{for(u=0;u<c.length;u++){const e=c[u];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),i(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;u<c.length;u++){const e=c[u];e&&(e.flags&=-2)}u=-1,c.length=0,w(e),d=null,(c.length||l.length)&&v(e)}}let I=null,T=null;function b(e){const t=I;return I=e,T=e&&e.type.__scopeId||null,t}function S(e,t=I,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Gt(-1);const s=b(t),i=Rt.length;let o;try{o=e(...n)}finally{for(let e=Rt.length;e>i;e--)xt();b(s),r._d&&Gt(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function O(e,t){if(null===I)return e;const n=In(I),i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,a,B,c=s.MZ]=t[o];e&&((0,s.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&(0,r.hV)(a),i.push({dir:e,instance:n,value:a,oldValue:void 0,arg:B,modifiers:c}))}return e}function A(e,t,n,s){const i=e.dirs,a=t&&t.dirs;for(let B=0;B<i.length;B++){const c=i[B];a&&(c.oldValue=a[B].value);let u=c.dir[s];u&&((0,r.C4)(),o(u,n,8,[e.el,c,e,t]),(0,r.bl)())}}function N(e,t){if(cn){let n=cn.provides;const r=cn.parent&&cn.parent.provides;r===n&&(n=cn.provides=Object.create(r)),n[e]=t}}function F(e,t,n=!1){const r=un();if(r||Ge){let i=Ge?Ge._context.provides:r?null==r.parent||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&(0,s.Tn)(t)?t.call(r&&r.proxy):t}else 0}const L=Symbol.for("v-scx"),R=()=>{{const e=F(L);return e}};function k(e,t,n){return P(e,t,n)}function P(e,t,n=s.MZ){const{immediate:i,deep:a,flush:B,once:c}=n;const u=(0,s.X$)({},n);const l=t&&i||!t&&"post"!==B;let h;if(mn)if("sync"===B){const e=R();h=e.__watcherHandles||(e.__watcherHandles=[])}else if(!l){const e=()=>{};return e.stop=s.tE,e.resume=s.tE,e.pause=s.tE,e}const C=cn;u.call=(e,t,n)=>o(e,C,t,n);let p=!1;"post"===B?u.scheduler=e=>{gt(e,C&&C.suspense)}:"sync"!==B&&(p=!0,u.scheduler=(e,t)=>{t?e():m(e)}),u.augmentJob=e=>{t&&(e.flags|=4),p&&(e.flags|=2,C&&(e.id=C.uid,e.i=C))};const d=(0,r.wB)(e,t,u);return mn&&(h?h.push(d):l&&d()),d}function x(e,t,n){const r=this.proxy,i=(0,s.Kg)(e)?e.includes(".")?M(r,e):()=>r[e]:e.bind(r,r);let o;(0,s.Tn)(t)?o=t:(o=t.handler,n=t);const a=Cn(this),B=P(i,o.bind(r),n);return a(),B}function M(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const G=Symbol("_vte"),H=e=>e.__isTeleport;const U=Symbol("_leaveCb");function V(e){let t=e[0];if(e.length>1){let n=!1;for(const r of e)if(r.type!==Ft){0,t=r,n=!0;break}}return t}function J(e){if(!Y(e))return H(e.type)&&e.children?V(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(16&t)return n[0];if(32&t&&(0,s.Tn)(n.default))return n.default()}}function j(e,t){if(6&e.shapeFlag&&e.component){e.transition=t;const n=e.component.subTree;j(H(n.type)&&J(n)||n,t)}else 128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function K(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function q(e,t){let n;return!(!(n=Object.getOwnPropertyDescriptor(e,t))||n.configurable)}const z=new WeakMap;function Q(e,t,n,o,a=!1){if((0,s.cy)(e))return void e.forEach((e,r)=>Q(e,t&&((0,s.cy)(t)?t[r]:t),n,o,a));if(W(o)&&!a)return void(512&o.shapeFlag&&o.type.__asyncResolved&&o.component.subTree.component&&Q(e,t,n,o.component.subTree));const B=4&o.shapeFlag?In(o.component):o.el,c=a?null:B,{i:u,r:l}=e;const h=t&&t.r,C=u.refs===s.MZ?u.refs={}:u.refs,p=u.setupState,d=(0,r.ux)(p),f=p===s.MZ?s.NO:e=>!q(C,e)&&(0,s.$3)(d,e),g=(e,t)=>!t||!q(C,t);if(null!=h&&h!==l)if($(t),(0,s.Kg)(h))C[h]=null,f(h)&&(p[h]=null);else if((0,r.i9)(h)){const e=t;g(h,e.k)&&(h.value=null),e.k&&(C[e.k]=null)}if((0,s.Tn)(l))i(l,u,12,[c,C]);else{const t=(0,s.Kg)(l),i=(0,r.i9)(l);if(t||i){const r=()=>{if(e.f){const n=t?f(l)?p[l]:C[l]:g(l)||!e.k?l.value:C[e.k];if(a)(0,s.cy)(n)&&(0,s.TF)(n,B);else if((0,s.cy)(n))n.includes(B)||n.push(B);else if(t)C[l]=[B],f(l)&&(p[l]=C[l]);else{const t=[B];g(l,e.k)&&(l.value=t),e.k&&(C[e.k]=t)}}else t?(C[l]=c,f(l)&&(p[l]=c)):i&&(g(l,e.k)&&(l.value=c),e.k&&(C[e.k]=c))};if(c){const t=()=>{r(),z.delete(e)};t.id=-1,z.set(e,t),gt(t,n)}else $(e),r()}else 0}}function $(e){const t=z.get(e);t&&(t.flags|=8,z.delete(e))}(0,s.We)().requestIdleCallback,(0,s.We)().cancelIdleCallback;const W=e=>!!e.type.__asyncLoader;const Y=e=>e.type.__isKeepAlive;function X(e,t){ee(e,"a",t)}function Z(e,t){ee(e,"da",t)}function ee(e,t,n=cn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ne(t,r,n),n){let e=n.parent;while(e&&e.parent)Y(e.parent.vnode)&&te(r,t,n,e),e=e.parent}}function te(e,t,n,r){const i=ne(t,e,r,!0);ce(()=>{(0,s.TF)(r[t],i)},n)}function ne(e,t,n=cn,s=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...s)=>{(0,r.C4)();const i=Cn(n),a=o(t,n,e,s);return i(),(0,r.bl)(),a});return s?i.unshift(a):i.push(a),a}}const re=e=>(t,n=cn)=>{mn&&"sp"!==e||ne(e,(...e)=>t(...e),n)},se=re("bm"),ie=re("m"),oe=re("bu"),ae=re("u"),Be=re("bum"),ce=re("um"),ue=re("sp"),le=re("rtg"),he=re("rtc");function Ce(e,t=cn){ne("ec",e,t)}const pe=Symbol.for("v-ndc");function de(e,t,n,i){let o;const a=n&&n[i],B=(0,s.cy)(e);if(B||(0,s.Kg)(e)){const n=B&&(0,r.g8)(e);let s=!1,i=!1;n&&(s=!(0,r.fE)(e),i=(0,r.Tm)(e),e=(0,r.qA)(e)),o=new Array(e.length);for(let B=0,c=e.length;B<c;B++)o[B]=t(s?i?(0,r.a1)((0,r.lJ)(e[B])):(0,r.lJ)(e[B]):e[B],B,void 0,a&&a[B])}else if("number"===typeof e){o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,a&&a[n])}else if((0,s.Gv)(e))if(e[Symbol.iterator])o=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,s=n.length;r<s;r++){const s=n[r];o[r]=t(e[s],s,r,a&&a[r])}}else o=[];return n&&(n[i]=o),o}const fe=e=>e?dn(e)?In(e):fe(e.parent):null,ge=(0,s.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>fe(e.parent),$root:e=>fe(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Te(e),$forceUpdate:e=>e.f||(e.f=()=>{m(e.update)}),$nextTick:e=>e.n||(e.n=f.bind(e.proxy)),$watch:e=>x.bind(e)}),me=(e,t)=>e!==s.MZ&&!e.__isScriptSetup&&(0,s.$3)(e,t),Ee={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:i,data:o,props:a,accessCache:B,type:c,appContext:u}=e;if("$"!==t[0]){const e=B[t];if(void 0!==e)switch(e){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(me(i,t))return B[t]=1,i[t];if(o!==s.MZ&&(0,s.$3)(o,t))return B[t]=2,o[t];if((0,s.$3)(a,t))return B[t]=3,a[t];if(n!==s.MZ&&(0,s.$3)(n,t))return B[t]=4,n[t];ye&&(B[t]=0)}}const l=ge[t];let h,C;return l?("$attrs"===t&&(0,r.u4)(e.attrs,"get",""),l(e)):(h=c.__cssModules)&&(h=h[t])?h:n!==s.MZ&&(0,s.$3)(n,t)?(B[t]=4,n[t]):(C=u.config.globalProperties,(0,s.$3)(C,t)?C[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:o}=e;return me(i,t)?(i[t]=n,!0):r!==s.MZ&&(0,s.$3)(r,t)?(r[t]=n,!0):!(0,s.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:o,type:a}},B){let c;return!!(n[B]||e!==s.MZ&&"$"!==B[0]&&(0,s.$3)(e,B)||me(t,B)||(0,s.$3)(o,B)||(0,s.$3)(r,B)||(0,s.$3)(ge,B)||(0,s.$3)(i.config.globalProperties,B)||(c=a.__cssModules)&&c[B])},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,s.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function De(e){return(0,s.cy)(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}let ye=!0;function we(e){const t=Te(e),n=e.proxy,i=e.ctx;ye=!1,t.beforeCreate&&ve(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:B,watch:c,provide:u,inject:l,created:h,beforeMount:C,mounted:p,beforeUpdate:d,updated:f,activated:g,deactivated:m,beforeDestroy:E,beforeUnmount:D,destroyed:y,unmounted:w,render:_,renderTracked:v,renderTriggered:I,errorCaptured:T,serverPrefetch:b,expose:S,inheritAttrs:O,components:A,directives:F,filters:L}=t,R=null;if(l&&_e(l,i,R),B)for(const r in B){const e=B[r];(0,s.Tn)(e)&&(i[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,s.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(ye=!0,a)for(const r in a){const e=a[r],t=(0,s.Tn)(e)?e.bind(n,n):(0,s.Tn)(e.get)?e.get.bind(n,n):s.tE;0;const o=!(0,s.Tn)(e)&&(0,s.Tn)(e.set)?e.set.bind(n):s.tE,B=bn({get:t,set:o});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>B.value,set:e=>B.value=e})}if(c)for(const r in c)Ie(c[r],i,n,r);if(u){const e=(0,s.Tn)(u)?u.call(n):u;Reflect.ownKeys(e).forEach(t=>{N(t,e[t])})}function k(e,t){(0,s.cy)(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(h&&ve(h,e,"c"),k(se,C),k(ie,p),k(oe,d),k(ae,f),k(X,g),k(Z,m),k(Ce,T),k(he,v),k(le,I),k(Be,D),k(ce,w),k(ue,b),(0,s.cy)(S))if(S.length){const t=e.exposed||(e.exposed={});S.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||(e.exposed={});_&&e.render===s.tE&&(e.render=_),null!=O&&(e.inheritAttrs=O),A&&(e.components=A),F&&(e.directives=F),b&&K(e)}function _e(e,t,n=s.tE){(0,s.cy)(e)&&(e=Ne(e));for(const i in e){const n=e[i];let o;o=(0,s.Gv)(n)?"default"in n?F(n.from||i,n.default,!0):F(n.from||i):F(n),(0,r.i9)(o)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[i]=o}}function ve(e,t,n){o((0,s.cy)(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ie(e,t,n,r){let i=r.includes(".")?M(n,r):()=>n[r];if((0,s.Kg)(e)){const n=t[e];(0,s.Tn)(n)&&k(i,n)}else if((0,s.Tn)(e))k(i,e.bind(n));else if((0,s.Gv)(e))if((0,s.cy)(e))e.forEach(e=>Ie(e,t,n,r));else{const r=(0,s.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,s.Tn)(r)&&k(i,r,e)}else 0}function Te(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,B=o.get(t);let c;return B?c=B:i.length||n||r?(c={},i.length&&i.forEach(e=>be(c,e,a,!0)),be(c,t,a)):c=t,(0,s.Gv)(t)&&o.set(t,c),c}function be(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&be(e,i,n,!0),s&&s.forEach(t=>be(e,t,n,!0));for(const o in t)if(r&&"expose"===o);else{const r=Se[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Se={data:Oe,props:Re,emits:Re,methods:Le,computed:Le,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:Le,directives:Le,watch:ke,provide:Oe,inject:Ae};function Oe(e,t){return t?e?function(){return(0,s.X$)((0,s.Tn)(e)?e.call(this,this):e,(0,s.Tn)(t)?t.call(this,this):t)}:t:e}function Ae(e,t){return Le(Ne(e),Ne(t))}function Ne(e){if((0,s.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Fe(e,t){return e?[...new Set([].concat(e,t))]:t}function Le(e,t){return e?(0,s.X$)(Object.create(null),e,t):t}function Re(e,t){return e?(0,s.cy)(e)&&(0,s.cy)(t)?[...new Set([...e,...t])]:(0,s.X$)(Object.create(null),De(e),De(null!=t?t:{})):t}function ke(e,t){if(!e)return t;if(!t)return e;const n=(0,s.X$)(Object.create(null),e);for(const r in t)n[r]=Fe(e[r],t[r]);return n}function Pe(){return{app:null,config:{isNativeTag:s.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xe=0;function Me(e,t){return function(n,r=null){(0,s.Tn)(n)||(n=(0,s.X$)({},n)),null==r||(0,s.Gv)(r)||(r=null);const i=Pe(),a=new WeakSet,B=[];let c=!1;const u=i.app={_uid:xe++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Sn,get config(){return i.config},set config(e){0},use(e,...t){return a.has(e)||(e&&(0,s.Tn)(e.install)?(a.add(e),e.install(u,...t)):(0,s.Tn)(e)&&(a.add(e),e(u,...t))),u},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),u},component(e,t){return t?(i.components[e]=t,u):i.components[e]},directive(e,t){return t?(i.directives[e]=t,u):i.directives[e]},mount(s,o,a){if(!c){0;const B=u._ceVNode||Qt(n,r);return B.appContext=i,!0===a?a="svg":!1===a&&(a=void 0),o&&t?t(B,s):e(B,s,a),c=!0,u._container=s,s.__vue_app__=u,In(B.component)}},onUnmount(e){B.push(e)},unmount(){c&&(o(B,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(e,t){return i.provides[e]=t,u},runWithContext(e){const t=Ge;Ge=u;try{return e()}finally{Ge=t}}};return u}}let Ge=null;const He=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${(0,s.PT)(t)}Modifiers`]||e[`${(0,s.Tg)(t)}Modifiers`];function Ue(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||s.MZ;let i=n;const a=t.startsWith("update:"),B=a&&He(r,t.slice(7));let c;B&&(B.trim&&(i=n.map(e=>(0,s.Kg)(e)?e.trim():e)),B.number&&(i=i.map(s.bB)));let u=r[c=(0,s.rU)(t)]||r[c=(0,s.rU)((0,s.PT)(t))];!u&&a&&(u=r[c=(0,s.rU)((0,s.Tg)(t))]),u&&o(u,e,6,i);const l=r[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,o(l,e,6,i)}}const Ve=new WeakMap;function Je(e,t,n=!1){const r=n?Ve:t.emitsCache,i=r.get(e);if(void 0!==i)return i;const o=e.emits;let a={},B=!1;if(!(0,s.Tn)(e)){const r=e=>{const n=Je(e,t,!0);n&&(B=!0,(0,s.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||B?((0,s.cy)(o)?o.forEach(e=>a[e]=null):(0,s.X$)(a,o),(0,s.Gv)(e)&&r.set(e,a),a):((0,s.Gv)(e)&&r.set(e,null),null)}function je(e,t){return!(!e||!(0,s.Mp)(t))&&(t=t.slice(2),t="Once"===t?t:t.replace(/Once$/,""),(0,s.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,s.$3)(e,(0,s.Tg)(t))||(0,s.$3)(e,t))}function Ke(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[o],slots:B,attrs:c,emit:u,render:l,renderCache:h,props:C,data:p,setupState:d,ctx:f,inheritAttrs:g}=e,m=b(e);let E,D;try{if(4&n.shapeFlag){const e=i||r,t=e;E=en(l.call(t,e,h,C,d,p,f)),D=c}else{const e=t;0,E=en(e.length>1?e(C,{attrs:c,slots:B,emit:u}):e(C,null)),D=t.props?c:qe(c)}}catch(w){Rt.length=0,a(w,e,1),E=Qt(Ft)}let y=E;if(D&&!1!==g){const e=Object.keys(D),{shapeFlag:t}=y;e.length&&7&t&&(o&&e.some(s.CP)&&(D=ze(D,o)),y=Yt(y,D,!1,!0))}if(n.dirs&&(y=Yt(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition){const e=H(y.type)&&J(y)||y;0,j(e,n.transition)}return E=y,b(m),E}const qe=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,s.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},ze=(e,t)=>{const n={};for(const r in e)(0,s.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Qe(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:B}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&B>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||$e(r,o,c):!!o);if(1024&B)return!0;if(16&B)return r?$e(r,o,c):!!o;if(8&B){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(We(o,r,n)&&!je(c,n))return!0}}return!1}function $e(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(We(t,e,i)&&!je(n,i))return!0}return!1}function We(e,t,n){const r=e[n],i=t[n];return"style"===n&&(0,s.Gv)(r)&&(0,s.Gv)(i)?!(0,s.BX)(r,i):r!==i}function Ye({vnode:e,parent:t,suspense:n},r){while(t){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n!==e)break;(e=t.vnode).el=r,t=t.parent}n&&n.activeBranch===e&&(n.vnode.el=r)}const Xe={},Ze=()=>Object.create(Xe),et=e=>Object.getPrototypeOf(e)===Xe;function tt(e,t,n,s=!1){const i={},o=Ze();e.propsDefaults=Object.create(null),rt(e,t,i,o);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);n?e.props=s?i:(0,r.Gc)(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function nt(e,t,n,i){const{props:o,attrs:a,vnode:{patchFlag:B}}=e,c=(0,r.ux)(o),[u]=e.propsOptions;let l=!1;if(!(i||B>0)||16&B){let r;rt(e,t,o,a)&&(l=!0);for(const i in c)t&&((0,s.$3)(t,i)||(r=(0,s.Tg)(i))!==i&&(0,s.$3)(t,r))||(u?!n||void 0===n[i]&&void 0===n[r]||(o[i]=st(u,c,i,void 0,e,!0)):delete o[i]);if(a!==c)for(const e in a)t&&(0,s.$3)(t,e)||(delete a[e],l=!0)}else if(8&B){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(je(e.emitsOptions,i))continue;const B=t[i];if(u)if((0,s.$3)(a,i))B!==a[i]&&(a[i]=B,l=!0);else{const t=(0,s.PT)(i);o[t]=st(u,c,t,B,e,!1)}else B!==a[i]&&(a[i]=B,l=!0)}}l&&(0,r.hZ)(e.attrs,"set","")}function rt(e,t,n,i){const[o,a]=e.propsOptions;let B,c=!1;if(t)for(let r in t){if((0,s.SU)(r))continue;const u=t[r];let l;o&&(0,s.$3)(o,l=(0,s.PT)(r))?a&&a.includes(l)?(B||(B={}))[l]=u:n[l]=u:je(e.emitsOptions,r)||r in i&&u===i[r]||(i[r]=u,c=!0)}if(a){const t=(0,r.ux)(n),i=B||s.MZ;for(let r=0;r<a.length;r++){const B=a[r];n[B]=st(o,t,B,i[B],e,!(0,s.$3)(i,B))}}return c}function st(e,t,n,r,i,o){const a=e[n];if(null!=a){const e=(0,s.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,s.Tn)(e)){const{propsDefaults:s}=i;if(n in s)r=s[n];else{const o=Cn(i);r=s[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,s.Tg)(n)||(r=!0))}return r}const it=new WeakMap;function ot(e,t,n=!1){const r=n?it:t.propsCache,i=r.get(e);if(i)return i;const o=e.props,a={},B=[];let c=!1;if(!(0,s.Tn)(e)){const r=e=>{c=!0;const[n,r]=ot(e,t,!0);(0,s.X$)(a,n),r&&B.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!c)return(0,s.Gv)(e)&&r.set(e,s.Oj),s.Oj;if((0,s.cy)(o))for(let l=0;l<o.length;l++){0;const e=(0,s.PT)(o[l]);at(e)&&(a[e]=s.MZ)}else if(o){0;for(const e in o){const t=(0,s.PT)(e);if(at(t)){const n=o[e],r=a[t]=(0,s.cy)(n)||(0,s.Tn)(n)?{type:n}:(0,s.X$)({},n),i=r.type;let c=!1,u=!0;if((0,s.cy)(i))for(let e=0;e<i.length;++e){const t=i[e],n=(0,s.Tn)(t)&&t.name;if("Boolean"===n){c=!0;break}"String"===n&&(u=!1)}else c=(0,s.Tn)(i)&&"Boolean"===i.name;r[0]=c,r[1]=u,(c||(0,s.$3)(r,"default"))&&B.push(t)}}}const u=[a,B];return(0,s.Gv)(e)&&r.set(e,u),u}function at(e){return"$"!==e[0]&&!(0,s.SU)(e)}const Bt=e=>"_"===e||"_ctx"===e||"$stable"===e,ct=e=>(0,s.cy)(e)?e.map(en):[en(e)],ut=(e,t,n)=>{if(t._n)return t;const r=S((...e)=>ct(t(...e)),n);return r._c=!1,r},lt=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Bt(i))continue;const n=e[i];if((0,s.Tn)(n))t[i]=ut(i,n,r);else if(null!=n){0;const e=ct(n);t[i]=()=>e}}},ht=(e,t)=>{const n=ct(t);e.slots.default=()=>n},Ct=(e,t,n)=>{for(const r in t)!n&&Bt(r)||(e[r]=t[r])},pt=(e,t,n)=>{const r=e.slots=Ze();if(32&e.vnode.shapeFlag){const e=t._;e?(Ct(r,t,n),n&&(0,s.yQ)(r,"_",e,!0)):lt(t,r)}else t&&ht(e,t)},dt=(e,t,n)=>{const{vnode:r,slots:i}=e;let o=!0,a=s.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:Ct(i,t,n):(o=!t.$stable,lt(t,i)),a=t}else t&&(ht(e,t),a={default:1});if(o)for(const s in i)Bt(s)||null!=a[s]||delete i[s]};function ft(){}const gt=Ot;function mt(e){return Et(e)}function Et(e,t){ft();const n=(0,s.We)();n.__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:B,createText:c,createComment:u,setText:l,setElementText:h,parentNode:C,nextSibling:p,setScopeId:d=s.tE,insertStaticContent:f}=e,g=(e,t,n,r=null,s=null,i=null,o=void 0,a=null,B=!!t.dynamicChildren)=>{if(e===t)return;e&&!jt(e,t)&&(r=ee(e),q(e,s,i,!0),e=null),-2===t.patchFlag&&(B=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:l}=t;switch(c){case Nt:E(e,t,n,r);break;case Ft:D(e,t,n,r);break;case Lt:null==e&&_(t,n,r,o);break;case At:R(e,t,n,r,s,i,o,a,B);break;default:1&l?T(e,t,n,r,s,i,o,a,B):6&l?k(e,t,n,r,s,i,o,a,B):(64&l||128&l)&&c.process(e,t,n,r,s,i,o,a,B,re)}null!=u&&s?Q(u,e&&e.ref,i,t||e,!t):null==u&&e&&null!=e.ref&&Q(e.ref,null,i,e,!0)},E=(e,t,n,r)=>{if(null==e)i(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},D=(e,t,n,r)=>{null==e?i(t.el=u(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=f(e.children,t,n,r,e.el,e.anchor)},v=({el:e,anchor:t},n,r)=>{let s;while(e&&e!==t)s=p(e),i(e,n,r),e=s;i(t,n,r)},I=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},T=(e,t,n,r,s,i,o,a,B)=>{if("svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e)b(t,n,r,s,i,o,a,B);else{const n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),N(e,t,s,i,o,a,B)}finally{n&&n._endPatch()}}},b=(e,t,n,r,o,c,u,l)=>{let C,p;const{props:d,shapeFlag:f,transition:g,dirs:m}=e;if(C=e.el=B(e.type,c,d&&d.is,d),8&f?h(C,e.children):16&f&&O(e.children,C,null,r,o,Dt(e,c),u,l),m&&A(e,null,r,"created"),S(C,e,e.scopeId,u,r),d){for(const e in d)"value"===e||(0,s.SU)(e)||a(C,e,null,d[e],c,r);"value"in d&&a(C,"value",null,d.value,c),(p=d.onVnodeBeforeMount)&&sn(p,r,e)}m&&A(e,null,r,"beforeMount");const E=wt(o,g);if(E&&g.beforeEnter(C),i(C,t,n),(p=d&&d.onVnodeMounted)||E||m){gt(()=>{try{p&&sn(p,r,e),E&&g.enter(C),m&&A(e,null,r,"mounted")}finally{0}},o)}},S=(e,t,n,r,s)=>{if(n&&d(e,n),r)for(let i=0;i<r.length;i++)d(e,r[i]);if(s){let n=s.subTree;if(t===n||St(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=s.vnode;S(e,t,t.scopeId,t.slotScopeIds,s.parent)}}},O=(e,t,n,r,s,i,o,a,B=0)=>{for(let c=B;c<e.length;c++){const B=e[c]=a?tn(e[c]):en(e[c]);g(null,B,t,n,r,s,i,o,a)}},N=(e,t,n,r,i,o,B)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:l,dirs:C}=t;u|=16&e.patchFlag;const p=e.props||s.MZ,d=t.props||s.MZ;let f;if(n&&yt(n,!1),(f=d.onVnodeBeforeUpdate)&&sn(f,n,t,e),C&&A(t,e,n,"beforeUpdate"),n&&yt(n,!0),!l||e.dynamicChildren&&e.dynamicChildren.length===l.length||(u=0,B=!1,l=null),(p.innerHTML&&null==d.innerHTML||p.textContent&&null==d.textContent)&&h(c,""),l?F(e.dynamicChildren,l,c,n,r,Dt(t,i),o):B||V(e,t,c,null,n,r,Dt(t,i),o,!1),u>0){if(16&u)L(c,p,d,n,i);else if(2&u&&p.class!==d.class&&a(c,"class",null,d.class,i),4&u&&a(c,"style",p.style,d.style,i),8&u){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const r=e[t],s=p[r],o=d[r];o===s&&"value"!==r||a(c,r,s,o,i,n)}}1&u&&e.children!==t.children&&h(c,t.children)}else B||null!=l||L(c,p,d,n,i);((f=d.onVnodeUpdated)||C)&&gt(()=>{f&&sn(f,n,t,e),C&&A(t,e,n,"updated")},r)},F=(e,t,n,r,s,i,o)=>{for(let a=0;a<t.length;a++){const B=e[a],c=t[a],u=B.el&&(B.type===At||!jt(B,c)||198&B.shapeFlag)?C(B.el):n;g(B,c,u,null,r,s,i,o,!0)}},L=(e,t,n,r,i)=>{if(t!==n){if(t!==s.MZ)for(const o in t)(0,s.SU)(o)||o in n||a(e,o,t[o],null,i,r);for(const o in n){if((0,s.SU)(o))continue;const B=n[o],c=t[o];B!==c&&"value"!==o&&a(e,o,c,B,i,r)}"value"in n&&a(e,"value",t.value,n.value,i)}},R=(e,t,n,r,s,o,a,B,u)=>{const l=t.el=e?e.el:c(""),h=t.anchor=e?e.anchor:c("");let{patchFlag:C,dynamicChildren:p,slotScopeIds:d}=t;d&&(B=B?B.concat(d):d),null==e?(i(l,n,r),i(h,n,r),O(t.children||[],n,h,s,o,a,B,u)):C>0&&64&C&&p&&e.dynamicChildren&&e.dynamicChildren.length===p.length?(F(e.dynamicChildren,p,n,s,o,a,B),(null!=t.key||s&&t===s.subTree)&&_t(e,t,!0)):V(e,t,n,h,s,o,a,B,u)},k=(e,t,n,r,s,i,o,a,B)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?s.ctx.activate(t,n,r,o,B):P(t,n,r,s,i,o,B):x(e,t,B)},P=(e,t,n,r,s,i,o)=>{const a=e.component=Bn(e,r,s);if(Y(e)&&(a.ctx.renderer=re),En(a,!1,o),a.asyncDep){if(s&&s.registerDep(a,M,o),!e.el){const r=a.subTree=Qt(Ft);D(null,r,t,n),e.placeholder=r.el}}else M(a,e,t,n,s,i,o)},x=(e,t,n)=>{const r=t.component=e.component;if(Qe(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void H(r,t,n);r.next=t,r.update()}else t.el=e.el,r.vnode=t},M=(e,t,n,i,o,a,B)=>{const c=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:i,vnode:c}=e;{const n=It(e);if(n)return t&&(t.el=c.el,H(e,t,B)),void n.asyncDep.then(()=>{gt(()=>{e.isUnmounted||l()},o)})}let u,h=t;0,yt(e,!1),t?(t.el=c.el,H(e,t,B)):t=c,n&&(0,s.DY)(n),(u=t.props&&t.props.onVnodeBeforeUpdate)&&sn(u,i,t,c),yt(e,!0);const p=Ke(e);0;const d=e.subTree;e.subTree=p,g(d,p,C(d.el),ee(d),e,o,a),t.el=p.el,null===h&&Ye(e,p.el),r&&gt(r,o),(u=t.props&&t.props.onVnodeUpdated)&&gt(()=>sn(u,i,t,c),o)}else{let r;const{el:B,props:c}=t,{bm:u,m:l,parent:h,root:C,type:p}=e,d=W(t);if(yt(e,!1),u&&(0,s.DY)(u),!d&&(r=c&&c.onVnodeBeforeMount)&&sn(r,h,t),yt(e,!0),B&&ie){const t=()=>{e.subTree=Ke(e),ie(B,e.subTree,e,o,null)};d&&p.__asyncHydrate?p.__asyncHydrate(B,e,t):t()}else{C.ce&&C.ce._hasShadowRoot()&&C.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);const r=e.subTree=Ke(e);0,g(null,r,n,i,e,o,a),t.el=r.el}if(l&&gt(l,o),!d&&(r=c&&c.onVnodeMounted)){const e=t;gt(()=>sn(r,h,e),o)}(256&t.shapeFlag||h&&W(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&gt(e.a,o),e.isMounted=!0,t=n=i=null}};e.scope.on();const u=e.effect=new r.X2(c);e.scope.off();const l=e.update=u.run.bind(u),h=e.job=u.runIfDirty.bind(u);h.i=e,h.id=e.uid,u.scheduler=()=>m(h),yt(e,!0),l()},H=(e,t,n)=>{t.component=e;const s=e.vnode.props;e.vnode=t,e.next=null,nt(e,t.props,s,n),dt(e,t.children,n),(0,r.C4)(),y(e),(0,r.bl)()},V=(e,t,n,r,s,i,o,a,B=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,l=t.children,{patchFlag:C,shapeFlag:p}=t;if(C>0){if(128&C)return void j(c,l,n,r,s,i,o,a,B);if(256&C)return void J(c,l,n,r,s,i,o,a,B)}8&p?(16&u&&Z(c,s,i),l!==c&&h(n,l)):16&u?16&p?j(c,l,n,r,s,i,o,a,B):Z(c,s,i,!0):(8&u&&h(n,""),16&p&&O(l,n,r,s,i,o,a,B))},J=(e,t,n,r,i,o,a,B,c)=>{e=e||s.Oj,t=t||s.Oj;const u=e.length,l=t.length,h=Math.min(u,l);let C;for(C=0;C<h;C++){const r=t[C]=c?tn(t[C]):en(t[C]);g(e[C],r,n,null,i,o,a,B,c)}u>l?Z(e,i,o,!0,!1,h):O(t,n,r,i,o,a,B,c,h)},j=(e,t,n,r,i,o,a,B,c)=>{let u=0;const l=t.length;let h=e.length-1,C=l-1;while(u<=h&&u<=C){const r=e[u],s=t[u]=c?tn(t[u]):en(t[u]);if(!jt(r,s))break;g(r,s,n,null,i,o,a,B,c),u++}while(u<=h&&u<=C){const r=e[h],s=t[C]=c?tn(t[C]):en(t[C]);if(!jt(r,s))break;g(r,s,n,null,i,o,a,B,c),h--,C--}if(u>h){if(u<=C){const e=C+1,s=e<l?t[e].el:r;while(u<=C)g(null,t[u]=c?tn(t[u]):en(t[u]),n,s,i,o,a,B,c),u++}}else if(u>C)while(u<=h)q(e[u],i,o,!0),u++;else{const p=u,d=u,f=new Map;for(u=d;u<=C;u++){const e=t[u]=c?tn(t[u]):en(t[u]);null!=e.key&&f.set(e.key,u)}let m,E=0;const D=C-d+1;let y=!1,w=0;const _=new Array(D);for(u=0;u<D;u++)_[u]=0;for(u=p;u<=h;u++){const r=e[u];if(E>=D){q(r,i,o,!0);continue}let s;if(null!=r.key)s=f.get(r.key);else for(m=d;m<=C;m++)if(0===_[m-d]&&jt(r,t[m])){s=m;break}void 0===s?q(r,i,o,!0):(_[s-d]=u+1,s>=w?w=s:y=!0,g(r,t[s],n,null,i,o,a,B,c),E++)}const v=y?vt(_):s.Oj;for(m=v.length-1,u=D-1;u>=0;u--){const e=d+u,s=t[e],h=t[e+1],C=e+1<l?h.el||bt(h):r;0===_[u]?g(null,s,n,C,i,o,a,B,c):y&&(m<0||u!==v[m]?K(s,n,C,2):m--)}}},K=(e,t,n,r,s=null)=>{const{el:a,type:B,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void K(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void B.move(e,t,n,re);if(B===At){i(a,t,n);for(let e=0;e<u.length;e++)K(u[e],t,n,r);return void i(e.anchor,t,n)}if(B===Lt)return void v(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.persisted&&!a[U]?i(a,t,n):(c.beforeEnter(a),i(a,t,n),gt(()=>c.enter(a),s));else{const{leave:r,delayLeave:s,afterLeave:B}=c,u=()=>{e.ctx.isUnmounted?o(a):i(a,t,n)},l=()=>{const e=a._isLeaving||!!a[U];a._isLeaving&&a[U](!0),c.persisted&&!e?u():r(a,()=>{u(),B&&B()})};s?s(a,u,l):l()}else i(a,t,n)},q=(e,t,n,s=!1,i=!1)=>{const{type:o,props:a,ref:B,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:C,cacheIndex:p,memo:d}=e;if(-2===h&&(i=!1),null!=B&&((0,r.C4)(),Q(B,null,n,e,!0),(0,r.bl)()),null!=p&&(t.renderCache[p]=void 0),256&l)return void t.ctx.deactivate(e);const f=1&l&&C,g=!W(e);let m;if(g&&(m=a&&a.onVnodeBeforeUnmount)&&sn(m,t,e),6&l)X(e.component,n,s);else{if(128&l)return void e.suspense.unmount(n,s);f&&A(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,re,s):u&&!u.hasOnce&&(o!==At||h>0&&64&h)?Z(u,t,n,!1,!0):(o===At&&384&h||!i&&16&l)&&Z(c,t,n),s&&z(e)}const E=null!=d&&null==p;(g&&(m=a&&a.onVnodeUnmounted)||f||E)&&gt(()=>{m&&sn(m,t,e),f&&A(e,null,t,"unmounted"),E&&(e.el=null)},n)},z=e=>{const{type:t,el:n,anchor:r,transition:s}=e;if(t===At)return void $(n,r);if(t===Lt)return void I(e);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,o=()=>t(n,i);r?r(e.el,i,o):o()}else i()},$=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},X=(e,t,n)=>{const{bum:r,scope:i,job:o,subTree:a,um:B,m:c,a:u}=e;Tt(c),Tt(u),r&&(0,s.DY)(r),i.stop(),o&&(o.flags|=8,q(a,e,t,n)),B&&gt(B,t),gt(()=>{e.isUnmounted=!0},t)},Z=(e,t,n,r=!1,s=!1,i=0)=>{for(let o=i;o<e.length;o++)q(e[o],t,n,r,s)},ee=e=>{if(6&e.shapeFlag)return ee(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=p(e.anchor||e.el),n=t&&t[G];return n?p(n):t};let te=!1;const ne=(e,t,n)=>{let r;null==e?t._vnode&&(q(t._vnode,null,null,!0),r=t._vnode.component):g(t._vnode||null,e,t,null,null,null,n),t._vnode=e,te||(te=!0,y(r),w(),te=!1)},re={p:g,um:q,m:K,r:z,mt:P,mc:O,pc:V,pbc:F,n:ee,o:e};let se,ie;return t&&([se,ie]=t(re)),{render:ne,hydrate:se,createApp:Me(ne,se)}}function Dt({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function yt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function wt(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function _t(e,t,n=!1){const r=e.children,i=t.children;if((0,s.cy)(r)&&(0,s.cy)(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=tn(i[s]),t.el=e.el),n||-2===t.patchFlag||_t(e,t)),t.type===Nt&&(-1===t.patchFlag&&(t=i[s]=tn(t)),t.el=e.el),t.type!==Ft||t.el||(t.el=e.el)}}function vt(e){const t=e.slice(),n=[0];let r,s,i,o,a;const B=e.length;for(r=0;r<B;r++){const B=e[r];if(0!==B){if(s=n[n.length-1],e[s]<B){t[r]=s,n.push(r);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,e[n[a]]<B?i=a+1:o=a;B<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=t[o];return n}function It(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:It(t)}function Tt(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function bt(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?bt(t.subTree):null}const St=e=>e.__isSuspense;function Ot(e,t){t&&t.pendingBranch?(0,s.cy)(e)?t.effects.push(...e):t.effects.push(e):D(e)}const At=Symbol.for("v-fgt"),Nt=Symbol.for("v-txt"),Ft=Symbol.for("v-cmt"),Lt=Symbol.for("v-stc"),Rt=[];let kt=null;function Pt(e=!1){Rt.push(kt=e?null:[])}function xt(){Rt.pop(),kt=Rt[Rt.length-1]||null}let Mt=1;function Gt(e,t=!1){Mt+=e,e<0&&kt&&t&&(kt.hasOnce=!0)}function Ht(e){return e.dynamicChildren=Mt>0?kt||s.Oj:null,xt(),Mt>0&&kt&&kt.push(e),e}function Ut(e,t,n,r,s,i){return Ht(zt(e,t,n,r,s,i,!0))}function Vt(e,t,n,r,s){return Ht(Qt(e,t,n,r,s,!0))}function Jt(e){return!!e&&!0===e.__v_isVNode}function jt(e,t){return e.type===t.type&&e.key===t.key}const Kt=({key:e})=>null!=e?e:null,qt=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,s.Kg)(e)||(0,r.i9)(e)||(0,s.Tn)(e)?{i:I,r:e,k:t,f:!!n}:e:null);function zt(e,t=null,n=null,r=0,i=null,o=(e===At?0:1),a=!1,B=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Kt(t),ref:t&&qt(t),scopeId:T,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:I};return B?(nn(c,n),128&o&&e.normalize(c)):n&&(c.shapeFlag|=(0,s.Kg)(n)?8:16),Mt>0&&!a&&kt&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&kt.push(c),c}const Qt=$t;function $t(e,t=null,n=null,i=0,o=null,a=!1){if(e&&e!==pe||(e=Ft),Jt(e)){const r=Yt(e,t,!0);return n&&nn(r,n),Mt>0&&!a&&kt&&(6&r.shapeFlag?kt[kt.indexOf(e)]=r:kt.push(r)),r.patchFlag=-2,r}if(Tn(e)&&(e=e.__vccOpts),t){t=Wt(t);let{class:e,style:n}=t;e&&!(0,s.Kg)(e)&&(t.class=(0,s.C4)(e)),(0,s.Gv)(n)&&((0,r.ju)(n)&&!(0,s.cy)(n)&&(n=(0,s.X$)({},n)),t.style=(0,s.Tr)(n))}const B=(0,s.Kg)(e)?1:St(e)?128:H(e)?64:(0,s.Gv)(e)?4:(0,s.Tn)(e)?2:0;return zt(e,t,n,i,o,B,a,!0)}function Wt(e){return e?(0,r.ju)(e)||et(e)?(0,s.X$)({},e):e:null}function Yt(e,t,n=!1,r=!1){const{props:i,ref:o,patchFlag:a,children:B,transition:c}=e,u=t?rn(i||{},t):i,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Kt(u),ref:t&&t.ref?n&&o?(0,s.cy)(o)?o.concat(qt(t)):[o,qt(t)]:qt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:B,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==At?-1===a?16:16|a:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yt(e.ssContent),ssFallback:e.ssFallback&&Yt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&j(l,c.clone(l)),l}function Xt(e=" ",t=0){return Qt(Nt,null,e,t)}function Zt(e="",t=!1){return t?(Pt(),Vt(Ft,null,e)):Qt(Ft,null,e)}function en(e){return null==e||"boolean"===typeof e?Qt(Ft):(0,s.cy)(e)?Qt(At,null,e.slice()):Jt(e)?tn(e):Qt(Nt,null,String(e))}function tn(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Yt(e)}function nn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,s.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),nn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||et(t)?3===r&&I&&(1===I.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=I}}else if((0,s.Tn)(t)){if(65&r)return void nn(e,{default:t});t={default:t,_ctx:I},n=32}else t=String(t),64&r?(n=16,t=[Xt(t)]):n=8;e.children=t,e.shapeFlag|=n}function rn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,s.C4)([t.class,r.class]));else if("style"===e)t.style=(0,s.Tr)([t.style,r.style]);else if((0,s.Mp)(e)){const n=t[e],i=r[e];!i||n===i||(0,s.cy)(n)&&n.includes(i)?null!=i||null!=n||(0,s.CP)(e)||(t[e]=i):t[e]=n?[].concat(n,i):i}else""!==e&&(t[e]=r[e])}return t}function sn(e,t,n,r=null){o(e,t,7,[n,r])}const on=Pe();let an=0;function Bn(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||on,a={uid:an++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ot(i,o),emitsOptions:Je(i,o),emit:null,emitted:null,propsDefaults:s.MZ,inheritAttrs:i.inheritAttrs,ctx:s.MZ,data:s.MZ,props:s.MZ,attrs:s.MZ,slots:s.MZ,refs:s.MZ,setupState:s.MZ,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Ue.bind(null,a),e.ce&&e.ce(a),a}let cn=null;const un=()=>cn||I;let ln,hn;{const e=(0,s.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ln=t("__VUE_INSTANCE_SETTERS__",e=>cn=e),hn=t("__VUE_SSR_SETTERS__",e=>mn=e)}const Cn=e=>{const t=cn;return ln(e),e.scope.on(),()=>{e.scope.off(),ln(t)}},pn=()=>{cn&&cn.scope.off(),ln(null)};function dn(e){return 4&e.vnode.shapeFlag}let fn,gn,mn=!1;function En(e,t=!1,n=!1){t&&hn(t);const{props:r,children:s}=e.vnode,i=dn(e);tt(e,r,i,t),pt(e,s,n||t);const o=i?Dn(e,t):void 0;return t&&hn(!1),o}function Dn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ee);const{setup:o}=n;if(o){(0,r.C4)();const n=e.setupContext=o.length>1?vn(e):null,B=Cn(e),c=i(o,e,0,[e.props,n]),u=(0,s.yL)(c);if((0,r.bl)(),B(),!u&&!e.sp||W(e)||K(e),u){if(c.then(pn,pn),t)return c.then(n=>{hn(!0);try{yn(e,n,t)}finally{hn(!1)}}).catch(t=>{a(t,e,0)});e.asyncDep=c}else yn(e,c,t)}else wn(e,t)}function yn(e,t,n){(0,s.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,s.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),wn(e,n)}function wn(e,t,n){const i=e.type;if(!e.render){if(!t&&fn&&!i.render){const t=i.template||Te(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=i,B=(0,s.X$)((0,s.X$)({isCustomElement:n,delimiters:o},r),a);i.render=fn(t,B)}}e.render=i.render||s.tE,gn&&gn(e)}{const t=Cn(e);(0,r.C4)();try{we(e)}finally{(0,r.bl)(),t()}}}const _n={get(e,t){return(0,r.u4)(e,"get",""),e[t]}};function vn(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,_n),slots:e.slots,emit:e.emit,expose:t}}function In(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in ge?ge[n](e):void 0},has(e,t){return t in e||t in ge}})):e.proxy}function Tn(e){return(0,s.Tn)(e)&&"__vccOpts"in e}const bn=(e,t)=>{const n=(0,r.EW)(e,t,mn);return n};const Sn="3.5.42";n.d(t,["EW",0,bn,"FK",0,At,"bF",0,Qt,"sV",0,ie,"xo",0,Be])},751:function(e,t,n){var r=n(641),s=(n(953),n(33));
/**
* @vue/runtime-dom v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let i;const o="undefined"!==typeof window&&window.trustedTypes;if(o)try{i=o.createPolicy("vue",{createHTML:e=>e})}catch(ue){}const a=i?e=>i.createHTML(e):e=>e,B="http://www.w3.org/2000/svg",c="http://www.w3.org/1998/Math/MathML",u="undefined"!==typeof document?document:null,l=u&&u.createElement("template"),h={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s="svg"===t?u.createElementNS(B,e):"mathml"===t?u.createElementNS(c,e):n?u.createElement(e,{is:n}):u.createElement(e);return"select"===e&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:e=>u.createTextNode(e),createComment:e=>u.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>u.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling)){while(1)if(t.insertBefore(s.cloneNode(!0),n),s===i||!(s=s.nextSibling))break}else{l.innerHTML=a("svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e);const s=l.content;if("svg"===r||"mathml"===r){const e=s.firstChild;while(e.firstChild)s.appendChild(e.firstChild);s.removeChild(e)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},C=Symbol("_vtc");function p(e,t,n){const r=e[C];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const d=Symbol("_vod"),f=Symbol("_vsh");const g=Symbol("");const m=/(?:^|;)\s*display\s*:/;function E(e,t,n){const r=e.style,i=(0,s.Kg)(n);let o=!1;if(n&&!i){if(t)if((0,s.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&y(r,t,"")}else for(const e in t)null==n[e]&&y(r,e,"");for(const i in n){"display"===i&&(o=!0);const a=n[i];null!=a?I(e,i,!(0,s.Kg)(t)&&t?t[i]:void 0,a)||y(r,i,a):y(r,i,"")}}else if(i){if(t!==n){const e=r[g];e&&(n+=";"+e),r.cssText=n,o=m.test(n)}}else t&&e.removeAttribute("style");d in e&&(e[d]=o?r.display:"",e[f]&&(r.display="none"))}const D=/\s*!important$/;function y(e,t,n){if((0,s.cy)(n))n.forEach(n=>y(e,t,n));else if(null==n&&(n=""),t.startsWith("--"))D.test(n)?e.setProperty(t,n.replace(D,""),"important"):e.setProperty(t,n);else{const r=v(e,t);D.test(n)?e.setProperty((0,s.Tg)(r),n.replace(D,""),"important"):e[r]=n}}const w=["Webkit","Moz","ms"],_={};function v(e,t){const n=_[t];if(n)return n;let r=(0,s.PT)(t);if("filter"!==r&&r in e)return _[t]=r;r=(0,s.ZH)(r);for(let s=0;s<w.length;s++){const n=w[s]+r;if(n in e)return _[t]=n}return t}function I(e,t,n,r){return"TEXTAREA"===e.tagName&&("width"===t||"height"===t)&&(0,s.Kg)(r)&&n===r}const T="http://www.w3.org/1999/xlink";function b(e,t,n,r,i,o=(0,s.J$)(t)){r&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(T,t.slice(6,t.length)):e.setAttributeNS(T,t,n):null==n||o&&!(0,s.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,o?"":(0,s.Bm)(n)?String(n):n)}function S(e,t,n,r,i){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?a(n):n));const o=e.tagName;if("value"===t&&"PROGRESS"!==o&&!o.includes("-")){const r="OPTION"===o?e.getAttribute("value")||"":e.value,s=null==n?"checkbox"===e.type?"on":"":String(n);return r===s&&"_value"in e||(e.value=s),null==n&&e.removeAttribute(t),void(e._value=n)}let B=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,s.Y2)(n):null==n&&"string"===r?(n="",B=!0):"number"===r&&(n=0,B=!0)}try{e[t]=n}catch(ue){0}B&&e.removeAttribute(i||t)}function O(e,t,n,r){e.addEventListener(t,n,r)}function A(e,t,n,r){e.removeEventListener(t,n,r)}const N=Symbol("_vei");function F(e,t,n,r,s=null){const i=e[N]||(e[N]={}),o=i[t];if(r&&o)o.value=r;else{const[n,a]=k(t);if(r){const o=i[t]=G(r,s);O(e,n,o,a)}else o&&(A(e,n,o,a),i[t]=void 0)}}const L=/(Once|Passive|Capture)$/,R=/^on:?(?:Once|Passive|Capture)$/;function k(e){let t,n;while((n=e.match(L))&&!R.test(e))t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;const r=":"===e[2]?e.slice(3):(0,s.Tg)(e.slice(2));return[r,t]}let P=0;const x=Promise.resolve(),M=()=>P||(x.then(()=>P=0),P=Date.now());function G(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();const i=n.value;if((0,s.cy)(i)){const n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};const s=i.slice(),o=[e];for(let i=0;i<s.length;i++){if(e._stopped)break;const n=s[i];n&&(0,r.qL)(n,t,5,o)}}else(0,r.qL)(i,t,5,[e])};return n.value=e,n.attached=M(),n}const H=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,U=(e,t,n,r,i,o)=>{const a="svg"===i;"class"===t?p(e,r,a):"style"===t?E(e,n,r):(0,s.Mp)(t)?(0,s.CP)(t)||F(e,t,n,r,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):V(e,t,r,a))?(S(e,t,r),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||b(e,t,r,a,o,"value"!==t)):e._isVueCE&&(J(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!(0,s.Kg)(r)))?S(e,(0,s.PT)(t),r,o,t):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),b(e,t,r,a))};function V(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&H(t)&&(0,s.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t||"autocorrect"===t)return!1;if("sandbox"===t&&"IFRAME"===e.tagName)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!H(t)||!(0,s.Kg)(n))&&t in e}function J(e,t){const n=e._def.props;if(!n)return!1;const r=(0,s.PT)(t);return Array.isArray(n)?n.some(e=>(0,s.PT)(e)===r):Object.keys(n).some(e=>(0,s.PT)(e)===r)}"undefined"!==typeof HTMLElement&&HTMLElement;const j=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,s.cy)(t)?e=>(0,s.DY)(t,e):t};function K(e){e.target.composing=!0}function q(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const z=Symbol("_assign"),Q=Symbol("_initialValue");function $(e,t,n){return t&&(e=e.trim()),n&&(e=(0,s.bB)(e)),e}const W={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e.parentNode&&("text"===e.type?e[Q]=e.defaultValue.replace(/[\r\n]/g,""):"textarea"===e.type&&(e[Q]=e.defaultValue.replace(/\r\n?/g,"\n"))),e[z]=j(s);const i=r||s.props&&"number"===s.props.type;O(e,t?"change":"input",t=>{t.target.composing||e[z]($(e.value,n,i))}),(n||i)&&O(e,"change",()=>{e.value=$(e.value,n,i)}),t||(O(e,"compositionstart",K),O(e,"compositionend",q),O(e,"change",q))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){const s=null==t?"":t,i=e[Q];delete e[Q],void 0===i||"text"!==e.type&&"textarea"!==e.type||e.value===i?e.value=s:e[z]($(e.value,n,r))},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:o}},a){if(e[z]=j(a),e.composing)return;const B=!o&&"number"!==e.type||/^0\d/.test(e.value)?e.value:(0,s.bB)(e.value),c=null==t?"":t;if(B===c)return;const u=e.getRootNode();if((u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&"range"!==e.type){if(r&&t===n)return;if(i&&e.value.trim()===c)return}e.value=c}};const Y={deep:!0,created(e,{value:t,modifiers:{number:n}},i){e._modelValue=t,O(e,"change",()=>{const t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?(0,s.bB)(ee(e)):ee(e)),i=e.multiple,o=i?(0,s.vM)(e._modelValue)?new Set(t):t:t[0],a=e._pendingValue=[i,i?(0,s.cy)(o)?t.slice():t:o];try{e[z](o)}finally{(0,r.dY)(()=>{e._pendingValue===a&&(e._pendingValue=void 0)})}}),e[z]=j(i)},mounted(e,{value:t}){Z(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[z]=j(n)},updated(e,{value:t}){const n=e._pendingValue;e._pendingValue=void 0,n&&n[0]===e.multiple&&X(t,n[1],n[0])||Z(e,t)}};function X(e,t,n){if(!n)return(0,s.BX)(e,t);if((0,s.cy)(e))return(0,s.BX)(e,t);if((0,s.vM)(e)){if(e.size!==t.length)return!1;for(const n of t)if(!e.has(n))return!1;return!0}return!1}function Z(e,t){const n=e.multiple,r=(0,s.cy)(t);if(!n||r||(0,s.vM)(t)){for(let i=0,o=e.options.length;i<o;i++){const o=e.options[i],a=ee(o);if(n)if(r){const e=typeof a;o.selected="string"===e||"number"===e?t.some(e=>String(e)===String(a)):(0,s.u3)(t,a)>-1}else o.selected=t.has(a);else if((0,s.BX)(ee(o),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function ee(e){return"_value"in e?e._value:e.value}const te=["ctrl","shift","alt","meta"],ne={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>te.some(n=>e[`${n}Key`]&&!t.includes(n))},re=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=ne[t[e]];if(r&&r(n,t))return}return e(n,...r)})},se=(0,s.X$)({patchProp:U},h);let ie;function oe(){return ie||(ie=(0,r.K9)(se))}const ae=(...e)=>{const t=oe().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=ce(e);if(!r)return;const i=t._component;(0,s.Tn)(i)||i.render||i.template||(i.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const o=n(r,!1,Be(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Be(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function ce(e){if((0,s.Kg)(e)){const t=document.querySelector(e);return t}return e}n.d(t,["D$",0,re,"Ef",0,ae,"Jo",0,W,"u1",0,Y])},33:function(e,t,n){
/**
* @vue/shared v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function r(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}n.d(t,{BX:function(){return ee},C4:function(){return Q},Tr:function(){return J},Y2:function(){return Y},pD:function(){return r},u3:function(){return te}});const s={},i=[],o=()=>{},a=()=>!1,B=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),c=e=>e.startsWith("onUpdate:"),u=Object.assign,l=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},h=Object.prototype.hasOwnProperty,C=(e,t)=>h.call(e,t),p=Array.isArray,d=e=>"[object Map]"===v(e),f=e=>"[object Set]"===v(e),g=e=>"[object Date]"===v(e),m=e=>"function"===typeof e,E=e=>"string"===typeof e,D=e=>"symbol"===typeof e,y=e=>null!==e&&"object"===typeof e,w=e=>(y(e)||m(e))&&m(e.then)&&m(e.catch),_=Object.prototype.toString,v=e=>_.call(e),I=e=>v(e).slice(8,-1),T=e=>"[object Object]"===v(e),b=e=>E(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,S=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),O=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},A=/-\w/g,N=O(e=>e.replace(A,e=>e.slice(1).toUpperCase())),F=/\B([A-Z])/g,L=O(e=>e.replace(F,"-$1").toLowerCase()),R=O(e=>e.charAt(0).toUpperCase()+e.slice(1)),k=O(e=>{const t=e?`on${R(e)}`:"";return t}),P=(e,t)=>!Object.is(e,t),x=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},M=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},G=e=>{const t=parseFloat(e);return isNaN(t)?e:t},H=e=>{const t=E(e)?Number(e):NaN;return isNaN(t)?e:t};let U;const V=()=>U||(U="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});function J(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=E(r)?z(r):J(r);if(s)for(const e in s)t[e]=s[e]}return t}if(E(e)||y(e))return e}const j=/;(?![^(]*\))/g,K=/:([^]+)/,q=/\/\*[^]*?\*\//g;function z(e){const t={};return e.replace(q,"").split(j).forEach(e=>{if(e){const n=e.split(K);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Q(e){let t="";if(E(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=Q(e[n]);r&&(t+=r+" ")}else if(y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const $="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",W=r($);function Y(e){return!!e||""===e}function X(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ee(e[r],t[r]);return n}function Z(e,t){if(e.size!==t.size)return!1;const n=Array.from(t),r=new Uint8Array(n.length);for(const s of e){let e=-1;for(let t=0;t<n.length;t++)if(!r[t]&&ee(s,n[t])){e=t;break}if(e<0)return!1;r[e]=1}return!0}function ee(e,t){if(e===t)return!0;let n=g(e),r=g(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=D(e),r=D(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&X(e,t);if(n=y(e),r=y(t),n||r){if(!n||!r)return!1;if(n=d(e),r=d(t),n||r)return!(!n||!r)&&Z(e,t);if(n=f(e),r=f(t),n||r)return!(!n||!r)&&Z(e,t);const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const n in e){const r=e.hasOwnProperty(n),s=t.hasOwnProperty(n);if(r&&!s||!r&&s||!ee(e[n],t[n]))return!1}}return String(e)===String(t)}function te(e,t){return e.findIndex(e=>ee(e,t))}const ne=e=>!(!e||!0!==e["__v_isRef"]),re=e=>E(e)?e:null==e?"":p(e)||y(e)&&(e.toString===_||!m(e.toString))?ne(e)?re(e.value):JSON.stringify(e,se,2):String(e),se=(e,t)=>ne(t)?se(e,t.value):d(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[ie(t,r)+" =>"]=n,e),{})}:f(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ie(e))}:D(t)?ie(t):!y(t)||p(t)||T(t)?t:String(t),ie=(e,t="")=>{var n;return D(e)?`Symbol(${null!=(n=e.description)?n:t})`:e};n.d(t,["$3",0,C,"$H",0,P,"Bm",0,D,"CE",0,d,"CP",0,c,"DY",0,x,"Gv",0,y,"J$",0,W,"Kg",0,E,"MZ",0,s,"Mp",0,B,"NO",0,a,"Oj",0,i,"PT",0,N,"Qd",0,T,"Ro",0,H,"SU",0,S,"TF",0,l,"Tg",0,L,"Tn",0,m,"We",0,V,"X$",0,u,"ZH",0,R,"Zf",0,I,"bB",0,G,"cy",0,p,"rU",0,k,"tE",0,o,"vM",0,f,"v_",0,re,"yI",0,b,"yL",0,w,"yQ",0,M])},879:function(e,t,n){n.d(t,{MF:function(){return Ee},j6:function(){return pe},xZ:function(){return de},om:function(){return Ce},Sx:function(){return ye},Dk:function(){return we},Wp:function(){return De},KO:function(){return _e}});var r=n(711),s=n(722),i=n(734);const o=(e,t)=>t.some(t=>e instanceof t);let a,B;function c(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return B||(B=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l=new WeakMap,h=new WeakMap,C=new WeakMap,p=new WeakMap,d=new WeakMap;function f(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(w(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)});return t.then(t=>{t instanceof IDBCursor&&l.set(t,e)}).catch(()=>{}),d.set(t,e),t}function g(e){if(h.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)});h.set(e,t)}let m={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||C.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return w(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function E(e){m=e(m)}function D(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(_(this),t),w(l.get(this))}:function(...t){return w(e.apply(_(this),t))}:function(t,...n){const r=e.call(_(this),t,...n);return C.set(r,t.sort?t.sort():[t]),w(r)}}function y(e){return"function"===typeof e?D(e):(e instanceof IDBTransaction&&g(e),o(e,c())?new Proxy(e,m):e)}function w(e){if(e instanceof IDBRequest)return f(e);if(p.has(e))return p.get(e);const t=y(e);return t!==e&&(p.set(e,t),d.set(t,e)),t}const _=e=>d.get(e);function v(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=w(o);return r&&o.addEventListener("upgradeneeded",e=>{r(w(o.result),e.oldVersion,e.newVersion,w(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),a.then(e=>{i&&e.addEventListener("close",()=>i()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a}const I=["get","getKey","getAll","getAllKeys","count"],T=["put","add","delete","clear"],b=new Map;function S(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(b.get(t))return b.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=T.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!I.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&i.done]))[0]};return b.set(t,i),i}E(e=>({...e,get:(t,n,r)=>S(t,n)||e.get(t,n,r),has:(t,n)=>!!S(t,n)||e.has(t,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(A(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function A(e){const t=e.getComponent();return"VERSION"===t?.type}const N="@firebase/app",F="0.16.2",L=new s.Vy("@firebase/app"),R="@firebase/app-compat",k="@firebase/analytics-compat",P="@firebase/analytics",x="@firebase/app-check-compat",M="@firebase/app-check",G="@firebase/auth",H="@firebase/auth-compat",U="@firebase/database",V="@firebase/data-connect",J="@firebase/database-compat",j="@firebase/functions",K="@firebase/functions-compat",q="@firebase/installations",z="@firebase/installations-compat",Q="@firebase/messaging",$="@firebase/messaging-compat",W="@firebase/performance",Y="@firebase/performance-compat",X="@firebase/remote-config",Z="@firebase/remote-config-compat",ee="@firebase/storage",te="@firebase/storage-compat",ne="@firebase/firestore",re="@firebase/ai",se="@firebase/firestore-compat",ie="firebase",oe="12.19.0",ae="[DEFAULT]",Be={[N]:"fire-core",[R]:"fire-core-compat",[P]:"fire-analytics",[k]:"fire-analytics-compat",[M]:"fire-app-check",[x]:"fire-app-check-compat",[G]:"fire-auth",[H]:"fire-auth-compat",[U]:"fire-rtdb",[V]:"fire-data-connect",[J]:"fire-rtdb-compat",[j]:"fire-fn",[K]:"fire-fn-compat",[q]:"fire-iid",[z]:"fire-iid-compat",[Q]:"fire-fcm",[$]:"fire-fcm-compat",[W]:"fire-perf",[Y]:"fire-perf-compat",[X]:"fire-rc",[Z]:"fire-rc-compat",[ee]:"fire-gcs",[te]:"fire-gcs-compat",[ne]:"fire-fst",[se]:"fire-fst-compat",[re]:"fire-vertex","fire-js":"fire-js",[ie]:"fire-js-all"},ce=new Map,ue=new Map,le=new Map;function he(e,t){try{e.container.addComponent(t)}catch(n){L.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ce(e){const t=e.name;if(le.has(t))return L.debug(`There were multiple attempts to register component ${t}.`),!1;le.set(t,e);for(const n of ce.values())he(n,e);for(const n of ue.values())he(n,e);return!0}function pe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function de(e){return null!==e&&void 0!==e&&void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fe={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},ge=new i.FA("app","Firebase",fe);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ee=oe;function De(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const s={name:ae,automaticDataCollectionEnabled:!0,...t},o=s.name;if("string"!==typeof o||!o)throw ge.create("bad-app-name",{appName:String(o)});if(n||(n=(0,i.T9)()),!n)throw ge.create("no-options");const a=ce.get(o);if(a){if((0,i.bD)(n,a.options)){if((0,i.bD)(s,a.config))return a;throw ge.create("duplicate-app",{appName:o,mismatchedParam:"config",oldValue:JSON.stringify(a.config),newValue:JSON.stringify(s)})}throw ge.create("duplicate-app",{appName:o,mismatchedParam:"options",oldValue:JSON.stringify(a.options),newValue:JSON.stringify(n)})}const B=new r.h1(o);for(const r of le.values())B.addComponent(r);const c=new me(n,s,B);return ce.set(o,c),c}function ye(e=ae){const t=ce.get(e);if(!t&&e===ae&&(0,i.T9)())return De();if(!t)throw ge.create("no-app",{appName:e});return t}function we(){return Array.from(ce.values())}function _e(e,t,n){let s=Be[e]??e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${s}" with version "${t}":`];return i&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void L.warn(e.join(" "))}Ce(new r.uA(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ve="firebase-heartbeat-database",Ie=1,Te="firebase-heartbeat-store";let be=null;function Se(){return be||(be=v(ve,Ie,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Te)}catch(n){console.warn(n)}}}}).catch(e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})})),be}async function Oe(e){try{const t=await Se(),n=t.transaction(Te),r=await n.objectStore(Te).get(Ne(e));return await n.done,r}catch(t){if(t instanceof i.g)L.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:t?.message});L.warn(e.message)}}}async function Ae(e,t){try{const n=await Se(),r=n.transaction(Te,"readwrite"),s=r.objectStore(Te);await s.put(t,Ne(e)),await r.done}catch(n){if(n instanceof i.g)L.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:n?.message});L.warn(e.message)}}}function Ne(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=1024,Le=30;class Re{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xe(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=ke();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>Le){const e=Ge(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){L.warn(e)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const e=ke(),{heartbeatsToSend:t,unsentEntries:n}=Pe(this._heartbeatsCache.heartbeats),r=(0,i.Uj)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return L.warn(e),""}}}function ke(){const e=new Date;return e.toISOString().substring(0,10)}function Pe(e,t=Fe){const n=[];let r=e.slice();for(const s of e){const e=n.find(e=>e.agent===s.agent);if(e){if(e.dates.push(s.date),Me(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Me(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.zW)()&&(0,i.eX)().then(()=>!0).catch(()=>!1)}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Oe(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return Ae(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){const t=await this._canUseIndexedDBPromise;if(t){const t=await this.read();return Ae(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Me(e){return(0,i.Uj)(JSON.stringify({version:2,heartbeats:e})).length}function Ge(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e){Ce(new r.uA("platform-logger",e=>new O(e),"PRIVATE")),Ce(new r.uA("heartbeat",e=>new Re(e),"PRIVATE")),_e(N,F,e),_e(N,F,"esm2020"),_e("fire-js","")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He("")},711:function(e,t,n){n.d(t,{h1:function(){return c},uA:function(){return s}});var r=n(734);class s{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(B(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(s);n===e&&i.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===i?void 0:e}function B(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},722:function(e,t,n){n.d(t,{$b:function(){return s},Vy:function(){return c}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var s;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},B=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=a[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=B,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}},223:function(e,t,n){n.d(t,{Dk:function(){return r.Dk},Wp:function(){return r.Wp}});var r=n(879),s="firebase",i="12.19.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(s,i,"app")},692:function(e,t,n){n.d(t,{xI:function(){return Zr},hg:function(){return Ht},x9:function(){return xt},CI:function(){return Ut}});var r=n(879),s=n(734),i=n(722),o=n(711);function a(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const B=a,c=new s.FA("auth","Firebase",a()),u=new i.Vy("@firebase/auth");function l(e,...t){u.logLevel<=i.$b.WARN&&u.warn(`Auth (${r.MF}): ${e}`,...t)}function h(e,...t){u.logLevel<=i.$b.ERROR&&u.error(`Auth (${r.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function d(e,t,n){const r={...B(),[t]:n},i=new s.FA("auth","Firebase",r);return i.create(t,{appName:e.name})}function f(e){return d(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function g(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return c.create(e,...t)}function m(e,t,...n){if(!e)throw g(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw h(t),new Error(t)}function D(e,t){e||E(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(){return"undefined"!==typeof self&&self.location?.href||""}function w(){return"http:"===_()||"https:"===_()}function _(){return"undefined"!==typeof self&&self.location?.protocol||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(w()||(0,s.sr)()||"connection"in navigator))||navigator.onLine}function I(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,t){this.shortDelay=e,this.longDelay=t,D(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,s.jZ)()||(0,s.lV)()}get(){return v()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t){D(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},A=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],N=new T(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function L(e,t,n,r,i={}){return R(e,i,async()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const a=(0,s.Am)({...o,key:e.config.apiKey}).slice(1),B=await e._getAdditionalHeaders();B["Content-Type"]="application/json",e.languageCode&&(B["X-Firebase-Locale"]=e.languageCode);const c={method:t,headers:B,...i};return(0,s.c1)()||(c.referrerPolicy="strict-origin-when-cross-origin"),e.emulatorConfig&&(0,s.zJ)(e.emulatorConfig.host)&&(c.credentials="include"),S.fetch()(await P(e,e.config.apiHost,n,a),c)})}async function R(e,t,n){e._canInitEmulator=!1;const r={...O,...t};try{const t=new M(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw G(e,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const t=s.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw G(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw G(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw G(e,"user-disabled",i);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw d(e,a,o);C(e,a)}}catch(i){if(i instanceof s.g)throw i;C(e,"network-request-failed",{message:String(i)})}}async function k(e,t,n,r,s={}){const i=await L(e,t,n,r,s);return"mfaPendingCredential"in i&&C(e,"multi-factor-auth-required",{_serverResponse:i}),i}async function P(e,t,n,r){const s=`${t}${n}?${r}`,i=e,o=i.config.emulator?b(e.config,s):`${e.config.apiScheme}://${s}`;if(A.includes(n)&&(await i._persistenceManagerAvailable,"COOKIE"===i._getPersistenceType())){const e=i._getPersistence();return e._getFinalTarget(o).toString()}return o}function x(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class M{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"network-request-failed")),N.get())})}}function G(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=p(e,t,r);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){return void 0!==e&&void 0!==e.enterprise}class U{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return x(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t){return L(e,"GET","/v2/recaptchaConfig",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function j(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(e,t=!1){const n=(0,s.Ku)(e),r=await n.getIdToken(t),i=Q(r);m(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o="object"===typeof i.firebase?i.firebase:void 0,a=o?.["sign_in_provider"];return{claims:i,token:r,authTime:K(z(i.auth_time)),issuedAtTime:K(z(i.iat)),expirationTime:K(z(i.exp)),signInProvider:a||null,signInSecondFactor:o?.["sign_in_second_factor"]||null}}function z(e){return 1e3*Number(e)}function Q(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return h("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,s.u)(n);return e?JSON.parse(e):(h("Failed to decode base64 JWT payload"),null)}catch(i){return h("Caught error parsing JWT payload as JSON",i?.toString()),null}}function $(e){const t=Q(e);return m(t,"internal-error"),m("undefined"!==typeof t.exp,"internal-error"),m("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof s.g&&Y(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Y({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=this.user.stsTokenManager.expirationTime??0,t=e-Date.now()-3e5;return Math.max(0,t)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e?.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e){const t=e.auth,n=await e.getIdToken(),r=await W(e,j(t,{idToken:n}));m(r?.users.length,t,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const i=s.providerUserInfo?.length?re(s.providerUserInfo):[],o=ne(e.providerData,i),a=e.isAnonymous,B=!(e.email&&s.passwordHash)&&!o?.length,c=!!a&&B,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Z(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,u)}async function te(e){const t=(0,s.Ku)(e);await ee(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ne(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function re(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(e,t){const n=await R(e,{},async()=>{const n=(0,s.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=await P(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const B={method:"POST",headers:a,body:n};return e.emulatorConfig&&(0,s.zJ)(e.emulatorConfig.host)&&(B.credentials="include"),S.fetch()(o,B)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ie(e,t){return L(e,"POST","/v2/accounts:revokeToken",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){m(e.idToken,"internal-error"),m("undefined"!==typeof e.idToken,"internal-error"),m("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):$(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){m(0!==e.length,"internal-error");const t=$(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(m(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await se(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new oe;return n&&(m("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(m("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(m("number"===typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oe,this.toJSON())}_performRefresh(){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e,t){m("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class Be{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Z(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await W(this,this.stsTokenManager.getToken(this.auth,e));return m(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q(this,e)}reload(){return te(this)}_assign(e){this!==e&&(m(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Be({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){m(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ee(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,r.xZ)(this.auth.app))return Promise.reject(f(this.auth));const e=await this.getIdToken();return await W(this,J(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,s=t.phoneNumber??void 0,i=t.photoURL??void 0,o=t.tenantId??void 0,a=t._redirectEventId??void 0,B=t.createdAt??void 0,c=t.lastLoginAt??void 0,{uid:u,emailVerified:l,isAnonymous:h,providerData:C,stsTokenManager:p}=t;m(u&&p,e,"internal-error");const d=oe.fromJSON(this.name,p);m("string"===typeof u,e,"internal-error"),ae(n,e.name),ae(r,e.name),m("boolean"===typeof l,e,"internal-error"),m("boolean"===typeof h,e,"internal-error"),ae(s,e.name),ae(i,e.name),ae(o,e.name),ae(a,e.name),ae(B,e.name),ae(c,e.name);const f=new Be({uid:u,auth:e,email:r,emailVerified:l,displayName:n,isAnonymous:h,photoURL:i,phoneNumber:s,tenantId:o,stsTokenManager:d,createdAt:B,lastLoginAt:c});return C&&Array.isArray(C)&&(f.providerData=C.map(e=>({...e}))),a&&(f._redirectEventId=a),f}static async _fromIdTokenResponse(e,t,n=!1){const r=new oe;r.updateFromServerResponse(t);const s=new Be({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ee(s),s}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];m(void 0!==r.localId,"internal-error");const s=void 0!==r.providerUserInfo?re(r.providerUserInfo):[],i=!(r.email&&r.passwordHash)&&!s?.length,o=new oe;o.updateFromIdToken(n);const a=new Be({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:i}),B={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Z(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!s?.length};return Object.assign(a,B),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new Map;function ue(e){D(e instanceof Function,"Expected a class definition");let t=ce.get(e);return t?(D(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ce.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}le.type="NONE";const he=le;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e,t,n){return`firebase:${e}:${t}:${n}`}class pe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=Ce(this.userKey,r.apiKey,s),this.fullPersistenceKey=Ce("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"===typeof e){const t=await j(this.auth,{idToken:e}).catch(()=>{});return t?Be._fromGetAccountInfoResponse(this.auth,t,e):null}return Be._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,n="authUser"){if(!t.length)return new pe(ue(he),e,n);const r=(await Promise.all(t.map(async e=>{try{if(await e._isAvailable())return e}catch{return}}))).filter(e=>e);let s=r[0]||ue(he);const i=Ce(n,e.config.apiKey,e.name);let o=null;for(const B of t)try{const t=await B._get(i);if(t){let n;if("string"===typeof t){const r=await j(e,{idToken:t}).catch(()=>{});if(!r)break;n=await Be._fromGetAccountInfoResponse(e,r,t)}else n=Be._fromJSON(e,t);B!==s&&(o=n),s=B;break}}catch{}const a=r.filter(e=>e._shouldAllowMigration);return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==s)try{await e._remove(i)}catch{}})),new pe(s,e,n)):new pe(s,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ee(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fe(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ye(t))return"Blackberry";if(we(t))return"Webos";if(ge(t))return"Safari";if((t.includes("chrome/")||me(t))&&!t.includes("edge/"))return"Chrome";if(De(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===n?.length)return n[1]}return"Other"}function fe(e=(0,s.ZQ)()){return/firefox\//i.test(e)}function ge(e=(0,s.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function me(e=(0,s.ZQ)()){return/crios\//i.test(e)}function Ee(e=(0,s.ZQ)()){return/iemobile/i.test(e)}function De(e=(0,s.ZQ)()){return/android/i.test(e)}function ye(e=(0,s.ZQ)()){return/blackberry/i.test(e)}function we(e=(0,s.ZQ)()){return/webos/i.test(e)}function _e(e=(0,s.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ve(e=(0,s.ZQ)()){return _e(e)&&!!window.navigator?.standalone}function Ie(){return(0,s.lT)()&&10===document.documentMode}function Te(e=(0,s.ZQ)()){return _e(e)||De(e)||we(e)||ye(e)||/windows phone/i.test(e)||Ee(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e,t=[]){let n;switch(e){case"Browser":n=de((0,s.ZQ)());break;case"Worker":n=`${de((0,s.ZQ)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.MF}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{const r=e(t);n(r)}catch(s){r(s)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(e,t={}){return L(e,"GET","/v2/passwordPolicy",F(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=6;class Ne{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Ae,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Re(this),this.idTokenSubscription=new Re(this),this.beforeStateQueue=new Se(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ue(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted){try{this.persistenceManager=await pe.create(this,e)}catch(n){l(`Failed to initialize persistence: ${n}`),this.persistenceManager=await pe.create(this,[])}finally{this._resolvePersistenceManagerAvailable?.()}if(!this._deleted){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(n){}try{await this.initializeCurrentUser(t)}catch(n){l(`Failed to initialize current user: ${n}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await j(this,{idToken:e}),n=await Be._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if((0,r.xZ)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,r=n?._redirectEventId,i=await this.tryRedirectSignIn(e);t&&t!==r||!i?.user||(n=i.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return m(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ee(e)}catch(t){if("auth/network-request-failed"!==t?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=I()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,r.xZ)(this.app))return Promise.reject(f(this));const t=e?(0,s.Ku)(e):null;return t&&m(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&m(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(0,r.xZ)(this.app)?Promise.reject(f(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,r.xZ)(this.app)?Promise.reject(f(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ue(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Oe(this),t=new Ne(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new s.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await ie(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ue(e)||this._popupRedirectResolver;m(t,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[ue(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"===typeof t?t:t.next.bind(t);let i=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(m(o,this,"internal-error"),o.then(()=>{i||s(this.currentUser)}).catch(e=>{if(!i)if("function"!==typeof t&&t.error)t.error(e);else{if(!n)throw e;n(e)}}),"function"===typeof t){const s=e.addObserver(t,n,r);return()=>{i=!0,s()}}{const n=e.addObserver(t);return()=>{i=!0,n()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const e=t?.message||String(t),n=d(this,"internal-error",`An internal AuthError has occurred: ${e}`);throw n.customData={originalError:t},n}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return m(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=be(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if((0,r.xZ)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&l(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Le(e){return(0,s.Ku)(e)}class Re{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,s.tD)(e=>this.observer=e)}get next(){return m(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ke={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Pe(e){ke=e}function xe(e){return ke.loadJS(e)}function Me(){return ke.recaptchaEnterpriseScript}function Ge(){return ke.gapiScript}function He(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(){this.enterprise=new Ve}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ve{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Je="recaptcha-enterprise",je="NO_RECAPTCHA",Ke="onFirebaseAuthREInstanceReady";class qe{constructor(e){this.type=Je,this.auth=Le(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{V(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new U(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})}function r(t,n,r){const s=window.grecaptcha;H(s)?s.enterprise.ready(()=>{s.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(je)})}):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){const e=new Ue;return e.execute("siteKey",{action:"verify"})}return new Promise((e,i)=>{n(this.auth).then(async n=>{if(!t&&H(window.grecaptcha)&&qe.scriptInjectionDeferred)await qe.scriptInjectionDeferred.promise,r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=Me();0!==t.length&&(t+=n+`&onload=${Ke}`),qe.scriptInjectionDeferred=new s.cY,window[Ke]=()=>{qe.scriptInjectionDeferred?.resolve()},xe(t).then(()=>qe.scriptInjectionDeferred?.promise).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function ze(e,t,n,r=!1,s=!1){const i=new qe(e);let o;if(s)o=je;else try{o=await i.verify(n)}catch(B){o=await i.verify(n,!0)}const a={...t};if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Qe(e,t,n,r,s){if("EMAIL_PASSWORD_PROVIDER"===s){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await ze(e,t,n,"getOobCode"===n);return r(e,s)}return r(e,t).catch(async s=>{if("auth/missing-recaptcha-token"===s.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await ze(e,t,n,"getOobCode"===n);return r(e,s)}return Promise.reject(s)})}if("PHONE_PROVIDER"===s){if(e._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const s=await ze(e,t,n);return r(e,s).catch(async s=>{if("AUDIT"===e._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")&&("auth/missing-recaptcha-token"===s.code||"auth/invalid-app-credential"===s.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const s=await ze(e,t,n,!1,!0);return r(e,s)}return Promise.reject(s)})}{const s=await ze(e,t,n,!1,!0);return r(e,s)}}return Promise.reject(s+" provider is not supported.")}async function $e(e){const t=Le(e),n=await V(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new U(n);if(null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()){const e=new qe(t);e.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e,t){const n=(0,r.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,s.bD)(r,t??{}))return e;C(e,"already-initialized")}const i=n.initialize({options:t});return i}function Ye(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(ue);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function Xe(e,t,n){const r=Le(e);m(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!n?.disableWarnings,o=Ze(t),{host:a,port:B}=et(t),c=null===B?"":`:${B}`,u={url:`${o}//${a}${c}/`},l=Object.freeze({host:a,port:B,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator)return m(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void m((0,s.bD)(u,r.config.emulator)&&(0,s.bD)(l,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=u,r.emulatorConfig=l,r.settings.appVerificationDisabledForTesting=!0,(0,s.zJ)(a)?(0,s.gE)(`${o}//${a}${c}`):i||nt()}function Ze(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function et(e){const t=Ze(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const e=s[1];return{host:e,port:tt(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:tt(t)}}}function tt(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function nt(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe.scriptInjectionDeferred=null;class rt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(e,t){return L(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t){return k(e,"POST","/v1/accounts:signInWithPassword",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ot(e,t){return k(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}async function at(e,t){return k(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends rt{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Bt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Bt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if(t?.email&&t?.password){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qe(e,t,"signInWithPassword",it,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ot(e,{email:this._email,oobCode:this._password});default:C(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qe(e,n,"signUpPassword",st,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return at(e,{idToken:t,email:this._email,oobCode:this._password});default:C(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(e,t){return k(e,"POST","/v1/accounts:signInWithIdp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="http://localhost";class lt extends rt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):C("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,...s}=t;if(!n||!r)return null;const i=new lt(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){const t=this.buildRequest();return ct(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ct(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ct(e,t)}buildRequest(){const e={requestUri:ut,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,s.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",F(e,t))}async function Ct(e,t){return k(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t))}async function pt(e,t){const n=await k(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t));if(n.temporaryProof)throw G(e,"account-exists-with-different-credential",n);return n}const dt={["USER_NOT_FOUND"]:"user-not-found"};async function ft(e,t){const n={...t,operation:"REAUTH"};return k(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,n),dt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends rt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new gt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new gt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Ct(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return pt(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return ft(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}=e;return n||t||r||s?new gt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Et(e){const t=(0,s.I9)((0,s.hp)(e))["link"],n=t?(0,s.I9)((0,s.hp)(t))["deep_link_id"]:null,r=(0,s.I9)((0,s.hp)(e))["deep_link_id"],i=r?(0,s.I9)((0,s.hp)(r))["link"]:null;return i||r||n||t||e}class Dt{constructor(e){const t=(0,s.I9)((0,s.hp)(e)),n=t["apiKey"]??null,r=t["oobCode"]??null,i=mt(t["mode"]??null);m(n&&r&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t["continueUrl"]??null,this.languageCode=t["lang"]??null,this.tenantId=t["tenantId"]??null}static parseLink(e){const t=Et(e);try{return new Dt(t)}catch{return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(){this.providerId=yt.PROVIDER_ID}static credential(e,t){return Bt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Dt.parseLink(t);return m(n,"argument-error"),Bt._fromEmailAndCode(e,n.code,n.tenantId)}}yt.PROVIDER_ID="password",yt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",yt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends wt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt extends _t{constructor(){super("facebook.com")}static credential(e){return lt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com",vt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It extends _t{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return lt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return It.credential(t,n)}catch{return null}}}It.GOOGLE_SIGN_IN_METHOD="google.com",It.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt extends _t{constructor(){super("github.com")}static credential(e){return lt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com",Tt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt extends _t{constructor(){super("twitter.com")}static credential(e,t){return lt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return bt.credential(t,n)}catch{return null}}}bt.TWITTER_SIGN_IN_METHOD="twitter.com",bt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await Be._fromIdTokenResponse(e,n,r),i=Ot(n),o=new St({user:s,providerId:i,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ot(n);return new St({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ot(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At extends s.g{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,At.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new At(e,t,n,r)}}function Nt(e,t,n,r){const s="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return s.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw At._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(e,t,n=!1){const r=await W(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return St._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Lt(e,t,n=!1){const{auth:s}=e;if((0,r.xZ)(s.app))return Promise.reject(f(s));const i="reauthenticate";try{const r=await W(e,Nt(s,i,t,e),n);m(r.idToken,s,"internal-error");const o=Q(r.idToken);m(o,s,"internal-error");const{sub:a}=o;return m(e.uid===a,s,"user-mismatch"),St._forOperation(e,i,r)}catch(o){throw"auth/user-not-found"===o?.code&&C(s,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(f(e));const s="signIn",i=await Nt(e,s,t),o=await St._fromIdTokenResponse(e,s,i);return n||await e._updateCurrentUser(o.user),o}async function kt(e,t){return Rt(Le(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pt(e){const t=Le(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function xt(e,t,n){return(0,r.xZ)(e.app)?Promise.reject(f(e)):kt((0,s.Ku)(e),yt.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Pt(e),t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e,t,n,r){return(0,s.Ku)(e).onIdTokenChanged(t,n,r)}function Gt(e,t,n){return(0,s.Ku)(e).beforeAuthStateChanged(t,n)}function Ht(e,t,n,r){return(0,s.Ku)(e).onAuthStateChanged(t,n,r)}function Ut(e){return(0,s.Ku)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function Jt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function jt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function Kt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}new WeakMap;const qt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qt,"1"),this.storage.removeItem(qt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=1e3,$t=10;class Wt extends zt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Te(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);Ie()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,$t):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Qt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wt.type="LOCAL";const Yt=Wt,Xt=1e3;
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(e){const t=e.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),n=RegExp(`${t}=([^;]+)`);return document.cookie.match(n)?.[1]??null}function en(e){const t="http:"===window.location.protocol;return`${t?"__dev_":"__HOST-"}FIREBASE_${e.split(":")[3]}`}class tn{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(void 0===typeof window)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return!("boolean"===typeof isSecureContext&&!isSecureContext)&&("undefined"!==typeof navigator&&"undefined"!==typeof document&&(navigator.cookieEnabled??!0))}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=en(e);if(window.cookieStore){const e=await window.cookieStore.get(t);return e?.value}return Zt(t)}async _remove(e){if(!this._isAvailable())return;const t=await this._get(e);if(!t)return;const n=en(e);document.cookie=`${n}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const n=en(e);if(window.cookieStore){const e=e=>{const r=e.changed.find(e=>e.name===n);r&&t(r.value);const s=e.deleted.find(e=>e.name===n);s&&t(null)},r=()=>window.cookieStore.removeEventListener("change",e);return this.listenerUnsubscribes.set(t,r),window.cookieStore.addEventListener("change",e)}let r=Zt(n);const s=setInterval(()=>{const e=Zt(n);e!==r&&(t(e),r=e)},Xt),i=()=>clearInterval(s);this.listenerUnsubscribes.set(t,i)}_removeListener(e,t){const n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}}tn.type="COOKIE";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nn extends zt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nn.type="SESSION";const rn=nn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new on(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!i?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map(async e=>e(t.origin,s)),a=await sn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function an(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.receivers=[];class Bn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise((o,a)=>{const B=an("",20);r.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===B)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:B,data:t},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function un(e){cn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return"undefined"!==typeof cn()["WorkerGlobalScope"]&&"function"===typeof cn()["importScripts"]}async function hn(){if(!navigator?.serviceWorker)return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch{return null}}function Cn(){return navigator?.serviceWorker?.controller||null}function pn(){return ln()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn="firebaseLocalStorageDb",fn=1,gn="firebaseLocalStorage",mn="fbase_key";class En{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dn(e,t){return e.transaction([gn],t?"readwrite":"readonly").objectStore(gn)}function yn(){const e=indexedDB.deleteDatabase(dn);return new En(e).toPromise()}function wn(){const e=indexedDB.open(dn,fn);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(gn,{keyPath:mn})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(gn)?t(n):(n.close(),await yn(),t(await wn()))})})}async function _n(e,t,n){const r=Dn(e,!0).put({[mn]:t,value:n});return new En(r).toPromise()}async function vn(e,t){const n=Dn(e,!1).get(t),r=await new En(n).toPromise();return void 0===r?null:r.value}function In(e,t){const n=Dn(e,!0).delete(t);return new En(n).toPromise()}const Tn=800,bn=3;class Sn{registerLifecycleListeners(){"undefined"!==typeof window&&"function"===typeof window.addEventListener&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){"undefined"!==typeof window&&"function"===typeof window.removeEventListener&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise||(this.dbPromise=wn(),this.dbPromise.catch(()=>{this.dbPromise=null})),this.dbPromise}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>bn)throw n;if(this.dbPromise){const e=this.dbPromise;this.dbPromise=null;try{const t=await e;t.close()}catch{}}}}async initializeServiceWorkerMessaging(){return ln()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=on._getInstance(pn()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await hn(),!this.activeServiceWorker)return;this.sender=new Bn(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Cn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return!!indexedDB&&(await this._withRetries(async e=>{await _n(e,qt,"1"),await In(e,qt)}),!0)}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>_n(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>vn(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>In(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(e=>{const t=Dn(e,!1).getAll();return new En(t).toPromise()});if(this.isClosing)return[];if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}catch(e){return this.isClosing||l(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Sn.type="LOCAL";const On=Sn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",F(e,t))}function Nn(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}function Fn(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */He("rcb"),new T(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ln="recaptcha";async function Rn(e,t,n){if(!e._getRecaptchaConfig())try{await $e(e)}catch(r){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(r="string"===typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){m("enroll"===t.type,e,"internal-error");const s={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},i=async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===je){m(n?.type===Ln,e,"argument-error");const r=await kn(e,t,n);return Vt(e,r)}return Vt(e,t)},o=Qe(e,s,"mfaSmsEnrollment",i,"PHONE_PROVIDER"),a=await o.catch(e=>Promise.reject(e));return a.phoneSessionInfo.sessionInfo}{m("signin"===t.type,e,"internal-error");const s=r.multiFactorHint?.uid||r.multiFactorUid;m(s,e,"missing-multi-factor-info");const i={mfaPendingCredential:t.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},o=async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===je){m(n?.type===Ln,e,"argument-error");const r=await kn(e,t,n);return An(e,r)}return An(e,t)},a=Qe(e,i,"mfaSmsSignIn",o,"PHONE_PROVIDER"),B=await a.catch(e=>Promise.reject(e));return B.phoneResponseInfo.sessionInfo}}{const t={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"},s=async(e,t)=>{if(t.captchaResponse===je){m(n?.type===Ln,e,"argument-error");const r=await kn(e,t,n);return ht(e,r)}return ht(e,t)},i=Qe(e,t,"sendVerificationCode",s,"PHONE_PROVIDER"),o=await i.catch(e=>Promise.reject(e));return o.sessionInfo}}finally{n?._reset()}}async function kn(e,t,n){m(n.type===Ln,e,"argument-error");const r=await n.verify();m("string"===typeof r,e,"argument-error");const s={...t};if("phoneEnrollmentInfo"in s){const e=s.phoneEnrollmentInfo.phoneNumber,t=s.phoneEnrollmentInfo.captchaResponse,n=s.phoneEnrollmentInfo.clientType,i=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:i}}),s}if("phoneSignInInfo"in s){const e=s.phoneSignInInfo.captchaResponse,t=s.phoneSignInInfo.clientType,n=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),s}return Object.assign(s,{recaptchaToken:r}),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.providerId=Pn.PROVIDER_ID,this.auth=Le(e)}verifyPhoneNumber(e,t){return Rn(this.auth,e,(0,s.Ku)(t))}static credential(e,t){return gt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Pn.credentialFromTaggedObject(t)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?gt._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xn(e,t){return t?ue(t):(m(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn.PROVIDER_ID="phone",Pn.PHONE_SIGN_IN_METHOD="phone";class Mn extends rt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ct(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ct(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ct(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Gn(e){return Rt(e.auth,new Mn(e),e.bypassAuthState)}function Hn(e){const{auth:t,user:n}=e;return m(n,t,"internal-error"),Lt(n,new Mn(e),e.bypassAuthState)}async function Un(e){const{auth:t,user:n}=e;return m(n,t,"internal-error"),Ft(n,new Mn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(B){this.reject(B)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gn;case"linkViaPopup":case"linkViaRedirect":return Un;case"reauthViaPopup":case"reauthViaRedirect":return Hn;default:C(this.auth,"internal-error")}}resolve(e){D(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){D(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new T(2e3,1e4);class jn extends Vn{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,jn.currentPopupAction&&jn.currentPopupAction.cancel(),jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return m(e,this.auth,"internal-error"),e}async onExecution(){D(1===this.filter.length,"Popup operations only handle one event");const e=an();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,Jn.get())};e()}}jn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kn="pendingRedirect",qn=new Map;class zn extends Vn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=qn.get(this.auth._key());if(!e){try{const t=await Qn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}qn.set(this.auth._key(),e)}return this.bypassAuthState||qn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Qn(e,t){const n=Yn(t),r=Wn(e);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}function $n(e,t){qn.set(e._key(),t)}function Wn(e){return ue(e._redirectPersistence)}function Yn(e){return Ce(Kn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(e,t,n=!1){if((0,r.xZ)(e.app))return Promise.reject(f(e));const s=Le(e),i=xn(s,t),o=new zn(s,i,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zn=6e5;class er{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rr(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!nr(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(p(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zn&&this.cachedEventUids.clear(),this.cachedEventUids.has(tr(e))}saveEventToCache(e){this.cachedEventUids.add(tr(e)),this.lastProcessedEventTime=Date.now()}}function tr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function nr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}function rr(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,or=/^https?/;async function ar(e){if(e.config.emulator)return;const{authorizedDomains:t}=await sr(e);for(const n of t)try{if(Br(n))return}catch{}C(e,"unauthorized-domain")}function Br(e){const t=y(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!or.test(n))return!1;if(ir.test(e))return r===e;const s=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+s+"|"+s+")$","i");return i.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new T(3e4,6e4);function ur(){const e=cn().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function lr(e){return new Promise((t,n)=>{function r(){ur(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ur(),n(p(e,"network-request-failed"))},timeout:cr.get()})}if(cn().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!cn().gapi?.load){const t=He("iframefcb");return cn()[t]=()=>{gapi.load?r():n(p(e,"network-request-failed"))},xe(`${Ge()}?onload=${t}`).catch(e=>n(e))}r()}}).catch(e=>{throw hr=null,e})}let hr=null;function Cr(e){return hr=hr||lr(e),hr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new T(5e3,15e3),dr="__/auth/iframe",fr="emulator/auth/iframe",gr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Er(e){const t=e.config;m(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?b(t,fr):`https://${e.config.authDomain}/${dr}`,i={apiKey:t.apiKey,appName:e.name,v:r.MF},o=mr.get(e.config.apiHost);o&&(i.eid=o);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${(0,s.Am)(i).slice(1)}`}async function Dr(e){const t=await Cr(e),n=cn().gapi;return m(n,e,"internal-error"),t.open({where:document.body,url:Er(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gr,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=p(e,"network-request-failed"),i=cn().setTimeout(()=>{r(s)},pr.get());function o(){cn().clearTimeout(i),n(t)}t.ping(o).then(o,()=>{r(s)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wr=500,_r=600,vr="_blank",Ir="http://localhost";class Tr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function br(e,t,n,r=wr,i=_r){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let B="";const c={...yr,width:r.toString(),height:i.toString(),top:o,left:a},u=(0,s.ZQ)().toLowerCase();n&&(B=me(u)?vr:n),fe(u)&&(t=t||Ir,c.scrollbars="yes");const l=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(ve(u)&&"_self"!==B)return Sr(t||"",B),new Tr(null);const h=window.open(t||"",B,l);m(h,e,"popup-blocked");try{h.focus()}catch(C){}return new Tr(h)}function Sr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="__/auth/handler",Ar="emulator/auth/handler",Nr=encodeURIComponent("fac");async function Fr(e,t,n,i,o,a){m(e.config.authDomain,e,"auth-domain-config-required"),m(e.config.apiKey,e,"invalid-api-key");const B={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:r.MF,eventId:o};if(t instanceof wt){t.setDefaultLanguage(e.languageCode),B.providerId=t.providerId||"",(0,s.Im)(t.getCustomParameters())||(B.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))B[e]=t}if(t instanceof _t){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(B.scopes=e.join(","))}e.tenantId&&(B.tid=e.tenantId);const c=B;for(const r of Object.keys(c))void 0===c[r]&&delete c[r];const u=await e._getAppCheckToken(),l=u?`#${Nr}=${encodeURIComponent(u)}`:"";return`${Lr(e)}?${(0,s.Am)(c).slice(1)}${l}`}function Lr({config:e}){return e.emulator?b(e,Ar):`https://${e.authDomain}/${Or}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="webStorageSupport";class kr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rn,this._completeRedirectFn=Xn,this._overrideRedirectResult=$n}async _openPopup(e,t,n,r){D(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await Fr(e,t,n,y(),r);return br(e,s,an())}async _openRedirect(e,t,n,r){await this._originValidation(e);const s=await Fr(e,t,n,y(),r);return un(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(D(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Dr(e),n=new er(e);return t.register("authEvent",t=>{m(t?.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Rr,{type:Rr},n=>{const r=n?.[0]?.[Rr];void 0!==r&&t(!!r),C(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ar(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Te()||ge()||_e()}}const Pr=kr;class xr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}}class Mr extends xr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Mr(e)}_finalizeEnroll(e,t,n){return Jt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Nn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Gr{constructor(){}static assertion(e){return Mr._fromCredential(e)}}Gr.FACTOR_ID="phone";class Hr{static assertionForEnrollment(e,t){return Ur._fromSecret(e,t)}static assertionForSignIn(e,t){return Ur._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;m("undefined"!==typeof t.user?.auth,"internal-error");const n=await jt(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Vr._fromStartTotpMfaEnrollmentResponse(n,t.user.auth)}}Hr.FACTOR_ID="totp";class Ur extends xr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Ur(t,void 0,e)}static _fromEnrollmentId(e,t){return new Ur(t,e)}async _finalizeEnroll(e,t,n){return m("undefined"!==typeof this.secret,e,"argument-error"),Kt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){m(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Fn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Vr{constructor(e,t,n,r,s,i,o){this.sessionInfo=i,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Vr(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){let n=!1;return(Jr(e)||Jr(t))&&(n=!0),n&&(Jr(e)&&(e=this.auth.currentUser?.email||"unknownuser"),Jr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Jr(e){return"undefined"===typeof e||0===e?.length}var jr="@firebase/auth",Kr="1.13.6";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){m(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qr(e){(0,r.om)(new o.uA("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;m(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const B={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:be(e)},c=new Fe(r,s,i,B);return Ye(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),(0,r.om)(new o.uA("auth-internal",e=>{const t=Le(e.getProvider("auth").getImmediate());return(e=>new qr(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KO)(jr,Kr,zr(e)),(0,r.KO)(jr,Kr,"esm2020")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=300,Wr=(0,s.XA)("authIdTokenMaxAge")||$r;let Yr=null;const Xr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Wr)return;const s=n?.token;Yr!==s&&(Yr=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Zr(e=(0,r.Sx)()){const t=(0,r.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=We(e,{popupRedirectResolver:Pr,persistence:[On,Yt,rn]}),i=(0,s.XA)("authTokenSyncURL");if(i&&"boolean"===typeof isSecureContext&&isSecureContext){const e=new URL(i,location.origin);if(location.origin===e.origin){const t=Xr(e.toString());Gt(n,t,()=>t(n.currentUser)),Mt(n,e=>t(e))}}const o=(0,s.Tj)("auth");return o&&Xe(n,`http://${o}`),n}function es(){return document.getElementsByTagName("head")?.[0]??document}Pe({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",es().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Qr("Browser")},228:function(e,t,n){n.d(t,{rJ:function(){return pa},kd:function(){return YC},H9:function(){return da},GG:function(){return WC},aU:function(){return GC},aQ:function(){return XC}});var r,s,i=n(879),o=n(711),a=n(734),B="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},c={};(function(){var e;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(e,t){function n(){}n.prototype=t.prototype,e.F=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.D=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function o(e,t,n){n||(n=0);const r=Array(16);if("string"===typeof t)for(var s=0;s<16;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;s<16;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];let i,o=e.g[3];i=t+(o^n&(s^o))+r[0]+3614090360&4294967295,t=n+(i<<7&4294967295|i>>>25),i=o+(s^t&(n^s))+r[1]+3905402710&4294967295,o=t+(i<<12&4294967295|i>>>20),i=s+(n^o&(t^n))+r[2]+606105819&4294967295,s=o+(i<<17&4294967295|i>>>15),i=n+(t^s&(o^t))+r[3]+3250441966&4294967295,n=s+(i<<22&4294967295|i>>>10),i=t+(o^n&(s^o))+r[4]+4118548399&4294967295,t=n+(i<<7&4294967295|i>>>25),i=o+(s^t&(n^s))+r[5]+1200080426&4294967295,o=t+(i<<12&4294967295|i>>>20),i=s+(n^o&(t^n))+r[6]+2821735955&4294967295,s=o+(i<<17&4294967295|i>>>15),i=n+(t^s&(o^t))+r[7]+4249261313&4294967295,n=s+(i<<22&4294967295|i>>>10),i=t+(o^n&(s^o))+r[8]+1770035416&4294967295,t=n+(i<<7&4294967295|i>>>25),i=o+(s^t&(n^s))+r[9]+2336552879&4294967295,o=t+(i<<12&4294967295|i>>>20),i=s+(n^o&(t^n))+r[10]+4294925233&4294967295,s=o+(i<<17&4294967295|i>>>15),i=n+(t^s&(o^t))+r[11]+2304563134&4294967295,n=s+(i<<22&4294967295|i>>>10),i=t+(o^n&(s^o))+r[12]+1804603682&4294967295,t=n+(i<<7&4294967295|i>>>25),i=o+(s^t&(n^s))+r[13]+4254626195&4294967295,o=t+(i<<12&4294967295|i>>>20),i=s+(n^o&(t^n))+r[14]+2792965006&4294967295,s=o+(i<<17&4294967295|i>>>15),i=n+(t^s&(o^t))+r[15]+1236535329&4294967295,n=s+(i<<22&4294967295|i>>>10),i=t+(s^o&(n^s))+r[1]+4129170786&4294967295,t=n+(i<<5&4294967295|i>>>27),i=o+(n^s&(t^n))+r[6]+3225465664&4294967295,o=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(o^t))+r[11]+643717713&4294967295,s=o+(i<<14&4294967295|i>>>18),i=n+(o^t&(s^o))+r[0]+3921069994&4294967295,n=s+(i<<20&4294967295|i>>>12),i=t+(s^o&(n^s))+r[5]+3593408605&4294967295,t=n+(i<<5&4294967295|i>>>27),i=o+(n^s&(t^n))+r[10]+38016083&4294967295,o=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(o^t))+r[15]+3634488961&4294967295,s=o+(i<<14&4294967295|i>>>18),i=n+(o^t&(s^o))+r[4]+3889429448&4294967295,n=s+(i<<20&4294967295|i>>>12),i=t+(s^o&(n^s))+r[9]+568446438&4294967295,t=n+(i<<5&4294967295|i>>>27),i=o+(n^s&(t^n))+r[14]+3275163606&4294967295,o=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(o^t))+r[3]+4107603335&4294967295,s=o+(i<<14&4294967295|i>>>18),i=n+(o^t&(s^o))+r[8]+1163531501&4294967295,n=s+(i<<20&4294967295|i>>>12),i=t+(s^o&(n^s))+r[13]+2850285829&4294967295,t=n+(i<<5&4294967295|i>>>27),i=o+(n^s&(t^n))+r[2]+4243563512&4294967295,o=t+(i<<9&4294967295|i>>>23),i=s+(t^n&(o^t))+r[7]+1735328473&4294967295,s=o+(i<<14&4294967295|i>>>18),i=n+(o^t&(s^o))+r[12]+2368359562&4294967295,n=s+(i<<20&4294967295|i>>>12),i=t+(n^s^o)+r[5]+4294588738&4294967295,t=n+(i<<4&4294967295|i>>>28),i=o+(t^n^s)+r[8]+2272392833&4294967295,o=t+(i<<11&4294967295|i>>>21),i=s+(o^t^n)+r[11]+1839030562&4294967295,s=o+(i<<16&4294967295|i>>>16),i=n+(s^o^t)+r[14]+4259657740&4294967295,n=s+(i<<23&4294967295|i>>>9),i=t+(n^s^o)+r[1]+2763975236&4294967295,t=n+(i<<4&4294967295|i>>>28),i=o+(t^n^s)+r[4]+1272893353&4294967295,o=t+(i<<11&4294967295|i>>>21),i=s+(o^t^n)+r[7]+4139469664&4294967295,s=o+(i<<16&4294967295|i>>>16),i=n+(s^o^t)+r[10]+3200236656&4294967295,n=s+(i<<23&4294967295|i>>>9),i=t+(n^s^o)+r[13]+681279174&4294967295,t=n+(i<<4&4294967295|i>>>28),i=o+(t^n^s)+r[0]+3936430074&4294967295,o=t+(i<<11&4294967295|i>>>21),i=s+(o^t^n)+r[3]+3572445317&4294967295,s=o+(i<<16&4294967295|i>>>16),i=n+(s^o^t)+r[6]+76029189&4294967295,n=s+(i<<23&4294967295|i>>>9),i=t+(n^s^o)+r[9]+3654602809&4294967295,t=n+(i<<4&4294967295|i>>>28),i=o+(t^n^s)+r[12]+3873151461&4294967295,o=t+(i<<11&4294967295|i>>>21),i=s+(o^t^n)+r[15]+530742520&4294967295,s=o+(i<<16&4294967295|i>>>16),i=n+(s^o^t)+r[2]+3299628645&4294967295,n=s+(i<<23&4294967295|i>>>9),i=t+(s^(n|~o))+r[0]+4096336452&4294967295,t=n+(i<<6&4294967295|i>>>26),i=o+(n^(t|~s))+r[7]+1126891415&4294967295,o=t+(i<<10&4294967295|i>>>22),i=s+(t^(o|~n))+r[14]+2878612391&4294967295,s=o+(i<<15&4294967295|i>>>17),i=n+(o^(s|~t))+r[5]+4237533241&4294967295,n=s+(i<<21&4294967295|i>>>11),i=t+(s^(n|~o))+r[12]+1700485571&4294967295,t=n+(i<<6&4294967295|i>>>26),i=o+(n^(t|~s))+r[3]+2399980690&4294967295,o=t+(i<<10&4294967295|i>>>22),i=s+(t^(o|~n))+r[10]+4293915773&4294967295,s=o+(i<<15&4294967295|i>>>17),i=n+(o^(s|~t))+r[1]+2240044497&4294967295,n=s+(i<<21&4294967295|i>>>11),i=t+(s^(n|~o))+r[8]+1873313359&4294967295,t=n+(i<<6&4294967295|i>>>26),i=o+(n^(t|~s))+r[15]+4264355552&4294967295,o=t+(i<<10&4294967295|i>>>22),i=s+(t^(o|~n))+r[6]+2734768916&4294967295,s=o+(i<<15&4294967295|i>>>17),i=n+(o^(s|~t))+r[13]+1309151649&4294967295,n=s+(i<<21&4294967295|i>>>11),i=t+(s^(n|~o))+r[4]+4149444226&4294967295,t=n+(i<<6&4294967295|i>>>26),i=o+(n^(t|~s))+r[11]+3174756917&4294967295,o=t+(i<<10&4294967295|i>>>22),i=s+(t^(o|~n))+r[2]+718787259&4294967295,s=o+(i<<15&4294967295|i>>>17),i=n+(o^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(i<<21&4294967295|i>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+o&4294967295}function a(e,t){var n=u;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}function B(e,t){this.h=t;const n=[];let r=!0;for(let s=e.length-1;s>=0;s--){const i=0|e[s];r&&i==t||(n[s]=i,r=!1)}this.g=n}t(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},i.prototype.v=function(e,t){void 0===t&&(t=e.length);const n=t-this.blockSize,r=this.C;let s=this.h,i=0;for(;i<t;){if(0==s)for(;i<=n;)o(this,e,i),i+=this.blockSize;if("string"===typeof e){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){o(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){o(this,r),s=0;break}}this.h=s,this.o+=t},i.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;t=8*this.o;for(var n=e.length-8;n<e.length;++n)e[n]=255&t,t/=256;for(this.v(e),e=Array(16),t=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)e[t++]=this.g[n]>>>r&255;return e};var u={};function l(e){return-128<=e&&e<128?a(e,function(e){return new B([0|e],e<0?-1:0)}):new B([0|e],e<0?-1:0)}function h(e){if(isNaN(e)||!isFinite(e))return p;if(e<0)return E(h(-e));const t=[];let n=1;for(let r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new B(t,0)}function C(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,t<2||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return E(C(e.substring(1),t));if(e.indexOf("-")>=0)throw Error('number format error: interior "-" character');const n=h(Math.pow(t,8));let r=p;for(let i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i);const o=parseInt(e.substring(i,i+s),t);s<8?(s=h(Math.pow(t,s)),r=r.j(s).add(h(o))):(r=r.j(n),r=r.add(h(o)))}return r}var p=l(0),d=l(1),f=l(16777216);function g(e){if(0!=e.h)return!1;for(let t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function m(e){return-1==e.h}function E(e){const t=e.g.length,n=[];for(let r=0;r<t;r++)n[r]=~e.g[r];return new B(n,~e.h).add(d)}function D(e,t){return e.add(E(t))}function y(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function w(e,t){this.g=e,this.h=t}function _(e,t){if(g(t))throw Error("division by zero");if(g(e))return new w(p,p);if(m(e))return t=_(E(e),t),new w(E(t.g),E(t.h));if(m(t))return t=_(e,E(t)),new w(E(t.g),t.h);if(e.g.length>30){if(m(e)||m(t))throw Error("slowDivide_ only works with positive integers.");for(var n=d,r=t;r.l(e)<=0;)n=v(n),r=v(r);var s=I(n,1),i=I(r,1);for(r=I(r,2),n=I(n,2);!g(r);){var o=i.add(r);o.l(e)<=0&&(s=s.add(n),i=o),r=I(r,1),n=I(n,1)}return t=D(e,s.j(t)),new w(s,t)}for(s=p;e.l(t)>=0;){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=r<=48?1:Math.pow(2,r-48),i=h(n),o=i.j(t);m(o)||o.l(e)>0;)n-=r,i=h(n),o=i.j(t);g(i)&&(i=d),s=s.add(i),e=D(e,o)}return new w(s,e)}function v(e){const t=e.g.length+1,n=[];for(let r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new B(n,e.h)}function I(e,t){const n=t>>5;t%=32;const r=e.g.length-n,s=[];for(let i=0;i<r;i++)s[i]=t>0?e.i(i+n)>>>t|e.i(i+n+1)<<32-t:e.i(i+n);return new B(s,e.h)}e=B.prototype,e.m=function(){if(m(this))return-E(this).m();let e=0,t=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);e+=(r>=0?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(e=e||10,e<2||36<e)throw Error("radix out of range: "+e);if(g(this))return"0";if(m(this))return"-"+E(this).toString(e);const t=h(Math.pow(e,6));var n=this;let r="";for(;;){const s=_(n,t).g;n=D(n,s.j(t));let i=((n.g.length>0?n.g[0]:n.h)>>>0).toString(e);if(n=s,g(n))return i+r;for(;i.length<6;)i="0"+i;r=i+r}},e.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return e=D(this,e),m(e)?-1:g(e)?0:1},e.abs=function(){return m(this)?E(this):this},e.add=function(e){const t=Math.max(this.g.length,e.g.length),n=[];let r=0;for(let s=0;s<=t;s++){let t=r+(65535&this.i(s))+(65535&e.i(s)),i=(t>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);r=i>>>16,t&=65535,i&=65535,n[s]=i<<16|t}return new B(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(g(this)||g(e))return p;if(m(this))return m(e)?E(this).j(E(e)):E(E(this).j(e));if(m(e))return E(this.j(E(e)));if(this.l(f)<0&&e.l(f)<0)return h(this.m()*e.m());const t=this.g.length+e.g.length,n=[];for(var r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(let t=0;t<e.g.length;t++){const s=this.i(r)>>>16,i=65535&this.i(r),o=e.i(t)>>>16,a=65535&e.i(t);n[2*r+2*t]+=i*a,y(n,2*r+2*t),n[2*r+2*t+1]+=s*a,y(n,2*r+2*t+1),n[2*r+2*t+1]+=i*o,y(n,2*r+2*t+1),n[2*r+2*t+2]+=s*o,y(n,2*r+2*t+2)}for(e=0;e<t;e++)n[e]=n[2*e+1]<<16|n[2*e];for(e=t;e<2*t;e++)n[e]=0;return new B(n,0)},e.B=function(e){return _(this,e).h},e.and=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new B(n,this.h&e.h)},e.or=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new B(n,this.h|e.h)},e.xor=function(e){const t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new B(n,this.h^e.h)},i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,s=c.Md5=i,B.prototype.add=B.prototype.add,B.prototype.multiply=B.prototype.j,B.prototype.modulo=B.prototype.B,B.prototype.compare=B.prototype.l,B.prototype.toNumber=B.prototype.m,B.prototype.toString=B.prototype.toString,B.prototype.getBits=B.prototype.i,B.fromNumber=h,B.fromString=C,r=c.Integer=B}).apply("undefined"!==typeof B?B:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var u,l,h,C,p,d,f,g,m=n(722),E="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},D={};(function(){var e,t=Object.defineProperty;function n(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof E&&E];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function s(e,n){if(n)e:{var s=r;e=e.split(".");for(var i=0;i<e.length-1;i++){var o=e[i];if(!(o in s))break e;s=s[o]}e=e[e.length-1],i=s[e],n=n(i),n!=i&&null!=n&&t(s,e,{configurable:!0,writable:!0,value:n})}}s("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(e){return e||function(e){var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push([t,e[t]]);return n}});
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var i=i||{},o=this||self;function a(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function B(e,t,n){return e.call.apply(e.bind,arguments)}function c(e,t,n){return c=B,c.apply(null,arguments)}function m(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function y(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Ob=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}var w="undefined"!==typeof AsyncContext&&"function"===typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function _(e){const t=e.length;if(t>0){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function v(e,t){for(let r=1;r<arguments.length;r++){const t=arguments[r];var n=typeof t;if(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null","array"==n||"object"==n&&"number"==typeof t.length){n=e.length||0;const r=t.length||0;e.length=n+r;for(let s=0;s<r;s++)e[n+s]=t[s]}else e.push(t)}}class I{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function T(e){o.setTimeout(()=>{throw e},0)}function b(){var e=L;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class S{constructor(){this.h=this.g=null}add(e,t){const n=O.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var O=new I(()=>new A,e=>e.reset());class A{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let N,F=!1,L=new S,R=()=>{const e=Promise.resolve(void 0);N=()=>{e.then(k)}};function k(){for(var e;e=b();){try{e.h.call(e.g)}catch(xa){T(xa)}var t=O;t.j(e),t.h<100&&(t.h++,e.next=t.g,t.g=e)}F=!1}function P(){this.u=this.u,this.C=this.C}function x(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},x.prototype.h=function(){this.defaultPrevented=!0};var M=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};o.addEventListener("test",e,t),o.removeEventListener("test",e,t)}catch(xa){}return e}();function G(e){return/^[\s\xa0]*$/.test(e)}function H(e,t){x.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,t)}y(H,x),H.prototype.init=function(e,t){const n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget,t||("mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement)),this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&H.Z.h.call(this)},H.prototype.h=function(){H.Z.h.call(this);const e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),V=0;function J(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=s,this.key=++V,this.da=this.fa=!1}function j(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function K(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function q(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function z(e){const t={};for(const n in e)t[n]=e[n];return t}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $(e,t){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)e[n]=r[n];for(let t=0;t<Q.length;t++)n=Q[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function W(e){this.src=e,this.g={},this.h=0}function Y(e,t){const n=t.type;if(n in e.g){var r,s=e.g[n],i=Array.prototype.indexOf.call(s,t,void 0);(r=i>=0)&&Array.prototype.splice.call(s,i,1),r&&(j(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function X(e,t,n,r){for(let s=0;s<e.length;++s){const i=e[s];if(!i.da&&i.listener==t&&i.capture==!!n&&i.ha==r)return s}return-1}W.prototype.add=function(e,t,n,r,s){const i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);const o=X(e,t,r,s);return o>-1?(t=e[o],n||(t.fa=!1)):(t=new J(t,this.src,i,!!r,s),t.fa=n,e.push(t)),t};var Z="closure_lm_"+(1e6*Math.random()|0),ee={};function te(e,t,n,r,s){if(Array.isArray(t)){for(let i=0;i<t.length;i++)te(e,t[i],n,r,s);return null}return n=ue(n),e&&e[U]?e.J(t,n,!!a(r)&&!!r.capture,s):ne(e,t,n,!1,r,s)}function ne(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");const o=a(s)?!!s.capture:!!s;let B=Be(e);if(B||(e[Z]=B=new W(e)),n=B.add(t,n,r,o,i),n.proxy)return n;if(r=re(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)M||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(oe(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function re(){function e(n){return t.call(e.src,e.listener,n)}const t=ae;return e}function se(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)se(e,t[i],n,r,s);else r=a(r)?!!r.capture:!!r,n=ue(n),e&&e[U]?(e=e.i,i=String(t).toString(),i in e.g&&(t=e.g[i],n=X(t,n,r,s),n>-1&&(j(t[n]),Array.prototype.splice.call(t,n,1),0==t.length&&(delete e.g[i],e.h--)))):e&&(e=Be(e))&&(t=e.g[t.toString()],e=-1,t&&(e=X(t,n,r,s)),(n=e>-1?t[e]:null)&&ie(n))}function ie(e){if("number"!==typeof e&&e&&!e.da){var t=e.src;if(t&&t[U])Y(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(oe(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Be(t))?(Y(n,e),0==n.h&&(n.src=null,t[Z]=null)):j(e)}}}function oe(e){return e in ee?ee[e]:ee[e]="on"+e}function ae(e,t){if(e.da)e=!0;else{t=new H(t,this);const n=e.listener,r=e.ha||e.src;e.fa&&ie(e),e=n.call(r,t)}return e}function Be(e){return e=e[Z],e instanceof W?e:null}var ce="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(e){return"function"===typeof e?e:(e[ce]||(e[ce]=function(t){return e.handleEvent(t)}),e[ce])}function le(){P.call(this),this.i=new W(this),this.M=this,this.G=null}function he(e,t){var n,r=e.G;if(r)for(n=[];r;r=r.G)n.push(r);if(e=e.M,r=t.type||t,"string"===typeof t)t=new x(t,e);else if(t instanceof x)t.target=t.target||e;else{var s=t;t=new x(r,e),$(t,s)}let i,o;if(s=!0,n)for(o=n.length-1;o>=0;o--)i=t.g=n[o],s=Ce(i,r,!0,t)&&s;if(i=t.g=e,s=Ce(i,r,!0,t)&&s,s=Ce(i,r,!1,t)&&s,n)for(o=0;o<n.length;o++)i=t.g=n[o],s=Ce(i,r,!1,t)&&s}function Ce(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();let s=!0;for(let i=0;i<t.length;++i){const o=t[i];if(o&&!o.da&&o.capture==n){const t=o.listener,n=o.ha||o.src;o.fa&&Y(e.i,o),s=!1!==t.call(n,r)&&s}}return s&&!r.defaultPrevented}function pe(e,t){if("function"!==typeof e){if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=c(e.handleEvent,e)}return Number(t)>2147483647?-1:o.setTimeout(e,t||0)}function de(e){e.g=pe(()=>{e.g=null,e.i&&(e.i=!1,de(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}y(le,P),le.prototype[U]=!0,le.prototype.removeEventListener=function(e,t,n,r){se(this,e,t,n,r)},le.prototype.N=function(){if(le.Z.N.call(this),this.i){var e=this.i;for(const t in e.g){const n=e.g[t];for(let e=0;e<n.length;e++)j(n[e]);delete e.g[t],e.h--}}this.G=null},le.prototype.J=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},le.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class fe extends P{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:de(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ge(e){P.call(this),this.h=e,this.g={}}y(ge,P);var me=[];function Ee(e){K(e.g,function(e,t){this.g.hasOwnProperty(t)&&ie(e)},e),e.g={}}ge.prototype.N=function(){ge.Z.N.call(this),Ee(this)},ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var De=o.JSON.stringify,ye=o.JSON.parse,we=class{stringify(e){return o.JSON.stringify(e,void 0)}parse(e){return o.JSON.parse(e,void 0)}};function _e(){}function ve(){}var Ie={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Te(){x.call(this,"d")}function be(){x.call(this,"c")}y(Te,x),y(be,x);var Se={},Oe=null;function Ae(){return Oe=Oe||new le}function Ne(e){x.call(this,Se.Ia,e)}function Fe(e){const t=Ae();he(t,new Ne(t))}function Le(e,t){x.call(this,Se.STAT_EVENT,e),this.stat=t}function Re(e){const t=Ae();he(t,new Le(t,e))}function ke(e,t){x.call(this,Se.Ja,e),this.size=t}function Pe(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){e()},t)}function xe(){this.g=!0}function Me(e,t,n,r,s,i){e.info(function(){if(e.g)if(i){var o="",a=i.split("&");for(let e=0;e<a.length;e++){var B=a[e].split("=");if(B.length>1){const e=B[0];B=B[1];const t=e.split("_");o=t.length>=2&&"type"==t[1]?o+(e+"=")+B+"&":o+(e+"=redacted&")}}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o})}function Ge(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o})}function He(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Ve(e,n)+(r?" "+r:"")})}function Ue(e,t){e.info(function(){return"TIMEOUT: "+t})}function Ve(e,t){if(!e.g)return t;if(!t)return null;try{const i=JSON.parse(t);if(i)for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var n=i[e];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(let e=1;e<r.length;e++)r[e]=""}}}return De(i)}catch(i){return t}}Se.Ia="serverreachability",y(Ne,x),Se.STAT_EVENT="statevent",y(Le,x),Se.Ja="timingevent",y(ke,x),xe.prototype.ua=function(){this.g=!1},xe.prototype.info=function(){};var Je,je={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ke={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function qe(){}function ze(e){return encodeURIComponent(String(e))}function Qe(e){var t=1;e=e.split(":");const n=[];for(;t>0&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function $e(e,t,n,r){this.j=e,this.i=t,this.l=n,this.S=r||1,this.V=new ge(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new We}function We(){this.i=null,this.g="",this.h=!1}y(qe,_e),qe.prototype.g=function(){return new XMLHttpRequest},Je=new qe;var Ye={},Xe={};function Ze(e,t,n){e.M=1,e.A=Tt(yt(t)),e.u=n,e.R=!0,et(e,null)}function et(e,t){e.F=Date.now(),st(e),e.B=yt(e.A);var n=e.B,r=e.S;Array.isArray(r)||(r=[String(r)]),Ht(n.i,"t",r),e.C=0,n=e.j.L,e.h=new We,e.g=Fn(e.j,n?t:null,!e.u),e.P>0&&(e.O=new fe(c(e.Y,e,e.g),e.P)),t=e.V,n=e.g,r=e.ba;var s="readystatechange";Array.isArray(s)||(s&&(me[0]=s.toString()),s=me);for(let i=0;i<s.length;i++){const e=te(n,s[i],r||t.handleEvent,!1,t.h||t);if(!e)break;t.g[e.key]=e}t=e.J?z(e.J):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,t)):(e.v="GET",e.g.ea(e.B,e.v,null,t)),Fe(),Me(e.i,e.v,e.B,e.l,e.S,e.u)}function tt(e){if(!nt(e))return e.g.la();const t=un(e.g);if(""===t)return"";let n="";const r=t.length,s=4==cn(e.g);if(!e.h.i){if("undefined"===typeof TextDecoder)return Bt(e),at(e),"";e.h.i=new o.TextDecoder}for(let i=0;i<r;i++)e.h.h=!0,n+=e.h.i.decode(t[i],{stream:!(s&&i==r-1)});return t.length=0,e.h.g+=n,e.C=0,e.h.g}function nt(e){return!!e.g&&("GET"==e.v&&2!=e.M&&e.j.Aa)}function rt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Xe:(n=Number(t.substring(n,r)),isNaN(n)?Ye:(r+=1,r+n>t.length?Xe:(t=t.slice(r,r+n),e.C=r+n,t)))}function st(e){e.T=Date.now()+e.H,it(e,e.H)}function it(e,t){if(null!=e.D)throw Error("WatchDog timer not null");e.D=Pe(c(e.aa,e),t)}function ot(e){e.D&&(o.clearTimeout(e.D),e.D=null)}function at(e){0==e.j.I||e.K||bn(e.j,e)}function Bt(e){ot(e);var t=e.O;t&&"function"==typeof t.dispose&&t.dispose(),e.O=null,Ee(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function ct(e,t){try{var n=e.j;if(0!=n.I&&(n.g==e||pt(n.h,e)))if(!e.L&&pt(n.h,e)&&3==n.I){try{var r=n.Ba.g.parse(t)}catch(ja){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.v){if(n.g){if(!(n.g.F+3e3<e.F))break e;Tn(n),dn(n)}_n(n),Re(18)}}else n.xa=s[1],0<n.xa-n.K&&s[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=Pe(c(n.Va,n),6e3));Ct(n.h)<=1&&n.ta&&(n.ta=void 0)}else On(n,11)}else if((e.L||n.g==e)&&Tn(n),!G(t))for(s=n.Ba.g.parse(t),t=0;t<s.length;t++){let c=s[t];const u=c[0];if(!(u<=n.K))if(n.K=u,c=c[1],2==n.I)if("c"==c[0]){n.M=c[1],n.ba=c[2];const t=c[3];null!=t&&(n.ka=t,n.j.info("VER="+n.ka));const s=c[4];null!=s&&(n.za=s,n.j.info("SVER="+n.za));const u=c[5];null!=u&&"number"===typeof u&&u>0&&(r=1.5*u,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=e.g;if(l){const e=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(dt(i,i.h),i.h=null))}if(r.G){const e=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.wa=e,It(r.J,r.G,e))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-e.F,n.j.info("Handshake RTT: "+n.T+"ms")),r=n;var o=e;if(r.na=Nn(r,r.L?r.ba:null,r.W),o.L){ft(r.h,o);var a=o,B=r.O;B&&(a.H=B),a.D&&(ot(a),st(a)),r.g=o}else wn(r);n.i.length>0&&gn(n)}else"stop"!=c[0]&&"close"!=c[0]||On(n,7);else 3==n.I&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?On(n,7):pn(n):"noop"!=c[0]&&n.l&&n.l.qa(c),n.A=0)}Fe(4)}catch(ja){}}$e.prototype.ba=function(e){e=e.target;const t=this.O;t&&3==cn(e)?t.j():this.Y(e)},$e.prototype.Y=function(e){try{if(e==this.g)e:{const a=cn(this.g),B=this.g.ya(),c=this.g.ca();if(!(a<3)&&(3!=a||this.g&&(this.h.h||this.g.la()||un(this.g)))){this.K||4!=a||7==B||Fe(8==B||c<=0?3:2),ot(this);var t=this.g.ca();this.X=t;var n=tt(this);if(this.o=200==t,Ge(this.i,this.v,this.B,this.l,this.S,a,t),this.o){if(this.U&&!this.L){t:{if(this.g){var r,s=this.g;if((r=s.g?s.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(r)){var i=r;break t}}i=null}if(!(e=i)){this.o=!1,this.m=3,Re(12),Bt(this),at(this);break e}He(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ct(this,e)}if(this.R){let t;for(e=!0;!this.K&&this.C<n.length;){if(t=rt(this,n),t==Xe){4==a&&(this.m=4,Re(14),e=!1),He(this.i,this.l,null,"[Incomplete Response]");break}if(t==Ye){this.m=4,Re(15),He(this.i,this.l,n,"[Invalid Chunk]"),e=!1;break}He(this.i,this.l,t,null),ct(this,t)}if(nt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=a||0!=n.length||this.h.h||(this.m=1,Re(16),e=!1),this.o=this.o&&e,e){if(n.length>0&&!this.W){this.W=!0;var o=this.j;o.g==this&&o.aa&&!o.P&&(o.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),vn(o),o.P=!0,Re(11))}}else He(this.i,this.l,n,"[Invalid Chunked Response]"),Bt(this),at(this)}else He(this.i,this.l,n,null),ct(this,n);4==a&&Bt(this),this.o&&!this.K&&(4==a?bn(this.j,this):(this.o=!1,st(this)))}else ln(this.g),400==t&&n.indexOf("Unknown SID")>0?(this.m=3,Re(12)):(this.m=0,Re(13)),Bt(this),at(this)}}}catch(ka){}},$e.prototype.cancel=function(){this.K=!0,Bt(this)},$e.prototype.aa=function(){this.D=null;const e=Date.now();e-this.T>=0?(Ue(this.i,this.B),2!=this.M&&(Fe(),Re(17)),Bt(this),this.m=2,at(this)):it(this,this.T-e)};var ut=class{constructor(e,t){this.g=e,this.map=t}};function lt(e){this.l=e||10,o.PerformanceNavigationTiming?(e=o.performance.getEntriesByType("navigation"),e=e.length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ht(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ct(e){return e.h?1:e.g?e.g.size:0}function pt(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function dt(e,t){e.g?e.g.add(t):e.h=t}function ft(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function gt(e){if(null!=e.h)return e.i.concat(e.h.G);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.G);return t}return _(e.i)}lt.prototype.cancel=function(){if(this.i=gt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var mt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Et(e,t){if(e){e=e.split("&");for(let n=0;n<e.length;n++){const r=e[n].indexOf("=");let s,i=null;r>=0?(s=e[n].substring(0,r),i=e[n].substring(r+1)):s=e[n],t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Dt(e){let t;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof Dt?(this.l=e.l,wt(this,e.j),this.o=e.o,this.g=e.g,_t(this,e.u),this.h=e.h,vt(this,Ut(e.i)),this.m=e.m):e&&(t=String(e).match(mt))?(this.l=!1,wt(this,t[1]||"",!0),this.o=bt(t[2]||""),this.g=bt(t[3]||"",!0),_t(this,t[4]),this.h=bt(t[5]||"",!0),vt(this,t[6]||"",!0),this.m=bt(t[7]||"")):(this.l=!1,this.i=new kt(null,this.l))}function yt(e){return new Dt(e)}function wt(e,t,n){e.j=n?bt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function _t(e,t){if(t){if(t=Number(t),isNaN(t)||t<0)throw Error("Bad port number "+t);e.u=t}else e.u=null}function vt(e,t,n){t instanceof kt?(e.i=t,Jt(e.i,e.l)):(n||(t=St(t,Lt)),e.i=new kt(t,e.l))}function It(e,t,n){e.i.set(t,n)}function Tt(e){return It(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function bt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function St(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Ot),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ot(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Dt.prototype.toString=function(){const e=[];var t=this.j;t&&e.push(St(t,At,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(St(t,At,!0),"@"),e.push(ze(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.u,null!=n&&e.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(St(n,"/"==n.charAt(0)?Ft:Nt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",St(n,Rt)),e.join("")},Dt.prototype.resolve=function(e){const t=yt(this);let n=!!e.j;n?wt(t,e.j):n=!!e.o,n?t.o=e.o:n=!!e.g,n?t.g=e.g:n=null!=e.u;var r=e.h;if(n)_t(t,e.u);else if(n=!!e.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var s=t.h.lastIndexOf("/");-1!=s&&(r=t.h.slice(0,s+1)+r)}if(s=r,".."==s||"."==s)r="";else if(-1!=s.indexOf("./")||-1!=s.indexOf("/.")){r=0==s.lastIndexOf("/",0),s=s.split("/");const e=[];for(let t=0;t<s.length;){const n=s[t++];"."==n?r&&t==s.length&&e.push(""):".."==n?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),r&&t==s.length&&e.push("")):(e.push(n),r=!0)}r=e.join("/")}else r=s}return n?t.h=r:n=""!==e.i.toString(),n?vt(t,Ut(e.i)):n=!!e.m,n&&(t.m=e.m),t};var At=/[#\/\?@]/g,Nt=/[#\?:]/g,Ft=/[#\?]/g,Lt=/[#\?@]/g,Rt=/#/g;function kt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Pt(e){e.g||(e.g=new Map,e.h=0,e.i&&Et(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function xt(e,t){Pt(e),t=Vt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Mt(e,t){return Pt(e),t=Vt(e,t),e.g.has(t)}function Gt(e,t){Pt(e);let n=[];if("string"===typeof t)Mt(e,t)&&(n=n.concat(e.g.get(Vt(e,t))));else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)n=n.concat(e[t]);return n}function Ht(e,t,n){xt(e,t),n.length>0&&(e.i=null,e.g.set(Vt(e,t),_(n)),e.h+=n.length)}function Ut(e){const t=new kt;return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function Vt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Jt(e,t){t&&!e.j&&(Pt(e),e.i=null,e.g.forEach(function(e,t){const n=t.toLowerCase();t!=n&&(xt(this,t),Ht(this,n,e))},e)),e.j=t}function jt(e,t){const n=new xe;if(o.Image){const r=new Image;r.onload=m(qt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=m(qt,n,"TestLoadImage: error",!1,t,r),r.onabort=m(qt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=m(qt,n,"TestLoadImage: timeout",!1,t,r),o.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Kt(e,t){const n=new xe,r=new AbortController,s=setTimeout(()=>{r.abort(),qt(n,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:r.signal}).then(e=>{clearTimeout(s),e.ok?qt(n,"TestPingServer: ok",!0,t):qt(n,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(s),qt(n,"TestPingServer: error",!1,t)})}function qt(e,t,n,r,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),r(n)}catch(i){}}function zt(){this.g=new we}function Qt(e){this.i=e.Sb||null,this.h=e.ab||!1}function $t(e,t){le.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Wt(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function Yt(e){e.readyState=4,e.l=null,e.j=null,e.B=null,Xt(e)}function Xt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Zt(e){let t="";return K(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function en(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Zt(n),"string"===typeof e?null!=n&&ze(n):It(e,t,n))}function tn(e){le.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}e=kt.prototype,e.add=function(e,t){Pt(this),this.i=null,e=Vt(this,e);let n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){Pt(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.set=function(e,t){return Pt(this),this.i=null,e=Vt(this,e),Mt(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e?(e=Gt(this,e),e.length>0?String(e[0]):t):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(let r=0;r<t.length;r++){var n=t[r];const s=ze(n);n=Gt(this,n);for(let t=0;t<n.length;t++){let r=s;""!==n[t]&&(r+="="+ze(n[t])),e.push(r)}}return this.i=e.join("&")},y(Qt,_e),Qt.prototype.g=function(){return new $t(this.i,this.h)},y($t,le),e=$t.prototype,e.open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=t,this.readyState=1,Xt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(t.body=e),(this.H||o).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,Yt(this)),this.readyState=0},e.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Xt(this)),this.g&&(this.readyState=3,Xt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if("undefined"!==typeof o.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Wt(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))},e.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Yt(this):Xt(this),3==this.readyState&&Wt(this)}},e.Oa=function(e){this.g&&(this.response=this.responseText=e,Yt(this))},e.Na=function(e){this.g&&(this.response=e,Yt(this))},e.ga=function(){this.g&&Yt(this)},e.setRequestHeader=function(e,t){this.A.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty($t.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),y(tn,le);var nn=/^https?$/i,rn=["POST","PUT"];function sn(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,on(e),Bn(e)}function on(e){e.A||(e.A=!0,he(e,"complete"),he(e,"error"))}function an(e){if(e.h&&"undefined"!=typeof i)if(e.v&&4==cn(e))setTimeout(e.Ca.bind(e),0);else if(he(e,"readystatechange"),4==cn(e)){e.h=!1;try{const i=e.ca();e:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===i){let t=String(e.D).match(mt)[1]||null;!t&&o.self&&o.self.location&&(t=o.self.location.protocol.slice(0,-1)),r=!nn.test(t?t.toLowerCase():"")}n=r}if(n)he(e,"complete"),he(e,"success");else{e.o=6;try{var s=cn(e)>2?e.g.statusText:""}catch(a){s=""}e.l=s+" ["+e.ca()+"]",on(e)}}finally{Bn(e)}}}function Bn(e,t){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);const r=e.g;e.g=null,t||he(e,"ready");try{r.onreadystatechange=null}catch(n){}}}function cn(e){return e.g?e.g.readyState:0}function un(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Ya){return null}}function ln(e){const t={};e=(e.g&&cn(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(G(e[r]))continue;var n=Qe(e[r]);const s=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}q(t,function(e){return e.join(", ")})}function hn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Cn(e){this.za=0,this.i=[],this.j=new xe,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=hn("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=hn("baseRetryDelayMs",5e3,e),this.Za=hn("retryDelaySeedMs",1e4,e),this.Ta=hn("forwardChannelMaxRetries",2,e),this.va=hn("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new lt(e&&e.concurrentRequestLimit),this.Ba=new zt,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function pn(e){if(fn(e),3==e.I){var t=e.V++,n=yt(e.J);if(It(n,"SID",e.M),It(n,"RID",t),It(n,"TYPE","terminate"),Dn(e,n),t=new $e(e,e.j,t),t.M=2,t.A=Tt(yt(n)),n=!1,o.navigator&&o.navigator.sendBeacon)try{n=o.navigator.sendBeacon(t.A.toString(),"")}catch(r){}!n&&o.Image&&((new Image).src=t.A,n=!0),n||(t.g=Fn(t.j,null),t.g.ea(t.A)),t.F=Date.now(),st(t)}An(e)}function dn(e){e.g&&(vn(e),e.g.cancel(),e.g=null)}function fn(e){dn(e),e.v&&(o.clearTimeout(e.v),e.v=null),Tn(e),e.h.cancel(),e.m&&("number"===typeof e.m&&o.clearTimeout(e.m),e.m=null)}function gn(e){if(!ht(e.h)&&!e.m){e.m=!0;var t=e.Ea;N||R(),F||(N(),F=!0),L.add(t,e),e.D=0}}function mn(e,t){return!(Ct(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.G.concat(e.i),!0):!(1==e.I||2==e.I||e.D>=(e.Sa?0:e.Ta))&&(e.m=Pe(c(e.Ea,e,t),Sn(e,e.D)),e.D++,!0))}function En(e,t){var n;n=t?t.l:e.V++;const r=yt(e.J);It(r,"SID",e.M),It(r,"RID",n),It(r,"AID",e.K),Dn(e,r),e.u&&e.o&&en(r,e.u,e.o),n=new $e(e,e.j,n,e.D+1),null===e.u&&(n.J=e.o),t&&(e.i=t.G.concat(e.i)),t=yn(e,n,1e3),n.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),dt(e.h,n),Ze(n,r,t)}function Dn(e,t){e.H&&K(e.H,function(e,n){It(t,n,e)}),e.l&&K({},function(e,n){It(t,n,e)})}function yn(e,t,n){n=Math.min(e.i.length,n);const r=e.l?c(e.l.Ka,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?n>0?(t=s[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let B=!0;for(let c=0;c<n;c++){var i=s[c].g;const n=s[c].map;if(i-=t,i<0)t=Math.max(0,s[c].g-100),B=!1;else try{i="req"+i+"_"||0;try{var o=n instanceof Map?n:Object.entries(n);for(const[t,n]of o){let r=n;a(n)&&(r=De(n)),e.push(i+t+"="+encodeURIComponent(r))}}catch(sB){throw e.push(i+"type="+encodeURIComponent("_badmap")),sB}}catch(sB){r&&r(n)}}if(B){o=e.join("&");break e}}o=void 0}return e=e.i.splice(0,n),t.G=e,o}function wn(e){if(!e.g&&!e.v){e.Y=1;var t=e.Da;N||R(),F||(N(),F=!0),L.add(t,e),e.A=0}}function _n(e){return!(e.g||e.v||e.A>=3)&&(e.Y++,e.v=Pe(c(e.Da,e),Sn(e,e.A)),e.A++,!0)}function vn(e){null!=e.B&&(o.clearTimeout(e.B),e.B=null)}function In(e){e.g=new $e(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0;var t=yt(e.na);It(t,"RID","rpc"),It(t,"SID",e.M),It(t,"AID",e.K),It(t,"CI",e.F?"0":"1"),!e.F&&e.ia&&It(t,"TO",e.ia),It(t,"TYPE","xmlhttp"),Dn(e,t),e.u&&e.o&&en(t,e.u,e.o),e.O&&(e.g.H=e.O);var n=e.g;e=e.ba,n.M=1,n.A=Tt(yt(t)),n.u=null,n.R=!0,et(n,e)}function Tn(e){null!=e.C&&(o.clearTimeout(e.C),e.C=null)}function bn(e,t){var n=null;if(e.g==t){Tn(e),vn(e),e.g=null;var r=2}else{if(!pt(e.h,t))return;n=t.G,ft(e.h,t),r=1}if(0!=e.I)if(t.o)if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.F;var s=e.D;r=Ae(),he(r,new ke(r,n)),gn(e)}else wn(e);else if(s=t.m,3==s||0==s&&t.X>0||!(1==r&&mn(e,t)||2==r&&_n(e)))switch(n&&n.length>0&&(t=e.h,t.i=t.i.concat(n)),s){case 1:On(e,5);break;case 4:On(e,10);break;case 3:On(e,6);break;default:On(e,2)}}function Sn(e,t){let n=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(n*=2),n*t}function On(e,t){if(e.j.info("Error code "+t),2==t){var n=c(e.bb,e),r=e.Ua;const t=!r;r=new Dt(r||"//www.google.com/images/cleardot.gif"),o.location&&"http"==o.location.protocol||wt(r,"https"),Tt(r),t?jt(r.toString(),n):Kt(r.toString(),n)}else Re(2);e.I=0,e.l&&e.l.pa(t),An(e),fn(e)}function An(e){if(e.I=0,e.ja=[],e.l){const t=gt(e.h);0==t.length&&0==e.i.length||(v(e.ja,t),v(e.ja,e.i),e.h.i.length=0,_(e.i),e.i.length=0),e.l.oa()}}function Nn(e,t,n){var r=n instanceof Dt?yt(n):new Dt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),_t(r,r.u);else{var s=o.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;const e=new Dt(null);r&&wt(e,r),t&&(e.g=t),s&&_t(e,s),n&&(e.h=n),r=e}return n=e.G,t=e.wa,n&&t&&It(r,n,t),It(r,"VER",e.ka),Dn(e,r),r}function Fn(e,t,n){if(t&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Aa&&!e.ma?new tn(new Qt({ab:n})):new tn(e.ma),t.Fa(e.L),t}function Ln(){}function Rn(){}function kn(e,t){le.call(this),this.g=new Cn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e["X-WebChannel-Client-Profile"]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!G(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!G(t)&&(this.g.G=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Mn(this)}function Pn(e){Te.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function xn(){be.call(this),this.status=1}function Mn(e){this.g=e}e=tn.prototype,e.Fa=function(e){this.H=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Je.g(),this.g.onreadystatechange=w(c(this.Ca,this));try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(i){return void sn(this,i)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=o.FormData&&e instanceof o.FormData,!(Array.prototype.indexOf.call(rn,t,void 0)>=0)||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(i){sn(this,i)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,he(this,"complete"),he(this,"abort"),Bn(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bn(this,!0)),tn.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?an(this):this.Xa())},e.Xa=function(){an(this)},e.isActive=function(){return!!this.g},e.ca=function(){try{return cn(this)>2?this.g.status:-1}catch(e){return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.La=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ye(t)}},e.ya=function(){return this.o},e.Ha=function(){return"string"===typeof this.l?this.l:String(this.l)},e=Cn.prototype,e.ka=8,e.I=1,e.connect=function(e,t,n,r){Re(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=Nn(this,null,this.W),gn(this)},e.Ea=function(e){if(this.m)if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new $e(this,this.j,e);let i=this.o;if(this.U&&(i?(i=z(i),$(i,this.U)):i=this.U),null!==this.u||this.R||(s.J=i,i=null),this.S)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,t>4096){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=yn(this,s,t),n=yt(this.J),It(n,"RID",e),It(n,"CVER",22),this.G&&It(n,"X-HTTP-Session-Id",this.G),Dn(this,n),i&&(this.R?t="headers="+ze(Zt(i))+"&"+t:this.u&&en(n,this.u,i)),dt(this.h,s),this.Ra&&It(n,"TYPE","init"),this.S?(It(n,"$req",t),It(n,"SID","null"),s.U=!0,Ze(s,n,null)):Ze(s,n,t),this.I=2}}else 3==this.I&&(e?En(this,e):0==this.i.length||ht(this.h)||En(this))},e.Da=function(){if(this.v=null,In(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=Pe(c(this.Wa,this),e)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Re(10),dn(this),In(this))},e.Va=function(){null!=this.C&&(this.C=null,dn(this),_n(this),Re(19))},e.bb=function(e){e?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},e=Ln.prototype,e.ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){},Rn.prototype.g=function(e,t){return new kn(e,t)},y(kn,le),kn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},kn.prototype.close=function(){pn(this.g)},kn.prototype.o=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=De(e),e=n);t.i.push(new ut(t.Ya++,e)),3==t.I&&gn(t)},kn.prototype.N=function(){this.g.l=null,delete this.j,pn(this.g),delete this.g,kn.Z.N.call(this)},y(Pn,Te),y(xn,be),y(Mn,Ln),Mn.prototype.ra=function(){he(this.g,"a")},Mn.prototype.qa=function(e){he(this.g,new Pn(e))},Mn.prototype.pa=function(e){he(this.g,new xn)},Mn.prototype.oa=function(){he(this.g,"b")},Rn.prototype.createWebChannel=Rn.prototype.g,kn.prototype.send=kn.prototype.o,kn.prototype.open=kn.prototype.m,kn.prototype.close=kn.prototype.close,g=D.createWebChannelTransport=function(){return new Rn},f=D.getStatEventTarget=function(){return Ae()},d=D.Event=Se,p=D.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},je.NO_ERROR=0,je.TIMEOUT=8,je.HTTP_ERROR=6,C=D.ErrorCode=je,Ke.COMPLETE="complete",h=D.EventType=Ke,ve.EventType=Ie,Ie.OPEN="a",Ie.CLOSE="b",Ie.ERROR="c",Ie.MESSAGE="d",le.prototype.listen=le.prototype.J,l=D.WebChannel=ve,D.FetchXmlHttpFactory=Qt,tn.prototype.listenOnce=tn.prototype.K,tn.prototype.getLastError=tn.prototype.Ha,tn.prototype.getLastErrorCode=tn.prototype.ya,tn.prototype.getStatus=tn.prototype.ca,tn.prototype.getResponseJson=tn.prototype.La,tn.prototype.getResponseText=tn.prototype.la,tn.prototype.send=tn.prototype.ea,tn.prototype.setWithCredentials=tn.prototype.Fa,u=D.XhrIo=tn}).apply("undefined"!==typeof E?E:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});
/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.8.6
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository github:le0pard/re2js
* @license MIT
*/
var y=class e{static FOLD_CASE=1;static LITERAL=2;static CLASS_NL=4;static DOT_NL=8;static ONE_LINE=16;static NON_GREEDY=32;static PERL_X=64;static UNICODE_GROUPS=128;static WAS_DOLLAR=256;static LOOKBEHIND=512;static MATCH_NL=e.CLASS_NL|e.DOT_NL;static PERL=e.CLASS_NL|e.ONE_LINE|e.PERL_X|e.UNICODE_GROUPS;static POSIX=0;static UNANCHORED=0;static ANCHOR_START=1;static ANCHOR_BOTH=2};const w={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},_=128,v=new Int32Array(_),I=new Int32Array(_),T=65535;for(let rp=0;rp<_;rp++)v[rp]=rp>=97&&rp<=122?rp-32:rp,I[rp]=rp>=65&&rp<=90?rp+32:rp;var b=class{static CODES=new Map([["",7],["\b",8],["\t",9],["\n",10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["'",39],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["`",96],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]]);static toUpperCase(e){if(e<_)return v[e];const t=String.fromCodePoint(e).toUpperCase(),n=t.codePointAt(0)>T?2:1;if(t.length>n)return e;const r=String.fromCodePoint(t.codePointAt(0)).toLowerCase(),s=r.codePointAt(0)>T?2:1;return r.length>s||r.codePointAt(0)!==e?e:t.codePointAt(0)}static toLowerCase(e){if(e<_)return I[e];const t=String.fromCodePoint(e).toLowerCase(),n=t.codePointAt(0)>T?2:1;if(t.length>n)return e;const r=String.fromCodePoint(t.codePointAt(0)).toUpperCase(),s=r.codePointAt(0)>T?2:1;return r.length>s||r.codePointAt(0)!==e?e:t.codePointAt(0)}},S=class{constructor(e,t=!1){this.data=e,this.isStride1=t,this.SIZE=t?2:3}getLo(e){return this.data[e*this.SIZE]}getHi(e){return this.data[e*this.SIZE+1]}getStride(e){return this.isStride1?1:this.data[e*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const O=new Uint8Array(256);for(let rp=0,sp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";rp<64;rp++)O[sp.charCodeAt(rp)]=rp;const A=e=>{const t=[];let n=0,r=0;for(let s=0;s<e.length;s++){let i=O[e.charCodeAt(s)];n|=(31&i)<<r,0===(32&i)?(t.push(n),n=0,r=0):r+=5}return t},N=(e,t)=>{const n=A(e),r=t?n.length/2:n.length/3,s=new Uint32Array(3*r);let i=0,o=0;for(let a=0;a<r;a++)i+=n[o++],s[3*a]=i,i+=n[o++],s[3*a+1]=i,s[3*a+2]=t?1:n[o++];return s},F=e=>{const t=A(e),n=new Map;let r=0;for(let s=0;s<t.length;s+=2){r+=t[s];const e=t[s+1],i=e>>>1^-(1&e);n.set(r,r+i)}return n};var L=class{constructor(e){this.initializer=e,this.cache=new Map}has(e){return e in this.initializer}get(e){if(this.cache.has(e))return this.cache.get(e);const t=this.initializer[e],n=t?t():null;return this.cache.set(e,n),n}},R=class{static _CASE_ORBIT=null;static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=F("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static _Print=null;static get Print(){return this._Print||(this._Print=new S(N("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static CATEGORIES=new L({C:()=>new S(N("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new S(N("AfgDgB",!0)),Cf:()=>new S(N("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new S(N("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new S(N("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new S(N("gg2B--B",!0)),L:()=>new S(N("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new S(N("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new S(N("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new S(N("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new S(N("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new S(N("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new S(N("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new S(N("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new S(N("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new S(N("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new S(N("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new S(N("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new S(N("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new S(N("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new S(N("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new S(N("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new S(N("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new S(N("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new S(N("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new S(N("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new S(N("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new S(N("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new S(N("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new S(N("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new S(N("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new S(N("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new S(N("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new S(N("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new S(N("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new S(N("ohIA",!0)),Zp:()=>new S(N("phIA",!0)),Zs:()=>new S(N("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new S(N("wBJIFbF",!0)),Alphabetic:()=>new S(N("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new S(N("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new S(N("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new S(N("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new S(N("7-8DE",!0)),Emoji_Modifier_Base:()=>new S(N("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new S(N("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new S(N("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new S(N("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new S(N("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new S(N("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new S(N("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new S(N("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new S(N("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new S(N("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))});static get Upper(){return this.CATEGORIES.get("Lu")}static SCRIPTS=new L({Adlam:()=>new S(N("go6DrCFJFB",!0)),Ahom:()=>new S(N("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new S(N("ggxCmS",!0)),Arabic:()=>new S(N("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new S(N("xpBlBDxBDCks9BE",!0)),Avestan:()=>new S(N("g4iC1BEG",!0)),Balinese:()=>new S(N("g4GsCCxB",!0)),Bamum:()=>new S(N("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new S(N("w26CdDF",!0)),Batak:()=>new S(N("g+GzBJD",!0)),Bengali:()=>new S(N("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new S(N("g17CYDY",!0)),Bhaiksuki:()=>new S(N("ggnCICsBCNLc",!0)),Bopomofo:()=>new S(N("qXB6wLqBxDf",!0)),Brahmi:()=>new S(N("ggkCtCFjBKA",!0)),Braille:()=>new S(N("ggK-H",!0)),Buginese:()=>new S(N("gwGbDB",!0)),Buhid:()=>new S(N("g6FT",!0)),Canadian_Aboriginal:()=>new S(N("ggF-TxRlC7tgCP",!0)),Carian:()=>new S(N("g1gCwB",!0)),Caucasian_Albanian:()=>new S(N("wphCzBMA",!0)),Chakma:()=>new S(N("gokC0BCR",!0)),Cham:()=>new S(N("gwqB2BKNDJDD",!0)),Cherokee:()=>new S(N("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new S(N("w9jCb",!0)),Common:()=>new S(N("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new S(N("ifNxkKzDGG",!0)),Cuneiform:()=>new S(N("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new S(N("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new S(N("w8rCiD",!0)),Cyrillic:()=>new S(N("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new S(N("gghCvC",!0)),Devanagari:()=>new S(N("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new S(N("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new S(N("ggmC7B",!0)),Duployan:()=>new S(N("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new S(N("ggsC1iBL68D",!0)),Elbasan:()=>new S(N("gohCnB",!0)),Elymaic:()=>new S(N("g-jCW",!0)),Ethiopic:()=>new S(N("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new S(N("gqjClBEcJB",!0)),Georgian:()=>new S(N("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new S(N("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new S(N("w5gCa",!0)),Grantha:()=>new S(N("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new S(N("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new S(N("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new S(N("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new S(N("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new S(N("go4C5B",!0)),Han:()=>new S(N("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new S(N("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new S(N("gojCnBJJ",!0)),Hanunoo:()=>new S(N("g5FU",!0)),Hatran:()=>new S(N("gniCSCBGE",!0)),Hebrew:()=>new S(N("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new S(N("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new S(N("giiCVCI",!0)),Inherited:()=>new S(N("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new S(N("g7iCSGH",!0)),Inscriptional_Parthian:()=>new S(N("g6iCVDH",!0)),Javanese:()=>new S(N("gsqBtCDJFB",!0)),Kaithi:()=>new S(N("gkkCiCLA",!0)),Kannada:()=>new S(N("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new S(N("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new S(N("g4nCQCoBEc",!0)),Kayah_Li:()=>new S(N("goqBtBCA",!0)),Kharoshthi:()=>new S(N("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new S(N("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new S(N("g8F9CDJHJnPf",!0)),Khojki:()=>new S(N("gwkCRCuB",!0)),Khudawadi:()=>new S(N("w1kC6BGJ",!0)),Kirat_Rai:()=>new S(N("gq7C5B",!0)),Lao:()=>new S(N("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new S(N("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new S(N("ggH3BEOEC",!0)),Limbu:()=>new S(N("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new S(N("gwhC2JKVLH",!0)),Linear_B:()=>new S(N("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new S(N("wmpBvBx1eA",!0)),Lycian:()=>new S(N("g0gCc",!0)),Lydian:()=>new S(N("gpiCZGA",!0)),Mahajani:()=>new S(N("wqkCmB",!0)),Makasar:()=>new S(N("g3nCY",!0)),Malayalam:()=>new S(N("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new S(N("giCbDA",!0)),Manichaean:()=>new S(N("g2iCmBFL",!0)),Marchen:()=>new S(N("wjnCfDVCN",!0)),Masaram_Gondi:()=>new S(N("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new S(N("gy7C6C",!0)),Meetei_Mayek:()=>new S(N("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new S(N("gg6DkGDP",!0)),Meroitic_Cursive:()=>new S(N("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new S(N("gsiCf",!0)),Miao:()=>new S(N("g47CqCF4BIQ",!0)),Modi:()=>new S(N("gwlCkCMJ",!0)),Mongolian:()=>new S(N("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new S(N("gy6CeCJFB",!0)),Multani:()=>new S(N("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new S(N("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new S(N("gkiCeJI",!0)),Nag_Mundari:()=>new S(N("wm5DpB",!0)),Nandinagari:()=>new S(N("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new S(N("gsGrBFZHKEB",!0)),Newa:()=>new S(N("gglC7CCE",!0)),Nko:()=>new S(N("g+B6BDC",!0)),Nushu:()=>new S(N("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new S(N("go4DsBENDJFB",!0)),Ogham:()=>new S(N("g0Fc",!0)),Ol_Chiki:()=>new S(N("wiHvB",!0)),Ol_Onal:()=>new S(N("wu5DqBFA",!0)),Old_Hungarian:()=>new S(N("gkjCyBOyBIF",!0)),Old_Italic:()=>new S(N("g4gCjBKC",!0)),Old_North_Arabian:()=>new S(N("g0iCf",!0)),Old_Permic:()=>new S(N("w6gCqB",!0)),Old_Persian:()=>new S(N("g9gCjBFN",!0)),Old_Sogdian:()=>new S(N("g4jCnB",!0)),Old_South_Arabian:()=>new S(N("gziCf",!0)),Old_Turkic:()=>new S(N("ggjCoC",!0)),Old_Uyghur:()=>new S(N("w7jCZ",!0)),Oriya:()=>new S(N("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new S(N("wlhCjBFjB",!0)),Osmanya:()=>new S(N("gkhCdDJ",!0)),Pahawh_Hmong:()=>new S(N("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new S(N("gjiCf",!0)),Pau_Cin_Hau:()=>new S(N("g2mC4B",!0)),Phags_Pa:()=>new S(N("giqB3B",!0)),Phoenician:()=>new S(N("goiCbEA",!0)),Psalter_Pahlavi:()=>new S(N("g8iCRIDNG",!0)),Rejang:()=>new S(N("wpqBjBMA",!0)),Runic:()=>new S(N("g1FqCEK",!0)),Samaritan:()=>new S(N("ggCtBDO",!0)),Saurashtra:()=>new S(N("gkqBlCJL",!0)),Sharada:()=>new S(N("gskC-ChsCH",!0)),Shavian:()=>new S(N("wihCvB",!0)),Siddham:()=>new S(N("gslC1BDlB",!0)),Sidetic:()=>new S(N("gqiCZ",!0)),SignWriting:()=>new S(N("gg2DrUQECO",!0)),Sinhala:()=>new S(N("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new S(N("w5jCpB",!0)),Sora_Sompeng:()=>new S(N("wmkCYIJ",!0)),Soyombo:()=>new S(N("wymCyC",!0)),Sundanese:()=>new S(N("g8G-BhIH",!0)),Sunuwar:()=>new S(N("g+mChBPJ",!0)),Syloti_Nagri:()=>new S(N("ggqBsB",!0)),Syriac:()=>new S(N("g4BNC7BDCxIK",!0)),Tagalog:()=>new S(N("g4FVKA",!0)),Tagbanwa:()=>new S(N("g7FMCCCB",!0)),Tai_Le:()=>new S(N("wqGdDE",!0)),Tai_Tham:()=>new S(N("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new S(N("g0qBiCZE",!0)),Tai_Yo:()=>new S(N("g25DeCVJB",!0)),Takri:()=>new S(N("g0lC5BHJ",!0)),Tamil:()=>new S(N("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new S(N("wz6CuCCJ",!0)),Tangut:()=>new S(N("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new S(N("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new S(N("g8BxB",!0)),Thai:()=>new S(N("hwD5BGb",!0)),Tibetan:()=>new S(N("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new S(N("wpL3BIBPA",!0)),Tirhuta:()=>new S(N("gklCnCJJ",!0)),Todhri:()=>new S(N("guhCzB",!0)),Tolong_Siki:()=>new S(N("wtnCrBFJ",!0)),Toto:()=>new S(N("w04De",!0)),Tulu_Tigalari:()=>new S(N("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new S(N("g8gCdCA",!0)),Unknown:()=>new S(N("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new S(N("gopBrJ",!0)),Vithkuqi:()=>new S(N("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new S(N("g24D5BGA",!0)),Warang_Citi:()=>new S(N("glmCyCNA",!0)),Yezidi:()=>new S(N("g0jCpBCCDB",!0)),Yi:()=>new S(N("ggoBskBE2B",!0)),Zanabazar_Square:()=>new S(N("gwmCnC",!0))});static FOLD_CATEGORIES=new L({L:()=>new S(N("laA",!0)),LC:()=>new S(N("laA",!0)),Ll:()=>new S(N("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new S(N("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new S(N("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new S(N("5cgBgBlgHAB",!1)),Mn:()=>new S(N("5cgBgBlgHAB",!1)),Emoji:()=>new S(N("8mJA",!0)),Extended_Pictographic:()=>new S(N("8mJA",!0)),Lowercase:()=>new S(N("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new S(N("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new S(N("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))});static FOLD_SCRIPT=new L({Common:()=>new S(N("8cgBgB",!1)),Greek:()=>new S(N("1FwUwU",!1)),Inherited:()=>new S(N("5cgBgBlgHAB",!1))})},k=class e{static MAX_RUNE=1114111;static MAX_ASCII=127;static MAX_LATIN1=255;static MAX_BMP=65535;static MIN_FOLD=65;static MAX_FOLD=125251;static MIN_HIGH_SURROGATE=55296;static MAX_HIGH_SURROGATE=56319;static MIN_LOW_SURROGATE=56320;static MAX_LOW_SURROGATE=57343;static MIN_SUPPLEMENTARY_CODE_POINT=65536;static is32(e,t){let n=0,r=e.length;while(n<r){const s=n+Math.floor((r-n)/2),i=e.getLo(s),o=e.getHi(s);if(i<=t&&t<=o){const n=e.getStride(s);return(t-i)%n===0}t<i?r=s:n=s+1}return!1}static is(t,n){if(n<=e.MAX_LATIN1){for(let e=0;e<t.length;e++){if(n>t.getHi(e))continue;const r=t.getLo(e);if(n<r)return!1;const s=t.getStride(e);return(n-r)%s===0}return!1}return t.length>0&&n>=t.getLo(0)&&e.is32(t,n)}static isUpper(t){if(t<=e.MAX_LATIN1){const e=String.fromCodePoint(t);return e.toUpperCase()===e&&e.toLowerCase()!==e}return e.is(R.Upper,t)}static isPrint(t){return t<=e.MAX_LATIN1?t>=32&&t<e.MAX_ASCII||t>=161&&173!==t:e.is(R.Print,t)}static simpleFold(e){if(R.CASE_ORBIT.has(e))return R.CASE_ORBIT.get(e);const t=b.toLowerCase(e);return t!==e?t:b.toUpperCase(e)}static equalsIgnoreCase(t,n){if(t===n)return!0;if(t<0||n<0)return!1;if(t<=e.MAX_ASCII&&n<=e.MAX_ASCII)return 65<=t&&t<=90&&(t|=32),65<=n&&n<=90&&(n|=32),t===n;for(let r=e.simpleFold(t);r!==t;r=e.simpleFold(r))if(r===n)return!0;return!1}};const P=256,x=new Uint8Array(P);for(let rp=0;rp<P;rp++)x[rp]=97<=rp&&rp<=122||65<=rp&&rp<=90||48<=rp&&rp<=57||95===rp?1:0;let M=null,G=null;var H=class e{static METACHARACTERS="\\.+*?()|[]{}^$";static EMPTY_BEGIN_LINE=1;static EMPTY_END_LINE=2;static EMPTY_BEGIN_TEXT=4;static EMPTY_END_TEXT=8;static EMPTY_WORD_BOUNDARY=16;static EMPTY_NO_WORD_BOUNDARY=32;static EMPTY_ALL=-1;static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||e instanceof Uint8Array}static isalnum(e){return b.CODES.get("0")<=e&&e<=b.CODES.get("9")||b.CODES.get("a")<=e&&e<=b.CODES.get("z")||b.CODES.get("A")<=e&&e<=b.CODES.get("Z")}static unhex(e){return b.CODES.get("0")<=e&&e<=b.CODES.get("9")?e-b.CODES.get("0"):b.CODES.get("a")<=e&&e<=b.CODES.get("f")?e-b.CODES.get("a")+10:b.CODES.get("A")<=e&&e<=b.CODES.get("F")?e-b.CODES.get("A")+10:-1}static escapeRune(t){let n="";if(k.isPrint(t))e.METACHARACTERS.indexOf(String.fromCodePoint(t))>=0&&(n+="\\"),n+=String.fromCodePoint(t);else switch(t){case b.CODES.get('"'):n+='\\"';break;case b.CODES.get("\\"):n+="\\\\";break;case b.CODES.get("\t"):n+="\\t";break;case b.CODES.get("\n"):n+="\\n";break;case b.CODES.get("\r"):n+="\\r";break;case b.CODES.get("\b"):n+="\\b";break;case b.CODES.get("\f"):n+="\\f";break;default:{let e=t.toString(16);t<256?(n+="\\x",1===e.length&&(n+="0"),n+=e):n+=`\\x{${e}}`;break}}return n}static stringToRunes(e){const t=String(e),n=[];let r=0;while(r<t.length){const e=t.codePointAt(r);n.push(e),r+=e>k.MAX_BMP?2:1}return n}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<P&&1===x[e]}static emptyOpContext(t,n){let r=0;return t<0&&(r|=e.EMPTY_BEGIN_TEXT|e.EMPTY_BEGIN_LINE),10===t&&(r|=e.EMPTY_BEGIN_LINE),n<0&&(r|=e.EMPTY_END_TEXT|e.EMPTY_END_LINE),10===n&&(r|=e.EMPTY_END_LINE),e.isWordRune(t)!==e.isWordRune(n)?r|=e.EMPTY_WORD_BOUNDARY:r|=e.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(t){return t.split("").map(t=>e.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>k.MAX_BMP?2:1}static toArray(e){const t=e.length,n=new Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return M||(M=new TextEncoder),M.encode(e);{let t=[],n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):(64512&s)===k.MIN_HIGH_SURROGATE&&r+1<e.length&&(64512&e.charCodeAt(r+1))===k.MIN_LOW_SURROGATE?(s=k.MIN_SUPPLEMENTARY_CODE_POINT+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){G||(G=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return G.decode(t)}{let t=[],n=0,r=0;while(n<e.length){let s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){let i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){let i=e[n++],o=e[n++],a=e[n++],B=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-k.MIN_SUPPLEMENTARY_CODE_POINT;t[r++]=String.fromCharCode(k.MIN_HIGH_SURROGATE+(B>>10)),t[r++]=String.fromCharCode(k.MIN_LOW_SURROGATE+(1023&B))}else{let i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")}}};const U=(e=[],t=0)=>{const n=Object.create(null);for(let r=0;r<e.length;r++){const s=e[r],i=t+r;n[s]=i,n[i]=s}return Object.freeze(n)};var V=class e{static Encoding=U(["UTF_16","UTF_8"]);getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===e.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===e.Encoding.UTF_16}},J=class extends V{constructor(e=null){super(),this.bytes=e}getEncoding(){return V.Encoding.UTF_8}asCharSequence(){return H.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},j=class extends V{constructor(e=null){super(),this.charSequence=e}getEncoding(){return V.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return H.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},K=class{static utf16(e){return new j(e)}static utf8(e){return H.isByteArray(e)?new J(e):new J(H.stringToUtf8ByteArray(e))}},q=class{static EOF(){return-8}constructor(){this.end=0}canCheckPrefix(){return!0}endPos(){return this.end}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},z=class extends q{constructor(e,t=0,n=e.length){super(),this.bytes=e,this.start=t,this.end=n}hasString(e,t){const n=e.bytes;if(0===n.length)return!0;const r=this.indexOf(this.bytes,n,this.start+t);return-1!==r&&r<=this.end-n.length}hasAnyString(e,t){return!!e.ac8&&e.ac8.searchUTF8(this.bytes,this.start+t,this.end)}step(e){if(e+=this.start,e>=this.end)return q.EOF();const t=255&this.bytes[e];if(t<128)return t<<3|1;if(t>=194&&t<=223&&e+1<this.end){const n=255&this.bytes[e+1];return 128!==(192&n)?t<<3|1:((31&t)<<6|63&n)<<3|2}if(t>=224&&t<=239&&e+2<this.end){const n=255&this.bytes[e+1];if(128!==(192&n))return t<<3|1;const r=255&this.bytes[e+2];return 128!==(192&r)?t<<3|1:((15&t)<<12|(63&n)<<6|63&r)<<3|3}if(t>=240&&t<=244&&e+3<this.end){const n=255&this.bytes[e+1];if(128!==(192&n))return t<<3|1;const r=255&this.bytes[e+2];if(128!==(192&r))return t<<3|1;const s=255&this.bytes[e+3];return 128!==(192&s)?t<<3|1:((7&t)<<18|(63&n)<<12|(63&r)<<6|63&s)<<3|4}return t<<3|1}index(e,t){t+=this.start;const n=this.indexOf(this.bytes,e.prefixUTF8,t);return n<0?n:n-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let n=e-1;if(t=this.bytes[n--],t>=128){let r=e-4;r<this.start&&(r=this.start);while(n>=r&&128===(192&this.bytes[n]))n--;n<this.start&&(n=this.start),t=this.step(n-this.start)>>3}}const n=e<this.end?this.step(e-this.start)>>3:-1;return H.emptyOpContext(t,n)}indexOf(e,t,n=0){let r=t.length;if(0===r)return n<=this.end?n:-1;const s=t[0];let i=this.end-r;const o="function"===typeof e.indexOf;let a=n;while(a<=i){if(o){if(a=e.indexOf(s,a),-1===a||a>i)return-1}else{while(a<=i&&e[a]!==s)a++;if(a>i)return-1}let n=!0;for(let s=1;s<r;s++)if(e[a+s]!==t[s]){n=!1;break}if(n)return a;a++}return-1}prefixLength(e){return e.prefixUTF8.length}},Q=class extends q{constructor(e,t=0,n=e.length){super(),this.charSequence=e,this.start=t,this.end=n}hasString(e,t){const n=this.charSequence.indexOf(e.str,this.start+t);return-1!==n&&n<=this.end-e.str.length}hasAnyString(e,t){return!!e.ac16&&e.ac16.searchUTF16(this.charSequence,this.start+t,this.end)}step(e){if(e+=this.start,e>=this.end)return q.EOF();const t=this.charSequence.charCodeAt(e);if(t<k.MIN_HIGH_SURROGATE||t>k.MAX_HIGH_SURROGATE||e+1>=this.end)return t<<3|1;const n=this.charSequence.charCodeAt(e+1);return n>=k.MIN_LOW_SURROGATE&&n<=k.MAX_LOW_SURROGATE?1024*(t-k.MIN_HIGH_SURROGATE)+(n-k.MIN_LOW_SURROGATE)+k.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:t<<3|1}index(e,t){t+=this.start;const n=this.charSequence.indexOf(e.prefix,t);return n<0||n>this.end-e.prefix.length?-1:n-t}context(e){e+=this.start;const t=e>this.start&&e<=this.end?this.charSequence.charCodeAt(e-1):-1,n=e<this.end?this.charSequence.charCodeAt(e):-1;return H.emptyOpContext(t,n)}prefixLength(e){return e.prefix.length}},$=class{static fromUTF8(e,t=0,n=e.length){return new z(e,t,n)}static fromUTF16(e,t=0,n=e.length){return new Q(e,t,n)}},W=class extends Error{constructor(e){super(e),this.name="RE2JSException"}},Y=class extends W{constructor(e,t=null){let n=`error parsing regexp: ${e}`;t&&(n+=`: \`${t}\``),super(n),this.name="RE2JSSyntaxException",this.message=n,this.error=e,this.input=t}getDescription(){return this.error}getPattern(){return this.input}},X=class extends W{constructor(e){super(e),this.name="RE2JSCompileException"}},Z=class extends W{constructor(e){super(e),this.name="RE2JSGroupException"}},ee=class extends W{constructor(e){super(e),this.name="RE2JSFlagsException"}},te=class extends W{constructor(e){super(e),this.name="RE2JSInternalException"}},ne=class e{static MAX_REPLACER_ARGS=65535;static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(e=>{const t=e.codePointAt(0);return t===b.CODES.get("\\")||t===b.CODES.get("$")?`\\${e}`:e}).join(""):e.indexOf("$")<0?e:e.split("").map(e=>e.codePointAt(0)===b.CODES.get("$")?"$$":e).join("")}constructor(e,t){if(null===e)throw new Error("pattern is null");this.patternInput=e;const n=this.patternInput.re2();this.patternGroupCount=n.numberOfCapturingGroups(),this.groups=[],this.namedGroups=n.namedGroups,this.numberOfInstructions=n.numberOfInstructions(),t instanceof V?this.resetMatcherInput(t):H.isByteArray(t)?this.resetMatcherInput(K.utf8(t)):this.resetMatcherInput(K.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(null===e)throw new Error("input is null");return e instanceof V||(e=H.isByteArray(e)?K.utf8(e):K.utf16(e)),this.matcherInput=e,this.reset(),this}start(e=0){if("string"===typeof e){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Z(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if("string"===typeof e){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Z(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if("string"===typeof e){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Z(`group '${e}' not found`);e=t}const t=this.start(e),n=this.end(e);return t<0&&n<0?null:this.substring(t,n)}getNamedGroups(){if(!this.hasMatch)throw new Z("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new Z(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new Z("perhaps no match attempted");if(0===e||this.hasGroups)return;const t=this.matcherInputLength,n=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!n[0])throw new Z("inconsistency in matching group data");this.groups=n[1],this.hasGroups=!0}matches(){return this.genMatch(0,y.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,y.ANCHOR_START)}find(e=null){if(null!==e){if(e<0||e>this.matcherInputLength)throw new Z(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?$.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):$.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=7&t}return this.genMatch(e,y.UNANCHORED)}genMatch(e,t){const n=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return n[0]?(this.groups=n[1],this.hasMatch=!0,this.hasGroups=0===this.patternGroupCount,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?H.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let n="";const r=this.start(),s=this.end();return this.appendPos<r&&(n+=this.substring(this.appendPos,r)),this.appendPos=s,n+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),n}appendReplacementInternalJava(e){let t="",n=0;const r=e.length;let s=0;while(s<r){const i=e.codePointAt(s);if(i!==b.CODES.get("\\")){if(i===b.CODES.get("$")){if(n<s&&(t+=e.substring(n,s)),s+1>=r)throw new Z("Illegal group reference: group index is missing");const i=e.codePointAt(s+1);if(b.CODES.get("0")<=i&&i<=b.CODES.get("9")){let o=i-b.CODES.get("0"),a=s+2;for(;a<r;a++){const t=e.codePointAt(a);if(t<b.CODES.get("0")||t>b.CODES.get("9")||10*o+t-b.CODES.get("0")>this.patternGroupCount)break;o=10*o+t-b.CODES.get("0")}if(o>this.patternGroupCount)throw new Z(`n > number of groups: ${o}`);const B=this.group(o);null!==B&&(t+=B),s=a,n=s}else{if(i!==b.CODES.get("{"))throw new Z("Illegal group reference");{let i=s+2;while(i<r&&e.codePointAt(i)!==b.CODES.get("}"))i++;if(i>=r)throw new Z("named capture group is missing trailing '}'");const o=e.substring(s+2,i),a=this.group(o);null!==a&&(t+=a),s=i+1,n=s}}continue}s++}else{if(n<s&&(t+=e.substring(n,s)),s++,s>=r)throw new Z("character to be escaped is missing");n=s,s++}}return n<r&&(t+=e.substring(n,r)),t}appendReplacementInternalJs(e){let t="",n=0;const r=e.length;for(let s=0;s<r-1;s++)if(e.codePointAt(s)===b.CODES.get("$")){let i=e.codePointAt(s+1);if(b.CODES.get("$")===i){n<s&&(t+=e.substring(n,s)),t+="$",s++,n=s+1;continue}if(b.CODES.get("&")===i){n<s&&(t+=e.substring(n,s));const r=this.group(0);t+=null!==r?r:"$&",s++,n=s+1;continue}if(b.CODES.get("`")===i){n<s&&(t+=e.substring(n,s)),t+=this.substring(0,this.start(0)),s++,n=s+1;continue}if(b.CODES.get("'")===i){n<s&&(t+=e.substring(n,s)),t+=this.substring(this.end(0),this.matcherInputLength),s++,n=s+1;continue}if(b.CODES.get("1")<=i&&i<=b.CODES.get("9")){let o=i-b.CODES.get("0");for(n<s&&(t+=e.substring(n,s)),s+=2;s<r;s++){if(i=e.codePointAt(s),i<b.CODES.get("0")||i>b.CODES.get("9")||10*o+i-b.CODES.get("0")>this.patternGroupCount)break;o=10*o+i-b.CODES.get("0")}if(o>this.patternGroupCount){t+=`$${o}`,n=s,s--;continue}const a=this.group(o);null!==a&&(t+=a),n=s,s--;continue}if(i===b.CODES.get("<")){n<s&&(t+=e.substring(n,s)),s++;let r=s+1;while(r<e.length&&e.codePointAt(r)!==b.CODES.get(">")&&e.codePointAt(r)!==b.CODES.get(" "))r++;if(r===e.length||e.codePointAt(r)!==b.CODES.get(">")){t+=e.substring(s-1,r+1),n=r+1,s=r;continue}const i=e.substring(s+1,r);if(Object.prototype.hasOwnProperty.call(this.namedGroups,i)){const e=this.group(i);null!==e&&(t+=e)}else t+=`$<${i}>`;n=r+1,s=r;continue}}return n<r&&(t+=e.substring(n,r)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(t,n=!0,r=!1){let s="";this.reset();const i="function"===typeof t,o=Object.keys(this.namedGroups).length>0;let a=null;if(i){if(this.groupCount()>=e.MAX_REPLACER_ARGS)throw new Z("Too many capture groups to safely invoke replacer function");a=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}while(this.find())if(s+=i?this.appendReplacementFunc(t,o,a):this.appendReplacement(t,r),!n)break;return s+=this.appendTail(),s}appendReplacementFunc(e,t,n){let r="";const s=this.start(),i=this.end();this.appendPos<s&&(r+=this.substring(this.appendPos,s)),this.appendPos=i;const o=this.buildReplacerArgs(s,t,n);return r+=String(e(...o)),r}buildReplacerArgs(e,t,n){const r=[this.group(0)],s=this.groupCount();for(let i=1;i<=s;i++){const e=this.start(i);e<0?r.push(void 0):r.push(this.substring(e,this.end(i)))}if(r.push(e),r.push(n),t){const e=this.getNamedGroups();for(const t in e)null===e[t]&&(e[t]=void 0);r.push(e)}return r}},re=class e{static ALT=1;static ALT_MATCH=2;static CAPTURE=3;static EMPTY_WIDTH=4;static FAIL=5;static MATCH=6;static NOP=7;static RUNE=8;static RUNE1=9;static RUNE_ANY=10;static RUNE_ANY_NOT_NL=11;static LB_WRITE=12;static LB_CHECK=13;static isRuneOp(t){return e.RUNE<=t&&t<=e.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let n of e)t+=H.escapeRune(n);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=[],this.next=null}matchRune(e){if(1===this.runes.length){const t=this.runes[0];return 0!==(this.arg&y.FOLD_CASE)?k.equalsIgnoreCase(t,e):e===t}const t=this.runes.length;if(0===t)return!1;if(2===t||4===t||6===t||8===t){for(let n=0;n<t;n+=2){if(e<this.runes[n])return!1;if(e<=this.runes[n+1])return!0}return!1}let n=0,r=t>>1;while(r>1){const t=r>>1;n+=this.runes[n+t<<1]<=e?t:0,r-=t}n+=this.runes[n<<1]<=e?1:0;const s=n-1;return s>=0&&e<=this.runes[s<<1|1]}matchRunePos(e){if(1===this.runes.length){const t=this.runes[0];return 0!==(this.arg&y.FOLD_CASE)?k.equalsIgnoreCase(t,e)?0:-1:e===t?0:-1}const t=this.runes.length;if(0===t)return-1;if(2===t||4===t||6===t||8===t){for(let n=0;n<t;n+=2){if(e<this.runes[n])return-1;if(e<=this.runes[n+1])return Math.floor(n/2)}return-1}let n=0,r=t>>1;while(r>1){const t=r>>1;n+=this.runes[n+t<<1]<=e?t:0,r-=t}n+=this.runes[n<<1]<=e?1:0;const s=n-1;return s>=0&&e<=this.runes[s<<1|1]?s:-1}toString(){switch(this.op){case e.ALT:return`alt -> ${this.out}, ${this.arg}`;case e.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case e.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case e.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case e.MATCH:return"match"+(0!==this.arg?` ${this.arg}`:"");case e.FAIL:return"fail";case e.NOP:return`nop -> ${this.out}`;case e.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case e.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case e.RUNE:return null===this.runes?"rune <null>":["rune ",e.escapeRunes(this.runes),0!==(this.arg&y.FOLD_CASE)?"/i":""," -> ",this.out].join("");case e.RUNE1:return`rune1 ${e.escapeRunes(this.runes)} -> ${this.out}`;case e.RUNE_ANY:return`any -> ${this.out}`;case e.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},se=class{constructor(e){this.sparse=new Int32Array(e),this.densePcs=new Int32Array(e),this.denseCaps=null,this.size=0,this.ncap=0}init(e){this.ncap=e;const t=this.densePcs.length*e;(!this.denseCaps||this.denseCaps.length<t)&&(this.denseCaps=new Int32Array(t))}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return 0===this.size}add(e){const t=this.size++;return this.sparse[e]=t,this.densePcs[t]=e,t}clear(){this.size=0}toString(){let e="{";for(let t=0;t<this.size;t++)0!==t&&(e+=", "),e+=this.densePcs[t];return e+="}",e}},ie=class e{static fromRE2(t){const n=new e;return n.prog=t.prog,n.re2=t,n.q0=new se(n.prog.numInst()),n.q1=new se(n.prog.numInst()),n.matched=!1,n.matchcap=new Int32Array(n.prog.numCap<2?2:n.prog.numCap),n.ncap=0,n}static fromMachine(t){return e.fromRE2(t.re2)}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return 0===this.ncap?H.emptyInts():H.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,n){const r=this.re2.cond;if(r===H.EMPTY_ALL)return!1;if((n===y.ANCHOR_START||n===y.ANCHOR_BOTH)&&0!==t)return!1;this.matched=!1,this.matchcap.fill(-1);let s,i=this.prog.numLb>0?0:t,o=t,a=this.q0,B=this.q1,c=e.step(i),u=c>>3,l=7&c,h=-1,C=0;c!==q.EOF()&&(c=e.step(i+l),h=c>>3,C=7&c),s=0===i?H.emptyOpContext(-1,u):e.context(i);while(1){if(a.isEmpty()){if(0!==(r&H.EMPTY_BEGIN_TEXT)&&0!==i)break;if((n===y.ANCHOR_START||n===y.ANCHOR_BOTH)&&0!==i)break;if(this.matched)break;if(0===this.prog.numLb&&0!==this.re2.prefix.length&&h!==this.re2.prefixRune&&e.canCheckPrefix()){const t=e.index(this.re2,i);if(t<0)break;i+=t,c=e.step(i),u=c>>3,l=7&c,c=e.step(i+l),h=c>>3,C=7&c,s=e.context(i)}}if(0===i&&this.prog.numLb>0)for(let e=0;e<this.prog.lbStarts.length;e++)this.add(a,this.prog.lbStarts[e],i,this.matchcap,0,s);this.matched||0!==i&&n!==y.UNANCHORED||i>=o&&(this.ncap>0&&(this.matchcap[0]=i),this.add(a,this.prog.start,i,this.matchcap,0,s));const t=i+l;if(s=e.context(t),this.step(a,B,i,t,u,s,n,i===e.endPos()),0===l)break;if(0===this.ncap&&this.matched)break;i+=l,u=h,l=C,-1!==u&&(c=e.step(i+l),h=c>>3,C=7&c);const p=a;a=B,B=p}return B.clear(),this.matched}matchSet(e,t,n){const r=this.re2.cond;if(r===H.EMPTY_ALL)return[];if((n===y.ANCHOR_START||n===y.ANCHOR_BOTH)&&0!==t)return[];let s=this.prog.numLb>0?0:t,i=t,o=this.q0,a=this.q1,B=e.step(s),c=B>>3,u=7&B,l=-1,h=0;B!==q.EOF()&&(B=e.step(s+u),l=B>>3,h=7&B);let C=0===s?H.emptyOpContext(-1,c):e.context(s);const p=new Set;while(1){if(o.isEmpty()){if(0!==(r&H.EMPTY_BEGIN_TEXT)&&0!==s)break;if((n===y.ANCHOR_START||n===y.ANCHOR_BOTH)&&0!==s)break}if(0===s&&this.prog.numLb>0)for(let e=0;e<this.prog.lbStarts.length;e++)this.add(o,this.prog.lbStarts[e],s,this.matchcap,0,C);0!==s&&n!==y.UNANCHORED||s>=i&&this.add(o,this.prog.start,s,this.matchcap,0,C);const t=s+u;C=e.context(t);for(let r=0;r<o.size;r++){const i=o.densePcs[r],B=this.prog.inst[i],u=r*this.ncap;let l=!1;switch(B.op){case re.MATCH:if(n===y.ANCHOR_BOTH&&s!==e.endPos())break;p.add(B.arg);break;case re.RUNE:l=B.matchRune(c);break;case re.RUNE1:l=c===B.runes[0];break;case re.RUNE_ANY:l=!0;break;case re.RUNE_ANY_NOT_NL:l=10!==c;break;default:continue}l&&this.add(a,B.out,t,o.denseCaps,u,C)}if(o.clear(),0===u)break;s+=u,c=l,u=h,-1!==c&&(B=e.step(s+u),l=B>>3,h=7&B);const d=o;o=a,a=d}return a.clear(),Array.from(p).sort((e,t)=>e-t)}step(e,t,n,r,s,i,o,a){const B=this.re2.longest;for(let c=0;c<e.size;c++){const u=e.densePcs[c],l=c*this.ncap;if(B&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[l])continue;const h=this.prog.inst[u];let C=!1;switch(h.op){case re.MATCH:if(o===y.ANCHOR_BOTH&&!a)break;if(this.ncap>0&&(!B||!this.matched||this.matchcap[1]<n)){e.denseCaps[l+1]=n;for(let t=0;t<this.ncap;t++)this.matchcap[t]=e.denseCaps[l+t]}B||(e.size=0),this.matched=!0;break;case re.RUNE:C=h.matchRune(s);break;case re.RUNE1:C=s===h.runes[0];break;case re.RUNE_ANY:C=!0;break;case re.RUNE_ANY_NOT_NL:C=10!==s;break;default:continue}C&&this.add(t,h.out,r,e.denseCaps,l,i)}e.clear()}add(e,t,n,r,s,i){while(1){if(0===t)return;if(e.contains(t))return;const o=e.add(t),a=this.prog.inst[t];switch(a.op){case re.FAIL:return;case re.ALT:case re.ALT_MATCH:this.add(e,a.out,n,r,s,i),t=a.arg;continue;case re.EMPTY_WIDTH:if(0===(a.arg&~i)){t=a.out;continue}return;case re.NOP:t=a.out;continue;case re.CAPTURE:if(a.arg<this.ncap){const t=r[s+a.arg];return r[s+a.arg]=n,this.add(e,a.out,n,r,s,i),void(r[s+a.arg]=t)}t=a.out;continue;case re.LB_WRITE:this.lbTable[Math.abs(a.arg)]=n,t=a.out;continue;case re.LB_CHECK:if(a.arg>0){if(this.lbTable[a.arg]===n){t=a.out;continue}}else if(this.lbTable[-a.arg]!==n){t=a.out;continue}return;case re.MATCH:case re.RUNE:case re.RUNE1:case re.RUNE_ANY:case re.RUNE_ANY_NOT_NL:if(this.ncap>0){const t=o*this.ncap;for(let n=0;n<this.ncap;n++)e.denseCaps[t+n]=r[s+n]}return;default:throw new te("unhandled")}}}};const oe=e=>{let t=-2128831035;for(let n=0;n<e.length;n++)t^=e[n],t=Math.imul(t,16777619);return t},ae=(e,t)=>{if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0};var Be=class{constructor(e,t,n=[]){this.nfaStates=e,this.isMatch=t,this.matchIDs=n,this.nextLatin1=new Array(k.MAX_LATIN1+1).fill(null),this.nextLatin1Anchored=new Array(k.MAX_LATIN1+1).fill(null),this.transKeys=[],this.transVals=[],this.lastSeen=0}},ce=class e{static MAX_CACHE_CLEARS=5;static STATE_MEMORY_ESTIMATE=838;constructor(t,n=8388608){this.prog=t,this.stateCache=new Map,this.stateCount=0,this.startState=null,this.stateLimit=Math.max(1,Math.floor(n/e.STATE_MEMORY_ESTIMATE)),this.cacheClears=0,this.failed=!1,this.clock=0}computeClosure(e){const t=new Set,n=[...e];let r=!1;const s=[];while(n.length>0){const e=n.pop();if(t.has(e))continue;t.add(e);const i=this.prog.getInst(e);switch(i.op){case re.MATCH:r=!0,s.includes(i.arg)||s.push(i.arg);break;case re.ALT:case re.ALT_MATCH:n.push(i.out),n.push(i.arg);break;case re.NOP:case re.CAPTURE:n.push(i.out);break;case re.EMPTY_WIDTH:case re.LB_WRITE:case re.LB_CHECK:return null}}const i=Int32Array.from(t).sort();return s.sort((e,t)=>e-t),{pcs:i,isMatch:r,matchIDs:s}}getState(t){const n=this.computeClosure(t);if(!n)return null;const r=n.pcs,s=oe(r);let i=this.stateCache.get(s);if(i)for(let e=0;e<i.length;e++){const t=i[e];if(ae(t.nfaStates,r))return t.lastSeen=++this.clock,t}else i=[],this.stateCache.set(s,i);if(this.failed)return null;if(this.stateCount>=this.stateLimit){if(this.cacheClears++,this.cacheClears>=e.MAX_CACHE_CLEARS)return this.failed=!0,this.stateCache.clear(),this.stateCount=0,this.startState=null,null;this.evictCache(),i=this.stateCache.get(s),i||(i=[],this.stateCache.set(s,i))}const o=new Be(r,n.isMatch,n.matchIDs);return o.lastSeen=++this.clock,i.push(o),this.stateCount++,o}evictCache(){const e=[];for(const i of this.stateCache.values())for(let t=0;t<i.length;t++)e.push(i[t]);e.sort((e,t)=>e.lastSeen-t.lastSeen);const t=Math.max(1,Math.floor(this.stateLimit/2)),n=e.length-t,r=e.slice(n),s=new Set(r);this.stateCache.clear(),this.stateCount=0;for(let i=0;i<r.length;i++){const e=r[i];e.nextLatin1.fill(null),e.nextLatin1Anchored.fill(null),e.transKeys.length=0,e.transVals.length=0;const t=oe(e.nfaStates);let n=this.stateCache.get(t);n||(n=[],this.stateCache.set(t,n)),n.push(e),this.stateCount++}this.startState&&!s.has(this.startState)&&(this.startState=null)}step(e,t,n){if(t<=k.MAX_LATIN1)if(n===y.UNANCHORED){const n=e.nextLatin1[t];if(null!==n)return n}else{const n=e.nextLatin1Anchored[t];if(null!==n)return n}else{const r=t+(n===y.UNANCHORED?0:k.MAX_RUNE+1),s=e.transKeys,i=s.length;for(let t=0;t<i;t++)if(s[t]===r)return e.transVals[t]}const r=[];for(let i=0;i<e.nfaStates.length;i++){const n=e.nfaStates[i],s=this.prog.getInst(n);re.isRuneOp(s.op)&&s.matchRune(t)&&r.push(s.out)}n===y.UNANCHORED&&r.push(this.prog.start);const s=this.getState(r);if(t<=k.MAX_LATIN1)n===y.UNANCHORED?e.nextLatin1[t]=s:e.nextLatin1Anchored[t]=s;else{const r=t+(n===y.UNANCHORED?0:k.MAX_RUNE+1);e.transKeys.push(r),e.transVals.push(s)}return s}match(e,t,n){if((n===y.ANCHOR_START||n===y.ANCHOR_BOTH)&&0!==t)return!1;if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let r=e.endPos(),s=this.startState;if(s.isMatch){if(n!==y.ANCHOR_BOTH)return!0;if(t===r)return!0}let i=t;while(i<r){const t=e.step(i),o=t>>3,a=7&t;if(0===a)break;if(s=n===y.UNANCHORED&&o<=k.MAX_LATIN1&&s.nextLatin1[o]||this.step(s,o,n),null===s)return null;if(s.lastSeen=++this.clock,s.isMatch){if(n!==y.ANCHOR_BOTH)return!0;if(i+a===r)return!0}if(0===s.nfaStates.length&&n!==y.UNANCHORED)return!1;i+=a}return!1}matchSet(e,t,n){if((n===y.ANCHOR_START||n===y.ANCHOR_BOTH)&&0!==t)return[];if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let r=e.endPos(),s=this.startState;const i=new Set,o=(e,t)=>{e.isMatch&&(n===y.ANCHOR_BOTH?t===r&&e.matchIDs.forEach(e=>i.add(e)):e.matchIDs.forEach(e=>i.add(e)))};o(s,t);let a=t;while(a<r){const t=e.step(a),r=t>>3,i=7&t;if(0===i)break;if(s=n===y.UNANCHORED&&r<=k.MAX_LATIN1&&s.nextLatin1[r]||this.step(s,r,n),null===s)return null;if(s.lastSeen=++this.clock,a+=i,o(s,a),0===s.nfaStates.length&&n!==y.UNANCHORED)break}return Array.from(i).sort((e,t)=>e-t)}};const ue=32,le=500,he=256,Ce=262144;var pe=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(he),this.jobArg=new Uint8Array(he),this.jobPos=new Int32Array(he),this.jobLen=0,this.visited=new Uint32Array(0)}reset(e,t,n){this.end=t,this.jobLen=0,this.ncap=n;const r=e.numInst()*(t+1)+ue-1>>>5;this.visited.length<r?this.visited=new Uint32Array(r):this.visited.fill(0,0,r),this.cap.length<n?this.cap=new Int32Array(n).fill(-1):this.cap.fill(-1,0,n),this.matchcap.length<n?this.matchcap=new Int32Array(n).fill(-1):this.matchcap.fill(-1,0,n)}shouldVisit(e,t){const n=e*(this.end+1)+t,r=n>>>5,s=1<<(31&n);return 0===(this.visited[r]&s)&&(this.visited[r]|=s,!0)}push(e,t,n,r){if(e.prog.getInst(t).op!==re.FAIL&&(r||this.shouldVisit(t,n))){if(this.jobLen>=this.jobPc.length){const e=2*this.jobPc.length,t=new Int32Array(e);t.set(this.jobPc),this.jobPc=t;const n=new Uint8Array(e);n.set(this.jobArg),this.jobArg=n;const r=new Int32Array(e);r.set(this.jobPos),this.jobPos=r}this.jobPc[this.jobLen]=t,this.jobArg[this.jobLen]=r?1:0,this.jobPos[this.jobLen]=n,this.jobLen++}}tryBacktrack(e,t,n,r,s){const i=e.longest;this.push(e,n,r,!1);while(this.jobLen>0){this.jobLen--;let n=this.jobPc[this.jobLen],r=1===this.jobArg[this.jobLen],o=this.jobPos[this.jobLen],a=!0;while(1){if(!a&&!this.shouldVisit(n,o))break;a=!1;const B=e.prog.getInst(n);switch(B.op){case re.FAIL:throw new te("unexpected InstFail");case re.ALT:if(r){r=!1,n=B.arg;continue}this.push(e,n,o,!0),n=B.out;continue;case re.ALT_MATCH:{const t=e.prog.getInst(B.out);if(re.isRuneOp(t.op)){this.push(e,B.arg,o,!1),n=B.arg,o=this.end;continue}this.push(e,B.out,this.end,!1),n=B.out;continue}case re.RUNE:{const e=t.step(o);if(e===q.EOF())break;if(!B.matchRune(e>>3))break;o+=7&e,n=B.out;continue}case re.RUNE1:{const e=t.step(o);if(e===q.EOF())break;if(e>>3!==B.runes[0])break;o+=7&e,n=B.out;continue}case re.RUNE_ANY_NOT_NL:{const e=t.step(o);if(e===q.EOF())break;if(e>>3===10)break;o+=7&e,n=B.out;continue}case re.RUNE_ANY:{const e=t.step(o);if(e===q.EOF())break;o+=7&e,n=B.out;continue}case re.CAPTURE:if(r){this.cap[B.arg]=o;break}B.arg<this.ncap&&(this.push(e,n,this.cap[B.arg],!0),this.cap[B.arg]=o),n=B.out;continue;case re.EMPTY_WIDTH:{const e=t.context(o);if(0!==(B.arg&~e))break;n=B.out;continue}case re.NOP:n=B.out;continue;case re.MATCH:{if(s===y.ANCHOR_BOTH&&o!==this.end)break;if(0===this.ncap)return!0;this.ncap>1&&(this.cap[1]=o);const e=this.matchcap[1];if((-1===e||i&&o>0&&o>e)&&this.matchcap.set(this.cap),!i)return!0;if(o===this.end)return!0;break}case re.LB_WRITE:case re.LB_CHECK:throw new te("Backtracker cannot evaluate Lookbehind instructions");default:throw new te("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const de=[];var fe=class e{static shouldBacktrack(e){return e.numInst()<=le}static maxBitStateLen(t){return e.shouldBacktrack(t)?Math.floor(Ce/t.numInst()):0}static execute(e,t,n,r,s){const i=e.cond;if(i===H.EMPTY_ALL)return null;if((r===y.ANCHOR_START||r===y.ANCHOR_BOTH)&&0!==n)return null;if(0!==(i&H.EMPTY_BEGIN_TEXT)&&0!==n)return null;const o=de.length>0?de.pop():new pe,a=t.endPos();o.reset(e.prog,a,s);let B=!1;if(0!==(i&H.EMPTY_BEGIN_TEXT)||r===y.ANCHOR_START||r===y.ANCHOR_BOTH)o.ncap>0&&(o.cap[0]=n),o.tryBacktrack(e,t,e.prog.start,n,r)&&(B=!0);else{let s=-1;for(;n<=a&&0!==s;n+=s){if(e.prefix.length>0){const r=t.index(e,n);if(r<0)break;n+=r}if(o.ncap>0&&(o.cap[0]=n),o.tryBacktrack(e,t,e.prog.start,n,r)){B=!0;break}const i=t.step(n);s=i===q.EOF()?0:7&i}}if(!B)return de.push(o),null;const c=0===s?[]:H.toArray(o.matchcap.subarray(0,s));return de.push(o),c}},ge=class{constructor(e){this.sparse=new Uint32Array(e),this.dense=new Uint32Array(e),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(e){return e<this.sparse.length&&this.sparse[e]<this.size&&this.dense[this.sparse[e]]===e}insert(e){this.contains(e)||this.insertNew(e)}insertNew(e){e>=this.sparse.length||(this.sparse[e]=this.size,this.dense[this.size]=e,this.size++)}};const me=(e,t,n,r)=>{const s=e.length,i=t.length;let o=0,a=0;const B=[],c=[];let u=!0,l=-1;const h=s=>{const i=s?e:t,u=s?o:a,h=s?n:r;return!(l>0&&i[u]<=B[l])&&(B.push(i[u],i[u+1]),s?o+=2:a+=2,l+=2,c.push(h),!0)};while(o<s||a<i)if(u=a>=i?h(!0):o>=s||t[a]<e[o]?h(!1):h(!0),!u)return null;return{merged:B,next:c}};var Ee=class{constructor(e){this.start=e.start,this.numCap=e.numCap,this.inst=new Array(e.inst.length);for(let t=0;t<e.inst.length;t++){const n=e.inst[t],r=new re(n.op);r.out=n.out,r.arg=n.arg,r.runes=n.runes?n.runes.slice():[],r.next=null,this.inst[t]=r}}};const De=e=>{const t=new Ee(e);for(let n=0;n<t.inst.length;n++){const e=t.inst[n];if(e.op!==re.ALT&&e.op!==re.ALT_MATCH)continue;let r="out",s="arg",i=t.inst[e[s]];if(i.op!==re.ALT&&i.op!==re.ALT_MATCH&&(r="arg",s="out",i=t.inst[e[s]],i.op!==re.ALT&&i.op!==re.ALT_MATCH))continue;const o=t.inst[e[r]];if(o.op===re.ALT||o.op===re.ALT_MATCH)continue;let a="out",B="arg",c=!1;i.out===n?c=!0:i.arg===n&&(c=!0,a="arg",B="out"),c&&(i[a]=e[r]),e[r]===i[a]&&(e[s]=i[B])}return t},ye=e=>{if(e.inst.length>=1e3)return null;const t=new ge(e.inst.length),n=new ge(e.inst.length),r=new Array(e.inst.length),s=new Array(e.inst.length).fill(!1),i=o=>{let a=!0;const B=e.inst[o];if(n.contains(o))return!0;switch(n.insert(o),B.op){case re.ALT:case re.ALT_MATCH:{a=i(B.out)&&i(B.arg);let e=s[B.out],t=s[B.arg];if(e&&t)return!1;if(t){const n=B.out;B.out=B.arg,B.arg=n;const r=e;e=t,t=r}e&&(s[o]=!0,B.op=re.ALT_MATCH);const n=r[B.out]||[],c=r[B.arg]||[],u=me(n,c,B.out,B.arg);if(!u)return!1;r[o]=u.merged,B.next=new Uint32Array(u.next);break}case re.CAPTURE:case re.EMPTY_WIDTH:case re.NOP:a=i(B.out),s[o]=s[B.out],r[o]=r[B.out]?r[B.out].slice():[],B.next=new Uint32Array(Math.floor(r[o].length/2)+1).fill(B.out);break;case re.MATCH:case re.FAIL:s[o]=B.op===re.MATCH;break;case re.RUNE:{if(s[o]=!1,B.next&&B.next.length>0)break;if(t.insert(B.out),!B.runes||0===B.runes.length){r[o]=[],B.next=new Uint32Array([B.out]);break}let e=[];if(1===B.runes.length&&0!==(B.arg&y.FOLD_CASE)){const t=B.runes[0];e.push(t,t);for(let n=k.simpleFold(t);n!==t;n=k.simpleFold(n))e.push(n,n);e.sort((e,t)=>e-t)}else for(let t=0;t<B.runes.length;t++)e.push(B.runes[t]);r[o]=e,B.next=new Uint32Array(Math.floor(e.length/2)+1).fill(B.out),B.op=re.RUNE;break}case re.RUNE1:{if(s[o]=!1,B.next&&B.next.length>0)break;t.insert(B.out);let e=[];if(0!==(B.arg&y.FOLD_CASE)){const t=B.runes[0];e.push(t,t);for(let n=k.simpleFold(t);n!==t;n=k.simpleFold(n))e.push(n,n);e.sort((e,t)=>e-t)}else e.push(B.runes[0],B.runes[0]);r[o]=e,B.next=new Uint32Array(Math.floor(e.length/2)+1).fill(B.out),B.op=re.RUNE;break}case re.RUNE_ANY:if(s[o]=!1,B.next&&B.next.length>0)break;t.insert(B.out),r[o]=[0,k.MAX_RUNE],B.next=new Uint32Array([B.out]);break;case re.RUNE_ANY_NOT_NL:if(s[o]=!1,B.next&&B.next.length>0)break;t.insert(B.out),r[o]=[0,9,11,k.MAX_RUNE],B.next=new Uint32Array(Math.floor(r[o].length/2)+1).fill(B.out);break}return a};t.clear(),t.insert(e.start);while(!t.empty())if(n.clear(),!i(t.next()))return null;for(let o=0;o<e.inst.length;o++)r[o]&&(e.inst[o].runes=r[o]);return e},we=(e,t)=>{for(let n=0;n<t.inst.length;n++){const r=t.inst[n];switch(r.op){case re.ALT:case re.ALT_MATCH:case re.RUNE:break;case re.CAPTURE:case re.EMPTY_WIDTH:case re.NOP:case re.MATCH:case re.FAIL:e.inst[n].next=null;break;case re.RUNE1:case re.RUNE_ANY:case re.RUNE_ANY_NOT_NL:e.inst[n].next=null,e.inst[n].op=r.op,e.inst[n].runes=r.runes?r.runes.slice():[];break}}};var _e=class e{static compile(e){if(0===e.start)return null;if(e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==re.EMPTY_WIDTH||0===(t.arg&H.EMPTY_BEGIN_TEXT))return null;let n=!1;for(let s=0;s<e.inst.length;s++)if(e.inst[s].op===re.ALT||e.inst[s].op===re.ALT_MATCH){n=!0;break}for(let s=0;s<e.inst.length;s++){const t=e.inst[s],r=e.inst[t.out].op;switch(t.op){case re.ALT:case re.ALT_MATCH:if(r===re.MATCH||e.inst[t.arg].op===re.MATCH)return null;break;case re.EMPTY_WIDTH:if(r===re.MATCH){if((t.arg&H.EMPTY_END_TEXT)===H.EMPTY_END_TEXT)continue;return null}break;default:if(r===re.MATCH&&n)return null;break}}let r=De(e);return r=ye(r),null!==r&&we(r,e),r}static next(e,t){const n=e.matchRunePos(t);return n>=0?e.next[n]:e.op===re.ALT_MATCH?e.out:0}static execute(t,n,r,s,i){const o=t.onepass;if(!o)return null;const a=new Int32Array(i).fill(-1);let B=!1,c=n.step(r),u=c>>3,l=7&c,h=q.EOF(),C=-1,p=0;c!==q.EOF()&&(h=n.step(r+l),h!==q.EOF()&&(C=h>>3,p=7&h));let d,f=0===r?H.emptyOpContext(-1,u):n.context(r),g=o.start;while(1){switch(d=o.inst[g],g=d.out,d.op){case re.MATCH:return s===y.ANCHOR_BOTH&&r!==n.endPos()?null:(B=!0,a.length>0&&(a[0]=0,a[1]=r),0===i?[]:H.toArray(a));case re.RUNE:if(!d.matchRune(u))return null;break;case re.RUNE1:if(u!==d.runes[0])return null;break;case re.RUNE_ANY:break;case re.RUNE_ANY_NOT_NL:if(10===u)return null;break;case re.ALT:case re.ALT_MATCH:g=e.next(d,u);continue;case re.FAIL:return null;case re.NOP:continue;case re.EMPTY_WIDTH:if(0!==(d.arg&~f))return null;continue;case re.CAPTURE:d.arg<a.length&&(a[d.arg]=r);continue;default:throw new te("bad inst")}if(0===l)break;f=H.emptyOpContext(u,C),r+=l,u=C,l=p,-1!==u&&(h=n.step(r+l),h!==q.EOF()?(C=h>>3,p=7&h):(C=-1,p=0))}return B?0===i?[]:H.toArray(a):null}},ve=class e{static Op=U(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"]);static isPseudoOp(t){return t>=e.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===b.CODES.get("-")?"\\":""}static fromRegexp(t){const n=new e(t.op);return n.flags=t.flags,n.subs=t.subs,n.runes=t.runes,n.cap=t.cap,n.min=t.min,n.max=t.max,n.name=t.name,n.namedGroups=t.namedGroups,n.lb=t.lb,n}constructor(t){this.op=t,this.flags=0,this.subs=e.emptySubs(),this.runes=[],this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=e.emptySubs(),this.runes=[],this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let t="";switch(this.op){case e.Op.NO_MATCH:t+="[^\\x00-\\x{10FFFF}]";break;case e.Op.EMPTY_MATCH:t+="(?:)";break;case e.Op.STAR:case e.Op.PLUS:case e.Op.QUEST:case e.Op.REPEAT:{const n=this.subs[0];switch(n.op>e.Op.CAPTURE||n.op===e.Op.LITERAL&&n.runes.length>1?t+=`(?:${n.appendTo()})`:t+=n.appendTo(),this.op){case e.Op.STAR:t+="*";break;case e.Op.PLUS:t+="+";break;case e.Op.QUEST:t+="?";break;case e.Op.REPEAT:t+=`{${this.min}`,this.min!==this.max&&(t+=",",this.max>=0&&(t+=this.max)),t+="}";break}0!==(this.flags&y.NON_GREEDY)&&(t+="?");break}case e.Op.CONCAT:for(let n of this.subs)n.op===e.Op.ALTERNATE?t+=`(?:${n.appendTo()})`:t+=n.appendTo();break;case e.Op.ALTERNATE:{let e="";for(let n of this.subs)t+=e,e="|",t+=n.appendTo();break}case e.Op.LITERAL:0!==(this.flags&y.FOLD_CASE)&&(t+="(?i:");for(let e of this.runes)t+=H.escapeRune(e);0!==(this.flags&y.FOLD_CASE)&&(t+=")");break;case e.Op.ANY_CHAR_NOT_NL:t+="(?-s:.)";break;case e.Op.ANY_CHAR:t+="(?s:.)";break;case e.Op.PLB:t+=`(?<=${this.subs[0].appendTo()})`;break;case e.Op.NLB:t+=`(?<!${this.subs[0].appendTo()})`;break;case e.Op.CAPTURE:null===this.name||0===this.name.length?t+="(":t+=`(?P<${this.name}>`,this.subs[0].op!==e.Op.EMPTY_MATCH&&(t+=this.subs[0].appendTo()),t+=")";break;case e.Op.BEGIN_TEXT:t+="\\A";break;case e.Op.END_TEXT:0!==(this.flags&y.WAS_DOLLAR)?t+="(?-m:$)":t+="\\z";break;case e.Op.BEGIN_LINE:t+="^";break;case e.Op.END_LINE:t+="$";break;case e.Op.WORD_BOUNDARY:t+="\\b";break;case e.Op.NO_WORD_BOUNDARY:t+="\\B";break;case e.Op.CHAR_CLASS:if(this.runes.length%2!==0){t+="[invalid char class]";break}if(t+="[",0===this.runes.length)t+="^\\x00-\\x{10FFFF}";else if(0===this.runes[0]&&this.runes[this.runes.length-1]===k.MAX_RUNE){t+="^";for(let n=1;n<this.runes.length-1;n+=2){const r=this.runes[n]+1,s=this.runes[n+1]-1;t+=e.quoteIfHyphen(r),t+=H.escapeRune(r),r!==s&&(t+="-",t+=e.quoteIfHyphen(s),t+=H.escapeRune(s))}}else for(let n=0;n<this.runes.length;n+=2){const r=this.runes[n],s=this.runes[n+1];t+=e.quoteIfHyphen(r),t+=H.escapeRune(r),r!==s&&(t+="-",t+=e.quoteIfHyphen(s),t+=H.escapeRune(s))}t+="]";break;default:t+=this.op;break}return t}maxCap(){let t=0;if(this.op===e.Op.CAPTURE&&(t=this.cap),null!==this.subs)for(let e of this.subs){const n=e.maxCap();t<n&&(t=n)}return t}equals(t){if(!(null!==t&&t instanceof e))return!1;if(this.op!==t.op)return!1;switch(this.op){case e.Op.END_TEXT:if((this.flags&y.WAS_DOLLAR)!==(t.flags&y.WAS_DOLLAR))return!1;break;case e.Op.LITERAL:case e.Op.CHAR_CLASS:if(null===this.runes&&null===t.runes)break;if(null===this.runes||null===t.runes)return!1;if(this.runes.length!==t.runes.length)return!1;for(let e=0;e<this.runes.length;e++)if(this.runes[e]!==t.runes[e])return!1;break;case e.Op.ALTERNATE:case e.Op.CONCAT:if(this.subs.length!==t.subs.length)return!1;for(let e=0;e<this.subs.length;++e)if(!this.subs[e].equals(t.subs[e]))return!1;break;case e.Op.STAR:case e.Op.PLUS:case e.Op.QUEST:if((this.flags&y.NON_GREEDY)!==(t.flags&y.NON_GREEDY)||!this.subs[0].equals(t.subs[0]))return!1;break;case e.Op.REPEAT:if((this.flags&y.NON_GREEDY)!==(t.flags&y.NON_GREEDY)||this.min!==t.min||this.max!==t.max||!this.subs[0].equals(t.subs[0]))return!1;break;case e.Op.CAPTURE:if(this.cap!==t.cap||(null===this.name?null!==t.name:this.name!==t.name)||!this.subs[0].equals(t.subs[0]))return!1;break;case e.Op.PLB:case e.Op.NLB:if(this.lb!==t.lb||!this.subs[0].equals(t.subs[0]))return!1;break}return!0}},Ie=class{constructor(e){this.next=[Object.create(null)],this.fail=[0],this.match=[!1];for(const n of e){let e=0;for(let t=0;t<n.length;t++){const r=n[t];r in this.next[e]||(this.next.push(Object.create(null)),this.fail.push(0),this.match.push(!1),this.next[e][r]=this.next.length-1),e=this.next[e][r]}this.match[e]=!0}const t=[];for(const n in this.next[0])if(Object.prototype.hasOwnProperty.call(this.next[0],n)){const e=this.next[0][n];this.fail[e]=0,t.push(e)}while(t.length>0){const e=t.shift();for(const n in this.next[e])if(Object.prototype.hasOwnProperty.call(this.next[e],n)){const r=this.next[e][n];let s=this.fail[e];while(0!==s&&!(n in this.next[s]))s=this.fail[s];n in this.next[s]?this.fail[r]=this.next[s][n]:this.fail[r]=0,this.match[r]=this.match[r]||this.match[this.fail[r]],t.push(r)}}}searchUTF16(e,t,n){let r=0;for(let s=t;s<n;s++){const t=e.charCodeAt(s);while(0!==r&&!(t in this.next[r]))r=this.fail[r];if(t in this.next[r]&&(r=this.next[r][t]),this.match[r])return!0}return!1}searchUTF8(e,t,n){let r=0;for(let s=t;s<n;s++){const t=e[s];while(0!==r&&!(t in this.next[r]))r=this.fail[r];if(t in this.next[r]&&(r=this.next[r][t]),this.match[r])return!0}return!1}},Te=class e{static Type={NONE:0,EXACT:1,AND:2,OR:3};constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.ac16=null,this.ac8=null}eval(t,n){switch(this.type){case e.Type.NONE:return!0;case e.Type.EXACT:return t.hasString(this,n);case e.Type.AND:for(let e=0;e<this.subs.length;e++)if(!this.subs[e].eval(t,n))return!1;return!0;case e.Type.OR:if(this.ac16&&this.ac8)return t.hasAnyString(this,n);for(let e=0;e<this.subs.length;e++)if(this.subs[e].eval(t,n))return!0;return!1;default:return!0}}},be=class e{static build(t){const n=e.fromRegexp(t);return e.simplify(n)}static fromRegexp(t){if(!t)return new Te(Te.Type.NONE);switch(t.op){case ve.Op.PLB:case ve.Op.NLB:case ve.Op.NO_MATCH:case ve.Op.EMPTY_MATCH:case ve.Op.BEGIN_LINE:case ve.Op.END_LINE:case ve.Op.BEGIN_TEXT:case ve.Op.END_TEXT:case ve.Op.WORD_BOUNDARY:case ve.Op.NO_WORD_BOUNDARY:case ve.Op.CHAR_CLASS:case ve.Op.ANY_CHAR_NOT_NL:case ve.Op.ANY_CHAR:return new Te(Te.Type.NONE);case ve.Op.LITERAL:{if(0===t.runes.length||0!==(t.flags&y.FOLD_CASE))return new Te(Te.Type.NONE);const e=new Te(Te.Type.EXACT);let n="";for(let r=0;r<t.runes.length;r++)n+=String.fromCodePoint(t.runes[r]);return e.str=n,e.bytes=H.stringToUtf8ByteArray(e.str),e}case ve.Op.CAPTURE:case ve.Op.PLUS:return e.fromRegexp(t.subs[0]);case ve.Op.REPEAT:return t.min>=1?e.fromRegexp(t.subs[0]):new Te(Te.Type.NONE);case ve.Op.CONCAT:{const n=new Te(Te.Type.AND);for(const r of t.subs)n.subs.push(e.fromRegexp(r));return n}case ve.Op.ALTERNATE:{const n=new Te(Te.Type.OR);for(const r of t.subs)n.subs.push(e.fromRegexp(r));return n}default:return new Te(Te.Type.NONE)}}static simplify(t){if(t.type===Te.Type.EXACT||t.type===Te.Type.NONE)return t;if(t.type===Te.Type.AND){const n=[];for(const r of t.subs){const t=e.simplify(r);if(t.type!==Te.Type.NONE)if(t.type===Te.Type.AND)for(let e=0;e<t.subs.length;e++)n.push(t.subs[e]);else n.push(t)}return 0===n.length?new Te(Te.Type.NONE):1===n.length?n[0]:(t.subs=n,t)}if(t.type===Te.Type.OR){const n=[];for(const o of t.subs){const t=e.simplify(o);if(t.type===Te.Type.NONE)return new Te(Te.Type.NONE);if(t.type===Te.Type.OR)for(let e=0;e<t.subs.length;e++)n.push(t.subs[e]);else n.push(t)}if(0===n.length)return new Te(Te.Type.NONE);if(1===n.length)return n[0];const r=new Set,s=[];for(const e of n)e.type===Te.Type.EXACT?r.has(e.str)||(r.add(e.str),s.push(e)):s.push(e);t.subs=s;let i=!0;for(const e of s)if(e.type!==Te.Type.EXACT){i=!1;break}return i&&s.length>1&&(t.ac16=new Ie(s.map(e=>{const t=[];for(let n=0;n<e.str.length;n++)t.push(e.str.charCodeAt(n));return t})),t.ac8=new Ie(s.map(e=>e.bytes))),t}return t}},Se=class{constructor(e=0,t=0){this.head=e,this.tail=t}},Oe=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0}getInst(e){return this.inst[e]}numInst(){return this.inst.length}addInst(e){this.inst.push(new re(e))}skipNop(e){let t=this.inst[e];while(t.op===re.NOP||t.op===re.CAPTURE)t=this.inst[e],e=t.out;return t}prefix(){let e="",t=this.skipNop(this.start);if(!re.isRuneOp(t.op)||1!==t.runes.length)return[t.op===re.MATCH,e];while(re.isRuneOp(t.op)&&1===t.runes.length&&0===(t.arg&y.FOLD_CASE))e+=String.fromCodePoint(t.runes[0]),t=this.skipNop(t.out);return[t.op===re.MATCH,e]}startCond(){let e=0,t=this.start;e:for(;;){const n=this.inst[t];switch(n.op){case re.EMPTY_WIDTH:e|=n.arg;break;case re.FAIL:return-1;case re.CAPTURE:case re.NOP:break;default:break e}t=n.out}return e}patch(e,t){let n=e.head;while(0!==n){const e=this.inst[n>>1];0===(1&n)?(n=e.out,e.out=t):(n=e.arg,e.arg=t)}}append(e,t){if(0===e.head)return t;if(0===t.head)return e;const n=this.inst[e.tail>>1];return 0===(1&e.tail)?n.out=t.head:n.arg=t.head,new Se(e.head,t.tail)}toString(){let e="";for(let t=0;t<this.inst.length;t++){const n=e.length;e+=t,t===this.start&&(e+="*"),e+="        ".substring(e.length-n),e+=this.inst[t],e+="\n"}return e}},Ae=class{constructor(e=0,t=new Se,n=!1){this.i=e,this.out=t,this.nullable=n}},Ne=class e{static ANY_RUNE_NOT_NL(){return[0,b.CODES.get("\n")-1,b.CODES.get("\n")+1,k.MAX_RUNE]}static ANY_RUNE(){return[0,k.MAX_RUNE]}static compileRegexp(t){const n=new e,r=n.compile(t);return n.prog.patch(r.out,n.newInst(re.MATCH).i),n.prog.start=r.i,n.prog}static compileSet(t){const n=new e;if(0===t.length)return n.prog.start=n.newInst(re.FAIL).i,n.prog;let r=[];for(let e=0;e<t.length;e++){const s=n.compile(t[e]),i=n.newInst(re.MATCH);n.prog.getInst(i.i).arg=e,n.prog.patch(s.out,i.i),r.push(s.i)}let s=r[0];for(let e=1;e<r.length;e++){const t=n.newInst(re.ALT),i=n.prog.getInst(t.i);i.out=s,i.arg=r[e],s=t.i}return n.prog.start=s,n.prog}constructor(){this.prog=new Oe,this.newInst(re.FAIL)}newInst(e){return this.prog.addInst(e),new Ae(this.prog.numInst()-1,new Se,!0)}nop(){const e=this.newInst(re.NOP);return e.out=new Se(e.i<<1,e.i<<1),e}fail(){return new Ae}cap(e){const t=this.newInst(re.CAPTURE);return t.out=new Se(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return 0===e.i||0===t.i?this.fail():(this.prog.patch(e.out,t.i),new Ae(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(0===e.i)return t;if(0===t.i)return e;const n=this.newInst(re.ALT),r=this.prog.getInst(n.i);return r.out=e.i,r.arg=t.i,n.out=this.prog.append(e.out,t.out),n.nullable=e.nullable||t.nullable,n}loop(e,t){const n=this.newInst(re.ALT),r=this.prog.getInst(n.i);return t?(r.arg=e.i,n.out=new Se(n.i<<1,n.i<<1)):(r.out=e.i,n.out=new Se(n.i<<1|1,n.i<<1|1)),this.prog.patch(e.out,n.i),n}quest(e,t){const n=this.newInst(re.ALT),r=this.prog.getInst(n.i);return t?(r.arg=e.i,n.out=new Se(n.i<<1,n.i<<1)):(r.out=e.i,n.out=new Se(n.i<<1|1,n.i<<1|1)),n.out=this.prog.append(n.out,e.out),n}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new Ae(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(re.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new Se(t.i<<1,t.i<<1),t}rune(e,t){const n=this.newInst(re.RUNE);n.nullable=!1;const r=this.prog.getInst(n.i);return r.runes=e,t&=y.FOLD_CASE,1===e.length&&k.simpleFold(e[0])!==e[0]||(t&=~y.FOLD_CASE),r.arg=t,n.out=new Se(n.i<<1,n.i<<1),0===(t&y.FOLD_CASE)&&1===e.length||2===e.length&&e[0]===e[1]?r.op=re.RUNE1:2===e.length&&0===e[0]&&e[1]===k.MAX_RUNE?r.op=re.RUNE_ANY:4===e.length&&0===e[0]&&e[1]===b.CODES.get("\n")-1&&e[2]===b.CODES.get("\n")+1&&e[3]===k.MAX_RUNE&&(r.op=re.RUNE_ANY_NOT_NL),n}lookBehind(t,n){const r=this.newInst(re.LB_WRITE);this.prog.getInst(r.i).arg=n;const s=this.rune(e.ANY_RUNE(),0),i=this.star(s,!0),o=this.cat(i,t);this.prog.patch(o.out,r.i);const a=this.newInst(re.LB_CHECK);return this.prog.getInst(a.i).arg=n,this.prog.lbStarts.push(o.i),Math.abs(n)>this.prog.numLb&&(this.prog.numLb=Math.abs(n)),a.out=new Se(a.i<<1,a.i<<1),a}compile(t){switch(t.op){case ve.Op.NO_MATCH:return this.fail();case ve.Op.EMPTY_MATCH:return this.nop();case ve.Op.LITERAL:if(0===t.runes.length)return this.nop();{let e=null;for(let n of t.runes){const r=this.rune([n],t.flags);e=null===e?r:this.cat(e,r)}return e}case ve.Op.CHAR_CLASS:return this.rune(t.runes,t.flags);case ve.Op.ANY_CHAR_NOT_NL:return this.rune(e.ANY_RUNE_NOT_NL(),0);case ve.Op.ANY_CHAR:return this.rune(e.ANY_RUNE(),0);case ve.Op.BEGIN_LINE:return this.empty(H.EMPTY_BEGIN_LINE);case ve.Op.END_LINE:return this.empty(H.EMPTY_END_LINE);case ve.Op.BEGIN_TEXT:return this.empty(H.EMPTY_BEGIN_TEXT);case ve.Op.END_TEXT:return this.empty(H.EMPTY_END_TEXT);case ve.Op.WORD_BOUNDARY:return this.empty(H.EMPTY_WORD_BOUNDARY);case ve.Op.NO_WORD_BOUNDARY:return this.empty(H.EMPTY_NO_WORD_BOUNDARY);case ve.Op.PLB:case ve.Op.NLB:return this.lookBehind(this.compile(t.subs[0]),t.lb);case ve.Op.CAPTURE:{const e=this.cap(t.cap<<1),n=this.compile(t.subs[0]),r=this.cap(t.cap<<1|1);return this.cat(this.cat(e,n),r)}case ve.Op.STAR:return this.star(this.compile(t.subs[0]),0!==(t.flags&y.NON_GREEDY));case ve.Op.PLUS:return this.plus(this.compile(t.subs[0]),0!==(t.flags&y.NON_GREEDY));case ve.Op.QUEST:return this.quest(this.compile(t.subs[0]),0!==(t.flags&y.NON_GREEDY));case ve.Op.CONCAT:if(0===t.subs.length)return this.nop();{let e=null;for(let n of t.subs){const t=this.compile(n);e=null===e?t:this.cat(e,t)}return e}case ve.Op.ALTERNATE:if(0===t.subs.length)return this.nop();{let e=null;for(let n of t.subs){const t=this.compile(n);e=null===e?t:this.alt(e,t)}return e}default:throw new X("regexp: unhandled case in compile")}}},Fe=class e{static simplify(t){if(null===t)return null;switch(t.op){case ve.Op.PLB:case ve.Op.NLB:case ve.Op.CAPTURE:{const n=e.simplify(t.subs[0]);if(n!==t.subs[0]){const e=ve.fromRegexp(t);return e.runes=[],e.subs=[n],e}return t}case ve.Op.CONCAT:case ve.Op.ALTERNATE:{const n=[];let r=!1;for(let s=0;s<t.subs.length;s++){const i=t.subs[s],o=e.simplify(i);if(o!==i&&(r=!0),t.op===ve.Op.CONCAT){if(o.op===ve.Op.NO_MATCH)return new ve(ve.Op.NO_MATCH);if(o.op===ve.Op.EMPTY_MATCH){r=!0;continue}if(o.op===ve.Op.CONCAT){r=!0;for(let e=0;e<o.subs.length;e++)n.push(o.subs[e]);continue}}else if(t.op===ve.Op.ALTERNATE){if(o.op===ve.Op.NO_MATCH){r=!0;continue}if(o.op===ve.Op.ALTERNATE){r=!0;for(let e=0;e<o.subs.length;e++)n.push(o.subs[e]);continue}}n.push(o)}if(r){if(0===n.length)return new ve(t.op===ve.Op.CONCAT?ve.Op.EMPTY_MATCH:ve.Op.NO_MATCH);if(1===n.length)return n[0];const e=ve.fromRegexp(t);return e.runes=[],e.subs=n,e}return t}case ve.Op.CHAR_CLASS:return null===t.runes?t:0===t.runes.length?new ve(ve.Op.NO_MATCH):2===t.runes.length&&0===t.runes[0]&&t.runes[1]===k.MAX_RUNE?new ve(ve.Op.ANY_CHAR):4===t.runes.length&&0===t.runes[0]&&t.runes[1]===b.CODES.get("\n")-1&&t.runes[2]===b.CODES.get("\n")+1&&t.runes[3]===k.MAX_RUNE?new ve(ve.Op.ANY_CHAR_NOT_NL):t;case ve.Op.STAR:case ve.Op.PLUS:case ve.Op.QUEST:{const n=e.simplify(t.subs[0]);return e.simplify1(t.op,t.flags,n,t)}case ve.Op.REPEAT:{if(0===t.min&&0===t.max)return new ve(ve.Op.EMPTY_MATCH);const n=e.simplify(t.subs[0]);if(-1===t.max){if(0===t.min)return e.simplify1(ve.Op.STAR,t.flags,n,null);if(1===t.min)return e.simplify1(ve.Op.PLUS,t.flags,n,null);const r=new ve(ve.Op.CONCAT),s=[];for(let e=0;e<t.min-1;e++)s.push(n);return s.push(e.simplify1(ve.Op.PLUS,t.flags,n,null)),r.subs=s.slice(0),e.simplify(r)}if(1===t.min&&1===t.max)return n;let r=null;if(t.min>0){r=[];for(let e=0;e<t.min;e++)r.push(n)}if(t.max>t.min){let s=e.simplify1(ve.Op.QUEST,t.flags,n,null);for(let r=t.min+1;r<t.max;r++){const r=new ve(ve.Op.CONCAT);r.subs=[n,s],s=e.simplify1(ve.Op.QUEST,t.flags,r,null)}if(null===r)return s;r.push(s)}if(null!==r){const t=new ve(ve.Op.CONCAT);return t.subs=r.slice(0),e.simplify(t)}return new ve(ve.Op.NO_MATCH)}}return t}static simplify1(e,t,n,r){if(n.op===ve.Op.EMPTY_MATCH)return n;if(n.op===ve.Op.NO_MATCH)return e===ve.Op.PLUS?n:new ve(ve.Op.EMPTY_MATCH);if(e===n.op&&(t&y.NON_GREEDY)===(n.flags&y.NON_GREEDY))return n;if(null!==r&&r.op===e&&(r.flags&y.NON_GREEDY)===(t&y.NON_GREEDY)&&n===r.subs[0])return r;const s=new ve(e);return s.flags=t,s.subs=[n],s}},Le=class{constructor(e,t){this.sign=e,this.cls=t}};const Re=[48,57],ke=[9,10,12,13,32,32],Pe=[48,57,65,90,95,95,97,122],xe=new Map([["\\d",new Le(1,Re)],["\\D",new Le(-1,Re)],["\\s",new Le(1,ke)],["\\S",new Le(-1,ke)],["\\w",new Le(1,Pe)],["\\W",new Le(-1,Pe)]]),Me=[48,57,65,90,97,122],Ge=[65,90,97,122],He=[0,127],Ue=[9,9,32,32],Ve=[0,31,127,127],Je=[48,57],je=[33,126],Ke=[97,122],qe=[32,126],ze=[33,47,58,64,91,96,123,126],Qe=[9,13,32,32],$e=[65,90],We=[48,57,65,90,95,95,97,122],Ye=[48,57,65,70,97,102],Xe=new Map([["[:alnum:]",new Le(1,Me)],["[:^alnum:]",new Le(-1,Me)],["[:alpha:]",new Le(1,Ge)],["[:^alpha:]",new Le(-1,Ge)],["[:ascii:]",new Le(1,He)],["[:^ascii:]",new Le(-1,He)],["[:blank:]",new Le(1,Ue)],["[:^blank:]",new Le(-1,Ue)],["[:cntrl:]",new Le(1,Ve)],["[:^cntrl:]",new Le(-1,Ve)],["[:digit:]",new Le(1,Je)],["[:^digit:]",new Le(-1,Je)],["[:graph:]",new Le(1,je)],["[:^graph:]",new Le(-1,je)],["[:lower:]",new Le(1,Ke)],["[:^lower:]",new Le(-1,Ke)],["[:print:]",new Le(1,qe)],["[:^print:]",new Le(-1,qe)],["[:punct:]",new Le(1,ze)],["[:^punct:]",new Le(-1,ze)],["[:space:]",new Le(1,Qe)],["[:^space:]",new Le(-1,Qe)],["[:upper:]",new Le(1,$e)],["[:^upper:]",new Le(-1,$e)],["[:word:]",new Le(1,We)],["[:^word:]",new Le(-1,We)],["[:xdigit:]",new Le(1,Ye)],["[:^xdigit:]",new Le(-1,Ye)]]);var Ze=class e{static charClassToString(e,t){let n="[";for(let r=0;r<t;r+=2){r>0&&(n+=" ");const t=e[r],s=e[r+1];n+=t===s?`0x${t.toString(16)}`:`0x${t.toString(16)}-0x${s.toString(16)}`}return n+="]",n}static cmp(e,t,n,r){const s=e[t]-n;return 0!==s?s:r-e[t+1]}static qsortIntPair(t,n,r){const s=(n+r)/2&-2,i=t[s],o=t[s+1];let a=n,B=r;while(a<=B){while(a<r&&e.cmp(t,a,i,o)<0)a+=2;while(B>n&&e.cmp(t,B,i,o)>0)B-=2;if(a<=B){if(a!==B){let e=t[a];t[a]=t[B],t[B]=e,e=t[a+1],t[a+1]=t[B+1],t[B+1]=e}a+=2,B-=2}}n<B&&e.qsortIntPair(t,n,B),a<r&&e.qsortIntPair(t,a,r)}constructor(e=H.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;e.qsortIntPair(this.r,0,this.len-2);let t=2;for(let e=2;e<this.len;e+=2){const n=this.r[e],r=this.r[e+1];n<=this.r[t-1]+1?r>this.r[t-1]&&(this.r[t-1]=r):(this.r[t]=n,this.r[t+1]=r,t+=2)}return this.len=t,this}appendLiteral(e,t){return 0!==(t&y.FOLD_CASE)?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0)for(let n=2;n<=4;n+=2)if(this.len>=n){const r=this.r[this.len-n],s=this.r[this.len-n+1];if(e<=s+1&&r<=t+1)return e<r&&(this.r[this.len-n]=e),t>s&&(this.r[this.len-n+1]=t),this}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=k.MIN_FOLD&&t>=k.MAX_FOLD)return this.appendRange(e,t);if(t<k.MIN_FOLD||e>k.MAX_FOLD)return this.appendRange(e,t);e<k.MIN_FOLD&&(this.appendRange(e,k.MIN_FOLD-1),e=k.MIN_FOLD),t>k.MAX_FOLD&&(this.appendRange(k.MAX_FOLD+1,t),t=k.MAX_FOLD);for(let n=e;n<=t;n++){this.appendRange(n,n);for(let e=k.simpleFold(n);e!==n;e=k.simpleFold(e))this.appendRange(e,e)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let n=0;n<e.length;n+=2){const r=e[n],s=e[n+1];t<=r-1&&this.appendRange(t,r-1),t=s+1}return t<=k.MAX_RUNE&&this.appendRange(t,k.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const n=e.getLo(t),r=e.getHi(t),s=e.getStride(t);if(1!==s)for(let e=n;e<=r;e+=s)this.appendRange(e,e);else this.appendRange(n,r)}return this}appendNegatedTable(e){let t=0;for(let n=0;n<e.length;++n){const r=e.getLo(n),s=e.getHi(n),i=e.getStride(n);if(1!==i)for(let e=r;e<=s;e+=i)t<=e-1&&this.appendRange(t,e-1),t=e+1;else t<=r-1&&this.appendRange(t,r-1),t=s+1}return t<=k.MAX_RUNE&&this.appendRange(t,k.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let n=0;n<this.len;n+=2){const r=this.r[n],s=this.r[n+1];e<=r-1&&(this.r[t]=e,this.r[t+1]=r-1,t+=2),e=s+1}return this.len=t,e<=k.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=k.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(t,n){let r=t.cls;return n&&(r=(new e).appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,t.sign)}toString(){return e.charClassToString(this.r,this.len)}},et=class{constructor(e){this.str=e,this.position=0}pos(){return this.position}rewindTo(e){this.position=e}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(e){this.position+=e}skipString(e){this.position+=e.length}pop(){const e=this.str.codePointAt(this.position);return this.position+=H.charCount(e),e}lookingAt(e){return this.str.startsWith(e,this.position)}rest(){return this.str.substring(this.position)}from(e){return this.str.substring(e,this.position)}toString(){return this.rest()}},tt=class e{static ERR_INTERNAL_ERROR="regexp/syntax: internal error";static ERR_INVALID_CHAR_RANGE="invalid character class range";static ERR_INVALID_ESCAPE="invalid escape sequence";static ERR_INVALID_NAMED_CAPTURE="invalid named capture";static ERR_INVALID_PERL_OP="invalid or unsupported Perl syntax";static ERR_INVALID_REPEAT_OP="invalid nested repetition operator";static ERR_INVALID_REPEAT_SIZE="invalid repeat count";static ERR_MISSING_BRACKET="missing closing ]";static ERR_MISSING_PAREN="missing closing )";static ERR_MISSING_REPEAT_ARGUMENT="missing argument to repetition operator";static ERR_TRAILING_BACKSLASH="trailing backslash at end of expression";static ERR_DUPLICATE_NAMED_CAPTURE="duplicate capture group name";static ERR_UNEXPECTED_PAREN="unexpected )";static ERR_NESTING_DEPTH="expression nests too deeply";static ERR_LARGE="expression too large";static ERR_INVALID_CAPTURE_IN_LOOKBEHIND="invalid capture in lookbehind";static MAX_HEIGHT=1e3;static MAX_SIZE=3355443;static MAX_RUNES=33554432;static ANY_TABLE=new S(new Uint32Array([0,k.MAX_RUNE,1]));static ASCII_TABLE=new S(new Uint32Array([0,127,1]));static ASCII_FOLD_TABLE=new S(new Uint32Array([0,127,1,383,383,1,8490,8490,1]));static unicodeTable(t){return"Any"===t?{tab:e.ANY_TABLE,fold:e.ANY_TABLE,sign:1}:"Ascii"===t?{tab:e.ASCII_TABLE,fold:e.ASCII_FOLD_TABLE,sign:1}:"Assigned"===t?{tab:R.CATEGORIES.get("Cn"),fold:R.CATEGORIES.get("Cn"),sign:-1}:"Lc"===t?{tab:R.CATEGORIES.get("LC"),fold:R.FOLD_CATEGORIES.get("LC"),sign:1}:R.CATEGORIES.has(t)?{tab:R.CATEGORIES.get(t),fold:R.FOLD_CATEGORIES.get(t),sign:1}:R.SCRIPTS.has(t)?{tab:R.SCRIPTS.get(t),fold:R.FOLD_SCRIPT.get(t),sign:1}:null}static minFoldRune(e){if(e<k.MIN_FOLD||e>k.MAX_FOLD)return e;let t=e;const n=e;for(e=k.simpleFold(e);e!==n;e=k.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===ve.Op.EMPTY_MATCH)return null;if(e.op===ve.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===ve.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const n=new ve(ve.Op.LITERAL);return n.flags=t,n.runes=H.stringToRunes(e),n}static parse(t,n){return new e(t,n).parseInternal()}static parseRepeat(t){const n=t.pos();if(!t.more()||!t.lookingAt("{"))return-1;t.skip(1);const r=e.parseInt(t);if(-1===r)return-1;if(!t.more())return-1;let s;if(t.lookingAt(",")){if(t.skip(1),!t.more())return-1;if(t.lookingAt("}"))s=-1;else if(-1===(s=e.parseInt(t)))return-1}else s=r;if(!t.more()||!t.lookingAt("}"))return-1;if(t.skip(1),r<0||r>1e3||-2===s||s>1e3||s>=0&&r>s)throw new Y(e.ERR_INVALID_REPEAT_SIZE,t.from(n));return r<<16|s&k.MAX_BMP}static isValidCaptureName(e){if(0===e.length)return!1;for(let t=0;t<e.length;t++){const n=e.codePointAt(t);if(n!==b.CODES.get("_")&&!H.isalnum(n))return!1}return!0}static parseInt(e){const t=e.pos();while(e.more()&&e.peek()>=b.CODES.get("0")&&e.peek()<=b.CODES.get("9"))e.skip(1);const n=e.from(t);return 0===n.length||n.length>1&&n.codePointAt(0)===b.CODES.get("0")?-1:n.length>8?-2:parseInt(n,10)}static isCharClass(e){return e.op===ve.Op.LITERAL&&1===e.runes.length||e.op===ve.Op.CHAR_CLASS||e.op===ve.Op.ANY_CHAR_NOT_NL||e.op===ve.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case ve.Op.LITERAL:return 1===e.runes.length&&e.runes[0]===t;case ve.Op.CHAR_CLASS:for(let n=0;n<e.runes.length;n+=2)if(e.runes[n]<=t&&t<=e.runes[n+1])return!0;return!1;case ve.Op.ANY_CHAR_NOT_NL:return t!==b.CODES.get("\n");case ve.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(t,n){switch(t.op){case ve.Op.ANY_CHAR:break;case ve.Op.ANY_CHAR_NOT_NL:e.matchRune(n,b.CODES.get("\n"))&&(t.op=ve.Op.ANY_CHAR);break;case ve.Op.CHAR_CLASS:n.op===ve.Op.LITERAL?t.runes=new Ze(t.runes).appendLiteral(n.runes[0],n.flags).toArray():t.runes=new Ze(t.runes).appendClass(n.runes).toArray();break;case ve.Op.LITERAL:if(n.runes[0]===t.runes[0]&&n.flags===t.flags)break;t.op=ve.Op.CHAR_CLASS,t.runes=(new Ze).appendLiteral(t.runes[0],t.flags).appendLiteral(n.runes[0],n.flags).toArray();break}}static parseEscape(t){const n=t.pos();if(t.skip(1),!t.more())throw new Y(e.ERR_TRAILING_BACKSLASH);let r=t.pop();e:switch(r){case b.CODES.get("1"):case b.CODES.get("2"):case b.CODES.get("3"):case b.CODES.get("4"):case b.CODES.get("5"):case b.CODES.get("6"):case b.CODES.get("7"):if(!t.more()||t.peek()<b.CODES.get("0")||t.peek()>b.CODES.get("7"))break;case b.CODES.get("0"):{let e=r-b.CODES.get("0");for(let n=1;n<3;n++){if(!t.more()||t.peek()<b.CODES.get("0")||t.peek()>b.CODES.get("7"))break;e=8*e+t.peek()-b.CODES.get("0"),t.skip(1)}return e}case b.CODES.get("x"):{if(!t.more())break;if(r=t.pop(),r===b.CODES.get("{")){let e=0,n=0;while(1){if(!t.more())break e;if(r=t.pop(),r===b.CODES.get("}"))break;const s=H.unhex(r);if(s<0)break e;if(n=16*n+s,n>k.MAX_RUNE)break e;e++}if(0===e)break e;return n}const e=H.unhex(r);if(!t.more())break;r=t.pop();const n=H.unhex(r);if(e<0||n<0)break;return 16*e+n}case b.CODES.get("a"):return b.CODES.get("");case b.CODES.get("f"):return b.CODES.get("\f");case b.CODES.get("n"):return b.CODES.get("\n");case b.CODES.get("r"):return b.CODES.get("\r");case b.CODES.get("t"):return b.CODES.get("\t");case b.CODES.get("v"):return b.CODES.get("\v");default:if(r<=k.MAX_ASCII&&!H.isalnum(r))return r;break}throw new Y(e.ERR_INVALID_ESCAPE,t.from(n))}static parseClassChar(t,n){if(!t.more())throw new Y(e.ERR_MISSING_BRACKET,t.from(n));return t.lookingAt("\\")?e.parseEscape(t):t.pop()}static concatRunes(e,t){for(let n=0;n<t.length;n++)e.push(t[n]);return e}static hasCapture(t){if(null===t)return!1;if(t.op===ve.Op.CAPTURE)return!0;if(t.subs)for(let n of t.subs)if(e.hasCapture(n))return!0;return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return null!==t&&null!==t.subs&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new ve(e),this.numRegexp+=1),t}reuse(e){null!==this.height&&this.height.has(e)&&this.height.delete(e),null!==e.subs&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(t){if(this.numRunes>e.MAX_RUNES)throw new Y(e.ERR_LARGE);this.checkSize(t),this.checkHeight(t)}checkSize(t){if(null===this.size){if(0===this.repeats&&(this.repeats=1),t.op===ve.Op.REPEAT){let n=t.max;-1===n&&(n=t.min),n<=0&&(n=1),n>Math.floor(e.MAX_SIZE/this.repeats)?this.repeats=e.MAX_SIZE:this.repeats*=n}if(this.numRegexp<Math.floor(e.MAX_SIZE/this.repeats))return;this.size=new Map;for(let e of this.stack)this.checkSize(e)}if(this.calcSize(t,!0)>e.MAX_SIZE)throw new Y(e.ERR_LARGE)}calcSize(e,t=!1){if(!t&&null!==this.size&&this.size.has(e))return this.size.get(e);let n=0;switch(e.op){case ve.Op.LITERAL:n=e.runes.length;break;case ve.Op.PLB:case ve.Op.NLB:case ve.Op.CAPTURE:case ve.Op.STAR:n=2+this.calcSize(e.subs[0]);break;case ve.Op.PLUS:case ve.Op.QUEST:n=1+this.calcSize(e.subs[0]);break;case ve.Op.CONCAT:for(let t of e.subs)n+=this.calcSize(t);break;case ve.Op.ALTERNATE:for(let t of e.subs)n+=this.calcSize(t);e.subs.length>1&&(n=n+e.subs.length-1);break;case ve.Op.REPEAT:{let t=this.calcSize(e.subs[0]);if(-1===e.max){n=0===e.min?2+t:1+e.min*t;break}n=e.max*t+(e.max-e.min);break}}return n=Math.max(1,n),null===this.size&&(this.size=new Map),this.size.set(e,n),n}checkHeight(t){if(!(this.numRegexp<e.MAX_HEIGHT)){if(null===this.height){this.height=new Map;for(let e of this.stack)this.checkHeight(e)}if(this.calcHeight(t,!0)>e.MAX_HEIGHT)throw new Y(e.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&null!==this.height&&this.height.has(e))return this.height.get(e);let n=1;for(let r of e.subs){const e=this.calcHeight(r);n<1+e&&(n=1+e)}return null===this.height&&(this.height=new Map),this.height.set(e,n),n}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;while(t>0&&!ve.isPseudoOp(this.stack[t-1].op))t--;const n=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),n}push(e){if(this.numRunes+=e.runes.length,e.op===ve.Op.CHAR_CLASS&&2===e.runes.length&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&~y.FOLD_CASE))return null;e.op=ve.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&~y.FOLD_CASE}else if(e.op===ve.Op.CHAR_CLASS&&4===e.runes.length&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&k.simpleFold(e.runes[0])===e.runes[2]&&k.simpleFold(e.runes[2])===e.runes[0]||e.op===ve.Op.CHAR_CLASS&&2===e.runes.length&&e.runes[0]+1===e.runes[1]&&k.simpleFold(e.runes[0])===e.runes[1]&&k.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|y.FOLD_CASE))return null;e.op=ve.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|y.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(t,n){const r=this.stack.length;if(r<2)return!1;const s=this.stack[r-1],i=this.stack[r-2];return s.op===ve.Op.LITERAL&&i.op===ve.Op.LITERAL&&(s.flags&y.FOLD_CASE)===(i.flags&y.FOLD_CASE)&&(i.runes=e.concatRunes(i.runes,s.runes),t>=0?(s.runes=[t],s.flags=n,!0):(this.pop(),this.reuse(s),!1))}newLiteral(t,n){const r=this.newRegexp(ve.Op.LITERAL);return r.flags=n,0!==(n&y.FOLD_CASE)&&(t=e.minFoldRune(t)),r.runes=[t],r}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(t,n,r,s,i,o){let a=this.flags;if(0!==(a&y.PERL_X)&&(i.more()&&i.lookingAt("?")&&(i.skip(1),a^=y.NON_GREEDY),-1!==o))throw new Y(e.ERR_INVALID_REPEAT_OP,i.from(o));const B=this.stack.length;if(0===B)throw new Y(e.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const c=this.stack[B-1];if(ve.isPseudoOp(c.op))throw new Y(e.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const u=this.newRegexp(t);if(u.min=n,u.max=r,u.flags=a,u.subs=[c],this.stack[B-1]=u,this.checkLimits(u),t===ve.Op.REPEAT&&(n>=2||r>=2)&&!this.repeatIsValid(u,1e3))throw new Y(e.ERR_INVALID_REPEAT_SIZE,i.from(s))}repeatIsValid(e,t){if(e.op===ve.Op.REPEAT){let n=e.max;if(0===n)return!0;if(n<0&&(n=e.min),n>t)return!1;n>0&&(t=Math.trunc(t/n))}for(let n of e.subs)if(!this.repeatIsValid(n,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return 0===e.length?this.push(this.newRegexp(ve.Op.EMPTY_MATCH)):this.push(this.collapse(e,ve.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),0===e.length?this.push(this.newRegexp(ve.Op.NO_MATCH)):this.push(this.collapse(e,ve.Op.ALTERNATE))}cleanAlt(e){e.op===ve.Op.CHAR_CLASS&&(e.runes=new Ze(e.runes).cleanClass().toArray(),2===e.runes.length&&0===e.runes[0]&&e.runes[1]===k.MAX_RUNE?(e.runes=[],e.op=ve.Op.ANY_CHAR):4===e.runes.length&&0===e.runes[0]&&e.runes[1]===b.CODES.get("\n")-1&&e.runes[2]===b.CODES.get("\n")+1&&e.runes[3]===k.MAX_RUNE&&(e.runes=[],e.op=ve.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(1===e.length)return e[0];let n=0;for(let o of e)n+=o.op===t?o.subs.length:1;let r=new Array(n).fill(null),s=0;for(let o of e)if(o.op===t){for(let e=0;e<o.subs.length;e++)r[s++]=o.subs[e];this.reuse(o)}else r[s++]=o;let i=this.newRegexp(t);if(i.subs=r,t===ve.Op.ALTERNATE&&(i.subs=this.factor(i.subs),1===i.subs.length)){const e=i;i=i.subs[0],this.reuse(e)}return i}factor(t){if(t.length<2)return t;let n=0,r=t.length,s=0,i=null,o=0,a=0,B=0;for(let e=0;e<=r;e++){let c=null,u=0,l=0;if(e<r){let r=t[n+e];if(r.op===ve.Op.CONCAT&&r.subs.length>0&&(r=r.subs[0]),r.op===ve.Op.LITERAL&&(c=r.runes,u=r.runes.length,l=r.flags&y.FOLD_CASE),l===a){let e=0;while(e<o&&e<u&&i[e]===c[e])e++;if(e>0){o=e;continue}}}if(e===B);else if(e===B+1)t[s++]=t[n+B];else{const r=this.newRegexp(ve.Op.LITERAL);r.flags=a,r.runes=i.slice(0,o);for(let s=B;s<e;s++)t[n+s]=this.removeLeadingString(t[n+s],o),this.checkLimits(t[n+s]);const c=this.collapse(t.slice(n+B,n+e),ve.Op.ALTERNATE),u=this.newRegexp(ve.Op.CONCAT);u.subs=[r,c],t[s++]=u}B=e,i=c,o=u,a=l}r=s,n=0,B=0,s=0;let c=null;for(let u=0;u<=r;u++){let i=null;if(!(u<r&&(i=e.leadingRegexp(t[n+u]),null!==c&&c.equals(i)&&(e.isCharClass(c)||c.op===ve.Op.REPEAT&&c.min===c.max&&e.isCharClass(c.subs[0]))))){if(u===B);else if(u===B+1)t[s++]=t[n+B];else{const e=c;for(let s=B;s<u;s++){const e=s!==B;t[n+s]=this.removeLeadingRegexp(t[n+s],e),this.checkLimits(t[n+s])}const r=this.collapse(t.slice(n+B,n+u),ve.Op.ALTERNATE),i=this.newRegexp(ve.Op.CONCAT);i.subs=[e,r],t[s++]=i}B=u,c=i}}r=s,n=0,B=0,s=0;for(let u=0;u<=r;u++)if(!(u<r&&e.isCharClass(t[n+u]))){if(u===B);else if(u===B+1)t[s++]=t[n+B];else{let r=B;for(let e=B+1;e<u;e++){const s=t[n+r],i=t[n+e];(s.op<i.op||s.op===i.op&&(null!==s.runes?s.runes.length:0)<(null!==i.runes?i.runes.length:0))&&(r=e)}const i=t[n+B];t[n+B]=t[n+r],t[n+r]=i;for(let s=B+1;s<u;s++)e.mergeCharClass(t[n+B],t[n+s]),this.reuse(t[n+s]);this.cleanAlt(t[n+B]),t[s++]=t[n+B]}u<r&&(t[s++]=t[n+u]),B=u+1}r=s,n=0,B=0,s=0;for(let e=0;e<r;++e)e+1<r&&t[n+e].op===ve.Op.EMPTY_MATCH&&t[n+e+1].op===ve.Op.EMPTY_MATCH||(t[s++]=t[n+e]);return r=s,n=0,t.slice(n,r)}removeLeadingString(e,t){if(e.op===ve.Op.CONCAT&&e.subs.length>0){const n=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=n,n.op===ve.Op.EMPTY_MATCH)switch(this.reuse(n),e.subs.length){case 0:case 1:e.op=ve.Op.EMPTY_MATCH,e.subs=ve.emptySubs();break;case 2:{const t=e;e=e.subs[1],this.reuse(t);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===ve.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),0===e.runes.length&&(e.op=ve.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===ve.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=ve.Op.EMPTY_MATCH,e.subs=ve.emptySubs();break;case 1:{const t=e;e=e.subs[0],this.reuse(t);break}}return e}return t&&this.reuse(e),this.newRegexp(ve.Op.EMPTY_MATCH)}parseInternal(){if(0!==(this.flags&y.LITERAL))return e.literalRegexp(this.wholeRegexp,this.flags);let t=-1,n=-1,r=-1;const s=new et(this.wholeRegexp);while(s.more()){let i=-1;e:switch(s.peek()){case b.CODES.get("("):if(0!==(this.flags&y.LOOKBEHIND)){if(s.lookingAt("(?<=")){this.parsePosLookBehind(),s.skip(4);break}if(s.lookingAt("(?<!")){this.parseNegLookBehind(),s.skip(4);break}}if(0!==(this.flags&y.PERL_X)&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(ve.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case b.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case b.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case b.CODES.get("^"):0!==(this.flags&y.ONE_LINE)?this.op(ve.Op.BEGIN_TEXT):this.op(ve.Op.BEGIN_LINE),s.skip(1);break;case b.CODES.get("$"):0!==(this.flags&y.ONE_LINE)?this.op(ve.Op.END_TEXT).flags|=y.WAS_DOLLAR:this.op(ve.Op.END_LINE),s.skip(1);break;case b.CODES.get("."):0!==(this.flags&y.DOT_NL)?this.op(ve.Op.ANY_CHAR):this.op(ve.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case b.CODES.get("["):this.parseClass(s);break;case b.CODES.get("*"):case b.CODES.get("+"):case b.CODES.get("?"):{i=s.pos();let e=null;switch(s.pop()){case b.CODES.get("*"):e=ve.Op.STAR;break;case b.CODES.get("+"):e=ve.Op.PLUS;break;case b.CODES.get("?"):e=ve.Op.QUEST;break}this.repeat(e,n,r,i,s,t);break}case b.CODES.get("{"):{i=s.pos();const o=e.parseRepeat(s);if(o<0){s.rewindTo(i),this.literal(s.pop());break}n=o>>16,r=(o&k.MAX_BMP)<<16>>16,this.repeat(ve.Op.REPEAT,n,r,i,s,t);break}case b.CODES.get("\\"):{const t=s.pos();if(s.skip(1),0!==(this.flags&y.PERL_X)&&s.more())switch(s.pop()){case b.CODES.get("A"):this.op(ve.Op.BEGIN_TEXT);break e;case b.CODES.get("b"):this.op(ve.Op.WORD_BOUNDARY);break e;case b.CODES.get("B"):this.op(ve.Op.NO_WORD_BOUNDARY);break e;case b.CODES.get("C"):throw new Y(e.ERR_INVALID_ESCAPE,"\\C");case b.CODES.get("Q"):{let e=s.rest();const t=e.indexOf("\\E");t>=0?(e=e.substring(0,t),s.skipString(e),s.skipString("\\E")):s.skipString(e);let n=0;while(n<e.length){const t=e.codePointAt(n);this.literal(t),n+=H.charCount(t)}break e}case b.CODES.get("z"):this.op(ve.Op.END_TEXT);break e;default:s.rewindTo(t);break}else s.rewindTo(t);const n=this.newRegexp(ve.Op.CHAR_CLASS);if(n.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const e=new Ze;if(this.parseUnicodeClass(s,e)){n.runes=e.toArray(),this.push(n);break e}}const r=new Ze;if(this.parsePerlClassEscape(s,r)){n.runes=r.toArray(),this.push(n);break e}s.rewindTo(t),this.reuse(n),this.literal(e.parseEscape(s));break}default:this.literal(s.pop());break}t=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),1!==this.stack.length)throw new Y(e.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(t){const n=t.pos(),r=t.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const n="P"===r.charAt(2)?4:3,s=r.indexOf(">");if(s<0)throw new Y(e.ERR_INVALID_NAMED_CAPTURE,r);const i=r.substring(n,s);if(t.skipString(i),t.skip(n+1),!e.isValidCaptureName(i))throw new Y(e.ERR_INVALID_NAMED_CAPTURE,r.substring(0,s+1));const o=this.op(ve.Op.LEFT_PAREN);if(o.cap=++this.numCap,this.namedGroups[i])throw new Y(e.ERR_DUPLICATE_NAMED_CAPTURE,i);return this.namedGroups[i]=this.numCap,void(o.name=i)}t.skip(2);let s=this.flags,i=1,o=!1;e:while(t.more()){const e=t.pop();switch(e){case b.CODES.get("i"):s|=y.FOLD_CASE,o=!0;break;case b.CODES.get("m"):s&=~y.ONE_LINE,o=!0;break;case b.CODES.get("s"):s|=y.DOT_NL,o=!0;break;case b.CODES.get("U"):s|=y.NON_GREEDY,o=!0;break;case b.CODES.get("-"):if(i<0)break e;i=-1,s=~s,o=!1;break;case b.CODES.get(":"):case b.CODES.get(")"):if(i<0){if(!o)break e;s=~s}return e===b.CODES.get(":")&&this.op(ve.Op.LEFT_PAREN),void(this.flags=s);default:break e}}throw new Y(e.ERR_INVALID_PERL_OP,t.from(n))}parsePosLookBehind(){const e=this.newRegexp(ve.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(ve.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(ve.Op.VERTICAL_BAR)}swapVerticalBar(){const t=this.stack.length;if(t>=3&&this.stack[t-2].op===ve.Op.VERTICAL_BAR&&e.isCharClass(this.stack[t-1])&&e.isCharClass(this.stack[t-3])){let n=this.stack[t-1],r=this.stack[t-3];if(n.op>r.op){const e=r;r=n,n=e,this.stack[t-3]=r}return e.mergeCharClass(r,n),this.reuse(n),this.pop(),!0}if(t>=2){const e=this.stack[t-1],n=this.stack[t-2];if(n.op===ve.Op.VERTICAL_BAR)return t>=3&&this.cleanAlt(this.stack[t-3]),this.stack[t-2]=e,this.stack[t-1]=n,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new Y(e.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const t=this.pop(),n=this.pop();if(n.op!==ve.Op.LEFT_PAREN)throw new Y(e.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=n.flags,0!==n.lb){if(e.hasCapture(t))throw new Y(e.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);return n.lb>0?n.op=ve.Op.PLB:n.op=ve.Op.NLB,n.subs=[t],void this.push(n)}0===n.cap?this.push(t):(n.op=ve.Op.CAPTURE,n.subs=[t],this.push(n))}parsePerlClassEscape(e,t){const n=e.pos();if(0===(this.flags&y.PERL_X)||!e.more()||e.pop()!==b.CODES.get("\\")||!e.more())return!1;e.pop();const r=e.from(n),s=xe.has(r)?xe.get(r):null;return null!==s&&(t.appendGroup(s,0!==(this.flags&y.FOLD_CASE)),!0)}parseNamedClass(t,n){const r=t.rest(),s=r.indexOf(":]");if(s<0)return!1;const i=r.substring(0,s+2);t.skipString(i);const o=Xe.has(i)?Xe.get(i):null;if(null===o)throw new Y(e.ERR_INVALID_CHAR_RANGE,i);return n.appendGroup(o,0!==(this.flags&y.FOLD_CASE)),!0}parseUnicodeClass(t,n){const r=t.pos();if(0===(this.flags&y.UNICODE_GROUPS)||!t.lookingAt("\\p")&&!t.lookingAt("\\P"))return!1;t.skip(1);let s,i=1,o=t.pop();if(o===b.CODES.get("P")&&(i=-1),!t.more())throw t.rewindTo(r),new Y(e.ERR_INVALID_CHAR_RANGE,t.rest());if(o=t.pop(),o!==b.CODES.get("{"))s=H.runeToString(o);else{const n=t.rest(),i=n.indexOf("}");if(i<0)throw t.rewindTo(r),new Y(e.ERR_INVALID_CHAR_RANGE,t.rest());s=n.substring(0,i),t.skipString(s),t.skip(1)}0!==s.length&&s.codePointAt(0)===b.CODES.get("^")&&(i=0-i,s=s.substring(1));const a=e.unicodeTable(s);if(null===a)throw new Y(e.ERR_INVALID_CHAR_RANGE,t.from(r));a.sign<0&&(i=0-i);const B=a.tab,c=a.fold;if(0===(this.flags&y.FOLD_CASE)||null===c)n.appendTableWithSign(B,i);else{const e=(new Ze).appendTable(B).appendTable(c).cleanClass().toArray();n.appendClassWithSign(e,i)}return!0}parseClass(t){const n=t.pos();t.skip(1);const r=this.newRegexp(ve.Op.CHAR_CLASS);r.flags=this.flags;const s=new Ze;let i=1;t.more()&&t.lookingAt("^")&&(i=-1,t.skip(1),0===(this.flags&y.CLASS_NL)&&s.appendRange(b.CODES.get("\n"),b.CODES.get("\n")));let o=!0;while(!t.more()||t.peek()!==b.CODES.get("]")||o){if(t.more()&&t.lookingAt("-")&&0===(this.flags&y.PERL_X)&&!o){const r=t.rest();if("-"===r||!r.startsWith("-]"))throw t.rewindTo(n),new Y(e.ERR_INVALID_CHAR_RANGE,t.rest())}o=!1;const r=t.pos();if(t.lookingAt("[:")){if(this.parseNamedClass(t,s))continue;t.rewindTo(r)}if(this.parseUnicodeClass(t,s))continue;if(this.parsePerlClassEscape(t,s))continue;t.rewindTo(r);const i=e.parseClassChar(t,n);let a=i;if(t.more()&&t.lookingAt("-"))if(t.skip(1),t.more()&&t.lookingAt("]"))t.skip(-1);else if(a=e.parseClassChar(t,n),a<i)throw new Y(e.ERR_INVALID_CHAR_RANGE,t.from(r));0===(this.flags&y.FOLD_CASE)?s.appendRange(i,a):s.appendFoldedRange(i,a)}t.skip(1),s.cleanClass(),i<0&&s.negateClass(),r.runes=s.toArray(),this.push(r)}},nt=class e{static initTest(t){const n=e.compile(t),r=new e(n.expr,n.prog,n.numSubexp,n.longest);return r.cond=n.cond,r.prefix=n.prefix,r.prefixUTF8=n.prefixUTF8,r.prefixComplete=n.prefixComplete,r.prefixRune=n.prefixRune,r.prefilter=n.prefilter,r}static compile(t){return e.compileImpl(t,y.PERL,!1)}static compilePOSIX(t){return e.compileImpl(t,y.POSIX,!0)}static compileImpl(t,n,r){let s=tt.parse(t,n);const i=s.maxCap();s=Fe.simplify(s);const o=be.build(s),a=Ne.compileRegexp(s),B=new e(t,a,i,r);B.prefilter=o.type===Te.Type.NONE?null:o;const[c,u]=a.prefix();return B.prefixComplete=c,B.prefix=u,B.prefixUTF8=H.stringToUtf8ByteArray(B.prefix),B.prefix.length>0&&(B.prefixRune=B.prefix.codePointAt(0)),B.namedGroups=s.namedGroups,B}static match(t,n){return e.compile(t).match(n)}constructor(e,t,n=0,r=0){this.expr=e,this.prog=t,this.numSubexp=n,this.longest=r,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.machinePool=[],this.dfa=new ce(this.prog),this.onepass=_e.compile(this.prog),this.prefilter=null}matchPrefixComplete(e,t,n,r){if((n===y.ANCHOR_START||n===y.ANCHOR_BOTH)&&0!==t)return null;let s=-1,i=-1;const o=e.prefixLength(this);if(n===y.UNANCHORED){const n=e.index(this,t);if(n<0)return null;s=t+n,i=s+o}else if(n===y.ANCHOR_BOTH){if(e.endPos()!==o)return null;if(0!==e.index(this,0))return null;s=0,i=o}else if(n===y.ANCHOR_START){if(0!==e.index(this,0))return null;s=0,i=o}if(s<0)return null;if(r>0){const e=new Int32Array(r).fill(-1);return e[0]=s,e[1]=i,Array.from(e)}return[]}executeEngine(e,t,n,r){if(this.prefixComplete&&(0===r||0===this.numSubexp))return this.matchPrefixComplete(e,t,n,r);if(null!==this.prefilter&&n===y.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(null!==this.onepass)return _e.execute(this,e,t,n,r);if(r>0)return 0===this.prog.numLb&&e.endPos()<=fe.maxBitStateLen(this.prog)?fe.execute(this,e,t,n,r):this.doExecuteNFA(e,t,n,r);if(0===this.prog.numLb){const s=this.dfa.match(e,t,n);if(null!==s)return s?[]:null;if(e.endPos()<=fe.maxBitStateLen(this.prog))return fe.execute(this,e,t,n,r)}return this.doExecuteNFA(e,t,n,r)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,n,r){let s=this.get();s||(s=ie.fromRE2(this)),s.init(r);const i=s.match(e,t,n)?s.submatches():null;return this.put(s),i}match(e){return null!==this.executeEngine($.fromUTF16(e),0,y.UNANCHORED,0)}matchWithGroup(e,t,n,r,s){return e instanceof V||(e=H.isByteArray(e)?K.utf8(e):K.utf16(e)),this.matchMachineInput(e,t,n,r,s)}matchMachineInput(e,t,n,r,s){if(t>n)return[!1,null];const i=e.isUTF16Encoding()?$.fromUTF16(e.asCharSequence(),0,n):$.fromUTF8(e.asBytes(),0,n),o=this.executeEngine(i,t,r,2*s);return null===o?[!1,null]:[!0,o]}matchUTF8(e){return null!==this.executeEngine($.fromUTF8(e),0,y.UNANCHORED,0)}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,n){let r=0,s=0,i="";const o=$.fromUTF16(e);let a=0;while(s<=e.length){const B=this.executeEngine(o,s,y.UNANCHORED,2);if(null===B||0===B.length)break;i+=e.substring(r,B[0]),(B[1]>r||0===B[0])&&(i+=t(e.substring(B[0],B[1])),a++),r=B[1];const c=7&o.step(s);if(s+c>B[1]?s+=c:s+1>B[1]?s++:s=B[1],a>=n)break}return i+=e.substring(r),i}pad(e){if(null===e)return null;let t=2*(1+this.numSubexp);if(e.length<t){let n=new Array(t).fill(-1);for(let t=0;t<e.length;t++)n[t]=e[t];e=n}return e}allMatches(e,t,n=e=>e){let r=[];const s=e.endPos();t<0&&(t=s+1);let i=0,o=0,a=-1;while(o<t&&i<=s){const t=this.executeEngine(e,i,y.UNANCHORED,this.prog.numCap);if(null===t||0===t.length)break;let B=!0;if(t[1]===i){t[0]===a&&(B=!1);const n=e.step(i);n<0?i=s+1:i+=7&n}else i=t[1];a=t[1],B&&(r.push(n(this.pad(t))),o++)}return r}findUTF8(e){const t=this.executeEngine($.fromUTF8(e),0,y.UNANCHORED,2);return null===t?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine($.fromUTF8(e),0,y.UNANCHORED,2);return null===t?null:t.slice(0,2)}find(e){const t=this.executeEngine($.fromUTF16(e),0,y.UNANCHORED,2);return null===t?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine($.fromUTF16(e),0,y.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine($.fromUTF8(e),0,y.UNANCHORED,this.prog.numCap);if(null===t)return null;const n=new Array(1+this.numSubexp).fill(null);for(let r=0;r<n.length;r++)2*r<t.length&&t[2*r]>=0&&(n[r]=e.slice(t[2*r],t[2*r+1]));return n}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine($.fromUTF8(e),0,y.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine($.fromUTF16(e),0,y.UNANCHORED,this.prog.numCap);if(null===t)return null;const n=new Array(1+this.numSubexp).fill(null);for(let r=0;r<n.length;r++)2*r<t.length&&t[2*r]>=0&&(n[r]=e.substring(t[2*r],t[2*r+1]));return n}findSubmatchIndex(e){return this.pad(this.executeEngine($.fromUTF16(e),0,y.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const n=this.allMatches($.fromUTF8(e),t,t=>e.slice(t[0],t[1]));return 0===n.length?null:n}findAllUTF8Index(e,t){const n=this.allMatches($.fromUTF8(e),t,e=>e.slice(0,2));return 0===n.length?null:n}findAll(e,t){const n=this.allMatches($.fromUTF16(e),t,t=>e.substring(t[0],t[1]));return 0===n.length?null:n}findAllIndex(e,t){const n=this.allMatches($.fromUTF16(e),t,e=>e.slice(0,2));return 0===n.length?null:n}findAllUTF8Submatch(e,t){const n=this.allMatches($.fromUTF8(e),t,t=>{let n=new Array(t.length/2|0).fill(null);for(let r=0;r<n.length;r++)t[2*r]>=0&&(n[r]=e.slice(t[2*r],t[2*r+1]));return n});return 0===n.length?null:n}findAllUTF8SubmatchIndex(e,t){const n=this.allMatches($.fromUTF8(e),t);return 0===n.length?null:n}findAllSubmatch(e,t){const n=this.allMatches($.fromUTF16(e),t,t=>{let n=new Array(t.length/2|0).fill(null);for(let r=0;r<n.length;r++)t[2*r]>=0&&(n[r]=e.substring(t[2*r],t[2*r+1]));return n});return 0===n.length?null:n}findAllSubmatchIndex(e,t){const n=this.allMatches($.fromUTF16(e),t);return 0===n.length?null:n}},rt=(y.UNANCHORED,y.ANCHOR_START,y.ANCHOR_BOTH,class e{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(t){let n="";if(t instanceof RegExp&&(t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t=t.source),"string"!==typeof t)return t;let r="",s=!1,i=t.length;0===i&&(r="(?:)",s=!0);let o=!1,a=0;while(a<i){let n=t[a];if("\\"===n){if(a+1<i)switch(n=t[a+1],n){case"\\":r+="\\\\",a+=2;continue;case"c":if(a+2<i){let e=t[a+2].charCodeAt(0);if(e>=65&&e<=90||e>=97&&e<=122){let t=e%32;r+="\\x",r+=(t>>4).toString(16).toUpperCase(),r+=(15&t).toString(16).toUpperCase(),a+=3,s=!0;continue}}r+="c",a+=2,s=!0;continue;case"u":if(a+2<i)if("{"===t[a+2]){let n=a+3,o=!1,B=!1;while(n<i){const r=t[n];if("}"===r){B=!0;break}if(!e.isHexadecimal(r))break;o=!0,n++}if(B&&o){r+="\\x",a+=2,s=!0;continue}}else if(a+5<i){let n=!0;for(let r=0;r<4;r++)if(!e.isHexadecimal(t[a+2+r])){n=!1;break}if(n){r+="\\x{"+t.substring(a+2,a+6)+"}",a+=6,s=!0;continue}}r+="u",a+=2,s=!0;continue;case"x":{let n=!1;if(a+2<i&&"{"===t[a+2]){let r=a+3,s=!1,o=!1;while(r<i){const n=t[r];if("}"===n){o=!0;break}if(!e.isHexadecimal(n))break;s=!0,r++}o&&s&&(n=!0)}else a+3<i&&e.isHexadecimal(t[a+2])&&e.isHexadecimal(t[a+3])&&(n=!0);n?(r+="\\x",a+=2):(r+="x",a+=2,s=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":r+="\\"+n,a+=2;continue;default:{let e=t.codePointAt(a+1);if(e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122){let n=H.charCount(e);r+=t.substring(a+1,a+1+n),a+=n+1,s=!0}else{r+="\\";let n=H.charCount(e);r+=t.substring(a+1,a+1+n),a+=n+1}continue}}}else{if("/"===n){r+="\\/",a+=1,s=!0;continue}if("["===n)o=!0;else if("]"===n)o=!1;else if(!o&&"("===n&&a+2<i&&"?"===t[a+1]&&"<"===t[a+2]&&a+3<i&&!"=!>)".includes(t[a+3])){r+="(?P<",a+=3,s=!0;continue}}let B=t.codePointAt(a),c=H.charCount(B);r+=t.substring(a,a+c),a+=c}const B=s?r:t;return n.length>0?`(?${n})${B}`:B}}),st=class e{static CASE_INSENSITIVE=w.CASE_INSENSITIVE;static DOTALL=w.DOTALL;static MULTILINE=w.MULTILINE;static DISABLE_UNICODE_GROUPS=w.DISABLE_UNICODE_GROUPS;static LONGEST_MATCH=w.LONGEST_MATCH;static LOOKBEHINDS=w.LOOKBEHINDS;static quote(e){return H.quoteMeta(e)}static quoteReplacement(e,t=!1){return ne.quoteReplacement(e,t)}static translateRegExp(e){return rt.translate(e)}static compile(t,n=0){let r=t;if(0!==(n&e.CASE_INSENSITIVE)&&(r=`(?i)${r}`),0!==(n&e.DOTALL)&&(r=`(?s)${r}`),0!==(n&e.MULTILINE)&&(r=`(?m)${r}`),0!==(n&~(e.MULTILINE|e.DOTALL|e.CASE_INSENSITIVE|e.DISABLE_UNICODE_GROUPS|e.LONGEST_MATCH|e.LOOKBEHINDS)))throw new ee("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let s=y.PERL;0!==(n&e.DISABLE_UNICODE_GROUPS)&&(s&=~y.UNICODE_GROUPS),0!==(n&e.LOOKBEHINDS)&&(s|=y.LOOKBEHIND);const i=new e(t,n);return i.re2Input=nt.compileImpl(r,s,0!==(n&e.LONGEST_MATCH)),i}static matches(t,n){return e.compile(t).testExact(n)}static initTest(t,n,r){if(null==t)throw new Error("pattern is null");if(null==r)throw new Error("re2 is null");const s=new e(t,n);return s.re2Input=r,s}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return H.isByteArray(e)&&(e=K.utf8(e)),new ne(this,e)}test(e){return H.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=H.isByteArray(e)?$.fromUTF8(e):$.fromUTF16(e);return null!==this.re2Input.executeEngine(t,0,y.ANCHOR_BOTH,0)}exec(e){const t=this.matcher(e);if(!t.find())return null;const n=[t.group(0)];for(let s=1;s<=t.groupCount();s++){const e=t.group(s);n.push(null===e?void 0:e)}n.index=t.start(0),n.input=e;const r=this.namedGroups();if(Object.keys(r).length>0){const e=t.getNamedGroups();for(const t in e)null===e[t]&&(e[t]=void 0);n.groups=e}else n.groups=void 0;return n}split(e,t=0){const n=this.matcher(e),r=[];let s=0,i=0;while(n.find())if(0!==i||0!==n.end()){if(t>0&&r.length===t-1)break;if(i===n.start()){if(0===t){s+=1,i=n.end();continue}}else while(s>0)r.push(""),s-=1;r.push(n.substring(i,n.start())),i=n.end()}else i=n.end();if(0===t&&i!==n.inputLength()){while(s>0)r.push(""),s-=1;r.push(n.substring(i,n.inputLength()))}return 0===t&&(0!==r.length||i===n.inputLength()&&i>0)||r.push(n.substring(i,n.inputLength())),r}*matchAll(e){const t=this.matcher(e);while(t.find()){const n=[t.group(0)];for(let e=1;e<=t.groupCount();e++){const r=t.group(e);n.push(null===r?void 0:r)}n.index=t.start(0),n.input=e;const r=this.namedGroups();if(Object.keys(r).length>0){const e=t.getNamedGroups();for(const t in e)null===e[t]&&(e[t]=void 0);n.groups=e}else n.groups=void 0;yield n}}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e||null!==e&&this.constructor===e.constructor&&(this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput)}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let it="12.19.0";function ot(e){it=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new m.Vy("@firebase/firestore");function Bt(){return at.logLevel}function ct(e,...t){if(at.logLevel<=m.$b.DEBUG){const n=t.map(ht);at.debug(`Firestore (${it}): ${e}`,...n)}}function ut(e,...t){if(at.logLevel<=m.$b.ERROR){const n=t.map(ht);at.error(`Firestore (${it}): ${e}`,...n)}}function lt(e,...t){if(at.logLevel<=m.$b.WARN){const n=t.map(ht);at.warn(`Firestore (${it}): ${e}`,...n)}}function ht(e){if("string"==typeof e)return e;try{return function(e){return JSON.stringify(e)}(e)}catch(Ra){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,pt(e,r,n)}function pt(e,t,n){let r=`FIRESTORE (${it}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw ut(r),new Error(r)}function dt(e,t,n,r){let s="Unexpected state";"string"==typeof n?s=n:r=n,e||pt(t,s,r)}function ft(e,t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=gt(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%62))}return n}}function Et(e,t){return e<t?-1:e>t?1:0}function Dt(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.charAt(r),s=t.charAt(r);if(n!==s)return _t(n)===_t(s)?Et(n,s):_t(n)?1:-1}return Et(e.length,t.length)}const yt=55296,wt=57343;function _t(e){const t=e.charCodeAt(0);return t>=yt&&t<=wt}function vt(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{constructor(e,t){this.comparator=e,this.root=t||bt.EMPTY}insert(e,t){return new It(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new It(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tt(this.root,e,this.comparator,!0)}}class Tt{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:bt.RED,this.left=null!=r?r:bt.EMPTY,this.right=null!=s?s:bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new bt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return bt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ct(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ct(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ct(27949);return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1,bt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ct(57766)}get value(){throw Ct(16141)}get color(){throw Ct(16727)}get left(){throw Ct(29726)}get right(){throw Ct(36894)}copy(e,t,n,r,s){return this}insert(e,t,n){return new bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St{constructor(e){this.comparator=e,this.data=new It(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ot(this.data.getIterator())}getIteratorFrom(e){return new Ot(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof St))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new St(this.comparator);return t.data=e,t}}class Ot{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const At={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Nt extends a.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="__name__";class Lt{constructor(e,t,n){void 0===t?t=0:t>e.length&&Ct(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&Ct(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Lt.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Lt?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=Lt.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return Et(e.length,t.length)}static compareSegments(e,t){const n=Lt.isNumericId(e),r=Lt.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?Lt.extractNumericId(e).compare(Lt.extractNumericId(t)):Dt(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return r.fromString(e.substring(4,e.length-2))}}class Rt extends Lt{construct(e,t,n){return new Rt(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Nt(At.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new Rt(t)}static emptyPath(){return new Rt([])}}const kt=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Pt=class e extends Lt{construct(t,n,r){return new e(t,n,r)}static isValidIdentifier(e){return kt.test(e)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),e.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Ft}static keyField(){return new e([Ft])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(0===r.length)throw new Nt(At.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new Nt(At.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Nt(At.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=e,s+=2}else"`"===e?(o=!o,s++):"."!==e||o?(r+=e,s++):(i(),s++)}if(i(),o)throw new Nt(At.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new e(n)}static emptyPath(){return new e([])}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new xt([])}unionWith(e){let t=new St(Pt.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new xt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vt(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Gt(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ht(e,t){const n=[];for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.push(t(e[r],r,e));return n}function Ut(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.path=e}static fromPath(e){return new Vt(Rt.fromString(e))}static fromName(e){return new Vt(Rt.fromString(e).popFirst(5))}static empty(){return new Vt(Rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Rt.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Rt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Vt(new Rt(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(e,t,n){if(!n)throw new Nt(At.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function jt(e,t,n,r){if(!0===t&&!0===r)throw new Nt(At.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Kt(e){if(!Vt.isDocumentKey(e))throw new Nt(At.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function qt(e){if(Vt.isDocumentKey(e))throw new Nt(At.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function zt(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function Qt(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Ct(12329,{type:typeof e})}function $t(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Nt(At.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qt(e);throw new Nt(At.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(e,t){const n={typeString:e};return t&&(n.value=t),n}function Yt(e,t){if(!zt(e))throw new Nt(At.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const o=e[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(void 0!==i&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Nt(At.INVALID_ARGUMENT,n);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=-62135596800,Zt=1e6;class en{static now(){return en.fromMillis(Date.now())}static fromDate(e){return en.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Zt);return new en(t,n)}static fromInstant(e){if(!e||"bigint"!=typeof e.t)throw new Nt(At.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return en._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,n;if(e>=0n)t=Number(e/1000000000n),n=Number(e%1000000000n);else{const r=e%1000000000n;0n===r?(t=Number(e/1000000000n),n=0):(t=Number(e/1000000000n-1n),n=Number(r+1000000000n))}return new en(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Nt(At.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Nt(At.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Xt)throw new Nt(At.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Nt(At.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zt}toInstant(){if("undefined"==typeof Temporal||!Temporal.Instant)throw new Nt(At.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?Et(this.nanoseconds,e.nanoseconds):Et(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:en._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Yt(e,en._jsonSchema))return new en(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Xt;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}en._jsonSchemaVersion="firestore/timestamp/1.0",en._jsonSchema={type:Wt("string",en._jsonSchemaVersion),seconds:Wt("number"),nanoseconds:Wt("number")};
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tn extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new tn("Invalid base64 string: "+e):e}}(e);return new nn(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new nn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Et(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nn.EMPTY_BYTE_STRING=new nn("");const rn=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sn(e){if(dt(!!e,39018),"string"==typeof e){let t=0;const n=rn.exec(e);if(dt(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:on(e.seconds),nanos:on(e.nanos)}}function on(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function an(e){return"string"==typeof e?nn.fromBase64String(e):nn.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="server_timestamp",cn="__type__",un="__previous_value__",ln="__local_write_time__";function hn(e){const t=(e?.mapValue?.fields||{})[cn]?.stringValue;return t===Bn}function Cn(e){const t=e.mapValue.fields[un];return hn(t)?Cn(t):t}function pn(e){const t=sn(e.mapValue.fields[ln].timestampValue);return new en(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,n,r,s,i,o,a,B,c,u,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=B,this.isUsingEmulator=c,this.apiKey=u,this._customHeaders=l,this.grpcFlowControlWindow=h}}const fn="(default)";class gn{constructor(e,t){this.projectId=e,this.database=t||fn}static empty(){return new gn("","")}get isDefaultDatabase(){return this.database===fn}isEqual(e){return e instanceof gn&&e.projectId===this.projectId&&e.database===this.database}}function mn(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Nt(At.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gn(e.options.projectId,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=-1;function Dn(e){return null==e}function yn(e){return 0===e&&1/e==-1/0}function wn(e){return"number"==typeof e&&Number.isInteger(e)&&!yn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}function _n(e){return"string"==typeof e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="__type__",In="__max__",Tn={mapValue:{fields:{__type__:{stringValue:In}}}},bn="__vector__",Sn="value",On={nullValue:"NULL_VALUE"},An={booleanValue:!0},Nn={booleanValue:!1};function Fn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?hn(e)?4:Yn(e)?9007199254740991:Qn(e)?10:11:Ct(28295,{value:e})}function Ln(e,t,n){if(e===t)return!0;const r=Fn(e);if(r!==Fn(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return pn(e).isEqual(pn(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=sn(e.timestampValue),r=sn(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return an(e.bytesValue).isEqual(an(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return on(e.geoPointValue.latitude)===on(t.geoPointValue.latitude)&&on(e.geoPointValue.longitude)===on(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t,n){if("integerValue"in e&&"integerValue"in t)return on(e.integerValue)===on(t.integerValue);let r,s;if("doubleValue"in e&&"doubleValue"in t)r=on(e.doubleValue),s=on(t.doubleValue);else{if(!n?.i)return!1;r=on(e.integerValue??e.doubleValue),s=on(t.integerValue??t.doubleValue)}return r===s?!!n?.o||yn(r)===yn(s):!(void 0!==n&&!n.u)&&isNaN(r)&&isNaN(s)}(e,t,n);case 9:return vt(e.arrayValue.values||[],t.arrayValue.values||[],(e,t)=>Ln(e,t,n));case 10:case 11:return function(e,t,n){const r=e.mapValue.fields||{},s=t.mapValue.fields||{};if(Mt(r)!==Mt(s))return!1;for(const i in r)if(r.hasOwnProperty(i)&&(void 0===s[i]||!Ln(r[i],s[i],n)))return!1;return!0}(e,t,n);default:return Ct(52216,{left:e})}}function Rn(e,t){return void 0!==(e.values||[]).find(e=>Ln(e,t))}function kn(e,t){if(e===t)return 0;const n=Fn(e),r=Fn(t);if(n!==r)return Et(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Et(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=on(e.integerValue||e.doubleValue),r=on(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Pn(e.timestampValue,t.timestampValue);case 4:return Pn(pn(e),pn(t));case 5:return Dt(e.stringValue,t.stringValue);case 6:return function(e,t){const n=an(e),r=an(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=Et(n[s],r[s]);if(0!==e)return e}return Et(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Et(on(e.latitude),on(t.latitude));return 0!==n?n:Et(on(e.longitude),on(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return xn(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=t.fields||{},s=n[Sn]?.arrayValue,i=r[Sn]?.arrayValue,o=Et(s?.values?.length||0,i?.values?.length||0);return 0!==o?o:xn(s,i)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Tn.mapValue&&t===Tn.mapValue)return 0;if(e===Tn.mapValue)return 1;if(t===Tn.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const e=Dt(r[o],i[o]);if(0!==e)return e;const t=kn(n[r[o]],s[i[o]]);if(0!==t)return t}return Et(r.length,i.length)}(e.mapValue,t.mapValue);default:throw Ct(23264,{l:n})}}function Pn(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Et(e,t);const n=sn(e),r=sn(t),s=Et(n.seconds,r.seconds);return 0!==s?s:Et(n.nanos,r.nanos)}function xn(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=kn(n[s],r[s]);if(void 0!==e&&0!==e)return e}return Et(n.length,r.length)}function Mn(e){return Gn(e)}function Gn(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=sn(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return an(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return Vt.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Gn(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${Gn(e.fields[s])}`;return n+"}"}(e.mapValue):Ct(61005,{value:e})}function Hn(e){switch(Fn(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Cn(e);return t?16+Hn(t):16;case 5:return 2*e.stringValue.length;case 6:return an(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(e){return(e.values||[]).reduce((e,t)=>e+Hn(t),0)}(e.arrayValue);case 10:case 11:return function(e){let t=0;return Gt(e.fields,(e,n)=>{t+=e.length+Hn(n)}),t}(e.mapValue);default:throw Ct(13486,{value:e})}}function Un(e){return!!e&&"integerValue"in e}function Vn(e){return!!e&&"doubleValue"in e}function Jn(e){return Un(e)||Vn(e)}function jn(e){return!!e&&"arrayValue"in e}function Kn(e){return!!e&&"nullValue"in e}function qn(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function zn(e){return!!e&&"mapValue"in e}function Qn(e){const t=(e?.mapValue?.fields||{})[vn]?.stringValue;return t===bn}function $n(e){return(e?.mapValue?.fields||{})[Sn]?.arrayValue}function Wn(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return Gt(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Wn(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Wn(e.arrayValue.values[n]);return t}return{...e}}function Yn(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===In}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xn{constructor(e){this.value=e}static empty(){return new Xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!zn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wn(t)}setAll(e){let t=Pt.emptyPath(),n={},r=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=Wn(e):r.push(s.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());zn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ln(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];zn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Gt(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new Xn(Wn(this.value))}}function Zn(e){const t=[];return Gt(e.fields,(e,n)=>{const r=new Pt([e]);if(zn(n)){const e=Zn(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new xt(t)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function er(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yn(t)?"-0":t}}function tr(e){return{integerValue:""+e}}function nr(e,t,n){return wn(t)?tr(t):er(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this._=void 0}}function sr(e,t,n){return e instanceof ar?function(e,t){const n={fields:{[cn]:{stringValue:Bn},[ln]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&hn(t)&&(t=Cn(t)),t&&(n.fields[un]=t),{mapValue:n}}(n,t):e instanceof Br?cr(e,t):e instanceof ur?lr(e,t):e instanceof Cr?function(e,t){const n=or(e,t),r=gr(n)+gr(e.h);return Un(n)&&Un(e.h)?tr(r):er(e.serializer,r)}(e,t):e instanceof pr?function(e,t){return fr(e,t,Math.min)}(e,t):e instanceof dr?function(e,t){return fr(e,t,Math.max)}(e,t):void 0}function ir(e,t,n){return e instanceof Br?cr(e,t):e instanceof ur?lr(e,t):n}function or(e,t){return e instanceof Cr?Jn(t)?t:{integerValue:0}:null}class ar extends rr{}class Br extends rr{constructor(e){super(),this.elements=e}}function cr(e,t){const n=mr(t);for(const r of e.elements)n.some(e=>Ln(e,r))||n.push(r);return{arrayValue:{values:n}}}class ur extends rr{constructor(e){super(),this.elements=e}}function lr(e,t){let n=mr(t);for(const r of e.elements)n=n.filter(e=>!Ln(e,r));return{arrayValue:{values:n}}}class hr extends rr{constructor(e,t){super(),this.serializer=e,this.h=t}}class Cr extends hr{}class pr extends hr{}class dr extends hr{}function fr(e,t,n){if(!Jn(t))return e.h;const r=n(gr(t),gr(e.h));return Un(t)&&Un(e.h)?tr(r):er(e.serializer,r)}function gr(e){return on(e.integerValue||e.doubleValue)}function mr(e){return jn(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Br&&t instanceof Br||e instanceof ur&&t instanceof ur?vt(e.elements,t.elements,Ln):e instanceof Cr&&t instanceof Cr||e instanceof pr&&t instanceof pr||e instanceof dr&&t instanceof dr?Ln(e.h,t.h):e instanceof ar&&t instanceof ar}(e.transform,t.transform)}class Dr{constructor(e,t){this.version=e,this.transformResults=t}}class yr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new yr}static exists(e){return new yr(void 0,e)}static updateTime(e){return new yr(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wr(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class _r{}function vr(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Rr(e.key,yr.none()):new Or(e.key,e.data,yr.none());{const n=e.data,r=Xn.empty();let s=new St(Pt.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new Ar(e.key,r,new xt(s.toArray()),yr.none())}}function Ir(e,t,n){e instanceof Or?function(e,t,n){const r=e.value.clone(),s=Fr(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Ar?function(e,t,n){if(!wr(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Fr(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Nr(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Tr(e,t,n,r){return e instanceof Or?function(e,t,n,r){if(!wr(e.precondition,t))return n;const s=e.value.clone(),i=Lr(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof Ar?function(e,t,n,r){if(!wr(e.precondition,t))return n;const s=Lr(e.fieldTransforms,r,t),i=t.data;return i.setAll(Nr(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):function(e,t,n){return wr(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function br(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=or(r.transform,e||null);null!=s&&(null===n&&(n=Xn.empty()),n.set(r.field,s))}return n||null}function Sr(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&vt(e,t,(e,t)=>Er(e,t))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Or extends _r{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ar extends _r{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Nr(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Fr(e,t,n){const r=new Map;dt(e.length===n.length,32656,{T:n.length,P:e.length});for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,ir(o,a,n[s]))}return r}function Lr(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,sr(e,i,t))}return r}class Rr extends _r{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kr extends _r{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t){this.position=e,this.inclusive=t}}function xr(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?Vt.comparator(Vt.fromName(o.referenceValue),n.key):kn(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Mr(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ln(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{}class Hr extends Gr{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Qr(e,t,n):"array-contains"===t?new Xr(e,n):"in"===t?new Zr(e,n):"not-in"===t?new es(e,n):"array-contains-any"===t?new ts(e,n):new Hr(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new $r(e,n):new Wr(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(kn(t,this.value)):null!==t&&Fn(this.value)===Fn(t)&&this.matchesComparison(kn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ct(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ur extends Gr{constructor(e,t){super(),this.filters=e,this.op=t,this.I=null}static create(e,t){return new Ur(e,t)}matches(e){return Vr(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.I||(this.I=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.I}getFilters(){return Object.assign([],this.filters)}}function Vr(e){return"and"===e.op}function Jr(e){return jr(e)&&Vr(e)}function jr(e){for(const t of e.filters)if(t instanceof Ur)return!1;return!0}function Kr(e){if(e instanceof Hr)return e.field.canonicalString()+e.op.toString()+Mn(e.value);if(Jr(e))return e.filters.map(e=>Kr(e)).join(",");{const t=e.filters.map(e=>Kr(e)).join(",");return`${e.op}(${t})`}}function qr(e,t){return e instanceof Hr?function(e,t){return t instanceof Hr&&e.op===t.op&&e.field.isEqual(t.field)&&Ln(e.value,t.value)}(e,t):e instanceof Ur?function(e,t){return t instanceof Ur&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&qr(n,t.filters[r]),!0)}(e,t):void Ct(19439)}function zr(e){return e instanceof Hr?function(e){return`${e.field.canonicalString()} ${e.op} ${Mn(e.value)}`}(e):e instanceof Ur?function(e){return e.op.toString()+" {"+e.getFilters().map(zr).join(" ,")+"}"}(e):"Filter"}class Qr extends Hr{constructor(e,t,n){super(e,t,n),this.key=Vt.fromName(n.referenceValue)}matches(e){const t=Vt.comparator(e.key,this.key);return this.matchesComparison(t)}}class $r extends Hr{constructor(e,t){super(e,"in",t),this.keys=Yr("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Wr extends Hr{constructor(e,t){super(e,"not-in",t),this.keys=Yr("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Yr(e,t){return(t.arrayValue?.values||[]).map(e=>Vt.fromName(e.referenceValue))}class Xr extends Hr{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return jn(t)&&Rn(t.arrayValue,this.value)}}class Zr extends Hr{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Rn(this.value.arrayValue,t)}}class es extends Hr{constructor(e,t){super(e,"not-in",t)}matches(e){if(Rn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!Rn(this.value.arrayValue,t)}}class ts extends Hr{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!jn(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>Rn(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t="asc"){this.field=e,this.dir=t}}function rs(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{static fromTimestamp(e){return new ss(e)}static min(){return new ss(new en(0,0))}static max(){return new ss(new en(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t,n,r,s,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new is(e,0,ss.min(),ss.min(),ss.min(),Xn.empty(),0)}static newFoundDocument(e,t,n,r){return new is(e,1,t,ss.min(),n,r,0)}static newNoDocument(e,t){return new is(e,2,t,ss.min(),ss.min(),Xn.empty(),0)}static newUnknownDocument(e,t){return new is(e,3,t,ss.min(),ss.min(),Xn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ss.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ss.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof is&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new is(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=-1;class as{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}as.UNKNOWN_ID=-1;function Bs(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=ss.fromTimestamp(1e9===r?new en(n+1,0):new en(n,r));return new us(s,Vt.empty(),t)}function cs(e){return new us(e.readTime,e.key,os)}class us{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new us(ss.min(),Vt.empty(),os)}static max(){return new us(ss.max(),Vt.empty(),os)}}function ls(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Vt.comparator(e.documentKey,t.documentKey),0!==n?n:Et(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.R=null}}function Cs(e,t=null,n=[],r=[],s=null,i=null,o=null){return new hs(e,t,n,r,s,i,o)}function ps(e){const t=ft(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Kr(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>function(e){return e.field.canonicalString()+e.dir}(e)).join(","),Dn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>Mn(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>Mn(e)).join(",")),t.R=e}return t.R}function ds(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!rs(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!qr(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Mr(e.startAt,t.startAt)&&Mr(e.endAt,t.endAt)}function fs(e){return!!e.isCorePipeline}function gs(e){return!!e.path&&Vt.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ms{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.A=null,this.V=null,this.m=null,this.startAt,this.endAt}}function Es(e,t,n,r,s,i,o,a){return new ms(e,t,n,r,s,i,o,a)}function Ds(e){return new ms(e)}function ys(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ws(e){return Vt.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function _s(e){return null!==e.collectionGroup}function vs(e){const t=ft(e);if(null===t.A){t.A=[];const e=new Set;for(const s of t.explicitOrderBy)t.A.push(s),e.add(s.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new St(Pt.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t}(t);r.forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.A.push(new ns(r,n))}),e.has(Pt.keyField().canonicalString())||t.A.push(new ns(Pt.keyField(),n))}return t.A}function Is(e){const t=ft(e);return t.V||(t.V=Ts(t,vs(e))),t.V}function Ts(e,t){if("F"===e.limitType)return Cs(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new ns(e.field,t)});const n=e.endAt?new Pr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Pr(e.startAt.position,e.startAt.inclusive):null;return Cs(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function bs(e,t,n){return new ms(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ss(e,t){return ds(Is(e),Is(t))&&e.limitType===t.limitType}function Os(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>zr(e)).join(", ")}]`),Dn(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>Mn(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>Mn(e)).join(",")),`Target(${t})`}(Is(e))}; limitType=${e.limitType})`}function As(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Vt.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of vs(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=xr(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,vs(e),t))&&!(e.endAt&&!function(e,t,n){const r=xr(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,vs(e),t))}(e,t)}function Ns(e){return(t,n)=>{let r=!1;for(const s of vs(e)){const e=Fs(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function Fs(e,t,n){const r=e.field.isKeyField()?Vt.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?kn(r,s):Ct(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Ct(19790,{direction:e.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rs,ks;function Ps(e){switch(e){case At.OK:return Ct(64938);case At.CANCELLED:case At.UNKNOWN:case At.DEADLINE_EXCEEDED:case At.RESOURCE_EXHAUSTED:case At.INTERNAL:case At.UNAVAILABLE:case At.UNAUTHENTICATED:return!1;case At.INVALID_ARGUMENT:case At.NOT_FOUND:case At.ALREADY_EXISTS:case At.PERMISSION_DENIED:case At.FAILED_PRECONDITION:case At.ABORTED:case At.OUT_OF_RANGE:case At.UNIMPLEMENTED:case At.DATA_LOSS:return!0;default:return Ct(15467,{code:e})}}function xs(e){if(void 0===e)return ut("GRPC error has no .code"),At.UNKNOWN;switch(e){case Rs.OK:return At.OK;case Rs.CANCELLED:return At.CANCELLED;case Rs.UNKNOWN:return At.UNKNOWN;case Rs.DEADLINE_EXCEEDED:return At.DEADLINE_EXCEEDED;case Rs.RESOURCE_EXHAUSTED:return At.RESOURCE_EXHAUSTED;case Rs.INTERNAL:return At.INTERNAL;case Rs.UNAVAILABLE:return At.UNAVAILABLE;case Rs.UNAUTHENTICATED:return At.UNAUTHENTICATED;case Rs.INVALID_ARGUMENT:return At.INVALID_ARGUMENT;case Rs.NOT_FOUND:return At.NOT_FOUND;case Rs.ALREADY_EXISTS:return At.ALREADY_EXISTS;case Rs.PERMISSION_DENIED:return At.PERMISSION_DENIED;case Rs.FAILED_PRECONDITION:return At.FAILED_PRECONDITION;case Rs.ABORTED:return At.ABORTED;case Rs.OUT_OF_RANGE:return At.OUT_OF_RANGE;case Rs.UNIMPLEMENTED:return At.UNIMPLEMENTED;case Rs.DATA_LOSS:return At.DATA_LOSS;default:return Ct(39323,{code:e})}}(ks=Rs||(Rs={}))[ks.OK=0]="OK",ks[ks.CANCELLED=1]="CANCELLED",ks[ks.UNKNOWN=2]="UNKNOWN",ks[ks.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ks[ks.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ks[ks.NOT_FOUND=5]="NOT_FOUND",ks[ks.ALREADY_EXISTS=6]="ALREADY_EXISTS",ks[ks.PERMISSION_DENIED=7]="PERMISSION_DENIED",ks[ks.UNAUTHENTICATED=16]="UNAUTHENTICATED",ks[ks.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ks[ks.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ks[ks.ABORTED=10]="ABORTED",ks[ks.OUT_OF_RANGE=11]="OUT_OF_RANGE",ks[ks.UNIMPLEMENTED=12]="UNIMPLEMENTED",ks[ks.INTERNAL=13]="INTERNAL",ks[ks.UNAVAILABLE=14]="UNAVAILABLE",ks[ks.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ms{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Gt(this.inner,(t,n)=>{for(const[r,s]of n)e(r,s)})}isEmpty(){return Ut(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=new It(Vt.comparator);function Hs(){return Gs}const Us=new It(Vt.comparator);function Vs(...e){let t=Us;for(const n of e)t=t.insert(n.key,n);return t}function Js(e){let t=Us;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function js(){return qs()}function Ks(){return qs()}function qs(){return new Ms(e=>e.toString(),(e,t)=>e.isEqual(t))}const zs=new It(Vt.comparator),Qs=new St(Vt.comparator);function $s(...e){let t=Qs;for(const n of e)t=t.add(n);return t}const Ws=new St(Et);function Ys(){return Ws}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zs(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new r([4294967295,4294967295],0);function ti(e){const t=Zs().encode(e),n=new s;return n.update(t),new Uint8Array(n.digest())}function ni(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new r([n,s],0),new r([i,o],0)]}class ri{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new si(`Invalid padding: ${t}`);if(n<0)throw new si(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new si(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new si(`Invalid padding when bitmap length is 0: ${t}`);this.p=8*e.length-t,this.S=r.fromNumber(this.p)}v(e,t,n){let s=e.add(t.multiply(r.fromNumber(n)));return 1===s.compare(ei)&&(s=new r([s.getBits(0),s.getBits(1)],0)),s.modulo(this.S).toNumber()}D(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.p)return!1;const t=ti(e),[n,r]=ni(t);for(let s=0;s<this.hashCount;s++){const e=this.v(n,r,s);if(!this.D(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),i=new ri(s,r,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.p)return;const t=ti(e),[n,r]=ni(t);for(let s=0;s<this.hashCount;s++){const e=this.v(n,r,s);this.C(e)}}C(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,n,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.augmentedDocumentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,oi.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ii(ss.min(),r,new It(Et),Hs(),Hs(),$s())}}class oi{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new oi(n,t,$s(),$s(),$s())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,n,r){this.F=e,this.removedTargetIds=t,this.key=n,this.O=r}}class Bi{constructor(e,t){this.targetId=e,this.M=t}}class ci{constructor(e,t,n=nn.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ui{constructor(e){this.targetId=e,this.N=0,this.L=pi(),this.B=nn.EMPTY_BYTE_STRING,this.U=!1,this.k=!0}get current(){return this.U}get resumeToken(){return this.B}get q(){return 0!==this.N}get $(){return this.k}K(e){e.approximateByteSize()>0&&(this.k=!0,this.B=e)}W(){let e=$s(),t=$s(),n=$s();return this.L.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Ct(38017,{changeType:s})}}),new oi(this.B,this.U,e,t,n)}G(){this.k=!1,this.L=pi()}j(e,t){this.k=!0,this.L=this.L.insert(e,t)}H(e){this.k=!0,this.L=this.L.remove(e)}J(){this.N+=1}Y(){this.N-=1,dt(this.N>=0,3241,{N:this.N,targetId:this.targetId})}Z(){this.k=!0,this.U=!0}}const li="WatchChangeAggregator";class hi{constructor(e){this.X=e,this.ee=new Map,this.te=Hs(),this.ne=Ci(),this.re=Hs(),this.ie=Ci(),this.se=new It(Et)}_e(e){for(const t of e.F)e.O&&e.O.isFoundDocument()?this.oe(t,e.O):this.ae(t,e.key,e.O);for(const t of e.removedTargetIds)this.ae(t,e.key,e.O)}ue(e){this.forEachTarget(e,t=>{const n=this.ee.get(t);if(n)switch(e.state){case 0:this.ce(t)&&n.K(e.resumeToken);break;case 1:n.Y(),n.q||n.G(),n.K(e.resumeToken);break;case 2:n.Y(),n.q||this.removeTarget(t);break;case 3:this.ce(t)&&(n.Z(),n.K(e.resumeToken));break;case 4:this.ce(t)&&(this.le(t),n.K(e.resumeToken));break;default:Ct(56790,{state:e.state})}else ct(li,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ee.forEach((e,n)=>{this.ce(n)&&t(n)})}Ee(e){return fs(e)?"documents"===e.getPipelineSourceType()&&1===e.getPipelineDocuments()?.length:gs(e)}he(e){const t=e.targetId,n=e.M.count,r=this.Te(t);if(r){const s=r.target;if(this.Ee(s))if(0===n){const e=new Vt(fs(s)?Rt.fromString(s.getPipelineDocuments()[0]):s.path);this.ae(t,e,is.newNoDocument(e,ss.min()))}else dt(1===n,20013,"Single document existence filter with count: "+n);else{const r=this.Pe(t);if(r!==n){const n=this.Ie(e),s=n?this.Re(n,e,r):1;if(0!==s){this.le(t);const e=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.se=this.se.insert(t,e)}Xs?.Ae(function(e,t,n,r,s){const i={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},o=t.unchangedNames;return o&&(i.bloomFilter={applied:0===s,hashCount:o?.hashCount??0,bitmapLength:o?.bits?.bitmap?.length??0,padding:o?.bits?.padding??0,mightContain:e=>r?.mightContain(e)??!1}),i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,e.M,this.X.Ve(),n,s))}}}}Ie(e){const t=e.M.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=t;let i,o;try{i=an(n).toUint8Array()}catch(e){if(e instanceof tn)return lt("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new ri(i,r,s)}catch(e){return lt(e instanceof si?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.p?null:o}Re(e,t,n){return t.M.count===n-this.de(e,t.targetId)?0:2}de(e,t){const n=this.X.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const s=this.X.Ve(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;e.mightContain(i)||(this.ae(t,n,null),r++)}),r}fe(e){const t=new Map;this.ee.forEach((n,r)=>{const s=this.Te(r);if(s){if(n.current&&this.Ee(s.target)){const t=fs(s.target)?Rt.fromString(s.target.getPipelineDocuments()[0]):s.target.path,n=new Vt(t);this.me(n).has(r)||this.pe(r,n)||this.ae(r,n,is.newNoDocument(n,e))}n.$&&(t.set(r,n.W()),n.G())}});let n=$s();this.ie.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.Te(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.te.forEach((t,n)=>n.setReadTime(e)),this.re.forEach((t,n)=>n.setReadTime(e));const r=new ii(e,t,this.se,this.te,this.re,n);return this.te=Hs(),this.ne=Ci(),this.re=Hs(),this.ie=Ci(),this.se=new It(Et),r}oe(e,t){const n=this.ee.get(e);if(!n||!this.ce(e))return void ct(li,`addDocumentToTarget received document for unknown inactive target (${e})`);const r=this.pe(e,t.key)?2:0;n.j(t.key,r),fs(this.Te(e).target)&&"exact"!==this.Te(e).target.getPipelineFlavor()?this.re=this.re.insert(t.key,t):this.te=this.te.insert(t.key,t),this.ne=this.ne.insert(t.key,this.me(t.key).add(e)),this.ie=this.ie.insert(t.key,this.ge(t.key).add(e))}ae(e,t,n){const r=this.ee.get(e);r&&this.ce(e)?(this.pe(e,t)?r.j(t,1):r.H(t),this.ie=this.ie.insert(t,this.ge(t).delete(e)),this.ie=this.ie.insert(t,this.ge(t).add(e)),n&&(fs(this.Te(e).target)&&"exact"!==this.Te(e).target.getPipelineFlavor()?this.re=this.re.insert(t,n):this.te=this.te.insert(t,n))):ct(li,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ee.delete(e)}Pe(e){const t=this.ee.get(e);if(!t)return 0;const n=t.W();return this.X.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}J(e){let t=this.ee.get(e);t||(ct(li,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new ui(e),this.ee.set(e,t)),t.J()}ge(e){let t=this.ie.get(e);return t||(t=new St(Et),this.ie=this.ie.insert(e,t)),t}me(e){let t=this.ne.get(e);return t||(t=new St(Et),this.ne=this.ne.insert(e,t)),t}ce(e){const t=null!==this.Te(e);return t||ct(li,"Detected inactive target",e),t}Te(e){const t=this.ee.get(e);return void 0===t||t.q?null:this.X.ye(e)}le(e){this.ee.set(e,new ui(e)),this.X.getRemoteKeysForTarget(e).forEach(t=>{this.ae(e,t,null)})}pe(e,t){return this.X.getRemoteKeysForTarget(e).has(t)}}function Ci(){return new It(Vt.comparator)}function pi(){return new It(Vt.comparator)}const di=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),fi=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),gi=(()=>{const e={and:"AND",or:"OR"};return e})();class mi{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ei(e,t){return e.useProto3Json||Dn(t)?t:{value:t}}function Di(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function yi(e){const t=sn(e);return new en(t.seconds,t.nanos)}function wi(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function _i(e,t){return Di(e,t.toTimestamp())}function vi(e){return dt(!!e,49232),ss.fromTimestamp(yi(e))}function Ii(e,t){return Ti(e,t).canonicalString()}function Ti(e,t){const n=function(e){return new Rt(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function bi(e){const t=Rt.fromString(e);return dt(Yi(t),10190,{key:t.toString()}),t}function Si(e,t){return Ii(e.databaseId,t.path)}function Oi(e,t){const n=bi(t);if(n.get(1)!==e.databaseId.projectId)throw new Nt(At.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Nt(At.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Vt(Li(n))}function Ai(e,t){return Ii(e.databaseId,t)}function Ni(e){const t=bi(e);return 4===t.length?Rt.emptyPath():Li(t)}function Fi(e){return new Rt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Li(e){return dt(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function Ri(e,t,n){return{name:Si(e,t),fields:n.value.mapValue.fields}}function ki(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Ct(39313,{state:e})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(e,t){return e.useProto3Json?(dt(void 0===t||"string"==typeof t,58123),nn.fromBase64String(t||"")):(dt(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),nn.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?At.UNKNOWN:xs(e.code);return new Nt(t,e.message||"")}(o);n=new ci(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Oi(e,r.document.name),i=vi(r.document.updateTime),o=r.document.createTime?vi(r.document.createTime):ss.min(),a=new Xn({mapValue:{fields:r.document.fields}}),B=is.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new ai(c,u,B.key,B)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Oi(e,r.document),i=r.readTime?vi(r.readTime):ss.min(),o=is.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ai([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Oi(e,r.document),i=r.removedTargetIds||[];n=new ai([],i,s,null)}else{if(!("filter"in t))return Ct(11601,{we:t});{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:s}=e,i=new Ls(r,s),o=e.targetId;n=new Bi(o,i)}}return n}function Pi(e,t){let n;if(t instanceof Or)n={update:Ri(e,t.key,t.value)};else if(t instanceof Rr)n={delete:Si(e,t.key)};else if(t instanceof Ar)n={update:Ri(e,t.key,t.data),updateMask:Wi(t.fieldMask)};else{if(!(t instanceof kr))return Ct(16599,{be:t.type});n={verify:Si(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof ar)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Br)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ur)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Cr)return{fieldPath:t.field.canonicalString(),increment:n.h};if(n instanceof pr)return{fieldPath:t.field.canonicalString(),minimum:n.h};if(n instanceof dr)return{fieldPath:t.field.canonicalString(),maximum:n.h};throw Ct(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:_i(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Ct(27497)}(e,t.precondition)),n}function xi(e,t){return e&&e.length>0?(dt(void 0!==t,14353),e.map(e=>function(e,t){let n=e.updateTime?vi(e.updateTime):vi(t);return n.isEqual(ss.min())&&(n=vi(t)),new Dr(n,e.transformResults||[])}(e,t))):[]}function Mi(e,t){return{documents:[Ai(e,t.path)]}}function Gi(e,t){const n={structuredQuery:{}},r=t.path;let s;null!==t.collectionGroup?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ai(e,s);const i=function(e){if(0!==e.length)return $i(Ur.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:zi(e.field),direction:ji(e.dir)}}(e))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ei(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{Se:n,parent:s}}function Hi(e){let t=Ni(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){dt(1===r,65062);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=Ji(e);return t instanceof Ur&&Jr(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map(e=>function(e){return new ns(Qi(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Dn(t)?null:t}(n.limit));let B=null;n.startAt&&(B=function(e){const t=!!e.before,n=e.values||[];return new Pr(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new Pr(n,t)}(n.endAt)),Es(t,s,o,i,a,"F",B,c)}function Ui(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ct(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function Vi(e,t){return{structuredPipeline:{pipeline:{stages:t.stages.map(t=>t._toProto(e))}}}}function Ji(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Qi(e.unaryFilter.field);return Hr.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Qi(e.unaryFilter.field);return Hr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Qi(e.unaryFilter.field);return Hr.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Qi(e.unaryFilter.field);return Hr.create(s,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ct(61313);default:return Ct(60726)}}(e):void 0!==e.fieldFilter?function(e){return Hr.create(Qi(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ct(58110);default:return Ct(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Ur.create(e.compositeFilter.filters.map(e=>Ji(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Ct(1026)}}(e.compositeFilter.op))}(e):Ct(30097,{filter:e})}function ji(e){return di[e]}function Ki(e){return fi[e]}function qi(e){return gi[e]}function zi(e){return{fieldPath:e.canonicalString()}}function Qi(e){return Pt.fromServerFormat(e.fieldPath)}function $i(e){return e instanceof Hr?function(e){if("=="===e.op){if(qn(e.value))return{unaryFilter:{field:zi(e.field),op:"IS_NAN"}};if(Kn(e.value))return{unaryFilter:{field:zi(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(qn(e.value))return{unaryFilter:{field:zi(e.field),op:"IS_NOT_NAN"}};if(Kn(e.value))return{unaryFilter:{field:zi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zi(e.field),op:Ki(e.op),value:e.value}}}(e):e instanceof Ur?function(e){const t=e.getFilters().map(e=>$i(e));return 1===t.length?t[0]:{compositeFilter:{op:qi(e.op),filters:t}}}(e):Ct(54877,{filter:e})}function Wi(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Yi(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}function Xi(e){return!!e&&"function"==typeof e._toProto&&"ProtoValue"===e._protoValueType}function Zi(e,t){const n={fields:{}};return t.forEach((t,r)=>{if("string"!=typeof r)throw new Error(`Cannot encode map with non-string key: ${r}`);n.fields[r]=t._toProto(e)}),{mapValue:n}}function eo(e){return{stringValue:e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function to(e){return new mi(e,!0)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this._byteString=e}static fromBase64String(e){try{return new no(nn.fromBase64String(e))}catch(e){throw new Nt(At.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new no(nn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:no._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Yt(e,no._jsonSchema))return no.fromBase64String(e.bytes)}}no._jsonSchemaVersion="firestore/bytes/1.0",no._jsonSchema={type:Wt("string",no._jsonSchemaVersion),bytes:Wt("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ro{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Nt(At.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function so(){return new ro(Ft)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Nt(At.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Nt(At.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Et(this._lat,e._lat)||Et(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:oo._jsonSchemaVersion}}static fromJSON(e){if(Yt(e,oo._jsonSchema))return new oo(e.latitude,e.longitude)}}oo._jsonSchemaVersion="firestore/geoPoint/1.0",oo._jsonSchema={type:Wt("string",oo._jsonSchemaVersion),latitude:Wt("number"),longitude:Wt("number")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ao{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ao.UNAUTHENTICATED=new ao(null),ao.GOOGLE_CREDENTIALS=new ao("google-credentials-uid"),ao.FIRST_PARTY=new ao("first-party-uid"),ao.MOCK_USER=new ao("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bo{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ao.UNAUTHENTICATED))}shutdown(){}}class lo{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ho{constructor(e){this.De=e,this.currentUser=ao.UNAUTHENTICATED,this.xe=0,this.forceRefresh=!1,this.auth=null}start(e,t){dt(void 0===this.Ce,42304);let n=this.xe;const r=e=>this.xe!==n?(n=this.xe,t(e)):Promise.resolve();let s=new Bo;this.Ce=()=>{this.xe++,this.currentUser=this.Fe(),s.resolve(),s=new Bo,e.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const t=s;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{ct("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.Ce&&(this.auth.addAuthTokenListener(this.Ce),i())};this.De.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.De.getImmediate({optional:!0});e?o(e):(ct("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Bo)}},0),i()}getToken(){const e=this.xe,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.xe!==e?(ct("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(dt("string"==typeof t.accessToken,31837,{Oe:t}),new co(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Ce&&this.auth.removeAuthTokenListener(this.Ce),this.Ce=void 0}Fe(){const e=this.auth&&this.auth.getUid();return dt(null===e||"string"==typeof e,2055,{Me:e}),new ao(e)}}class Co{constructor(e,t,n){this.Ne=e,this.Le=t,this.Be=n,this.type="FirstParty",this.user=ao.FIRST_PARTY,this.Ue=new Map}ke(){return this.Be?this.Be():null}get headers(){this.Ue.set("X-Goog-AuthUser",this.Ne);const e=this.ke();return e&&this.Ue.set("Authorization",e),this.Le&&this.Ue.set("X-Goog-Iam-Authorization-Token",this.Le),this.Ue}}class po{constructor(e,t,n){this.Ne=e,this.Le=t,this.Be=n}getToken(){return Promise.resolve(new Co(this.Ne,this.Le,this.Be))}start(e,t){e.enqueueRetryable(()=>t(ao.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class go{constructor(e,t){this.qe=t,this.forceRefresh=!1,this.appCheck=null,this.$e=null,this.Ke=null,(0,i.xZ)(e)&&e.settings.appCheckToken&&(this.Ke=e.settings.appCheckToken)}start(e,t){dt(void 0===this.Ce,3512);const n=e=>{null!=e.error&&ct("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.$e;return this.$e=e.token,ct("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.Ce=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{ct("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.Ce&&this.appCheck.addTokenListener(this.Ce)};this.qe.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.qe.getImmediate({optional:!0});e?r(e):ct("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.Ke)return Promise.resolve(new fo(this.Ke));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(dt("string"==typeof e.token,44558,{tokenResult:e}),this.$e=e.token,new fo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Ce&&this.appCheck.removeTokenListener(this.Ce),this.Ce=void 0}}function mo(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Eo{Qe(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="ConnectivityMonitor";class yo{constructor(){this.We=()=>this.Ge(),this.ze=()=>this.je(),this.He=[],this.Je()}Qe(e){this.He.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.ze)}Je(){window.addEventListener("online",this.We),window.addEventListener("offline",this.ze)}Ge(){ct(Do,"Network connectivity changed: AVAILABLE");for(const e of this.He)e(0)}je(){ct(Do,"Network connectivity changed: UNAVAILABLE");for(const e of this.He)e(1)}static Ye(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo=null;function _o(){return null===wo?wo=function(){return 268435456+Math.round(2147483648*Math.random())}():wo++,"0x"+wo.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const vo="RestConnection",Io={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class To{get Ze(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Xe=t+"://"+e.host,this.et=`projects/${n}/databases/${r}`,this.tt=this.databaseId.database===fn?`project_id=${n}`:`project_id=${n}&database_id=${r}`}nt(e,t,n,r,s){const i=_o(),o=this.rt(e,t.toUriEncodedString());ct(vo,`Sending RPC '${e}' ${i}:`,o,n);const B={"google-cloud-resource-prefix":this.et,"x-goog-request-params":this.tt};this.it(B,r,s);const{host:c}=new URL(o),u=(0,a.zJ)(c);return this.st(e,o,B,n,u).then(t=>(ct(vo,`Received RPC '${e}' ${i}: `,t),t),t=>{throw lt(vo,`RPC '${e}' ${i} failed with error: `,t,"url: ",o,"request:",n),t})}_t(e,t,n,r,s,i){return this.nt(e,t,n,r,s)}it(e,t,n){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+it}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t),this.databaseInfo._customHeaders)for(const r of Object.keys(this.databaseInfo._customHeaders))e[r]=this.databaseInfo._customHeaders[r]}rt(e,t){const n=Io[e];let r=`${this.Xe}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this.ot=e.ot,this.ut=e.ut}ct(e){this.lt=e}Et(e){this.ht=e}Tt(e){this.Pt=e}onMessage(e){this.It=e}close(){this.ut()}send(e){this.ot(e)}Rt(){this.lt()}At(){this.ht()}Vt(e){this.Pt(e)}dt(e){this.It(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So="WebChannelConnection",Oo=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};class Ao extends To{constructor(e){super(e),this.ft=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static gt(){if(!Ao.yt){const e=f();Oo(e,d.STAT_EVENT,e=>{e.stat===p.PROXY?ct(So,"STAT_EVENT: detected buffering proxy"):e.stat===p.NOPROXY&&ct(So,"STAT_EVENT: detected no buffering proxy")}),Ao.yt=!0}}st(e,t,n,r,s){const i=_o();return new Promise((s,o)=>{const a=new u;a.setWithCredentials(!0),a.listenOnce(h.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case C.NO_ERROR:const t=a.getResponseJson();ct(So,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case C.TIMEOUT:ct(So,`RPC '${e}' ${i} timed out`),o(new Nt(At.DEADLINE_EXCEEDED,"Request time out"));break;case C.HTTP_ERROR:const n=a.getStatus();if(ct(So,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=e?.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(At).indexOf(t)>=0?t:At.UNKNOWN}(t.status);o(new Nt(e,t.message))}else o(new Nt(At.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Nt(At.UNAVAILABLE,"Connection failed."));break;default:Ct(9055,{wt:e,streamId:i,bt:a.getLastErrorCode(),St:a.getLastError()})}}finally{ct(So,`RPC '${e}' ${i} completed.`)}});const B=JSON.stringify(r);ct(So,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",B,n,15)})}vt(e,t,n){const r=_o(),s=[this.Xe,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},a=this.longPollingOptions.timeoutSeconds;void 0!==a&&(o.longPollingTimeout=Math.round(1e3*a)),this.useFetchStreams&&(o.useFetchStreams=!0),this.it(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const B=s.join("");ct(So,`Creating RPC '${e}' stream ${r}: ${B}`,o);const c=i.createWebChannel(B,o);this.Dt(c);let u=!1,h=!1;const C=new bo({ot:t=>{h?ct(So,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(u||(ct(So,`Opening RPC '${e}' stream ${r} transport.`),c.open(),u=!0),ct(So,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},ut:()=>c.close()});return Oo(c,l.EventType.OPEN,()=>{h||(ct(So,`RPC '${e}' stream ${r} transport opened.`),C.Rt())}),Oo(c,l.EventType.CLOSE,()=>{h||(h=!0,ct(So,`RPC '${e}' stream ${r} transport closed`),C.Vt(),this.xt(c))}),Oo(c,l.EventType.ERROR,t=>{h||(h=!0,lt(So,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),C.Vt(new Nt(At.UNAVAILABLE,"The operation could not be completed")))}),Oo(c,l.EventType.MESSAGE,t=>{if(!h){const n=t.data[0];dt(!!n,16349);const s=n,i=s?.error||s[0]?.error;if(i){ct(So,`RPC '${e}' stream ${r} received error:`,i);const t=i.status;let n=function(e){const t=Rs[e];if(void 0!==t)return xs(t)}(t),s=i.message;"NOT_FOUND"===t&&s.includes("database")&&s.includes("does not exist")&&s.includes(this.databaseId.database)&&lt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=At.INTERNAL,s="Unknown error status: "+t+" with message "+i.message),h=!0,C.Vt(new Nt(n,s)),c.close()}else ct(So,`RPC '${e}' stream ${r} received:`,n),C.dt(n)}}),Ao.gt(),setTimeout(()=>{C.At()},0),C}terminate(){this.ft.forEach(e=>e.close()),this.ft=[]}Dt(e){this.ft.push(e)}xt(e){this.ft=this.ft.filter(t=>t===e)}it(e,t,n){super.it(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return g()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(e){return new Ao(e)}Ao.yt=!1;class Fo{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Ct=e,this.timerId=t,this.Ft=n,this.Ot=r,this.Mt=s,this.Nt=0,this.Lt=null,this.Bt=Date.now(),this.reset()}reset(){this.Nt=0}Ut(){this.Nt=this.Mt}kt(e){this.cancel();const t=Math.floor(this.Nt+this.qt()),n=Math.max(0,Date.now()-this.Bt),r=Math.max(0,t-n);r>0&&ct("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Nt} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lt=this.Ct.enqueueAfterDelay(this.timerId,r,()=>(this.Bt=Date.now(),e())),this.Nt*=this.Ot,this.Nt<this.Ft&&(this.Nt=this.Ft),this.Nt>this.Mt&&(this.Nt=this.Mt)}$t(){null!==this.Lt&&(this.Lt.skipDelay(),this.Lt=null)}cancel(){null!==this.Lt&&(this.Lt.cancel(),this.Lt=null)}qt(){return(Math.random()-.5)*this.Nt}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="PersistentStream";class Ro{constructor(e,t,n,r,s,i,o,a){this.Ct=e,this.Kt=n,this.Qt=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Wt=0,this.Gt=null,this.zt=null,this.stream=null,this.jt=0,this.Ht=new Fo(e,t)}Jt(){return 1===this.state||5===this.state||this.Yt()}Yt(){return 2===this.state||3===this.state}start(){this.jt=0,4!==this.state?this.auth():this.Zt()}async stop(){this.Jt()&&await this.close(0)}Xt(){this.state=0,this.Ht.reset()}en(){this.Yt()&&null===this.Gt&&(this.Gt=this.Ct.enqueueAfterDelay(this.Kt,6e4,()=>this.tn()))}nn(e){this.rn(),this.stream.send(e)}async tn(){if(this.Yt())return this.close(0)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}sn(){this.zt&&(this.zt.cancel(),this.zt=null)}async close(e,t){this.rn(),this.sn(),this.Ht.cancel(),this.Wt++,4!==e?this.Ht.reset():t&&t.code===At.RESOURCE_EXHAUSTED?(ut(t.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.Ht.Ut()):t&&t.code===At.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this._n(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Tt(t)}_n(){}auth(){this.state=1;const e=this.an(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.Wt===t&&this.un(e,n)},t=>{e(()=>{const e=new Nt(At.UNKNOWN,"Fetching auth token failed: "+t.message);return this.cn(e)})})}un(e,t){const n=this.an(this.Wt);this.stream=this.En(e,t),this.stream.ct(()=>{n(()=>this.listener.ct())}),this.stream.Et(()=>{n(()=>(this.state=2,this.zt=this.Ct.enqueueAfterDelay(this.Qt,1e4,()=>(this.Yt()&&(this.state=3),Promise.resolve())),this.listener.Et()))}),this.stream.Tt(e=>{n(()=>this.cn(e))}),this.stream.onMessage(e=>{n(()=>1==++this.jt?this.hn(e):this.onNext(e))})}Zt(){this.state=5,this.Ht.kt(async()=>{this.state=0,this.start()})}cn(e){return ct(Lo,`close with error: ${e}`),this.stream=null,this.close(4,e)}an(e){return t=>{this.Ct.enqueueAndForget(()=>this.Wt===e?t():(ct(Lo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ko extends Ro{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}En(e,t){return this.connection.vt("Listen",e,t)}hn(e){return this.onNext(e)}onNext(e){this.Ht.reset();const t=ki(this.serializer,e),n=function(e){if(!("targetChange"in e))return ss.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ss.min():t.readTime?vi(t.readTime):ss.min()}(e);return this.listener.Tn(t,n)}Pn(e){const t={};t.database=Fi(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=fs(r)?{pipelineQuery:Vi(e,r)}:gs(r)?{documents:Mi(e,r)}:{query:Gi(e,r).Se},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=wi(e,t.resumeToken);const r=Ei(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(ss.min())>0){n.readTime=Di(e,t.snapshotVersion.toTimestamp());const r=Ei(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=Ui(this.serializer,e);n&&(t.labels=n),this.nn(t)}In(e){const t={};t.database=Fi(this.serializer),t.removeTarget=e,this.nn(t)}}class Po extends Ro{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}get Rn(){return this.jt>0}start(){this.lastStreamToken=void 0,super.start()}_n(){this.Rn&&this.An([])}En(e,t){return this.connection.vt("Write",e,t)}hn(e){return dt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,dt(!e.writeResults||0===e.writeResults.length,55816),this.listener.Vn()}onNext(e){dt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.Ht.reset();const t=xi(e.writeResults,e.commitTime),n=vi(e.commitTime);return this.listener.dn(n,t)}fn(){const e={};e.database=Fi(this.serializer),this.nn(e)}An(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>Pi(this.serializer,e))};this.nn(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{}class Mo extends xo{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.mn=!1}pn(){if(this.mn)throw new Nt(At.FAILED_PRECONDITION,"The client has already been terminated.")}nt(e,t,n,r){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.nt(e,Ti(t,n),r,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===At.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Nt(At.UNKNOWN,e.toString())})}_t(e,t,n,r,s){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._t(e,Ti(t,n),r,i,o,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===At.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Nt(At.UNKNOWN,e.toString())})}terminate(){this.mn=!0,this.connection.terminate()}}function Go(e,t,n,r){return new Mo(e,t,n,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho="ComponentProvider",Uo=new Map;function Vo(e,t,n,r,s){return new dn(e,t,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,mo(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r,s._customHeaders,s.grpcFlowControlWindow)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jo=41943040;class Ko{static withCacheSize(e){return new Ko(e,Ko.DEFAULT_COLLECTION_PERCENTILE,Ko.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}Ko.DEFAULT_COLLECTION_PERCENTILE=10,Ko.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ko.DEFAULT=new Ko(jo,Ko.DEFAULT_COLLECTION_PERCENTILE,Ko.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ko.DISABLED=new Ko(-1,0,0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.gn(e),this.yn=e=>t.writeSequenceNumber(e))}gn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.yn&&this.yn(e),e}}qo.wn=-1;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zo="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qo{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(e){if(e.code!==At.FAILED_PRECONDITION||e.message!==zo)throw e;ct("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ct(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Wo((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Wo?t:Wo.resolve(t)}catch(e){return Wo.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Wo.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Wo.reject(t)}static resolve(e){return new Wo((t,n)=>{t(e)})}static reject(e){return new Wo((t,n)=>{n(e)})}static waitFor(e){return new Wo((t,n)=>{let r=0,s=0,i=!1;e.forEach(e=>{++r,e.next(()=>{++s,i&&s===r&&t()},e=>n(e))}),i=!0,s===r&&t()})}static or(e){let t=Wo.resolve(!1);for(const n of e)t=t.next(e=>e?Wo.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new Wo((n,r)=>{const s=e.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const B=a;t(e[B]).next(e=>{i[B]=e,++o,o===s&&n(i)},e=>r(e))}})}static doWhile(e,t){return new Wo((n,r)=>{const s=()=>{!0===e()?t().next(()=>{s()},r):n()};s()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xo(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zo="LruGarbageCollector",ea=1048576;function ta([e,t],[n,r]){const s=Et(e,n);return 0===s?Et(t,r):s}class na{constructor(e){this.Yn=e,this.buffer=new St(ta),this.Zn=0}Xn(){return++this.Zn}er(e){const t=[e,this.Xn()];if(this.buffer.size<this.Yn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();ta(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ra{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.tr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.nr(6e4)}stop(){this.tr&&(this.tr.cancel(),this.tr=null)}get started(){return null!==this.tr}nr(e){ct(Zo,`Garbage collection scheduled in ${e}ms`),this.tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Xo(e)?ct(Zo,"Ignoring IndexedDB error during garbage collection: ",e):await $o(e)}await this.nr(3e5)})}}class sa{constructor(e,t){this.rr=e,this.params=t}calculateTargetCount(e,t){return this.rr.ir(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Wo.resolve(qo.wn);const n=new na(t);return this.rr.forEachTarget(e,e=>n.er(e.sequenceNumber)).next(()=>this.rr.sr(e,e=>n.er(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.rr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.rr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(ct("LruGarbageCollector","Garbage collection skipped; disabled"),Wo.resolve(Jo)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(ct("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jo):this._r(e,t))}getCacheSize(e){return this.rr.getCacheSize(e)}_r(e,t){let n,r,s,i,o,a,B;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(ct("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,i=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(s=t,a=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(B=Date.now(),Bt()<=m.$b.DEBUG&&ct("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-c}ms\n\tDetermined least recently used ${r} in `+(o-i)+"ms\n"+`\tRemoved ${s} targets in `+(a-o)+"ms\n"+`\tRemoved ${e} documents in `+(B-a)+"ms\n"+`Total Duration: ${B-c}ms`),Wo.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:e})))}}function ia(e,t){return new sa(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="firestore.googleapis.com",aa=!0;class Ba{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new Nt(At.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=oa,this.ssl=aa}else this.host=e.host,this.ssl=e.ssl??aa;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),void 0===e.cacheSizeBytes)this.cacheSizeBytes=jo;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<ea)throw new Nt(At.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(jt("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mo(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Nt(At.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Nt(At.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Nt(At.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,void 0!==e.grpcFlowControlWindow){if("number"!=typeof e.grpcFlowControlWindow||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new Nt(At.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(e,t){if(e===t)return!0;if(!e||!t)return!1;const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const s of n)if(e[s]!==t[s])return!1;return!0}(this._customHeaders,e._customHeaders)}}let ca=class{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ba({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Nt(At.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Nt(At.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ba(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new uo;switch(e.type){case"firstParty":return new po(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Nt(At.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Uo.get(e);t&&(ct(Ho,"Removing Datastore"),Uo.delete(e),t.terminate())}(this),Promise.resolve()}};function ua(e,t,n,r={}){e=$t(e,ca);const s=(0,a.zJ)(t),i=e._getSettings(),o={...i,emulatorOptions:e._getEmulatorOptions()},B=`${t}:${n}`;s&&(0,a.gE)(`https://${B}`),i.host!==oa&&i.host!==B&&lt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:B,ssl:s,emulatorOptions:r};if(!(0,a.bD)(c,o)&&(e._setSettings(c),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=ao.MOCK_USER;else{t=(0,a.Fy)(r.mockUserToken,e._app?.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Nt(At.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ao(s)}e._authCredentials=new lo(new co(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new la(this.firestore,e,this._query)}}class ha{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ca(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ha(this.firestore,e,this._key)}toJSON(){return{type:ha._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Yt(t,ha._jsonSchema))return new ha(e,n||null,new Vt(Rt.fromString(t.referencePath)))}}ha._jsonSchemaVersion="firestore/documentReference/1.0",ha._jsonSchema={type:Wt("string",ha._jsonSchemaVersion),referencePath:Wt("string")};class Ca extends la{constructor(e,t,n){super(e,t,Ds(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ha(this.firestore,null,new Vt(e))}withConverter(e){return new Ca(this.firestore,e,this._path)}}function pa(e,t,...n){if(e=(0,a.Ku)(e),Jt("collection","path",t),e instanceof ca){const r=Rt.fromString(t,...n);return qt(r),new Ca(e,null,r)}{if(!(e instanceof ha||e instanceof Ca))throw new Nt(At.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Rt.fromString(t,...n));return qt(r),new Ca(e.firestore,null,r)}}function da(e,t,...n){if(e=(0,a.Ku)(e),1===arguments.length&&(t=mt.newId()),Jt("doc","path",t),e instanceof ca){const r=Rt.fromString(t,...n);return Kt(r),new ha(e,null,new Vt(r))}{if(!(e instanceof ha||e instanceof Ca))throw new Nt(At.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Rt.fromString(t,...n));return Kt(r),new ha(e.firestore,e instanceof Ca?e.converter:null,new Vt(r))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fa{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:fa._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Yt(e,fa._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new fa(e.vectorValues);throw new Nt(At.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}fa._jsonSchemaVersion="firestore/vectorValue/1.0",fa._jsonSchema={type:Wt("string",fa._jsonSchemaVersion),vectorValues:Wt("object")};function ga(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ct(40011,{dataSource:e})}}function ma(e,t,n){if(ya(e=(0,a.Ku)(e)))return wa("Unsupported field value:",t,e),Ea(e,t);if(e instanceof io)return function(e,t){if(!ga(t.dataSource))throw t.createError(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.createError(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&4!==t.dataSource)throw t.createError("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=ma(s,t.childContextForArray(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.Ku)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return nr(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=en.fromDate(e);return{timestampValue:Di(t.serializer,n)}}if(e instanceof en){const n=new en(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Di(t.serializer,n)}}if(Da(e)){const n=en.fromInstant(e),r=new en(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Di(t.serializer,r)}}if(e instanceof oo)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof no)return{bytesValue:wi(t.serializer,e._byteString)};if(e instanceof ha){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.createError(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ii(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof fa)return function(e,t){const n=e instanceof fa?e.toArray():e,r={fields:{[vn]:{stringValue:bn},[Sn]:{arrayValue:{values:n.map(e=>{if("number"!=typeof e)throw t.createError("VectorValues must only contain numeric values.");return er(t.serializer,e)})}}}};return{mapValue:r}}(e,t);if(Xi(e))return e._toProto(t.serializer);throw t.createError(`Unsupported field value: ${Qt(e)}`)}(e,t)}function Ea(e,t){const n={};return Ut(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Gt(e,(e,r)=>{const s=ma(r,t.childContextForField(e));null!=s&&(n[e]=s)}),{mapValue:{fields:n}}}function Da(e){if("object"!=typeof e||null===e)return!1;if("undefined"!=typeof Temporal&&"function"==typeof Temporal.Instant&&e instanceof Temporal.Instant)return!0;const t=e;return"Temporal.Instant"===t[Symbol.toStringTag]&&"bigint"==typeof t.t}function ya(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof en||e instanceof oo||e instanceof no||e instanceof ha||e instanceof io||e instanceof fa||Da(e)||Xi(e))}function wa(e,t,n){if(!ya(n)||!zt(n)){const r=Qt(n);throw"an object"===r?t.createError(e+" a custom object"):t.createError(e+" "+r)}}function _a(e,t,n){if((t=(0,a.Ku)(t))instanceof ro)return t._internalPath;if("string"==typeof t)return Ia(e,t);throw Ta("Field path arguments must be of type string or ",e,!1,void 0,n)}const va=new RegExp("[~\\*/\\[\\]]");function Ia(e,t,n){if(t.search(va)>=0)throw Ta(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ro(...t.split("."))._internalPath}catch(Aa){throw Ta(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ta(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let B="";return(i||o)&&(B+=" (found",i&&(B+=` in field ${r}`),o&&(B+=` in document ${s}`),B+=")"),new Nt(At.INVALID_ARGUMENT,a+e+B)}function ba(e){return"function"==typeof e._readUserData}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const n=Xn.empty();for(const r in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(r)){const s=this.optionDefinitions[r];if(r in e){const i=e[r];let o;s.nestedOptions&&zt(i)?o={mapValue:{fields:new Sa(s.nestedOptions).getOptionsProto(t,i)}}:i&&(o=ma(i,t)??void 0),o&&n.set(Pt.fromServerFormat(s.serverName),o)}}return n}getOptionsProto(e,t,n){const r=this._getKnownOptions(t,e);if(n){const t=new Map(Ht(n,(t,n)=>[Pt.fromServerFormat(n),void 0!==t?ma(t,e):null]));r.setAll(t)}return r.value.mapValue.fields??{}}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(e){return"object"==typeof e&&null!==e&&!!("nullValue"in e&&(null===e.nullValue||"NULL_VALUE"===e.nullValue)||"booleanValue"in e&&(null===e.booleanValue||"boolean"==typeof e.booleanValue)||"integerValue"in e&&(null===e.integerValue||"number"==typeof e.integerValue||"string"==typeof e.integerValue)||"doubleValue"in e&&(null===e.doubleValue||"number"==typeof e.doubleValue)||"timestampValue"in e&&(null===e.timestampValue||function(e){return"object"==typeof e&&null!==e&&"seconds"in e&&(null===e.seconds||"number"==typeof e.seconds||"string"==typeof e.seconds)&&"nanos"in e&&(null===e.nanos||"number"==typeof e.nanos)}(e.timestampValue))||"stringValue"in e&&(null===e.stringValue||"string"==typeof e.stringValue)||"bytesValue"in e&&(null===e.bytesValue||e.bytesValue instanceof Uint8Array)||"referenceValue"in e&&(null===e.referenceValue||"string"==typeof e.referenceValue)||"geoPointValue"in e&&(null===e.geoPointValue||function(e){return"object"==typeof e&&null!==e&&"latitude"in e&&(null===e.latitude||"number"==typeof e.latitude)&&"longitude"in e&&(null===e.longitude||"number"==typeof e.longitude)}(e.geoPointValue))||"arrayValue"in e&&(null===e.arrayValue||function(e){return"object"==typeof e&&null!==e&&!(!("values"in e)||null!==e.values&&!Array.isArray(e.values))}(e.arrayValue))||"mapValue"in e&&(null===e.mapValue||function(e){return"object"==typeof e&&null!==e&&!(!("fields"in e)||null!==e.fields&&!zt(e.fields))}(e.mapValue))||"fieldReferenceValue"in e&&(null===e.fieldReferenceValue||"string"==typeof e.fieldReferenceValue)||"functionValue"in e&&(null===e.functionValue||function(e){return"object"==typeof e&&null!==e&&!(!("name"in e)||null!==e.name&&"string"!=typeof e.name||!("args"in e)||null!==e.args&&!Array.isArray(e.args))}(e.functionValue))||"pipelineValue"in e&&(null===e.pipelineValue||function(e){return"object"==typeof e&&null!==e&&!(!("stages"in e)||null!==e.stages&&!Array.isArray(e.stages))}(e.pipelineValue)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(e){return new fa(e)}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(e){let t;return e instanceof Ra?e:(t=zt(e)?Wa(e):e instanceof Array?Ya(e):ja(e,void 0),t)}function Fa(e){if(e instanceof Ra)return e;if(e instanceof fa)return Ja(e);if(Array.isArray(e))return Ja(Aa(e));throw new Error("Unsupported value: "+typeof e)}function La(e){return _n(e)?Ha(e):Na(e)}class Ra{constructor(){this._protoValueType="ProtoValue"}add(e){return new Ka("add",[this,Na(e)],"add")}asBoolean(){if(this instanceof qa)return this;if(this instanceof Va)return new Qa(this);if(this instanceof Ga)return new $a(this);if(this instanceof Ka)return new za(this);throw new Nt("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new Ka("subtract",[this,Na(e)],"subtract")}multiply(e){return new Ka("multiply",[this,Na(e)],"multiply")}divide(e){return new Ka("divide",[this,Na(e)],"divide")}mod(e){return new Ka("mod",[this,Na(e)],"mod")}equal(e){return new Ka("equal",[this,Na(e)],"equal").asBoolean()}notEqual(e){return new Ka("not_equal",[this,Na(e)],"notEqual").asBoolean()}lessThan(e){return new Ka("less_than",[this,Na(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new Ka("less_than_or_equal",[this,Na(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new Ka("greater_than",[this,Na(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new Ka("greater_than_or_equal",[this,Na(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const n=[e,...t].map(e=>Na(e));return new Ka("array_concat",[this,...n],"arrayConcat")}arrayContains(e){return new Ka("array_contains",[this,Na(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Ma(e.map(Na),"arrayContainsAll"):e;return new Ka("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Ma(e.map(Na),"arrayContainsAny"):e;return new Ka("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new Ka("array_reverse",[this])}arrayLength(){return new Ka("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Ma(e.map(Na),"equalAny"):e;return new Ka("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Ma(e.map(Na),"notEqualAny"):e;return new Ka("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new Ka("exists",[this],"exists").asBoolean()}charLength(){return new Ka("char_length",[this],"charLength")}like(e){return new Ka("like",[this,Na(e)],"like").asBoolean()}regexContains(e){return new Ka("regex_contains",[this,Na(e)],"regexContains").asBoolean()}regexFind(e){return new Ka("regex_find",[this,Na(e)],"regexFind")}regexFindAll(e){return new Ka("regex_find_all",[this,Na(e)],"regexFindAll")}regexMatch(e){return new Ka("regex_match",[this,Na(e)],"regexMatch").asBoolean()}stringContains(e){return new Ka("string_contains",[this,Na(e)],"stringContains").asBoolean()}startsWith(e){return new Ka("starts_with",[this,Na(e)],"startsWith").asBoolean()}endsWith(e){return new Ka("ends_with",[this,Na(e)],"endsWith").asBoolean()}toLower(){return new Ka("to_lower",[this],"toLower")}toUpper(){return new Ka("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(Na(e)),new Ka("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(Na(e)),new Ka("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(Na(e)),new Ka("rtrim",t,"rtrim")}type(){return new Ka("type",[this])}isType(e){return new Ka("is_type",[this,Ja(e)],"isType").asBoolean()}stringConcat(e,...t){const n=[e,...t].map(Na);return new Ka("string_concat",[this,...n],"stringConcat")}stringIndexOf(e){return new Ka("string_index_of",[this,Na(e)],"stringIndexOf")}stringRepeat(e){return new Ka("string_repeat",[this,Na(e)],"stringRepeat")}stringReplaceAll(e,t){return new Ka("string_replace_all",[this,Na(e),Na(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new Ka("string_replace_one",[this,Na(e),Na(t)],"stringReplaceOne")}concat(e,...t){const n=[e,...t].map(Na);return new Ka("concat",[this,...n],"concat")}reverse(){return new Ka("reverse",[this],"reverse")}arrayFilter(e,t){return new Ka("array_filter",[this,Na(e),t],"arrayFilter")}arrayTransform(e,t){return new Ka("array_transform",[this,Na(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,n){return new Ka("array_transform",[this,Na(e),Na(t),n],"arrayTransformWithIndex")}arraySlice(e,t){const n=[this,Na(e)];return void 0!==t&&n.push(Na(t)),new Ka("array_slice",n,"arraySlice")}arrayFirst(){return new Ka("array_first",[this],"arrayFirst")}arrayFirstN(e){return new Ka("array_first_n",[this,Na(e)],"arrayFirstN")}arrayLast(){return new Ka("array_last",[this],"arrayLast")}arrayLastN(e){return new Ka("array_last_n",[this,Na(e)],"arrayLastN")}arrayMaximum(){return new Ka("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new Ka("maximum_n",[this,Na(e)],"arrayMaximumN")}arrayMinimum(){return new Ka("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new Ka("minimum_n",[this,Na(e)],"arrayMinimumN")}arrayIndexOf(e){return new Ka("array_index_of",[this,Na(e),Na("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new Ka("array_index_of",[this,Na(e),Na("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new Ka("array_index_of_all",[this,Na(e)],"arrayIndexOfAll")}byteLength(){return new Ka("byte_length",[this],"byteLength")}ceil(){return new Ka("ceil",[this])}floor(){return new Ka("floor",[this])}abs(){return new Ka("abs",[this])}exp(){return new Ka("exp",[this])}mapGet(e){return new Ka("map_get",[this,Ja(e)],"mapGet")}mapSet(e,t,...n){const r=[this,Na(e),Na(t),...n.map(Na)];return new Ka("map_set",r,"mapSet")}mapKeys(){return new Ka("map_keys",[this],"mapKeys")}mapValues(){return new Ka("map_values",[this],"mapValues")}mapEntries(){return new Ka("map_entries",[this],"mapEntries")}getField(e){return new Ka("get_field",[this,Na(e)],"get_field")}count(){return ka._create("count",[this],"count")}sum(){return ka._create("sum",[this],"sum")}average(){return ka._create("average",[this],"average")}minimum(){return ka._create("minimum",[this],"minimum")}maximum(){return ka._create("maximum",[this],"maximum")}first(){return ka._create("first",[this],"first")}last(){return ka._create("last",[this],"last")}arrayAgg(){return ka._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return ka._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return ka._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const n=[e,...t];return new Ka("maximum",[this,...n.map(Na)],"logicalMaximum")}logicalMinimum(e,...t){const n=[e,...t];return new Ka("minimum",[this,...n.map(Na)],"minimum")}vectorLength(){return new Ka("vector_length",[this],"vectorLength")}cosineDistance(e){return new Ka("cosine_distance",[this,Fa(e)],"cosineDistance")}dotProduct(e){return new Ka("dot_product",[this,Fa(e)],"dotProduct")}euclideanDistance(e){return new Ka("euclidean_distance",[this,Fa(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new Ka("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new Ka("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new Ka("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new Ka("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new Ka("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new Ka("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new Ka("timestamp_add",[this,Na(e),Na(t)],"timestampAdd")}timestampSubtract(e,t){return new Ka("timestamp_subtract",[this,Na(e),Na(t)],"timestampSubtract")}timestampDiff(e,t){return new Ka("timestamp_diff",[this,La(e),Na(t)],"timestampDiff")}timestampExtract(e,t){const n=[this,Na(e)];return t&&n.push(Na(t)),new Ka("timestamp_extract",n,"timestampExtract")}documentId(){return new Ka("document_id",[this],"documentId")}parent(){return new Ka("parent",[this],"parent")}substring(e,t){const n=Na(e);return new Ka("substring",void 0===t?[this,n]:[this,n,Na(t)],"substring")}arrayGet(e){return new Ka("array_get",[this,Na(e)],"arrayGet")}isError(){return new Ka("is_error",[this],"isError").asBoolean()}ifError(e){const t=new Ka("if_error",[this,Na(e)],"ifError");return e instanceof qa?t.asBoolean():t}isAbsent(){return new Ka("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new Ka("map_remove",[this,Na(e)],"mapRemove")}mapMerge(e,...t){const n=Na(e),r=t.map(Na);return new Ka("map_merge",[this,n,...r],"mapMerge")}pow(e){return new Ka("pow",[this,Na(e)])}trunc(e){return void 0===e?new Ka("trunc",[this]):new Ka("trunc",[this,Na(e)],"trunc")}round(e){return void 0===e?new Ka("round",[this]):new Ka("round",[this,Na(e)],"round")}collectionId(){return new Ka("collection_id",[this])}length(){return new Ka("length",[this])}ln(){return new Ka("ln",[this])}sqrt(){return new Ka("sqrt",[this])}stringReverse(){return new Ka("string_reverse",[this])}ifAbsent(e){return new Ka("if_absent",[this,Na(e)],"ifAbsent")}ifNull(e){return new Ka("if_null",[this,Na(e)],"ifNull")}coalesce(e,...t){return new Ka("coalesce",[this,Na(e),...t.map(Na)],"coalesce")}join(e){return new Ka("join",[this,Na(e)],"join")}log10(){return new Ka("log10",[this])}arraySum(){return new Ka("sum",[this])}split(e){return new Ka("split",[this,Na(e)])}timestampTruncate(e,t){const n=[this,Na(e)];return t&&n.push(Na(t)),new Ka("timestamp_trunc",n)}ascending(){return Xa(this)}descending(){return Za(this)}as(e){return new xa(this,e,"as")}}class ka{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,n){const r=new ka(e,t);return r._methodName=n,r}as(e){return new Pa(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class Pa{constructor(e,t,n){this.aggregate=e,this.alias=t,this._methodName=n}_readUserData(e){this.aggregate._readUserData(e)}}class xa{constructor(e,t,n){this.expr=e,this.alias=t,this._methodName=n,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Ma extends Ra{constructor(e,t){super(),this.cr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.cr.map(t=>t._toProto(e))}}}_readUserData(e){this.cr.forEach(t=>t._readUserData(e))}}class Ga extends Ra{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new Ka("geo_distance",[this,Na(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Ha(e){return Ua(e,"field")}function Ua(e,t){return new Ga("string"==typeof e?Ft===e?so()._internalPath:_a("field",e):e._internalPath,t)}class Va extends Ra{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Va(e,void 0);return t._protoValue=e,t}_toProto(e){return dt(void 0!==this._protoValue,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,Oa(this._protoValue)||(this._protoValue=ma(this.value,e))}}function Ja(e,t){return ja(e,"constant")}function ja(e,t){const n=new Va(e,t);return"boolean"==typeof e?new Qa(n):n}class Ka extends Ra{constructor(e,t,n,r){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,void 0!==n&&(this._methodName=n),void 0!==r&&(this._options=r)}get _optionsUtil(){return new Sa({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class qa extends Ra{get _methodName(){return this._expr._methodName}countIf(){return ka._create("count_if",[this],"countIf")}not(){return new Ka("not",[this],"not").asBoolean()}conditional(e,t){return new Ka("conditional",[this,e,t],"conditional")}ifError(e){const t=Na(e),n=new Ka("if_error",[this,t],"ifError");return t instanceof qa?n.asBoolean():n}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class za extends qa{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Qa extends qa{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class $a extends qa{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function Wa(e,t){const n=[];for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){const t=e[r];n.push(Ja(r)),n.push(Na(t))}return new Ka("map",n,"map")}function Ya(e){return function(e,t){return new Ka("array",e.map(e=>Na(e)),t)}(e,"array")}function Xa(e){return new eB(La(e),"ascending","ascending")}function Za(e){return new eB(La(e),"descending","descending")}class eB{constructor(e,t,n){this.expr=e,this.direction=t,this._methodName=n,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:eo(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tB{constructor(e){this.optionsProto=void 0,({rawOptions:this.rawOptions,...this.knownOptions}=e)}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class nB extends tB{get _name(){return"add_fields"}get _optionsUtil(){return new Sa({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[Zi(e,this.fields)]}}_readUserData(e){super._readUserData(e),dB(this.fields,e)}}class rB extends tB{get _name(){return"aggregate"}get _optionsUtil(){return new Sa({})}constructor(e,t,n){super(n),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[Zi(e,this.accumulators),Zi(e,this.groups)]}}_readUserData(e){super._readUserData(e),dB(this.groups,e),dB(this.accumulators,e)}}class sB extends tB{get _name(){return"distinct"}get _optionsUtil(){return new Sa({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[Zi(e,this.groups)]}}_readUserData(e){super._readUserData(e),dB(this.groups,e)}}class iB extends tB{get _name(){return"collection"}get _optionsUtil(){return new Sa({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.hr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.hr}]}}_readUserData(e){super._readUserData(e)}}class oB extends tB{get _name(){return"collection_group"}get _optionsUtil(){return new Sa({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class aB extends tB{get _name(){return"database"}get _optionsUtil(){return new Sa({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class BB extends tB{get _name(){return"documents"}get _optionsUtil(){return new Sa({})}constructor(e,t){if(super(t),!e||0===e.length)throw new Nt(At.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const n=e.map(e=>e.startsWith("/")?e:"/"+e),r=new Set(n);if(r.size!==n.length)throw new Nt(At.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.Tr=n,this.Pr=r}_toProto(e){return{...super._toProto(e),args:this.Tr.map(e=>({referenceValue:e}))}}_readUserData(e){super._readUserData(e)}}class cB extends tB{get _name(){return"where"}get _optionsUtil(){return new Sa({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),dB(this.condition,e)}}class uB extends tB{get _name(){return"limit"}get _optionsUtil(){return new Sa({})}constructor(e,t){dt(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[nr(e,this.limit)]}}}class lB extends tB{get _name(){return"offset"}get _optionsUtil(){return new Sa({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[nr(e,this.offset)]}}}class hB extends tB{get _name(){return"select"}get _optionsUtil(){return new Sa({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[Zi(e,this.selections)]}}_readUserData(e){super._readUserData(e),dB(this.selections,e)}}class CB extends tB{get _name(){return"sort"}get _optionsUtil(){return new Sa({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),dB(this.orderings,e)}}class pB extends tB{get _name(){return"replace_with"}get _optionsUtil(){return new Sa({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),eo(pB.Ir)]}}_readUserData(e){super._readUserData(e),dB(this.map,e)}}pB.Ir="full_replace";function dB(e,t){return ba(e)?e._readUserData(t):Array.isArray(e)||e instanceof Map?e.forEach(e=>e._readUserData(t)):Object.values(e).forEach(e=>e._readUserData(t)),e}
/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fB{constructor(e,t,n,r){this._db=e,this.userDataReader=t,this._userDataWriter=n,this.stages=r}Vr(e,t){const n=this.userDataReader.createContext(3,e);return ba(t)?t._readUserData(n):(Array.isArray(t),t.forEach(e=>e._readUserData(n))),t}where(e){const t=this.stages.map(e=>e);return this.Vr("where",e),t.push(new cB(e,{})),new fB(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map(e=>e);return t.push(new uB(e,{})),new fB(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const n=this.stages.map(e=>e);return"orderings"in e?n.push(new CB(this.Vr("sort",e.orderings),{})):n.push(new CB(this.Vr("sort",[e,...t]),{})),new fB(this._db,this.userDataReader,this._userDataWriter,n)}dr(e){return{pipeline:{stages:this.stages.map(t=>t._toProto(e))}}}}
// Copyright 2024 Google LLC* @license
class gB{constructor(e,t,n){this.serializer=e,this.stages=t,this.listenOptions=n,this.isCorePipeline=!0}getPipelineCollection(){return EB(this)}getPipelineCollectionGroup(){return DB(this)}getPipelineCollectionId(){return yB(this)}getPipelineDocuments(){return wB(this)}getPipelineFlavor(){return function(e){let t="exact";return e.stages.forEach((n,r)=>{n._name!==sB.name&&n._name!==rB.name||(t="keyless"),n._name===hB.name&&"exact"===t&&(t="augmented"),n._name===nB.name&&r<e.stages.length-1&&"exact"===t&&(t="augmented")}),t}
// Copyright 2024 Google LLC* @license
(this)}getPipelineSourceType(){return mB(this)}}function mB(e){const t=e.stages[0];return t instanceof iB||t instanceof oB||t instanceof aB||t instanceof BB?t._name:"unknown"}function EB(e){if("collection"===mB(e))return e.stages[0].hr}function DB(e){if("collection_group"===mB(e))return e.stages[0].collectionId}function yB(e){switch(mB(e)){case"collection":return Rt.fromString(EB(e)).lastSegment();case"collection_group":return DB(e);default:return}}function wB(e){if("documents"===mB(e))return e.stages[0].Tr}class _B{constructor(e,t){this.type=e,this.value=t}static mr(){return new _B("ERROR",void 0)}static pr(){return new _B("UNSET",void 0)}static gr(){return new _B("NULL",On)}static newValue(e){return Kn(e)?new _B("NULL",On):function(e){return!!e&&"booleanValue"in e}(e)?new _B("BOOLEAN",e):Un(e)?new _B("INT",e):Vn(e)?new _B("DOUBLE",e):function(e){return!!e&&"timestampValue"in e&&!!e.timestampValue}(e)?new _B("TIMESTAMP",e):function(e){return!!e&&"stringValue"in e}(e)?new _B("STRING",e):function(e){return!!e&&"bytesValue"in e}(e)?new _B("BYTES",e):e.referenceValue?new _B("REFERENCE",e):e.geoPointValue?new _B("GEO_POINT",e):jn(e)?new _B("ARRAY",e):Qn(e)?new _B("VECTOR",e):zn(e)?new _B("MAP",e):new _B("ERROR",void 0)}yr(){return"ERROR"===this.type||"UNSET"===this.type}wr(){return"NULL"===this.type}}function vB(e){if(!e.yr())return e.value}function IB(e){return e instanceof qa?e._expr:e}function TB(e){if((e=IB(e))instanceof Ga)return new bB(e);if(e instanceof Va)return new SB(e);if(e instanceof Ma)return new OB(e);if(e instanceof Ka){if("add"===e.name)return new PB(e);if("subtract"===e.name)return new xB(e);if("multiply"===e.name)return new MB(e);if("divide"===e.name)return new GB(e);if("mod"===e.name)return new HB(e);if("and"===e.name)return new UB(e);if("equal"===e.name)return new rc(e);if("not_equal"===e.name)return new sc(e);if("less_than"===e.name)return new ic(e);if("less_than_or_equal"===e.name)return new oc(e);if("greater_than"===e.name)return new ac(e);if("greater_than_or_equal"===e.name)return new Bc(e);if("array_concat"===e.name)return new cc(e);if("array_reverse"===e.name)return new uc(e);if("array_contains"===e.name)return new lc(e);if("array_contains_all"===e.name)return new hc(e);if("array_contains_any"===e.name)return new Cc(e);if("array_length"===e.name)return new pc(e);if("array_element"===e.name)return new dc(e);if("equal_any"===e.name)return new KB(e);if("not_equal_any"===e.name)return new qB(e);if("is_nan"===e.name)return new zB(e);if("is_not_nan"===e.name)return new QB(e);if("is_null"===e.name)return new $B(e);if("is_not_null"===e.name)return new WB(e);if("is_error"===e.name)return new YB(e);if("exists"===e.name)return new XB(e);if("not"===e.name)return new VB(e);if("or"===e.name)return new JB(e);if("xor"===e.name)return new jB(e);if("conditional"===e.name)return new ZB(e);if("maximum"===e.name)return new ec(e);if("minimum"===e.name)return new tc(e);if("reverse"===e.name)return new fc(e);if("replace_first"===e.name)return new gc(e);if("replace_all"===e.name)return new mc(e);if("char_length"===e.name)return new Ec(e);if("byte_length"===e.name)return new Dc(e);if("like"===e.name)return new wc(e);if("regex_contains"===e.name)return new _c(e);if("regex_match"===e.name)return new vc(e);if("string_contains"===e.name)return new Ic(e);if("starts_with"===e.name)return new Tc(e);if("ends_with"===e.name)return new bc(e);if("to_lower"===e.name)return new Sc(e);if("to_upper"===e.name)return new Oc(e);if("trim"===e.name)return new Ac(e);if("string_concat"===e.name)return new Nc(e);if("map_get"===e.name)return new Fc(e);if("cosine_distance"===e.name)return new Rc(e);if("dot_product"===e.name)return new kc(e);if("euclidean_distance"===e.name)return new Pc(e);if("vector_length"===e.name)return new xc(e);if("unix_micros_to_timestamp"===e.name)return new Xc(e);if("timestamp_to_unix_micros"===e.name)return new nu(e);if("unix_millis_to_timestamp"===e.name)return new Zc(e);if("timestamp_to_unix_millis"===e.name)return new ru(e);if("unix_seconds_to_timestamp"===e.name)return new eu(e);if("timestamp_to_unix_seconds"===e.name)return new su(e);if("timestamp_add"===e.name)return new ou(e);if("timestamp_subtract"===e.name)return new au(e)}throw new Error(`Unknown Expr : ${e}`)}class bB{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Ft)return _B.newValue({referenceValue:Si(e.serializer,t.key)});if("__update_time__"===this.expr.fieldName)return _B.newValue({timestampValue:_i(e.serializer,t.version)});if("__create_time__"===this.expr.fieldName)return _B.newValue({timestampValue:_i(e.serializer,t.createTime)});const n=t.data.field(this.expr._fieldPath);return n?hn(n)?_B.newValue(function(e,t){if("estimate"===e.serverTimestampBehavior)return{timestampValue:_i(e.serializer,ss.fromTimestamp(pn(t)))};if("previous"===e.serverTimestampBehavior){const e=Cn(t);if(e)return e}return{nullValue:"NULL_VALUE"}}(e,n)):_B.newValue(n):_B.pr()}}class SB{constructor(e){this.expr=e}evaluate(e,t){return _B.newValue(this.expr._getValue())}}class OB{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.cr.map(n=>TB(n).evaluate(e,t));return n.some(e=>e.yr())?_B.mr():_B.newValue({arrayValue:{values:n.map(e=>e.value)}})}}function AB(e){return Vn(e)?Number(e.doubleValue):Number(e.integerValue)}function NB(e){return BigInt(e.integerValue)}const FB=BigInt("0x7fffffffffffffff"),LB=-BigInt("0x8000000000000000");class RB{constructor(e){this.expr=e}evaluate(e,t){dt(this.expr.params.length>=2,24778);const n=TB(this.expr.params[0]).evaluate(e,t),r=TB(this.expr.params[1]).evaluate(e,t);let s=this.br(n,r);for(const i of this.expr.params.slice(2)){const n=TB(i).evaluate(e,t);s=this.br(s,n)}return s}br(e,t){if(e.yr()||t.yr())return _B.mr();if(e.wr()||t.wr())return _B.gr();const n=e.value,r=t.value;if(!Vn(n)&&!Un(n)||!Vn(r)&&!Un(r))return _B.mr();if(Vn(n)||Vn(r)){const e=this.Sr(n,r);return e?_B.newValue(e):_B.mr()}if(Un(n)&&Un(r)){const e=this.vr(n,r);return void 0===e?_B.mr():"number"==typeof e?_B.newValue({doubleValue:e}):e<LB||e>FB?_B.mr():_B.newValue({integerValue:`${e}`})}return _B.mr()}}function kB(e,t){return Fn(e)!==Fn(t)?"TYPE_MISMATCH":qn(e)||qn(t)?"NOT_EQ":Kn(e)&&Kn(t)?"EQ":Kn(e)||Kn(t)?"NULL":jn(e)&&jn(t)?function(e,t){if(e.values?.length!==t.values?.length)return"NOT_EQ";let n=!1;for(let r=0;r<(e.values?.length??0);r++){const s=e.values[r],i=t.values[r];switch(kB(s,i)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":n=!0;break;default:Ct(44609,{Dr:s,Cr:i})}}return n?"NULL":"EQ"}(e.arrayValue,t.arrayValue):Qn(e)&&Qn(t)||zn(e)&&zn(t)?function(e,t){const n=e.fields||{},r=t.fields||{};if(Mt(n)!==Mt(r))return"NOT_EQ";let s=!1;for(const i in n)if(n.hasOwnProperty(i)){if(void 0===r[i])return"NOT_EQ";switch(kB(n[i],r[i])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":s=!0}}return s?"NULL":"EQ"}(e.mapValue,t.mapValue):function(e,t){return Ln(e,t,{u:!1,i:!0,o:!0})}(e,t)?"EQ":"NOT_EQ"}class PB extends RB{vr(e,t){return NB(e)+NB(t)}Sr(e,t){return{doubleValue:AB(e)+AB(t)}}}class xB extends RB{constructor(e){super(e),this.expr=e}vr(e,t){return NB(e)-NB(t)}Sr(e,t){return{doubleValue:AB(e)-AB(t)}}}class MB extends RB{constructor(e){super(e),this.expr=e}vr(e,t){return NB(e)*NB(t)}Sr(e,t){return{doubleValue:AB(e)*AB(t)}}}class GB extends RB{constructor(e){super(e),this.expr=e}vr(e,t){const n=NB(t);if(n!==BigInt(0))return NB(e)/n}Sr(e,t){const n=AB(t);return 0===n?{doubleValue:yn(n)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:AB(e)/n}}}class HB extends RB{constructor(e){super(e),this.expr=e}vr(e,t){const n=NB(t);if(n!==BigInt(0))return NB(e)%n}Sr(e,t){const n=AB(t);if(0!==n)return{doubleValue:AB(e)%n}}}class UB{constructor(e){this.expr=e}evaluate(e,t){let n=!1,r=!1;for(const s of this.expr.params){const i=TB(s).evaluate(e,t);switch(i.type){case"BOOLEAN":if(!i.value?.booleanValue)return _B.newValue(Nn);break;case"NULL":r=!0;break;default:n=!0}}return n?_B.mr():r?_B.gr():_B.newValue(An)}}class VB{constructor(e){this.expr=e}evaluate(e,t){dt(1===this.expr.params.length,9634);const n=TB(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return _B.newValue({booleanValue:!n.value?.booleanValue});case"NULL":return _B.gr();default:return _B.mr()}}}class JB{constructor(e){this.expr=e}evaluate(e,t){let n=!1,r=!1;for(const s of this.expr.params){const i=TB(s).evaluate(e,t);switch(i.type){case"BOOLEAN":if(i.value?.booleanValue)return _B.newValue(An);break;case"NULL":r=!0;break;default:n=!0}}return n?_B.mr():r?_B.gr():_B.newValue(Nn)}}class jB{constructor(e){this.expr=e}evaluate(e,t){let n=!1,r=!1;for(const s of this.expr.params){const i=TB(s).evaluate(e,t);switch(i.type){case"BOOLEAN":n=jB.xor(n,!!i.value?.booleanValue);break;case"NULL":r=!0;break;default:return _B.mr()}}return r?_B.gr():_B.newValue({booleanValue:n})}static xor(e,t){return(e||t)&&!(e&&t)}}class KB{constructor(e){this.expr=e}evaluate(e,t){dt(2===this.expr.params.length,55094);let n=!1;const r=TB(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":n=!0;break;case"ERROR":case"UNSET":return _B.mr()}const s=TB(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return _B.mr()}if(n)return _B.gr();for(const i of s.value?.arrayValue?.values??[])switch(Kn(r.value)&&Kn(i)?"EQ":kB(r.value,i)){case"EQ":return _B.newValue(An);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Ct(44608,{value:r.value,candidate:i})}return n?_B.gr():_B.newValue(Nn)}}class qB{constructor(e){this.expr=e}evaluate(e,t){return new VB(new Ka("not",[new Ka("equal_any",this.expr.params)])).evaluate(e,t)}}class zB{constructor(e){this.expr=e}evaluate(e,t){dt(1===this.expr.params.length,23322);const n=TB(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return _B.newValue(Nn);case"DOUBLE":return _B.newValue({booleanValue:isNaN(AB(n.value))});case"NULL":return _B.gr();default:return _B.mr()}}}class QB{constructor(e){this.expr=e}evaluate(e,t){return dt(1===this.expr.params.length,50406),new VB(new Ka("not",[new Ka("is_nan",this.expr.params)])).evaluate(e,t)}}class $B{constructor(e){this.expr=e}evaluate(e,t){switch(dt(1===this.expr.params.length,23123),TB(this.expr.params[0]).evaluate(e,t).type){case"NULL":return _B.newValue(An);case"UNSET":case"ERROR":return _B.mr();default:return _B.newValue(Nn)}}}class WB{constructor(e){this.expr=e}evaluate(e,t){return dt(1===this.expr.params.length,23167),new VB(new Ka("not",[new Ka("is_null",this.expr.params)])).evaluate(e,t)}}class YB{constructor(e){this.expr=e}evaluate(e,t){return dt(1===this.expr.params.length,5228),"ERROR"===TB(this.expr.params[0]).evaluate(e,t).type?_B.newValue(An):_B.newValue(Nn)}}class XB{constructor(e){this.expr=e}evaluate(e,t){switch(dt(1===this.expr.params.length,6877),TB(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return _B.mr();case"UNSET":return _B.newValue(Nn);default:return _B.newValue(An)}}}class ZB{constructor(e){this.expr=e}evaluate(e,t){dt(3===this.expr.params.length,11706);const n=TB(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return n.value?.booleanValue?TB(this.expr.params[1]).evaluate(e,t):TB(this.expr.params[2]).evaluate(e,t);case"NULL":return TB(this.expr.params[2]).evaluate(e,t);default:return _B.mr()}}}class ec{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(n=>TB(n).evaluate(e,t));let r;for(const s of n)switch(s.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=void 0===r||kn(s.value,r.value)>0?s:r}return void 0===r?_B.gr():r}}class tc{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(n=>TB(n).evaluate(e,t));let r;for(const s of n)switch(s.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=void 0===r||kn(s.value,r.value)<0?s:r}return void 0===r?_B.gr():r}}class nc{constructor(e){this.expr=e}evaluate(e,t){dt(2===this.expr.params.length,31033,`${this.expr.name}() function should have exactly 2 params`);const n=TB(this.expr.params[0]).evaluate(e,t);switch(n.type){case"ERROR":case"UNSET":return _B.mr()}const r=TB(this.expr.params[1]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return _B.mr()}return this.Fr(n,r)}}class rc extends nc{constructor(e){super(e),this.expr=e}Fr(e,t){if(e.wr()&&t.wr())return _B.newValue(An);if(e.wr()||t.wr())return _B.newValue(Nn);if(qn(e.value)||qn(t.value))return _B.newValue(Nn);if(Fn(e.value)!==Fn(t.value))return _B.newValue(Nn);switch(kB(e.value,t.value)){case"EQ":return _B.newValue(An);case"NOT_EQ":return _B.newValue(Nn);case"NULL":return _B.gr();default:Ct(44615,{left:e,right:t})}}}class sc extends nc{constructor(e){super(e),this.expr=e}Fr(e,t){switch(kB(e.value,t.value)){case"EQ":return _B.newValue(Nn);case"NOT_EQ":case"TYPE_MISMATCH":return _B.newValue(An);case"NULL":return _B.gr();default:Ct(44614,{left:e,right:t})}}}class ic extends nc{constructor(e){super(e),this.expr=e}Fr(e,t){return Fn(e.value)!==Fn(t.value)||qn(e.value)||qn(t.value)?_B.newValue(Nn):_B.newValue({booleanValue:kn(e.value,t.value)<0})}}class oc extends nc{constructor(e){super(e),this.expr=e}Fr(e,t){return Fn(e.value)!==Fn(t.value)||qn(e.value)||qn(t.value)?_B.newValue(Nn):"EQ"===kB(e.value,t.value)?_B.newValue(An):_B.newValue({booleanValue:kn(e.value,t.value)<0})}}class ac extends nc{constructor(e){super(e),this.expr=e}Fr(e,t){return Fn(e.value)!==Fn(t.value)||qn(e.value)||qn(t.value)?_B.newValue(Nn):_B.newValue({booleanValue:kn(e.value,t.value)>0})}}class Bc extends nc{constructor(e){super(e),this.expr=e}Fr(e,t){return Fn(e.value)!==Fn(t.value)||qn(e.value)||qn(t.value)?_B.newValue(Nn):"EQ"===kB(e.value,t.value)?_B.newValue(An):_B.newValue({booleanValue:kn(e.value,t.value)>0})}}class cc{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class uc{constructor(e){this.expr=e}evaluate(e,t){dt(1===this.expr.params.length,216);const n=TB(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return _B.gr();case"ARRAY":{const e=n.value.arrayValue?.values??[];return _B.newValue({arrayValue:{values:[...e].reverse()}})}default:return _B.mr()}}}class lc{constructor(e){this.expr=e}evaluate(e,t){return dt(2===this.expr.params.length,52884),new KB(new Ka("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class hc{constructor(e){this.expr=e}evaluate(e,t){dt(2===this.expr.params.length,1392);let n=!1;const r=TB(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":n=!0;break;default:return _B.mr()}const s=TB(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return _B.mr()}if(n)return _B.gr();const i=s.value?.arrayValue?.values??[],o=r.value?.arrayValue?.values??[];for(const a of i){let e=!1;n=!1;for(const t of o){switch(Kn(a)&&Kn(t)?"EQ":kB(a,t)){case"EQ":e=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Ct(44613,{value:t,search:a})}if(e)break}if(!e)return _B.newValue(Nn)}return _B.newValue(An)}}class Cc{constructor(e){this.expr=e}evaluate(e,t){dt(2===this.expr.params.length,2680);let n=!1;const r=TB(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":n=!0;break;default:return _B.mr()}const s=TB(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return _B.mr()}if(n)return _B.gr();const i=s.value?.arrayValue?.values??[],o=r.value?.arrayValue?.values??[];for(const a of o)for(const e of i)switch(Kn(a)&&Kn(e)?"EQ":kB(a,e)){case"EQ":return _B.newValue(An);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Ct(60403,{value:a,search:e})}return n?_B.gr():_B.newValue(Nn)}}class pc{constructor(e){this.expr=e}evaluate(e,t){dt(1===this.expr.params.length,38605);const n=TB(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return _B.gr();case"ARRAY":return _B.newValue({integerValue:`${n.value?.arrayValue?.values?.length??0}`});default:return _B.mr()}}}class dc{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class fc{constructor(e){this.expr=e}evaluate(e,t){dt(1===this.expr.params.length,1508);const n=TB(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return _B.gr();case"BYTES":{const e=n.value?.bytesValue;if("string"==typeof e){const t=nn.fromBase64String(e).toUint8Array();return t.reverse(),_B.newValue({bytesValue:nn.fromUint8Array(t).toBase64()})}return _B.newValue({bytesValue:new Uint8Array(e).reverse()})}case"STRING":{const e=n.value?.stringValue,t=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(e),r=Array.from(t,e=>e.segment).reverse();return _B.newValue({stringValue:r.join("")})}default:return _B.mr()}}}class gc{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class mc{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Ec{constructor(e){this.expr=e}evaluate(e,t){dt(1===this.expr.params.length,19400);const n=TB(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return _B.gr();case"STRING":{const e=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.codePointAt(n);if(void 0===r)return;if(r<=65535)if(r>=55296&&r<=57343)if(r<=56319){const r=e.codePointAt(n+1);void 0!==r&&r>=56320&&r<=57343?(t+=1,n++):t+=1}else t+=1;else t+=1;else{if(!(r<=1114111))return;t+=1,n++}}return t}(n.value.stringValue);return void 0===e?_B.mr():_B.newValue({integerValue:e})}default:return _B.mr()}}}class Dc{constructor(e){this.expr=e}evaluate(e,t){dt(1===this.expr.params.length,8486);const n=TB(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BYTES":{const e=n.value?.bytesValue;return"string"==typeof e?_B.newValue({integerValue:nn.fromBase64String(e).toUint8Array().length}):_B.newValue({integerValue:new Uint8Array(e).length})}case"STRING":{const e=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.codePointAt(n);if(void 0===r)return;if(r>=55296&&r<=57343){if(!(r<=56319))return;{const r=e.codePointAt(n+1);if(void 0===r||!(r>=56320&&r<=57343))return;t+=4,n++}}else if(r<=127)t+=1;else if(r<=2047)t+=2;else if(r<=65535)t+=3;else{if(!(r<=1114111))return;t+=4,n++}}return t}(n.value?.stringValue);return void 0===e?_B.mr():_B.newValue({integerValue:e})}case"NULL":return _B.gr();default:return _B.mr()}}}class yc{constructor(e){this.expr=e}evaluate(e,t){dt(2===this.expr.params.length,39773,`${this.expr.name}() function should have exactly two parameters`);let n=!1;const r=TB(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":break;case"NULL":n=!0;break;default:return _B.mr()}const s=TB(this.expr.params[1]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":n=!0;break;default:return _B.mr()}return n?_B.gr():this.Or(r.value?.stringValue,s.value?.stringValue)}}class wc extends yc{Or(e,t){try{const n=function(e){let t="";for(let n=0;n<e.length;n++){const r=e.charAt(n);switch(r){case"_":t+=".";break;case"%":t+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":t+="\\"+r;break;default:t+=r}}return"^"+t+"$"}(t),r=st.compile(n);return _B.newValue({booleanValue:r.matches(e)})}catch(e){return lt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${e}`),_B.mr()}}}class _c extends yc{Or(e,t){try{const n=st.compile(t);return _B.newValue({booleanValue:n.test(e)})}catch(e){return lt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),_B.mr()}}}class vc extends yc{Or(e,t){try{return _B.newValue({booleanValue:st.compile(t).matches(e)})}catch(e){return lt(`Invalid regex pattern found in regex_match: ${t}, returning error`),_B.mr()}}}class Ic extends yc{Or(e,t){return _B.newValue({booleanValue:e.includes(t)})}}class Tc extends yc{Or(e,t){return _B.newValue({booleanValue:e.startsWith(t)})}}class bc extends yc{Or(e,t){return _B.newValue({booleanValue:e.endsWith(t)})}}class Sc{constructor(e){this.expr=e}evaluate(e,t){dt(1===this.expr.params.length,29079);const n=TB(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return _B.newValue({stringValue:n.value?.stringValue?.toLowerCase()});case"NULL":return _B.gr();default:return _B.mr()}}}class Oc{constructor(e){this.expr=e}evaluate(e,t){dt(1===this.expr.params.length,60487);const n=TB(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return _B.newValue({stringValue:n.value?.stringValue?.toUpperCase()});case"NULL":return _B.gr();default:return _B.mr()}}}class Ac{constructor(e){this.expr=e}evaluate(e,t){dt(1===this.expr.params.length,28544);const n=TB(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return _B.newValue({stringValue:n.value?.stringValue?.trim()});case"NULL":return _B.gr();default:return _B.mr()}}}class Nc{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(n=>TB(n).evaluate(e,t));let r="",s=!1;for(const i of n)switch(i.type){case"STRING":r+=i.value.stringValue;break;case"NULL":s=!0;break;default:return _B.mr()}return s?_B.gr():_B.newValue({stringValue:r})}}class Fc{constructor(e){this.expr=e}evaluate(e,t){dt(2===this.expr.params.length,4483);const n=TB(this.expr.params[0]).evaluate(e,t);switch(n.type){case"UNSET":return _B.pr();case"MAP":break;default:return _B.mr()}const r=TB(this.expr.params[1]).evaluate(e,t);if("STRING"!==r.type)return _B.mr();const s=n.value?.mapValue?.fields?.[r.value?.stringValue];return void 0===s?_B.pr():_B.newValue(s)}}class Lc{constructor(e){this.expr=e}evaluate(e,t){dt(2===this.expr.params.length,25231,`${this.expr.name}() function should have exactly 2 params`);let n=!1;const r=TB(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":break;case"NULL":n=!0;break;default:return _B.mr()}const s=TB(this.expr.params[1]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":n=!0;break;default:return _B.mr()}if(n)return _B.gr();const i=$n(r.value),o=$n(s.value);if(void 0===i||void 0===o||i.values?.length!==o.values?.length)return _B.mr();const a=this.Mr(i,o);return void 0===a||isNaN(a)?_B.mr():_B.newValue({doubleValue:a})}}class Rc extends Lc{Mr(e,t){const n=e?.values??[],r=t?.values??[];if(0===n.length)return;let s=0,i=0,o=0;for(let B=0;B<n.length;B++){if(!Jn(n[B])||!Jn(r[B]))return;const e=AB(n[B]),t=AB(r[B]);s+=e*t,i+=e*e,o+=t*t}const a=Math.sqrt(i)*Math.sqrt(o);return 0!==a?1-Math.max(-1,Math.min(1,s/a)):void 0}}class kc extends Lc{Mr(e,t){const n=e?.values??[],r=t?.values??[];if(0===n.length)return 0;let s=0;for(let i=0;i<n.length;i++){if(!Jn(n[i])||!Jn(r[i]))return;s+=AB(n[i])*AB(r[i])}return s}}class Pc extends Lc{Mr(e,t){const n=e?.values??[],r=t?.values??[];if(0===n.length)return 0;let s=0;for(let i=0;i<n.length;i++){if(!Jn(n[i])||!Jn(r[i]))return;const e=AB(n[i]),t=AB(r[i]);s+=Math.pow(e-t,2)}return Math.sqrt(s)}}class xc{constructor(e){this.expr=e}evaluate(e,t){dt(1===this.expr.params.length,39044);const n=TB(this.expr.params[0]).evaluate(e,t);switch(n.type){case"VECTOR":{const e=$n(n.value);return _B.newValue({integerValue:e?.values?.length??0})}case"NULL":return _B.gr();default:return _B.mr()}}}const Mc=BigInt(-62135596800),Gc=BigInt(253402300799),Hc=BigInt(1e3),Uc=BigInt(1e6),Vc=Mc*Hc,Jc=Gc*Hc+BigInt(999),jc=Mc*Uc,Kc=Gc*Uc+BigInt(999999);function qc(e){return e>=jc&&e<=Kc}function zc(e){return e>=Mc&&e<=Gc}function Qc(e,t){const n=BigInt(e);return!(n<Mc||n>Gc)&&!(t<0||t>=1e9)&&(n!==Mc||0===t)&&!(n===Gc&&t>999999999)}function $c(e,t){return t<0?{seconds:e-1,nanos:t+1e9}:{seconds:e,nanos:t}}function Wc(e){return BigInt(e.seconds)*Uc+BigInt(Math.trunc(e.nanoseconds/1e3))}class Yc{constructor(e){this.expr=e}evaluate(e,t){dt(1===this.expr.params.length,49262,`${this.expr.name}() function should have exactly one parameter`);const n=TB(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return this.toTimestamp(BigInt(n.value.integerValue));case"NULL":return _B.gr();default:return _B.mr()}}}class Xc extends Yc{toTimestamp(e){if(!qc(e))return _B.mr();let t=Number(e/Uc),n=Number(e%Uc*BigInt(1e3));const r=$c(t,n);return t=r.seconds,n=r.nanos,Qc(t,n)?_B.newValue({timestampValue:{seconds:t,nanos:n}}):_B.mr()}}class Zc extends Yc{toTimestamp(e){if(!function(e){return e>=Vc&&e<=Jc}(e))return _B.mr();let t=Number(e/Hc),n=Number(e%Hc*BigInt(1e6));const r=$c(t,n);return t=r.seconds,n=r.nanos,Qc(t,n)?_B.newValue({timestampValue:{seconds:t,nanos:n}}):_B.mr()}}class eu extends Yc{toTimestamp(e){if(!zc(e))return _B.mr();const t=Number(e);return _B.newValue({timestampValue:{seconds:t,nanos:0}})}}class tu{constructor(e){this.expr=e}evaluate(e,t){dt(1===this.expr.params.length,1265,`${this.expr.name}() function should have exactly one parameter`);const n=TB(this.expr.params[0]).evaluate(e,t);switch(n.type){case"TIMESTAMP":break;case"NULL":return _B.gr();default:return _B.mr()}const r=yi(n.value.timestampValue);return Qc(r.seconds,r.nanoseconds)?this.Nr(r):_B.mr()}}class nu extends tu{Nr(e){const t=Wc(e);return qc(t)?_B.newValue({integerValue:`${t.toString()}`}):_B.mr()}}class ru extends tu{Nr(e){const t=Wc(e),n=t/BigInt(1e3),r=t%BigInt(1e3);return n>BigInt(0)||r===BigInt(0)?_B.newValue({integerValue:n.toString()}):_B.newValue({integerValue:(n-BigInt(1)).toString()})}}class su extends tu{Nr(e){const t=BigInt(e.seconds);return zc(t)?_B.newValue({integerValue:t.toString()}):_B.mr()}}class iu{constructor(e){this.expr=e}evaluate(e,t){dt(3===this.expr.params.length,2775,`${this.expr.name}() function should have exactly 3 parameters`);let n=!1;const r=TB(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":n=!0;break;default:return _B.mr()}const s=TB(this.expr.params[1]).evaluate(e,t);let i;switch(s.type){case"STRING":if(i=function(e){switch(e){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(s.value.stringValue),void 0===i)return _B.mr();break;case"NULL":n=!0;break;default:return _B.mr()}const o=TB(this.expr.params[2]).evaluate(e,t);switch(o.type){case"INT":break;case"NULL":n=!0;break;default:return _B.mr()}if(n)return _B.gr();const a=BigInt(o.value.integerValue);let B;try{switch(i){case"microsecond":B=a;break;case"millisecond":B=a*BigInt(1e3);break;case"second":B=a*BigInt(1e6);break;case"minute":B=a*BigInt(6e7);break;case"hour":B=a*BigInt(36e8);break;case"day":B=a*BigInt(864e8);break;default:return _B.mr()}if("microsecond"!==i&&a!==BigInt(0)&&B/a!==BigInt(this.Lr(i)))return _B.mr()}catch(e){return lt(`Error during timestamp arithmetic: ${e}`),_B.mr()}const c=yi(r.value.timestampValue);if(!Qc(c.seconds,c.nanoseconds))return _B.mr();const u=Wc(c),l=this.Br(u,B);if(!qc(l))return _B.mr();const h=Number(l/Uc),C=l%Uc,p=Number((C<0?C+Uc:C)*BigInt(1e3)),d=C<0?h-1:h;return Qc(d,p)?_B.newValue({timestampValue:{seconds:d,nanos:p}}):_B.mr()}Lr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class ou extends iu{Br(e,t){return e+t}}class au extends iu{Br(e,t){return e-t}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(e){if((e=IB(e))instanceof Ga)return`fld(${e.fieldName})`;if(e instanceof Va)return`cst(${function(e){return null===e?"null":"number"==typeof e?e.toString():"string"==typeof e?`"${e}"`:e instanceof ha?`ref(${e.path})`:e instanceof fa?`vec(${JSON.stringify(e)})`:JSON.stringify(e)}(e.value)})`;if(e instanceof Ka)return`fn(${e.name},[${e.params.map(Bu).join(",")}])`;if("ListOfExpressions"===e.expressionType)return`list([${e.cr.map(Bu).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(e,null,2)}`)}function cu(e){if(e instanceof nB)return`${e._name}(${uu(e.fields)})`;if(e instanceof rB){let t=`${e._name}(${uu(e.accumulators)})`;return e.groups.size>0&&(t+=`grouping(${uu(e.groups)})`),t}if(e instanceof sB)return`${e._name}(${uu(e.groups)})`;if(e instanceof iB)return`${e._name}(${e.hr})`;if(e instanceof oB)return`${e._name}(${e.collectionId})`;if(e instanceof aB)return`${e._name}()`;if(e instanceof BB)return`${e._name}(${e.Tr.sort()})`;if(e instanceof cB)return`${e._name}(${Bu(e.condition)})`;if(e instanceof uB)return`${e._name}(${e.limit})`;if(e instanceof CB)return`${e._name}(${function(e){return e.map(e=>`${Bu(e.expr)}${e.direction}`).join(",")}(e.orderings)})`;throw new Error(`Unrecognized stage ${e._name}`)}function uu(e){return`${Array.from(e.entries()).sort().map(([e,t])=>`${e}=${Bu(t)}`).join(",")}`}function lu(e){return e.stages.map(e=>cu(e)).join("|")}function hu(e,t){return lu(e)===lu(t)}function Cu(e){return e instanceof gB}function pu(e){return Cu(e)?lu(e):Os(e)}function du(e){return Cu(e)?lu(e):function(e){return`${ps(Is(e))}|lt:${e.limitType}`}(e)}function fu(e,t){return e instanceof gB&&t instanceof gB?hu(e,t):!(e instanceof gB&&!(t instanceof gB)||!(e instanceof gB)&&t instanceof gB)&&Ss(e,t)}function gu(e){return fs(e)?lu(e):ps(e)}function mu(e,t){return e instanceof gB&&t instanceof gB?hu(e,t):!(e instanceof gB&&!(t instanceof gB)||!(e instanceof gB)&&t instanceof gB)&&ds(e,t)}function Eu(e,t){const n=function(e){let t=!1;const n=[];for(const r of e)if(r instanceof CB)if(t=!0,r.orderings.some(e=>e.expr instanceof Ga&&e.expr.fieldName===Ft))n.push(r);else{const e=r.orderings.map(e=>e);e.push(Ha(Ft).ascending()),n.push(new CB(e,{}))}else r instanceof uB?(t||(n.push(new CB([Ha(Ft).ascending()],{})),t=!0),n.push(r)):n.push(r);return t||n.push(new CB([Ha(Ft).ascending()],{})),n}(e.stages);if(e.userDataReader){const t=e.userDataReader.createContext(3,"toCorePipeline");n.forEach(e=>e._readUserData(t))}return new gB(e.userDataReader.serializer,n,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Ir(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Tr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Tr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Ks();return this.mutations.forEach(r=>{const s=e.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=t.has(r.key)?null:o;const a=vr(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(ss.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),$s())}isEqual(e){return this.batchId===e.batchId&&vt(this.mutations,e.mutations,(e,t)=>Sr(e,t))&&vt(this.baseMutations,e.baseMutations,(e,t)=>Sr(e,t))}}class yu{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){dt(e.mutations.length===n.length,58842,{Ur:e.mutations.length,kr:n.length});let r=function(){return zs}();const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new yu(e,t,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="";function _u(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Iu(t)),t=vu(e.get(n),t);return Iu(t)}function vu(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const t=e.charAt(s);switch(t){case"\0":n+="";break;case wu:n+="";break;default:n+=t}}return n}function Iu(e){return e+wu+""}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tu="remoteDocuments",bu="owner",Su="mutationQueues",Ou="mutations";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="documentMutations",Nu="remoteDocumentsV14",Fu="remoteDocumentGlobal",Lu="targets",Ru="targetDocuments",ku="targetGlobal",Pu="collectionParents",xu="clientMetadata",Mu="bundles",Gu="namedQueries",Hu="indexConfiguration",Uu="indexState",Vu="indexEntries",Ju="documentOverlays",ju="globals",Ku=[Su,Ou,Au,Tu,Lu,bu,ku,Ru,xu,Fu,Pu,Mu,Gu],qu=[Su,Ou,Au,Nu,Lu,bu,ku,Ru,xu,Fu,Pu,Mu,Gu,Ju],zu=qu,Qu=[...zu,Hu,Uu,Vu];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $u{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t,n,r,s=ss.min(),i=ss.min(),o=nn.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Wu(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wu(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e){this.$r=e}}function Xu(e){const t=Hi({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?bs(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zu{constructor(){}ei(e,t){this.ti(e,t),t.ni()}ti(e,t){if("nullValue"in e)this.ri(t,5);else if("booleanValue"in e)this.ri(t,10),t.ii(e.booleanValue?1:0);else if("integerValue"in e)this.ri(t,15),t.ii(on(e.integerValue));else if("doubleValue"in e){const n=on(e.doubleValue);isNaN(n)?this.ri(t,13):(this.ri(t,15),yn(n)?t.ii(0):t.ii(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ri(t,20),"string"==typeof n&&(n=sn(n)),t.si(`${n.seconds||""}`),t.ii(n.nanos||0)}else if("stringValue"in e)this._i(e.stringValue,t),this.oi(t);else if("bytesValue"in e)this.ri(t,30),t.ai(an(e.bytesValue)),this.oi(t);else if("referenceValue"in e)this.ui(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ri(t,45),t.ii(n.latitude||0),t.ii(n.longitude||0)}else"mapValue"in e?Yn(e)?this.ri(t,Number.MAX_SAFE_INTEGER):Qn(e)?this.ci(e.mapValue,t):(this.li(e.mapValue,t),this.oi(t)):"arrayValue"in e?(this.Ei(e.arrayValue,t),this.oi(t)):Ct(19022,{hi:e})}_i(e,t){this.ri(t,25),this.Ti(e,t)}Ti(e,t){t.si(e)}li(e,t){const n=e.fields||{};this.ri(t,55);for(const r of Object.keys(n))this._i(r,t),this.ti(n[r],t)}ci(e,t){const n=e.fields||{};this.ri(t,53);const r=Sn,s=n[r].arrayValue?.values?.length||0;this.ri(t,15),t.ii(on(s)),this._i(r,t),this.ti(n[r],t)}Ei(e,t){const n=e.values||[];this.ri(t,50);for(const r of n)this.ti(r,t)}ui(e,t){this.ri(t,37),Vt.fromName(e).path.forEach(e=>{this.ri(t,60),this.Ti(e,t)})}ri(e,t){e.ii(t)}oi(e){e.ii(2)}}Zu.Pi=new Zu;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class el{constructor(){this.Zi=new tl}addToCollectionParentIndex(e,t){return this.Zi.add(t),Wo.resolve()}getCollectionParents(e,t){return Wo.resolve(this.Zi.getEntries(t))}addFieldIndex(e,t){return Wo.resolve()}deleteFieldIndex(e,t){return Wo.resolve()}deleteAllFieldIndexes(e){return Wo.resolve()}createTargetIndexes(e,t){return Wo.resolve()}getDocumentsMatchingTarget(e,t){return Wo.resolve(null)}getIndexType(e,t){return Wo.resolve(0)}getFieldIndexes(e,t){return Wo.resolve([])}getNextCollectionGroupToUpdate(e){return Wo.resolve(null)}getMinOffset(e,t){return Wo.resolve(us.min())}getMinOffsetFromCollectionGroup(e,t){return Wo.resolve(us.min())}updateCollectionGroup(e,t,n){return Wo.resolve()}updateIndexEntries(e,t){return Wo.resolve()}}class tl{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new St(Rt.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new St(Rt.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nl{constructor(e){this.ys=e}next(){return this.ys+=2,this.ys}static ws(){return new nl(0)}static bs(){return new nl(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Copyright 2024 Google LLC* @license
function rl(e,t){let n=t;for(const r of e.stages)n=ol({serializer:e.serializer,serverTimestampBehavior:e.listenOptions?.serverTimestampBehavior},r,n);return n}function sl(e,t){return rl(e,[t]).length>0}function il(e,t){return Cu(e)?sl(e,t):As(e,t)}function ol(e,t,n){if(t instanceof iB)return function(e,t,n){return n.filter(e=>e.isFoundDocument()&&`/${e.key.getCollectionPath().canonicalString()}`===t.hr)}(0,t,n);if(t instanceof cB)return function(e,t,n){return n.filter(n=>{const r=vB(TB(t.condition).evaluate(e,n));return void 0!==r&&Ln(r,An)})}(e,t,n);if(t instanceof oB)return function(e,t,n){return n.filter(e=>e.isFoundDocument()&&e.key.getCollectionPath().lastSegment()===t.collectionId)}(0,t,n);if(t instanceof aB)return function(e,t,n){return n.filter(e=>e.isFoundDocument())}(0,0,n);if(t instanceof BB)return function(e,t,n){return n.filter(e=>e.isFoundDocument()&&t.Pr.has(e.key.path.toStringWithLeadingSlash()))}(0,t,n);if(t instanceof uB)return function(e,t,n){return n.slice(0,t.limit)}(0,t,n);if(t instanceof CB)return function(e,t,n){const r=t.orderings.map(e=>({Ms:TB(e.expr),direction:e.direction}));return[...n].sort((t,n)=>{for(const{Ms:s,direction:i}of r){const r=vB(s.evaluate(e,t)),o=vB(s.evaluate(e,n)),a=kn(r??On,o??On);if(0!==a)return"ascending"===i?a:-a}return 0})}(e,t,n);throw new Error(`Unknown stage: ${t._name}`)}function al(e){const t=function(e){for(let t=e.stages.length-1;t>=0;t--){const n=e.stages[t];if(n instanceof CB)return n.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(e);return(n,r)=>{for(const s of t){const t=vB(TB(s.expr).evaluate({serializer:e.serializer},n)),i=vB(TB(s.expr).evaluate({serializer:e.serializer},r)),o=kn(t||On,i||On);if(0!==o)return"ascending"===s.direction?o:-o}return 0}}function Bl(e){for(let t=e.stages.length-1;t>=0;t--){const n=e.stages[t];if(n instanceof uB)return{limit:n.limit}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(){this.changes=new Ms(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,is.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Wo.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&Tr(n.mutation,e,xt.empty(),en.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,$s()).next(()=>t))}getLocalViewOfDocuments(e,t,n=$s()){const r=js();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=Vs();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=js();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,$s()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let s=Hs();const i=qs(),o=function(){return qs()}();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Ar)?s=s.insert(t.key,t):void 0!==o?(i.set(t.key,o.mutation.getFieldMask()),Tr(o.mutation,t,o.mutation.getFieldMask(),en.now())):i.set(t.key,xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>o.set(e,new ul(t,i.get(e)??null))),o))}recalculateAndSaveOverlays(e,t){const n=qs();let r=new It((e,t)=>e-t),s=$s();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const s of e)s.keys().forEach(e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||xt.empty();o=s.applyToLocalView(i,o),n.set(e,o);const a=(r.get(s.batchId)||$s()).add(e);r=r.insert(s.batchId,a)})}).next(()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,B=r.value,c=Ks();B.forEach(e=>{if(!s.has(e)){const r=vr(t.get(e),n.get(e));null!==r&&c.set(e,r),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,a,c))}return Wo.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return Cu(t)?this.getDocumentsMatchingPipeline(e,t,n,r):ws(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_s(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):Wo.resolve(js());let o=os,a=s;return i.next(t=>Wo.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?Wo.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,a,t,$s())).next(e=>({batchId:o,changes:Js(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Vt(t)).next(e=>{let t=Vs();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const s=t.collectionGroup;let i=Vs();return this.indexManager.getCollectionParents(e,s).next(o=>Wo.forEach(o,o=>{const a=function(e,t){return new ms(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(s));return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,r))).next(e=>this.retrieveMatchingLocalDocuments(s,e,e=>As(t,e)))}getDocumentsMatchingPipeline(e,t,n,r){if("collection_group"===mB(t)){const s=DB(t);let i=Vs();return this.indexManager.getCollectionParents(e,s).next(o=>Wo.forEach(o,o=>{const a=function(e,t){const n=e.stages.map(e=>e instanceof oB?new iB(t.canonicalString(),{}):e);return new gB(e.serializer,n)}(t,o.child(s));return this.getDocumentsMatchingPipeline(e,a,n,r).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}{let s;return this.getOverlaysForPipeline(e,t,n.largestBatchId).next(i=>{switch(s=i,mB(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,r);case"documents":let i=$s();for(const e of wB(t))i=i.add(Vt.fromPath(e));return this.remoteDocumentCache.getEntries(e,i);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new Nt("invalid-argument",`Invalid pipeline source to execute offline: ${lu(t)}`)}}).next(e=>this.retrieveMatchingLocalDocuments(s,e,e=>sl(t,e)))}}retrieveMatchingLocalDocuments(e,t,n){e.forEach((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,is.newInvalidDocument(r)))});let r=Vs();return t.forEach((t,s)=>{const i=e.get(t);void 0!==i&&Tr(i.mutation,s,xt.empty(),en.now()),n(s)&&(r=r.insert(t,s))}),r}getOverlaysForPipeline(e,t,n){switch(mB(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,Rt.fromString(EB(t)),n);case"collection_group":throw new Nt("invalid-argument",`Unexpected collection group pipeline: ${lu(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,wB(t).map(e=>Vt.fromPath(e)));case"database":return this.documentOverlayCache.getAllOverlays(e,n);default:throw new Nt("invalid-argument",`Failed to get overlays for pipeline: ${lu(t)}`)}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this.serializer=e,this.Qs=new Map,this.Ws=new Map}getBundleMetadata(e,t){return Wo.resolve(this.Qs.get(t))}saveBundleMetadata(e,t){return this.Qs.set(t.id,function(e){return{id:e.id,version:e.version,createTime:vi(e.createTime)}}(t)),Wo.resolve()}getNamedQuery(e,t){return Wo.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,function(e){return{name:e.name,query:Xu(e.bundledQuery),readTime:vi(e.readTime)}}(t)),Wo.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.overlays=new It(Vt.comparator),this.Gs=new Map}getOverlay(e,t){return Wo.resolve(this.overlays.get(t))}getOverlays(e,t){const n=js();return Wo.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}getAllOverlays(e,t){const n=js();return this.overlays.forEach((e,r)=>{r.largestBatchId>t&&n.set(e,r)}),Wo.resolve(n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.Zr(e,t,r)}),Wo.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Gs.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Gs.delete(n)),Wo.resolve()}getOverlaysForCollection(e,t,n){const r=js(),s=t.length+1,i=new Vt(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Wo.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new It((e,t)=>e-t);const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=js(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=js(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((e,t)=>o.set(e,t)),o.size()>=r)break;return Wo.resolve(o)}Zr(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Gs.get(r.largestBatchId).delete(n.key);this.Gs.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new $u(t,n));let s=this.Gs.get(t);void 0===s&&(s=$s(),this.Gs.set(t,s)),this.Gs.set(t,s.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.sessionToken=nn.EMPTY_BYTE_STRING}getSessionToken(e){return Wo.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Wo.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.zs=new St(fl.js),this.Hs=new St(fl.Js)}isEmpty(){return this.zs.isEmpty()}addReference(e,t){const n=new fl(e,t);this.zs=this.zs.add(n),this.Hs=this.Hs.add(n)}Ys(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Zs(new fl(e,t))}Xs(e,t){e.forEach(e=>this.removeReference(e,t))}e_(e){const t=new Vt(new Rt([])),n=new fl(t,e),r=new fl(t,e+1),s=[];return this.Hs.forEachInRange([n,r],e=>{this.Zs(e),s.push(e.key)}),s}t_(){this.zs.forEach(e=>this.Zs(e))}Zs(e){this.zs=this.zs.delete(e),this.Hs=this.Hs.delete(e)}n_(e){const t=new Vt(new Rt([])),n=new fl(t,e),r=new fl(t,e+1);let s=$s();return this.Hs.forEachInRange([n,r],e=>{s=s.add(e.key)}),s}containsKey(e){const t=new fl(e,0),n=this.zs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class fl{constructor(e,t){this.key=e,this.r_=t}static js(e,t){return Vt.comparator(e.key,t.key)||Et(e.r_,t.r_)}static Js(e,t){return Et(e.r_,t.r_)||Vt.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Gr=1,this.i_=new St(fl.js)}checkEmpty(e){return Wo.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.Gr;this.Gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Du(s,t,n,r);this.mutationQueue.push(i);for(const o of r)this.i_=this.i_.add(new fl(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Wo.resolve(i)}lookupMutationBatch(e,t){return Wo.resolve(this.s_(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.__(n),s=r<0?0:r;return Wo.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Wo.resolve(0===this.mutationQueue.length?En:this.Gr-1)}getAllMutationBatches(e){return Wo.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new fl(t,0),r=new fl(t,Number.POSITIVE_INFINITY),s=[];return this.i_.forEachInRange([n,r],e=>{const t=this.s_(e.r_);s.push(t)}),Wo.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new St(Et);return t.forEach(e=>{const t=new fl(e,0),r=new fl(e,Number.POSITIVE_INFINITY);this.i_.forEachInRange([t,r],e=>{n=n.add(e.r_)})}),Wo.resolve(this.o_(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;Vt.isDocumentKey(s)||(s=s.child(""));const i=new fl(new Vt(s),0);let o=new St(Et);return this.i_.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.r_)),!0)},i),Wo.resolve(this.o_(o))}o_(e){const t=[];return e.forEach(e=>{const n=this.s_(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){dt(0===this.a_(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.i_;return Wo.forEach(t.mutations,r=>{const s=new fl(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.i_=n})}Hr(e){}containsKey(e,t){const n=new fl(t,0),r=this.i_.firstAfterOrEqual(n);return Wo.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Wo.resolve()}a_(e,t){return this.__(e)}__(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}s_(e){const t=this.__(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e){this.u_=e,this.docs=function(){return new It(Vt.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.u_(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Wo.resolve(n?n.document.mutableCopy():is.newInvalidDocument(t))}getEntries(e,t){let n=Hs();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():is.newInvalidDocument(e))}),Wo.resolve(n)}getAllEntries(e){let t=Hs();return this.docs.forEach((e,n)=>{t=t.insert(e,n.document)}),Wo.resolve(t)}getDocumentsMatchingQuery(e,t,n,r){let s,i;Cu(t)?(s=Rt.fromString(EB(t)),i=e=>sl(t,e)):(s=t.path,i=e=>As(t,e));let o=Hs();const a=new Vt(s.child("__id-9223372036854775808__")),B=this.docs.getIteratorFrom(a);for(;B.hasNext();){const{key:e,value:{document:t}}=B.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||ls(cs(t),n)<=0||(r.has(t.key)||i(t))&&(o=o.insert(t.key,t.mutableCopy()))}return Wo.resolve(o)}getAllFromCollectionGroup(e,t,n,r){Ct(9500)}c_(e,t){return Wo.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new El(this)}getSize(e){return Wo.resolve(this.size)}}class El extends cl{constructor(e){super(),this.$s=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.$s.addEntry(e,r)):this.$s.removeEntry(n)}),Wo.waitFor(t)}getFromCache(e,t){return this.$s.getEntry(e,t)}getAllFromCache(e,t){return this.$s.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e){this.persistence=e,this.l_=new Ms(e=>gu(e),mu),this.lastRemoteSnapshotVersion=ss.min(),this.highestTargetId=0,this.E_=0,this.h_=new dl,this.targetCount=0,this.T_=nl.ws()}forEachTarget(e,t){return this.l_.forEach((e,n)=>t(n)),Wo.resolve()}getLastRemoteSnapshotVersion(e){return Wo.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Wo.resolve(this.E_)}allocateTargetId(e){return this.highestTargetId=this.T_.next(),Wo.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.E_&&(this.E_=t),Wo.resolve()}Ds(e){this.l_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.T_=new nl(t),this.highestTargetId=t),e.sequenceNumber>this.E_&&(this.E_=e.sequenceNumber)}addTargetData(e,t){return this.Ds(t),this.targetCount+=1,Wo.resolve()}updateTargetData(e,t){return this.Ds(t),Wo.resolve()}removeTargetData(e,t){return this.l_.delete(t.target),this.h_.e_(t.targetId),this.targetCount-=1,Wo.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.l_.forEach((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.l_.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),Wo.waitFor(s).next(()=>r)}getTargetCount(e){return Wo.resolve(this.targetCount)}getTargetData(e,t){const n=this.l_.get(t)||null;return Wo.resolve(n)}addMatchingKeys(e,t,n){return this.h_.Ys(t,n),Wo.resolve()}removeMatchingKeys(e,t,n){this.h_.Xs(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(t=>{s.push(r.markPotentiallyOrphaned(e,t))}),Wo.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.h_.e_(t),Wo.resolve()}getMatchingKeysForTargetId(e,t){const n=this.h_.n_(t);return Wo.resolve(n)}containsKey(e,t){return Wo.resolve(this.h_.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t){this.P_={},this.overlays={},this.I_=new qo(0),this.R_=!1,this.R_=!0,this.A_=new pl,this.referenceDelegate=e(this),this.V_=new Dl(this),this.indexManager=new el,this.remoteDocumentCache=function(e){return new ml(e)}(e=>this.referenceDelegate.d_(e)),this.serializer=new Yu(t),this.f_=new hl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Cl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.P_[e.toKey()];return n||(n=new gl(t,this.referenceDelegate),this.P_[e.toKey()]=n),n}getGlobalsCache(){return this.A_}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.f_}runTransaction(e,t,n){ct("MemoryPersistence","Starting transaction:",e);const r=new wl(this.I_.next());return this.referenceDelegate.m_(),n(r).next(e=>this.referenceDelegate.p_(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}g_(e,t){return Wo.or(Object.values(this.P_).map(n=>()=>n.containsKey(e,t)))}}class wl extends Qo{constructor(e){super(),this.currentSequenceNumber=e}}class _l{constructor(e){this.persistence=e,this.y_=new dl,this.w_=null}static b_(e){return new _l(e)}get S_(){if(this.w_)return this.w_;throw Ct(60996)}addReference(e,t,n){return this.y_.addReference(n,t),this.S_.delete(n.toString()),Wo.resolve()}removeReference(e,t,n){return this.y_.removeReference(n,t),this.S_.add(n.toString()),Wo.resolve()}markPotentiallyOrphaned(e,t){return this.S_.add(t.toString()),Wo.resolve()}removeTarget(e,t){this.y_.e_(t.targetId).forEach(e=>this.S_.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.S_.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}m_(){this.w_=new Set}p_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Wo.forEach(this.S_,n=>{const r=Vt.fromPath(n);return this.v_(e,r).next(e=>{e||t.removeEntry(r,ss.min())})}).next(()=>(this.w_=null,t.apply(e)))}updateLimboDocument(e,t){return this.v_(e,t).next(e=>{e?this.S_.delete(t.toString()):this.S_.add(t.toString())})}d_(e){return 0}v_(e,t){return Wo.or([()=>Wo.resolve(this.y_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.g_(e,t)])}}class vl{constructor(e,t){this.persistence=e,this.D_=new Ms(e=>_u(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=ia(this,t)}static b_(e,t){return new vl(e,t)}m_(){}p_(e){return Wo.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}ir(e){const t=this.Cs(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}Cs(e){let t=0;return this.sr(e,e=>{t++}).next(()=>t)}sr(e,t){return Wo.forEach(this.D_,(n,r)=>this.Os(e,n,r).next(e=>e?Wo.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.c_(e,r=>this.Os(e,r,t).next(e=>{e||(n++,s.removeEntry(r,ss.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.D_.set(t,e.currentSequenceNumber),Wo.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.D_.set(n,e.currentSequenceNumber),Wo.resolve()}removeReference(e,t,n){return this.D_.set(n,e.currentSequenceNumber),Wo.resolve()}updateLimboDocument(e,t){return this.D_.set(t,e.currentSequenceNumber),Wo.resolve()}d_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Hn(e.data.value)),t}Os(e,t,n){return Wo.or([()=>this.persistence.g_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.D_.get(t);return Wo.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Il{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Vo=n,this.fo=r}static mo(e,t){let n=$s(),r=$s();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Il(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(e,t){return Vt.comparator(e.key,t.key)}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(){this.po=!1,this.yo=!1,this.wo=100,this.bo=function(){return(0,a.nr)()?8:Yo((0,a.ZQ)())>0?6:4}()}initialize(e,t){this.So=e,this.indexManager=t,this.po=!0}getDocumentsMatchingQuery(e,t,n,r){const s={result:null};return this.vo(e,t).next(e=>{s.result=e}).next(()=>{if(!s.result)return this.Do(e,t,r,n).next(e=>{s.result=e})}).next(()=>{if(s.result)return;const n=new bl;return this.xo(e,t,n).next(r=>{if(s.result=r,this.yo)return this.Co(e,t,n,r.size)})}).next(()=>s.result)}Co(e,t,n,r){return Cu(t)?Wo.resolve():n.documentReadCount<this.wo?(Bt()<=m.$b.DEBUG&&ct("QueryEngine","SDK will not create cache indexes for query:",Os(t),"since it only creates cache indexes for collection contains","more than or equal to",this.wo,"documents"),Wo.resolve()):(Bt()<=m.$b.DEBUG&&ct("QueryEngine","Query:",Os(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.bo*r?(Bt()<=m.$b.DEBUG&&ct("QueryEngine","The SDK decides to create cache indexes for query:",Os(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Is(t))):Wo.resolve())}vo(e,t){if(Cu(t))return Wo.resolve(null);let n=t;if(ys(n))return Wo.resolve(null);let r=Is(n);return this.indexManager.getIndexType(e,r).next(t=>0===t?null:(null!==n.limit&&1===t&&(n=bs(n,null,"F"),r=Is(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(t=>{const s=$s(...t);return this.So.getDocuments(e,s).next(t=>this.indexManager.getMinOffset(e,r).next(r=>{const i=this.Fo(n,t);return this.Oo(n,i,s,r.readTime)?this.vo(e,bs(n,null,"F")):this.Mo(e,i,n,r)}))})))}Do(e,t,n,r){return(Cu(t)?function(e){for(const t of e.stages){if(t instanceof uB||t instanceof lB)return!1;if(t instanceof cB){if(t.condition instanceof za&&"exists"===t.condition._expr.name&&t.condition._expr.params[0]instanceof Ga&&t.condition._expr.params[0].fieldName===Ft)continue;return!1}}return!0}(t):ys(t))||r.isEqual(ss.min())?Wo.resolve(null):this.So.getDocuments(e,n).next(s=>{const i=this.Fo(t,s);return this.Oo(t,i,n,r)?Wo.resolve(null):(Bt()<=m.$b.DEBUG&&ct("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),pu(t)),this.Mo(e,i,t,Bs(r,os)).next(e=>e))})}Fo(e,t){let n,r;return Cu(e)?(n=new St(Tl),r=t=>sl(e,t)):(n=new St(Ns(e)),r=t=>As(e,t)),t.forEach((e,t)=>{r(t)&&(n=n.add(t))}),n}Oo(e,t,n,r){if(Cu(e))return function(e){return e.stages.some(e=>e instanceof uB||e instanceof lB)}(e);if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}xo(e,t,n){return Bt()<=m.$b.DEBUG&&ct("QueryEngine","Using full collection scan to execute query:",pu(t)),this.So.getDocumentsMatchingQuery(e,t,us.min(),n)}Mo(e,t,n,r){return this.So.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="LocalStore",Al=3e8;class Nl{constructor(e,t,n,r){this.persistence=e,this.No=t,this.serializer=r,this.Lo=new It(Et),this.Bo=new Ms(e=>gu(e),mu),this.Uo=new Map,this.ko=e.getRemoteDocumentCache(),this.V_=e.getTargetCache(),this.f_=e.getBundleCache(),this.qo(n)}qo(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ll(this.ko,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ko.setIndexManager(this.indexManager),this.No.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Lo))}}function Fl(e,t,n,r){return new Nl(e,t,n,r)}async function Ll(e,t){const n=ft(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(s=>(r=s,n.qo(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const s=[],i=[];let o=$s();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({$o:e,removedBatchIds:s,addedBatchIds:i}))})})}function Rl(e,t){const n=ft(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),s=n.ko.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=Wo.resolve();return i.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const i=n.docVersions.get(e);dt(null!==i,48541),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,s))}(n,e,t,s).next(()=>s.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=$s();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}function kl(e){const t=ft(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.V_.getLastRemoteSnapshotVersion(e))}function Pl(e,t){const n=ft(e),r=t.snapshotVersion;let s=n.Lo;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const i=n.ko.newChangeBuffer({trackRemovals:!0});s=n.Lo;const o=[];t.targetChanges.forEach((i,a)=>{const B=s.get(a);if(!B)return;o.push(n.V_.removeMatchingKeys(e,i.removedDocuments,a).next(()=>n.V_.addMatchingKeys(e,i.addedDocuments,a)));let c=B.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(nn.EMPTY_BYTE_STRING,ss.min()).withLastLimboFreeSnapshotVersion(ss.min()):i.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(i.resumeToken,r)),s=s.insert(a,c),function(e,t,n){if(0===e.resumeToken.approximateByteSize())return!0;const r=t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds();if(r>=Al)return!0;const s=n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size;return s>0}(B,c,i)&&o.push(n.V_.updateTargetData(e,c))});let a=Hs(),B=$s();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(xl(e,i,t.documentUpdates).next(e=>{a=e.Ko,B=e.Qo})),!r.isEqual(ss.min())){const t=n.V_.getLastRemoteSnapshotVersion(e).next(t=>n.V_.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return Wo.waitFor(o).next(()=>i.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,B)).next(()=>a)}).then(e=>(n.Lo=s,e))}function xl(e,t,n){let r=$s(),s=$s();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=Hs();return n.forEach((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(ss.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):ct(Ol,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),{Ko:r,Qo:s}})}function Ml(e,t){const n=ft(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=En),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function Gl(e,t){const n=ft(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.V_.getTargetData(e,t).next(s=>s?(r=s,Wo.resolve(r)):n.V_.allocateTargetId(e).next(s=>(r=new Wu(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.V_.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.Lo.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Lo=n.Lo.insert(e.targetId,e),n.Bo.set(t,e.targetId)),e})}async function Hl(e,t,n){const r=ft(e),s=r.Lo.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,e=>r.persistence.referenceDelegate.removeTarget(e,s))}catch(e){if(!Xo(e))throw e;ct(Ol,`Failed to update sequence numbers for target ${t}: ${e}`)}r.Lo=r.Lo.remove(t),r.Bo.delete(s.target)}function Ul(e,t,n){const r=ft(e);let s=ss.min(),i=$s();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=ft(e),s=r.Bo.get(n);return void 0!==s?Wo.resolve(r.Lo.get(s)):r.V_.getTargetData(t,n)}(r,e,Cu(t)?t:Is(t)).next(t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.V_.getMatchingKeysForTargetId(e,t.targetId).next(e=>{i=e})}).next(()=>r.No.getDocumentsMatchingQuery(e,t,n?s:ss.min(),n?i:$s())).next(e=>(Vl(r,e),{documents:e,Wo:i})))}function Vl(e,t){t.forEach((t,n)=>{const r=n.key.getCollectionGroup(),s=e.Uo.get(r)||ss.min();n.readTime.compareTo(s)>0&&e.Uo.set(r,n.readTime)})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jl{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Yo=0,this.Zo=null,this.Xo=!0}ea(){0===this.Yo&&(this.ta("Unknown"),this.Zo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Zo=null,this.na("Backend didn't respond within 10 seconds."),this.ta("Offline"),Promise.resolve())))}ra(e){"Online"===this.state?this.ta("Unknown"):(this.Yo++,this.Yo>=1&&(this.ia(),this.na(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ta("Offline")))}set(e){this.ia(),this.Yo=0,"Online"===e&&(this.Xo=!1),this.ta(e)}ta(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}na(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Xo?(ut(t),this.Xo=!1):ct("OnlineStateTracker",t)}ia(){null!==this.Zo&&(this.Zo.cancel(),this.Zo=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="RemoteStore";class Kl{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.sa=[],this._a=new Map,this.oa=new Map,this.aa=new Map,this.ua=new nl(1e3),this.ca=new nl(1001),this.la=new Set,this.Ea=[],this.ha=s,this.ha.Qe(e=>{n.enqueueAndForget(async()=>{th(this)&&(ct(jl,"Restarting streams for network reachability change."),await async function(e){const t=ft(e);t.la.add(4),await zl(t),t.Ta.set("Unknown"),t.la.delete(4),await ql(t)}(this))})}),this.Ta=new Jl(n,r)}}async function ql(e){if(th(e))for(const t of e.Ea)await t(!0)}async function zl(e){for(const t of e.Ea)await t(!1)}function Ql(e,t){return e.oa.get(t)||void 0}function $l(e,t){const n=ft(e),r=Ql(n,t.targetId);if(void 0!==r&&n._a.has(r))return;const s=function(e,t){const n=Ql(e,t);void 0!==n&&e.aa.delete(n);const r=function(e,t){return t%2!=0?e.ca.next():e.ua.next()}(e,t);return e.oa.set(t,r),e.aa.set(r,t),r}(n,t.targetId);ct(jl,"remoteStoreListen mapping SDK target ID to remote",t.targetId,s);const i=new Wu(t.target,s,t.purpose,t.sequenceNumber,t.snapshotVersion,t.lastLimboFreeSnapshotVersion,t.resumeToken);n._a.set(s,i),eh(n)?Zl(n):Dh(n).Yt()&&Yl(n,i)}function Wl(e,t){const n=ft(e),r=Dh(n),s=Ql(n,t);ct(jl,"remoteStoreUnlisten removing mapping of SDK target ID to remote",t,s),n._a.delete(s),n.oa.delete(t),n.aa.delete(s),r.Yt()&&Xl(n,s),0===n._a.size&&(r.Yt()?r.en():th(n)&&n.Ta.set("Unknown"))}function Yl(e,t){if(e.Pa.J(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ss.min())>0){const n=e.aa.get(t.targetId);if(void 0===n)return void ct(jl,"SDK target ID not found for remote ID: "+t.targetId);const r=e.remoteSyncer.getRemoteKeysForTarget(n).size;t=t.withExpectedCount(r)}Dh(e).Pn(t)}function Xl(e,t){e.Pa.J(t),Dh(e).In(t)}function Zl(e){e.Pa=new hi({getRemoteKeysForTarget:t=>{const n=e.aa.get(t);return void 0!==n?e.remoteSyncer.getRemoteKeysForTarget(n):$s()},ye:t=>e._a.get(t)||null,Ve:()=>e.datastore.serializer.databaseId}),Dh(e).start(),e.Ta.ea()}function eh(e){return th(e)&&!Dh(e).Jt()&&e._a.size>0}function th(e){return 0===ft(e).la.size}function nh(e){e.Pa=void 0}async function rh(e){e.Ta.set("Online")}async function sh(e){e._a.forEach((t,n)=>{Yl(e,t)})}async function ih(e,t){nh(e),eh(e)?(e.Ta.ra(t),Zl(e)):e.Ta.set("Unknown")}async function oh(e,t,n){if(e.Ta.set("Online"),t instanceof ci&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds){if(e._a.has(r)){const t=e.aa.get(r);void 0!==t&&(await e.remoteSyncer.rejectListen(t,n),e.oa.delete(t),e.aa.delete(r)),e._a.delete(r)}e.Pa.removeTarget(r)}}(e,t)}catch(n){ct(jl,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ah(e,n)}else if(t instanceof ai?e.Pa._e(t):t instanceof Bi?e.Pa.he(t):e.Pa.ue(t),!n.isEqual(ss.min()))try{const t=await kl(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Pa.fe(t);n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e._a.get(r);s&&e._a.set(r,s.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e._a.get(t);if(!r)return;e._a.set(t,r.withResumeToken(nn.EMPTY_BYTE_STRING,r.snapshotVersion)),Xl(e,t);const s=new Wu(r.target,t,n,r.sequenceNumber);Yl(e,s)});const r=function(e,t){const n=new Map;t.targetChanges.forEach((t,r)=>{const s=e.aa.get(r);void 0!==s&&n.set(s,t)});let r=new It(Et);return t.targetMismatches.forEach((t,n)=>{const s=e.aa.get(t);void 0!==s&&(r=r.insert(s,n))}),new ii(t.snapshotVersion,n,r,t.documentUpdates,t.augmentedDocumentUpdates,t.resolvedLimboDocuments)}(e,n);return e.remoteSyncer.applyRemoteEvent(r)}(e,n)}catch(t){ct(jl,"Failed to raise snapshot:",t),await ah(e,t)}}async function ah(e,t,n){if(!Xo(t))throw t;e.la.add(1),await zl(e),e.Ta.set("Offline"),n||(n=()=>kl(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{ct(jl,"Retrying IndexedDB access"),await n(),e.la.delete(1),await ql(e)})}function Bh(e,t){return t().catch(n=>ah(e,n,t))}async function ch(e){const t=ft(e),n=yh(t);let r=t.sa.length>0?t.sa[t.sa.length-1].batchId:En;for(;uh(t);)try{const e=await Ml(t.localStore,r);if(null===e){0===t.sa.length&&n.en();break}r=e.batchId,lh(t,e)}catch(e){await ah(t,e)}hh(t)&&Ch(t)}function uh(e){return th(e)&&e.sa.length<10}function lh(e,t){e.sa.push(t);const n=yh(e);n.Yt()&&n.Rn&&n.An(t.mutations)}function hh(e){return th(e)&&!yh(e).Jt()&&e.sa.length>0}function Ch(e){yh(e).start()}async function ph(e){yh(e).fn()}async function dh(e){const t=yh(e);for(const n of e.sa)t.An(n.mutations)}async function fh(e,t,n){const r=e.sa.shift(),s=yu.from(r,t,n);await Bh(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await ch(e)}async function gh(e,t){t&&yh(e).Rn&&await async function(e,t){if(function(e){return Ps(e)&&e!==At.ABORTED}(t.code)){const n=e.sa.shift();yh(e).Xt(),await Bh(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await ch(e)}}(e,t),hh(e)&&Ch(e)}async function mh(e,t){const n=ft(e);n.asyncQueue.verifyOperationInProgress(),ct(jl,"RemoteStore received new credentials");const r=th(n);n.la.add(3),await zl(n),r&&n.Ta.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.la.delete(3),await ql(n)}async function Eh(e,t){const n=ft(e);t?(n.la.delete(2),await ql(n)):t||(n.la.add(2),await zl(n),n.Ta.set("Unknown"))}function Dh(e){return e.Ia||(e.Ia=function(e,t,n){const r=ft(e);return r.pn(),new ko(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{ct:rh.bind(null,e),Et:sh.bind(null,e),Tt:ih.bind(null,e),Tn:oh.bind(null,e)}),e.Ea.push(async t=>{t?(e.Ia.Xt(),eh(e)?Zl(e):e.Ta.set("Unknown")):(await e.Ia.stop(),nh(e))})),e.Ia}function yh(e){return e.Ra||(e.Ra=function(e,t,n){const r=ft(e);return r.pn(),new Po(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{ct:()=>Promise.resolve(),Et:ph.bind(null,e),Tt:gh.bind(null,e),Vn:dh.bind(null,e),dn:fh.bind(null,e)}),e.Ea.push(async t=>{t?(e.Ra.Xt(),await ch(e)):(await e.Ra.stop(),e.sa.length>0&&(ct(jl,`Stopping write stream with ${e.sa.length} pending writes`),e.sa=[]))})),e.Ra
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class wh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Aa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Aa(this.observer.error,e):ut("Uncaught Error in snapshot listener:",e.toString()))}Va(){this.muted=!0}Aa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Bo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new _h(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Nt(At.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vh(e,t){if(ut("AsyncQueue",`${t}: ${e}`),Xo(e))return new Nt(At.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this.activeTargetIds=Ys()}Ba(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ua(e){this.activeTargetIds=this.activeTargetIds.delete(e)}La(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Th{constructor(){this.fu=new Ih,this.mu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.fu.Ba(e),this.mu[e]||"not-current"}updateQueryState(e,t,n){this.mu[e]=t}removeLocalQueryTarget(e){this.fu.Ua(e)}isLocalQueryTarget(e){return this.fu.activeTargetIds.has(e)}clearQueryState(e){delete this.mu[e]}getAllActiveQueryTargets(){return this.fu.activeTargetIds}isActiveQueryTarget(e){return this.fu.activeTargetIds.has(e)}start(){return this.fu=new Ih,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{static emptySet(e){return new Sh(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Vt.comparator(t.key,n.key):(e,t)=>Vt.comparator(e.key,t.key),this.keyedMap=Vs(),this.sortedSet=new It(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Sh))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Sh;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(){this.pu=new It(Vt.comparator)}track(e){const t=e.doc.key,n=this.pu.get(t);n?0!==e.type&&3===n.type?this.pu=this.pu.insert(t,e):3===e.type&&1!==n.type?this.pu=this.pu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.pu=this.pu.remove(t):1===e.type&&2===n.type?this.pu=this.pu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):Ct(63341,{we:e,gu:n}):this.pu=this.pu.insert(t,e)}yu(){const e=[];return this.pu.inorderTraversal((t,n)=>{e.push(n)}),e}}class Ah{constructor(e,t,n,r,s,i,o,a,B){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=B}static fromInitialDocuments(e,t,n,r,s){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new Ah(e,t,Sh.emptySet(t),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this.wu=void 0,this.bu=[]}Su(){return this.bu.some(e=>e.vu())}}class Fh{constructor(){this.queries=Lh(),this.onlineState="Unknown",this.Du=new Set}terminate(){!function(e,t){const n=ft(e),r=n.queries;n.queries=Lh(),r.forEach((e,n)=>{for(const r of n.bu)r.onError(t)})}(this,new Nt(At.ABORTED,"Firestore shutting down"))}}function Lh(){return new Ms(e=>du(e),fu)}async function Rh(e,t){const n=ft(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.Su()&&t.vu()&&(r=2):(i=new Nh,r=t.vu()?0:1);try{switch(r){case 0:i.wu=await n.onListen(s,!0);break;case 1:i.wu=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(e){const n=vh(e,`Initialization of query '${Cu(t.query)?lu(t.query):Os(t.query)}' failed`);return void t.onError(n)}n.queries.set(s,i),i.bu.push(t),t.xu(n.onlineState),i.wu&&t.Cu(i.wu)&&Mh(n)}async function kh(e,t){const n=ft(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const e=i.bu.indexOf(t);e>=0&&(i.bu.splice(e,1),0===i.bu.length?s=t.vu()?0:1:!i.Su()&&t.vu()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ph(e,t){const n=ft(e);let r=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.bu)e.Cu(s)&&(r=!0);t.wu=s}}r&&Mh(n)}function xh(e,t,n){const r=ft(e),s=r.queries.get(t);if(s)for(const i of s.bu)i.onError(n);r.queries.delete(t)}function Mh(e){e.Du.forEach(e=>{e.next()})}var Gh;!function(e){e.Default="default",e.Cache="cache"}(Gh||(Gh={}));class Hh{constructor(e,t,n){this.query=e,this.Fu=t,this.Ou=!1,this.Mu=null,this.onlineState="Unknown",this.options=n||{}}Cu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Ah(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ou?this.Nu(e)&&(this.Fu.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.Bu(e),t=!0),this.Mu=e,t}onError(e){this.Fu.error(e)}xu(e){this.onlineState=e;let t=!1;return this.Mu&&!this.Ou&&this.Lu(this.Mu,e)&&(this.Bu(this.Mu),t=!0),t}Lu(e,t){if(!e.fromCache)return!0;if(!this.vu())return!0;const n="Offline"!==t;return(!this.options.waitForSyncWhenOnline||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Nu(e){if(e.docChanges.length>0)return!0;const t=this.Mu&&this.Mu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Bu(e){e=Ah.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ou=!0,this.Fu.next(e)}vu(){return this.options.source!==Gh.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uh{constructor(e){this.key=e}}class Vh{constructor(e){this.key=e}}class Jh{constructor(e,t){this.query=e,this.zu=t,this.ju=null,this.hasCachedResults=!1,this.current=!1,this.Hu=$s(),this.mutatedKeys=$s(),this.Ju=Cu(e)?al(e):Ns(e),this.Yu=new Sh(this.Ju)}get Zu(){return this.zu}Xu(e,t){const n=t?t.ec:new Oh,r=t?t.Yu:this.Yu;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const[a,B]=this.tc(this.query,r);e.inorderTraversal((e,t)=>{const c=r.get(e),u=il(this.query,t)?t:null,l=!!c&&this.mutatedKeys.has(c.key),h=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let C=!1;c&&u?c.data.isEqual(u.data)?l!==h&&(n.track({type:3,doc:u}),C=!0):this.nc(c,u)||(n.track({type:2,doc:u}),C=!0,(a&&this.Ju(u,a)>0||B&&this.Ju(u,B)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),C=!0):c&&!u&&(n.track({type:1,doc:c}),C=!0,(a||B)&&(o=!0)),C&&(u?(i=i.add(u),s=h?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))});const c=this.rc(this.query);if(c)if(Cu(this.query)){const e=[];i.forEach(t=>e.push(t));const t=rl(this.query,e);let r=new Sh(al(this.query));for(const n of t)r=r.add(n);i.forEach(e=>{r.has(e.key)||(s=s.delete(e.key),n.track({type:1,doc:e}))}),i=r}else{const e=this.sc(this.query);for(;i.size>c;){const t="F"===e?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}}return{Yu:i,ec:n,Oo:o,mutatedKeys:s}}rc(e){return Cu(e)?Bl(e)?.limit:e.limit||void 0}sc(e){if(Cu(e)){const t=Bl(e);return t&&t.limit<0?"L":"F"}return e.limitType}tc(e,t){if(Cu(e)){const n=Bl(e)?.limit;return[t.size===n?t.last():null,null]}return["F"===e.limitType&&t.size===this.rc(this.query)?t.last():null,"L"===e.limitType&&t.size===this.rc(this.query)?t.first():null]}nc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const s=this.Yu;this.Yu=e.Yu,this.mutatedKeys=e.mutatedKeys;const i=e.ec.yu();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ct(20277,{we:e})}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Ju(e.doc,t.doc)),this._c(n),r=r??!1;const o=t&&!r?this.oc():[],a=0===this.Hu.size&&this.current&&!r?1:0,B=a!==this.ju;return this.ju=a,0!==i.length||B?{snapshot:new Ah(this.query,e.Yu,s,i,e.mutatedKeys,0===a,B,!1,!!n&&n.resumeToken.approximateByteSize()>0),ac:o}:{ac:o}}xu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Yu:this.Yu,ec:new Oh,mutatedKeys:this.mutatedKeys,Oo:!1},!1)):{ac:[]}}uc(e){return!this.zu.has(e)&&!!this.Yu.has(e)&&!this.Yu.get(e).hasLocalMutations}_c(e){e&&(e.addedDocuments.forEach(e=>this.zu=this.zu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.zu=this.zu.delete(e)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Hu;this.Hu=$s(),this.Yu.forEach(e=>{this.uc(e.key)&&(this.Hu=this.Hu.add(e.key))});const t=[];return e.forEach(e=>{this.Hu.has(e)||t.push(new Vh(e))}),this.Hu.forEach(n=>{e.has(n)||t.push(new Uh(n))}),t}cc(e){this.zu=e.Wo,this.Hu=$s();const t=this.Xu(e.documents);return this.applyChanges(t,!0)}lc(){return Ah.fromInitialDocuments(this.query,this.Yu,this.mutatedKeys,0===this.ju,this.hasCachedResults)}}const jh="SyncEngine";class Kh{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class qh{constructor(e){this.key=e,this.Ec=!1}}class zh{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.hc={},this.Tc=new Ms(e=>du(e),fu),this.Pc=new Map,this.Ic=new Set,this.Rc=new It(Vt.comparator),this.Ac=new Map,this.Vc=new dl,this.dc={},this.fc=new Map,this.mc=nl.bs(),this.onlineState="Unknown",this.gc=void 0}get isPrimaryClient(){return!0===this.gc}}async function Qh(e,t,n=!0){const r=fC(e);let s;const i=r.Tc.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lc()):s=await Wh(r,t,n,!0),s}async function $h(e,t){const n=fC(e);await Wh(n,t,!0,!1)}async function Wh(e,t,n,r){const s=await Gl(e.localStore,Cu(t)?t:Is(t)),i=s.targetId,o=e.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await Yh(e,t,i,"current"===o,s.resumeToken)),e.isPrimaryClient&&n&&$l(e.remoteStore,s),a}async function Yh(e,t,n,r,s){e.yc=(t,n,r)=>async function(e,t,n,r){let s=t.view.Xu(n);s.Oo&&(s=await Ul(e.localStore,t.query,!1).then(({documents:e})=>t.view.Xu(e,s)));const i=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(s,e.isPrimaryClient,i,o);return uC(e,t.targetId,a.ac),a.snapshot}(e,t,n,r);const i=await Ul(e.localStore,t,!0),o=new Jh(t,i.Wo),a=o.Xu(i.documents),B=oi.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,s),c=o.applyChanges(a,e.isPrimaryClient,B);uC(e,n,c.ac);const u=new Kh(t,n,o);return e.Tc.set(t,u),e.Pc.has(n)?e.Pc.get(n).push(t):e.Pc.set(n,[t]),c.snapshot}async function Xh(e,t,n){const r=ft(e),s=r.Tc.get(t),i=r.Pc.get(s.targetId);if(i.length>1)return r.Pc.set(s.targetId,i.filter(e=>!fu(e,t))),void r.Tc.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Hl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Wl(r.remoteStore,s.targetId),BC(r,s.targetId)}).catch($o)):(BC(r,s.targetId),await Hl(r.localStore,s.targetId,!0))}async function Zh(e,t){const n=ft(e),r=n.Tc.get(t),s=n.Pc.get(r.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Wl(n.remoteStore,r.targetId))}async function eC(e,t,n){const r=gC(e);try{const e=await function(e,t){const n=ft(e),r=en.now(),s=t.reduce((e,t)=>e.add(t.key),$s());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=Hs(),B=$s();return n.ko.getEntries(e,s).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(B=B.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(s=>{i=s;const o=[];for(const e of t){const t=br(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new Ar(e.key,t,Zn(t.value.mapValue),yr.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(i,B);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:Js(i)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.dc[e.currentUser.toKey()];r||(r=new It(Et)),r=r.insert(t,n),e.dc[e.currentUser.toKey()]=r}(r,e.batchId,n),await CC(r,e.changes),await ch(r.remoteStore)}catch(e){const t=vh(e,"Failed to persist write");n.reject(t)}}async function tC(e,t){const n=ft(e);try{const e=await Pl(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Ac.get(t);r&&(dt(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.Ec=!0:e.modifiedDocuments.size>0?dt(r.Ec,14607):e.removedDocuments.size>0&&(dt(r.Ec,42227),r.Ec=!1))}),await CC(n,e,t)}catch(e){await $o(e)}}function nC(e,t,n){const r=ft(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Tc.forEach((n,r)=>{const s=r.view.xu(t);s.snapshot&&e.push(s.snapshot)}),function(e,t){const n=ft(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const s of n.bu)s.xu(t)&&(r=!0)}),r&&Mh(n)}(r.eventManager,t),e.length&&r.hc.Tn(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function rC(e,t,n){const r=ft(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ac.get(t),i=s&&s.key;if(i){let e=new It(Vt.comparator);e=e.insert(i,is.newNoDocument(i,ss.min()));const n=$s().add(i),s=new ii(ss.min(),new Map,new It(Et),e,Hs(),n);await tC(r,s),r.Rc=r.Rc.remove(i),r.Ac.delete(t),hC(r)}else await Hl(r.localStore,t,!1).then(()=>BC(r,t,n)).catch($o)}async function sC(e,t){const n=ft(e),r=t.batch.batchId;try{const e=await Rl(n.localStore,t);aC(n,r,null),oC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await CC(n,e)}catch(e){await $o(e)}}async function iC(e,t,n){const r=ft(e);try{const e=await function(e,t){const n=ft(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(dt(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);aC(r,t,n),oC(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await CC(r,e)}catch(n){await $o(n)}}function oC(e,t){(e.fc.get(t)||[]).forEach(e=>{e.resolve()}),e.fc.delete(t)}function aC(e,t,n){const r=ft(e);let s=r.dc[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.dc[r.currentUser.toKey()]=s}}function BC(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Pc.get(t))e.Tc.delete(r),n&&e.hc.wc(r,n);e.Pc.delete(t),e.isPrimaryClient&&e.Vc.e_(t).forEach(t=>{e.Vc.containsKey(t)||cC(e,t)})}function cC(e,t){e.Ic.delete(t.path.canonicalString());const n=e.Rc.get(t);null!==n&&(Wl(e.remoteStore,n),e.Rc=e.Rc.remove(t),e.Ac.delete(n),hC(e))}function uC(e,t,n){for(const r of n)r instanceof Uh?(e.Vc.addReference(r.key,t),lC(e,r)):r instanceof Vh?(ct(jh,"Document no longer in limbo: "+r.key),e.Vc.removeReference(r.key,t),e.Vc.containsKey(r.key)||cC(e,r.key)):Ct(19791,{bc:r})}function lC(e,t){const n=t.key,r=n.path.canonicalString();e.Rc.get(n)||e.Ic.has(r)||(ct(jh,"New document in limbo: "+n),e.Ic.add(r),hC(e))}function hC(e){for(;e.Ic.size>0&&e.Rc.size<e.maxConcurrentLimboResolutions;){const t=e.Ic.values().next().value;e.Ic.delete(t);const n=new Vt(Rt.fromString(t)),r=e.mc.next();e.Ac.set(r,new qh(n)),e.Rc=e.Rc.insert(n,r),$l(e.remoteStore,new Wu(Is(Ds(n.path)),r,"TargetPurposeLimboResolution",qo.wn))}}async function CC(e,t,n){const r=ft(e),s=[],i=[],o=[];r.Tc.isEmpty()||(r.Tc.forEach((e,a)=>{o.push(r.yc(a,t,n).then(e=>{if((e||n)&&r.isPrimaryClient){const t=e?!e.fromCache:n?.targetChanges.get(a.targetId)?.current;r.sharedClientState.updateQueryState(a.targetId,t?"current":"not-current")}if(e){s.push(e);const t=Il.mo(a.targetId,e);i.push(t)}}))}),await Promise.all(o),r.hc.Tn(s),await async function(e,t){const n=ft(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Wo.forEach(t,t=>Wo.forEach(t.Vo,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Wo.forEach(t.fo,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Xo(e))throw e;ct(Ol,"Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Lo.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.Lo=n.Lo.insert(e,s)}}}(r.localStore,i))}async function pC(e,t){const n=ft(e);if(!n.currentUser.isEqual(t)){ct(jh,"User change. New user:",t.toKey());const e=await Ll(n.localStore,t);n.currentUser=t,function(e,t){e.fc.forEach(e=>{e.forEach(e=>{e.reject(new Nt(At.CANCELLED,t))})}),e.fc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await CC(n,e.$o)}}function dC(e,t){const n=ft(e),r=n.Ac.get(t);if(r&&r.Ec)return $s().add(r.key);{let e=$s();const r=n.Pc.get(t);if(!r)return e;for(const t of r??[]){const r=n.Tc.get(t);e=e.unionWith(r.view.Zu)}return e}}function fC(e){const t=ft(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=tC.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=dC.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=rC.bind(null,t),t.hc.Tn=Ph.bind(null,t.eventManager),t.hc.wc=xh.bind(null,t.eventManager),t}function gC(e){const t=ft(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=sC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=iC.bind(null,t),t}class mC{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=to(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Dc(e),await this.persistence.start(),this.localStore=this.xc(e),this.gcScheduler=this.Cc(e,this.localStore),this.indexBackfillerScheduler=this.Fc(e,this.localStore)}Cc(e,t){return null}Fc(e,t){return null}xc(e){return Fl(this.persistence,new Sl,e.initialUser,this.serializer)}Dc(e){return new yl(_l.b_,this.serializer)}vc(e){return new Th}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mC.provider={build:()=>new mC};class EC extends mC{constructor(e){super(),this.cacheSizeBytes=e}Cc(e,t){dt(this.persistence.referenceDelegate instanceof vl,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new ra(n,e.asyncQueue,t)}Dc(e){const t=void 0!==this.cacheSizeBytes?Ko.withCacheSize(this.cacheSizeBytes):Ko.DEFAULT;return new yl(e=>vl.b_(e,t),this.serializer)}}class DC{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>nC(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=pC.bind(null,this.syncEngine),await Eh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Fh}()}createDatastore(e){const t=to(e.databaseInfo.databaseId),n=No(e.databaseInfo);return Go(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,s){return new Kl(e,t,n,r,s)}(this.localStore,this.datastore,e.asyncQueue,e=>nC(this.syncEngine,e,0),function(){return yo.Ye()?new yo:new Eo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */())}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new zh(e,t,n,r,s,i);return o&&(a.gc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){const t=ft(e);ct(jl,"RemoteStore shutting down."),t.la.add(5),await zl(t),t.ha.shutdown(),t.Ta.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}DC.provider={build:()=>new DC};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yC="FirestoreClient";class wC{constructor(e,t,n,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=ao.UNAUTHENTICATED,this.clientId=mt.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async e=>{ct(yC,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(ct(yC,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(Ra){const n=vh(Ra,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function _C(e,t){e.asyncQueue.verifyOperationInProgress(),ct(yC,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Ll(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function vC(e,t){e.asyncQueue.verifyOperationInProgress();const n=await IC(e);ct(yC,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>mh(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>mh(t.remoteStore,n)),e._onlineComponents=t}async function IC(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ct(yC,"Using user provided OfflineComponentProvider");try{await _C(e,e._uninitializedComponentsProvider._offline)}catch(Ra){const n=Ra;if(!function(e){return"FirebaseError"===e.name?e.code===At.FAILED_PRECONDITION||e.code===At.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(n))throw n;lt("Error using user provided cache. Falling back to memory cache: "+n),await _C(e,new mC)}}else ct(yC,"Using default OfflineComponentProvider"),await _C(e,new EC(void 0));return e._offlineComponents}async function TC(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ct(yC,"Using user provided OnlineComponentProvider"),await vC(e,e._uninitializedComponentsProvider._online)):(ct(yC,"Using default OnlineComponentProvider"),await vC(e,new DC))),e._onlineComponents}function bC(e){return TC(e).then(e=>e.syncEngine)}async function SC(e){const t=await TC(e),n=t.eventManager;return n.onListen=Qh.bind(null,t.syncEngine),n.onUnlisten=Xh.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=$h.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Zh.bind(null,t.syncEngine),n}function OC(e,t,n,r){const s=new wh(r),i=new Hh(t,s,n);return e.asyncQueue.enqueueAndForget(async()=>Rh(await SC(e),i)),()=>{s.Va(),e.asyncQueue.enqueueAndForget(async()=>kh(await SC(e),i))}}function AC(e,t,n={}){const r=new Bo;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,s){const i=new wh({next:n=>{i.Va(),t.enqueueAndForget(()=>kh(e,o)),n.fromCache&&"server"===r.source?s.reject(new Nt(At.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new Hh(n instanceof fB?Eu(n):n,i,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Rh(e,o)}(await SC(e),e.asyncQueue,t,n,r)),r.promise}function NC(e,t){const n=new Bo;return e.asyncQueue.enqueueAndForget(async()=>eC(await bC(e),t,n)),n.promise}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let FC=class{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ha(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new LC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(_a("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}},LC=class extends FC{data(){return super.data()}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{convertValue(e,t="none"){switch(Fn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return on(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(an(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ct(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Gt(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){const t=e.fields?.[Sn].arrayValue?.values?.map(e=>on(e.doubleValue));return new fa(t)}convertGeoPoint(e){return new oo(on(e.latitude),on(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Cn(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(pn(e));default:return null}}convertTimestamp(e){const t=sn(e);return new en(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Rt.fromString(e);dt(Yi(n),9688,{name:e});const r=new gn(n.get(1),n.get(3)),s=new Vt(n.popFirst(5));return r.isEqual(t)||ut(`A document reference to ${s} refers to a different database (${r.projectId}/${r.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kC="AsyncQueue";class PC{constructor(e=Promise.resolve()){this.$c=[],this.Kc=!1,this.Qc=[],this.Wc=null,this.Gc=!1,this.zc=!1,this.jc=[],this.Ht=new Fo(this,"async_queue_retry"),this.Hc=()=>{const e=bh();e&&ct(kC,"Visibility state changed to "+e.visibilityState),this.Ht.$t()},this.Jc=e;const t=bh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Yc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=bh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Yc(),this.Kc)return new Promise(()=>{});const t=new Bo;return this.Zc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$c.push(e),this.Xc()))}async Xc(){if(0!==this.$c.length){try{await this.$c[0](),this.$c.shift(),this.Ht.reset()}catch(Nt){if(!Xo(Nt))throw Nt;ct(kC,"Operation failed with retryable error: "+Nt)}this.$c.length>0&&this.Ht.kt(()=>this.Xc())}}Zc(e){const t=this.Jc.then(()=>(this.Gc=!0,e().catch(e=>{throw this.Wc=e,this.Gc=!1,ut("INTERNAL UNHANDLED ERROR: ",xC(e)),e}).then(e=>(this.Gc=!1,e))));return this.Jc=t,t}enqueueAfterDelay(e,t,n){this.Yc(),this.jc.indexOf(e)>-1&&(t=0);const r=_h.createAndSchedule(this,e,t,n,e=>this.el(e));return this.Qc.push(r),r}Yc(){this.Wc&&Ct(47125,{tl:xC(this.Wc)})}verifyOperationInProgress(){}async nl(){let e;do{e=this.Jc,await e}while(e!==this.Jc)}rl(e){for(const t of this.Qc)if(t.timerId===e)return!0;return!1}il(e){return this.nl().then(()=>{this.Qc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.Qc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.nl()})}sl(e){this.jc.push(e)}el(e){const t=this.Qc.indexOf(e);this.Qc.splice(t,1)}}function xC(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class MC extends ca{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new PC,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new PC(e),this._firestoreClient=void 0,await e}}}function GC(e,t){const n="object"==typeof e?e:(0,i.Sx)(),r="string"==typeof e?e:t||fn,s=(0,i.j6)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(0,a.yU)("firestore");e&&ua(s,...e)}return s}function HC(e){if(e._terminated)throw new Nt(At.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||UC(e),e._firestoreClient}function UC(e){const t=e._freezeSettings(),n=Vo(e._databaseId,e._app?.options.appId||"",e._persistenceKey,e._app?.options.apiKey,t);e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new wC(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(e){const t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class VC extends RC{constructor(e){super(),this.firestore=e}convertBytes(e){return new no(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ha(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jC extends FC{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new KC(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(_a("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Nt(At.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=jC._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}jC._jsonSchemaVersion="firestore/documentSnapshot/1.0",jC._jsonSchema={type:Wt("string",jC._jsonSchemaVersion),bundleSource:Wt("string","DocumentSnapshot"),bundleName:Wt("string"),bundle:Wt("string")};class KC extends jC{data(e={}){return super.data(e)}}class qC{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new JC(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new KC(this._firestore,this._userDataWriter,n.key,n,new JC(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Nt(At.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{Cu(e._snapshot.query)?al(e._snapshot.query):Ns(e.query._query);const r=new KC(e._firestore,e._userDataWriter,n.doc.key,n.doc,new JC(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new KC(e._firestore,e._userDataWriter,t.doc.key,t.doc,new JC(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:zC(t.type),doc:r,oldIndex:s,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Nt(At.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=qC._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=mt.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zC(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ct(61501,{type:e})}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
qC._jsonSchemaVersion="firestore/querySnapshot/1.0",qC._jsonSchema={type:Wt("string",qC._jsonSchemaVersion),bundleSource:Wt("string","QuerySnapshot"),bundleName:Wt("string"),bundle:Wt("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function QC(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Nt(At.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $C(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}function WC(e){e=$t(e,la);const t=$t(e.firestore,MC),n=HC(t),r=new VC(t);return QC(e._query),AC(n,e._query).then(n=>new qC(t,r,e,n))}function YC(e){return ZC($t(e.firestore,MC),[new Rr(e._key,yr.none())])}function XC(e,...t){e=(0,a.Ku)(e);let n={includeMetadataChanges:!1,source:"default"},r=0;"object"!=typeof t[r]||$C(t[r])||(n=t[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if($C(t[r])){const e=t[r];t[r]=e.next?.bind(e),t[r+1]=e.error?.bind(e),t[r+2]=e.complete?.bind(e)}let i,o,B;if(e instanceof ha)o=$t(e.firestore,MC),B=Ds(e._key.path),i={next:n=>{t[r]&&t[r](ep(o,e,n))},error:t[r+1],complete:t[r+2]};else{const n=$t(e,la);o=$t(n.firestore,MC),B=n._query;const s=new VC(o);i={next:e=>{t[r]&&t[r](new qC(o,s,n,e))},error:t[r+1],complete:t[r+2]},QC(e._query)}const c=HC(o);return OC(c,B,s,i)}function ZC(e,t){const n=HC(e);return NC(n,t)}function ep(e,t,n){const r=n.docs.get(t._key),s=new VC(e);return new jC(e,s,t._key,r,new JC(n.hasPendingWrites,n.fromCache),t.converter)}new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="@firebase/firestore",np="4.17.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(e,t=!0){ot(i.MF),(0,i.om)(new o.uA("firestore",(e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new MC(new ho(e.getProvider("auth-internal")),new go(s,e.getProvider("app-check-internal")),mn(s,n),s);return r={useFetchStreams:t,...r},i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(tp,np,e),(0,i.KO)(tp,np,"esm2020")}()}}]);
//# sourceMappingURL=chunk-vendors.258685ef.js.map