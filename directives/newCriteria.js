var app = angular.module('excCrit');

app.controller('ThreadCtrl', function ($scope, threadRef, commentsRef) {
    var thread = threadRef.$asObject();
    $scope.threadRef = threadRef;
    $scope.commentsRef = commentsRef;

    thread.$bindTo($scope, 'thread');
    $scope.comments = commentsRef.$asArray();

    $scope.createComment = function (newCommentText) {
      $scope.comments.$add({
        username: username,
        text: newCommentText
      });
      console.log(newCommentText);
    };
  });


app.directive('newCriteria', function() {
	return {
		controller: function($scope) {

			console.log($scope.threadRef);
			$scope.showInfo = function(thread){
					$scope.showInfo[thread.$id] = !$scope.showInfo[thread.$id];
				}
		},
		templateUrl: 'directives/newCriteria.html'
	}
});


