module.exports = function(app) {
    app.controller('TaskController', ['TaskService', '$scope', '$location', function(TaskService, $scope, $location) {

        $scope.quoteArray = TaskService.getQuotes();
        $scope.meetingArray = TaskService.getMeetings();
        $scope.taskArray = TaskService.getTasks();
        $scope.oppsArray = TaskService.getOpportunities();



    }]);
}
