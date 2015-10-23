'use strict';

angular.module('starter').controller('listController', ['$scope', '$http', '$state', function($scope, $http, $state){
  $http.get('../model/data.json').success(function(data) {
    $scope.artists = data.artists;
    $scope.whichArtist = $state.params.aId;

    $scope.doRefresh = function() {
      $http.get('../model/data.json').success(function(data) {
        $scope.artists = data.artists;
        $scope.$broadcast('scroll.refreshComplete');
      })
    }

    $scope.onItemDelete = function(artist) {
      $scope.artists.splice($scope.artists.indexOf(artist), 1);
    }

    $scope.toggleStar = function(artist) {
      artist.star = !artist.star;
    }

    $scope.moveItem = function(artist, fromIndex, toIndex) {
      //Move the item in the array
      $scope.artists.splice(fromIndex, 1);
      $scope.artists.splice(toIndex, 0, artist);
    };
  })
}])