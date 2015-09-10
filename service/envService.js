var app = angular.module('excCrit');

app.service('EnvironmentService', function EnvironmentService($window) {
	return {
		getEnv: function() {
			return $window.env;
		},
		getUserName: function() {
			return $window.localStorage.getItem('username');
		},
		saveUserName: function(username) {
			return $window.localStorage.setItem('username', username);
		}
	}
});
