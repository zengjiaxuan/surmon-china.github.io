(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{229:function(t,e,n){var r=n(6),o=n(32),l=n(16),c=n(230),d="["+c+"]",m=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),_=function(t,e,n){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),m=o[t]=d?e(f):c[t];n&&(o[n]=m),r(r.P+r.F*d,"String",o)},f=_.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(m,"")),2&e&&(t=t.replace(v,"")),t};t.exports=_},230:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},234:function(t,e,n){"use strict";var r=n(5),o=n(25),l=n(31),c=n(133),d=n(67),m=n(16),v=n(51).f,_=n(68).f,f=n(15).f,h=n(229).trim,C=r.Number,y=C,S=C.prototype,O="Number"==l(n(90)(S)),k="trim"in String.prototype,I=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=k?e.trim():h(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,m=c.length;i<m;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&(O?m((function(){S.valueOf.call(n)})):"Number"!=l(n))?c(new y(I(e)),n,C):I(e)};for(var w,A=n(9)?v(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;A.length>j;j++)o(y,w=A[j])&&!o(C,w)&&f(C,w,_(y,w));C.prototype=S,S.constructor=C,n(17)(r,"Number",C)}},237:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return v})),n.d(e,"d",(function(){return _}));var r=n(13),o=n(4),l=Object(r.b)({name:"AliyunSwiperAd",setup:function(){return{aliyunAds:o.d.ALIYUN_ADS,swiperOption:{mousewheel:!0,autoHeight:!0,loop:!0,direction:"vertical",autoplay:{delay:2600,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}}}}),c=(n(263),n(264),n(11)),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mammon aliyun"},[e("client-only",[e("swiper",{staticClass:"swiper",attrs:{options:this.swiperOption}},[this._l(this.aliyunAds,(function(t,n){return e("swiper-slide",{key:n,staticClass:"slide"},[e("a",{staticClass:"link",attrs:{href:t.url,target:"_blank"}},[e("div",{staticClass:"image",style:{backgroundImage:"url("+t.image+")"}})])])})),this._v(" "),e("div",{staticClass:"swiper-pagination aliyun-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)],1)}),[],!1,null,"5be0006c",null);component.options.__file="aliyun-swiper.vue";var d,m=component.exports;!function(t){t.Aliyun="Aliyun",t.GoogleAdSense1="GoogleAdSense1",t.GoogleAdSense2="GoogleAdSense2",t.GoogleAdSense3="GoogleAdSense3"}(d||(d={}));var v=[d.Aliyun],_=[d.GoogleAdSense1,d.GoogleAdSense2,d.GoogleAdSense3],f=Object(r.b)({name:"mammon",components:{AliyunSwiperAd:m},props:{provider:{type:String,default:d.GoogleAdSense1}},setup:function(t){return{MammonProvider:d,isEnabledAd:function(e){return t.provider===e}}}}),h=Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isEnabledAd(t.MammonProvider.Aliyun)?n("aliyun-swiper-ad",{key:"aliyun"}):t.isEnabledAd(t.MammonProvider.GoogleAdSense1)?n("adsense-responsive-ad-1",{key:"gad1"}):t.isEnabledAd(t.MammonProvider.GoogleAdSense2)?n("adsense-responsive-ad-2",{key:"gad2"}):t.isEnabledAd(t.MammonProvider.GoogleAdSense3)?n("adsense-responsive-ad-3",{key:"gad2"}):t._e()}),[],!1,null,null,null);h.options.__file="index.vue";e.c=h.exports},241:function(t,e,n){},242:function(t,e,n){},243:function(t,e,n){var r=n(6),o=n(5).isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&o(t)}})},244:function(t,e,n){},251:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));n(94);function r(t){return t>1e3?"".concat(parseFloat((t/1e3).toFixed(2)),"k"):String(t)}function o(t){return String(t).replace(/.{1,3}(?=(.{3})+$)/g,"$&,")}},263:function(t,e,n){"use strict";var r=n(241);n.n(r).a},264:function(t,e,n){"use strict";var r=n(242);n.n(r).a},268:function(t,e,n){"use strict";var r=n(244);n.n(r).a},346:function(t,e,n){},347:function(t,e,n){},348:function(t,e,n){},349:function(t,e,n){},350:function(t,e,n){"use strict";n(243),n(234);var r=n(13),o=n(251),l=Object(r.b)({name:"github-button-base",props:{link:{type:String,required:!0},icon:{type:String,required:!0},iconColor:{type:String,required:!1},text:{type:String,required:!1},isLoading:{type:Boolean,required:!1},count:{type:Number,required:!1},countIcon:{type:String,required:!1},countText:{type:String,required:!1},countLink:{type:String,required:!1}},setup:function(t,e){var n=Object(r.a)((function(){return Number.isFinite(t.count)||t.countText})),l=Object(r.a)((function(){return t.countText?t.countText:n?Object(o.a)(t.count):null}));return{hasCount:n,countContent:l}}}),c=(n(268),n(11)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"github-button"},[n("a",{staticClass:"button",attrs:{href:t.link,target:"_blank"}},[n("i",{staticClass:"iconfont",class:t.icon,style:{color:t.iconColor}}),t._v(" "),t.text?n("span",{staticClass:"text"},[t._v(t._s(t.text))]):t._e(),t._v(" "),t._t("default")],2),t._v(" "),t.hasCount?n("a",{staticClass:"count",attrs:{href:t.countLink||t.link,target:"_blank"}},[t.countIcon?n("i",{staticClass:"iconfont",class:t.countIcon}):t._e(),t._v(" "),n("transition",{attrs:{name:"module",mode:"out-in"}},[n("span",{key:t.countContent},[t._v(t._s(t.countContent))])])],1):t._e()])}),[],!1,null,"1ef07698",null);component.options.__file="base.vue";e.a=component.exports},659:function(t,e,n){"use strict";var r=n(346);n.n(r).a},660:function(t,e,n){"use strict";var r=n(347);n.n(r).a},661:function(t,e,n){"use strict";var r=n(348);n.n(r).a},662:function(t,e,n){"use strict";var r=n(349);n.n(r).a},670:function(t,e,n){"use strict";n.r(e);n(20),n(69),n(70),n(30),n(14),n(135);var r,o,l=n(13),c=n(73),d=n(53),m=n(39),v=n(4),base=n(350);!function(t){t.Normal="flat-square",t.Big="for-the-badge"}(r||(r={})),function(t){t.DW="dw",t.DM="dm",t.DY="dy",t.DT="dt"}(o||(o={}));var _=Object(l.b)({name:"badge-npm-downloads",props:{name:{type:String,required:!0},size:{type:String,default:r.Normal},interval:{type:String,default:o.DW},label:{type:String,default:"npm%20downloads"},color:{type:String}},setup:function(t){return{url:Object(d.c)(t.name)}}}),f=(n(659),n(11)),component=Object(f.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"badge download",attrs:{href:this.url,target:"_blank"}},[e("img",{staticClass:"image",attrs:{alt:"npm downloads",src:"https://img.shields.io/npm/"+this.interval+"/"+this.name+"?style="+this.size+"&label="+this.label}})])}),[],!1,null,"3369b032",null);component.options.__file="download.vue";var h=component.exports,C=Object(l.b)({name:"npm-last-commit",props:{name:{type:String,required:!0},size:{type:String,default:r.Normal},label:{type:String},color:{type:String}},setup:function(t){return{image:"https://img.shields.io/github/last-commit/".concat(v.a,"/").concat(t.name,"?style=").concat(t.size),url:Object(d.e)(v.a,t.name)}}}),y=(n(660),Object(f.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"badge last-commit",attrs:{href:this.url,target:"_blank"}},[e("img",{staticClass:"image",attrs:{alt:"last-commit",src:this.image}})])}),[],!1,null,"3987a3b0",null));y.options.__file="last-commit.vue";var S=y.exports,O=Object(l.b)({name:"badge-npm-version",props:{name:{type:String,required:!0},size:{type:String,default:r.Normal},label:{type:String},color:{type:String}},setup:function(t){return{url:Object(d.c)(t.name)}}}),k=(n(661),Object(f.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"badge version",attrs:{href:this.url,target:"_blank"}},[e("img",{staticClass:"image",attrs:{alt:"package version",src:"https://img.shields.io/npm/v/"+this.name+"?style="+this.size}})])}),[],!1,null,"733b1c58",null));k.options.__file="version.vue";var I=k.exports,w=(n(234),n(251)),A=Object(l.b)({name:"animated-number",props:{number:{type:Number,required:!0},placeholder:{type:String,default:"..."},speed:{type:Number,default:6}},setup:function(t){var e=Object(l.j)(0),n=Object(l.j)(),r=Object(l.a)((function(){return e.value?Object(w.b)(e.value):t.placeholder})),o=function(){n.value=window.setInterval((function(){if(e.value!==t.number){var r=(t.number-e.value)/t.speed,o=r>=0?Math.ceil(r):Math.floor(r);e.value=e.value+o}else window.clearInterval(n.value)}),20)};return Object(l.f)((function(){e.value=t.number})),Object(l.k)((function(){return t.number}),(function(){null!=t.number&&setTimeout(o,666)}),{lazy:!0}),function(){return Object(l.c)("span",{},[r.value])}}}),j=n(237),N=Object(l.b)({name:"index",components:{Mammon:j.c,GithubButtonBase:base.a,BadgeNpmDownloads:h,BadgeLastCommit:S,BadgeNpmVersion:I,AnimatedNumber:A},setup:function(t,e){var n=e.root,r=n.$store.getters,o=n.$store.state,_=Object(l.j)(!1),f=Object(l.a)((function(){return o.inited})),h=Object(l.a)((function(){return o.userInfo})),C=Object(l.a)((function(){return o.organizations})),y=Object(l.a)((function(){return r[c.StoreNames.OwnRepositories]})),S=Object(l.j)(!1),O=Object(l.a)((function(){return y.value.filter((function(t){return!!t.homepage&&t.homepage!==v.d.PROJECT_URL}))})),k=Object(l.a)((function(){return y.value.reduce((function(t,e){return e.stargazers_count+t}),0)})),I=Object(l.a)((function(){return Object.values(o.npmPackagesDownloadsMap).reduce((function(t,e){return t+e}),0)})),w=Object(l.a)((function(){return o.isMobileDevice})),A=!Object(l.a)((function(){return o.isChinaGuest})).value||w.value?j.a.GoogleAdSense1:Math.ceil(10*Math.random())>7?j.a.Aliyun:j.a.GoogleAdSense1;return Object(l.k)((function(){return f}),(function(t){t&&m.a&&window.setTimeout((function(){_.value=!0}),666)})),Object(l.g)((function(){S.value=!0,n.$store.dispatch(c.StoreNames.GetOrganizations).finally((function(){S.value=!1}))})),{inited:f,userInfo:h,repositories:y,organizations:C,exampleRepositories:O,repositorieStarTotal:k,packageDownloadTotal:I,isNPMPackage:function(t){return r[c.StoreNames.NPMRepositories].map((function(t){return t.name})).includes(t)},isFetchingOrganizations:S,enableAd:_,adProvider:A,getOrganizationUrl:d.d,githubUID:v.d.GITHUB_UID,githubFollowersUrl:v.d.GITHUB_FOLLOWERS_URL,githubSponsorsUrl:v.d.GITHUB_SPONSORS_URL}}}),x=(n(662),Object(f.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-page"},[n("div",{staticClass:"container"},[n("aside",{staticClass:"aside"},[n("transition",{attrs:{name:"module"}},[t.userInfo?n("div",{staticClass:"gravatar"},[n("img",{staticClass:"image",attrs:{draggable:!1,src:t.userInfo.avatar_url}}),t._v(" "),n("h2",[t._v(t._s(t.userInfo.name||"-"))]),t._v(" "),n("p",[t._v(t._s(t.userInfo.bio||"-"))]),t._v(" "),n("p",{staticClass:"sponsor"},[n("github-button-base",{attrs:{link:t.githubSponsorsUrl,count:t.userInfo.followers,countLink:t.githubFollowersUrl,icon:"icon-heart","icon-color":"#ea4aaa"}},[t._v("\n              Sponsor\n            ")])],1)]):t._e()]),t._v(" "),n("transition",{attrs:{name:"module"}},[t.userInfo?n("div",{staticClass:"profile"},[t.userInfo.html_url?n("p",{staticClass:"item"},[n("i",{staticClass:"iconfont icon-github"}),t._v(" "),n("a",{staticClass:"text link",attrs:{target:"_blank",href:t.userInfo.html_url}},[t._v("@"+t._s(t.userInfo.login))])]):t._e(),t._v(" "),t.userInfo.email?n("p",{staticClass:"item"},[n("i",{staticClass:"iconfont icon-mail"}),t._v(" "),n("a",{staticClass:"text link",attrs:{target:"_blank",href:"mailto://"+t.userInfo.email}},[t._v(t._s(t.userInfo.email))])]):t._e(),t._v(" "),t.userInfo.blog?n("p",{staticClass:"item"},[n("i",{staticClass:"iconfont icon-link"}),t._v(" "),n("a",{staticClass:"text link",attrs:{target:"_blank",href:t.userInfo.blog}},[t._v(t._s(t.userInfo.blog))])]):t._e(),t._v(" "),t.userInfo.location?n("span",{staticClass:"item"},[n("i",{staticClass:"iconfont icon-location"}),t._v(" "),n("span",{staticClass:"text"},[t._v(t._s(t.userInfo.location))])]):t._e()]):t._e()])],1),t._v(" "),n("main",{staticClass:"detail"},[n("h3",[t._v("Open Source Software")]),t._v(" "),n("p",{staticClass:"sub-title"},[t._v("I am passionate about open source software and giving back to others. My projects are trusted by thousands of developers all over the world.")]),t._v(" "),n("div",{staticClass:"homepage-statistics"},[n("div",{staticClass:"item"},[n("animated-number",{staticClass:"count",attrs:{number:t.inited?t.repositorieStarTotal:0}}),t._v(" "),t._m(0)],1),t._v(" "),n("div",{staticClass:"item"},[n("a",{staticClass:"sponsor",attrs:{href:t.githubSponsorsUrl,target:"_blank"}},[n("i",{staticClass:"iconfont icon-heart"})])]),t._v(" "),n("div",{staticClass:"item"},[n("animated-number",{staticClass:"count",attrs:{number:t.inited?t.packageDownloadTotal:0}}),t._v(" "),t._m(1)],1)]),t._v(" "),n("hr"),t._v(" "),n("h3",[t._v("Homepages | examples")]),t._v(" "),n("p",{staticClass:"sub-title"},[t._v("Homepages and examples for GitHub repositories.")]),t._v(" "),n("transition",{attrs:{name:"module",mode:"out-in"}},[t.inited?n("ul",{staticClass:"homepage-repo-list"},t._l(t.exampleRepositories,(function(e){return n("li",{key:e.clone_url,staticClass:"item"},[n("div",{staticClass:"wrapper"},[n("span",[n("i",{staticClass:"iconfont icon-link"}),t._v(" "),n("a",{staticClass:"name",attrs:{target:"_blacnk",href:e.homepage}},[t._v(t._s(e.name))]),t._v(" "),e.archived?n("span",{staticClass:"archived"},[t._v("Archived")]):t._e()]),t._v(" "),n("span",{staticClass:"meta"},[e.archived?t._e():[n("transition",{attrs:{name:"module",mode:"out-in"}},[t.isNPMPackage(e.name)?n("badge-npm-downloads",{staticClass:"badge",attrs:{name:e.name}}):n("badge-last-commit",{staticClass:"badge",attrs:{name:e.name}})],1)],t._v(" "),n("span",{staticClass:"star"},[n("i",{staticClass:"iconfont icon-star"}),t._v(" "),n("span",{staticClass:"count"},[t._v(t._s(e.stargazers_count))])])],2)])])})),0):n("p",[t._v("Loading...")])]),t._v(" "),n("hr"),t._v(" "),n("transition",{attrs:{name:"module"}},[t.enableAd?n("div",{staticClass:"index-mammon"},[n("mammon",{attrs:{provider:t.adProvider}})],1):t._e()]),t._v(" "),n("h3",[t._v("Projects")]),t._v(" "),n("p",{staticClass:"sub-title"},[t._v("GitHub repositories that I've built.")]),t._v(" "),n("transition",{attrs:{name:"module",mode:"out-in"}},[t.inited?n("ul",{staticClass:"detail-repo-list"},t._l(t.repositories,(function(e){return n("li",{key:e.clone_url,staticClass:"item"},[n("p",{staticClass:"title"},[n("span",[n("i",{staticClass:"iconfont icon-repo"}),t._v(" "),n("a",{staticClass:"name",attrs:{target:"_blacnk",href:e.html_url}},[t._v(t._s(e.full_name))]),t._v(" "),e.archived?n("span",{staticClass:"archived"},[t._v("Archived")]):t._e()]),t._v(" "),e.archived?t._e():[t.isNPMPackage(e.name)?n("span",{staticClass:"npm"},[n("badge-npm-downloads",{attrs:{interval:"dy",name:e.name}}),t._v(" "),n("badge-npm-version",{attrs:{name:e.name}})],1):n("badge-last-commit",{attrs:{name:e.name}})]],2),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(e.description))]),t._v(" "),n("p",{staticClass:"meta"},[n("span",{staticClass:"item"},[n("i",{staticClass:"iconfont icon-star"}),t._v(" "),n("span",[t._v(t._s(e.stargazers_count))])]),t._v(" "),n("span",{staticClass:"item"},[n("i",{staticClass:"iconfont icon-fork"}),t._v(" "),n("span",[t._v(t._s(e.forks_count))])]),t._v(" "),n("span",{staticClass:"item"},[n("i",{staticClass:"iconfont icon-issue"}),t._v(" "),n("span",[t._v(t._s(e.open_issues_count))])]),t._v(" "),e.license?n("span",{staticClass:"item license"},[n("i",{staticClass:"iconfont icon-law"}),t._v(" "),n("span",[t._v(t._s(e.license.name))])]):t._e(),t._v(" "),e.language?n("span",{staticClass:"item language"},[n("i",{staticClass:"iconfont icon-code"}),t._v(" "),n("span",[t._v(t._s(e.language))])]):t._e()])])})),0):n("p",[t._v("Loading...")])]),t._v(" "),n("hr"),t._v(" "),n("h3",[t._v("Organizations")]),t._v(" "),n("p",{staticClass:"sub-title"},[t._v("GitHub organizations that I've built.")]),t._v(" "),n("transition",{attrs:{name:"module",mode:"out-in"}},[t.isFetchingOrganizations?n("p",[t._v("Loading...")]):n("ul",{staticClass:"homepage-org-list"},[t._l(t.organizations,(function(e){return[e.description?n("li",{key:e.login,staticClass:"item"},[n("div",{staticClass:"wrapper"},[n("img",{staticClass:"logo",attrs:{src:e.avatar_url,alt:e.login}}),t._v(" "),n("div",{staticClass:"content"},[n("a",{staticClass:"name",attrs:{target:"_blacnk",href:t.getOrganizationUrl(e.login)}},[t._v(t._s(e.login))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(e.description))])])])]):t._e()]}))],2)])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"name"},[e("i",{staticClass:"iconfont icon-star"}),this._v(" "),e("span",[this._v("Total GitHub stars")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"name"},[e("i",{staticClass:"iconfont icon-npm"}),this._v(" "),e("span",[this._v("Total NPM downloads")])])}],!1,null,"44024e58",null));x.options.__file="index.vue";e.default=x.exports}}]);