import{j as t,L as n}from"./index-B-XQBK-R.js";import{C as c,S as a,B as d}from"./Card-Ba2IcTPa.js";import{C as l}from"./CodeBlock-BD7B4F1R.js";import{T as u}from"./Table--dKeGHW4.js";import{C as m}from"./Callout-Bs-TwcD9.js";import{u as p}from"./useTranslation-BPySU2ZA.js";import{c as h}from"./createLucideIcon-BfmU6-uQ.js";import{C as x}from"./code-6cqTidZT.js";import"./copy-BEf8BVlI.js";import"./triangle-alert-CspxHpG9.js";const j=[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2",key:"1qhy41"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20",key:"ni3hll"}]],g=h("laptop-minimal",j),y={box:t.jsx(d,{}),code:t.jsx(x,{}),laptop:t.jsx(g,{}),shield:t.jsx(a,{})},f=`import { createApp, schema, v, validateRequest } from "skyguard-js";
const app = createApp();

const userSchema = schema({
  body: {
    username: v.string({ maxLength: 60 }),
    email: v.string().email()
  }
});

app.post("/user/create", [validateRequest(userSchema)], (ctx) => {
  const { username, email } = ctx.body;

  return ctx.json({ username, email }).setStatusCode(201);
});

app.run(3000, () => {
  console.log("Server running in port 3000");
});`;function F(){const{t:s}=p(),o=s("introduction.cards",{returnObjects:!0}),i=s("introduction.comparison.rows",{returnObjects:!0}),r=[{header:s("introduction.comparison.columns.characteristics"),accessor:"characteristic",emphasis:!0},{header:s("introduction.comparison.columns.express"),accessor:"express",enableFormatting:!0},{header:s("introduction.comparison.columns.koa"),accessor:"koa",enableFormatting:!0},{header:s("introduction.comparison.columns.skyguard"),accessor:"skyguardjs",enableFormatting:!0,emphasis:!0}];return t.jsxs(t.Fragment,{children:[t.jsxs("section",{id:"introduction",className:"docs-section",children:[t.jsx("h1",{children:s("introduction.page.title")}),t.jsx("p",{children:s("introduction.page.lead")})]}),t.jsx("hr",{}),t.jsxs("section",{id:"what-is-skyguard-js",className:"docs-section",children:[t.jsx("h2",{children:s("introduction.whatIs.title")}),t.jsx("p",{dangerouslySetInnerHTML:{__html:s("introduction.whatIs.paragraph1")}}),t.jsx("br",{}),t.jsx("p",{children:s("introduction.whatIs.paragraph2")}),t.jsx("div",{className:"container-cards",children:o.map(e=>t.jsx(c,{title:e.title,description:e.description,icon:y[e.iconKey]},e.title))})]}),t.jsxs("section",{id:"quick-example",className:"docs-section",children:[t.jsx("h2",{children:s("introduction.quickExample.title")}),t.jsx(l,{code:f})]}),t.jsxs("section",{id:"advantages",className:"docs-section",children:[t.jsx("h2",{children:s("introduction.comparison.title")}),t.jsx(u,{columns:r,data:i})]}),t.jsxs(m,{variant:"note",children:[t.jsx("strong",{children:s("introduction.callout.title")}),", ",s("introduction.callout.prefix")," ",t.jsx(n,{className:"note-link",to:"/docs/getting-started",children:s("introduction.callout.guideLink")})," ",s("introduction.callout.suffix")]})]})}export{F as default};
