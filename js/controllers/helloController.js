﻿myApp.controller("firstController", function ($scope) {


    $scope.employees = [
        { firstName: "Phani", "lastName": "Kumar" },
        { firstName: "Raj", "lastName": "Kumar" },
        { firstName: "Kunal", "lastName": "Kumar" },
        { firstName: "Nitesh", "lastName": "Kumar" },
        { firstName: "Sundar", "lastName": "Kumar" },
        { firstName: "Ganga", "lastName": "Kumar" }
    ];

    $scope.insertEmp = function () {

        $scope.employees.push(
            { firstName: $scope.firstEmployee, lastName: $scope.lastEmployee }
            );
    };




});