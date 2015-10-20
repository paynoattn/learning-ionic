// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('tabs', {
    url: '/tab',
    abstract: true,
    templateUrl: 'view/tabs.html'
  })
  .state('tabs.home', {
    url: '/home',
    views: {
      'home-tab': {
        templateUrl: 'view/welcome.html',
        controller: 'welcomeController as welcome',
      }
    }
  })
  .state('tabs.list', {
    url: '/list',
    views: {
      'list-tab': {
        templateUrl: 'view/list.html',
        controller: 'listController as list',
      }
    }
  })
  .state('tabs.detail', {
    url: '/list/:aId',
    views: {
      'list-tab': {
        templateUrl: 'view/detail.html',
        controller: 'listController as list',
      }
    }
  })
  $urlRouterProvider.otherwise('/tab/home');
})

