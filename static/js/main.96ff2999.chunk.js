(this["webpackJsonpmvpmatch-challenge"]=this["webpackJsonpmvpmatch-challenge"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(19),s=c.n(i),r=(c(25),c(12)),l=c(2),o=(c(26),c(0)),j=function(e){var t=e.to,c=e.children,n=e.activeOnlyWhenExact,a=e.className,i=Object(l.f)({path:t,exact:n});return Object(o.jsx)(r.b,{to:t,className:"Link ".concat(i?"is-active":""," ").concat(a),children:c})};var d,b=function(){return Object(o.jsx)("nav",{className:"navbar is-transparent",role:"navigation","aria-label":"main navigation",children:Object(o.jsxs)("div",{className:"container is-max-desktop",children:[Object(o.jsx)("div",{className:"navbar-brand",children:Object(o.jsxs)("a",{className:"navbar-item",href:"https://bulma.io",children:[Object(o.jsx)("img",{src:"./clapper.svg",width:"40",height:"20"}),Object(o.jsx)("span",{className:"is-size-3",children:"Mooviez"})]})}),Object(o.jsx)("div",{className:"navbar-menu",children:Object(o.jsxs)("div",{className:"navbar-end",children:[Object(o.jsx)(j,{className:"navbar-item",to:"/",activeOnlyWhenExact:!0,children:"Home"}),Object(o.jsx)(j,{className:"navbar-item",to:"/favorites",activeOnlyWhenExact:!0,children:"Favorites"})]})})]})})},u=c(3),m=c(9),h="favorites",v=function(){var e=localStorage.getItem(h);return e?JSON.parse(e):[]},O=function(e,t){return t.includes(e)},f=function(e){var t=v();return O(e,t)?function(e,t){var c=t.filter((function(t){return t!==e}));return localStorage.setItem(h,JSON.stringify(c)),c}(e,t):function(e,t){var c=[].concat(Object(m.a)(t),[e]);return localStorage.setItem(h,JSON.stringify(c)),c}(e,t)},g=(c(33),function(e){var t=e.movie,c=t.imdbID,n=t.Poster,a=t.Title,i=t.Type,s=t.Year,r=e.isFavorite,l=e.toggleFavorite;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-3by4",children:Object(o.jsx)("img",{src:n,alt:"Placeholder image"})})}),Object(o.jsx)("div",{className:"card-content",children:Object(o.jsxs)("div",{className:"media-content",children:[Object(o.jsxs)("p",{className:"title is-4",children:[Object(o.jsx)("span",{className:"icon mr-1 Favorite",onClick:function(){l(c)},children:Object(o.jsx)("i",{className:"mdi ".concat(r?"mdi-star":"mdi-star-outline")})}),a]}),Object(o.jsxs)("p",{className:"subtitle is-6",children:[i," (",s,")"]})]})})]},c)}),x=function(e){var t=e.yearFilterText,c=e.onChange;return Object(o.jsx)("div",{className:"level-right is-one-fifth is-size-5 field",children:Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{className:"input",type:"text",placeholder:"Filter by year",value:t,onChange:c,onWheel:function(e){e.target.blur(),setTimeout((function(){e.target.focus()}),10)}})})})};!function(e){e[e.None=0]="None",e[e.AlphabeticalAscending=1]="AlphabeticalAscending",e[e.AlphabeticalDescending=2]="AlphabeticalDescending",e[e.NumericAscending=3]="NumericAscending",e[e.NumericDescending=4]="NumericDescending"}(d||(d={}));var p,N=function(e){var t=function(e,t){var c=Object(n.useState)(d.None),a=Object(u.a)(c,2),i=a[0],s=a[1];return Object(n.useEffect)((function(){switch(i){case d.AlphabeticalAscending:var c=Object(m.a)(e).sort((function(e,t){return e.Title.localeCompare(t.Title)}));t(c);break;case d.AlphabeticalDescending:var n=Object(m.a)(e).sort((function(e,t){return t.Title.localeCompare(e.Title)}));t(n);break;case d.NumericAscending:var a=Object(m.a)(e).sort((function(e,t){return e.Year.localeCompare(t.Year)}));t(a);break;case d.NumericDescending:var s=Object(m.a)(e).sort((function(e,t){return t.Year.localeCompare(e.Year)}));t(s)}}),[i]),{sorting:i,handleAlphabeticalSortClick:function(){i===d.AlphabeticalAscending?s(d.AlphabeticalDescending):s(d.AlphabeticalAscending)},handleNumericSortClick:function(){i===d.NumericAscending?s(d.NumericDescending):s(d.NumericAscending)}}}(e.movieList,e.setMovieList),c=t.sorting,a=t.handleAlphabeticalSortClick,i=t.handleNumericSortClick;return Object(o.jsxs)("div",{className:"level-left",children:["Sort:",Object(o.jsx)("button",{className:"button ml-5",onClick:a,children:Object(o.jsx)("span",{className:"icon is-small",children:Object(o.jsx)("span",{className:"mdi mdi-sort-alphabetical-".concat(c===d.AlphabeticalAscending?"descending":"ascending")})})}),Object(o.jsx)("button",{className:"button ml-1",onClick:i,children:Object(o.jsx)("span",{className:"icon is-small",children:Object(o.jsx)("span",{className:"mdi mdi-sort-numeric-".concat(c===d.NumericAscending?"descending":"ascending")})})})]})},S=function(e){var t=e.movies,c=e.favoriteIds,a=e.toggleFavorite,i=Object(n.useState)([]),s=Object(u.a)(i,2),r=s[0],l=s[1],j=Object(n.useState)(""),d=Object(u.a)(j,2),b=d[0],m=d[1];Object(n.useEffect)((function(){l(t)}),[t]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"block level",children:[Object(o.jsx)(N,{movieList:r,setMovieList:l}),Object(o.jsx)(x,{yearFilterText:b,onChange:function(e){m(e.target.value)}})]}),Object(o.jsx)("div",{className:"block Search-grid mt-4",children:r.filter((function(e){return e.Year.includes(b)})).map((function(e){return Object(o.jsx)(g,{movie:e,isFavorite:O(e.imdbID,c),toggleFavorite:a},e.imdbID)}))})]})};!function(e){e.True="True",e.False="False"}(p||(p={}));var k="e4b6367955mshe158ddfb218d84ap11538djsn61ee918a2120",F="movie-database-imdb-alternative.p.rapidapi.com",A=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){var e=v();a(e)}),[]);return{favoriteIds:c,toggleFavorite:function(e){var t=f(e);a(t)}}};var C=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)([]),s=Object(u.a)(i,2),r=s[0],l=s[1],j=Object(n.useState)(null),d=Object(u.a)(j,2),b=d[0],m=d[1],h=Object(n.useState)(!1),v=Object(u.a)(h,2),O=v[0],f=v[1],g=A(),x=g.favoriteIds,p=g.toggleFavorite,N=Object(n.useCallback)((function(e){m(null),a(!0),function(e,t,c){Promise.all(e.map((function(e){return fetch("https://".concat(F,"/?i=").concat(e,"&r=json"),{method:"GET",headers:{"x-rapidapi-key":k,"x-rapidapi-host":F}}).then((function(e){return e.json()}))}))).then((function(e){t(e)})).catch((function(e){console.log("error: ",e),c(e)}))}(e,(function(e){l(e),a(!1)}),(function(e){m(e),a(!1)}))}),[]);return Object(n.useEffect)((function(){!O&&x.length&&(N(x),f(!0))}),[O,x,N]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"block is-size-4",children:"Your favorites"}),c?Object(o.jsx)("div",{children:"Loading..."}):Object(o.jsx)("div",{className:"block mt-6",children:b?Object(o.jsx)("div",{className:"is-size-5",children:b}):Object(o.jsx)(S,{movies:r,favoriteIds:x,toggleFavorite:p})})]})};c(34);var y=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!1),s=Object(u.a)(i,2),r=s[0],l=s[1],j=Object(n.useState)(""),d=Object(u.a)(j,2),b=d[0],m=d[1],h=Object(n.useState)([]),v=Object(u.a)(h,2),O=v[0],f=v[1],g=Object(n.useState)(null),x=Object(u.a)(g,2),N=x[0],C=x[1],y=Object(n.useState)(null),T=Object(u.a)(y,2),I=T[0],D=T[1],E=A(),z=E.favoriteIds,L=E.toggleFavorite;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"block is-size-4",children:"Welcome to movie search!"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!b.length)return D("Please enter something.");C(null),a(!1),l(!0);var t=b.trim();m(t),function(e,t,c){fetch("https://".concat(F,"/?s=").concat(e,"&page=1&r=json"),{method:"GET",headers:{"x-rapidapi-key":k,"x-rapidapi-host":F}}).then((function(e){return e.json()})).then((function(e){e.Response===p.True?t(e.Search):c(e.Error)})).catch((function(e){c(e)}))}(t,(function(e){f(e),a(!0),l(!1)}),(function(e){console.log("err: ",e),C(e),a(!0),l(!1)}))},children:[Object(o.jsxs)("div",{className:"field has-addons",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{className:"input",type:"text",placeholder:"Find a movie or a show",value:b,onChange:function(e){var t=e.target.value;m(t),I&&t.length&&D(null)}})}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"submit",className:"button ".concat(r?"is-loading":""),children:Object(o.jsx)("span",{className:"icon is-small",children:Object(o.jsx)("span",{className:"mdi mdi-movie-search"})})})})]}),I&&Object(o.jsx)("p",{className:"help is-danger",children:I})]})}),c&&Object(o.jsx)("div",{className:"block mt-6",children:N?Object(o.jsx)("div",{className:"is-size-5",children:N}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"block is-size-5",children:"We have found these movies"}),Object(o.jsx)(S,{movies:O,favoriteIds:z,toggleFavorite:L})]})})]})};var T=function(){return Object(o.jsxs)(r.a,{children:[Object(o.jsx)(b,{}),Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container is-max-desktop",children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/favorites",children:Object(o.jsx)(C,{})}),Object(o.jsx)(l.a,{path:"/",children:Object(o.jsx)(y,{})})]})})})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(T,{})}),document.getElementById("root")),I()}},[[35,1,2]]]);
//# sourceMappingURL=main.96ff2999.chunk.js.map