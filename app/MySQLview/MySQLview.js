'use strict';

angular.module('myApp.MySQLview', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/MySQLview', {
    templateUrl: 'MySQLview/MySQLview.html',
    controller: 'MySQLviewCtrl'
  });
}])


.controller('MySQLviewCtrl', function ($scope, $http){
    $scope.url = 'http://localhost:8080/';
    sendRequests($scope, $http);
})



//Get all books from author
function getBooksByAuthor(author, db, $http){
    function sendAuthorRequest($scope){
        $http.post($scope.url+db+"/"+author).then(function successCallBack(res){
            $scope.booksByAuthor = res.data;
        }), function errorCallBack(res){
            alert("øv")
        }
    }
};

// get geolocation of book
function getLocationByBook(title, db, $http){
    function sendBookRequest($scope){
        $http.post($scope.url+db+"/"+title).then(function successCallBack(res){
            $scope.geolocations = res.data;
        }), function errorCallBack(res){
            alert("øv")
        }
    }
};

//For each book, get geolocation (uses getLocationByBook)
function getLocationByBooks(db, $scope, $http){
    for(var book in $scope.booksByAuthor){
        getLocationByBook(book.title, db, $http)
    }
};

//"main" method
function sendRequests($scope, $http) {
    getSelectedDb($scope);
    getBooksByAuthor(
        document.getElementById("authorInput").value,
        $scope.selectedDb
    );
    getLocationByBooks($scope.selectedDb, $scope, $http);
    initMap($scope.geolocations)
};

function getSelectedDb($scope){
    if(document.getElementById('mysqlDB').checked){
        $scope.selectedDb = "mysql"
    }
    if(document.getElementById('graphDB').checked){
        $scope.selectedDb = "graph"
    }
};

function initMap(coordinates) {
    //var uluru = {lat: -25.363, lng: 131.044};
    for(var data in coordinates) {
        var pin = {lat: data.latitude, lng: data.longitude}
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: pin
        });
        var marker = new google.maps.Marker({
            position: pin,
            map: map
        });
    }
};








