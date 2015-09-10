var app = angular.module('excCrit', ['firebase', 'ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/login', {
			templateUrl: 'login/login.html',
			controller: 'logCtrl'
		})
		.when('/threads', {
			templateUrl: 'threads/threads.html',
			controller: 'ThreadsCtrl',
			resolve: {
			    threadsRef: function (ThreadService) {
			      return ThreadService.getThreads();
    			}
    		}
		})
		.when('/threads/:threadId', {
			  templateUrl: 'threads/thread.html',
			  controller: 'ThreadCtrl',
			  resolve: {
		    	threadRef: function (ThreadService, $route) {
			      return ThreadService.getThread($route.current.params.threadId);
			    },
			    commentsRef: function (ThreadService, $route) {
			      return ThreadService.getComments($route.current.params.threadId);
			    }
			}
		})		
		.otherwise('/login')
});

app.run(function($rootScope, $location, EnvironmentService) {
	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		var username = EnvironmentService.getUserName();
		console.log(username);
		if (username) {		
			$rootScope.username = username;
		}
		else {
			$location.path('/login');
		}
	});
});



		// $rootScope.users = ['Mark'];
		// if (EnvironmentService.getUserName()) {
		// 	for (var i = 0; i < $rootScope.users.length; i++) {
		// 		if ($rootScope.users[i] === $scope.username) {
		// 			$rootScope.username = EnvironmentService.getUserName(); 
		// 		}
		// 	}


