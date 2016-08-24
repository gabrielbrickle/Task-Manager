module.exports = function(app) {
    app.factory('TaskService', ['$http', '$location', function($http, $location) {

        let quoteArray = [];
        let meetingArray = [];
        let oppsArray = [];
        let taskArray = [];

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
        }
    }]);
}
