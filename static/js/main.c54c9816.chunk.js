(this["webpackJsonpmy-todo-app"]=this["webpackJsonpmy-todo-app"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(1),c=n.n(a),i=n(8),r=n.n(i),d=n(7),s=n(2),l=n(3),u=n(5),p=n(4),h={backgroundColor:"#678c89",color:"#fff",padding:"10px 15px"};var j=function(){return Object(o.jsx)("header",{style:h,children:Object(o.jsx)("h1",{style:{fontSize:"25px",lineHeight:"1.447em",margin:"0px"},children:"Simple TODO App"})})},b={fontStyle:"italic",color:"#c5e2d2",textDecoration:"line-through"},m=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.props.todo,n=e.completed,a=e.id,c=e.title;return Object(o.jsxs)("li",{className:"todo-item",children:[Object(o.jsx)("input",{type:"checkbox",checked:n,onChange:function(){return t.props.handleChange(a)}}),Object(o.jsx)("span",{style:n?b:null,children:c}),Object(o.jsx)("button",{className:"btn-style",onClick:function(){return t.props.deleteTodo(a)},children:" X"})]})}}]),n}(c.a.Component);var O=function(t){return Object(o.jsx)("div",{children:t.todos.map((function(e){return Object(o.jsx)(m,{todo:e,handleChange:t.handleChange,deleteTodo:t.deleteTodo},e.id)}))})},f=n(9),v=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onChange=function(e){t.setState(Object(f.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{className:"form-container",onSubmit:this.onSubmit,children:[Object(o.jsx)("input",{type:"text",placeholder:"Add Todo...",className:"input-text",name:"title",value:this.state.title,onChange:this.onChange}),Object(o.jsx)("input",{type:"submit",value:"Submit",className:"input-submit"})]})}}]),n}(a.Component),x=n(18),g=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={todos:[{id:Object(x.a)(),title:"Setup development environment",completed:!0},{id:Object(x.a)(),title:"Develop website and add component",completed:!1},{id:Object(x.a)(),title:"Deploy to Live server",completed:!1}]},t.handleChange=function(e){t.setState({todos:t.state.todos.map((function(t){return e===t.id&&(t.completed=!t.completed),t}))})},t.deleteTodo=function(e){t.setState({todos:Object(d.a)(t.state.todos.filter((function(t){return e!==t.id})))})},t.addTodo=function(e){var n={id:Object(x.a)(),title:e,completed:!1};t.setState({todos:[].concat(Object(d.a)(t.state.todos),[n])})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(j,{}),Object(o.jsx)(v,{addTodo:this.addTodo}),Object(o.jsx)(O,{todos:this.state.todos,handleChange:this.handleChange,deleteTodo:this.deleteTodo})]})}}]),n}(c.a.Component);n(15);r.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c54c9816.chunk.js.map