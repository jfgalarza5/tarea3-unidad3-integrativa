(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,D=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,U=Symbol(),H=new WeakMap;let Q=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==U)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(D&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=H.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&H.set(t,e))}return e}toString(){return this.cssText}};const ne=o=>new Q(typeof o=="string"?o:o+"",void 0,U),m=(o,...e)=>{const t=o.length===1?o[0]:e.reduce(((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1]),o[0]);return new Q(t,o,U)},ae=(o,e)=>{if(D)o.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const t of e){const i=document.createElement("style"),s=L.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,o.appendChild(i)}},q=D?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ne(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:le,defineProperty:ce,getOwnPropertyDescriptor:de,getOwnPropertyNames:pe,getOwnPropertySymbols:he,getPrototypeOf:ue}=Object,z=globalThis,V=z.trustedTypes,ge=V?V.emptyScript:"",me=z.reactiveElementPolyfillSupport,E=(o,e)=>o,N={toAttribute(o,e){switch(e){case Boolean:o=o?ge:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},ee=(o,e)=>!le(o,e),G={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:ee};Symbol.metadata??=Symbol("metadata"),z.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=G){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&ce(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:r}=de(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:s,set(n){const c=s?.call(this);r?.call(this,n),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??G}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const e=ue(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const t=this.properties,i=[...pe(t),...he(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(q(s))}else e!==void 0&&t.push(q(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ae(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const r=(i.converter?.toAttribute!==void 0?i.converter:N).toAttribute(t,i.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const r=i.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:N;this._$Em=s;const c=n.fromAttribute(t,r.type);this[s]=c??this._$Ej?.get(s)??c,this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){const s=this.constructor,r=this[e];if(i??=s.getPropertyOptions(e),!((i.hasChanged??ee)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),r!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,r]of i){const{wrapped:n}=r,c=this[s];n!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,r,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[E("elementProperties")]=new Map,w[E("finalized")]=new Map,me?.({ReactiveElement:w}),(z.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,O=B.trustedTypes,Z=O?O.createPolicy("lit-html",{createHTML:o=>o}):void 0,te="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,ie="?"+v,fe=`<${ie}>`,$=document,S=()=>$.createComment(""),k=o=>o===null||typeof o!="object"&&typeof o!="function",j=Array.isArray,xe=o=>j(o)||typeof o?.[Symbol.iterator]=="function",I=`[ 	
\f\r]`,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,W=/-->/g,Y=/>/g,b=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),K=/'/g,J=/"/g,se=/^(?:script|style|textarea|title)$/i,ve=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),d=ve(1),_=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),X=new WeakMap,y=$.createTreeWalker($,129);function oe(o,e){if(!j(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Z!==void 0?Z.createHTML(e):e}const be=(o,e)=>{const t=o.length-1,i=[];let s,r=e===2?"<svg>":e===3?"<math>":"",n=A;for(let c=0;c<t;c++){const a=o[c];let p,h,l=-1,f=0;for(;f<a.length&&(n.lastIndex=f,h=n.exec(a),h!==null);)f=n.lastIndex,n===A?h[1]==="!--"?n=W:h[1]!==void 0?n=Y:h[2]!==void 0?(se.test(h[2])&&(s=RegExp("</"+h[2],"g")),n=b):h[3]!==void 0&&(n=b):n===b?h[0]===">"?(n=s??A,l=-1):h[1]===void 0?l=-2:(l=n.lastIndex-h[2].length,p=h[1],n=h[3]===void 0?b:h[3]==='"'?J:K):n===J||n===K?n=b:n===W||n===Y?n=A:(n=b,s=void 0);const x=n===b&&o[c+1].startsWith("/>")?" ":"";r+=n===A?a+fe:l>=0?(i.push(p),a.slice(0,l)+te+a.slice(l)+v+x):a+v+(l===-2?c:x)}return[oe(o,r+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class F{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,n=0;const c=e.length-1,a=this.parts,[p,h]=be(e,t);if(this.el=F.createElement(p,i),y.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=y.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(te)){const f=h[n++],x=s.getAttribute(l).split(v),P=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:P[2],strings:x,ctor:P[1]==="."?$e:P[1]==="?"?we:P[1]==="@"?_e:M}),s.removeAttribute(l)}else l.startsWith(v)&&(a.push({type:6,index:r}),s.removeAttribute(l));if(se.test(s.tagName)){const l=s.textContent.split(v),f=l.length-1;if(f>0){s.textContent=O?O.emptyScript:"";for(let x=0;x<f;x++)s.append(l[x],S()),y.nextNode(),a.push({type:2,index:++r});s.append(l[f],S())}}}else if(s.nodeType===8)if(s.data===ie)a.push({type:2,index:r});else{let l=-1;for(;(l=s.data.indexOf(v,l+1))!==-1;)a.push({type:7,index:r}),l+=v.length-1}r++}}static createElement(e,t){const i=$.createElement("template");return i.innerHTML=e,i}}function C(o,e,t=o,i){if(e===_)return e;let s=i!==void 0?t._$Co?.[i]:t._$Cl;const r=k(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,t,i)),i!==void 0?(t._$Co??=[])[i]=s:t._$Cl=s),s!==void 0&&(e=C(o,s._$AS(o,e.values),s,i)),e}class ye{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??$).importNode(t,!0);y.currentNode=s;let r=y.nextNode(),n=0,c=0,a=i[0];for(;a!==void 0;){if(n===a.index){let p;a.type===2?p=new R(r,r.nextSibling,this,e):a.type===1?p=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(p=new Ce(r,this,e)),this._$AV.push(p),a=i[++c]}n!==a?.index&&(r=y.nextNode(),n++)}return y.currentNode=$,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),k(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==_&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):xe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&k(this._$AH)?this._$AA.nextSibling.data=e:this.T($.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=F.createElement(oe(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const r=new ye(s,this),n=r.u(this.options);r.p(t),this.T(n),this._$AH=r}}_$AC(e){let t=X.get(e.strings);return t===void 0&&X.set(e.strings,t=new F(e)),t}k(e){j(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new R(this.O(S()),this.O(S()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class M{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(e,t=this,i,s){const r=this.strings;let n=!1;if(r===void 0)e=C(this,e,t,0),n=!k(e)||e!==this._$AH&&e!==_,n&&(this._$AH=e);else{const c=e;let a,p;for(e=r[0],a=0;a<r.length-1;a++)p=C(this,c[i+a],t,a),p===_&&(p=this._$AH[a]),n||=!k(p)||p!==this._$AH[a],p===u?e=u:e!==u&&(e+=(p??"")+r[a+1]),this._$AH[a]=p}n&&!s&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class $e extends M{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class we extends M{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class _e extends M{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=C(this,e,t,0)??u)===_)return;const i=this._$AH,s=e===u&&i!==u||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==u&&(i===u||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ce{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const Ae=B.litHtmlPolyfillSupport;Ae?.(F,R),(B.litHtmlVersions??=[]).push("3.3.1");const Ee=(o,e,t)=>{const i=t?.renderBefore??e;let s=i._$litPart$;if(s===void 0){const r=t?.renderBefore??null;i._$litPart$=s=new R(e.insertBefore(S(),r),r,void 0,t??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis;class g extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ee(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _}}g._$litElement$=!0,g.finalized=!0,T.litElementHydrateSupport?.({LitElement:g});const Se=T.litElementPolyfillSupport;Se?.({LitElement:g});(T.litElementVersions??=[]).push("4.2.1");class ke extends g{static styles=m`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #990000;
      color: #FFFFCC;
      padding: 30px;
    }
  `;render(){return d`
      <footer>
        © Universidad de las Fuerzas Armadas ESPE 2021. Todos los derechos reservados. Grupo B
      </footer>
    `}}customElements.define("espe-footer",ke);class re{constructor(e,t,i){this.name=e,this.email=t,this.password=i}getName(){return this.name}getEmail(){return this.email}getPassword(){return this.password}setName(e){this.name=e}setEmail(e){this.email=e}setPassword(e){this.password=e}}class Fe extends g{static styles=m`

    :host{
      width: 100%;
    }

    button {
      cursor: pointer;
      background-color: #004D00;
      color: #FFFFCC;
      border: none;
      padding: 15px 40px;
      border-radius: 20px;
      width: 100%;
    }
  `;static properties={};constructor(){super()}render(){return d`
      <button>
        <slot></slot>
      </button>
    `}}customElements.define("log-button",Fe);class Re extends g{static properties={type:{type:String},_type:{type:String},placeholder:{type:String},id:{type:String},name:{type:String},isRequired:{type:Boolean}};constructor(){super(),this.placeholder="",this.type="",this.id="",this.name="",this.isRequired=!1}static styles=m`
    
    .form-input{
      border: 1px solid #B3B3B3;
      border-radius: 10px;
      width: 100%;
    }
    
    .form-input input {
      box-sizing: border-box;
      border: 0;
      border-radius: 10px;
      width: 100%;
      font-size: 16px;
      padding: 10px;
    }

    .form-input input:focus {
      outline: none;
      box-shadow: none;
      border: none;
    }
    
    .error{
      border: 1px solid #E63329;
    }
    
    .error::placeholder{
      color: #E63329;
      opacity: 1;
    }
    
    .success{
      border: 1px solid #006935;
    }

    .success::placeholder{
      color: #006935;
      opacity: 1;
    }
  `;render(){return console.log(this.isRequired),d`
      <div class="form-input ${this.type}">
        <input type="${this._type?this._type:"text"}" class="${this.type}" id="${this.id}" name="${this.name}" placeholder="${this.placeholder}">
      </div>
    `}}customElements.define("form-input",Re);class Pe extends g{static properties={};constructor(){super()}firstUpdated(){const e=this.shadowRoot.querySelector("dialog");e&&!e.open&&e.showModal()}closeDialog(){this.dispatchEvent(new CustomEvent("close-login",{bubbles:!0,composed:!0})),setTimeout(()=>{const e=this.shadowRoot.querySelector("dialog");e.open&&e.close()},10)}_openRegister(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("open-register",{bubbles:!0,composed:!0,detail:{source:"login"}}))}handleLogin(e){e.preventDefault();const t=this.shadowRoot.getElementById("email"),i=this.shadowRoot.getElementById("password"),s=t?.shadowRoot.querySelector("input")?.value||"",r=i?.shadowRoot.querySelector("input")?.value||"";if(!s||!r){alert("Por favor completa todos los campos");return}const n=new re(null,s,r);this.dispatchEvent(new CustomEvent("login-success",{bubbles:!0,composed:!0,detail:{user:n}})),this.closeDialog()}static styles=m`
  :host {
    display: block;
  }
  dialog {
    position: relative;
    border: none;
    background-color: white;
    max-width: 400px;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  dialog[open] {
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .title h2 {
    margin: 0;
  }

  .title {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px 50px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }

  .change-form p{
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .change-form span {
    font-weight: bold;
    cursor: pointer;
  }

  .close-icon {
    position: absolute;
    display: flex;
    align-items: center;
    right: 10px;
    cursor: pointer;
  }
  `;render(){return d`
      <dialog>
        <form method="dialog">
          <div class="title">
            <h2>INICIO DE SESION</h2>  
            <div class="close-icon" @click=${this.closeDialog}>
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"></path> </g></svg>
            </div>
          </div>
          <div class="inputs">
            <form-input _type="email" id="email" name="email" placeholder="Correo" isRequired=true></form-input>
            <form-input _type="password" id="password" name="password" placeholder="Contraseña" isRequired=true"></form-input>
            <div class="change-form">
              <p>No tienes una cuenta? <span @click=${this._openRegister}>Registrate</span></p>
            </div>
          </div>
          <div class="buttons">
            <log-button @click=${this.handleLogin}>Ingresar</log-button>
            <log-button @click=${this.closeDialog}>Cancelar</log-button>
          </div>
        </form>
      </dialog>
    `}}customElements.define("espe-loggin",Pe);class Le extends g{static properties={};constructor(){super()}firstUpdated(){const e=this.shadowRoot.querySelector("dialog");e&&!e.open&&e.showModal()}_openLogin(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("open-login",{bubbles:!0,composed:!0,detail:{source:"register"}}))}closeDialog(){this.dispatchEvent(new CustomEvent("close-register",{bubbles:!0,composed:!0})),setTimeout(()=>{const e=this.shadowRoot.querySelector("dialog");e.open&&e.close()},10)}handleRegister(e){e.preventDefault();const t=this.shadowRoot.getElementById("name"),i=this.shadowRoot.getElementById("email"),s=this.shadowRoot.getElementById("password"),r=this.shadowRoot.getElementById("rep-password"),n=t?.shadowRoot.querySelector("input")?.value||"",c=i?.shadowRoot.querySelector("input")?.value||"",a=s?.shadowRoot.querySelector("input")?.value||"",p=r?.shadowRoot.querySelector("input")?.value||"";if(!n||!c||!a||!p){alert("Por favor completa todos los campos");return}if(a!==p){alert("Las contraseñas no coinciden");return}const h=new re(n,c,a);this.dispatchEvent(new CustomEvent("register-success",{bubbles:!0,composed:!0,detail:{user:h}})),this.closeDialog()}static styles=m`
  :host {
    display: block;
  }
  dialog {
    position: relative;
    border: none;
    background-color: white;
    max-width: 400px;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  dialog[open] {
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .title h2 {
    margin: 0;
  }

  .title {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px 50px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }

  .change-form p{
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .change-form span {
    font-weight: bold;
    cursor: pointer;
  }

  .close-icon {
    position: absolute;
    display: flex;
    align-items: center;
    right: 10px;
    cursor: pointer;
  }
  `;render(){return d`
      <dialog>
        <form method="dialog">
          <div class="title">
            <h2>REGISTRATE</h2>  
            <div class="close-icon" @click=${this.closeDialog}>
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"></path>
              </svg>
            </div>
          </div>
          <div class="inputs">
            <form-input _type="text" type="success" id="name" name="name" placeholder="Nombre" isRequired=true></form-input>
            <form-input _type="email" type="error" id="email" name="email" placeholder="Correo" isRequired=true></form-input>
            <form-input _type="password" id="password" name="password" placeholder="Contraseña" isRequired=true"></form-input>
            <form-input _type="password" id="rep-password" name="rep-password" placeholder="Repetir contraseña" isRequired=true"></form-input>
            <div class="change-form">
              <p>Ya tienes una cuenta? <span @click=${this._openLogin}>Inicia Sesión</span></p>
            </div>
          </div>
          <div class="buttons">
            <log-button @click=${this.handleRegister}>Registrarse</log-button>
            <log-button @click=${this.closeDialog}>Cancelar</log-button>
          </div>
        </form>
      </dialog>
    `}}customElements.define("espe-register",Le);class Oe extends g{static properties={};static styles=m`
    .nav-search{
      position: relative;
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: #004D00;
      border-radius: 10px;
      padding: 10px 10px
    }

    .nav-search input {
      background-color: #004D00;
      color: #FFFFCC;
      font-size: 16px;
      border: 0;
    }

    .nav-search input::placeholder {
      color: #FFFFCC;
      font-size: 16px;
      opacity: 1;
    }

    .nav-search input:focus {
      outline: none;
      box-shadow: none;
      border: none;
    }

    .nav-search i {
      display: flex;
      align-self: center;
      color: white;
    }
  `;render(){return d`
      <div class="nav-search">
        <input type="text" placeholder="Buscar...">
        <i>
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C11.381 15 12.6296 14.4415 13.5355 13.5355C14.4415 12.6296 15 11.381 15 10C15 7.23858 12.7614 5 10 5ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5719 16.481 13.0239 15.6063 14.1921L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L14.1921 15.6063C13.0239 16.481 11.5719 17 10 17C6.13401 17 3 13.866 3 10Z" fill="#FFFFCC"></path>
            </g>
          </svg>
        </i>
      </div>
    `}}customElements.define("nav-search",Oe);class ze extends g{static properties={user:{type:Object},showLogin:{type:Boolean},showRegister:{type:Boolean},menuOpen:{type:Boolean}};constructor(){super(),this.isLoggedIn=!1,this.showLogin=!1,this.showRegister=!1,this.user=null,this.menuOpen=!1}_toggleMenu(){this.menuOpen=!this.menuOpen}_closeLogin(){this.showLogin=!1}_closeRegister(){this.showRegister=!1}_openRegister(){this.showLogin=!1,this.showRegister=!0}_openLogin(){this.showRegister=!1,this.showLogin=!0}_openRegisterFromEvent(e){this._openRegister(),e.stopPropagation()}_openLoginFromEvent(e){this._openLogin(),e.stopPropagation()}_handleLoginSuccess(e){this.user=e.detail.user,this.isLoggedIn=!0,this.showLogin=!1}_handleRegisterSuccess(e){this.user=e.detail.user,this.isLoggedIn=!0,this.showRegister=!1}validateUser(){return this.user!==null}static styles=m`
    :host {
      background-color: #FFFFCC;
      display: block;
      width: 100%;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
    }

    .logo img {
      height: 50px;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .menu {
      display: flex;
      gap: 20px;
    }

    .menu a {
      text-decoration: none;
      color: black;
    }

    .search {
      display: flex;
      justify-content: center;
      flex: 1;
    }

    .profile-section {
      display: flex;
      align-items: center;
    }

    .hamburger {
      display: none;
      flex-direction: column;
      cursor: pointer;
      gap: 4px;
    }

    .hamburger span {
      width: 25px;
      height: 3px;
      background: black;
      border-radius: 2px;
    }

    /* 📱 Estilos para móviles */
    @media (max-width: 768px) {
      nav {
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        flex-direction: column;
        background: #FFFFCC;
        padding: 10px 0;
        display: none;
      }

      nav.open {
        display: flex;
        z-index: 100;
      }

      .menu {
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }

      .search {
        order: 3;
        width: 100%;
      }

      .profile-section {
        order: 4;
        justify-content: center;
        padding: 10px;
      }

      .hamburger {
        display: flex;
      }
    }
  `;render(){return d`
      <header>
        <div class="logo">
          <a href="/">
            <img src="https://www.espe.edu.ec/wp-content/uploads/2022/01/ESPEtransparente.png" alt="ESPE Logo">
          </a>
        </div>

        <!-- Botón hamburguesa (solo móvil) -->
        <div class="hamburger" @click=${this._toggleMenu}>
          <span></span><span></span><span></span>
        </div>

        <!-- Menú -->
        <nav class=${this.menuOpen?"open":""}>
          <div class="menu">
            <a href="/">Inicio</a>
            <a href="#">Contactanos</a>
          </div>
          <div class="search"><nav-search></nav-search></div>
          <div class="profile-section">${this.validateUser()?d`<span>${this.user.getName()}</span>`:d`<span @click=${this._openLogin}>Iniciar Sesion</span>`}</div>
        </nav>
      </header>

      ${this.showLogin?d`
        <espe-loggin
          @close-login=${this._closeLogin}
          @open-register=${this._openRegisterFromEvent}
          @login-success=${this._handleLoginSuccess}>
        </espe-loggin>
      `:null}

      ${this.showRegister?d`
        <espe-register
          @close-register=${this._closeRegister}
          @open-login=${this._openLoginFromEvent}
          @register-success=${this._handleRegisterSuccess}>
        </espe-register>
      `:null}
    `}}customElements.define("espe-navbar",ze);class Me extends g{static properties={};constructor(){super()}static styles=m`
    :host {
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      width: 50px;
      background-color: #004D00;
      color: #FFFFCC;
      overflow: hidden;
      transition: width 0.3s ease-in-out; 
      z-index: 999;
      box-shadow: -5px 0 10px rgba(0, 0, 0, 0.2);
    }

    :host(:hover) {
      width: 300px;
    }

    .aside-content {
      padding: 20px;
      padding-top: 80px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      height: 100%;
      width: 300px;
    }

    .aside-header {
      font-size: 1.5em;
      font-weight: bold;
      margin-bottom: 15px;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%) rotate(180deg);
      white-space: nowrap;
    }

    .coupon-item {
      background-color: #E0E0E0;
      color: black;
      border-radius: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .coupon-item img {
      width: 100%;
      max-width: 200px;
      height: auto;
      border-radius: 5px;
      margin-bottom: 10px;
    }

    .coupon-item p {
      font-size: 0.9em;
      margin: 0;
    }
  `;render(){return d`
      <div class="aside-header">Cupones</div>
      <div class="aside-content">
        <div class="coupon-item">
          <img src="https://via.placeholder.com/200x150/ADD8E6/000000?text=Cup%C3%B3n+10%25" alt="Cupón de descuento">
          <p>Cupón 15% de descuento por nuevo ingreso ▶</p>
        </div>
        <div class="coupon-item">
          <img src="https://via.placeholder.com/200x150/ADD8E6/000000?text=Cup%C3%B3n+20%25" alt="Cupón de descuento">
          <p>Cupón 15% de descuento por nuevo ingreso ▶</p>
        </div>
        <div class="coupon-item">
          <img src="https://via.placeholder.com/200x150/ADD8E6/000000?text=Cup%C3%B3n+30%25" alt="Cupón de descuento">
          <p>Cupón 15% de descuento por nuevo ingreso ▶</p>
        </div>
        </div>
    `}}customElements.define("espe-aside",Me);class Ie extends g{static properties={isLoggedIn:{type:Boolean}};constructor(){super(),this.isLoggedIn=!1}static styles=m`
    .container {
      font-family: 'Arial', sans-serif;
      display: flex;
      flex-direction: column;
      height: 100vh;
      gap: 10px;
    }

    .content {
      flex: 1;
      padding: 20px 40px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      align-items: start;
      justify-items: center;
    }

    /* 📱 Tablets (pantallas medianas) */
    @media (max-width: 1024px) {
      .content {
        grid-template-columns: repeat(2, 1fr);
        padding: 20px;
      }
    }

    /* 📱 Celulares (pantallas pequeñas) */
    @media (max-width: 600px) {
      .content {
        grid-template-columns: 1fr;
        padding: 15px;
      }
    }
  `;render(){return d`
      <div class="container">
        <espe-navbar></espe-navbar>
        <div class="content">
          <slot></slot>
        </div>
        <espe-footer></espe-footer>
      </div>
    `}}customElements.define("espe-layout",Ie);class Ne extends g{static properties={active:{type:Boolean}};constructor(){super(),this.active=!1}static styles=m`

    .circle{
      position: relative;
      left: 0;
      display: flex;
      align-items: center;
      border: 0;
      border-radius: 50%;
      background-color: #990000;
      padding: 5px;
      cursor: pointer;
    }

    svg {
      width: 30px;
      height: 30px;
    }

    path {
      transition: fill 0.3s ease;
    }

    :host([active]) path {
      fill: #00B140;
    }
  `;toggleActive(){this.active=!this.active}render(){return d`
      <div class="circle" @click=${this.toggleActive}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
            fill="${this.active?"#00B140":"#fff"}"
            stroke="#990000"
            stroke-width="2"
          ></path>
        </svg>
      </div>
    `}}customElements.define("fav-button",Ne);class De extends g{static properties={count:{type:Number}};constructor(){super(),this.count=1}static styles=m`
    .counter-div{
      display: flex;
      align-items: center;
      gap: 10px;
      border: 1px solid #004D00;
      padding: 6.5px;
      border-radius: 20px
    }

    .counter-div .controller{
      background-color: #004D00;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      width: 10px;
      height: 10px;
      padding: 10px;
      margin: 0;
      border-radius: 20px;
      cursor: pointer;
    }
  `;increment(){this.count+=1}decrement(){this.count>1&&(this.count-=1)}render(){return d`
      <div class="counter-div">
        <div class="controller" @click=${this.decrement}>-</div>
        <div>${this.count.toString()}</div>
        <div class="controller" @click=${this.increment}>+</div>
      </div>
    `}}customElements.define("cart-counter",De);class Ue extends g{static properties={isOpen:{type:Boolean},image:{type:String},title:{type:String},isFav:{type:Boolean},discount:{type:String},price:{type:String},colors:{type:Array},selectedColor:{type:String},sizes:{type:Array},selectedSize:{type:String},description:{type:String}};constructor(){super(),this.isOpen=!1,this.colors=[{name:"verde",hex:"#B8FF32",img:"https://static.nike.com/a/images/t_default/63c4596a-ca9a-4a56-82f3-0387903ed5f1/AIR+ZOOM+PEGASUS+41.png"},{name:"azul",hex:"#2B59C3",img:"https://static.nike.com/a/images/t_default/ec36cda3-15e1-4518-87ee-37ec0c5c5fa2/NIKE+ZOOM+PEGASUS+41+MICHIGAN.png"},{name:"rojo",hex:"#D7263D",img:"https://static.nike.com/a/images/t_default/c04338c5-eb06-4b29-a6d0-57261d4cd562/NIKE+ZOOM+PEGASUS+41+CARDINALS.png"},{name:"morado",hex:"#7F00FF",img:"https://www.thenextsole.com/storage/images/FD2722-500.png"},{name:"Naranja",hex:"#E6A66E",img:"https://www.thenextsole.com/storage/images/DH4072-800.png"}],this.selectedColor=this.colors[0].name,this.image=this.colors[0].img,this.sizes=["38","39","40","41"],this.selectedSize=this.sizes[0],this.title="Nike Air Zoom Pegasus 41",this.discount="20",this.price="80.90",this.description=`Las Nike Air Zoom Pegasus 41 están diseñadas para ofrecer una experiencia de carrera superior, combinando innovación, 
        confort y estilo. Este modelo incorpora la reconocida amortiguación Zoom Airtanto en el antepié como en el talón, lo que proporciona una respuesta
        rápida y eficiente en cada zancada. Además, cuenta con espuma ReactX,una evolución de la tecnología React que mejora el retorno de energía, reduce 
        el impacto y ofrece mayor suavidad en la pisada, incluso durante carreras  largas o entrenamientos intensos.El upper ha sido renovado para mejorar 
        la transpirabilidad y el ajuste dinámico al pie, manteniendo una sensación de frescura y ligereza incluso en climas cálidos. Su diseño ergonómico se 
        adapta al movimiento natural del pie, mientras que los refuerzos estratégicos brindan soporte y estabilidad donde más se necesita.`}changeColor(e){this.selectedColor=e.name,this.image=e.img,this.requestUpdate()}openModal(){this.isOpen=!0}closeModal(){this.isOpen=!1}handleContentClick(e){e.stopPropagation()}static styles=m`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }

    .modal-overlay.open {
      opacity: 1;
      visibility: visible;
    }

    .modal-content {
      background-color: #f0f0f0;
      border-radius: 20px;
      max-width: 800px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      transform: scale(0.7);
      transition: transform 0.3s ease;
    }

    .modal-overlay.open .modal-content {
      transform: scale(1);
    }

    .modal-header {
      position: relative;
      padding: 20px;
      border-bottom: 1px solid #ddd;
    }

    .close-button {
      position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #666;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s ease;
    }

    .close-button:hover {
      background-color: #f0f0f0;
    }

    .modal-body {
      display: flex;
      gap: 20px;
      padding: 20px;
    }

    .left-section {
      flex: 1;
      background-color: #004D00;
      border-radius: 15px;
      padding: 20px;
      color: white;
      display: flex;
      flex-direction: column;
      position: relative;
      min-height: 400px;
    }

    .product-title {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
      color: #FFFFCC;
    }

    .product-section {
      display: flex;
      width: 100%;
      height: 100%;
      position: relative;
    }

    .talla-box {
      background-color: rgba(51, 102, 51, 0.8);
      border: 2px solid rgba(255, 255, 255, 0.3);
      padding: 8px 12px;
      border-radius: 20px;
      min-width: 45px;
      position: absolute;
      bottom: 80px;
      left: 20px;
      z-index: 10;
      color: #FFFFCC;
    }

    .talla-box p {
      text-align: center;
      font-weight: bold;
      margin: 0 0 8px 0;
      font-size: 12px;
    }

    .talla-list-vertical {
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: center;
    }

    .talla-list-vertical button {
      border: none;
      background-color: transparent;
      color: #FFFFCC;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      padding: 3px 8px;
      border-radius: 4px;
      transition: all 0.2s ease;
      min-width: 30px;
      position: relative;
      border-left: 3px solid transparent;
    }

    .talla-list-vertical button:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .talla-list-vertical button.active {
      background-color: transparent;
      color: #FFFFCC;
      border-left: 3px solid #FFFFCC;
    }

    .image-content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .image-content img {
      width: 380px;
      height: 380px;
      object-fit: cover;
      transform: rotate(270deg);
      transition: transform 0.3s ease;
    }

    .fav-button-container {
      position: absolute;
      bottom: 20px;
      left: 20px;
    }

    .color-select {
      background-color: rgba(51, 102, 51, 0.8);
      border-radius: 20px;
      padding: 8px 15px;
      display: flex;
      align-items: center;
      gap: 12px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      width: fit-content;
      position: absolute;
      bottom: 20px;
      right: 20px;
    }

    .color-select p {
      margin: 0;
      font-weight: bold;
      font-size: 14px;
    }

    .color-list {
      display: flex;
      gap: 6px;
    }

    .color-list button {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 2px solid transparent;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .color-list button:hover {
      transform: scale(1.1);
    }

    .color-list button.active {
      border: 2px solid white;
      transform: scale(1.1);
    }

    .right-section {
      flex: 1;
      padding: 20px;
    }

    .product-description {
      font-size: 14px;
      line-height: 1.5;
      color: #333;
      margin-bottom: 20px;
    }

    .price-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .price {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .price .discount {
      color: #990000;
      font-size: 14px;
      font-weight: bold;
    }

    .price .price-f {
      color: #004D00;
      font-size: 24px;
      font-weight: bold;
    }

    .add-to-cart-button {
      background-color: #004D00;
      color: white;
      border: none;
      padding: 15px 30px;
      border-radius: 25px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      width: 100%;
      transition: background-color 0.2s ease;
    }

    .add-to-cart-button:hover {
      background-color: #003300;
    }

    @media (max-width: 768px) {
      .modal-body {
        flex-direction: column;
      }
      
      .product-section {
        flex-direction: column;
        align-items: center;
      }
      
      .image-content img {
        width: 200px;
        height: 200px;
      }
  `;render(){return d`
      <div class="modal-overlay ${this.isOpen?"open":""}" @click="${this.closeModal}">
        <div class="modal-content" @click="${this.handleContentClick}">
          <div class="modal-header">
            <button class="close-button" @click="${this.closeModal}" style="border: none; background: none; cursor: pointer; color: red;">×</button>
          </div>
          
          <div class="modal-body">
            <div class="left-section">
              <div class="product-title">${this.title}</div>
              
              <div class="product-section">
                <div class="talla-box">
                  <p>Talla</p>
                  <div class="talla-list-vertical">
                    ${this.sizes.map(e=>d`
                        <button
                          class="${this.selectedSize===e?"active":""}"
                          @click="${()=>this.selectedSize=e}"
                        >${e}</button>
                      `)}
                  </div>
                </div>

                <div class="image-content">
                  <img src="${this.image}" alt="Imagen del producto" />
                </div>

                <div class="color-select">
                  <p>Color</p>
                  <div class="color-list">
                    ${this.colors.map(e=>d`
                        <button
                          style="background-color: ${e.hex}"
                          class="${this.selectedColor===e.name?"active":""}"
                          @click="${()=>this.changeColor(e)}"
                        ></button>
                      `)}
                  </div>
                </div>
              </div>

              <div class="fav-button-container">
                <fav-button></fav-button>
              </div>
            </div>

            <div class="right-section">
              <div class="product-description">
                ${this.description}
              </div>
              
              <button class="add-to-cart-button">
                🛒 Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("product-modal",Ue);class Be extends g{static properties={image:{type:String},title:{type:String},isFav:{type:Boolean},discount:{type:String},price:{type:String},extended:{type:Boolean},colors:{type:Array},selectedColor:{type:String},sizes:{type:Array},selectedSize:{type:String}};constructor(){super(),this.extended=!1,this.colors=[{name:"verde",hex:"#B8FF32",img:"https://static.nike.com/a/images/t_default/63c4596a-ca9a-4a56-82f3-0387903ed5f1/AIR+ZOOM+PEGASUS+41.png"},{name:"azul",hex:"#2B59C3",img:"https://static.nike.com/a/images/t_default/ec36cda3-15e1-4518-87ee-37ec0c5c5fa2/NIKE+ZOOM+PEGASUS+41+MICHIGAN.png"},{name:"rojo",hex:"#D7263D",img:"https://static.nike.com/a/images/t_default/c04338c5-eb06-4b29-a6d0-57261d4cd562/NIKE+ZOOM+PEGASUS+41+CARDINALS.png"},{name:"morado",hex:"#7F00FF",img:"https://www.thenextsole.com/storage/images/FD2722-500.png"},{name:"Naranja",hex:"#E6A66E",img:"https://www.thenextsole.com/storage/images/DH4072-800.png"}],this.selectedColor=this.colors[0].name,this.image=this.colors[0].img,this.sizes=["38","39","40","41"],this.selectedSize=this.sizes[0]}changeColor(e){this.selectedColor=e.name,this.image=e.img}openModal(){this.shadowRoot.querySelector("product-modal").openModal()}static styles=m`
    .card {
      position: relative;
      background-color: #004D00;
      color: #FFFFCC;
      display: flex;
      flex-direction: column;
      min-width: 350px;
      max-width: 400px;
      border-radius: 20px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .title {
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      padding: 20px 40px 10px 40px;
    }

    .main-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 30px;
      gap: 20px;
    }

    /* Tallas */
    .talla-box {
      background-color: rgba(51, 102, 51, 0.8);
      border: 2px solid rgba(255, 255, 255, 0.3);
      padding: 8px 12px;
      border-radius: 20px;
      min-width: 45px;
    }

    .talla-box p {
      text-align: center;
      font-weight: bold;
      margin: 0 0 8px 0;
      font-size: 12px;
    }

    .talla-list-vertical {
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: center;
    }

    .talla-list-vertical button {
      border: none;
      background-color: transparent;
      color: #FFFFCC;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      padding: 3px 8px;
      border-radius: 4px;
      transition: all 0.2s ease;
      min-width: 30px;
      position: relative;
      border-left: 3px solid transparent;
    }

    .talla-list-vertical button:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .talla-list-vertical button.active {
      background-color: transparent;
      color: #FFFFCC;
      border-left: 3px solid #FFFFCC;
    }

    /* Imagen */
    .image-content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-content img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }

    /* Colores */
    .color-select {
      margin: 10px 20px 15px auto;
      margin-right: 30px;
      background-color: rgba(51, 102, 51, 0.8);
      border-radius: 20px;
      padding: 8px 15px;
      display: flex;
      align-items: center;
      gap: 12px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      width: fit-content;
    }

    .color-select p {
      margin: 0;
      font-weight: bold;
      font-size: 14px;
    }

    .color-list {
      display: flex;
      gap: 6px;
    }

    .color-list button {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 2px solid transparent;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .color-list button:hover {
      transform: scale(1.1);
    }

    .color-list button.active {
      border: 2px solid white;
      transform: scale(1.1);
    }

    /* Descripción */
    .description {
      background-color: #E0E0E0;
      color: black;
      border-radius: 20px 20px 0 0;
      width: 100%;
      flex: 1;
    }

    .description .desc-content {
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .top-content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .price {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin: 0;
      gap: 5px;
    }

    .price p {
      margin: 0;
      text-align: end;
      font-weight: 600;
    }

    .price .discount {
      color: #990000;
      font-size: 14px;
    }

    .price .price-f {
      color: #004D00;
      font-size: 24px;
      font-weight: bold;
    }

    .desc-text {
      font-size: 12px;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .desc-text p {
      margin: 0;
    }

    .buttons {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  `;render(){return d`
      <div class="card" @click="${this.openModal}">
        <span class="title">${this.title||"Nike Air Zoom Pegasus 41"}</span>

        <div class="main-section">
          <!-- Tallas -->
          <div class="talla-box">
            <p>Talla</p>
            <div class="talla-list-vertical">
              ${this.sizes.map(e=>d`
                  <button
                    class="${this.selectedSize===e?"active":""}"
                    @click="${t=>{t.stopPropagation(),this.selectedSize=e}}"
                  >${e}</button>
                `)}
            </div>
          </div>

          <!-- Imagen -->
          <div class="image-content">
            <img src="${this.image||"https://static.thenounproject.com/png/1269202-200.png"}" alt="Imagen del producto" />
          </div>
        </div>

        <!-- Colores -->
        <div class="color-select">
          <p>Color</p>
          <div class="color-list">
            ${this.colors.map(e=>d`
                <button
                  style="background-color: ${e.hex}"
                  class="${this.selectedColor===e.name?"active":""}"
                  @click="${t=>{t.stopPropagation(),this.changeColor(e)}}"
                ></button>
              `)}
          </div>
        </div>

        <!-- Descripción, precio y botones -->
        <div class="description">
          <div class="desc-content">
            <div class="top-content">
              <fav-button></fav-button>
              <div class="price">
                <p class="discount">${this.discount?this.discount+"% OFF":"20% OFF"}</p>
                <p class="price-f">${this.price?"$"+this.price:"$80.90"}</p>
              </div>
            </div>
            <div class="desc-text">
              <p><slot></slot></p>
            </div>
            <div class="buttons">
              <cart-counter></cart-counter>
              <log-button>Agregar al carrito</log-button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <product-modal></product-modal>
    `}}customElements.define("product-card",Be);class je extends g{static properties={type:{type:String,reflect:!0},message:{type:String},isVisible:{type:Boolean,reflect:!0}};constructor(){super(),this.type="success",this.message="La acción se ha completado.",this.isVisible=!1}static styles=m`
    :host {
      display: block; 
      position: fixed; 
      top: 20px;
      right: 20px;
      z-index: 1000;
      width: fit-content;
      max-width: 300px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-20px);
      transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
    }

    :host([isvisible]) {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .alert-container {
      padding: 15px 20px;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .alert-container.error {
      background-color: #f44336;
      color: white;
    }

    .alert-container.success {
      background-color: #4caf50;
      color: white;
    }

    .alert-content {
      flex-grow: 1;
    }

    .alert-title {
      font-weight: bold;
      margin-bottom: 5px;
      font-size: 1.2em;
    }

    .alert-message {
      font-size: 0.9em;
    }

    .close-button {
      background: none;
      border: none;
      color: inherit;
      font-size: 1.2em;
      cursor: pointer;
      padding: 0 5px;
      line-height: 1;
    }

    .close-button:hover {
      opacity: 0.8;
    }
  `;render(){const e=this.type==="error"?"Error !!!":"Success...",t=`alert-container ${this.type}`;return d`
      <div class=${t}>
        <div class="alert-content">
          <div class="alert-title">${e}</div>
          <div class="alert-message">${this.message}</div>
        </div>
        <button @click=${this._closeAlert} class="close-button">x</button>
      </div>
    `}_closeAlert(){this.isVisible=!1,this.dispatchEvent(new CustomEvent("alert-closed"))}showAlert(e,t){this.type=e,this.message=t,this.isVisible=!0,setTimeout(()=>{this.isVisible=!1},3e3)}}customElements.define("espe-alerts",je);window.addEventListener("load",async()=>{await Notification.requestPermission(),"serviceWorker"in navigator&&await navigator.serviceWorker.register("./sw.js")&&(await navigator.serviceWorker.ready).showNotification("E-commerce Galarza, Los Mejores precios",{body:"La aplicacion se ha instalado correctamente",icon:"./assets/img/icons/icon-144x144.png",vibrate:[100,50,200]})});
