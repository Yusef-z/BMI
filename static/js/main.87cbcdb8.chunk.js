(this["webpackJsonpbmi-calcuulator"]=this["webpackJsonpbmi-calcuulator"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(4),i=n.n(a),r=(n(9),n(2)),l=(n.p,n(10),n(11),n(0)),u=function(e){return Object(l.jsxs)("label",{className:"switch",children:[Object(l.jsx)("input",{type:"checkbox",onChange:function(){e.statusChange(!e.status),console.log(e.status)}}),Object(l.jsx)("span",{className:"slider"})]})},o=(n(13),function(e){return Object(l.jsx)("div",{className:"flexContainer",children:Object(l.jsxs)("div",{className:"midContainer",children:[Object(l.jsx)("h2",{className:"metric",children:"Metric"}),Object(l.jsx)(u,{status:e.status,statusChange:e.statusChange}),Object(l.jsx)("h2",{className:"imperial",children:"Imperial"})]})})}),h=(n(14),function(){return Object(l.jsxs)("div",{className:"titleContainer",children:[Object(l.jsx)("h1",{children:"BMI CALCULATOR"}),Object(l.jsx)("h2",{children:"By yousef"})]})}),j=(n(15),function(e){var t=Object(s.useState)(""),n=Object(r.a)(t,2),c=n[0],a=n[1],i=0,u=0,o=0,h=0,j=0,d=0,b="";return e.status?Object(l.jsxs)("div",{className:"mainContainer",children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),e.target.children[0].children[1].value="",e.target.children[0].children[2].value="",e.target.children[1].children[1].value="",u=parseFloat(u)+12*parseFloat(i),console.log(u),o=703*parseFloat(o),console.log(o),d=(d=o/Math.pow(u,2)).toFixed(2),b=d>40?"Extremely Obese":d>=30?"Obese":d>=25?"Overweight":d>=18.5?"Normal":"Underweight",a("Your Body Mass Index is ".concat(d,", This is Considered ").concat(b))},children:[Object(l.jsxs)("div",{className:"heightInput",children:[Object(l.jsx)("label",{children:"Enter Your Height: "}),Object(l.jsx)("input",{type:"number",min:"0",max:"999",maxLength:"3",placeholder:"feet",required:!0,onChange:function(e){i=e.target.value}}),Object(l.jsx)("input",{type:"number",min:"0",max:"999",maxLength:"3",placeholder:"inches",required:!0,onChange:function(e){u=e.target.value}})]}),Object(l.jsxs)("div",{className:"weightInput",children:[Object(l.jsx)("label",{children:"Enter Your Weight: "}),Object(l.jsx)("input",{type:"number",min:"0",max:"999",maxLength:"3",placeholder:"lbs",required:!0,onChange:function(e){o=e.target.value}})]}),Object(l.jsx)("button",{type:"submit",className:"submitButton",children:"CALCULATE"})]}),Object(l.jsx)("div",{className:"resultContainer",children:c})]}):Object(l.jsxs)("div",{className:"mainContainer",children:[Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),e.target.children[0].children[1].value="",e.target.children[1].children[1].value="",d=(d=parseFloat(j)/Math.pow(h/100,2)).toFixed(2),b=d>40?"Extremely Obese":d>=30?"Obese":d>=25?"Overweight":d>=18.5?"Normal":"Underweight",a("Your Body Mass Index is ".concat(d,", This is Considered ").concat(b))},children:[Object(l.jsxs)("div",{className:"heightInput",children:[Object(l.jsx)("label",{children:"Enter Your Height: "}),Object(l.jsx)("input",{type:"number",min:"0",max:"999",maxLength:"3",placeholder:"cm",required:!0,onChange:function(e){h=e.target.value}})]}),Object(l.jsxs)("div",{className:"weightInput",children:[Object(l.jsx)("label",{children:"Enter Your Weight: "}),Object(l.jsx)("input",{type:"number",min:"0",max:"999",maxLength:"3",placeholder:"kg",required:!0,onChange:function(e){j=e.target.value}})]}),Object(l.jsx)("button",{type:"submit",className:"submitButton",children:"CALCULATE"})]}),Object(l.jsx)("div",{className:"resultContainer",children:c})]})});var d=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{}),Object(l.jsx)(o,{status:n,statusChange:c}),Object(l.jsx)(j,{status:n})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),b()}],[[16,1,2]]]);
//# sourceMappingURL=main.87cbcdb8.chunk.js.map