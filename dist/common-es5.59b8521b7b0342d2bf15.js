function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,n,r){return n&&_defineProperties(e.prototype,n),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{xJkR:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return c}));var a=r("fXoL"),t=r("ofXK"),o=function(e,n,r,a){return{circle:e,progress:n,"progress-dark":r,pulse:a}};function i(e,n){if(1&e&&a.Mb(0,"span",1),2&e){var r=a.ac();a.dc("ngClass",a.ic(2,o,"circle"===r.appearance,"progress"===r.animation,"progress-dark"===r.animation,"pulse"===r.animation))("ngStyle",r.theme)}}var s=function(){var e=function(){function e(){_classCallCheck(this,e),this.count=1,this.appearance="",this.animation="progress",this.theme={},this.items=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.items.length=this.count;var e=["progress","progress-dark","pulse","false"];e.includes(this.animation)||(Object(a.T)()&&console.error("`NgxSkeletonLoaderComponent` need to receive 'animation' as: ".concat(e.join(", "),'. Forcing default to "progress".')),this.animation="progress")}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a.Fb({type:e,selectors:[["ngx-skeleton-loader"]],inputs:{count:"count",appearance:"appearance",animation:"animation",theme:"theme"},decls:1,vars:1,consts:[["class","loader","aria-busy","true","aria-valuemin","0","aria-valuemax","100","aria-valuetext","Loading...","role","progressbar","tabindex","0",3,"ngClass","ngStyle",4,"ngFor","ngForOf"],["aria-busy","true","aria-valuemin","0","aria-valuemax","100","aria-valuetext","Loading...","role","progressbar","tabindex","0",1,"loader",3,"ngClass","ngStyle"]],template:function(e,n){1&e&&a.pc(0,i,1,7,"span",0),2&e&&a.dc("ngForOf",n.items)},directives:[t.i,t.h,t.k],styles:[".loader[_ngcontent-%COMP%]{box-sizing:border-box;overflow:hidden;position:relative;background:no-repeat #eff1f6;border-radius:4px;width:100%;height:20px;display:inline-block;margin-bottom:10px;will-change:transform}.loader[_ngcontent-%COMP%]:after, .loader[_ngcontent-%COMP%]:before{box-sizing:border-box}.loader.circle[_ngcontent-%COMP%]{width:40px;height:40px;margin:5px;border-radius:50%}.loader.progress[_ngcontent-%COMP%], .loader.progress-dark[_ngcontent-%COMP%]{-webkit-animation:2s ease-in-out infinite progress;animation:2s ease-in-out infinite progress;background-size:200px 100%}.loader.progress[_ngcontent-%COMP%]{background-image:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,0)),color-stop(rgba(255,255,255,.6)),to(rgba(255,255,255,0)));background-image:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.6),rgba(255,255,255,0))}.loader.progress-dark[_ngcontent-%COMP%]{background-image:-webkit-gradient(linear,left top,right top,from(transparent),color-stop(rgba(0,0,0,.2)),to(transparent));background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.loader.pulse[_ngcontent-%COMP%]{-webkit-animation:1.5s ease-in-out .5s infinite pulse;animation:1.5s ease-in-out .5s infinite pulse}@-webkit-keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@-webkit-keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}"]}),e}(),c=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(n){return new(n||e)},imports:[[t.b]]}),e}()}}]);