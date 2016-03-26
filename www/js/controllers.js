angular.module('starter.controllers', [])

.controller('NewsCtrl', function($scope) {})

.controller('SearchCtrl', function($scope, Photos) {
  $scope.photos = Photos.all();
  })

.controller('SignInCtrl', function($scope, LoginService, $ionicPopup, $state) {
  $scope.data = {};

  $scope.signIn = function() {
    LoginService.signinUser($scope.data.email, $scope.data.password).success(function(data) {
      $state.go('tab.news');
    }).error(function(data) {
      var alertPopup = $ionicPopup.alert({
        title: 'Login Failed!',
        template: 'Please check your credentials!'
      });
    });
  };
})

.controller('AlertsCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

    $scope.alerts = [
      {
        id: 1,
        name: 'Perry Perrie',
        friend: 'img/perry.png',
        action: 'hugged your photo',
        post: 'img/butterfly.jpeg'
      }, {
        id: 2,
        name:'Adam Bower',
        friend: 'img/adam.jpg',
        action: 'commented: Love it!',
        post: 'img/trees.jpeg'
      }
    ];
})

.controller('AccountCtrl', function($scope, Photos) {
    $scope.photos = Photos.all();
    $scope.remove = function(photo) {
      Photos.remove(photo);
    };
});
