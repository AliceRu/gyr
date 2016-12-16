'use strict';

/**
 * @ngdoc overview
 * @name baiduNewsApp
 * @description
 * # baiduNewsApp
 *
 * Main module of the application.
 */
angular
  .module('baiduNewsApp', ['new'])
  .controller("news",["$scope","$http",function($scope,$http){
   $http({
     url:"http://47.90.20.200:1602/news1/",
     method:"get"
   }).then(function(e){
     $scope.data=e.data
   console.log($scope.data)
   },function(e){})
  $http({
     url:"http://47.90.20.200:1602/news-img1/",
     method:"get"
   }).then(function(e){
     $scope.imgs=e.data
   console.log($scope.imgs)
   },function(e){})
  
  }])
  .controller("news2",["$scope","$http",function($scope,$http){
   $http({
     url:"http://47.90.20.200:1602/news2/",
     method:"get"
   }).then(function(e){
     $scope.data=e.data
   console.log($scope.data)
   },function(e){})
  $http({
     url:"http://47.90.20.200:1602/news-img2/",
     method:"get"
   }).then(function(e){
     $scope.imgs=e.data
   console.log($scope.imgs)
   },function(e){})
  
  }])
  