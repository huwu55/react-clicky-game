(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,a,t){},,,,,,,,function(e,a,t){e.exports=t.p+"static/media/reborn-p0.a371fb4f.jpg"},function(e,a,t){e.exports=t.p+"static/media/reborn-p1.ec2a8934.jpg"},function(e,a,t){e.exports=t.p+"static/media/reborn-p2.13b4e24a.jpg"},function(e,a,t){e.exports=t.p+"static/media/reborn-p3.1487b7a1.jpg"},function(e,a,t){e.exports=t.p+"static/media/reborn-p4.67c0371c.jpg"},function(e,a,t){e.exports=t.p+"static/media/reborn-p5.5382f582.jpg"},function(e,a,t){e.exports=t.p+"static/media/reborn-p6.83790587.jpg"},function(e,a,t){e.exports=t.p+"static/media/reborn-p7.60014935.jpg"},function(e,a,t){e.exports=t.p+"static/media/reborn-p8.4c3f4e65.jpg"},function(e,a,t){e.exports=t.p+"static/media/reborn-p9.688ecfba.jpg"},function(e,a,t){e.exports=t.p+"static/media/reborn-p10.8c0bff9e.jpg"},function(e,a,t){e.exports=t.p+"static/media/reborn-p11.07376d39.jpg"},function(e,a,t){e.exports=t.p+"static/media/reborn-p12.42ca8948.jpg"},function(e,a,t){e.exports=t.p+"static/media/reborn-p13.df074313.jpg"},function(e,a,t){e.exports=t.p+"static/media/reborn-p14.48ac6712.jpg"},function(e,a,t){e.exports=t.p+"static/media/reborn-p15.ea67fef8.jpg"},function(e,a,t){e.exports=t(31)},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(8),i=t.n(r),l=t(2),o=t(3),s=t(5),m=t(4),p=t(6),u=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).state={score:0,topScore:0,comment:"Click an image to begin!"},e}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-default fixed-top navbar-light bg-light"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("span",{className:"navbar-brand mb-0 h1"},"React Clicky Game"),c.a.createElement("span",{className:"comment h6"},this.state.comment),c.a.createElement("span",{className:"score"},"score: ",this.state.score),c.a.createElement("span",{className:"topScore"},"Top Score: ",this.state.topScore)))}}]),a}(c.a.Component);t(1);var f=function(){return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",{className:"display-4 gameName"},"React Clicky Game!"),c.a.createElement("hr",{className:"my-4"}),c.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click on any more than once!"))};var d=function(e){return c.a.createElement("main",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-10"},e.children)))};var b=function(e){return c.a.createElement("div",{key:e.url,className:"click-item col-3",onClick:e.shuffle},c.a.createElement("img",{src:e.url,"aria-label":"click item",alt:"reborn",className:"img-thumbnail"}))};var g=function(){return c.a.createElement("footer",{className:"footer bg-light"},c.a.createElement("p",null,"React Clicky Game @Huiling Wu"))},k=t(9),h=t.n(k),j=t(10),E=t.n(j),v=t(11),x=t.n(v),N=t(12),y=t.n(N),O=t(13),C=t.n(O),w=t(14),S=t.n(w),G=t(15),R=t.n(G),J=t(16),M=t.n(J),B=t(17),H=t.n(B),I=t(18),T=t.n(I),W=t(19),q=t.n(W),z=t(20),A=t.n(z),D=t(21),F=t.n(D),K=t(22),L=t.n(K),P=t(23),Q=t.n(P),U=t(24),V=t.n(U),X=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).shuffle=function(){for(var a=e.state.images,t=15;t>0;t--){var n=Math.floor(Math.random()*(t+1)),c=[a[n],a[t]];a[t]=c[0],a[n]=c[1]}e.setState({images:a})},e.state={images:[{url:h.a,clicked:!1},{url:E.a,clicked:!1},{url:x.a,clicked:!1},{url:y.a,clicked:!1},{url:C.a,clicked:!1},{url:S.a,clicked:!1},{url:R.a,clicked:!1},{url:M.a,clicked:!1},{url:H.a,clicked:!1},{url:T.a,clicked:!1},{url:q.a,clicked:!1},{url:A.a,clicked:!1},{url:F.a,clicked:!1},{url:L.a,clicked:!1},{url:Q.a,clicked:!1},{url:V.a,clicked:!1}]},e}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(u,null),c.a.createElement(f,null),c.a.createElement(d,null,this.state.images.map(function(a,t){return c.a.createElement(b,{url:a.url,shuffle:e.shuffle})})),c.a.createElement(g,null))}}]),a}(c.a.Component);i.a.render(c.a.createElement(X,null),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.a11ed18d.chunk.js.map