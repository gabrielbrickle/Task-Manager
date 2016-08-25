module.exports = function(app) {
    app.controller('TaskController', ['TaskService', '$scope', function(TaskService, $scope) {

        $scope.quoteArray = TaskService.getQuotes();
        $scope.weeklyQuoteArray = TaskService.getWeeklyQuotes();
        $scope.dailyQuoteArray = TaskService.getDailyQuotes();
        $scope.monthlyQuoteArray = TaskService.getMonthlyQuotes();

        $scope.taskArray = TaskService.getTasks();
        $scope.dailyTaskArray = TaskService.getDailyTasks();
        $scope.weeklyTaskArray = TaskService.getWeeklyTasks();
        $scope.monthlyTaskArray = TaskService.getMonthlyTasks();

        $scope.oppsArray = TaskService.getOpportunities();
        $scope.dailyOppsArray = TaskService.getDailyOpportunities();
        $scope.weeklyOppsArray = TaskService.getWeeklyOpportunities();
        $scope.monthlyOppsArray = TaskService.getMonthlyOpportunities();

    }]);
}
