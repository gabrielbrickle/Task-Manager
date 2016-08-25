module.exports = function(app) {
    app.factory('TaskService', ['$http', '$location', function($http, $location) {

        let quoteArray = [];
        let meetingArray = [];
        let oppsArray = [];
        let taskArray = [];

        let weeklyQuoteArray = [];
        let weeklyMeetingArray = [];
        let weeklyOppsArray = [];
        let weeklyTaskArray = [];

        let dailyQuoteArray = [];
        let dailyMeetingArray = [];
        let dailyOppsArray = [];
        let dailyTaskArray = [];

        let monthlyQuoteArray = [];
        let monthlyMeetingArray = [];
        let monthlyOppsArray = [];
        let monthlyTaskArray = [];

        $http({
            method: 'GET',
            url: './api/quotes.json',
            responseType: "json"
        }).then(function(response) {
            let quotes = response.data;
            angular.copy(quotes, quoteArray)
            quotes.forEach(function(element) {
                let currentDate = element.expiration_date;
                var moment = require('moment')
                var todaysDate = moment("05/14/2016");
                var date2 = moment(currentDate)
                var answer = moment(todaysDate).diff(date2, "days")
                if (answer === 0) {
                    dailyQuoteArray.push(answer)
                }
                if (answer >= -7 && answer <= 0) {
                    weeklyQuoteArray.push(answer)
                }
                if (answer >= -30 && answer <= 0) {
                    monthlyQuoteArray.push(answer)
                }
            })
        });
        $http({
            method: 'GET',
            url: './api/opportunities.json',
        }).then(function(response) {
            let opportunities = response.data;
            angular.copy(opportunities, oppsArray)
            opportunities.forEach(function(element) {
                let currentDate = element.expected_close;
                var moment = require('moment')
                var todaysDate = moment("05/14/2016");
                var date2 = moment(currentDate)
                var answer = moment(todaysDate).diff(date2, "days")
                if (answer === 0) {
                    dailyOppsArray.push(answer)
                }
                if (answer >= -7 && answer <= 0) {
                    weeklyOppsArray.push(answer)
                }
                if (answer >= -30 && answer <= 0) {
                    monthlyOppsArray.push(answer)
                }
            })
        });

        $http({
            method: 'GET',
            url: './api/tasks.json',
        }).then(function(response) {
            let tasks = response.data;
            angular.copy(tasks, taskArray)
            tasks.forEach(function(element) {
                let currentDate = element.due_date;
                var moment = require('moment')
                var todaysDate = moment("05/14/2016");
                var date2 = moment(currentDate)
                var answer = moment(todaysDate).diff(date2, "days")
                if (answer === 0) {
                    dailyTaskArray.push(answer)
                }
                if (answer >= -7 && answer <= 0) {
                    weeklyTaskArray.push(answer)
                }
                if (answer >= -30 && answer <= 0) {
                    monthlyTaskArray.push(answer)
                }
            })
        });


        return {
            getQuotes: function() {
                return quoteArray;
            },
            getDailyQuotes: function() {
                return dailyQuoteArray;
            },
            getWeeklyQuotes: function() {
                return weeklyQuoteArray;
            },
            getMonthlyQuotes: function() {
                return monthlyQuoteArray;
            },
            getOpportunities: function() {
                return oppsArray;
            },
            getWeeklyOpportunities: function() {
                return weeklyOppsArray;
            },
            getDailyOpportunities: function() {
                return dailyOppsArray;
            },
            getMonthlyOpportunities: function() {
                return monthlyOppsArray;
            },
            getTasks: function() {
                return taskArray;
            },
            getWeeklyTasks: function() {
                return weeklyTaskArray;
            },
            getDailyTasks: function() {
                return dailyTaskArray;
            },
            getMonthlyTasks: function() {
                return monthlyTaskArray;
            },
        }
    }]);
}
