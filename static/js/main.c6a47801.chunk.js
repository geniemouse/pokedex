(window.webpackJsonppokedex=window.webpackJsonppokedex||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c),o=(n(11),n(2)),i=n.n(o),m=n(5),s=n(1);var u=function(e,t){var n=Object(a.useState)(t),r=Object(s.a)(n,2),c=r[0],l=r[1];return Object(a.useEffect)(function(){function t(){return(t=Object(m.a)(i.a.mark(function t(){var n,a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,l(a);case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}!function(){t.apply(this,arguments)}()},[e]),c};n(13);var p=function(e){var t=e.alt,n=void 0===t?"":t,c=e.caption,l=void 0===c?"":c,o=e.forceHttps,i=e.height,m=e.src,s=void 0===m?"":m,u=e.width,p=s;return o&&(p=p.replace(/^http:/,"https:")),r.a.createElement(a.Fragment,null,s.length?r.a.createElement("figure",{className:"pokemon-figure"},r.a.createElement("img",{width:u,height:i,src:p,alt:n}),l.length?r.a.createElement("figcaption",null,l):null):null)};n(14);var d=function(e){var t=e.children,n=e.types,c=void 0===n?[]:n;function l(e){var t=String(e).replace(/\s/gi,"-").toLowerCase();return"type--".concat(t)}return r.a.createElement(a.Fragment,null,t,c.length?r.a.createElement("ul",{className:"pokemon-types-list"},c.map(function(e){return r.a.createElement("li",{key:e,className:l(e)},e)})):null)};n(15);var E=function(e){var t=e.id,n=e.img,a=e.name,c=e.type;return r.a.createElement("div",{className:"face face--front"},r.a.createElement("header",null,r.a.createElement(p,{forceHttps:!0,src:n,width:"120",height:"120"}),r.a.createElement("h2",null,r.a.createElement("span",{className:"pokemon-id"},"#",t)," ",a)),r.a.createElement(d,{types:c},r.a.createElement("h3",{className:"visually-hidden"},"Pok\xe9mon type")))};n(16);var f=function(e){var t=e.children,n=e.evolutions,c=void 0===n?[]:n;return r.a.createElement(a.Fragment,null,t,c.length?r.a.createElement("ol",{className:"pokemon-evolutions-list"},c.map(function(e){var t=e.name;return r.a.createElement("li",{key:t},t)})):"None")};n(17);var h=function(e){var t=e.height,n=void 0===t?"-":t,a=e.name,c=e.next_evolution,l=void 0===c?[]:c,o=e.weaknesses,i=void 0===o?[]:o,m=e.weight,s=void 0===m?"":m;return r.a.createElement("div",{className:"face face--back"},r.a.createElement("table",{className:"pokemon-specs"},r.a.createElement("caption",null,a," statistics"),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Height"),r.a.createElement("td",null,n)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Weight"),r.a.createElement("td",null,s)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Weaknesses"),r.a.createElement("td",null,r.a.createElement(d,{types:i}))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Next evolution"),r.a.createElement("td",null,r.a.createElement(f,{evolutions:l}))))))};n(18);var v=function(e){var t=e.id,n=e.img,c=e.height,l=e.name,o=e.next_evolution,i=e.type,m=e.weaknesses,u=e.weight,p=Object(a.useState)(!0),d=Object(s.a)(p,2),f=d[0],v=d[1],k="card card--showfront";return f||(k="card card--showback"),r.a.createElement("article",{id:"pokemon-".concat(l),className:k},r.a.createElement("div",{className:"card-flip"},r.a.createElement(E,{id:t,img:n,name:l,type:i}),r.a.createElement(h,{height:c,id:t,name:l,next_evolution:o,weaknesses:m,weight:u})),r.a.createElement("button",{className:"flipcard-toggle",onClick:function(){return v(function(e){return!e})}},r.a.createElement("span",{className:"visually-hidden"},"Flip ",l," card")))};n(19);var k=function(e){var t=e.pokemon,n=void 0===t?[]:t,c=r.a.createElement("p",{className:"pokedex-message"},"Searching for Pok\xe9mon..."),l=r.a.createElement("ul",{className:"pokedex-list"},n.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(v,e))}));return r.a.createElement(a.Fragment,null,n.length?l:c)};n(20);var g=function(){var e=function(){var e=u("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",{});return e.pokemon?e.pokemon.sort(function(e,t){var n=e.name.toLowerCase(),a=t.name.toLowerCase();return n>a?1:n<a?-1:0}):[]}();return r.a.createElement(a.Fragment,null,r.a.createElement("a",{className:"skip-link",href:"#main"},"Skip to main content"),r.a.createElement("header",null,r.a.createElement("h1",null,"A Pok\xe9mon Pok\xe9dex")),r.a.createElement("main",{id:"main"},r.a.createElement(k,{pokemon:e})))};l.a.render(r.a.createElement(g,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.c6a47801.chunk.js.map