'use strict';

angular.module('myApp.MySQLview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/MySQLview', {
    templateUrl: 'MySQLview/MySQLview.html',
    controller: 'MySQLviewCtrl'
  });
}])

.controller('MySQLviewCtrl', function ($scope, $http){
    var url = 'http://localhost:8080/mysql/cities';
    $http.get(url).then(function successCallBack(res){
      $scope.data = res.data;
    }), function errorCallBack(res){
      alert("Øv");
    }
});



