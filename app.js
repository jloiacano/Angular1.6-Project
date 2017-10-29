/*global angular*/

(function () {
    "use strict";

    //    Creates the module nlecaApp and sets it to make use of the module ngRoute
    //    ngRoute is supplied through the googleAPI: angular-route.js defined in index.html
    var app = angular.module("nlecaApp", ["ngRoute"]);

//    describes the functionality of ngRoute
    function functionToBePassedToConfig($routeProvider, $locationProvider) {
        $routeProvider.when("/", {templateUrl: "templates/newsletter.html"})
            .when("/people", {templateUrl: "templates/people.html"})
            .when("/pics", {templateUrl: "templates/pics.html"})
            .when("/kids", {templateUrl: "templates/kids.html"})
            .when("/resources", {templateUrl: "templates/resources.html"})
            .when("/calendar", {templateUrl: "templates/calendar.html"})
            .when("/previousNewsletters", {templateUrl: "templates/previousNewsletters.html"})
            .when("/register", {templateUrl: "templates/register.html"})
            .when("/login", {templateUrl: "templates/login.html"});
    }

//    configures ngRoute with the function above.
//    It knows it is configuring ngRoute because of the contract of the function passed to it
    app.config(functionToBePassedToConfig);
//    function to be passed could itself be the argument to .config without the function being named.
//    if there were no modules being passed to this module that required configuration, a .config function would not have to be called.

}());
