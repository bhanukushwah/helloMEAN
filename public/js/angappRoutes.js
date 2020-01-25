angular.module('angappRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider

        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })

        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        })
        .when('/add', {
            templateUrl: 'views/add.html',
            controller: 'AddController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
        .when('/show', {
            templateUrl: 'views/show.html',
            controller: 'ShowController'
        })

        .when('/update',{
            templateUrl: 'views/update.html',
            controller: 'UpdateController'
        })
        .when('/update/:id', {
            templateUrl: 'views/edit_update.html',
            controller: 'UpdateController'
        });
    
    $locationProvider.html5Mode(true);
}]);