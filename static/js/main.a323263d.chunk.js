(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){e.exports=n.p+"static/media/logo_home.d71f794b.png"},101:function(e,t,n){e.exports=n.p+"static/media/REVERIE.eaff8c19.mp3"},102:function(e,t,n){e.exports=n.p+"static/media/CURIOSITE.e45dc7b1.mp3"},103:function(e,t,n){e.exports=n.p+"static/media/DEGOUT.2fed237e.mp3"},104:function(e,t,n){e.exports=n.p+"static/media/SERENITE.7cddf9cd.mp3"},105:function(e,t,n){e.exports=n.p+"static/media/TRISTESSE.c765599b.mp3"},106:function(e,t,n){e.exports=n.p+"static/media/ENNUI.fa027426.mp3"},107:function(e,t,n){e.exports=n.p+"static/media/REVERIE.39f94fa6.mp3"},108:function(e,t,n){e.exports=n.p+"static/media/CURIOSITE.1130de13.mp3"},109:function(e,t,n){e.exports=n.p+"static/media/DEGOUT.a172240c.mp3"},110:function(e,t,n){e.exports=n.p+"static/media/SERENITE.acaf9441.mp3"},111:function(e,t,n){e.exports=n.p+"static/media/TRISTESSE.861dde3b.mp3"},112:function(e,t,n){e.exports=n.p+"static/media/ENNUI.3a880d2f.mp3"},113:function(e,t,n){e.exports=n.p+"static/media/partOne.a08246b4.mp3"},114:function(e,t,n){e.exports=n.p+"static/media/partTwo.7cb04eb9.mp3"},115:function(e,t,n){e.exports=n.p+"static/media/final.f6e4597c.mp3"},119:function(e,t,n){e.exports=n(308)},124:function(e,t,n){},126:function(e,t,n){},128:function(e,t,n){},130:function(e,t,n){e.exports=n.p+"static/media/home.13bfc00f.mp3"},142:function(e,t,n){},144:function(e,t,n){},151:function(e,t,n){},308:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(99),i=n.n(r),c=(n(124),n(6)),l=n(7),s=n(9),u=n(10),m=n(11),d=(n(126),n(310)),f=(n(128),n(59),n(130),n(100)),h=n.n(f),p=n(101),b=n.n(p),v=n(102),y=n.n(v),g=n(103),E=n.n(g),k=n(104),C=n.n(k),x=n(105),O=n.n(x),T=n(106),w=n.n(T),j=n(107),F=n.n(j),S=n(108),R=n.n(S),q=n(109),N=n.n(q),M=n(110),I=n.n(M),P=n(111),K=n.n(P),D=n(112),A=n.n(D),H=n(113),U=n.n(H),J=n(114),z=n.n(J),L=n(115),G=n.n(L),B=(Object.freeze({CHOICE:Symbol("choice"),JSX:Symbol("jsx")}),{title:a.a.createElement(a.a.Fragment,null,"Dans les 2 sens"),subtitle:"By The Musemotifs",subsubtitle:"Prenez le casque situ\xe9 \xe0 votre droite",actionButtonName:"D\xc9MARRER",redirectTo:"choice/questionOne",logo:h.a,audio:void 0});function V(e,t){return{artworkKey:e,colorPalette:t}}var Q=[V("tristesse",["#3f4f7e","#303c80","#393838"]),V("reverie",["#7D2A48","#DF9696","#69aca7"]),V("curiosite",["#F9DC00","#CF4C2E","#56c1d9"]),V("degout",["#83f949","#5e443c","#6a2b25"]),V("serenite",["#df86d4","#b8b8df","#46AE50"]),V("ennui",["#675590","#9ccfa3","#cfa164"])],X={host:"192.168.43.76",port:5e3};function W(e,t,n){return{red:e,green:t,blue:n}}function $(){return a.a.createElement(a.a.Fragment,null,"Laissez vous porter par la musique et \xe9coutez ",a.a.createElement("strong",null,"Auguste Herbin"),"...")}var _={questionOne:{audio:U.a,text:a.a.createElement(a.a.Fragment,null,"Vous \xeates face au tableau ",a.a.createElement("br",null),a.a.createElement("em",null,'"Composition sur le mot Cheval" (1948)'),a.a.createElement("br",null)," d'",a.a.createElement("strong",null,"Auguste Herbin")),subtext:"Que vous inspire cette oeuvre ?",choices:[{name:"Ennui",artworkKey:"ennui",redirectTo:"choice/ennui"},{name:"R\xeaverie",artworkKey:"reverie",redirectTo:"choice/reverie"},{name:"Tristesse",artworkKey:"tristesse",redirectTo:"choice/tristesse"},{name:"S\xe9r\xe9nit\xe9",artworkKey:"serenite",redirectTo:"choice/serenite"},{name:"Curiosit\xe9",artworkKey:"curiosite",redirectTo:"choice/curiosite"},{name:"D\xe9go\xfbt",artworkKey:"degout",redirectTo:"choice/degout"}]},questionTwo:{audio:z.a,subtext:"Et maintenant, comment vous sentez-vous ?",choices:[{name:"Ennuy\xe9",artworkKey:"ennui",redirectTo:"final/ennui"},{name:"R\xeaveur",artworkKey:"reverie",redirectTo:"final/reverie"},{name:"Triste",artworkKey:"tristesse",redirectTo:"final/tristesse"},{name:"Serein",artworkKey:"serenite",redirectTo:"final/serenite"},{name:"Curieux",artworkKey:"curiosite",redirectTo:"final/curiosite"},{name:"D\xe9go\xfbt\xe9",artworkKey:"degout",redirectTo:"final/degout"}]},ennui:{audio:A.a,ledColor:W(16,0,29),text:$(),choices:[{name:"J'ai fini d'\xe9couter",redirectTo:"choice/questionTwo"}]},reverie:{audio:F.a,ledColor:W(102,43,36),text:$(),choices:[{name:"J'ai fini d'\xe9couter",redirectTo:"choice/questionTwo"}]},tristesse:{audio:K.a,text:$(),ledColor:W(0,12,24),choices:[{name:"J'ai fini d'\xe9couter",redirectTo:"choice/questionTwo"}]},serenite:{audio:I.a,ledColor:W(126,211,33),text:$(),choices:[{name:"J'ai fini d'\xe9couter",redirectTo:"choice/questionTwo"}]},curiosite:{audio:R.a,ledColor:W(117,73,1),text:$(),choices:[{name:"J'ai fini d'\xe9couter",redirectTo:"choice/questionTwo"}]},degout:{audio:N.a,ledColor:W(14,13,0),text:$(),choices:[{name:"J'ai fini d'\xe9couter",redirectTo:"choice/questionTwo"}]}},Y={text:a.a.createElement(a.a.Fragment,null,"Voici votre \xe9motion graphique et sonore ",a.a.createElement("br",null),"selon ",a.a.createElement("strong",null,"l'alphabet plastique")," d'Auguste Herbin"),subtext:a.a.createElement(a.a.Fragment,null),audio:G.a,sounds:{reverie:b.a,ennui:w.a,degout:E.a,curiosite:y.a,serenite:C.a,tristesse:O.a}},Z=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"sendColor",value:function(e,t,n){var o={red:e,green:t,blue:n},a=new XMLHttpRequest;a.open("POST","http://10.3.141.1:5000/colorControl",!0),a.setRequestHeader("Content-Type","application/json;charset=UTF-8"),a.send(JSON.stringify(o))}}]),e}(),ee=n(25),te=n.n(ee),ne=function(e){function t(e){var n;return Object(c.a)(this,t),n=Object(s.a)(this,Object(u.a)(t).call(this,e)),(new Z).sendColor(100,100,100),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"GoFullScreen",value:function(){this.state={isFull:!1}}},{key:"openFullscreen",value:function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"homePage"},a.a.createElement("div",{className:"mainGrid"},a.a.createElement("div",{className:"message"},a.a.createElement("img",{src:B.logo,width:250,style:{margin:"auto"},onClick:function(){e.openFullscreen()}}),a.a.createElement("div",{className:"text"},a.a.createElement("div",{className:"small"},B.subsubtitle)),a.a.createElement(d.a,{to:"/built-museomix/"+B.redirectTo,className:"button"},B.actionButtonName),a.a.createElement(te.a,{url:B.audio,loop:!0,controls:!0,width:0,height:0,playing:!0}))))}}]),t}(o.Component),oe=n(312),ae=n(311),re=n(13),ie=(n(142),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onMenuClick=n.onMenuClick.bind(Object(re.a)(Object(re.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onMenuClick",value:function(e){"function"===typeof this.props.onMenuClick&&this.props.onMenuClick(e)}},{key:"menuItems",value:function(){for(var e=this,t=[],n=function(n){var o=e.props.buttons[n],r=o.name;t.push(a.a.createElement("div",{className:"item",key:o.id,onClick:function(){return e.onMenuClick(o)}},r))},o=0;o<this.props.buttons.length;o++)n(o);return a.a.createElement("div",{className:"menuGrid"},t)}},{key:"render",value:function(){return a.a.createElement("div",{className:"menu"},a.a.createElement("div",{className:"gridWrapper"},a.a.createElement("div",{className:"gridMiddleCentered"},this.menuItems())))}}]),t}(o.Component));ie.defaultProps={collections:["configure","your","button","items"]};n(144);var ce=null,le=function(){function e(){return Object(c.a)(this,e),ce||(ce=this),ce}return Object(l.a)(e,[{key:"getChoices",value:function(){return this.choicesMemory}},{key:"pushChoice",value:function(e){this.choicesMemory.push(e)}},{key:"clearChoices",value:function(){this.choicesMemory=[]}}]),e}(),se=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).tryOSC(),n.tryLED(),(new le).clearChoices(),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"goToMenu",value:function(){this.props.history.push("/built-museomix/")}},{key:"buttonClickedForChoice",value:function(e){void 0!==e.artworkKey&&(new le).pushChoice(e.artworkKey);this.props.history.push("/built-museomix/"+e.redirectTo)}},{key:"componentDidUpdate",value:function(){this.tryOSC(),this.tryLED()}},{key:"tryOSC",value:function(){var e=this.props.match.params.key;void 0===_[e]&&(console.log("undefined for key "+e),this.goToMenu());var t=_[e];void 0!==t.oscOrder&&this.sendOSC(t.oscOrder)}},{key:"sendOSC",value:function(e){var t=n(146),o=new t;o.on("open",function(){var n=new t.Message(e);o.send(n),o.close()}),o.open(X)}},{key:"tryLED",value:function(){var e=this.props.match.params.key;void 0===_[e]&&(console.log("undefined for key "+e),this.goToMenu());var t=_[e];void 0!==t.ledColor&&(new Z).sendColor(t.ledColor.red,t.ledColor.green,t.ledColor.blue)}},{key:"getPageStyle",value:function(){var e=this.props.match.params.key;void 0===_[e]&&(console.log("undefined for key "+e),this.goToMenu());var t=_[e];return void 0!==t.ledColor?{backgroundColor:"rgba(".concat(t.ledColor.red,",").concat(t.ledColor.green,",").concat(t.ledColor.blue,",0.5)")}:{}}},{key:"render",value:function(){var e=this,t=this.props.match.params.key;void 0===_[t]&&(console.log("undefined for key "+t),this.goToMenu());var n=_[t],o=n.choices;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"chooserPage",style:this.getPageStyle()},a.a.createElement("div",{className:"message"},a.a.createElement("div",{className:"text small"},n.text),a.a.createElement("div",{className:"text big"},n.subtext)),a.a.createElement(te.a,{url:n.audio,loop:!1,controls:!0,width:0,height:0,playing:!0}),a.a.createElement(ie,{buttons:o,onMenuClick:function(t){e.buttonClickedForChoice(t)}})))}}]),t}(o.Component),ue=(n(151),n(118)),me=125,de=125;function fe(e){return e[Math.floor(he(0,e.length))]}function he(e,t){return Math.floor(Math.random()*t)+e}function pe(){var e=[],t=(new le).getChoices();if(console.log("feelings--\x3e"),console.log(t),void 0===t||void 0===Q)return console.info("DEFAULT CHOICE!!!"),["#7D2A48","#F7A5OC"];for(var n=0;n<t.length;n++){var o=t[n];console.log("for artworkKey :"+o);for(var a=0;a<Q.length;a++){var r=Q[a];r.artworkKey===o&&(console.log("got correct palette"),console.log(r),e.push.apply(e,Object(ue.a)(r.colorPalette)))}}return e}function be(e,t,n){var o=Math.floor(he(1,4));if(1===o)!function(e,t,n,o){e.fillStyle=o,e.fillRect(t.x,t.y,n.x,n.y)}(e,t,{x:me,y:de},n);else if(2===o){var a=Math.floor(he(1,2)),r=0;1===a?r=de:2===a&&(r=2*de),function(e,t,n,o){e.fillStyle=o,e.beginPath(),1===Math.floor(he(1,2))?(e.moveTo(t.x,t.y),e.lineTo(t.x+n.x,t.y),e.lineTo(t.x+n.x/2,t.y-n.y)):(e.moveTo(t.x,t.y-n.y),e.lineTo(t.x+n.x,t.y-n.y),e.lineTo(t.x+n.x/2,t.y)),e.closePath(),e.fill()}(e,t,{x:me,y:r},n)}else 3===o?function(e,t,n,o){var a={x:t.x+n,y:t.y+n};e.fillStyle=o,e.beginPath(),e.arc(a.x,a.y,n,0,2*Math.PI),e.fill()}(e,t,me/2,n):4===o&&function(e,t,n,o){var a={x:t.x+n,y:t.y+n};e.fillStyle=o,e.beginPath(),e.arc(a.x,a.y,n,0,Math.PI),e.fill()}(e,t,me/2,n)}var ve=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs.canvas.getContext("2d");e.fillStyle=fe(pe()),e.fillRect(0,0,500,500);for(var t=pe(),n=0;n<500;n+=me)for(var o=de;o<500;o+=de){var a=Math.floor(he(1,15));if(1!==a)a>12&&be(e,{x:n,y:o},fe(t)),be(e,{x:n,y:o},fe(t))}}},{key:"render",value:function(){return a.a.createElement("div",{style:{alignSelf:"center",backgroundColor:"white",padding:"3em",border:"solid 2px dimgray"}},a.a.createElement("canvas",{ref:"canvas",width:500,height:500}))}}]),t}(a.a.Component),ye=function(e){function t(e){var n;Object(c.a)(this,t),n=Object(s.a)(this,Object(u.a)(t).call(this,e));var o=new le;return console.info("solid state memory!!"),console.info(o.getChoices()),(new Z).sendColor(200,100,100),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"goToMenu",value:function(){this.props.history.push("/built-museomix/")}},{key:"render",value:function(){var e=Y.text,t=this.props.match.params.key,n=Y.sounds[t];return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"finalPage"},a.a.createElement(d.a,{to:"/built-museomix/",className:"button"},"Retour \xe0 l'accueil"),a.a.createElement("div",{className:"message"},a.a.createElement("div",{className:"text big"},e)),a.a.createElement(ve,{class:"image"}),a.a.createElement("div",{className:"message"},a.a.createElement("div",{className:"text small"},Y.subtext)),a.a.createElement("br",null),a.a.createElement("br",null)),a.a.createElement(te.a,{url:n,loop:!1,controls:!1,width:0,height:0,playing:!0}))}}]),t}(o.Component),ge=(n(309),n(116)),Ee=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={red:0,green:0,blue:0},n.handleChange.bind(Object(re.a)(Object(re.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"httpRequest",value:function(e,t,n){}},{key:"manualRequest",value:function(e){(new Z).sendColor(e.red,e.green,e.blue)}},{key:"handleChange",value:function(e,t){console.log(e),this.manualRequest({red:e.rgb.r,green:e.rgb.g,blue:e.rgb.b})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"homePage"},a.a.createElement(ge.SketchPicker,{onChange:function(t,n){e.handleChange(t,n)}}),";")}}]),t}(o.Component),ke=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).openFullscreen.bind(Object(re.a)(Object(re.a)(n))),n.goToHome.bind(Object(re.a)(Object(re.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"openFullscreen",value:function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}},{key:"goToHome",value:function(){this.props.history.push("/built-museomix/")}},{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"ADMIN PAGE"),a.a.createElement("button",{onClick:function(){e.openFullscreen()}},"REQUEST FULL SCREEN"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){e.goToHome()}},"GO BACK TO HOME"))}}]),t}(o.Component),Ce=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(oe.a,null,a.a.createElement("div",null,a.a.createElement(ae.a,{exact:!0,path:"/built-museomix/",component:ne}),a.a.createElement(ae.a,{path:"/built-museomix/choice/:key",component:se}),a.a.createElement(ae.a,{path:"/built-museomix/final/:key",component:ye}),a.a.createElement(ae.a,{path:"/built-museomix/ledTester",component:Ee}),a.a.createElement(ae.a,{path:"/built-museomix/admin",component:ke}))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Ce,null),document.getElementById("root"))},59:function(e,t,n){e.exports=n.p+"static/media/happy.c13bab76.mp3"}},[[119,2,1]]]);
//# sourceMappingURL=main.a323263d.chunk.js.map