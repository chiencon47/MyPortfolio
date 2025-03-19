(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1ba2":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Resume")]),n("div",{staticClass:"paragraph"},[e._v(" I'm "),n("strong",[e._v("[Le Trong Chien]")]),e._v(", a Unity Developer with 1.5 years of experience in game development. "),n("br"),e._v("Proficient in C#, OOP, and Unity, with expertise in Particle System, Shader, UI Design, Firebase, and AdMob. "),n("br"),e._v("I have a strong background in game mechanics, graphics optimization, and monetization strategies. "),n("br"),e._v("Passionate about creating immersive gaming experiences and continuously improving my skills. "),n("br"),n("br"),e._v("If you have any opportunities, feel free to "),n("router-link",{attrs:{to:"/contact"}},[e._v("contact me")]),e._v(". "),n("br"),n("br"),e._v("Besides game development, I enjoy exploring new technologies, designing creative UI/UX, and optimizing game performance. "),e._m(0)],1),e._m(1),n("div",{staticStyle:{clear:"both"}}),e._m(2)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[n("a",{staticClass:"download-link",attrs:{href:"d/resume-en.pdf",target:"_blank"}},[n("i",{staticClass:"fa fa-download fa-lg fa-fw"}),e._v(" Download as PDF 🇬🇧")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"photo"},[n("img",{attrs:{src:"img/avatar.png",alt:"Photo of [Your Name]"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"full-content"},[n("h2",[e._v("Work Experience")]),n("h3",[e._v("Unity Developer")]),n("h4",[e._v("1.5 Years Experience")]),n("ul",[n("li",[e._v("Developed and optimized gameplay using C# and Unity.")]),n("li",[e._v("Designed and implemented Particle Systems for game effects.")]),n("li",[e._v("Worked with Shaders to enhance graphics quality.")]),n("li",[e._v("Created and optimized UI designs for better user experience.")]),n("li",[e._v("Integrated Firebase for data storage and player management.")]),n("li",[e._v("Implemented and optimized AdMob ads for monetization.")]),n("li",[e._v("Developed and maintained Client-Server architecture.")])]),n("h2",[e._v("Skills")]),n("div",{staticClass:"skill-set"},[n("h3",[e._v("Game Development")]),n("ul",[n("li",[e._v("Unity")]),n("li",[e._v("C# Programming")]),n("li",[e._v("OOP & ECS")])])]),n("div",{staticClass:"skill-set"},[n("h3",[e._v("Graphics & Effects")]),n("ul",[n("li",[e._v("Particle System")]),n("li",[e._v("Shader")])])]),n("div",{staticClass:"skill-set"},[n("h3",[e._v("UI/UX Design")]),n("ul",[n("li",[e._v("Figma")]),n("li",[e._v("Photoshop & Illustrator")])])]),n("div",{staticClass:"skill-set"},[n("h3",[e._v("Networking & Monetization")]),n("ul",[n("li",[e._v("Firebase")]),n("li",[e._v("Client-Server")]),n("li",[e._v("AdMob")])])]),n("div",{staticStyle:{clear:"both"}}),n("h2",[e._v("Education")]),n("h3",[e._v("PTIT HCM (2020 - 2025)")]),n("h4",[e._v("Information Technology")]),n("h2",[e._v("Hobbies & Interests")]),n("div",[n("h3",[e._v("Technology")]),n("div",[e._v("Passionate about exploring new frameworks, AI, and game engines.")]),n("h3",[e._v("Design")]),n("div",[e._v("Enjoys creating intuitive UI/UX designs for interactive experiences.")]),n("h3",[e._v("Gaming")]),n("div",[e._v("Always exploring new game mechanics and trends in the gaming industry.")])])])}],r=n("2b0e"),o=r["a"].extend({name:"Resume"}),s=o,l=(n("9609"),n("2877")),c=Object(l["a"])(s,a,i,!1,null,"8737da94",null);t["default"]=c.exports},"1e66":function(e,t,n){"use strict";var a=n("dec8"),i=n.n(a);i.a},"27bb":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"projects-list"},[e._l(e.projects,(function(t){return[n("div",{key:t.id,staticClass:"project-item",class:{wide:t.isWide,high:t.isHigh},on:{click:function(n){return e.showDetails(t)}}},[n("div",{staticClass:"project-item-image",style:{"background-image":"url("+t.iconUrl+")"}}),n("div",{staticClass:"title-bar",style:{"background-color":t.accentColor+"DD"}},[n("div",{staticClass:"title-text"},[e._v(" "+e._s(t.name)+" ")])])])]}))],2),n("ProjectDetailsOverlay",{attrs:{visible:e.showPopup,title:e.popupTitle,htmlContent:e.popupContent,color:e.popupColor},on:{close:function(t){e.showPopup=!1}}})],1)},i=[],r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.visible?n("div",[n("div",{staticClass:"overlay"}),n("div",{staticClass:"dialog",style:{"background-color":e.color}},[n("h1",{staticClass:"dialog-title"},[e._v(e._s(e.title))]),n("div",{staticClass:"dialog-close",on:{click:function(t){return e.$emit("close")}}},[n("i",{staticClass:"fa fa-times fa-lg fa-fw"})]),n("div",{staticClass:"dialog-content"},[n("div",{domProps:{innerHTML:e._s(e.htmlContent)}}),n("div",{staticClass:"dialog-bottom"},[n("a",{staticClass:"dialog-close-button",on:{click:function(t){return e.$emit("close")}}},[e._v("Close")])])])])]):e._e()])},s=[],l=r["a"].extend({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(e){console.log("fetching image "+e)}}}),c=l,p=(n("1e66"),n("2877")),d=Object(p["a"])(c,o,s,!1,null,"e66acff8",null),g=d.exports,u=r["a"].extend({name:"ProjectsList",components:{ProjectDetailsOverlay:g},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(e){this.popupTitle=e.name,this.popupColor=e.accentColor,this.popupContent=e.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}}),m=u,v=(n("5935"),Object(p["a"])(m,a,i,!1,null,"190958aa",null));t["a"]=v.exports},"3cfe":function(e,t,n){},"3d6f":function(e,t,n){},"416f":function(e,t,n){},"4d97":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Project")]),n("div",{staticStyle:{"margin-bottom":"30px"}},[e._v(" The following are some project I've made or heavily contributed to. ")]),n("ProjectsList",{attrs:{projects:e.projects}}),e._m(0)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"margin-top":"20px"}},[e._v(" There is more to see on "),n("a",{attrs:{target:"_blank",href:"https://someexternalwebsite.com"}},[e._v("some external website")])])}],r=n("2b0e"),o=n("27bb"),s=n("983d"),l=[new s["a"]("project-1","Galaxy Hunter","img/projects/galaxy-hunter.jpg",'\n    <div class="paragraph">\n     Embark on an epic space adventure in Galaxy Hunter, an action-packed shoot \'em up where you take control of a customizable starfighter!\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/pjmU-fdNeWk" frameborder="0" allowfullscreen></iframe>\n    </div>\n    <div class="paragraph center">\n        <p>Link Apk: <a href="https://drive.google.com/uc?export=download&id=1sME7a4mE6YGmhIoNFGfJvSqlHThsH-5D" target="_blank">Download</a></p>\n    </div>\n\n    <div class="paragraph">\n        In charge of work :\n        <ul>\n        <li>Level design</li>\n        <li>UI Designer</li>\n        <li>Core game programming</li>\n        <li>UI illustration</li>\n        <li>Effect design</li>\n        <li>Animation coding</li>\n        <li>Programming secondary features</li>\n        </ul>\n    </div>\n\n    ',"#23bd69",!0),new s["a"]("project-2","Flower Shop","img/projects/flower-shop.png",'\n    <div class="paragraph">\n        Welcome to Flower Shop, the perfect app for flower lovers and creative minds! Dive into a colorful world where you can explore different flower species, craft stunning floral products, and run your very own flower shop.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/g0jov2END8E" frameborder="0" allowfullscreen></iframe>\n    </div>\n    <div class="paragraph center">\n        <p>Link Apk: <a href="https://drive.google.com/uc?export=download&id=1jWaYXhmzccPV0fM7SroWAo1P0915rvU1" target="_blank">Download</a></p>\n    </div>\n    <div class="paragraph">\n        In charge of work :\n        <ul>\n        <li>Level design</li>\n        <li>UI Designer</li>\n        <li>Core game programming</li>\n        <li>UI illustration</li>\n        <li>Effect design</li>\n        <li>Animation coding</li>\n        <li>Programming secondary features</li>\n        </ul>\n    </div>\n\n    <div class="paragraph">\n    ',"#5a78af"),new s["a"]("project-3","Color the flag","img/projects/color-the-flag.png",'\n    <div class="paragraph">\n        Welcome to Color The Flag: Paint Puzzle, where vibrant colors meet exciting challenges! Immerse yourself in the art of flag design as you embark on a colorful journey around the world. Travel across the globe and train your brain by memorizing and painting all the flags!\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>\n    </div>\n    <div class="paragraph center">\n        <p>Link Apk: <a href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID" target="_blank">Download</a></p>\n    </div>\n    <div class="paragraph">\n        In charge of work :\n        <ul>\n        <li>Level design</li>\n        <li>Effect design</li>\n        <li>Programming secondary features</li>\n        </ul>\n    </div>\n    ',"#383838"),new s["a"]("project-4","2248","img/projects/2248.png",'\n    <div class="paragraph">\n    Welcome to 2248: Number Puzzle, a fun and addictive number-connecting game! Challenge your mind by linking matching numbers to create bigger ones and reach the highest score. In 2248, you can make friends, compete on the leaderboard, and see how you rank against players worldwide. Train your brain, relax, and enjoy the ultimate number puzzle experience!\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://youtube.com/embed/337Rb9k4W48" frameborder="0" allowfullscreen></iframe>\n    </div>\n    <div class="paragraph center">\n        <p>Link Apk: <a href="https://drive.google.com/uc?export=download&id=1VxEIYYI23ybXYM6UEV41jVtDUL15nO2R" target="_blank">Download</a></p>\n    </div>\n    <div class="paragraph">\n       In charge of work :\n        <ul>\n        <li>Friends and Leaderboard system</li>\n        <li>UI Designer</li>\n        <li>UI illustration</li>\n        <li>Programming secondary features</li>\n        </ul>\n    </div>\n    ',"#e80fb7"),new s["a"]("project-5","Merge Cube","img/projects/merge-cube.png",'\n    <div class="paragraph">\n        Merge Cube is a fun merging game where you combine blocks of the same level to create bigger ones! Merge wisely, unlock new levels, and achieve the highest score. Are you ready for the challenge?\n    </div>\n     <div class="paragraph center">\n        <iframe class="youtube" src="https://youtube.com/embed/R5NGerkM1zE" frameborder="0" allowfullscreen></iframe>\n    </div>\n    <div class="paragraph center">\n        <p>Link Apk: <a href="https://drive.google.com/uc?export=download&id=1MW3S5FGre0p_HD62Xy7fCcO9_FPVygHP" target="_blank">Download</a></p>\n    </div>\n    <div class="paragraph">\n       In charge of work :\n        <ul>\n        <li>Level design</li>\n        <li>UI Designer</li>\n        <li>Core game programming</li>\n        <li>UI illustration</li>\n        <li>Effect design</li>\n        <li>Animation coding</li>\n        <li>Programming secondary features</li>\n        </ul>\n    </div>\n    ',"#e48246")],c=r["a"].extend({name:"GameProjects",components:{ProjectsList:o["a"]},data:function(){return{projects:l}}}),p=c,d=n("2877"),g=Object(d["a"])(p,a,i,!1,null,null,null);t["default"]=g.exports},5935:function(e,t,n){"use strict";var a=n("416f"),i=n.n(a);i.a},"67f3":function(e,t,n){"use strict";var a=n("ee3f"),i=n.n(a);i.a},"7c58":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Other Project")]),n("div",{staticStyle:{"margin-bottom":"30px"}},[e._v(" And here are some of my personal projects when I first started learning game making. ")]),n("ProjectsList",{attrs:{projects:e.projects}})],1)},i=[],r=n("2b0e"),o=n("27bb"),s=n("983d"),l=[new s["a"]("project-6","Tile TFT","img/projects/project-6-icon.png",'\n    <div class="paragraph">\n      <strong>Sultans Of Sing</strong> is a thing of beauty that I am so proud of. It\'s available on Windows Store because why not.\n      <br/>Image by <a href="https://www.pexels.com/fr-fr/@aldoalz" target="blank">Aldo Picaso</a>.\n            </div>\n            <div class="paragraph center">\n              <a href="https://www.microsoft.com/en-us/p/some-app" target="_blank"><img src="img/projects/ms-store-logo.png" alt="MS Store button" /></a>\n          </div>\n\n          <div class="paragraph">\n            Main features :\n            <ul>\n            <li>Some stuff</li>\n            <li>Some great stuff</li>\n            <li>More awesome stuff</li>\n            <li>And then some</li>\n            </ul>\n        </div>\n\n        <div class="paragraph center">\n          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />\n          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />\n          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" /> \n        </div>\n    ',"#c10606",!1,!0),new s["a"]("project-7","Zuma","img/projects/project-7-icon.png",'\n    <div class="paragraph">\n                <strong>Drew Blood</strong> is a thing of beauty that I am so proud of. I could write about it for hours.\n                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@karolina-grabowska">Karolina Grabowska</a>.\n            </div>\n\n            <div class="paragraph">\n              Main features :\n              <ul>\n              <li>Some stuff</li>\n              <li>Some great stuff</li>\n              <li>More awesome stuff</li>\n              <li>And then some</li>\n              </ul>\n          </div>\n\n            <div class="paragraph">\n              <div class="notice">\n                You can download and try the app for free or purchase it directly from <a href="http://www.somewbsite.com/" target="_blank">Some website</a>\n              </div>\n            </div>\n\n            <div class="paragraph center">\n                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />\n                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />\n                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" /> \n            </div>',"#1ca1e2"),new s["a"]("project-8","All in Hole","img/projects/project-8-icon.png",'\n    <div class="paragraph">\n                <strong>The Art of Walking</strong> is a thing of beauty that I am so proud of. I could write about it for hours.\n            </div>\n\n            <div class="paragraph center">\n              <a href="https://play.google.com/store/apps/details?id=someapp" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>\n          </div>\n\n          <div class="paragraph">\n          Main features :\n          <ul>\n          <li>Some stuff</li>\n          <li>Some great stuff</li>\n          <li>More awesome stuff</li>\n          <li>And then some</li>\n          </ul>\n      </div>\n\n            <div class="paragraph">\n              <div class="notice">\n                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.\n              </div>\n            </div>\n\n            <div class="paragraph center">\n                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />\n                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />\n            </div>'),new s["a"]("project-9","Fixel by color","img/projects/project-9-icon.png",'\n     <div class="paragraph">\n                <strong>Nikolable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.\n                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@goumbik">Lukas</a>.\n            </div>\n\n            <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Some stuff</li>\n        <li>Some great stuff</li>\n        <li>More awesome stuff</li>\n        <li>And then some</li>\n        </ul>\n    </div>\n\n            <div class="paragraph">\n              <div class="notice">\n                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.\n              </div>\n            </div>')],c=r["a"].extend({name:"OtherProjects",components:{ProjectsList:o["a"]},data:function(){return{projects:l}}}),p=c,d=n("2877"),g=Object(d["a"])(p,a,i,!1,null,null,null);t["default"]=g.exports},"8cdb":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"http-404"},[e._v("404 🙈")])},i=[],r=(n("67f3"),n("2877")),o={},s=Object(r["a"])(o,a,i,!1,null,"c64612d2",null);t["default"]=s.exports},9609:function(e,t,n){"use strict";var a=n("3cfe"),i=n.n(a);i.a},"983d":function(e,t,n){"use strict";var a=function(){function e(e,t,n,a,i,r,o){void 0===i&&(i="#000000"),void 0===r&&(r=!1),void 0===o&&(o=!1),this.id=e,this.name=t,this.htmlDescription=a,this.iconUrl=n,this.isHigh=r,this.isWide=o,this.accentColor=i}return e}();t["a"]=a},b8fa:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Let's get in touch")]),n("div",{staticStyle:{"margin-bottom":"40px"}},[e._v("I'm looking for a job!"),n("br"),e._v("Please contact me about any opportunities.")]),n("ul",[n("li",[n("i",{staticClass:"fa fa-envelope-o fa-lg fa-fw"}),n("a",{attrs:{href:"mailto:letrongchien472002@gmail.com",target:"_blank"}},[e._v("letrongchien472002@gmail.com")])])])])}],r=(n("df77"),n("2877")),o={},s=Object(r["a"])(o,a,i,!1,null,"6b64b8ea",null);t["default"]=s.exports},c85c:function(e,t,n){},dec8:function(e,t,n){},df77:function(e,t,n){"use strict";var a=n("c85c"),i=n.n(a);i.a},ee3f:function(e,t,n){},eede:function(e,t,n){"use strict";var a=n("3d6f"),i=n.n(a);i.a},f820:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"margin-bottom":"80px"}},[n("h1",[e._v("Hello!")]),n("div",{staticClass:"paragraph"},[e._m(0),n("div",{staticStyle:{"margin-top":"20px"}},[e._v("I've worked on "),n("router-link",{attrs:{to:"/game-projects"}},[e._v("stuff")]),e._v(", on "),n("router-link",{attrs:{to:"/other-projects"}},[e._v("other stuff")]),e._v(", and took part in "),n("router-link",{attrs:{to:"/resume"}},[e._v("a few things")]),e._v(" as well.")],1),n("div",{staticStyle:{"margin-top":"40px"}},[e._v(" I'm "),n("strong",[e._v("currently looking for new opportunities")]),e._v(" as a Unity Developer. You can reach me at "),n("a",{attrs:{href:"mailto:letrongchien472002@gmail.com"}},[e._v("letrongchien472002@gmail.com")]),e._v(" or "),n("router-link",{attrs:{to:"/contact"}},[e._v("through here")]),e._v(". ")],1)]),e._m(1),n("div",{staticStyle:{clear:"both"}})])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" I'm "),n("strong",[e._v("Chien")]),e._v(", a passionate Unity Developer with 1.5 years of experience."),n("br"),e._v(" I specialize in developing and optimizing gameplay using C# and Unity, creating stunning particle effects, and designing intuitive UI."),n("br"),e._v(" I also have experience working with Shaders, Client-Server systems, Firebase integration, and AdMob monetization."),n("br"),e._v(" Beyond coding, I enjoy exploring new design tools like Figma, Photoshop, and Illustrator to enhance user experience. ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"photo"},[n("img",{attrs:{src:"img/avatar.png",alt:"Avatar of Chien"}})])}],r=(n("eede"),n("2877")),o={},s=Object(r["a"])(o,a,i,!1,null,"3bdd703a",null);t["default"]=s.exports}}]);
//# sourceMappingURL=about.63ddc0f0.js.map