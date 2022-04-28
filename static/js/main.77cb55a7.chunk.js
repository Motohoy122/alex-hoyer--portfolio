(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var i=n(9),a=n(3),s=n(1),c=n(0),o=Object(s.createContext)(),r=function(e){var t=e.children,n=Object(s.useState)("light"),i=Object(a.a)(n,2),r=i[0],l=i[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");l(e.matches?"dark":"light"),e.addEventListener("change",(function(e){l(e.matches?"dark":"light")}))}),[]);return Object(c.jsx)(o.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},l="https://motohoy122.github.io/alex-hoyer--portfolio/",h="AH.",d="Alex Hoyer",u="Front-End Developer",j="Creative React developer with three years of experience delivering web applications to clients. Skilled at connecting creative UI frameworks to functional assets that deliver a smooth experience to the user. Created a subcontractor scheduling application to allocate resources, crews and tasks, which resulted in the company's field efficiency improving by 8%.",b="https://drive.google.com/file/d/144hvx1jBuHunjCe9FbgTFlcMAKY0TQKs/view?usp=sharing",m={linkedin:"https://www.linkedin.com/in/alex-hoyer-479255158/",github:"https://github.com/Motohoy122"},p=[{name:"Dev Connect",description:"Dev Connect is an online social media site specifically for developers. Developers have the opportunity to share their work, link their github repositories through the github API, highlight their education and professional accomplishments. This application was built with the MERN stack and is hosted on heroku. MongoDB atlas stores all of the applications data, Express and Node.js create the server functionality and React was used for the frontend. Key components include user authentication, private routing after logging in and a fully functional api.",stack:["MongoDB","ExpressJs","React","Redux","Node.js","heroku"],sourceCode:"https://github.com/Motohoy122/dev-connect",livePreview:"https://floating-shelf-33514.herokuapp.com/"},{name:"Disney+ Clone",description:"A clone of the disney plus web application. The app utilizes the power of firebase to allow users to make an account through google authentication and host the application. Within Firebase, the Firestore manages the data for each movie within the movies database.  Redux was implemented to control the state of the user\u2019s logged in status and the state of the movie information within the database. The styled-components library was downloaded from npm to style components and make them mobile responsive within the .js component files.",stack:["Firebase","Redux","styled-components"],sourceCode:"https://github.com/Motohoy122/disney-plus-clone",livePreview:"https://disney-plus-clone-523b8.web.app/"},{name:"Smart-Brain",description:"An application that will recognize a face in any image that is provided to it and insert a box around the individual's face utilizing the clarifai AI image recognition API. The app has its own server utilizing Node and Express, which allows for management of user authentication and the user data in the database. The Tachyon library was used to style the react components.",stack:["AI Image Recognition API","Node","Express","Tachyons"],sourceCode:"https://github.com/Motohoy122/smart-brain",livePreview:"https://smart-brain-front-end-alex.herokuapp.com/"},{name:"Robofriends",description:"The application receives a list of randomized robots through an API, each robot is displayed in a card along with their name and contact information. A user can search through the list by typing into the search box, and the robots will be filtered out upon each keystroke. The state of the information within the search box is managed by Redux for the robot filtering functionality to take place. The Jest library was utilized to test that the api was sending the JSON formatted robot information and Tachyons were used for styling the components.",stack:["API","Jest","Redux","Tachyons"],sourceCode:"https://github.com/Motohoy122/robofriends",livePreview:"https://motohoy122.github.io/robofriends/"},{name:"Merchant Candy",description:"This is a mockup of Merchant Candy's checkout process. The frontend was built using react and material UI. It wasn't intended to have full checkout functionality, it was built strictly for the aesthetic look. The app is utilizing React hooks, such as useState and useEffect to manage the state and change the visual components throughout the checkout process.",stack:["React","Material UI"],sourceCode:"https://github.com/Motohoy122/robofriends",livePreview:"https://motohoy122.github.io/robofriends/"}],f=["HTML","CSS","JavaScript","React","Redux","MongoDB","ExpressJs","Node.js","Firebase","SASS","Material UI","Git","CI/CD","Jest"],x="alexhoyer22@gmail.com",g=n(14),O=n.n(g),v=n(12),k=n.n(v),y=n(16),w=n.n(y),N=n(15),_=n.n(N),C=(n(26),function(){var e=Object(s.useContext)(o),t=Object(a.a)(e,1)[0],n=t.themeName,i=t.toggleTheme,r=Object(s.useState)(!1),l=Object(a.a)(r,2),h=l[0],d=l[1],u=function(){return d(!h)};return Object(c.jsxs)("nav",{className:"center nav",children:[Object(c.jsxs)("ul",{style:{display:h?"flex":null},className:"nav__list",children:[p.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#projects",onClick:u,className:"link link--nav",children:"Projects"})}):null,f.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#skills",onClick:u,className:"link link--nav",children:"Skills"})}):null,x?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#contact",onClick:u,className:"link link--nav",children:"Contact"})}):null]}),Object(c.jsx)("button",{type:"button",onClick:i,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(c.jsx)(k.a,{}):Object(c.jsx)(O.a,{})}),Object(c.jsx)("button",{type:"button",onClick:u,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:h?Object(c.jsx)(_.a,{}):Object(c.jsx)(w.a,{})})]})}),T=(n(32),function(){var e=l,t=h;return Object(c.jsxs)("header",{className:"header center",children:[Object(c.jsx)("h3",{children:e?Object(c.jsx)("a",{href:e,className:"link",children:t}):t}),Object(c.jsx)(C,{})]})}),M=n(10),I=n.n(M),S=n(17),A=n.n(S),P=(n(33),function(){var e=d,t=u,n=j,i=b,a=m;return Object(c.jsxs)("div",{className:"about center",children:[e&&Object(c.jsxs)("h1",{children:["Hi, I am ",Object(c.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(c.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(c.jsx)("p",{className:"about__desc",children:n&&n}),Object(c.jsxs)("div",{className:"about__contact center",children:[i&&Object(c.jsx)("a",{href:i,children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(c.jsxs)(c.Fragment,{children:[a.github&&Object(c.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(c.jsx)(I.a,{})}),a.linkedin&&Object(c.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(c.jsx)(A.a,{})})]})]})]})}),R=n(7),E=n.n(R),D=n(18),J=n.n(D),z=(n(35),function(e){var t=e.project;return Object(c.jsxs)("div",{className:"project",children:[Object(c.jsx)("a",{href:t.livePreview,target:"_blank",rel:"noreferrer",children:Object(c.jsx)("h3",{children:t.name})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(c.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(c.jsx)("li",{className:"project__stack-item",children:e},E()())}))})]}),Object(c.jsxs)("div",{className:"project__gutter",children:[t.sourceCode&&Object(c.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(c.jsx)(I.a,{})}),t.livePreview&&Object(c.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(c.jsx)(J.a,{})})]})]})}),F=(n(36),function(){return p.length?Object(c.jsxs)("section",{id:"projects",className:"section projects",children:[Object(c.jsx)("h2",{className:"section__title",children:"Projects"}),Object(c.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(c.jsx)(z,{project:e},E()())}))})]}):null}),B=(n(37),function(){return f.length?Object(c.jsxs)("section",{className:"section skills",id:"skills",children:[Object(c.jsx)("h2",{className:"section__title",children:"Skills"}),Object(c.jsx)("ul",{className:"skills__list",children:f.map((function(e){return Object(c.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},E()())}))})]}):null}),H=n(19),L=n.n(H),U=(n(38),function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?i(!0):i(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(c.jsx)("div",{className:"scroll-top",children:Object(c.jsx)("a",{href:"#top",children:Object(c.jsx)(L.a,{fontSize:"large"})})}):null}),K=(n(39),function(){return x?Object(c.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(c.jsx)("h2",{className:"section__title",children:"Contact"}),Object(c.jsx)("a",{href:"mailto:".concat(x),children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),Y=(n(40),function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsx)("a",{href:"https://github.com/Motohoy122/alex-hoyer--portfolio",className:"link footer__link",children:"Created By Alex Hoyer"})})}),G=(n(41),function(){var e=Object(s.useContext)(o),t=Object(a.a)(e,1)[0].themeName;return Object(c.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(c.jsx)(T,{}),Object(c.jsxs)("main",{children:[Object(c.jsx)(P,{}),Object(c.jsx)(F,{}),Object(c.jsx)(B,{}),Object(c.jsx)(K,{})]}),Object(c.jsx)(U,{}),Object(c.jsx)(Y,{})]})});n(42);Object(i.render)(Object(c.jsx)(r,{children:Object(c.jsx)(G,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.77cb55a7.chunk.js.map