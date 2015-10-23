'use strict';

angular.module('starter').controller('calendarController', ['$scope', '$http', '$state', function($scope, $http, $state){
  $http.get('../model/data.json').success(function(data) {
    $scope.calendar = data.calendar;

    $scope.doRefresh = function() {
      $http.get('../model/data.json').success(function(data) {
        $scope.calendar = data.calendar;
        $scope.$broadcast('scroll.refreshComplete');
      })
    }

    $scope.onItemDelete = function(dayIndex, event) {
      $scope.calendar[dayIndex].schedule.splice($scope.calendar[dayIndex].schedule.indexOf(event), 1);
    }

    $scope.toggleStar = function(event) {
      event.star = !event.star;
      console.log(event);
    }
  })
}])