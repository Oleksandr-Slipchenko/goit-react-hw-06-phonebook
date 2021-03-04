(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={contactList:"ContactList_contactList__24noj",contactListItem:"ContactList_contactListItem__K1BXo",button:"ContactList_button__1ValF",buttonTitle:"ContactList_buttonTitle__2ijgz",contactName:"ContactList_contactName__3WYu6"}},15:function(t,e,n){t.exports={page:"fadeAppTitle_page__2RlXs",phoneBookTitle:"fadeAppTitle_phoneBookTitle__C9_1u",findContacts:"fadeAppTitle_findContacts__1WmM5",findContactsTitle:"fadeAppTitle_findContactsTitle__2Oc30",appear:"fadeAppTitle_appear__1Cr0W",appearActive:"fadeAppTitle_appearActive__8uFcT"}},27:function(t,e,n){t.exports={enter:"fadeContactFormAlert_enter__3ibC5",enterActive:"fadeContactFormAlert_enterActive__2nEZL",exit:"fadeContactFormAlert_exit__1YSNJ",exitActive:"fadeContactFormAlert_exitActive__IyATw",alert:"fadeContactFormAlert_alert__2w9HW"}},29:function(t,e,n){t.exports={filterInput:"Filter_filterInput__mGbB2"}},30:function(t,e,n){t.exports={enter:"fadeAppAlert_enter__3SfM5",enterActive:"fadeAppAlert_enterActive__BV4ns",exit:"fadeAppAlert_exit__3U8mB",exitActive:"fadeAppAlert_exitActive__2ns52",alert:"fadeAppAlert_alert__1v3LP"}},38:function(t,e,n){t.exports={enter:"fadeContactList_enter__18FOV",enterActive:"fadeContactList_enterActive__zJQYc",exit:"fadeContactList_exit__28EfC",exitActive:"fadeContactList_exitActive__1X3AR"}},53:function(t,e,n){},54:function(t,e,n){t.exports={enter:"fadeFilter_enter__2uVVS",enterActive:"fadeFilter_enterActive__3JdP-",exit:"fadeFilter_exit__3EUZe",exitActive:"fadeFilter_exitActive__2AeDR"}},56:function(t,e,n){"use strict";n.r(e);var a,c=n(1),r=n(0),i=n(10),o=n.n(i),s=n(39),l=n(11),u=n(35),m=n(20),b=n(7),_=n(36),d=n.n(_),j=n(9),f=n(37),p=n.n(f),h=n(12),O=n(5),x=n(59),v={addContact:Object(b.b)("contacts/add",(function(t,e){return{payload:{id:Object(x.a)(),number:t,name:e}}})),removeContact:Object(b.b)("contacts/remove"),changeFilter:Object(b.b)("contacts/changeFilter")},C=Object(b.c)([],(a={},Object(h.a)(a,v.addContact,(function(t,e){var n=e.payload;return[].concat(Object(m.a)(t),[n])})),Object(h.a)(a,v.removeContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),A=Object(b.c)("",Object(h.a)({},v.changeFilter,(function(t,e){return e.payload}))),N=Object(O.c)({items:C,filter:A}),g=[].concat(Object(m.a)(Object(b.d)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),[d.a]),F={key:"contacts",storage:p.a,blacklist:["filter"]},T=Object(b.a)({reducer:{contacts:Object(j.g)(F,N)},middleware:g,devTools:!1}),y={store:T,persistor:Object(j.h)(T)},L=(n(52),n(53),n(18)),S=n(19),k=n(22),I=n(21),w=n(58),B=n(6),E=n.n(B),R=n(27),V=n.n(R),J={number:"",name:"",alert:!1,message:""},W=function(t){Object(k.a)(n,t);var e=Object(I.a)(n);function n(){var t;Object(L.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=J,t.handleInputChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=t.props,i=r.onSubmit;r.contacts;i(a,c),t.resetForm()},t.validateForm=function(){var e=t.state,n=e.name,a=e.number,c=t.props.contacts;if(!n||!a)return t.setState({alert:!0,message:"Some field is empty"}),void setTimeout((function(){return t.setState({alert:!1,message:""})}),2e3);var r=!!c.find((function(t){return t.name===n}));return r&&t.setState({alert:!0,message:"This contact already exists"}),setTimeout((function(){return t.setState({alert:!1,message:""})}),2e3),!r},t.resetForm=function(){t.setState(J)},t}return Object(S.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.alert,r=t.message;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(w.a,{in:a,timeout:250,classNames:V.a,unmountOnExit:!0,children:Object(c.jsx)("p",{className:V.a.alert,children:r})}),Object(c.jsxs)("form",{className:E.a.form,onSubmit:this.handleSubmit,children:[Object(c.jsx)("section",{className:E.a.sectionName,children:Object(c.jsxs)("label",{className:E.a.label,children:[Object(c.jsx)("p",{className:E.a.inputTitle,children:"Name"}),Object(c.jsx)("input",{className:E.a.input,type:"text",value:e,name:"name",onChange:this.handleInputChange})]})}),Object(c.jsx)("section",{className:E.a.sectionNumber,children:Object(c.jsxs)("label",{className:E.a.label,children:[Object(c.jsx)("p",{className:E.a.inputTitle,children:"Number"}),Object(c.jsx)("input",{className:E.a.input,type:"tel",value:n,name:"number",onChange:this.handleInputChange})]})}),Object(c.jsx)("button",{className:E.a.button,type:"submit",children:"Add contact"})]})]})}}]),n}(r.Component),z=Object(l.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e,n){return t(v.addContact(e,n))}}}))(W),D=n(28),P=n(13),X=n.n(P),Y=n(38),H=n.n(Y),K=function(t){var e=t.id,n=t.name,a=t.number,r=t.onRemove;return Object(c.jsxs)("li",{className:X.a.contactListItem,children:[Object(c.jsxs)("span",{className:X.a.contactName,children:[n,": ",a," "]}),Object(c.jsx)("button",{className:X.a.button,onClick:function(){return r(e)},children:Object(c.jsx)("p",{className:X.a.buttonTitle,children:"delete"})})]})},M=n(60),U=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},Z=Object(l.b)((function(t){var e=t.contacts,n=e.items,a=e.filter;return{contacts:U(n,a)}}),(function(t){return{onRemove:function(e){return t(v.removeContact(e))}}}))((function(t){var e=t.contacts,n=t.onRemove;return Object(c.jsx)(M.a,{component:"ul",className:X.a.contactList,children:e.map((function(t){return Object(c.jsx)(w.a,{timeout:250,classNames:H.a,children:Object(c.jsx)(K,Object(D.a)(Object(D.a)({},t),{},{onRemove:n}))},t.id)}))})})),q=n(29),G=n.n(q),Q=Object(l.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(v.changeFilter(e))}}}))((function(t){var e=t.filter,n=t.onChange;return Object(c.jsx)("div",{className:G.a.filter,children:Object(c.jsx)("input",{className:G.a.filterInput,type:"text",name:"filter",value:e,onChange:function(t){var e=t.target;return n(e.value)}})})})),$=n(15),tt=n.n($),et=n(30),nt=n.n(et),at=(n(54),function(t){Object(k.a)(n,t);var e=Object(I.a)(n);function n(){var t;Object(L.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={alert:!1,message:""},t}return Object(S.a)(n,[{key:"render",value:function(){var t=this.state,e=(t.filter,t.alert),n=t.message;t.contacts;return Object(c.jsxs)("div",{className:tt.a.page,children:[Object(c.jsx)(w.a,{in:!0,appear:!0,timeout:500,classNames:tt.a,unmountOnExit:!0,children:Object(c.jsx)("h1",{className:tt.a.phoneBookTitle,children:"Phonebook"})}),Object(c.jsx)(w.a,{in:e,timeout:250,classNames:nt.a,unmountOnExit:!0,children:Object(c.jsx)("p",{className:nt.a.alert,children:n})}),Object(c.jsx)(z,{}),Object(c.jsxs)("div",{className:tt.a.findContacts,children:[Object(c.jsx)("h2",{className:tt.a.findContactsTitle,children:"Find contacts"}),Object(c.jsx)(Q,{})]}),Object(c.jsx)(Z,{})]})}}]),n}(r.Component));o.a.render(Object(c.jsx)(l.a,{store:y.store,children:Object(c.jsx)(u.a,{loading:null,persistor:y.persistor,children:Object(c.jsx)(s.a,{children:Object(c.jsx)(at,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__1Vxgh",sectionName:"ContactForm_sectionName__11z7n",sectionNumber:"ContactForm_sectionNumber__2DBWJ",label:"ContactForm_label__1lxq9",input:"ContactForm_input__KIrou",inputTitle:"ContactForm_inputTitle__33V53",button:"ContactForm_button__3bHnb"}}},[[56,1,2]]]);
//# sourceMappingURL=main.79df7166.chunk.js.map