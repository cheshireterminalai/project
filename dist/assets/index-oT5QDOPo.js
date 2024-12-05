import{e as U,i as m,j as K,V as L}from"./solana-vendor-DJ9Nagnm.js";import{a as N}from"./react-vendor-MNm3ExxM.js";var F={exports:{}};(function(s){var o=Object.prototype.hasOwnProperty,r="~";function e(){}Object.create&&(e.prototype=Object.create(null),new e().__proto__||(r=!1));function t(u,i,l){this.fn=u,this.context=i,this.once=l||!1}function n(u,i,l,f,y){if(typeof l!="function")throw new TypeError("The listener must be a function");var v=new t(l,f||u,y),p=r?r+i:i;return u._events[p]?u._events[p].fn?u._events[p]=[u._events[p],v]:u._events[p].push(v):(u._events[p]=v,u._eventsCount++),u}function a(u,i){--u._eventsCount===0?u._events=new e:delete u._events[i]}function c(){this._events=new e,this._eventsCount=0}c.prototype.eventNames=function(){var i=[],l,f;if(this._eventsCount===0)return i;for(f in l=this._events)o.call(l,f)&&i.push(r?f.slice(1):f);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(l)):i},c.prototype.listeners=function(i){var l=r?r+i:i,f=this._events[l];if(!f)return[];if(f.fn)return[f.fn];for(var y=0,v=f.length,p=new Array(v);y<v;y++)p[y]=f[y].fn;return p},c.prototype.listenerCount=function(i){var l=r?r+i:i,f=this._events[l];return f?f.fn?1:f.length:0},c.prototype.emit=function(i,l,f,y,v,p){var w=r?r+i:i;if(!this._events[w])return!1;var d=this._events[w],g=arguments.length,E,h;if(d.fn){switch(d.once&&this.removeListener(i,d.fn,void 0,!0),g){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,l),!0;case 3:return d.fn.call(d.context,l,f),!0;case 4:return d.fn.call(d.context,l,f,y),!0;case 5:return d.fn.call(d.context,l,f,y,v),!0;case 6:return d.fn.call(d.context,l,f,y,v,p),!0}for(h=1,E=new Array(g-1);h<g;h++)E[h-1]=arguments[h];d.fn.apply(d.context,E)}else{var V=d.length,O;for(h=0;h<V;h++)switch(d[h].once&&this.removeListener(i,d[h].fn,void 0,!0),g){case 1:d[h].fn.call(d[h].context);break;case 2:d[h].fn.call(d[h].context,l);break;case 3:d[h].fn.call(d[h].context,l,f);break;case 4:d[h].fn.call(d[h].context,l,f,y);break;default:if(!E)for(O=1,E=new Array(g-1);O<g;O++)E[O-1]=arguments[O];d[h].fn.apply(d[h].context,E)}}return!0},c.prototype.on=function(i,l,f){return n(this,i,l,f,!1)},c.prototype.once=function(i,l,f){return n(this,i,l,f,!0)},c.prototype.removeListener=function(i,l,f,y){var v=r?r+i:i;if(!this._events[v])return this;if(!l)return a(this,v),this;var p=this._events[v];if(p.fn)p.fn===l&&(!y||p.once)&&(!f||p.context===f)&&a(this,v);else{for(var w=0,d=[],g=p.length;w<g;w++)(p[w].fn!==l||y&&!p[w].once||f&&p[w].context!==f)&&d.push(p[w]);d.length?this._events[v]=d.length===1?d[0]:d:a(this,v)}return this},c.prototype.removeAllListeners=function(i){var l;return i?(l=r?r+i:i,this._events[l]&&a(this,l)):(this._events=new e,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=r,c.EventEmitter=c,s.exports=c})(F);var G=F.exports;const H=N(G);var B=function(){var s=function(o,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},s(o,r)};return function(o,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(o,r);function e(){this.constructor=o}o.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}}(),$=function(s){B(o,s);function o(){return s!==null&&s.apply(this,arguments)||this}return o}(H),J=function(){var s=function(o,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},s(o,r)};return function(o,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(o,r);function e(){this.constructor=o}o.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}}(),W=function(){return W=Object.assign||function(s){for(var o,r=1,e=arguments.length;r<e;r++){o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(s[t]=o[t])}return s},W.apply(this,arguments)},k=function(s,o,r,e){function t(n){return n instanceof r?n:new r(function(a){a(n)})}return new(r||(r=Promise))(function(n,a){function c(l){try{i(e.next(l))}catch(f){a(f)}}function u(l){try{i(e.throw(l))}catch(f){a(f)}}function i(l){l.done?n(l.value):t(l.value).then(c,u)}i((e=e.apply(s,o||[])).next())})},R=function(s,o){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},e,t,n,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(i){return function(l){return u([i,l])}}function u(i){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(r=0)),r;)try{if(e=1,t&&(n=i[0]&2?t.return:i[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,i[1])).done)return n;switch(t=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(n=r.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){r.label=i[1];break}if(i[0]===6&&r.label<n[1]){r.label=n[1],n=i;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(i);break}n[2]&&r.ops.pop(),r.trys.pop();continue}i=o.call(s,r)}catch(l){i=[6,l],t=0}finally{e=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},q=function(s,o){var r=typeof Symbol=="function"&&s[Symbol.iterator];if(!r)return s;var e=r.call(s),t,n=[],a;try{for(;(o===void 0||o-- >0)&&!(t=e.next()).done;)n.push(t.value)}catch(c){a={error:c}}finally{try{t&&!t.done&&(r=e.return)&&r.call(e)}finally{if(a)throw a.error}}return n},Q=function(s){J(o,s);function o(r,e){var t=s.call(this)||this;if(t._handleMessage=function(n){if(t._injectedProvider&&n.source===window||n.origin===t._providerUrl.origin&&n.source===t._popup){if(n.data.method==="connected"){var a=new U(n.data.params.publicKey);(!t._publicKey||!t._publicKey.equals(a))&&(t._publicKey&&!t._publicKey.equals(a)&&t._handleDisconnect(),t._publicKey=a,t._autoApprove=!!n.data.params.autoApprove,t.emit("connect",t._publicKey))}else if(n.data.method==="disconnected")t._handleDisconnect();else if((n.data.result||n.data.error)&&t._responsePromises.has(n.data.id)){var c=q(t._responsePromises.get(n.data.id),2),u=c[0],i=c[1];n.data.result?u(n.data.result):i(new Error(n.data.error))}}},t._handleConnect=function(){return t._handlerAdded||(t._handlerAdded=!0,window.addEventListener("message",t._handleMessage),window.addEventListener("beforeunload",t.disconnect)),t._injectedProvider?new Promise(function(n){t._sendRequest("connect",{}),n()}):(window.name="parent",t._popup=window.open(t._providerUrl.toString(),"_blank","location,resizable,width=460,height=675"),new Promise(function(n){t.once("connect",n)}))},t._handleDisconnect=function(){t._handlerAdded&&(t._handlerAdded=!1,window.removeEventListener("message",t._handleMessage),window.removeEventListener("beforeunload",t.disconnect)),t._publicKey&&(t._publicKey=null,t.emit("disconnect")),t._responsePromises.forEach(function(n,a){var c=q(n,2);c[0];var u=c[1];t._responsePromises.delete(a),u("Wallet disconnected")})},t._sendRequest=function(n,a){return k(t,void 0,void 0,function(){var c,u=this;return R(this,function(i){if(n!=="connect"&&!this.connected)throw new Error("Wallet not connected");return c=this._nextRequestId,++this._nextRequestId,[2,new Promise(function(l,f){u._responsePromises.set(c,[l,f]),u._injectedProvider?u._injectedProvider.postMessage({jsonrpc:"2.0",id:c,method:n,params:W({network:u._network},a)}):(u._popup.postMessage({jsonrpc:"2.0",id:c,method:n,params:a},u._providerUrl.origin),u.autoApprove||u._popup.focus())})]})})},t.connect=function(){return t._popup&&t._popup.close(),t._handleConnect()},t.disconnect=function(){return k(t,void 0,void 0,function(){return R(this,function(n){switch(n.label){case 0:return this._injectedProvider?[4,this._sendRequest("disconnect",{})]:[3,2];case 1:n.sent(),n.label=2;case 2:return this._popup&&this._popup.close(),this._handleDisconnect(),[2]}})})},t.sign=function(n,a){return k(t,void 0,void 0,function(){var c,u,i;return R(this,function(l){switch(l.label){case 0:if(!(n instanceof Uint8Array))throw new Error("Data must be an instance of Uint8Array");return[4,this._sendRequest("sign",{data:n,display:a})];case 1:return c=l.sent(),u=m.decode(c.signature),i=new U(c.publicKey),[2,{signature:u,publicKey:i}]}})})},Y(r))t._injectedProvider=r;else if(X(r))t._providerUrl=new URL(r),t._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:e}).toString();else throw new Error("provider parameter must be an injected provider or a URL string.");return t._network=e,t._publicKey=null,t._autoApprove=!1,t._popup=null,t._handlerAdded=!1,t._nextRequestId=1,t._responsePromises=new Map,t}return Object.defineProperty(o.prototype,"publicKey",{get:function(){return this._publicKey},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"connected",{get:function(){return this._publicKey!==null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"autoApprove",{get:function(){return this._autoApprove},enumerable:!1,configurable:!0}),o}(H);function X(s){return typeof s=="string"}function Y(s){return Z(s)&&ee(s.postMessage)}function Z(s){return typeof s=="object"&&s!==null}function ee(s){return typeof s=="function"}var ne=function(){var s=function(o,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},s(o,r)};return function(o,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(o,r);function e(){this.constructor=o}o.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}}(),A=function(s,o,r,e){function t(n){return n instanceof r?n:new r(function(a){a(n)})}return new(r||(r=Promise))(function(n,a){function c(l){try{i(e.next(l))}catch(f){a(f)}}function u(l){try{i(e.throw(l))}catch(f){a(f)}}function i(l){l.done?n(l.value):t(l.value).then(c,u)}i((e=e.apply(s,o||[])).next())})},I=function(s,o){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},e,t,n,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(i){return function(l){return u([i,l])}}function u(i){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(r=0)),r;)try{if(e=1,t&&(n=i[0]&2?t.return:i[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,i[1])).done)return n;switch(t=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(n=r.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){r.label=i[1];break}if(i[0]===6&&r.label<n[1]){r.label=n[1],n=i;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(i);break}n[2]&&r.ops.pop(),r.trys.pop();continue}i=o.call(s,r)}catch(l){i=[6,l],t=0}finally{e=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},te=function(s){ne(o,s);function o(r,e,t){var n=s.call(this)||this;return n._instance=null,n.handleMessage=function(a){},n._sendRequest=function(a,c){return A(n,void 0,void 0,function(){var u,i;return I(this,function(l){switch(l.label){case 0:return!((u=this._instance)===null||u===void 0)&&u.sendRequest?[4,this._instance.sendRequest(a,c)]:[3,2];case 1:return[2,l.sent()];case 2:return!((i=this._instance)===null||i===void 0)&&i._sendRequest?[4,this._instance._sendRequest(a,c)]:[3,4];case 3:return[2,l.sent()];case 4:throw new Error("Unsupported version of `@project-serum/sol-wallet-adapter`")}})})},n._handleConnect=function(){n.emit("connect")},n._handleDisconnect=function(){window.clearInterval(n._pollTimer),n.emit("disconnect")},n._network=e,n._provider=t,n}return Object.defineProperty(o.prototype,"publicKey",{get:function(){return this._instance.publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"connected",{get:function(){return this._instance.connected||!1},enumerable:!1,configurable:!0}),o.prototype.connect=function(){return A(this,void 0,void 0,function(){var r=this;return I(this,function(e){switch(e.label){case 0:return this._instance=new Q(this._provider,this._network),this._instance.on("connect",this._handleConnect),this._instance.on("disconnect",this._handleDisconnect),this._pollTimer=window.setInterval(function(){var t,n;((n=(t=r._instance)===null||t===void 0?void 0:t._popup)===null||n===void 0?void 0:n.closed)!==!1&&r._handleDisconnect()},200),[4,this._instance.connect()];case 1:return e.sent(),[2]}})})},o.prototype.disconnect=function(){return A(this,void 0,void 0,function(){return I(this,function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return this._instance.removeAllListeners("connect"),this._instance.removeAllListeners("disconnect"),[4,this._instance.disconnect()];case 1:return r.sent(),[2]}})})},o.prototype.signTransaction=function(r){return A(this,void 0,void 0,function(){var e;return I(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signTransactionV2",{transaction:m.encode(r)})];case 1:return e=t.sent().transaction,[2,m.decode(e)]}})})},o.prototype.signAllTransactions=function(r){return A(this,void 0,void 0,function(){var e;return I(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAllTransactionsV2",{transactions:r.map(function(n){return m.encode(n)})})];case 1:return e=t.sent().transactions,[2,e.map(function(n){return m.decode(n)})]}})})},o.prototype.signAndSendTransaction=function(r,e){return A(this,void 0,void 0,function(){var t;return I(this,function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAndSendTransaction",{transaction:m.encode(r),options:e})];case 1:return t=n.sent(),[2,t.signature]}})})},o.prototype.signMessage=function(r,e){return e===void 0&&(e="hex"),A(this,void 0,void 0,function(){var t;return I(this,function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.sign(r,e)];case 1:return t=n.sent().signature,[2,Uint8Array.from(t)]}})})},o}($);let M;const re=new Uint8Array(16);function ie(){if(!M&&(M=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!M))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return M(re)}const _=[];for(let s=0;s<256;++s)_.push((s+256).toString(16).slice(1));function oe(s,o=0){return _[s[o+0]]+_[s[o+1]]+_[s[o+2]]+_[s[o+3]]+"-"+_[s[o+4]]+_[s[o+5]]+"-"+_[s[o+6]]+_[s[o+7]]+"-"+_[s[o+8]]+_[s[o+9]]+"-"+_[s[o+10]]+_[s[o+11]]+_[s[o+12]]+_[s[o+13]]+_[s[o+14]]+_[s[o+15]]}const ae=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),z={randomUUID:ae};function se(s,o,r){if(z.randomUUID&&!o&&!s)return z.randomUUID();s=s||{};const e=s.random||(s.rng||ie)();return e[6]=e[6]&15|64,e[8]=e[8]&63|128,oe(e)}var ce=function(){var s=function(o,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},s(o,r)};return function(o,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(o,r);function e(){this.constructor=o}o.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}}(),C=function(){return C=Object.assign||function(s){for(var o,r=1,e=arguments.length;r<e;r++){o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(s[t]=o[t])}return s},C.apply(this,arguments)},S=function(s,o,r,e){function t(n){return n instanceof r?n:new r(function(a){a(n)})}return new(r||(r=Promise))(function(n,a){function c(l){try{i(e.next(l))}catch(f){a(f)}}function u(l){try{i(e.throw(l))}catch(f){a(f)}}function i(l){l.done?n(l.value):t(l.value).then(c,u)}i((e=e.apply(s,o||[])).next())})},j=function(s,o){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},e,t,n,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(i){return function(l){return u([i,l])}}function u(i){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(r=0)),r;)try{if(e=1,t&&(n=i[0]&2?t.return:i[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,i[1])).done)return n;switch(t=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(n=r.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){r.label=i[1];break}if(i[0]===6&&r.label<n[1]){r.label=n[1],n=i;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(i);break}n[2]&&r.ops.pop(),r.trys.pop();continue}i=o.call(s,r)}catch(l){i=[6,l],t=0}finally{e=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},D=function(s){ce(o,s);function o(r,e){var t=this,n;return t=s.call(this)||this,t._publicKey=null,t._messageHandlers={},t.handleMessage=function(a){if(t._messageHandlers[a.id]){var c=t._messageHandlers[a.id],u=c.resolve,i=c.reject;delete t._messageHandlers[a.id],a.error?i(a.error):u(a.result)}},t._sendMessage=function(a){if(!t.connected)throw new Error("Wallet not connected");return new Promise(function(c,u){var i,l,f=se();t._messageHandlers[f]={resolve:c,reject:u},(l=(i=t._iframe)===null||i===void 0?void 0:i.contentWindow)===null||l===void 0||l.postMessage({channel:"solflareWalletAdapterToIframe",data:C({id:f},a)},"*")})},t._iframe=r,t._publicKey=new U((n=e==null?void 0:e.toString)===null||n===void 0?void 0:n.call(e)),t}return Object.defineProperty(o.prototype,"publicKey",{get:function(){return this._publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"connected",{get:function(){return!0},enumerable:!1,configurable:!0}),o.prototype.connect=function(){return S(this,void 0,void 0,function(){return j(this,function(r){return[2]})})},o.prototype.disconnect=function(){return S(this,void 0,void 0,function(){return j(this,function(r){switch(r.label){case 0:return[4,this._sendMessage({method:"disconnect"})];case 1:return r.sent(),[2]}})})},o.prototype.signTransaction=function(r){var e;return S(this,void 0,void 0,function(){var t,n;return j(this,function(a){switch(a.label){case 0:if(!this.connected)throw new Error("Wallet not connected");a.label=1;case 1:return a.trys.push([1,3,,4]),[4,this._sendMessage({method:"signTransaction",params:{transaction:m.encode(r)}})];case 2:return t=a.sent(),[2,m.decode(t)];case 3:throw n=a.sent(),new Error(((e=n==null?void 0:n.toString)===null||e===void 0?void 0:e.call(n))||"Failed to sign transaction");case 4:return[2]}})})},o.prototype.signAllTransactions=function(r){var e;return S(this,void 0,void 0,function(){var t,n;return j(this,function(a){switch(a.label){case 0:if(!this.connected)throw new Error("Wallet not connected");a.label=1;case 1:return a.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAllTransactions",params:{transactions:r.map(function(c){return m.encode(c)})}})];case 2:return t=a.sent(),[2,t.map(function(c){return m.decode(c)})];case 3:throw n=a.sent(),new Error(((e=n==null?void 0:n.toString)===null||e===void 0?void 0:e.call(n))||"Failed to sign transactions");case 4:return[2]}})})},o.prototype.signAndSendTransaction=function(r,e){var t;return S(this,void 0,void 0,function(){var n,a;return j(this,function(c){switch(c.label){case 0:if(!this.connected)throw new Error("Wallet not connected");c.label=1;case 1:return c.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAndSendTransaction",params:{transaction:m.encode(r),options:e}})];case 2:return n=c.sent(),[2,n];case 3:throw a=c.sent(),new Error(((t=a==null?void 0:a.toString)===null||t===void 0?void 0:t.call(a))||"Failed to sign and send transaction");case 4:return[2]}})})},o.prototype.signMessage=function(r,e){var t;return e===void 0&&(e="hex"),S(this,void 0,void 0,function(){var n,a;return j(this,function(c){switch(c.label){case 0:if(!this.connected)throw new Error("Wallet not connected");c.label=1;case 1:return c.trys.push([1,3,,4]),[4,this._sendMessage({method:"signMessage",params:{data:r,display:e}})];case 2:return n=c.sent(),[2,Uint8Array.from(m.decode(n))];case 3:throw a=c.sent(),new Error(((t=a==null?void 0:a.toString)===null||t===void 0?void 0:t.call(a))||"Failed to sign message");case 4:return[2]}})})},o}($);function P(s){return s.version===void 0}var le="1.4.2",ue=function(){var s=function(o,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},s(o,r)};return function(o,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(o,r);function e(){this.constructor=o}o.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}}(),T=function(){return T=Object.assign||function(s){for(var o,r=1,e=arguments.length;r<e;r++){o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(s[t]=o[t])}return s},T.apply(this,arguments)},b=function(s,o,r,e){function t(n){return n instanceof r?n:new r(function(a){a(n)})}return new(r||(r=Promise))(function(n,a){function c(l){try{i(e.next(l))}catch(f){a(f)}}function u(l){try{i(e.throw(l))}catch(f){a(f)}}function i(l){l.done?n(l.value):t(l.value).then(c,u)}i((e=e.apply(s,o||[])).next())})},x=function(s,o){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},e,t,n,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(i){return function(l){return u([i,l])}}function u(i){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(r=0)),r;)try{if(e=1,t&&(n=i[0]&2?t.return:i[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,i[1])).done)return n;switch(t=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(n=r.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){r.label=i[1];break}if(i[0]===6&&r.label<n[1]){r.label=n[1],n=i;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(i);break}n[2]&&r.ops.pop(),r.trys.pop();continue}i=o.call(s,r)}catch(l){i=[6,l],t=0}finally{e=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},fe=function(s){var o=typeof Symbol=="function"&&Symbol.iterator,r=o&&s[o],e=0;if(r)return r.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&e>=s.length&&(s=void 0),{value:s&&s[e++],done:!s}}};throw new TypeError(o?"Object is not iterable.":"Symbol.iterator is not defined.")},he=function(s){ue(o,s);function o(r){var e=s.call(this)||this;return e._network="mainnet-beta",e._provider=null,e._iframeParams={},e._adapterInstance=null,e._element=null,e._iframe=null,e._connectHandler=null,e._flutterHandlerInterval=null,e._handleEvent=function(t){var n,a,c,u;switch(t.type){case"connect_native_web":{e._collapseIframe(),e._adapterInstance=new te(e._iframe,e._network,((n=t.data)===null||n===void 0?void 0:n.provider)||e._provider||"https://solflare.com/provider"),e._adapterInstance.on("connect",e._webConnected),e._adapterInstance.on("disconnect",e._webDisconnected),e._adapterInstance.connect(),e._setPreferredAdapter("native_web");return}case"connect":{e._collapseIframe(),e._adapterInstance=new D(e._iframe,((a=t.data)===null||a===void 0?void 0:a.publicKey)||""),e._adapterInstance.connect(),e._setPreferredAdapter((c=t.data)===null||c===void 0?void 0:c.adapter),e._connectHandler&&(e._connectHandler.resolve(),e._connectHandler=null),e.emit("connect",e.publicKey);return}case"disconnect":{e._connectHandler&&(e._connectHandler.reject(),e._connectHandler=null),e._disconnected(),e.emit("disconnect");return}case"accountChanged":{!((u=t.data)===null||u===void 0)&&u.publicKey?(e._adapterInstance=new D(e._iframe,t.data.publicKey),e._adapterInstance.connect(),e.emit("accountChanged",e.publicKey)):e.emit("accountChanged",void 0);return}case"collapse":{e._collapseIframe();return}default:return}},e._handleResize=function(t){t.resizeMode==="full"?t.params.mode==="fullscreen"?e._expandIframe():t.params.mode==="hide"&&e._collapseIframe():t.resizeMode==="coordinates"&&e._iframe&&(e._iframe.style.top=isFinite(t.params.top)?"".concat(t.params.top,"px"):"",e._iframe.style.bottom=isFinite(t.params.bottom)?"".concat(t.params.bottom,"px"):"",e._iframe.style.left=isFinite(t.params.left)?"".concat(t.params.left,"px"):"",e._iframe.style.right=isFinite(t.params.right)?"".concat(t.params.right,"px"):"",e._iframe.style.width=isFinite(t.params.width)?"".concat(t.params.width,"px"):t.params.width,e._iframe.style.height=isFinite(t.params.height)?"".concat(t.params.height,"px"):t.params.height)},e._handleMessage=function(t){var n;if(((n=t.data)===null||n===void 0?void 0:n.channel)==="solflareIframeToWalletAdapter"){var a=t.data.data||{};a.type==="event"?e._handleEvent(a.event):a.type==="resize"?e._handleResize(a):a.type==="response"&&e._adapterInstance&&e._adapterInstance.handleMessage(a)}},e._removeElement=function(){e._flutterHandlerInterval!==null&&(clearInterval(e._flutterHandlerInterval),e._flutterHandlerInterval=null),e._element&&(e._element.remove(),e._element=null)},e._removeDanglingElements=function(){var t,n,a=document.getElementsByClassName("solflare-wallet-adapter-iframe");try{for(var c=fe(a),u=c.next();!u.done;u=c.next()){var i=u.value;i.parentElement&&i.remove()}}catch(l){t={error:l}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}},e._injectElement=function(){e._removeElement(),e._removeDanglingElements();var t=T(T({},e._iframeParams),{cluster:e._network||"mainnet-beta",origin:window.location.origin||"",title:document.title||"",version:1,sdkVersion:le}),n=e._getPreferredAdapter();n&&(t.adapter=n),e._provider&&(t.provider=e._provider);var a=Object.keys(t).map(function(u){return"".concat(u,"=").concat(encodeURIComponent(t[u]))}).join("&"),c="".concat(o.IFRAME_URL,"?").concat(a);e._element=document.createElement("div"),e._element.className="solflare-wallet-adapter-iframe",e._element.innerHTML=`
      <iframe src='`.concat(c,`' referrerPolicy='strict-origin-when-cross-origin' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `),document.body.appendChild(e._element),e._iframe=e._element.querySelector("iframe"),window.fromFlutter=e._handleMobileMessage,e._flutterHandlerInterval=setInterval(function(){window.fromFlutter=e._handleMobileMessage},100),window.addEventListener("message",e._handleMessage,!1)},e._collapseIframe=function(){e._iframe&&(e._iframe.style.top="",e._iframe.style.right="",e._iframe.style.height="2px",e._iframe.style.width="2px")},e._expandIframe=function(){e._iframe&&(e._iframe.style.top="0px",e._iframe.style.bottom="0px",e._iframe.style.left="0px",e._iframe.style.right="0px",e._iframe.style.width="100%",e._iframe.style.height="100%")},e._getPreferredAdapter=function(){return localStorage&&localStorage.getItem("solflarePreferredWalletAdapter")||null},e._setPreferredAdapter=function(t){localStorage&&t&&localStorage.setItem("solflarePreferredWalletAdapter",t)},e._clearPreferredAdapter=function(){localStorage&&localStorage.removeItem("solflarePreferredWalletAdapter")},e._webConnected=function(){e._connectHandler&&(e._connectHandler.resolve(),e._connectHandler=null),e.emit("connect",e.publicKey)},e._webDisconnected=function(){e._connectHandler&&(e._connectHandler.reject(),e._connectHandler=null),e._disconnected(),e.emit("disconnect")},e._disconnected=function(){window.removeEventListener("message",e._handleMessage,!1),e._removeElement(),e._clearPreferredAdapter(),e._adapterInstance=null},e._handleMobileMessage=function(t){var n,a;(a=(n=e._iframe)===null||n===void 0?void 0:n.contentWindow)===null||a===void 0||a.postMessage({channel:"solflareMobileToIframe",data:t},"*")},r!=null&&r.network&&(e._network=r==null?void 0:r.network),r!=null&&r.provider&&(e._provider=r==null?void 0:r.provider),r!=null&&r.params&&(e._iframeParams=T({},r==null?void 0:r.params)),e}return Object.defineProperty(o.prototype,"publicKey",{get:function(){var r;return((r=this._adapterInstance)===null||r===void 0?void 0:r.publicKey)||null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"isConnected",{get:function(){var r;return!!(!((r=this._adapterInstance)===null||r===void 0)&&r.connected)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"connected",{get:function(){return this.isConnected},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"autoApprove",{get:function(){return!1},enumerable:!1,configurable:!0}),o.prototype.connect=function(){return b(this,void 0,void 0,function(){var r=this;return x(this,function(e){switch(e.label){case 0:return this.connected?[2]:(this._injectElement(),[4,new Promise(function(t,n){r._connectHandler={resolve:t,reject:n}})]);case 1:return e.sent(),[2]}})})},o.prototype.disconnect=function(){return b(this,void 0,void 0,function(){return x(this,function(r){switch(r.label){case 0:return this._adapterInstance?[4,this._adapterInstance.disconnect()]:[2];case 1:return r.sent(),this._disconnected(),this.emit("disconnect"),[2]}})})},o.prototype.signTransaction=function(r){return b(this,void 0,void 0,function(){var e,t;return x(this,function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return e=P(r)?Uint8Array.from(r.serialize({verifySignatures:!1,requireAllSignatures:!1})):r.serialize(),[4,this._adapterInstance.signTransaction(e)];case 1:return t=n.sent(),[2,P(r)?K.from(t):L.deserialize(t)]}})})},o.prototype.signAllTransactions=function(r){return b(this,void 0,void 0,function(){var e,t;return x(this,function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return e=r.map(function(a){return P(a)?Uint8Array.from(a.serialize({verifySignatures:!1,requireAllSignatures:!1})):a.serialize()}),[4,this._adapterInstance.signAllTransactions(e)];case 1:if(t=n.sent(),t.length!==r.length)throw new Error("Failed to sign all transactions");return[2,t.map(function(a,c){return P(r[c])?K.from(a):L.deserialize(a)})]}})})},o.prototype.signAndSendTransaction=function(r,e){return b(this,void 0,void 0,function(){var t;return x(this,function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return t=P(r)?r.serialize({verifySignatures:!1,requireAllSignatures:!1}):r.serialize(),[4,this._adapterInstance.signAndSendTransaction(t,e)];case 1:return[2,n.sent()]}})})},o.prototype.signMessage=function(r,e){return e===void 0&&(e="utf8"),b(this,void 0,void 0,function(){return x(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signMessage(r,e)];case 1:return[2,t.sent()]}})})},o.prototype.sign=function(r,e){return e===void 0&&(e="utf8"),b(this,void 0,void 0,function(){return x(this,function(t){switch(t.label){case 0:return[4,this.signMessage(r,e)];case 1:return[2,t.sent()]}})})},o.prototype.detectWallet=function(r){var e;return r===void 0&&(r=10),b(this,void 0,void 0,function(){return x(this,function(t){return window.SolflareApp||!((e=window.solflare)===null||e===void 0)&&e.isSolflare?[2,!0]:[2,new Promise(function(n){var a,c;a=setInterval(function(){var u;(window.SolflareApp||!((u=window.solflare)===null||u===void 0)&&u.isSolflare)&&(clearInterval(a),clearTimeout(c),n(!0))},500),c=setTimeout(function(){clearInterval(a),n(!1)},r*1e3)})]})})},o.IFRAME_URL="https://connect.solflare.com/",o}(H);export{he as default};
