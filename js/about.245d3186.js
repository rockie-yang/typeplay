(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(n(t))}},1356:function(t){t.exports=JSON.parse('{"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","A":"A, A is for Apple","B":"B, B is for Bear","C":"C, C is for Cat","D":"D, D is for Dog","E":"E, E is for Elephant","F":"F, F is for Fish","G":"G, G is for Giraffe","H":"H, H is for Horse","I":"I, I is for Igloo","J":"J, J is for Jungle","K":"K, K is for Kite","L":"L, L is for Lion","M":"M, M is for Monkey","N":"N, N is for Nemo","O":"O, O is for Orange","P":"P, P is for Penguin","Q":"Q, Q is for Quite","R":"R, R is for Red","S":"S, S is for Snow","T":"T, T is for Tiger","U":"U, U is for Unicorn","V":"V, V is for Violin","W":"W, W is for Whale","X":"X, X is for Xylaphone","Y":"Y, Y is for Yellow","Z":"Z, Z is for Zebra","\\b":"Backspace","\\t":"Tab","\\r":"Enter","\\u0010":"Shift","\\u0011":"Control","\\u0012":"Alt","\\u001b":"Escape","!":"Page up","\\"":"Page down","#":"End","$":"Home","%":"Left","&":"Up","\'":"Right","(":"Down",".":"Delete","[":"Command","p":"F1","q":"F2","r":"F3","s":"F4","t":"F5","u":"F6","v":"F7","w":"F8","x":"F9","y":"F10","z":"F11","{":"F12","|":"Pn","º":"; Semicolon","»":"= Equal","¼":"< Less than","½":"- Hyphen","¾":"> Great than","¿":"/ Slash","À":"` Tick","Û":"Open brace","Ü":"\\\\ BackSlash","Ý":"Close brace","Þ":"\' Single Quote"}')},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),o=r("2d00"),a=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),i=r("825a"),o=r("d039"),a=r("ad6d"),c="toString",f=RegExp.prototype,s=f[c],u=o((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),l=s.name!=c;(u||l)&&n(RegExp.prototype,c,(function(){var t=i(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in f)?a.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,i=r("69f3"),o=r("7dd0"),a="String Iterator",c=i.set,f=i.getterFor(a);o(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,e=f(this),r=e.string,i=e.index;return i>=r.length?{value:void 0,done:!0}:(t=n(r,i),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var n=r("0366"),i=r("7b0b"),o=r("9bdd"),a=r("e95a"),c=r("50c4"),f=r("8418"),s=r("35a1");t.exports=function(t){var e,r,u,l,d,p,h=i(t),v="function"==typeof this?this:Array,b=arguments.length,g=b>1?arguments[1]:void 0,y=void 0!==g,S=s(h),m=0;if(y&&(g=n(g,b>2?arguments[2]:void 0,2)),void 0==S||v==Array&&a(S))for(e=c(h.length),r=new v(e);e>m;m++)p=y?g(h[m],m):h[m],f(r,m,p);else for(l=S.call(h),d=l.next,r=new v;!(u=d.call(l)).done;m++)p=y?o(l,g,[u.value,m],!0):u.value,f(r,m,p);return r.length=m,r}},6547:function(t,e,r){var n=r("a691"),i=r("1d80"),o=function(t){return function(e,r){var o,a,c=String(i(e)),f=n(r),s=c.length;return f<0||f>=s?t?"":void 0:(o=c.charCodeAt(f),o<55296||o>56319||f+1===s||(a=c.charCodeAt(f+1))<56320||a>57343?t?c.charAt(f):o:t?c.slice(f,f+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),a=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},6756:function(t,e,r){"use strict";r("675d")},"675d":function(t,e,r){},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?i.f(t,a,o(0,r)):t[a]=r}},"8dd3":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{height:"1080px",width:"1920px"}},t._l(t.items,(function(e,n){return r("text",{key:n,staticClass:"heavy",class:"color"+n%10,attrs:{x:"400",y:n*t.height+t.height}},[t._v(" "+t._s(e)+" ")])})),0)},i=[];r("a434");function o(t){if(Array.isArray(t))return t}r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");function a(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done);n=!0)if(r.push(a.value),e&&r.length===e)break}catch(f){i=!0,o=f}finally{try{n||null==c["return"]||c["return"]()}finally{if(i)throw o}}return r}}r("a630"),r("fb6a"),r("b0c0"),r("25f0");function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function f(t,e){if(t){if("string"===typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){return o(t)||a(t,e)||f(t,e)||s()}var l=r("2b0e"),d=l["a"].extend({name:"Home",data:function(){return{items:["A, A is for Apple"],height:40,t1:r("1356")}},mounted:function(){var t=this;window.addEventListener("keyup",(function(e){var r=String.fromCharCode(e.keyCode).toUpperCase();console.log(e.keyCode,r);var n="Something else";if(Object.prototype.hasOwnProperty.call(t.t1,r)&&(n=t.t1[r]),t.items.push(n),t.items.length>20&&t.items.length%2==0){t.items.shift();var i=t.items.splice(0,1),o=u(i,1);o[0]}var a=new SpeechSynthesisUtterance;a.text=n,a.lang="en-UK",a.rate=1,window.speechSynthesis.speak(a)}))}}),p=d,h=(r("6756"),r("2877")),v=Object(h["a"])(p,n,i,!1,null,"447ef638",null);e["default"]=v.exports},"9bdd":function(t,e,r){var n=r("825a"),i=r("2a62");t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(a){throw i(t),a}}},a434:function(t,e,r){"use strict";var n=r("23e7"),i=r("23cb"),o=r("a691"),a=r("50c4"),c=r("7b0b"),f=r("65f0"),s=r("8418"),u=r("1dde"),l=r("ae40"),d=u("splice"),p=l("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,v=Math.min,b=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d||!p},{splice:function(t,e){var r,n,u,l,d,p,y=c(this),S=a(y.length),m=i(t,S),w=arguments.length;if(0===w?r=n=0:1===w?(r=0,n=S-m):(r=w-2,n=v(h(o(e),0),S-m)),S+r-n>b)throw TypeError(g);for(u=f(y,n),l=0;l<n;l++)d=m+l,d in y&&s(u,l,y[d]);if(u.length=n,r<n){for(l=m;l<S-n;l++)d=l+n,p=l+r,d in y?y[p]=y[d]:delete y[p];for(l=S;l>S-n+r;l--)delete y[l-1]}else if(r>n)for(l=S-n;l>m;l--)d=l+n-1,p=l+r-1,d in y?y[p]=y[d]:delete y[p];for(l=0;l<r;l++)y[l+m]=arguments[l+2];return y.length=S-n+r,u}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("c430"),c=r("83ab"),f=r("4930"),s=r("fdbf"),u=r("d039"),l=r("5135"),d=r("e8b5"),p=r("861d"),h=r("825a"),v=r("7b0b"),b=r("fc6a"),g=r("c04e"),y=r("5c6c"),S=r("7c73"),m=r("df75"),w=r("241c"),A=r("057f"),O=r("7418"),x=r("06cf"),C=r("9bf2"),L=r("d1e7"),E=r("9112"),T=r("6eeb"),P=r("5692"),F=r("f772"),j=r("d012"),M=r("90e3"),k=r("b622"),R=r("e538"),N=r("746f"),D=r("d44e"),G=r("69f3"),H=r("b727").forEach,I=F("hidden"),V="Symbol",_="prototype",J=k("toPrimitive"),U=G.set,B=G.getterFor(V),$=Object[_],Q=i.Symbol,K=o("JSON","stringify"),W=x.f,X=C.f,Y=A.f,Z=L.f,q=P("symbols"),z=P("op-symbols"),tt=P("string-to-symbol-registry"),et=P("symbol-to-string-registry"),rt=P("wks"),nt=i.QObject,it=!nt||!nt[_]||!nt[_].findChild,ot=c&&u((function(){return 7!=S(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=W($,e);n&&delete $[e],X(t,e,r),n&&t!==$&&X($,e,n)}:X,at=function(t,e){var r=q[t]=S(Q[_]);return U(r,{type:V,tag:t,description:e}),c||(r.description=e),r},ct=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},ft=function(t,e,r){t===$&&ft(z,e,r),h(t);var n=g(e,!0);return h(r),l(q,n)?(r.enumerable?(l(t,I)&&t[I][n]&&(t[I][n]=!1),r=S(r,{enumerable:y(0,!1)})):(l(t,I)||X(t,I,y(1,{})),t[I][n]=!0),ot(t,n,r)):X(t,n,r)},st=function(t,e){h(t);var r=b(e),n=m(r).concat(ht(r));return H(n,(function(e){c&&!lt.call(r,e)||ft(t,e,r[e])})),t},ut=function(t,e){return void 0===e?S(t):st(S(t),e)},lt=function(t){var e=g(t,!0),r=Z.call(this,e);return!(this===$&&l(q,e)&&!l(z,e))&&(!(r||!l(this,e)||!l(q,e)||l(this,I)&&this[I][e])||r)},dt=function(t,e){var r=b(t),n=g(e,!0);if(r!==$||!l(q,n)||l(z,n)){var i=W(r,n);return!i||!l(q,n)||l(r,I)&&r[I][n]||(i.enumerable=!0),i}},pt=function(t){var e=Y(b(t)),r=[];return H(e,(function(t){l(q,t)||l(j,t)||r.push(t)})),r},ht=function(t){var e=t===$,r=Y(e?z:b(t)),n=[];return H(r,(function(t){!l(q,t)||e&&!l($,t)||n.push(q[t])})),n};if(f||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=M(t),r=function(t){this===$&&r.call(z,t),l(this,I)&&l(this[I],e)&&(this[I][e]=!1),ot(this,e,y(1,t))};return c&&it&&ot($,e,{configurable:!0,set:r}),at(e,t)},T(Q[_],"toString",(function(){return B(this).tag})),T(Q,"withoutSetter",(function(t){return at(M(t),t)})),L.f=lt,C.f=ft,x.f=dt,w.f=A.f=pt,O.f=ht,R.f=function(t){return at(k(t),t)},c&&(X(Q[_],"description",{configurable:!0,get:function(){return B(this).description}}),a||T($,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:Q}),H(m(rt),(function(t){N(t)})),n({target:V,stat:!0,forced:!f},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=Q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!c},{create:ut,defineProperty:ft,defineProperties:st,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:pt,getOwnPropertySymbols:ht}),n({target:"Object",stat:!0,forced:u((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(v(t))}}),K){var vt=!f||u((function(){var t=Q();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),i[1]=e,K.apply(null,i)}})}Q[_][J]||E(Q[_],J,Q[_].valueOf),D(Q,V),j[I]=!0},a630:function(t,e,r){var n=r("23e7"),i=r("4df4"),o=r("1c7e"),a=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:i})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),o=r("5135"),a=Object.defineProperty,c={},f=function(t){throw t};t.exports=function(t,e){if(o(c,t))return c[t];e||(e={});var r=[][t],s=!!o(e,"ACCESSORS")&&e.ACCESSORS,u=o(e,0)?e[0]:f,l=o(e,1)?e[1]:void 0;return c[t]=!!r&&!i((function(){if(s&&!n)return!0;var t={length:-1};s?a(t,1,{enumerable:!0,get:f}):t[1]=1,r.call(t,u,l)}))}},b0c0:function(t,e,r){var n=r("83ab"),i=r("9bf2").f,o=Function.prototype,a=o.toString,c=/^\s*function ([^ (]*)/,f="name";n&&!(f in o)&&i(o,f,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),a=r("50c4"),c=r("65f0"),f=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,u=4==t,l=6==t,d=7==t,p=5==t||l;return function(h,v,b,g){for(var y,S,m=o(h),w=i(m),A=n(v,b,3),O=a(w.length),x=0,C=g||c,L=e?C(h,O):r||d?C(h,0):void 0;O>x;x++)if((p||x in w)&&(y=w[x],S=A(y,x,m),t))if(e)L[x]=S;else if(S)switch(t){case 3:return!0;case 5:return y;case 6:return x;case 2:f.call(L,y)}else switch(t){case 4:return!1;case 7:f.call(L,y)}return l?-1:s||u?u:L}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("e260"),a=r("9112"),c=r("b622"),f=c("iterator"),s=c("toStringTag"),u=o.values;for(var l in i){var d=n[l],p=d&&d.prototype;if(p){if(p[f]!==u)try{a(p,f,u)}catch(v){p[f]=u}if(p[s]||a(p,s,l),i[l])for(var h in o)if(p[h]!==o[h])try{a(p,h,o[h])}catch(v){p[h]=o[h]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),a=r("5135"),c=r("861d"),f=r("9bf2").f,s=r("e893"),u=o.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(l[e]=!0),e};s(d,u);var p=d.prototype=u.prototype;p.constructor=d;var h=p.toString,v="Symbol(test)"==String(u("test")),b=/^Symbol\((.*)\)[^)]+$/;f(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=h.call(t);if(a(l,t))return"";var r=v?e.slice(7,-1):e.replace(b,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},f820:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v("This is an about page")])])}],o=r("2877"),a={},c=Object(o["a"])(a,n,i,!1,null,null,null);e["default"]=c.exports},fb6a:function(t,e,r){"use strict";var n=r("23e7"),i=r("861d"),o=r("e8b5"),a=r("23cb"),c=r("50c4"),f=r("fc6a"),s=r("8418"),u=r("b622"),l=r("1dde"),d=r("ae40"),p=l("slice"),h=d("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),b=[].slice,g=Math.max;n({target:"Array",proto:!0,forced:!p||!h},{slice:function(t,e){var r,n,u,l=f(this),d=c(l.length),p=a(t,d),h=a(void 0===e?d:e,d);if(o(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?i(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(l,p,h);for(n=new(void 0===r?Array:r)(g(h-p,0)),u=0;p<h;p++,u++)p in l&&s(n,u,l[p]);return n.length=u,n}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=about.245d3186.js.map