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
        .otherwise(
            { redirectTo: '/'}
        );
});

