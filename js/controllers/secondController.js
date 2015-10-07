myApp.controller("secondController", function ($scope) {

    $scope.message = ""
    $scope.$on("upate_second_controller", function (evt, message) {
        $scope.message = message;

    });
});
