let app = angular.module('taskmanager', ['ngRoute']);

require('./controllers/TaskController')(app);
require('./services/TaskService')(app);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/overview',
        })
        .when('/overview', {
            controller: 'TaskController',
            templateUrl: 'templates/overview.html',
        })
        .when('/today', {
            controller: 'TaskController',
            templateUrl: 'templates/today.html',
        })
        .when('/week', {
            controller: 'TaskController',
            templateUrl: 'templates/week.html',
        })
        .when('/month', {
            controller: 'TaskController',
            templateUrl: 'templates/month.html',
        })

}]);
