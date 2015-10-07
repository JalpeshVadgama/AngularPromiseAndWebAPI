/// <reference path="../angular.min.js" />

//creating angular module
var app = angular.module("promiseApp", "[]");

app.controller("employeesCtrl", function($scope,employeeService) {

});

app.factory("EmployeeService",function() {
    var promise = $http.get("/api/employees");
    
});

