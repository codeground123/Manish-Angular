myApp.controller("parentController", function ($scope, $rootScope) {

  
    $rootScope.rootMessage = "root Message";

    $scope.message = "Parent message";

    $scope.$on("update_parent_controller", function (evt, message) {

        $scope.message = message;
    });

    $scope.$watch("message", function(){

        $scope.$broadcast("parent_message_changed", "parent changed successfully");

    });


});
