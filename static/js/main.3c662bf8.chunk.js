(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/bg1.780db145.jpg"},13:function(e,t,a){e.exports=a(23)},18:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),o=a.n(r),c=(a(18),a(12)),s=a(6),i=a(1),d=a(2),m=a(4),u=a(3),h=a(5),b=a(9);var g=function(e){console.log(e);var t=["69A0FF","#d64161","#D469FF","#FFEE75","#FFEFB5","#463B80"],a=t[Math.floor(Math.random()*t.length)];return l.a.createElement("div",{className:"shadow-lg p-3 mb-5 rounded",style:{backgroundColor:a}},l.a.createElement("h1",{onClick:e.handleDelete,id:e.id},e.item," ",l.a.createElement(b,{name:"check",className:"check"})))},p=a(7),f=a.n(p),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={currentDate:f()(new Date).format("YYYY-MM-DD"),day:f()(new Date).format("dddd")},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"header text-light",style:{backgroundColor:"black"}},this.state.currentDate," ",this.state.day))}}]),t}(n.Component),E=a(9),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={todoItem:"",list:["Feed the baby"]},a.loadData=function(){var e=localStorage.getItem("todo");e&&a.setState({list:JSON.parse(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(s.a)({},n,l))},a.handleSubmit=function(e){e.preventDefault(),console.log(e.target);var t=[];t.push.apply(t,Object(c.a)(a.state.list)),t.push(a.state.todoItem),localStorage.setItem("todo",JSON.stringify(t)),a.setState({todoItem:""}),a.loadData()},a.handleDelete=function(e){e.preventDefault(),console.log(e.target.id);var t=a.state.list.filter((function(t){return t!=e.target.id}));localStorage.setItem("todo",JSON.stringify(t)),a.setState({list:t})},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e,t=this;return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-2"}),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-info rounded col-lg-8 d-flex align-items-stretch",style:{width:"500px"}},l.a.createElement("div",{class:"card-title text-center"},l.a.createElement(v,null)),l.a.createElement("input",{className:"shadow-lg p-3 mb-5 bg-white rounded",type:"text",name:"todoItem",value:this.state.todoItem,onChange:this.handleInputChange}),this.state.list.map((function(e){return l.a.createElement(g,{key:e,id:e,item:e,handleDelete:t.handleDelete})})),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",(e={className:"text-center",type:"submit",onClick:this.handleSubmit},Object(s.a)(e,"className","submit"),Object(s.a)(e,"style",{width:"80px",height:"80px","line-height":"80px",border:"2px solid #f5f5f5","border-radius":"50%",color:"#f5f5f5","text-align":"center","text-decoration":"none",background:"#555777","box-shadow":"0 0 3px gray","font-size":"20px","font-weight":"bold"}),e),l.a.createElement(E,{name:"plus"}))))),l.a.createElement("div",{className:"col-md-2"}))}}]),t}(n.Component),w=a(11),k=a.n(w);var x=function(){var e={row:{backgroundImage:"url("+k.a+")",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat",height:"1000px"}};return l.a.createElement("div",{className:"row",style:e.row},l.a.createElement("div",{className:"col-md-2"}),l.a.createElement("div",{className:"col-md-8"},l.a.createElement(y,null)),l.a.createElement("div",{className:"col-md-2"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.3c662bf8.chunk.js.map