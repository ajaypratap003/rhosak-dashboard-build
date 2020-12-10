(self.webpackChunkmk_ui_host=self.webpackChunkmk_ui_host||[]).push([[559],{6734:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var o=t(4015),r=t.n(o),a=t(3645),i=t.n(a),l=t(2454),c=i()(r());c.i(l.Z),c.push([e.id,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}","",{version:3,sources:["webpack://./node_modules/@redhat-cloud-services/frontend-components-utilities/files/Utilities/_variables.scss","webpack://./node_modules/@redhat-cloud-services/frontend-components-utilities/files/Utilities/_helpers.scss"],names:[],mappings:"AAAA,MACI,4BAAA,CCDJ,aACI,YAAA",sourcesContent:[":root {\n    --ins-color--orange: #ec7a08;\n}\n\n// Spacing\n$ins-padding: var(--pf-global--spacer--lg);\n$ins-margin: var(--pf-global--spacer--xl);\n$ins-gutter: var(--pf-global--gutter);\n\n// Font Size\n$ins-fontSize: var(--pf-global--FontSize--md);\n$ins-fontSize--sm: var(--pf-global--FontSize--sm);\n$ins-fontSize--lg: var(--pf-global--FontSize--lg);\n$ins-fontSize--xl: var(--pf-global--FontSize--xl);\n\n// Borders\n$ins-borderRadius: var(--pf-global--BorderRadius--sm);\n$ins-borderRadius--round: var(--pf-global--BorderRadius--lg);\n\n// Grid breakpoints\n$ins-break--xs: var(--pf-global--breakpoint--xs);\n$ins-break--sm: var(--pf-global--breakpoint--sm);\n$ins-break--md: var(--pf-global--breakpoint--md);\n$ins-break--lg: var(--pf-global--breakpoint--lg);\n$ins-break--xl: var(--pf-global--breakpoint--xl);\n\n// Colors\n$ins-color--red: var(--pf-global--danger-color--100);\n$ins-color--critical: $ins-color--red;\n\n$ins-color--orange: var(--ins-color--orange);\n$ins-color--high: $ins-color--orange;\n\n$ins-color--yellow: var(--pf-global--warning-color--100);\n$ins-color--medium: $ins-color--yellow;\n\n$ins-color--green: var(--pf-global--success-color--100);\n$ins-color--low: $ins-color--green;\n\n$ins-color--blue: var(--pf-global--info-color--100);\n\n$ins-color--gray: var(--pf-global--disabled-color--200);","button:focus {\n    outline:none;\n}\n"],sourceRoot:""}]);const s=c},7939:(e,n,t)=>{"use strict";t.r(n);var o,r=t(5691),a=t.n(r),i=t(4604),l=t.n(i),c=t(3727),s=t(962),u=t(655),f=t(3392),d=t.n(f),m=t(8573),p=t.n(m);var g=t(7921),h=t(3379),v=t.n(h),b=t(6734),E={insert:"head",singleton:!1};v()(b.Z,E);b.Z.locals;var k=t(9071),w=t(1355),S=a().createContext({});function y(e){r.useEffect((function(){var n=document.title;return document.title=e,function(){document.title=n}}),[e])}var A=t(5459),$=t(1995),C=function(){return r.createElement($.PageSection,null,r.createElement($.EmptyState,{variant:"full"},r.createElement($.EmptyStateIcon,{icon:A.ExclamationTriangleIcon}),r.createElement($.Title,{headingLevel:"h1",size:"lg"},"404 Page not found"),r.createElement($.EmptyStateBody,null,"We didn't find a page that matches the address you navigated to."),r.createElement((function(){var e=(0,g.k6)();return r.createElement($.Button,{onClick:function(){e.push("/")}},"Take me home")}),null)))},x=t(2876),P=t(5697),T=t.n(P),z=t(2992),B=function(){return a().createElement($.PageSection,null,a().createElement($.Bullseye,null,a().createElement(z.Spinner,null)))},R=a().createContext({});function I(e){var n=this,t=e.configUrl,o=e.children,r=a().useState({}),i=r[0],l=r[1];return a().useEffect((function(){var e=new AbortController,o=e.signal;return(0,u.mG)(n,void 0,void 0,(function(){var e;return(0,u.Jh)(this,(function(n){switch(n.label){case 0:return console.log("Loading federated modules config"),[4,fetch(t,{signal:o})];case 1:return[4,n.sent().json()];case 2:return e=n.sent(),l(e),console.log("Done loading federated modules config",e),[2]}}))})),function(){return e.abort()}}),[t]),a().createElement(R.Provider,{value:i},o)}I.propTypes={configUrl:T().string.isRequired,children:T().oneOfType([T().arrayOf(T().node),T().node])};function _(e){var n=e.scope,o=e.module,r=e.render,i=function(e){var n=e.url,t=a().useState(!1),o=t[0],r=t[1],i=a().useState(!1),l=i[0],c=i[1];return a().useEffect((function(){if(n){var e=document.createElement("script");return e.src=n,e.type="text/javascript",e.async=!0,r(!1),c(!1),e.onload=function(){console.log("Dynamic federated module Loaded: "+n),r(!0)},e.onerror=function(){console.error("Dynamic federated module Error: "+n),r(!1),c(!0)},document.head.appendChild(e),function(){console.log("Dynamic federated module Removed: "+n),document.head.removeChild(e)}}}),[n]),{ready:o,failed:l}}({url:function(e){return a().useContext(R)[e]}(n)}),l=i.ready,c=i.failed;if(!l||c)return null;var s=a().lazy(function(e,n){var o=this;return function(){return(0,u.mG)(o,void 0,void 0,(function(){var o,r;return(0,u.Jh)(this,(function(a){switch(a.label){case 0:return[4,t.I("default")];case 1:return a.sent(),[4,window[e].init(t.S.default)];case 2:return a.sent(),[4,window[e].get(n)];case 3:return o=a.sent(),r=o(),console.log(r+" loaded "+n+" from "+e),[2,r]}}))}))}}(n,o));return a().createElement(a().Suspense,{fallback:a().createElement(B,null)},r(s))}var O=a().createContext({});function U(e){var n=this,t=e.configUrl,o=e.children,r=a().useState({}),i=r[0],l=r[1];return a().useEffect((function(){var e=new AbortController,o=e.signal;return(0,u.mG)(n,void 0,void 0,(function(){var e;return(0,u.Jh)(this,(function(n){switch(n.label){case 0:return console.log("Loading config"),[4,fetch(t,{signal:o})];case 1:return[4,n.sent().json()];case 2:return e=n.sent(),l(e),console.log("Done loading config",e),[2]}}))})),function(){return e.abort()}}),[t]),a().createElement(O.Provider,{value:i},o)}var L,D=function(e){var n=(0,x.useLastLocation)();a().useEffect((function(){return e||null===n||(L=window.setTimeout((function(){var e=document.getElementById("primary-app-container");e&&e.focus()}),50)),function(){window.clearTimeout(L)}}),[e,n])},F=function(e){var n=e.component,t=e.isAsync,o=void 0!==t&&t,r=e.title,i=(0,u._T)(e,["component","isAsync","title"]);return D(o),y(r),a().createElement(g.AW,{render:function(e){return a().createElement(n,(0,u.pi)({},i,e))}})},G=function(e){return y(e.title),a().createElement(g.AW,{component:C})},j=[{component:function(e){e.match;var n=(0,r.useContext)(S),t=(0,r.useContext)(O),o=(window.location.pathname.endsWith("/")?window.location.pathname:window.location.pathname+"/").split("/"),i=o[o.length-2],l=function(){return"redhat123"};return a().createElement(_,{scope:"strimziUi",module:"./Panels/Topics.patternfly",render:function(e){return a().createElement(e,{getApiOpenshiftComToken:n.chrome.auth.getToken,getToken:l,id:i,apiBasePath:t.dataPlane.uiServerBasePath})}})},exact:!1,label:"Red Hat OpenShift Streams for Apache Kafka",path:"/kafkas",title:"Red Hat OpenShift Streams for Apache Kafka"},{component:function(){var e=(0,r.useContext)(S),n=(0,r.useContext)(O),t=(0,g.k6)(),o=function(e){return(0,u.mG)(void 0,void 0,void 0,(function(){return(0,u.Jh)(this,(function(n){if(void 0===e.id)throw new Error;return t.push("/kafkas/"+e.id),[2]}))}))},i=(0,s.useDispatch)(),l=function(e,n){i((0,w.addNotification)({variant:n,title:e}))};return a().createElement(_,{scope:"mkUiFrontend",module:"./OpenshiftStreams",render:function(t){return a().createElement(t,{getToken:e.chrome.auth.getToken,onConnectToInstance:o,addAlert:l,basePath:n.controlPlane.serviceApiBasePath})}})},exact:!0,label:"Red Hat OpenShift Streams for Apache Kafka",path:"/",title:"Red Hat OpenShift Streams for Apache Kafka"}].reduce((function(e,n){return(0,u.pr)(e,n.routes?n.routes:[n])}),[]),J=function(){return a().createElement(x.LastLocationProvider,null,a().createElement(g.rs,null,j.map((function(e,n){var t=e.path,o=e.exact,r=e.component,i=e.title,l=e.isAsync;return a().createElement(F,{path:t,exact:o,component:r,key:n,title:i,isAsync:l})})),a().createElement(G,{title:"404 Page Not Found"})))},N=(0,k.getRegistry)();N.register({notifications:w.notifications});const H=(0,s.connect)()((function(){var e=(0,r.useContext)(S),n=(0,g.k6)();return(0,r.useEffect)((function(){e.chrome.init(),e.chrome.identifyApp("openshift-streams");e.chrome.on("APP_NAVIGATION",(function(e){return n.push("/"+e.navId)}));return function(){}})),a().createElement(s.Provider,{store:N.getStore()},a().createElement(U,{configUrl:"/beta/apps/openshift-streams/config.json"},a().createElement(I,{configUrl:"/beta/apps/openshift-streams/federated-modules.json"},a().createElement(w.NotificationsPortal,null),a().createElement(J,null))))}));var K=t(7571),W=t.n(K);const Z=function(e){var n="/",t=e.split("/");return t.shift(),"beta"===t[0]&&(t.shift(),n="/beta/"),""+n+t[0]+"/"+(t[1]||"")};l().render(a().createElement(s.Provider,{store:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(o)throw new Error("store already initialized");return o=new(d())({},(0,u.pr)([p()],e))}(W()).getStore()},a().createElement(S.Provider,{value:window.insights},a().createElement(c.BrowserRouter,{basename:Z(window.location.pathname)},a().createElement(H,null)))),document.getElementById("root"))}}]);
//# sourceMappingURL=559.48b38803f8b0b730a135.js.map