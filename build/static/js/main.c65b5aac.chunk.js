(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports=t(27)},23:function(e,a,t){},25:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),c=t.n(r),s=(t(11),t(18),t(19),t(21),t(23),t(2)),i=t(3),m=t(5),o=t(4),p=t(6),d=t(1),u=(t(25),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid title-bar text-center pt-3 pb-3"},l.a.createElement("h3",null,"Hagamos Numeros"))}}]),a}(l.a.Component)),y=t(12),v=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).delete=t.delete.bind(Object(d.a)(Object(d.a)(t))),t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"delete",value:function(e){this.props.onRemovePayPerson(e)}},{key:"render",value:function(){var e=this,a=this.props.payPeople.map(function(a){return l.a.createElement("li",{className:"list-group-item pt-1 pb-1",key:a.key},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4 pl-2 pr-2"},l.a.createElement("p",{className:"mb-0"},a.name)),l.a.createElement("div",{className:"col-4 pl-2 pr-2"},l.a.createElement("span",{className:"type-tag pl-2 pr-2 align-middle mb-0"},a.type)),l.a.createElement("div",{className:"col-3 pl-2 pr-2"},l.a.createElement("p",{className:"currency currency-positive text-right mb-0"},"$",a.payed)),l.a.createElement("div",{className:"col-1 pr-0 pl-0"},l.a.createElement("i",{className:"material-icons mt-1 i-btn",onClick:function(){return e.delete(a.key)}},"remove_circle_outline"))))}),t=this.props.payPeople.reduce(function(e,a){return e+a.payed},0);return l.a.createElement("div",{className:"container quien-pago"},l.a.createElement("h2",{className:"text-center mt-4"},"Qui\xe9n pag\xf3?"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"row pr-4 pl-4 list-titles"},l.a.createElement("div",{className:"col-4 pl-0 pr-0"},"Nombre"),l.a.createElement("div",{className:"col-4 pl-2 pr-2"},"Puso para"),l.a.createElement("div",{className:"col-3 pl-2 pr-2 text-right"},"Gast\xf3"),l.a.createElement("div",{className:"col-1 pl-2 pr-2"})),l.a.createElement("ul",{className:"list-group"},l.a.createElement(y.a,{duration:300,easing:"ease-in-out",delay:100,enterAnimation:"fade",staggerDurationBy:100},a,l.a.createElement("li",{className:"list-group-item text-right pt-1 pb-1",key:0},"Total ",l.a.createElement("span",{className:"currency currency-total ml-2"},"$",t)))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("button",{className:"btn btn-primary mt-2","data-toggle":"modal","data-target":"#AddPayPerson"},l.a.createElement("i",{className:"material-icons align-middle"},"add_circle_outline"),"Agregar"))))))}}]),a}(n.Component),b=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={name:"",type:"",payed:""},t.onAddPayPerson=t.onAddPayPerson.bind(Object(d.a)(Object(d.a)(t))),t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"onAddPayPerson",value:function(){var e={name:this._nameInput.value,type:this._typeInput.value,payed:parseFloat(this._payedInput.value),key:Date.now()};this.props.onAddPayPerson(e),this.setState({name:"",type:"",payed:""})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"modal fade",id:"AddPayPerson",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Agregar qui\xe9n pag\xf3")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("input",{ref:function(a){return e._nameInput=a},type:"text",placeholder:"Nombre...",className:"mb-2",onChange:function(a){return e.setState({name:a.target.value})},value:this.state.name}),l.a.createElement("input",{ref:function(a){return e._typeInput=a},type:"text",placeholder:"Qu\xe9 compr\xf3?",className:"pl-2 pr-2 align-middle mb-2",onChange:function(a){return e.setState({type:a.target.value})},value:this.state.type}),l.a.createElement("input",{ref:function(a){return e._payedInput=a},type:"number",min:"0",className:"currency currency-positive mb-2",placeholder:"Cu\xe1nto pag\xf3?",onChange:function(a){return e.setState({payed:a.target.value})},value:this.state.payed})),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"cerrar"),l.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:this.onAddPayPerson,disabled:!(this.state.name&&this.state.type&&this.state.payed)},"Agregar"))))))}}]),a}(n.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container quienes-estan"},l.a.createElement("h2",{className:"text-center mt-4"},"Qui\xe9nes est\xe1n?"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"row pr-4 pl-4 list-titles"},l.a.createElement("div",{className:"col-7 pl-0 pr-0"},"Nombre"),l.a.createElement("div",{className:"col-4 pl-2 pr-2 text-right"},"Debe"),l.a.createElement("div",{className:"col-1 pl-2 pr-2"})),l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item pb-1 pt-1"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1 pr-0 pl-0"},l.a.createElement("i",{className:"material-icons mt-1 i-btn"},"menu")),l.a.createElement("div",{className:"col-6 pl-2 pr-2"},"Nombre"),l.a.createElement("div",{className:"col-4 pl-2 pr-2 currency currency-positive text-right"},"$150"),l.a.createElement("div",{className:"col-1 pr-0 pl-0"},l.a.createElement("i",{className:"material-icons mt-1 i-btn"},"block")))),l.a.createElement("li",{className:"list-group-item pb-1 pt-1"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-1 pr-0 pl-0"},l.a.createElement("i",{className:"material-icons mt-1 i-btn"},"menu")),l.a.createElement("div",{className:"col-6 pl-2 pr-2"},l.a.createElement("input",{type:"text",placeholder:"Nombre..."})),l.a.createElement("div",{className:"col-4 pl-2 pr-2 currency currency-positive text-right"},"$150"),l.a.createElement("div",{className:"col-1 pr-0 pl-0"},l.a.createElement("i",{className:"material-icons mt-1 i-btn"},"remove_circle_outline"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("button",{className:"btn btn-primary mt-2"},l.a.createElement("i",{className:"material-icons align-middle"},"add_circle_outline"),"Agregar"))))))}}]),a}(l.a.Component),N=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).state={payPeople:[],noPayPeople:[]},t.handleAddPayPerson=t.handleAddPayPerson.bind(Object(d.a)(Object(d.a)(t))),t.handleRemovePayPerson=t.handleRemovePayPerson.bind(Object(d.a)(Object(d.a)(t))),t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"handleAddPayPerson",value:function(e){var a=this.state.payPeople.slice();a.unshift(e),this.setState({payPeople:a})}},{key:"handleRemovePayPerson",value:function(e){var a=this.state.payPeople.filter(function(a){return a.key!==e});this.setState({payPeople:a})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,null),l.a.createElement(v,{payPeople:this.state.payPeople,onRemovePayPerson:this.handleRemovePayPerson}),l.a.createElement(b,{onAddPayPerson:this.handleAddPayPerson}),l.a.createElement(E,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.c65b5aac.chunk.js.map