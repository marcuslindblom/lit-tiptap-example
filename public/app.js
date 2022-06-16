/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&'adoptedStyleSheets'in Document.prototype&&'replace'in CSSStyleSheet.prototype,n=Symbol(),i=new Map;class t{constructor(e,i){if(this._$cssResult$=!0,i!==n)throw Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');this.cssText=e}get styleSheet(){let n=i.get(this.cssText);return e&&void 0===n&&(i.set(this.cssText,n=new CSSStyleSheet),n.replaceSync(this.cssText)),n}toString(){return this.cssText}}const a=(e,...i)=>{const a=1===e.length?e[0]:i.reduce(((n,i,t)=>n+(e=>{if(!0===e._$cssResult$)return e.cssText;if('number'==typeof e)return e;throw Error('Value passed to \'css\' function must be a \'css\' function result: '+e+'. Use \'unsafeCSS\' to pass non-literal values, but take care to ensure page security.')})(i)+e[t+1]),e[0]);return new t(a,n)},o=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let i='';for(const n of e.cssRules)i+=n.cssText;return(e=>new t('string'==typeof e?e:e+'',n))(i)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var d;const s=window.trustedTypes,r=s?s.emptyScript:'',l=window.reactiveElementPolyfillSupport,m={toAttribute(e,n){switch(n){case Boolean:e=e?r:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,n){let i=e;switch(n){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},c=(e,n)=>n!==e&&(n==n||e==e),h={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:c};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var n;null!==(n=this.l)&&void 0!==n||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((n,i)=>{const t=this._$Eh(i,n);void 0!==t&&(this._$Eu.set(t,i),e.push(t))})),e}static createProperty(e,n=h){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const i='symbol'==typeof e?Symbol():'__'+e,t=this.getPropertyDescriptor(e,i,n);void 0!==t&&Object.defineProperty(this.prototype,e,t)}}static getPropertyDescriptor(e,n,i){return{get(){return this[n]},set(t){const a=this[e];this[n]=t,this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||h}static finalize(){if(this.hasOwnProperty('finalized'))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty('properties')){const e=this.properties,n=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of n)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)n.unshift(o(e))}else void 0!==e&&n.push(o(e));return n}static _$Eh(e,n){const i=n.attribute;return!1===i?void 0:'string'==typeof i?i:'string'==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var n,i;(null!==(n=this._$Eg)&&void 0!==n?n:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var n;null===(n=this._$Eg)||void 0===n||n.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,n)=>{this.hasOwnProperty(n)&&(this._$Et.set(n,this[n]),delete this[n])}))}createRenderRoot(){var n;const i=null!==(n=this.shadowRoot)&&void 0!==n?n:this.attachShadow(this.constructor.shadowRootOptions);return((n,i)=>{e?n.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((e=>{const i=document.createElement('style'),t=window.litNonce;void 0!==t&&i.setAttribute('nonce',t),i.textContent=e.cssText,n.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var n;return null===(n=e.hostConnected)||void 0===n?void 0:n.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var n;return null===(n=e.hostDisconnected)||void 0===n?void 0:n.call(e)}))}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$ES(e,n,i=h){var t,a;const o=this.constructor._$Eh(e,i);if(void 0!==o&&!0===i.reflect){const d=(null!==(a=null===(t=i.converter)||void 0===t?void 0:t.toAttribute)&&void 0!==a?a:m.toAttribute)(n,i.type);this._$Ei=e,null==d?this.removeAttribute(o):this.setAttribute(o,d),this._$Ei=null}}_$AK(e,n){var i,t,a;const o=this.constructor,d=o._$Eu.get(e);if(void 0!==d&&this._$Ei!==d){const e=o.getPropertyOptions(d),s=e.converter,r=null!==(a=null!==(t=null===(i=s)||void 0===i?void 0:i.fromAttribute)&&void 0!==t?t:'function'==typeof s?s:null)&&void 0!==a?a:m.fromAttribute;this._$Ei=d,this[d]=r(n,e.type),this._$Ei=null}}requestUpdate(e,n,i){let t=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||c)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),!0===i.reflect&&this._$Ei!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):t=!1),!this.isUpdatePending&&t&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,n)=>this[n]=e)),this._$Et=void 0);let n=!1;const i=this._$AL;try{n=this.shouldUpdate(i),n?(this.willUpdate(i),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var n;return null===(n=e.hostUpdate)||void 0===n?void 0:n.call(e)})),this.update(i)):this._$EU()}catch(e){throw n=!1,this._$EU(),e}n&&this._$AE(i)}willUpdate(e){}_$AE(e){var n;null===(n=this._$Eg)||void 0===n||n.forEach((e=>{var n;return null===(n=e.hostUpdated)||void 0===n?void 0:n.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,n)=>this._$ES(n,this[n],e))),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var p;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:'open'},null==l||l({ReactiveElement:u}),(null!==(d=globalThis.reactiveElementVersions)&&void 0!==d?d:globalThis.reactiveElementVersions=[]).push('1.3.2');const v=globalThis.trustedTypes,y=v?v.createPolicy('lit-html',{createHTML:e=>e}):void 0,f=`lit$${(Math.random()+'').slice(9)}$`,g='?'+f,b=`<${g}>`,_=document,A=(e='')=>_.createComment(e),k=e=>null===e||'object'!=typeof e&&'function'!=typeof e,w=Array.isArray,$=e=>{var n;return w(e)||'function'==typeof(null===(n=e)||void 0===n?void 0:n[Symbol.iterator])},x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,C=/>/g,j=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,S=/'/g,M=/"/g,R=/^(?:script|style|textarea|title)$/i,D=(e=>(n,...i)=>({_$litType$:e,strings:n,values:i}))(1),J=Symbol.for('lit-noChange'),H=Symbol.for('lit-nothing'),O=new WeakMap,P=_.createTreeWalker(_,129,null,!1),T=(e,n)=>{const i=e.length-1,t=[];let a,o=2===n?'<svg>':'',d=x;for(let n=0;n<i;n++){const i=e[n];let s,r,l=-1,m=0;for(;m<i.length&&(d.lastIndex=m,r=d.exec(i),null!==r);)m=d.lastIndex,d===x?'!--'===r[1]?d=E:void 0!==r[1]?d=C:void 0!==r[2]?(R.test(r[2])&&(a=RegExp('</'+r[2],'g')),d=j):void 0!==r[3]&&(d=j):d===j?'>'===r[0]?(d=null!=a?a:x,l=-1):void 0===r[1]?l=-2:(l=d.lastIndex-r[2].length,s=r[1],d=void 0===r[3]?j:'"'===r[3]?M:S):d===M||d===S?d=j:d===E||d===C?d=x:(d=j,a=void 0);const c=d===j&&e[n+1].startsWith('/>')?' ':'';o+=d===x?i+b:l>=0?(t.push(s),i.slice(0,l)+'$lit$'+i.slice(l)+f+c):i+f+(-2===l?(t.push(void 0),n):c)}const s=o+(e[i]||'<?>')+(2===n?'</svg>':'');if(!Array.isArray(e)||!e.hasOwnProperty('raw'))throw Error('invalid template strings array');return[void 0!==y?y.createHTML(s):s,t]};class B{constructor({strings:e,_$litType$:n},i){let t;this.parts=[];let a=0,o=0;const d=e.length-1,s=this.parts,[r,l]=T(e,n);if(this.el=B.createElement(r,i),P.currentNode=this.el.content,2===n){const e=this.el.content,n=e.firstChild;n.remove(),e.append(...n.childNodes)}for(;null!==(t=P.nextNode())&&s.length<d;){if(1===t.nodeType){if(t.hasAttributes()){const e=[];for(const n of t.getAttributeNames())if(n.endsWith('$lit$')||n.startsWith(f)){const i=l[o++];if(e.push(n),void 0!==i){const e=t.getAttribute(i.toLowerCase()+'$lit$').split(f),n=/([.?@])?(.*)/.exec(i);s.push({type:1,index:a,name:n[2],strings:e,ctor:'.'===n[1]?z:'?'===n[1]?G:'@'===n[1]?V:U})}else s.push({type:6,index:a})}for(const n of e)t.removeAttribute(n)}if(R.test(t.tagName)){const e=t.textContent.split(f),n=e.length-1;if(n>0){t.textContent=v?v.emptyScript:'';for(let i=0;i<n;i++)t.append(e[i],A()),P.nextNode(),s.push({type:2,index:++a});t.append(e[n],A())}}}else if(8===t.nodeType)if(t.data===g)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=t.data.indexOf(f,e+1));)s.push({type:7,index:a}),e+=f.length-1}a++}}static createElement(e,n){const i=_.createElement('template');return i.innerHTML=e,i}}function K(e,n,i=e,t){var a,o,d,s;if(n===J)return n;let r=void 0!==t?null===(a=i._$Cl)||void 0===a?void 0:a[t]:i._$Cu;const l=k(n)?void 0:n._$litDirective$;return(null==r?void 0:r.constructor)!==l&&(null===(o=null==r?void 0:r._$AO)||void 0===o||o.call(r,!1),void 0===l?r=void 0:(r=new l(e),r._$AT(e,i,t)),void 0!==t?(null!==(d=(s=i)._$Cl)&&void 0!==d?d:s._$Cl=[])[t]=r:i._$Cu=r),void 0!==r&&(n=K(e,r._$AS(e,n.values),r,t)),n}class L{constructor(e,n){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var n;const{el:{content:i},parts:t}=this._$AD,a=(null!==(n=null==e?void 0:e.creationScope)&&void 0!==n?n:_).importNode(i,!0);P.currentNode=a;let o=P.nextNode(),d=0,s=0,r=t[0];for(;void 0!==r;){if(d===r.index){let n;2===r.type?n=new N(o,o.nextSibling,this,e):1===r.type?n=new r.ctor(o,r.name,r.strings,this,e):6===r.type&&(n=new W(o,this,e)),this.v.push(n),r=t[++s]}d!==(null==r?void 0:r.index)&&(o=P.nextNode(),d++)}return a}m(e){let n=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}}class N{constructor(e,n,i,t){var a;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=t,this._$Cg=null===(a=null==t?void 0:t.isConnected)||void 0===a||a}get _$AU(){var e,n;return null!==(n=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==n?n:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return void 0!==n&&11===e.nodeType&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=K(this,e,n),k(e)?e===H||null==e||''===e?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==J&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):$(e)?this.S(e):this.$(e)}M(e,n=this._$AB){return this._$AA.parentNode.insertBefore(e,n)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==H&&k(this._$AH)?this._$AA.nextSibling.data=e:this.k(_.createTextNode(e)),this._$AH=e}T(e){var n;const{values:i,_$litType$:t}=e,a='number'==typeof t?this._$AC(e):(void 0===t.el&&(t.el=B.createElement(t.h,this.options)),t);if((null===(n=this._$AH)||void 0===n?void 0:n._$AD)===a)this._$AH.m(i);else{const e=new L(a,this),n=e.p(this.options);e.m(i),this.k(n),this._$AH=e}}_$AC(e){let n=O.get(e.strings);return void 0===n&&O.set(e.strings,n=new B(e)),n}S(e){w(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,t=0;for(const a of e)t===n.length?n.push(i=new N(this.M(A()),this.M(A()),this,this.options)):i=n[t],i._$AI(a),t++;t<n.length&&(this._$AR(i&&i._$AB.nextSibling,t),n.length=t)}_$AR(e=this._$AA.nextSibling,n){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,n);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var n;void 0===this._$AM&&(this._$Cg=e,null===(n=this._$AP)||void 0===n||n.call(this,e))}}class U{constructor(e,n,i,t,a){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=n,this._$AM=t,this.options=a,i.length>2||''!==i[0]||''!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,i,t){const a=this.strings;let o=!1;if(void 0===a)e=K(this,e,n,0),o=!k(e)||e!==this._$AH&&e!==J,o&&(this._$AH=e);else{const t=e;let d,s;for(e=a[0],d=0;d<a.length-1;d++)s=K(this,t[i+d],n,d),s===J&&(s=this._$AH[d]),o||(o=!k(s)||s!==this._$AH[d]),s===H?e=H:e!==H&&(e+=(null!=s?s:'')+a[d+1]),this._$AH[d]=s}o&&!t&&this.C(e)}C(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:'')}}class z extends U{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===H?void 0:e}}const I=v?v.emptyScript:'';class G extends U{constructor(){super(...arguments),this.type=4}C(e){e&&e!==H?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name)}}class V extends U{constructor(e,n,i,t,a){super(e,n,i,t,a),this.type=5}_$AI(e,n=this){var i;if((e=null!==(i=K(this,e,n,0))&&void 0!==i?i:H)===J)return;const t=this._$AH,a=e===H&&t!==H||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,o=e!==H&&(t===H||a);a&&this.element.removeEventListener(this.name,this,t),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,i;'function'==typeof this._$AH?this._$AH.call(null!==(i=null===(n=this.options)||void 0===n?void 0:n.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class W{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const F={L:'$lit$',P:f,V:g,I:1,N:T,R:L,j:$,D:K,H:N,F:U,O:G,W:V,B:z,Z:W},Z=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var q,Q;null==Z||Z(B,N),(null!==(p=globalThis.litHtmlVersions)&&void 0!==p?p:globalThis.litHtmlVersions=[]).push('2.2.5');class Y extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,n;const i=super.createRenderRoot();return null!==(e=(n=this.renderOptions).renderBefore)&&void 0!==e||(n.renderBefore=i.firstChild),i}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,n,i)=>{var t,a;const o=null!==(t=null==i?void 0:i.renderBefore)&&void 0!==t?t:n;let d=o._$litPart$;if(void 0===d){const e=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:null;o._$litPart$=d=new N(n.insertBefore(A(),e),e,void 0,null!=i?i:{})}return d._$AI(e),d})(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return J}}Y.finalized=!0,Y._$litElement$=!0,null===(q=globalThis.litElementHydrateSupport)||void 0===q||q.call(globalThis,{LitElement:Y});const X=globalThis.litElementPolyfillSupport;null==X||X({LitElement:Y}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push('3.2.0');
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee=new WeakMap,ne=e=>{if((e=>void 0!==e.pattern)(e))return e.pattern;let n=ee.get(e);return void 0===n&&ee.set(e,n=new URLPattern({pathname:e.path})),n};const ie=e=>{let n;for(const i of Object.keys(e))/\d+/.test(i)&&(void 0===n||i>n)&&(n=i);return n&&e[n]};class te extends Event{constructor(e){super(te.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=e}}te.eventName='lit-routes-connected';
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae=location.origin||location.protocol+'//'+location.host;class oe extends class{constructor(e,n,i){this.routes=[],this.t=[],this.i={},this.o=e=>{if(e.routes===this)return;const n=e.routes;this.t.push(n),n.h=this,e.stopImmediatePropagation(),e.onDisconnect=()=>{var e;null===(e=this.t)||void 0===e||e.splice(this.t.indexOf(n)>>>0,1)};const i=ie(this.i);void 0!==i&&n.goto(i)},(this.l=e).addController(this),this.routes=[...n],this.fallback=null==i?void 0:i.fallback}link(e){var n,i;if(null==e?void 0:e.startsWith('/'))return e;if(null==e?void 0:e.startsWith('.'))throw Error('Not implemented');return null!=e||(e=this.u),(null!==(i=null===(n=this.h)||void 0===n?void 0:n.link())&&void 0!==i?i:'')+e}async goto(e){var n;let i;if(0===this.routes.length&&void 0===this.fallback)i=e,this.u='',this.i={0:i};else{const t=this.v(e);if(void 0===t)throw Error('No route found for '+e);const a=ne(t).exec({pathname:e}),o=null!==(n=null==a?void 0:a.pathname.groups)&&void 0!==n?n:{};if(i=ie(o),'function'==typeof t.enter&&!1===await t.enter(o))return;this.p=t,this.i=o,this.u=void 0===i?e:e.substring(0,e.length-i.length)}if(void 0!==i)for(const e of this.t)e.goto(i);this.l.requestUpdate()}outlet(){var e,n;return null===(n=null===(e=this.p)||void 0===e?void 0:e.render)||void 0===n?void 0:n.call(e,this.i)}get params(){return this.i}v(e){const n=this.routes.find((n=>ne(n).test({pathname:e})));return n||void 0===this.fallback?n:this.fallback?{...this.fallback,path:'/*'}:void 0}hostConnected(){this.l.addEventListener(te.eventName,this.o);const e=new te(this);this.l.dispatchEvent(e),this.m=e.onDisconnect}hostDisconnected(){var e;null===(e=this.m)||void 0===e||e.call(this),this.h=void 0}}{constructor(){super(...arguments),this.t=e=>{const n=0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey;if(e.defaultPrevented||n)return;const i=e.composedPath().find((e=>'A'===e.tagName));if(void 0===i||''!==i.target||i.hasAttribute('download')||'external'===i.getAttribute('rel'))return;const t=i.href;if(''===t||t.startsWith('mailto:'))return;const a=window.location;i.origin===ae&&(e.preventDefault(),t!==a.href&&(window.history.pushState({},'',t),this.goto(i.pathname)))},this.o=e=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener('click',this.t),window.addEventListener('popstate',this.o),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener('click',this.t),window.removeEventListener('popstate',this.o)}}const de=Symbol(),se=Object.getPrototypeOf,re=new WeakMap,le=e=>(e=>e&&(re.has(e)?re.get(e):se(e)===Object.prototype||se(e)===Array.prototype))(e)&&e[de]||null,me=(e,n=!0)=>{re.set(e,n)},ce='production'!==(import.meta.env&&import.meta.env.MODE)?Symbol('VERSION'):Symbol(),he='production'!==(import.meta.env&&import.meta.env.MODE)?Symbol('LISTENERS'):Symbol(),ue='production'!==(import.meta.env&&import.meta.env.MODE)?Symbol('SNAPSHOT'):Symbol(),pe='production'!==(import.meta.env&&import.meta.env.MODE)?Symbol('HANDLER'):Symbol(),ve='production'!==(import.meta.env&&import.meta.env.MODE)?Symbol('PROMISE_RESULT'):Symbol(),ye='production'!==(import.meta.env&&import.meta.env.MODE)?Symbol('PROMISE_ERROR'):Symbol(),fe=new WeakSet,ge=e=>'object'==typeof e&&null!==e,be=e=>ge(e)&&!fe.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),_e=new WeakMap;let Ae=1;const ke=new WeakMap;function we(e){return'production'===(import.meta.env&&import.meta.env.MODE)||(null==e?void 0:e[ue])||console.warn('Please use proxy object'),e[ue]}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=e=>n=>'function'==typeof n?((e,n)=>(window.customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:i,elements:t}=n;return{kind:i,elements:t,finisher(n){window.customElements.define(e,n)}}})(e,n)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,xe=(e,n)=>'method'===n.kind&&n.descriptor&&!('value'in n.descriptor)?{...n,finisher(i){i.createProperty(n.key,e)}}:{kind:'field',key:Symbol(),placement:'own',descriptor:{},originalKey:n.key,initializer(){'function'==typeof n.initializer&&(this[n.key]=n.initializer.call(this))},finisher(i){i.createProperty(n.key,e)}};function Ee(e){return(n,i)=>void 0!==i?((e,n,i)=>{n.constructor.createProperty(i,e)})(e,n,i):xe(e,n)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Ce(e){return Ee({...e,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var je;null===(je=window.HTMLSlotElement)||void 0===je||je.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Se=1,Me=2,Re=3,De=4,Je=e=>(...n)=>({_$litDirective$:e,values:n});class He{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,i){this._$Ct=e,this._$AM=n,this._$Ci=i}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:Oe}=F,Pe=e=>void 0===e.strings,Te=()=>document.createComment(''),Be=(e,n,i)=>{var t;const a=e._$AA.parentNode,o=void 0===n?e._$AB:n._$AA;if(void 0===i){const n=a.insertBefore(Te(),o),t=a.insertBefore(Te(),o);i=new Oe(n,t,e,e.options)}else{const n=i._$AB.nextSibling,d=i._$AM,s=d!==e;if(s){let n;null===(t=i._$AQ)||void 0===t||t.call(i,e),i._$AM=e,void 0!==i._$AP&&(n=e._$AU)!==d._$AU&&i._$AP(n)}if(n!==o||s){let e=i._$AA;for(;e!==n;){const n=e.nextSibling;a.insertBefore(e,o),e=n}}}return i},Ke=(e,n,i=e)=>(e._$AI(n,i),e),Le={},Ne=(e,n=Le)=>e._$AH=n,Ue=e=>{var n;null===(n=e._$AP)||void 0===n||n.call(e,!1,!0);let i=e._$AA;const t=e._$AB.nextSibling;for(;i!==t;){const e=i.nextSibling;i.remove(),i=e}},ze=(e,n,i)=>{const t=new Map;for(let a=n;a<=i;a++)t.set(e[a],a);return t},Ie=Je(class extends He{constructor(e){if(super(e),e.type!==Me)throw Error('repeat() can only be used in text expressions')}dt(e,n,i){let t;void 0===i?i=n:void 0!==n&&(t=n);const a=[],o=[];let d=0;for(const n of e)a[d]=t?t(n,d):d,o[d]=i(n,d),d++;return{values:o,keys:a}}render(e,n,i){return this.dt(e,n,i).values}update(e,[n,i,t]){var a;const o=(e=>e._$AH)(e),{values:d,keys:s}=this.dt(n,i,t);if(!Array.isArray(o))return this.ut=s,d;const r=null!==(a=this.ut)&&void 0!==a?a:this.ut=[],l=[];let m,c,h=0,u=o.length-1,p=0,v=d.length-1;for(;h<=u&&p<=v;)if(null===o[h])h++;else if(null===o[u])u--;else if(r[h]===s[p])l[p]=Ke(o[h],d[p]),h++,p++;else if(r[u]===s[v])l[v]=Ke(o[u],d[v]),u--,v--;else if(r[h]===s[v])l[v]=Ke(o[h],d[v]),Be(e,l[v+1],o[h]),h++,v--;else if(r[u]===s[p])l[p]=Ke(o[u],d[p]),Be(e,o[h],o[u]),u--,p++;else if(void 0===m&&(m=ze(s,p,v),c=ze(r,h,u)),m.has(r[h]))if(m.has(r[u])){const n=c.get(s[p]),i=void 0!==n?o[n]:null;if(null===i){const n=Be(e,o[h]);Ke(n,d[p]),l[p]=n}else l[p]=Ke(i,d[p]),Be(e,o[h],i),o[n]=null;p++}else Ue(o[u]),u--;else Ue(o[h]),h++;for(;p<=v;){const n=Be(e,l[v+1]);Ke(n,d[p]),l[p++]=n}for(;h<=u;){const e=o[h++];null!==e&&Ue(e)}return this.ut=s,Ne(e,l),J}}),Ge=Je(class extends He{constructor(e){if(super(e),e.type!==Re&&e.type!==Se&&e.type!==De)throw Error('The `live` directive is not allowed on child or event bindings');if(!Pe(e))throw Error('`live` bindings can only contain a single expression')}render(e){return e}update(e,[n]){if(n===J||n===H)return n;const i=e.element,t=e.name;if(e.type===Re){if(n===i[t])return J}else if(e.type===De){if(!!n===i.hasAttribute(t))return J}else if(e.type===Se&&i.getAttribute(t)===n+'')return J;return Ne(e),n}}),Ve=(e,n)=>{var i,t;const a=e._$AN;if(void 0===a)return!1;for(const e of a)null===(t=(i=e)._$AO)||void 0===t||t.call(i,n,!1),Ve(e,n);return!0},We=e=>{let n,i;do{if(void 0===(n=e._$AM))break;i=n._$AN,i.delete(e),e=n}while(0===(null==i?void 0:i.size))},Fe=e=>{for(let n;n=e._$AM;e=n){let i=n._$AN;if(void 0===i)n._$AN=i=new Set;else if(i.has(e))break;i.add(e),Qe(n)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ze(e){void 0!==this._$AN?(We(this),this._$AM=e,Fe(this)):this._$AM=e}function qe(e,n=!1,i=0){const t=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(n)if(Array.isArray(t))for(let e=i;e<t.length;e++)Ve(t[e],!1),We(t[e]);else null!=t&&(Ve(t,!1),We(t));else Ve(this,e)}const Qe=e=>{var n,i,t,a;e.type==Me&&(null!==(n=(t=e)._$AP)&&void 0!==n||(t._$AP=qe),null!==(i=(a=e)._$AQ)&&void 0!==i||(a._$AQ=Ze))};class Ye extends He{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,i){super._$AT(e,n,i),Fe(this),this.isConnected=e._$AU}_$AO(e,n=!0){var i,t;e!==this.isConnected&&(this.isConnected=e,e?null===(i=this.reconnected)||void 0===i||i.call(this):null===(t=this.disconnected)||void 0===t||t.call(this)),n&&(Ve(this,e),We(this))}setValue(e){if(Pe(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe=()=>new en;class en{}const nn=new WeakMap,tn=Je(class extends Ye{render(e){return H}update(e,[n]){var i;const t=n!==this.U;return t&&void 0!==this.U&&this.ot(void 0),(t||this.rt!==this.lt)&&(this.U=n,this.ht=null===(i=e.options)||void 0===i?void 0:i.host,this.ot(this.lt=e.element)),H}ot(e){var n;if('function'==typeof this.U){const i=null!==(n=this.ht)&&void 0!==n?n:globalThis;let t=nn.get(i);void 0===t&&(t=new WeakMap,nn.set(i,t)),void 0!==t.get(this.U)&&this.U.call(this.ht,void 0),t.set(this.U,e),void 0!==e&&this.U.call(this.ht,e)}else this.U.value=e}get rt(){var e,n,i;return'function'==typeof this.U?null===(n=nn.get(null!==(e=this.ht)&&void 0!==e?e:globalThis))||void 0===n?void 0:n.get(this.U):null===(i=this.U)||void 0===i?void 0:i.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),an=Je(class extends He{constructor(e){var n;if(super(e),e.type!==Se||'class'!==e.name||(null===(n=e.strings)||void 0===n?void 0:n.length)>2)throw Error('`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.')}render(e){return' '+Object.keys(e).filter((n=>e[n])).join(' ')+' '}update(e,[n]){var i,t;if(void 0===this.et){this.et=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(' ').split(/\s/).filter((e=>''!==e))));for(const e in n)n[e]&&!(null===(i=this.st)||void 0===i?void 0:i.has(e))&&this.et.add(e);return this.render(n)}const a=e.element.classList;this.et.forEach((e=>{e in n||(a.remove(e),this.et.delete(e))}));for(const e in n){const i=!!n[e];i===this.et.has(e)||(null===(t=this.st)||void 0===t?void 0:t.has(e))||(i?(a.add(e),this.et.add(e)):(a.remove(e),this.et.delete(e)))}return J}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*!
 * hotkeys-js v3.8.7
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * Copyright (c) 2021 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 * 
 * Licensed under the MIT license.
 */
var on='undefined'!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf('firefox')>0;function dn(e,n,i){e.addEventListener?e.addEventListener(n,i,!1):e.attachEvent&&e.attachEvent('on'.concat(n),(function(){i(window.event)}))}function sn(e,n){for(var i=n.slice(0,n.length-1),t=0;t<i.length;t++)i[t]=e[i[t].toLowerCase()];return i}function rn(e){'string'!=typeof e&&(e='');for(var n=(e=e.replace(/\s/g,'')).split(','),i=n.lastIndexOf('');i>=0;)n[i-1]+=',',n.splice(i,1),i=n.lastIndexOf('');return n}for(var ln={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,'⇪':20,',':188,'.':190,'/':191,'`':192,'-':on?173:189,'=':on?61:187,';':on?59:186,'\'':222,'[':219,']':221,'\\':220},mn={'⇧':16,shift:16,'⌥':18,alt:18,option:18,'⌃':17,ctrl:17,control:17,'⌘':91,cmd:91,command:91},cn={16:'shiftKey',18:'altKey',17:'ctrlKey',91:'metaKey',shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},hn={16:!1,18:!1,17:!1,91:!1},un={},pn=1;pn<20;pn++)ln['f'.concat(pn)]=111+pn;var vn=[],yn='all',fn=[],gn=function(e){return ln[e.toLowerCase()]||mn[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function bn(e){yn=e||'all'}function _n(){return yn||'all'}var An=function(e){var n=e.key,i=e.scope,t=e.method,a=e.splitKey,o=void 0===a?'+':a;rn(n).forEach((function(e){var n=e.split(o),a=n.length,d=n[a-1],s='*'===d?'*':gn(d);if(un[s]){i||(i=_n());var r=a>1?sn(mn,n):[];un[s]=un[s].map((function(e){return(!t||e.method===t)&&e.scope===i&&function(e,n){for(var i=e.length>=n.length?e:n,t=e.length>=n.length?n:e,a=!0,o=0;o<i.length;o++)-1===t.indexOf(i[o])&&(a=!1);return a}(e.mods,r)?{}:e}))}}))};function kn(e,n,i){var t;if(n.scope===i||'all'===n.scope){for(var a in t=n.mods.length>0,hn)Object.prototype.hasOwnProperty.call(hn,a)&&(!hn[a]&&n.mods.indexOf(+a)>-1||hn[a]&&-1===n.mods.indexOf(+a))&&(t=!1);(0!==n.mods.length||hn[16]||hn[18]||hn[17]||hn[91])&&!t&&'*'!==n.shortcut||!1===n.method(e,n)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function wn(e){var n=un['*'],i=e.keyCode||e.which||e.charCode;if($n.filter.call(this,e)){if(93!==i&&224!==i||(i=91),-1===vn.indexOf(i)&&229!==i&&vn.push(i),['ctrlKey','altKey','shiftKey','metaKey'].forEach((function(n){var i=cn[n];e[n]&&-1===vn.indexOf(i)?vn.push(i):!e[n]&&vn.indexOf(i)>-1?vn.splice(vn.indexOf(i),1):'metaKey'===n&&e[n]&&3===vn.length&&(e.ctrlKey||e.shiftKey||e.altKey||(vn=vn.slice(vn.indexOf(i))))})),i in hn){for(var t in hn[i]=!0,mn)mn[t]===i&&($n[t]=!0);if(!n)return}for(var a in hn)Object.prototype.hasOwnProperty.call(hn,a)&&(hn[a]=e[cn[a]]);e.getModifierState&&(!e.altKey||e.ctrlKey)&&e.getModifierState('AltGraph')&&(-1===vn.indexOf(17)&&vn.push(17),-1===vn.indexOf(18)&&vn.push(18),hn[17]=!0,hn[18]=!0);var o=_n();if(n)for(var d=0;d<n.length;d++)n[d].scope===o&&('keydown'===e.type&&n[d].keydown||'keyup'===e.type&&n[d].keyup)&&kn(e,n[d],o);if(i in un)for(var s=0;s<un[i].length;s++)if(('keydown'===e.type&&un[i][s].keydown||'keyup'===e.type&&un[i][s].keyup)&&un[i][s].key){for(var r=un[i][s],l=r.splitKey,m=r.key.split(l),c=[],h=0;h<m.length;h++)c.push(gn(m[h]));c.sort().join('')===vn.sort().join('')&&kn(e,r,o)}}}function $n(e,n,i){vn=[];var t=rn(e),a=[],o='all',d=document,s=0,r=!1,l=!0,m='+';for(void 0===i&&'function'==typeof n&&(i=n),'[object Object]'===Object.prototype.toString.call(n)&&(n.scope&&(o=n.scope),n.element&&(d=n.element),n.keyup&&(r=n.keyup),void 0!==n.keydown&&(l=n.keydown),'string'==typeof n.splitKey&&(m=n.splitKey)),'string'==typeof n&&(o=n);s<t.length;s++)a=[],(e=t[s].split(m)).length>1&&(a=sn(mn,e)),(e='*'===(e=e[e.length-1])?'*':gn(e))in un||(un[e]=[]),un[e].push({keyup:r,keydown:l,scope:o,mods:a,shortcut:t[s],method:i,key:t[s],splitKey:m});void 0!==d&&!function(e){return fn.indexOf(e)>-1}(d)&&window&&(fn.push(d),dn(d,'keydown',(function(e){wn(e)})),dn(window,'focus',(function(){vn=[]})),dn(d,'keyup',(function(e){wn(e),function(e){var n=e.keyCode||e.which||e.charCode,i=vn.indexOf(n);if(i>=0&&vn.splice(i,1),e.key&&'meta'===e.key.toLowerCase()&&vn.splice(0,vn.length),93!==n&&224!==n||(n=91),n in hn)for(var t in hn[n]=!1,mn)mn[t]===n&&($n[t]=!1)}(e)})))}var xn={setScope:bn,getScope:_n,deleteScope:function(e,n){var i,t;for(var a in e||(e=_n()),un)if(Object.prototype.hasOwnProperty.call(un,a))for(i=un[a],t=0;t<i.length;)i[t].scope===e?i.splice(t,1):t++;_n()===e&&bn(n||'all')},getPressedKeyCodes:function(){return vn.slice(0)},isPressed:function(e){return'string'==typeof e&&(e=gn(e)),-1!==vn.indexOf(e)},filter:function(e){var n=e.target||e.srcElement,i=n.tagName,t=!0;return!n.isContentEditable&&('INPUT'!==i&&'TEXTAREA'!==i&&'SELECT'!==i||n.readOnly)||(t=!1),t},unbind:function(e){if(e){if(Array.isArray(e))e.forEach((function(e){e.key&&An(e)}));else if('object'==typeof e)e.key&&An(e);else if('string'==typeof e){for(var n=arguments.length,i=new Array(n>1?n-1:0),t=1;t<n;t++)i[t-1]=arguments[t];var a=i[0],o=i[1];'function'==typeof a&&(o=a,a=''),An({key:e,scope:a,method:o,splitKey:'+'})}}else Object.keys(un).forEach((function(e){return delete un[e]}))}};for(var En in xn)Object.prototype.hasOwnProperty.call(xn,En)&&($n[En]=xn[En]);if('undefined'!=typeof window){var Cn=window.hotkeys;$n.noConflict=function(e){return e&&window.hotkeys===$n&&(window.hotkeys=Cn),$n},window.hotkeys=$n}var jn=function(e,n,i,t){var a,o=arguments.length,d=o<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,i):t;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)d=Reflect.decorate(e,n,i,t);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(d=(o<3?a(d):o>3?a(n,i,d):a(n,i))||d);return o>3&&d&&Object.defineProperty(n,i,d),d};let Sn=class extends Y{constructor(){super(...arguments),this.placeholder='',this.hideBreadcrumbs=!1,this.breadcrumbHome='Home',this.breadcrumbs=[],this._inputRef=Xe()}render(){let e='';if(!this.hideBreadcrumbs){const n=[];for(const e of this.breadcrumbs)n.push(D`<button
            tabindex="-1"
            @click=${()=>this.selectParent(e)}
            class="breadcrumb"
          >
            ${e}
          </button>`);e=D`<div class="breadcrumb-list">
        <button
          tabindex="-1"
          @click=${()=>this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>
        ${n}
      </div>`}return D`
      ${e}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input="${this._handleInput}"
          ${tn(this._inputRef)}
          placeholder="${this.placeholder}"
          class="search"
        />
      </div>
    `}setSearch(e){this._inputRef.value&&(this._inputRef.value.value=e)}focusSearch(){requestAnimationFrame((()=>this._inputRef.value.focus()))}_handleInput(e){const n=e.target;this.dispatchEvent(new CustomEvent('change',{detail:{search:n.value},bubbles:!1,composed:!1}))}selectParent(e){this.dispatchEvent(new CustomEvent('setParent',{detail:{parent:e},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent('close',{bubbles:!0,composed:!0}))}};Sn.styles=a`
    :host {
      flex: 1;
      position: relative;
    }
    .search {
      padding: 1.25em;
      flex-grow: 1;
      flex-shrink: 0;
      margin: 0px;
      border: none;
      appearance: none;
      font-size: 1.125em;
      background: transparent;
      caret-color: var(--ninja-accent-color);
      color: var(--ninja-text-color);
      outline: none;
      font-family: var(--ninja-font-family);
    }
    .search::placeholder {
      color: var(--ninja-placeholder-color);
    }
    .breadcrumb-list {
      padding: 1em 4em 0 1em;
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: flex-start;
      flex: initial;
    }

    .breadcrumb {
      background: var(--ninja-secondary-background-color);
      text-align: center;
      line-height: 1.2em;
      border-radius: var(--ninja-key-border-radius);
      border: 0;
      cursor: pointer;
      padding: 0.1em 0.5em;
      color: var(--ninja-secondary-text-color);
      margin-right: 0.5em;
      outline: none;
      font-family: var(--ninja-font-family);
    }

    .search-wrapper {
      display: flex;
      border-bottom: var(--ninja-separate-border);
    }
  `,jn([Ee()],Sn.prototype,'placeholder',void 0),jn([Ee({type:Boolean})],Sn.prototype,'hideBreadcrumbs',void 0),jn([Ee()],Sn.prototype,'breadcrumbHome',void 0),jn([Ee({type:Array})],Sn.prototype,'breadcrumbs',void 0),Sn=jn([$e('ninja-header')],Sn);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Mn extends He{constructor(e){if(super(e),this.it=H,e.type!==Me)throw Error(this.constructor.directiveName+'() can only be used in child bindings')}render(e){if(e===H||null==e)return this.ft=void 0,this.it=e;if(e===J)return e;if('string'!=typeof e)throw Error(this.constructor.directiveName+'() called with a non-string value');if(e===this.it)return this.ft;this.it=e;const n=[e];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}}Mn.directiveName='unsafeHTML',Mn.resultType=1;const Rn=Je(Mn);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Dn=a`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Jn=class extends Y{render(){return D`<span><slot></slot></span>`}};Jn.styles=[Dn],Jn=function(e,n,i,t){var a,o=arguments.length,d=o<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,i):t;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)d=Reflect.decorate(e,n,i,t);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(d=(o<3?a(d):o>3?a(n,i,d):a(n,i))||d);return o>3&&d&&Object.defineProperty(n,i,d),d}([$e('mwc-icon')],Jn);var Hn=function(e,n,i,t){var a,o=arguments.length,d=o<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,i):t;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)d=Reflect.decorate(e,n,i,t);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(d=(o<3?a(d):o>3?a(n,i,d):a(n,i))||d);return o>3&&d&&Object.defineProperty(n,i,d),d};let On=class extends Y{constructor(){super(),this.selected=!1,this.hotKeysJoinedView=!1,this.addEventListener('click',this.click)}ensureInView(){requestAnimationFrame((()=>this.scrollIntoView({block:'nearest'})))}click(){this.dispatchEvent(new CustomEvent('actionsSelected',{detail:this.action,bubbles:!0,composed:!0}))}updated(e){e.has('selected')&&this.selected&&this.ensureInView()}render(){let e,n;this.action.mdIcon?e=D`<mwc-icon part="ninja-icon" class="ninja-icon">${this.action.mdIcon}</mwc-icon>`:this.action.icon&&(e=Rn(this.action.icon||'')),this.action.hotkey&&(n=this.hotKeysJoinedView?D`<div class="ninja-hotkey">${this.action.hotkey}</div>`:this.action.hotkey.split('+').map((e=>D`<div class="ninja-hotkey">${e}</div>`)));const i={selected:this.selected,'ninja-action':!0};return D`
      <div class="ninja-action" part="ninja-action ${this.selected?'ninja-selected':''}" class=${an(i)}>
        ${e}
        <div class="ninja-title">${this.action.title}</div>
        ${n}
      </div>
    `}};On.styles=a`
    :host {
      display: flex;
      width: 100%;
    }
    .ninja-action {
      padding: 0.75em 1em;
      display: flex;
      border-left: 2px solid transparent;
      align-items: center;
      justify-content: start;
      outline: none;
      transition: color 0s ease 0s;
      width: 100%;
    }
    .ninja-action.selected {
      cursor: pointer;
      color: var(--ninja-selected-text-color);
      background-color: var(--ninja-selected-background);
      border-left: 2px solid var(--ninja-accent-color);
      outline: none;
    }
    .ninja-action.selected .ninja-icon {
      color: var(--ninja-selected-text-color);
    }
    .ninja-icon {
      font-size: var(--ninja-icon-size);
      max-width: var(--ninja-icon-size);
      max-height: var(--ninja-icon-size);
      margin-right: 1em;
      color: var(--ninja-icon-color);
      margin-right: 1em;
      position: relative;
    }

    .ninja-title {
      flex-shrink: 0.01;
      margin-right: 0.5em;
      flex-grow: 1;
      font-size: 0.8125em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .ninja-hotkeys {
      margin-left: 0.5em;
      flex-shrink: 0;
      width: min-content;
    }

    .ninja-hotkey {
      background: var(--ninja-secondary-background-color);
      padding: 0.06em 0.25em;
      border-radius: var(--ninja-key-border-radius);
      text-transform: capitalize;
      color: var(--ninja-secondary-text-color);
      font-size: 0.75em;
      margin-left: 0.5em;
    }
  `,Hn([Ee({type:Object})],On.prototype,'action',void 0),Hn([Ee({type:Boolean})],On.prototype,'selected',void 0),Hn([Ee({type:Boolean})],On.prototype,'hotKeysJoinedView',void 0),On=Hn([$e('ninja-action')],On);const Pn=D` <div class="modal-footer" slot="footer">
  <span class="help">
    <svg
      version="1.0"
      class="ninja-examplekey"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 1280"
    >
      <path
        d="M1013 376c0 73.4-.4 113.3-1.1 120.2a159.9 159.9 0 0 1-90.2 127.3c-20 9.6-36.7 14-59.2 15.5-7.1.5-121.9.9-255 1h-242l95.5-95.5 95.5-95.5-38.3-38.2-38.2-38.3-160 160c-88 88-160 160.4-160 161 0 .6 72 73 160 161l160 160 38.2-38.3 38.3-38.2-95.5-95.5-95.5-95.5h251.1c252.9 0 259.8-.1 281.4-3.6 72.1-11.8 136.9-54.1 178.5-116.4 8.6-12.9 22.6-40.5 28-55.4 4.4-12 10.7-36.1 13.1-50.6 1.6-9.6 1.8-21 2.1-132.8l.4-122.2H1013v110z"
      />
    </svg>

    to select
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
    to navigate
  </span>
  <span class="help">
    <span class="ninja-examplekey esc">esc</span>
    to close
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey backspace"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
        clip-rule="evenodd"
      />
    </svg>
    move to parent
  </span>
</div>`,Tn=a`
  :host {
    --ninja-width: 640px;
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(255, 255, 255, 0.5);
    --ninja-text-color: rgb(60, 65, 73);
    --ninja-font-size: 16px;
    --ninja-top: 20%;

    --ninja-key-border-radius: 0.25em;
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgb(239, 241, 244);
    --ninja-secondary-text-color: rgb(107, 111, 118);

    --ninja-selected-background: rgb(248, 249, 251);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-icon-size: 1.2em;
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-background: #fff;
    --ninja-modal-shadow: rgb(0 0 0 / 50%) 0px 16px 70px;

    --ninja-actions-height: 300px;
    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(242, 242, 242, 0.4);

    --ninja-placeholder-color: #8e8e8e;

    font-size: var(--ninja-font-size);

    --ninja-z-index: 1;
  }

  :host(.dark) {
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(0, 0, 0, 0.7);
    --ninja-text-color: #7d7d7d;

    --ninja-modal-background: rgba(17, 17, 17, 0.85);
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgba(51, 51, 51, 0.44);
    --ninja-secondary-text-color: #888;

    --ninja-selected-text-color: #eaeaea;
    --ninja-selected-background: rgba(51, 51, 51, 0.44);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-shadow: 0 16px 70px rgba(0, 0, 0, 0.2);

    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(30, 30, 30, 85%);
  }

  .modal {
    display: none;
    position: fixed;
    z-index: var(--ninja-z-index);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: var(--ninja-overflow-background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-backdrop-filter: var(--ninja-backdrop-filter);
    backdrop-filter: var(--ninja-backdrop-filter);
    text-align: left;
    color: var(--ninja-text-color);
    font-family: var(--ninja-font-family);
  }
  .modal.visible {
    display: block;
  }

  .modal-content {
    position: relative;
    top: var(--ninja-top);
    margin: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    -webkit-box-flex: 1;
    flex-grow: 1;
    min-width: 0px;
    will-change: transform;
    background: var(--ninja-modal-background);
    border-radius: 0.5em;
    box-shadow: var(--ninja-modal-shadow);
    max-width: var(--ninja-width);
    overflow: hidden;
  }

  .bump {
    animation: zoom-in-zoom-out 0.2s ease;
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(0.99);
    }
    50% {
      transform: scale(1.01, 1.01);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .ninja-github {
    color: var(--ninja-keys-text-color);
    font-weight: normal;
    text-decoration: none;
  }

  .actions-list {
    max-height: var(--ninja-actions-height);
    overflow: auto;
    scroll-behavior: smooth;
    position: relative;
    margin: 0;
    padding: 0.5em 0;
    list-style: none;
    scroll-behavior: smooth;
  }

  .group-header {
    height: 1.375em;
    line-height: 1.375em;
    padding-left: 1.25em;
    padding-top: 0.5em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.75em;
    line-height: 1em;
    color: var(--ninja-group-text-color);
    margin: 1px 0;
  }

  .modal-footer {
    background: var(--ninja-footer-background);
    padding: 0.5em 1em;
    display: flex;
    /* font-size: 0.75em; */
    border-top: var(--ninja-separate-border);
    color: var(--ninja-secondary-text-color);
  }

  .modal-footer .help {
    display: flex;
    margin-right: 1em;
    align-items: center;
    font-size: 0.75em;
  }

  .ninja-examplekey {
    background: var(--ninja-secondary-background-color);
    padding: 0.06em 0.25em;
    border-radius: var(--ninja-key-border-radius);
    color: var(--ninja-secondary-text-color);
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    font-size: 1.25em;
    fill: currentColor;
  }
  .ninja-examplekey.esc {
    width: auto;
    height: auto;
    font-size: 1.1em;
  }
  .ninja-examplekey.backspace {
    opacity: 0.7;
  }
`;var Bn=function(e,n,i,t){var a,o=arguments.length,d=o<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,i):t;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)d=Reflect.decorate(e,n,i,t);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(d=(o<3?a(d):o>3?a(n,i,d):a(n,i))||d);return o>3&&d&&Object.defineProperty(n,i,d),d};let Kn=class extends Y{constructor(){super(...arguments),this.placeholder='Type a command or search...',this.disableHotkeys=!1,this.hideBreadcrumbs=!1,this.openHotkey='cmd+k,ctrl+k',this.navigationUpHotkey='up,shift+tab',this.navigationDownHotkey='down,tab',this.closeHotkey='esc',this.goBackHotkey='backspace',this.selectHotkey='enter',this.hotKeysJoinedView=!1,this.noAutoLoadMdIcons=!1,this.data=[],this.visible=!1,this._bump=!0,this._actionMatches=[],this._search='',this._flatData=[],this._headerRef=Xe()}open(e={}){this._bump=!0,this.visible=!0,this._headerRef.value.focusSearch(),this._actionMatches.length>0&&(this._selected=this._actionMatches[0]),this.setParent(e.parent)}close(){this._bump=!1,this.visible=!1}setParent(e){this._currentRoot=e||void 0,this._selected=void 0,this._search='',this._headerRef.value.setSearch('')}get breadcrumbs(){var e;const n=[];let i=null===(e=this._selected)||void 0===e?void 0:e.parent;if(i)for(n.push(i);i;){const e=this._flatData.find((e=>e.id===i));(null==e?void 0:e.parent)&&n.push(e.parent),i=e?e.parent:void 0}return n.reverse()}connectedCallback(){super.connectedCallback(),this.noAutoLoadMdIcons||document.fonts.load('24px Material Icons','apps').then((()=>{})),this._registerInternalHotkeys()}disconnectedCallback(){super.disconnectedCallback(),this._unregisterInternalHotkeys()}_flattern(e,n){let i=[];return e||(e=[]),e.map((e=>{const t=e.children&&e.children.some((e=>'string'==typeof e)),a={...e,parent:e.parent||n};return t||(a.children&&a.children.length&&(n=e.id,i=[...i,...a.children]),a.children=a.children?a.children.map((e=>e.id)):[]),a})).concat(i.length?this._flattern(i,n):i)}update(e){e.has('data')&&!this.disableHotkeys&&(this._flatData=this._flattern(this.data),this._flatData.filter((e=>!!e.hotkey)).forEach((e=>{$n(e.hotkey,(n=>{n.preventDefault(),e.handler&&e.handler(e)}))}))),super.update(e)}_registerInternalHotkeys(){this.openHotkey&&$n(this.openHotkey,(e=>{e.preventDefault(),this.visible?this.close():this.open()})),this.selectHotkey&&$n(this.selectHotkey,(e=>{this.visible&&(e.preventDefault(),this._actionSelected(this._actionMatches[this._selectedIndex]))})),this.goBackHotkey&&$n(this.goBackHotkey,(e=>{this.visible&&(this._search||(e.preventDefault(),this._goBack()))})),this.navigationDownHotkey&&$n(this.navigationDownHotkey,(e=>{this.visible&&(e.preventDefault(),this._selectedIndex>=this._actionMatches.length-1?this._selected=this._actionMatches[0]:this._selected=this._actionMatches[this._selectedIndex+1])})),this.navigationUpHotkey&&$n(this.navigationUpHotkey,(e=>{this.visible&&(e.preventDefault(),0===this._selectedIndex?this._selected=this._actionMatches[this._actionMatches.length-1]:this._selected=this._actionMatches[this._selectedIndex-1])})),this.closeHotkey&&$n(this.closeHotkey,(()=>{this.visible&&this.close()}))}_unregisterInternalHotkeys(){this.openHotkey&&$n.unbind(this.openHotkey),this.selectHotkey&&$n.unbind(this.selectHotkey),this.goBackHotkey&&$n.unbind(this.goBackHotkey),this.navigationDownHotkey&&$n.unbind(this.navigationDownHotkey),this.navigationUpHotkey&&$n.unbind(this.navigationUpHotkey),this.closeHotkey&&$n.unbind(this.closeHotkey)}_actionFocused(e,n){this._selected=e,n.target.ensureInView()}_onTransitionEnd(){this._bump=!1}_goBack(){const e=this.breadcrumbs.length>1?this.breadcrumbs[this.breadcrumbs.length-2]:void 0;this.setParent(e)}render(){const e={bump:this._bump,'modal-content':!0},n={visible:this.visible,modal:!0},i=this._flatData.filter((e=>{var n;const i=new RegExp(this._search,'gi'),t=e.title.match(i)||(null===(n=e.keywords)||void 0===n?void 0:n.match(i));return(!this._currentRoot&&this._search||e.parent===this._currentRoot)&&t})).reduce(((e,n)=>e.set(n.section,[...e.get(n.section)||[],n])),new Map);this._actionMatches=[...i.values()].flat(),this._actionMatches.length>0&&-1===this._selectedIndex&&(this._selected=this._actionMatches[0]),0===this._actionMatches.length&&(this._selected=void 0);const t=e=>D` ${Ie(e,(e=>e.id),(e=>{var n;return D`<ninja-action
            exportparts="ninja-action,ninja-selected,ninja-icon"
            .selected=${Ge(e.id===(null===(n=this._selected)||void 0===n?void 0:n.id))}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            @mouseover=${n=>this._actionFocused(e,n)}
            @actionsSelected=${e=>this._actionSelected(e.detail)}
            .action=${e}
          ></ninja-action>`}))}`,a=[];return i.forEach(((e,n)=>{const i=n?D`<div class="group-header">${n}</div>`:void 0;a.push(D`${i}${t(e)}`)})),D`
      <div @click=${this._overlayClick} class=${an(n)}>
        <div class=${an(e)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            exportparts="ninja-input,ninja-input-wrapper"
            ${tn(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.breadcrumbs}
            @change=${this._handleInput}
            @setParent=${e=>this.setParent(e.detail.parent)}
            @close=${this.close}
          >
          </ninja-header>
          <div class="modal-body">
            <div class="actions-list" part="actions-list">${a}</div>
          </div>
          <slot name="footer"> ${Pn} </slot>
        </div>
      </div>
    `}get _selectedIndex(){return this._selected?this._actionMatches.indexOf(this._selected):-1}_actionSelected(e){var n;if(this.dispatchEvent(new CustomEvent('selected',{detail:{search:this._search,action:e},bubbles:!0,composed:!0})),e){if(e.children&&(null===(n=e.children)||void 0===n?void 0:n.length)>0&&(this._currentRoot=e.id,this._search=''),this._headerRef.value.setSearch(''),this._headerRef.value.focusSearch(),e.handler){const n=e.handler(e);(null==n?void 0:n.keepOpen)||this.close()}this._bump=!0}}async _handleInput(e){this._search=e.detail.search,await this.updateComplete,this.dispatchEvent(new CustomEvent('change',{detail:{search:this._search,actions:this._actionMatches},bubbles:!0,composed:!0}))}_overlayClick(e){var n;(null===(n=e.target)||void 0===n?void 0:n.classList.contains('modal'))&&this.close()}};Kn.styles=[Tn],Bn([Ee({type:String})],Kn.prototype,'placeholder',void 0),Bn([Ee({type:Boolean})],Kn.prototype,'disableHotkeys',void 0),Bn([Ee({type:Boolean})],Kn.prototype,'hideBreadcrumbs',void 0),Bn([Ee()],Kn.prototype,'openHotkey',void 0),Bn([Ee()],Kn.prototype,'navigationUpHotkey',void 0),Bn([Ee()],Kn.prototype,'navigationDownHotkey',void 0),Bn([Ee()],Kn.prototype,'closeHotkey',void 0),Bn([Ee()],Kn.prototype,'goBackHotkey',void 0),Bn([Ee()],Kn.prototype,'selectHotkey',void 0),Bn([Ee({type:Boolean})],Kn.prototype,'hotKeysJoinedView',void 0),Bn([Ee({type:Boolean})],Kn.prototype,'noAutoLoadMdIcons',void 0),Bn([Ee({type:Array,hasChanged:()=>!0})],Kn.prototype,'data',void 0),Bn([Ce()],Kn.prototype,'visible',void 0),Bn([Ce()],Kn.prototype,'_bump',void 0),Bn([Ce()],Kn.prototype,'_actionMatches',void 0),Bn([Ce()],Kn.prototype,'_search',void 0),Bn([Ce()],Kn.prototype,'_currentRoot',void 0),Bn([Ce()],Kn.prototype,'_flatData',void 0),Bn([Ce()],Kn.prototype,'breadcrumbs',null),Bn([Ce()],Kn.prototype,'_selected',void 0),Kn=Bn([$e('ninja-keys')],Kn);const Ln=function e(n={}){if(!ge(n))throw new Error('object required');const i=_e.get(n);if(i)return i;let t=Ae;const a=new Set,o=(e,n=++Ae)=>{t!==n&&(t=n,a.forEach((i=>i(e,n))))},d=new Map,s=e=>{let n=d.get(e);return n||(n=(n,i)=>{const t=[...n];t[1]=[e,...t[1]],o(t,i)},d.set(e,n)),n},r=e=>{const n=d.get(e);return d.delete(e),n},l=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),m={get:(e,n,i)=>n===ce?t:n===he?a:n===ue?((e,n)=>{const i=ke.get(n);if((null==i?void 0:i[0])===t)return i[1];const a=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return me(a,!0),ke.set(n,[t,a]),Reflect.ownKeys(e).forEach((i=>{const t=Reflect.get(e,i,n);if(fe.has(t))me(t,!1),a[i]=t;else if(t instanceof Promise)if(ve in t)a[i]=t[ve];else{const e=t[ye]||t;Object.defineProperty(a,i,{get(){if(ve in t)return t[ve];throw e}})}else(null==t?void 0:t[he])?a[i]=t[ue]:a[i]=t})),Object.freeze(a),a})(e,i):n===pe?m:Reflect.get(e,n,i),deleteProperty(e,n){const i=Reflect.get(e,n),t=null==i?void 0:i[he];t&&t.delete(r(n));const a=Reflect.deleteProperty(e,n);return a&&o(['delete',[n],i]),a},is:Object.is,canProxy:be,set(n,i,t,a){var d;const l=Reflect.has(n,i),m=Reflect.get(n,i,a);if(l&&this.is(m,t))return!0;const c=null==m?void 0:m[he];let h;return c&&c.delete(r(i)),ge(t)&&(t=le(t)||t),(null==(d=Object.getOwnPropertyDescriptor(n,i))?void 0:d.set)?h=t:t instanceof Promise?h=t.then((e=>(h[ve]=e,o(['resolve',[i],e]),e))).catch((e=>{h[ye]=e,o(['reject',[i],e])})):(null==t?void 0:t[he])?(h=t,h[he].add(s(i))):this.canProxy(t)?(h=e(t),h[he].add(s(i))):h=t,Reflect.set(n,i,h,a),o(['set',[i],t,m]),!0}},c=new Proxy(l,m);return _e.set(n,c),Reflect.ownKeys(n).forEach((e=>{const i=Object.getOwnPropertyDescriptor(n,e);i.get||i.set?Object.defineProperty(l,e,i):c[e]=n[e]})),c}({user:{},users:[]});customElements.define('home-index',class extends Y{static get properties(){return{}}constructor(){super()}render(){return D`<h1>Hello</h1>
      <a href="/">Home</a>
      <a href="/users">Users</a>`}});customElements.define('users-index',class extends Y{static get properties(){return{users:{type:Array}}}constructor(){super(),this.users=[]}render(){return D`
      <h1>Hello</h1>
      <a href="/">Home</a>
      <ul>
        ${this.users.map((e=>D`<li><a href="/users/${e.id}/edit">${e.name}</a></li>`))}
      </ul>
    `}});customElements.define('user-edit',class extends Y{static get properties(){return{user:{type:Object}}}constructor(){super(),this.user={}}render(){return D`
      <h1>Edit</h1>
      <a href="/">Home</a>
      <form>
        <input type="text" name="name" value="${this.user.name}" />
        <button type="submit">Save</button>
      </form>
    `}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}});class Nn{host;constructor(e){(this.host=e).addController(this),function(e,n,i){let t;'production'===(import.meta.env&&import.meta.env.MODE)||(null==e?void 0:e[he])||console.warn('Please use proxy object');const a=[],o=e=>{a.push(e),i?n(a.splice(0)):t||(t=Promise.resolve().then((()=>{t=void 0,n(a.splice(0))})))};e[he].add(o)}(Ln,(()=>{this.host.users=we(Ln).users||[],this.host.user=we(Ln).user||{}}))}async hostConnected(){}hostDisconnected(){}}customElements.define('my-app',class extends Y{commands=[{id:'Projects',title:'Open Projects',hotkey:'ctrl+N',icon:'apps',section:'Projects',handler:()=>{alert('Your logic to handle')}},{id:'Theme',title:'Change theme...',icon:'desktop_windows',children:['Light Theme','Dark Theme','System Theme'],hotkey:'ctrl+T',handler:()=>(ninja.open({parent:'Theme'}),{keepOpen:!0})},{id:'Light Theme',title:'Change theme to Light',icon:'light_mode',parent:'Theme',handler:()=>{document.documentElement.classList.remove('dark')}},{id:'Dark Theme',title:'Change theme to Dark',icon:'dark_mode',parent:'Theme',handler:()=>{document.documentElement.classList.add('dark')}}];appService=new Nn(this);router=new oe(this,[{path:'/',render:()=>D`<home-index></home-index
          ><ninja-keys .data=${this.commands} noAutoLoadMdIcons></ninja-keys>`},{path:'/users',render:()=>D`<users-index .users=${this.users}></users-index>`},{path:'/users/:id/edit',render:()=>D`<user-edit .user=${this.user}></user-edit>`,enter:e=>{this.user=this.users.find((n=>n.id==e.id))}}]);static get properties(){return{users:{type:Array},user:{type:Object}}}constructor(){super(),this.users=[],this.user={},setTimeout((()=>{var e;((e,n)=>{const i=Ln.users.find((n=>n.id===e));i&&(i.name=n)})(0,'John'),e='Jane',Ln.user.name=e}),6e3)}render(){return D`${this.router.outlet()}`}});const Un=[{id:0,name:'Jacob'},{id:1,name:'Michael'},{id:2,name:'Ethan'},{id:3,name:'Joshua'},{id:4,name:'Daniel'},{id:5,name:'Alexander'},{id:6,name:'Anthony'},{id:7,name:'William'},{id:8,name:'Christopher'},{id:9,name:'Matthew'},{id:10,name:'Jayden'},{id:11,name:'Andrew'},{id:12,name:'Joseph'},{id:13,name:'David'},{id:14,name:'Noah'},{id:15,name:'Aiden'},{id:16,name:'James'},{id:17,name:'Ryan'},{id:18,name:'Logan'},{id:19,name:'John'},{id:20,name:'Nathan'},{id:21,name:'Elijah'},{id:22,name:'Christian'},{id:23,name:'Gabriel'},{id:24,name:'Benjamin'},{id:25,name:'Jonathan'},{id:26,name:'Tyler'},{id:27,name:'Samuel'},{id:28,name:'Nicholas'},{id:29,name:'Gavin'},{id:30,name:'Dylan'},{id:31,name:'Jackson'},{id:32,name:'Brandon'},{id:33,name:'Caleb'},{id:34,name:'Mason'},{id:35,name:'Angel'},{id:36,name:'Isaac'},{id:37,name:'Evan'},{id:38,name:'Jack'},{id:39,name:'Kevin'},{id:40,name:'Jose'},{id:41,name:'Isaiah'},{id:42,name:'Luke'},{id:43,name:'Landon'},{id:44,name:'Justin'},{id:45,name:'Lucas'},{id:46,name:'Zachary'},{id:47,name:'Jordan'},{id:48,name:'Robert'},{id:49,name:'Aaron'},{id:50,name:'Brayden'},{id:51,name:'Thomas'},{id:52,name:'Cameron'},{id:53,name:'Hunter'},{id:54,name:'Austin'},{id:55,name:'Adrian'},{id:56,name:'Connor'},{id:57,name:'Owen'},{id:58,name:'Aidan'},{id:59,name:'Jason'},{id:60,name:'Julian'},{id:61,name:'Wyatt'},{id:62,name:'Charles'},{id:63,name:'Luis'},{id:64,name:'Carter'},{id:65,name:'Juan'},{id:66,name:'Chase'},{id:67,name:'Diego'},{id:68,name:'Jeremiah'},{id:69,name:'Brody'},{id:70,name:'Xavier'},{id:71,name:'Adam'},{id:72,name:'Carlos'},{id:73,name:'Sebastian'},{id:74,name:'Liam'},{id:75,name:'Hayden'},{id:76,name:'Nathaniel'},{id:77,name:'Henry'},{id:78,name:'Jesus'},{id:79,name:'Ian'},{id:80,name:'Tristan'},{id:81,name:'Bryan'},{id:82,name:'Sean'},{id:83,name:'Cole'},{id:84,name:'Alex'},{id:85,name:'Eric'},{id:86,name:'Brian'},{id:87,name:'Jaden'},{id:88,name:'Carson'},{id:89,name:'Blake'},{id:90,name:'Ayden'},{id:91,name:'Cooper'},{id:92,name:'Dominic'},{id:93,name:'Brady'},{id:94,name:'Caden'},{id:95,name:'Josiah'},{id:96,name:'Kyle'},{id:97,name:'Colton'},{id:98,name:'Kaden'},{id:99,name:'Eli'},{id:100,name:'Miguel'},{id:101,name:'Antonio'},{id:102,name:'Parker'},{id:103,name:'Steven'},{id:104,name:'Alejandro'},{id:105,name:'Riley'},{id:106,name:'Richard'},{id:107,name:'Timothy'},{id:108,name:'Devin'},{id:109,name:'Jesse'},{id:110,name:'Victor'},{id:111,name:'Jake'},{id:112,name:'Joel'},{id:113,name:'Colin'},{id:114,name:'Kaleb'},{id:115,name:'Bryce'},{id:116,name:'Levi'},{id:117,name:'Oliver'},{id:118,name:'Oscar'},{id:119,name:'Vincent'},{id:120,name:'Ashton'},{id:121,name:'Cody'},{id:122,name:'Micah'},{id:123,name:'Preston'},{id:124,name:'Marcus'},{id:125,name:'Max'},{id:126,name:'Patrick'},{id:127,name:'Seth'},{id:128,name:'Jeremy'},{id:129,name:'Peyton'},{id:130,name:'Nolan'},{id:131,name:'Ivan'},{id:132,name:'Damian'},{id:133,name:'Maxwell'},{id:134,name:'Alan'},{id:135,name:'Kenneth'},{id:136,name:'Jonah'},{id:137,name:'Jorge'},{id:138,name:'Mark'},{id:139,name:'Giovanni'},{id:140,name:'Eduardo'},{id:141,name:'Grant'},{id:142,name:'Collin'},{id:143,name:'Gage'},{id:144,name:'Omar'},{id:145,name:'Emmanuel'},{id:146,name:'Trevor'},{id:147,name:'Edward'},{id:148,name:'Ricardo'},{id:149,name:'Cristian'},{id:150,name:'Nicolas'},{id:151,name:'Kayden'},{id:152,name:'George'},{id:153,name:'Jaxon'},{id:154,name:'Paul'},{id:155,name:'Braden'},{id:156,name:'Elias'},{id:157,name:'Andres'},{id:158,name:'Derek'},{id:159,name:'Garrett'},{id:160,name:'Tanner'},{id:161,name:'Malachi'},{id:162,name:'Conner'},{id:163,name:'Fernando'},{id:164,name:'Cesar'},{id:165,name:'Javier'},{id:166,name:'Miles'},{id:167,name:'Jaiden'},{id:168,name:'Alexis'},{id:169,name:'Leonardo'},{id:170,name:'Santiago'},{id:171,name:'Francisco'},{id:172,name:'Cayden'},{id:173,name:'Shane'},{id:174,name:'Edwin'},{id:175,name:'Hudson'},{id:176,name:'Travis'},{id:177,name:'Bryson'},{id:178,name:'Erick'},{id:179,name:'Jace'},{id:180,name:'Hector'},{id:181,name:'Josue'},{id:182,name:'Peter'},{id:183,name:'Jaylen'},{id:184,name:'Mario'},{id:185,name:'Manuel'},{id:186,name:'Abraham'},{id:187,name:'Grayson'},{id:188,name:'Damien'},{id:189,name:'Kaiden'},{id:190,name:'Spencer'},{id:191,name:'Stephen'},{id:192,name:'Edgar'},{id:193,name:'Wesley'},{id:194,name:'Shawn'},{id:195,name:'Trenton'},{id:196,name:'Jared'},{id:197,name:'Jeffrey'},{id:198,name:'Landen'},{id:199,name:'Johnathan'},{id:200,name:'Bradley'},{id:201,name:'Braxton'},{id:202,name:'Ryder'},{id:203,name:'Camden'},{id:204,name:'Roman'},{id:205,name:'Asher'},{id:206,name:'Brendan'},{id:207,name:'Maddox'},{id:208,name:'Sergio'},{id:209,name:'Israel'},{id:210,name:'Andy'},{id:211,name:'Lincoln'},{id:212,name:'Erik'},{id:213,name:'Donovan'},{id:214,name:'Raymond'},{id:215,name:'Avery'},{id:216,name:'Rylan'},{id:217,name:'Dalton'},{id:218,name:'Harrison'},{id:219,name:'Andre'},{id:220,name:'Martin'},{id:221,name:'Keegan'},{id:222,name:'Marco'},{id:223,name:'Jude'},{id:224,name:'Sawyer'},{id:225,name:'Dakota'},{id:226,name:'Leo'},{id:227,name:'Calvin'},{id:228,name:'Kai'},{id:229,name:'Drake'},{id:230,name:'Troy'},{id:231,name:'Zion'},{id:232,name:'Clayton'},{id:233,name:'Roberto'},{id:234,name:'Zane'},{id:235,name:'Gregory'},{id:236,name:'Tucker'},{id:237,name:'Rafael'},{id:238,name:'Kingston'},{id:239,name:'Dominick'},{id:240,name:'Ezekiel'},{id:241,name:'Griffin'},{id:242,name:'Devon'},{id:243,name:'Drew'},{id:244,name:'Lukas'},{id:245,name:'Johnny'},{id:246,name:'Ty'},{id:247,name:'Pedro'},{id:248,name:'Tyson'},{id:249,name:'Caiden'},{id:250,name:'Mateo'},{id:251,name:'Braylon'},{id:252,name:'Cash'},{id:253,name:'Aden'},{id:254,name:'Chance'},{id:255,name:'Taylor'},{id:256,name:'Marcos'},{id:257,name:'Maximus'},{id:258,name:'Ruben'},{id:259,name:'Emanuel'},{id:260,name:'Simon'},{id:261,name:'Corbin'},{id:262,name:'Brennan'},{id:263,name:'Dillon'},{id:264,name:'Skyler'},{id:265,name:'Myles'},{id:266,name:'Xander'},{id:267,name:'Jaxson'},{id:268,name:'Dawson'},{id:269,name:'Kameron'},{id:270,name:'Kyler'},{id:271,name:'Axel'},{id:272,name:'Colby'},{id:273,name:'Jonas'},{id:274,name:'Joaquin'},{id:275,name:'Payton'},{id:276,name:'Brock'},{id:277,name:'Frank'},{id:278,name:'Enrique'},{id:279,name:'Quinn'},{id:280,name:'Emilio'},{id:281,name:'Malik'},{id:282,name:'Grady'},{id:283,name:'Angelo'},{id:284,name:'Julio'},{id:285,name:'Derrick'},{id:286,name:'Raul'},{id:287,name:'Fabian'},{id:288,name:'Corey'},{id:289,name:'Gerardo'},{id:290,name:'Dante'},{id:291,name:'Ezra'},{id:292,name:'Armando'},{id:293,name:'Allen'},{id:294,name:'Theodore'},{id:295,name:'Gael'},{id:296,name:'Amir'},{id:297,name:'Zander'},{id:298,name:'Adan'},{id:299,name:'Maximilian'},{id:300,name:'Randy'},{id:301,name:'Easton'},{id:302,name:'Dustin'},{id:303,name:'Luca'},{id:304,name:'Phillip'},{id:305,name:'Julius'},{id:306,name:'Charlie'},{id:307,name:'Ronald'},{id:308,name:'Jakob'},{id:309,name:'Cade'},{id:310,name:'Brett'},{id:311,name:'Trent'},{id:312,name:'Silas'},{id:313,name:'Keith'},{id:314,name:'Emiliano'},{id:315,name:'Trey'},{id:316,name:'Jalen'},{id:317,name:'Darius'},{id:318,name:'Lane'},{id:319,name:'Jerry'},{id:320,name:'Jaime'},{id:321,name:'Scott'},{id:322,name:'Graham'},{id:323,name:'Weston'},{id:324,name:'Braydon'},{id:325,name:'Anderson'},{id:326,name:'Rodrigo'},{id:327,name:'Pablo'},{id:328,name:'Saul'},{id:329,name:'Danny'},{id:330,name:'Donald'},{id:331,name:'Elliot'},{id:332,name:'Brayan'},{id:333,name:'Dallas'},{id:334,name:'Lorenzo'},{id:335,name:'Casey'},{id:336,name:'Mitchell'},{id:337,name:'Alberto'},{id:338,name:'Tristen'},{id:339,name:'Rowan'},{id:340,name:'Jayson'},{id:341,name:'Gustavo'},{id:342,name:'Aaden'},{id:343,name:'Amari'},{id:344,name:'Dean'},{id:345,name:'Braeden'},{id:346,name:'Declan'},{id:347,name:'Chris'},{id:348,name:'Ismael'},{id:349,name:'Dane'},{id:350,name:'Louis'},{id:351,name:'Arturo'},{id:352,name:'Brenden'},{id:353,name:'Felix'},{id:354,name:'Jimmy'},{id:355,name:'Cohen'},{id:356,name:'Tony'},{id:357,name:'Holden'},{id:358,name:'Reid'},{id:359,name:'Abel'},{id:360,name:'Bennett'},{id:361,name:'Zackary'},{id:362,name:'Arthur'},{id:363,name:'Nehemiah'},{id:364,name:'Ricky'},{id:365,name:'Esteban'},{id:366,name:'Cruz'},{id:367,name:'Finn'},{id:368,name:'Mauricio'},{id:369,name:'Dennis'},{id:370,name:'Keaton'},{id:371,name:'Albert'},{id:372,name:'Marvin'},{id:373,name:'Mathew'},{id:374,name:'Larry'},{id:375,name:'Moises'},{id:376,name:'Issac'},{id:377,name:'Philip'},{id:378,name:'Quentin'},{id:379,name:'Curtis'},{id:380,name:'Greyson'},{id:381,name:'Jameson'},{id:382,name:'Everett'},{id:383,name:'Jayce'},{id:384,name:'Darren'},{id:385,name:'Elliott'},{id:386,name:'Uriel'},{id:387,name:'Alfredo'},{id:388,name:'Hugo'},{id:389,name:'Alec'},{id:390,name:'Jamari'},{id:391,name:'Marshall'},{id:392,name:'Walter'},{id:393,name:'Judah'},{id:394,name:'Jay'},{id:395,name:'Lance'},{id:396,name:'Beau'},{id:397,name:'Ali'},{id:398,name:'Landyn'},{id:399,name:'Yahir'},{id:400,name:'Phoenix'},{id:401,name:'Nickolas'},{id:402,name:'Kobe'},{id:403,name:'Bryant'},{id:404,name:'Maurice'},{id:405,name:'Russell'},{id:406,name:'Leland'},{id:407,name:'Colten'},{id:408,name:'Reed'},{id:409,name:'Davis'},{id:410,name:'Joe'},{id:411,name:'Ernesto'},{id:412,name:'Desmond'},{id:413,name:'Kade'},{id:414,name:'Reece'},{id:415,name:'Morgan'},{id:416,name:'Ramon'},{id:417,name:'Rocco'},{id:418,name:'Orlando'},{id:419,name:'Ryker'},{id:420,name:'Brodie'},{id:421,name:'Paxton'},{id:422,name:'Jacoby'},{id:423,name:'Douglas'},{id:424,name:'Kristopher'},{id:425,name:'Gary'},{id:426,name:'Lawrence'},{id:427,name:'Izaiah'},{id:428,name:'Solomon'},{id:429,name:'Nikolas'},{id:430,name:'Mekhi'},{id:431,name:'Justice'},{id:432,name:'Tate'},{id:433,name:'Jaydon'},{id:434,name:'Salvador'},{id:435,name:'Shaun'},{id:436,name:'Alvin'},{id:437,name:'Eddie'},{id:438,name:'Kane'},{id:439,name:'Davion'},{id:440,name:'Zachariah'},{id:441,name:'Dorian'},{id:442,name:'Titus'},{id:443,name:'Kellen'},{id:444,name:'Camron'},{id:445,name:'Isiah'},{id:446,name:'Javon'},{id:447,name:'Nasir'},{id:448,name:'Milo'},{id:449,name:'Johan'},{id:450,name:'Byron'},{id:451,name:'Jasper'},{id:452,name:'Jonathon'},{id:453,name:'Chad'},{id:454,name:'Marc'},{id:455,name:'Kelvin'},{id:456,name:'Chandler'},{id:457,name:'Sam'},{id:458,name:'Cory'},{id:459,name:'Deandre'},{id:460,name:'River'},{id:461,name:'Reese'},{id:462,name:'Roger'},{id:463,name:'Quinton'},{id:464,name:'Talon'},{id:465,name:'Romeo'},{id:466,name:'Franklin'},{id:467,name:'Noel'},{id:468,name:'Alijah'},{id:469,name:'Guillermo'},{id:470,name:'Gunner'},{id:471,name:'Damon'},{id:472,name:'Jadon'},{id:473,name:'Emerson'},{id:474,name:'Micheal'},{id:475,name:'Bruce'},{id:476,name:'Terry'},{id:477,name:'Kolton'},{id:478,name:'Melvin'},{id:479,name:'Beckett'},{id:480,name:'Porter'},{id:481,name:'August'},{id:482,name:'Brycen'},{id:483,name:'Dayton'},{id:484,name:'Jamarion'},{id:485,name:'Leonel'},{id:486,name:'Karson'},{id:487,name:'Zayden'},{id:488,name:'Keagan'},{id:489,name:'Carl'},{id:490,name:'Khalil'},{id:491,name:'Cristopher'},{id:492,name:'Nelson'},{id:493,name:'Braiden'},{id:494,name:'Moses'},{id:495,name:'Isaias'},{id:496,name:'Roy'},{id:497,name:'Triston'},{id:498,name:'Walker'},{id:499,name:'Kale'},{id:500,name:'Jermaine'},{id:501,name:'Leon'},{id:502,name:'Rodney'},{id:503,name:'Kristian'},{id:504,name:'Mohamed'},{id:505,name:'Ronan'},{id:506,name:'Pierce'},{id:507,name:'Trace'},{id:508,name:'Warren'},{id:509,name:'Jeffery'},{id:510,name:'Maverick'},{id:511,name:'Cyrus'},{id:512,name:'Quincy'},{id:513,name:'Nathanael'},{id:514,name:'Skylar'},{id:515,name:'Tommy'},{id:516,name:'Conor'},{id:517,name:'Noe'},{id:518,name:'Ezequiel'},{id:519,name:'Demetrius'},{id:520,name:'Jaylin'},{id:521,name:'Kendrick'},{id:522,name:'Frederick'},{id:523,name:'Terrance'},{id:524,name:'Bobby'},{id:525,name:'Jamison'},{id:526,name:'Jon'},{id:527,name:'Rohan'},{id:528,name:'Jett'},{id:529,name:'Kieran'},{id:530,name:'Tobias'},{id:531,name:'Ari'},{id:532,name:'Colt'},{id:533,name:'Gideon'},{id:534,name:'Felipe'},{id:535,name:'Kenny'},{id:536,name:'Wilson'},{id:537,name:'Orion'},{id:538,name:'Kamari'},{id:539,name:'Gunnar'},{id:540,name:'Jessie'},{id:541,name:'Alonzo'},{id:542,name:'Gianni'},{id:543,name:'Omari'},{id:544,name:'Waylon'},{id:545,name:'Malcolm'},{id:546,name:'Emmett'},{id:547,name:'Abram'},{id:548,name:'Julien'},{id:549,name:'London'},{id:550,name:'Tomas'},{id:551,name:'Allan'},{id:552,name:'Terrell'},{id:553,name:'Matteo'},{id:554,name:'Tristin'},{id:555,name:'Jairo'},{id:556,name:'Reginald'},{id:557,name:'Brent'},{id:558,name:'Ahmad'},{id:559,name:'Yandel'},{id:560,name:'Rene'},{id:561,name:'Willie'},{id:562,name:'Boston'},{id:563,name:'Billy'},{id:564,name:'Marlon'},{id:565,name:'Trevon'},{id:566,name:'Aydan'},{id:567,name:'Jamal'},{id:568,name:'Aldo'},{id:569,name:'Ariel'},{id:570,name:'Cason'},{id:571,name:'Braylen'},{id:572,name:'Javion'},{id:573,name:'Joey'},{id:574,name:'Rogelio'},{id:575,name:'Ahmed'},{id:576,name:'Dominik'},{id:577,name:'Brendon'},{id:578,name:'Toby'},{id:579,name:'Kody'},{id:580,name:'Marquis'},{id:581,name:'Ulises'},{id:582,name:'Armani'},{id:583,name:'Adriel'},{id:584,name:'Alfonso'},{id:585,name:'Branden'},{id:586,name:'Will'},{id:587,name:'Craig'},{id:588,name:'Ibrahim'},{id:589,name:'Osvaldo'},{id:590,name:'Wade'},{id:591,name:'Harley'},{id:592,name:'Steve'},{id:593,name:'Davin'},{id:594,name:'Deshawn'},{id:595,name:'Kason'},{id:596,name:'Damion'},{id:597,name:'Jaylon'},{id:598,name:'Jefferson'},{id:599,name:'Aron'},{id:600,name:'Brooks'},{id:601,name:'Darian'},{id:602,name:'Gerald'},{id:603,name:'Rolando'},{id:604,name:'Terrence'},{id:605,name:'Enzo'},{id:606,name:'Kian'},{id:607,name:'Ryland'},{id:608,name:'Barrett'},{id:609,name:'Jaeden'},{id:610,name:'Ben'},{id:611,name:'Bradyn'},{id:612,name:'Giovani'},{id:613,name:'Blaine'},{id:614,name:'Madden'},{id:615,name:'Jerome'},{id:616,name:'Muhammad'},{id:617,name:'Ronnie'},{id:618,name:'Layne'},{id:619,name:'Kolby'},{id:620,name:'Leonard'},{id:621,name:'Vicente'},{id:622,name:'Cale'},{id:623,name:'Alessandro'},{id:624,name:'Zachery'},{id:625,name:'Gavyn'},{id:626,name:'Aydin'},{id:627,name:'Xzavier'},{id:628,name:'Malakai'},{id:629,name:'Raphael'},{id:630,name:'Cannon'},{id:631,name:'Rudy'},{id:632,name:'Asa'},{id:633,name:'Darrell'},{id:634,name:'Giancarlo'},{id:635,name:'Elisha'},{id:636,name:'Junior'},{id:637,name:'Zackery'},{id:638,name:'Alvaro'},{id:639,name:'Lewis'},{id:640,name:'Valentin'},{id:641,name:'Deacon'},{id:642,name:'Jase'},{id:643,name:'Harry'},{id:644,name:'Kendall'},{id:645,name:'Rashad'},{id:646,name:'Finnegan'},{id:647,name:'Mohammed'},{id:648,name:'Ramiro'},{id:649,name:'Cedric'},{id:650,name:'Brennen'},{id:651,name:'Santino'},{id:652,name:'Stanley'},{id:653,name:'Tyrone'},{id:654,name:'Chace'},{id:655,name:'Francis'},{id:656,name:'Johnathon'},{id:657,name:'Teagan'},{id:658,name:'Zechariah'},{id:659,name:'Alonso'},{id:660,name:'Kaeden'},{id:661,name:'Kamden'},{id:662,name:'Gilberto'},{id:663,name:'Ray'},{id:664,name:'Karter'},{id:665,name:'Luciano'},{id:666,name:'Nico'},{id:667,name:'Kole'},{id:668,name:'Aryan'},{id:669,name:'Draven'},{id:670,name:'Jamie'},{id:671,name:'Misael'},{id:672,name:'Lee'},{id:673,name:'Alexzander'},{id:674,name:'Camren'},{id:675,name:'Giovanny'},{id:676,name:'Amare'},{id:677,name:'Rhett'},{id:678,name:'Rhys'},{id:679,name:'Rodolfo'},{id:680,name:'Nash'},{id:681,name:'Markus'},{id:682,name:'Deven'},{id:683,name:'Mohammad'},{id:684,name:'Moshe'},{id:685,name:'Quintin'},{id:686,name:'Dwayne'},{id:687,name:'Memphis'},{id:688,name:'Atticus'},{id:689,name:'Davian'},{id:690,name:'Eugene'},{id:691,name:'Jax'},{id:692,name:'Antoine'},{id:693,name:'Wayne'},{id:694,name:'Randall'},{id:695,name:'Semaj'},{id:696,name:'Uriah'},{id:697,name:'Clark'},{id:698,name:'Aidyn'},{id:699,name:'Jorden'},{id:700,name:'Maxim'},{id:701,name:'Aditya'},{id:702,name:'Lawson'},{id:703,name:'Messiah'},{id:704,name:'Korbin'},{id:705,name:'Sullivan'},{id:706,name:'Freddy'},{id:707,name:'Demarcus'},{id:708,name:'Neil'},{id:709,name:'Brice'},{id:710,name:'King'},{id:711,name:'Davon'},{id:712,name:'Elvis'},{id:713,name:'Ace'},{id:714,name:'Dexter'},{id:715,name:'Heath'},{id:716,name:'Duncan'},{id:717,name:'Jamar'},{id:718,name:'Sincere'},{id:719,name:'Irvin'},{id:720,name:'Remington'},{id:721,name:'Kadin'},{id:722,name:'Soren'},{id:723,name:'Tyree'},{id:724,name:'Damarion'},{id:725,name:'Talan'},{id:726,name:'Adrien'},{id:727,name:'Gilbert'},{id:728,name:'Keenan'},{id:729,name:'Darnell'},{id:730,name:'Adolfo'},{id:731,name:'Tristian'},{id:732,name:'Derick'},{id:733,name:'Isai'},{id:734,name:'Rylee'},{id:735,name:'Gauge'},{id:736,name:'Harold'},{id:737,name:'Kareem'},{id:738,name:'Deangelo'},{id:739,name:'Agustin'},{id:740,name:'Coleman'},{id:741,name:'Zavier'},{id:742,name:'Lamar'},{id:743,name:'Emery'},{id:744,name:'Jaydin'},{id:745,name:'Devan'},{id:746,name:'Jordyn'},{id:747,name:'Mathias'},{id:748,name:'Prince'},{id:749,name:'Sage'},{id:750,name:'Seamus'},{id:751,name:'Jasiah'},{id:752,name:'Efrain'},{id:753,name:'Darryl'},{id:754,name:'Arjun'},{id:755,name:'Mike'},{id:756,name:'Roland'},{id:757,name:'Conrad'},{id:758,name:'Kamron'},{id:759,name:'Hamza'},{id:760,name:'Santos'},{id:761,name:'Frankie'},{id:762,name:'Dominique'},{id:763,name:'Marley'},{id:764,name:'Vance'},{id:765,name:'Dax'},{id:766,name:'Jamir'},{id:767,name:'Kylan'},{id:768,name:'Todd'},{id:769,name:'Maximo'},{id:770,name:'Jabari'},{id:771,name:'Matthias'},{id:772,name:'Haiden'},{id:773,name:'Luka'},{id:774,name:'Marcelo'},{id:775,name:'Keon'},{id:776,name:'Layton'},{id:777,name:'Tyrell'},{id:778,name:'Kash'},{id:779,name:'Raiden'},{id:780,name:'Cullen'},{id:781,name:'Donte'},{id:782,name:'Jovani'},{id:783,name:'Cordell'},{id:784,name:'Kasen'},{id:785,name:'Rory'},{id:786,name:'Alfred'},{id:787,name:'Darwin'},{id:788,name:'Ernest'},{id:789,name:'Bailey'},{id:790,name:'Gaige'},{id:791,name:'Hassan'},{id:792,name:'Jamarcus'},{id:793,name:'Killian'},{id:794,name:'Augustus'},{id:795,name:'Trevin'},{id:796,name:'Zain'},{id:797,name:'Ellis'},{id:798,name:'Rex'},{id:799,name:'Yusuf'},{id:800,name:'Bruno'},{id:801,name:'Jaidyn'},{id:802,name:'Justus'},{id:803,name:'Ronin'},{id:804,name:'Humberto'},{id:805,name:'Jaquan'},{id:806,name:'Josh'},{id:807,name:'Kasey'},{id:808,name:'Winston'},{id:809,name:'Dashawn'},{id:810,name:'Lucian'},{id:811,name:'Matias'},{id:812,name:'Sidney'},{id:813,name:'Ignacio'},{id:814,name:'Nigel'},{id:815,name:'Van'},{id:816,name:'Elian'},{id:817,name:'Finley'},{id:818,name:'Jaron'},{id:819,name:'Addison'},{id:820,name:'Aedan'},{id:821,name:'Braedon'},{id:822,name:'Jadyn'},{id:823,name:'Konner'},{id:824,name:'Zayne'},{id:825,name:'Franco'},{id:826,name:'Niko'},{id:827,name:'Savion'},{id:828,name:'Cristofer'},{id:829,name:'Deon'},{id:830,name:'Krish'},{id:831,name:'Anton'},{id:832,name:'Brogan'},{id:833,name:'Cael'},{id:834,name:'Coby'},{id:835,name:'Kymani'},{id:836,name:'Marcel'},{id:837,name:'Yair'},{id:838,name:'Dale'},{id:839,name:'Bo'},{id:840,name:'Jordon'},{id:841,name:'Samir'},{id:842,name:'Darien'},{id:843,name:'Zaire'},{id:844,name:'Ross'},{id:845,name:'Vaughn'},{id:846,name:'Devyn'},{id:847,name:'Kenyon'},{id:848,name:'Clay'},{id:849,name:'Dario'},{id:850,name:'Ishaan'},{id:851,name:'Jair'},{id:852,name:'Kael'},{id:853,name:'Adonis'},{id:854,name:'Jovanny'},{id:855,name:'Clinton'},{id:856,name:'Rey'},{id:857,name:'Chaim'},{id:858,name:'German'},{id:859,name:'Harper'},{id:860,name:'Nathen'},{id:861,name:'Rigoberto'},{id:862,name:'Sonny'},{id:863,name:'Glenn'},{id:864,name:'Octavio'},{id:865,name:'Blaze'},{id:866,name:'Keshawn'},{id:867,name:'Ralph'},{id:868,name:'Ean'},{id:869,name:'Nikhil'},{id:870,name:'Rayan'},{id:871,name:'Sterling'},{id:872,name:'Branson'},{id:873,name:'Jadiel'},{id:874,name:'Dillan'},{id:875,name:'Jeramiah'},{id:876,name:'Koen'},{id:877,name:'Konnor'},{id:878,name:'Antwan'},{id:879,name:'Houston'},{id:880,name:'Tyrese'},{id:881,name:'Dereon'},{id:882,name:'Leonidas'},{id:883,name:'Zack'},{id:884,name:'Fisher'},{id:885,name:'Jaydan'},{id:886,name:'Quinten'},{id:887,name:'Nick'},{id:888,name:'Urijah'},{id:889,name:'Darion'},{id:890,name:'Jovan'},{id:891,name:'Salvatore'},{id:892,name:'Beckham'},{id:893,name:'Jarrett'},{id:894,name:'Antony'},{id:895,name:'Eden'},{id:896,name:'Makai'},{id:897,name:'Zaiden'},{id:898,name:'Broderick'},{id:899,name:'Camryn'},{id:900,name:'Malaki'},{id:901,name:'Nikolai'},{id:902,name:'Howard'},{id:903,name:'Immanuel'},{id:904,name:'Demarion'},{id:905,name:'Valentino'},{id:906,name:'Jovanni'},{id:907,name:'Ayaan'},{id:908,name:'Ethen'},{id:909,name:'Leandro'},{id:910,name:'Royce'},{id:911,name:'Yael'},{id:912,name:'Yosef'},{id:913,name:'Jean'},{id:914,name:'Marquise'},{id:915,name:'Alden'},{id:916,name:'Leroy'},{id:917,name:'Gaven'},{id:918,name:'Jovany'},{id:919,name:'Tyshawn'},{id:920,name:'Aarav'},{id:921,name:'Kadyn'},{id:922,name:'Milton'},{id:923,name:'Zaid'},{id:924,name:'Kelton'},{id:925,name:'Tripp'},{id:926,name:'Kamren'},{id:927,name:'Slade'},{id:928,name:'Hezekiah'},{id:929,name:'Jakobe'},{id:930,name:'Nathanial'},{id:931,name:'Rishi'},{id:932,name:'Shamar'},{id:933,name:'Geovanni'},{id:934,name:'Pranav'},{id:935,name:'Roderick'},{id:936,name:'Bentley'},{id:937,name:'Clarence'},{id:938,name:'Lyric'},{id:939,name:'Bernard'},{id:940,name:'Carmelo'},{id:941,name:'Denzel'},{id:942,name:'Maximillian'},{id:943,name:'Reynaldo'},{id:944,name:'Cassius'},{id:945,name:'Gordon'},{id:946,name:'Reuben'},{id:947,name:'Samson'},{id:948,name:'Yadiel'},{id:949,name:'Jayvon'},{id:950,name:'Reilly'},{id:951,name:'Sheldon'},{id:952,name:'Abdullah'},{id:953,name:'Jagger'},{id:954,name:'Thaddeus'},{id:955,name:'Case'},{id:956,name:'Kyson'},{id:957,name:'Lamont'},{id:958,name:'Chaz'},{id:959,name:'Makhi'},{id:960,name:'Jan'},{id:961,name:'Marques'},{id:962,name:'Oswaldo'},{id:963,name:'Donavan'},{id:964,name:'Keyon'},{id:965,name:'Kyan'},{id:966,name:'Simeon'},{id:967,name:'Trystan'},{id:968,name:'Andreas'},{id:969,name:'Dangelo'},{id:970,name:'Landin'},{id:971,name:'Reagan'},{id:972,name:'Turner'},{id:973,name:'Arnav'},{id:974,name:'Brenton'},{id:975,name:'Callum'},{id:976,name:'Jayvion'},{id:977,name:'Bridger'},{id:978,name:'Sammy'},{id:979,name:'Deegan'},{id:980,name:'Jaylan'},{id:981,name:'Lennon'},{id:982,name:'Odin'},{id:983,name:'Abdiel'},{id:984,name:'Jerimiah'},{id:985,name:'Eliezer'},{id:986,name:'Bronson'},{id:987,name:'Cornelius'},{id:988,name:'Pierre'},{id:989,name:'Cortez'},{id:990,name:'Baron'},{id:991,name:'Carlo'},{id:992,name:'Carsen'},{id:993,name:'Fletcher'},{id:994,name:'Izayah'},{id:995,name:'Kolten'},{id:996,name:'Damari'},{id:997,name:'Hugh'},{id:998,name:'Jensen'},{id:999,name:'Yurem'}];window.addEventListener('load',(async()=>{await async function(){Un&&(Ln.users=Un)}()}));
