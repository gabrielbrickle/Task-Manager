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
