let Ie=[],nr=(n,e)=>{let t=[],r={get(){return r.lc||r.listen(()=>{})(),r.value},l:0,lc:0,listen(i,o){return r.lc=t.push(i,o||r.l)/2,()=>{let a=t.indexOf(i);~a&&(t.splice(a,2),--r.lc||r.off())}},notify(i){let o=!Ie.length;for(let a=0;a<t.length;a+=2)Ie.push(t[a],t[a+1],r.value,i);if(o){for(let a=0;a<Ie.length;a+=4){let l;for(let h=a+1;!l&&(h+=4)<Ie.length;)Ie[h]<Ie[a+1]&&(l=Ie.push(Ie[a],Ie[a+1],Ie[a+2],Ie[a+3]));l||Ie[a](Ie[a+2],Ie[a+3])}Ie.length=0}},off(){},set(i){r.value!==i&&(r.value=i,r.notify())},subscribe(i,o){let a=r.listen(i,o);return i(r.value),a},value:n};return r},hd=(n={})=>{let e=nr(n);return e.setKey=function(t,r){typeof r>"u"?t in e.value&&(e.value={...e.value},delete e.value[t],e.notify(t)):e.value[t]!==r&&(e.value={...e.value,[t]:r},e.notify(t))},e};const hl=nr("home"),dl=nr(!1),rt=document.getElementById("view-home"),it=document.getElementById("view-stats");document.getElementById("views-wrapper");let Ba="home";hl.subscribe(n=>{n!==Ba&&(n==="stats"?(rt.classList.remove("active"),rt.classList.add("slide-out-left"),it.classList.remove("hidden"),it.classList.add("active"),it.classList.add("slide-in-right"),setTimeout(()=>{rt.classList.add("hidden"),rt.classList.remove("slide-out-left"),it.classList.remove("slide-in-right")},300)):n==="home"&&(it.classList.remove("active"),it.classList.add("slide-out-right"),rt.classList.remove("hidden"),rt.classList.add("active"),rt.classList.add("slide-in-left"),setTimeout(()=>{it.classList.add("hidden"),it.classList.remove("slide-out-right"),rt.classList.remove("slide-in-left")},300)),Ba=n)});var ja={};/**
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
 */const fl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},dd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],l=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},pl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,l=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,p=o>>2,I=(o&3)<<4|l>>4;let R=(l&15)<<2|d>>6,S=d&63;h||(S=64,a||(R=64)),r.push(t[p],t[I],t[R],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(fl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):dd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const I=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||l==null||d==null||I==null)throw new fd;const R=o<<2|l>>4;if(r.push(R),d!==64){const S=l<<4&240|d>>2;if(r.push(S),I!==64){const k=d<<6&192|I;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pd=function(n){const e=fl(n);return pl.encodeByteArray(e,!0)},Zr=function(n){return pd(n).replace(/\./g,"")},ml=function(n){try{return pl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function md(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gd=()=>md().__FIREBASE_DEFAULTS__,_d=()=>{if(typeof process>"u"||typeof ja>"u")return;const n=ja.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ml(n[1]);return e&&JSON.parse(e)},_i=()=>{try{return gd()||_d()||yd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},gl=n=>{var e,t;return(t=(e=_i())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},vd=n=>{const e=gl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},_l=()=>{var n;return(n=_i())===null||n===void 0?void 0:n.config},yl=n=>{var e;return(e=_i())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Ed{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Td(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Zr(JSON.stringify(t)),Zr(JSON.stringify(a)),""].join(".")}/**
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
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Id(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function wd(){var n;const e=(n=_i())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ad(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Rd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Sd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pd(){const n=ve();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function bd(){return!wd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Cd(){try{return typeof indexedDB=="object"}catch{return!1}}function kd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const Dd="FirebaseError";class Xe extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Dd,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rr.prototype.create)}}class rr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?Vd(o,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Xe(i,l,r)}}function Vd(n,e){return n.replace(Nd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Nd=/\{\$([^}]+)}/g;function Od(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ei(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if($a(o)&&$a(a)){if(!ei(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function $a(n){return n!==null&&typeof n=="object"}/**
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
 */function ir(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Dn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Vn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ld(n,e){const t=new Md(n,e);return t.subscribe.bind(t)}class Md{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");xd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ns),i.error===void 0&&(i.error=ns),i.complete===void 0&&(i.complete=ns);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ns(){}/**
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
 */function Se(n){return n&&n._delegate?n._delegate:n}class bt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rt="[DEFAULT]";/**
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
 */class Fd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ed;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bd(e))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rt){return this.instances.has(e)}getOptions(e=Rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ud(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rt){return this.component?this.component.multipleInstances?e:Rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ud(n){return n===Rt?void 0:n}function Bd(n){return n.instantiationMode==="EAGER"}/**
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
 */class jd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Fd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const $d={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},qd=$.INFO,zd={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Hd=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=zd[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bs{constructor(e){this.name=e,this._logLevel=qd,this._logHandler=Hd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$d[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const Wd=(n,e)=>e.some(t=>n instanceof t);let qa,za;function Kd(){return qa||(qa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gd(){return za||(za=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vl=new WeakMap,gs=new WeakMap,El=new WeakMap,rs=new WeakMap,js=new WeakMap;function Qd(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(dt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&vl.set(t,n)}).catch(()=>{}),js.set(e,n),e}function Yd(n){if(gs.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});gs.set(n,e)}let _s={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return gs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||El.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return dt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Jd(n){_s=n(_s)}function Xd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(is(this),e,...t);return El.set(r,e.sort?e.sort():[e]),dt(r)}:Gd().includes(n)?function(...e){return n.apply(is(this),e),dt(vl.get(this))}:function(...e){return dt(n.apply(is(this),e))}}function Zd(n){return typeof n=="function"?Xd(n):(n instanceof IDBTransaction&&Yd(n),Wd(n,Kd())?new Proxy(n,_s):n)}function dt(n){if(n instanceof IDBRequest)return Qd(n);if(rs.has(n))return rs.get(n);const e=Zd(n);return e!==n&&(rs.set(n,e),js.set(e,n)),e}const is=n=>js.get(n);function ef(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),l=dt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(dt(a.result),h.oldVersion,h.newVersion,dt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const tf=["get","getKey","getAll","getAllKeys","count"],nf=["put","add","delete","clear"],ss=new Map;function Ha(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ss.get(e))return ss.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=nf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tf.includes(t)))return;const o=async function(a,...l){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&h.done]))[0]};return ss.set(e,o),o}Jd(n=>({...n,get:(e,t,r)=>Ha(e,t)||n.get(e,t,r),has:(e,t)=>!!Ha(e,t)||n.has(e,t)}));/**
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
 */class rf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function sf(n){const e=n.getComponent();return e?.type==="VERSION"}const ys="@firebase/app",Wa="0.10.13";/**
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
 */const Ge=new Bs("@firebase/app"),of="@firebase/app-compat",af="@firebase/analytics-compat",cf="@firebase/analytics",lf="@firebase/app-check-compat",uf="@firebase/app-check",hf="@firebase/auth",df="@firebase/auth-compat",ff="@firebase/database",pf="@firebase/data-connect",mf="@firebase/database-compat",gf="@firebase/functions",_f="@firebase/functions-compat",yf="@firebase/installations",vf="@firebase/installations-compat",Ef="@firebase/messaging",Tf="@firebase/messaging-compat",If="@firebase/performance",wf="@firebase/performance-compat",Af="@firebase/remote-config",Rf="@firebase/remote-config-compat",Sf="@firebase/storage",Pf="@firebase/storage-compat",bf="@firebase/firestore",Cf="@firebase/vertexai-preview",kf="@firebase/firestore-compat",Df="firebase",Vf="10.14.1";/**
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
 */const vs="[DEFAULT]",Nf={[ys]:"fire-core",[of]:"fire-core-compat",[cf]:"fire-analytics",[af]:"fire-analytics-compat",[uf]:"fire-app-check",[lf]:"fire-app-check-compat",[hf]:"fire-auth",[df]:"fire-auth-compat",[ff]:"fire-rtdb",[pf]:"fire-data-connect",[mf]:"fire-rtdb-compat",[gf]:"fire-fn",[_f]:"fire-fn-compat",[yf]:"fire-iid",[vf]:"fire-iid-compat",[Ef]:"fire-fcm",[Tf]:"fire-fcm-compat",[If]:"fire-perf",[wf]:"fire-perf-compat",[Af]:"fire-rc",[Rf]:"fire-rc-compat",[Sf]:"fire-gcs",[Pf]:"fire-gcs-compat",[bf]:"fire-fst",[kf]:"fire-fst-compat",[Cf]:"fire-vertex","fire-js":"fire-js",[Df]:"fire-js-all"};/**
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
 */const ti=new Map,Of=new Map,Es=new Map;function Ka(n,e){try{n.container.addComponent(e)}catch(t){Ge.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Xt(n){const e=n.name;if(Es.has(e))return Ge.debug(`There were multiple attempts to register component ${e}.`),!1;Es.set(e,n);for(const t of ti.values())Ka(t,n);for(const t of Of.values())Ka(t,n);return!0}function $s(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ve(n){return n.settings!==void 0}/**
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
 */const Lf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ft=new rr("app","Firebase",Lf);/**
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
 */class Mf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}/**
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
 */const an=Vf;function Tl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vs,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ft.create("bad-app-name",{appName:String(i)});if(t||(t=_l()),!t)throw ft.create("no-options");const o=ti.get(i);if(o){if(ei(t,o.options)&&ei(r,o.config))return o;throw ft.create("duplicate-app",{appName:i})}const a=new jd(i);for(const h of Es.values())a.addComponent(h);const l=new Mf(t,r,a);return ti.set(i,l),l}function Il(n=vs){const e=ti.get(n);if(!e&&n===vs&&_l())return Tl();if(!e)throw ft.create("no-app",{appName:n});return e}function pt(n,e,t){var r;let i=(r=Nf[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ge.warn(l.join(" "));return}Xt(new bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const xf="firebase-heartbeat-database",Ff=1,$n="firebase-heartbeat-store";let os=null;function wl(){return os||(os=ef(xf,Ff,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore($n)}catch(t){console.warn(t)}}}}).catch(n=>{throw ft.create("idb-open",{originalErrorMessage:n.message})})),os}async function Uf(n){try{const t=(await wl()).transaction($n),r=await t.objectStore($n).get(Al(n));return await t.done,r}catch(e){if(e instanceof Xe)Ge.warn(e.message);else{const t=ft.create("idb-get",{originalErrorMessage:e?.message});Ge.warn(t.message)}}}async function Ga(n,e){try{const r=(await wl()).transaction($n,"readwrite");await r.objectStore($n).put(e,Al(n)),await r.done}catch(t){if(t instanceof Xe)Ge.warn(t.message);else{const r=ft.create("idb-set",{originalErrorMessage:t?.message});Ge.warn(r.message)}}}function Al(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Bf=1024,jf=30*24*60*60*1e3;class $f{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Qa();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=jf}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ge.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qa(),{heartbeatsToSend:r,unsentEntries:i}=qf(this._heartbeatsCache.heartbeats),o=Zr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Ge.warn(t),""}}}function Qa(){return new Date().toISOString().substring(0,10)}function qf(n,e=Bf){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Ya(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ya(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class zf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cd()?kd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Uf(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ga(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ga(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ya(n){return Zr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Hf(n){Xt(new bt("platform-logger",e=>new rf(e),"PRIVATE")),Xt(new bt("heartbeat",e=>new $f(e),"PRIVATE")),pt(ys,Wa,n),pt(ys,Wa,"esm2017"),pt("fire-js","")}Hf("");function qs(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Rl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wf=Rl,Sl=new rr("auth","Firebase",Rl());/**
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
 */const ni=new Bs("@firebase/auth");function Kf(n,...e){ni.logLevel<=$.WARN&&ni.warn(`Auth (${an}): ${n}`,...e)}function zr(n,...e){ni.logLevel<=$.ERROR&&ni.error(`Auth (${an}): ${n}`,...e)}/**
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
 */function De(n,...e){throw zs(n,...e)}function Ne(n,...e){return zs(n,...e)}function Pl(n,e,t){const r=Object.assign(Object.assign({},Wf()),{[e]:t});return new rr("auth","Firebase",r).create(e,{appName:n.name})}function We(n){return Pl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zs(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Sl.create(n,...e)}function M(n,e,...t){if(!n)throw zs(e,...t)}function qe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw zr(e),new Error(e)}function Qe(n,e){n||qe(e)}/**
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
 */function Ts(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Gf(){return Ja()==="http:"||Ja()==="https:"}function Ja(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Qf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gf()||Rd()||"connection"in navigator)?navigator.onLine:!0}function Yf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class sr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Qe(t>e,"Short delay should be less than long delay!"),this.isMobile=Id()||Sd()}get(){return Qf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hs(n,e){Qe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class bl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Jf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Xf=new sr(3e4,6e4);function vt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Et(n,e,t,r,i={}){return Cl(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const l=ir(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:h},o);return Ad()||(d.referrerPolicy="no-referrer"),bl.fetch()(kl(n,n.config.apiHost,t,l),d)})}async function Cl(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jf),e);try{const i=new ep(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Lr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[h,d]=l.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Lr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw Lr(n,"user-disabled",a);const p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Pl(n,p,d);De(n,p)}}catch(i){if(i instanceof Xe)throw i;De(n,"network-request-failed",{message:String(i)})}}async function or(n,e,t,r,i={}){const o=await Et(n,e,t,r,i);return"mfaPendingCredential"in o&&De(n,"multi-factor-auth-required",{_serverResponse:o}),o}function kl(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Hs(n.config,i):`${n.config.apiScheme}://${i}`}function Zf(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ep{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ne(this.auth,"network-request-failed")),Xf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Lr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ne(n,e,r);return i.customData._tokenResponse=t,i}function Xa(n){return n!==void 0&&n.enterprise!==void 0}class tp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Zf(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function np(n,e){return Et(n,"GET","/v2/recaptchaConfig",vt(n,e))}/**
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
 */async function rp(n,e){return Et(n,"POST","/v1/accounts:delete",e)}async function Dl(n,e){return Et(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Mn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ip(n,e=!1){const t=Se(n),r=await t.getIdToken(e),i=Ws(r);M(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o?.sign_in_provider;return{claims:i,token:r,authTime:Mn(as(i.auth_time)),issuedAtTime:Mn(as(i.iat)),expirationTime:Mn(as(i.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function as(n){return Number(n)*1e3}function Ws(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return zr("JWT malformed, contained fewer than 3 sections"),null;try{const i=ml(t);return i?JSON.parse(i):(zr("Failed to decode base64 JWT payload"),null)}catch(i){return zr("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Za(n){const e=Ws(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Xe&&sp(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function sp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class op{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Is{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mn(this.lastLoginAt),this.creationTime=Mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ri(n){var e;const t=n.auth,r=await n.getIdToken(),i=await qn(n,Dl(t,{idToken:r}));M(i?.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Vl(o.providerUserInfo):[],l=cp(n.providerData,a),h=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!l?.length,p=h?d:!1,I={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Is(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,I)}async function ap(n){const e=Se(n);await ri(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cp(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Vl(n){return n.map(e=>{var{providerId:t}=e,r=qs(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function lp(n,e){const t=await Cl(n,{},async()=>{const r=ir({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=kl(n,i,"/v1/token",`key=${o}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",bl.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function up(n,e){return Et(n,"POST","/v2/accounts:revokeToken",vt(n,e))}/**
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
 */class Kt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Za(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=Za(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await lp(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new Kt;return r&&(M(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(M(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kt,this.toJSON())}_performRefresh(){return qe("not implemented")}}/**
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
 */function st(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ze{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=qs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new op(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Is(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await qn(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ip(this,e)}reload(){return ap(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ri(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(We(this.auth));const e=await this.getIdToken();return await qn(this,rp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,l,h,d,p;const I=(r=t.displayName)!==null&&r!==void 0?r:void 0,R=(i=t.email)!==null&&i!==void 0?i:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,V=(l=t.tenantId)!==null&&l!==void 0?l:void 0,D=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,q=(d=t.createdAt)!==null&&d!==void 0?d:void 0,H=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:j,emailVerified:Y,isAnonymous:Ae,providerData:X,stsTokenManager:v}=t;M(j&&v,e,"internal-error");const m=Kt.fromJSON(this.name,v);M(typeof j=="string",e,"internal-error"),st(I,e.name),st(R,e.name),M(typeof Y=="boolean",e,"internal-error"),M(typeof Ae=="boolean",e,"internal-error"),st(S,e.name),st(k,e.name),st(V,e.name),st(D,e.name),st(q,e.name),st(H,e.name);const g=new ze({uid:j,auth:e,email:R,emailVerified:Y,displayName:I,isAnonymous:Ae,photoURL:k,phoneNumber:S,tenantId:V,stsTokenManager:m,createdAt:q,lastLoginAt:H});return X&&Array.isArray(X)&&(g.providerData=X.map(y=>Object.assign({},y))),D&&(g._redirectEventId=D),g}static async _fromIdTokenResponse(e,t,r=!1){const i=new Kt;i.updateFromServerResponse(t);const o=new ze({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ri(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];M(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Vl(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!o?.length,l=new Kt;l.updateFromIdToken(r);const h=new ze({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Is(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!o?.length};return Object.assign(h,d),h}}/**
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
 */const ec=new Map;function He(n){Qe(n instanceof Function,"Expected a class definition");let e=ec.get(n);return e?(Qe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ec.set(n,e),e)}/**
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
 */class Nl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Nl.type="NONE";const tc=Nl;/**
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
 */function Hr(n,e,t){return`firebase:${n}:${e}:${t}`}class Gt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Hr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Hr("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ze._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Gt(He(tc),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||He(tc);const a=Hr(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const p=await d._get(a);if(p){const I=ze._fromJSON(e,p);d!==o&&(l=I),o=d;break}}catch{}const h=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Gt(o,e,r):(o=h[0],l&&await o._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new Gt(o,e,r))}}/**
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
 */function nc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ol(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ul(e))return"Blackberry";if(Bl(e))return"Webos";if(Ll(e))return"Safari";if((e.includes("chrome/")||Ml(e))&&!e.includes("edge/"))return"Chrome";if(Fl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Ol(n=ve()){return/firefox\//i.test(n)}function Ll(n=ve()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ml(n=ve()){return/crios\//i.test(n)}function xl(n=ve()){return/iemobile/i.test(n)}function Fl(n=ve()){return/android/i.test(n)}function Ul(n=ve()){return/blackberry/i.test(n)}function Bl(n=ve()){return/webos/i.test(n)}function Ks(n=ve()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function hp(n=ve()){var e;return Ks(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dp(){return Pd()&&document.documentMode===10}function jl(n=ve()){return Ks(n)||Fl(n)||Bl(n)||Ul(n)||/windows phone/i.test(n)||xl(n)}/**
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
 */function $l(n,e=[]){let t;switch(n){case"Browser":t=nc(ve());break;case"Worker":t=`${nc(ve())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${an}/${r}`}/**
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
 */class fp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,l)=>{try{const h=e(o);a(h)}catch(h){l(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function pp(n,e={}){return Et(n,"GET","/v2/passwordPolicy",vt(n,e))}/**
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
 */const mp=6;class gp{constructor(e){var t,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:mp,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,l;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(l=h.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class _p{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rc(this),this.idTokenSubscription=new rc(this),this.beforeStateQueue=new fp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=He(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Gt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Dl(this,{idToken:e}),r=await ze._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ve(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i?._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===l)&&h?.user&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ri(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(We(this));const t=e?Se(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(We(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(We(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(He(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pp(this),t=new gp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await up(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&He(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await Gt.create(this,[He(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$l(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Kf(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ot(n){return Se(n)}class rc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ld(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let yi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yp(n){yi=n}function ql(n){return yi.loadJS(n)}function vp(){return yi.recaptchaEnterpriseScript}function Ep(){return yi.gapiScript}function Tp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Ip="recaptcha-enterprise",wp="NO_RECAPTCHA";class Ap{constructor(e){this.type=Ip,this.auth=Ot(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{np(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new tp(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{l(h)})})}function i(o,a,l){const h=window.grecaptcha;Xa(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(wp)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,a)=>{r(this.auth).then(l=>{if(!t&&Xa(window.grecaptcha))i(l,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=vp();h.length!==0&&(h+=l),ql(h).then(()=>{i(l,o,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function ic(n,e,t,r=!1){const i=new Ap(n);let o;try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ws(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ic(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await ic(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}/**
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
 */function Rp(n,e){const t=$s(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(ei(o,e??{}))return i;De(i,"already-initialized")}return t.initialize({options:e})}function Sp(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(He);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Pp(n,e,t){const r=Ot(n);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=zl(e),{host:a,port:l}=bp(e),h=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${a}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),Cp()}function zl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function bp(n){const e=zl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:sc(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:sc(a)}}}function sc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Cp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Gs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qe("not implemented")}_getIdTokenResponse(e){return qe("not implemented")}_linkToIdToken(e,t){return qe("not implemented")}_getReauthenticationResolver(e){return qe("not implemented")}}async function kp(n,e){return Et(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Dp(n,e){return or(n,"POST","/v1/accounts:signInWithPassword",vt(n,e))}/**
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
 */async function Vp(n,e){return or(n,"POST","/v1/accounts:signInWithEmailLink",vt(n,e))}async function Np(n,e){return or(n,"POST","/v1/accounts:signInWithEmailLink",vt(n,e))}/**
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
 */class zn extends Gs{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new zn(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new zn(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ws(e,t,"signInWithPassword",Dp);case"emailLink":return Vp(e,{email:this._email,oobCode:this._password});default:De(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ws(e,r,"signUpPassword",kp);case"emailLink":return Np(e,{idToken:t,email:this._email,oobCode:this._password});default:De(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Qt(n,e){return or(n,"POST","/v1/accounts:signInWithIdp",vt(n,e))}/**
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
 */const Op="http://localhost";class Ct extends Gs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ct(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):De("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=qs(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ct(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Qt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Qt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qt(e,t)}buildRequest(){const e={requestUri:Op,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ir(t)}return e}}/**
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
 */function Lp(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Mp(n){const e=Dn(Vn(n)).link,t=e?Dn(Vn(e)).deep_link_id:null,r=Dn(Vn(n)).deep_link_id;return(r?Dn(Vn(r)).link:null)||r||t||e||n}class Qs{constructor(e){var t,r,i,o,a,l;const h=Dn(Vn(e)),d=(t=h.apiKey)!==null&&t!==void 0?t:null,p=(r=h.oobCode)!==null&&r!==void 0?r:null,I=Lp((i=h.mode)!==null&&i!==void 0?i:null);M(d&&p&&I,"argument-error"),this.apiKey=d,this.operation=I,this.code=p,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=h.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=h.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=Mp(e);try{return new Qs(t)}catch{return null}}}/**
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
 */class cn{constructor(){this.providerId=cn.PROVIDER_ID}static credential(e,t){return zn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Qs.parseLink(t);return M(r,"argument-error"),zn._fromEmailAndCode(e,r.code,r.tenantId)}}cn.PROVIDER_ID="password";cn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Hl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ar extends Hl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class at extends ar{constructor(){super("facebook.com")}static credential(e){return Ct._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.FACEBOOK_SIGN_IN_METHOD="facebook.com";at.PROVIDER_ID="facebook.com";/**
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
 */class ct extends ar{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ct._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ct.credential(t,r)}catch{return null}}}ct.GOOGLE_SIGN_IN_METHOD="google.com";ct.PROVIDER_ID="google.com";/**
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
 */class lt extends ar{constructor(){super("github.com")}static credential(e){return Ct._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.GITHUB_SIGN_IN_METHOD="github.com";lt.PROVIDER_ID="github.com";/**
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
 */class ut extends ar{constructor(){super("twitter.com")}static credential(e,t){return Ct._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ut.credential(t,r)}catch{return null}}}ut.TWITTER_SIGN_IN_METHOD="twitter.com";ut.PROVIDER_ID="twitter.com";/**
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
 */async function xp(n,e){return or(n,"POST","/v1/accounts:signUp",vt(n,e))}/**
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
 */class kt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await ze._fromIdTokenResponse(e,r,i),a=oc(r);return new kt({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=oc(r);return new kt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function oc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ii extends Xe{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ii.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ii(e,t,r,i)}}function Wl(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ii._fromErrorAndOperation(n,o,e,r):o})}async function Fp(n,e,t=!1){const r=await qn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return kt._forOperation(n,"link",r)}/**
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
 */async function Up(n,e,t=!1){const{auth:r}=n;if(Ve(r.app))return Promise.reject(We(r));const i="reauthenticate";try{const o=await qn(n,Wl(r,i,e,n),t);M(o.idToken,r,"internal-error");const a=Ws(o.idToken);M(a,r,"internal-error");const{sub:l}=a;return M(n.uid===l,r,"user-mismatch"),kt._forOperation(n,i,o)}catch(o){throw o?.code==="auth/user-not-found"&&De(r,"user-mismatch"),o}}/**
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
 */async function Kl(n,e,t=!1){if(Ve(n.app))return Promise.reject(We(n));const r="signIn",i=await Wl(n,r,e),o=await kt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function Bp(n,e){return Kl(Ot(n),e)}/**
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
 */async function Gl(n){const e=Ot(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jp(n,e,t){if(Ve(n.app))return Promise.reject(We(n));const r=Ot(n),a=await ws(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xp).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&Gl(n),h}),l=await kt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function $p(n,e,t){return Ve(n.app)?Promise.reject(We(n)):Bp(Se(n),cn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Gl(n),r})}function qp(n,e,t,r){return Se(n).onIdTokenChanged(e,t,r)}function zp(n,e,t){return Se(n).beforeAuthStateChanged(e,t)}function Hp(n,e,t,r){return Se(n).onAuthStateChanged(e,t,r)}function Wp(n){return Se(n).signOut()}const si="__sak";/**
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
 */class Ql{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(si,"1"),this.storage.removeItem(si),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Kp=1e3,Gp=10;class Yl extends Ql{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);dp()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Gp):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Kp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yl.type="LOCAL";const Qp=Yl;/**
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
 */class Jl extends Ql{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jl.type="SESSION";const Xl=Jl;/**
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
 */function Yp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class vi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new vi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(t.origin,o)),h=await Yp(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vi.receivers=[];/**
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
 */function Ys(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Jp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,h)=>{const d=Ys("",20);i.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(I){const R=I;if(R.data.eventId===d)switch(R.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(R.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Oe(){return window}function Xp(n){Oe().location.href=n}/**
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
 */function Zl(){return typeof Oe().WorkerGlobalScope<"u"&&typeof Oe().importScripts=="function"}async function Zp(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function em(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function tm(){return Zl()?self:null}/**
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
 */const eu="firebaseLocalStorageDb",nm=1,oi="firebaseLocalStorage",tu="fbase_key";class cr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ei(n,e){return n.transaction([oi],e?"readwrite":"readonly").objectStore(oi)}function rm(){const n=indexedDB.deleteDatabase(eu);return new cr(n).toPromise()}function As(){const n=indexedDB.open(eu,nm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(oi,{keyPath:tu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(oi)?e(r):(r.close(),await rm(),e(await As()))})})}async function ac(n,e,t){const r=Ei(n,!0).put({[tu]:e,value:t});return new cr(r).toPromise()}async function im(n,e){const t=Ei(n,!1).get(e),r=await new cr(t).toPromise();return r===void 0?null:r.value}function cc(n,e){const t=Ei(n,!0).delete(e);return new cr(t).toPromise()}const sm=800,om=3;class nu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await As(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>om)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vi._getInstance(tm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Zp(),!this.activeServiceWorker)return;this.sender=new Jp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||em()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await As();return await ac(e,si,"1"),await cc(e,si),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ac(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>im(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>cc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Ei(i,!1).getAll();return new cr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nu.type="LOCAL";const am=nu;new sr(3e4,6e4);/**
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
 */function cm(n,e){return e?He(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Js extends Gs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lm(n){return Kl(n.auth,new Js(n),n.bypassAuthState)}function um(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Up(t,new Js(n),n.bypassAuthState)}async function hm(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Fp(t,new Js(n),n.bypassAuthState)}/**
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
 */class ru{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:l}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lm;case"linkViaPopup":case"linkViaRedirect":return hm;case"reauthViaPopup":case"reauthViaRedirect":return um;default:De(this.auth,"internal-error")}}resolve(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dm=new sr(2e3,1e4);class Wt extends ru{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Wt.currentPopupAction&&Wt.currentPopupAction.cancel(),Wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Qe(this.filter.length===1,"Popup operations only handle one event");const e=Ys();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ne(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ne(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ne(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dm.get())};e()}}Wt.currentPopupAction=null;/**
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
 */const fm="pendingRedirect",Wr=new Map;class pm extends ru{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Wr.get(this.auth._key());if(!e){try{const r=await mm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Wr.set(this.auth._key(),e)}return this.bypassAuthState||Wr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mm(n,e){const t=ym(e),r=_m(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function gm(n,e){Wr.set(n._key(),e)}function _m(n){return He(n._redirectPersistence)}function ym(n){return Hr(fm,n.config.apiKey,n.name)}async function vm(n,e,t=!1){if(Ve(n.app))return Promise.reject(We(n));const r=Ot(n),i=cm(r,e),a=await new pm(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Em=10*60*1e3;class Tm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Im(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!iu(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ne(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Em&&this.cachedEventUids.clear(),this.cachedEventUids.has(lc(e))}saveEventToCache(e){this.cachedEventUids.add(lc(e)),this.lastProcessedEventTime=Date.now()}}function lc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function iu({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Im(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iu(n);default:return!1}}/**
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
 */async function wm(n,e={}){return Et(n,"GET","/v1/projects",e)}/**
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
 */const Am=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rm=/^https?/;async function Sm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await wm(n);for(const t of e)try{if(Pm(t))return}catch{}De(n,"unauthorized-domain")}function Pm(n){const e=Ts(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Rm.test(t))return!1;if(Am.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const bm=new sr(3e4,6e4);function uc(){const n=Oe().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Cm(n){return new Promise((e,t)=>{var r,i,o;function a(){uc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uc(),t(Ne(n,"network-request-failed"))},timeout:bm.get()})}if(!((i=(r=Oe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Oe().gapi)===null||o===void 0)&&o.load)a();else{const l=Tp("iframefcb");return Oe()[l]=()=>{gapi.load?a():t(Ne(n,"network-request-failed"))},ql(`${Ep()}?onload=${l}`).catch(h=>t(h))}}).catch(e=>{throw Kr=null,e})}let Kr=null;function km(n){return Kr=Kr||Cm(n),Kr}/**
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
 */const Dm=new sr(5e3,15e3),Vm="__/auth/iframe",Nm="emulator/auth/iframe",Om={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mm(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Hs(e,Nm):`https://${n.config.authDomain}/${Vm}`,r={apiKey:e.apiKey,appName:n.name,v:an},i=Lm.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${ir(r).slice(1)}`}async function xm(n){const e=await km(n),t=Oe().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:Mm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Om,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=Ne(n,"network-request-failed"),l=Oe().setTimeout(()=>{o(a)},Dm.get());function h(){Oe().clearTimeout(l),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
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
 */const Fm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Um=500,Bm=600,jm="_blank",$m="http://localhost";class hc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qm(n,e,t,r=Um,i=Bm){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const h=Object.assign(Object.assign({},Fm),{width:r.toString(),height:i.toString(),top:o,left:a}),d=ve().toLowerCase();t&&(l=Ml(d)?jm:t),Ol(d)&&(e=e||$m,h.scrollbars="yes");const p=Object.entries(h).reduce((R,[S,k])=>`${R}${S}=${k},`,"");if(hp(d)&&l!=="_self")return zm(e||"",l),new hc(null);const I=window.open(e||"",l,p);M(I,n,"popup-blocked");try{I.focus()}catch{}return new hc(I)}function zm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Hm="__/auth/handler",Wm="emulator/auth/handler",Km=encodeURIComponent("fac");async function dc(n,e,t,r,i,o){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:an,eventId:i};if(e instanceof Hl){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Od(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,I]of Object.entries({}))a[p]=I}if(e instanceof ar){const p=e.getScopes().filter(I=>I!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const h=await n._getAppCheckToken(),d=h?`#${Km}=${encodeURIComponent(h)}`:"";return`${Gm(n)}?${ir(l).slice(1)}${d}`}function Gm({config:n}){return n.emulator?Hs(n,Wm):`https://${n.authDomain}/${Hm}`}/**
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
 */const cs="webStorageSupport";class Qm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xl,this._completeRedirectFn=vm,this._overrideRedirectResult=gm}async _openPopup(e,t,r,i){var o;Qe((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await dc(e,t,r,Ts(),i);return qm(e,a,Ys())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await dc(e,t,r,Ts(),i);return Xp(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(Qe(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await xm(e),r=new Tm(e);return t.register("authEvent",i=>(M(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(cs,{type:cs},i=>{var o;const a=(o=i?.[0])===null||o===void 0?void 0:o[cs];a!==void 0&&t(!!a),De(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Sm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return jl()||Ll()||Ks()}}const Ym=Qm;var fc="@firebase/auth",pc="1.7.9";/**
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
 */class Jm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Xm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Zm(n){Xt(new bt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;M(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$l(n)},d=new _p(r,i,o,h);return Sp(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Xt(new bt("auth-internal",e=>{const t=Ot(e.getProvider("auth").getImmediate());return(r=>new Jm(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pt(fc,pc,Xm(n)),pt(fc,pc,"esm2017")}/**
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
 */const eg=5*60,tg=yl("authIdTokenMaxAge")||eg;let mc=null;const ng=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>tg)return;const i=t?.token;mc!==i&&(mc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rg(n=Il()){const e=$s(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Rp(n,{popupRedirectResolver:Ym,persistence:[am,Qp,Xl]}),r=yl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=ng(o.toString());zp(t,a,()=>a(t.currentUser)),qp(t,l=>a(l))}}const i=gl("auth");return i&&Pp(t,`http://${i}`),t}function ig(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}yp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=Ne("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",ig().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Zm("Browser");var gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pt,su;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,m){function g(){}g.prototype=m.prototype,v.D=m.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(y,E,w){for(var _=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)_[Ue-2]=arguments[Ue];return m.prototype[E].apply(y,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,g){g||(g=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(E=0;16>E;++E)y[E]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=v.g[0],g=v.g[1],E=v.g[2];var w=v.g[3],_=m+(w^g&(E^w))+y[0]+3614090360&4294967295;m=g+(_<<7&4294967295|_>>>25),_=w+(E^m&(g^E))+y[1]+3905402710&4294967295,w=m+(_<<12&4294967295|_>>>20),_=E+(g^w&(m^g))+y[2]+606105819&4294967295,E=w+(_<<17&4294967295|_>>>15),_=g+(m^E&(w^m))+y[3]+3250441966&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(w^g&(E^w))+y[4]+4118548399&4294967295,m=g+(_<<7&4294967295|_>>>25),_=w+(E^m&(g^E))+y[5]+1200080426&4294967295,w=m+(_<<12&4294967295|_>>>20),_=E+(g^w&(m^g))+y[6]+2821735955&4294967295,E=w+(_<<17&4294967295|_>>>15),_=g+(m^E&(w^m))+y[7]+4249261313&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(w^g&(E^w))+y[8]+1770035416&4294967295,m=g+(_<<7&4294967295|_>>>25),_=w+(E^m&(g^E))+y[9]+2336552879&4294967295,w=m+(_<<12&4294967295|_>>>20),_=E+(g^w&(m^g))+y[10]+4294925233&4294967295,E=w+(_<<17&4294967295|_>>>15),_=g+(m^E&(w^m))+y[11]+2304563134&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(w^g&(E^w))+y[12]+1804603682&4294967295,m=g+(_<<7&4294967295|_>>>25),_=w+(E^m&(g^E))+y[13]+4254626195&4294967295,w=m+(_<<12&4294967295|_>>>20),_=E+(g^w&(m^g))+y[14]+2792965006&4294967295,E=w+(_<<17&4294967295|_>>>15),_=g+(m^E&(w^m))+y[15]+1236535329&4294967295,g=E+(_<<22&4294967295|_>>>10),_=m+(E^w&(g^E))+y[1]+4129170786&4294967295,m=g+(_<<5&4294967295|_>>>27),_=w+(g^E&(m^g))+y[6]+3225465664&4294967295,w=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(w^m))+y[11]+643717713&4294967295,E=w+(_<<14&4294967295|_>>>18),_=g+(w^m&(E^w))+y[0]+3921069994&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(E^w&(g^E))+y[5]+3593408605&4294967295,m=g+(_<<5&4294967295|_>>>27),_=w+(g^E&(m^g))+y[10]+38016083&4294967295,w=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(w^m))+y[15]+3634488961&4294967295,E=w+(_<<14&4294967295|_>>>18),_=g+(w^m&(E^w))+y[4]+3889429448&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(E^w&(g^E))+y[9]+568446438&4294967295,m=g+(_<<5&4294967295|_>>>27),_=w+(g^E&(m^g))+y[14]+3275163606&4294967295,w=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(w^m))+y[3]+4107603335&4294967295,E=w+(_<<14&4294967295|_>>>18),_=g+(w^m&(E^w))+y[8]+1163531501&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(E^w&(g^E))+y[13]+2850285829&4294967295,m=g+(_<<5&4294967295|_>>>27),_=w+(g^E&(m^g))+y[2]+4243563512&4294967295,w=m+(_<<9&4294967295|_>>>23),_=E+(m^g&(w^m))+y[7]+1735328473&4294967295,E=w+(_<<14&4294967295|_>>>18),_=g+(w^m&(E^w))+y[12]+2368359562&4294967295,g=E+(_<<20&4294967295|_>>>12),_=m+(g^E^w)+y[5]+4294588738&4294967295,m=g+(_<<4&4294967295|_>>>28),_=w+(m^g^E)+y[8]+2272392833&4294967295,w=m+(_<<11&4294967295|_>>>21),_=E+(w^m^g)+y[11]+1839030562&4294967295,E=w+(_<<16&4294967295|_>>>16),_=g+(E^w^m)+y[14]+4259657740&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(g^E^w)+y[1]+2763975236&4294967295,m=g+(_<<4&4294967295|_>>>28),_=w+(m^g^E)+y[4]+1272893353&4294967295,w=m+(_<<11&4294967295|_>>>21),_=E+(w^m^g)+y[7]+4139469664&4294967295,E=w+(_<<16&4294967295|_>>>16),_=g+(E^w^m)+y[10]+3200236656&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(g^E^w)+y[13]+681279174&4294967295,m=g+(_<<4&4294967295|_>>>28),_=w+(m^g^E)+y[0]+3936430074&4294967295,w=m+(_<<11&4294967295|_>>>21),_=E+(w^m^g)+y[3]+3572445317&4294967295,E=w+(_<<16&4294967295|_>>>16),_=g+(E^w^m)+y[6]+76029189&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(g^E^w)+y[9]+3654602809&4294967295,m=g+(_<<4&4294967295|_>>>28),_=w+(m^g^E)+y[12]+3873151461&4294967295,w=m+(_<<11&4294967295|_>>>21),_=E+(w^m^g)+y[15]+530742520&4294967295,E=w+(_<<16&4294967295|_>>>16),_=g+(E^w^m)+y[2]+3299628645&4294967295,g=E+(_<<23&4294967295|_>>>9),_=m+(E^(g|~w))+y[0]+4096336452&4294967295,m=g+(_<<6&4294967295|_>>>26),_=w+(g^(m|~E))+y[7]+1126891415&4294967295,w=m+(_<<10&4294967295|_>>>22),_=E+(m^(w|~g))+y[14]+2878612391&4294967295,E=w+(_<<15&4294967295|_>>>17),_=g+(w^(E|~m))+y[5]+4237533241&4294967295,g=E+(_<<21&4294967295|_>>>11),_=m+(E^(g|~w))+y[12]+1700485571&4294967295,m=g+(_<<6&4294967295|_>>>26),_=w+(g^(m|~E))+y[3]+2399980690&4294967295,w=m+(_<<10&4294967295|_>>>22),_=E+(m^(w|~g))+y[10]+4293915773&4294967295,E=w+(_<<15&4294967295|_>>>17),_=g+(w^(E|~m))+y[1]+2240044497&4294967295,g=E+(_<<21&4294967295|_>>>11),_=m+(E^(g|~w))+y[8]+1873313359&4294967295,m=g+(_<<6&4294967295|_>>>26),_=w+(g^(m|~E))+y[15]+4264355552&4294967295,w=m+(_<<10&4294967295|_>>>22),_=E+(m^(w|~g))+y[6]+2734768916&4294967295,E=w+(_<<15&4294967295|_>>>17),_=g+(w^(E|~m))+y[13]+1309151649&4294967295,g=E+(_<<21&4294967295|_>>>11),_=m+(E^(g|~w))+y[4]+4149444226&4294967295,m=g+(_<<6&4294967295|_>>>26),_=w+(g^(m|~E))+y[11]+3174756917&4294967295,w=m+(_<<10&4294967295|_>>>22),_=E+(m^(w|~g))+y[2]+718787259&4294967295,E=w+(_<<15&4294967295|_>>>17),_=g+(w^(E|~m))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+w&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var g=m-this.blockSize,y=this.B,E=this.h,w=0;w<m;){if(E==0)for(;w<=g;)i(this,v,w),w+=this.blockSize;if(typeof v=="string"){for(;w<m;)if(y[E++]=v.charCodeAt(w++),E==this.blockSize){i(this,y),E=0;break}}else for(;w<m;)if(y[E++]=v[w++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var g=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=g&255,g/=256;for(this.u(v),v=Array(16),m=g=0;4>m;++m)for(var y=0;32>y;y+=8)v[g++]=this.g[m]>>>y&255;return v};function o(v,m){var g=l;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=m(v)}function a(v,m){this.h=m;for(var g=[],y=!0,E=v.length-1;0<=E;E--){var w=v[E]|0;y&&w==m||(g[E]=w,y=!1)}this.g=g}var l={};function h(v){return-128<=v&&128>v?o(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return I;if(0>v)return D(d(-v));for(var m=[],g=1,y=0;v>=g;y++)m[y]=v/g|0,g*=4294967296;return new a(m,0)}function p(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return D(p(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(m,8)),y=I,E=0;E<v.length;E+=8){var w=Math.min(8,v.length-E),_=parseInt(v.substring(E,E+w),m);8>w?(w=d(Math.pow(m,w)),y=y.j(w).add(d(_))):(y=y.j(g),y=y.add(d(_)))}return y}var I=h(0),R=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(V(this))return-D(this).m();for(var v=0,m=1,g=0;g<this.g.length;g++){var y=this.i(g);v+=(0<=y?y:4294967296+y)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(V(this))return"-"+D(this).toString(v);for(var m=d(Math.pow(v,6)),g=this,y="";;){var E=Y(g,m).g;g=q(g,E.j(m));var w=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=E,k(g))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function V(v){return v.h==-1}n.l=function(v){return v=q(this,v),V(v)?-1:k(v)?0:1};function D(v){for(var m=v.g.length,g=[],y=0;y<m;y++)g[y]=~v.g[y];return new a(g,~v.h).add(R)}n.abs=function(){return V(this)?D(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0,E=0;E<=m;E++){var w=y+(this.i(E)&65535)+(v.i(E)&65535),_=(w>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=_>>>16,w&=65535,_&=65535,g[E]=_<<16|w}return new a(g,g[g.length-1]&-2147483648?-1:0)};function q(v,m){return v.add(D(m))}n.j=function(v){if(k(this)||k(v))return I;if(V(this))return V(v)?D(this).j(D(v)):D(D(this).j(v));if(V(v))return D(this.j(D(v)));if(0>this.l(S)&&0>v.l(S))return d(this.m()*v.m());for(var m=this.g.length+v.g.length,g=[],y=0;y<2*m;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var w=this.i(y)>>>16,_=this.i(y)&65535,Ue=v.i(E)>>>16,fn=v.i(E)&65535;g[2*y+2*E]+=_*fn,H(g,2*y+2*E),g[2*y+2*E+1]+=w*fn,H(g,2*y+2*E+1),g[2*y+2*E+1]+=_*Ue,H(g,2*y+2*E+1),g[2*y+2*E+2]+=w*Ue,H(g,2*y+2*E+2)}for(y=0;y<m;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=m;y<2*m;y++)g[y]=0;return new a(g,0)};function H(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function j(v,m){this.g=v,this.h=m}function Y(v,m){if(k(m))throw Error("division by zero");if(k(v))return new j(I,I);if(V(v))return m=Y(D(v),m),new j(D(m.g),D(m.h));if(V(m))return m=Y(v,D(m)),new j(D(m.g),m.h);if(30<v.g.length){if(V(v)||V(m))throw Error("slowDivide_ only works with positive integers.");for(var g=R,y=m;0>=y.l(v);)g=Ae(g),y=Ae(y);var E=X(g,1),w=X(y,1);for(y=X(y,2),g=X(g,2);!k(y);){var _=w.add(y);0>=_.l(v)&&(E=E.add(g),w=_),y=X(y,1),g=X(g,1)}return m=q(v,E.j(m)),new j(E,m)}for(E=I;0<=v.l(m);){for(g=Math.max(1,Math.floor(v.m()/m.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=d(g),_=w.j(m);V(_)||0<_.l(v);)g-=y,w=d(g),_=w.j(m);k(w)&&(w=R),E=E.add(w),v=q(v,_)}return new j(E,v)}n.A=function(v){return Y(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)&v.i(y);return new a(g,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)|v.i(y);return new a(g,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)^v.i(y);return new a(g,this.h^v.h)};function Ae(v){for(var m=v.g.length+1,g=[],y=0;y<m;y++)g[y]=v.i(y)<<1|v.i(y-1)>>>31;return new a(g,v.h)}function X(v,m){var g=m>>5;m%=32;for(var y=v.g.length-g,E=[],w=0;w<y;w++)E[w]=0<m?v.i(w+g)>>>m|v.i(w+g+1)<<32-m:v.i(w+g);return new a(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,su=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Pt=a}).apply(typeof gc<"u"?gc:typeof self<"u"?self:typeof window<"u"?window:{});var Mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ou,Nn,au,Gr,Rs,cu,lu,uu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,u){return s==Array.prototype||s==Object.prototype||(s[c]=u.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mr=="object"&&Mr];for(var c=0;c<s.length;++c){var u=s[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var u=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var T=s[f];if(!(T in u))break e;u=u[T]}s=s[s.length-1],f=u[s],c=c(f),c!=f&&c!=null&&e(u,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var u=0,f=!1,T={next:function(){if(!f&&u<s.length){var A=u++;return{value:c(A,s[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function p(s,c,u){return s.call.apply(s.bind,arguments)}function I(s,c,u){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,f),s.apply(c,T)}}return function(){return s.apply(c,arguments)}}function R(s,c,u){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:I,R.apply(null,arguments)}function S(s,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function k(s,c){function u(){}u.prototype=c.prototype,s.aa=c.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(f,T,A){for(var C=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)C[Q-2]=arguments[Q];return c.prototype[T].apply(f,C)}}function V(s){const c=s.length;if(0<c){const u=Array(c);for(let f=0;f<c;f++)u[f]=s[f];return u}return[]}function D(s,c){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const T=s.length||0,A=f.length||0;s.length=T+A;for(let C=0;C<A;C++)s[T+C]=f[C]}else s.push(f)}}class q{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function H(s){return/^[\s\xa0]*$/.test(s)}function j(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function Y(s){return Y[" "](s),s}Y[" "]=function(){};var Ae=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function X(s,c,u){for(const f in s)c.call(u,s[f],f,s)}function v(s,c){for(const u in s)c.call(void 0,s[u],u,s)}function m(s){const c={};for(const u in s)c[u]=s[u];return c}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,c){let u,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(u in f)s[u]=f[u];for(let A=0;A<g.length;A++)u=g[A],Object.prototype.hasOwnProperty.call(f,u)&&(s[u]=f[u])}}function E(s){var c=1;s=s.split(":");const u=[];for(;0<c&&s.length;)u.push(s.shift()),c--;return s.length&&u.push(s.join(":")),u}function w(s){l.setTimeout(()=>{throw s},0)}function _(){var s=Vi;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class Ue{constructor(){this.h=this.g=null}add(c,u){const f=fn.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var fn=new q(()=>new kh,s=>s.reset());class kh{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let pn,mn=!1,Vi=new Ue,Bo=()=>{const s=l.Promise.resolve(void 0);pn=()=>{s.then(Dh)}};var Dh=()=>{for(var s;s=_();){try{s.h.call(s.g)}catch(u){w(u)}var c=fn;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}mn=!1};function Ze(){this.s=this.s,this.C=this.C}Ze.prototype.s=!1,Ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Vh=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return s}();function gn(s,c){if(de.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(Ae){e:{try{Y(c.nodeName);var T=!0;break e}catch{}T=!1}T||(c=null)}}else u=="mouseover"?c=s.fromElement:u=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Nh[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&gn.aa.h.call(this)}}k(gn,de);var Nh={2:"touch",3:"pen",4:"mouse"};gn.prototype.h=function(){gn.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var gr="closure_listenable_"+(1e6*Math.random()|0),Oh=0;function Lh(s,c,u,f,T){this.listener=s,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=T,this.key=++Oh,this.da=this.fa=!1}function _r(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function yr(s){this.src=s,this.g={},this.h=0}yr.prototype.add=function(s,c,u,f,T){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var C=Oi(s,c,f,T);return-1<C?(c=s[C],u||(c.fa=!1)):(c=new Lh(c,this.src,A,!!f,T),c.fa=u,s.push(c)),c};function Ni(s,c){var u=c.type;if(u in s.g){var f=s.g[u],T=Array.prototype.indexOf.call(f,c,void 0),A;(A=0<=T)&&Array.prototype.splice.call(f,T,1),A&&(_r(c),s.g[u].length==0&&(delete s.g[u],s.h--))}}function Oi(s,c,u,f){for(var T=0;T<s.length;++T){var A=s[T];if(!A.da&&A.listener==c&&A.capture==!!u&&A.ha==f)return T}return-1}var Li="closure_lm_"+(1e6*Math.random()|0),Mi={};function jo(s,c,u,f,T){if(Array.isArray(c)){for(var A=0;A<c.length;A++)jo(s,c[A],u,f,T);return null}return u=zo(u),s&&s[gr]?s.K(c,u,d(f)?!!f.capture:!1,T):Mh(s,c,u,!1,f,T)}function Mh(s,c,u,f,T,A){if(!c)throw Error("Invalid event type");var C=d(T)?!!T.capture:!!T,Q=Fi(s);if(Q||(s[Li]=Q=new yr(s)),u=Q.add(c,u,f,C,A),u.proxy)return u;if(f=xh(),u.proxy=f,f.src=s,f.listener=u,s.addEventListener)Vh||(T=C),T===void 0&&(T=!1),s.addEventListener(c.toString(),f,T);else if(s.attachEvent)s.attachEvent(qo(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function xh(){function s(u){return c.call(s.src,s.listener,u)}const c=Fh;return s}function $o(s,c,u,f,T){if(Array.isArray(c))for(var A=0;A<c.length;A++)$o(s,c[A],u,f,T);else f=d(f)?!!f.capture:!!f,u=zo(u),s&&s[gr]?(s=s.i,c=String(c).toString(),c in s.g&&(A=s.g[c],u=Oi(A,u,f,T),-1<u&&(_r(A[u]),Array.prototype.splice.call(A,u,1),A.length==0&&(delete s.g[c],s.h--)))):s&&(s=Fi(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Oi(c,u,f,T)),(u=-1<s?c[s]:null)&&xi(u))}function xi(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[gr])Ni(c.i,s);else{var u=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(u,f,s.capture):c.detachEvent?c.detachEvent(qo(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=Fi(c))?(Ni(u,s),u.h==0&&(u.src=null,c[Li]=null)):_r(s)}}}function qo(s){return s in Mi?Mi[s]:Mi[s]="on"+s}function Fh(s,c){if(s.da)s=!0;else{c=new gn(c,this);var u=s.listener,f=s.ha||s.src;s.fa&&xi(s),s=u.call(f,c)}return s}function Fi(s){return s=s[Li],s instanceof yr?s:null}var Ui="__closure_events_fn_"+(1e9*Math.random()>>>0);function zo(s){return typeof s=="function"?s:(s[Ui]||(s[Ui]=function(c){return s.handleEvent(c)}),s[Ui])}function fe(){Ze.call(this),this.i=new yr(this),this.M=this,this.F=null}k(fe,Ze),fe.prototype[gr]=!0,fe.prototype.removeEventListener=function(s,c,u,f){$o(this,s,c,u,f)};function Ee(s,c){var u,f=s.F;if(f)for(u=[];f;f=f.F)u.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new de(c,s);else if(c instanceof de)c.target=c.target||s;else{var T=c;c=new de(f,s),y(c,T)}if(T=!0,u)for(var A=u.length-1;0<=A;A--){var C=c.g=u[A];T=vr(C,f,!0,c)&&T}if(C=c.g=s,T=vr(C,f,!0,c)&&T,T=vr(C,f,!1,c)&&T,u)for(A=0;A<u.length;A++)C=c.g=u[A],T=vr(C,f,!1,c)&&T}fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var u=s.g[c],f=0;f<u.length;f++)_r(u[f]);delete s.g[c],s.h--}}this.F=null},fe.prototype.K=function(s,c,u,f){return this.i.add(String(s),c,!1,u,f)},fe.prototype.L=function(s,c,u,f){return this.i.add(String(s),c,!0,u,f)};function vr(s,c,u,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var T=!0,A=0;A<c.length;++A){var C=c[A];if(C&&!C.da&&C.capture==u){var Q=C.listener,ae=C.ha||C.src;C.fa&&Ni(s.i,C),T=Q.call(ae,f)!==!1&&T}}return T&&!f.defaultPrevented}function Ho(s,c,u){if(typeof s=="function")u&&(s=R(s,u));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(s,c||0)}function Wo(s){s.g=Ho(()=>{s.g=null,s.i&&(s.i=!1,Wo(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class Uh extends Ze{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Wo(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _n(s){Ze.call(this),this.h=s,this.g={}}k(_n,Ze);var Ko=[];function Go(s){X(s.g,function(c,u){this.g.hasOwnProperty(u)&&xi(c)},s),s.g={}}_n.prototype.N=function(){_n.aa.N.call(this),Go(this)},_n.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bi=l.JSON.stringify,Bh=l.JSON.parse,jh=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function ji(){}ji.prototype.h=null;function Qo(s){return s.h||(s.h=s.i())}function Yo(){}var yn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $i(){de.call(this,"d")}k($i,de);function qi(){de.call(this,"c")}k(qi,de);var Tt={},Jo=null;function Er(){return Jo=Jo||new fe}Tt.La="serverreachability";function Xo(s){de.call(this,Tt.La,s)}k(Xo,de);function vn(s){const c=Er();Ee(c,new Xo(c))}Tt.STAT_EVENT="statevent";function Zo(s,c){de.call(this,Tt.STAT_EVENT,s),this.stat=c}k(Zo,de);function Te(s){const c=Er();Ee(c,new Zo(c,s))}Tt.Ma="timingevent";function ea(s,c){de.call(this,Tt.Ma,s),this.size=c}k(ea,de);function En(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},c)}function Tn(){this.g=!0}Tn.prototype.xa=function(){this.g=!1};function $h(s,c,u,f,T,A){s.info(function(){if(s.g)if(A)for(var C="",Q=A.split("&"),ae=0;ae<Q.length;ae++){var W=Q[ae].split("=");if(1<W.length){var pe=W[0];W=W[1];var me=pe.split("_");C=2<=me.length&&me[1]=="type"?C+(pe+"="+W+"&"):C+(pe+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+c+`
`+u+`
`+C})}function qh(s,c,u,f,T,A,C){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+c+`
`+u+`
`+A+" "+C})}function xt(s,c,u,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Hh(s,u)+(f?" "+f:"")})}function zh(s,c){s.info(function(){return"TIMEOUT: "+c})}Tn.prototype.info=function(){};function Hh(s,c){if(!s.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var f=u[s];if(!(2>f.length)){var T=f[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<T.length;C++)T[C]=""}}}}return Bi(u)}catch{return c}}var Tr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ta={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zi;function Ir(){}k(Ir,ji),Ir.prototype.g=function(){return new XMLHttpRequest},Ir.prototype.i=function(){return{}},zi=new Ir;function et(s,c,u,f){this.j=s,this.i=c,this.l=u,this.R=f||1,this.U=new _n(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new na}function na(){this.i=null,this.g="",this.h=!1}var ra={},Hi={};function Wi(s,c,u){s.L=1,s.v=Sr(Be(c)),s.m=u,s.P=!0,ia(s,null)}function ia(s,c){s.F=Date.now(),wr(s),s.A=Be(s.v);var u=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),ya(u.i,"t",f),s.C=0,u=s.j.J,s.h=new na,s.g=Ma(s.j,u?c:null,!s.m),0<s.O&&(s.M=new Uh(R(s.Y,s,s.g),s.O)),c=s.U,u=s.g,f=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(Ko[0]=T.toString()),T=Ko);for(var A=0;A<T.length;A++){var C=jo(u,T[A],f||c.handleEvent,!1,c.h||c);if(!C)break;c.g[C.key]=C}c=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),vn(),$h(s.i,s.u,s.A,s.l,s.R,s.m)}et.prototype.ca=function(s){s=s.target;const c=this.M;c&&je(s)==3?c.j():this.Y(s)},et.prototype.Y=function(s){try{if(s==this.g)e:{const me=je(this.g);var c=this.g.Ba();const Bt=this.g.Z();if(!(3>me)&&(me!=3||this.g&&(this.h.h||this.g.oa()||Ra(this.g)))){this.J||me!=4||c==7||(c==8||0>=Bt?vn(3):vn(2)),Ki(this);var u=this.g.Z();this.X=u;t:if(sa(this)){var f=Ra(this.g);s="";var T=f.length,A=je(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){It(this),In(this);var C="";break t}this.h.i=new l.TextDecoder}for(c=0;c<T;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(A&&c==T-1)});f.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=u==200,qh(this.i,this.u,this.A,this.l,this.R,me,u),this.o){if(this.T&&!this.K){t:{if(this.g){var Q,ae=this.g;if((Q=ae.g?ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(Q)){var W=Q;break t}}W=null}if(u=W)xt(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gi(this,u);else{this.o=!1,this.s=3,Te(12),It(this),In(this);break e}}if(this.P){u=!0;let Ce;for(;!this.J&&this.C<C.length;)if(Ce=Wh(this,C),Ce==Hi){me==4&&(this.s=4,Te(14),u=!1),xt(this.i,this.l,null,"[Incomplete Response]");break}else if(Ce==ra){this.s=4,Te(15),xt(this.i,this.l,C,"[Invalid Chunk]"),u=!1;break}else xt(this.i,this.l,Ce,null),Gi(this,Ce);if(sa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),me!=4||C.length!=0||this.h.h||(this.s=1,Te(16),u=!1),this.o=this.o&&u,!u)xt(this.i,this.l,C,"[Invalid Chunked Response]"),It(this),In(this);else if(0<C.length&&!this.W){this.W=!0;var pe=this.j;pe.g==this&&pe.ba&&!pe.M&&(pe.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),es(pe),pe.M=!0,Te(11))}}else xt(this.i,this.l,C,null),Gi(this,C);me==4&&It(this),this.o&&!this.J&&(me==4?Va(this.j,this):(this.o=!1,wr(this)))}else ld(this.g),u==400&&0<C.indexOf("Unknown SID")?(this.s=3,Te(12)):(this.s=0,Te(13)),It(this),In(this)}}}catch{}finally{}};function sa(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Wh(s,c){var u=s.C,f=c.indexOf(`
`,u);return f==-1?Hi:(u=Number(c.substring(u,f)),isNaN(u)?ra:(f+=1,f+u>c.length?Hi:(c=c.slice(f,f+u),s.C=f+u,c)))}et.prototype.cancel=function(){this.J=!0,It(this)};function wr(s){s.S=Date.now()+s.I,oa(s,s.I)}function oa(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=En(R(s.ba,s),c)}function Ki(s){s.B&&(l.clearTimeout(s.B),s.B=null)}et.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(zh(this.i,this.A),this.L!=2&&(vn(),Te(17)),It(this),this.s=2,In(this)):oa(this,this.S-s)};function In(s){s.j.G==0||s.J||Va(s.j,s)}function It(s){Ki(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,Go(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function Gi(s,c){try{var u=s.j;if(u.G!=0&&(u.g==s||Qi(u.h,s))){if(!s.K&&Qi(u.h,s)&&u.G==3){try{var f=u.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)Vr(u),kr(u);else break e;Zi(u),Te(18)}}else u.za=T[1],0<u.za-u.T&&37500>T[2]&&u.F&&u.v==0&&!u.C&&(u.C=En(R(u.Za,u),6e3));if(1>=la(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else At(u,11)}else if((s.K||u.g==s)&&Vr(u),!H(c))for(T=u.Da.g.parse(c),c=0;c<T.length;c++){let W=T[c];if(u.T=W[0],W=W[1],u.G==2)if(W[0]=="c"){u.K=W[1],u.ia=W[2];const pe=W[3];pe!=null&&(u.la=pe,u.j.info("VER="+u.la));const me=W[4];me!=null&&(u.Aa=me,u.j.info("SVER="+u.Aa));const Bt=W[5];Bt!=null&&typeof Bt=="number"&&0<Bt&&(f=1.5*Bt,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const Ce=s.g;if(Ce){const Or=Ce.g?Ce.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Or){var A=f.h;A.g||Or.indexOf("spdy")==-1&&Or.indexOf("quic")==-1&&Or.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Yi(A,A.h),A.h=null))}if(f.D){const ts=Ce.g?Ce.g.getResponseHeader("X-HTTP-Session-Id"):null;ts&&(f.ya=ts,J(f.I,f.D,ts))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var C=s;if(f.qa=La(f,f.J?f.ia:null,f.W),C.K){ua(f.h,C);var Q=C,ae=f.L;ae&&(Q.I=ae),Q.B&&(Ki(Q),wr(Q)),f.g=C}else ka(f);0<u.i.length&&Dr(u)}else W[0]!="stop"&&W[0]!="close"||At(u,7);else u.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?At(u,7):Xi(u):W[0]!="noop"&&u.l&&u.l.ta(W),u.v=0)}}vn(4)}catch{}}var Kh=class{constructor(s,c){this.g=s,this.map=c}};function aa(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ca(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function la(s){return s.h?1:s.g?s.g.size:0}function Qi(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Yi(s,c){s.g?s.g.add(c):s.h=c}function ua(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}aa.prototype.cancel=function(){if(this.i=ha(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ha(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const u of s.g.values())c=c.concat(u.D);return c}return V(s.i)}function Gh(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var c=[],u=s.length,f=0;f<u;f++)c.push(s[f]);return c}c=[],u=0;for(f in s)c[u++]=s[f];return c}function Qh(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var c=[];s=s.length;for(var u=0;u<s;u++)c.push(u);return c}c=[],u=0;for(const f in s)c[u++]=f;return c}}}function da(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var u=Qh(s),f=Gh(s),T=f.length,A=0;A<T;A++)c.call(void 0,f[A],u&&u[A],s)}var fa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yh(s,c){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var f=s[u].indexOf("="),T=null;if(0<=f){var A=s[u].substring(0,f);T=s[u].substring(f+1)}else A=s[u];c(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function wt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof wt){this.h=s.h,Ar(this,s.j),this.o=s.o,this.g=s.g,Rr(this,s.s),this.l=s.l;var c=s.i,u=new Rn;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),pa(this,u),this.m=s.m}else s&&(c=String(s).match(fa))?(this.h=!1,Ar(this,c[1]||"",!0),this.o=wn(c[2]||""),this.g=wn(c[3]||"",!0),Rr(this,c[4]),this.l=wn(c[5]||"",!0),pa(this,c[6]||"",!0),this.m=wn(c[7]||"")):(this.h=!1,this.i=new Rn(null,this.h))}wt.prototype.toString=function(){var s=[],c=this.j;c&&s.push(An(c,ma,!0),":");var u=this.g;return(u||c=="file")&&(s.push("//"),(c=this.o)&&s.push(An(c,ma,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(An(u,u.charAt(0)=="/"?Zh:Xh,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",An(u,td)),s.join("")};function Be(s){return new wt(s)}function Ar(s,c,u){s.j=u?wn(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Rr(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function pa(s,c,u){c instanceof Rn?(s.i=c,nd(s.i,s.h)):(u||(c=An(c,ed)),s.i=new Rn(c,s.h))}function J(s,c,u){s.i.set(c,u)}function Sr(s){return J(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function wn(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function An(s,c,u){return typeof s=="string"?(s=encodeURI(s).replace(c,Jh),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Jh(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var ma=/[#\/\?@]/g,Xh=/[#\?:]/g,Zh=/[#\?]/g,ed=/[#\?@]/g,td=/#/g;function Rn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function tt(s){s.g||(s.g=new Map,s.h=0,s.i&&Yh(s.i,function(c,u){s.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=Rn.prototype,n.add=function(s,c){tt(this),this.i=null,s=Ft(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(c),this.h+=1,this};function ga(s,c){tt(s),c=Ft(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function _a(s,c){return tt(s),c=Ft(s,c),s.g.has(c)}n.forEach=function(s,c){tt(this),this.g.forEach(function(u,f){u.forEach(function(T){s.call(c,T,f,this)},this)},this)},n.na=function(){tt(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let f=0;f<c.length;f++){const T=s[f];for(let A=0;A<T.length;A++)u.push(c[f])}return u},n.V=function(s){tt(this);let c=[];if(typeof s=="string")_a(this,s)&&(c=c.concat(this.g.get(Ft(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)c=c.concat(s[u])}return c},n.set=function(s,c){return tt(this),this.i=null,s=Ft(this,s),_a(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function ya(s,c,u){ga(s,c),0<u.length&&(s.i=null,s.g.set(Ft(s,c),V(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var f=c[u];const A=encodeURIComponent(String(f)),C=this.V(f);for(f=0;f<C.length;f++){var T=A;C[f]!==""&&(T+="="+encodeURIComponent(String(C[f]))),s.push(T)}}return this.i=s.join("&")};function Ft(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function nd(s,c){c&&!s.j&&(tt(s),s.i=null,s.g.forEach(function(u,f){var T=f.toLowerCase();f!=T&&(ga(this,f),ya(this,T,u))},s)),s.j=c}function rd(s,c){const u=new Tn;if(l.Image){const f=new Image;f.onload=S(nt,u,"TestLoadImage: loaded",!0,c,f),f.onerror=S(nt,u,"TestLoadImage: error",!1,c,f),f.onabort=S(nt,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(nt,u,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function id(s,c){const u=new Tn,f=new AbortController,T=setTimeout(()=>{f.abort(),nt(u,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(A=>{clearTimeout(T),A.ok?nt(u,"TestPingServer: ok",!0,c):nt(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),nt(u,"TestPingServer: error",!1,c)})}function nt(s,c,u,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(u)}catch{}}function sd(){this.g=new jh}function od(s,c,u){const f=u||"";try{da(s,function(T,A){let C=T;d(T)&&(C=Bi(T)),c.push(f+A+"="+encodeURIComponent(C))})}catch(T){throw c.push(f+"type="+encodeURIComponent("_badmap")),T}}function Pr(s){this.l=s.Ub||null,this.j=s.eb||!1}k(Pr,ji),Pr.prototype.g=function(){return new br(this.l,this.j)},Pr.prototype.i=function(s){return function(){return s}}({});function br(s,c){fe.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(br,fe),n=br.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,Pn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;va(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function va(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Sn(this):Pn(this),this.readyState==3&&va(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Sn(this))},n.Qa=function(s){this.g&&(this.response=s,Sn(this))},n.ga=function(){this.g&&Sn(this)};function Sn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Pn(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=c.next();return s.join(`\r
`)};function Pn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(br.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ea(s){let c="";return X(s,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function Ji(s,c,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=Ea(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):J(s,c,u))}function ee(s){fe.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ee,fe);var ad=/^https?$/i,cd=["POST","PUT"];n=ee.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zi.g(),this.v=this.o?Qo(this.o):Qo(zi),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(A){Ta(this,A);return}if(s=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)u.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())u.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(A=>A.toLowerCase()=="content-type"),T=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(cd,c,void 0))||f||T||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of u)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Aa(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){Ta(this,A)}};function Ta(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,Ia(s),Cr(s)}function Ia(s){s.A||(s.A=!0,Ee(s,"complete"),Ee(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Ee(this,"complete"),Ee(this,"abort"),Cr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cr(this,!0)),ee.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?wa(this):this.bb())},n.bb=function(){wa(this)};function wa(s){if(s.h&&typeof a<"u"&&(!s.v[1]||je(s)!=4||s.Z()!=2)){if(s.u&&je(s)==4)Ho(s.Ea,0,s);else if(Ee(s,"readystatechange"),je(s)==4){s.h=!1;try{const C=s.Z();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var f;if(f=C===0){var T=String(s.D).match(fa)[1]||null;!T&&l.self&&l.self.location&&(T=l.self.location.protocol.slice(0,-1)),f=!ad.test(T?T.toLowerCase():"")}u=f}if(u)Ee(s,"complete"),Ee(s,"success");else{s.m=6;try{var A=2<je(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",Ia(s)}}finally{Cr(s)}}}}function Cr(s,c){if(s.g){Aa(s);const u=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Ee(s,"ready");try{u.onreadystatechange=f}catch{}}}function Aa(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function je(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<je(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),Bh(c)}};function Ra(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function ld(s){const c={};s=(s.g&&2<=je(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(H(s[f]))continue;var u=E(s[f]);const T=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const A=c[T]||[];c[T]=A,A.push(u)}v(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bn(s,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||c}function Sa(s){this.Aa=0,this.i=[],this.j=new Tn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bn("baseRetryDelayMs",5e3,s),this.cb=bn("retryDelaySeedMs",1e4,s),this.Wa=bn("forwardChannelMaxRetries",2,s),this.wa=bn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new aa(s&&s.concurrentRequestLimit),this.Da=new sd,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Sa.prototype,n.la=8,n.G=1,n.connect=function(s,c,u,f){Te(0),this.W=s,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=La(this,null,this.W),Dr(this)};function Xi(s){if(Pa(s),s.G==3){var c=s.U++,u=Be(s.I);if(J(u,"SID",s.K),J(u,"RID",c),J(u,"TYPE","terminate"),Cn(s,u),c=new et(s,s.j,c),c.L=2,c.v=Sr(Be(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=Ma(c.j,null),c.g.ea(c.v)),c.F=Date.now(),wr(c)}Oa(s)}function kr(s){s.g&&(es(s),s.g.cancel(),s.g=null)}function Pa(s){kr(s),s.u&&(l.clearTimeout(s.u),s.u=null),Vr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function Dr(s){if(!ca(s.h)&&!s.s){s.s=!0;var c=s.Ga;pn||Bo(),mn||(pn(),mn=!0),Vi.add(c,s),s.B=0}}function ud(s,c){return la(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=En(R(s.Ga,s,c),Na(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new et(this,this.j,s);let A=this.o;if(this.S&&(A?(A=m(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=Ca(this,T,c),u=Be(this.I),J(u,"RID",s),J(u,"CVER",22),this.D&&J(u,"X-HTTP-Session-Id",this.D),Cn(this,u),A&&(this.O?c="headers="+encodeURIComponent(String(Ea(A)))+"&"+c:this.m&&Ji(u,this.m,A)),Yi(this.h,T),this.Ua&&J(u,"TYPE","init"),this.P?(J(u,"$req",c),J(u,"SID","null"),T.T=!0,Wi(T,u,null)):Wi(T,u,c),this.G=2}}else this.G==3&&(s?ba(this,s):this.i.length==0||ca(this.h)||ba(this))};function ba(s,c){var u;c?u=c.l:u=s.U++;const f=Be(s.I);J(f,"SID",s.K),J(f,"RID",u),J(f,"AID",s.T),Cn(s,f),s.m&&s.o&&Ji(f,s.m,s.o),u=new et(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),c&&(s.i=c.D.concat(s.i)),c=Ca(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Yi(s.h,u),Wi(u,f,c)}function Cn(s,c){s.H&&X(s.H,function(u,f){J(c,f,u)}),s.l&&da({},function(u,f){J(c,f,u)})}function Ca(s,c,u){u=Math.min(s.i.length,u);var f=s.l?R(s.l.Na,s.l,s):null;e:{var T=s.i;let A=-1;for(;;){const C=["count="+u];A==-1?0<u?(A=T[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let Q=!0;for(let ae=0;ae<u;ae++){let W=T[ae].g;const pe=T[ae].map;if(W-=A,0>W)A=Math.max(0,T[ae].g-100),Q=!1;else try{od(pe,C,"req"+W+"_")}catch{f&&f(pe)}}if(Q){f=C.join("&");break e}}}return s=s.i.splice(0,u),c.D=s,f}function ka(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;pn||Bo(),mn||(pn(),mn=!0),Vi.add(c,s),s.v=0}}function Zi(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=En(R(s.Fa,s),Na(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Da(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=En(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Te(10),kr(this),Da(this))};function es(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function Da(s){s.g=new et(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=Be(s.qa);J(c,"RID","rpc"),J(c,"SID",s.K),J(c,"AID",s.T),J(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&J(c,"TO",s.ja),J(c,"TYPE","xmlhttp"),Cn(s,c),s.m&&s.o&&Ji(c,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=Sr(Be(c)),u.m=null,u.P=!0,ia(u,s)}n.Za=function(){this.C!=null&&(this.C=null,kr(this),Zi(this),Te(19))};function Vr(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Va(s,c){var u=null;if(s.g==c){Vr(s),es(s),s.g=null;var f=2}else if(Qi(s.h,c))u=c.D,ua(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var T=s.B;f=Er(),Ee(f,new ea(f,u)),Dr(s)}else ka(s);else if(T=c.s,T==3||T==0&&0<c.X||!(f==1&&ud(s,c)||f==2&&Zi(s)))switch(u&&0<u.length&&(c=s.h,c.i=c.i.concat(u)),T){case 1:At(s,5);break;case 4:At(s,10);break;case 3:At(s,6);break;default:At(s,2)}}}function Na(s,c){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*c}function At(s,c){if(s.j.info("Error code "+c),c==2){var u=R(s.fb,s),f=s.Xa;const T=!f;f=new wt(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ar(f,"https"),Sr(f),T?rd(f.toString(),u):id(f.toString(),u)}else Te(2);s.G=0,s.l&&s.l.sa(c),Oa(s),Pa(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Te(2)):(this.j.info("Failed to ping google.com"),Te(1))};function Oa(s){if(s.G=0,s.ka=[],s.l){const c=ha(s.h);(c.length!=0||s.i.length!=0)&&(D(s.ka,c),D(s.ka,s.i),s.h.i.length=0,V(s.i),s.i.length=0),s.l.ra()}}function La(s,c,u){var f=u instanceof wt?Be(u):new wt(u);if(f.g!="")c&&(f.g=c+"."+f.g),Rr(f,f.s);else{var T=l.location;f=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;var A=new wt(null);f&&Ar(A,f),c&&(A.g=c),T&&Rr(A,T),u&&(A.l=u),f=A}return u=s.D,c=s.ya,u&&c&&J(f,u,c),J(f,"VER",s.la),Cn(s,f),f}function Ma(s,c,u){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new ee(new Pr({eb:u})):new ee(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xa(){}n=xa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Nr(){}Nr.prototype.g=function(s,c){return new Re(s,c)};function Re(s,c){fe.call(this),this.g=new Sa(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!H(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!H(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Ut(this)}k(Re,fe),Re.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Re.prototype.close=function(){Xi(this.g)},Re.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=Bi(s),s=u);c.i.push(new Kh(c.Ya++,s)),c.G==3&&Dr(c)},Re.prototype.N=function(){this.g.l=null,delete this.j,Xi(this.g),delete this.g,Re.aa.N.call(this)};function Fa(s){$i.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const u in c){s=u;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}k(Fa,$i);function Ua(){qi.call(this),this.status=1}k(Ua,qi);function Ut(s){this.g=s}k(Ut,xa),Ut.prototype.ua=function(){Ee(this.g,"a")},Ut.prototype.ta=function(s){Ee(this.g,new Fa(s))},Ut.prototype.sa=function(s){Ee(this.g,new Ua)},Ut.prototype.ra=function(){Ee(this.g,"b")},Nr.prototype.createWebChannel=Nr.prototype.g,Re.prototype.send=Re.prototype.o,Re.prototype.open=Re.prototype.m,Re.prototype.close=Re.prototype.close,uu=function(){return new Nr},lu=function(){return Er()},cu=Tt,Rs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Tr.NO_ERROR=0,Tr.TIMEOUT=8,Tr.HTTP_ERROR=6,Gr=Tr,ta.COMPLETE="complete",au=ta,Yo.EventType=yn,yn.OPEN="a",yn.CLOSE="b",yn.ERROR="c",yn.MESSAGE="d",fe.prototype.listen=fe.prototype.K,Nn=Yo,ee.prototype.listenOnce=ee.prototype.L,ee.prototype.getLastError=ee.prototype.Ka,ee.prototype.getLastErrorCode=ee.prototype.Ba,ee.prototype.getStatus=ee.prototype.Z,ee.prototype.getResponseJson=ee.prototype.Oa,ee.prototype.getResponseText=ee.prototype.oa,ee.prototype.send=ee.prototype.ea,ee.prototype.setWithCredentials=ee.prototype.Ha,ou=ee}).apply(typeof Mr<"u"?Mr:typeof self<"u"?self:typeof window<"u"?window:{});const _c="@firebase/firestore";/**
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
 */class _e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_e.UNAUTHENTICATED=new _e(null),_e.GOOGLE_CREDENTIALS=new _e("google-credentials-uid"),_e.FIRST_PARTY=new _e("first-party-uid"),_e.MOCK_USER=new _e("mock-user");/**
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
 */let ln="10.14.0";/**
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
 */const Dt=new Bs("@firebase/firestore");function kn(){return Dt.logLevel}function N(n,...e){if(Dt.logLevel<=$.DEBUG){const t=e.map(Xs);Dt.debug(`Firestore (${ln}): ${n}`,...t)}}function Ye(n,...e){if(Dt.logLevel<=$.ERROR){const t=e.map(Xs);Dt.error(`Firestore (${ln}): ${n}`,...t)}}function Zt(n,...e){if(Dt.logLevel<=$.WARN){const t=e.map(Xs);Dt.warn(`Firestore (${ln}): ${n}`,...t)}}function Xs(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function x(n="Unexpected state"){const e=`FIRESTORE (${ln}) INTERNAL ASSERTION FAILED: `+n;throw Ye(e),new Error(e)}function G(n,e){n||x()}function U(n,e){return n}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Xe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class hu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(_e.UNAUTHENTICATED))}shutdown(){}}class og{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ag{constructor(e){this.t=e,this.currentUser=_e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new mt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},l=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new mt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string"),new hu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string"),new _e(e)}}class cg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=_e.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lg{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new cg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(_e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ug{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){G(this.o===void 0);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string"),this.R=t.token,new ug(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function dg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class du{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=dg(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}}function K(n,e){return n<e?-1:n>e?1:0}function en(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class se{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new O(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new se(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new se(0,0))}static max(){return new F(new se(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Hn{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(),r===void 0?r=e.length-t:r>e.length-t&&x(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Hn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Hn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=e.get(i),a=t.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class te extends Hn{construct(e,t,r){return new te(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new te(t)}static emptyPath(){return new te([])}}const fg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class le extends Hn{construct(e,t,r){return new le(e,t,r)}static isValidIdentifier(e){return fg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new le(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new O(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new O(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(o(),i++)}if(o(),a)throw new O(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new le(t)}static emptyPath(){return new le([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(te.fromString(e))}static fromName(e){return new L(te.fromString(e).popFirst(5))}static empty(){return new L(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new te(e.slice()))}}function pg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new se(t+1,0):new se(t,r));return new gt(i,L.empty(),e)}function mg(n){return new gt(n.readTime,n.key,-1)}class gt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new gt(F.min(),L.empty(),-1)}static max(){return new gt(F.max(),L.empty(),-1)}}function gg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:K(n.largestBatchId,e.largestBatchId))}/**
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
 */const _g="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function lr(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==_g)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let i=0,o=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(i=>i?P.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new P((r,i)=>{const o=e.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(p=>{a[d]=p,++l,l===o&&r(a)},p=>i(p))}})}static doWhile(e,t){return new P((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function vg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ur(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Zs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Zs.oe=-1;function Ti(n){return n==null}function ai(n){return n===0&&1/n==-1/0}function Eg(n){return typeof n=="number"&&Number.isInteger(n)&&!ai(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function yc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function un(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function fu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Z{constructor(e,t){this.comparator=e,this.root=t||ce.EMPTY}insert(e,t){return new Z(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ce.BLACK,null,null))}remove(e){return new Z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ce.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xr(this.root,e,this.comparator,!1)}getReverseIterator(){return new xr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xr(this.root,e,this.comparator,!0)}}class xr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ce{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??ce.RED,this.left=i??ce.EMPTY,this.right=o??ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new ce(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ce.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const e=this.left.check();if(e!==this.right.check())throw x();return e+(this.isRed()?0:1)}}ce.EMPTY=null,ce.RED=!0,ce.BLACK=!1;ce.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(e,t,r,i,o){return this}insert(e,t,r){return new ce(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ue{constructor(e){this.comparator=e,this.data=new Z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vc(this.data.getIterator())}getIteratorFrom(e){return new vc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ue(this.comparator);return t.data=e,t}}class vc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ke{constructor(e){this.fields=e,e.sort(le.comparator)}static empty(){return new ke([])}unionWith(e){let t=new ue(le.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ke(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return en(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class pu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class he{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new pu("Invalid base64 string: "+o):o}}(e);return new he(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new he(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const Tg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _t(n){if(G(!!n),typeof n=="string"){let e=0;const t=Tg.exec(n);if(G(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ne(n.seconds),nanos:ne(n.nanos)}}function ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vt(n){return typeof n=="string"?he.fromBase64String(n):he.fromUint8Array(n)}/**
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
 */function eo(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function to(n){const e=n.mapValue.fields.__previous_value__;return eo(e)?to(e):e}function Wn(n){const e=_t(n.mapValue.fields.__local_write_time__.timestampValue);return new se(e.seconds,e.nanos)}/**
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
 */class Ig{constructor(e,t,r,i,o,a,l,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d}}class Kn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Kn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Kn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Fr={mapValue:{}};function Nt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?eo(n)?4:Ag(n)?9007199254740991:wg(n)?10:11:x()}function xe(n,e){if(n===e)return!0;const t=Nt(n);if(t!==Nt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Wn(n).isEqual(Wn(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=_t(i.timestampValue),l=_t(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return Vt(i.bytesValue).isEqual(Vt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return ne(i.geoPointValue.latitude)===ne(o.geoPointValue.latitude)&&ne(i.geoPointValue.longitude)===ne(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ne(i.integerValue)===ne(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=ne(i.doubleValue),l=ne(o.doubleValue);return a===l?ai(a)===ai(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return en(n.arrayValue.values||[],e.arrayValue.values||[],xe);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},l=o.mapValue.fields||{};if(yc(a)!==yc(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!xe(a[h],l[h])))return!1;return!0}(n,e);default:return x()}}function Gn(n,e){return(n.values||[]).find(t=>xe(t,e))!==void 0}function tn(n,e){if(n===e)return 0;const t=Nt(n),r=Nt(e);if(t!==r)return K(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,e.booleanValue);case 2:return function(o,a){const l=ne(o.integerValue||o.doubleValue),h=ne(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,e);case 3:return Ec(n.timestampValue,e.timestampValue);case 4:return Ec(Wn(n),Wn(e));case 5:return K(n.stringValue,e.stringValue);case 6:return function(o,a){const l=Vt(o),h=Vt(a);return l.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const p=K(l[d],h[d]);if(p!==0)return p}return K(l.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const l=K(ne(o.latitude),ne(a.latitude));return l!==0?l:K(ne(o.longitude),ne(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Tc(n.arrayValue,e.arrayValue);case 10:return function(o,a){var l,h,d,p;const I=o.fields||{},R=a.fields||{},S=(l=I.value)===null||l===void 0?void 0:l.arrayValue,k=(h=R.value)===null||h===void 0?void 0:h.arrayValue,V=K(((d=S?.values)===null||d===void 0?void 0:d.length)||0,((p=k?.values)===null||p===void 0?void 0:p.length)||0);return V!==0?V:Tc(S,k)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Fr.mapValue&&a===Fr.mapValue)return 0;if(o===Fr.mapValue)return 1;if(a===Fr.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let I=0;I<h.length&&I<p.length;++I){const R=K(h[I],p[I]);if(R!==0)return R;const S=tn(l[h[I]],d[p[I]]);if(S!==0)return S}return K(h.length,p.length)}(n.mapValue,e.mapValue);default:throw x()}}function Ec(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return K(n,e);const t=_t(n),r=_t(e),i=K(t.seconds,r.seconds);return i!==0?i:K(t.nanos,r.nanos)}function Tc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=tn(t[i],r[i]);if(o)return o}return K(t.length,r.length)}function nn(n){return Ss(n)}function Ss(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=_t(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Vt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=Ss(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ss(t.fields[a])}`;return i+"}"}(n.mapValue):x()}function Ps(n){return!!n&&"integerValue"in n}function no(n){return!!n&&"arrayValue"in n}function Ic(n){return!!n&&"nullValue"in n}function wc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Qr(n){return!!n&&"mapValue"in n}function wg(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function xn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return un(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=xn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Ag(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Pe{constructor(e){this.value=e}static empty(){return new Pe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Qr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xn(t)}setAll(e){let t=le.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=xn(a):i.push(l.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Qr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Qr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){un(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Pe(xn(this.value))}}function mu(n){const e=[];return un(n.fields,(t,r)=>{const i=new le([t]);if(Qr(r)){const o=mu(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new ke(e)}/**
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
 */class ye{constructor(e,t,r,i,o,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(e){return new ye(e,0,F.min(),F.min(),F.min(),Pe.empty(),0)}static newFoundDocument(e,t,r,i){return new ye(e,1,t,F.min(),r,i,0)}static newNoDocument(e,t){return new ye(e,2,t,F.min(),F.min(),Pe.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,F.min(),F.min(),Pe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ci{constructor(e,t){this.position=e,this.inclusive=t}}function Ac(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=tn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!xe(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class li{constructor(e,t="asc"){this.field=e,this.dir=t}}function Rg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class gu{}class ie extends gu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Pg(e,t,r):t==="array-contains"?new kg(e,r):t==="in"?new Dg(e,r):t==="not-in"?new Vg(e,r):t==="array-contains-any"?new Ng(e,r):new ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new bg(e,r):new Cg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(tn(t,this.value)):t!==null&&Nt(this.value)===Nt(t)&&this.matchesComparison(tn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fe extends gu{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Fe(e,t)}matches(e){return _u(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function _u(n){return n.op==="and"}function yu(n){return Sg(n)&&_u(n)}function Sg(n){for(const e of n.filters)if(e instanceof Fe)return!1;return!0}function bs(n){if(n instanceof ie)return n.field.canonicalString()+n.op.toString()+nn(n.value);if(yu(n))return n.filters.map(e=>bs(e)).join(",");{const e=n.filters.map(t=>bs(t)).join(",");return`${n.op}(${e})`}}function vu(n,e){return n instanceof ie?function(r,i){return i instanceof ie&&r.op===i.op&&r.field.isEqual(i.field)&&xe(r.value,i.value)}(n,e):n instanceof Fe?function(r,i){return i instanceof Fe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,l)=>o&&vu(a,i.filters[l]),!0):!1}(n,e):void x()}function Eu(n){return n instanceof ie?function(t){return`${t.field.canonicalString()} ${t.op} ${nn(t.value)}`}(n):n instanceof Fe?function(t){return t.op.toString()+" {"+t.getFilters().map(Eu).join(" ,")+"}"}(n):"Filter"}class Pg extends ie{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class bg extends ie{constructor(e,t){super(e,"in",t),this.keys=Tu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Cg extends ie{constructor(e,t){super(e,"not-in",t),this.keys=Tu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Tu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class kg extends ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return no(t)&&Gn(t.arrayValue,this.value)}}class Dg extends ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gn(this.value.arrayValue,t)}}class Vg extends ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Gn(this.value.arrayValue,t)}}class Ng extends ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!no(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Gn(this.value.arrayValue,r))}}/**
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
 */class Og{constructor(e,t=null,r=[],i=[],o=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function Sc(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Og(n,e,t,r,i,o,a)}function ro(n){const e=U(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>bs(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ti(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>nn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>nn(r)).join(",")),e.ue=t}return e.ue}function io(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Rg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!vu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Rc(n.startAt,e.startAt)&&Rc(n.endAt,e.endAt)}function Cs(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ii{constructor(e,t=null,r=[],i=[],o=null,a="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Lg(n,e,t,r,i,o,a,l){return new Ii(n,e,t,r,i,o,a,l)}function so(n){return new Ii(n)}function Pc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Mg(n){return n.collectionGroup!==null}function Fn(n){const e=U(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ue(le.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new li(o,r))}),t.has(le.keyField().canonicalString())||e.ce.push(new li(le.keyField(),r))}return e.ce}function Le(n){const e=U(n);return e.le||(e.le=xg(e,Fn(n))),e.le}function xg(n,e){if(n.limitType==="F")return Sc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new li(i.field,o)});const t=n.endAt?new ci(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ci(n.startAt.position,n.startAt.inclusive):null;return Sc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ks(n,e,t){return new Ii(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function wi(n,e){return io(Le(n),Le(e))&&n.limitType===e.limitType}function Iu(n){return`${ro(Le(n))}|lt:${n.limitType}`}function $t(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Eu(i)).join(", ")}]`),Ti(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>nn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>nn(i)).join(",")),`Target(${r})`}(Le(n))}; limitType=${n.limitType})`}function Ai(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of Fn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,h){const d=Ac(a,l,h);return a.inclusive?d<=0:d<0}(r.startAt,Fn(r),i)||r.endAt&&!function(a,l,h){const d=Ac(a,l,h);return a.inclusive?d>=0:d>0}(r.endAt,Fn(r),i))}(n,e)}function Fg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function wu(n){return(e,t)=>{let r=!1;for(const i of Fn(n)){const o=Ug(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Ug(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?tn(h,d):x()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
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
 */class hn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){un(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return fu(this.inner)}size(){return this.innerSize}}/**
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
 */const Bg=new Z(L.comparator);function Je(){return Bg}const Au=new Z(L.comparator);function On(...n){let e=Au;for(const t of n)e=e.insert(t.key,t);return e}function Ru(n){let e=Au;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function St(){return Un()}function Su(){return Un()}function Un(){return new hn(n=>n.toString(),(n,e)=>n.isEqual(e))}const jg=new Z(L.comparator),$g=new ue(L.comparator);function B(...n){let e=$g;for(const t of n)e=e.add(t);return e}const qg=new ue(K);function zg(){return qg}/**
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
 */function oo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ai(e)?"-0":e}}function Pu(n){return{integerValue:""+n}}function Hg(n,e){return Eg(e)?Pu(e):oo(n,e)}/**
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
 */class Ri{constructor(){this._=void 0}}function Wg(n,e,t){return n instanceof ui?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&eo(o)&&(o=to(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof Qn?Cu(n,e):n instanceof Yn?ku(n,e):function(i,o){const a=bu(i,o),l=bc(a)+bc(i.Pe);return Ps(a)&&Ps(i.Pe)?Pu(l):oo(i.serializer,l)}(n,e)}function Kg(n,e,t){return n instanceof Qn?Cu(n,e):n instanceof Yn?ku(n,e):t}function bu(n,e){return n instanceof hi?function(r){return Ps(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class ui extends Ri{}class Qn extends Ri{constructor(e){super(),this.elements=e}}function Cu(n,e){const t=Du(e);for(const r of n.elements)t.some(i=>xe(i,r))||t.push(r);return{arrayValue:{values:t}}}class Yn extends Ri{constructor(e){super(),this.elements=e}}function ku(n,e){let t=Du(e);for(const r of n.elements)t=t.filter(i=>!xe(i,r));return{arrayValue:{values:t}}}class hi extends Ri{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function bc(n){return ne(n.integerValue||n.doubleValue)}function Du(n){return no(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Gg(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Qn&&i instanceof Qn||r instanceof Yn&&i instanceof Yn?en(r.elements,i.elements,xe):r instanceof hi&&i instanceof hi?xe(r.Pe,i.Pe):r instanceof ui&&i instanceof ui}(n.transform,e.transform)}class Qg{constructor(e,t){this.version=e,this.transformResults=t}}class Ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ke}static exists(e){return new Ke(void 0,e)}static updateTime(e){return new Ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Si{}function Vu(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ou(n.key,Ke.none()):new hr(n.key,n.data,Ke.none());{const t=n.data,r=Pe.empty();let i=new ue(le.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Lt(n.key,r,new ke(i.toArray()),Ke.none())}}function Yg(n,e,t){n instanceof hr?function(i,o,a){const l=i.value.clone(),h=kc(i.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Lt?function(i,o,a){if(!Yr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const l=kc(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Nu(i)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Bn(n,e,t,r){return n instanceof hr?function(o,a,l,h){if(!Yr(o.precondition,a))return l;const d=o.value.clone(),p=Dc(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Lt?function(o,a,l,h){if(!Yr(o.precondition,a))return l;const d=Dc(o.fieldTransforms,h,a),p=a.data;return p.setAll(Nu(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,e,t,r):function(o,a,l){return Yr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Jg(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=bu(r.transform,i||null);o!=null&&(t===null&&(t=Pe.empty()),t.set(r.field,o))}return t||null}function Cc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&en(r,i,(o,a)=>Gg(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class hr extends Si{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Lt extends Si{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Nu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function kc(n,e,t){const r=new Map;G(n.length===t.length);for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,l=e.data.field(o.field);r.set(o.field,Kg(a,l,t[i]))}return r}function Dc(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,Wg(o,a,e))}return r}class Ou extends Si{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Xg extends Si{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Zg{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Yg(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Bn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Bn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Su();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=t.has(i.key)?null:l;const h=Vu(a,l);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),B())}isEqual(e){return this.batchId===e.batchId&&en(this.mutations,e.mutations,(t,r)=>Cc(t,r))&&en(this.baseMutations,e.baseMutations,(t,r)=>Cc(t,r))}}class ao{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){G(e.mutations.length===r.length);let i=function(){return jg}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new ao(e,t,r,i)}}/**
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
 */class e_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class t_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var re,z;function n_(n){switch(n){default:return x();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Lu(n){if(n===void 0)return Ye("GRPC error has no .code"),b.UNKNOWN;switch(n){case re.OK:return b.OK;case re.CANCELLED:return b.CANCELLED;case re.UNKNOWN:return b.UNKNOWN;case re.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case re.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case re.INTERNAL:return b.INTERNAL;case re.UNAVAILABLE:return b.UNAVAILABLE;case re.UNAUTHENTICATED:return b.UNAUTHENTICATED;case re.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case re.NOT_FOUND:return b.NOT_FOUND;case re.ALREADY_EXISTS:return b.ALREADY_EXISTS;case re.PERMISSION_DENIED:return b.PERMISSION_DENIED;case re.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case re.ABORTED:return b.ABORTED;case re.OUT_OF_RANGE:return b.OUT_OF_RANGE;case re.UNIMPLEMENTED:return b.UNIMPLEMENTED;case re.DATA_LOSS:return b.DATA_LOSS;default:return x()}}(z=re||(re={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function r_(){return new TextEncoder}/**
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
 */const i_=new Pt([4294967295,4294967295],0);function Vc(n){const e=r_().encode(n),t=new su;return t.update(e),new Uint8Array(t.digest())}function Nc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Pt([t,r],0),new Pt([i,o],0)]}class co{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ln(`Invalid padding: ${t}`);if(r<0)throw new Ln(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ln(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ln(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Pt.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Pt.fromNumber(r)));return i.compare(i_)===1&&(i=new Pt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Vc(e),[r,i]=Nc(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new co(o,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=Vc(e),[r,i]=Nc(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ln extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pi{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,dr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Pi(F.min(),i,new Z(K),Je(),B())}}class dr{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new dr(r,t,B(),B(),B())}}/**
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
 */class Jr{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Mu{constructor(e,t){this.targetId=e,this.me=t}}class xu{constructor(e,t,r=he.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Oc{constructor(){this.fe=0,this.ge=Mc(),this.pe=he.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=B(),t=B(),r=B();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:x()}}),new dr(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Mc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,G(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class s_{constructor(e){this.Le=e,this.Be=new Map,this.ke=Je(),this.qe=Lc(),this.Qe=new Z(K)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:x()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const o=i.target;if(Cs(o))if(r===0){const a=new L(o.path);this.Ue(t,a,ye.newNoDocument(a,F.min()))}else G(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),h=l?this.Xe(l,e,a):1;if(h!==0){this.je(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let a,l;try{a=Vt(r).toUint8Array()}catch(h){if(h instanceof pu)return Zt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new co(a,i,o)}catch(h){return Zt(h instanceof Ln?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,o,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&Cs(l.target)){const h=new L(l.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,ye.newNoDocument(h,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let r=B();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const i=new Pi(e,t,this.Qe,this.ke,r);return this.ke=Je(),this.qe=Lc(),this.Qe=new Z(K),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Oc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ue(K),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Oc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Lc(){return new Z(L.comparator)}function Mc(){return new Z(L.comparator)}const o_={asc:"ASCENDING",desc:"DESCENDING"},a_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},c_={and:"AND",or:"OR"};class l_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ds(n,e){return n.useProto3Json||Ti(e)?e:{value:e}}function di(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fu(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function u_(n,e){return di(n,e.toTimestamp())}function Me(n){return G(!!n),F.fromTimestamp(function(t){const r=_t(t);return new se(r.seconds,r.nanos)}(n))}function lo(n,e){return Vs(n,e).canonicalString()}function Vs(n,e){const t=function(i){return new te(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Uu(n){const e=te.fromString(n);return G(zu(e)),e}function Ns(n,e){return lo(n.databaseId,e.path)}function ls(n,e){const t=Uu(e);if(t.get(1)!==n.databaseId.projectId)throw new O(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(ju(t))}function Bu(n,e){return lo(n.databaseId,e)}function h_(n){const e=Uu(n);return e.length===4?te.emptyPath():ju(e)}function Os(n){return new te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ju(n){return G(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function xc(n,e,t){return{name:Ns(n,e),fields:t.value.mapValue.fields}}function d_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(G(p===void 0||typeof p=="string"),he.fromBase64String(p||"")):(G(p===void 0||p instanceof Buffer||p instanceof Uint8Array),he.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const p=d.code===void 0?b.UNKNOWN:Lu(d.code);return new O(p,d.message||"")}(a);t=new xu(r,i,o,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ls(n,r.document.name),o=Me(r.document.updateTime),a=r.document.createTime?Me(r.document.createTime):F.min(),l=new Pe({mapValue:{fields:r.document.fields}}),h=ye.newFoundDocument(i,o,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Jr(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ls(n,r.document),o=r.readTime?Me(r.readTime):F.min(),a=ye.newNoDocument(i,o),l=r.removedTargetIds||[];t=new Jr([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ls(n,r.document),o=r.removedTargetIds||[];t=new Jr([],o,i,null)}else{if(!("filter"in e))return x();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new t_(i,o),l=r.targetId;t=new Mu(l,a)}}return t}function f_(n,e){let t;if(e instanceof hr)t={update:xc(n,e.key,e.value)};else if(e instanceof Ou)t={delete:Ns(n,e.key)};else if(e instanceof Lt)t={update:xc(n,e.key,e.data),updateMask:I_(e.fieldMask)};else{if(!(e instanceof Xg))return x();t={verify:Ns(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof ui)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Qn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Yn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof hi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw x()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:u_(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x()}(n,e.precondition)),t}function p_(n,e){return n&&n.length>0?(G(e!==void 0),n.map(t=>function(i,o){let a=i.updateTime?Me(i.updateTime):Me(o);return a.isEqual(F.min())&&(a=Me(o)),new Qg(a,i.transformResults||[])}(t,e))):[]}function m_(n,e){return{documents:[Bu(n,e.path)]}}function g_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Bu(n,i);const o=function(d){if(d.length!==0)return qu(Fe.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(R){return{field:qt(R.field),direction:v_(R.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Ds(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function __(n){let e=h_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){G(r===1);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(I){const R=$u(I);return R instanceof Fe&&yu(R)?R.getFilters():[R]}(t.where));let a=[];t.orderBy&&(a=function(I){return I.map(R=>function(k){return new li(zt(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(t.orderBy));let l=null;t.limit&&(l=function(I){let R;return R=typeof I=="object"?I.value:I,Ti(R)?null:R}(t.limit));let h=null;t.startAt&&(h=function(I){const R=!!I.before,S=I.values||[];return new ci(S,R)}(t.startAt));let d=null;return t.endAt&&(d=function(I){const R=!I.before,S=I.values||[];return new ci(S,R)}(t.endAt)),Lg(e,i,a,o,l,"F",h,d)}function y_(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function $u(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=zt(t.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=zt(t.unaryFilter.field);return ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=zt(t.unaryFilter.field);return ie.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=zt(t.unaryFilter.field);return ie.create(a,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(t){return ie.create(zt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Fe.create(t.compositeFilter.filters.map(r=>$u(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x()}}(t.compositeFilter.op))}(n):x()}function v_(n){return o_[n]}function E_(n){return a_[n]}function T_(n){return c_[n]}function qt(n){return{fieldPath:n.canonicalString()}}function zt(n){return le.fromServerFormat(n.fieldPath)}function qu(n){return n instanceof ie?function(t){if(t.op==="=="){if(wc(t.value))return{unaryFilter:{field:qt(t.field),op:"IS_NAN"}};if(Ic(t.value))return{unaryFilter:{field:qt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(wc(t.value))return{unaryFilter:{field:qt(t.field),op:"IS_NOT_NAN"}};if(Ic(t.value))return{unaryFilter:{field:qt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qt(t.field),op:E_(t.op),value:t.value}}}(n):n instanceof Fe?function(t){const r=t.getFilters().map(i=>qu(i));return r.length===1?r[0]:{compositeFilter:{op:T_(t.op),filters:r}}}(n):x()}function I_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function zu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ht{constructor(e,t,r,i,o=F.min(),a=F.min(),l=he.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new ht(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class w_{constructor(e){this.ct=e}}function A_(n){const e=__({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ks(e,e.limit,"L"):e}/**
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
 */class R_{constructor(){this.un=new S_}addToCollectionParentIndex(e,t){return this.un.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(gt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(gt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class S_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ue(te.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ue(te.comparator)).toArray()}}/**
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
 */class rn{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new rn(0)}static kn(){return new rn(-1)}}/**
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
 */class P_{constructor(){this.changes=new hn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class b_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class C_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Bn(r.mutation,i,ke.empty(),se.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,B()).next(()=>r))}getLocalViewOfDocuments(e,t,r=B()){const i=St();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=On();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=St();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,B()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let o=Je();const a=Un(),l=function(){return Un()}();return t.forEach((h,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Lt)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Bn(p.mutation,d,p.mutation.getFieldMask(),se.now())):a.set(d.key,ke.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var I;return l.set(d,new b_(p,(I=a.get(d))!==null&&I!==void 0?I:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Un();let i=new Z((a,l)=>a-l),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let p=r.get(h)||ke.empty();p=l.applyToLocalView(d,p),r.set(h,p);const I=(i.get(l.batchId)||B()).add(h);i=i.insert(l.batchId,I)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,p=h.value,I=Su();p.forEach(R=>{if(!o.has(R)){const S=Vu(t.get(R),r.get(R));S!==null&&I.set(R,S),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,I))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Mg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):P.resolve(St());let l=-1,h=o;return a.next(d=>P.forEach(d,(p,I)=>(l<I.largestBatchId&&(l=I.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(R=>{h=h.insert(p,R)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,B())).next(p=>({batchId:l,changes:Ru(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=On();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=On();return this.indexManager.getCollectionParents(e,o).next(l=>P.forEach(l,h=>{const d=function(I,R){return new Ii(R,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((I,R)=>{a=a.insert(I,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,ye.newInvalidDocument(p)))});let l=On();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&Bn(p.mutation,d,ke.empty(),se.now()),Ai(t,d)&&(l=l.insert(h,d))}),l})}}/**
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
 */class k_{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return P.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Me(i.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:A_(i.bundledQuery),readTime:Me(i.readTime)}}(t)),P.resolve()}}/**
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
 */class D_{constructor(){this.overlays=new Z(L.comparator),this.Ir=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=St();return P.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.ht(e,t,o)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const i=St(),o=t.length+1,a=new L(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return P.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new Z((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=St(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=St(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=i)););return P.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new e_(t,r));let o=this.Ir.get(t);o===void 0&&(o=B(),this.Ir.set(t,o)),this.Ir.set(t,o.add(r.key))}}/**
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
 */class V_{constructor(){this.sessionToken=he.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class uo{constructor(){this.Tr=new ue(oe.Er),this.dr=new ue(oe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new oe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new oe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new L(new te([])),r=new oe(t,e),i=new oe(t,e+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new L(new te([])),r=new oe(t,e),i=new oe(t,e+1);let o=B();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new oe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class oe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return L.comparator(e.key,t.key)||K(e.wr,t.wr)}static Ar(e,t){return K(e.wr,t.wr)||L.comparator(e.key,t.key)}}/**
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
 */class N_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ue(oe.Er)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Zg(o,t,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new oe(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new oe(t,0),i=new oe(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);o.push(l)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ue(K);return t.forEach(i=>{const o=new oe(i,0),a=new oe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],l=>{r=r.add(l.wr)})}),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;L.isDocumentKey(o)||(o=o.child(""));const a=new oe(new L(o),0);let l=new ue(K);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(h.wr)),!0)},a),P.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){G(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return P.forEach(t.mutations,i=>{const o=new oe(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new oe(t,0),i=this.br.firstAfterOrEqual(r);return P.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class O_{constructor(e){this.Mr=e,this.docs=function(){return new Z(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let r=Je();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():ye.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=Je();const a=t.path,l=new L(a.child("")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||gg(mg(p),r)<=0||(i.has(p.key)||Ai(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,t,r,i){x()}Or(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new L_(this)}getSize(e){return P.resolve(this.size)}}class L_ extends P_{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class M_{constructor(e){this.persistence=e,this.Nr=new hn(t=>ro(t),io),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Lr=0,this.Br=new uo,this.targetCount=0,this.kr=rn.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),P.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new rn(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Kn(t),P.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.Br.containsKey(t))}}/**
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
 */class x_{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Zs(0),this.Kr=!1,this.Kr=!0,this.$r=new V_,this.referenceDelegate=e(this),this.Ur=new M_(this),this.indexManager=new R_,this.remoteDocumentCache=function(i){return new O_(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new w_(t),this.Gr=new k_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new D_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new N_(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const i=new F_(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,t){return P.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class F_ extends yg{constructor(e){super(),this.currentSequenceNumber=e}}class ho{constructor(e){this.persistence=e,this.Jr=new uo,this.Yr=null}static Zr(e){return new ho(e)}get Xr(){if(this.Yr)return this.Yr;throw x()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),P.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,r=>{const i=L.fromPath(r);return this.ei(e,i).next(o=>{o||t.removeEntry(i,F.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return P.or([()=>P.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class fo{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=B(),i=B();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new fo(e,t.fromCache,r,i)}}/**
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
 */class U_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class B_{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return bd()?8:vg(ve())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.Yi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new U_;return this.Xi(e,t,a).next(l=>{if(o.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>o.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(kn()<=$.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",$t(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(kn()<=$.DEBUG&&N("QueryEngine","Query:",$t(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(kn()<=$.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",$t(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Le(t))):P.resolve())}Yi(e,t){if(Pc(t))return P.resolve(null);let r=Le(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ks(t,null,"F"),r=Le(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=B(...o);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.ts(t,l);return this.ns(t,d,a,h.readTime)?this.Yi(e,ks(t,null,"F")):this.rs(e,d,t,h)}))})))}Zi(e,t,r,i){return Pc(t)||i.isEqual(F.min())?P.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const a=this.ts(t,o);return this.ns(t,a,r,i)?P.resolve(null):(kn()<=$.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$t(t)),this.rs(e,a,t,pg(i,-1)).next(l=>l))})}ts(e,t){let r=new ue(wu(e));return t.forEach((i,o)=>{Ai(e,o)&&(r=r.add(o))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,t,r){return kn()<=$.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",$t(t)),this.Ji.getDocumentsMatchingQuery(e,t,gt.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class j_{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new Z(K),this._s=new hn(o=>ro(o),io),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new C_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function $_(n,e,t,r){return new j_(n,e,t,r)}async function Hu(n,e){const t=U(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=B();for(const d of i){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function q_(n,e){const t=U(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,h,d,p){const I=d.batch,R=I.keys();let S=P.resolve();return R.forEach(k=>{S=S.next(()=>p.getEntry(h,k)).next(V=>{const D=d.docVersions.get(k);G(D!==null),V.version.compareTo(D)<0&&(I.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),p.addEntry(V)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(h,I))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=B();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Wu(n){const e=U(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function z_(n,e){const t=U(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const l=[];e.targetChanges.forEach((p,I)=>{const R=i.get(I);if(!R)return;l.push(t.Ur.removeMatchingKeys(o,p.removedDocuments,I).next(()=>t.Ur.addMatchingKeys(o,p.addedDocuments,I)));let S=R.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(I)!==null?S=S.withResumeToken(he.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),i=i.insert(I,S),function(V,D,q){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(R,S,p)&&l.push(t.Ur.updateTargetData(o,S))});let h=Je(),d=B();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(H_(o,a,e.documentUpdates).next(p=>{h=p.Ps,d=p.Is})),!r.isEqual(F.min())){const p=t.Ur.getLastRemoteSnapshotVersion(o).next(I=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(p)}return P.waitFor(l).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.os=i,o))}function H_(n,e,t){let r=B(),i=B();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=Je();return t.forEach((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(F.min())?(e.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(l,h)):N("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:i}})}function W_(n,e){const t=U(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function K_(n,e){const t=U(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(o=>o?(i=o,P.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new ht(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Ls(n,e,t){const r=U(n),i=r.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!ur(a))throw a;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Fc(n,e,t){const r=U(n);let i=F.min(),o=B();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const I=U(h),R=I._s.get(p);return R!==void 0?P.resolve(I.os.get(R)):I.Ur.getTargetData(d,p)}(r,a,Le(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:F.min(),t?o:B())).next(l=>(G_(r,Fg(e),l),{documents:l,Ts:o})))}function G_(n,e,t){let r=n.us.get(e)||F.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(e,r)}class Uc{constructor(){this.activeTargetIds=zg()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Q_{constructor(){this.so=new Uc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Uc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Y_{_o(e){}shutdown(){}}/**
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
 */class Bc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ur=null;function us(){return Ur===null?Ur=function(){return 268435456+Math.round(2147483648*Math.random())}():Ur++,"0x"+Ur.toString(16)}/**
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
 */const J_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class X_{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ge="WebChannelConnection";class Z_ extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(t,r,i,o,a){const l=us(),h=this.xo(t,r.toUriEncodedString());N("RestConnection",`Sending RPC '${t}' ${l}:`,h,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(t,h,d,i).then(p=>(N("RestConnection",`Received RPC '${t}' ${l}: `,p),p),p=>{throw Zt("RestConnection",`RPC '${t}' ${l} failed with error: `,p,"url: ",h,"request:",i),p})}Lo(t,r,i,o,a,l){return this.Mo(t,r,i,o,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ln}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),i&&i.headers.forEach((o,a)=>t[a]=o)}xo(t,r){const i=J_[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const o=us();return new Promise((a,l)=>{const h=new ou;h.setWithCredentials(!0),h.listenOnce(au.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Gr.NO_ERROR:const p=h.getResponseJson();N(ge,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case Gr.TIMEOUT:N(ge,`RPC '${e}' ${o} timed out`),l(new O(b.DEADLINE_EXCEEDED,"Request time out"));break;case Gr.HTTP_ERROR:const I=h.getStatus();if(N(ge,`RPC '${e}' ${o} failed with status:`,I,"response text:",h.getResponseText()),I>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const S=R?.error;if(S&&S.status&&S.message){const k=function(D){const q=D.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(q)>=0?q:b.UNKNOWN}(S.status);l(new O(k,S.message))}else l(new O(b.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new O(b.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{N(ge,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);N(ge,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",d,r,15)})}Bo(e,t,r){const i=us(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=uu(),l=lu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const p=o.join("");N(ge,`Creating RPC '${e}' stream ${i}: ${p}`,h);const I=a.createWebChannel(p,h);let R=!1,S=!1;const k=new X_({Io:D=>{S?N(ge,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(R||(N(ge,`Opening RPC '${e}' stream ${i} transport.`),I.open(),R=!0),N(ge,`RPC '${e}' stream ${i} sending:`,D),I.send(D))},To:()=>I.close()}),V=(D,q,H)=>{D.listen(q,j=>{try{H(j)}catch(Y){setTimeout(()=>{throw Y},0)}})};return V(I,Nn.EventType.OPEN,()=>{S||(N(ge,`RPC '${e}' stream ${i} transport opened.`),k.yo())}),V(I,Nn.EventType.CLOSE,()=>{S||(S=!0,N(ge,`RPC '${e}' stream ${i} transport closed`),k.So())}),V(I,Nn.EventType.ERROR,D=>{S||(S=!0,Zt(ge,`RPC '${e}' stream ${i} transport errored:`,D),k.So(new O(b.UNAVAILABLE,"The operation could not be completed")))}),V(I,Nn.EventType.MESSAGE,D=>{var q;if(!S){const H=D.data[0];G(!!H);const j=H,Y=j.error||((q=j[0])===null||q===void 0?void 0:q.error);if(Y){N(ge,`RPC '${e}' stream ${i} received error:`,Y);const Ae=Y.status;let X=function(g){const y=re[g];if(y!==void 0)return Lu(y)}(Ae),v=Y.message;X===void 0&&(X=b.INTERNAL,v="Unknown error status: "+Ae+" with message "+Y.message),S=!0,k.So(new O(X,v)),I.close()}else N(ge,`RPC '${e}' stream ${i} received:`,H),k.bo(H)}}),V(l,cu.STAT_EVENT,D=>{D.stat===Rs.PROXY?N(ge,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Rs.NOPROXY&&N(ge,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function hs(){return typeof document<"u"?document:null}/**
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
 */function bi(n){return new l_(n,!0)}/**
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
 */class Ku{constructor(e,t,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Gu{constructor(e,t,r,i,o,a,l,h){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ku(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(Ye(t.toString()),Ye("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new O(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ey extends Gu{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=d_(this.serializer,e),r=function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?Me(a.readTime):F.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Os(this.serializer),t.addTarget=function(o,a){let l;const h=a.target;if(l=Cs(h)?{documents:m_(o,h)}:{query:g_(o,h)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Fu(o,a.resumeToken);const d=Ds(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){l.readTime=di(o,a.snapshotVersion.toTimestamp());const d=Ds(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=y_(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Os(this.serializer),t.removeTarget=e,this.a_(t)}}class ty extends Gu{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return G(!!e.streamToken),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){G(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=p_(e.writeResults,e.commitTime),r=Me(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Os(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>f_(this.serializer,r))};this.a_(t)}}/**
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
 */class ny extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new O(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,Vs(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(b.UNKNOWN,o.toString())})}Lo(e,t,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Vs(t,r),i,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(b.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ry{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ye(t),this.D_=!1):N("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class iy{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Mt(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=U(h);d.L_.add(4),await fr(d),d.q_.set("Unknown"),d.L_.delete(4),await Ci(d)}(this))})}),this.q_=new ry(r,i)}}async function Ci(n){if(Mt(n))for(const e of n.B_)await e(!0)}async function fr(n){for(const e of n.B_)await e(!1)}function Qu(n,e){const t=U(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),_o(t)?go(t):dn(t).r_()&&mo(t,e))}function po(n,e){const t=U(n),r=dn(t);t.N_.delete(e),r.r_()&&Yu(t,e),t.N_.size===0&&(r.r_()?r.o_():Mt(t)&&t.q_.set("Unknown"))}function mo(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}dn(n).A_(e)}function Yu(n,e){n.Q_.xe(e),dn(n).R_(e)}function go(n){n.Q_=new s_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),dn(n).start(),n.q_.v_()}function _o(n){return Mt(n)&&!dn(n).n_()&&n.N_.size>0}function Mt(n){return U(n).L_.size===0}function Ju(n){n.Q_=void 0}async function sy(n){n.q_.set("Online")}async function oy(n){n.N_.forEach((e,t)=>{mo(n,e)})}async function ay(n,e){Ju(n),_o(n)?(n.q_.M_(e),go(n)):n.q_.set("Unknown")}async function cy(n,e,t){if(n.q_.set("Online"),e instanceof xu&&e.state===2&&e.cause)try{await async function(i,o){const a=o.cause;for(const l of o.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(n,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fi(n,r)}else if(e instanceof Jr?n.Q_.Ke(e):e instanceof Mu?n.Q_.He(e):n.Q_.We(e),!t.isEqual(F.min()))try{const r=await Wu(n.localStore);t.compareTo(r)>=0&&await function(o,a){const l=o.Q_.rt(a);return l.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.N_.get(d);p&&o.N_.set(d,p.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,d)=>{const p=o.N_.get(h);if(!p)return;o.N_.set(h,p.withResumeToken(he.EMPTY_BYTE_STRING,p.snapshotVersion)),Yu(o,h);const I=new ht(p.target,h,d,p.sequenceNumber);mo(o,I)}),o.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await fi(n,r)}}async function fi(n,e,t){if(!ur(e))throw e;n.L_.add(1),await fr(n),n.q_.set("Offline"),t||(t=()=>Wu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ci(n)})}function Xu(n,e){return e().catch(t=>fi(n,t,e))}async function ki(n){const e=U(n),t=yt(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ly(e);)try{const i=await W_(e.localStore,r);if(i===null){e.O_.length===0&&t.o_();break}r=i.batchId,uy(e,i)}catch(i){await fi(e,i)}Zu(e)&&eh(e)}function ly(n){return Mt(n)&&n.O_.length<10}function uy(n,e){n.O_.push(e);const t=yt(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Zu(n){return Mt(n)&&!yt(n).n_()&&n.O_.length>0}function eh(n){yt(n).start()}async function hy(n){yt(n).p_()}async function dy(n){const e=yt(n);for(const t of n.O_)e.m_(t.mutations)}async function fy(n,e,t){const r=n.O_.shift(),i=ao.from(r,e,t);await Xu(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ki(n)}async function py(n,e){e&&yt(n).V_&&await async function(r,i){if(function(a){return n_(a)&&a!==b.ABORTED}(i.code)){const o=r.O_.shift();yt(r).s_(),await Xu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await ki(r)}}(n,e),Zu(n)&&eh(n)}async function jc(n,e){const t=U(n);t.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=Mt(t);t.L_.add(3),await fr(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ci(t)}async function my(n,e){const t=U(n);e?(t.L_.delete(2),await Ci(t)):e||(t.L_.add(2),await fr(t),t.q_.set("Unknown"))}function dn(n){return n.K_||(n.K_=function(t,r,i){const o=U(t);return o.w_(),new ey(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:sy.bind(null,n),Ro:oy.bind(null,n),mo:ay.bind(null,n),d_:cy.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),_o(n)?go(n):n.q_.set("Unknown")):(await n.K_.stop(),Ju(n))})),n.K_}function yt(n){return n.U_||(n.U_=function(t,r,i){const o=U(t);return o.w_(),new ty(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:hy.bind(null,n),mo:py.bind(null,n),f_:dy.bind(null,n),g_:fy.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await ki(n)):(await n.U_.stop(),n.O_.length>0&&(N("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class yo{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,l=new yo(e,t,a,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vo(n,e){if(Ye("AsyncQueue",`${e}: ${n}`),ur(n))return new O(b.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Yt{constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=On(),this.sortedSet=new Z(this.comparator)}static emptySet(e){return new Yt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Yt;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class $c{constructor(){this.W_=new Z(L.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):x():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class sn{constructor(e,t,r,i,o,a,l,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,o){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new sn(e,t,Yt.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class gy{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class _y{constructor(){this.queries=qc(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=U(t),o=i.queries;i.queries=qc(),o.forEach((a,l)=>{for(const h of l.j_)h.onError(r)})})(this,new O(b.ABORTED,"Firestore shutting down"))}}function qc(){return new hn(n=>Iu(n),wi)}async function yy(n,e){const t=U(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new gy,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await t.onListen(i,!0);break;case 1:o.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=vo(a,`Initialization of query '${$t(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&Eo(t)}async function vy(n,e){const t=U(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const a=o.j_.indexOf(e);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Ey(n,e){const t=U(n);let r=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&Eo(t)}function Ty(n,e,t){const r=U(n),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(t);r.queries.delete(e)}function Eo(n){n.Y_.forEach(e=>{e.next()})}var Ms,zc;(zc=Ms||(Ms={})).ea="default",zc.Cache="cache";class Iy{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new sn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=sn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ms.Cache}}/**
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
 */class th{constructor(e){this.key=e}}class nh{constructor(e){this.key=e}}class wy{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=B(),this.mutatedKeys=B(),this.Aa=wu(e),this.Ra=new Yt(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new $c,i=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,I)=>{const R=i.get(p),S=Ai(this.query,I)?I:null,k=!!R&&this.mutatedKeys.has(R.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;R&&S?R.data.isEqual(S.data)?k!==V&&(r.track({type:3,doc:S}),D=!0):this.ga(R,S)||(r.track({type:2,doc:S}),D=!0,(h&&this.Aa(S,h)>0||d&&this.Aa(S,d)<0)&&(l=!0)):!R&&S?(r.track({type:0,doc:S}),D=!0):R&&!S&&(r.track({type:1,doc:R}),D=!0,(h||d)&&(l=!0)),D&&(S?(a=a.add(S),o=V?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:l,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,I)=>function(S,k){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return V(S)-V(k)}(p.type,I.type)||this.Aa(p.doc,I.doc)),this.pa(r),i=i!=null&&i;const l=t&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new sn(this.query,e.Ra,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new $c,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=B(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new nh(r))}),this.da.forEach(r=>{e.has(r)||t.push(new th(r))}),t}ba(e){this.Ta=e.Ts,this.da=B();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return sn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Ay{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Ry{constructor(e){this.key=e,this.va=!1}}class Sy{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new hn(l=>Iu(l),wi),this.Ma=new Map,this.xa=new Set,this.Oa=new Z(L.comparator),this.Na=new Map,this.La=new uo,this.Ba={},this.ka=new Map,this.qa=rn.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Py(n,e,t=!0){const r=ch(n);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await rh(r,e,t,!0),i}async function by(n,e){const t=ch(n);await rh(t,e,!0,!1)}async function rh(n,e,t,r){const i=await K_(n.localStore,Le(e)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let l;return r&&(l=await Cy(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Qu(n.remoteStore,i),l}async function Cy(n,e,t,r,i){n.Ka=(I,R,S)=>async function(V,D,q,H){let j=D.view.ma(q);j.ns&&(j=await Fc(V.localStore,D.query,!1).then(({documents:v})=>D.view.ma(v,j)));const Y=H&&H.targetChanges.get(D.targetId),Ae=H&&H.targetMismatches.get(D.targetId)!=null,X=D.view.applyChanges(j,V.isPrimaryClient,Y,Ae);return Wc(V,D.targetId,X.wa),X.snapshot}(n,I,R,S);const o=await Fc(n.localStore,e,!0),a=new wy(e,o.Ts),l=a.ma(o.documents),h=dr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,h);Wc(n,t,d.wa);const p=new Ay(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function ky(n,e,t){const r=U(n),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(a=>!wi(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ls(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&po(r.remoteStore,i.targetId),xs(r,i.targetId)}).catch(lr)):(xs(r,i.targetId),await Ls(r.localStore,i.targetId,!0))}async function Dy(n,e){const t=U(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),po(t.remoteStore,r.targetId))}async function Vy(n,e,t){const r=Uy(n);try{const i=await function(a,l){const h=U(a),d=se.now(),p=l.reduce((S,k)=>S.add(k.key),B());let I,R;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let k=Je(),V=B();return h.cs.getEntries(S,p).next(D=>{k=D,k.forEach((q,H)=>{H.isValidDocument()||(V=V.add(q))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,k)).next(D=>{I=D;const q=[];for(const H of l){const j=Jg(H,I.get(H.key).overlayedDocument);j!=null&&q.push(new Lt(H.key,j,mu(j.value.mapValue),Ke.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,q,l)}).next(D=>{R=D;const q=D.applyToLocalDocumentSet(I,V);return h.documentOverlayCache.saveOverlays(S,D.batchId,q)})}).then(()=>({batchId:R.batchId,changes:Ru(I)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,h){let d=a.Ba[a.currentUser.toKey()];d||(d=new Z(K)),d=d.insert(l,h),a.Ba[a.currentUser.toKey()]=d}(r,i.batchId,t),await pr(r,i.changes),await ki(r.remoteStore)}catch(i){const o=vo(i,"Failed to persist write");t.reject(o)}}async function ih(n,e){const t=U(n);try{const r=await z_(t.localStore,e);e.targetChanges.forEach((i,o)=>{const a=t.Na.get(o);a&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?G(a.va):i.removedDocuments.size>0&&(G(a.va),a.va=!1))}),await pr(t,r,e)}catch(r){await lr(r)}}function Hc(n,e,t){const r=U(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((o,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const h=U(a);h.onlineState=l;let d=!1;h.queries.forEach((p,I)=>{for(const R of I.j_)R.Z_(l)&&(d=!0)}),d&&Eo(h)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ny(n,e,t){const r=U(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),o=i&&i.key;if(o){let a=new Z(L.comparator);a=a.insert(o,ye.newNoDocument(o,F.min()));const l=B().add(o),h=new Pi(F.min(),new Map,new Z(K),a,l);await ih(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(e),To(r)}else await Ls(r.localStore,e,!1).then(()=>xs(r,e,t)).catch(lr)}async function Oy(n,e){const t=U(n),r=e.batch.batchId;try{const i=await q_(t.localStore,e);oh(t,r,null),sh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await pr(t,i)}catch(i){await lr(i)}}async function Ly(n,e,t){const r=U(n);try{const i=await function(a,l){const h=U(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,l).next(I=>(G(I!==null),p=I.keys(),h.mutationQueue.removeMutationBatch(d,I))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,e);oh(r,e,t),sh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await pr(r,i)}catch(i){await lr(i)}}function sh(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function oh(n,e,t){const r=U(n);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function xs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||ah(n,r)})}function ah(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(po(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),To(n))}function Wc(n,e,t){for(const r of t)r instanceof th?(n.La.addReference(r.key,e),My(n,r)):r instanceof nh?(N("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||ah(n,r.key)):x()}function My(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(N("SyncEngine","New document in limbo: "+t),n.xa.add(r),To(n))}function To(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new L(te.fromString(e)),r=n.qa.next();n.Na.set(r,new Ry(t)),n.Oa=n.Oa.insert(t,r),Qu(n.remoteStore,new ht(Le(so(t.path)),r,"TargetPurposeLimboResolution",Zs.oe))}}async function pr(n,e,t){const r=U(n),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,h)=>{a.push(r.Ka(h,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const I=d?!d.fromCache:(p=t?.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(d){i.push(d);const I=fo.Wi(h.targetId,d);o.push(I)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(h,d){const p=U(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>P.forEach(d,R=>P.forEach(R.$i,S=>p.persistence.referenceDelegate.addReference(I,R.targetId,S)).next(()=>P.forEach(R.Ui,S=>p.persistence.referenceDelegate.removeReference(I,R.targetId,S)))))}catch(I){if(!ur(I))throw I;N("LocalStore","Failed to update sequence numbers: "+I)}for(const I of d){const R=I.targetId;if(!I.fromCache){const S=p.os.get(R),k=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(k);p.os=p.os.insert(R,V)}}}(r.localStore,o))}async function xy(n,e){const t=U(n);if(!t.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await Hu(t.localStore,e);t.currentUser=e,function(o,a){o.ka.forEach(l=>{l.forEach(h=>{h.reject(new O(b.CANCELLED,a))})}),o.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pr(t,r.hs)}}function Fy(n,e){const t=U(n),r=t.Na.get(e);if(r&&r.va)return B().add(r.key);{let i=B();const o=t.Ma.get(e);if(!o)return i;for(const a of o){const l=t.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function ch(n){const e=U(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=ih.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ny.bind(null,e),e.Ca.d_=Ey.bind(null,e.eventManager),e.Ca.$a=Ty.bind(null,e.eventManager),e}function Uy(n){const e=U(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Oy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ly.bind(null,e),e}class pi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bi(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return $_(this.persistence,new B_,e.initialUser,this.serializer)}Ga(e){return new x_(ho.Zr,this.serializer)}Wa(e){return new Q_}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pi.provider={build:()=>new pi};class Fs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xy.bind(null,this.syncEngine),await my(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _y}()}createDatastore(e){const t=bi(e.databaseInfo.databaseId),r=function(o){return new Z_(o)}(e.databaseInfo);return function(o,a,l,h){return new ny(o,a,l,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,l){return new iy(r,i,o,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Hc(this.syncEngine,t,0),function(){return Bc.D()?new Bc:new Y_}())}createSyncEngine(e,t){return function(i,o,a,l,h,d,p){const I=new Sy(i,o,a,l,h,d);return p&&(I.Qa=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=U(i);N("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await fr(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Fs.provider={build:()=>new Fs};/**
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
 *//**
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
 */class By{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ye("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class jy{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=_e.UNAUTHENTICATED,this.clientId=du.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{N("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=vo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ds(n,e){n.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Hu(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Kc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await $y(n);N("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>jc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>jc(e.remoteStore,i)),n._onlineComponents=e}async function $y(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await ds(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Zt("Error using user provided cache. Falling back to memory cache: "+t),await ds(n,new pi)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await ds(n,new pi);return n._offlineComponents}async function lh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await Kc(n,n._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await Kc(n,new Fs))),n._onlineComponents}function qy(n){return lh(n).then(e=>e.syncEngine)}async function zy(n){const e=await lh(n),t=e.eventManager;return t.onListen=Py.bind(null,e.syncEngine),t.onUnlisten=ky.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=by.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Dy.bind(null,e.syncEngine),t}function Hy(n,e,t={}){const r=new mt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,d){const p=new By({next:R=>{p.Za(),a.enqueueAndForget(()=>vy(o,I));const S=R.docs.has(l);!S&&R.fromCache?d.reject(new O(b.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&R.fromCache&&h&&h.source==="server"?d.reject(new O(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(R)},error:R=>d.reject(R)}),I=new Iy(so(l.path),p,{includeMetadataChanges:!0,_a:!0});return yy(o,I)}(await zy(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function uh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Gc=new Map;/**
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
 */function Wy(n,e,t){if(!t)throw new O(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ky(n,e,t,r){if(e===!0&&r===!0)throw new O(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Qc(n){if(!L.isDocumentKey(n))throw new O(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Io(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x()}function Jn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Io(n);throw new O(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Yc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ky("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wo{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sg;switch(r.type){case"firstParty":return new lg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Gc.get(t);r&&(N("ComponentProvider","Removing Datastore"),Gc.delete(t),r.terminate())}(this),Promise.resolve()}}function Gy(n,e,t,r={}){var i;const o=(n=Jn(n,wo))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,h;if(typeof r.mockUserToken=="string")l=r.mockUserToken,h=_e.MOCK_USER;else{l=Td(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new O(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new _e(d)}n._authCredentials=new og(new hu(l,h))}}/**
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
 */class Ao{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ao(this.firestore,e,this._query)}}class be{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new be(this.firestore,e,this._key)}}class Xn extends Ao{constructor(e,t,r){super(e,t,so(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new be(this.firestore,null,new L(e))}withConverter(e){return new Xn(this.firestore,e,this._path)}}function hh(n,e,...t){if(n=Se(n),arguments.length===1&&(e=du.newId()),Wy("doc","path",e),n instanceof wo){const r=te.fromString(e,...t);return Qc(r),new be(n,null,new L(r))}{if(!(n instanceof be||n instanceof Xn))throw new O(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(te.fromString(e,...t));return Qc(r),new be(n.firestore,n instanceof Xn?n.converter:null,new L(r))}}/**
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
 */class Jc{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ku(this,"async_queue_retry"),this.Vu=()=>{const r=hs();r&&N("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=hs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=hs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new mt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ur(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Ye("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=yo.createAndSchedule(this,e,t,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&x()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Ro extends wo{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Jc,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jc(e),this._firestoreClient=void 0,await e}}}function Qy(n,e){const t=typeof n=="object"?n:Il(),r=typeof n=="string"?n:"(default)",i=$s(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=vd("firestore");o&&Gy(i,...o)}return i}function dh(n){if(n._terminated)throw new O(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Yy(n),n._firestoreClient}function Yy(n){var e,t,r;const i=n._freezeSettings(),o=function(l,h,d,p){return new Ig(l,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,uh(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new jy(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(l){const h=l?._online.build();return{_offline:l?._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class on{constructor(e){this._byteString=e}static fromBase64String(e){try{return new on(he.fromBase64String(e))}catch(t){throw new O(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new on(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class So{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fh{constructor(e){this._methodName=e}}/**
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
 */class Po{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}}/**
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
 */class bo{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const Jy=/^__.*__$/;class Xy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Lt(e,this.data,this.fieldMask,t,this.fieldTransforms):new hr(e,this.data,t,this.fieldTransforms)}}function ph(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class Co{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Co(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return mi(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(ph(this.Cu)&&Jy.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Zy{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||bi(e)}Qu(e,t,r,i=!1){return new Co({Cu:e,methodName:t,qu:r,path:le.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ev(n){const e=n._freezeSettings(),t=bi(n._databaseId);return new Zy(n._databaseId,!!e.ignoreUndefinedProperties,t)}function tv(n,e,t,r,i,o={}){const a=n.Qu(o.merge||o.mergeFields?2:0,e,t,i);yh("Data must be an object, but it was:",a,r);const l=gh(r,a);let h,d;if(o.merge)h=new ke(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const I of o.mergeFields){const R=nv(e,I,t);if(!a.contains(R))throw new O(b.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);iv(p,R)||p.push(R)}h=new ke(p),d=a.fieldTransforms.filter(I=>h.covers(I.field))}else h=null,d=a.fieldTransforms;return new Xy(new Pe(l),h,d)}function mh(n,e){if(_h(n=Se(n)))return yh("Unsupported field value:",e,n),gh(n,e);if(n instanceof fh)return function(r,i){if(!ph(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const l of r){let h=mh(l,i.Lu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Hg(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=se.fromDate(r);return{timestampValue:di(i.serializer,o)}}if(r instanceof se){const o=new se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:di(i.serializer,o)}}if(r instanceof Po)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof on)return{bytesValue:Fu(i.serializer,r._byteString)};if(r instanceof be){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:lo(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof bo)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Bu("VectorValues must only contain numeric values.");return oo(l.serializer,h)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Io(r)}`)}(n,e)}function gh(n,e){const t={};return fu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):un(n,(r,i)=>{const o=mh(i,e.Mu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function _h(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof se||n instanceof Po||n instanceof on||n instanceof be||n instanceof fh||n instanceof bo)}function yh(n,e,t){if(!_h(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Io(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function nv(n,e,t){if((e=Se(e))instanceof So)return e._internalPath;if(typeof e=="string")return vh(n,e);throw mi("Field path arguments must be of type string or ",n,!1,void 0,t)}const rv=new RegExp("[~\\*/\\[\\]]");function vh(n,e,t){if(e.search(rv)>=0)throw mi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new So(...e.split("."))._internalPath}catch{throw mi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function mi(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new O(b.INVALID_ARGUMENT,l+n+h)}function iv(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Eh{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Th("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sv extends Eh{data(){return super.data()}}function Th(n,e){return typeof e=="string"?vh(n,e):e instanceof So?e._internalPath:e._delegate._internalPath}class ov{convertValue(e,t="none"){switch(Nt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return un(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ne(a.doubleValue));return new bo(o)}convertGeoPoint(e){return new Po(ne(e.latitude),ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=to(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Wn(e));default:return null}}convertTimestamp(e){const t=_t(e);return new se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=te.fromString(e);G(zu(r));const i=new Kn(r.get(1),r.get(3)),o=new L(r.popFirst(5));return i.isEqual(t)||Ye(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function av(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class cv{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ih extends Eh{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lv(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Th("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class lv extends Ih{data(e={}){return super.data(e)}}/**
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
 */function uv(n){n=Jn(n,be);const e=Jn(n.firestore,Ro);return Hy(dh(e),n._key).then(t=>pv(e,n,t))}class hv extends ov{constructor(e){super(),this.firestore=e}convertBytes(e){return new on(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new be(this.firestore,null,t)}}function dv(n,e,t){n=Jn(n,be);const r=Jn(n.firestore,Ro),i=av(n.converter,e,t);return fv(r,[tv(ev(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ke.none())])}function fv(n,e){return function(r,i){const o=new mt;return r.asyncQueue.enqueueAndForget(async()=>Vy(await qy(r),i,o)),o.promise}(dh(n),e)}function pv(n,e,t){const r=t.docs.get(e._key),i=new hv(n);return new Ih(n,i,e._key,r,new cv(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){ln=i})(an),Xt(new bt("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Ro(new ag(r.getProvider("auth-internal")),new hg(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kn(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),pt(_c,"4.7.3",e),pt(_c,"4.7.3","esm2017")})();var mv="firebase",gv="10.14.1";/**
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
 */pt(mv,gv,"app");const _v={apiKey:"AIzaSyBdsu65Voj8en9u_7eL5q0YRFuCC7fUYWA",authDomain:"instantetrips-editor.firebaseapp.com",projectId:"instantetrips-editor",storageBucket:"instantetrips-editor.firebasestorage.app",messagingSenderId:"281917140804",appId:"1:281917140804:web:ed712e65c9c4b77dd3b111"},wh=Tl(_v),Di=rg(wh),Ah=Qy(wh),gi=nr(null),Xc=nr(!0),we=hd({});Hp(Di,async n=>{Xc.set(!0),n?(gi.set(n),await Tv(n.uid)):(gi.set(null),we.set({})),Xc.set(!1)});const yv=async(n,e)=>{try{await $p(Di,n,e)}catch(t){throw console.error("Login fail:",t),t}},vv=async(n,e)=>{try{await jp(Di,n,e)}catch(t){throw console.error("Register fail:",t),t}},Ev=async()=>{await Wp(Di)},Tv=async n=>{try{const e=hh(Ah,"users",n),t=await uv(e);if(t.exists()){const r=t.data();r.trackingData&&we.set(r.trackingData),console.log("Data loaded from Cloud ☁️")}}catch(e){console.error("Error loading data:",e)}},ko=async()=>{const n=gi.get();if(!n)return;const e={trackingData:we.get(),lastUpdated:Date.now()};try{await dv(hh(Ah,"users",n.uid),e,{merge:!0}),console.log("Data saved to Cloud ☁️")}catch(t){console.error("Error saving data:",t)}},Iv=(n,e)=>{const i=[...we.get()[n]||[],e];we.setKey(n,i),ko()},wv=(n,e,t)=>{const i=[...we.get()[n]||[]];e>=0&&e<i.length&&(i[e]=t,we.setKey(n,i),ko())},Av=(n,e)=>{let r=[...we.get()[n]||[]];e>=0&&e<r.length&&(r.splice(e,1),r.length===0?we.setKey(n,[]):we.setKey(n,r),ko())},Zc=document.getElementById("auth-login"),el=document.getElementById("auth-content");gi.subscribe(n=>{n?(Zc.classList.add("hidden"),el.classList.remove("hidden")):(Zc.classList.remove("hidden"),el.classList.add("hidden"))});const Rv=new Date(2026,10,1),fs=[{id:1,name:"FASE 1: BASE",endMonth:2},{id:2,name:"FASE 2: FUERZA",endMonth:6},{id:3,name:"FASE 3: RESIST",endMonth:9},{id:4,name:"TAPER",endMonth:10}];function Sv(n={}){const e=new Date,t=Math.ceil((Rv.getTime()-e.getTime())/(24*60*60*1e3));document.getElementById("daysLeft").innerText=t>0?t:0;const r=Object.entries(n),i=r.filter(([k,V])=>V&&V.length>0).length;document.getElementById("completedCount").innerText=i;const o=r.map(k=>k[1]).flat(),a=e.getMonth()+1;let l=fs.find(k=>a<=k.endMonth)||fs[fs.length-1];document.getElementById("currentPhaseLabel").innerText=l.name.replace("FASE","F.");const d=Math.min(i/300*100,100).toFixed(1);document.getElementById("completionPct").innerText=`${d}%`,document.getElementById("countText").innerText=i,document.getElementById("progDetails").innerText=`Días Completados · ${t} Restantes`,document.getElementById("mainProgressBar").style.width=`${d}%`;let p=0;const I=e.getMonth(),R={};o.forEach(k=>{new Date(k.timestamp).getMonth()===I&&(p+=k.elevation||0);let V=(k.activityType||"other").toLowerCase();V==="hikking"&&(V="hiking"),R[V]=(R[V]||0)+1});const S=Math.min(p/1400*100,100);document.getElementById("currentElev").innerText=`${p}m`,document.getElementById("elevProgressBar").style.height=`${S}%`,Pv(R,o.length)}function Pv(n,e){if(e===0)return;const t=document.getElementById("distChart");t.innerHTML="";const r={hiking:"#ea580c",running:"#3b82f6",bike:"#8b5cf6",walking:"#10b981",gym:"#64748b"};Object.entries(n).forEach(([i,o])=>{const a=o/e*100,l=r[i]||"#94a3b8",h=document.createElement("div");h.className="mini-bar",h.style.marginBottom="2px",h.innerHTML=`
                <div style="display:flex; justify-content:space-between; font-size:0.55rem; color:var(--text-muted);">
                    <span style="text-transform:uppercase;">${i}</span><span>${o}</span>
                </div>
                <div style="height:3px; background:var(--border); border-radius:2px;">
                    <div style="height:100%; width:${a}%; background:${l}; border-radius:2px;"></div>
                </div>
             `,t.appendChild(h)})}we.subscribe(n=>Sv(n));const tl=document.getElementById("calendar-wrapper"),bv=new Date(2026,0,19),Cv=new Date(2026,10,1),nl={walking:'<path d="M13 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM18 11l-4-4H9.14a3 3 0 0 0-2.83 2h-.17l-4 9h2l3-7h2l-2 9h2l2-7h2l2 7h2l-2-9z" fill="currentColor"/>',running:'<path d="M15.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM19 14l-4-3-3 4h2v7h2v-5l2-2h2v-2l-1-1zM5 13l3.5 6H11v-2h-1l-3-5 3-4h-2l-3 5z" fill="currentColor"/>',bike:'<path d="M15 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-4 7l2 4h4v-2h-3l-2-4h-2l-3 6h-2l3-6 3 2zM5 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm14-6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"/>',hiking:'<path d="M14 6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM16 11l-3.5-3.5-1 1 2 2H11L8.5 7.5 5 11h2l2-3 2 3h.5l-2 9h2L14 12h1l1.5 5h2l-2.5-6zM7 16l-3 4h2l2-3v-2l-1 1z" fill="currentColor"/>',trekking:'<path d="M12 2L2 19h20L12 2zm0 4l6 11H6l6-11z" fill="currentColor"/>',hit:'<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor"/>',relax:'<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zM11 7h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/>',gym:'<path d="M4 7h16v2H4V7zm0 8h16v2H4v-2zM2 9v6h2V9H2zm18 0v6h2V9h-2zM7 5v14h2V5H7zm8 0v14h2V5h-2z" fill="currentColor"/>',backpack:'<path d="M7 2a2 2 0 0 0-2 2v1h2V4h10v1h2V4a2 2 0 0 0-2-2H7zm-2 6v14h14V8H5zm4 2h6v8H9v-8z" fill="currentColor"/>',check:'<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>'},Br=n=>nl[n]?`<svg viewBox="0 0 24 24" width="22" height="22">${nl[n]}</svg>`:"",rl=[{title:"Cerro / Relax",type:"hiking"},{title:"Relax / Yoga",type:"relax"},{title:"Speed / Z2",type:"running"},{title:"Gym Pierna",type:"gym"},{title:"Intervalos",type:"running"},{title:"Descanso",type:"relax"},{title:"Día de Cerro",type:"hiking"}],kv={hikking:"hiking",cerro:"hiking"};function Dv(n={}){tl.innerHTML="";let e=new Date(bv);const t=new Date;t.setHours(0,0,0,0);let r=1;for(;e<Cv;){const i=e.getMonth();let o="FASE 1",a="#ea580c";i>=2&&(o="FASE 2"),i>=6&&(o="FASE 3"),i>=9&&(o="TAPER");const l=document.createElement("div");l.className="week-container";const h=new Date(e),d=new Date(e);d.setDate(d.getDate()+6);const p=`${h.getDate()} - ${d.getDate()} ${h.toLocaleDateString("es-ES",{month:"short"}).toUpperCase()}`;l.innerHTML=`
                <div class="week-header-styled">
                    <div class="wh-left">
                        <span class="wh-title">SEMANA ${r} // <span style="color:${a}">${o}</span></span>
                        <span class="wh-dates">${p}</span>
                    </div>
                </div>
            `;const I=document.createElement("div");I.className="days-scroller";for(let R=0;R<7;R++){const S=e.toISOString().split("T")[0],k=e.getDay(),V=n[S]||[],D=V.length,q=D>0,H=e.getTime()===t.getTime();let j="",Y="";const Ae=rl[k].title,X=rl[k].type;if(q){const g=V[0];if(g.backpackWeight>0)j=Br("backpack");else{let y=(g.activityType||"").toLowerCase();y=kv[y]||y,j=Br(y)||Br("check")}D>1?Y=`${D} Actividades`:Y=g.title}else j=Br(X),Y=Ae;const v=document.createElement("button");v.className=`day-card-modern ${q?"completed":""} ${H?"today":""}`,v.onclick=()=>window.openActivityModal(S);const m=D>1?`<span class="multi-badge">+${D-1}</span>`:"";v.innerHTML=`
                    <span class="d-date">${e.getDate()}</span>
                    ${m}
                    <div class="d-icon-svg">${j}</div>
                    <div class="d-label">${Y}</div>
                `,I.appendChild(v),e.setDate(e.getDate()+1)}l.appendChild(I),tl.appendChild(l),r++}}we.subscribe(n=>Dv(n));let Zn=null,er=-1,Rh="walking";const jn=document.getElementById("activityModal");document.querySelector(".modal-content");const Do=document.getElementById("inpTitle"),Vo=document.getElementById("inpDur"),No=document.getElementById("inpWeight"),Oo=document.getElementById("inpDist"),Lo=document.getElementById("inpElev"),Mo=document.getElementById("inpCal"),xo=document.getElementById("inpNote"),jr=document.getElementById("grpDist"),ps=document.getElementById("grpElev"),jt=document.getElementById("grpCal"),il=document.getElementById("grpWeight"),$r=document.getElementById("dayActivitiesList"),Vv=document.getElementById("formSection"),Sh=document.getElementById("modalTitle"),Ph=document.getElementById("dropdownBtn"),tr=document.getElementById("dropdownMenu"),sl=document.getElementById("ddIcon"),Nv=document.getElementById("ddLabel");Ph.onclick=n=>{tr.classList.toggle("hidden"),n.stopPropagation()};document.addEventListener("click",n=>{!Ph.contains(n.target)&&!tr.contains(n.target)&&tr.classList.add("hidden")});document.querySelectorAll(".opt-btn").forEach(n=>{n.onclick=()=>{Fo(n.getAttribute("data-type"),n.getAttribute("data-label"),n.querySelector("svg").outerHTML),tr.classList.add("hidden")}});function Fo(n,e,t){if(Rh=n,Nv.innerText=e||n,t)sl.innerHTML=t;else{const r=document.querySelector(`.opt-btn[data-type="${n}"]`);r&&(sl.innerHTML=r.querySelector("svg").outerHTML)}xv(n)}window.openActivityModal=n=>{Zn=n,jn.classList.remove("hidden"),jn.offsetWidth,jn.classList.add("visible"),Ov(),bh()};function Ov(){const e=we.get()[Zn]||[];$r.innerHTML="",e.length>0?($r.classList.remove("hidden"),e.forEach((t,r)=>{const i=document.createElement("div");i.className="act-item-row",i.innerHTML=`
                    <div class="act-info">
                        <span class="act-type-badge">${t.activityType}</span>
                        <span class="act-idx-title">${t.title}</span>
                    </div>
                    <button class="act-edit-btn">✏️</button>
                `,i.querySelector(".act-edit-btn").onclick=()=>Lv(r,t),$r.appendChild(i)})):$r.classList.add("hidden")}function Lv(n,e){er=n,Sh.innerText="EDITAR",Do.value=e.title||"",Vo.value=e.duration||"",Oo.value=e.distance||"",Lo.value=e.elevation||"",Mo.value=e.calories||"",No.value=e.backpackWeight||"",xo.value=e.note||"",Fo(e.activityType,null,null),document.getElementById("btnDelete").classList.remove("hidden"),document.getElementById("btnCancelEdit").classList.remove("hidden"),document.getElementById("btnSave").innerText="ACTUALIZAR",Vv.scrollIntoView({behavior:"smooth"})}function bh(){er=-1,Sh.innerText="NUEVA ACTIVIDAD",Mv(),Fo("walking","Walk",null),document.getElementById("btnDelete").classList.add("hidden"),document.getElementById("btnCancelEdit").classList.add("hidden"),document.getElementById("btnSave").innerText="GUARDAR"}document.getElementById("btnCancelEdit").onclick=bh;function Mv(){Do.value="",Vo.value="",Oo.value="",Lo.value="",Mo.value="",No.value="",xo.value=""}function Uo(){jn.classList.remove("visible"),tr.classList.add("hidden"),setTimeout(()=>{jn.classList.add("hidden")},300)}document.getElementById("closeModalBtn").onclick=Uo;function xv(n){switch(jr.classList.add("hidden"),ps.classList.add("hidden"),jt.classList.add("hidden"),il.classList.add("hidden"),n){case"walking":case"running":jr.classList.remove("hidden"),jt.classList.remove("hidden");break;case"bike":jr.classList.remove("hidden"),ps.classList.remove("hidden"),jt.classList.remove("hidden");break;case"hiking":case"trekking":case"cerro":jr.classList.remove("hidden"),ps.classList.remove("hidden"),jt.classList.remove("hidden"),il.classList.remove("hidden");break;case"gym":case"hit":case"crossfit":jt.classList.remove("hidden");break;case"relax":case"yoga":break;default:jt.classList.remove("hidden");break}}document.getElementById("btnSave").onclick=()=>{const n={activityType:Rh,title:Do.value||"Entreno",duration:parseInt(Vo.value)||0,distance:parseFloat(Oo.value)||0,elevation:parseInt(Lo.value)||0,calories:parseInt(Mo.value)||0,backpackWeight:parseFloat(No.value)||0,note:xo.value,timestamp:Date.now()};er===-1?Iv(Zn,n):wv(Zn,er,n),Uo()};document.getElementById("btnDelete").onclick=()=>{confirm("¿Borrar esta actividad?")&&(Av(Zn,er),Uo())};const Fv=document.getElementById("hamburgerBtn"),Uv=document.getElementById("closeDrawerBtn"),Us=document.getElementById("drawerOverlay"),ol=document.getElementById("drawerSidebar"),al=document.querySelectorAll(".nav-item"),cl=document.getElementById("drawerLogout");function mr(n){dl.set(n)}Fv.onclick=()=>mr(!0);Uv.onclick=()=>mr(!1);Us.onclick=()=>mr(!1);dl.subscribe(n=>{n?(ol.classList.remove("closed"),Us.classList.remove("hidden")):(ol.classList.add("closed"),setTimeout(()=>Us.classList.add("hidden"),300))});al.forEach(n=>{n.onclick=()=>{const e=n.getAttribute("data-target");hl.set(e),mr(!1),al.forEach(t=>t.classList.remove("active")),n.classList.add("active")}});cl&&(cl.onclick=()=>{confirm("¿Cerrar Sesión?")&&(Ev(),mr(!1))});let ms=[],Ht="all";const $e={count:document.getElementById("st-count"),time:document.getElementById("st-time"),dist:document.getElementById("st-dist"),cal:document.getElementById("st-cal"),elev:document.getElementById("st-elev"),rowElev:document.getElementById("row-elev"),history:document.getElementById("stats-history")};function Ch(){const n=we.get();ms=Object.entries(n).flatMap(([l,h])=>h.map(d=>({...d,date:l}))).sort((l,h)=>h.timestamp-l.timestamp);let e=ms;Ht!=="all"&&(e=ms.filter(l=>{let h=(l.activityType||"").toLowerCase();return Ht==="hiking"&&["trekking","cerro"].includes(h)||Ht==="gym"&&["hit","crossfit"].includes(h)?!0:h===Ht}));let t=e.length,r=0,i=0,o=0,a=0;e.forEach(l=>{r+=l.duration||0,i+=l.distance||0,o+=l.calories||0,a+=l.elevation||0}),$e.count.innerText=t,$e.time.innerText=`${Math.floor(r/60)}h ${r%60}m`,$e.dist.innerText=i.toFixed(1),$e.cal.innerText=o,$e.elev.innerText=`${a}m`,["hiking","bike"].includes(Ht)?$e.rowElev.classList.remove("hidden"):$e.rowElev.classList.add("hidden"),$e.history.innerHTML="",e.slice(0,10).forEach(l=>{const h=document.createElement("div");h.className="hist-item";let d=`${l.duration}min`;l.distance>0&&(d+=` · ${l.distance}km`),l.calories>0&&(d+=` · ${l.calories}kcal`),h.innerHTML=`
                <div class="h-left">
                    <span class="h-date">${Bv(l.date)}</span>
                    <span class="h-title">${l.title}</span>
                </div>
                <div class="h-right">
                    ${d}
                </div>
             `,$e.history.appendChild(h)})}function Bv(n){const e=n.split("-");return`${e[2]}/${e[1]}`}document.querySelectorAll(".tab-btn").forEach(n=>{n.onclick=()=>{document.querySelectorAll(".tab-btn").forEach(e=>e.classList.remove("active")),n.classList.add("active"),Ht=n.getAttribute("data-filter"),Ch()}});we.subscribe(()=>{Ch()});const ll=document.getElementById("email"),ul=document.getElementById("password"),ot=document.getElementById("loginBtn"),qr=document.getElementById("toggleBtn"),Xr=document.getElementById("errorMsg");let Jt=!1;qr&&(qr.onclick=()=>{Jt=!Jt,Jt?(ot.innerText="CREAR CUENTA",document.getElementById("toggleText").innerText="¿Ya tienes cuenta?",qr.innerText="Inicia Sesión"):(ot.innerText="INICIAR SESIÓN",document.getElementById("toggleText").innerText="¿No tienes cuenta?",qr.innerText="Regístrate"),Xr.classList.add("hidden")});ot&&(ot.onclick=async()=>{const n=Jt?"CREANDO...":"ENTRANDO...",e=Jt?"CREAR CUENTA":"INICIAR SESIÓN";ot.innerText=n,ot.setAttribute("disabled","true"),Xr.classList.add("hidden");try{Jt?await vv(ll.value,ul.value):await yv(ll.value,ul.value)}catch(t){console.error(t),ot.innerText=e,ot.removeAttribute("disabled");let r="Error desconcido";(t.code==="auth/invalid-credential"||t.code==="auth/wrong-password")&&(r="Contraseña o Correo incorrectos."),t.code==="auth/user-not-found"&&(r="Usuario no encontrado. Regístrate primero."),t.code==="auth/email-already-in-use"&&(r="El correo ya está registrado."),t.code==="auth/invalid-email"&&(r="Correo inválido."),t.code==="auth/weak-password"&&(r="La contraseña debe tener 6+ caracteres."),r==="Error desconcido"&&(r=`Error: ${t.code}`),Xr.innerText=r,Xr.classList.remove("hidden")}});
