(this["webpackJsonpcart-shop"]=this["webpackJsonpcart-shop"]||[]).push([[0],{13:function(t,e,r){},15:function(t,e,r){"use strict";r.r(e);var n=r(1),a=r.n(n),c=r(8),o=r.n(c),i=(r(13),r(6)),s=r(2),u=r(3),p=r(5),b=r(4),l=r(0),d={title:{marginBottom:"30px"}},j=function(t){Object(p.a)(r,t);var e=Object(b.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(l.jsx)("h1",{style:d.title,children:"Tienda"})}}]),r}(n.Component),h={layout:{display:"flex",color:"#0A283E",alignItems:"center",backgroundColor:"#FFF",flexDirection:"column"},container:{width:"1200px"}},O=function(t){Object(p.a)(r,t);var e=Object(b.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(l.jsx)("div",{style:h.layout,children:Object(l.jsx)("div",{style:h.container,children:this.props.children})})}}]),r}(n.Component),x={logo:{fontSize:"2rem",fontWeight:"700"}},f=function(t){Object(p.a)(r,t);var e=Object(b.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(l.jsx)("div",{style:x.logo,children:"Shop"})}}]),r}(n.Component),g={bubbleAlert:{color:"#FFF",widht:"20px",fontSize:".9rem",padding:"2px 10px",borderRadius:"15px",backgroundColor:"#E9725A"}},m=function(t){Object(p.a)(r,t);var e=Object(b.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"getItemsInCart",value:function(t){if(!t)return"";return t>9?"9+":t}},{key:"render",value:function(){var t=this.props.value;return Object(l.jsx)("span",{style:g.bubbleAlert,children:this.getItemsInCart(t)})}}]),r}(n.Component),v={cartDetail:{right:50,marginTop:30,width:"300px",borderRadius:"5px",position:"absolute",backgroundColor:"#FFF",boxShadow:"1px 5px 5px rgb(0,0,0, 0.3)"},ul:{margin:"0",padding:"0"},product:{display:"flex",alignItems:"center",padding:"25px 20px",listStyleType:"none",borderBottom:"solid 1px #eee",justifyContent:"space-between"}},y=function(t){Object(p.a)(r,t);var e=Object(b.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props.cart;return console.log(t),Object(l.jsx)("div",{style:v.cartDetail,children:Object(l.jsx)("ul",{style:v.ul,children:t.map((function(t){return Object(l.jsxs)("li",{style:v.product,children:[Object(l.jsx)("img",{src:t.img,alt:t.name,width:"50",height:"32"}),t.name,Object(l.jsx)("span",{children:t.count})]},t.name)}))})})}}]),r}(n.Component),C={cart:{color:"#FFF",border:"none",fontSize:"1rem",cursor:"pointer",borderRadius:"5px",padding:"12px 28px",backgroundColor:"#359A2D"},bubble:{top:20,left:12,position:"relative"}},w=function(t){Object(p.a)(r,t);var e=Object(b.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props,e=t.cart,r=t.isCartVisible,n=t.showCart,a=e.reduce((function(t,e){return t+e.count}),0);return Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{style:C.bubble,children:a>0&&Object(l.jsx)(m,{value:a})}),Object(l.jsx)("button",{onClick:n,style:C.cart,children:"Cart"}),r&&Object(l.jsx)(y,{cart:e})]})}}]),r}(n.Component),k={navbar:{display:"flex",height:"100px",padding:"0 50px",position:"relative",alignItems:"center",flexDirection:"row",justifyContent:"space-between",boxShadow:"0 2px 3px rgb(0,0,0, 0.1)"}},F=function(t){Object(p.a)(r,t);var e=Object(b.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props,e=t.cart,r=t.isCartVisible,n=t.showCart;return Object(l.jsxs)("nav",{style:k.navbar,children:[Object(l.jsx)(f,{}),Object(l.jsx)(w,{cart:e,showCart:n,isCartVisible:r})]})}}]),r}(n.Component),S={button:{color:"#FFF",border:"none",cursor:"pointer",borderRadius:"5px",padding:"15px 20px",backgroundColor:"#0A283E"}},T=function(t){Object(p.a)(r,t);var e=Object(b.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(l.jsx)("button",Object(i.a)({style:S.button},this.props))}}]),r}(n.Component),A={producto:{width:"30%",borderRadius:"5px",padding:"10px 15px",border:"solid 1px #eee",boxShadow:"0 5px 5px rgb(0,0,0, 0.1)"},img:{width:"100%"}},I=function(t){Object(p.a)(r,t);var e=Object(b.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props,e=t.producto,r=t.addToCart;return Object(l.jsxs)("div",{style:A.producto,children:[Object(l.jsx)("img",{style:A.img,src:e.img,alt:e.name}),Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("p",{children:e.price}),Object(l.jsx)(T,{onClick:function(){return r(e)},children:"Agregar al Carrito"})]})}}]),r}(n.Component),V={productos:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},D=function(t){Object(p.a)(r,t);var e=Object(b.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props,e=t.productos,r=t.addToCart;return Object(l.jsx)("div",{style:V.productos,children:e.map((function(t){return Object(l.jsx)(I,{producto:t,addToCart:r},t.name)}))})}}]),r}(n.Component),R=function(t){Object(p.a)(r,t);var e=Object(b.a)(r);function r(){var t;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={productos:[{name:"Tomate",price:1500,img:"./productos/tomate.jpeg"},{name:"Arbejas",price:2500,img:"./productos/arbejas.jpeg"},{name:"Lechuga",price:500,img:"./productos/lechuga.jpeg"}],cart:[],isCartVisible:!1},t.addToCart=function(e){var r=t.state.cart;if(r.find((function(t){return t.name===e.name}))){var n=r.map((function(t){return t.name===e.name?Object(i.a)(Object(i.a)({},t),{},{count:t.count+1}):t}));return t.setState({cart:n})}return t.setState({cart:t.state.cart.concat(Object(i.a)(Object(i.a)({},e),{},{count:1}))})},t.showCart=function(){0===t.state.cart.length||t.setState({isCartVisible:!t.state.isCartVisible})},t}return Object(u.a)(r,[{key:"render",value:function(){var t=this.state.isCartVisible;return Object(l.jsxs)("div",{children:[Object(l.jsx)(F,{cart:this.state.cart,showCart:this.showCart,isCartVisible:t}),Object(l.jsxs)(O,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(D,{productos:this.state.productos,addToCart:this.addToCart})]})]})}}]),r}(n.Component),B=R,E=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,16)).then((function(e){var r=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;r(t),n(t),a(t),c(t),o(t)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root")),E()}},[[15,1,2]]]);
//# sourceMappingURL=main.dc687aab.chunk.js.map