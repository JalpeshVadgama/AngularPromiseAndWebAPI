/// <reference path="../angular.min.js" />

//creating angular module
var app = angular.module("promiseApp", "[]");

app.service("employeeService", function () {
    alert("service");
    this.GetEmployees = function () {
      
        return $http.get("api/employess")
                    //here then acts as prmise
                    .then(function (response) {
                        alert("here4");
                        if (typeof response.data === "object") {
                            return response.data;
                        } else {
                            return $q.reject(response.data);
                        }

                    }, function (response) {

                        return $q.reject(response.data);
                    });

    }
});

app.controller("employeesCtrl", function ($scope) {
    alert("controller");
});



