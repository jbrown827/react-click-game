(this["webpackJsonpclick-game"]=this["webpackJsonpclick-game"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://m0.joe.co.uk/wp-content/uploads/2019/06/21182406/580b57fcd9996e24bc43c4df.png"},{"id":2,"image":"https://m0.joe.co.uk/wp-content/uploads/2019/06/21154557/1200px-Aston_Villa_FC_crest_2016.svg_.png"},{"id":3,"image":"https://m0.joe.co.uk/wp-content/uploads/2019/06/21154338/1200px-Brighton__Hove_Albion_logo.svg_.png"},{"id":4,"image":"https://m0.joe.co.uk/wp-content/uploads/2019/06/21165447/chelsea-png-file-chelsea-fc-svg-600.png"},{"id":5,"image":"https://m0.joe.co.uk/wp-content/uploads/2019/06/21161236/1200px-Crystal_Palace_FC_logo.svg_.png"},{"id":6,"image":"https://m0.joe.co.uk/wp-content/uploads/2019/06/21171532/everton-5.jpg"},{"id":7,"image":"https://m0.joe.co.uk/wp-content/uploads/2020/09/09105116/leeds.png"},{"id":8,"image":"https://m0.joe.co.uk/wp-content/uploads/2019/06/21171952/580b57fcd9996e24bc43c4e8.png"},{"id":9,"image":"https://m0.joe.co.uk/wp-content/uploads/2019/06/21182801/1200px-Liverpool_FC.svg_.png"},{"id":10,"image":"https://m0.joe.co.uk/wp-content/uploads/2019/06/21154544/1200px-Manchester_City_FC_badge.svg_.png"},{"id":11,"image":"https://m0.joe.co.uk/wp-content/uploads/2019/06/21161251/manchester-united-logo-premier-league-large-soccer.jpg"},{"id":12,"image":"https://m0.joe.co.uk/wp-content/uploads/2019/06/21172931/1200px-FC_Southampton.svg_.png"}]')},,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),o=c(4),a=c.n(o),i=(c(13),c(5)),r=c(6),p=c(8),d=c(7),l=(c(14),c(0)),u=function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("nav",{className:"navbar fixed-top",children:[Object(l.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Navbar"}),Object(l.jsx)("span",{children:e.msg}),Object(l.jsxs)("span",{children:["Score: ",e.score," | Top Score: ",e.topScore]})]})})},m=(c(16),function(){return Object(l.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"display-4",children:"Click Game"}),Object(l.jsx)("h2",{className:"lead",children:"Click on an image to earn points, but dont click on it more than once!"})]})})}),g=(c(17),function(e){return Object(l.jsx)("div",{className:"col col-md-3 my-1",children:Object(l.jsx)("div",{className:"card",onClick:function(){return e.pickedCard(e.id)},children:Object(l.jsx)("img",{src:e.image,className:"card-img-top",height:"100px",width:"100px"})})})}),j=(c(18),function(){return Object(l.jsx)("div",{className:"container-fluid",children:"some text"})}),h=(c(19),function(e){return Object(l.jsx)("div",{className:"row",children:e.children})}),b=c(3),f=function(e){Object(p.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={clubs:b,score:0,topScore:0,msg:"Click an image to begin!",pickedClubs:[]},e.clubShuffle=function(){b.sort((function(e,t){return.5-Math.random()}))},e.pickedCard=function(t){-1!==e.state.pickedClubs.indexOf(t)?e.setState({score:0,pickedClubs:[],msg:"Game Over, Try Again!"}):(e.state.pickedClubs.push(t),e.setState({score:e.state.score+1,msg:"You guessed correctly!"}),e.state.score>=e.state.topScore&&e.setState({topScore:e.state.score+1})),e.clubShuffle()},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{msg:this.state.msg,score:this.state.score,topScore:this.state.topScore}),Object(l.jsx)(m,{}),Object(l.jsx)(h,{children:this.state.clubs.map((function(t){return Object(l.jsx)(g,{id:t.id,image:t.image,pickedCard:e.pickedCard},t.id)}))}),Object(l.jsx)(j,{})]})}}]),c}(n.Component),x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),o(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),x()}],[[20,1,2]]]);
//# sourceMappingURL=main.cecc2954.chunk.js.map