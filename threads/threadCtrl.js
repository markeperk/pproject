var app = angular.module('excCrit');
  app.controller('ThreadCtrl', function ($scope, threadRef, commentsRef) {
    var thread = threadRef.$asObject();
    $scope.threadRef = threadRef;
    $scope.commentsRef = commentsRef;

    thread.$bindTo($scope, 'thread');
    $scope.comments = commentsRef.$asArray();

    $scope.createComment = function (username, text) {
      $scope.comments.$add({
        username: username,
        text: text
      });
    };
  });