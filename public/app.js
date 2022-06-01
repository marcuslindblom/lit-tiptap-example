/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&'adoptedStyleSheets'in Document.prototype&&'replace'in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class n{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=(t,...i)=>{const o=1===t.length?t[0]:i.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if('number'==typeof t)return t;throw Error('Value passed to \'css\' function must be a \'css\' function result: '+t+'. Use \'unsafeCSS\' to pass non-literal values, but take care to ensure page security.')})(i)+t[n+1]),t[0]);return new n(o,e)},s=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i='';for(const e of t.cssRules)i+=e.cssText;return(t=>new n('string'==typeof t?t:t+'',e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var r;const a=window.trustedTypes,l=a?a.emptyScript:'',c=window.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},d=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Eh(i,e);void 0!==n&&(this._$Eu.set(n,i),t.push(n))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i='symbol'==typeof t?Symbol():'__'+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty('finalized'))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty('properties')){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:'string'==typeof i?i:'string'==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement('style'),n=window.litNonce;void 0!==n&&i.setAttribute('nonce',n),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=u){var n,o;const s=this.constructor._$Eh(t,i);if(void 0!==s&&!0===i.reflect){const r=(null!==(o=null===(n=i.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==o?o:h.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Ei=null}}_$AK(t,e){var i,n,o;const s=this.constructor,r=s._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=s.getPropertyOptions(r),a=t.converter,l=null!==(o=null!==(n=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==n?n:'function'==typeof a?a:null)&&void 0!==o?o:h.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:'open'},null==c||c({ReactiveElement:p}),(null!==(r=globalThis.reactiveElementVersions)&&void 0!==r?r:globalThis.reactiveElementVersions=[]).push('1.3.2');const f=globalThis.trustedTypes,m=f?f.createPolicy('lit-html',{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+'').slice(9)}$`,g='?'+y,_=`<${g}>`,b=document,$=(t='')=>b.createComment(t),w=t=>null===t||'object'!=typeof t&&'function'!=typeof t,k=Array.isArray,A=t=>{var e;return k(t)||'function'==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,E=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,S=/'/g,H=/"/g,P=/^(?:script|style|textarea|title)$/i,O=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),M=Symbol.for('lit-noChange'),U=Symbol.for('lit-nothing'),T=new WeakMap,R=b.createTreeWalker(b,129,null,!1),z=(t,e)=>{const i=t.length-1,n=[];let o,s=2===e?'<svg>':'',r=x;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===x?'!--'===l[1]?r=j:void 0!==l[1]?r=E:void 0!==l[2]?(P.test(l[2])&&(o=RegExp('</'+l[2],'g')),r=C):void 0!==l[3]&&(r=C):r===C?'>'===l[0]?(r=null!=o?o:x,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?C:'"'===l[3]?H:S):r===H||r===S?r=C:r===j||r===E?r=x:(r=C,o=void 0);const d=r===C&&t[e+1].startsWith('/>')?' ':'';s+=r===x?i+_:c>=0?(n.push(a),i.slice(0,c)+'$lit$'+i.slice(c)+y+d):i+y+(-2===c?(n.push(void 0),e):d)}const a=s+(t[i]||'<?>')+(2===e?'</svg>':'');if(!Array.isArray(t)||!t.hasOwnProperty('raw'))throw Error('invalid template strings array');return[void 0!==m?m.createHTML(a):a,n]};class L{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,s=0;const r=t.length-1,a=this.parts,[l,c]=z(t,e);if(this.el=L.createElement(l,i),R.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=R.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith('$lit$')||e.startsWith(y)){const i=c[s++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+'$lit$').split(y),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:'.'===e[1]?K:'?'===e[1]?W:'@'===e[1]?J:I})}else a.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(P.test(n.tagName)){const t=n.textContent.split(y),e=t.length-1;if(e>0){n.textContent=f?f.emptyScript:'';for(let i=0;i<e;i++)n.append(t[i],$()),R.nextNode(),a.push({type:2,index:++o});n.append(t[e],$())}}}else if(8===n.nodeType)if(n.data===g)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(y,t+1));)a.push({type:7,index:o}),t+=y.length-1}o++}}static createElement(t,e){const i=b.createElement('template');return i.innerHTML=t,i}}function N(t,e,i=t,n){var o,s,r,a;if(e===M)return e;let l=void 0!==n?null===(o=i._$Cl)||void 0===o?void 0:o[n]:i._$Cu;const c=w(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[n]=l:i._$Cu=l),void 0!==l&&(e=N(t,l._$AS(t,e.values),l,n)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:b).importNode(i,!0);R.currentNode=o;let s=R.nextNode(),r=0,a=0,l=n[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new D(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new q(s,this,t)),this.v.push(e),l=n[++a]}r!==(null==l?void 0:l.index)&&(s=R.nextNode(),r++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{constructor(t,e,i,n){var o;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cg=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),w(t)?t===U||null==t||''===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==M&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):A(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==U&&w(this._$AH)?this._$AA.nextSibling.data=t:this.k(b.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,o='number'==typeof n?this._$AC(t):(void 0===n.el&&(n.el=L.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new B(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=T.get(t.strings);return void 0===e&&T.set(t.strings,e=new L(t)),e}S(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new D(this.M($()),this.M($()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class I{constructor(t,e,i,n,o){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||''!==i[0]||''!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let s=!1;if(void 0===o)t=N(this,t,e,0),s=!w(t)||t!==this._$AH&&t!==M,s&&(this._$AH=t);else{const n=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=N(this,n[i+r],e,r),a===M&&(a=this._$AH[r]),s||(s=!w(a)||a!==this._$AH[r]),a===U?t=U:t!==U&&(t+=(null!=a?a:'')+o[r+1]),this._$AH[r]=a}s&&!n&&this.C(t)}C(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:'')}}class K extends I{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===U?void 0:t}}const V=f?f.emptyScript:'';class W extends I{constructor(){super(...arguments),this.type=4}C(t){t&&t!==U?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class J extends I{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=N(this,t,e,0))&&void 0!==i?i:U)===M)return;const n=this._$AH,o=t===U&&n!==U||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==U&&(n===U||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;'function'==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const F={L:'$lit$',P:y,V:g,I:1,N:z,R:B,j:A,D:N,H:D,F:I,O:W,W:J,B:K,Z:q},Q=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,G;null==Q||Q(L,D),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push('2.2.5');class X extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var n,o;const s=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let r=s._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;s._$litPart$=r=new D(e.insertBefore($(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return M}}X.finalized=!0,X._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:X});const Y=globalThis.litElementPolyfillSupport;null==Y||Y({LitElement:X}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push('3.2.0');
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt=t=>e=>'function'==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,et=(t,e)=>'method'===e.kind&&e.descriptor&&!('value'in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:'field',key:Symbol(),placement:'own',descriptor:{},originalKey:e.key,initializer(){'function'==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function it(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):et(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function nt(t){return it({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ot;null===(ot=window.HTMLSlotElement)||void 0===ot||ot.prototype.assignedElements;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st=1,rt=2,at=3,lt=4,ct=t=>(...e)=>({_$litDirective$:t,values:e});class ht{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:dt}=F,ut=t=>void 0===t.strings,pt=()=>document.createComment(''),vt=(t,e,i)=>{var n;const o=t._$AA.parentNode,s=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=o.insertBefore(pt(),s),n=o.insertBefore(pt(),s);i=new dt(e,n,t,t.options)}else{const e=i._$AB.nextSibling,r=i._$AM,a=r!==t;if(a){let e;null===(n=i._$AQ)||void 0===n||n.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==r._$AU&&i._$AP(e)}if(e!==s||a){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;o.insertBefore(t,s),t=e}}}return i},ft=(t,e,i=t)=>(t._$AI(e,i),t),mt={},yt=(t,e=mt)=>t._$AH=e,gt=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let i=t._$AA;const n=t._$AB.nextSibling;for(;i!==n;){const t=i.nextSibling;i.remove(),i=t}},_t=(t,e,i)=>{const n=new Map;for(let o=e;o<=i;o++)n.set(t[o],o);return n},bt=ct(class extends ht{constructor(t){if(super(t),t.type!==rt)throw Error('repeat() can only be used in text expressions')}dt(t,e,i){let n;void 0===i?i=e:void 0!==e&&(n=e);const o=[],s=[];let r=0;for(const e of t)o[r]=n?n(e,r):r,s[r]=i(e,r),r++;return{values:s,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,n]){var o;const s=(t=>t._$AH)(t),{values:r,keys:a}=this.dt(e,i,n);if(!Array.isArray(s))return this.ut=a,r;const l=null!==(o=this.ut)&&void 0!==o?o:this.ut=[],c=[];let h,d,u=0,p=s.length-1,v=0,f=r.length-1;for(;u<=p&&v<=f;)if(null===s[u])u++;else if(null===s[p])p--;else if(l[u]===a[v])c[v]=ft(s[u],r[v]),u++,v++;else if(l[p]===a[f])c[f]=ft(s[p],r[f]),p--,f--;else if(l[u]===a[f])c[f]=ft(s[u],r[f]),vt(t,c[f+1],s[u]),u++,f--;else if(l[p]===a[v])c[v]=ft(s[p],r[v]),vt(t,s[u],s[p]),p--,v++;else if(void 0===h&&(h=_t(a,v,f),d=_t(l,u,p)),h.has(l[u]))if(h.has(l[p])){const e=d.get(a[v]),i=void 0!==e?s[e]:null;if(null===i){const e=vt(t,s[u]);ft(e,r[v]),c[v]=e}else c[v]=ft(i,r[v]),vt(t,s[u],i),s[e]=null;v++}else gt(s[p]),p--;else gt(s[u]),u++;for(;v<=f;){const e=vt(t,c[f+1]);ft(e,r[v]),c[v++]=e}for(;u<=p;){const t=s[u++];null!==t&&gt(t)}return this.ut=a,yt(t,c),M}}),$t=ct(class extends ht{constructor(t){if(super(t),t.type!==at&&t.type!==st&&t.type!==lt)throw Error('The `live` directive is not allowed on child or event bindings');if(!ut(t))throw Error('`live` bindings can only contain a single expression')}render(t){return t}update(t,[e]){if(e===M||e===U)return e;const i=t.element,n=t.name;if(t.type===at){if(e===i[n])return M}else if(t.type===lt){if(!!e===i.hasAttribute(n))return M}else if(t.type===st&&i.getAttribute(n)===e+'')return M;return yt(t),e}}),wt=(t,e)=>{var i,n;const o=t._$AN;if(void 0===o)return!1;for(const t of o)null===(n=(i=t)._$AO)||void 0===n||n.call(i,e,!1),wt(t,e);return!0},kt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},At=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Et(e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xt(t){void 0!==this._$AN?(kt(this),this._$AM=t,At(this)):this._$AM=t}function jt(t,e=!1,i=0){const n=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(n))for(let t=i;t<n.length;t++)wt(n[t],!1),kt(n[t]);else null!=n&&(wt(n,!1),kt(n));else wt(this,t)}const Et=t=>{var e,i,n,o;t.type==rt&&(null!==(e=(n=t)._$AP)&&void 0!==e||(n._$AP=jt),null!==(i=(o=t)._$AQ)&&void 0!==i||(o._$AQ=xt))};class Ct extends ht{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),At(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,n;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),e&&(wt(this,t),kt(this))}setValue(t){if(ut(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St=()=>new Ht;class Ht{}const Pt=new WeakMap,Ot=ct(class extends Ct{render(t){return U}update(t,[e]){var i;const n=e!==this.U;return n&&void 0!==this.U&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.U=e,this.ht=null===(i=t.options)||void 0===i?void 0:i.host,this.ot(this.lt=t.element)),U}ot(t){var e;if('function'==typeof this.U){const i=null!==(e=this.ht)&&void 0!==e?e:globalThis;let n=Pt.get(i);void 0===n&&(n=new WeakMap,Pt.set(i,n)),void 0!==n.get(this.U)&&this.U.call(this.ht,void 0),n.set(this.U,t),void 0!==t&&this.U.call(this.ht,t)}else this.U.value=t}get rt(){var t,e,i;return'function'==typeof this.U?null===(e=Pt.get(null!==(t=this.ht)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.U):null===(i=this.U)||void 0===i?void 0:i.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),Mt=ct(class extends ht{constructor(t){var e;if(super(t),t.type!==st||'class'!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error('`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.')}render(t){return' '+Object.keys(t).filter((e=>t[e])).join(' ')+' '}update(t,[e]){var i,n;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(' ').split(/\s/).filter((t=>''!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.et.add(t);return this.render(e)}const o=t.element.classList;this.et.forEach((t=>{t in e||(o.remove(t),this.et.delete(t))}));for(const t in e){const i=!!e[t];i===this.et.has(t)||(null===(n=this.st)||void 0===n?void 0:n.has(t))||(i?(o.add(t),this.et.add(t)):(o.remove(t),this.et.delete(t)))}return M}});
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
var Ut='undefined'!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf('firefox')>0;function Tt(t,e,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent&&t.attachEvent('on'.concat(e),(function(){i(window.event)}))}function Rt(t,e){for(var i=e.slice(0,e.length-1),n=0;n<i.length;n++)i[n]=t[i[n].toLowerCase()];return i}function zt(t){'string'!=typeof t&&(t='');for(var e=(t=t.replace(/\s/g,'')).split(','),i=e.lastIndexOf('');i>=0;)e[i-1]+=',',e.splice(i,1),i=e.lastIndexOf('');return e}for(var Lt={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,'⇪':20,',':188,'.':190,'/':191,'`':192,'-':Ut?173:189,'=':Ut?61:187,';':Ut?59:186,'\'':222,'[':219,']':221,'\\':220},Nt={'⇧':16,shift:16,'⌥':18,alt:18,option:18,'⌃':17,ctrl:17,control:17,'⌘':91,cmd:91,command:91},Bt={16:'shiftKey',18:'altKey',17:'ctrlKey',91:'metaKey',shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},Dt={16:!1,18:!1,17:!1,91:!1},It={},Kt=1;Kt<20;Kt++)Lt['f'.concat(Kt)]=111+Kt;var Vt=[],Wt='all',Jt=[],qt=function(t){return Lt[t.toLowerCase()]||Nt[t.toLowerCase()]||t.toUpperCase().charCodeAt(0)};function Ft(t){Wt=t||'all'}function Qt(){return Wt||'all'}var Zt=function(t){var e=t.key,i=t.scope,n=t.method,o=t.splitKey,s=void 0===o?'+':o;zt(e).forEach((function(t){var e=t.split(s),o=e.length,r=e[o-1],a='*'===r?'*':qt(r);if(It[a]){i||(i=Qt());var l=o>1?Rt(Nt,e):[];It[a]=It[a].map((function(t){return(!n||t.method===n)&&t.scope===i&&function(t,e){for(var i=t.length>=e.length?t:e,n=t.length>=e.length?e:t,o=!0,s=0;s<i.length;s++)-1===n.indexOf(i[s])&&(o=!1);return o}(t.mods,l)?{}:t}))}}))};function Gt(t,e,i){var n;if(e.scope===i||'all'===e.scope){for(var o in n=e.mods.length>0,Dt)Object.prototype.hasOwnProperty.call(Dt,o)&&(!Dt[o]&&e.mods.indexOf(+o)>-1||Dt[o]&&-1===e.mods.indexOf(+o))&&(n=!1);(0!==e.mods.length||Dt[16]||Dt[18]||Dt[17]||Dt[91])&&!n&&'*'!==e.shortcut||!1===e.method(t,e)&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}function Xt(t){var e=It['*'],i=t.keyCode||t.which||t.charCode;if(Yt.filter.call(this,t)){if(93!==i&&224!==i||(i=91),-1===Vt.indexOf(i)&&229!==i&&Vt.push(i),['ctrlKey','altKey','shiftKey','metaKey'].forEach((function(e){var i=Bt[e];t[e]&&-1===Vt.indexOf(i)?Vt.push(i):!t[e]&&Vt.indexOf(i)>-1?Vt.splice(Vt.indexOf(i),1):'metaKey'===e&&t[e]&&3===Vt.length&&(t.ctrlKey||t.shiftKey||t.altKey||(Vt=Vt.slice(Vt.indexOf(i))))})),i in Dt){for(var n in Dt[i]=!0,Nt)Nt[n]===i&&(Yt[n]=!0);if(!e)return}for(var o in Dt)Object.prototype.hasOwnProperty.call(Dt,o)&&(Dt[o]=t[Bt[o]]);t.getModifierState&&(!t.altKey||t.ctrlKey)&&t.getModifierState('AltGraph')&&(-1===Vt.indexOf(17)&&Vt.push(17),-1===Vt.indexOf(18)&&Vt.push(18),Dt[17]=!0,Dt[18]=!0);var s=Qt();if(e)for(var r=0;r<e.length;r++)e[r].scope===s&&('keydown'===t.type&&e[r].keydown||'keyup'===t.type&&e[r].keyup)&&Gt(t,e[r],s);if(i in It)for(var a=0;a<It[i].length;a++)if(('keydown'===t.type&&It[i][a].keydown||'keyup'===t.type&&It[i][a].keyup)&&It[i][a].key){for(var l=It[i][a],c=l.splitKey,h=l.key.split(c),d=[],u=0;u<h.length;u++)d.push(qt(h[u]));d.sort().join('')===Vt.sort().join('')&&Gt(t,l,s)}}}function Yt(t,e,i){Vt=[];var n=zt(t),o=[],s='all',r=document,a=0,l=!1,c=!0,h='+';for(void 0===i&&'function'==typeof e&&(i=e),'[object Object]'===Object.prototype.toString.call(e)&&(e.scope&&(s=e.scope),e.element&&(r=e.element),e.keyup&&(l=e.keyup),void 0!==e.keydown&&(c=e.keydown),'string'==typeof e.splitKey&&(h=e.splitKey)),'string'==typeof e&&(s=e);a<n.length;a++)o=[],(t=n[a].split(h)).length>1&&(o=Rt(Nt,t)),(t='*'===(t=t[t.length-1])?'*':qt(t))in It||(It[t]=[]),It[t].push({keyup:l,keydown:c,scope:s,mods:o,shortcut:n[a],method:i,key:n[a],splitKey:h});void 0!==r&&!function(t){return Jt.indexOf(t)>-1}(r)&&window&&(Jt.push(r),Tt(r,'keydown',(function(t){Xt(t)})),Tt(window,'focus',(function(){Vt=[]})),Tt(r,'keyup',(function(t){Xt(t),function(t){var e=t.keyCode||t.which||t.charCode,i=Vt.indexOf(e);if(i>=0&&Vt.splice(i,1),t.key&&'meta'===t.key.toLowerCase()&&Vt.splice(0,Vt.length),93!==e&&224!==e||(e=91),e in Dt)for(var n in Dt[e]=!1,Nt)Nt[n]===e&&(Yt[n]=!1)}(t)})))}var te={setScope:Ft,getScope:Qt,deleteScope:function(t,e){var i,n;for(var o in t||(t=Qt()),It)if(Object.prototype.hasOwnProperty.call(It,o))for(i=It[o],n=0;n<i.length;)i[n].scope===t?i.splice(n,1):n++;Qt()===t&&Ft(e||'all')},getPressedKeyCodes:function(){return Vt.slice(0)},isPressed:function(t){return'string'==typeof t&&(t=qt(t)),-1!==Vt.indexOf(t)},filter:function(t){var e=t.target||t.srcElement,i=e.tagName,n=!0;return!e.isContentEditable&&('INPUT'!==i&&'TEXTAREA'!==i&&'SELECT'!==i||e.readOnly)||(n=!1),n},unbind:function(t){if(t){if(Array.isArray(t))t.forEach((function(t){t.key&&Zt(t)}));else if('object'==typeof t)t.key&&Zt(t);else if('string'==typeof t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var o=i[0],s=i[1];'function'==typeof o&&(s=o,o=''),Zt({key:t,scope:o,method:s,splitKey:'+'})}}else Object.keys(It).forEach((function(t){return delete It[t]}))}};for(var ee in te)Object.prototype.hasOwnProperty.call(te,ee)&&(Yt[ee]=te[ee]);if('undefined'!=typeof window){var ie=window.hotkeys;Yt.noConflict=function(t){return t&&window.hotkeys===Yt&&(window.hotkeys=ie),Yt},window.hotkeys=Yt}var ne=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let oe=class extends X{constructor(){super(...arguments),this.placeholder='',this.hideBreadcrumbs=!1,this.breadcrumbHome='Home',this.breadcrumbs=[],this._inputRef=St()}render(){let t='';if(!this.hideBreadcrumbs){const e=[];for(const t of this.breadcrumbs)e.push(O`<button
            tabindex="-1"
            @click=${()=>this.selectParent(t)}
            class="breadcrumb"
          >
            ${t}
          </button>`);t=O`<div class="breadcrumb-list">
        <button
          tabindex="-1"
          @click=${()=>this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>
        ${e}
      </div>`}return O`
      ${t}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input="${this._handleInput}"
          ${Ot(this._inputRef)}
          placeholder="${this.placeholder}"
          class="search"
        />
      </div>
    `}setSearch(t){this._inputRef.value&&(this._inputRef.value.value=t)}focusSearch(){requestAnimationFrame((()=>this._inputRef.value.focus()))}_handleInput(t){const e=t.target;this.dispatchEvent(new CustomEvent('change',{detail:{search:e.value},bubbles:!1,composed:!1}))}selectParent(t){this.dispatchEvent(new CustomEvent('setParent',{detail:{parent:t},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent('close',{bubbles:!0,composed:!0}))}};oe.styles=o`
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
  `,ne([it()],oe.prototype,'placeholder',void 0),ne([it({type:Boolean})],oe.prototype,'hideBreadcrumbs',void 0),ne([it()],oe.prototype,'breadcrumbHome',void 0),ne([it({type:Array})],oe.prototype,'breadcrumbs',void 0),oe=ne([tt('ninja-header')],oe);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class se extends ht{constructor(t){if(super(t),this.it=U,t.type!==rt)throw Error(this.constructor.directiveName+'() can only be used in child bindings')}render(t){if(t===U||null==t)return this.ft=void 0,this.it=t;if(t===M)return t;if('string'!=typeof t)throw Error(this.constructor.directiveName+'() called with a non-string value');if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}se.directiveName='unsafeHTML',se.resultType=1;const re=ct(se);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ae=o`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let le=class extends X{render(){return O`<span><slot></slot></span>`}};le.styles=[ae],le=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([tt('mwc-icon')],le);var ce=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let he=class extends X{constructor(){super(),this.selected=!1,this.hotKeysJoinedView=!1,this.addEventListener('click',this.click)}ensureInView(){requestAnimationFrame((()=>this.scrollIntoView({block:'nearest'})))}click(){this.dispatchEvent(new CustomEvent('actionsSelected',{detail:this.action,bubbles:!0,composed:!0}))}updated(t){t.has('selected')&&this.selected&&this.ensureInView()}render(){let t,e;this.action.mdIcon?t=O`<mwc-icon part="ninja-icon" class="ninja-icon">${this.action.mdIcon}</mwc-icon>`:this.action.icon&&(t=re(this.action.icon||'')),this.action.hotkey&&(e=this.hotKeysJoinedView?O`<div class="ninja-hotkey">${this.action.hotkey}</div>`:this.action.hotkey.split('+').map((t=>O`<div class="ninja-hotkey">${t}</div>`)));const i={selected:this.selected,'ninja-action':!0};return O`
      <div class="ninja-action" part="ninja-action ${this.selected?'ninja-selected':''}" class=${Mt(i)}>
        ${t}
        <div class="ninja-title">${this.action.title}</div>
        ${e}
      </div>
    `}};he.styles=o`
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
  `,ce([it({type:Object})],he.prototype,'action',void 0),ce([it({type:Boolean})],he.prototype,'selected',void 0),ce([it({type:Boolean})],he.prototype,'hotKeysJoinedView',void 0),he=ce([tt('ninja-action')],he);const de=O` <div class="modal-footer" slot="footer">
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
</div>`,ue=o`
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
`;var pe=function(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if('object'==typeof Reflect&&'function'==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let ve=class extends X{constructor(){super(...arguments),this.placeholder='Type a command or search...',this.disableHotkeys=!1,this.hideBreadcrumbs=!1,this.openHotkey='cmd+k,ctrl+k',this.navigationUpHotkey='up,shift+tab',this.navigationDownHotkey='down,tab',this.closeHotkey='esc',this.goBackHotkey='backspace',this.selectHotkey='enter',this.hotKeysJoinedView=!1,this.noAutoLoadMdIcons=!1,this.data=[],this.visible=!1,this._bump=!0,this._actionMatches=[],this._search='',this._flatData=[],this._headerRef=St()}open(t={}){this._bump=!0,this.visible=!0,this._headerRef.value.focusSearch(),this._actionMatches.length>0&&(this._selected=this._actionMatches[0]),this.setParent(t.parent)}close(){this._bump=!1,this.visible=!1}setParent(t){this._currentRoot=t||void 0,this._selected=void 0,this._search='',this._headerRef.value.setSearch('')}get breadcrumbs(){var t;const e=[];let i=null===(t=this._selected)||void 0===t?void 0:t.parent;if(i)for(e.push(i);i;){const t=this._flatData.find((t=>t.id===i));(null==t?void 0:t.parent)&&e.push(t.parent),i=t?t.parent:void 0}return e.reverse()}connectedCallback(){super.connectedCallback(),this.noAutoLoadMdIcons||document.fonts.load('24px Material Icons','apps').then((()=>{})),this._registerInternalHotkeys()}disconnectedCallback(){super.disconnectedCallback(),this._unregisterInternalHotkeys()}_flattern(t,e){let i=[];return t||(t=[]),t.map((t=>{const n=t.children&&t.children.some((t=>'string'==typeof t)),o={...t,parent:t.parent||e};return n||(o.children&&o.children.length&&(e=t.id,i=[...i,...o.children]),o.children=o.children?o.children.map((t=>t.id)):[]),o})).concat(i.length?this._flattern(i,e):i)}update(t){t.has('data')&&!this.disableHotkeys&&(this._flatData=this._flattern(this.data),this._flatData.filter((t=>!!t.hotkey)).forEach((t=>{Yt(t.hotkey,(e=>{e.preventDefault(),t.handler&&t.handler(t)}))}))),super.update(t)}_registerInternalHotkeys(){this.openHotkey&&Yt(this.openHotkey,(t=>{t.preventDefault(),this.visible?this.close():this.open()})),this.selectHotkey&&Yt(this.selectHotkey,(t=>{this.visible&&(t.preventDefault(),this._actionSelected(this._actionMatches[this._selectedIndex]))})),this.goBackHotkey&&Yt(this.goBackHotkey,(t=>{this.visible&&(this._search||(t.preventDefault(),this._goBack()))})),this.navigationDownHotkey&&Yt(this.navigationDownHotkey,(t=>{this.visible&&(t.preventDefault(),this._selectedIndex>=this._actionMatches.length-1?this._selected=this._actionMatches[0]:this._selected=this._actionMatches[this._selectedIndex+1])})),this.navigationUpHotkey&&Yt(this.navigationUpHotkey,(t=>{this.visible&&(t.preventDefault(),0===this._selectedIndex?this._selected=this._actionMatches[this._actionMatches.length-1]:this._selected=this._actionMatches[this._selectedIndex-1])})),this.closeHotkey&&Yt(this.closeHotkey,(()=>{this.visible&&this.close()}))}_unregisterInternalHotkeys(){this.openHotkey&&Yt.unbind(this.openHotkey),this.selectHotkey&&Yt.unbind(this.selectHotkey),this.goBackHotkey&&Yt.unbind(this.goBackHotkey),this.navigationDownHotkey&&Yt.unbind(this.navigationDownHotkey),this.navigationUpHotkey&&Yt.unbind(this.navigationUpHotkey),this.closeHotkey&&Yt.unbind(this.closeHotkey)}_actionFocused(t,e){this._selected=t,e.target.ensureInView()}_onTransitionEnd(){this._bump=!1}_goBack(){const t=this.breadcrumbs.length>1?this.breadcrumbs[this.breadcrumbs.length-2]:void 0;this.setParent(t)}render(){const t={bump:this._bump,'modal-content':!0},e={visible:this.visible,modal:!0},i=this._flatData.filter((t=>{var e;const i=new RegExp(this._search,'gi'),n=t.title.match(i)||(null===(e=t.keywords)||void 0===e?void 0:e.match(i));return(!this._currentRoot&&this._search||t.parent===this._currentRoot)&&n})).reduce(((t,e)=>t.set(e.section,[...t.get(e.section)||[],e])),new Map);this._actionMatches=[...i.values()].flat(),this._actionMatches.length>0&&-1===this._selectedIndex&&(this._selected=this._actionMatches[0]),0===this._actionMatches.length&&(this._selected=void 0);const n=t=>O` ${bt(t,(t=>t.id),(t=>{var e;return O`<ninja-action
            exportparts="ninja-action,ninja-selected,ninja-icon"
            .selected=${$t(t.id===(null===(e=this._selected)||void 0===e?void 0:e.id))}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            @mouseover=${e=>this._actionFocused(t,e)}
            @actionsSelected=${t=>this._actionSelected(t.detail)}
            .action=${t}
          ></ninja-action>`}))}`,o=[];return i.forEach(((t,e)=>{const i=e?O`<div class="group-header">${e}</div>`:void 0;o.push(O`${i}${n(t)}`)})),O`
      <div @click=${this._overlayClick} class=${Mt(e)}>
        <div class=${Mt(t)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            exportparts="ninja-input,ninja-input-wrapper"
            ${Ot(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.breadcrumbs}
            @change=${this._handleInput}
            @setParent=${t=>this.setParent(t.detail.parent)}
            @close=${this.close}
          >
          </ninja-header>
          <div class="modal-body">
            <div class="actions-list" part="actions-list">${o}</div>
          </div>
          <slot name="footer"> ${de} </slot>
        </div>
      </div>
    `}get _selectedIndex(){return this._selected?this._actionMatches.indexOf(this._selected):-1}_actionSelected(t){var e;if(this.dispatchEvent(new CustomEvent('selected',{detail:{search:this._search,action:t},bubbles:!0,composed:!0})),t){if(t.children&&(null===(e=t.children)||void 0===e?void 0:e.length)>0&&(this._currentRoot=t.id,this._search=''),this._headerRef.value.setSearch(''),this._headerRef.value.focusSearch(),t.handler){const e=t.handler(t);(null==e?void 0:e.keepOpen)||this.close()}this._bump=!0}}async _handleInput(t){this._search=t.detail.search,await this.updateComplete,this.dispatchEvent(new CustomEvent('change',{detail:{search:this._search,actions:this._actionMatches},bubbles:!0,composed:!0}))}_overlayClick(t){var e;(null===(e=t.target)||void 0===e?void 0:e.classList.contains('modal'))&&this.close()}};ve.styles=[ue],pe([it({type:String})],ve.prototype,'placeholder',void 0),pe([it({type:Boolean})],ve.prototype,'disableHotkeys',void 0),pe([it({type:Boolean})],ve.prototype,'hideBreadcrumbs',void 0),pe([it()],ve.prototype,'openHotkey',void 0),pe([it()],ve.prototype,'navigationUpHotkey',void 0),pe([it()],ve.prototype,'navigationDownHotkey',void 0),pe([it()],ve.prototype,'closeHotkey',void 0),pe([it()],ve.prototype,'goBackHotkey',void 0),pe([it()],ve.prototype,'selectHotkey',void 0),pe([it({type:Boolean})],ve.prototype,'hotKeysJoinedView',void 0),pe([it({type:Boolean})],ve.prototype,'noAutoLoadMdIcons',void 0),pe([it({type:Array,hasChanged:()=>!0})],ve.prototype,'data',void 0),pe([nt()],ve.prototype,'visible',void 0),pe([nt()],ve.prototype,'_bump',void 0),pe([nt()],ve.prototype,'_actionMatches',void 0),pe([nt()],ve.prototype,'_search',void 0),pe([nt()],ve.prototype,'_currentRoot',void 0),pe([nt()],ve.prototype,'_flatData',void 0),pe([nt()],ve.prototype,'breadcrumbs',null),pe([nt()],ve.prototype,'_selected',void 0),ve=pe([tt('ninja-keys')],ve);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const fe=new WeakMap,me=t=>{if((t=>void 0!==t.pattern)(t))return t.pattern;let e=fe.get(t);return void 0===e&&fe.set(t,e=new URLPattern({pathname:t.path})),e};const ye=t=>{let e;for(const i of Object.keys(t))/\d+/.test(i)&&(void 0===e||i>e)&&(e=i);return e&&t[e]};class ge extends Event{constructor(t){super(ge.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}}ge.eventName='lit-routes-connected';
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _e=location.origin||location.protocol+'//'+location.host;class be extends class{constructor(t,e,i){this.routes=[],this.t=[],this.i={},this.o=t=>{if(t.routes===this)return;const e=t.routes;this.t.push(e),e.h=this,t.stopImmediatePropagation(),t.onDisconnect=()=>{var t;null===(t=this.t)||void 0===t||t.splice(this.t.indexOf(e)>>>0,1)};const i=ye(this.i);void 0!==i&&e.goto(i)},(this.l=t).addController(this),this.routes=[...e],this.fallback=null==i?void 0:i.fallback}link(t){var e,i;if(null==t?void 0:t.startsWith('/'))return t;if(null==t?void 0:t.startsWith('.'))throw Error('Not implemented');return null!=t||(t=this.u),(null!==(i=null===(e=this.h)||void 0===e?void 0:e.link())&&void 0!==i?i:'')+t}async goto(t){var e;let i;if(0===this.routes.length&&void 0===this.fallback)i=t,this.u='',this.i={0:i};else{const n=this.v(t);if(void 0===n)throw Error('No route found for '+t);const o=me(n).exec({pathname:t}),s=null!==(e=null==o?void 0:o.pathname.groups)&&void 0!==e?e:{};if(i=ye(s),'function'==typeof n.enter&&!1===await n.enter(s))return;this.p=n,this.i=s,this.u=void 0===i?t:t.substring(0,t.length-i.length)}if(void 0!==i)for(const t of this.t)t.goto(i);this.l.requestUpdate()}outlet(){var t,e;return null===(e=null===(t=this.p)||void 0===t?void 0:t.render)||void 0===e?void 0:e.call(t,this.i)}get params(){return this.i}v(t){const e=this.routes.find((e=>me(e).test({pathname:t})));return e||void 0===this.fallback?e:this.fallback?{...this.fallback,path:'/*'}:void 0}hostConnected(){this.l.addEventListener(ge.eventName,this.o);const t=new ge(this);this.l.dispatchEvent(t),this.m=t.onDisconnect}hostDisconnected(){var t;null===(t=this.m)||void 0===t||t.call(this),this.h=void 0}}{constructor(){super(...arguments),this.t=t=>{const e=0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey;if(t.defaultPrevented||e)return;const i=t.composedPath().find((t=>'A'===t.tagName));if(void 0===i||''!==i.target||i.hasAttribute('download')||'external'===i.getAttribute('rel'))return;const n=i.href;if(''===n||n.startsWith('mailto:'))return;const o=window.location;i.origin===_e&&(t.preventDefault(),n!==o.href&&(window.history.pushState({},'',n),this.goto(i.pathname)))},this.o=t=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener('click',this.t),window.addEventListener('popstate',this.o),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener('click',this.t),window.removeEventListener('popstate',this.o)}}customElements.define('home-index',class extends X{static get properties(){return{}}constructor(){super()}render(){return O`<h1>Hello</h1>
      <a href="/">Home</a>
      <a href="/edit">Edit</a>
      <a href="/foo">Foo</a>
      <!-- <button type="button" @click=${this.handleClick}>Add editor</button> -->
      <!-- ${this.showEditor?O` <div>
            <div class="element"></div>
          </div>`:''}  --> `}handleClick(){}updated(){}});customElements.define('foo-index',class extends X{render(){return O`<h1>Hello</h1>
      <a href="/">Home</a> <a href="/edit">Edit</a> <a href="/foo">Foo</a>`}});customElements.define('edit-index',class extends X{render(){return O`<h1>Edit</h1>
      <a href="/">Home</a> <a href="/edit">Edit</a> <a href="/foo">Foo</a>
      <!-- <div>
        <div class="element"></div>
      </div> -->
      <ninja-keys></ninja-keys>`}firstUpdated(){this.el=this.renderRoot.querySelector('.element'),this.editor=new Editor({element:this.el,injectCSS:!1,extensions:[StarterKit],content:'<p>Hello World!</p>'});const t=this.renderRoot.querySelector('ninja-keys');t.data=[{id:'Projects',title:'Open Projects',hotkey:'ctrl+N',icon:'apps',section:'Projects',handler:()=>{alert('Your logic to handle')}},{id:'Theme',title:'Change theme...',icon:'desktop_windows',children:['Light Theme','Dark Theme','System Theme'],hotkey:'ctrl+T',handler:()=>(t.open({parent:'Theme'}),{keepOpen:!0})},{id:'Light Theme',title:'Change theme to Light',icon:'light_mode',parent:'Theme',handler:()=>{document.documentElement.classList.remove('dark')}},{id:'Dark Theme',title:'Change theme to Dark',icon:'dark_mode',parent:'Theme',handler:()=>{document.documentElement.classList.add('dark')}}]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}});customElements.define('my-app',class extends X{router=new be(this,[{path:'/',render:()=>O`<home-index></home-index>`},{path:'/edit',render:()=>O`<edit-index></edit-index>`},{path:'/foo',render:()=>O`<foo-index></foo-index>`}]);render(){return O`${this.router.outlet()}`}});
