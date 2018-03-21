webpackJsonp([1,4],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(296);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageComponent = (function () {
    function PageComponent(route, contentService) {
        this.route = route;
        this.contentService = contentService;
    }
    PageComponent.prototype.ngOnInit = function () {
        var pageData = this.route.snapshot.data['page'];
        this.page = this.contentService.pages[pageData];
    };
    PageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page',
            template: __webpack_require__(547),
            styles: [__webpack_require__(531)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__["a" /* ContentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__["a" /* ContentService */]) === 'function' && _b) || Object])
    ], PageComponent);
    return PageComponent;
    var _a, _b;
}());
//# sourceMappingURL=page.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentService = (function () {
    function ContentService() {
        this.pages = {
            'home': {
                title: 'Home',
                name: 'Julia',
                content: 'Some home content.',
                image: 'http://lorempixel.com/400/200'
            },
            'about': {
                title: 'About',
                subtitle: 'About Us',
                content: 'Some content about us.',
                image: 'http://lorempixel.com/600/300'
            },
            'contact': {
                title: 'Contact',
                subtitle: 'Contact Us',
                content: 'How to contact us.',
                image: 'http://lorempixel.com/220/100'
            }
        };
    }
    ContentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ContentService);
    return ContentService;
}());
//# sourceMappingURL=content.service.js.map

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 340;


