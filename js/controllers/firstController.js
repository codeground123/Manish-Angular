myApp.controller("firstController", function ($scope, $rootScope) {


    $scope.updateSecond = function () {
        $scope.message = "second contrller udpated"
        $rootScope.$broadcast("upate_second_controller", $scope.message);
    };

});
