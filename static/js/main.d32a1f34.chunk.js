(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,t,a){},173:function(e,t,a){},175:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),c=a.n(i),o=(a(72),a(54)),m=a(55),l=a(65),s=a(56),u=a(66),g=(a(74),a(58)),p=a.n(g),d=a(59),f=a.n(d),h=a(60),S=a.n(h),E=a(61),b=a.n(E),k=a(9),x=a.n(k),v=function(e){return r.a.createElement(x.a,{item:!0,xs:6,md:4},r.a.createElement(p.a,{onClick:function(){return e.handleSelect(e.id)},className:"card"},r.a.createElement(f.a,null,r.a.createElement(S.a,null,r.a.createElement(b.a,{className:"media",image:e.image,title:e.name})))))},w=a(34),y=(a(162),a(26)),j=a(62),O=a.n(j),C=a(63),B=a.n(C),N=a(20),A=a.n(N);var G=Object(y.withStyles)(function(e){return{root:Object(w.a)({flexGrow:1,marginBottom:"90px"},e.breakpoints.down("sm"),{marginBottom:"140px"}),rightToolbar:Object(w.a)({marginLeft:"auto",textAlign:"right"},e.breakpoints.down("sm"),{textAlign:"center"})}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(O.a,{position:"fixed",color:"default"},r.a.createElement(B.a,null,r.a.createElement(x.a,{container:!0},r.a.createElement(x.a,{item:!0,xs:12,sm:6},r.a.createElement(A.a,{variant:"h6",color:"inherit"},r.a.createElement("p",null,"Clicky Game"))),r.a.createElement(x.a,{justify:"flex-end",item:!0,xs:12,sm:6},r.a.createElement(A.a,{className:t.rightToolbar,variant:"h6",color:"inherit"},r.a.createElement("p",null,"Current Score: ",e.currentScore," | Top Score: ",e.topScore," ")))))))});a(173);var T=Object(y.withStyles)(function(e){return{footer:{padding:"10px",textAlign:"center",backgroundColor:"rgb(245, 245, 245)"},link:{textDecoration:"none",color:"black"}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.footer},r.a.createElement(A.a,{variant:"h6",color:"inherit"},r.a.createElement("p",null,"Create-React-App Homework"),r.a.createElement("a",{className:t.link,href:"https://github.com/mearatjames/clickygame"},r.a.createElement("p",null,"Github Repository"))))}),D=a(64),J=(a(175),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={items:D,selected:[],topScore:0,currentScore:0},a.handleSelect=function(e){-1===a.state.selected.indexOf(e)?(a.state.selected.push(e),a.setState({currentScore:a.state.currentScore+1}),a.state.currentScore>=a.state.topScore?a.setState({topScore:a.state.topScore+1}):a.setState({topScore:a.state.topScore})):a.setState({currentScore:0,selected:[]});var t=a.state.items.sort(function(){return.5-Math.random()});a.setState({items:t})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{currentScore:this.state.currentScore,topScore:this.state.topScore}),r.a.createElement(x.a,{container:!0,justify:"space-around",alignContent:"center"},this.state.items.map(function(t){return r.a.createElement(v,{handleSelect:e.handleSelect,key:t.id,id:t.id,name:t.name,image:t.image})})),r.a.createElement(T,null))}}]),t}(n.Component));c.a.render(r.a.createElement(J,null),document.getElementById("root"))},64:function(e){e.exports=[{id:1,name:"Boat",image:"./images/1.png"},{id:2,name:"Thumb Up",image:"./images/2.png"},{id:3,name:"Bicycle",image:"./images/3.png"},{id:4,name:"Sinking Boat",image:"./images/4.png"},{id:5,name:"Book",image:"./images/5.png"},{id:6,name:"Shock",image:"./images/6.png"},{id:7,name:"Camera",image:"./images/7.png"},{id:8,name:"Cook",image:"./images/8.png"},{id:9,name:"Drink",image:"./images/9.png"},{id:10,name:"Sushi",image:"./images/10.png"},{id:11,name:"Workout",image:"./images/11.png"},{id:12,name:"Gift",image:"./images/12.png"}]},67:function(e,t,a){e.exports=a(177)},72:function(e,t,a){},74:function(e,t,a){}},[[67,2,1]]]);
//# sourceMappingURL=main.d32a1f34.chunk.js.map