/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(470);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_page_component__ = __webpack_require__(302);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__page_page_component__["a" /* PageComponent */], data: {
            page: 'home'
        } },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__page_page_component__["a" /* PageComponent */], data: {
            page: 'about'
        } },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_2__page_page_component__["a" /* PageComponent */], data: {
            page: 'contact'
        } },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations__ = __webpack_require__(468);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.openClose = 'open';
    }
    AppComponent.prototype.hideAndShow = function () {
        this.openClose = (this.openClose === 'open') ? 'close' : 'open';
        // alert('alert hideshow' + this.openClose);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(540),
            styles: [__webpack_require__(524)],
            animations: [
                //  These animations are stored in ./shared/animations
                __WEBPACK_IMPORTED_MODULE_1__shared_animations__["a" /* sidemenu */],
                __WEBPACK_IMPORTED_MODULE_1__shared_animations__["b" /* mainContainer */],
                __WEBPACK_IMPORTED_MODULE_1__shared_animations__["c" /* hero */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_page_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_content_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_directives_fullpage_directive__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_popover__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_header_header_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_hero_hero_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_content_dashboard_content_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_myprogress_myprogress_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_adminresults_adminresults_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_carousel__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_resultscarousel_resultscarousel_component__ = __webpack_require__(467);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__page_page_component__["a" /* PageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_directives_fullpage_directive__["a" /* FullpageDirective */],
                __WEBPACK_IMPORTED_MODULE_10__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_hero_hero_component__["a" /* HeroComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_dashboard_content_dashboard_content_component__["a" /* DashboardContentComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_myprogress_myprogress_component__["a" /* MyprogressComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_adminresults_adminresults_component__["a" /* AdminresultsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_resultscarousel_resultscarousel_component__["a" /* ResultscarouselComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                // BrowserAnimationsModule,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_popover__["PopoverModule"],
                __WEBPACK_IMPORTED_MODULE_15_ngx_carousel__["a" /* NgxCarouselModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services_content_service__["a" /* ContentService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminresultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminresultsComponent = (function () {
    function AdminresultsComponent() {
        this.adminresults = {
            title: 'Assessment and results',
            summary: 'View detailed results information on your qualification dashboard.'
        };
    }
    AdminresultsComponent.prototype.ngOnInit = function () {
    };
    AdminresultsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-adminresults',
            template: __webpack_require__(541),
            styles: [__webpack_require__(525)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminresultsComponent);
    return AdminresultsComponent;
}());
//# sourceMappingURL=adminresults.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardContentComponent = (function () {
    function DashboardContentComponent() {
        this.dashcontent = {
            heading1: 'Join AAT Green Room to take part in member surveys',
            heading2: '3 saved bookmarks',
            heading3: 'We launched new qualification',
            heading4: 'My progress',
            heading5: 'Assessments and results',
            heading6: 'Study support',
            heading7: 'My career',
            heading8: 'News and updates'
        };
    }
    DashboardContentComponent.prototype.ngOnInit = function () {
    };
    DashboardContentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-content',
            template: __webpack_require__(542),
            styles: [__webpack_require__(526)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardContentComponent);
    return DashboardContentComponent;
}());
//# sourceMappingURL=dashboard-content.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.header = {
            firstname: 'John',
            lastname: 'Snow',
            content: 'Some home content.',
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-header',
            template: __webpack_require__(543),
            styles: [__webpack_require__(527)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroComponent = (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-hero',
            template: __webpack_require__(544),
            styles: [__webpack_require__(528)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroComponent);
    return HeroComponent;
}());
//# sourceMappingURL=hero.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprogressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyprogressComponent = (function () {
    function MyprogressComponent() {
        // User input add new items functionality:
        // code.tutsplus.com/tutorials/creating-a-grocery-list-manager-using-angular-part-1-add-display-items--cms-28586
        // task: string;
        // tasks = [];
        //
        // onClick(){
        //   this.tasks.push({name: this.task});
        //   this.task = '';
        // }
        this.myprogress = {
            title: 'My progress',
            summary: 'Track your progress through your qualification. You may work through these learning areas in any order.',
            item1: {
                title: 'Accounts preparation',
                task: '2/2 tasks',
                status: 'Completed',
                module: {
                    title1: 'Lorem ipsum dolor - sit amet',
                    title2: 'Lorem ipsum dolor - sit amet'
                }
            },
            item2: {
                title: 'Accounting Systems and Controls',
                task: '4/4 tasks',
                status: 'Completed',
                module: {
                    title1: 'Lorem ipsum dolor - sit amet',
                    title2: 'Lorem ipsum dolor - sit amet',
                    title3: 'Lorem ipsum dolor - sit amet',
                    title4: 'Lorem ipsum dolor - sit amet'
                }
            },
            item3: {
                title: 'Management Accounting',
                task: '2/3 tasks',
                status: 'In progress',
                module: {
                    title1: 'Module 1 - Credit Management',
                    title2: 'Module 2 - Cash and Treasury Management',
                    title3: 'Module 3 - External auditing'
                }
            },
            item4: {
                title: 'Work Effectively in Finance',
                task: '0/2 tasks',
                status: 'Pending',
                module: {
                    title1: 'Lorem ipsum dolor - sit amet',
                    title2: 'Lorem ipsum dolor - sit amet'
                }
            }
        };
        this.my_Class = 'style1';
    }
    MyprogressComponent.prototype.toggle_class = function () {
        if (this.my_Class === 'style1') {
            this.my_Class = 'style2';
        }
        else {
            this.my_Class = 'style1';
        }
    };
    MyprogressComponent.prototype.ngOnInit = function () {
    };
    MyprogressComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-myprogress',
            template: __webpack_require__(545),
            styles: [__webpack_require__(529)]
        }), 
        __metadata('design:paramtypes', [])
    ], MyprogressComponent);
    return MyprogressComponent;
}());
//# sourceMappingURL=myprogress.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultscarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultscarouselComponent = (function () {
    function ResultscarouselComponent() {
    }
    ResultscarouselComponent.prototype.ngOnInit = function () {
        this.carouselOne = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 12000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: false,
            custom: 'banner'
        };
    };
    ResultscarouselComponent.prototype.myfunc = function (event) {
        // carouselLoad will trigger this funnction when your load value reaches
        // it is helps to load the data by parts to increase the performance of the app
        // must use feature to all carousel
    };
    ResultscarouselComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-resultscarousel',
            template: __webpack_require__(546),
            styles: [__webpack_require__(530)]
        }), 
        __metadata('design:paramtypes', [])
    ], ResultscarouselComponent);
    return ResultscarouselComponent;
}());
//# sourceMappingURL=resultscarousel.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sidemenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mainContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hero; });

// https://www.udemy.com/the-complete-angular-master-class/learn/v4/t/lecture/7681422?start=0
// Make animations reusable
var sidemenu = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('sideMenuAnime', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('close', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: '0px', visibility: 'hidden' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('open', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ width: '260px' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('open => close', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('close => open', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-out'))
]);
var mainContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('mainContainerAnime', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('close', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ marginLeft: '90px' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('open', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ marginLeft: '260px' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('open => close', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('close => open', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-out'))
]);
var hero = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('heroAnime', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('close', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ paddingLeft: '105px' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('open', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ paddingLeft: '280px' })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('open => close', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-in')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('close => open', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('500ms ease-out'))
]);
//# sourceMappingURL=animations.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullpageDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullpageDirective = (function () {
    function FullpageDirective(element) {
        this.element = element;
    }
    FullpageDirective.prototype.onResize = function (event) {
        this.resize();
    };
    FullpageDirective.prototype.onLoad = function (event) {
        this.resize();
    };
    FullpageDirective.prototype.resize = function () {
        var bgwidth = this.element.nativeElement.width;
        var bgheight = this.element.nativeElement.height;
        var winwidth = window.innerWidth;
        var winheight = window.innerHeight;
        var widthratio = winwidth / bgwidth;
        var heightratio = winheight / bgheight;
        var widthdiff = heightratio * bgwidth;
        var heightdiff = widthratio * bgheight;
        if (heightdiff > winheight) {
            this.element.nativeElement.width = winwidth;
            this.element.nativeElement.height = heightdiff;
        }
        else {
            this.element.nativeElement.width = widthdiff;
            this.element.nativeElement.height = winheight;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FullpageDirective.prototype, "onResize", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('load', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], FullpageDirective.prototype, "onLoad", null);
    FullpageDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[fullpage]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], FullpageDirective);
    return FullpageDirective;
    var _a;
}());
//# sourceMappingURL=fullpage.directive.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p {\n    font-size: 18px; } }\n\n.hero {\n  height: 282px;\n  z-index: -999;\n  background: #DFE1E5;\n  padding-left: 30px;\n  padding-top: 60px; }\n  .hero p {\n    padding-top: 10px; }\n\n.sidebar {\n  height: 100%;\n  /* Full-height: remove this if you want \"auto\" height */\n  position: fixed;\n  /* Fixed Sidebar (stay in place on scroll) */\n  z-index: 1;\n  /* Stay on top */\n  top: 0;\n  /* Stay at the top */\n  left: 0;\n  overflow-x: hidden;\n  /* Disable horizontal scroll */ }\n  .sidebar-main {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    height: 100%; }\n    .sidebar-main-icons {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 68px;\n              flex: 0 0 68px;\n      max-width: 68px;\n      background: #1A1A1A; }\n      .sidebar-main-icons-brand {\n        padding: 20px 0 0 0;\n        height: 68px; }\n      .sidebar-main-icons ul {\n        color: #fff;\n        opacity: 0.8;\n        text-align: center; }\n        .sidebar-main-icons ul li {\n          padding: 15px;\n          height: 68px; }\n          .sidebar-main-icons ul li i {\n            font-size: 24px; }\n    .sidebar-main__menu {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 192px;\n              flex: 0 0 192px;\n      max-width: 192px;\n      background: #4A4A4A; }\n      .sidebar-main__menu button {\n        background: transparent;\n        border-color: transparent;\n        border-style: none;\n        border-width: 0;\n        padding: 15px 15px 0 0;\n        float: right;\n        position: relative;\n        top: 10px; }\n        .sidebar-main__menu button i.fa-angle-left {\n          color: #fff;\n          font-size: 20px; }\n      .sidebar-main__menu ul {\n        top: 68px;\n        position: relative;\n        color: #fff;\n        opacity: 0.8; }\n        .sidebar-main__menu ul li {\n          padding: 15px;\n          height: 68px; }\n\n.dashboard {\n  margin-left: 260px;\n  /* Same as the width of the sidebar */ }\n  .dashboard button {\n    background: transparent;\n    border-color: transparent;\n    border-style: none;\n    border-width: 0;\n    padding: 15px 15px 0 0;\n    float: none;\n    position: absolute;\n    top: 10px;\n    left: 80px; }\n    .dashboard button i.fa-angle-right {\n      color: #1A1A1A;\n      font-size: 20px; }\n\ndashboard-content {\n  display: block;\n  position: relative;\n  top: -160px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "ul li {\n  padding-bottom: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p {\n    font-size: 18px; } }\n\n.card {\n  padding: 30px 15px 0 15px;\n  border: solid 1px #DFE1E5; }\n\n.card-progress, .card-adminresults {\n  margin-top: 30px; }\n\n.col-top {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  height: 85px; }\n  .col-top:first-child .card-top {\n    background-color: #00ab4e; }\n  .col-top .card-top {\n    height: 85px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding: 30px 15px; }\n\n.card-top-rhs {\n  background: url(\"https://knowclive.github.io/dashboard/assets/img/promo-bgd.png\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  height: 192px;\n  color: #fff;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding-bottom: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p {\n    font-size: 18px; } }\n\n.header {\n  position: relative;\n  height: 68px;\n  margin-left: 260px; }\n  .header-toolbar {\n    height: 68px;\n    line-height: 50px;\n    padding-top: 5px; }\n    .header-toolbar__inner {\n      float: right; }\n      .header-toolbar__inner ul {\n        margin: 0;\n        padding: 0 20px 0 0;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n        .header-toolbar__inner ul li {\n          list-style: none;\n          margin: 0;\n          padding: 0 0 0 20px;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          position: relative;\n          cursor: pointer; }\n          .header-toolbar__inner ul li label .fa-search {\n            position: absolute;\n            top: 5px;\n            right: 15px; }\n          .header-toolbar__inner ul li .avatar {\n            padding-left: 15px; }\n            .header-toolbar__inner ul li .avatar img {\n              border-radius: 50%; }\n          .header-toolbar__inner ul li .member-details {\n            padding: 0 30px 0 15px; }\n            .header-toolbar__inner ul li .member-details .name {\n              font-weight: 700;\n              position: relative;\n              top: -5px;\n              height: 10px; }\n            .header-toolbar__inner ul li .member-details .memberid {\n              font-size: 14px;\n              position: relative;\n              top: 5px; }\n      .header-toolbar__inner i {\n        height: 45px;\n        line-height: 50px;\n        color: #1A1A1A;\n        vertical-align: top;\n        font-size: 20px; }\n      .header-toolbar__inner label {\n        margin: 0;\n        padding: 0;\n        vertical-align: top; }\n        .header-toolbar__inner label i {\n          position: absolute;\n          top: 0;\n          right: 0; }\n        .header-toolbar__inner label input {\n          margin: 0;\n          padding: 0;\n          -moz-appearance: none;\n          -webkit-appearance: none;\n          border: 1px solid #fff;\n          font-size: 14px;\n          text-align: left;\n          width: 0;\n          height: 25px;\n          transition: 0.1s border linear, 0.25s width linear; }\n          .header-toolbar__inner label input:focus {\n            border: 2px solid #DFE1E5;\n            border-radius: 3px;\n            outline: none;\n            width: 650px;\n            height: 60px;\n            transition: 0.1s border linear, 0.25s width linear;\n            padding-left: 15px; }\n      .header-toolbar__inner__popover .profile-menu {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        width: 280px;\n        padding: 15px;\n        font-size: 18px;\n        box-shadow: 0 30px 30px 0 rgba(0, 0, 0, 0.1);\n        border-radius: 3px; }\n        .header-toolbar__inner__popover .profile-menu li {\n          padding: 10px 0; }\n          .header-toolbar__inner__popover .profile-menu li a {\n            color: #1A1A1A;\n            font-weight: 400; }\n            .header-toolbar__inner__popover .profile-menu li a span {\n              font-size: 14px;\n              position: relative;\n              top: -6px; }\n            .header-toolbar__inner__popover .profile-menu li a i.fa-external-link-alt {\n              vertical-align: unset;\n              height: -webkit-fit-content;\n              height: -moz-fit-content;\n              height: fit-content;\n              margin-left: 5px; }\n    .header-toolbar > div {\n      padding: 0 20px; }\n  .header #branding {\n    text-transform: uppercase;\n    letter-spacing: 0px;\n    float: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p {\n    font-size: 18px; } }\n\n.row {\n  padding-top: 15px; }\n\n.drawer {\n  border-bottom: 1px solid #DFE1E5;\n  border-top: 1px solid #DFE1E5;\n  cursor: pointer; }\n  .drawer p {\n    color: #00ab4e;\n    font-weight: 700; }\n    .drawer p:hover {\n      color: #006578;\n      text-decoration: underline; }\n\n.module-title {\n  position: relative;\n  left: 15px;\n  font-size: 14px; }\n\n.fa-check-circle {\n  color: #00883E;\n  font-size: 20px; }\n\n.fa-check {\n  font-size: 16px; }\n\n.accordion {\n  padding: 0;\n  max-height: 0;\n  overflow: hidden;\n  transition: all 0.8s ease; }\n  .accordion .row {\n    padding-bottom: 15px;\n    border-bottom: 1px solid #DFE1E5; }\n\n.accordion.open {\n  max-height: 400px;\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 0 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);", ""]);

// module
exports.push([module.i, "body {\n  font-family: \"Open Sans\", Arial, Helvetica, sans-serif;\n  font-weight: 400;\n  -webkit-text-size-adjust: 100%; }\n\nh1, h2, h3, h5, h6,\n.h1, .h2, .h3 {\n  font-family: \"Trade Gothic W01\", Arial, Helvetica, sans-serif;\n  margin: 0; }\n\n.myaat-h1, h4, .h4 {\n  font-family: \"Trade Gothic W04\", Arial, Helvetica, sans-serif; }\n\nul li {\n  list-style: none; }\n\n@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p {\n    font-size: 18px; } }\n\n.bannerStyle h1 {\n  background-color: #ccc;\n  min-height: 300px;\n  text-align: center;\n  line-height: 300px; }\n\n.leftRs {\n  position: absolute;\n  margin: auto;\n  top: -80px;\n  bottom: 0;\n  width: 42px;\n  height: 42px;\n  border-radius: 999px;\n  left: 0; }\n\n.rightRs {\n  position: absolute;\n  margin: auto;\n  top: -80px;\n  bottom: 0;\n  width: 42px;\n  height: 42px;\n  border-radius: 999px;\n  right: 0; }\n\n.ngxcarouselPoint li {\n  color: hotpink !important;\n  display: inline-block;\n  border-radius: 0;\n  background: #00ab4e;\n  padding: 4px;\n  margin: 0 4px;\n  transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);\n  transition: 0.4s; }\n\n.ngxcarouselPoint .active {\n  background: #00ab4e;\n  -webkit-transform: scale(1.8);\n          transform: scale(1.8); }\n\nngx-item {\n  text-align: center; }\n  ngx-item img {\n    margin-bottom: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "@media (min-width: 320px) {\n  .h1-hero {\n    font-size: 53px; }\n  h1, .h1 {\n    font-size: 34px;\n    color: black; }\n  h2, .h2 {\n    font-size: 27px;\n    font-weight: 100; }\n  h3, .h3 {\n    font-size: 22px;\n    font-weight: 100; }\n  h4, .h4 {\n    font-size: 18px; }\n  p {\n    font-size: 14px; } }\n\n@media (min-width: 992px) {\n  .h1-hero {\n    font-size: 61px; }\n  h1 {\n    font-size: 39px; }\n  h2 {\n    font-size: 31px;\n    font-weight: 100; }\n  h3 {\n    font-size: 25px;\n    font-weight: 100; }\n  h4 {\n    font-size: 20px; }\n  p {\n    font-size: 16px; } }\n\n@media (min-width: 1200px) {\n  .h1-hero {\n    font-size: 101px; }\n  h1 {\n    font-size: 57px; }\n  h2 {\n    font-size: 43px;\n    font-weight: 100; }\n  h3 {\n    font-size: 32px; }\n  h4 {\n    font-size: 24px !important; }\n  p {\n    font-size: 18px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "<!--<h1>-->\n<!--{{title}}-->\n<!--</h1>-->\n\n<!--<ul>-->\n<!--<li><a [routerLink]=\"['home']\" routerLinkActive=\"active\">Home</a></li>-->\n<!--<li><a [routerLink]=\"['about']\" routerLinkActive=\"active\">About</a></li>-->\n<!--<li><a [routerLink]=\"['contact']\" routerLinkActive=\"active\">Contact</a></li>-->\n<!--</ul>-->\n\n<!--<button class=\"btn btn-success\" style=\"margin-left:80px;\" [@myTrigger]=\"state\" (click)=\"toggleState()\">My Button</button>-->\n<!--<button class=\"btn btn-success\" style=\"margin-left:80px;\" (click)=\"toggleState()\" [@removeMe]=\"btnState\">My Button</button>-->\n\n<!--<ul>-->\n<!--&lt;!&ndash;<li *ngFor=\"let item of items\" [@myTrigger]=\"state\">{{ item }}</li>&ndash;&gt;-->\n<!--<li *ngFor=\"let item of items\" [@myTrigger]=\"state\" (@myTrigger.start)=\"animStart($event)\" (@myTrigger.done)=\"animDone($event)\">{{ item }}</li>-->\n<!--</ul>-->\n\n<!--<p>{{ animDetails }}</p>-->\n\n<!--<page></page>-->\n\n\n<div class=\"main-wrapper\">\n\n    <dashboard-header></dashboard-header>\n    <!--header-->\n\n    <aside class=\"sidebar\">\n\n        <div class=\"sidebar-main\">\n            <div class=\"sidebar-main-icons\">\n                <div class=\"sidebar-main-icons-brand\">\n                    <img alt=\"AAT Home\" height=\"30\" src=\"https://www.aat.org.uk/assets/img/svg/aat_logo.svg\"\n                         title=\"AAT Home\" width=\"69\">\n                </div>\n\n                <ul>\n                    <li><i class=\"fas fa-home\"></i></li>\n                    <li><i class=\"far fa-clipboard\"></i></li>\n                    <li><i class=\"far fa-life-ring\"></i></li>\n                    <li><i class=\"fas fa-suitcase\"></i></li>\n                    <li><i class=\"fas fa-users\"></i></li>\n                    <li><i class=\"fas fa-id-card\"></i></li>\n                    <li><i class=\"far fa-newspaper\"></i></li>\n                </ul>\n            </div>\n            <!--sidebar-main-icons-->\n\n            <div class=\"sidebar-main__menu\" [@sideMenuAnime]=\"openClose\">\n                <button (click)=\"hideAndShow()\" role=\"button\" class=\"btn-sidemenu__close\"><i class=\"fas fa-angle-left\"></i></button>\n                <ul>\n                    <li>MyAAT</li>\n                    <li>Training and assessment</li>\n                    <li>Professional zone</li>\n                    <li>My career</li>\n                    <li>Support resources</li>\n                    <li>My membership</li>\n                    <li>News and events</li>\n                </ul>\n\n            </div>\n            <!--sidebar-main__menu-->\n        </div>\n        <!--Sidebar container-->\n\n    </aside>\n    <!--sidebar-->\n\n\n    <div class=\"hero container-fluid\" [@heroAnime]=\"openClose\">\n        <h1 class=\"myaat-h1\">Hello John</h1>\n        <p>Welcome to your dashboard, notice anything new?</p>\n    </div>\n    <!--hero-->\n\n    <article class=\"dashboard\" [@mainContainerAnime]=\"openClose\">\n        <button (click)=\"hideAndShow()\" role=\"button\" class=\"btn-sidemenu__close\"><i class=\"fas fa-angle-right\"></i></button>\n\n        <dashboard-content class=\"container-fluid\"></dashboard-content>\n\n    </article>\n\n\n    <router-outlet></router-outlet>\n</div>\n<!--main wrapper-->\n"

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "<a class=\"edit-link\" href=\"#\">Edit</a>\n\n<h3>{{ adminresults.title }}</h3>\n\n<p>{{ adminresults.summary }}</p>\n\n<div class=\"row\">\n    <div class=\"col-md-7\">\n        <dashboard-resultscarousel></dashboard-resultscarousel>\n    </div>\n    <div class=\"col-md-5\">\n        <ul>\n            <li><a href=\"\">All assessment results</a></li>\n            <li><a href=\"\">Statement of achievement</a></li>\n            <li><a href=\"\">Find a venue to sit your assessment</a></li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-4 col-top\">\n        <div class=\"card card-top\">\n            <h4 class=\"h4\">{{ dashcontent.heading1 }}</h4>\n        </div>\n    </div>\n    <div class=\"col-md-4 col-top\">\n        <div class=\"card card-top\">\n            <h4 class=\"h4\"><i class=\"far fa-star\">&nbsp;&nbsp;</i>{{ dashcontent.heading2 }}</h4>\n        </div>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"card card-top-rhs\">\n            <h4 class=\"h4\">{{ dashcontent.heading3 }}</h4>\n        </div>\n    </div>\n</div>\n<!--top row-->\n\n<div class=\"row\">\n    <div class=\"col-md-8\">\n        <div class=\"card card-progress\">\n            <dashboard-myprogress></dashboard-myprogress>\n        </div>\n        <div class=\"card card-adminresults\">\n            <dashboard-adminresults></dashboard-adminresults>\n        </div>\n        <div class=\"card\">{{ dashcontent.heading6 }}</div>\n        <div class=\"card\">{{ dashcontent.heading7 }}</div>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"card\">{{ dashcontent.heading8 }}</div>\n    </div>\n</div>\n<!--second row-->"

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"header-toolbar\">\n    <nav class=\"header-toolbar__inner\">\n      <ul>\n        <li>\n          <label>\n            <i class=\"fas fa-search\"></i>\n            <input type=\"search\" name=\"search\" placeholder=\"Search AAT...\">\n          </label>\n        </li>\n        <li [popover]=\"myPopover\">\n          <div class=\"avatar\">\n            <img src=\"https://knowclive.github.io/dashboard/assets/img/john-snow.jpg\" alt=\"\" width=\"48\" height=\"48\">\n          </div>\n\n          <div class=\"member-details\">\n            <div class=\"name\">{{ header.firstname + ' ' + header.lastname}}</div>\n            <div class=\"memberid\">Membership number: 12345678</div>\n          </div>\n\n          <i class=\"fas fa-ellipsis-v\"></i>\n\n        </li>\n      </ul>\n      <popover-content #myPopover\n                       title=\"\"\n                       [closeOnClickOutside]=\"true\"\n                       class=\"header-toolbar__inner__popover\">\n        <ul class=\"profile-menu\">\n          <li><a href=\"\">Profile and account</a></li>\n          <li><a href=\"\">Student membership<br><span>Change role</span></a></li>\n          <li><a href=\"\">Edit my details</a></li>\n          <li><a href=\"\" class=\"ext-link\">Visit the AAT website <i class=\"fas fa-external-link-alt\"></i></a></li>\n          <li><a href=\"\">Log out</a></li>\n        </ul>\n      </popover-content>\n    </nav>\n\n  </div>\n</header>"

/***/ }),

/***/ 544:
/***/ (function(module, exports) {

module.exports = "<p>\n  hero works!\n</p>\n"

/***/ }),

/***/ 545:
/***/ (function(module, exports) {

module.exports = "<a class=\"edit-link\" href=\"#\">Edit</a>\n<h3>{{ myprogress.title }}</h3>\n\n\n<p>{{ myprogress.summary }}</p>\n\n<div class=\"row drawer\" (click)=\"isClassVisible1 = !isClassVisible1;\">\n    <div class=\"col-md-7\"><p>{{ myprogress.item1.title }}</p></div>\n    <div class=\"col-md-2\"><span class=\"tag tag-success\">{{ myprogress.item1.task }}</span></div>\n    <div class=\"col-md-2\"><span>{{ myprogress.item1.status }}</span></div>\n    <div class=\"col-md-1\"><i class=\"fas fa-check-circle\"></i></div>\n</div>\n\n<div class=\"accordion\" [ngClass]=\"{'open': isClassVisible1 }\">\n    <div class=\"row\">\n        <div class=\"col-md-11\"><span class=\"module-title\">{{ myprogress.item1.module.title1 }}</span></div>\n        <div class=\"col-md-1\"><i class=\"fas fa-check\"></i></div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-11\"><span class=\"module-title\">{{ myprogress.item1.module.title2 }}</span></div>\n        <div class=\"col-md-1\"><i class=\"fas fa-check\"></i></div>\n    </div>\n</div>\n\n<div class=\"row drawer\" (click)=\"isClassVisible2 = !isClassVisible2;\">\n    <div class=\"col-md-7\"><p>{{ myprogress.item2.title }}</p></div>\n    <div class=\"col-md-2\"><span class=\"tag tag-success\">{{ myprogress.item2.task }}</span></div>\n    <div class=\"col-md-2\"><span>{{ myprogress.item2.status }}</span></div>\n    <div class=\"col-md-1\"><i class=\"fas fa-check-circle\"></i></div>\n</div>\n\n<div class=\"accordion\" [ngClass]=\"{'open': isClassVisible2 }\">\n    <div class=\"row\">\n        <div class=\"col-md-11\"><span class=\"module-title\">{{ myprogress.item2.module.title1 }}</span></div>\n        <div class=\"col-md-1\"><i class=\"fas fa-check\"></i></div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-11\"><span class=\"module-title\">{{ myprogress.item2.module.title2 }}</span></div>\n        <div class=\"col-md-1\"><i class=\"fas fa-check\"></i></div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-11\"><span class=\"module-title\">{{ myprogress.item2.module.title2 }}</span></div>\n        <div class=\"col-md-1\"><i class=\"fas fa-check\"></i></div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-11\"><span class=\"module-title\">{{ myprogress.item2.module.title2 }}</span></div>\n        <div class=\"col-md-1\"><i class=\"fas fa-check\"></i></div>\n    </div>\n</div>\n\n<div class=\"row drawer\" (click)=\"isClassVisible3 = !isClassVisible3;\">\n    <div class=\"col-md-7\"><p>{{ myprogress.item3.title }}</p></div>\n    <div class=\"col-md-2\"><span class=\"tag tag-my-progress\">{{ myprogress.item3.task }}</span></div>\n    <div class=\"col-md-2\"><span>{{ myprogress.item3.status }}</span></div>\n    <div class=\"col-md-1\"><img src=\"https://knowclive.github.io/dashboard/assets/img/my-progress.svg\" alt=\"\"></div>\n</div>\n\n<div class=\"accordion\" [ngClass]=\"{'open': isClassVisible3 }\">\n    <div class=\"row\">\n        <div class=\"col-md-11\"><span class=\"module-title\">{{ myprogress.item3.module.title1 }}</span></div>\n        <div class=\"col-md-1\"><i class=\"fas fa-check\"></i></div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-11\"><span class=\"module-title\">{{ myprogress.item3.module.title2 }}</span></div>\n        <div class=\"col-md-1\"><i class=\"fas fa-check\"></i></div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\"><span class=\"module-title\">{{ myprogress.item3.module.title3 }}</span></div>\n    </div>\n</div>\n\n<div class=\"row drawer\" (click)=\"isClassVisible4 = !isClassVisible4;\">\n    <div class=\"col-md-7\"><p>{{ myprogress.item4.title }}</p></div>\n    <div class=\"col-md-2\"><span class=\"tag tag-pending\">{{ myprogress.item4.task }}</span></div>\n    <div class=\"col-md-2\"><span>{{ myprogress.item4.status }}</span></div>\n    <div class=\"col-md-1\"><i class=\"far fa-circle\"></i></div>\n</div>\n\n<div class=\"accordion\" [ngClass]=\"{'open': isClassVisible4 }\">\n    <div class=\"row\">\n        <div class=\"col-md-12\"><span class=\"module-title\">{{ myprogress.item4.module.title1 }}</span></div>\n\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\"><span class=\"module-title\">{{ myprogress.item4.module.title2 }}</span></div>\n\n    </div>\n</div>\n\n\n\n\n<!-- User input add new items functionality-->\n\n<!--<div>-->\n    <!--<h2> Grocery list manager </h2>-->\n\n    <!--<ul class=\"list-group\">-->\n        <!--<li *ngFor=\"let task of tasks\" class=\"list-group-item\">-->\n            <!--<span> {{ task.name }} </span>-->\n        <!--</li>-->\n    <!--</ul>-->\n\n\n    <!--<div class=\"row\">-->\n        <!--<div class=\"col-xs-6 col-md-4\">-->\n            <!--<div class=\"input-group\">-->\n                <!--<input type=\"text\" class=\"form-control\" placeholder=\"enter grocery items\" [(ngModel)]=\"task\" />-->\n                <!--<div class=\"input-group-btn\">-->\n                    <!--<button class=\"btn btn-primary\" type=\"button\" (click)=\"onClick()\">-->\n                        <!--<span class=\"glyphicon glyphicon-ok\"></span>-->\n                    <!--</button>-->\n                <!--</div>-->\n            <!--</div>-->\n        <!--</div>-->\n    <!--</div>-->\n\n<!--</div>-->"

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports = "<ngx-carousel\n        [inputs]=\"carouselOne\"\n        (carouselLoad)=\"myfunc($event)\">\n    <ngx-item NgxCarouselItem>\n        <img src=\"/assets/img/results/ring.svg\" alt=\"\">\n        <h4>Passed BK AQ Congrats.</h4>\n    </ngx-item>\n    <ngx-item NgxCarouselItem>\n        <img src=\"/assets/img/results/ring.svg\" alt=\"\">\n        <h4>Oh no BK AQ sad face :(</h4>\n    </ngx-item>\n    <ngx-item NgxCarouselItem>\n        <img src=\"https://knowclive.github.io/dashboard/assets/img/results/ring.svg\" alt=\"\">\n        <h4>Almost there BK AQ try harder</h4>\n    </ngx-item>\n    <button NgxCarouselPrev class='leftRs'>&lt;</button>\n    <button NgxCarouselNext class='rightRs'>&gt;</button>\n</ngx-carousel>\n"

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports = "<!--<h1 class=\"h1-hero\"> H1 hero</h1>-->\n\n<!--<h1> H1 {{ page.title }}</h1>-->\n\n\n<!--<h2>H2 title</h2>-->\n<!--<h3>H3 title</h3>-->\n<!--<h4>H4 title</h4>-->\n<!--<p> {{ page.subtitle }}</p>-->\n<!--<p> {{ page.content }}</p>-->\n\n<!--<img class=\"fullBg\" fullpage [src]=\"page.image\">-->\n"

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(341);


/***/ })

},[581]);
//# sourceMappingURL=main.bundle.js.map