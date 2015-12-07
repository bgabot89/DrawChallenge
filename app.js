// var app = angular.module('ui.router', 'ngResource', 'angApp');
//inject ngFileUpload and ngImgCrop directives and services.
var app = angular.module('angApp', ['ui.router']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
    // return to book-index if bad route request
    $urlRouterProvider.otherwise("/");
    $stateProvider
    .state('pics-show', {
        url: '/',
        templateUrl: "templates/pics-show.html",
        controller: "MainCtrl"
    });
});

app.controller('MainCtrl', function ($scope) {

    $scope.pictures = [
    {id:1, name: 'MOCK...YEAH!!!...-ING...YEAH!!!-BIRD....YEAH!!!', day:1, comment:"YEAH! yeah YEAH!", image:"http://www.easy-drawings-and-sketches.com/images/how-to-draw-a-bird06.jpg", timelapse: "4 hours"},
    {id:2, name: 'Parrot', day:2, comment:"This was done on day 2",image:"https://s-media-cache-ak0.pinimg.com/236x/22/41/dc/2241dc0dfcd9e2685518fcad641a1a94.jpg", timelapse: "3 hours"}
    ];

    $scope.addPicture = function(){
        console.log($scope.newPicture);
        $scope.pictures.id++;
        $scope.pictures.push($scope.newPicture);
        $scope.newPicture = {};

    };

});