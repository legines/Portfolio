(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bug0ut/Documents/Code/Portfolio/src/main.ts */"zUnb");


/***/ }),

/***/ "6AOp":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ProjectComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "OLD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["./assets/gp.png", "./assets/hangman.png"]; };
class ProjectComponent {
    constructor() { }
    ngOnInit() {
        if (this.url == './assets/cov-api.png') {
            this.projectUrl = 'https://covapi-rails.herokuapp.com/api-docs/index.html';
            this.icons = ['https://pixaflo.com/wp-content/uploads/2019/06/Ruby-page-logo.png'];
            this.projectTitle = 'CovApi';
            this.projectText = 'is an open Coronavirus outbreak api that presents data about confirmed cases, deaths and recovered cases. Time line information is based on the data provided by the Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE). Built using Ruby on Rails and Swagger.';
        }
        else if (this.url == './assets/ended.png') {
            this.projectUrl = 'https://endedbynetflix.com/';
            this.icons = ['https://pixaflo.com/wp-content/uploads/2019/06/Ruby-page-logo.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1280px-Typescript_logo_2020.svg.png', 'https://www.mica.nl/wp-content/uploads/2020/02/Angular-Logo.png'];
            this.projectTitle = 'Ended By Netflix';
            this.projectText = 'is an archive of all the shows that have been ended by Netflix in one way or another (canceled, ended, or unknown). Search through the archive or click on a genre to view all in that section. Detailed show information is shown on hover. Built on a Ruby on Rails backend and an Angualar 12 front end.';
        }
        else if (this.url == './assets/frag.png') {
            this.projectUrl = 'https://marketplace.visualstudio.com/items?itemName=bugfrag.bugfrag';
            this.projectTitle = 'BugFrag';
            this.projectText = 'is a VSCode theme that combines the Gruvbox Material Dark Hard and One Dark Pro themes. Check it out!';
        }
        else {
            this.projectUrl = 'https://legines.github.io/Hangman-Game/';
            this.icons = ['https://web.archive.org/web/20200531002729im_/https://d33wubrfki0l68.cloudfront.net/041b1fc21a460c50d6231f6c30666e4b46272708/d0092/images/logos/js-logo.svg'];
            this.projectTitle = '2Fast2Furious : Hangman Edition';
            this.projectText = ', one of my first projects ever, is a simple hangman game based on the Fast and Furious franchise. I like to look back on this project as a reminder of how much Ive learned since then and all the fun I had building it. Built with vanilla JS.';
        }
    }
    goToUrl() {
        window.location.href = this.projectUrl;
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], inputs: { url: "url" }, decls: 7, vars: 6, consts: [[1, "project", 3, "click"], [1, "screenshot", 3, "src"], ["target", "_blank", "rel", "\u201Dnoopener\u201D", 3, "href"], ["class", "tech", 4, "ngIf"], [1, "tech"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_Template_div_click_0_listener() { return ctx.goToUrl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectComponent_div_6_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.projectUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.projectTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.projectText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0).includes(ctx.url));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".project[_ngcontent-%COMP%] {\n  background-color: #073642;\n  padding: 1em;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  width: 304.6px;\n  transform: scale(1);\n  transition: transform 0.2s;\n  min-width: 304.6px;\n  box-shadow: rgba(103, 73, 136, 0.15) 1px 1px 15px;\n  height: 27em;\n  margin-top: 0.5em;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n.project[_ngcontent-%COMP%]   .screenshot[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n.project[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  transition: transform 0.5s;\n}\n.project[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #ffd44d;\n}\n.project[_ngcontent-%COMP%]   .tech[_ngcontent-%COMP%] {\n  background-color: #c99800;\n  height: 100px;\n  left: -65px;\n  position: absolute;\n  top: -65px;\n  width: 100px;\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n.project[_ngcontent-%COMP%]   .tech[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  left: 21px;\n  top: 80px;\n  position: absolute;\n  color: #00222b;\n  font-size: 13px;\n  font-weight: 600;\n}\n.project[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-indent: 0;\n}\n.project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #66d7ce;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0FBRVI7QUFBSTtFQUNJLDJCQUFBO0VBQ0EsMEJBQUE7QUFFUjtBQURRO0VBQ0ksY0FBQTtBQUdaO0FBQUk7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUFFUjtBQURRO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFHWjtBQUlJO0VBQ0ksY0FBQTtBQUZSO0FBSUk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUFGUiIsImZpbGUiOiJwcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzM2NDI7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDMwNC42cHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICBtaW4td2lkdGg6IDMwNC42cHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgxMDMsIDczLCAxMzYsIDAuMTUpIDFweCAxcHggMTVweDtcbiAgICBoZWlnaHQ6IDI3ZW07XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5zY3JlZW5zaG90IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZDQ0ZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudGVjaCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOTk4MDA7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGxlZnQ6IC02NXB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTY1cHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBsZWZ0OiAyMXB4O1xuICAgICAgICAgICAgdG9wOiA4MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgY29sb3I6ICMwMDIyMmI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIGltZyB7XG4gICAgICAgIC8vICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgLy8gICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgcCB7XG4gICAgICAgIHRleHQtaW5kZW50OiAwO1xuICAgIH1cbiAgICBhIHtcbiAgICAgICAgY29sb3I6ICM2NmQ3Y2U7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/project.component */ "6AOp");



function AppComponent_app_project_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-project", 19);
} if (rf & 2) {
    const url_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", url_r1);
} }
class AppComponent {
    constructor() {
        this.title = 'portfolio';
        this.urls = ['./assets/ended.png', './assets/cov-api.png', './assets/frag.png', './assets/hangman.png'];
        this.img_url = './assets/IMG_1584.jpg';
    }
    getCurrentYear() {
        return new Date().getFullYear();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 29, vars: 3, consts: [[1, "home"], [1, "header"], ["href", "mailto:legines@gmail.com", "target", "_blank", "rel", "\u201Dnoopener\u201D"], [1, "fa-regular", "fa-envelope"], ["href", "https://github.com/legines", "target", "_blank", "rel", "\u201Dnoopener\u201D", 1, "mid"], [1, "fa-brands", "fa-github-square"], ["href", "https://www.linkedin.com/in/luis-gines/", "target", "_blank", "rel", "\u201Dnoopener\u201D"], [1, "fa-brands", "fa-linkedin"], [1, "main"], [1, "name-container"], [1, "name"], [1, "circle"], [3, "src"], [1, "about"], [1, "underlined"], [1, "projects"], [1, "projects-container"], [3, "url", 4, "ngFor", "ngForOf"], [1, "footer"], [3, "url"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Luis Gines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Full Stack Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Bio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Hello, I am a full-stack developer based in Mebane, NC with a passion for building stuff. Programming was something I always wanted to do ever since MySpace and Neopets let me edit html and css, however I wound up pursuing Biochemistry. Now I work professionally as a developer using Ruby on Rails and Angular/TypeScript and enjoy spending some of my spare time with family, working on home improvements (surprisingly), and working my way through a list that's too long of tv/movies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppComponent_app_project_25_Template, 1, 1, "app-project", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.img_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.urls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.getCurrentYear(), " Luis Gines");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _project_project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"]], styles: [".home[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  width: 736px;\n  margin: 0 auto 2em;\n  padding: 1em;\n  font-size: 1.3em;\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #66d7ce;\n}\n.home[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   a.mid[_ngcontent-%COMP%] {\n  margin: 0 0.5em;\n}\n.home[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  max-width: 736px;\n  margin: 0 auto;\n  padding: 0 1em;\n}\n.home[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 2em;\n}\n.home[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  border: 2px solid #c99800;\n  width: 100px;\n  height: 100px;\n  display: inline-block;\n  border-radius: 50px;\n  overflow: hidden;\n  margin-right: 2em;\n  margin-left: auto;\n  position: relative;\n}\n.home[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -20px;\n  top: -7px;\n  height: 120px;\n}\n.home[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  line-height: 1.2;\n  color: #66d7ce;\n}\n.home[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.home[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .name-container[_ngcontent-%COMP%], .home[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%], .home[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%] {\n  margin-bottom: 1.5em;\n}\n.home[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%], .home[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n  text-align: justify;\n  text-indent: 1em;\n}\n.home[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .underlined[_ngcontent-%COMP%] {\n  border-bottom: 4px solid #c99800;\n  font-size: 20px;\n  text-indent: initial;\n  margin-bottom: 0.5em;\n}\n.home[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .projects-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  flex-wrap: wrap;\n}\n.home[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding: 1em;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRVI7QUFEUTtFQUNJLGNBQUE7QUFHWjtBQUZZO0VBQ0ksZUFBQTtBQUloQjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUVSO0FBRFE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFHWjtBQUZZO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUloQjtBQUZZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFJaEI7QUFGWTtFQUNHLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSWY7QUFGWTtFQUNJLFNBQUE7QUFJaEI7QUFEUTtFQUNJLG9CQUFBO0FBR1o7QUFEUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUdaO0FBRFE7RUFDSSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FBR1o7QUFEUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBR1o7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRVIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLmhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgICAgICB3aWR0aDogNzM2cHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDJlbTtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjZkN2NlO1xuICAgICAgICAgICAgJi5taWQge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwLjVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAubWFpbiB7XG4gICAgICAgIG1heC13aWR0aDogNzM2cHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICAgICAgLm5hbWUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XG4gICAgICAgICAgICAuY2lyY2xlIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYzk5ODAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogLTIwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAtN3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDIuNWVtO1xuICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICAgICAgIGNvbG9yOiAjNjZkN2NlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5uYW1lLWNvbnRhaW5lciwgLmFib3V0LCAucHJvamVjdHMge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gICAgICAgIH1cbiAgICAgICAgLmFib3V0LCAucHJvamVjdHMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDFlbTtcbiAgICAgICAgfVxuICAgICAgICAudW5kZXJsaW5lZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2M5OTgwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiBpbml0aWFsO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgICAgIH1cbiAgICAgICAgLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZvb3RlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/project.component */ "6AOp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _project_project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map