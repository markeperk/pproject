var app = angular.module('excCrit');

app.controller('logCtrl', function($scope, EnvironmentService, $location) {
	$scope.env = EnvironmentService.getEnv();
	$scope.logMeIn = function(username) {
    	// $location.path('/threads/' + username.uid)
    	EnvironmentService.saveUserName(username);
    	$location.path('/threads');
	};
	$scope.username = '';
});