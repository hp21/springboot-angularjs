var app = angular.module('app', ['ngRoute','ngResource']);
app.config(function($routeProvider){
    $routeProvider
        .when('/users',{
            templateUrl: '/views/users.html',
            controller: 'usersController'
        })
        .when('/roles',{
            templateUrl: '/views/roles.html',
            controller: 'rolesController'
        })
        .when('/hp1',{
            templateUrl: '/views/hp1.html',
            controller: 'hp1Controller'
        })
        .when('/hp',{
            templateUrl: '/views/hp.html',
            controller: 'hpController'
        })
        .when('/form3',{
            templateUrl: '/views/form3.html',
            controller: 'form3Controller as ctrl'
        })
        .when('/formvalidation',{
            templateUrl: '/views/formvalidation.html',
            controller: 'formvalidationController as fctrl'
        })
        .when('/notesapp',{
            templateUrl: '/views/notesapp.html',
                })
        .when('/tabs',{
            templateUrl: '/views/tabs.html',
            controller: 'tabsController'
        })
        .when('/nested',{
            templateUrl: '/views/nestedform.html',
            controller: 'nestedFormController'
        })
        .when('/checkbox',{
            templateUrl: '/views/checkbox.html',
            controller: 'checkboxController as cctrl'
                })
        .otherwise(
            { redirectTo: '/'}
        );
});

