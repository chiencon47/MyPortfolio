(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1ba2":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Resume")]),t("div",{staticClass:"paragraph"},[e._v(" I'm "),t("strong",[e._v("[Le Trong Chien]")]),e._v(", a Unity Developer with 1.5 years of experience in game development. "),t("br"),e._v("Proficient in C#, OOP, and Unity, with expertise in Particle System, Shader, UI Design, Firebase, and AdMob. "),t("br"),e._v("I have a strong background in game mechanics, graphics optimization, and monetization strategies. "),t("br"),e._v("Passionate about creating immersive gaming experiences and continuously improving my skills. "),t("br"),t("br"),e._v("If you have any opportunities, feel free to "),t("router-link",{attrs:{to:"/contact"}},[e._v("contact me")]),e._v(". "),t("br"),t("br"),e._v("Besides game development, I enjoy exploring new technologies, designing creative UI/UX, and optimizing game performance. ")],1),e._m(0),t("div",{staticStyle:{clear:"both"}}),e._m(1)])},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"photo"},[t("img",{attrs:{src:"img/avatar.png",alt:"Photo of [Your Name]"}})])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"full-content"},[t("h2",[e._v("Work Experience")]),t("h3",[e._v("Unity Developer")]),t("h4",[e._v("1.5 Years Experience")]),t("ul",[t("li",[e._v("Developed and optimized gameplay using C# and Unity.")]),t("li",[e._v("Designed and implemented Particle Systems for game effects.")]),t("li",[e._v("Worked with Shaders to enhance graphics quality.")]),t("li",[e._v("Created and optimized UI designs for better user experience.")]),t("li",[e._v("Integrated Firebase for data storage and player management.")]),t("li",[e._v("Implemented and optimized AdMob ads for monetization.")]),t("li",[e._v("Developed and maintained Client-Server architecture.")])]),t("h2",[e._v("Skills")]),t("div",{staticClass:"skill-set"},[t("h3",[e._v("Game Development")]),t("ul",[t("li",[e._v("Unity")]),t("li",[e._v("C# Programming")]),t("li",[e._v("OOP & ECS")])])]),t("div",{staticClass:"skill-set"},[t("h3",[e._v("Graphics & Effects")]),t("ul",[t("li",[e._v("Particle System")]),t("li",[e._v("Shader")])])]),t("div",{staticClass:"skill-set"},[t("h3",[e._v("UI/UX Design")]),t("ul",[t("li",[e._v("Figma")]),t("li",[e._v("Photoshop & Illustrator")])])]),t("div",{staticClass:"skill-set"},[t("h3",[e._v("Networking & Monetization")]),t("ul",[t("li",[e._v("Firebase")]),t("li",[e._v("Client-Server")]),t("li",[e._v("AdMob")])])]),t("div",{staticStyle:{clear:"both"}}),t("h2",[e._v("Education")]),t("h3",[e._v("PTIT HCM (2020 - 2025)")]),t("h4",[e._v("Information Technology")]),t("h2",[e._v("Hobbies & Interests")]),t("div",[t("h3",[e._v("Technology")]),t("div",[e._v("Passionate about exploring new frameworks, AI, and game engines.")]),t("h3",[e._v("Design")]),t("div",[e._v("Enjoys creating intuitive UI/UX designs for interactive experiences.")]),t("h3",[e._v("Gaming")]),t("div",[e._v("Always exploring new game mechanics and trends in the gaming industry.")])])])}],r=t("2b0e"),o=r["a"].extend({name:"Resume"}),l=o,s=(t("366c"),t("2877")),c=Object(s["a"])(l,a,i,!1,null,"49e3913a",null);n["default"]=c.exports},"1e66":function(e,n,t){"use strict";var a=t("dec8"),i=t.n(a);i.a},"27bb":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"projects-list"},[e._l(e.projects,(function(n){return[t("div",{key:n.id,staticClass:"project-item",class:{wide:n.isWide,high:n.isHigh},on:{click:function(t){return e.showDetails(n)}}},[t("div",{staticClass:"project-item-image",style:{"background-image":"url("+n.iconUrl+")"}}),t("div",{staticClass:"title-bar",style:{"background-color":n.accentColor+"DD"}},[t("div",{staticClass:"title-text"},[e._v(" "+e._s(n.name)+" ")])])])]}))],2),t("ProjectDetailsOverlay",{attrs:{visible:e.showPopup,title:e.popupTitle,htmlContent:e.popupContent,color:e.popupColor},on:{close:function(n){e.showPopup=!1}}})],1)},i=[],r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("transition",{attrs:{name:"fade"}},[e.visible?t("div",[t("div",{staticClass:"overlay"}),t("div",{staticClass:"dialog",style:{"background-color":e.color}},[t("h1",{staticClass:"dialog-title"},[e._v(e._s(e.title))]),t("div",{staticClass:"dialog-close",on:{click:function(n){return e.$emit("close")}}},[t("i",{staticClass:"fa fa-times fa-lg fa-fw"})]),t("div",{staticClass:"dialog-content"},[t("div",{domProps:{innerHTML:e._s(e.htmlContent)}}),t("div",{staticClass:"dialog-bottom"},[t("a",{staticClass:"dialog-close-button",on:{click:function(n){return e.$emit("close")}}},[e._v("Close")])])])])]):e._e()])},l=[],s=r["a"].extend({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(e){console.log("fetching image "+e)}}}),c=s,d=(t("1e66"),t("2877")),p=Object(d["a"])(c,o,l,!1,null,"e66acff8",null),u=p.exports,g=r["a"].extend({name:"ProjectsList",components:{ProjectDetailsOverlay:u},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(e){this.popupTitle=e.name,this.popupColor=e.accentColor,this.popupContent=e.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}}),m=g,v=(t("5935"),Object(d["a"])(m,a,i,!1,null,"190958aa",null));n["a"]=v.exports},"35ca":function(e,n,t){},"366c":function(e,n,t){"use strict";var a=t("bf48"),i=t.n(a);i.a},"416f":function(e,n,t){},"4d97":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Project")]),t("div",{staticStyle:{"margin-bottom":"30px"}},[e._v(" The following are some project I've made or heavily contributed to. ")]),t("ProjectsList",{attrs:{projects:e.projects}}),e._m(0)],1)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{"margin-top":"20px"}},[e._v(" There is more to see on "),t("a",{attrs:{target:"_blank",href:"https://someexternalwebsite.com"}},[e._v("some external website")])])}],r=t("2b0e"),o=t("27bb"),l=t("983d"),s=[new l["a"]("project-1","Galaxy Hunter","img/projects/galaxy-hunter.jpg",'\n    <div class="paragraph">\n     Embark on an epic space adventure in Galaxy Hunter, an action-packed shoot \'em up where you take control of a customizable starfighter!\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/pjmU-fdNeWk" frameborder="0" allowfullscreen></iframe>\n    </div>\n    <div class="paragraph center">\n        <p>Link Apk: <a href="https://drive.google.com/uc?export=download&id=1sME7a4mE6YGmhIoNFGfJvSqlHThsH-5D" target="_blank">Download</a></p>\n    </div>\n\n    <div class="paragraph">\n        In charge of work :\n        <ul>\n        <li>Level design</li>\n        <li>UI Designer</li>\n        <li>Core game programming</li>\n        <li>UI illustration</li>\n        <li>Effect design</li>\n        <li>Animation coding</li>\n        <li>Programming secondary features</li>\n        </ul>\n    </div>\n\n    ',"#23bd69",!0),new l["a"]("project-2","Flower Shop","img/projects/flower-shop.png",'\n    <div class="paragraph">\n        Welcome to Flower Shop, the perfect app for flower lovers and creative minds! Dive into a colorful world where you can explore different flower species, craft stunning floral products, and run your very own flower shop.\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/g0jov2END8E" frameborder="0" allowfullscreen></iframe>\n    </div>\n    <div class="paragraph center">\n        <p>Link Apk: <a href="https://drive.google.com/uc?export=download&id=1jWaYXhmzccPV0fM7SroWAo1P0915rvU1" target="_blank">Download</a></p>\n    </div>\n    <div class="paragraph">\n        In charge of work :\n        <ul>\n        <li>Level design</li>\n        <li>UI Designer</li>\n        <li>Core game programming</li>\n        <li>UI illustration</li>\n        <li>Effect design</li>\n        <li>Animation coding</li>\n        <li>Programming secondary features</li>\n        </ul>\n    </div>\n\n    <div class="paragraph">\n    ',"#5a78af"),new l["a"]("project-3","Color the flag","img/projects/color-the-flag.png",'\n    <div class="paragraph">\n        Welcome to Color The Flag: Paint Puzzle, where vibrant colors meet exciting challenges! Immerse yourself in the art of flag design as you embark on a colorful journey around the world. Travel across the globe and train your brain by memorizing and painting all the flags!\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://youtube.com/embed/wO6PwaF3AOc" frameborder="0" allowfullscreen></iframe>\n    </div>\n    <div class="paragraph center">\n        <p>Link Apk: <a href="https://drive.google.com/uc?export=download&id=16xyNAzYqbjOgo5Pu8MOQQk2Qa4mkUlJh" target="_blank">Download</a></p>\n    </div>\n    <div class="paragraph">\n        In charge of work :\n        <ul>\n        <li>Level design</li>\n        <li>Effect design</li>\n        <li>Programming secondary features</li>\n        </ul>\n    </div>\n    ',"#383838"),new l["a"]("project-4","2248","img/projects/2248.png",'\n    <div class="paragraph">\n    Welcome to 2248: Number Puzzle, a fun and addictive number-connecting game! Challenge your mind by linking matching numbers to create bigger ones and reach the highest score. In 2248, you can make friends, compete on the leaderboard, and see how you rank against players worldwide. Train your brain, relax, and enjoy the ultimate number puzzle experience!\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://youtube.com/embed/337Rb9k4W48" frameborder="0" allowfullscreen></iframe>\n    </div>\n    <div class="paragraph center">\n        <p>Link Apk: <a href="https://drive.google.com/uc?export=download&id=1VxEIYYI23ybXYM6UEV41jVtDUL15nO2R" target="_blank">Download</a></p>\n    </div>\n    <div class="paragraph">\n       In charge of work :\n        <ul>\n        <li>Friends and Leaderboard system</li>\n        <li>UI Designer</li>\n        <li>UI illustration</li>\n        <li>Programming secondary features</li>\n        </ul>\n    </div>\n    ',"#e80fb7"),new l["a"]("project-5","Merge Cube","img/projects/merge-cube.png",'\n    <div class="paragraph">\n        Merge Cube is a fun merging game where you combine blocks of the same level to create bigger ones! Merge wisely, unlock new levels, and achieve the highest score. Are you ready for the challenge?\n    </div>\n     <div class="paragraph center">\n        <iframe class="youtube" src="https://youtube.com/embed/R5NGerkM1zE" frameborder="0" allowfullscreen></iframe>\n    </div>\n    <div class="paragraph center">\n        <p>Link Apk: <a href="https://drive.google.com/uc?export=download&id=1MW3S5FGre0p_HD62Xy7fCcO9_FPVygHP" target="_blank">Download</a></p>\n    </div>\n    <div class="paragraph">\n       In charge of work :\n        <ul>\n        <li>Level design</li>\n        <li>UI Designer</li>\n        <li>Core game programming</li>\n        <li>UI illustration</li>\n        <li>Effect design</li>\n        <li>Animation coding</li>\n        <li>Programming secondary features</li>\n        </ul>\n    </div>\n    ',"#e48246")],c=r["a"].extend({name:"GameProjects",components:{ProjectsList:o["a"]},data:function(){return{projects:s}}}),d=c,p=t("2877"),u=Object(p["a"])(d,a,i,!1,null,null,null);n["default"]=u.exports},5935:function(e,n,t){"use strict";var a=t("416f"),i=t.n(a);i.a},"67f3":function(e,n,t){"use strict";var a=t("ee3f"),i=t.n(a);i.a},"7c58":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Other Project")]),t("div",{staticStyle:{"margin-bottom":"30px"}},[e._v(" And here are some of my personal projects when I first started learning game making. ")]),t("ProjectsList",{attrs:{projects:e.projects}})],1)},i=[],r=t("2b0e"),o=t("27bb"),l=t("983d"),s=[new l["a"]("project-6","Tile TFT","img/projects/TileTFT.png",'\n    <div class="paragraph">\n      <strong>Sultans Of Sing</strong> is a thing of beauty that I am so proud of. It\'s available on Windows Store because why not.\n    </div>\n\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://youtube.com/embed/ZimSdH4Q_MM" frameborder="0" allowfullscreen></iframe>\n    </div>\n    <div class="paragraph center">\n        <p>Link Apk: <a href="https://drive.google.com/uc?export=download&id=12oHPYPz5Pi6mmUJyzwi55oTpqILIM3wl" target="_blank">Download</a></p>\n    </div>\n\n    <div class="paragraph">\n        In charge of work :\n        <ul>\n        <li>Level design</li>\n        <li>UI Designer</li>\n        <li>Core game programming</li>\n        <li>UI illustration</li>\n        <li>Effect design</li>\n        <li>Animation coding</li>\n        <li>Programming secondary features</li>\n        </ul>\n    </div>\n    ',"#c10606",!0),new l["a"]("project-7","Zuma","img/projects/zuma.png",'\n    <div class="paragraph">\n                <strong>Drew Blood</strong> is a thing of beauty that I am so proud of. I could write about it for hours.\n            </div>\n\n            <div class="paragraph">\n              Main features :\n              <ul>\n              <li>Some stuff</li>\n              <li>Some great stuff</li>\n              <li>More awesome stuff</li>\n              <li>And then some</li>\n              </ul>\n          </div>\n            ',"#1ca1e2"),new l["a"]("project-8","All in Hole","img/projects/project-8-icon.png",'\n    <div class="paragraph">\n                <strong>The Art of Walking</strong> is a thing of beauty that I am so proud of. I could write about it for hours.\n            </div>\n\n          <div class="paragraph">\n          Main features :\n          <ul>\n          <li>Some stuff</li>\n          <li>Some great stuff</li>\n          <li>More awesome stuff</li>\n          <li>And then some</li>\n          </ul>\n      </div>\n        '),new l["a"]("project-9","Fixel by color","img/projects/project-9-icon.png",'\n     <div class="paragraph">\n                <strong>Nikolable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.\n                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@goumbik">Lukas</a>.\n            </div>\n\n            <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Some stuff</li>\n        <li>Some great stuff</li>\n        <li>More awesome stuff</li>\n        <li>And then some</li>\n        </ul>\n    </div>\n\n    '),new l["a"]("project-10","Brick Run","img/projects/merge-cube.png",'\n        <div class="paragraph">\n            Merge Cube is a fun merging game where you combine blocks of the same level to create bigger ones! Merge wisely, unlock new levels, and achieve the highest score. Are you ready for the challenge?\n        </div>\n         <div class="paragraph center">\n            <iframe class="youtube" src="https://youtube.com/embed/R5NGerkM1zE" frameborder="0" allowfullscreen></iframe>\n        </div>\n        <div class="paragraph center">\n            <p>Link Apk: <a href="https://drive.google.com/uc?export=download&id=1MW3S5FGre0p_HD62Xy7fCcO9_FPVygHP" target="_blank">Download</a></p>\n        </div>\n        <div class="paragraph">\n           In charge of work :\n            <ul>\n            <li>Level design</li>\n            <li>UI Designer</li>\n            <li>Core game programming</li>\n            <li>UI illustration</li>\n            <li>Effect design</li>\n            <li>Animation coding</li>\n            <li>Programming secondary features</li>\n            </ul>\n        </div>\n        ',"#e48246")],c=r["a"].extend({name:"OtherProjects",components:{ProjectsList:o["a"]},data:function(){return{projects:s}}}),d=c,p=t("2877"),u=Object(p["a"])(d,a,i,!1,null,null,null);n["default"]=u.exports},"8cdb":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"http-404"},[e._v("404 🙈")])},i=[],r=(t("67f3"),t("2877")),o={},l=Object(r["a"])(o,a,i,!1,null,"c64612d2",null);n["default"]=l.exports},"983d":function(e,n,t){"use strict";var a=function(){function e(e,n,t,a,i,r,o){void 0===i&&(i="#000000"),void 0===r&&(r=!1),void 0===o&&(o=!1),this.id=e,this.name=n,this.htmlDescription=a,this.iconUrl=t,this.isHigh=r,this.isWide=o,this.accentColor=i}return e}();n["a"]=a},"9ba8":function(e,n,t){},b8fa:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",[e._v("Let's get in touch")]),t("div",{staticStyle:{"margin-bottom":"40px"}},[e._v("I'm looking for a job!"),t("br"),e._v("Please contact me about any opportunities.")]),t("ul",[t("li",[t("i",{staticClass:"fa fa-envelope-o fa-lg fa-fw"}),t("a",{attrs:{href:"mailto:letrongchien472002@gmail.com",target:"_blank"}},[e._v("letrongchien472002@gmail.com")])]),t("li",[t("i",{staticClass:"fa fa-phone fa-lg fa-fw"}),t("a",{attrs:{href:"tel:+84334164873"}},[e._v("+84334164873")])])])])}],r=(t("fea3"),t("2877")),o={},l=Object(r["a"])(o,a,i,!1,null,"6b7025ec",null);n["default"]=l.exports},bf48:function(e,n,t){},cd25:function(e,n,t){"use strict";var a=t("35ca"),i=t.n(a);i.a},dec8:function(e,n,t){},ee3f:function(e,n,t){},f820:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticStyle:{"margin-bottom":"80px"}},[t("h1",[e._v("Hello!")]),t("div",{staticClass:"paragraph"},[e._m(0),t("div",{staticStyle:{"margin-top":"20px"}},[e._v("I've worked on "),t("router-link",{attrs:{to:"/game-projects"}},[e._v("projects")]),e._v(", on "),t("router-link",{attrs:{to:"/other-projects"}},[e._v("other projects")]),e._v(", and took part in "),t("router-link",{attrs:{to:"/resume"}},[e._v("a few things")]),e._v(" as well.")],1),t("div",{staticStyle:{"margin-top":"40px"}},[e._v(" I'm "),t("strong",[e._v("currently looking for new opportunities")]),e._v(" as a Unity Developer. You can reach me at "),t("a",{attrs:{href:"mailto:letrongchien472002@gmail.com"}},[e._v("letrongchien472002@gmail.com")]),e._v(" or "),t("router-link",{attrs:{to:"/contact"}},[e._v("through here")]),e._v(". ")],1)]),e._m(1),t("div",{staticStyle:{clear:"both"}})])},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._v(" I'm "),t("strong",[e._v("Chien")]),e._v(", a passionate Unity Developer with 1.5 years of experience."),t("br"),e._v(" I specialize in developing and optimizing gameplay using C# and Unity, creating stunning particle effects, and designing intuitive UI."),t("br"),e._v(" I also have experience working with Shaders, Client-Server systems, Firebase integration, and AdMob monetization."),t("br"),e._v(" Beyond coding, I enjoy exploring new design tools like Figma, Photoshop, and Illustrator to enhance user experience. ")])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"photo"},[t("img",{attrs:{src:"img/avatar.png",alt:"Avatar of Chien"}})])}],r=(t("cd25"),t("2877")),o={},l=Object(r["a"])(o,a,i,!1,null,"55d4fa2e",null);n["default"]=l.exports},fea3:function(e,n,t){"use strict";var a=t("9ba8"),i=t.n(a);i.a}}]);
//# sourceMappingURL=about.be6fc7d5.js.map