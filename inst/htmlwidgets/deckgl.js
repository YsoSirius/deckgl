!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=7)}([function(e,t,o){"use strict";t.a=function(e){return e=e.substring(1),[parseInt(e.substring(0,2),16),parseInt(e.substring(2,4),16),parseInt(e.substring(4),16)]}},function(e,t,o){"use strict";var n=o(0),i=function(e,t){if(console.log(e,"make data accessor"),"string"==typeof t){const o=t;return e.includes("Color")?e=>"string"==typeof e[o]?Object(n.a)(e[o]):e[o]:e=>e[o]}return e=>t.map(t=>e[t])};t.a=function(e,t){return t.map(t=>{let o=function(e,t){const o={},n=t.properties,r=_deckGLWidget._store[e.id].tooltipElement;return o._makeDataAccessors=function(){for(let e of Object.keys(n)){let t=n[e];"object"==typeof t&&void 0!==t.dataAccessor&&(n[e]=i(e,t.dataAccessor))}},o._setShinyCallback=function(){HTMLWidgets.shinyMode&&(n.onClick=(t=>{let o={lng:t.lngLat[0],lat:t.lngLat[1],object:t.object};Shiny.onInputChange(e.id+"_onclick",o)}))},o._setTooltip=function(){const e=n.getTooltip,t=n.fixedTooltip;e&&(n.onHover=(({x:o,y:n,object:i})=>{if(!i)return void(r.innerHTML="");let s=e(i);t||(r.style.top=n+"px",r.style.left=o+"px"),r.innerHTML=s}))},o._flipData=function(){n.dataframeToD3&&(t.data=HTMLWidgets.dataframeToD3(t.data))},o._makeDataAccessors(),o._setShinyCallback(),o._setTooltip(),o._flipData(),n.data=t.data,n}(e,t);return new deck[t.className](o)})}},function(e,t){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"==typeof window&&(o=window)}e.exports=o},function(e,t,o){"use strict";(function(e){var n=o(4),i=o(1),r=o(5),s=o(0),c=o(6);const a=e._deckGLWidget={colorToRGBArray:s.a,renderMapTiles:c.a,_store:{}};t.a=class{constructor(e,t,o){console.log("I am your DeckGLWidget!"),this.el=e,this.width=t,this.height=o,this._widgetStore=a._store[e.id]={},this.deckGL=null}_logVersions(){console.log("deck.gl version: "+deck.version),"undefined"!=typeof mapboxgl&&console.log("mapbox-gl version: "+mapboxgl.version)}_createTooltipElement(){const e=this._widgetStore.tooltipElement=document.createElement("div");e.id=this.el.id+"-tooltip",e.className="tooltip",this.el.appendChild(e)}renderValue(e){this._logVersions(),console.log("el",this.el,"x",e),this._widgetStore.element=this.el,this._createTooltipElement(),this.deckGL=this._widgetStore.deckGL=Object(n.a)(this.el,e);const t=this._widgetStore.layers=Object(i.a)(this.el,e.layers);this.deckGL.setProps({layers:t})}resize(e,t){}getDeckGL(){return this.deckGL}},HTMLWidgets.shinyMode&&Shiny.addCustomMessageHandler("proxythis",function(e){console.log(e);const t=HTMLWidgets.find("#"+e.id).getDeckGL();console.log("deckGL",t);const o=document.getElementById(e.id);Object(r.a)(e.x.layers);const n=Object(i.a)(o,e.x.layers);console.log(n),t.setProps({layers:n})})}).call(this,o(2))},function(e,t,o){"use strict";(function(e){t.a=function(t,n){const i=e.deck;var r={mapboxApiAccessToken:n.mapboxApiAccessToken||"",mapStyle:n.mapStyle||"",container:t.id,initialViewState:n.initialViewState||o(n),views:n.views||new i.MapView,layers:[]};return r=Object.assign(r,n.properties),new i.DeckGL(r)};var o=function(e){return{longitude:e.longitude,latitude:e.latitude,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing}}}).call(this,o(2))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=function(layers){for(let i=0;i<layers.length;i++){var properties=layers[i].properties;for(let key of Object.keys(properties))if("string"==typeof properties[key])try{properties[key]=eval(properties[key])}catch(e){}}}},function(e,t,o){"use strict";t.a=function(e){const t=e.tileServer||"http://a.tile.stamen.com/toner/",{x:o,y:n,z:i,bbox:r}=e.tile,{west:s,south:c,east:a,north:l}=r;return new deck.BitmapLayer(e,{image:`${t}/${i}/${o}/${n}.png`,bounds:[s,c,a,l]})}},function(e,t,o){"use strict";o.r(t);var n=o(3);HTMLWidgets.widget({name:"deckgl",type:"output",factory:(e,t,o)=>new n.a(e,t,o)})}]);