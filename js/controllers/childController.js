myApp.controller("childController", function ($scope, $rootScope) {


    $scope.recRootMessage = $rootScope.rootMessage;

    $scope.message = "I am child controller";
    $scope.newMessage = "";
    $scope.updateParent = function () {
        $scope.childMessage = "updating parent from child controller";
        $scope.$emit("update_parent_controller", $scope.childMessage);
    };

    $scope.$on("parent_message_changed", function (evt, message) {
        $scope.newMessage = message;

    });
});
