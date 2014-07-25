'use strict';

var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/',
            {
                templateUrl: 'partials/home.html',
                controller: 'MyCtrl'
            });
        $routeProvider.when('/design',
            {
                templateUrl: 'partials/design.html'
            });
        $routeProvider.when('/projects',
            {
                templateUrl: 'partials/projects.html'
            });
        $routeProvider.when('/resume',
            {
                templateUrl: 'partials/resume.html'
            });
        $routeProvider.when('/school',
            {
                templateUrl: 'partials/school.html'
            });
        $routeProvider.otherwise({redirectTo: '/'});
    }]
);