(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app) {
    app.controller('TaskController', ['TaskService', '$scope', '$location', function(TaskService, $scope, $location) {

        $scope.quoteArray = TaskService.getQuotes();
        $scope.meetingArray = TaskService.getMeetings();
        $scope.taskArray = TaskService.getTasks();
        $scope.oppsArray = TaskService.getOpportunities();



    }]);
}

},{}],2:[function(require,module,exports){
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

},{"./controllers/TaskController":1,"./services/TaskService":3}],3:[function(require,module,exports){
module.exports = function(app) {
    app.factory('TaskService', ['$http', '$location', function($http, $location) {

        let quoteArray = [];
        let meetingArray = [];
        let oppsArray = [];
        let taskArray = [];

        // var moment = require('momentjs')

        var todaysDate = 1
        var date2 = 2

        var answer = moment(todaysDate).diff(date2).format()

        console.log("this is the answer",answer);

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/quotes.json',
            responseType: "json"
        }).then(function(response) {
            let quotes = response.data;
            console.log("object with userss", quotes);
            angular.copy(quotes, quoteArray)
        });

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/meetings.json',
            // responseType: "json"
        }).then(function(response) {
            let meetings = response.data;
            console.log("object with userss", meetings);
            angular.copy(meetings, meetingArray)
        });

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/opportunities.json',
            // responseType: "json"
        }).then(function(response) {
            let opportunities = response.data;
            console.log("object with userss", opportunities);
            angular.copy(opportunities, oppsArray)
        });
        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/tasks.json',
            // responseType: "json"
        }).then(function(response) {
            let tasks = response.data;
            console.log("object with userss", tasks);
            angular.copy(tasks, taskArray)

            tasks.forEach(function(element) {
                console.log(element.due_date);
                if (element.due_date === "5/15/16" || element.due_date) {

                }
            })
        });


        return {
            getQuotes: function() {
                return quoteArray;
            },
            getMeetings: function() {
                return meetingArray;
            },
            getOpportunities: function() {
                return oppsArray;
            },
            getTasks: function() {
                return taskArray;
            },
            getTotal: function() {
                return totalArray;
            }
        }
    }]);
}

},{}]},{},[2])